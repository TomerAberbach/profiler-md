# Sampling profile diff

Collected 6,594 → 5,975 samples (-619 samples, -9.4%).

| Category          | Change | Delta |             % |       Samples |
| ----------------- | -----: | ----: | ------------: | ------------: |
| Ours              |  -9.3% |  -268 |         43.6% | 2,876 → 2,608 |
| Native            | -12.3% |  -349 | 42.9% → 41.5% | 2,826 → 2,477 |
| Standard library  |  -8.9% |   -64 |         10.9% |     717 → 653 |
| JIT               | +52.6% |   +60 |   1.7% → 2.9% |     114 → 174 |
| Compiler          |  +3.3% |    +2 |   0.9% → 1.0% |       60 → 62 |
| Garbage collector |   0.0% |     0 |         <0.1% |             1 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
├── 6,177 → 5,566 samples (93.7% → 93.2%) run() at java.util.concurrent.ForkJoinWorkerThread
│   └── 6,177 → 5,566 samples (93.7% → 93.2%) runWorker(ForkJoinPool$WorkQueue) at java.util.concurrent.ForkJoinPool
│       ├── … 5,018 → 4,589 samples (76.1% → 76.8%) doExec() at java.util.concurrent.ForkJoinTask
│       │   ├── … 4,965 → 4,542 samples (75.3% → 76.0%) exec() at java.util.concurrent.RecursiveTask
│       │   │   └── 4,964 → 4,541 samples (75.3% → 76.0%) compute() at org.renaissance.jdk.concurrent.JavaKMeans$RangedTask
│       │   │       ├── 2,009 → 1,736 samples (30.5% → 29.1%) computeDirectly() at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│       │   │       │   ├── … 1,498 → 1,221 samples (22.7% → 20.4%, self 6.3% → 6.0%) findNearestCentroid() at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│       │   │       │   │   ├── 991 → 790 samples (15.0% → 13.2%, self 14.7% → 13.0%) distance(Double[], Double[])
│       │   │       │   │   └── 78 → 47 samples (1.2% → 0.8%) get(int) at java.util.ArrayList
│       │   │       │   │       ├── 60 → 42 samples (0.9% → 0.7%) elementData(int)
│       │   │       │   │       └── 17 → 4 samples (0.3% → 0.1%) checkIndex(int, int) at java.util.Objects
│       │   │       │   └── … 510 → 514 samples (7.7% → 8.6%, self 2.1%) collectClusters(int[]) at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│       │   │       │       ├── 178 → 176 samples (2.7% → 2.9%, self 2.3% → 2.2%) computeIfAbsent(Object, Function) at java.util.HashMap
│       │   │       │       │   └── … 0 → 12 samples (0.0% → 0.2%) pthread_jit_write_protect_np at libsystem_pthread.dylib
│       │   │       │       └── 194 → 212 samples (2.9% → 3.5%) 3 more callees, led by (2.3% → 2.7%) add(Object) at java.util.ArrayList
│       │   │       ├── 1,505 → 1,473 samples (22.8% → 24.7%) computeDirectly() at org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│       │   │       │   └── … 1,504 → 1,471 samples (22.8% → 24.6%, self 7.9% → 8.7%) vectorSum() at org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│       │   │       │       ├── 899 → 883 samples (13.6% → 14.8%, self 12.4% → 13.5%) accumulate(Double[], double[])
│       │   │       │       │   └── 84 → 79 samples (1.3%) doubleValue() at java.lang.Double
│       │   │       │       └── 85 → 62 samples (1.3% → 1.0%) get(int) at java.util.ArrayList
│       │   │       │           └── 84 → 62 samples (1.3% → 1.0%, self 2.5% → 2.1% globally) elementData(int)
│       │   │       ├── 891 → 724 samples (13.5% → 12.1%) join() at java.util.concurrent.ForkJoinTask
│       │   │       │   └── 886 → 719 samples (13.4% → 12.0%) awaitDone(int, long)
│       │   │       │       ├── … 823 → 660 samples (12.5% → 11.0%) __psynch_cvwait at libsystem_kernel.dylib
│       │   │       │       └── 39 → 36 samples (0.6%) helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean) at java.util.concurrent.ForkJoinPool
│       │   │       ├── … 493 → 548 samples (7.5% → 9.2%) merge(Object, Object, BiFunction) at java.util.HashMap
│       │   │       │   ├── 69 → 111 samples (1.0% → 1.9%, self 1.7% → 2.8% globally) zero_blocks
│       │   │       │   └── 419 → 427 samples (6.4% → 7.1%) 3 more callees, led by (5.4% → 6.2%) apply(Object, Object) at org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f0011a7490
│       │   │       └── 17 → 16 samples (0.3%) fork() at java.util.concurrent.ForkJoinTask
│       │   └── … 41 → 35 samples (0.6%) __psynch_cvsignal at libsystem_kernel.dylib
│       └── 1,127 → 949 samples (17.1% → 15.9%) awaitWork(ForkJoinPool$WorkQueue)
│           ├── … 990 → 860 samples (15.0% → 14.4%, self 30.3% → 27.9% globally) __psynch_cvwait at libsystem_kernel.dylib
│           └── 116 → 73 samples (1.8% → 1.2%) 3 more callees, led by (1.8% → 1.2%) parkUntil(long) at java.util.concurrent.locks.LockSupport
├── … 355 → 339 samples (5.4% → 5.7%) Thread::call_run at libjvm.dylib
│   ├── 191 → 182 samples (2.9% → 3.0%) WorkerThread::run
│   │   ├── 80 → 68 samples (1.2% → 1.1%) semaphore_wait_trap at libsystem_kernel.dylib
│   │   ├── … 7 → 0 samples (0.1% → 0.0%) _platform_memset at libsystem_platform.dylib
│   │   └── 104 → 114 samples (1.6% → 1.9%) 13 more callees, led by (0.7% → 1.0%) G1FullGCMarkTask::work
│   └── 164 → 157 samples (2.5% → 2.6%) 4 more callees, led by (1.6% → 2.1%) JavaThread::thread_main_inner
└── 62 → 68 samples (0.9% → 1.1%) 11 more root frames, led by (0.7% → 1.0%) main(String[]) at org.renaissance.core.Launcher
```

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |            % |   Samples | Function                                                        | Location                                                  |
| ------: | ----: | -----------: | --------: | --------------------------------------------------------------- | --------------------------------------------------------- |
|  +54.1% |   +59 |  1.7% → 2.8% | 109 → 168 | `zero_blocks`                                                   | `<unknown>`                                               |
| +106.7% |   +16 |  0.2% → 0.5% |   15 → 31 | `pthread_jit_write_protect_np`                                  | `libsystem_pthread.dylib`                                 |
| +550.0% |   +11 | <0.1% → 0.2% |    2 → 13 | `G1FullGCMarker::follow_object`                                 | `libjvm.dylib`                                            |
|  +17.4% |    +8 |  0.7% → 0.9% |   46 → 54 | `_platform_bzero`                                               | `libsystem_platform.dylib`                                |
| +200.0% |    +8 |  0.1% → 0.2% |    4 → 12 | `ObjArrayAllocator::initialize`                                 | `libjvm.dylib`                                            |
|  +11.3% |    +6 |  0.8% → 1.0% |   53 → 59 | `add(Object, Object[], int)`                                    | `java.util.ArrayList`                                     |
| +200.0% |    +6 | <0.1% → 0.2% |     3 → 9 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` | `libjvm.dylib`                                            |
| +250.0% |    +5 | <0.1% → 0.1% |     2 → 7 | `putVal(int, Object, Object, boolean, boolean)`                 | `java.util.HashMap`                                       |
|  +11.4% |    +4 |  0.5% → 0.7% |   35 → 39 | `__psynch_mutexwait`                                            | `libsystem_kernel.dylib`                                  |
| +400.0% |    +4 | <0.1% → 0.1% |     1 → 5 | `Parker::park`                                                  | `libjvm.dylib`                                            |
|  +66.7% |    +4 |  0.1% → 0.2% |    6 → 10 | `merge(Object, Object, BiFunction)`                             | `java.util.HashMap`                                       |
|   +0.8% |    +4 |  7.9% → 8.7% | 518 → 522 | `vectorSum()`                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|     new |    +4 |  0.0% → 0.1% |     0 → 4 | `Unsafe_Unpark`                                                 | `libjvm.dylib`                                            |
|     new |    +4 |  0.0% → 0.1% |     0 → 4 | `HeapRegion::update_bot_for_block`                              | `libjvm.dylib`                                            |
|     new |    +4 |  0.0% → 0.1% |     0 → 4 | `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>` | `libjvm.dylib`                                            |
| +100.0% |    +3 | <0.1% → 0.1% |     3 → 6 | `awaitDone(int, long)`                                          | `java.util.concurrent.ForkJoinTask`                       |
| +300.0% |    +3 | <0.1% → 0.1% |     1 → 4 | `push(ForkJoinTask, ForkJoinPool, boolean)`                     | `java.util.concurrent.ForkJoinPool$WorkQueue`             |
|  +13.0% |    +3 |  0.3% → 0.4% |   23 → 26 | `hash(Object)`                                                  | `java.util.HashMap`                                       |
| +150.0% |    +3 | <0.1% → 0.1% |     2 → 5 | `G1FullGCMarker::publish_and_drain_oop_tasks`                   | `libjvm.dylib`                                            |
|  +23.1% |    +3 |  0.2% → 0.3% |   13 → 16 | `G1FullGCMarker::mark_object`                                   | `libjvm.dylib`                                            |

##### Ours

|  Change | Delta |            % |   Samples | Function                             | Location                                                   |
| ------: | ----: | -----------: | --------: | ------------------------------------ | ---------------------------------------------------------- |
|   +0.8% |    +4 |  7.9% → 8.7% | 518 → 522 | `vectorSum()`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|     new |    +2 | 0.0% → <0.1% |     0 → 2 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +50.0% |    +1 | <0.1% → 0.1% |     2 → 3 | `lambda$merge$6(List, List)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `computeDirectly()`                  | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `average(List)`                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `apply(int)`                         | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`        |
| +100.0% |    +1 |        <0.1% |     1 → 2 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `<init>(JavaKMeans, List, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

##### Native

|  Change | Delta |            % | Samples | Function                                                                                        | Location                   |
| ------: | ----: | -----------: | ------: | ----------------------------------------------------------------------------------------------- | -------------------------- |
| +106.7% |   +16 |  0.2% → 0.5% | 15 → 31 | `pthread_jit_write_protect_np`                                                                  | `libsystem_pthread.dylib`  |
| +550.0% |   +11 | <0.1% → 0.2% |  2 → 13 | `G1FullGCMarker::follow_object`                                                                 | `libjvm.dylib`             |
|  +17.4% |    +8 |  0.7% → 0.9% | 46 → 54 | `_platform_bzero`                                                                               | `libsystem_platform.dylib` |
| +200.0% |    +8 |  0.1% → 0.2% |  4 → 12 | `ObjArrayAllocator::initialize`                                                                 | `libjvm.dylib`             |
| +200.0% |    +6 | <0.1% → 0.2% |   3 → 9 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>`                                 | `libjvm.dylib`             |
|  +11.4% |    +4 |  0.5% → 0.7% | 35 → 39 | `__psynch_mutexwait`                                                                            | `libsystem_kernel.dylib`   |
| +400.0% |    +4 | <0.1% → 0.1% |   1 → 5 | `Parker::park`                                                                                  | `libjvm.dylib`             |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `Unsafe_Unpark`                                                                                 | `libjvm.dylib`             |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `HeapRegion::update_bot_for_block`                                                              | `libjvm.dylib`             |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>`                                 | `libjvm.dylib`             |
| +150.0% |    +3 | <0.1% → 0.1% |   2 → 5 | `G1FullGCMarker::publish_and_drain_oop_tasks`                                                   | `libjvm.dylib`             |
|  +23.1% |    +3 |  0.2% → 0.3% | 13 → 16 | `G1FullGCMarker::mark_object`                                                                   | `libjvm.dylib`             |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `G1FullGCCompactTask::G1CompactRegionClosure::apply`                                            | `libjvm.dylib`             |
| +100.0% |    +3 | <0.1% → 0.1% |   3 → 6 | `write`                                                                                         | `libsystem_kernel.dylib`   |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `__psynch_mutexdrop`                                                                            | `libsystem_kernel.dylib`   |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `void OopOopIterateDispatch<G1AdjustClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>` | `libjvm.dylib`             |
|  +50.0% |    +2 |         0.1% |   4 → 6 | `swtch_pri`                                                                                     | `libsystem_kernel.dylib`   |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `clock_gettime`                                                                                 | `libsystem_c.dylib`        |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `ClassLoaderData::oops_do`                                                                      | `libjvm.dylib`             |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `G1Allocator::unsafe_max_tlab_alloc`                                                            | `libjvm.dylib`             |

##### Standard library

|  Change | Delta |            % | Samples | Function                                           | Location                                      |
| ------: | ----: | -----------: | ------: | -------------------------------------------------- | --------------------------------------------- |
|  +11.3% |    +6 |  0.8% → 1.0% | 53 → 59 | `add(Object, Object[], int)`                       | `java.util.ArrayList`                         |
| +250.0% |    +5 | <0.1% → 0.1% |   2 → 7 | `putVal(int, Object, Object, boolean, boolean)`    | `java.util.HashMap`                           |
|  +66.7% |    +4 |  0.1% → 0.2% |  6 → 10 | `merge(Object, Object, BiFunction)`                | `java.util.HashMap`                           |
| +100.0% |    +3 | <0.1% → 0.1% |   3 → 6 | `awaitDone(int, long)`                             | `java.util.concurrent.ForkJoinTask`           |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `push(ForkJoinTask, ForkJoinPool, boolean)`        | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  +13.0% |    +3 |  0.3% → 0.4% | 23 → 26 | `hash(Object)`                                     | `java.util.HashMap`                           |
|  +50.0% |    +2 |         0.1% |   4 → 6 | `forEach(BiConsumer)`                              | `java.util.HashMap`                           |
| +100.0% |    +2 | <0.1% → 0.1% |   2 → 4 | `get(int)`                                         | `java.util.ArrayList`                         |
|  +33.3% |    +2 |         0.1% |   6 → 8 | `grow()`                                           | `java.util.ArrayList`                         |
| +100.0% |    +2 | <0.1% → 0.1% |   2 → 4 | `awaitWork(ForkJoinPool$WorkQueue)`                | `java.util.concurrent.ForkJoinPool`           |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `putMapEntries(Map, boolean)`                      | `java.util.HashMap`                           |
| +100.0% |    +2 | <0.1% → 0.1% |   2 → 4 | `getRawResult()`                                   | `java.util.concurrent.RecursiveTask`          |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `casSlotToNull(ForkJoinTask[], int, ForkJoinTask)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `putVal(Object, Object, boolean)`                  | `java.util.concurrent.ConcurrentHashMap`      |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `valueOf(double)`                                  | `java.lang.Double`                            |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `size()`                                           | `java.util.ArrayList`                         |
| +100.0% |    +1 |        <0.1% |   1 → 2 | `doExec()`                                         | `java.util.concurrent.ForkJoinTask`           |
|  +20.0% |    +1 |         0.1% |   5 → 6 | `scan(ForkJoinPool$WorkQueue, int, int)`           | `java.util.concurrent.ForkJoinPool`           |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `addAll(Collection)`                               | `java.util.ArrayList`                         |
|  +50.0% |    +1 | <0.1% → 0.1% |   2 → 3 | `add(Object)`                                      | `java.util.ArrayList`                         |

##### JIT

|  Change | Delta |           % |   Samples | Function           | Location    |
| ------: | ----: | ----------: | --------: | ------------------ | ----------- |
|  +54.1% |   +59 | 1.7% → 2.8% | 109 → 168 | `zero_blocks`      | `<unknown>` |
| +100.0% |    +1 |       <0.1% |     1 → 2 | `I2C/C2I adapters` | `<unknown>` |
| +100.0% |    +1 |       <0.1% |     1 → 2 | `vtable stub`      | `<unknown>` |

##### Compiler

|  Change | Delta |            % | Samples | Function                                    | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------- | -------------- |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `Matcher::xform`                            | `libjvm.dylib` |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `PhaseLive::add_liveout`                    | `libjvm.dylib` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `PhaseLive::compute`                        | `libjvm.dylib` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `PhaseIdealLoop::try_move_store_after_loop` | `libjvm.dylib` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `Unique_Node_List::remove`                  | `libjvm.dylib` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `PhaseChaitin::Select`                      | `libjvm.dylib` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `PhaseIdealLoop::Dominators`                | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `Scheduling::AddNodeToBundle`               | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseIdealLoop::split_if_with_blocks`      | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseGVN::transform_no_reclaim`            | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseChaitin::build_ifg_physical`          | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib` |
| +100.0% |    +1 |        <0.1% |   1 → 2 | `PhaseChaitin::post_allocate_copy_removal`  | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `CmpNode::Identity`                         | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseIdealLoop::compute_early_ctrl`        | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `Matcher::init_first_stack_mask`            | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `Matcher::Label_Root`                       | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `TypeKlassPtr::get_con`                     | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseIFG::SquareUp`                        | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `LinearScan::add_register_hints`            | `libjvm.dylib` |

#### Improvements

Functions with the largest decrease in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |             % |       Samples | Function                                                                          | Location                                                   |
| ------: | ----: | ------------: | ------------: | --------------------------------------------------------------------------------- | ---------------------------------------------------------- |
|  -16.8% |  -335 | 30.3% → 27.9% | 2,000 → 1,665 | `__psynch_cvwait`                                                                 | `libsystem_kernel.dylib`                                   |
|  -20.0% |  -194 | 14.7% → 13.0% |     970 → 776 | `distance(Double[], Double[])`                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -13.3% |   -55 |   6.3% → 6.0% |     413 → 358 | `findNearestCentroid()`                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -21.6% |   -35 |   2.5% → 2.1% |     162 → 127 | `elementData(int)`                                                                | `java.util.ArrayList`                                      |
|  -12.7% |   -19 |   2.3% → 2.2% |     150 → 131 | `computeIfAbsent(Object, Function)`                                               | `java.util.HashMap`                                        |
|  -15.2% |   -14 |   1.4% → 1.3% |       92 → 78 | `semaphore_wait_trap`                                                             | `libsystem_kernel.dylib`                                   |
|  -54.2% |   -13 |   0.4% → 0.2% |       24 → 11 | `_platform_memset`                                                                | `libsystem_platform.dylib`                                 |
|   -8.7% |   -12 |          2.1% |     138 → 126 | `collectClusters(int[])`                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -29.3% |   -12 |   0.6% → 0.5% |       41 → 29 | `checkIndex(int, int)`                                                            | `java.util.Objects`                                        |
|  -28.2% |   -11 |   0.6% → 0.5% |       39 → 28 | `grow(int)`                                                                       | `java.util.ArrayList`                                      |
|   -1.3% |   -11 | 12.4% → 13.5% |     815 → 804 | `accumulate(Double[], double[])`                                                  | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -10.9% |   -11 |          1.5% |      101 → 90 | `doubleValue()`                                                                   | `java.lang.Double`                                         |
| removed |    -8 |   0.1% → 0.0% |         8 → 0 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region` | `libjvm.dylib`                                             |
|  -10.4% |    -7 |          1.0% |       67 → 60 | `__psynch_cvsignal`                                                               | `libsystem_kernel.dylib`                                   |
| removed |    -7 |   0.1% → 0.0% |         7 → 0 | `G1ParScanThreadState::do_copy_to_survivor_space`                                 | `libjvm.dylib`                                             |
|  -17.9% |    -5 |          0.4% |       28 → 23 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`                         | `java.util.concurrent.ForkJoinPool`                        |
|   -1.7% |    -5 |   4.6% → 5.0% |     301 → 296 | `forward_copy_longs`                                                              | `<unknown>`                                                |
| removed |    -5 |   0.1% → 0.0% |         5 → 0 | `_sigtramp`                                                                       | `libsystem_platform.dylib`                                 |
|  -30.8% |    -4 |          0.2% |        13 → 9 | `runWorker(ForkJoinPool$WorkQueue)`                                               | `java.util.concurrent.ForkJoinPool`                        |
|  -66.7% |    -4 |  0.1% → <0.1% |         6 → 2 | `tlv_get_addr`                                                                    | `libdyld.dylib`                                            |

##### Ours

|  Change | Delta |             % |   Samples | Function                         | Location                                                               |
| ------: | ----: | ------------: | --------: | -------------------------------- | ---------------------------------------------------------------------- |
|  -20.0% |  -194 | 14.7% → 13.0% | 970 → 776 | `distance(Double[], Double[])`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -13.3% |   -55 |   6.3% → 6.0% | 413 → 358 | `findNearestCentroid()`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -8.7% |   -12 |          2.1% | 138 → 126 | `collectClusters(int[])`         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -1.3% |   -11 | 12.4% → 13.5% | 815 → 804 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -66.7% |    -2 |         <0.1% |     3 → 1 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -50.0% |    -1 |         <0.1% |     2 → 1 | `compute()`                      | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `apply(Object, Object)`          | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f0011a7490` |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `computeClusterAverages()`       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `forkThreshold()`                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `lambda$run$0(int, List, int)`   | `org.renaissance.jdk.concurrent.JavaKMeans`                            |

##### Native

|  Change | Delta |             % |       Samples | Function                                                                                                                                                   | Location                   |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
|  -16.8% |  -335 | 30.3% → 27.9% | 2,000 → 1,665 | `__psynch_cvwait`                                                                                                                                          | `libsystem_kernel.dylib`   |
|  -15.2% |   -14 |   1.4% → 1.3% |       92 → 78 | `semaphore_wait_trap`                                                                                                                                      | `libsystem_kernel.dylib`   |
|  -54.2% |   -13 |   0.4% → 0.2% |       24 → 11 | `_platform_memset`                                                                                                                                         | `libsystem_platform.dylib` |
| removed |    -8 |   0.1% → 0.0% |         8 → 0 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region`                                                                          | `libjvm.dylib`             |
|  -10.4% |    -7 |          1.0% |       67 → 60 | `__psynch_cvsignal`                                                                                                                                        | `libsystem_kernel.dylib`   |
| removed |    -7 |   0.1% → 0.0% |         7 → 0 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                                                          | `libjvm.dylib`             |
|   -1.7% |    -5 |   4.6% → 5.0% |     301 → 296 | `forward_copy_longs`                                                                                                                                       | `<unknown>`                |
| removed |    -5 |   0.1% → 0.0% |         5 → 0 | `_sigtramp`                                                                                                                                                | `libsystem_platform.dylib` |
|  -66.7% |    -4 |  0.1% → <0.1% |         6 → 2 | `tlv_get_addr`                                                                                                                                             | `libdyld.dylib`            |
| removed |    -4 |   0.1% → 0.0% |         4 → 0 | `read`                                                                                                                                                     | `libsystem_kernel.dylib`   |
| removed |    -4 |   0.1% → 0.0% |         4 → 0 | `SymbolTable::lookup_shared`                                                                                                                               | `libjvm.dylib`             |
|  -75.0% |    -3 |  0.1% → <0.1% |         4 → 1 | `_pthread_cond_wait`                                                                                                                                       | `libsystem_pthread.dylib`  |
| removed |    -3 |  <0.1% → 0.0% |         3 → 0 | `G1ParScanThreadState::trim_queue_to_threshold`                                                                                                            | `libjvm.dylib`             |
| removed |    -3 |  <0.1% → 0.0% |         3 → 0 | `MarkBitMap::check_mark`                                                                                                                                   | `libjvm.dylib`             |
| removed |    -3 |  <0.1% → 0.0% |         3 → 0 | `void G1ScanClosureBase::handle_non_cset_obj_common<narrowOop>`                                                                                            | `libjvm.dylib`             |
| removed |    -3 |  <0.1% → 0.0% |         3 → 0 | `CompiledMethod::cleanup_inline_caches_impl`                                                                                                               | `libjvm.dylib`             |
| removed |    -3 |  <0.1% → 0.0% |         3 → 0 | `AccessInternal::PostRuntimeDispatch<G1BarrierSet::AccessBarrier<548964ull, G1BarrierSet>, (AccessInternal::BarrierType)2, 548964ull>::oop_access_barrier` | `libjvm.dylib`             |
|  -42.9% |    -3 |          0.1% |         7 → 4 | `__mmap`                                                                                                                                                   | `libsystem_kernel.dylib`   |
|  -10.0% |    -2 |          0.3% |       20 → 18 | `arrayof_jint_disjoint_arraycopy`                                                                                                                          | `<unknown>`                |
| removed |    -2 |  <0.1% → 0.0% |         2 → 0 | `MutatorAllocRegion::retire`                                                                                                                               | `libjvm.dylib`             |

##### Standard library

|  Change | Delta |            % |   Samples | Function                                                  | Location                                        |
| ------: | ----: | -----------: | --------: | --------------------------------------------------------- | ----------------------------------------------- |
|  -21.6% |   -35 |  2.5% → 2.1% | 162 → 127 | `elementData(int)`                                        | `java.util.ArrayList`                           |
|  -12.7% |   -19 |  2.3% → 2.2% | 150 → 131 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                             |
|  -29.3% |   -12 |  0.6% → 0.5% |   41 → 29 | `checkIndex(int, int)`                                    | `java.util.Objects`                             |
|  -28.2% |   -11 |  0.6% → 0.5% |   39 → 28 | `grow(int)`                                               | `java.util.ArrayList`                           |
|  -10.9% |   -11 |         1.5% |  101 → 90 | `doubleValue()`                                           | `java.lang.Double`                              |
|  -17.9% |    -5 |         0.4% |   28 → 23 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`             |
|  -30.8% |    -4 |         0.2% |    13 → 9 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`             |
|  -50.0% |    -3 |         0.1% |     6 → 3 | `newLength(int, int, int)`                                | `jdk.internal.util.ArraysSupport`               |
|  -33.3% |    -2 |         0.1% |     6 → 4 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`   |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `park(boolean, long)`                                     | `jdk.internal.misc.Unsafe`                      |
|  -18.2% |    -2 |         0.2% |    11 → 9 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                              |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `toArray()`                                               | `java.util.ArrayList`                           |
|  -50.0% |    -2 | 0.1% → <0.1% |     4 → 2 | `resize()`                                                | `java.util.HashMap`                             |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `fork()`                                                  | `java.util.concurrent.ForkJoinTask`             |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `<init>(double[], int, int, int)`                         | `java.util.Spliterators$DoubleArraySpliterator` |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `getAndSetAccess(int)`                                    | `java.util.concurrent.ForkJoinPool$WorkQueue`   |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`             |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `wrapSink(Sink)`                                          | `java.util.stream.AbstractPipeline`             |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `<init>(Spliterator, int, boolean)`                       | `java.util.stream.AbstractPipeline`             |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `boxed()`                                                 | `java.util.stream.DoublePipeline`               |

##### JIT

| Change | Delta |     % | Samples | Function                   | Location    |
| -----: | ----: | ----: | ------: | -------------------------- | ----------- |
| -50.0% |    -1 | <0.1% |   2 → 1 | `I2C/C2I adapters(0xbbaa)` | `<unknown>` |

##### Compiler

|  Change | Delta |            % | Samples | Function                          | Location       |
| ------: | ----: | -----------: | ------: | --------------------------------- | -------------- |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `PhaseCCP::transform`             | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `PhaseChaitin::gather_lrg_masks`  | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `PhaseIdealLoop::build_loop_late` | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `Node_Backward_Iterator::next`    | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `PhaseChaitin::raise_pressure`    | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Scheduling::ComputeUseCount`     | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Node::set_req`                   | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseChaitin::compact`           | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `AddPNode::Ideal_base_and_offset` | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `TypeOopPtr::eq`                  | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseIdealLoop::get_early_ctrl`  | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `AddPNode::Ideal`                 | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `CProjNode::is_block_proj`        | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Matcher::match_tree`             | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `CodeBuffer::~CodeBuffer`         | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Node::pipeline`                  | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Compile::remove_useless_node`    | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Type::make_from_constant`        | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `RegMask::smear_to_sets`          | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `ConNode::out_RegMask`            | `libjvm.dylib` |

#### Lines

Lines with the largest change in contribution to each function's self samples.

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

|  Change | Delta |             % | Samples | Location                  |
| ------: | ----: | ------------: | ------: | ------------------------- |
|  +63.6% |    +7 | 20.8% → 30.5% | 11 → 18 | `java.util.ArrayList:484` |
| removed |    -1 |   1.9% → 0.0% |   1 → 0 | `java.util.ArrayList:483` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|  Change | Delta |            % | Samples | Location                |
| ------: | ----: | -----------: | ------: | ----------------------- |
|     new |    +2 | 0.0% → 28.6% |   0 → 2 | `java.util.HashMap:647` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `java.util.HashMap:634` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `java.util.HashMap:636` |
|     new |    +1 | 0.0% → 14.3% |   0 → 1 | `java.util.HashMap:637` |
|     new |    +1 | 0.0% → 14.3% |   0 → 1 | `java.util.HashMap:648` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Location                 |
| ------: | ----: | ------------: | ------: | ------------------------ |
| +250.0% |    +5 | 33.3% → 70.0% |   2 → 7 | `java.util.HashMap:1384` |
| removed |    -1 |  16.7% → 0.0% |   1 → 0 | `java.util.HashMap:1369` |
|  -50.0% |    -1 | 33.3% → 10.0% |   2 → 1 | `java.util.HashMap:1378` |
| removed |    -1 |  16.7% → 0.0% |   1 → 0 | `java.util.HashMap:1409` |
|     new |    +1 |  0.0% → 10.0% |   0 → 1 | `java.util.HashMap:1362` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |             % |   Samples | Location                                                      |
| -----: | ----: | ------------: | --------: | ------------------------------------------------------------- |
|  +3.4% |    +2 | 11.4% → 11.7% |   59 → 61 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:402` |
|  +0.4% |    +2 | 88.6% → 88.3% | 459 → 461 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:403` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % | Samples | Location                                |
| -----: | ----: | ------------: | ------: | --------------------------------------- |
|    new |    +3 |  0.0% → 50.0% |   0 → 3 | `java.util.concurrent.ForkJoinTask:411` |
| -50.0% |    -1 | 66.7% → 16.7% |   2 → 1 | `java.util.concurrent.ForkJoinTask:413` |
|    new |    +1 |  0.0% → 16.7% |   0 → 1 | `java.util.concurrent.ForkJoinTask:434` |

##### `push(ForkJoinTask, ForkJoinPool, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |            % | Samples | Location                                           |
| -----: | ----: | -----------: | ------: | -------------------------------------------------- |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `java.util.concurrent.ForkJoinPool$WorkQueue:1129` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `java.util.concurrent.ForkJoinPool$WorkQueue:1130` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `java.util.concurrent.ForkJoinPool$WorkQueue:1152` |

##### `hash(Object)` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Location                |
| -----: | ----: | -----: | ------: | ----------------------- |
| +13.0% |    +3 | 100.0% | 23 → 26 | `java.util.HashMap:338` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |             % | Samples | Location                                                      |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:419` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % | Samples | Location                                        |
| -----: | ----: | -----: | ------: | ----------------------------------------------- |
| +50.0% |    +1 | 100.0% |   2 → 3 | `org.renaissance.jdk.concurrent.JavaKMeans:114` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |             % | Samples | Location                                                      |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:367` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |             % | Samples | Location                                                   |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:332` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |      % | Samples | Location                                                       |
| ------: | ----: | -----: | ------: | -------------------------------------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:261` |

##### `<init>(JavaKMeans, List, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |             % | Samples | Location                                                      |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:382` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|  Change | Delta |            % | Samples | Location                 |
| ------: | ----: | -----------: | ------: | ------------------------ |
|     new |    +2 | 0.0% → 33.3% |   0 → 2 | `java.util.HashMap:1427` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `java.util.HashMap:1423` |
|  +50.0% |    +1 |        50.0% |   2 → 3 | `java.util.HashMap:1428` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `java.util.HashMap:1429` |
|     new |    +1 | 0.0% → 16.7% |   0 → 1 | `java.util.HashMap:1431` |

##### `get(int)` (`java.util.ArrayList`)

|  Change | Delta |      % | Samples | Location                  |
| ------: | ----: | -----: | ------: | ------------------------- |
| +100.0% |    +2 | 100.0% |   2 → 4 | `java.util.ArrayList:427` |

##### `grow()` (`java.util.ArrayList`)

| Change | Delta |      % | Samples | Location                  |
| -----: | ----: | -----: | ------: | ------------------------- |
| +33.3% |    +2 | 100.0% |   6 → 8 | `java.util.ArrayList:244` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |            % | Samples | Location                                 |
| ------: | ----: | -----------: | ------: | ---------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinPool:1898` |
|     new |    +1 | 0.0% → 25.0% |   0 → 1 | `java.util.concurrent.ForkJoinPool:1872` |
|     new |    +1 | 0.0% → 25.0% |   0 → 1 | `java.util.concurrent.ForkJoinPool:1878` |
|     new |    +1 | 0.0% → 25.0% |   0 → 1 | `java.util.concurrent.ForkJoinPool:1895` |

##### `putMapEntries(Map, boolean)` (`java.util.HashMap`)

| Change | Delta |            % | Samples | Location                |
| -----: | ----: | -----------: | ------: | ----------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `java.util.HashMap:519` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `java.util.HashMap:523` |

##### `getRawResult()` (`java.util.concurrent.RecursiveTask`)

|  Change | Delta |      % | Samples | Location                                |
| ------: | ----: | -----: | ------: | --------------------------------------- |
| +100.0% |    +2 | 100.0% |   2 → 4 | `java.util.concurrent.RecursiveTask:99` |

##### `casSlotToNull(ForkJoinTask[], int, ForkJoinTask)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |             % | Samples | Location                                           |
| -----: | ----: | ------------: | ------: | -------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `java.util.concurrent.ForkJoinPool$WorkQueue:1080` |

##### `putVal(Object, Object, boolean)` (`java.util.concurrent.ConcurrentHashMap`)

| Change | Delta |            % | Samples | Location                                      |
| -----: | ----: | -----------: | ------: | --------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `java.util.concurrent.ConcurrentHashMap:1011` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `java.util.concurrent.ConcurrentHashMap:1019` |

##### `valueOf(double)` (`java.lang.Double`)

| Change | Delta |             % | Samples | Location               |
| -----: | ----: | ------------: | ------: | ---------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `java.lang.Double:773` |

##### `size()` (`java.util.ArrayList`)

| Change | Delta |             % | Samples | Location                  |
| -----: | ----: | ------------: | ------: | ------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `java.util.ArrayList:253` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |             % | Samples | Location                                |
| ------: | ----: | ------------: | ------: | --------------------------------------- |
|     new |    +2 | 0.0% → 100.0% |   0 → 2 | `java.util.concurrent.ForkJoinTask:387` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinTask:385` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % | Samples | Location                                 |
| ------: | ----: | ------------: | ------: | ---------------------------------------- |
|     new |    +2 |  0.0% → 33.3% |   0 → 2 | `java.util.concurrent.ForkJoinPool:1825` |
|  -25.0% |    -1 | 80.0% → 50.0% |   4 → 3 | `java.util.concurrent.ForkJoinPool:1829` |
| removed |    -1 |  20.0% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinPool:1837` |
|     new |    +1 |  0.0% → 16.7% |   0 → 1 | `java.util.concurrent.ForkJoinPool:1835` |

##### `addAll(Collection)` (`java.util.ArrayList`)

| Change | Delta |             % | Samples | Location                  |
| -----: | ----: | ------------: | ------: | ------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.ArrayList:760` |

##### `add(Object)` (`java.util.ArrayList`)

| Change | Delta |      % | Samples | Location                  |
| -----: | ----: | -----: | ------: | ------------------------- |
| +50.0% |    +1 | 100.0% |   2 → 3 | `java.util.ArrayList:495` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % |   Samples | Location                                                       |
| -----: | ----: | ------------: | --------: | -------------------------------------------------------------- |
| -36.3% |  -145 | 41.1% → 32.7% | 399 → 254 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:249` |
|  -7.8% |   -43 | 57.1% → 65.9% | 554 → 511 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:248` |
| -41.2% |    -7 |   1.8% → 1.3% |   17 → 10 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:250` |
|    new |    +1 |   0.0% → 0.1% |     0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:247` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % |   Samples | Location                                                       |
| -----: | ----: | ------------: | --------: | -------------------------------------------------------------- |
| -14.5% |   -31 | 51.8% → 51.1% | 214 → 183 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:231` |
| -66.7% |   -16 |   5.8% → 2.2% |    24 → 8 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:226` |
| -27.5% |   -14 | 12.3% → 10.3% |   51 → 37 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:229` |
| +66.7% |    +4 |   1.5% → 2.8% |    6 → 10 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:225` |
| +50.0% |    +1 |   0.5% → 0.8% |     2 → 3 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:223` |

##### `elementData(int)` (`java.util.ArrayList`)

| Change | Delta |      % |   Samples | Location                  |
| -----: | ----: | -----: | --------: | ------------------------- |
| -21.6% |   -35 | 100.0% | 162 → 127 | `java.util.ArrayList:411` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Location                 |
| ------: | ----: | ------------: | ------: | ------------------------ |
|  -34.8% |   -16 | 30.7% → 22.9% | 46 → 30 | `java.util.HashMap:1213` |
| +900.0% |    +9 |   0.7% → 7.6% |  1 → 10 | `java.util.HashMap:1219` |
|  -40.0% |    -8 |  13.3% → 9.2% | 20 → 12 | `java.util.HashMap:1204` |
|  +19.4% |    +6 | 20.7% → 28.2% | 31 → 37 | `java.util.HashMap:1197` |
|  -15.6% |    -5 | 21.3% → 20.6% | 32 → 27 | `java.util.HashMap:1207` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % | Samples | Location                                                       |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------- |
| -52.0% |   -26 | 36.2% → 19.0% | 50 → 24 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:214` |
| +28.0% |    +7 | 18.1% → 25.4% | 25 → 32 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:213` |
| +42.9% |    +6 | 10.1% → 15.9% | 14 → 20 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:211` |
|  +4.0% |    +1 | 18.1% → 20.6% | 25 → 26 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |

##### `checkIndex(int, int)` (`java.util.Objects`)

| Change | Delta |      % | Samples | Location                |
| -----: | ----: | -----: | ------: | ----------------------- |
| -29.3% |   -12 | 100.0% | 41 → 29 | `java.util.Objects:385` |

##### `grow(int)` (`java.util.ArrayList`)

| Change | Delta |             % | Samples | Location                  |
| -----: | ----: | ------------: | ------: | ------------------------- |
| -28.6% |   -10 | 89.7% → 89.3% | 35 → 25 | `java.util.ArrayList:239` |
| -66.7% |    -2 |   7.7% → 3.6% |   3 → 1 | `java.util.ArrayList:234` |
|    new |    +1 |   0.0% → 3.6% |   0 → 1 | `java.util.ArrayList:233` |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |             % |   Samples | Location                                                      |
| -----: | ----: | ------------: | --------: | ------------------------------------------------------------- |
|  -4.1% |   -30 | 90.2% → 87.7% | 735 → 705 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:412` |
| +23.8% |   +19 |  9.8% → 12.3% |   80 → 99 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:411` |

##### `doubleValue()` (`java.lang.Double`)

| Change | Delta |      % |  Samples | Location                |
| -----: | ----: | -----: | -------: | ----------------------- |
| -10.9% |   -11 | 100.0% | 101 → 90 | `java.lang.Double:1001` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % | Samples | Location                                 |
| ------: | ----: | ------------: | ------: | ---------------------------------------- |
|  -75.0% |    -6 |  28.6% → 8.7% |   8 → 2 | `java.util.concurrent.ForkJoinPool:2051` |
| removed |    -4 |  14.3% → 0.0% |   4 → 0 | `java.util.concurrent.ForkJoinPool:2064` |
|     new |    +4 |  0.0% → 17.4% |   0 → 4 | `java.util.concurrent.ForkJoinPool:2058` |
|  -28.6% |    -2 | 25.0% → 21.7% |   7 → 5 | `java.util.concurrent.ForkJoinPool:2053` |
| removed |    -2 |   7.1% → 0.0% |   2 → 0 | `java.util.concurrent.ForkJoinPool:2055` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |             % | Samples | Location                                 |
| -----: | ----: | ------------: | ------: | ---------------------------------------- |
| -40.0% |    -2 | 38.5% → 33.3% |   5 → 3 | `java.util.concurrent.ForkJoinPool:1808` |
| -25.0% |    -2 | 61.5% → 66.7% |   8 → 6 | `java.util.concurrent.ForkJoinPool:1809` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % | Samples | Location                                                       |
| -----: | ----: | -----: | ------: | -------------------------------------------------------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:171` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|  Change | Delta |             % | Samples | Location                                                   |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------- |
| removed |    -1 |  50.0% → 0.0% |   1 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask:149` |
| removed |    -1 |  50.0% → 0.0% |   1 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask:151` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask:146` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change | Delta |             % | Samples | Location                                                   |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:316` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |             % | Samples | Location                                                      |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:367` |

##### `forkThreshold()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % | Samples | Location                                                       |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:198` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |             % | Samples | Location                                       |
| ------: | ----: | ------------: | ------: | ---------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans:53` |

##### `newLength(int, int, int)` (`jdk.internal.util.ArraysSupport`)

| Change | Delta |      % | Samples | Location                              |
| -----: | ----: | -----: | ------: | ------------------------------------- |
| -50.0% |    -3 | 100.0% |   6 → 3 | `jdk.internal.util.ArraysSupport:741` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change | Delta |            % | Samples | Location                                           |
| ------: | ----: | -----------: | ------: | -------------------------------------------------- |
| removed |    -2 | 33.3% → 0.0% |   2 → 0 | `java.util.concurrent.ForkJoinPool$WorkQueue:1347` |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinPool$WorkQueue:1344` |
|     new |    +1 | 0.0% → 25.0% |   0 → 1 | `java.util.concurrent.ForkJoinPool$WorkQueue:1354` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change | Delta |      % | Samples | Location                |
| -----: | ----: | -----: | ------: | ----------------------- |
| -18.2% |    -2 | 100.0% |  11 → 9 | `java.util.Arrays:3482` |

##### `toArray()` (`java.util.ArrayList`)

|  Change | Delta |             % | Samples | Location                  |
| ------: | ----: | ------------: | ------: | ------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `java.util.ArrayList:369` |

##### `resize()` (`java.util.HashMap`)

|  Change | Delta |            % | Samples | Location                |
| ------: | ----: | -----------: | ------: | ----------------------- |
| removed |    -3 | 75.0% → 0.0% |   3 → 0 | `java.util.HashMap:684` |
|     new |    +1 | 0.0% → 50.0% |   0 → 1 | `java.util.HashMap:712` |

##### `fork()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |             % | Samples | Location                                |
| ------: | ----: | ------------: | ------: | --------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `java.util.concurrent.ForkJoinTask:627` |

##### `<init>(double[], int, int, int)` (`java.util.Spliterators$DoubleArraySpliterator`)

|  Change | Delta |            % | Samples | Location                                             |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `java.util.Spliterators$DoubleArraySpliterator:1287` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `java.util.Spliterators$DoubleArraySpliterator:1288` |

##### `getAndSetAccess(int)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change | Delta |             % | Samples | Location                                           |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `java.util.concurrent.ForkJoinPool$WorkQueue:1087` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |             % | Samples | Location                                |
| ------: | ----: | ------------: | ------: | --------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinTask:652` |

##### `wrapSink(Sink)` (`java.util.stream.AbstractPipeline`)

|  Change | Delta |             % | Samples | Location                                |
| ------: | ----: | ------------: | ------: | --------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.stream.AbstractPipeline:547` |

##### `<init>(Spliterator, int, boolean)` (`java.util.stream.AbstractPipeline`)

|  Change | Delta |             % | Samples | Location                                |
| ------: | ----: | ------------: | ------: | --------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.stream.AbstractPipeline:181` |

##### `boxed()` (`java.util.stream.DoublePipeline`)

|  Change | Delta |             % | Samples | Location                              |
| ------: | ----: | ------------: | ------: | ------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.stream.DoublePipeline:199` |

#### Callers

Callers with the largest change in contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `zero_blocks` (`<unknown>`)

|  Change | Delta |             % |  Samples | Caller                              | Location                                                   |
| ------: | ----: | ------------: | -------: | ----------------------------------- | ---------------------------------------------------------- |
|  +60.9% |   +42 | 63.3% → 66.1% | 69 → 111 | `merge(Object, Object, BiFunction)` | `java.util.HashMap`                                        |
|  +31.3% |   +10 | 29.4% → 25.0% |  32 → 42 | `grow(int)`                         | `java.util.ArrayList`                                      |
| +100.0% |    +7 |   6.4% → 8.3% |   7 → 14 | `findNearestCentroid()`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |    -1 |   0.9% → 0.0% |    1 → 0 | `copyOf(Object[], int, Class)`      | `java.util.Arrays`                                         |
|     new |    +1 |   0.0% → 0.6% |    0 → 1 | `<init>(Collection)`                | `java.util.ArrayList`                                      |

##### `pthread_jit_write_protect_np` (`libsystem_pthread.dylib`)

|  Change | Delta |             % | Samples | Caller                     | Location       |
| ------: | ----: | ------------: | ------: | -------------------------- | -------------- |
|     new |   +13 |  0.0% → 41.9% |  0 → 13 | `JVM_IHashCode`            | `libjvm.dylib` |
| +150.0% |    +3 | 13.3% → 16.1% |   2 → 5 | `_new_array_Java`          | `<unknown>`    |
|  -50.0% |    -2 |  26.7% → 6.5% |   4 → 2 | `Unsafe_Unpark`            | `libjvm.dylib` |
| +200.0% |    +2 |   6.7% → 9.7% |   1 → 3 | `OptoRuntime::new_array_C` | `libjvm.dylib` |
|  -50.0% |    -1 |  13.3% → 3.2% |   2 → 1 | `Unsafe_AllocateInstance`  | `libjvm.dylib` |

##### `G1FullGCMarker::follow_object` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                                        | Location       |
| ------: | ----: | -------------: | ------: | --------------------------------------------- | -------------- |
| +450.0% |    +9 | 100.0% → 84.6% |  2 → 11 | `G1FullGCMarker::publish_and_drain_oop_tasks` | `libjvm.dylib` |
|     new |    +2 |   0.0% → 15.4% |   0 → 2 | `G1FullGCMarker::follow_marking_stacks`       | `libjvm.dylib` |

##### `_platform_bzero` (`libsystem_platform.dylib`)

|  Change | Delta |              % | Samples | Caller                               | Location       |
| ------: | ----: | -------------: | ------: | ------------------------------------ | -------------- |
|  +22.7% |   +10 | 95.7% → 100.0% | 44 → 54 | `MemAllocator::allocate`             | `libjvm.dylib` |
| removed |    -1 |    2.2% → 0.0% |   1 → 0 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |
| removed |    -1 |    2.2% → 0.0% |   1 → 0 | `stringStream::~stringStream`        | `libjvm.dylib` |

##### `ObjArrayAllocator::initialize` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                   | Location       |
| ------: | ----: | -----: | ------: | ------------------------ | -------------- |
| +200.0% |    +8 | 100.0% |  4 → 12 | `MemAllocator::allocate` | `libjvm.dylib` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

| Change | Delta |      % | Samples | Caller        | Location              |
| -----: | ----: | -----: | ------: | ------------- | --------------------- |
| +11.3% |    +6 | 100.0% | 53 → 59 | `add(Object)` | `java.util.ArrayList` |

##### `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                  | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------- | -------------- |
| +300.0% |    +6 | 66.7% → 88.9% |   2 → 8 | `G1FullGCMarker::follow_marking_stacks` | `libjvm.dylib` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|  Change | Delta |      % | Samples | Caller                        | Location            |
| ------: | ----: | -----: | ------: | ----------------------------- | ------------------- |
| +250.0% |    +5 | 100.0% |   2 → 7 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

| Change | Delta |      % | Samples | Caller                              | Location                  |
| -----: | ----: | -----: | ------: | ----------------------------------- | ------------------------- |
| +11.4% |    +4 | 100.0% | 35 → 39 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `Parker::park` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller        | Location       |
| ------: | ----: | -----: | ------: | ------------- | -------------- |
| +400.0% |    +4 | 100.0% |   1 → 5 | `Unsafe_Park` | `libjvm.dylib` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Caller                              | Location                                    |
| -----: | ----: | -----: | ------: | ----------------------------------- | ------------------------------------------- |
| +66.7% |    +4 | 100.0% |  6 → 10 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |   Samples | Caller              | Location                                                  |
| -----: | ----: | -----: | --------: | ------------------- | --------------------------------------------------------- |
|  +0.8% |    +4 | 100.0% | 518 → 522 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `Unsafe_Unpark` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller           | Location                   |
| -----: | ----: | ------------: | ------: | ---------------- | -------------------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `unpark(Object)` | `jdk.internal.misc.Unsafe` |

##### `HeapRegion::update_bot_for_block` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                                                                       | Location       |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------- | -------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `void HeapRegion::apply_to_marked_objects<G1FullGCPrepareTask::G1PrepareCompactLiveClosure>` | `libjvm.dylib` |

##### `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                  | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------------- | -------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `G1AdjustRegionClosure::do_heap_region` | `libjvm.dylib` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |      % | Samples | Caller   | Location                            |
| ------: | ----: | -----: | ------: | -------- | ----------------------------------- |
| +100.0% |    +3 | 100.0% |   3 → 6 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `push(ForkJoinTask, ForkJoinPool, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change | Delta |      % | Samples | Caller   | Location                            |
| ------: | ----: | -----: | ------: | -------- | ----------------------------------- |
| +300.0% |    +3 | 100.0% |   1 → 4 | `fork()` | `java.util.concurrent.ForkJoinTask` |

##### `hash(Object)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Caller                              | Location            |
| ------: | ----: | ------------: | ------: | ----------------------------------- | ------------------- |
|  +14.3% |    +3 | 91.3% → 92.3% | 21 → 24 | `computeIfAbsent(Object, Function)` | `java.util.HashMap` |
| removed |    -2 |   8.7% → 0.0% |   2 → 0 | `putMapEntries(Map, boolean)`       | `java.util.HashMap` |
|     new |    +2 |   0.0% → 7.7% |   0 → 2 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `G1FullGCMarker::publish_and_drain_oop_tasks` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                                  | Location       |
| ------: | ----: | -----: | ------: | --------------------------------------- | -------------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `G1FullGCMarker::follow_marking_stacks` | `libjvm.dylib` |

##### `G1FullGCMarker::mark_object` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                                                          | Location       |
| ------: | ----: | -------------: | ------: | --------------------------------------------------------------- | -------------- |
|  +33.3% |    +4 | 92.3% → 100.0% | 12 → 16 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` | `libjvm.dylib` |
| removed |    -1 |    7.7% → 0.0% |   1 → 0 | `G1FullGCMarker::complete_marking`                              | `libjvm.dylib` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |             % | Samples | Caller      | Location                                               |
| -----: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % | Samples | Caller                  | Location                                                               |
| -----: | ----: | -----: | ------: | ----------------------- | ---------------------------------------------------------------------- |
| +50.0% |    +1 | 100.0% |   2 → 3 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f0011a7490` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |             % | Samples | Caller      | Location                                               |
| -----: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |             % | Samples | Caller                     | Location                                               |
| -----: | ----: | ------------: | ------: | -------------------------- | ------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`)

| Change | Delta |             % | Samples | Caller        | Location                           |
| -----: | ----: | ------------: | ------: | ------------- | ---------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `accept(int)` | `java.util.stream.IntPipeline$1$1` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |      % | Samples | Caller      | Location                                               |
| ------: | ----: | -----: | ------: | ----------- | ------------------------------------------------------ |
| +100.0% |    +1 | 100.0% |   1 → 2 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `<init>(JavaKMeans, List, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |             % | Samples | Caller                    | Location                                                  |
| -----: | ----: | ------------: | ------: | ------------------------- | --------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `createSubtask(int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `G1FullGCCompactTask::G1CompactRegionClosure::apply` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------- | -------------- |
|     new |    +4 | 0.0% → 100.0% |   0 → 4 | `G1FullGCCompactTask::compact_region` | `libjvm.dylib` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `G1FullGCCompactTask::work`           | `libjvm.dylib` |

##### `write` (`libsystem_kernel.dylib`)

|  Change | Delta |      % | Samples | Caller                              | Location                            |
| ------: | ----: | -----: | ------: | ----------------------------------- | ----------------------------------- |
| +100.0% |    +3 | 100.0% |   3 → 6 | `write0(FileDescriptor, long, int)` | `sun.nio.ch.UnixFileDispatcherImpl` |

##### `__psynch_mutexdrop` (`libsystem_kernel.dylib`)

| Change | Delta |             % | Samples | Caller                                | Location                  |
| -----: | ----: | ------------: | ------: | ------------------------------------- | ------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `_pthread_mutex_firstfit_unlock_slow` | `libsystem_pthread.dylib` |

##### `void OopOopIterateDispatch<G1AdjustClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                                          | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------- | -------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>` | `libjvm.dylib` |

##### `swtch_pri` (`libsystem_kernel.dylib`)

| Change | Delta |      % | Samples | Caller                              | Location       |
| -----: | ----: | -----: | ------: | ----------------------------------- | -------------- |
| +50.0% |    +2 | 100.0% |   4 → 6 | `TaskTerminator::offer_termination` | `libjvm.dylib` |

##### `clock_gettime` (`libsystem_c.dylib`)

| Change | Delta |            % | Samples | Caller                              | Location                            |
| -----: | ----: | -----------: | ------: | ----------------------------------- | ----------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `os::javaTimeMillis`                | `libjvm.dylib`                      |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `awaitWork(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `ClassLoaderData::oops_do` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                                                                               | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------- | -------------- |
|     new |    +3 | 0.0% → 100.0% |   0 → 3 | `G1FullGCMarker::publish_and_drain_oop_tasks`                                                        | `libjvm.dylib` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `void OopOopIterateDispatch<G1MarkAndPushClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `libjvm.dylib` |

##### `G1Allocator::unsafe_max_tlab_alloc` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                        | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `MemAllocator::mem_allocate_inside_tlab_slow` | `libjvm.dylib` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Caller            | Location                                    |
| -----: | ----: | -----: | ------: | ----------------- | ------------------------------------------- |
| +50.0% |    +2 | 100.0% |   4 → 6 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `get(int)` (`java.util.ArrayList`)

|  Change | Delta |            % | Samples | Caller                   | Location                                                   |
| ------: | ----: | -----------: | ------: | ------------------------ | ---------------------------------------------------------- |
|     new |    +3 | 0.0% → 75.0% |   0 → 3 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `vectorSum()`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

##### `grow()` (`java.util.ArrayList`)

| Change | Delta |      % | Samples | Caller                       | Location              |
| -----: | ----: | -----: | ------: | ---------------------------- | --------------------- |
| +33.3% |    +2 | 100.0% |   6 → 8 | `add(Object, Object[], int)` | `java.util.ArrayList` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |      % | Samples | Caller                              | Location                            |
| ------: | ----: | -----: | ------: | ----------------------------------- | ----------------------------------- |
| +100.0% |    +2 | 100.0% |   2 → 4 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `putMapEntries(Map, boolean)` (`java.util.HashMap`)

| Change | Delta |             % | Samples | Caller        | Location            |
| -----: | ----: | ------------: | ------: | ------------- | ------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `<init>(Map)` | `java.util.HashMap` |

##### `getRawResult()` (`java.util.concurrent.RecursiveTask`)

|  Change | Delta |      % | Samples | Caller   | Location                            |
| ------: | ----: | -----: | ------: | -------- | ----------------------------------- |
| +100.0% |    +2 | 100.0% |   2 → 4 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `casSlotToNull(ForkJoinTask[], int, ForkJoinTask)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |             % | Samples | Caller                                   | Location                            |
| -----: | ----: | ------------: | ------: | ---------------------------------------- | ----------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `putVal(Object, Object, boolean)` (`java.util.concurrent.ConcurrentHashMap`)

| Change | Delta |             % | Samples | Caller                        | Location                                 |
| -----: | ----: | ------------: | ------: | ----------------------------- | ---------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `putIfAbsent(Object, Object)` | `java.util.concurrent.ConcurrentHashMap` |

##### `valueOf(double)` (`java.lang.Double`)

| Change | Delta |             % | Samples | Caller                                           | Location                                    |
| -----: | ----: | ------------: | ------: | ------------------------------------------------ | ------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `size()` (`java.util.ArrayList`)

| Change | Delta |            % | Samples | Caller                     | Location                                                   |
| -----: | ----: | -----------: | ------: | -------------------------- | ---------------------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `<init>(JavaKMeans, List)` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `findNearestCentroid()`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |            % | Samples | Caller                                    | Location                                      |
| -----: | ----: | -----------: | ------: | ----------------------------------------- | --------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `tryRemoveAndExec(ForkJoinTask, boolean)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % | Samples | Caller                              | Location                            |
| -----: | ----: | -----: | ------: | ----------------------------------- | ----------------------------------- |
| +20.0% |    +1 | 100.0% |   5 → 6 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `addAll(Collection)` (`java.util.ArrayList`)

| Change | Delta |             % | Samples | Caller                       | Location                                    |
| -----: | ----: | ------------: | ------: | ---------------------------- | ------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `add(Object)` (`java.util.ArrayList`)

| Change | Delta |      % | Samples | Caller                   | Location                                                   |
| -----: | ----: | -----: | ------: | ------------------------ | ---------------------------------------------------------- |
| +50.0% |    +1 | 100.0% |   2 → 3 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `I2C/C2I adapters` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                         | Location                            |
| ------: | ----: | ------------: | ------: | ------------------------------ | ----------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `getInputStream(ZipEntry)`     | `java.util.jar.JarFile`             |
|     new |    +1 |  0.0% → 50.0% |   0 → 1 | `compareAndSetCtl(long, long)` | `java.util.concurrent.ForkJoinPool` |

##### `vtable stub` (`<unknown>`)

| Change | Delta |            % | Samples | Caller   | Location                            |
| -----: | ----: | -----------: | ------: | -------- | ----------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `Matcher::xform` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller           | Location       |
| -----: | ----: | ------------: | ------: | ---------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `Matcher::match` | `libjvm.dylib` |

##### `PhaseLive::add_liveout` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller               | Location       |
| ------: | ----: | -----: | ------: | -------------------- | -------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `PhaseLive::compute` | `libjvm.dylib` |

##### `PhaseLive::compute` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                            | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseIdealLoop::try_move_store_after_loop` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                                 | Location       |
| -----: | ----: | -----------: | ------: | -------------------------------------- | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `PhaseIdealLoop::build_and_optimize`   | `libjvm.dylib` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |

##### `Unique_Node_List::remove` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                    | Location       |
| -----: | ----: | ------------: | ------: | ----------------------------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `PhaseIterGVN::remove_globally_dead_node` | `libjvm.dylib` |

##### `PhaseChaitin::Select` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                            | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                               | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Scheduling::AddNodeToBundle` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                     | Location       |
| -----: | ----: | ------------: | ------: | -------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `Scheduling::DoScheduling` | `libjvm.dylib` |

##### `PhaseIdealLoop::split_if_with_blocks` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                               | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseGVN::transform_no_reclaim` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                              | Location       |
| -----: | ----: | ------------: | ------: | ----------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `GraphKit::set_edges_for_java_call` | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                            | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                            | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseIdealLoop::build_loop_late` | `libjvm.dylib` |

##### `PhaseChaitin::post_allocate_copy_removal` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                            | Location       |
| ------: | ----: | -----: | ------: | --------------------------------- | -------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `CmpNode::Identity` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                        | Location       |
| -----: | ----: | ------------: | ------: | ----------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `GraphKit::null_check_common` | `libjvm.dylib` |

##### `PhaseIdealLoop::compute_early_ctrl` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                 | Location       |
| -----: | ----: | ------------: | ------: | -------------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseIdealLoop::try_sink_out_of_loop` | `libjvm.dylib` |

##### `Matcher::init_first_stack_mask` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                         | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------ | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `Matcher::Fixup_Save_On_Entry` | `libjvm.dylib` |

##### `Matcher::Label_Root` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                | Location       |
| -----: | ----: | ------------: | ------: | --------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `Matcher::match_tree` | `libjvm.dylib` |

##### `TypeKlassPtr::get_con` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                           | Location       |
| -----: | ----: | ------------: | ------: | -------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseOutput::scratch_emit_size` | `libjvm.dylib` |

##### `PhaseIFG::SquareUp` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                            | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `LinearScan::add_register_hints` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                        | Location       |
| -----: | ----: | ------------: | ------: | ----------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `LinearScan::build_intervals` | `libjvm.dylib` |

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|  Change | Delta |             % |       Samples | Caller                      | Location       |
| ------: | ----: | ------------: | ------------: | --------------------------- | -------------- |
|  -17.5% |  -337 | 96.4% → 95.5% | 1,927 → 1,590 | `Parker::park`              | `libjvm.dylib` |
|   +2.8% |    +2 |   3.6% → 4.4% |       72 → 74 | `PlatformMonitor::wait`     | `libjvm.dylib` |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `PlatformEvent::park_nanos` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 0.1% |         0 → 1 | `PlatformEvent::park`       | `libjvm.dylib` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller                  | Location                                                   |
| -----: | ----: | -----: | --------: | ----------------------- | ---------------------------------------------------------- |
| -20.0% |  -194 | 100.0% | 970 → 776 | `findNearestCentroid()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller              | Location                                                   |
| -----: | ----: | -----: | --------: | ------------------- | ---------------------------------------------------------- |
| -13.3% |   -55 | 100.0% | 413 → 358 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `elementData(int)` (`java.util.ArrayList`)

| Change | Delta |      % |   Samples | Caller     | Location              |
| -----: | ----: | -----: | --------: | ---------- | --------------------- |
| -21.6% |   -35 | 100.0% | 162 → 127 | `get(int)` | `java.util.ArrayList` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

| Change | Delta |      % |   Samples | Caller                   | Location                                                   |
| -----: | ----: | -----: | --------: | ------------------------ | ---------------------------------------------------------- |
| -12.7% |   -19 | 100.0% | 150 → 131 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

| Change | Delta |             % | Samples | Caller                           | Location       |
| -----: | ----: | ------------: | ------: | -------------------------------- | -------------- |
| -15.0% |   -12 | 87.0% → 87.2% | 80 → 68 | `WorkerThread::run`              | `libjvm.dylib` |
| -33.3% |    -3 |   9.8% → 7.7% |   9 → 6 | `GenericWaitBarrier::Cell::wait` | `libjvm.dylib` |
| +33.3% |    +1 |   3.3% → 5.1% |   3 → 4 | `WorkerThreads::run_task`        | `libjvm.dylib` |

##### `_platform_memset` (`libsystem_platform.dylib`)

|  Change | Delta |             % | Samples | Caller                                        | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------------- | -------------- |
|  -50.0% |    -7 | 58.3% → 63.6% |  14 → 7 | `MemAllocator::allocate`                      | `libjvm.dylib` |
| removed |    -7 |  29.2% → 0.0% |   7 → 0 | `MarkBitMap::do_clear`                        | `libjvm.dylib` |
| removed |    -1 |   4.2% → 0.0% |   1 → 0 | `Dict::Insert`                                | `libjvm.dylib` |
| removed |    -1 |   4.2% → 0.0% |   1 → 0 | `ConstantPoolCache::allocate`                 | `libjvm.dylib` |
| +100.0% |    +1 |  4.2% → 18.2% |   1 → 2 | `MemAllocator::mem_allocate_inside_tlab_slow` | `libjvm.dylib` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller              | Location                                                   |
| -----: | ----: | -----: | --------: | ------------------- | ---------------------------------------------------------- |
|  -8.7% |   -12 | 100.0% | 138 → 126 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `checkIndex(int, int)` (`java.util.Objects`)

| Change | Delta |      % | Samples | Caller     | Location              |
| -----: | ----: | -----: | ------: | ---------- | --------------------- |
| -29.3% |   -12 | 100.0% | 41 → 29 | `get(int)` | `java.util.ArrayList` |

##### `grow(int)` (`java.util.ArrayList`)

| Change | Delta |      % | Samples | Caller   | Location              |
| -----: | ----: | -----: | ------: | -------- | --------------------- |
| -28.2% |   -11 | 100.0% | 39 → 28 | `grow()` | `java.util.ArrayList` |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |   Samples | Caller        | Location                                                  |
| -----: | ----: | -----: | --------: | ------------- | --------------------------------------------------------- |
|  -1.3% |   -11 | 100.0% | 815 → 804 | `vectorSum()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `doubleValue()` (`java.lang.Double`)

| Change | Delta |             % | Samples | Caller                           | Location                                                   |
| -----: | ----: | ------------: | ------: | -------------------------------- | ---------------------------------------------------------- |
| -35.3% |    -6 | 16.8% → 12.2% | 17 → 11 | `distance(Double[], Double[])`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -6.0% |    -5 | 83.2% → 87.8% | 84 → 79 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

##### `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                                              | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------- | -------------- |
| removed |    -8 | 100.0% → 0.0% |   8 → 0 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::do_heap_region` | `libjvm.dylib` |

##### `__psynch_cvsignal` (`libsystem_kernel.dylib`)

| Change | Delta |      % | Samples | Caller          | Location       |
| -----: | ----: | -----: | ------: | --------------- | -------------- |
| -10.4% |    -7 | 100.0% | 67 → 60 | `Unsafe_Unpark` | `libjvm.dylib` |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                          | Location       |
| ------: | ----: | -----------: | ------: | ----------------------------------------------- | -------------- |
| removed |    -5 | 71.4% → 0.0% |   5 → 0 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `G1ScanHRForRegionClosure::scan_memregion`      | `libjvm.dylib` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `G1ParScanThreadState::steal_and_trim_queue`    | `libjvm.dylib` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % | Samples | Caller                 | Location                            |
| -----: | ----: | -----: | ------: | ---------------------- | ----------------------------------- |
| -17.9% |    -5 | 100.0% | 28 → 23 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `forward_copy_longs` (`<unknown>`)

| Change | Delta |             % |   Samples | Caller                            | Location    |
| -----: | ----: | ------------: | --------: | --------------------------------- | ----------- |
| -14.8% |    -8 | 17.9% → 15.5% |   54 → 46 | `arrayof_oop_disjoint_arraycopy`  | `<unknown>` |
|  +1.2% |    +3 | 82.1% → 84.5% | 247 → 250 | `arrayof_jint_disjoint_arraycopy` | `<unknown>` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % | Samples | Caller  | Location                                    |
| -----: | ----: | -----: | ------: | ------- | ------------------------------------------- |
| -30.8% |    -4 | 100.0% |  13 → 9 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `tlv_get_addr` (`libdyld.dylib`)

|  Change | Delta |            % | Samples | Caller                                   | Location       |
| ------: | ----: | -----------: | ------: | ---------------------------------------- | -------------- |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `Unsafe_Park`                            | `libjvm.dylib` |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `ImmutableOopMap::ImmutableOopMap`       | `libjvm.dylib` |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `BlockBegin::try_merge`                  | `libjvm.dylib` |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `arrayof_oop_disjoint_arraycopy`         | `<unknown>`    |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `SafepointSynchronize::do_cleanup_tasks` | `libjvm.dylib` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % | Samples | Caller      | Location                                               |
| -----: | ----: | -----: | ------: | ----------- | ------------------------------------------------------ |
| -66.7% |    -2 | 100.0% |   3 → 1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change | Delta |      % | Samples | Caller   | Location                             |
| -----: | ----: | -----: | ------: | -------- | ------------------------------------ |
| -50.0% |    -1 | 100.0% |   2 → 1 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f0011a7490`)

|  Change | Delta |             % | Samples | Caller                              | Location            |
| ------: | ----: | ------------: | ------: | ----------------------------------- | ------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change | Delta |             % | Samples | Caller              | Location                                               |
| ------: | ----: | ------------: | ------: | ------------------- | ------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |             % | Samples | Caller      | Location                                               |
| ------: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `forkThreshold()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % | Samples | Caller      | Location                                               |
| ------: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |             % | Samples | Caller   | Location                                                               |
| ------: | ----: | ------------: | ------: | -------- | ---------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f0011a2bd0` |

##### `read` (`libsystem_kernel.dylib`)

|  Change | Delta |             % | Samples | Caller      | Location        |
| ------: | ----: | ------------: | ------: | ----------- | --------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `readBytes` | `libjava.dylib` |

##### `SymbolTable::lookup_shared` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                     | Location       |
| ------: | ----: | ------------: | ------: | -------------------------- | -------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `SymbolTable::lookup_only` | `libjvm.dylib` |

##### `_pthread_cond_wait` (`libsystem_pthread.dylib`)

| Change | Delta |      % | Samples | Caller         | Location       |
| -----: | ----: | -----: | ------: | -------------- | -------------- |
| -75.0% |    -3 | 100.0% |   4 → 1 | `Parker::park` | `libjvm.dylib` |

##### `G1ParScanThreadState::trim_queue_to_threshold` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                       | Location       |
| ------: | ----: | -----------: | ------: | -------------------------------------------- | -------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `G1ScanHRForRegionClosure::scan_memregion`   | `libjvm.dylib` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `G1ParScanThreadState::steal_and_trim_queue` | `libjvm.dylib` |

##### `MarkBitMap::check_mark` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                                          | Location       |
| ------: | ----: | -----------: | ------: | --------------------------------------------------------------- | -------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` | `libjvm.dylib` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `G1FullGCCompactTask::G1CompactRegionClosure::apply`            | `libjvm.dylib` |

##### `void G1ScanClosureBase::handle_non_cset_obj_common<narrowOop>` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                                   | Location       |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------- | -------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `G1ParScanThreadState::do_partial_array`                 | `libjvm.dylib` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `void G1ScanEvacuatedObjClosure::do_oop_work<narrowOop>` | `libjvm.dylib` |

##### `CompiledMethod::cleanup_inline_caches_impl` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                  | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------- | -------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `CompiledMethod::unload_nmethod_caches` | `libjvm.dylib` |

##### `AccessInternal::PostRuntimeDispatch<G1BarrierSet::AccessBarrier<548964ull, G1BarrierSet>, (AccessInternal::BarrierType)2, 548964ull>::oop_access_barrier` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                | Location                   |
| ------: | ----: | -----------: | ------: | --------------------- | -------------------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `Unsafe_Park`         | `libjvm.dylib`             |

##### `__mmap` (`libsystem_kernel.dylib`)

| Change | Delta |              % | Samples | Caller                   | Location       |
| -----: | ----: | -------------: | ------: | ------------------------ | -------------- |
| -57.1% |    -4 | 100.0% → 75.0% |   7 → 3 | `os::pd_uncommit_memory` | `libjvm.dylib` |
|    new |    +1 |   0.0% → 25.0% |   0 → 1 | `os::pd_commit_memory`   | `libjvm.dylib` |

##### `arrayof_jint_disjoint_arraycopy` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                              | Location              |
| -----: | ----: | ------------: | ------: | ----------------------------------- | --------------------- |
| -16.7% |    -1 | 30.0% → 27.8% |   6 → 5 | `grow(int)`                         | `java.util.ArrayList` |
| -25.0% |    -1 | 20.0% → 16.7% |   4 → 3 | `merge(Object, Object, BiFunction)` | `java.util.HashMap`   |

##### `MutatorAllocRegion::retire` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------- | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `G1CollectedHeap::mem_allocate`       | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `G1CollectedHeap::attempt_allocation` | `libjvm.dylib` |

##### `newLength(int, int, int)` (`jdk.internal.util.ArraysSupport`)

| Change | Delta |      % | Samples | Caller      | Location              |
| -----: | ----: | -----: | ------: | ----------- | --------------------- |
| -50.0% |    -3 | 100.0% |   6 → 3 | `grow(int)` | `java.util.ArrayList` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |      % | Samples | Caller                 | Location                            |
| -----: | ----: | -----: | ------: | ---------------------- | ----------------------------------- |
| -33.3% |    -2 | 100.0% |   6 → 4 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|  Change | Delta |             % | Samples | Caller   | Location                                 |
| ------: | ----: | ------------: | ------: | -------- | ---------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `park()` | `java.util.concurrent.locks.LockSupport` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change | Delta |              % | Samples | Caller      | Location              |
| -----: | ----: | -------------: | ------: | ----------- | --------------------- |
| -36.4% |    -4 | 100.0% → 77.8% |  11 → 7 | `toArray()` | `java.util.ArrayList` |
|    new |    +2 |   0.0% → 22.2% |   0 → 2 | `grow(int)` | `java.util.ArrayList` |

##### `toArray()` (`java.util.ArrayList`)

|  Change | Delta |             % | Samples | Caller               | Location              |
| ------: | ----: | ------------: | ------: | -------------------- | --------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `<init>(Collection)` | `java.util.ArrayList` |

##### `resize()` (`java.util.HashMap`)

|  Change | Delta |              % | Samples | Caller                                          | Location            |
| ------: | ----: | -------------: | ------: | ----------------------------------------------- | ------------------- |
| removed |    -3 |   75.0% → 0.0% |   3 → 0 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |
| +100.0% |    +1 | 25.0% → 100.0% |   1 → 2 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap` |

##### `fork()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |             % | Samples | Caller      | Location                                               |
| ------: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `<init>(double[], int, int, int)` (`java.util.Spliterators$DoubleArraySpliterator`)

|  Change | Delta |             % | Samples | Caller                                 | Location                 |
| ------: | ----: | ------------: | ------: | -------------------------------------- | ------------------------ |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `spliterator(double[], int, int, int)` | `java.util.Spliterators` |

##### `getAndSetAccess(int)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change | Delta |             % | Samples | Caller                                      | Location                                      |
| ------: | ----: | ------------: | ------: | ------------------------------------------- | --------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `push(ForkJoinTask, ForkJoinPool, boolean)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |             % | Samples | Caller      | Location                                               |
| ------: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `wrapSink(Sink)` (`java.util.stream.AbstractPipeline`)

|  Change | Delta |             % | Samples | Caller                               | Location                            |
| ------: | ----: | ------------: | ------: | ------------------------------------ | ----------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `wrapAndCopyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `<init>(Spliterator, int, boolean)` (`java.util.stream.AbstractPipeline`)

|  Change | Delta |             % | Samples | Caller                              | Location                          |
| ------: | ----: | ------------: | ------: | ----------------------------------- | --------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>(Spliterator, int, boolean)` | `java.util.stream.DoublePipeline` |

##### `boxed()` (`java.util.stream.DoublePipeline`)

|  Change | Delta |             % | Samples | Caller            | Location                                               |
| ------: | ----: | ------------: | ------: | ----------------- | ------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `boxed(double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `I2C/C2I adapters(0xbbaa)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                              | Location                            |
| -----: | ----: | -----: | ------: | ----------------------------------- | ----------------------------------- |
| -50.0% |    -1 | 100.0% |   2 → 1 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `PhaseCCP::transform` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                   | Location       |
| ------: | ----: | ------------: | ------: | ------------------------ | -------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `PhaseCCP::do_transform` | `libjvm.dylib` |

##### `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                            | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                               | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Node_Backward_Iterator::next` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                    | Location       |
| ------: | ----: | ------------: | ------: | ------------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `PhaseCFG::schedule_late` | `libjvm.dylib` |

##### `PhaseChaitin::raise_pressure` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                             | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `PhaseChaitin::build_ifg_physical` | `libjvm.dylib` |

##### `Scheduling::ComputeUseCount` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                     | Location       |
| ------: | ----: | ------------: | ------: | -------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `Scheduling::DoScheduling` | `libjvm.dylib` |

##### `Node::set_req` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                          | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseCFG::implicit_null_check` | `libjvm.dylib` |

##### `PhaseChaitin::compact` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                            | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `AddPNode::Ideal_base_and_offset` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                          | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `MemNode::can_see_stored_value` | `libjvm.dylib` |

##### `TypeOopPtr::eq` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller      | Location       |
| ------: | ----: | ------------: | ------: | ----------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `Type::cmp` | `libjvm.dylib` |

##### `PhaseIdealLoop::get_early_ctrl` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                             | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseIdealLoop::build_loop_early` | `libjvm.dylib` |

##### `AddPNode::Ideal` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                  | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `LibraryCallKit::current_thread_helper` | `libjvm.dylib` |

##### `CProjNode::is_block_proj` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                         | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------ | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |

##### `Matcher::match_tree` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller           | Location       |
| ------: | ----: | ------------: | ------: | ---------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `Matcher::xform` | `libjvm.dylib` |

##### `CodeBuffer::~CodeBuffer` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                          | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseOutput::shorten_branches` | `libjvm.dylib` |

##### `Node::pipeline` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                        | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `Scheduling::AddNodeToBundle` | `libjvm.dylib` |

##### `Compile::remove_useless_node` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                    | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseIterGVN::remove_globally_dead_node` | `libjvm.dylib` |

##### `Type::make_from_constant` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                           | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `Type::make_constant_from_field` | `libjvm.dylib` |

##### `RegMask::smear_to_sets` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                                             | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------ | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseChaitin::remove_bound_register_from_interfering_live_ranges` | `libjvm.dylib` |

##### `ConNode::out_RegMask` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                            | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

### Total samples

#### Regressions

Functions with the largest increase in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |           % |   Samples | Function                                                                                                               | Location                                                               |
| ------: | ----: | ----------: | --------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|  +12.2% |   +62 | 7.7% → 9.6% | 510 → 572 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  +11.9% |   +61 | 7.8% → 9.6% | 513 → 574 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +11.7% |   +60 | 7.8% → 9.6% | 513 → 573 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  +54.1% |   +59 | 1.7% → 2.8% | 109 → 168 | `zero_blocks`                                                                                                          | `<unknown>`                                                            |
|  +11.0% |   +55 | 7.6% → 9.3% | 499 → 554 | `forEach(BiConsumer)`                                                                                                  | `java.util.HashMap`                                                    |
|  +10.9% |   +54 | 7.5% → 9.2% | 494 → 548 | `merge(Object, Object, BiFunction)`                                                                                    | `java.util.HashMap`                                                    |
|  +10.7% |   +53 | 7.5% → 9.2% | 495 → 548 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +10.7% |   +53 | 7.5% → 9.2% | 495 → 548 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f0011a7000` |
|  +11.3% |   +33 | 4.4% → 5.4% | 291 → 324 | `copyOf(Object[], int)`                                                                                                | `java.util.Arrays`                                                     |
|     new |   +27 | 0.0% → 0.5% |    0 → 27 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|   +9.9% |   +24 | 3.7% → 4.5% | 243 → 267 | `toArray()`                                                                                                            | `java.util.ArrayList`                                                  |
| +114.3% |   +24 | 0.3% → 0.8% |   21 → 45 | `G1FullGCMarker::follow_marking_stacks`                                                                                | `libjvm.dylib`                                                         |
|  +22.8% |   +21 | 1.4% → 1.9% |  92 → 113 | `_new_array_Java`                                                                                                      | `<unknown>`                                                            |
|   +5.7% |   +20 | 5.4% → 6.2% | 353 → 373 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| +166.7% |   +20 | 0.2% → 0.5% |   12 → 32 | `G1ParEvacuateFollowersClosure::offer_termination`                                                                     | `libjvm.dylib`                                                         |
|   +5.4% |   +19 | 5.4% → 6.2% | 354 → 373 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f0011a7490` |
|  +21.6% |   +19 | 1.3% → 1.8% |  88 → 107 | `OptoRuntime::new_array_C`                                                                                             | `libjvm.dylib`                                                         |
|  +17.5% |   +18 | 1.6% → 2.0% | 103 → 121 | `CompileBroker::compiler_thread_loop`                                                                                  | `libjvm.dylib`                                                         |
|  +75.0% |   +18 | 0.4% → 0.7% |   24 → 42 | `hash(Object)`                                                                                                         | `java.util.HashMap`                                                    |
|  +15.7% |   +17 | 1.6% → 2.1% | 108 → 125 | `JavaThread::thread_main_inner`                                                                                        | `libjvm.dylib`                                                         |

##### Ours

|  Change | Delta |            % |   Samples | Function                                                                                                               | Location                                                               |
| ------: | ----: | -----------: | --------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|  +12.2% |   +62 |  7.7% → 9.6% | 510 → 572 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  +11.9% |   +61 |  7.8% → 9.6% | 513 → 574 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +11.7% |   +60 |  7.8% → 9.6% | 513 → 573 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  +10.7% |   +53 |  7.5% → 9.2% | 495 → 548 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +10.7% |   +53 |  7.5% → 9.2% | 495 → 548 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f0011a7000` |
|     new |   +27 |  0.0% → 0.5% |    0 → 27 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|   +5.7% |   +20 |  5.4% → 6.2% | 353 → 373 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   +5.4% |   +19 |  5.4% → 6.2% | 354 → 373 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f0011a7490` |
|  +29.8% |   +14 |  0.7% → 1.0% |   47 → 61 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                        |
|  +29.8% |   +14 |  0.7% → 1.0% |   47 → 61 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                        |
|  +31.1% |   +14 |  0.7% → 1.0% |   45 → 59 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                        |
|  +27.5% |   +11 |  0.6% → 0.9% |   40 → 51 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
|  +28.9% |   +11 |  0.6% → 0.8% |   38 → 49 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
| +800.0% |    +8 | <0.1% → 0.2% |     1 → 9 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda`                      |
|  +66.7% |    +6 |  0.1% → 0.3% |    9 → 15 | `setUpBeforeAll(BenchmarkContext)`                                                                                     | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  +20.8% |    +5 |  0.4% → 0.5% |   24 → 29 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +22.7% |    +5 |  0.3% → 0.5% |   22 → 27 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000f00111f1b8` |
|     new |    +5 |  0.0% → 0.1% |     0 → 5 | `rowToArray$1(Map)`                                                                                                    | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|     new |    +5 |  0.0% → 0.1% |     0 → 5 | `setUpBeforeAll$$anonfun$1(Map)`                                                                                       | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|     new |    +5 |  0.0% → 0.1% |     0 → 5 | `lambda$toCsvRows$2(String[], Function, String)`                                                                       | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`     |

##### Native

|  Change | Delta |            % |   Samples | Function                                                        | Location                   |
| ------: | ----: | -----------: | --------: | --------------------------------------------------------------- | -------------------------- |
| +114.3% |   +24 |  0.3% → 0.8% |   21 → 45 | `G1FullGCMarker::follow_marking_stacks`                         | `libjvm.dylib`             |
|  +22.8% |   +21 |  1.4% → 1.9% |  92 → 113 | `_new_array_Java`                                               | `<unknown>`                |
| +166.7% |   +20 |  0.2% → 0.5% |   12 → 32 | `G1ParEvacuateFollowersClosure::offer_termination`              | `libjvm.dylib`             |
|  +21.6% |   +19 |  1.3% → 1.8% |  88 → 107 | `OptoRuntime::new_array_C`                                      | `libjvm.dylib`             |
|  +15.7% |   +17 |  1.6% → 2.1% | 108 → 125 | `JavaThread::thread_main_inner`                                 | `libjvm.dylib`             |
|  +18.4% |   +16 |  1.3% → 1.7% |  87 → 103 | `CollectedHeap::array_allocate`                                 | `libjvm.dylib`             |
| +106.7% |   +16 |  0.2% → 0.5% |   15 → 31 | `pthread_jit_write_protect_np`                                  | `libsystem_pthread.dylib`  |
|  +71.4% |   +15 |  0.3% → 0.6% |   21 → 36 | `TaskTerminator::offer_termination`                             | `libjvm.dylib`             |
|  +31.8% |   +14 |  0.7% → 1.0% |   44 → 58 | `G1FullGCMarker::complete_marking`                              | `libjvm.dylib`             |
|  +31.8% |   +14 |  0.7% → 1.0% |   44 → 58 | `G1FullGCMarkTask::work`                                        | `libjvm.dylib`             |
|     new |   +14 |  0.0% → 0.2% |    0 → 14 | `JVM_IHashCode`                                                 | `libjvm.dylib`             |
| +216.7% |   +13 |  0.1% → 0.3% |    6 → 19 | `G1FullGCMarker::publish_and_drain_oop_tasks`                   | `libjvm.dylib`             |
|  +14.0% |   +12 |  1.3% → 1.6% |   86 → 98 | `InstanceKlass::allocate_objArray`                              | `libjvm.dylib`             |
| +550.0% |   +11 | <0.1% → 0.2% |    2 → 13 | `G1FullGCMarker::follow_object`                                 | `libjvm.dylib`             |
|  +10.8% |   +10 |  1.4% → 1.7% |  93 → 103 | `MemAllocator::allocate`                                        | `libjvm.dylib`             |
|  +42.9% |    +9 |  0.3% → 0.5% |   21 → 30 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` | `libjvm.dylib`             |
|  +17.4% |    +8 |  0.7% → 0.9% |   46 → 54 | `_platform_bzero`                                               | `libsystem_platform.dylib` |
| +200.0% |    +8 |  0.1% → 0.2% |    4 → 12 | `ObjArrayAllocator::initialize`                                 | `libjvm.dylib`             |
|     new |    +8 |  0.0% → 0.1% |     0 → 8 | `G1AdjustRegionClosure::do_heap_region`                         | `libjvm.dylib`             |
|     new |    +8 |  0.0% → 0.1% |     0 → 8 | `G1FullGCAdjustTask::work`                                      | `libjvm.dylib`             |

##### Standard library

|   Change | Delta |            % |   Samples | Function                                         | Location                                             |
| -------: | ----: | -----------: | --------: | ------------------------------------------------ | ---------------------------------------------------- |
|   +11.0% |   +55 |  7.6% → 9.3% | 499 → 554 | `forEach(BiConsumer)`                            | `java.util.HashMap`                                  |
|   +10.9% |   +54 |  7.5% → 9.2% | 494 → 548 | `merge(Object, Object, BiFunction)`              | `java.util.HashMap`                                  |
|   +11.3% |   +33 |  4.4% → 5.4% | 291 → 324 | `copyOf(Object[], int)`                          | `java.util.Arrays`                                   |
|    +9.9% |   +24 |  3.7% → 4.5% | 243 → 267 | `toArray()`                                      | `java.util.ArrayList`                                |
|   +75.0% |   +18 |  0.4% → 0.7% |   24 → 42 | `hash(Object)`                                   | `java.util.HashMap`                                  |
|   +11.8% |   +15 |  1.9% → 2.4% | 127 → 142 | `<init>(Collection)`                             | `java.util.ArrayList`                                |
| +1400.0% |   +14 | <0.1% → 0.3% |    1 → 15 | `hashCode()`                                     | `java.lang.Object`                                   |
|   +27.5% |   +11 |  0.6% → 0.9% |   40 → 51 | `invokeStatic(Object, Object)`                   | `java.lang.invoke.LambdaForm$DMH.0x000000f001004800` |
|   +27.5% |   +11 |  0.6% → 0.9% |   40 → 51 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000f001009800`  |
|   +27.5% |   +11 |  0.6% → 0.9% |   40 → 51 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                   |
|   +27.5% |   +11 |  0.6% → 0.9% |   40 → 51 | `invokeImpl(Object, Object[])`                   | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|   +27.5% |   +11 |  0.6% → 0.9% |   40 → 51 | `invoke(Object, Object[])`                       | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|   +27.5% |   +11 |  0.6% → 0.9% |   40 → 51 | `invoke(Object, Object[])`                       | `java.lang.reflect.Method`                           |
|    +5.3% |    +8 |  2.3% → 2.7% | 152 → 160 | `add(Object)`                                    | `java.util.ArrayList`                                |
|    +4.7% |    +7 |  2.3% → 2.6% | 150 → 157 | `add(Object, Object[], int)`                     | `java.util.ArrayList`                                |
|   +38.9% |    +7 |  0.3% → 0.4% |   18 → 25 | `loadClass(String, boolean)`                     | `java.lang.ClassLoader`                              |
|      new |    +6 |  0.0% → 0.1% |     0 → 6 | `accept(Object)`                                 | `java.util.stream.ReferencePipeline$3$1`             |
|    +2.2% |    +5 |  3.4% → 3.8% | 223 → 228 | `addAll(Collection)`                             | `java.util.ArrayList`                                |
|   +41.7% |    +5 |  0.2% → 0.3% |   12 → 17 | `putMapEntries(Map, boolean)`                    | `java.util.HashMap`                                  |
|   +41.7% |    +5 |  0.2% → 0.3% |   12 → 17 | `<init>(Map)`                                    | `java.util.HashMap`                                  |

##### JIT

|  Change | Delta |           % |   Samples | Function           | Location    |
| ------: | ----: | ----------: | --------: | ------------------ | ----------- |
|  +54.1% |   +59 | 1.7% → 2.8% | 109 → 168 | `zero_blocks`      | `<unknown>` |
| +100.0% |    +1 |       <0.1% |     1 → 2 | `I2C/C2I adapters` | `<unknown>` |
| +100.0% |    +1 |       <0.1% |     1 → 2 | `vtable stub`      | `<unknown>` |

##### Compiler

|  Change | Delta |            % |   Samples | Function                                   | Location       |
| ------: | ----: | -----------: | --------: | ------------------------------------------ | -------------- |
|  +17.5% |   +18 |  1.6% → 2.0% | 103 → 121 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib` |
|  +18.6% |   +11 |  0.9% → 1.2% |   59 → 70 | `Compile::Compile`                         | `libjvm.dylib` |
|  +18.6% |   +11 |  0.9% → 1.2% |   59 → 70 | `C2Compiler::compile_method`               | `libjvm.dylib` |
|  +11.8% |    +9 |  1.2% → 1.4% |   76 → 85 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
|  +33.3% |    +9 |  0.4% → 0.6% |   27 → 36 | `CompileQueue::get`                        | `libjvm.dylib` |
| +900.0% |    +9 | <0.1% → 0.2% |    1 → 10 | `Matcher::match`                           | `libjvm.dylib` |
| +800.0% |    +8 | <0.1% → 0.2% |     1 → 9 | `Matcher::xform`                           | `libjvm.dylib` |
|  +63.6% |    +7 |  0.2% → 0.3% |   11 → 18 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
|  +19.4% |    +6 |  0.5% → 0.6% |   31 → 37 | `Compile::Code_Gen`                        | `libjvm.dylib` |
|  +54.5% |    +6 |  0.2% → 0.3% |   11 → 17 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib` |
| +600.0% |    +6 | <0.1% → 0.1% |     1 → 7 | `Matcher::match_tree`                      | `libjvm.dylib` |
|  +45.5% |    +5 |  0.2% → 0.3% |   11 → 16 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib` |
| +500.0% |    +5 | <0.1% → 0.1% |     1 → 6 | `PhaseLive::compute`                       | `libjvm.dylib` |
|     new |    +5 |  0.0% → 0.1% |     0 → 5 | `Matcher::Label_Root`                      | `libjvm.dylib` |
|  +30.8% |    +4 |  0.2% → 0.3% |   13 → 17 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib` |
| +200.0% |    +4 | <0.1% → 0.1% |     2 → 6 | `PhaseIterGVN::transform_old`              | `libjvm.dylib` |
|     new |    +4 |  0.0% → 0.1% |     0 → 4 | `PhaseChaitin::Select`                     | `libjvm.dylib` |
|     new |    +4 |  0.0% → 0.1% |     0 → 4 | `ciBytecodeStream::get_method`             | `libjvm.dylib` |
|  +14.3% |    +3 |  0.3% → 0.4% |   21 → 24 | `Compile::Optimize`                        | `libjvm.dylib` |
| +100.0% |    +3 | <0.1% → 0.1% |     3 → 6 | `PhaseIterGVN::optimize`                   | `libjvm.dylib` |

#### Improvements

Functions with the largest decrease in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

| Change | Delta |             % |       Samples | Function                                                  | Location                                                   |
| -----: | ----: | ------------: | ------------: | --------------------------------------------------------- | ---------------------------------------------------------- |
|  -9.9% |  -611 | 93.7% → 93.2% | 6,177 → 5,566 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                        |
|  -9.9% |  -611 | 93.7% → 93.2% | 6,177 → 5,566 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`                |
|  -9.0% |  -431 | 72.4% → 72.7% | 4,774 → 4,343 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                        |
|  -8.5% |  -429 | 76.1% → 76.8% | 5,018 → 4,589 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                        |
|  -8.5% |  -429 | 76.1% → 76.8% | 5,018 → 4,589 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
|  -9.0% |  -428 | 72.4% → 72.7% | 4,772 → 4,344 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                        |
|  -8.5% |  -428 | 76.4% → 77.1% | 5,035 → 4,607 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`                        |
|  -8.6% |  -427 | 75.7% → 76.4% | 4,992 → 4,565 | `compute()`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
|  -8.6% |  -427 | 75.7% → 76.4% | 4,992 → 4,565 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                       |
|  -8.0% |  -355 | 66.9% → 67.9% | 4,413 → 4,058 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| -17.6% |  -345 | 29.7% → 27.0% | 1,960 → 1,615 | `park(boolean, long)`                                     | `jdk.internal.misc.Unsafe`                                 |
| -17.5% |  -342 | 29.7% → 27.0% | 1,956 → 1,614 | `Unsafe_Park`                                             | `libjvm.dylib`                                             |
| -17.5% |  -340 | 29.5% → 26.8% | 1,942 → 1,602 | `Parker::park`                                            | `libjvm.dylib`                                             |
| -16.8% |  -335 | 30.3% → 27.9% | 2,000 → 1,665 | `__psynch_cvwait`                                         | `libsystem_kernel.dylib`                                   |
| -16.3% |  -300 | 28.0% → 25.9% | 1,845 → 1,545 | `park()`                                                  | `java.util.concurrent.locks.LockSupport`                   |
| -18.5% |  -277 | 22.7% → 20.4% | 1,498 → 1,221 | `findNearestCentroid()`                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -13.6% |  -273 | 30.5% → 29.1% | 2,009 → 1,736 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -20.3% |  -201 | 15.0% → 13.2% |     991 → 790 | `distance(Double[], Double[])`                            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -15.8% |  -178 | 17.1% → 15.9% |   1,127 → 949 | `awaitWork(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                        |
| -10.2% |  -119 | 17.7% → 17.5% | 1,164 → 1,045 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                        |

##### Ours

|  Change | Delta |             % |       Samples | Function                                                                                                               | Location                                                               |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|   -8.6% |  -427 | 75.7% → 76.4% | 4,992 → 4,565 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  -18.5% |  -277 | 22.7% → 20.4% | 1,498 → 1,221 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -13.6% |  -273 | 30.5% → 29.1% | 2,009 → 1,736 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -20.3% |  -201 | 15.0% → 13.2% |     991 → 790 | `distance(Double[], Double[])`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -13.2% |  -102 | 11.7% → 11.2% |     771 → 669 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -13.2% |  -102 | 11.7% → 11.2% |     771 → 669 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f0011a2bd0` |
|   -5.5% |   -50 | 13.7% → 14.3% |     905 → 855 | `computeClusterAverages()`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   -5.5% |   -50 | 13.7% → 14.3% |     905 → 855 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   -4.5% |   -40 | 13.5% → 14.3% |     893 → 853 | `average(List)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   -2.2% |   -33 | 22.8% → 24.6% | 1,504 → 1,471 | `vectorSum()`                                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   -2.1% |   -32 | 22.8% → 24.7% | 1,505 → 1,473 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| removed |   -22 |   0.3% → 0.0% |        22 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|   -1.8% |   -16 | 13.6% → 14.8% |     899 → 883 | `accumulate(Double[], double[])`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -81.8% |    -9 |  0.2% → <0.1% |        11 → 2 | `boxed(double[])`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -50.0% |    -4 |          0.1% |         8 → 4 | `run(BenchmarkContext)`                                                                                                | `org.renaissance.jdk.concurrent.FjKmeans`                              |
| removed |    -3 |  <0.1% → 0.0% |         3 → 0 | `deleteRecursively(Path, boolean)`                                                                                     | `org.renaissance.core.DirUtils`                                        |
| removed |    -3 |  <0.1% → 0.0% |         3 → 0 | `deleteRecursively(Path)`                                                                                              | `org.renaissance.core.DirUtils`                                        |
| removed |    -3 |  <0.1% → 0.0% |         3 → 0 | `lambda$createScratchDirectory$1(Path)`                                                                                | `org.renaissance.core.DirUtils`                                        |
| removed |    -3 |  <0.1% → 0.0% |         3 → 0 | `run()`                                                                                                                | `org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`             |
|  -50.0% |    -2 |  0.1% → <0.1% |         4 → 2 | `createHandler()`                                                                                                      | `org.renaissance.core.Logging`                                         |

##### Native

|  Change | Delta |             % |       Samples | Function                                                                          | Location                   |
| ------: | ----: | ------------: | ------------: | --------------------------------------------------------------------------------- | -------------------------- |
|  -17.5% |  -342 | 29.7% → 27.0% | 1,956 → 1,614 | `Unsafe_Park`                                                                     | `libjvm.dylib`             |
|  -17.5% |  -340 | 29.5% → 26.8% | 1,942 → 1,602 | `Parker::park`                                                                    | `libjvm.dylib`             |
|  -16.8% |  -335 | 30.3% → 27.9% | 2,000 → 1,665 | `__psynch_cvwait`                                                                 | `libsystem_kernel.dylib`   |
|  -74.1% |   -20 |   0.4% → 0.1% |        27 → 7 | `ConcurrentGCThread::run`                                                         | `libjvm.dylib`             |
| removed |   -19 |   0.3% → 0.0% |        19 → 0 | `G1ConcurrentRefineThread::run_service`                                           | `libjvm.dylib`             |
|   -4.5% |   -16 |   5.4% → 5.7% |     355 → 339 | `Thread::call_run`                                                                | `libjvm.dylib`             |
|   -4.2% |   -15 |   5.4% → 5.7% |     355 → 340 | `thread_native_entry`                                                             | `libjvm.dylib`             |
| removed |   -15 |   0.2% → 0.0% |        15 → 0 | `G1ParScanThreadState::trim_queue_to_threshold`                                   | `libjvm.dylib`             |
| removed |   -15 |   0.2% → 0.0% |        15 → 0 | `G1PrimaryConcurrentRefineThread::wait_for_completed_buffers`                     | `libjvm.dylib`             |
|   -3.9% |   -14 |   5.4% → 5.7% |     355 → 341 | `_pthread_start`                                                                  | `libsystem_pthread.dylib`  |
|   -3.9% |   -14 |   5.4% → 5.7% |     355 → 341 | `thread_start`                                                                    | `libsystem_pthread.dylib`  |
|  -15.2% |   -14 |   1.4% → 1.3% |       92 → 78 | `semaphore_wait_trap`                                                             | `libsystem_kernel.dylib`   |
|  -54.2% |   -13 |   0.4% → 0.2% |       24 → 11 | `_platform_memset`                                                                | `libsystem_platform.dylib` |
| removed |   -12 |   0.2% → 0.0% |        12 → 0 | `G1ParScanThreadState::steal_and_trim_queue`                                      | `libjvm.dylib`             |
| removed |   -10 |   0.2% → 0.0% |        10 → 0 | `G1ParScanThreadState::do_copy_to_survivor_space`                                 | `libjvm.dylib`             |
|   -4.7% |    -9 |   2.9% → 3.0% |     191 → 182 | `WorkerThread::run`                                                               | `libjvm.dylib`             |
|  -10.4% |    -8 |          1.2% |       77 → 69 | `Unsafe_Unpark`                                                                   | `libjvm.dylib`             |
|  -13.8% |    -8 |   0.9% → 0.8% |       58 → 50 | `arrayof_oop_disjoint_arraycopy`                                                  | `<unknown>`                |
|  -50.0% |    -8 |   0.2% → 0.1% |        16 → 8 | `HeapRegionManager::par_iterate`                                                  | `libjvm.dylib`             |
| removed |    -8 |   0.1% → 0.0% |         8 → 0 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region` | `libjvm.dylib`             |

##### Standard library

| Change | Delta |             % |       Samples | Function                                                  | Location                                            |
| -----: | ----: | ------------: | ------------: | --------------------------------------------------------- | --------------------------------------------------- |
|  -9.9% |  -611 | 93.7% → 93.2% | 6,177 → 5,566 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                 |
|  -9.9% |  -611 | 93.7% → 93.2% | 6,177 → 5,566 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`         |
|  -9.0% |  -431 | 72.4% → 72.7% | 4,774 → 4,343 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                 |
|  -8.5% |  -429 | 76.1% → 76.8% | 5,018 → 4,589 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                 |
|  -8.5% |  -429 | 76.1% → 76.8% | 5,018 → 4,589 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
|  -9.0% |  -428 | 72.4% → 72.7% | 4,772 → 4,344 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                 |
|  -8.5% |  -428 | 76.4% → 77.1% | 5,035 → 4,607 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`                 |
|  -8.6% |  -427 | 75.7% → 76.4% | 4,992 → 4,565 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                |
|  -8.0% |  -355 | 66.9% → 67.9% | 4,413 → 4,058 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| -17.6% |  -345 | 29.7% → 27.0% | 1,960 → 1,615 | `park(boolean, long)`                                     | `jdk.internal.misc.Unsafe`                          |
| -16.3% |  -300 | 28.0% → 25.9% | 1,845 → 1,545 | `park()`                                                  | `java.util.concurrent.locks.LockSupport`            |
| -15.8% |  -178 | 17.1% → 15.9% |   1,127 → 949 | `awaitWork(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                 |
| -10.2% |  -119 | 17.7% → 17.5% | 1,164 → 1,045 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                 |
|  -7.6% |  -106 | 21.2% → 21.7% | 1,401 → 1,295 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`                 |
| -13.2% |  -102 | 11.7% → 11.2% |     771 → 669 | `exec()`                                                  | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
| -22.0% |   -45 |   3.1% → 2.7% |     205 → 160 | `get(int)`                                                | `java.util.ArrayList`                               |
| -38.8% |   -45 |   1.8% → 1.2% |      116 → 71 | `parkUntil(long)`                                         | `java.util.concurrent.locks.LockSupport`            |
| -21.6% |   -35 |   2.5% → 2.1% |     162 → 127 | `elementData(int)`                                        | `java.util.ArrayList`                               |
| -29.3% |   -12 |   0.6% → 0.5% |       41 → 29 | `checkIndex(int, int)`                                    | `java.util.Objects`                                 |
| -10.9% |   -11 |          1.5% |      101 → 90 | `doubleValue()`                                           | `java.lang.Double`                                  |

##### JIT

| Change | Delta |     % | Samples | Function                   | Location    |
| -----: | ----: | ----: | ------: | -------------------------- | ----------- |
| -50.0% |    -1 | <0.1% |   2 → 1 | `I2C/C2I adapters(0xbbaa)` | `<unknown>` |

##### Compiler

|  Change | Delta |            % | Samples | Function                                      | Location       |
| ------: | ----: | -----------: | ------: | --------------------------------------------- | -------------- |
|  -66.7% |    -6 |         0.1% |   9 → 3 | `PhaseCFG::global_code_motion`                | `libjvm.dylib` |
|  -66.7% |    -6 |         0.1% |   9 → 3 | `PhaseCFG::do_global_code_motion`             | `libjvm.dylib` |
|  -85.7% |    -6 | 0.1% → <0.1% |   7 → 1 | `ciEnv::register_method`                      | `libjvm.dylib` |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `PhaseChaitin::gather_lrg_masks`              | `libjvm.dylib` |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `PhaseCCP::transform`                         | `libjvm.dylib` |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `PhaseCCP::do_transform`                      | `libjvm.dylib` |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `PhaseCCP::push_child_nodes_to_worklist`      | `libjvm.dylib` |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `PhaseCCP::analyze`                           | `libjvm.dylib` |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `PhaseCCP::PhaseCCP`                          | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `PhaseOutput::install_code`                   | `libjvm.dylib` |
|  -66.7% |    -2 |        <0.1% |   3 → 1 | `PhaseCFG::schedule_late`                     | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `Node_Backward_Iterator::next`                | `libjvm.dylib` |
|  -66.7% |    -2 |        <0.1% |   3 → 1 | `PhaseChaitin::build_ifg_physical`            | `libjvm.dylib` |
|  -25.0% |    -2 |         0.1% |   8 → 6 | `CompileBroker::compile_method`               | `libjvm.dylib` |
|  -66.7% |    -2 |        <0.1% |   3 → 1 | `CompilationPolicy::method_back_branch_event` | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `PhaseChaitin::raise_pressure`                | `libjvm.dylib` |
|  -66.7% |    -2 |        <0.1% |   3 → 1 | `CompileBroker::create_compile_task`          | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `LIR_Assembler::emit_lir_list`                | `libjvm.dylib` |
|  -12.5% |    -2 |         0.2% | 16 → 14 | `Compilation::compile_method`                 | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `ciMethod::ensure_method_data`                | `libjvm.dylib` |

#### Callers

Callers with the largest change in contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller                           | Location                                                   |
| -----: | ----: | -----: | --------: | -------------------------------- | ---------------------------------------------------------- |
| +12.2% |   +62 | 100.0% | 510 → 572 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |             % |   Samples | Caller                     | Location                                                   |
| -----: | ----: | ------------: | --------: | -------------------------- | ---------------------------------------------------------- |
| +12.2% |   +62 | 99.4% → 99.7% | 510 → 572 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -33.3% |    -1 |   0.6% → 0.3% |     3 → 2 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller      | Location                                               |
| -----: | ----: | -----: | --------: | ----------- | ------------------------------------------------------ |
| +11.7% |   +60 | 100.0% | 513 → 573 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `zero_blocks` (`<unknown>`)

|  Change | Delta |             % |  Samples | Caller                              | Location                                                   |
| ------: | ----: | ------------: | -------: | ----------------------------------- | ---------------------------------------------------------- |
|  +60.9% |   +42 | 63.3% → 66.1% | 69 → 111 | `merge(Object, Object, BiFunction)` | `java.util.HashMap`                                        |
|  +31.3% |   +10 | 29.4% → 25.0% |  32 → 42 | `grow(int)`                         | `java.util.ArrayList`                                      |
| +100.0% |    +7 |   6.4% → 8.3% |   7 → 14 | `findNearestCentroid()`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |    -1 |   0.9% → 0.0% |    1 → 0 | `copyOf(Object[], int, Class)`      | `java.util.Arrays`                                         |
|     new |    +1 |   0.0% → 0.6% |    0 → 1 | `<init>(Collection)`                | `java.util.ArrayList`                                      |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

| Change | Delta |      % |   Samples | Caller            | Location                                    |
| -----: | ----: | -----: | --------: | ----------------- | ------------------------------------------- |
| +11.0% |   +55 | 100.0% | 499 → 554 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

| Change | Delta |      % |   Samples | Caller                              | Location                                    |
| -----: | ----: | -----: | --------: | ----------------------------------- | ------------------------------------------- |
| +10.9% |   +54 | 100.0% | 494 → 548 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % |   Samples | Caller                   | Location                                                               |
| -----: | ----: | -----: | --------: | ------------------------ | ---------------------------------------------------------------------- |
| +10.7% |   +53 | 100.0% | 495 → 548 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f0011a7000` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f0011a7000`)

| Change | Delta |      % |   Samples | Caller                | Location            |
| -----: | ----: | -----: | --------: | --------------------- | ------------------- |
| +10.7% |   +53 | 100.0% | 495 → 548 | `forEach(BiConsumer)` | `java.util.HashMap` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change | Delta |             % |   Samples | Caller      | Location              |
| -----: | ----: | ------------: | --------: | ----------- | --------------------- |
| +10.8% |   +26 | 82.8% → 82.4% | 241 → 267 | `toArray()` | `java.util.ArrayList` |
| +14.0% |    +7 | 17.2% → 17.6% |   50 → 57 | `grow(int)` | `java.util.ArrayList` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change | Delta |             % | Samples | Caller              | Location                                                               |
| -----: | ----: | ------------: | ------: | ------------------- | ---------------------------------------------------------------------- |
|    new |   +27 | 0.0% → 100.0% |  0 → 27 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000f00111f1b8` |

##### `toArray()` (`java.util.ArrayList`)

| Change | Delta |             % |   Samples | Caller               | Location              |
| -----: | ----: | ------------: | --------: | -------------------- | --------------------- |
| +10.2% |   +13 | 52.3% → 52.4% | 127 → 140 | `<init>(Collection)` | `java.util.ArrayList` |
|  +9.5% |   +11 | 47.7% → 47.6% | 116 → 127 | `addAll(Collection)` | `java.util.ArrayList` |

##### `G1FullGCMarker::follow_marking_stacks` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                             | Location       |
| ------: | ----: | -----: | ------: | ---------------------------------- | -------------- |
| +114.3% |   +24 | 100.0% | 21 → 45 | `G1FullGCMarker::complete_marking` | `libjvm.dylib` |

##### `_new_array_Java` (`<unknown>`)

|  Change | Delta |             % |  Samples | Caller                  | Location                                                   |
| ------: | ----: | ------------: | -------: | ----------------------- | ---------------------------------------------------------- |
|  +19.1% |   +17 | 96.7% → 93.8% | 89 → 106 | `copyOf(Object[], int)` | `java.util.Arrays`                                         |
| +100.0% |    +3 |   3.3% → 5.3% |    3 → 6 | `findNearestCentroid()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|     new |    +1 |   0.0% → 0.9% |    0 → 1 | `grow(int)`             | `java.util.ArrayList`                                      |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % |   Samples | Caller                  | Location                                                               |
| -----: | ----: | -----: | --------: | ----------------------- | ---------------------------------------------------------------------- |
|  +5.7% |   +20 | 100.0% | 353 → 373 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f0011a7490` |

##### `G1ParEvacuateFollowersClosure::offer_termination` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                                   | Location       |
| ------: | ----: | -----: | ------: | ---------------------------------------- | -------------- |
| +166.7% |   +20 | 100.0% | 12 → 32 | `G1ParEvacuateFollowersClosure::do_void` | `libjvm.dylib` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f0011a7490`)

| Change | Delta |      % |   Samples | Caller                              | Location            |
| -----: | ----: | -----: | --------: | ----------------------------------- | ------------------- |
|  +5.4% |   +19 | 100.0% | 354 → 373 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `OptoRuntime::new_array_C` (`libjvm.dylib`)

| Change | Delta |      % |  Samples | Caller            | Location    |
| -----: | ----: | -----: | -------: | ----------------- | ----------- |
| +21.6% |   +19 | 100.0% | 88 → 107 | `_new_array_Java` | `<unknown>` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller                          | Location       |
| -----: | ----: | -----: | --------: | ------------------------------- | -------------- |
| +17.5% |   +18 | 100.0% | 103 → 121 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `hash(Object)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Caller                              | Location            |
| ------: | ----: | ------------: | ------: | ----------------------------------- | ------------------- |
|  +85.7% |   +18 | 87.5% → 92.9% | 21 → 39 | `computeIfAbsent(Object, Function)` | `java.util.HashMap` |
|     new |    +2 |   0.0% → 4.8% |   0 → 2 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |
|  -50.0% |    -1 |   8.3% → 2.4% |   2 → 1 | `putMapEntries(Map, boolean)`       | `java.util.HashMap` |
| removed |    -1 |   4.2% → 0.0% |   1 → 0 | `put(Object, Object)`               | `java.util.HashMap` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller             | Location       |
| -----: | ----: | -----: | --------: | ------------------ | -------------- |
| +15.7% |   +17 | 100.0% | 108 → 125 | `Thread::call_run` | `libjvm.dylib` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

| Change | Delta |      % | Samples | Caller           | Location                        |
| -----: | ----: | -----: | ------: | ---------------- | ------------------------------- |
| +29.8% |   +14 | 100.0% | 47 → 61 | `main(String[])` | `org.renaissance.core.Launcher` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

| Change | Delta |      % | Samples | Caller                                 | Location                        |
| -----: | ----: | -----: | ------: | -------------------------------------- | ------------------------------- |
| +31.1% |   +14 | 100.0% | 45 → 59 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

| Change | Delta |      % | Samples | Caller                         | Location                                             |
| -----: | ----: | -----: | ------: | ------------------------------ | ---------------------------------------------------- |
| +27.5% |   +11 | 100.0% | 40 → 51 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f001004800` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

| Change | Delta |      % | Samples | Caller           | Location                                   |
| -----: | ----: | -----: | ------: | ---------------- | ------------------------------------------ |
| +28.9% |   +11 | 100.0% | 38 → 49 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda`)

|  Change | Delta |              % | Samples | Caller                                           | Location                                                           |
| ------: | ----: | -------------: | ------: | ------------------------------------------------ | ------------------------------------------------------------------ |
|     new |    +5 |   0.0% → 55.6% |   0 → 5 | `lambda$toCsvRows$2(String[], Function, String)` | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter` |
| +300.0% |    +3 | 100.0% → 44.4% |   1 → 4 | `map(Function1)`                                 | `scala.collection.immutable.Range`                                 |

##### `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |      % | Samples | Caller               | Location                                  |
| -----: | ----: | -----: | ------: | -------------------- | ----------------------------------------- |
| +66.7% |    +6 | 100.0% |  9 → 15 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change | Delta |      % | Samples | Caller           | Location                                    |
| -----: | ----: | -----: | ------: | ---------------- | ------------------------------------------- |
| +20.8% |    +5 | 100.0% | 24 → 29 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite$` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000f00111f1b8`)

| Change | Delta |      % | Samples | Caller          | Location                             |
| -----: | ----: | -----: | ------: | --------------- | ------------------------------------ |
| +22.7% |    +5 | 100.0% | 22 → 27 | `apply(Object)` | `scala.runtime.function.JProcedure1` |

##### `rowToArray$1(Map)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |             % | Samples | Caller                           | Location                                  |
| -----: | ----: | ------------: | ------: | -------------------------------- | ----------------------------------------- |
|    new |    +5 | 0.0% → 100.0% |   0 → 5 | `setUpBeforeAll$$anonfun$1(Map)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `setUpBeforeAll$$anonfun$1(Map)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |             % | Samples | Caller          | Location                                          |
| -----: | ----: | ------------: | ------: | --------------- | ------------------------------------------------- |
|    new |    +5 | 0.0% → 100.0% |   0 → 5 | `apply(Object)` | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda` |

##### `lambda$toCsvRows$2(String[], Function, String)` (`org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`)

| Change | Delta |             % | Samples | Caller          | Location                                                                                      |
| -----: | ----: | ------------: | ------: | --------------- | --------------------------------------------------------------------------------------------- |
|    new |    +5 | 0.0% → 100.0% |   0 → 5 | `apply(Object)` | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter$$Lambda.0x000000f001123bf8` |

##### `CollectedHeap::array_allocate` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                             | Location       |
| -----: | ----: | ------------: | ------: | ---------------------------------- | -------------- |
| +16.7% |   +14 | 96.6% → 95.1% | 84 → 98 | `InstanceKlass::allocate_objArray` | `libjvm.dylib` |
| +66.7% |    +2 |   3.4% → 4.9% |   3 → 5 | `OptoRuntime::new_array_C`         | `libjvm.dylib` |

##### `pthread_jit_write_protect_np` (`libsystem_pthread.dylib`)

|  Change | Delta |             % | Samples | Caller                     | Location       |
| ------: | ----: | ------------: | ------: | -------------------------- | -------------- |
|     new |   +13 |  0.0% → 41.9% |  0 → 13 | `JVM_IHashCode`            | `libjvm.dylib` |
| +150.0% |    +3 | 13.3% → 16.1% |   2 → 5 | `_new_array_Java`          | `<unknown>`    |
|  -50.0% |    -2 |  26.7% → 6.5% |   4 → 2 | `Unsafe_Unpark`            | `libjvm.dylib` |
| +200.0% |    +2 |   6.7% → 9.7% |   1 → 3 | `OptoRuntime::new_array_C` | `libjvm.dylib` |
|  -50.0% |    -1 |  13.3% → 3.2% |   2 → 1 | `Unsafe_AllocateInstance`  | `libjvm.dylib` |

##### `TaskTerminator::offer_termination` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                             | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- | -------------- |
| +166.7% |   +20 | 57.1% → 88.9% | 12 → 32 | `G1ParEvacuateFollowersClosure::offer_termination` | `libjvm.dylib` |
|  -55.6% |    -5 | 42.9% → 11.1% |   9 → 4 | `G1FullGCMarker::complete_marking`                 | `libjvm.dylib` |

##### `G1FullGCMarker::complete_marking` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                   | Location       |
| -----: | ----: | -----: | ------: | ------------------------ | -------------- |
| +31.8% |   +14 | 100.0% | 44 → 58 | `G1FullGCMarkTask::work` | `libjvm.dylib` |

##### `G1FullGCMarkTask::work` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller              | Location       |
| -----: | ----: | -----: | ------: | ------------------- | -------------- |
| +31.8% |   +14 | 100.0% | 44 → 58 | `WorkerThread::run` | `libjvm.dylib` |

##### `JVM_IHashCode` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller       | Location           |
| -----: | ----: | ------------: | ------: | ------------ | ------------------ |
|    new |   +14 | 0.0% → 100.0% |  0 → 14 | `hashCode()` | `java.lang.Object` |

##### `G1FullGCMarker::publish_and_drain_oop_tasks` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                                  | Location       |
| ------: | ----: | -----: | ------: | --------------------------------------- | -------------- |
| +216.7% |   +13 | 100.0% |  6 → 19 | `G1FullGCMarker::follow_marking_stacks` | `libjvm.dylib` |

##### `InstanceKlass::allocate_objArray` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                          | Location       |
| ------: | ----: | -------------: | ------: | ------------------------------- | -------------- |
|  +16.7% |   +14 | 97.7% → 100.0% | 84 → 98 | `OptoRuntime::new_array_C`      | `libjvm.dylib` |
| removed |    -1 |    1.2% → 0.0% |   1 → 0 | `InterpreterRuntime::anewarray` | `libjvm.dylib` |
| removed |    -1 |    1.2% → 0.0% |   1 → 0 | `_new_array_Java`               | `<unknown>`    |

##### `G1FullGCMarker::follow_object` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                                        | Location       |
| ------: | ----: | -------------: | ------: | --------------------------------------------- | -------------- |
| +450.0% |    +9 | 100.0% → 84.6% |  2 → 11 | `G1FullGCMarker::publish_and_drain_oop_tasks` | `libjvm.dylib` |
|     new |    +2 |   0.0% → 15.4% |   0 → 2 | `G1FullGCMarker::follow_marking_stacks`       | `libjvm.dylib` |

##### `MemAllocator::allocate` (`libjvm.dylib`)

|  Change | Delta |              % |  Samples | Caller                             | Location       |
| ------: | ----: | -------------: | -------: | ---------------------------------- | -------------- |
|  +18.4% |   +16 | 93.5% → 100.0% | 87 → 103 | `CollectedHeap::array_allocate`    | `libjvm.dylib` |
| removed |    -5 |    5.4% → 0.0% |    5 → 0 | `InstanceKlass::allocate_instance` | `libjvm.dylib` |
| removed |    -1 |    1.1% → 0.0% |    1 → 0 | `InstanceKlass::allocate_objArray` | `libjvm.dylib` |

##### `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                  | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------------- | -------------- |
| +91.7% |   +11 | 57.1% → 76.7% | 12 → 23 | `G1FullGCMarker::follow_marking_stacks` | `libjvm.dylib` |
| -22.2% |    -2 | 42.9% → 23.3% |   9 → 7 | `G1FullGCMarker::complete_marking`      | `libjvm.dylib` |

##### `_platform_bzero` (`libsystem_platform.dylib`)

|  Change | Delta |              % | Samples | Caller                               | Location       |
| ------: | ----: | -------------: | ------: | ------------------------------------ | -------------- |
|  +22.7% |   +10 | 95.7% → 100.0% | 44 → 54 | `MemAllocator::allocate`             | `libjvm.dylib` |
| removed |    -1 |    2.2% → 0.0% |   1 → 0 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |
| removed |    -1 |    2.2% → 0.0% |   1 → 0 | `stringStream::~stringStream`        | `libjvm.dylib` |

##### `ObjArrayAllocator::initialize` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                   | Location       |
| ------: | ----: | -----: | ------: | ------------------------ | -------------- |
| +200.0% |    +8 | 100.0% |  4 → 12 | `MemAllocator::allocate` | `libjvm.dylib` |

##### `G1AdjustRegionClosure::do_heap_region` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                           | Location       |
| -----: | ----: | ------------: | ------: | -------------------------------- | -------------- |
|    new |    +8 | 0.0% → 100.0% |   0 → 8 | `HeapRegionManager::par_iterate` | `libjvm.dylib` |

##### `G1FullGCAdjustTask::work` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller              | Location       |
| -----: | ----: | ------------: | ------: | ------------------- | -------------- |
|    new |    +8 | 0.0% → 100.0% |   0 → 8 | `WorkerThread::run` | `libjvm.dylib` |

##### `<init>(Collection)` (`java.util.ArrayList`)

| Change | Delta |      % |   Samples | Caller                       | Location                                    |
| -----: | ----: | -----: | --------: | ---------------------------- | ------------------------------------------- |
| +11.8% |   +15 | 100.0% | 127 → 142 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `hashCode()` (`java.lang.Object`)

|   Change | Delta |      % | Samples | Caller         | Location            |
| -------: | ----: | -----: | ------: | -------------- | ------------------- |
| +1400.0% |   +14 | 100.0% |  1 → 15 | `hash(Object)` | `java.util.HashMap` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000f001004800`)

| Change | Delta |      % | Samples | Caller                           | Location                                            |
| -----: | ----: | -----: | ------: | -------------------------------- | --------------------------------------------------- |
| +27.5% |   +11 | 100.0% | 40 → 51 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f001009800` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f001009800`)

| Change | Delta |      % | Samples | Caller                                           | Location                           |
| -----: | ----: | -----: | ------: | ------------------------------------------------ | ---------------------------------- |
| +27.5% |   +11 | 100.0% | 40 → 51 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change | Delta |      % | Samples | Caller                         | Location                                          |
| -----: | ----: | -----: | ------: | ------------------------------ | ------------------------------------------------- |
| +27.5% |   +11 | 100.0% | 40 → 51 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change | Delta |      % | Samples | Caller                     | Location                                          |
| -----: | ----: | -----: | ------: | -------------------------- | ------------------------------------------------- |
| +27.5% |   +11 | 100.0% | 40 → 51 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change | Delta |      % | Samples | Caller                     | Location                   |
| -----: | ----: | -----: | ------: | -------------------------- | -------------------------- |
| +27.5% |   +11 | 100.0% | 40 → 51 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

| Change | Delta |      % | Samples | Caller                                                      | Location                        |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------- | ------------------------------- |
| +27.5% |   +11 | 100.0% | 40 → 51 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher` |

##### `add(Object)` (`java.util.ArrayList`)

| Change | Delta |      % |   Samples | Caller                   | Location                                                   |
| -----: | ----: | -----: | --------: | ------------------------ | ---------------------------------------------------------- |
|  +5.3% |    +8 | 100.0% | 152 → 160 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

| Change | Delta |      % |   Samples | Caller        | Location              |
| -----: | ----: | -----: | --------: | ------------- | --------------------- |
|  +4.7% |    +7 | 100.0% | 150 → 157 | `add(Object)` | `java.util.ArrayList` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

| Change | Delta |      % | Samples | Caller              | Location                |
| -----: | ----: | -----: | ------: | ------------------- | ----------------------- |
| +38.9% |    +7 | 100.0% | 18 → 25 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `accept(Object)` (`java.util.stream.ReferencePipeline$3$1`)

| Change | Delta |            % | Samples | Caller                       | Location                                  |
| -----: | ----: | -----------: | ------: | ---------------------------- | ----------------------------------------- |
|    new |    +5 | 0.0% → 83.3% |   0 → 5 | `forEachRemaining(Consumer)` | `java.util.Spliterators$ArraySpliterator` |
|    new |    +1 | 0.0% → 16.7% |   0 → 1 | `forEachRemaining(Consumer)` | `java.util.TreeMap$KeySpliterator`        |

##### `addAll(Collection)` (`java.util.ArrayList`)

| Change | Delta |      % |   Samples | Caller                       | Location                                    |
| -----: | ----: | -----: | --------: | ---------------------------- | ------------------------------------------- |
|  +2.2% |    +5 | 100.0% | 223 → 228 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `putMapEntries(Map, boolean)` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Caller        | Location            |
| -----: | ----: | -----: | ------: | ------------- | ------------------- |
| +41.7% |    +5 | 100.0% | 12 → 17 | `<init>(Map)` | `java.util.HashMap` |

##### `<init>(Map)` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Caller            | Location                                    |
| -----: | ----: | -----: | ------: | ----------------- | ------------------------------------------- |
| +41.7% |    +5 | 100.0% | 12 → 17 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `I2C/C2I adapters` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                         | Location                            |
| ------: | ----: | ------------: | ------: | ------------------------------ | ----------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `getInputStream(ZipEntry)`     | `java.util.jar.JarFile`             |
|     new |    +1 |  0.0% → 50.0% |   0 → 1 | `compareAndSetCtl(long, long)` | `java.util.concurrent.ForkJoinPool` |

##### `vtable stub` (`<unknown>`)

| Change | Delta |            % | Samples | Caller   | Location                            |
| -----: | ----: | -----------: | ------: | -------- | ----------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `Compile::Compile` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                       | Location       |
| -----: | ----: | -----: | ------: | ---------------------------- | -------------- |
| +18.6% |   +11 | 100.0% | 59 → 70 | `C2Compiler::compile_method` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                     | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------------ | -------------- |
| +18.6% |   +11 | 100.0% | 59 → 70 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------- | -------------- |
| +11.8% |    +9 | 100.0% | 76 → 85 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `CompileQueue::get` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------- | -------------- |
| +33.3% |    +9 | 100.0% | 27 → 36 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `Matcher::match` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller              | Location       |
| ------: | ----: | -----: | ------: | ------------------- | -------------- |
| +900.0% |    +9 | 100.0% |  1 → 10 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `Matcher::xform` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller           | Location       |
| ------: | ----: | -----: | ------: | ---------------- | -------------- |
| +800.0% |    +8 | 100.0% |   1 → 9 | `Matcher::match` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                    | Location       |
| -----: | ----: | ------------: | ------: | ------------------------- | -------------- |
| +83.3% |    +5 | 54.5% → 61.1% |  6 → 11 | `Compile::Optimize`       | `libjvm.dylib` |
| +40.0% |    +2 | 45.5% → 38.9% |   5 → 7 | `Compile::optimize_loops` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller             | Location       |
| -----: | ----: | -----: | ------: | ------------------ | -------------- |
| +19.4% |    +6 | 100.0% | 31 → 37 | `Compile::Compile` | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                     | Location       |
| -----: | ----: | -----: | ------: | -------------------------- | -------------- |
| +54.5% |    +6 | 100.0% | 11 → 17 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `Matcher::match_tree` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller           | Location       |
| ------: | ----: | -----: | ------: | ---------------- | -------------- |
| +600.0% |    +6 | 100.0% |   1 → 7 | `Matcher::xform` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                           | Location       |
| -----: | ----: | -----: | ------: | -------------------------------- | -------------- |
| +45.5% |    +5 | 100.0% | 11 → 16 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |

##### `PhaseLive::compute` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                            | Location       |
| ------: | ----: | -----: | ------: | --------------------------------- | -------------- |
| +500.0% |    +5 | 100.0% |   1 → 6 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `Matcher::Label_Root` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                | Location       |
| -----: | ----: | ------------: | ------: | --------------------- | -------------- |
|    new |    +5 | 0.0% → 100.0% |   0 → 5 | `Matcher::match_tree` | `libjvm.dylib` |
|    new |    +3 |  0.0% → 60.0% |   0 → 3 | `Matcher::Label_Root` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller              | Location       |
| -----: | ----: | -----: | ------: | ------------------- | -------------- |
| +30.8% |    +4 | 100.0% | 13 → 17 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                   | Location       |
| ------: | ----: | -----------: | ------: | ------------------------ | -------------- |
| +200.0% |    +4 |       100.0% |   2 → 6 | `PhaseIterGVN::optimize` | `libjvm.dylib` |
|     new |    +1 | 0.0% → 16.7% |   0 → 1 | `adjust_check`           | `libjvm.dylib` |

##### `PhaseChaitin::Select` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                            | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------- | -------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `ciBytecodeStream::get_method` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                               | Location       |
| -----: | ----: | -----------: | ------: | ------------------------------------ | -------------- |
|    new |    +2 | 0.0% → 50.0% |   0 → 2 | `GraphBuilder::invoke`               | `libjvm.dylib` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `Parse::do_call`                     | `libjvm.dylib` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `ciTypeFlow::StateVector::do_invoke` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller             | Location       |
| -----: | ----: | -----: | ------: | ------------------ | -------------- |
| +14.3% |    +3 | 100.0% | 21 → 24 | `Compile::Compile` | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                                     | Location       |
| -----: | ----: | -----------: | ------: | ------------------------------------------ | -------------- |
|    new |    +1 | 0.0% → 16.7% |   0 → 1 | `Compile::process_for_post_loop_opts_igvn` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 16.7% |   0 → 1 | `PhaseMacroExpand::expand_macro_nodes`     | `libjvm.dylib` |
|    new |    +1 | 0.0% → 16.7% |   0 → 1 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % |       Samples | Caller  | Location                                    |
| -----: | ----: | -----: | ------------: | ------- | ------------------------------------------- |
|  -9.9% |  -611 | 100.0% | 6,177 → 5,566 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |      % |       Samples | Caller      | Location                                               |
| -----: | ----: | -----: | ------------: | ----------- | ------------------------------------------------------ |
|  -9.0% |  -431 | 100.0% | 4,774 → 4,343 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % |       Samples | Caller                                                    | Location                                      |
| -----: | ----: | ------------: | ------------: | --------------------------------------------------------- | --------------------------------------------- |
|  -8.5% |  -429 |        100.0% | 5,018 → 4,589 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  -8.1% |  -357 | 87.9% → 88.4% | 4,413 → 4,056 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| -10.4% |  -119 | 22.7% → 22.2% | 1,140 → 1,021 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
|  -7.5% |  -105 | 27.9% → 28.2% | 1,400 → 1,295 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`           |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |      % |       Samples | Caller                                   | Location                            |
| -----: | ----: | -----: | ------------: | ---------------------------------------- | ----------------------------------- |
|  -8.5% |  -429 | 100.0% | 5,018 → 4,589 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |            % |       Samples | Caller   | Location                            |
| -----: | ----: | -----------: | ------------: | -------- | ----------------------------------- |
|  -9.0% |  -430 |       100.0% | 4,772 → 4,342 | `join()` | `java.util.concurrent.ForkJoinTask` |
|    new |    +2 | 0.0% → <0.1% |         0 → 2 | `get()`  | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % |       Samples | Caller                              | Location                            |
| -----: | ----: | -----: | ------------: | ----------------------------------- | ----------------------------------- |
|  -8.5% |  -428 | 100.0% | 5,035 → 4,607 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change | Delta |      % |       Samples | Caller   | Location                             |
| -----: | ----: | -----: | ------------: | -------- | ------------------------------------ |
|  -8.6% |  -427 | 100.0% | 4,992 → 4,565 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change | Delta |      % |       Samples | Caller     | Location                            |
| -----: | ----: | -----: | ------------: | ---------- | ----------------------------------- |
|  -8.6% |  -427 | 100.0% | 4,992 → 4,565 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |      % |       Samples | Caller                 | Location                            |
| -----: | ----: | -----: | ------------: | ---------------------- | ----------------------------------- |
|  -8.0% |  -355 | 100.0% | 4,413 → 4,058 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

| Change | Delta |             % |       Samples | Caller            | Location                                 |
| -----: | ----: | ------------: | ------------: | ----------------- | ---------------------------------------- |
| -16.3% |  -300 | 94.1% → 95.6% | 1,844 → 1,544 | `park()`          | `java.util.concurrent.locks.LockSupport` |
| -38.8% |   -45 |   5.9% → 4.4% |      116 → 71 | `parkUntil(long)` | `java.util.concurrent.locks.LockSupport` |

##### `Unsafe_Park` (`libjvm.dylib`)

| Change | Delta |      % |       Samples | Caller                | Location                   |
| -----: | ----: | -----: | ------------: | --------------------- | -------------------------- |
| -17.5% |  -342 | 100.0% | 1,956 → 1,614 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `Parker::park` (`libjvm.dylib`)

| Change | Delta |      % |       Samples | Caller        | Location       |
| -----: | ----: | -----: | ------------: | ------------- | -------------- |
| -17.5% |  -340 | 100.0% | 1,942 → 1,602 | `Unsafe_Park` | `libjvm.dylib` |

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|  Change | Delta |             % |       Samples | Caller                      | Location       |
| ------: | ----: | ------------: | ------------: | --------------------------- | -------------- |
|  -17.5% |  -337 | 96.4% → 95.5% | 1,927 → 1,590 | `Parker::park`              | `libjvm.dylib` |
|   +2.8% |    +2 |   3.6% → 4.4% |       72 → 74 | `PlatformMonitor::wait`     | `libjvm.dylib` |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `PlatformEvent::park_nanos` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 0.1% |         0 → 1 | `PlatformEvent::park`       | `libjvm.dylib` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

| Change | Delta |             % |     Samples | Caller                              | Location                            |
| -----: | ----: | ------------: | ----------: | ----------------------------------- | ----------------------------------- |
| -19.5% |  -163 | 45.3% → 43.6% |   836 → 673 | `awaitDone(int, long)`              | `java.util.concurrent.ForkJoinTask` |
| -13.6% |  -137 | 54.7% → 56.4% | 1,009 → 872 | `awaitWork(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |       Samples | Caller              | Location                                                   |
| -----: | ----: | -----: | ------------: | ------------------- | ---------------------------------------------------------- |
| -18.5% |  -277 | 100.0% | 1,498 → 1,221 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |              % |       Samples | Caller              | Location                                                   |
| -----: | ----: | -------------: | ------------: | ------------------- | ---------------------------------------------------------- |
| -13.6% |  -273 | 100.0% → 99.9% | 2,008 → 1,735 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -13.6% |  -273 |         100.0% | 2,009 → 1,736 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller                  | Location                                                   |
| -----: | ----: | -----: | --------: | ----------------------- | ---------------------------------------------------------- |
| -20.3% |  -201 | 100.0% | 991 → 790 | `findNearestCentroid()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % |     Samples | Caller                              | Location                            |
| -----: | ----: | -----: | ----------: | ----------------------------------- | ----------------------------------- |
| -15.8% |  -178 | 100.0% | 1,127 → 949 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % |       Samples | Caller                 | Location                            |
| -----: | ----: | -----: | ------------: | ---------------------- | ----------------------------------- |
| -10.2% |  -119 | 100.0% | 1,164 → 1,045 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % |   Samples | Caller   | Location                                                               |
| -----: | ----: | -----: | --------: | -------- | ---------------------------------------------------------------------- |
| -13.2% |  -102 | 100.0% | 771 → 669 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f0011a2bd0` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f0011a2bd0`)

| Change | Delta |      % |   Samples | Caller   | Location                                            |
| -----: | ----: | -----: | --------: | -------- | --------------------------------------------------- |
| -13.2% |  -102 | 100.0% | 771 → 669 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % |   Samples | Caller              | Location                                               |
| -----: | ----: | -----: | --------: | ------------------- | ------------------------------------------------------ |
|  -5.5% |   -50 | 100.0% | 905 → 855 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % |   Samples | Caller              | Location                                               |
| -----: | ----: | -----: | --------: | ------------------- | ------------------------------------------------------ |
|  -5.5% |   -50 | 100.0% | 905 → 855 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  -5.5% |   -50 | 100.0% | 905 → 855 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % |   Samples | Caller                     | Location                                               |
| -----: | ----: | -----: | --------: | -------------------------- | ------------------------------------------------------ |
|  -4.5% |   -40 | 100.0% | 893 → 853 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |       Samples | Caller              | Location                                                  |
| -----: | ----: | -----: | ------------: | ------------------- | --------------------------------------------------------- |
|  -2.2% |   -33 | 100.0% | 1,504 → 1,471 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |              % |       Samples | Caller              | Location                                                  |
| -----: | ----: | -------------: | ------------: | ------------------- | --------------------------------------------------------- |
|  -2.2% |   -33 | 100.0% → 99.9% | 1,505 → 1,472 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  -2.1% |   -32 |         100.0% | 1,505 → 1,473 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`    |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change | Delta |             % | Samples | Caller              | Location                                                               |
| ------: | ----: | ------------: | ------: | ------------------- | ---------------------------------------------------------------------- |
| removed |   -22 | 100.0% → 0.0% |  22 → 0 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111f208` |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |   Samples | Caller        | Location                                                  |
| -----: | ----: | -----: | --------: | ------------- | --------------------------------------------------------- |
|  -1.8% |   -16 | 100.0% | 899 → 883 | `vectorSum()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % | Samples | Caller                     | Location                                               |
| -----: | ----: | -----: | ------: | -------------------------- | ------------------------------------------------------ |
| -81.8% |    -9 | 100.0% |  11 → 2 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |      % | Samples | Caller                  | Location                                  |
| -----: | ----: | -----: | ------: | ----------------------- | ----------------------------------------- |
| -50.0% |    -4 | 100.0% |   8 → 4 | `executeOperation(int)` | `org.renaissance.harness.ExecutionDriver` |

##### `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`)

|  Change | Delta |             % | Samples | Caller                    | Location                        |
| ------: | ----: | ------------: | ------: | ------------------------- | ------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `deleteRecursively(Path)` | `org.renaissance.core.DirUtils` |

##### `deleteRecursively(Path)` (`org.renaissance.core.DirUtils`)

|  Change | Delta |             % | Samples | Caller                                  | Location                        |
| ------: | ----: | ------------: | ------: | --------------------------------------- | ------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `lambda$createScratchDirectory$1(Path)` | `org.renaissance.core.DirUtils` |

##### `lambda$createScratchDirectory$1(Path)` (`org.renaissance.core.DirUtils`)

|  Change | Delta |             % | Samples | Caller  | Location                                                   |
| ------: | ----: | ------------: | ------: | ------- | ---------------------------------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `run()` | `org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68` |

##### `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`)

|  Change | Delta |             % | Samples | Caller                      | Location           |
| ------: | ----: | ------------: | ------: | --------------------------- | ------------------ |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `createHandler()` (`org.renaissance.core.Logging`)

| Change | Delta |      % | Samples | Caller               | Location                       |
| -----: | ----: | -----: | ------: | -------------------- | ------------------------------ |
| -50.0% |    -2 | 100.0% |   4 → 2 | `createRootLogger()` | `org.renaissance.core.Logging` |

##### `ConcurrentGCThread::run` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller             | Location       |
| -----: | ----: | -----: | ------: | ------------------ | -------------- |
| -74.1% |   -20 | 100.0% |  27 → 7 | `Thread::call_run` | `libjvm.dylib` |

##### `G1ConcurrentRefineThread::run_service` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                    | Location       |
| ------: | ----: | ------------: | ------: | ------------------------- | -------------- |
| removed |   -19 | 100.0% → 0.0% |  19 → 0 | `ConcurrentGCThread::run` | `libjvm.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller                | Location       |
| -----: | ----: | -----: | --------: | --------------------- | -------------- |
|  -4.5% |   -16 | 100.0% | 355 → 339 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller           | Location                  |
| -----: | ----: | -----: | --------: | ---------------- | ------------------------- |
|  -4.2% |   -15 | 100.0% | 355 → 340 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `G1ParScanThreadState::trim_queue_to_threshold` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                       | Location       |
| ------: | ----: | -----------: | ------: | -------------------------------------------- | -------------- |
| removed |   -10 | 66.7% → 0.0% |  10 → 0 | `G1ParScanThreadState::steal_and_trim_queue` | `libjvm.dylib` |
| removed |    -4 | 26.7% → 0.0% |   4 → 0 | `G1ScanHRForRegionClosure::scan_memregion`   | `libjvm.dylib` |
| removed |    -1 |  6.7% → 0.0% |   1 → 0 | `G1ParEvacuateFollowersClosure::do_void`     | `libjvm.dylib` |

##### `G1PrimaryConcurrentRefineThread::wait_for_completed_buffers` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                  | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------- | -------------- |
| removed |   -15 | 100.0% → 0.0% |  15 → 0 | `G1ConcurrentRefineThread::run_service` | `libjvm.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

| Change | Delta |      % |   Samples | Caller         | Location                  |
| -----: | ----: | -----: | --------: | -------------- | ------------------------- |
|  -3.9% |   -14 | 100.0% | 355 → 341 | `thread_start` | `libsystem_pthread.dylib` |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

| Change | Delta |             % | Samples | Caller                           | Location       |
| -----: | ----: | ------------: | ------: | -------------------------------- | -------------- |
| -15.0% |   -12 | 87.0% → 87.2% | 80 → 68 | `WorkerThread::run`              | `libjvm.dylib` |
| -33.3% |    -3 |   9.8% → 7.7% |   9 → 6 | `GenericWaitBarrier::Cell::wait` | `libjvm.dylib` |
| +33.3% |    +1 |   3.3% → 5.1% |   3 → 4 | `WorkerThreads::run_task`        | `libjvm.dylib` |

##### `_platform_memset` (`libsystem_platform.dylib`)

|  Change | Delta |             % | Samples | Caller                                        | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------------- | -------------- |
|  -50.0% |    -7 | 58.3% → 63.6% |  14 → 7 | `MemAllocator::allocate`                      | `libjvm.dylib` |
| removed |    -7 |  29.2% → 0.0% |   7 → 0 | `MarkBitMap::do_clear`                        | `libjvm.dylib` |
| removed |    -1 |   4.2% → 0.0% |   1 → 0 | `Dict::Insert`                                | `libjvm.dylib` |
| removed |    -1 |   4.2% → 0.0% |   1 → 0 | `ConstantPoolCache::allocate`                 | `libjvm.dylib` |
| +100.0% |    +1 |  4.2% → 18.2% |   1 → 2 | `MemAllocator::mem_allocate_inside_tlab_slow` | `libjvm.dylib` |

##### `G1ParScanThreadState::steal_and_trim_queue` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                   | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | -------------- |
| removed |   -12 | 100.0% → 0.0% |  12 → 0 | `G1ParEvacuateFollowersClosure::do_void` | `libjvm.dylib` |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                          | Location       |
| ------: | ----: | -----------: | ------: | ----------------------------------------------- | -------------- |
| removed |    -7 | 70.0% → 0.0% |   7 → 0 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib` |
| removed |    -2 | 20.0% → 0.0% |   2 → 0 | `G1ParScanThreadState::steal_and_trim_queue`    | `libjvm.dylib` |
| removed |    -1 | 10.0% → 0.0% |   1 → 0 | `G1ScanHRForRegionClosure::scan_memregion`      | `libjvm.dylib` |

##### `WorkerThread::run` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller             | Location       |
| -----: | ----: | -----: | --------: | ------------------ | -------------- |
|  -4.7% |    -9 | 100.0% | 191 → 182 | `Thread::call_run` | `libjvm.dylib` |

##### `Unsafe_Unpark` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller           | Location                   |
| -----: | ----: | -----: | ------: | ---------------- | -------------------------- |
| -10.4% |    -8 | 100.0% | 77 → 69 | `unpark(Object)` | `jdk.internal.misc.Unsafe` |

##### `arrayof_oop_disjoint_arraycopy` (`<unknown>`)

| Change | Delta |      % | Samples | Caller               | Location              |
| -----: | ----: | -----: | ------: | -------------------- | --------------------- |
| -13.8% |    -8 | 100.0% | 58 → 50 | `addAll(Collection)` | `java.util.ArrayList` |

##### `HeapRegionManager::par_iterate` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                            | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------- | -------------- |
| removed |    -8 |  50.0% → 0.0% |   8 → 0 | `G1FullGCResetMetadataTask::work` | `libjvm.dylib` |
|     new |    +8 | 0.0% → 100.0% |   0 → 8 | `G1FullGCAdjustTask::work`        | `libjvm.dylib` |
| removed |    -7 |  43.8% → 0.0% |   7 → 0 | `WorkerThread::run`               | `libjvm.dylib` |
| removed |    -1 |   6.3% → 0.0% |   1 → 0 | `G1PrepareEvacuationTask::work`   | `libjvm.dylib` |

##### `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                                              | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------- | -------------- |
| removed |    -8 | 100.0% → 0.0% |   8 → 0 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::do_heap_region` | `libjvm.dylib` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % |   Samples | Caller                         | Location                                               |
| -----: | ----: | ------------: | --------: | ------------------------------ | ------------------------------------------------------ |
| -13.0% |  -100 | 54.9% → 51.7% | 769 → 669 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans`            |
|  -4.9% |   -44 | 63.7% → 65.5% | 892 → 848 | `average(List)`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

| Change | Delta |      % |   Samples | Caller     | Location                            |
| -----: | ----: | -----: | --------: | ---------- | ----------------------------------- |
| -13.2% |  -102 | 100.0% | 771 → 669 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `get(int)` (`java.util.ArrayList`)

| Change | Delta |             % | Samples | Caller                   | Location                                                   |
| -----: | ----: | ------------: | ------: | ------------------------ | ---------------------------------------------------------- |
| -39.7% |   -31 | 38.0% → 29.4% | 78 → 47 | `findNearestCentroid()`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -27.1% |   -23 | 41.5% → 38.8% | 85 → 62 | `vectorSum()`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| +21.4% |    +9 | 20.5% → 31.9% | 42 → 51 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `parkUntil(long)` (`java.util.concurrent.locks.LockSupport`)

| Change | Delta |      % |  Samples | Caller                              | Location                            |
| -----: | ----: | -----: | -------: | ----------------------------------- | ----------------------------------- |
| -38.8% |   -45 | 100.0% | 116 → 71 | `awaitWork(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `elementData(int)` (`java.util.ArrayList`)

| Change | Delta |      % |   Samples | Caller     | Location              |
| -----: | ----: | -----: | --------: | ---------- | --------------------- |
| -21.6% |   -35 | 100.0% | 162 → 127 | `get(int)` | `java.util.ArrayList` |

##### `checkIndex(int, int)` (`java.util.Objects`)

| Change | Delta |      % | Samples | Caller     | Location              |
| -----: | ----: | -----: | ------: | ---------- | --------------------- |
| -29.3% |   -12 | 100.0% | 41 → 29 | `get(int)` | `java.util.ArrayList` |

##### `doubleValue()` (`java.lang.Double`)

| Change | Delta |             % | Samples | Caller                           | Location                                                   |
| -----: | ----: | ------------: | ------: | -------------------------------- | ---------------------------------------------------------- |
| -35.3% |    -6 | 16.8% → 12.2% | 17 → 11 | `distance(Double[], Double[])`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -6.0% |    -5 | 83.2% → 87.8% | 84 → 79 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

##### `I2C/C2I adapters(0xbbaa)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                              | Location                            |
| -----: | ----: | -----: | ------: | ----------------------------------- | ----------------------------------- |
| -50.0% |    -1 | 100.0% |   2 → 1 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `PhaseCFG::global_code_motion` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                            | Location       |
| -----: | ----: | -----: | ------: | --------------------------------- | -------------- |
| -66.7% |    -6 | 100.0% |   9 → 3 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |

##### `PhaseCFG::do_global_code_motion` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller              | Location       |
| -----: | ----: | -----: | ------: | ------------------- | -------------- |
| -66.7% |    -6 | 100.0% |   9 → 3 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `ciEnv::register_method` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                        | Location       |
| ------: | ----: | -------------: | ------: | ----------------------------- | -------------- |
|  -80.0% |    -4 | 71.4% → 100.0% |   5 → 1 | `Compilation::compile_method` | `libjvm.dylib` |
| removed |    -2 |   28.6% → 0.0% |   2 → 0 | `PhaseOutput::install_code`   | `libjvm.dylib` |

##### `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                            | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------- | -------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseCCP::transform` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                   | Location       |
| ------: | ----: | ------------: | ------: | ------------------------ | -------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `PhaseCCP::do_transform` | `libjvm.dylib` |

##### `PhaseCCP::do_transform` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller              | Location       |
| ------: | ----: | ------------: | ------: | ------------------- | -------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `Compile::Optimize` | `libjvm.dylib` |

##### `PhaseCCP::push_child_nodes_to_worklist` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller              | Location       |
| ------: | ----: | ------------: | ------: | ------------------- | -------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `PhaseCCP::analyze` | `libjvm.dylib` |

##### `PhaseCCP::analyze` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller               | Location       |
| ------: | ----: | ------------: | ------: | -------------------- | -------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `PhaseCCP::PhaseCCP` | `libjvm.dylib` |

##### `PhaseCCP::PhaseCCP` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller              | Location       |
| ------: | ----: | ------------: | ------: | ------------------- | -------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `Compile::Optimize` | `libjvm.dylib` |

##### `PhaseOutput::install_code` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller              | Location       |
| ------: | ----: | ------------: | ------: | ------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `PhaseCFG::schedule_late` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                         | Location       |
| -----: | ----: | -----: | ------: | ------------------------------ | -------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |

##### `Node_Backward_Iterator::next` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                    | Location       |
| ------: | ----: | ------------: | ------: | ------------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `PhaseCFG::schedule_late` | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                            | Location       |
| -----: | ----: | -----: | ------: | --------------------------------- | -------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `CompileBroker::compile_method` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                        | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------------------- | -------------- |
| -66.7% |    -2 | 37.5% → 16.7% |   3 → 1 | `CompilationPolicy::method_back_branch_event` | `libjvm.dylib` |
| +25.0% |    +1 | 50.0% → 83.3% |   4 → 5 | `CompileBroker::compile_method`               | `libjvm.dylib` |

##### `CompilationPolicy::method_back_branch_event` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                     | Location       |
| -----: | ----: | -----: | ------: | -------------------------- | -------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `CompilationPolicy::event` | `libjvm.dylib` |

##### `PhaseChaitin::raise_pressure` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                             | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `PhaseChaitin::build_ifg_physical` | `libjvm.dylib` |

##### `CompileBroker::create_compile_task` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                               | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------ | -------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `CompileBroker::compile_method_base` | `libjvm.dylib` |

##### `LIR_Assembler::emit_lir_list` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                     | Location       |
| ------: | ----: | ------------: | ------: | -------------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `LIR_Assembler::emit_code` | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                     | Location       |
| -----: | ----: | -----: | ------: | -------------------------- | -------------- |
| -12.5% |    -2 | 100.0% | 16 → 14 | `Compilation::Compilation` | `libjvm.dylib` |

##### `ciMethod::ensure_method_data` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                             | Location       |
| ------: | ----: | -----------: | ------: | ---------------------------------- | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `ciMethod::ensure_method_data`     | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `GraphBuilder::try_inline_full`    | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `Compilation::compile_java_method` | `libjvm.dylib` |

#### Callees

Callees with the largest change in contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Callee            | Location                                    |
| -----: | ----: | -----: | --------: | ----------------- | ------------------------------------------- |
| +12.2% |   +62 | 100.0% | 510 → 572 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |             % |   Samples | Callee                               | Location                           |
| ------: | ----: | ------------: | --------: | ------------------------------------ | ---------------------------------- |
|  +11.0% |   +55 | 97.3% → 96.5% | 499 → 554 | `forEach(BiConsumer)`                | `java.util.HashMap`                |
|  +41.7% |    +5 |   2.3% → 3.0% |   12 → 17 | `<init>(Map)`                        | `java.util.HashMap`                |
| +100.0% |    +1 |   0.2% → 0.3% |     1 → 2 | `linkToTargetMethod(Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| removed |    -1 |   0.2% → 0.0% |     1 → 0 | `_new_instance_Java`                 | `<unknown>`                        |
|     new |    +1 |   0.0% → 0.2% |     0 → 1 | `wrong_method_stub`                  | `<unknown>`                        |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % |   Samples | Callee                     | Location                                                   |
| -----: | ----: | ------------: | --------: | -------------------------- | ---------------------------------------------------------- |
| +12.2% |   +62 | 99.4% → 99.8% | 510 → 572 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

| Change | Delta |             % |   Samples | Callee                   | Location                                                               |
| -----: | ----: | ------------: | --------: | ------------------------ | ---------------------------------------------------------------------- |
| +10.7% |   +53 | 99.2% → 98.9% | 495 → 548 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f0011a7000` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

| Change | Delta |             % |   Samples | Callee                            | Location                                                               |
| -----: | ----: | ------------: | --------: | --------------------------------- | ---------------------------------------------------------------------- |
| +60.9% |   +42 | 14.0% → 20.3% |  69 → 111 | `zero_blocks`                     | `<unknown>`                                                            |
|  +5.4% |   +19 | 71.7% → 68.1% | 354 → 373 | `apply(Object, Object)`           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f0011a7490` |
| -20.0% |   -13 |  13.2% → 9.5% |   65 → 52 | `arrayof_jint_disjoint_arraycopy` | `<unknown>`                                                            |
|    new |    +2 |   0.0% → 0.4% |     0 → 2 | `hash(Object)`                    | `java.util.HashMap`                                                    |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |              % |   Samples | Callee                              | Location            |
| ------: | ----: | -------------: | --------: | ----------------------------------- | ------------------- |
|  +10.9% |   +54 | 99.8% → 100.0% | 494 → 548 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |
| removed |    -1 |    0.2% → 0.0% |     1 → 0 | `SafepointBlob`                     | `<unknown>`         |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f0011a7000`)

| Change | Delta |      % |   Samples | Callee                              | Location                                    |
| -----: | ----: | -----: | --------: | ----------------------------------- | ------------------------------------------- |
| +10.7% |   +53 | 100.0% | 495 → 548 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|  Change | Delta |             % |   Samples | Callee                            | Location           |
| ------: | ----: | ------------: | --------: | --------------------------------- | ------------------ |
|  +10.0% |   +19 | 65.3% → 64.5% | 190 → 209 | `arrayof_jint_disjoint_arraycopy` | `<unknown>`        |
|  +19.1% |   +17 | 30.6% → 32.7% |  89 → 106 | `_new_array_Java`                 | `<unknown>`        |
| removed |    -1 |   0.3% → 0.0% |     1 → 0 | `copyOf(Object[], int, Class)`    | `java.util.Arrays` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change | Delta |            % | Samples | Callee                                                                                       | Location                                  |
| -----: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
|    new |   +22 | 0.0% → 81.5% |  0 → 22 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
|    new |    +5 | 0.0% → 18.5% |   0 → 5 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `toArray()` (`java.util.ArrayList`)

| Change | Delta |              % |   Samples | Callee                  | Location           |
| -----: | ----: | -------------: | --------: | ----------------------- | ------------------ |
| +10.8% |   +26 | 99.2% → 100.0% | 241 → 267 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `G1FullGCMarker::follow_marking_stacks` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                                                                               | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------- | -------------- |
| +216.7% |   +13 | 28.6% → 42.2% |  6 → 19 | `G1FullGCMarker::publish_and_drain_oop_tasks`                                                        | `libjvm.dylib` |
|  +91.7% |   +11 | 57.1% → 51.1% | 12 → 23 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>`                                      | `libjvm.dylib` |
|     new |    +2 |   0.0% → 4.4% |   0 → 2 | `G1FullGCMarker::follow_object`                                                                      | `libjvm.dylib` |
|  -50.0% |    -1 |   9.5% → 2.2% |   2 → 1 | `void OopOopIterateDispatch<G1MarkAndPushClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `libjvm.dylib` |

##### `_new_array_Java` (`<unknown>`)

|  Change | Delta |             % |  Samples | Callee                                       | Location                  |
| ------: | ----: | ------------: | -------: | -------------------------------------------- | ------------------------- |
|  +21.6% |   +19 | 95.7% → 94.7% | 88 → 107 | `OptoRuntime::new_array_C`                   | `libjvm.dylib`            |
| +150.0% |    +3 |   2.2% → 4.4% |    2 → 5 | `pthread_jit_write_protect_np`               | `libsystem_pthread.dylib` |
| removed |    -1 |   1.1% → 0.0% |    1 → 0 | `os::current_thread_enable_wx`               | `libjvm.dylib`            |
| removed |    -1 |   1.1% → 0.0% |    1 → 0 | `InstanceKlass::allocate_objArray`           | `libjvm.dylib`            |
|     new |    +1 |   0.0% → 0.9% |    0 → 1 | `SharedRuntime::on_slowpath_allocation_exit` | `libjvm.dylib`            |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |             % |   Samples | Callee               | Location              |
| ------: | ----: | ------------: | --------: | -------------------- | --------------------- |
|  +11.8% |   +15 | 36.0% → 38.1% | 127 → 142 | `<init>(Collection)` | `java.util.ArrayList` |
|   +2.2% |    +5 | 63.2% → 61.1% | 223 → 228 | `addAll(Collection)` | `java.util.ArrayList` |
| removed |    -1 |   0.3% → 0.0% |     1 → 0 | `_new_instance_Java` | `<unknown>`           |

##### `G1ParEvacuateFollowersClosure::offer_termination` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Callee                              | Location       |
| ------: | ----: | -----: | ------: | ----------------------------------- | -------------- |
| +166.7% |   +20 | 100.0% | 12 → 32 | `TaskTerminator::offer_termination` | `libjvm.dylib` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f0011a7490`)

| Change | Delta |              % |   Samples | Callee                       | Location                                    |
| -----: | ----: | -------------: | --------: | ---------------------------- | ------------------------------------------- |
|  +5.7% |   +20 | 99.7% → 100.0% | 353 → 373 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `OptoRuntime::new_array_C` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                             | Location                  |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- | ------------------------- |
|  +16.7% |   +14 | 95.5% → 91.6% | 84 → 98 | `InstanceKlass::allocate_objArray`                 | `libjvm.dylib`            |
| +200.0% |    +2 |   1.1% → 2.8% |   1 → 3 | `pthread_jit_write_protect_np`                     | `libsystem_pthread.dylib` |
|  +66.7% |    +2 |   3.4% → 4.7% |   3 → 5 | `CollectedHeap::array_allocate`                    | `libjvm.dylib`            |
|     new |    +1 |   0.0% → 0.9% |   0 → 1 | `CardTableBarrierSet::on_slowpath_allocation_exit` | `libjvm.dylib`            |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                                     | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------------ | -------------- |
| +11.8% |    +9 | 73.8% → 70.2% | 76 → 85 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
| +33.3% |    +9 | 26.2% → 29.8% | 27 → 36 | `CompileQueue::get`                        | `libjvm.dylib` |

##### `hash(Object)` (`java.util.HashMap`)

|   Change | Delta |            % | Samples | Callee                 | Location           |
| -------: | ----: | -----------: | ------: | ---------------------- | ------------------ |
| +1400.0% |   +14 | 4.2% → 35.7% |  1 → 15 | `hashCode()`           | `java.lang.Object` |
|      new |    +1 |  0.0% → 2.4% |   0 → 1 | `resolve_virtual_call` | `<unknown>`        |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|  Change | Delta |             % |   Samples | Callee                                                   | Location       |
| ------: | ----: | ------------: | --------: | -------------------------------------------------------- | -------------- |
|  +17.5% |   +18 | 95.4% → 96.8% | 103 → 121 | `CompileBroker::compiler_thread_loop`                    | `libjvm.dylib` |
|  -50.0% |    -2 |   3.7% → 1.6% |     4 → 2 | `MonitorDeflationThread::monitor_deflation_thread_entry` | `libjvm.dylib` |
| +100.0% |    +1 |   0.9% → 1.6% |     1 → 2 | `ServiceThread::service_thread_entry`                    | `libjvm.dylib` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

|  Change | Delta |             % | Samples | Callee                                                      | Location                            |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------- | ----------------------------------- |
|  +31.1% |   +14 | 95.7% → 96.7% | 45 → 59 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher`     |
| +100.0% |    +1 |   2.1% → 3.3% |   1 → 2 | `createScratchRoot(Path, boolean)`                          | `org.renaissance.core.Launcher`     |
| removed |    -1 |   2.1% → 0.0% |   1 → 0 | `create(Path, URI)`                                         | `org.renaissance.core.ModuleLoader` |

##### `main(String[])` (`org.renaissance.core.Launcher`)

| Change | Delta |      % | Samples | Callee                                 | Location                        |
| -----: | ----: | -----: | ------: | -------------------------------------- | ------------------------------- |
| +29.8% |   +14 | 100.0% | 47 → 61 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

| Change | Delta |             % | Samples | Callee                               | Location                            |
| -----: | ----: | ------------: | ------: | ------------------------------------ | ----------------------------------- |
| +27.5% |   +11 | 88.9% → 86.4% | 40 → 51 | `invoke(Object, Object[])`           | `java.lang.reflect.Method`          |
| +40.0% |    +2 | 11.1% → 11.9% |   5 → 7 | `createClassLoaderForModule(String)` | `org.renaissance.core.ModuleLoader` |
|    new |    +1 |   0.0% → 1.7% |   0 → 1 | `loadClass(String)`                  | `java.lang.ClassLoader`             |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

| Change | Delta |             % | Samples | Callee           | Location                                    |
| -----: | ----: | ------------: | ------: | ---------------- | ------------------------------------------- |
| +28.9% |   +11 | 95.0% → 96.1% | 38 → 49 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite$` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change | Delta |             % | Samples | Callee                                                                        | Location                                    |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
|  +20.8% |    +5 | 63.2% → 59.2% | 24 → 29 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |
|  +66.7% |    +2 |  7.9% → 10.2% |   3 → 5 | `<init>(Map)`                                                                 | `org.renaissance.harness.ConfigParser`      |
| +100.0% |    +1 |   2.6% → 4.1% |   1 → 2 | `apply(Function0)`                                                            | `scala.util.Try$`                           |
|     new |    +1 |   0.0% → 2.0% |   0 → 1 | `selectBenchmarks(BenchmarkSuite, Seq)`                                       | `org.renaissance.harness.RenaissanceSuite$` |
|     new |    +1 |   0.0% → 2.0% |   0 → 1 | `excludeIncompatible(BenchmarkSuite, Seq)`                                    | `org.renaissance.harness.RenaissanceSuite$` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda`)

|  Change | Delta |              % | Samples | Callee                           | Location                                  |
| ------: | ----: | -------------: | ------: | -------------------------------- | ----------------------------------------- |
|     new |    +5 |   0.0% → 55.6% |   0 → 5 | `setUpBeforeAll$$anonfun$1(Map)` | `org.renaissance.jdk.concurrent.FjKmeans` |
| +300.0% |    +3 | 100.0% → 44.4% |   1 → 4 | `$anonfun$adapted$1(Object)`     | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |            % | Samples | Callee                | Location                                                           |
| -----: | ----: | -----------: | ------: | --------------------- | ------------------------------------------------------------------ |
|    new |    +5 | 0.0% → 33.3% |   0 → 5 | `toCsvRows(Function)` | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter` |
|    new |    +1 |  0.0% → 6.7% |   0 → 1 | `asScala()`           | `scala.collection.convert.AsScalaExtensions$ListHasAsScala`        |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change | Delta |             % | Samples | Callee                                                        | Location                                    |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------- | ------------------------------------------- |
| +22.7% |    +5 | 91.7% → 93.1% | 22 → 27 | `foreach(Function1)`                                          | `scala.collection.immutable.List`           |
| -50.0% |    -1 |   8.3% → 3.4% |   2 → 1 | `getVmStartNanos()`                                           | `org.renaissance.harness.RenaissanceSuite$` |
|    new |    +1 |   0.0% → 3.4% |   0 → 1 | `linkMethodHandleConstant(Class, int, Class, String, Object)` | `java.lang.invoke.MethodHandleNatives`      |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000f00111f1b8`)

|  Change | Delta |             % | Samples | Callee                                                                                                                 | Location                                    |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
|     new |   +27 | 0.0% → 100.0% |  0 → 27 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |
| removed |   -22 | 100.0% → 0.0% |  22 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `rowToArray$1(Map)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |            % | Samples | Callee              | Location                           |
| -----: | ----: | -----------: | ------: | ------------------- | ---------------------------------- |
|    new |    +3 | 0.0% → 60.0% |   0 → 3 | `<clinit>()`        | `scala.Predef$`                    |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `loadClass(String)` | `java.lang.ClassLoader`            |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `map(Function1)`    | `scala.collection.immutable.Range` |

##### `setUpBeforeAll$$anonfun$1(Map)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |             % | Samples | Callee              | Location                                  |
| -----: | ----: | ------------: | ------: | ------------------- | ----------------------------------------- |
|    new |    +5 | 0.0% → 100.0% |   0 → 5 | `rowToArray$1(Map)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `lambda$toCsvRows$2(String[], Function, String)` (`org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`)

| Change | Delta |             % | Samples | Callee          | Location                                          |
| -----: | ----: | ------------: | ------: | --------------- | ------------------------------------------------- |
|    new |    +5 | 0.0% → 100.0% |   0 → 5 | `apply(Object)` | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda` |

##### `CollectedHeap::array_allocate` (`libjvm.dylib`)

| Change | Delta |      % |  Samples | Callee                   | Location       |
| -----: | ----: | -----: | -------: | ------------------------ | -------------- |
| +18.4% |   +16 | 100.0% | 87 → 103 | `MemAllocator::allocate` | `libjvm.dylib` |

##### `TaskTerminator::offer_termination` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                  | Location                 |
| ------: | ----: | ------------: | ------: | --------------------------------------- | ------------------------ |
|  +90.9% |   +10 | 52.4% → 58.3% | 11 → 21 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib`           |
| +100.0% |    +3 | 14.3% → 16.7% |   3 → 6 | `Mutex::lock_without_safepoint_check`   | `libjvm.dylib`           |
|  +50.0% |    +2 | 19.0% → 16.7% |   4 → 6 | `swtch_pri`                             | `libsystem_kernel.dylib` |
| removed |    -2 |   9.5% → 0.0% |   2 → 0 | `SpinPause`                             | `libjvm.dylib`           |
|     new |    +2 |   0.0% → 5.6% |   0 → 2 | `__psynch_cvbroad`                      | `libsystem_kernel.dylib` |

##### `G1FullGCMarker::complete_marking` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                                                                                     | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------- | -------------- |
| +114.3% |   +24 | 47.7% → 77.6% | 21 → 45 | `G1FullGCMarker::follow_marking_stacks`                                                                    | `libjvm.dylib` |
|  -55.6% |    -5 |  20.5% → 6.9% |   9 → 4 | `TaskTerminator::offer_termination`                                                                        | `libjvm.dylib` |
|  -22.2% |    -2 | 20.5% → 12.1% |   9 → 7 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>`                                            | `libjvm.dylib` |
|  -50.0% |    -2 |   9.1% → 3.4% |   4 → 2 | `GenericTaskQueueSet<OverflowTaskQueue<ObjArrayTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>::steal_best_of_2` | `libjvm.dylib` |
| removed |    -1 |   2.3% → 0.0% |   1 → 0 | `G1FullGCMarker::mark_object`                                                                              | `libjvm.dylib` |

##### `G1FullGCMarkTask::work` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                             | Location       |
| -----: | ----: | -----: | ------: | ---------------------------------- | -------------- |
| +31.8% |   +14 | 100.0% | 44 → 58 | `G1FullGCMarker::complete_marking` | `libjvm.dylib` |

##### `JVM_IHashCode` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                         | Location                  |
| -----: | ----: | -----------: | ------: | ------------------------------ | ------------------------- |
|    new |   +13 | 0.0% → 92.9% |  0 → 13 | `pthread_jit_write_protect_np` | `libsystem_pthread.dylib` |

##### `G1FullGCMarker::publish_and_drain_oop_tasks` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                                                                               | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------- | -------------- |
| +450.0% |    +9 | 33.3% → 57.9% |  2 → 11 | `G1FullGCMarker::follow_object`                                                                      | `libjvm.dylib` |
|     new |    +3 |  0.0% → 15.8% |   0 → 3 | `ClassLoaderData::oops_do`                                                                           | `libjvm.dylib` |
| removed |    -2 |  33.3% → 0.0% |   2 → 0 | `void OopOopIterateDispatch<G1MarkAndPushClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `libjvm.dylib` |

##### `InstanceKlass::allocate_objArray` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                          | Location       |
| ------: | ----: | -------------: | ------: | ------------------------------- | -------------- |
|  +16.7% |   +14 | 97.7% → 100.0% | 84 → 98 | `CollectedHeap::array_allocate` | `libjvm.dylib` |
| removed |    -1 |    1.2% → 0.0% |   1 → 0 | `MemAllocator::allocate`        | `libjvm.dylib` |

##### `MemAllocator::allocate` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                        | Location                   |
| ------: | ----: | ------------: | ------: | --------------------------------------------- | -------------------------- |
|  +22.7% |   +10 | 47.3% → 52.4% | 44 → 54 | `_platform_bzero`                             | `libsystem_platform.dylib` |
| +200.0% |    +8 |  4.3% → 11.7% |  4 → 12 | `ObjArrayAllocator::initialize`               | `libjvm.dylib`             |
|  -50.0% |    -7 |  15.1% → 6.8% |  14 → 7 | `_platform_memset`                            | `libsystem_platform.dylib` |
|     new |    +2 |   0.0% → 1.9% |   0 → 2 | `ThreadLocalAllocBuffer::thread`              | `libjvm.dylib`             |
|   -4.8% |    -1 | 22.6% → 19.4% | 21 → 20 | `MemAllocator::mem_allocate_inside_tlab_slow` | `libjvm.dylib`             |

##### `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                   | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | -------------- |
|  +26.7% |    +4 | 71.4% → 63.3% | 15 → 19 | `G1FullGCMarker::mark_object`            | `libjvm.dylib` |
| removed |    -2 |   9.5% → 0.0% |   2 → 0 | `MarkBitMap::check_mark`                 | `libjvm.dylib` |
| +100.0% |    +1 |   4.8% → 6.7% |   1 → 2 | `G1RegionMarkStatsCache::add_live_words` | `libjvm.dylib` |

##### `G1AdjustRegionClosure::do_heap_region` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                                                                                          | Location       |
| -----: | ----: | -----------: | ------: | ----------------------------------------------------------------------------------------------- | -------------- |
|    new |    +7 | 0.0% → 87.5% |   0 → 7 | `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>`                                 | `libjvm.dylib` |
|    new |    +1 | 0.0% → 12.5% |   0 → 1 | `void OopOopIterateDispatch<G1AdjustClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `libjvm.dylib` |

##### `G1FullGCAdjustTask::work` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                           | Location       |
| -----: | ----: | ------------: | ------: | -------------------------------- | -------------- |
|    new |    +8 | 0.0% → 100.0% |   0 → 8 | `HeapRegionManager::par_iterate` | `libjvm.dylib` |

##### `<init>(Collection)` (`java.util.ArrayList`)

| Change | Delta |              % |   Samples | Callee                           | Location              |
| -----: | ----: | -------------: | --------: | -------------------------------- | --------------------- |
| +10.2% |   +13 | 100.0% → 98.6% | 127 → 140 | `toArray()`                      | `java.util.ArrayList` |
|    new |    +1 |    0.0% → 0.7% |     0 → 1 | `counter_overflow Runtime1 stub` | `<unknown>`           |
|    new |    +1 |    0.0% → 0.7% |     0 → 1 | `zero_blocks`                    | `<unknown>`           |

##### `hashCode()` (`java.lang.Object`)

| Change | Delta |            % | Samples | Callee          | Location       |
| -----: | ----: | -----------: | ------: | --------------- | -------------- |
|    new |   +14 | 0.0% → 93.3% |  0 → 14 | `JVM_IHashCode` | `libjvm.dylib` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000f001004800`)

| Change | Delta |      % | Samples | Callee           | Location                                   |
| -----: | ----: | -----: | ------: | ---------------- | ------------------------------------------ |
| +27.5% |   +11 | 100.0% | 40 → 51 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f001009800`)

| Change | Delta |      % | Samples | Callee                         | Location                                             |
| -----: | ----: | -----: | ------: | ------------------------------ | ---------------------------------------------------- |
| +27.5% |   +11 | 100.0% | 40 → 51 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f001004800` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change | Delta |      % | Samples | Callee                           | Location                                            |
| -----: | ----: | -----: | ------: | -------------------------------- | --------------------------------------------------- |
| +27.5% |   +11 | 100.0% | 40 → 51 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f001009800` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change | Delta |      % | Samples | Callee                                           | Location                           |
| -----: | ----: | -----: | ------: | ------------------------------------------------ | ---------------------------------- |
| +27.5% |   +11 | 100.0% | 40 → 51 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change | Delta |      % | Samples | Callee                         | Location                                          |
| -----: | ----: | -----: | ------: | ------------------------------ | ------------------------------------------------- |
| +27.5% |   +11 | 100.0% | 40 → 51 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

| Change | Delta |      % | Samples | Callee                     | Location                                          |
| -----: | ----: | -----: | ------: | -------------------------- | ------------------------------------------------- |
| +27.5% |   +11 | 100.0% | 40 → 51 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `add(Object)` (`java.util.ArrayList`)

| Change | Delta |             % |   Samples | Callee                       | Location              |
| -----: | ----: | ------------: | --------: | ---------------------------- | --------------------- |
|  +4.7% |    +7 | 98.7% → 98.1% | 150 → 157 | `add(Object, Object[], int)` | `java.util.ArrayList` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

| Change | Delta |             % | Samples | Callee   | Location              |
| -----: | ----: | ------------: | ------: | -------- | --------------------- |
|  +1.0% |    +1 | 64.7% → 62.4% | 97 → 98 | `grow()` | `java.util.ArrayList` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

| Change | Delta |             % | Samples | Callee                             | Location                                          |
| -----: | ----: | ------------: | ------: | ---------------------------------- | ------------------------------------------------- |
| +31.3% |    +5 | 88.9% → 84.0% | 16 → 21 | `findClass(String)`                | `java.net.URLClassLoader`                         |
| +50.0% |    +1 | 11.1% → 12.0% |   2 → 3 | `loadClass(String, boolean)`       | `jdk.internal.loader.ClassLoaders$AppClassLoader` |
|    new |    +1 |   0.0% → 4.0% |   0 → 1 | `monitorenter_nofpu Runtime1 stub` | `<unknown>`                                       |

##### `accept(Object)` (`java.util.stream.ReferencePipeline$3$1`)

| Change | Delta |            % | Samples | Callee          | Location                                                                                      |
| -----: | ----: | -----------: | ------: | --------------- | --------------------------------------------------------------------------------------------- |
|    new |    +5 | 0.0% → 83.3% |   0 → 5 | `apply(Object)` | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter$$Lambda.0x000000f001123bf8` |
|    new |    +1 | 0.0% → 16.7% |   0 → 1 | `apply(Object)` | `org.renaissance.core.BenchmarkSuite$$Lambda.0x000000f00100d848`                              |

##### `addAll(Collection)` (`java.util.ArrayList`)

| Change | Delta |             % |   Samples | Callee                                            | Location              |
| -----: | ----: | ------------: | --------: | ------------------------------------------------- | --------------------- |
|  +9.5% |   +11 | 52.0% → 55.7% | 116 → 127 | `toArray()`                                       | `java.util.ArrayList` |
| -13.8% |    -8 | 26.0% → 21.9% |   58 → 50 | `arrayof_oop_disjoint_arraycopy`                  | `<unknown>`           |
|    new |    +1 |   0.0% → 0.4% |     0 → 1 | `G1BarrierSetRuntime::write_ref_array_post_entry` | `libjvm.dylib`        |

##### `putMapEntries(Map, boolean)` (`java.util.HashMap`)

| Change | Delta |             % | Samples | Callee                                          | Location                          |
| -----: | ----: | ------------: | ------: | ----------------------------------------------- | --------------------------------- |
| +28.6% |    +2 | 58.3% → 52.9% |   7 → 9 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap`               |
| +50.0% |    +1 | 16.7% → 17.6% |   2 → 3 | `next()`                                        | `java.util.HashMap$EntryIterator` |
| -50.0% |    -1 |  16.7% → 5.9% |   2 → 1 | `hash(Object)`                                  | `java.util.HashMap`               |
|    new |    +1 |   0.0% → 5.9% |   0 → 1 | `tableSizeFor(int)`                             | `java.util.HashMap`               |

##### `<init>(Map)` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Callee                        | Location            |
| -----: | ----: | -----: | ------: | ----------------------------- | ------------------- |
| +41.7% |    +5 | 100.0% | 12 → 17 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `Compile::Compile` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                   | Location       |
| -----: | ----: | ------------: | ------: | ------------------------ | -------------- |
| +19.4% |    +6 | 52.5% → 52.9% | 31 → 37 | `Compile::Code_Gen`      | `libjvm.dylib` |
| +14.3% |    +3 | 35.6% → 34.3% | 21 → 24 | `Compile::Optimize`      | `libjvm.dylib` |
|    new |    +1 |   0.0% → 1.4% |   0 → 1 | `Type::Initialize`       | `libjvm.dylib` |
|    new |    +1 |   0.0% → 1.4% |   0 → 1 | `Compile::return_values` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee             | Location       |
| -----: | ----: | -----: | ------: | ------------------ | -------------- |
| +18.6% |   +11 | 100.0% | 59 → 70 | `Compile::Compile` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                        | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------- | -------------- |
|  +18.6% |   +11 | 77.6% → 82.4% | 59 → 70 | `C2Compiler::compile_method`  | `libjvm.dylib` |
| removed |    -1 |   1.3% → 0.0% |   1 → 0 | `CompilationLog::log_compile` | `libjvm.dylib` |
|   -6.3% |    -1 | 21.1% → 17.6% | 16 → 15 | `Compiler::compile_method`    | `libjvm.dylib` |

##### `CompileQueue::get` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                           | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------- | -------------- |
|  +30.8% |    +8 | 96.3% → 94.4% | 26 → 34 | `Monitor::wait`                  | `libjvm.dylib` |
|     new |    +2 |   0.0% → 5.6% |   0 → 2 | `CompilationPolicy::select_task` | `libjvm.dylib` |
| removed |    -1 |   3.7% → 0.0% |   1 → 0 | `Mutex::lock`                    | `libjvm.dylib` |

##### `Matcher::match` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                         | Location       |
| ------: | ----: | -------------: | ------: | ------------------------------ | -------------- |
| +800.0% |    +8 | 100.0% → 90.0% |   1 → 9 | `Matcher::xform`               | `libjvm.dylib` |
|     new |    +1 |   0.0% → 10.0% |   0 → 1 | `Matcher::Fixup_Save_On_Entry` | `libjvm.dylib` |

##### `Matcher::xform` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                | Location       |
| ------: | ----: | -------------: | ------: | --------------------- | -------------- |
| +600.0% |    +6 | 100.0% → 77.8% |   1 → 7 | `Matcher::match_tree` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

| Change | Delta |              % | Samples | Callee                           | Location       |
| -----: | ----: | -------------: | ------: | -------------------------------- | -------------- |
| +54.5% |    +6 | 100.0% → 94.4% | 11 → 17 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
|    new |    +1 |    0.0% → 5.6% |   0 → 1 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                            | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------- | -------------- |
| +900.0% |    +9 |  3.2% → 27.0% |  1 → 10 | `Matcher::match`                  | `libjvm.dylib` |
|  -66.7% |    -6 |  29.0% → 8.1% |   9 → 3 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
|  +30.8% |    +4 | 41.9% → 45.9% | 13 → 17 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| removed |    -2 |   6.5% → 0.0% |   2 → 0 | `PhaseOutput::install_code`       | `libjvm.dylib` |
|  +20.0% |    +1 | 16.1% → 16.2% |   5 → 6 | `PhaseOutput::Output`             | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

| Change | Delta |              % | Samples | Callee                               | Location        |
| -----: | ----: | -------------: | ------: | ------------------------------------ | --------------- |
| +45.5% |    +5 | 100.0% → 94.1% | 11 → 16 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib`  |
|    new |    +1 |    0.0% → 5.9% |   0 → 1 | `tlv_get_addr`                       | `libdyld.dylib` |

##### `Matcher::match_tree` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                   | Location       |
| -----: | ----: | -----------: | ------: | ------------------------ | -------------- |
|    new |    +5 | 0.0% → 71.4% |   0 → 5 | `Matcher::Label_Root`    | `libjvm.dylib` |
|    new |    +1 | 0.0% → 14.3% |   0 → 1 | `ReturnNode::match_edge` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 14.3% |   0 → 1 | `Matcher::ReduceInst`    | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                 | Location                   |
| ------: | ----: | ------------: | ------: | -------------------------------------- | -------------------------- |
|     new |    +3 |  0.0% → 18.8% |   0 → 3 | `PhaseIdealLoop::Dominators`           | `libjvm.dylib`             |
|  +66.7% |    +2 | 27.3% → 31.3% |   3 → 5 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib`             |
|  -50.0% |    -1 |  18.2% → 6.3% |   2 → 1 | `PhaseIdealLoop::build_loop_early`     | `libjvm.dylib`             |
| removed |    -1 |   9.1% → 0.0% |   1 → 0 | `_platform_bzero`                      | `libsystem_platform.dylib` |
| removed |    -1 |   9.1% → 0.0% |   1 → 0 | `IdealLoopTree::loop_predication`      | `libjvm.dylib`             |

##### `PhaseLive::compute` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                   | Location       |
| ------: | ----: | -------------: | ------: | ------------------------ | -------------- |
| +200.0% |    +2 | 100.0% → 50.0% |   1 → 3 | `PhaseLive::add_liveout` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 16.7% |   0 → 1 | `Chunk::next_chop`       | `libjvm.dylib` |

##### `Matcher::Label_Root` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                | Location       |
| -----: | ----: | -----------: | ------: | --------------------- | -------------- |
|    new |    +4 | 0.0% → 80.0% |   0 → 4 | `State::DFA`          | `libjvm.dylib` |
|    new |    +3 | 0.0% → 60.0% |   0 → 3 | `Matcher::Label_Root` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                             | Location       |
| ------: | ----: | -----------: | ------: | ---------------------------------- | -------------- |
| +500.0% |    +5 | 7.7% → 35.3% |   1 → 6 | `PhaseLive::compute`               | `libjvm.dylib` |
|     new |    +4 | 0.0% → 23.5% |   0 → 4 | `PhaseChaitin::Select`             | `libjvm.dylib` |
| removed |    -3 | 23.1% → 0.0% |   3 → 0 | `PhaseChaitin::gather_lrg_masks`   | `libjvm.dylib` |
|  -66.7% |    -2 | 23.1% → 5.9% |   3 → 1 | `PhaseChaitin::build_ifg_physical` | `libjvm.dylib` |
| removed |    -1 |  7.7% → 0.0% |   1 → 0 | `PhaseChaitin::compact`            | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                       | Location       |
| ------: | ----: | -----------: | ------: | ---------------------------- | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `Type::singleton`            | `libjvm.dylib` |
|     new |    +1 | 0.0% → 16.7% |   0 → 1 | `IfNode::Ideal`              | `libjvm.dylib` |
|     new |    +1 | 0.0% → 16.7% |   0 → 1 | `PhaseIterGVN::subsume_node` | `libjvm.dylib` |
|     new |    +1 | 0.0% → 16.7% |   0 → 1 | `RangeCheckNode::Ideal`      | `libjvm.dylib` |
|     new |    +1 | 0.0% → 16.7% |   0 → 1 | `Node::Identity`             | `libjvm.dylib` |

##### `PhaseChaitin::Select` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                               | Location       |
| -----: | ----: | -----------: | ------: | ------------------------------------ | -------------- |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `PhaseIFG::re_insert`                | `libjvm.dylib` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `IndexSetIterator::advance_and_next` | `libjvm.dylib` |

##### `ciBytecodeStream::get_method` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                            | Location       |
| -----: | ----: | -----------: | ------: | --------------------------------- | -------------- |
|    new |    +2 | 0.0% → 50.0% |   0 → 2 | `ciEnv::get_method_by_index_impl` | `libjvm.dylib` |
|    new |    +2 | 0.0% → 50.0% |   0 → 2 | `ciObjectFactory::get_metadata`   | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                     | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | -------------- |
|  +83.3% |    +5 | 28.6% → 45.8% |  6 → 11 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
| removed |    -3 |  14.3% → 0.0% |   3 → 0 | `PhaseCCP::do_transform`                   | `libjvm.dylib` |
| removed |    -3 |  14.3% → 0.0% |   3 → 0 | `PhaseCCP::PhaseCCP`                       | `libjvm.dylib` |
|  +40.0% |    +2 | 23.8% → 29.2% |   5 → 7 | `Compile::optimize_loops`                  | `libjvm.dylib` |
|     new |    +1 |   0.0% → 4.2% |   0 → 1 | `Compile::process_for_post_loop_opts_igvn` | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                                    | Location       |
| ------: | ----: | -------------: | ------: | ----------------------------------------- | -------------- |
| +200.0% |    +4 | 66.7% → 100.0% |   2 → 6 | `PhaseIterGVN::transform_old`             | `libjvm.dylib` |
| removed |    -1 |   33.3% → 0.0% |   1 → 0 | `PhaseIterGVN::remove_globally_dead_node` | `libjvm.dylib` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |             % |       Samples | Callee                                   | Location                            |
| -----: | ----: | ------------: | ------------: | ---------------------------------------- | ----------------------------------- |
|  -8.5% |  -428 | 81.5% → 82.8% | 5,035 → 4,607 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |
| -15.8% |  -178 | 18.2% → 17.0% |   1,127 → 949 | `awaitWork(ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool` |
| -50.0% |    -1 |         <0.1% |         2 → 1 | `I2C/C2I adapters(0xbbaa)`               | `<unknown>`                         |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

| Change | Delta |      % |       Samples | Callee                              | Location                            |
| -----: | ----: | -----: | ------------: | ----------------------------------- | ----------------------------------- |
|  -9.9% |  -611 | 100.0% | 6,177 → 5,566 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |            % |       Samples | Callee                     | Location                             |
| ------: | ----: | -----------: | ------------: | -------------------------- | ------------------------------------ |
|   -9.0% |  -430 |       100.0% | 4,772 → 4,342 | `awaitDone(int, long)`     | `java.util.concurrent.ForkJoinTask`  |
| +100.0% |    +2 | <0.1% → 0.1% |         2 → 4 | `getRawResult()`           | `java.util.concurrent.RecursiveTask` |
| removed |    -1 | <0.1% → 0.0% |         1 → 0 | `wrong_method_stub`        | `<unknown>`                          |
| removed |    -1 | <0.1% → 0.0% |         1 → 0 | `resolve_opt_virtual_call` | `<unknown>`                          |
|     new |    +1 | 0.0% → <0.1% |         0 → 1 | `vtable stub`              | `<unknown>`                          |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % |       Samples | Callee      | Location                                            |
| -----: | ----: | ------------: | ------------: | ----------- | --------------------------------------------------- |
|  -8.6% |  -427 |         99.5% | 4,992 → 4,565 | `exec()`    | `java.util.concurrent.RecursiveTask`                |
| -13.2% |  -102 | 15.4% → 14.6% |     771 → 669 | `exec()`    | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
| -10.0% |    -5 |          1.0% |       50 → 45 | `setDone()` | `java.util.concurrent.ForkJoinTask`                 |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |      % |       Samples | Callee     | Location                            |
| -----: | ----: | -----: | ------------: | ---------- | ----------------------------------- |
|  -8.5% |  -429 | 100.0% | 5,018 → 4,589 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % |       Samples | Callee                                                    | Location                                      |
| -----: | ----: | ------------: | ------------: | --------------------------------------------------------- | --------------------------------------------- |
|  -8.0% |  -355 | 92.5% → 93.4% | 4,413 → 4,058 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| -19.5% |  -163 | 17.5% → 15.5% |     836 → 673 | `park()`                                                  | `java.util.concurrent.locks.LockSupport`      |
| -10.2% |  -119 | 24.4% → 24.1% | 1,164 → 1,045 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |             % |       Samples | Callee                                               | Location                                      |
| -----: | ----: | ------------: | ------------: | ---------------------------------------------------- | --------------------------------------------- |
|  -8.5% |  -429 | 99.7% → 99.6% | 5,018 → 4,589 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| -16.7% |    -2 |          0.2% |       12 → 10 | `signalWork()`                                       | `java.util.concurrent.ForkJoinPool`           |
|    new |    +2 |  0.0% → <0.1% |         0 → 2 | `casSlotToNull(ForkJoinTask[], int, ForkJoinTask)`   | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change | Delta |             % |       Samples | Callee                           | Location                                                   |
| -----: | ----: | ------------: | ------------: | -------------------------------- | ---------------------------------------------------------- |
|  -9.0% |  -431 | 95.6% → 95.1% | 4,774 → 4,343 | `join()`                         | `java.util.concurrent.ForkJoinTask`                        |
| -13.6% |  -273 | 40.2% → 38.0% | 2,009 → 1,736 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +11.7% |   +60 | 10.3% → 12.6% |     513 → 573 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -5.5% |   -50 | 18.1% → 18.7% |     905 → 855 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -2.1% |   -32 | 30.1% → 32.3% | 1,505 → 1,473 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change | Delta |      % |       Samples | Callee      | Location                                               |
| -----: | ----: | -----: | ------------: | ----------- | ------------------------------------------------------ |
|  -8.6% |  -427 | 100.0% | 4,992 → 4,565 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change | Delta |            % |       Samples | Callee              | Location                                      |
| ------: | ----: | -----------: | ------------: | ------------------- | --------------------------------------------- |
|   -8.1% |  -357 |       100.0% | 4,413 → 4,056 | `doExec()`          | `java.util.concurrent.ForkJoinTask`           |
| removed |    -1 | <0.1% → 0.0% |         1 → 0 | `wrong_method_stub` | `<unknown>`                                   |
|     new |    +1 | 0.0% → <0.1% |         0 → 1 | `releaseAccess()`   | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|  Change | Delta |             % |       Samples | Callee                                                                                                                                                     | Location       |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
|  -17.5% |  -342 | 99.8% → 99.9% | 1,956 → 1,614 | `Unsafe_Park`                                                                                                                                              | `libjvm.dylib` |
| removed |    -2 |   0.1% → 0.0% |         2 → 0 | `AccessInternal::PostRuntimeDispatch<G1BarrierSet::AccessBarrier<548964ull, G1BarrierSet>, (AccessInternal::BarrierType)2, 548964ull>::oop_access_barrier` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 0.1% |         0 → 1 | `JavaThread::threadObj`                                                                                                                                    | `libjvm.dylib` |

##### `Unsafe_Park` (`libjvm.dylib`)

|  Change | Delta |           % |       Samples | Callee                                                                                                                                                     | Location        |
| ------: | ----: | ----------: | ------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
|  -17.5% |  -340 |       99.3% | 1,942 → 1,602 | `Parker::park`                                                                                                                                             | `libjvm.dylib`  |
| removed |    -1 | 0.1% → 0.0% |         1 → 0 | `tlv_get_addr`                                                                                                                                             | `libdyld.dylib` |
| removed |    -1 | 0.1% → 0.0% |         1 → 0 | `AccessInternal::PostRuntimeDispatch<G1BarrierSet::AccessBarrier<548964ull, G1BarrierSet>, (AccessInternal::BarrierType)2, 548964ull>::oop_access_barrier` | `libjvm.dylib`  |
| removed |    -1 | 0.1% → 0.0% |         1 → 0 | `JavaThread::threadObj`                                                                                                                                    | `libjvm.dylib`  |
|     new |    +1 | 0.0% → 0.1% |         0 → 1 | `java_lang_Thread::set_thread_status`                                                                                                                      | `libjvm.dylib`  |

##### `Parker::park` (`libjvm.dylib`)

|  Change | Delta |             % |       Samples | Callee                                                                                                                                                     | Location                  |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
|  -17.5% |  -337 | 99.2% → 99.3% | 1,927 → 1,590 | `__psynch_cvwait`                                                                                                                                          | `libsystem_kernel.dylib`  |
|  -50.0% |    -3 |   0.3% → 0.2% |         6 → 3 | `_pthread_cond_wait`                                                                                                                                       | `libsystem_pthread.dylib` |
| removed |    -2 |   0.1% → 0.0% |         2 → 0 | `AccessInternal::PostRuntimeDispatch<G1BarrierSet::AccessBarrier<544868ull, G1BarrierSet>, (AccessInternal::BarrierType)2, 544868ull>::oop_access_barrier` | `libjvm.dylib`            |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `SafepointMechanism::update_poll_values`                                                                                                                   | `libjvm.dylib`            |
|  -33.3% |    -1 |   0.2% → 0.1% |         3 → 2 | `SafepointMechanism::process`                                                                                                                              | `libjvm.dylib`            |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

| Change | Delta |     % |       Samples | Callee                | Location                   |
| -----: | ----: | ----: | ------------: | --------------------- | -------------------------- |
| -16.3% |  -300 | 99.9% | 1,844 → 1,544 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % |   Samples | Callee                         | Location                                                   |
| ------: | ----: | ------------: | --------: | ------------------------------ | ---------------------------------------------------------- |
|  -20.3% |  -201 | 66.2% → 64.7% | 991 → 790 | `distance(Double[], Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -39.7% |   -31 |   5.2% → 3.8% |   78 → 47 | `get(int)`                     | `java.util.ArrayList`                                      |
| +100.0% |    +7 |   0.5% → 1.1% |    7 → 14 | `zero_blocks`                  | `<unknown>`                                                |
| +100.0% |    +3 |   0.2% → 0.5% |     3 → 6 | `_new_array_Java`              | `<unknown>`                                                |
|  -50.0% |    -1 |          0.1% |     2 → 1 | `DeoptimizationBlob`           | `<unknown>`                                                |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |              % |       Samples | Callee                   | Location                                                   |
| -----: | ----: | -------------: | ------------: | ------------------------ | ---------------------------------------------------------- |
| -18.5% |  -277 |  74.6% → 70.3% | 1,498 → 1,221 | `findNearestCentroid()`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -13.6% |  -273 | 100.0% → 99.9% | 2,008 → 1,735 | `computeDirectly()`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +0.8% |    +4 |  25.4% → 29.6% |     510 → 514 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |           % | Samples | Callee          | Location           |
| -----: | ----: | ----------: | ------: | --------------- | ------------------ |
| -35.3% |    -6 | 1.7% → 1.4% | 17 → 11 | `doubleValue()` | `java.lang.Double` |
| -25.0% |    -1 |        0.4% |   4 → 3 | `SafepointBlob` | `<unknown>`        |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |             % |     Samples | Callee               | Location                                 |
| -----: | ----: | ------------: | ----------: | -------------------- | ---------------------------------------- |
| -13.6% |  -137 | 89.5% → 91.9% | 1,009 → 872 | `park()`             | `java.util.concurrent.locks.LockSupport` |
| -38.8% |   -45 |  10.3% → 7.5% |    116 → 71 | `parkUntil(long)`    | `java.util.concurrent.locks.LockSupport` |
|    new |    +1 |   0.0% → 0.1% |       0 → 1 | `os::javaTimeMillis` | `libjvm.dylib`                           |
|    new |    +1 |   0.0% → 0.1% |       0 → 1 | `clock_gettime`      | `libsystem_c.dylib`                      |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % |       Samples | Callee                         | Location                            |
| ------: | ----: | ------------: | ------------: | ------------------------------ | ----------------------------------- |
|  -10.4% |  -119 | 97.9% → 97.7% | 1,140 → 1,021 | `doExec()`                     | `java.util.concurrent.ForkJoinTask` |
|  +44.4% |    +4 |   0.8% → 1.2% |        9 → 13 | `tryCompensate(long, boolean)` | `java.util.concurrent.ForkJoinPool` |
| removed |    -2 |   0.2% → 0.0% |         2 → 0 | `resolve_static_call`          | `<unknown>`                         |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |              % |   Samples | Callee                     | Location                            |
| ------: | ----: | -------------: | --------: | -------------------------- | ----------------------------------- |
|  -13.0% |  -100 | 99.7% → 100.0% | 769 → 669 | `invoke()`                 | `java.util.concurrent.ForkJoinTask` |
| removed |    -1 |    0.1% → 0.0% |     1 → 0 | `InterpreterRuntime::_new` | `libjvm.dylib`                      |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f0011a2bd0`)

| Change | Delta |      % |   Samples | Callee                         | Location                                    |
| -----: | ----: | -----: | --------: | ------------------------------ | ------------------------------------------- |
| -13.2% |  -102 | 100.0% | 771 → 669 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change | Delta |             % |   Samples | Callee                | Location                                               |
| ------: | ----: | ------------: | --------: | --------------------- | ------------------------------------------------------ |
|   -4.5% |   -40 | 98.7% → 99.8% | 893 → 853 | `average(List)`       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  -81.8% |    -9 |   1.2% → 0.2% |    11 → 2 | `boxed(double[])`     | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `put(Object, Object)` | `java.util.HashMap`                                    |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % |   Samples | Callee                     | Location                                               |
| -----: | ----: | -----: | --------: | -------------------------- | ------------------------------------------------------ |
|  -5.5% |   -50 | 100.0% | 905 → 855 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  -5.5% |   -50 | 100.0% | 905 → 855 | `computeDirectly()`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |             % |   Samples | Callee                     | Location                                                  |
| -----: | ----: | ------------: | --------: | -------------------------- | --------------------------------------------------------- |
|  -4.9% |   -44 | 99.9% → 99.4% | 892 → 848 | `invoke()`                 | `java.util.concurrent.ForkJoinTask`                       |
|    new |    +2 |   0.0% → 0.2% |     0 → 2 | `<init>(JavaKMeans, List)` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|    new |    +1 |   0.0% → 0.1% |     0 → 1 | `loadClass(String)`        | `java.lang.ClassLoader`                                   |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |             % |   Samples | Callee                                           | Location                                                  |
| ------: | ----: | ------------: | --------: | ------------------------------------------------ | --------------------------------------------------------- |
|  -27.1% |   -23 |   5.7% → 4.2% |   85 → 62 | `get(int)`                                       | `java.util.ArrayList`                                     |
|   -1.8% |   -16 | 59.8% → 60.0% | 899 → 883 | `accumulate(Double[], double[])`                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|     new |    +3 |   0.0% → 0.2% |     0 → 3 | `InterpreterRuntime::frequency_counter_overflow` | `libjvm.dylib`                                            |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `resolve_opt_virtual_call`                       | `<unknown>`                                               |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `resolve_virtual_call`                           | `<unknown>`                                               |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |              % |       Samples | Callee              | Location                                                  |
| -----: | ----: | -------------: | ------------: | ------------------- | --------------------------------------------------------- |
|  -2.2% |   -33 | 100.0% → 99.9% | 1,505 → 1,472 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  -2.2% |   -33 |          99.9% | 1,504 → 1,471 | `vectorSum()`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change | Delta |            % | Samples | Callee                                                                                       | Location                                  |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
| removed |   -18 | 81.8% → 0.0% |  18 → 0 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
| removed |    -4 | 18.2% → 0.0% |   4 → 0 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |           % | Samples | Callee          | Location           |
| -----: | ----: | ----------: | ------: | --------------- | ------------------ |
|  -6.0% |    -5 | 9.3% → 8.9% | 84 → 79 | `doubleValue()` | `java.lang.Double` |

##### `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change | Delta |             % | Samples | Callee                 | Location                             |
| ------: | ----: | ------------: | ------: | ---------------------- | ------------------------------------ |
|  -83.3% |    -5 | 54.5% → 50.0% |   6 → 1 | `toArray(IntFunction)` | `java.util.stream.ReferencePipeline` |
| removed |    -3 |  27.3% → 0.0% |   3 → 0 | `stream(double[])`     | `java.util.Arrays`                   |
|  -50.0% |    -1 | 18.2% → 50.0% |   2 → 1 | `boxed()`              | `java.util.stream.DoublePipeline`    |

##### `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change | Delta |              % | Samples | Callee              | Location                           |
| ------: | ----: | -------------: | ------: | ------------------- | ---------------------------------- |
| removed |    -4 |   50.0% → 0.0% |   4 → 0 | `<clinit>()`        | `scala.Predef$`                    |
| removed |    -2 |   25.0% → 0.0% |   2 → 0 | `loadClass(String)` | `java.lang.ClassLoader`            |
| +100.0% |    +2 | 25.0% → 100.0% |   2 → 4 | `map(Function1)`    | `scala.collection.immutable.Range` |

##### `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`)

|  Change | Delta |            % | Samples | Callee                            | Location                |
| ------: | ----: | -----------: | ------: | --------------------------------- | ----------------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `walkFileTree(Path, FileVisitor)` | `java.nio.file.Files`   |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `loadClass(String)`               | `java.lang.ClassLoader` |

##### `deleteRecursively(Path)` (`org.renaissance.core.DirUtils`)

|  Change | Delta |             % | Samples | Callee                             | Location                        |
| ------: | ----: | ------------: | ------: | ---------------------------------- | ------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `deleteRecursively(Path, boolean)` | `org.renaissance.core.DirUtils` |

##### `lambda$createScratchDirectory$1(Path)` (`org.renaissance.core.DirUtils`)

|  Change | Delta |             % | Samples | Callee                    | Location                        |
| ------: | ----: | ------------: | ------: | ------------------------- | ------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `deleteRecursively(Path)` | `org.renaissance.core.DirUtils` |

##### `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`)

|  Change | Delta |             % | Samples | Callee                                  | Location                        |
| ------: | ----: | ------------: | ------: | --------------------------------------- | ------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `lambda$createScratchDirectory$1(Path)` | `org.renaissance.core.DirUtils` |

##### `createHandler()` (`org.renaissance.core.Logging`)

|  Change | Delta |              % | Samples | Callee                            | Location                            |
| ------: | ----: | -------------: | ------: | --------------------------------- | ----------------------------------- |
|  -33.3% |    -1 | 75.0% → 100.0% |   3 → 2 | `<init>()`                        | `java.util.logging.SimpleFormatter` |
| removed |    -1 |   25.0% → 0.0% |   1 → 0 | `<init>(OutputStream, Formatter)` | `java.util.logging.StreamHandler`   |

##### `ConcurrentGCThread::run` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                                              | Location       |
| ------: | ----: | -----------: | ------: | --------------------------------------------------- | -------------- |
| removed |   -19 | 70.4% → 0.0% |  19 → 0 | `G1ConcurrentRefineThread::run_service`             | `libjvm.dylib` |
| removed |    -1 |  3.7% → 0.0% |   1 → 0 | `G1PrimaryConcurrentRefineThread::maybe_deactivate` | `libjvm.dylib` |

##### `G1ConcurrentRefineThread::run_service` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                                                        | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------- | -------------- |
| removed |   -15 | 78.9% → 0.0% |  15 → 0 | `G1PrimaryConcurrentRefineThread::wait_for_completed_buffers` | `libjvm.dylib` |
| removed |    -3 | 15.8% → 0.0% |   3 → 0 | `G1PrimaryConcurrentRefineThread::do_refinement_step`         | `libjvm.dylib` |
| removed |    -1 |  5.3% → 0.0% |   1 → 0 | `SuspendibleThreadSet::join`                                  | `libjvm.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

| Change | Delta |             % |   Samples | Callee                          | Location       |
| -----: | ----: | ------------: | --------: | ------------------------------- | -------------- |
| -74.1% |   -20 |   7.6% → 2.1% |    27 → 7 | `ConcurrentGCThread::run`       | `libjvm.dylib` |
| +15.7% |   +17 | 30.4% → 36.9% | 108 → 125 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
|  -4.7% |    -9 | 53.8% → 53.7% | 191 → 182 | `WorkerThread::run`             | `libjvm.dylib` |
| -17.6% |    -3 |   4.8% → 4.1% |   17 → 14 | `VMThread::run`                 | `libjvm.dylib` |
|  -8.3% |    -1 |   3.4% → 3.2% |   12 → 11 | `WatcherThread::run`            | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

| Change | Delta |              % |   Samples | Callee                                  | Location       |
| -----: | ----: | -------------: | --------: | --------------------------------------- | -------------- |
|  -4.5% |   -16 | 100.0% → 99.7% | 355 → 339 | `Thread::call_run`                      | `libjvm.dylib` |
|    new |    +1 |    0.0% → 0.3% |     0 → 1 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib` |

##### `G1ParScanThreadState::trim_queue_to_threshold` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                                                                                                                       | Location       |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | -------------- |
| removed |    -7 | 46.7% → 0.0% |   7 → 0 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                            | `libjvm.dylib` |
| removed |    -4 | 26.7% → 0.0% |   4 → 0 | `G1ParScanThreadState::do_partial_array`                                                                                     | `libjvm.dylib` |
| removed |    -1 |  6.7% → 0.0% |   1 → 0 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` | `libjvm.dylib` |

##### `G1PrimaryConcurrentRefineThread::wait_for_completed_buffers` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                  | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------- | -------------- |
| removed |   -15 | 100.0% → 0.0% |  15 → 0 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

| Change | Delta |              % |   Samples | Callee                | Location       |
| -----: | ----: | -------------: | --------: | --------------------- | -------------- |
|  -4.2% |   -15 | 100.0% → 99.7% | 355 → 340 | `thread_native_entry` | `libjvm.dylib` |
|    new |    +1 |    0.0% → 0.3% |     0 → 1 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

| Change | Delta |      % |   Samples | Callee           | Location                  |
| -----: | ----: | -----: | --------: | ---------------- | ------------------------- |
|  -3.9% |   -14 | 100.0% | 355 → 341 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `G1ParScanThreadState::steal_and_trim_queue` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                                            | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------------- | -------------- |
| removed |   -10 | 83.3% → 0.0% |  10 → 0 | `G1ParScanThreadState::trim_queue_to_threshold`   | `libjvm.dylib` |
| removed |    -2 | 16.7% → 0.0% |   2 → 0 | `G1ParScanThreadState::do_copy_to_survivor_space` | `libjvm.dylib` |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                                         | Location       |
| ------: | ----: | -----------: | ------: | ---------------------------------------------- | -------------- |
| removed |    -3 | 30.0% → 0.0% |   3 → 0 | `G1ParScanThreadState::start_partial_objarray` | `libjvm.dylib` |

##### `WorkerThread::run` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                            | Location                 |
| ------: | ----: | ------------: | ------: | --------------------------------- | ------------------------ |
|  +31.8% |   +14 | 23.0% → 31.9% | 44 → 58 | `G1FullGCMarkTask::work`          | `libjvm.dylib`           |
|  -15.0% |   -12 | 41.9% → 37.4% | 80 → 68 | `semaphore_wait_trap`             | `libsystem_kernel.dylib` |
| removed |    -8 |   4.2% → 0.0% |   8 → 0 | `G1FullGCResetMetadataTask::work` | `libjvm.dylib`           |
|     new |    +8 |   0.0% → 4.4% |   0 → 8 | `G1FullGCAdjustTask::work`        | `libjvm.dylib`           |
| removed |    -7 |   3.7% → 0.0% |   7 → 0 | `HeapRegionManager::par_iterate`  | `libjvm.dylib`           |

##### `Unsafe_Unpark` (`libjvm.dylib`)

|  Change | Delta |           % | Samples | Callee                              | Location                  |
| ------: | ----: | ----------: | ------: | ----------------------------------- | ------------------------- |
|  -10.4% |    -7 |       87.0% | 67 → 60 | `__psynch_cvsignal`                 | `libsystem_kernel.dylib`  |
|  -50.0% |    -2 | 5.2% → 2.9% |   4 → 2 | `pthread_jit_write_protect_np`      | `libsystem_pthread.dylib` |
| removed |    -1 | 1.3% → 0.0% |   1 → 0 | `__psynch_cvclrprepost`             | `libsystem_kernel.dylib`  |
| removed |    -1 | 1.3% → 0.0% |   1 → 0 | `pthread_cond_signal`               | `libsystem_pthread.dylib` |
| removed |    -1 | 1.3% → 0.0% |   1 → 0 | `pthread_dependency_wait_np.cold.3` | `libsystem_pthread.dylib` |

##### `arrayof_oop_disjoint_arraycopy` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                               | Location        |
| ------: | ----: | ------------: | ------: | ------------------------------------ | --------------- |
|  -14.8% |    -8 | 93.1% → 92.0% | 54 → 46 | `forward_copy_longs`                 | `<unknown>`     |
| removed |    -1 |   1.7% → 0.0% |   1 → 0 | `tlv_get_addr`                       | `libdyld.dylib` |
|     new |    +1 |   0.0% → 2.0% |   0 → 1 | `G1BarrierSet::write_ref_array_work` | `libjvm.dylib`  |
|     new |    +1 |   0.0% → 2.0% |   0 → 1 | `G1BarrierSet::invalidate`           | `libjvm.dylib`  |

##### `HeapRegionManager::par_iterate` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                                              | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------- | -------------- |
| removed |    -8 |  50.0% → 0.0% |   8 → 0 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::do_heap_region` | `libjvm.dylib` |
|     new |    +8 | 0.0% → 100.0% |   0 → 8 | `G1AdjustRegionClosure::do_heap_region`                             | `libjvm.dylib` |
| removed |    -7 |  43.8% → 0.0% |   7 → 0 | `G1ClearBitMapTask::G1ClearBitmapHRClosure::do_heap_region`         | `libjvm.dylib` |
| removed |    -1 |   6.3% → 0.0% |   1 → 0 | `G1PrepareEvacuationTask::G1PrepareRegionsClosure::do_heap_region`  | `libjvm.dylib` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |              % |       Samples | Callee     | Location                            |
| -----: | ----: | -------------: | ------------: | ---------- | ----------------------------------- |
|  -7.5% |  -105 | 99.9% → 100.0% | 1,400 → 1,295 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

| Change | Delta |      % |   Samples | Callee   | Location                                                               |
| -----: | ----: | -----: | --------: | -------- | ---------------------------------------------------------------------- |
| -13.2% |  -102 | 100.0% | 771 → 669 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f0011a2bd0` |

##### `get(int)` (`java.util.ArrayList`)

| Change | Delta |             % |   Samples | Callee                 | Location              |
| -----: | ----: | ------------: | --------: | ---------------------- | --------------------- |
| -21.6% |   -35 | 79.0% → 79.4% | 162 → 127 | `elementData(int)`     | `java.util.ArrayList` |
| -29.3% |   -12 | 20.0% → 18.1% |   41 → 29 | `checkIndex(int, int)` | `java.util.Objects`   |

##### `parkUntil(long)` (`java.util.concurrent.locks.LockSupport`)

| Change | Delta |      % |  Samples | Callee                | Location                   |
| -----: | ----: | -----: | -------: | --------------------- | -------------------------- |
| -38.8% |   -45 | 100.0% | 116 → 71 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `PhaseCFG::global_code_motion` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                          | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------- | -------------- |
|  -66.7% |    -2 |        33.3% |   3 → 1 | `PhaseCFG::schedule_late`       | `libjvm.dylib` |
| removed |    -1 | 11.1% → 0.0% |   1 → 0 | `PhaseCFG::implicit_null_check` | `libjvm.dylib` |
| removed |    -1 | 11.1% → 0.0% |   1 → 0 | `CProjNode::is_block_proj`      | `libjvm.dylib` |
| removed |    -1 | 11.1% → 0.0% |   1 → 0 | `PhaseCFG::schedule_local`      | `libjvm.dylib` |
| removed |    -1 | 11.1% → 0.0% |   1 → 0 | `StartNode::pinned`             | `libjvm.dylib` |

##### `PhaseCFG::do_global_code_motion` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                         | Location       |
| -----: | ----: | -----: | ------: | ------------------------------ | -------------- |
| -66.7% |    -6 | 100.0% |   9 → 3 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |

##### `ciEnv::register_method` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                      | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------- | -------------- |
| removed |    -4 |  57.1% → 0.0% |   4 → 0 | `nmethod::new_nmethod`                      | `libjvm.dylib` |
| removed |    -1 |  14.3% → 0.0% |   1 → 0 | `Mutex::lock`                               | `libjvm.dylib` |
| removed |    -1 |  14.3% → 0.0% |   1 → 0 | `nmethod::post_compiled_method`             | `libjvm.dylib` |
| removed |    -1 |  14.3% → 0.0% |   1 → 0 | `ciEnv::validate_compile_task_dependencies` | `libjvm.dylib` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `Dependencies::encode_content_bytes`        | `libjvm.dylib` |

##### `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                | Location       |
| ------: | ----: | -----------: | ------: | --------------------- | -------------- |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `MachNode::ideal_reg` | `libjvm.dylib` |

##### `PhaseCCP::do_transform` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                | Location       |
| ------: | ----: | ------------: | ------: | --------------------- | -------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `PhaseCCP::transform` | `libjvm.dylib` |

##### `PhaseCCP::push_child_nodes_to_worklist` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                     | Location       |
| ------: | ----: | -----------: | ------: | -------------------------- | -------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `PhaseCCP::push_more_uses` | `libjvm.dylib` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `TypeInstPtr::add_offset`  | `libjvm.dylib` |

##### `PhaseCCP::analyze` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                   | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | -------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `PhaseCCP::push_child_nodes_to_worklist` | `libjvm.dylib` |

##### `PhaseCCP::PhaseCCP` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee              | Location       |
| ------: | ----: | ------------: | ------: | ------------------- | -------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `PhaseCCP::analyze` | `libjvm.dylib` |

##### `PhaseOutput::install_code` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                   | Location       |
| ------: | ----: | ------------: | ------: | ------------------------ | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `ciEnv::register_method` | `libjvm.dylib` |

##### `PhaseCFG::schedule_late` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                         | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------ | -------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `Node_Backward_Iterator::next` | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                                                             | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------ | -------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `PhaseChaitin::raise_pressure`                                     | `libjvm.dylib` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `PhaseChaitin::remove_bound_register_from_interfering_live_ranges` | `libjvm.dylib` |

##### `CompileBroker::compile_method` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                  | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------- | -------------- |
|  -50.0% |    -1 | 25.0% → 16.7% |   2 → 1 | `DirectivesStack::getMatchingDirective` | `libjvm.dylib` |
|  -20.0% |    -1 | 62.5% → 66.7% |   5 → 4 | `CompileBroker::compile_method_base`    | `libjvm.dylib` |
|  +25.0% |    +1 | 50.0% → 83.3% |   4 → 5 | `CompileBroker::compile_method`         | `libjvm.dylib` |
| removed |    -1 |  12.5% → 0.0% |   1 → 0 | `DirectivesStack::release`              | `libjvm.dylib` |
|     new |    +1 |  0.0% → 16.7% |   0 → 1 | `InstanceKlass::lookup_osr_nmethod`     | `libjvm.dylib` |

##### `CompilationPolicy::method_back_branch_event` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                          | Location       |
| -----: | ----: | -----: | ------: | ------------------------------- | -------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `CompileBroker::compile_method` | `libjvm.dylib` |

##### `CompileBroker::create_compile_task` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee             | Location                 |
| -----: | ----: | -----: | ------: | ------------------ | ------------------------ |
| -66.7% |    -2 | 100.0% |   3 → 1 | `__psynch_cvbroad` | `libsystem_kernel.dylib` |

##### `LIR_Assembler::emit_lir_list` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                             | Location       |
| ------: | ----: | -----------: | ------: | ---------------------------------- | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `LIR_Assembler::emit_profile_call` | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `LIR_Const::as_constant`           | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                             | Location       |
| -----: | ----: | ------------: | ------: | ---------------------------------- | -------------- |
| -80.0% |    -4 |  31.3% → 7.1% |   5 → 1 | `ciEnv::register_method`           | `libjvm.dylib` |
| +18.2% |    +2 | 68.8% → 92.9% | 11 → 13 | `Compilation::compile_java_method` | `libjvm.dylib` |

##### `ciMethod::ensure_method_data` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                          | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------- | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `ciObjectFactory::get_metadata` | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `ciMethod::ensure_method_data`  | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `ciMethodData::load_data`       | `libjvm.dylib` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in samples collected in their leaf frame.

|  Change | Delta |            % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  +84.2% |   +16 |  0.3% → 0.6% | 19 → 35 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`) |
|  +19.7% |   +15 |  1.2% → 1.5% | 76 → 91 | `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| +166.7% |   +15 |  0.1% → 0.4% |  9 → 24 | `zero_blocks` ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f0011a7000`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  +19.1% |   +13 |  1.0% → 1.4% | 68 → 81 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  +50.0% |   +11 |  0.3% → 0.6% | 22 → 33 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `CompileQueue::get` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| +137.5% |   +11 |  0.1% → 0.3% |  8 → 19 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `TaskTerminator::offer_termination` ← `G1ParEvacuateFollowersClosure::offer_termination` ← `G1ParEvacuateFollowersClosure::do_void` ← `G1EvacuateRegionsTask::evacuate_live_objects` ← `G1EvacuateRegionsBaseTask::work` ← `WorkerThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  +18.9% |   +10 |  0.8% → 1.1% | 53 → 63 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  +39.1% |    +9 |  0.3% → 0.5% | 23 → 32 | `forward_copy_longs` ← `arrayof_jint_disjoint_arraycopy` ← `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f0011a7490`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f0011a7000`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| +450.0% |    +9 | <0.1% → 0.2% |  2 → 11 | `G1FullGCMarker::follow_object` (`libjvm.dylib`) ← `G1FullGCMarker::publish_and_drain_oop_tasks` ← `G1FullGCMarker::follow_marking_stacks` ← `G1FullGCMarker::complete_marking` ← `G1FullGCMarkTask::work` ← `WorkerThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| +100.0% |    +8 |  0.1% → 0.3% |  8 → 16 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| +400.0% |    +8 | <0.1% → 0.2% |  2 → 10 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| +266.7% |    +8 | <0.1% → 0.2% |  3 → 11 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  +28.0% |    +7 |  0.4% → 0.5% | 25 → 32 | `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                    |
| +116.7% |    +7 |  0.1% → 0.2% |  6 → 13 | `zero_blocks` ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f0011a7000`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| +175.0% |    +7 |  0.1% → 0.2% |  4 → 11 | `forward_copy_longs` ← `arrayof_jint_disjoint_arraycopy` ← `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f0011a7490`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f0011a7000`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  +50.0% |    +6 |  0.2% → 0.3% | 12 → 18 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| +300.0% |    +6 | <0.1% → 0.1% |   2 → 8 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` (`libjvm.dylib`) ← `G1FullGCMarker::follow_marking_stacks` ← `G1FullGCMarker::complete_marking` ← `G1FullGCMarkTask::work` ← `WorkerThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| +600.0% |    +6 | <0.1% → 0.1% |   1 → 7 | `zero_blocks` ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|   +7.7% |    +5 |  1.0% → 1.2% | 65 → 70 | `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  +71.4% |    +5 |  0.1% → 0.2% |  7 → 12 | `zero_blocks` ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f0011a7000`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

### Improvements

Call stacks with the largest decrease in samples collected in their leaf frame.

|  Change | Delta |             % |   Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------: | ----: | ------------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -13.1% |  -130 | 15.0% → 14.4% | 990 → 860 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  -26.7% |   -67 |   3.8% → 3.1% | 251 → 184 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  -40.4% |   -46 |   1.7% → 1.1% |  114 → 68 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `parkUntil(long)` (`java.util.concurrent.locks.LockSupport`) ← `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  -68.1% |   -32 |   0.7% → 0.3% |   47 → 15 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  -51.7% |   -31 |   0.9% → 0.5% |   60 → 29 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  -31.3% |   -31 |   1.5% → 1.1% |   99 → 68 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  -16.7% |   -25 |   2.3% → 2.1% | 150 → 125 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  -20.5% |   -23 |   1.7% → 1.5% |  112 → 89 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  -27.8% |   -20 |   1.1% → 0.9% |   72 → 52 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  -14.2% |   -18 |   1.9% → 1.8% | 127 → 109 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  -21.3% |   -17 |   1.2% → 1.1% |   80 → 63 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| removed |   -15 |   0.2% → 0.0% |    15 → 0 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1PrimaryConcurrentRefineThread::wait_for_completed_buffers` ← `G1ConcurrentRefineThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  -28.8% |   -15 |   0.8% → 0.6% |   52 → 37 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f0011a2bd0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)               |
|  -37.8% |   -14 |   0.6% → 0.4% |   37 → 23 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  -11.7% |   -14 |          1.8% | 120 → 106 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f0011a2bd0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`) |
|  -15.0% |   -12 |   1.2% → 1.1% |   80 → 68 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `WorkerThread::run` (`libjvm.dylib`) ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  -52.4% |   -11 |   0.3% → 0.2% |   21 → 10 | `computeIfAbsent(Object, Function)` (`java.util.HashMap`) ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  -20.4% |   -10 |          0.7% |   49 → 39 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  -62.5% |   -10 |   0.2% → 0.1% |    16 → 6 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  -23.3% |   -10 |   0.7% → 0.6% |   43 → 33 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

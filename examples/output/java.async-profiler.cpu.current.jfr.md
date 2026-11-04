# Sampling profile

Collected 5,975 samples.

| Category          |     % | Samples |
| ----------------- | ----: | ------: |
| Ours              | 43.6% |   2,608 |
| Native            | 41.5% |   2,477 |
| Standard library  | 10.9% |     653 |
| JIT               |  2.9% |     174 |
| Compiler          |  1.0% |      62 |
| Garbage collector | <0.1% |       1 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── 5,566 samples (93.2%) run() at java.util.concurrent.ForkJoinWorkerThread
│   └── 5,566 samples (93.2%) runWorker(ForkJoinPool$WorkQueue) at java.util.concurrent.ForkJoinPool
│       ├── … 4,589 samples (76.8%) doExec() at java.util.concurrent.ForkJoinTask
│       │   ├── … 4,542 samples (76.0%) exec() at java.util.concurrent.RecursiveTask
│       │   │   └── 4,541 samples (76.0%) compute() at org.renaissance.jdk.concurrent.JavaKMeans$RangedTask
│       │   │       ├── 1,736 samples (29.1%) computeDirectly() at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│       │   │       │   ├── … 1,221 samples (20.4%, self 6.0%) findNearestCentroid() at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│       │   │       │   │   ├── 790 samples (13.2%, self 13.0%) distance(Double[], Double[])
│       │   │       │   │   └── 73 samples (1.2%) 7 more callees, led by (0.8%) get(int) at java.util.ArrayList
│       │   │       │   └── … 514 samples (8.6%, self 2.1%) collectClusters(int[]) at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│       │   │       │       ├── 176 samples (2.9%, self 2.2%) computeIfAbsent(Object, Function) at java.util.HashMap
│       │   │       │       │   └── 39 samples (0.7%) hash(Object)
│       │   │       │       │       └── … 12 samples (0.2%) pthread_jit_write_protect_np at libsystem_pthread.dylib
│       │   │       │       └── 212 samples (3.5%) 3 more callees, led by (2.7%) add(Object) at java.util.ArrayList
│       │   │       ├── 1,473 samples (24.7%) computeDirectly() at org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│       │   │       │   └── … 1,471 samples (24.6%, self 8.7%) vectorSum() at org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│       │   │       │       ├── 883 samples (14.8%, self 13.5%) accumulate(Double[], double[])
│       │   │       │       │   └── 79 samples (1.3%) doubleValue() at java.lang.Double
│       │   │       │       └── 62 samples (1.0%) get(int) at java.util.ArrayList
│       │   │       │           └── 62 samples (1.0%, self 2.1% globally) elementData(int)
│       │   │       ├── … 548 samples (9.2%) merge(Object, Object, BiFunction) at java.util.HashMap
│       │   │       │   ├── 373 samples (6.2%) apply(Object, Object) at org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f0011a7490
│       │   │       │   │   └── 373 samples (6.2%) lambda$merge$6(List, List) at org.renaissance.jdk.concurrent.JavaKMeans
│       │   │       │   │       ├── 228 samples (3.8%) addAll(Collection) at java.util.ArrayList …
│       │   │       │   │       └── … 140 samples (2.3%) copyOf(Object[], int) at java.util.Arrays
│       │   │       │   │           └── 112 samples (1.9%) arrayof_jint_disjoint_arraycopy
│       │   │       │   │               └── 102 samples (1.7%, self 5.0% globally) forward_copy_longs
│       │   │       │   ├── 111 samples (1.9%, self 2.8% globally) zero_blocks
│       │   │       │   └── 54 samples (0.9%) 2 more callees, led by (0.9%) arrayof_jint_disjoint_arraycopy
│       │   │       └── 758 samples (12.7%) 8 more callees, led by (12.1%) join() at java.util.concurrent.ForkJoinTask
│       │   └── … 35 samples (0.6%) __psynch_cvsignal at libsystem_kernel.dylib
│       └── 949 samples (15.9%) awaitWork(ForkJoinPool$WorkQueue)
│           ├── … 860 samples (14.4%, self 27.9% globally) __psynch_cvwait at libsystem_kernel.dylib
│           └── 73 samples (1.2%) 3 more callees, led by (1.2%) parkUntil(long) at java.util.concurrent.locks.LockSupport
├── … 339 samples (5.7%) Thread::call_run at libjvm.dylib
│   ├── 182 samples (3.0%) WorkerThread::run
│   │   ├── 68 samples (1.1%) semaphore_wait_trap at libsystem_kernel.dylib
│   │   └── 114 samples (1.9%) 6 more callees, led by (1.0%) G1FullGCMarkTask::work
│   └── 157 samples (2.6%) 4 more callees, led by (2.1%) JavaThread::thread_main_inner
└── 68 samples (1.1%) 7 more root frames, led by (1.0%) main(String[]) at org.renaissance.core.Launcher
```

## Hottest functions

### Self samples

Functions with the most samples collected within the function body, excluding callees.

|     % | Samples | Function                            | Location                                                   |
| ----: | ------: | ----------------------------------- | ---------------------------------------------------------- |
| 27.9% |   1,665 | `__psynch_cvwait`                   | `libsystem_kernel.dylib`                                   |
| 13.5% |     804 | `accumulate(Double[], double[])`    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 13.0% |     776 | `distance(Double[], Double[])`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  8.7% |     522 | `vectorSum()`                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  6.0% |     358 | `findNearestCentroid()`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  5.0% |     296 | `forward_copy_longs`                | `<unknown>`                                                |
|  2.8% |     168 | `zero_blocks`                       | `<unknown>`                                                |
|  2.2% |     131 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`                                        |
|  2.1% |     127 | `elementData(int)`                  | `java.util.ArrayList`                                      |
|  2.1% |     126 | `collectClusters(int[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  1.5% |      90 | `doubleValue()`                     | `java.lang.Double`                                         |
|  1.3% |      78 | `semaphore_wait_trap`               | `libsystem_kernel.dylib`                                   |
|  1.0% |      60 | `__psynch_cvsignal`                 | `libsystem_kernel.dylib`                                   |
|  1.0% |      59 | `add(Object, Object[], int)`        | `java.util.ArrayList`                                      |
|  0.9% |      54 | `_platform_bzero`                   | `libsystem_platform.dylib`                                 |
|  0.7% |      39 | `__psynch_mutexwait`                | `libsystem_kernel.dylib`                                   |
|  0.5% |      31 | `pthread_jit_write_protect_np`      | `libsystem_pthread.dylib`                                  |
|  0.5% |      29 | `checkIndex(int, int)`              | `java.util.Objects`                                        |
|  0.5% |      28 | `grow(int)`                         | `java.util.ArrayList`                                      |
|  0.4% |      26 | `hash(Object)`                      | `java.util.HashMap`                                        |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Ours

|     % | Samples | Function                                         | Location                                                               |
| ----: | ------: | ------------------------------------------------ | ---------------------------------------------------------------------- |
| 13.5% |     804 | `accumulate(Double[], double[])`                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 13.0% |     776 | `distance(Double[], Double[])`                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  8.7% |     522 | `vectorSum()`                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  6.0% |     358 | `findNearestCentroid()`                          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  2.1% |     126 | `collectClusters(int[])`                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  0.1% |       3 | `lambda$merge$6(List, List)`                     | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  0.1% |       3 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| <0.1% |       2 | `createSubtask(int, int)`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| <0.1% |       2 | `add(double[], double[])`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| <0.1% |       2 | `createSubtask(int, int)`                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| <0.1% |       2 | `lambda$collectClusters$0(Double[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| <0.1% |       1 | `computeDirectly()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| <0.1% |       1 | `compute()`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| <0.1% |       1 | `computeDirectly()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| <0.1% |       1 | `average(List)`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| <0.1% |       1 | `combineResults(Object, Object)`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| <0.1% |       1 | `apply(int)`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f0011a2150` |
| <0.1% |       1 | `div(double[], int)`                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| <0.1% |       1 | `<init>(JavaKMeans, List, int, int)`             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |

##### Native

|     % | Samples | Function                                                        | Location                   |
| ----: | ------: | --------------------------------------------------------------- | -------------------------- |
| 27.9% |   1,665 | `__psynch_cvwait`                                               | `libsystem_kernel.dylib`   |
|  5.0% |     296 | `forward_copy_longs`                                            | `<unknown>`                |
|  1.3% |      78 | `semaphore_wait_trap`                                           | `libsystem_kernel.dylib`   |
|  1.0% |      60 | `__psynch_cvsignal`                                             | `libsystem_kernel.dylib`   |
|  0.9% |      54 | `_platform_bzero`                                               | `libsystem_platform.dylib` |
|  0.7% |      39 | `__psynch_mutexwait`                                            | `libsystem_kernel.dylib`   |
|  0.5% |      31 | `pthread_jit_write_protect_np`                                  | `libsystem_pthread.dylib`  |
|  0.3% |      18 | `arrayof_jint_disjoint_arraycopy`                               | `<unknown>`                |
|  0.3% |      16 | `G1FullGCMarker::mark_object`                                   | `libjvm.dylib`             |
|  0.2% |      13 | `G1FullGCMarker::follow_object`                                 | `libjvm.dylib`             |
|  0.2% |      12 | `ObjArrayAllocator::initialize`                                 | `libjvm.dylib`             |
|  0.2% |      11 | `_platform_memset`                                              | `libsystem_platform.dylib` |
|  0.2% |       9 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` | `libjvm.dylib`             |
|  0.1% |       6 | `swtch_pri`                                                     | `libsystem_kernel.dylib`   |
|  0.1% |       6 | `write`                                                         | `libsystem_kernel.dylib`   |
|  0.1% |       5 | `Parker::park`                                                  | `libjvm.dylib`             |
|  0.1% |       5 | `G1FullGCMarker::publish_and_drain_oop_tasks`                   | `libjvm.dylib`             |
|  0.1% |       5 | `G1RegionMarkStatsCache::add_live_words`                        | `libjvm.dylib`             |
|  0.1% |       5 | `semaphore_signal_trap`                                         | `libsystem_kernel.dylib`   |
|  0.1% |       4 | `Unsafe_Unpark`                                                 | `libjvm.dylib`             |

##### Standard library

|    % | Samples | Function                                                  | Location                                      |
| ---: | ------: | --------------------------------------------------------- | --------------------------------------------- |
| 2.2% |     131 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                           |
| 2.1% |     127 | `elementData(int)`                                        | `java.util.ArrayList`                         |
| 1.5% |      90 | `doubleValue()`                                           | `java.lang.Double`                            |
| 1.0% |      59 | `add(Object, Object[], int)`                              | `java.util.ArrayList`                         |
| 0.5% |      29 | `checkIndex(int, int)`                                    | `java.util.Objects`                           |
| 0.5% |      28 | `grow(int)`                                               | `java.util.ArrayList`                         |
| 0.4% |      26 | `hash(Object)`                                            | `java.util.HashMap`                           |
| 0.4% |      23 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
| 0.2% |      10 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                           |
| 0.2% |       9 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`           |
| 0.2% |       9 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                            |
| 0.1% |       8 | `grow()`                                                  | `java.util.ArrayList`                         |
| 0.1% |       7 | `putVal(int, Object, Object, boolean, boolean)`           | `java.util.HashMap`                           |
| 0.1% |       6 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`           |
| 0.1% |       6 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`           |
| 0.1% |       6 | `forEach(BiConsumer)`                                     | `java.util.HashMap`                           |
| 0.1% |       4 | `get(int)`                                                | `java.util.ArrayList`                         |
| 0.1% |       4 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| 0.1% |       4 | `awaitWork(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`           |
| 0.1% |       4 | `signalWaiters()`                                         | `java.util.concurrent.ForkJoinTask`           |

##### JIT

|     % | Samples | Function                       | Location    |
| ----: | ------: | ------------------------------ | ----------- |
|  2.8% |     168 | `zero_blocks`                  | `<unknown>` |
| <0.1% |       2 | `vtable stub`                  | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xba)`       | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xbbb)`      | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xbbaa)`     | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xbbbebebe)` | `<unknown>` |

##### Compiler

|     % | Samples | Function                                    | Location       |
| ----: | ------: | ------------------------------------------- | -------------- |
|  0.1% |       3 | `PhaseLive::add_liveout`                    | `libjvm.dylib` |
| <0.1% |       2 | `Matcher::xform`                            | `libjvm.dylib` |
| <0.1% |       2 | `PhaseIdealLoop::try_move_store_after_loop` | `libjvm.dylib` |
| <0.1% |       2 | `PhaseLive::compute`                        | `libjvm.dylib` |
| <0.1% |       2 | `Unique_Node_List::remove`                  | `libjvm.dylib` |
| <0.1% |       2 | `PhaseChaitin::Select`                      | `libjvm.dylib` |
| <0.1% |       2 | `PhaseIdealLoop::Dominators`                | `libjvm.dylib` |
| <0.1% |       2 | `PhaseChaitin::post_allocate_copy_removal`  | `libjvm.dylib` |
| <0.1% |       1 | `CmpNode::Identity`                         | `libjvm.dylib` |
| <0.1% |       1 | `PhaseIdealLoop::compute_early_ctrl`        | `libjvm.dylib` |
| <0.1% |       1 | `PhaseIdealLoop::try_sink_out_of_loop`      | `libjvm.dylib` |
| <0.1% |       1 | `PhaseIdealLoop::split_if_with_blocks`      | `libjvm.dylib` |
| <0.1% |       1 | `Matcher::init_first_stack_mask`            | `libjvm.dylib` |
| <0.1% |       1 | `Matcher::Label_Root`                       | `libjvm.dylib` |
| <0.1% |       1 | `TypeKlassPtr::get_con`                     | `libjvm.dylib` |
| <0.1% |       1 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib` |
| <0.1% |       1 | `PhaseIFG::SquareUp`                        | `libjvm.dylib` |
| <0.1% |       1 | `PhaseChaitin::merge_multidefs`             | `libjvm.dylib` |
| <0.1% |       1 | `PhaseIdealLoop::build_loop_early`          | `libjvm.dylib` |
| <0.1% |       1 | `LinearScan::add_register_hints`            | `libjvm.dylib` |

#### Lines

Lines with the largest contribution to each function's self samples.

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Location                                                      |
| ----: | ------: | ------------------------------------------------------------- |
| 87.7% |     705 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:412` |
| 12.3% |      99 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:411` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Location                                                       |
| ----: | ------: | -------------------------------------------------------------- |
| 65.9% |     511 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:248` |
| 32.7% |     254 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:249` |
|  1.3% |      10 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:250` |
|  0.1% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:247` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Location                                                      |
| ----: | ------: | ------------------------------------------------------------- |
| 88.3% |     461 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:403` |
| 11.7% |      61 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:402` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Location                                                       |
| ----: | ------: | -------------------------------------------------------------- |
| 51.1% |     183 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:231` |
| 32.7% |     117 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:230` |
| 10.3% |      37 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:229` |
|  2.8% |      10 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:225` |
|  2.2% |       8 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:226` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 28.2% |      37 | `java.util.HashMap:1197` |
| 22.9% |      30 | `java.util.HashMap:1213` |
| 20.6% |      27 | `java.util.HashMap:1207` |
|  9.2% |      12 | `java.util.HashMap:1204` |
|  8.4% |      11 | `java.util.HashMap:1222` |

##### `elementData(int)` (`java.util.ArrayList`)

|      % | Samples | Location                  |
| -----: | ------: | ------------------------- |
| 100.0% |     127 | `java.util.ArrayList:411` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Location                                                       |
| ----: | ------: | -------------------------------------------------------------- |
| 25.4% |      32 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:213` |
| 20.6% |      26 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |
| 19.0% |      24 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:212` |
| 19.0% |      24 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:214` |
| 15.9% |      20 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:211` |

##### `doubleValue()` (`java.lang.Double`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |      90 | `java.lang.Double:1001` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

|     % | Samples | Location                  |
| ----: | ------: | ------------------------- |
| 69.5% |      41 | `java.util.ArrayList:482` |
| 30.5% |      18 | `java.util.ArrayList:484` |

##### `checkIndex(int, int)` (`java.util.Objects`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |      29 | `java.util.Objects:385` |

##### `grow(int)` (`java.util.ArrayList`)

|     % | Samples | Location                  |
| ----: | ------: | ------------------------- |
| 89.3% |      25 | `java.util.ArrayList:239` |
|  3.6% |       1 | `java.util.ArrayList:232` |
|  3.6% |       1 | `java.util.ArrayList:233` |
|  3.6% |       1 | `java.util.ArrayList:234` |

##### `hash(Object)` (`java.util.HashMap`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |      26 | `java.util.HashMap:338` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Location                                 |
| ----: | ------: | ---------------------------------------- |
| 21.7% |       5 | `java.util.concurrent.ForkJoinPool:2053` |
| 17.4% |       4 | `java.util.concurrent.ForkJoinPool:2058` |
| 17.4% |       4 | `java.util.concurrent.ForkJoinPool:2057` |
|  8.7% |       2 | `java.util.concurrent.ForkJoinPool:2041` |
|  8.7% |       2 | `java.util.concurrent.ForkJoinPool:2054` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 70.0% |       7 | `java.util.HashMap:1384` |
| 10.0% |       1 | `java.util.HashMap:1362` |
| 10.0% |       1 | `java.util.HashMap:1372` |
| 10.0% |       1 | `java.util.HashMap:1378` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Location                                 |
| ----: | ------: | ---------------------------------------- |
| 66.7% |       6 | `java.util.concurrent.ForkJoinPool:1809` |
| 33.3% |       3 | `java.util.concurrent.ForkJoinPool:1808` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       9 | `java.util.Arrays:3482` |

##### `grow()` (`java.util.ArrayList`)

|      % | Samples | Location                  |
| -----: | ------: | ------------------------- |
| 100.0% |       8 | `java.util.ArrayList:244` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|     % | Samples | Location                |
| ----: | ------: | ----------------------- |
| 28.6% |       2 | `java.util.HashMap:647` |
| 14.3% |       1 | `java.util.HashMap:637` |
| 14.3% |       1 | `java.util.HashMap:659` |
| 14.3% |       1 | `java.util.HashMap:648` |
| 14.3% |       1 | `java.util.HashMap:670` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Location                                |
| ----: | ------: | --------------------------------------- |
| 50.0% |       3 | `java.util.concurrent.ForkJoinTask:411` |
| 16.7% |       1 | `java.util.concurrent.ForkJoinTask:434` |
| 16.7% |       1 | `java.util.concurrent.ForkJoinTask:413` |
| 16.7% |       1 | `java.util.concurrent.ForkJoinTask:408` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Location                                 |
| ----: | ------: | ---------------------------------------- |
| 50.0% |       3 | `java.util.concurrent.ForkJoinPool:1829` |
| 33.3% |       2 | `java.util.concurrent.ForkJoinPool:1825` |
| 16.7% |       1 | `java.util.concurrent.ForkJoinPool:1835` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 50.0% |       3 | `java.util.HashMap:1428` |
| 33.3% |       2 | `java.util.HashMap:1427` |
| 16.7% |       1 | `java.util.HashMap:1431` |

##### `get(int)` (`java.util.ArrayList`)

|      % | Samples | Location                  |
| -----: | ------: | ------------------------- |
| 100.0% |       4 | `java.util.ArrayList:427` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|     % | Samples | Location                                           |
| ----: | ------: | -------------------------------------------------- |
| 50.0% |       2 | `java.util.concurrent.ForkJoinPool$WorkQueue:1343` |
| 25.0% |       1 | `java.util.concurrent.ForkJoinPool$WorkQueue:1331` |
| 25.0% |       1 | `java.util.concurrent.ForkJoinPool$WorkQueue:1354` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Location                                 |
| ----: | ------: | ---------------------------------------- |
| 25.0% |       1 | `java.util.concurrent.ForkJoinPool:1878` |
| 25.0% |       1 | `java.util.concurrent.ForkJoinPool:1895` |
| 25.0% |       1 | `java.util.concurrent.ForkJoinPool:1880` |
| 25.0% |       1 | `java.util.concurrent.ForkJoinPool:1872` |

##### `signalWaiters()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Location                                |
| -----: | ------: | --------------------------------------- |
| 100.0% |       4 | `java.util.concurrent.ForkJoinTask:301` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Location                                        |
| -----: | ------: | ----------------------------------------------- |
| 100.0% |       3 | `org.renaissance.jdk.concurrent.JavaKMeans:114` |

##### `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Location                                       |
| -----: | ------: | ---------------------------------------------- |
| 100.0% |       3 | `org.renaissance.jdk.concurrent.JavaKMeans:86` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Location                                                      |
| -----: | ------: | ------------------------------------------------------------- |
| 100.0% |       2 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:419` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Location                                                      |
| ----: | ------: | ------------------------------------------------------------- |
| 50.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:430` |
| 50.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:432` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Location                                                       |
| -----: | ------: | -------------------------------------------------------------- |
| 100.0% |       2 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:261` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Location                                                       |
| -----: | ------: | -------------------------------------------------------------- |
| 100.0% |       2 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Location                                                       |
| -----: | ------: | -------------------------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:171` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % | Samples | Location                                                   |
| -----: | ------: | ---------------------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask:146` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Location                                                      |
| -----: | ------: | ------------------------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:367` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Location                                                   |
| -----: | ------: | ---------------------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:332` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Location                                                       |
| -----: | ------: | -------------------------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:171` |

##### `div(double[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Location                                                   |
| -----: | ------: | ---------------------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:339` |

##### `<init>(JavaKMeans, List, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Location                                                      |
| -----: | ------: | ------------------------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:382` |

#### Callers

Callers with the largest contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                  | Location       |
| ----: | ------: | ----------------------- | -------------- |
| 95.5% |   1,590 | `Parker::park`          | `libjvm.dylib` |
|  4.4% |      74 | `PlatformMonitor::wait` | `libjvm.dylib` |
|  0.1% |       1 | `PlatformEvent::park`   | `libjvm.dylib` |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller        | Location                                                  |
| -----: | ------: | ------------- | --------------------------------------------------------- |
| 100.0% |     804 | `vectorSum()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller                  | Location                                                   |
| -----: | ------: | ----------------------- | ---------------------------------------------------------- |
| 100.0% |     776 | `findNearestCentroid()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller              | Location                                                  |
| -----: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% |     522 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller              | Location                                                   |
| -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% |     358 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `forward_copy_longs` (`<unknown>`)

|     % | Samples | Caller                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 84.5% |     250 | `arrayof_jint_disjoint_arraycopy` | `<unknown>` |
| 15.5% |      46 | `arrayof_oop_disjoint_arraycopy`  | `<unknown>` |

##### `zero_blocks` (`<unknown>`)

|     % | Samples | Caller                              | Location                                                   |
| ----: | ------: | ----------------------------------- | ---------------------------------------------------------- |
| 66.1% |     111 | `merge(Object, Object, BiFunction)` | `java.util.HashMap`                                        |
| 25.0% |      42 | `grow(int)`                         | `java.util.ArrayList`                                      |
|  8.3% |      14 | `findNearestCentroid()`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.6% |       1 | `<init>(Collection)`                | `java.util.ArrayList`                                      |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|      % | Samples | Caller                   | Location                                                   |
| -----: | ------: | ------------------------ | ---------------------------------------------------------- |
| 100.0% |     131 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `elementData(int)` (`java.util.ArrayList`)

|      % | Samples | Caller     | Location              |
| -----: | ------: | ---------- | --------------------- |
| 100.0% |     127 | `get(int)` | `java.util.ArrayList` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller              | Location                                                   |
| -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% |     126 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `doubleValue()` (`java.lang.Double`)

|     % | Samples | Caller                           | Location                                                   |
| ----: | ------: | -------------------------------- | ---------------------------------------------------------- |
| 87.8% |      79 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 12.2% |      11 | `distance(Double[], Double[])`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 87.2% |      68 | `WorkerThread::run`              | `libjvm.dylib` |
|  7.7% |       6 | `GenericWaitBarrier::Cell::wait` | `libjvm.dylib` |
|  5.1% |       4 | `WorkerThreads::run_task`        | `libjvm.dylib` |

##### `__psynch_cvsignal` (`libsystem_kernel.dylib`)

|      % | Samples | Caller          | Location       |
| -----: | ------: | --------------- | -------------- |
| 100.0% |      60 | `Unsafe_Unpark` | `libjvm.dylib` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

|      % | Samples | Caller        | Location              |
| -----: | ------: | ------------- | --------------------- |
| 100.0% |      59 | `add(Object)` | `java.util.ArrayList` |

##### `_platform_bzero` (`libsystem_platform.dylib`)

|      % | Samples | Caller                   | Location       |
| -----: | ------: | ------------------------ | -------------- |
| 100.0% |      54 | `MemAllocator::allocate` | `libjvm.dylib` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                              | Location                  |
| -----: | ------: | ----------------------------------- | ------------------------- |
| 100.0% |      39 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `pthread_jit_write_protect_np` (`libsystem_pthread.dylib`)

|     % | Samples | Caller                     | Location       |
| ----: | ------: | -------------------------- | -------------- |
| 41.9% |      13 | `JVM_IHashCode`            | `libjvm.dylib` |
| 19.4% |       6 | `Unsafe_Park`              | `libjvm.dylib` |
| 16.1% |       5 | `_new_array_Java`          | `<unknown>`    |
|  9.7% |       3 | `OptoRuntime::new_array_C` | `libjvm.dylib` |
|  6.5% |       2 | `Unsafe_Unpark`            | `libjvm.dylib` |

##### `checkIndex(int, int)` (`java.util.Objects`)

|      % | Samples | Caller     | Location              |
| -----: | ------: | ---------- | --------------------- |
| 100.0% |      29 | `get(int)` | `java.util.ArrayList` |

##### `grow(int)` (`java.util.ArrayList`)

|      % | Samples | Caller   | Location              |
| -----: | ------: | -------- | --------------------- |
| 100.0% |      28 | `grow()` | `java.util.ArrayList` |

##### `hash(Object)` (`java.util.HashMap`)

|     % | Samples | Caller                              | Location            |
| ----: | ------: | ----------------------------------- | ------------------- |
| 92.3% |      24 | `computeIfAbsent(Object, Function)` | `java.util.HashMap` |
|  7.7% |       2 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller                 | Location                            |
| -----: | ------: | ---------------------- | ----------------------------------- |
| 100.0% |      23 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `arrayof_jint_disjoint_arraycopy` (`<unknown>`)

|     % | Samples | Caller                              | Location              |
| ----: | ------: | ----------------------------------- | --------------------- |
| 55.6% |      10 | `copyOf(Object[], int)`             | `java.util.Arrays`    |
| 27.8% |       5 | `grow(int)`                         | `java.util.ArrayList` |
| 16.7% |       3 | `merge(Object, Object, BiFunction)` | `java.util.HashMap`   |

##### `G1FullGCMarker::mark_object` (`libjvm.dylib`)

|      % | Samples | Caller                                                          | Location       |
| -----: | ------: | --------------------------------------------------------------- | -------------- |
| 100.0% |      16 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` | `libjvm.dylib` |

##### `G1FullGCMarker::follow_object` (`libjvm.dylib`)

|     % | Samples | Caller                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 84.6% |      11 | `G1FullGCMarker::publish_and_drain_oop_tasks` | `libjvm.dylib` |
| 15.4% |       2 | `G1FullGCMarker::follow_marking_stacks`       | `libjvm.dylib` |

##### `ObjArrayAllocator::initialize` (`libjvm.dylib`)

|      % | Samples | Caller                   | Location       |
| -----: | ------: | ------------------------ | -------------- |
| 100.0% |      12 | `MemAllocator::allocate` | `libjvm.dylib` |

##### `_platform_memset` (`libsystem_platform.dylib`)

|     % | Samples | Caller                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 63.6% |       7 | `MemAllocator::allocate`                      | `libjvm.dylib` |
| 18.2% |       2 | `MemAllocator::mem_allocate_inside_tlab_slow` | `libjvm.dylib` |
|  9.1% |       1 | `PhaseIdealLoop::build_loop_late`             | `libjvm.dylib` |
|  9.1% |       1 | `ClassFileParser::parse_method`               | `libjvm.dylib` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|      % | Samples | Caller                              | Location                                    |
| -----: | ------: | ----------------------------------- | ------------------------------------------- |
| 100.0% |      10 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` (`libjvm.dylib`)

|     % | Samples | Caller                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 88.9% |       8 | `G1FullGCMarker::follow_marking_stacks` | `libjvm.dylib` |
| 11.1% |       1 | `G1FullGCMarker::complete_marking`      | `libjvm.dylib` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller  | Location                                    |
| -----: | ------: | ------- | ------------------------------------------- |
| 100.0% |       9 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|     % | Samples | Caller      | Location              |
| ----: | ------: | ----------- | --------------------- |
| 77.8% |       7 | `toArray()` | `java.util.ArrayList` |
| 22.2% |       2 | `grow(int)` | `java.util.ArrayList` |

##### `grow()` (`java.util.ArrayList`)

|      % | Samples | Caller                       | Location              |
| -----: | ------: | ---------------------------- | --------------------- |
| 100.0% |       8 | `add(Object, Object[], int)` | `java.util.ArrayList` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|      % | Samples | Caller                        | Location            |
| -----: | ------: | ----------------------------- | ------------------- |
| 100.0% |       7 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `swtch_pri` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                              | Location       |
| -----: | ------: | ----------------------------------- | -------------- |
| 100.0% |       6 | `TaskTerminator::offer_termination` | `libjvm.dylib` |

##### `write` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                              | Location                            |
| -----: | ------: | ----------------------------------- | ----------------------------------- |
| 100.0% |       6 | `write0(FileDescriptor, long, int)` | `sun.nio.ch.UnixFileDispatcherImpl` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller   | Location                            |
| -----: | ------: | -------- | ----------------------------------- |
| 100.0% |       6 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller                              | Location                            |
| -----: | ------: | ----------------------------------- | ----------------------------------- |
| 100.0% |       6 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|      % | Samples | Caller            | Location                                    |
| -----: | ------: | ----------------- | ------------------------------------------- |
| 100.0% |       6 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `Parker::park` (`libjvm.dylib`)

|      % | Samples | Caller        | Location       |
| -----: | ------: | ------------- | -------------- |
| 100.0% |       5 | `Unsafe_Park` | `libjvm.dylib` |

##### `G1FullGCMarker::publish_and_drain_oop_tasks` (`libjvm.dylib`)

|      % | Samples | Caller                                  | Location       |
| -----: | ------: | --------------------------------------- | -------------- |
| 100.0% |       5 | `G1FullGCMarker::follow_marking_stacks` | `libjvm.dylib` |

##### `G1RegionMarkStatsCache::add_live_words` (`libjvm.dylib`)

|     % | Samples | Caller                                                          | Location       |
| ----: | ------: | --------------------------------------------------------------- | -------------- |
| 60.0% |       3 | `G1FullGCMarker::mark_object`                                   | `libjvm.dylib` |
| 40.0% |       2 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` | `libjvm.dylib` |

##### `semaphore_signal_trap` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 80.0% |       4 | `WorkerThreads::run_task`          | `libjvm.dylib` |
| 20.0% |       1 | `GenericWaitBarrier::Cell::disarm` | `libjvm.dylib` |

##### `Unsafe_Unpark` (`libjvm.dylib`)

|      % | Samples | Caller           | Location                   |
| -----: | ------: | ---------------- | -------------------------- |
| 100.0% |       4 | `unpark(Object)` | `jdk.internal.misc.Unsafe` |

##### `get(int)` (`java.util.ArrayList`)

|     % | Samples | Caller                   | Location                                                   |
| ----: | ------: | ------------------------ | ---------------------------------------------------------- |
| 75.0% |       3 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 25.0% |       1 | `findNearestCentroid()`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Caller                 | Location                            |
| -----: | ------: | ---------------------- | ----------------------------------- |
| 100.0% |       4 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller                              | Location                            |
| -----: | ------: | ----------------------------------- | ----------------------------------- |
| 100.0% |       4 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `signalWaiters()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller      | Location                            |
| -----: | ------: | ----------- | ----------------------------------- |
| 100.0% |       4 | `setDone()` | `java.util.concurrent.ForkJoinTask` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller                  | Location                                                               |
| -----: | ------: | ----------------------- | ---------------------------------------------------------------------- |
| 100.0% |       3 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f0011a7490` |

##### `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller       | Location                                                               |
| -----: | ------: | ------------ | ---------------------------------------------------------------------- |
| 100.0% |       3 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f0011a2388` |

##### `PhaseLive::add_liveout` (`libjvm.dylib`)

|      % | Samples | Caller               | Location       |
| -----: | ------: | -------------------- | -------------- |
| 100.0% |       3 | `PhaseLive::compute` | `libjvm.dylib` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |       2 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller                               | Location                                                  |
| -----: | ------: | ------------------------------------ | --------------------------------------------------------- |
| 100.0% |       2 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |       2 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller          | Location                                                                              |
| -----: | ------: | --------------- | ------------------------------------------------------------------------------------- |
| 100.0% |       2 | `apply(Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000f0011a3940` |

##### `vtable stub` (`<unknown>`)

|     % | Samples | Caller      | Location                                               |
| ----: | ------: | ----------- | ------------------------------------------------------ |
| 50.0% |       1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |
| 50.0% |       1 | `join()`    | `java.util.concurrent.ForkJoinTask`                    |

##### `Matcher::xform` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |       2 | `Matcher::match` | `libjvm.dylib` |

##### `PhaseIdealLoop::try_move_store_after_loop` (`libjvm.dylib`)

|     % | Samples | Caller                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 50.0% |       1 | `PhaseIdealLoop::build_and_optimize`   | `libjvm.dylib` |
| 50.0% |       1 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |

##### `PhaseLive::compute` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       2 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `Unique_Node_List::remove` (`libjvm.dylib`)

|      % | Samples | Caller                                    | Location       |
| -----: | ------: | ----------------------------------------- | -------------- |
| 100.0% |       2 | `PhaseIterGVN::remove_globally_dead_node` | `libjvm.dylib` |

##### `PhaseChaitin::Select` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       2 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       2 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseChaitin::post_allocate_copy_removal` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       2 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |       1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % | Samples | Caller   | Location                             |
| -----: | ------: | -------- | ------------------------------------ |
| 100.0% |       1 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |       1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller                     | Location                                               |
| -----: | ------: | -------------------------- | ------------------------------------------------------ |
| 100.0% |       1 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |       1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f0011a2150`)

|      % | Samples | Caller        | Location                           |
| -----: | ------: | ------------- | ---------------------------------- |
| 100.0% |       1 | `accept(int)` | `java.util.stream.IntPipeline$1$1` |

##### `div(double[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller          | Location                                               |
| -----: | ------: | --------------- | ------------------------------------------------------ |
| 100.0% |       1 | `average(List)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `<init>(JavaKMeans, List, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller                    | Location                                                  |
| -----: | ------: | ------------------------- | --------------------------------------------------------- |
| 100.0% |       1 | `createSubtask(int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `I2C/C2I adapters(0xba)` (`<unknown>`)

|      % | Samples | Caller              | Location                                                  |
| -----: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% |       1 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `I2C/C2I adapters(0xbbaa)` (`<unknown>`)

|      % | Samples | Caller                              | Location                            |
| -----: | ------: | ----------------------------------- | ----------------------------------- |
| 100.0% |       1 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `I2C/C2I adapters(0xbbbebebe)` (`<unknown>`)

|      % | Samples | Caller                         | Location                            |
| -----: | ------: | ------------------------------ | ----------------------------------- |
| 100.0% |       1 | `compareAndSetCtl(long, long)` | `java.util.concurrent.ForkJoinPool` |

##### `CmpNode::Identity` (`libjvm.dylib`)

|      % | Samples | Caller                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |       1 | `GraphKit::null_check_common` | `libjvm.dylib` |

##### `PhaseIdealLoop::compute_early_ctrl` (`libjvm.dylib`)

|      % | Samples | Caller                                 | Location       |
| -----: | ------: | -------------------------------------- | -------------- |
| 100.0% |       1 | `PhaseIdealLoop::try_sink_out_of_loop` | `libjvm.dylib` |

##### `PhaseIdealLoop::try_sink_out_of_loop` (`libjvm.dylib`)

|      % | Samples | Caller                                      | Location       |
| -----: | ------: | ------------------------------------------- | -------------- |
| 100.0% |       1 | `PhaseIdealLoop::split_if_with_blocks_post` | `libjvm.dylib` |

##### `PhaseIdealLoop::split_if_with_blocks` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       1 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Matcher::init_first_stack_mask` (`libjvm.dylib`)

|      % | Samples | Caller                         | Location       |
| -----: | ------: | ------------------------------ | -------------- |
| 100.0% |       1 | `Matcher::Fixup_Save_On_Entry` | `libjvm.dylib` |

##### `Matcher::Label_Root` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |       1 | `Matcher::match_tree` | `libjvm.dylib` |

##### `TypeKlassPtr::get_con` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |       1 | `PhaseOutput::scratch_emit_size` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       1 | `PhaseIdealLoop::build_loop_late` | `libjvm.dylib` |

##### `PhaseIFG::SquareUp` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       1 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseChaitin::merge_multidefs` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       1 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       1 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `LinearScan::add_register_hints` (`libjvm.dylib`)

|      % | Samples | Caller                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |       1 | `LinearScan::build_intervals` | `libjvm.dylib` |

### Total samples

Functions with the most samples collected within the function and its callees.

|     % | Samples | Function                                             | Location                                                   |
| ----: | ------: | ---------------------------------------------------- | ---------------------------------------------------------- |
| 93.2% |   5,566 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                        |
| 93.2% |   5,566 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`                |
| 77.1% |   4,607 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                        |
| 76.8% |   4,589 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                        |
| 76.8% |   4,589 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| 76.4% |   4,565 | `compute()`                                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
| 76.4% |   4,565 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                       |
| 72.7% |   4,344 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                        |
| 72.7% |   4,343 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                        |
| 67.9% |   4,058 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| 29.1% |   1,736 | `computeDirectly()`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 27.9% |   1,665 | `__psynch_cvwait`                                    | `libsystem_kernel.dylib`                                   |
| 27.0% |   1,615 | `park(boolean, long)`                                | `jdk.internal.misc.Unsafe`                                 |
| 27.0% |   1,614 | `Unsafe_Park`                                        | `libjvm.dylib`                                             |
| 26.8% |   1,602 | `Parker::park`                                       | `libjvm.dylib`                                             |
| 25.9% |   1,545 | `park()`                                             | `java.util.concurrent.locks.LockSupport`                   |
| 24.7% |   1,473 | `computeDirectly()`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 24.6% |   1,471 | `vectorSum()`                                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 21.7% |   1,295 | `invoke()`                                           | `java.util.concurrent.ForkJoinTask`                        |
| 20.4% |   1,221 | `findNearestCentroid()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Ours

|     % | Samples | Function                            | Location                                                               |
| ----: | ------: | ----------------------------------- | ---------------------------------------------------------------------- |
| 76.4% |   4,565 | `compute()`                         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| 29.1% |   1,736 | `computeDirectly()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 24.7% |   1,473 | `computeDirectly()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 24.6% |   1,471 | `vectorSum()`                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 20.4% |   1,221 | `findNearestCentroid()`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 14.8% |     883 | `accumulate(Double[], double[])`    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 14.3% |     855 | `computeClusterAverages()`          | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 14.3% |     855 | `computeDirectly()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 14.3% |     853 | `average(List)`                     | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 13.2% |     790 | `distance(Double[], Double[])`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 11.2% |     669 | `lambda$run$0(int, List, int)`      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 11.2% |     669 | `call()`                            | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f0011a2bd0` |
|  9.6% |     574 | `merge(Map, Map)`                   | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  9.6% |     573 | `combineResults(Object, Object)`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  9.6% |     572 | `combineResults(Map, Map)`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  9.2% |     548 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  9.2% |     548 | `accept(Object, Object)`            | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f0011a7000` |
|  8.6% |     514 | `collectClusters(int[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  6.2% |     373 | `lambda$merge$6(List, List)`        | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  6.2% |     373 | `apply(Object, Object)`             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f0011a7490` |

##### Native

|     % | Samples | Function                           | Location                  |
| ----: | ------: | ---------------------------------- | ------------------------- |
| 27.9% |   1,665 | `__psynch_cvwait`                  | `libsystem_kernel.dylib`  |
| 27.0% |   1,614 | `Unsafe_Park`                      | `libjvm.dylib`            |
| 26.8% |   1,602 | `Parker::park`                     | `libjvm.dylib`            |
|  5.7% |     341 | `_pthread_start`                   | `libsystem_pthread.dylib` |
|  5.7% |     341 | `thread_start`                     | `libsystem_pthread.dylib` |
|  5.7% |     340 | `thread_native_entry`              | `libjvm.dylib`            |
|  5.7% |     339 | `Thread::call_run`                 | `libjvm.dylib`            |
|  5.0% |     296 | `forward_copy_longs`               | `<unknown>`               |
|  4.5% |     268 | `arrayof_jint_disjoint_arraycopy`  | `<unknown>`               |
|  3.0% |     182 | `WorkerThread::run`                | `libjvm.dylib`            |
|  2.1% |     125 | `JavaThread::thread_main_inner`    | `libjvm.dylib`            |
|  1.9% |     113 | `_new_array_Java`                  | `<unknown>`               |
|  1.8% |     107 | `OptoRuntime::new_array_C`         | `libjvm.dylib`            |
|  1.7% |     103 | `MemAllocator::allocate`           | `libjvm.dylib`            |
|  1.7% |     103 | `CollectedHeap::array_allocate`    | `libjvm.dylib`            |
|  1.6% |      98 | `InstanceKlass::allocate_objArray` | `libjvm.dylib`            |
|  1.3% |      78 | `semaphore_wait_trap`              | `libsystem_kernel.dylib`  |
|  1.3% |      76 | `PlatformMonitor::wait`            | `libjvm.dylib`            |
|  1.2% |      69 | `Unsafe_Unpark`                    | `libjvm.dylib`            |
|  1.0% |      60 | `__psynch_cvsignal`                | `libsystem_kernel.dylib`  |

##### Standard library

|     % | Samples | Function                                                  | Location                                            |
| ----: | ------: | --------------------------------------------------------- | --------------------------------------------------- |
| 93.2% |   5,566 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                 |
| 93.2% |   5,566 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`         |
| 77.1% |   4,607 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`                 |
| 76.8% |   4,589 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                 |
| 76.8% |   4,589 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| 76.4% |   4,565 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                |
| 72.7% |   4,344 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                 |
| 72.7% |   4,343 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                 |
| 67.9% |   4,058 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| 27.0% |   1,615 | `park(boolean, long)`                                     | `jdk.internal.misc.Unsafe`                          |
| 25.9% |   1,545 | `park()`                                                  | `java.util.concurrent.locks.LockSupport`            |
| 21.7% |   1,295 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`                 |
| 17.5% |   1,045 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                 |
| 15.9% |     949 | `awaitWork(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                 |
| 11.2% |     669 | `exec()`                                                  | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|  9.3% |     554 | `forEach(BiConsumer)`                                     | `java.util.HashMap`                                 |
|  9.2% |     548 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                                 |
|  5.4% |     324 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                                  |
|  4.5% |     267 | `toArray()`                                               | `java.util.ArrayList`                               |
|  3.8% |     228 | `addAll(Collection)`                                      | `java.util.ArrayList`                               |

##### JIT

|     % | Samples | Function                       | Location    |
| ----: | ------: | ------------------------------ | ----------- |
|  2.8% |     168 | `zero_blocks`                  | `<unknown>` |
| <0.1% |       2 | `vtable stub`                  | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xba)`       | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xbbb)`      | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xbbaa)`     | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xbbbebebe)` | `<unknown>` |

##### Compiler

|    % | Samples | Function                                   | Location       |
| ---: | ------: | ------------------------------------------ | -------------- |
| 2.0% |     121 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib` |
| 1.4% |      85 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
| 1.2% |      70 | `Compile::Compile`                         | `libjvm.dylib` |
| 1.2% |      70 | `C2Compiler::compile_method`               | `libjvm.dylib` |
| 0.6% |      37 | `Compile::Code_Gen`                        | `libjvm.dylib` |
| 0.6% |      36 | `CompileQueue::get`                        | `libjvm.dylib` |
| 0.4% |      24 | `Compile::Optimize`                        | `libjvm.dylib` |
| 0.3% |      18 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
| 0.3% |      17 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib` |
| 0.3% |      17 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib` |
| 0.3% |      16 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib` |
| 0.3% |      15 | `Compilation::Compilation`                 | `libjvm.dylib` |
| 0.2% |      14 | `Compilation::compile_method`              | `libjvm.dylib` |
| 0.2% |      13 | `Compilation::compile_java_method`         | `libjvm.dylib` |
| 0.2% |      10 | `Matcher::match`                           | `libjvm.dylib` |
| 0.2% |       9 | `Matcher::xform`                           | `libjvm.dylib` |
| 0.1% |       8 | `CompilationPolicy::event`                 | `libjvm.dylib` |
| 0.1% |       7 | `Compile::optimize_loops`                  | `libjvm.dylib` |
| 0.1% |       7 | `Matcher::match_tree`                      | `libjvm.dylib` |
| 0.1% |       6 | `PhaseLive::compute`                       | `libjvm.dylib` |

#### Callers

Callers with the largest contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller  | Location                                    |
| -----: | ------: | ------- | ------------------------------------------- |
| 100.0% |   5,566 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller                              | Location                            |
| -----: | ------: | ----------------------------------- | ----------------------------------- |
| 100.0% |   4,607 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller                                                    | Location                                      |
| -----: | ------: | --------------------------------------------------------- | --------------------------------------------- |
| 100.0% |   4,589 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  88.4% |   4,056 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  28.2% |   1,295 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`           |
|  22.2% |   1,021 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Caller                                   | Location                            |
| -----: | ------: | ---------------------------------------- | ----------------------------------- |
| 100.0% |   4,589 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % | Samples | Caller   | Location                             |
| -----: | ------: | -------- | ------------------------------------ |
| 100.0% |   4,565 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % | Samples | Caller     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |   4,565 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller   | Location                            |
| -----: | ------: | -------- | ----------------------------------- |
| 100.0% |   4,342 | `join()` | `java.util.concurrent.ForkJoinTask` |
|  <0.1% |       2 | `get()`  | `java.util.concurrent.ForkJoinTask` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |   4,343 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Caller                 | Location                            |
| -----: | ------: | ---------------------- | ----------------------------------- |
| 100.0% |   4,058 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller              | Location                                                   |
| -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% |   1,736 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
|  99.9% |   1,735 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                  | Location       |
| ----: | ------: | ----------------------- | -------------- |
| 95.5% |   1,590 | `Parker::park`          | `libjvm.dylib` |
|  4.4% |      74 | `PlatformMonitor::wait` | `libjvm.dylib` |
|  0.1% |       1 | `PlatformEvent::park`   | `libjvm.dylib` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|     % | Samples | Caller            | Location                                 |
| ----: | ------: | ----------------- | ---------------------------------------- |
| 95.6% |   1,544 | `park()`          | `java.util.concurrent.locks.LockSupport` |
|  4.4% |      71 | `parkUntil(long)` | `java.util.concurrent.locks.LockSupport` |

##### `Unsafe_Park` (`libjvm.dylib`)

|      % | Samples | Caller                | Location                   |
| -----: | ------: | --------------------- | -------------------------- |
| 100.0% |   1,614 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `Parker::park` (`libjvm.dylib`)

|      % | Samples | Caller        | Location       |
| -----: | ------: | ------------- | -------------- |
| 100.0% |   1,602 | `Unsafe_Park` | `libjvm.dylib` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

|     % | Samples | Caller                              | Location                            |
| ----: | ------: | ----------------------------------- | ----------------------------------- |
| 56.4% |     872 | `awaitWork(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |
| 43.6% |     673 | `awaitDone(int, long)`              | `java.util.concurrent.ForkJoinTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller              | Location                                                  |
| -----: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% |   1,473 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`    |
|  99.9% |   1,472 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller              | Location                                                  |
| -----: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% |   1,471 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Caller                         | Location                                               |
| ----: | ------: | ------------------------------ | ------------------------------------------------------ |
| 65.5% |     848 | `average(List)`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 51.7% |     669 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans`            |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller              | Location                                                   |
| -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% |   1,221 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller                 | Location                            |
| -----: | ------: | ---------------------- | ----------------------------------- |
| 100.0% |   1,045 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller                              | Location                            |
| -----: | ------: | ----------------------------------- | ----------------------------------- |
| 100.0% |     949 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller        | Location                                                  |
| -----: | ------: | ------------- | --------------------------------------------------------- |
| 100.0% |     883 | `vectorSum()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller              | Location                                               |
| -----: | ------: | ------------------- | ------------------------------------------------------ |
| 100.0% |     855 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller              | Location                                               |
| -----: | ------: | ------------------- | ------------------------------------------------------ |
| 100.0% |     855 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 100.0% |     855 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller                     | Location                                               |
| -----: | ------: | -------------------------- | ------------------------------------------------------ |
| 100.0% |     853 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller                  | Location                                                   |
| -----: | ------: | ----------------------- | ---------------------------------------------------------- |
| 100.0% |     790 | `findNearestCentroid()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller   | Location                                                               |
| -----: | ------: | -------- | ---------------------------------------------------------------------- |
| 100.0% |     669 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f0011a2bd0` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f0011a2bd0`)

|      % | Samples | Caller   | Location                                            |
| -----: | ------: | -------- | --------------------------------------------------- |
| 100.0% |     669 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

|      % | Samples | Caller     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |     669 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Caller                     | Location                                                   |
| ----: | ------: | -------------------------- | ---------------------------------------------------------- |
| 99.7% |     572 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.3% |       2 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |     573 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller                           | Location                                                   |
| -----: | ------: | -------------------------------- | ---------------------------------------------------------- |
| 100.0% |     572 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|      % | Samples | Caller            | Location                                    |
| -----: | ------: | ----------------- | ------------------------------------------- |
| 100.0% |     554 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller                   | Location                                                               |
| -----: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| 100.0% |     548 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f0011a7000` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f0011a7000`)

|      % | Samples | Caller                | Location            |
| -----: | ------: | --------------------- | ------------------- |
| 100.0% |     548 | `forEach(BiConsumer)` | `java.util.HashMap` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|      % | Samples | Caller                              | Location                                    |
| -----: | ------: | ----------------------------------- | ------------------------------------------- |
| 100.0% |     548 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller              | Location                                                   |
| -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% |     514 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller                  | Location                                                               |
| -----: | ------: | ----------------------- | ---------------------------------------------------------------------- |
| 100.0% |     373 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f0011a7490` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f0011a7490`)

|      % | Samples | Caller                              | Location            |
| -----: | ------: | ----------------------------------- | ------------------- |
| 100.0% |     373 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Caller         | Location                  |
| -----: | ------: | -------------- | ------------------------- |
| 100.0% |     341 | `thread_start` | `libsystem_pthread.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Caller           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |     340 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |     339 | `thread_native_entry` | `libjvm.dylib` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|     % | Samples | Caller      | Location              |
| ----: | ------: | ----------- | --------------------- |
| 82.4% |     267 | `toArray()` | `java.util.ArrayList` |
| 17.6% |      57 | `grow(int)` | `java.util.ArrayList` |

##### `forward_copy_longs` (`<unknown>`)

|     % | Samples | Caller                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 84.5% |     250 | `arrayof_jint_disjoint_arraycopy` | `<unknown>` |
| 15.5% |      46 | `arrayof_oop_disjoint_arraycopy`  | `<unknown>` |

##### `arrayof_jint_disjoint_arraycopy` (`<unknown>`)

|     % | Samples | Caller                              | Location              |
| ----: | ------: | ----------------------------------- | --------------------- |
| 78.0% |     209 | `copyOf(Object[], int)`             | `java.util.Arrays`    |
| 19.4% |      52 | `merge(Object, Object, BiFunction)` | `java.util.HashMap`   |
|  2.6% |       7 | `grow(int)`                         | `java.util.ArrayList` |

##### `toArray()` (`java.util.ArrayList`)

|     % | Samples | Caller               | Location              |
| ----: | ------: | -------------------- | --------------------- |
| 52.4% |     140 | `<init>(Collection)` | `java.util.ArrayList` |
| 47.6% |     127 | `addAll(Collection)` | `java.util.ArrayList` |

##### `addAll(Collection)` (`java.util.ArrayList`)

|      % | Samples | Caller                       | Location                                    |
| -----: | ------: | ---------------------------- | ------------------------------------------- |
| 100.0% |     228 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `WorkerThread::run` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     182 | `Thread::call_run` | `libjvm.dylib` |

##### `zero_blocks` (`<unknown>`)

|     % | Samples | Caller                              | Location                                                   |
| ----: | ------: | ----------------------------------- | ---------------------------------------------------------- |
| 66.1% |     111 | `merge(Object, Object, BiFunction)` | `java.util.HashMap`                                        |
| 25.0% |      42 | `grow(int)`                         | `java.util.ArrayList`                                      |
|  8.3% |      14 | `findNearestCentroid()`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.6% |       1 | `<init>(Collection)`                | `java.util.ArrayList`                                      |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     125 | `Thread::call_run` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % | Samples | Caller                          | Location       |
| -----: | ------: | ------------------------------- | -------------- |
| 100.0% |     121 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `_new_array_Java` (`<unknown>`)

|     % | Samples | Caller                  | Location                                                   |
| ----: | ------: | ----------------------- | ---------------------------------------------------------- |
| 93.8% |     106 | `copyOf(Object[], int)` | `java.util.Arrays`                                         |
|  5.3% |       6 | `findNearestCentroid()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.9% |       1 | `grow(int)`             | `java.util.ArrayList`                                      |

##### `OptoRuntime::new_array_C` (`libjvm.dylib`)

|      % | Samples | Caller            | Location    |
| -----: | ------: | ----------------- | ----------- |
| 100.0% |     107 | `_new_array_Java` | `<unknown>` |

##### `MemAllocator::allocate` (`libjvm.dylib`)

|      % | Samples | Caller                          | Location       |
| -----: | ------: | ------------------------------- | -------------- |
| 100.0% |     103 | `CollectedHeap::array_allocate` | `libjvm.dylib` |

##### `CollectedHeap::array_allocate` (`libjvm.dylib`)

|     % | Samples | Caller                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 95.1% |      98 | `InstanceKlass::allocate_objArray` | `libjvm.dylib` |
|  4.9% |       5 | `OptoRuntime::new_array_C`         | `libjvm.dylib` |

##### `InstanceKlass::allocate_objArray` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      98 | `OptoRuntime::new_array_C` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|      % | Samples | Caller                                | Location       |
| -----: | ------: | ------------------------------------- | -------------- |
| 100.0% |      85 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 87.2% |      68 | `WorkerThread::run`              | `libjvm.dylib` |
|  7.7% |       6 | `GenericWaitBarrier::Cell::wait` | `libjvm.dylib` |
|  5.1% |       4 | `WorkerThreads::run_task`        | `libjvm.dylib` |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

|     % | Samples | Caller                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 53.9% |      41 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib` |
| 46.1% |      35 | `Monitor::wait`                         | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|      % | Samples | Caller                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |      70 | `C2Compiler::compile_method` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |      70 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `Unsafe_Unpark` (`libjvm.dylib`)

|      % | Samples | Caller           | Location                   |
| -----: | ------: | ---------------- | -------------------------- |
| 100.0% |      69 | `unpark(Object)` | `jdk.internal.misc.Unsafe` |

##### `__psynch_cvsignal` (`libsystem_kernel.dylib`)

|      % | Samples | Caller          | Location       |
| -----: | ------: | --------------- | -------------- |
| 100.0% |      60 | `Unsafe_Unpark` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |      37 | `Compile::Compile` | `libjvm.dylib` |

##### `CompileQueue::get` (`libjvm.dylib`)

|      % | Samples | Caller                                | Location       |
| -----: | ------: | ------------------------------------- | -------------- |
| 100.0% |      36 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |      24 | `Compile::Compile` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Caller                    | Location       |
| ----: | ------: | ------------------------- | -------------- |
| 61.1% |      11 | `Compile::Optimize`       | `libjvm.dylib` |
| 38.9% |       7 | `Compile::optimize_loops` | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      17 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |      17 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |      16 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      15 | `Compiler::compile_method` | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      14 | `Compilation::Compilation` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|      % | Samples | Caller                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |      13 | `Compilation::compile_method` | `libjvm.dylib` |

##### `Matcher::match` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |      10 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `Matcher::xform` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |       9 | `Matcher::match` | `libjvm.dylib` |

##### `CompilationPolicy::event` (`libjvm.dylib`)

|     % | Samples | Caller                                                 | Location       |
| ----: | ------: | ------------------------------------------------------ | -------------- |
| 50.0% |       4 | `Runtime1::counter_overflow`                           | `libjvm.dylib` |
| 50.0% |       4 | `InterpreterRuntime::frequency_counter_overflow_inner` | `libjvm.dylib` |

##### `Compile::optimize_loops` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |       7 | `Compile::Optimize` | `libjvm.dylib` |

##### `Matcher::match_tree` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |       7 | `Matcher::xform` | `libjvm.dylib` |

##### `PhaseLive::compute` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       6 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `vtable stub` (`<unknown>`)

|     % | Samples | Caller      | Location                                               |
| ----: | ------: | ----------- | ------------------------------------------------------ |
| 50.0% |       1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |
| 50.0% |       1 | `join()`    | `java.util.concurrent.ForkJoinTask`                    |

##### `I2C/C2I adapters(0xba)` (`<unknown>`)

|      % | Samples | Caller              | Location                                                  |
| -----: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% |       1 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `I2C/C2I adapters(0xbbaa)` (`<unknown>`)

|      % | Samples | Caller                              | Location                            |
| -----: | ------: | ----------------------------------- | ----------------------------------- |
| 100.0% |       1 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `I2C/C2I adapters(0xbbbebebe)` (`<unknown>`)

|      % | Samples | Caller                         | Location                            |
| -----: | ------: | ------------------------------ | ----------------------------------- |
| 100.0% |       1 | `compareAndSetCtl(long, long)` | `java.util.concurrent.ForkJoinPool` |

#### Callees

Callees with the largest contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee                                   | Location                            |
| ----: | ------: | ---------------------------------------- | ----------------------------------- |
| 82.8% |   4,607 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |
| 17.0% |     949 | `awaitWork(ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool` |
| <0.1% |       1 | `I2C/C2I adapters(0xbbaa)`               | `<unknown>`                         |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|      % | Samples | Callee                              | Location                            |
| -----: | ------: | ----------------------------------- | ----------------------------------- |
| 100.0% |   5,566 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee                                               | Location                                      |
| ----: | ------: | ---------------------------------------------------- | --------------------------------------------- |
| 99.6% |   4,589 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  0.2% |      10 | `signalWork()`                                       | `java.util.concurrent.ForkJoinPool`           |
| <0.1% |       2 | `casSlotToNull(ForkJoinTask[], int, ForkJoinTask)`   | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Callee      | Location                                            |
| ----: | ------: | ----------- | --------------------------------------------------- |
| 99.5% |   4,565 | `exec()`    | `java.util.concurrent.RecursiveTask`                |
| 14.6% |     669 | `exec()`    | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|  1.0% |      45 | `setDone()` | `java.util.concurrent.ForkJoinTask`                 |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Callee     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |   4,589 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|     % | Samples | Callee                           | Location                                                   |
| ----: | ------: | -------------------------------- | ---------------------------------------------------------- |
| 95.1% |   4,343 | `join()`                         | `java.util.concurrent.ForkJoinTask`                        |
| 38.0% |   1,736 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 32.3% |   1,473 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 18.7% |     855 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| 12.6% |     573 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % | Samples | Callee      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |   4,565 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Callee                                                    | Location                                      |
| ----: | ------: | --------------------------------------------------------- | --------------------------------------------- |
| 93.4% |   4,058 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| 24.1% |   1,045 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
| 15.5% |     673 | `park()`                                                  | `java.util.concurrent.locks.LockSupport`      |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Callee                 | Location                             |
| -----: | ------: | ---------------------- | ------------------------------------ |
| 100.0% |   4,342 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask`  |
|   0.1% |       4 | `getRawResult()`       | `java.util.concurrent.RecursiveTask` |
|  <0.1% |       1 | `vtable stub`          | `<unknown>`                          |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Callee                                 | Location                                      |
| -----: | ------: | -------------------------------------- | --------------------------------------------- |
| 100.0% |   4,056 | `doExec()`                             | `java.util.concurrent.ForkJoinTask`           |
|  <0.1% |       1 | `getAndClearSlot(ForkJoinTask[], int)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  <0.1% |       1 | `releaseAccess()`                      | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee                   | Location                                                   |
| ----: | ------: | ------------------------ | ---------------------------------------------------------- |
| 99.9% |   1,735 | `computeDirectly()`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 70.3% |   1,221 | `findNearestCentroid()`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 29.6% |     514 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|     % | Samples | Callee                  | Location       |
| ----: | ------: | ----------------------- | -------------- |
| 99.9% |   1,614 | `Unsafe_Park`           | `libjvm.dylib` |
|  0.1% |       1 | `JavaThread::threadObj` | `libjvm.dylib` |

##### `Unsafe_Park` (`libjvm.dylib`)

|     % | Samples | Callee                                                                                                                                                     | Location                  |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| 99.3% |   1,602 | `Parker::park`                                                                                                                                             | `libjvm.dylib`            |
|  0.4% |       6 | `pthread_jit_write_protect_np`                                                                                                                             | `libsystem_pthread.dylib` |
|  0.1% |       1 | `java_lang_Thread::set_thread_status`                                                                                                                      | `libjvm.dylib`            |
|  0.1% |       1 | `AccessInternal::PostRuntimeDispatch<G1BarrierSet::AccessBarrier<286822ull, G1BarrierSet>, (AccessInternal::BarrierType)3, 286822ull>::oop_access_barrier` | `libjvm.dylib`            |
|  0.1% |       1 | `JavaThreadParkedState::JavaThreadParkedState`                                                                                                             | `libjvm.dylib`            |

##### `Parker::park` (`libjvm.dylib`)

|     % | Samples | Callee                              | Location                  |
| ----: | ------: | ----------------------------------- | ------------------------- |
| 99.3% |   1,590 | `__psynch_cvwait`                   | `libsystem_kernel.dylib`  |
|  0.2% |       3 | `_pthread_cond_wait`                | `libsystem_pthread.dylib` |
|  0.1% |       2 | `SafepointMechanism::process`       | `libjvm.dylib`            |
|  0.1% |       1 | `pthread_dependency_wait_np.cold.3` | `libsystem_pthread.dylib` |
|  0.1% |       1 | `__gettimeofday`                    | `libsystem_kernel.dylib`  |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

|     % | Samples | Callee                | Location                   |
| ----: | ------: | --------------------- | -------------------------- |
| 99.9% |   1,544 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Callee                   | Location                                                  |
| ----: | ------: | ------------------------ | --------------------------------------------------------- |
| 99.9% |   1,472 | `computeDirectly()`      | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| 99.9% |   1,471 | `vectorSum()`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  0.1% |       1 | `I2C/C2I adapters(0xba)` | `<unknown>`                                               |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Callee                                           | Location                                                  |
| ----: | ------: | ------------------------------------------------ | --------------------------------------------------------- |
| 60.0% |     883 | `accumulate(Double[], double[])`                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  4.2% |      62 | `get(int)`                                       | `java.util.ArrayList`                                     |
|  0.2% |       3 | `InterpreterRuntime::frequency_counter_overflow` | `libjvm.dylib`                                            |
|  0.1% |       1 | `resolve_virtual_call`                           | `<unknown>`                                               |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Callee     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |   1,295 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee                           | Location                                                   |
| ----: | ------: | -------------------------------- | ---------------------------------------------------------- |
| 64.7% |     790 | `distance(Double[], Double[])`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  3.8% |      47 | `get(int)`                       | `java.util.ArrayList`                                      |
|  1.1% |      14 | `zero_blocks`                    | `<unknown>`                                                |
|  0.5% |       6 | `_new_array_Java`                | `<unknown>`                                                |
|  0.2% |       3 | `counter_overflow Runtime1 stub` | `<unknown>`                                                |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee                         | Location                            |
| ----: | ------: | ------------------------------ | ----------------------------------- |
| 97.7% |   1,021 | `doExec()`                     | `java.util.concurrent.ForkJoinTask` |
|  1.2% |      13 | `tryCompensate(long, boolean)` | `java.util.concurrent.ForkJoinPool` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee               | Location                                 |
| ----: | ------: | -------------------- | ---------------------------------------- |
| 91.9% |     872 | `park()`             | `java.util.concurrent.locks.LockSupport` |
|  7.5% |      71 | `parkUntil(long)`    | `java.util.concurrent.locks.LockSupport` |
|  0.1% |       1 | `os::javaTimeMillis` | `libjvm.dylib`                           |
|  0.1% |       1 | `clock_gettime`      | `libsystem_c.dylib`                      |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|    % | Samples | Callee          | Location           |
| ---: | ------: | --------------- | ------------------ |
| 8.9% |      79 | `doubleValue()` | `java.lang.Double` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|     % | Samples | Callee            | Location                                               |
| ----: | ------: | ----------------- | ------------------------------------------------------ |
| 99.8% |     853 | `average(List)`   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  0.2% |       2 | `boxed(double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Callee                     | Location                                               |
| -----: | ------: | -------------------------- | ------------------------------------------------------ |
| 100.0% |     855 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 100.0% |     855 | `computeDirectly()`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|     % | Samples | Callee                     | Location                                                  |
| ----: | ------: | -------------------------- | --------------------------------------------------------- |
| 99.4% |     848 | `invoke()`                 | `java.util.concurrent.ForkJoinTask`                       |
|  0.2% |       2 | `<init>(JavaKMeans, List)` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  0.1% |       1 | `div(double[], int)`       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`    |
|  0.1% |       1 | `loadClass(String)`        | `java.lang.ClassLoader`                                   |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|    % | Samples | Callee          | Location           |
| ---: | ------: | --------------- | ------------------ |
| 1.4% |      11 | `doubleValue()` | `java.lang.Double` |
| 0.4% |       3 | `SafepointBlob` | `<unknown>`        |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Callee     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |     669 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f0011a2bd0`)

|      % | Samples | Callee                         | Location                                    |
| -----: | ------: | ------------------------------ | ------------------------------------------- |
| 100.0% |     669 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

|      % | Samples | Callee   | Location                                                               |
| -----: | ------: | -------- | ---------------------------------------------------------------------- |
| 100.0% |     669 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f0011a2bd0` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee                               | Location                           |
| ----: | ------: | ------------------------------------ | ---------------------------------- |
| 96.5% |     554 | `forEach(BiConsumer)`                | `java.util.HashMap`                |
|  3.0% |      17 | `<init>(Map)`                        | `java.util.HashMap`                |
|  0.3% |       2 | `linkToTargetMethod(Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  0.2% |       1 | `wrong_method_stub`                  | `<unknown>`                        |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee                     | Location                                                   |
| ----: | ------: | -------------------------- | ---------------------------------------------------------- |
| 99.8% |     572 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Callee            | Location                                    |
| -----: | ------: | ----------------- | ------------------------------------------- |
| 100.0% |     572 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|     % | Samples | Callee                   | Location                                                               |
| ----: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| 98.9% |     548 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f0011a7000` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Callee                              | Location            |
| -----: | ------: | ----------------------------------- | ------------------- |
| 100.0% |     548 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f0011a7000`)

|      % | Samples | Callee                              | Location                                    |
| -----: | ------: | ----------------------------------- | ------------------------------------------- |
| 100.0% |     548 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|     % | Samples | Callee                            | Location                                                               |
| ----: | ------: | --------------------------------- | ---------------------------------------------------------------------- |
| 68.1% |     373 | `apply(Object, Object)`           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f0011a7490` |
| 20.3% |     111 | `zero_blocks`                     | `<unknown>`                                                            |
|  9.5% |      52 | `arrayof_jint_disjoint_arraycopy` | `<unknown>`                                                            |
|  0.4% |       2 | `hash(Object)`                    | `java.util.HashMap`                                                    |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee                              | Location              |
| ----: | ------: | ----------------------------------- | --------------------- |
| 34.2% |     176 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`   |
| 31.1% |     160 | `add(Object)`                       | `java.util.ArrayList` |
|  9.9% |      51 | `get(int)`                          | `java.util.ArrayList` |
|  0.2% |       1 | `wrong_method_stub`                 | `<unknown>`           |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee               | Location              |
| ----: | ------: | -------------------- | --------------------- |
| 61.1% |     228 | `addAll(Collection)` | `java.util.ArrayList` |
| 38.1% |     142 | `<init>(Collection)` | `java.util.ArrayList` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f0011a7490`)

|      % | Samples | Callee                       | Location                                    |
| -----: | ------: | ---------------------------- | ------------------------------------------- |
| 100.0% |     373 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

|     % | Samples | Callee                | Location       |
| ----: | ------: | --------------------- | -------------- |
| 99.7% |     340 | `thread_native_entry` | `libjvm.dylib` |
|  0.3% |       1 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Callee           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |     341 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|     % | Samples | Callee                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 99.7% |     339 | `Thread::call_run`                      | `libjvm.dylib` |
|  0.3% |       1 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 53.7% |     182 | `WorkerThread::run`             | `libjvm.dylib` |
| 36.9% |     125 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
|  4.1% |      14 | `VMThread::run`                 | `libjvm.dylib` |
|  3.2% |      11 | `WatcherThread::run`            | `libjvm.dylib` |
|  2.1% |       7 | `ConcurrentGCThread::run`       | `libjvm.dylib` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|     % | Samples | Callee                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 64.5% |     209 | `arrayof_jint_disjoint_arraycopy` | `<unknown>` |
| 32.7% |     106 | `_new_array_Java`                 | `<unknown>` |

##### `arrayof_jint_disjoint_arraycopy` (`<unknown>`)

|     % | Samples | Callee               | Location    |
| ----: | ------: | -------------------- | ----------- |
| 93.3% |     250 | `forward_copy_longs` | `<unknown>` |

##### `toArray()` (`java.util.ArrayList`)

|      % | Samples | Callee                  | Location           |
| -----: | ------: | ----------------------- | ------------------ |
| 100.0% |     267 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `addAll(Collection)` (`java.util.ArrayList`)

|     % | Samples | Callee                                            | Location              |
| ----: | ------: | ------------------------------------------------- | --------------------- |
| 55.7% |     127 | `toArray()`                                       | `java.util.ArrayList` |
| 21.9% |      50 | `arrayof_oop_disjoint_arraycopy`                  | `<unknown>`           |
| 21.1% |      48 | `grow(int)`                                       | `java.util.ArrayList` |
|  0.4% |       1 | `G1BarrierSetRuntime::write_ref_array_post_entry` | `libjvm.dylib`        |
|  0.4% |       1 | `G1BarrierSet::write_ref_array_work`              | `libjvm.dylib`        |

##### `WorkerThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location                 |
| ----: | ------: | --------------------------------- | ------------------------ |
| 37.4% |      68 | `semaphore_wait_trap`             | `libsystem_kernel.dylib` |
| 31.9% |      58 | `G1FullGCMarkTask::work`          | `libjvm.dylib`           |
| 19.2% |      35 | `G1EvacuateRegionsBaseTask::work` | `libjvm.dylib`           |
|  4.4% |       8 | `G1FullGCAdjustTask::work`        | `libjvm.dylib`           |
|  3.8% |       7 | `G1FullGCPrepareTask::work`       | `libjvm.dylib`           |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|     % | Samples | Callee                                                   | Location       |
| ----: | ------: | -------------------------------------------------------- | -------------- |
| 96.8% |     121 | `CompileBroker::compiler_thread_loop`                    | `libjvm.dylib` |
|  1.6% |       2 | `MonitorDeflationThread::monitor_deflation_thread_entry` | `libjvm.dylib` |
|  1.6% |       2 | `ServiceThread::service_thread_entry`                    | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 70.2% |      85 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
| 29.8% |      36 | `CompileQueue::get`                        | `libjvm.dylib` |

##### `_new_array_Java` (`<unknown>`)

|     % | Samples | Callee                                       | Location                  |
| ----: | ------: | -------------------------------------------- | ------------------------- |
| 94.7% |     107 | `OptoRuntime::new_array_C`                   | `libjvm.dylib`            |
|  4.4% |       5 | `pthread_jit_write_protect_np`               | `libsystem_pthread.dylib` |
|  0.9% |       1 | `SharedRuntime::on_slowpath_allocation_exit` | `libjvm.dylib`            |

##### `OptoRuntime::new_array_C` (`libjvm.dylib`)

|     % | Samples | Callee                                             | Location                  |
| ----: | ------: | -------------------------------------------------- | ------------------------- |
| 91.6% |      98 | `InstanceKlass::allocate_objArray`                 | `libjvm.dylib`            |
|  4.7% |       5 | `CollectedHeap::array_allocate`                    | `libjvm.dylib`            |
|  2.8% |       3 | `pthread_jit_write_protect_np`                     | `libsystem_pthread.dylib` |
|  0.9% |       1 | `CardTableBarrierSet::on_slowpath_allocation_exit` | `libjvm.dylib`            |

##### `MemAllocator::allocate` (`libjvm.dylib`)

|     % | Samples | Callee                                        | Location                   |
| ----: | ------: | --------------------------------------------- | -------------------------- |
| 52.4% |      54 | `_platform_bzero`                             | `libsystem_platform.dylib` |
| 19.4% |      20 | `MemAllocator::mem_allocate_inside_tlab_slow` | `libjvm.dylib`             |
| 11.7% |      12 | `ObjArrayAllocator::initialize`               | `libjvm.dylib`             |
|  6.8% |       7 | `_platform_memset`                            | `libsystem_platform.dylib` |
|  4.9% |       5 | `G1CollectedHeap::mem_allocate`               | `libjvm.dylib`             |

##### `CollectedHeap::array_allocate` (`libjvm.dylib`)

|      % | Samples | Callee                   | Location       |
| -----: | ------: | ------------------------ | -------------- |
| 100.0% |     103 | `MemAllocator::allocate` | `libjvm.dylib` |

##### `InstanceKlass::allocate_objArray` (`libjvm.dylib`)

|      % | Samples | Callee                          | Location       |
| -----: | ------: | ------------------------------- | -------------- |
| 100.0% |      98 | `CollectedHeap::array_allocate` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 82.4% |      70 | `C2Compiler::compile_method` | `libjvm.dylib` |
| 17.6% |      15 | `Compiler::compile_method`   | `libjvm.dylib` |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

|     % | Samples | Callee               | Location                  |
| ----: | ------: | -------------------- | ------------------------- |
| 97.4% |      74 | `__psynch_cvwait`    | `libsystem_kernel.dylib`  |
|  2.6% |       2 | `_pthread_cond_wait` | `libsystem_pthread.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % | Samples | Callee                     | Location       |
| ----: | ------: | -------------------------- | -------------- |
| 52.9% |      37 | `Compile::Code_Gen`        | `libjvm.dylib` |
| 34.3% |      24 | `Compile::Optimize`        | `libjvm.dylib` |
| 10.0% |       7 | `ParseGenerator::generate` | `libjvm.dylib` |
|  1.4% |       1 | `Type::Initialize`         | `libjvm.dylib` |
|  1.4% |       1 | `Compile::return_values`   | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |      70 | `Compile::Compile` | `libjvm.dylib` |

##### `Unsafe_Unpark` (`libjvm.dylib`)

|     % | Samples | Callee                                         | Location                  |
| ----: | ------: | ---------------------------------------------- | ------------------------- |
| 87.0% |      60 | `__psynch_cvsignal`                            | `libsystem_kernel.dylib`  |
|  2.9% |       2 | `pthread_jit_write_protect_np`                 | `libsystem_pthread.dylib` |
|  1.4% |       1 | `Parker::unpark`                               | `libjvm.dylib`            |
|  1.4% |       1 | `FastThreadsListHandle::FastThreadsListHandle` | `libjvm.dylib`            |
|  1.4% |       1 | `tlv_get_addr`                                 | `libdyld.dylib`           |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 45.9% |      17 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 27.0% |      10 | `Matcher::match`                  | `libjvm.dylib` |
| 16.2% |       6 | `PhaseOutput::Output`             | `libjvm.dylib` |
|  8.1% |       3 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
|  2.7% |       1 | `Matcher::Matcher`                | `libjvm.dylib` |

##### `CompileQueue::get` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 94.4% |      34 | `Monitor::wait`                  | `libjvm.dylib` |
|  5.6% |       2 | `CompilationPolicy::select_task` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 45.8% |      11 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
| 29.2% |       7 | `Compile::optimize_loops`                  | `libjvm.dylib` |
| 12.5% |       3 | `PhaseIterGVN::optimize`                   | `libjvm.dylib` |
|  4.2% |       1 | `Compile::process_for_post_loop_opts_igvn` | `libjvm.dylib` |
|  4.2% |       1 | `PhaseMacroExpand::expand_macro_nodes`     | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 94.4% |      17 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
|  5.6% |       1 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|     % | Samples | Callee                               | Location        |
| ----: | ------: | ------------------------------------ | --------------- |
| 94.1% |      16 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib`  |
|  5.9% |       1 | `tlv_get_addr`                       | `libdyld.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 35.3% |       6 | `PhaseLive::compute`                       | `libjvm.dylib` |
| 23.5% |       4 | `PhaseChaitin::Select`                     | `libjvm.dylib` |
| 11.8% |       2 | `PhaseChaitin::merge_multidefs`            | `libjvm.dylib` |
| 11.8% |       2 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |
|  5.9% |       1 | `PhaseIFG::SquareUp`                       | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                      | Location       |
| ----: | ------: | ------------------------------------------- | -------------- |
| 31.3% |       5 | `PhaseIdealLoop::split_if_with_blocks`      | `libjvm.dylib` |
| 18.8% |       3 | `PhaseIdealLoop::build_loop_late`           | `libjvm.dylib` |
| 18.8% |       3 | `PhaseIdealLoop::Dominators`                | `libjvm.dylib` |
|  6.3% |       1 | `PhaseIdealLoop::try_move_store_after_loop` | `libjvm.dylib` |
|  6.3% |       1 | `PhaseIdealLoop::build_loop_early`          | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|     % | Samples | Callee                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 93.3% |      14 | `Compilation::compile_method` | `libjvm.dylib` |
|  6.7% |       1 | `OopMapSet::OopMapSet`        | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 92.9% |      13 | `Compilation::compile_java_method` | `libjvm.dylib` |
|  7.1% |       1 | `ciEnv::register_method`           | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|     % | Samples | Callee                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 46.2% |       6 | `Compilation::emit_lir`       | `libjvm.dylib` |
| 46.2% |       6 | `Compilation::build_hir`      | `libjvm.dylib` |
|  7.7% |       1 | `Compilation::emit_code_body` | `libjvm.dylib` |

##### `Matcher::match` (`libjvm.dylib`)

|     % | Samples | Callee                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 90.0% |       9 | `Matcher::xform`               | `libjvm.dylib` |
| 10.0% |       1 | `Matcher::Fixup_Save_On_Entry` | `libjvm.dylib` |

##### `Matcher::xform` (`libjvm.dylib`)

|     % | Samples | Callee                | Location       |
| ----: | ------: | --------------------- | -------------- |
| 77.8% |       7 | `Matcher::match_tree` | `libjvm.dylib` |

##### `CompilationPolicy::event` (`libjvm.dylib`)

|     % | Samples | Callee                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 62.5% |       5 | `CompileBroker::compile_method`               | `libjvm.dylib` |
| 25.0% |       2 | `InstanceKlass::lookup_osr_nmethod`           | `libjvm.dylib` |
| 12.5% |       1 | `CompilationPolicy::method_back_branch_event` | `libjvm.dylib` |

##### `Compile::optimize_loops` (`libjvm.dylib`)

|      % | Samples | Callee                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |       7 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `Matcher::match_tree` (`libjvm.dylib`)

|     % | Samples | Callee                   | Location       |
| ----: | ------: | ------------------------ | -------------- |
| 71.4% |       5 | `Matcher::Label_Root`    | `libjvm.dylib` |
| 14.3% |       1 | `ReturnNode::match_edge` | `libjvm.dylib` |
| 14.3% |       1 | `Matcher::ReduceInst`    | `libjvm.dylib` |

##### `PhaseLive::compute` (`libjvm.dylib`)

|     % | Samples | Callee                   | Location       |
| ----: | ------: | ------------------------ | -------------- |
| 50.0% |       3 | `PhaseLive::add_liveout` | `libjvm.dylib` |
| 16.7% |       1 | `Chunk::next_chop`       | `libjvm.dylib` |

## Hottest call stacks

Call stacks with the most samples collected in their leaf frame.

|     % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 14.4% |     860 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  3.1% |     184 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  2.1% |     125 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  1.8% |     109 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  1.8% |     106 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f0011a2bd0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`) |
|  1.5% |      91 | `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  1.5% |      89 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  1.4% |      81 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  1.3% |      79 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  1.2% |      70 | `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  1.1% |      68 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  1.1% |      68 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `parkUntil(long)` (`java.util.concurrent.locks.LockSupport`) ← `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  1.1% |      68 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `WorkerThread::run` (`libjvm.dylib`) ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  1.1% |      64 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  1.1% |      63 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  1.1% |      63 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  1.0% |      62 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  1.0% |      57 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  0.9% |      52 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.8% |      49 | `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

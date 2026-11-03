# Sampling profile diff

Collected 5,414 → 5,651 samples (+237 samples, +4.4%).

| Category          |  Change | Delta |             % |       Samples |
| ----------------- | ------: | ----: | ------------: | ------------: |
| Ours              |   -2.6% |   -77 | 54.2% → 50.5% | 2,933 → 2,856 |
| Native            |  +20.8% |  +343 | 30.5% → 35.3% | 1,650 → 1,993 |
| Standard library  |   -3.4% |   -24 | 12.9% → 11.9% |     698 → 674 |
| JIT               |  -12.9% |    -9 |   1.3% → 1.1% |       70 → 61 |
| Compiler          |   +8.1% |    +5 |   1.1% → 1.2% |       62 → 67 |
| Garbage collector | removed |    -1 |  <0.1% → 0.0% |         1 → 0 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
├── 5,132 → 5,365 samples (94.8% → 94.9%) run() at java.util.concurrent.ForkJoinWorkerThread
│   └── 5,132 → 5,363 samples (94.8% → 94.9%) runWorker(ForkJoinPool$WorkQueue) at java.util.concurrent.ForkJoinPool
│       ├── … 4,625 → 4,570 samples (85.4% → 80.9%) doExec() at java.util.concurrent.ForkJoinTask
│       │   ├── … 4,560 → 4,525 samples (84.2% → 80.1%) exec() at java.util.concurrent.RecursiveTask
│       │   │   └── 4,558 → 4,520 samples (84.2% → 80.0%) compute() at org.renaissance.jdk.concurrent.JavaKMeans$RangedTask
│       │   │       ├── 1,861 → 1,856 samples (34.4% → 32.8%) computeDirectly() at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│       │   │       │   ├── … 1,418 → 1,353 samples (26.2% → 23.9%, self 7.7% → 10.4%) findNearestCentroid() at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│       │   │       │   │   ├── 951 → 676 samples (17.6% → 12.0%, self 17.2% → 11.7%) distance(Double[], Double[])
│       │   │       │   │   └── 52 → 91 samples (1.0% → 1.6%) 6 more callees, led by (0.8% → 1.3%) get(int) at java.util.ArrayList
│       │   │       │   └── … 443 → 501 samples (8.2% → 8.9%, self 1.8% → 2.1%) collectClusters(int[]) at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│       │   │       │       ├── 122 → 164 samples (2.3% → 2.9%) add(Object) at java.util.ArrayList
│       │   │       │       │   └── 120 → 164 samples (2.2% → 2.9%, self 0.9% → 1.1%) add(Object, Object[], int)
│       │   │       │       │       └── 69 → 104 samples (1.3% → 1.8%) grow()
│       │   │       │       │           └── 61 → 103 samples (1.1% → 1.8%, self 0.4% → 1.1%) grow(int)
│       │   │       │       │               └── 16 → 17 samples (0.3%) zero_blocks
│       │   │       │       └── 221 → 217 samples (4.1% → 3.8%) 6 more callees, led by (3.1%) computeIfAbsent(Object, Function) at java.util.HashMap
│       │   │       ├── 1,666 → 1,591 samples (30.8% → 28.2%) computeDirectly() at org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│       │   │       │   └── … 1,665 → 1,589 samples (30.8% → 28.1%, self 8.6% → 9.9%) vectorSum() at org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│       │   │       │       ├── 1,099 → 975 samples (20.3% → 17.3%, self 18.5% → 16.1%) accumulate(Double[], double[])
│       │   │       │       │   └── 95 → 62 samples (1.8% → 1.1%) doubleValue() at java.lang.Double
│       │   │       │       └── 96 → 54 samples (1.8% → 1.0%) get(int) at java.util.ArrayList
│       │   │       │           └── 94 → 52 samples (1.7% → 0.9%, self 3.0% → 2.6% globally) elementData(int)
│       │   │       ├── … 387 → 385 samples (7.1% → 6.8%) merge(Object, Object, BiFunction) at java.util.HashMap
│       │   │       │   ├── 272 → 283 samples (5.0%) apply(Object, Object) at org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000
│       │   │       │   │   └── 270 → 283 samples (5.0%) lambda$merge$6(List, List) at org.renaissance.jdk.concurrent.JavaKMeans
│       │   │       │   │       ├── 180 → 184 samples (3.3%) addAll(Collection) at java.util.ArrayList
│       │   │       │   │       │   ├── 89 → 84 samples (1.6% → 1.5%) toArray()
│       │   │       │   │       │   │   └── 89 → 84 samples (1.6% → 1.5%) copyOf(Object[], int) at java.util.Arrays
│       │   │       │   │       │   │       ├── 73 → 64 samples (1.3% → 1.1%) arrayof_jint_disjoint_arraycopy …
│       │   │       │   │       │   │       └── … 5 → 0 samples (0.1% → 0.0%) pthread_jit_write_protect_np at libsystem_pthread.dylib
│       │   │       │   │       │   └── 90 → 98 samples (1.7%) 5 more callees, led by (1.1%) arrayof_oop_disjoint_arraycopy
│       │   │       │   │       └── … 68 → 84 samples (1.3% → 1.5%, self 4.7% globally) forward_copy_longs
│       │   │       │   ├── 43 → 30 samples (0.8% → 0.5%) zero_blocks
│       │   │       │   └── 61 → 66 samples (1.1% → 1.2%) 3 more callees, led by (1.1% → 1.2%) arrayof_jint_disjoint_arraycopy
│       │   │       └── 624 → 661 samples (11.5% → 11.7%) 9 more callees, led by (11.1%) join() at java.util.concurrent.ForkJoinTask
│       │   └── 61 → 44 samples (1.1% → 0.8%) 3 more callees, led by (1.0% → 0.7%) setDone()
│       └── 488 → 769 samples (9.0% → 13.6%) awaitWork(ForkJoinPool$WorkQueue)
│           ├── … 454 → 703 samples (8.4% → 12.4%, self 19.2% → 23.8% globally) __psynch_cvwait at libsystem_kernel.dylib
│           └── 24 → 50 samples (0.4% → 0.9%) 3 more callees, led by (0.4% → 0.8%) parkUntil(long) at java.util.concurrent.locks.LockSupport
└── 282 → 286 samples (5.2% → 5.1%) 12 more root frames, led by (4.1% → 4.0%) thread_start at libsystem_pthread.dylib
```

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |             % |       Samples | Function                                           | Location                                                   |
| ------: | ----: | ------------: | ------------: | -------------------------------------------------- | ---------------------------------------------------------- |
|  +29.7% |  +308 | 19.2% → 23.8% | 1,037 → 1,345 | `__psynch_cvwait`                                  | `libsystem_kernel.dylib`                                   |
|  +41.2% |  +171 |  7.7% → 10.4% |     415 → 586 | `findNearestCentroid()`                            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +19.4% |   +91 |   8.6% → 9.9% |     468 → 559 | `vectorSum()`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| +162.5% |   +39 |   0.4% → 1.1% |       24 → 63 | `grow(int)`                                        | `java.util.ArrayList`                                      |
|  +20.0% |   +20 |   1.8% → 2.1% |     100 → 120 | `collectClusters(int[])`                           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   +4.7% |   +12 |          4.7% |     255 → 267 | `forward_copy_longs`                               | `<unknown>`                                                |
|  +17.6% |    +9 |   0.9% → 1.1% |       51 → 60 | `add(Object, Object[], int)`                       | `java.util.ArrayList`                                      |
| +120.0% |    +6 |   0.1% → 0.2% |        5 → 11 | `copyOf(Object[], int)`                            | `java.util.Arrays`                                         |
|  +50.0% |    +6 |   0.2% → 0.3% |       12 → 18 | `G1FullGCMarker::mark_object`                      | `libjvm.dylib`                                             |
|  +71.4% |    +5 |   0.1% → 0.2% |        7 → 12 | `_platform_memset`                                 | `libsystem_platform.dylib`                                 |
|  +28.6% |    +4 |          0.3% |       14 → 18 | `arrayof_jint_disjoint_arraycopy`                  | `<unknown>`                                                |
| +100.0% |    +4 |          0.1% |         4 → 8 | `G1RegionMarkStatsCache::add_live_words`           | `libjvm.dylib`                                             |
|  +80.0% |    +4 |   0.1% → 0.2% |         5 → 9 | `inflate_fast`                                     | `libzip.dylib`                                             |
| +200.0% |    +4 |  <0.1% → 0.1% |         2 → 6 | `InstanceKlass::find_method_index`                 | `libjvm.dylib`                                             |
| +400.0% |    +4 |  <0.1% → 0.1% |         1 → 5 | `IndexSetIterator::advance_and_next`               | `libjvm.dylib`                                             |
|     new |    +4 |   0.0% → 0.1% |         0 → 4 | `G1FullGCCompactTask::copy_object_to_new_location` | `libjvm.dylib`                                             |
|     new |    +4 |   0.0% → 0.1% |         0 → 4 | `__mmap`                                           | `libsystem_kernel.dylib`                                   |
|     new |    +4 |   0.0% → 0.1% |         0 → 4 | `semaphore_signal_trap`                            | `libsystem_kernel.dylib`                                   |
|   +2.1% |    +3 |   2.6% → 2.5% |     140 → 143 | `computeIfAbsent(Object, Function)`                | `java.util.HashMap`                                        |
|     new |    +3 |   0.0% → 0.1% |         0 → 3 | `compute()`                                        | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |

##### Ours

| Change | Delta |            % |   Samples | Function                             | Location                                                               |
| -----: | ----: | -----------: | --------: | ------------------------------------ | ---------------------------------------------------------------------- |
| +41.2% |  +171 | 7.7% → 10.4% | 415 → 586 | `findNearestCentroid()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| +19.4% |   +91 |  8.6% → 9.9% | 468 → 559 | `vectorSum()`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| +20.0% |   +20 |  1.8% → 2.1% | 100 → 120 | `collectClusters(int[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|    new |    +3 |  0.0% → 0.1% |     0 → 3 | `compute()`                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|    new |    +2 | 0.0% → <0.1% |     0 → 2 | `computeDirectly()`                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|    new |    +2 | 0.0% → <0.1% |     0 → 2 | `combineResults(Object, Object)`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|    new |    +1 | 0.0% → <0.1% |     0 → 1 | `accept(Object, Object)`             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90` |
|    new |    +1 | 0.0% → <0.1% |     0 → 1 | `computeDirectly()`                  | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|    new |    +1 | 0.0% → <0.1% |     0 → 1 | `average(List)`                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|    new |    +1 | 0.0% → <0.1% |     0 → 1 | `computeClusterAverages()`           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|    new |    +1 | 0.0% → <0.1% |     0 → 1 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|    new |    +1 | 0.0% → <0.1% |     0 → 1 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|    new |    +1 | 0.0% → <0.1% |     0 → 1 | `<init>(JavaKMeans, int, int)`       | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|    new |    +1 | 0.0% → <0.1% |     0 → 1 | `<init>(Map)`                        | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90` |

##### Native

|  Change | Delta |             % |       Samples | Function                                             | Location                   |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------- | -------------------------- |
|  +29.7% |  +308 | 19.2% → 23.8% | 1,037 → 1,345 | `__psynch_cvwait`                                    | `libsystem_kernel.dylib`   |
|   +4.7% |   +12 |          4.7% |     255 → 267 | `forward_copy_longs`                                 | `<unknown>`                |
|  +50.0% |    +6 |   0.2% → 0.3% |       12 → 18 | `G1FullGCMarker::mark_object`                        | `libjvm.dylib`             |
|  +71.4% |    +5 |   0.1% → 0.2% |        7 → 12 | `_platform_memset`                                   | `libsystem_platform.dylib` |
|  +28.6% |    +4 |          0.3% |       14 → 18 | `arrayof_jint_disjoint_arraycopy`                    | `<unknown>`                |
| +100.0% |    +4 |          0.1% |         4 → 8 | `G1RegionMarkStatsCache::add_live_words`             | `libjvm.dylib`             |
|  +80.0% |    +4 |   0.1% → 0.2% |         5 → 9 | `inflate_fast`                                       | `libzip.dylib`             |
| +200.0% |    +4 |  <0.1% → 0.1% |         2 → 6 | `InstanceKlass::find_method_index`                   | `libjvm.dylib`             |
|     new |    +4 |   0.0% → 0.1% |         0 → 4 | `G1FullGCCompactTask::copy_object_to_new_location`   | `libjvm.dylib`             |
|     new |    +4 |   0.0% → 0.1% |         0 → 4 | `__mmap`                                             | `libsystem_kernel.dylib`   |
|     new |    +4 |   0.0% → 0.1% |         0 → 4 | `semaphore_signal_trap`                              | `libsystem_kernel.dylib`   |
|     new |    +3 |   0.0% → 0.1% |         0 → 3 | `G1FullGCCompactTask::G1CompactRegionClosure::apply` | `libjvm.dylib`             |
|     new |    +3 |   0.0% → 0.1% |         0 → 3 | `ClassLoaderData::oops_do`                           | `libjvm.dylib`             |
| +100.0% |    +2 |  <0.1% → 0.1% |         2 → 4 | `Unsafe_Park`                                        | `libjvm.dylib`             |
|   +3.2% |    +2 |          1.2% |       63 → 65 | `__psynch_cvsignal`                                  | `libsystem_kernel.dylib`   |
|  +11.8% |    +2 |          0.3% |       17 → 19 | `_platform_bzero`                                    | `libsystem_platform.dylib` |
|     new |    +2 |  0.0% → <0.1% |         0 → 2 | `CollectedHeap::array_allocate`                      | `libjvm.dylib`             |
| +200.0% |    +2 |  <0.1% → 0.1% |         1 → 3 | `HeapRegionManager::par_iterate`                     | `libjvm.dylib`             |
|     new |    +2 |  0.0% → <0.1% |         0 → 2 | `os::current_thread_enable_wx`                       | `libjvm.dylib`             |
|     new |    +2 |  0.0% → <0.1% |         0 → 2 | `CardTableBarrierSet::on_slowpath_allocation_exit`   | `libjvm.dylib`             |

##### Standard library

|  Change | Delta |            % |   Samples | Function                                             | Location                                      |
| ------: | ----: | -----------: | --------: | ---------------------------------------------------- | --------------------------------------------- |
| +162.5% |   +39 |  0.4% → 1.1% |   24 → 63 | `grow(int)`                                          | `java.util.ArrayList`                         |
|  +17.6% |    +9 |  0.9% → 1.1% |   51 → 60 | `add(Object, Object[], int)`                         | `java.util.ArrayList`                         |
| +120.0% |    +6 |  0.1% → 0.2% |    5 → 11 | `copyOf(Object[], int)`                              | `java.util.Arrays`                            |
|   +2.1% |    +3 |  2.6% → 2.5% | 140 → 143 | `computeIfAbsent(Object, Function)`                  | `java.util.HashMap`                           |
| +150.0% |    +3 | <0.1% → 0.1% |     2 → 5 | `exec()`                                             | `java.util.concurrent.RecursiveTask`          |
|  +50.0% |    +3 |  0.1% → 0.2% |     6 → 9 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`           |
|  +66.7% |    +2 |         0.1% |     3 → 5 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`           |
|     new |    +2 | 0.0% → <0.1% |     0 → 2 | `newNode(int, Object, Object, HashMap$Node)`         | `java.util.HashMap`                           |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| +100.0% |    +1 |        <0.1% |     1 → 2 | `addAll(Collection)`                                 | `java.util.ArrayList`                         |
|  +14.3% |    +1 |         0.1% |     7 → 8 | `forEach(BiConsumer)`                                | `java.util.HashMap`                           |
| +100.0% |    +1 |        <0.1% |     1 → 2 | `get(int)`                                           | `java.util.ArrayList`                         |
| +100.0% |    +1 |        <0.1% |     1 → 2 | `signalWork()`                                       | `java.util.concurrent.ForkJoinPool`           |
| +100.0% |    +1 |        <0.1% |     1 → 2 | `fork()`                                             | `java.util.concurrent.ForkJoinTask`           |
| +100.0% |    +1 |        <0.1% |     1 → 2 | `getAndBitwiseOrInt(Object, long, int)`              | `jdk.internal.misc.Unsafe`                    |
|  +25.0% |    +1 |         0.1% |     4 → 5 | `putVal(int, Object, Object, boolean, boolean)`      | `java.util.HashMap`                           |
|   +4.2% |    +1 |         0.4% |   24 → 25 | `hash(Object)`                                       | `java.util.HashMap`                           |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `doPrivileged(PrivilegedAction)`                     | `java.security.AccessController`              |
| +100.0% |    +1 |        <0.1% |     1 → 2 | `accept(Object)`                                     | `java.util.stream.Nodes$FixedNodeBuilder`     |
|  +50.0% |    +1 | <0.1% → 0.1% |     2 → 3 | `newLength(int, int, int)`                           | `jdk.internal.util.ArraysSupport`             |

##### JIT

|  Change | Delta |            % | Samples | Function           | Location    |
| ------: | ----: | -----------: | ------: | ------------------ | ----------- |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `I2C/C2I adapters` | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `vtable stub`      | `<unknown>` |

##### Compiler

|  Change | Delta |            % | Samples | Function                                    | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------- | -------------- |
| +400.0% |    +4 | <0.1% → 0.1% |   1 → 5 | `IndexSetIterator::advance_and_next`        | `libjvm.dylib` |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `Compile::disconnect_useless_nodes`         | `libjvm.dylib` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `PhaseLive::add_liveout`                    | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `LIR_Assembler::emit_code`                  | `libjvm.dylib` |
|  +50.0% |    +1 | <0.1% → 0.1% |   2 → 3 | `PhaseChaitin::build_ifg_physical`          | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `Node::remove_dead_region`                  | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseIterGVN::transform_old`               | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseChaitin::post_allocate_copy_removal`  | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseRemoveUseless::PhaseRemoveUseless`    | `libjvm.dylib` |
| +100.0% |    +1 |        <0.1% |   1 → 2 | `Type::cmp`                                 | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseCFG::partial_latency_of_defs`         | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `Compile::final_graph_reshaping_impl`       | `libjvm.dylib` |
| +100.0% |    +1 |        <0.1% |   1 → 2 | `PhaseIdealLoop::Dominators`                | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseIFG::effective_degree`                | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `TypeOopPtr::singleton`                     | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `Node::is_CFG`                              | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `Node::Identity`                            | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseChaitin::possibly_merge_multidef`     | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `loadI_volatileNode::emit`                  | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseIdealLoop::remix_address_expressions` | `libjvm.dylib` |

#### Improvements

Functions with the largest decrease in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |             % |     Samples | Function                                                  | Location                                                               |
| ------: | ----: | ------------: | ----------: | --------------------------------------------------------- | ---------------------------------------------------------------------- |
|  -29.1% |  -270 | 17.2% → 11.7% |   929 → 659 | `distance(Double[], Double[])`                            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -9.2% |   -92 | 18.5% → 16.1% | 1,004 → 912 | `accumulate(Double[], double[])`                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -35.7% |   -41 |   2.1% → 1.3% |    115 → 74 | `doubleValue()`                                           | `java.lang.Double`                                                     |
|  -11.5% |   -19 |   3.0% → 2.6% |   165 → 146 | `elementData(int)`                                        | `java.util.ArrayList`                                                  |
|  -17.4% |   -12 |   1.3% → 1.0% |     69 → 57 | `zero_blocks`                                             | `<unknown>`                                                            |
|  -37.5% |    -9 |   0.4% → 0.3% |     24 → 15 | `pthread_jit_write_protect_np`                            | `libsystem_pthread.dylib`                                              |
|  -87.5% |    -7 |  0.1% → <0.1% |       8 → 1 | `grow()`                                                  | `java.util.ArrayList`                                                  |
|  -17.2% |    -5 |   0.5% → 0.4% |     29 → 24 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                                    |
|  -45.5% |    -5 |   0.2% → 0.1% |      11 → 6 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                                                    |
|  -57.1% |    -4 |          0.1% |       7 → 3 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                                    |
|  -66.7% |    -4 |  0.1% → <0.1% |       6 → 2 | `tlv_get_addr`                                            | `libdyld.dylib`                                                        |
| removed |    -4 |   0.1% → 0.0% |       4 → 0 | `getRawResult()`                                          | `java.util.concurrent.RecursiveTask`                                   |
|  -75.0% |    -3 |  0.1% → <0.1% |       4 → 1 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                                    |
|  -11.5% |    -3 |   0.5% → 0.4% |     26 → 23 | `checkIndex(int, int)`                                    | `java.util.Objects`                                                    |
|  -10.3% |    -3 |          0.5% |     29 → 26 | `__psynch_mutexwait`                                      | `libsystem_kernel.dylib`                                               |
|  -75.0% |    -3 |  0.1% → <0.1% |       4 → 1 | `resize()`                                                | `java.util.HashMap`                                                    |
| removed |    -3 |   0.1% → 0.0% |       3 → 0 | `CompiledMethod::cleanup_inline_caches_impl`              | `libjvm.dylib`                                                         |
| removed |    -3 |   0.1% → 0.0% |       3 → 0 | `combineResults(Object, Object)`                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| removed |    -2 |  <0.1% → 0.0% |       2 → 0 | `apply(Object, Object)`                                   | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000` |
|  -50.0% |    -2 |  0.1% → <0.1% |       4 → 2 | `awaitWork(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                                    |

##### Ours

|  Change | Delta |             % |     Samples | Function                                         | Location                                                               |
| ------: | ----: | ------------: | ----------: | ------------------------------------------------ | ---------------------------------------------------------------------- |
|  -29.1% |  -270 | 17.2% → 11.7% |   929 → 659 | `distance(Double[], Double[])`                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -9.2% |   -92 | 18.5% → 16.1% | 1,004 → 912 | `accumulate(Double[], double[])`                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| removed |    -3 |   0.1% → 0.0% |       3 → 0 | `combineResults(Object, Object)`                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| removed |    -2 |  <0.1% → 0.0% |       2 → 0 | `apply(Object, Object)`                          | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000` |
|  -66.7% |    -2 |  0.1% → <0.1% |       3 → 1 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| removed |    -1 |  <0.1% → 0.0% |       1 → 0 | `computeDirectly()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -50.0% |    -1 |         <0.1% |       2 → 1 | `lambda$run$0(int, List, int)`                   | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| removed |    -1 |  <0.1% → 0.0% |       1 → 0 | `forkThreshold()`                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| removed |    -1 |  <0.1% → 0.0% |       1 → 0 | `<init>(JavaKMeans, List, List)`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| removed |    -1 |  <0.1% → 0.0% |       1 → 0 | `<init>(JavaKMeans, List, List, int, int)`       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |

##### Native

|  Change | Delta |            % | Samples | Function                                                                                     | Location                   |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------- | -------------------------- |
|  -37.5% |    -9 |  0.4% → 0.3% | 24 → 15 | `pthread_jit_write_protect_np`                                                               | `libsystem_pthread.dylib`  |
|  -66.7% |    -4 | 0.1% → <0.1% |   6 → 2 | `tlv_get_addr`                                                                               | `libdyld.dylib`            |
|  -10.3% |    -3 |         0.5% | 29 → 26 | `__psynch_mutexwait`                                                                         | `libsystem_kernel.dylib`   |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `CompiledMethod::cleanup_inline_caches_impl`                                                 | `libjvm.dylib`             |
|  -33.3% |    -2 |         0.1% |   6 → 4 | `_sigtramp`                                                                                  | `libsystem_platform.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `SharedRuntime::on_slowpath_allocation_exit`                                                 | `libjvm.dylib`             |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region`            | `libjvm.dylib`             |
|  -40.0% |    -2 |         0.1% |   5 → 3 | `void G1ScanEvacuatedObjClosure::do_oop_work<narrowOop>`                                     | `libjvm.dylib`             |
|  -40.0% |    -2 |         0.1% |   5 → 3 | `void HeapRegion::apply_to_marked_objects<G1FullGCPrepareTask::G1PrepareCompactLiveClosure>` | `libjvm.dylib`             |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `os::malloc`                                                                                 | `libjvm.dylib`             |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `ResourceBitMap::ResourceBitMap`                                                             | `libjvm.dylib`             |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `read`                                                                                       | `libsystem_kernel.dylib`   |
|   -3.8% |    -1 |  0.5% → 0.4% | 26 → 25 | `semaphore_wait_trap`                                                                        | `libsystem_kernel.dylib`   |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `MemAllocator::allocate`                                                                     | `libjvm.dylib`             |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `localeconv_l`                                                                               | `libsystem_c.dylib`        |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `NamedThread::is_Named_thread`                                                               | `libjvm.dylib`             |
|  -20.0% |    -1 |         0.1% |   5 → 4 | `ObjArrayAllocator::initialize`                                                              | `libjvm.dylib`             |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `TraceTime::TraceTime`                                                                       | `libjvm.dylib`             |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Events::log_vm_operation`                                                                   | `libjvm.dylib`             |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `metaspace::RunningCounters::used_words_nonclass`                                            | `libjvm.dylib`             |

##### Standard library

|  Change | Delta |            % |   Samples | Function                                                  | Location                                      |
| ------: | ----: | -----------: | --------: | --------------------------------------------------------- | --------------------------------------------- |
|  -35.7% |   -41 |  2.1% → 1.3% |  115 → 74 | `doubleValue()`                                           | `java.lang.Double`                            |
|  -11.5% |   -19 |  3.0% → 2.6% | 165 → 146 | `elementData(int)`                                        | `java.util.ArrayList`                         |
|  -87.5% |    -7 | 0.1% → <0.1% |     8 → 1 | `grow()`                                                  | `java.util.ArrayList`                         |
|  -17.2% |    -5 |  0.5% → 0.4% |   29 → 24 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
|  -45.5% |    -5 |  0.2% → 0.1% |    11 → 6 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                           |
|  -57.1% |    -4 |         0.1% |     7 → 3 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`           |
| removed |    -4 |  0.1% → 0.0% |     4 → 0 | `getRawResult()`                                          | `java.util.concurrent.RecursiveTask`          |
|  -75.0% |    -3 | 0.1% → <0.1% |     4 → 1 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`           |
|  -11.5% |    -3 |  0.5% → 0.4% |   26 → 23 | `checkIndex(int, int)`                                    | `java.util.Objects`                           |
|  -75.0% |    -3 | 0.1% → <0.1% |     4 → 1 | `resize()`                                                | `java.util.HashMap`                           |
|  -50.0% |    -2 | 0.1% → <0.1% |     4 → 2 | `awaitWork(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`           |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `add(Object)`                                             | `java.util.ArrayList`                         |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `getAndClearSlot(ForkJoinTask[], int)`                    | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`           |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `park(boolean, long)`                                     | `jdk.internal.misc.Unsafe`                    |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `park()`                                                  | `java.util.concurrent.locks.LockSupport`      |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `<init>(Collection)`                                      | `java.util.ArrayList`                         |
|  -50.0% |    -1 |        <0.1% |     2 → 1 | `signalWaiters()`                                         | `java.util.concurrent.ForkJoinTask`           |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `<init>(HashMap)`                                         | `java.util.HashMap$HashIterator`              |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `putMapEntries(Map, boolean)`                             | `java.util.HashMap`                           |

##### JIT

| Change | Delta |           % | Samples | Function      | Location    |
| -----: | ----: | ----------: | ------: | ------------- | ----------- |
| -17.4% |   -12 | 1.3% → 1.0% | 69 → 57 | `zero_blocks` | `<unknown>` |

##### Compiler

|  Change | Delta |            % | Samples | Function                                       | Location       |
| ------: | ----: | -----------: | ------: | ---------------------------------------------- | -------------- |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `Node::latency`                                | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `PhaseChaitin::merge_multidefs`                | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `RelocIterator::set_limits`                    | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `LinearScanWalker::alloc_free_reg`             | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `IntervalWalker::walk_to`                      | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `RelocIterator::advance_over_prefix`           | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `ValueStack::pin_stack_for_linear_scan`        | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `BlockBegin::try_merge`                        | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `LIR_OprPtr::as_constant`                      | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `CompileBroker::possibly_add_compiler_threads` | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `LinearScanWalker::free_collect_inactive_any`  | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `MethodLiveness::BasicBlock::propagate`        | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Scheduling::DoScheduling`                     | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseIdealLoop::build_loop_tree`              | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseCCP::push_cast_ii`                       | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseIdealLoop::build_loop_tree_impl`         | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `CountedLoopNode::bt`                          | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Node::set_req_X`                              | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `decodeHeapOopNode::rule`                      | `libjvm.dylib` |
|  -50.0% |    -1 |        <0.1% |   2 → 1 | `PhaseChaitin::Split`                          | `libjvm.dylib` |

#### Lines

Lines with the largest change in contribution to each function's self samples.

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % |   Samples | Location                                                       |
| ------: | ----: | ------------: | --------: | -------------------------------------------------------------- |
| +591.7% |  +213 |  8.7% → 42.5% |  36 → 249 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:229` |
|  -26.2% |   -37 | 34.0% → 17.7% | 141 → 104 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:230` |
|  -25.0% |    -5 |   4.8% → 2.6% |   20 → 15 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:226` |
|   +1.0% |    +2 | 50.6% → 36.2% | 210 → 212 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:231` |
|  -50.0% |    -1 |   0.5% → 0.2% |     2 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:223` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |             % |   Samples | Location                                                      |
| -----: | ----: | ------------: | --------: | ------------------------------------------------------------- |
| +28.6% |  +114 | 85.0% → 91.6% | 398 → 512 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:403` |
| -33.3% |   -23 |  14.7% → 8.2% |   69 → 46 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:402` |

##### `grow(int)` (`java.util.ArrayList`)

|  Change | Delta |             % | Samples | Location                  |
| ------: | ----: | ------------: | ------: | ------------------------- |
| +210.0% |   +42 | 83.3% → 98.4% | 20 → 62 | `java.util.ArrayList:239` |
| removed |    -2 |   8.3% → 0.0% |   2 → 0 | `java.util.ArrayList:232` |
| removed |    -1 |   4.2% → 0.0% |   1 → 0 | `java.util.ArrayList:233` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % | Samples | Location                                                       |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------- |
| +34.8% |    +8 | 23.0% → 25.8% | 23 → 31 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:214` |
| +77.8% |    +7 |  9.0% → 13.3% |  9 → 16 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:211` |
| +27.3% |    +6 | 22.0% → 23.3% | 22 → 28 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |
|  -4.0% |    -1 | 25.0% → 20.0% | 25 → 24 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:212` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

| Change | Delta |             % | Samples | Location                  |
| -----: | ----: | ------------: | ------: | ------------------------- |
| +15.4% |    +6 | 76.5% → 75.0% | 39 → 45 | `java.util.ArrayList:482` |
| +25.0% |    +3 | 23.5% → 25.0% | 12 → 15 | `java.util.ArrayList:484` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|  Change | Delta |      % | Samples | Location                |
| ------: | ----: | -----: | ------: | ----------------------- |
| +120.0% |    +6 | 100.0% |  5 → 11 | `java.util.Arrays:3482` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Location                 |
| ------: | ----: | ------------: | ------: | ------------------------ |
|  +75.9% |   +22 | 20.7% → 35.7% | 29 → 51 | `java.util.HashMap:1213` |
| removed |    -9 |   6.4% → 0.0% |   9 → 0 | `java.util.HashMap:1208` |
|  -75.0% |    -9 |   8.6% → 2.1% |  12 → 3 | `java.util.HashMap:1228` |
|  -23.1% |    -6 | 18.6% → 14.0% | 26 → 20 | `java.util.HashMap:1204` |
|  +12.0% |    +3 | 17.9% → 19.6% | 25 → 28 | `java.util.HashMap:1197` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change | Delta |            % | Samples | Location                                                   |
| -----: | ----: | -----------: | ------: | ---------------------------------------------------------- |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask:145` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask:149` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask:151` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % | Samples | Location                                                       |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:171` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % | Samples | Location                                                       |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:171` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |             % | Samples | Location                                                      |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:367` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |             % | Samples | Location                                                   |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:333` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |             % | Samples | Location                                                   |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:316` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |             % | Samples | Location                                                      |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:419` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % | Samples | Location                                                       |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |

##### `<init>(JavaKMeans, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change | Delta |             % | Samples | Location                                                   |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask:137` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|  Change | Delta |      % | Samples | Location                                 |
| ------: | ----: | -----: | ------: | ---------------------------------------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `java.util.concurrent.RecursiveTask:110` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % | Samples | Location                                 |
| ------: | ----: | ------------: | ------: | ---------------------------------------- |
|     new |    +2 |  0.0% → 22.2% |   0 → 2 | `java.util.concurrent.ForkJoinPool:1837` |
|  -20.0% |    -1 | 83.3% → 44.4% |   5 → 4 | `java.util.concurrent.ForkJoinPool:1829` |
| removed |    -1 |  16.7% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinPool:1834` |
|     new |    +1 |  0.0% → 11.1% |   0 → 1 | `java.util.concurrent.ForkJoinPool:1825` |
|     new |    +1 |  0.0% → 11.1% |   0 → 1 | `java.util.concurrent.ForkJoinPool:1840` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |            % | Samples | Location                                |
| ------: | ----: | -----------: | ------: | --------------------------------------- |
|     new |    +4 | 0.0% → 80.0% |   0 → 4 | `java.util.concurrent.ForkJoinTask:411` |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `java.util.concurrent.ForkJoinTask:413` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinTask:461` |
|     new |    +1 | 0.0% → 20.0% |   0 → 1 | `java.util.concurrent.ForkJoinTask:422` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

| Change | Delta |             % | Samples | Location                 |
| -----: | ----: | ------------: | ------: | ------------------------ |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `java.util.HashMap:1909` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |             % | Samples | Location                                           |
| -----: | ----: | ------------: | ------: | -------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.concurrent.ForkJoinPool$WorkQueue:1314` |

##### `addAll(Collection)` (`java.util.ArrayList`)

| Change | Delta |            % | Samples | Location                  |
| -----: | ----: | -----------: | ------: | ------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `java.util.ArrayList:759` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

| Change | Delta |             % | Samples | Location                 |
| -----: | ----: | ------------: | ------: | ------------------------ |
| +50.0% |    +2 | 57.1% → 75.0% |   4 → 6 | `java.util.HashMap:1428` |
| -50.0% |    -1 | 28.6% → 12.5% |   2 → 1 | `java.util.HashMap:1427` |

##### `get(int)` (`java.util.ArrayList`)

|  Change | Delta |      % | Samples | Location                  |
| ------: | ----: | -----: | ------: | ------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `java.util.ArrayList:427` |

##### `signalWork()` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % | Samples | Location                                 |
| ------: | ----: | ------------: | ------: | ---------------------------------------- |
|     new |    +2 | 0.0% → 100.0% |   0 → 2 | `java.util.concurrent.ForkJoinPool:1692` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinPool:1695` |

##### `fork()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |      % | Samples | Location                                |
| ------: | ----: | -----: | ------: | --------------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `java.util.concurrent.ForkJoinTask:627` |

##### `getAndBitwiseOrInt(Object, long, int)` (`jdk.internal.misc.Unsafe`)

|  Change | Delta |      % | Samples | Location                        |
| ------: | ----: | -----: | ------: | ------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `jdk.internal.misc.Unsafe:3191` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Location                |
| ------: | ----: | ------------: | ------: | ----------------------- |
|     new |    +2 |  0.0% → 40.0% |   0 → 2 | `java.util.HashMap:634` |
|     new |    +2 |  0.0% → 40.0% |   0 → 2 | `java.util.HashMap:637` |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `java.util.HashMap:635` |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `java.util.HashMap:659` |
|  -50.0% |    -1 | 50.0% → 20.0% |   2 → 1 | `java.util.HashMap:668` |

##### `hash(Object)` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Location                |
| -----: | ----: | -----: | ------: | ----------------------- |
|  +4.2% |    +1 | 100.0% | 24 → 25 | `java.util.HashMap:338` |

##### `doPrivileged(PrivilegedAction)` (`java.security.AccessController`)

| Change | Delta |             % | Samples | Location                             |
| -----: | ----: | ------------: | ------: | ------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.security.AccessController:319` |

##### `accept(Object)` (`java.util.stream.Nodes$FixedNodeBuilder`)

|  Change | Delta |      % | Samples | Location                                       |
| ------: | ----: | -----: | ------: | ---------------------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `java.util.stream.Nodes$FixedNodeBuilder:1230` |

##### `newLength(int, int, int)` (`jdk.internal.util.ArraysSupport`)

| Change | Delta |      % | Samples | Location                              |
| -----: | ----: | -----: | ------: | ------------------------------------- |
| +50.0% |    +1 | 100.0% |   2 → 3 | `jdk.internal.util.ArraysSupport:741` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % |   Samples | Location                                                       |
| -----: | ----: | ------------: | --------: | -------------------------------------------------------------- |
| -41.4% |  -213 | 55.3% → 45.7% | 514 → 301 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:248` |
| -12.6% |   -49 | 41.8% → 51.4% | 388 → 339 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:249` |
| -25.0% |    -6 |   2.6% → 2.7% |   24 → 18 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:250` |
| -66.7% |    -2 |   0.3% → 0.2% |     3 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:247` |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |             % |   Samples | Location                                                      |
| -----: | ----: | ------------: | --------: | ------------------------------------------------------------- |
| -36.4% |   -63 | 17.2% → 12.1% | 173 → 110 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:411` |
|  -3.5% |   -29 | 82.8% → 87.9% | 831 → 802 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:412` |

##### `doubleValue()` (`java.lang.Double`)

| Change | Delta |      % |  Samples | Location                |
| -----: | ----: | -----: | -------: | ----------------------- |
| -35.7% |   -41 | 100.0% | 115 → 74 | `java.lang.Double:1001` |

##### `elementData(int)` (`java.util.ArrayList`)

| Change | Delta |      % |   Samples | Location                  |
| -----: | ----: | -----: | --------: | ------------------------- |
| -11.5% |   -19 | 100.0% | 165 → 146 | `java.util.ArrayList:411` |

##### `grow()` (`java.util.ArrayList`)

| Change | Delta |      % | Samples | Location                  |
| -----: | ----: | -----: | ------: | ------------------------- |
| -87.5% |    -7 | 100.0% |   8 → 1 | `java.util.ArrayList:244` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % | Samples | Location                                 |
| ------: | ----: | ------------: | ------: | ---------------------------------------- |
| removed |    -4 |  13.8% → 0.0% |   4 → 0 | `java.util.concurrent.ForkJoinPool:2023` |
|  -57.1% |    -4 | 24.1% → 12.5% |   7 → 3 | `java.util.concurrent.ForkJoinPool:2051` |
| +300.0% |    +3 |  3.4% → 16.7% |   1 → 4 | `java.util.concurrent.ForkJoinPool:2041` |
| removed |    -3 |  10.3% → 0.0% |   3 → 0 | `java.util.concurrent.ForkJoinPool:2055` |
|  -40.0% |    -2 | 17.2% → 12.5% |   5 → 3 | `java.util.concurrent.ForkJoinPool:2053` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Location                 |
| ------: | ----: | ------------: | ------: | ------------------------ |
|  -42.9% |    -3 | 63.6% → 66.7% |   7 → 4 | `java.util.HashMap:1384` |
| removed |    -1 |   9.1% → 0.0% |   1 → 0 | `java.util.HashMap:1362` |
|  -50.0% |    -1 | 18.2% → 16.7% |   2 → 1 | `java.util.HashMap:1378` |
| removed |    -1 |   9.1% → 0.0% |   1 → 0 | `java.util.HashMap:1391` |
|     new |    +1 |  0.0% → 16.7% |   0 → 1 | `java.util.HashMap:1399` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |             % | Samples | Location                                 |
| -----: | ----: | ------------: | ------: | ---------------------------------------- |
| -50.0% |    -2 | 57.1% → 66.7% |   4 → 2 | `java.util.concurrent.ForkJoinPool:1808` |
| -66.7% |    -2 | 42.9% → 33.3% |   3 → 1 | `java.util.concurrent.ForkJoinPool:1809` |

##### `getRawResult()` (`java.util.concurrent.RecursiveTask`)

|  Change | Delta |             % | Samples | Location                                |
| ------: | ----: | ------------: | ------: | --------------------------------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `java.util.concurrent.RecursiveTask:99` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |              % | Samples | Location                                |
| ------: | ----: | -------------: | ------: | --------------------------------------- |
|  -66.7% |    -2 | 75.0% → 100.0% |   3 → 1 | `java.util.concurrent.ForkJoinTask:385` |
| removed |    -1 |   25.0% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinTask:387` |

##### `checkIndex(int, int)` (`java.util.Objects`)

| Change | Delta |      % | Samples | Location                |
| -----: | ----: | -----: | ------: | ----------------------- |
| -11.5% |    -3 | 100.0% | 26 → 23 | `java.util.Objects:385` |

##### `resize()` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Location                |
| ------: | ----: | ------------: | ------: | ----------------------- |
| removed |    -3 |  75.0% → 0.0% |   3 → 0 | `java.util.HashMap:711` |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `java.util.HashMap:717` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.HashMap:698` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |             % | Samples | Location                                                      |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:367` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % | Samples | Location                                 |
| ------: | ----: | ------------: | ------: | ---------------------------------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `java.util.concurrent.ForkJoinPool:1880` |
|     new |    +1 |  0.0% → 50.0% |   0 → 1 | `java.util.concurrent.ForkJoinPool:1869` |
|     new |    +1 |  0.0% → 50.0% |   0 → 1 | `java.util.concurrent.ForkJoinPool:1897` |

##### `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % | Samples | Location                                       |
| -----: | ----: | -----: | ------: | ---------------------------------------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans:86` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change | Delta |             % | Samples | Location                                                   |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:276` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |            % | Samples | Location                                       |
| ------: | ----: | -----------: | ------: | ---------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans:57` |

##### `forkThreshold()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % | Samples | Location                                                       |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:198` |

##### `<init>(JavaKMeans, List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % | Samples | Location                                                       |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:181` |

##### `<init>(JavaKMeans, List, List, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % | Samples | Location                                                       |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:190` |

##### `add(Object)` (`java.util.ArrayList`)

|  Change | Delta |             % | Samples | Location                  |
| ------: | ----: | ------------: | ------: | ------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `java.util.ArrayList:495` |

##### `getAndClearSlot(ForkJoinTask[], int)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change | Delta |             % | Samples | Location                                           |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `java.util.concurrent.ForkJoinPool$WorkQueue:1076` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |             % | Samples | Location                                |
| ------: | ----: | ------------: | ------: | --------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinTask:652` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

|  Change | Delta |             % | Samples | Location                                     |
| ------: | ----: | ------------: | ------: | -------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.concurrent.locks.LockSupport:371` |

##### `<init>(Collection)` (`java.util.ArrayList`)

|  Change | Delta |             % | Samples | Location                  |
| ------: | ----: | ------------: | ------: | ------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.ArrayList:184` |

##### `signalWaiters()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |            % | Samples | Location                                |
| ------: | ----: | -----------: | ------: | --------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinTask:302` |

##### `<init>(HashMap)` (`java.util.HashMap$HashIterator`)

|  Change | Delta |             % | Samples | Location                              |
| ------: | ----: | ------------: | ------: | ------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.HashMap$HashIterator:1593` |

##### `putMapEntries(Map, boolean)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Location                |
| ------: | ----: | ------------: | ------: | ----------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.HashMap:519` |

#### Callers

Callers with the largest change in contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

| Change | Delta |             % |       Samples | Caller                  | Location       |
| -----: | ----: | ------------: | ------------: | ----------------------- | -------------- |
| +30.2% |  +304 | 97.2% → 97.5% | 1,008 → 1,312 | `Parker::park`          | `libjvm.dylib` |
| +13.8% |    +4 |   2.8% → 2.5% |       29 → 33 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller              | Location                                                   |
| -----: | ----: | -----: | --------: | ------------------- | ---------------------------------------------------------- |
| +41.2% |  +171 | 100.0% | 415 → 586 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |   Samples | Caller              | Location                                                  |
| -----: | ----: | -----: | --------: | ------------------- | --------------------------------------------------------- |
| +19.4% |   +91 | 100.0% | 468 → 559 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `grow(int)` (`java.util.ArrayList`)

|  Change | Delta |      % | Samples | Caller   | Location              |
| ------: | ----: | -----: | ------: | -------- | --------------------- |
| +162.5% |   +39 | 100.0% | 24 → 63 | `grow()` | `java.util.ArrayList` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller              | Location                                                   |
| -----: | ----: | -----: | --------: | ------------------- | ---------------------------------------------------------- |
| +20.0% |   +20 | 100.0% | 100 → 120 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `forward_copy_longs` (`<unknown>`)

| Change | Delta |             % |   Samples | Caller                            | Location    |
| -----: | ----: | ------------: | --------: | --------------------------------- | ----------- |
|  +2.9% |    +6 | 80.0% → 78.7% | 204 → 210 | `arrayof_jint_disjoint_arraycopy` | `<unknown>` |
| +11.8% |    +6 | 20.0% → 21.3% |   51 → 57 | `arrayof_oop_disjoint_arraycopy`  | `<unknown>` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

| Change | Delta |      % | Samples | Caller        | Location              |
| -----: | ----: | -----: | ------: | ------------- | --------------------- |
| +17.6% |    +9 | 100.0% | 51 → 60 | `add(Object)` | `java.util.ArrayList` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|  Change | Delta |             % | Samples | Caller      | Location              |
| ------: | ----: | ------------: | ------: | ----------- | --------------------- |
| +100.0% |    +4 | 80.0% → 72.7% |   4 → 8 | `toArray()` | `java.util.ArrayList` |
| +200.0% |    +2 | 20.0% → 27.3% |   1 → 3 | `grow(int)` | `java.util.ArrayList` |

##### `G1FullGCMarker::mark_object` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                                          | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------- | -------------- |
|  +36.4% |    +4 | 91.7% → 83.3% | 11 → 15 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` | `libjvm.dylib` |
| +100.0% |    +1 |  8.3% → 11.1% |   1 → 2 | `G1FullGCMarker::complete_marking`                              | `libjvm.dylib` |
|     new |    +1 |   0.0% → 5.6% |   0 → 1 | `G1FullGCMarker::follow_marking_stacks`                         | `libjvm.dylib` |

##### `_platform_memset` (`libsystem_platform.dylib`)

|  Change | Delta |             % | Samples | Caller                                        | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------------- | -------------- |
| +100.0% |    +5 | 71.4% → 83.3% |  5 → 10 | `MemAllocator::allocate`                      | `libjvm.dylib` |
| removed |    -1 |  14.3% → 0.0% |   1 → 0 | `G1ParScanThreadStateSet::state_for_worker`   | `libjvm.dylib` |
| removed |    -1 |  14.3% → 0.0% |   1 → 0 | `MarkBitMap::do_clear`                        | `libjvm.dylib` |
|     new |    +1 |   0.0% → 8.3% |   0 → 1 | `InstanceKlass::link_class_impl`              | `libjvm.dylib` |
|     new |    +1 |   0.0% → 8.3% |   0 → 1 | `MemAllocator::mem_allocate_inside_tlab_slow` | `libjvm.dylib` |

##### `arrayof_jint_disjoint_arraycopy` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                              | Location              |
| ------: | ----: | ------------: | ------: | ----------------------------------- | --------------------- |
| +140.0% |    +7 | 35.7% → 66.7% |  5 → 12 | `copyOf(Object[], int)`             | `java.util.Arrays`    |
|  -62.5% |    -5 | 57.1% → 16.7% |   8 → 3 | `grow(int)`                         | `java.util.ArrayList` |
| +200.0% |    +2 |  7.1% → 16.7% |   1 → 3 | `merge(Object, Object, BiFunction)` | `java.util.HashMap`   |

##### `G1RegionMarkStatsCache::add_live_words` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                        | Location       |
| ------: | ----: | -----: | ------: | ----------------------------- | -------------- |
| +100.0% |    +4 | 100.0% |   4 → 8 | `G1FullGCMarker::mark_object` | `libjvm.dylib` |

##### `inflate_fast` (`libzip.dylib`)

| Change | Delta |      % | Samples | Caller                                          | Location       |
| -----: | ----: | -----: | ------: | ----------------------------------------------- | -------------- |
| +80.0% |    +4 | 100.0% |   5 → 9 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `InstanceKlass::find_method_index` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                                  | Location       |
| -----: | ----: | -----------: | ------: | --------------------------------------- | -------------- |
|    new |    +4 | 0.0% → 66.7% |   0 → 4 | `InstanceKlass::uncached_lookup_method` | `libjvm.dylib` |

##### `IndexSetIterator::advance_and_next` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                             | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------- | -------------- |
|     new |    +2 |  0.0% → 40.0% |   0 → 2 | `PhaseChaitin::Simplify`           | `libjvm.dylib` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseIFG::remove_node`            | `libjvm.dylib` |
|     new |    +1 |  0.0% → 20.0% |   0 → 1 | `PhaseChaitin::build_ifg_physical` | `libjvm.dylib` |
|     new |    +1 |  0.0% → 20.0% |   0 → 1 | `PhaseIFG::re_insert`              | `libjvm.dylib` |
|     new |    +1 |  0.0% → 20.0% |   0 → 1 | `PhaseIFG::effective_degree`       | `libjvm.dylib` |

##### `G1FullGCCompactTask::copy_object_to_new_location` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                               | Location       |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------- | -------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `G1FullGCCompactTask::G1CompactRegionClosure::apply` | `libjvm.dylib` |

##### `__mmap` (`libsystem_kernel.dylib`)

| Change | Delta |             % | Samples | Caller                   | Location       |
| -----: | ----: | ------------: | ------: | ------------------------ | -------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `os::pd_uncommit_memory` | `libjvm.dylib` |

##### `semaphore_signal_trap` (`libsystem_kernel.dylib`)

| Change | Delta |            % | Samples | Caller                    | Location       |
| -----: | ----: | -----------: | ------: | ------------------------- | -------------- |
|    new |    +3 | 0.0% → 75.0% |   0 → 3 | `WorkerThreads::run_task` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `WorkerThread::run`       | `libjvm.dylib` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

| Change | Delta |      % |   Samples | Caller                   | Location                                                   |
| -----: | ----: | -----: | --------: | ------------------------ | ---------------------------------------------------------- |
|  +2.1% |    +3 | 100.0% | 140 → 143 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change | Delta |             % | Samples | Caller   | Location                             |
| -----: | ----: | ------------: | ------: | -------- | ------------------------------------ |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % | Samples | Caller      | Location                                               |
| -----: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % | Samples | Caller      | Location                                               |
| -----: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`)

| Change | Delta |             % | Samples | Caller                | Location            |
| -----: | ----: | ------------: | ------: | --------------------- | ------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `forEach(BiConsumer)` | `java.util.HashMap` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |             % | Samples | Caller      | Location                                               |
| -----: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |             % | Samples | Caller                     | Location                                               |
| -----: | ----: | ------------: | ------: | -------------------------- | ------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |             % | Samples | Caller              | Location                                               |
| -----: | ----: | ------------: | ------: | ------------------- | ------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |             % | Samples | Caller      | Location                                               |
| -----: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % | Samples | Caller          | Location                                                                              |
| -----: | ----: | ------------: | ------: | --------------- | ------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `apply(Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011a3940` |

##### `<init>(JavaKMeans, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change | Delta |             % | Samples | Caller                                     | Location                                                   |
| -----: | ----: | ------------: | ------: | ------------------------------------------ | ---------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<init>(JavaKMeans, List, List, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `<init>(Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`)

| Change | Delta |             % | Samples | Caller                             | Location                                     |
| -----: | ----: | ------------: | ------: | ---------------------------------- | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `newInvokeSpecial(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `G1FullGCCompactTask::G1CompactRegionClosure::apply` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                                | Location       |
| -----: | ----: | -----------: | ------: | ------------------------------------- | -------------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `G1FullGCCompactTask::work`           | `libjvm.dylib` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `G1FullGCCompactTask::compact_region` | `libjvm.dylib` |

##### `ClassLoaderData::oops_do` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                                                                                               | Location       |
| -----: | ----: | -----------: | ------: | ---------------------------------------------------------------------------------------------------- | -------------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `G1FullGCMarker::publish_and_drain_oop_tasks`                                                        | `libjvm.dylib` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `void OopOopIterateDispatch<G1MarkAndPushClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `libjvm.dylib` |

##### `Unsafe_Park` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                | Location                   |
| ------: | ----: | -----: | ------: | --------------------- | -------------------------- |
| +100.0% |    +2 | 100.0% |   2 → 4 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `__psynch_cvsignal` (`libsystem_kernel.dylib`)

| Change | Delta |      % | Samples | Caller          | Location       |
| -----: | ----: | -----: | ------: | --------------- | -------------- |
|  +3.2% |    +2 | 100.0% | 63 → 65 | `Unsafe_Unpark` | `libjvm.dylib` |

##### `_platform_bzero` (`libsystem_platform.dylib`)

| Change | Delta |      % | Samples | Caller                   | Location       |
| -----: | ----: | -----: | ------: | ------------------------ | -------------- |
| +11.8% |    +2 | 100.0% | 17 → 19 | `MemAllocator::allocate` | `libjvm.dylib` |

##### `CollectedHeap::array_allocate` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                     | Location       |
| -----: | ----: | ------------: | ------: | -------------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `OptoRuntime::new_array_C` | `libjvm.dylib` |

##### `HeapRegionManager::par_iterate` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                          | Location       |
| ------: | ----: | -----: | ------: | ------------------------------- | -------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `G1PrepareEvacuationTask::work` | `libjvm.dylib` |

##### `os::current_thread_enable_wx` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                | Location                   |
| -----: | ----: | -----------: | ------: | --------------------- | -------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `Unsafe_Park`         | `libjvm.dylib`             |

##### `CardTableBarrierSet::on_slowpath_allocation_exit` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller            | Location    |
| -----: | ----: | ------------: | ------: | ----------------- | ----------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `_new_array_Java` | `<unknown>` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|  Change | Delta |      % | Samples | Caller     | Location                            |
| ------: | ----: | -----: | ------: | ---------- | ----------------------------------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % | Samples | Caller                              | Location                            |
| -----: | ----: | -----: | ------: | ----------------------------------- | ----------------------------------- |
| +50.0% |    +3 | 100.0% |   6 → 9 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |      % | Samples | Caller   | Location                            |
| -----: | ----: | -----: | ------: | -------- | ----------------------------------- |
| +66.7% |    +2 | 100.0% |   3 → 5 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

| Change | Delta |            % | Samples | Caller                                          | Location            |
| -----: | ----: | -----------: | ------: | ----------------------------------------------- | ------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |             % | Samples | Caller                                   | Location                            |
| -----: | ----: | ------------: | ------: | ---------------------------------------- | ----------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `addAll(Collection)` (`java.util.ArrayList`)

|  Change | Delta |      % | Samples | Caller                       | Location                                    |
| ------: | ----: | -----: | ------: | ---------------------------- | ------------------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Caller            | Location                                    |
| -----: | ----: | -----: | ------: | ----------------- | ------------------------------------------- |
| +14.3% |    +1 | 100.0% |   7 → 8 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `get(int)` (`java.util.ArrayList`)

|  Change | Delta |      % | Samples | Caller        | Location                                                  |
| ------: | ----: | -----: | ------: | ------------- | --------------------------------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `vectorSum()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `signalWork()` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |      % | Samples | Caller                                      | Location                                      |
| ------: | ----: | -----: | ------: | ------------------------------------------- | --------------------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `push(ForkJoinTask, ForkJoinPool, boolean)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `fork()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |      % | Samples | Caller      | Location                                               |
| ------: | ----: | -----: | ------: | ----------- | ------------------------------------------------------ |
| +100.0% |    +1 | 100.0% |   1 → 2 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `getAndBitwiseOrInt(Object, long, int)` (`jdk.internal.misc.Unsafe`)

|  Change | Delta |      % | Samples | Caller                       | Location                            |
| ------: | ----: | -----: | ------: | ---------------------------- | ----------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `getAndBitwiseOrStatus(int)` | `java.util.concurrent.ForkJoinTask` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|  Change | Delta |              % | Samples | Caller                        | Location            |
| ------: | ----: | -------------: | ------: | ----------------------------- | ------------------- |
|  +66.7% |    +2 | 75.0% → 100.0% |   3 → 5 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |
| removed |    -1 |   25.0% → 0.0% |   1 → 0 | `put(Object, Object)`         | `java.util.HashMap` |

##### `hash(Object)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Caller                              | Location            |
| ------: | ----: | ------------: | ------: | ----------------------------------- | ------------------- |
|   +9.1% |    +2 | 91.7% → 96.0% | 22 → 24 | `computeIfAbsent(Object, Function)` | `java.util.HashMap` |
| removed |    -1 |   4.2% → 0.0% |   1 → 0 | `putMapEntries(Map, boolean)`       | `java.util.HashMap` |

##### `doPrivileged(PrivilegedAction)` (`java.security.AccessController`)

| Change | Delta |             % | Samples | Caller                             | Location                  |
| -----: | ----: | ------------: | ------: | ---------------------------------- | ------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `forkSecondaryFinalizer(Runnable)` | `java.lang.ref.Finalizer` |

##### `accept(Object)` (`java.util.stream.Nodes$FixedNodeBuilder`)

| Change | Delta |            % | Samples | Caller           | Location                              |
| -----: | ----: | -----------: | ------: | ---------------- | ------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `accept(double)` | `java.util.stream.DoublePipeline$1$1` |

##### `newLength(int, int, int)` (`jdk.internal.util.ArraysSupport`)

| Change | Delta |      % | Samples | Caller      | Location              |
| -----: | ----: | -----: | ------: | ----------- | --------------------- |
| +50.0% |    +1 | 100.0% |   2 → 3 | `grow(int)` | `java.util.ArrayList` |

##### `I2C/C2I adapters` (`<unknown>`)

| Change | Delta |            % | Samples | Caller     | Location                                    |
| -----: | ----: | -----------: | ------: | ---------- | ------------------------------------------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `run()`    | `java.util.concurrent.ForkJoinWorkerThread` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `<init>()` | `scala.collection.AbstractIterator`         |

##### `vtable stub` (`<unknown>`)

| Change | Delta |             % | Samples | Caller      | Location                                               |
| -----: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `Compile::disconnect_useless_nodes` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                                   | Location       |
| ------: | ----: | -----: | ------: | ---------------------------------------- | -------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |

##### `PhaseLive::add_liveout` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller               | Location       |
| -----: | ----: | ------------: | ------: | -------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `PhaseLive::compute` | `libjvm.dylib` |

##### `LIR_Assembler::emit_code` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                        | Location       |
| -----: | ----: | ------------: | ------: | ----------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `Compilation::emit_code_body` | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                            | Location       |
| -----: | ----: | -----: | ------: | --------------------------------- | -------------- |
| +50.0% |    +1 | 100.0% |   2 → 3 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `Node::remove_dead_region` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller            | Location       |
| -----: | ----: | ------------: | ------: | ----------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `HaltNode::Ideal` | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                   | Location       |
| -----: | ----: | ------------: | ------: | ------------------------ | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseIterGVN::optimize` | `libjvm.dylib` |

##### `PhaseChaitin::post_allocate_copy_removal` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                            | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseRemoveUseless::PhaseRemoveUseless` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller             | Location       |
| -----: | ----: | ------------: | ------: | ------------------ | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `Compile::Compile` | `libjvm.dylib` |

##### `Type::cmp` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller         | Location       |
| ------: | ----: | -----: | ------: | -------------- | -------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `Dict::Insert` | `libjvm.dylib` |

##### `PhaseCFG::partial_latency_of_defs` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                         | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------ | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |

##### `Compile::final_graph_reshaping_impl` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `Compile::final_graph_reshaping_walk` | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                               | Location       |
| ------: | ----: | -----: | ------: | ------------------------------------ | -------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseIFG::effective_degree` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                               | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseIFG::Compute_Effective_Degree` | `libjvm.dylib` |

##### `TypeOopPtr::singleton` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                | Location       |
| -----: | ----: | ------------: | ------: | --------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseCCP::transform` | `libjvm.dylib` |

##### `Node::is_CFG` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                               | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Node::Identity` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller         | Location       |
| -----: | ----: | ------------: | ------: | -------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `Parse::do_if` | `libjvm.dylib` |

##### `PhaseChaitin::possibly_merge_multidef` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                          | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseChaitin::merge_multidefs` | `libjvm.dylib` |

##### `loadI_volatileNode::emit` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                          | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseOutput::shorten_branches` | `libjvm.dylib` |

##### `PhaseIdealLoop::remix_address_expressions` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                     | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------------ | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseIdealLoop::split_if_with_blocks_pre` | `libjvm.dylib` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller                  | Location                                                   |
| -----: | ----: | -----: | --------: | ----------------------- | ---------------------------------------------------------- |
| -29.1% |  -270 | 100.0% | 929 → 659 | `findNearestCentroid()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |     Samples | Caller        | Location                                                  |
| -----: | ----: | -----: | ----------: | ------------- | --------------------------------------------------------- |
|  -9.2% |   -92 | 100.0% | 1,004 → 912 | `vectorSum()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `doubleValue()` (`java.lang.Double`)

| Change | Delta |             % | Samples | Caller                           | Location                                                   |
| -----: | ----: | ------------: | ------: | -------------------------------- | ---------------------------------------------------------- |
| -34.7% |   -33 | 82.6% → 83.8% | 95 → 62 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| -40.0% |    -8 | 17.4% → 16.2% | 20 → 12 | `distance(Double[], Double[])`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `elementData(int)` (`java.util.ArrayList`)

| Change | Delta |      % |   Samples | Caller     | Location              |
| -----: | ----: | -----: | --------: | ---------- | --------------------- |
| -11.5% |   -19 | 100.0% | 165 → 146 | `get(int)` | `java.util.ArrayList` |

##### `zero_blocks` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                              | Location                                                   |
| ------: | ----: | ------------: | ------: | ----------------------------------- | ---------------------------------------------------------- |
|  -30.2% |   -13 | 62.3% → 52.6% | 43 → 30 | `merge(Object, Object, BiFunction)` | `java.util.HashMap`                                        |
| +200.0% |    +6 |  4.3% → 15.8% |   3 → 9 | `findNearestCentroid()`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -15.0% |    -3 | 29.0% → 29.8% | 20 → 17 | `grow(int)`                         | `java.util.ArrayList`                                      |
| removed |    -1 |   1.4% → 0.0% |   1 → 0 | `<init>(Collection)`                | `java.util.ArrayList`                                      |
| removed |    -1 |   1.4% → 0.0% |   1 → 0 | `copyOf(Object[], int, Class)`      | `java.util.Arrays`                                         |

##### `pthread_jit_write_protect_np` (`libsystem_pthread.dylib`)

|  Change | Delta |             % | Samples | Caller                     | Location       |
| ------: | ----: | ------------: | ------: | -------------------------- | -------------- |
| removed |    -5 |  20.8% → 0.0% |   5 → 0 | `OptoRuntime::new_array_C` | `libjvm.dylib` |
|  +25.0% |    +2 | 33.3% → 66.7% |  8 → 10 | `Unsafe_Park`              | `libjvm.dylib` |
|  -50.0% |    -2 | 16.7% → 13.3% |   4 → 2 | `Unsafe_Unpark`            | `libjvm.dylib` |
| removed |    -2 |   8.3% → 0.0% |   2 → 0 | `Unsafe_AllocateInstance`  | `libjvm.dylib` |
|  -50.0% |    -1 |   8.3% → 6.7% |   2 → 1 | `_new_array_Java`          | `<unknown>`    |

##### `grow()` (`java.util.ArrayList`)

| Change | Delta |      % | Samples | Caller                       | Location              |
| -----: | ----: | -----: | ------: | ---------------------------- | --------------------- |
| -87.5% |    -7 | 100.0% |   8 → 1 | `add(Object, Object[], int)` | `java.util.ArrayList` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % | Samples | Caller                 | Location                            |
| -----: | ----: | -----: | ------: | ---------------------- | ----------------------------------- |
| -17.2% |    -5 | 100.0% | 29 → 24 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Caller                              | Location                                    |
| -----: | ----: | -----: | ------: | ----------------------------------- | ------------------------------------------- |
| -45.5% |    -5 | 100.0% |  11 → 6 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % | Samples | Caller  | Location                                    |
| -----: | ----: | -----: | ------: | ------- | ------------------------------------------- |
| -57.1% |    -4 | 100.0% |   7 → 3 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `tlv_get_addr` (`libdyld.dylib`)

|  Change | Delta |              % | Samples | Caller                                           | Location       |
| ------: | ----: | -------------: | ------: | ------------------------------------------------ | -------------- |
| removed |    -1 |   16.7% → 0.0% |   1 → 0 | `SafepointSynchronize::begin`                    | `libjvm.dylib` |
| +100.0% |    +1 | 16.7% → 100.0% |   1 → 2 | `arrayof_oop_disjoint_arraycopy`                 | `<unknown>`    |
| removed |    -1 |   16.7% → 0.0% |   1 → 0 | `PhaseChaitin::build_ifg_physical`               | `libjvm.dylib` |
| removed |    -1 |   16.7% → 0.0% |   1 → 0 | `TypeInstPtr::xmeet_helper`                      | `libjvm.dylib` |
| removed |    -1 |   16.7% → 0.0% |   1 → 0 | `PhaseChaitin::stretch_base_pointer_live_ranges` | `libjvm.dylib` |

##### `getRawResult()` (`java.util.concurrent.RecursiveTask`)

|  Change | Delta |             % | Samples | Caller   | Location                            |
| ------: | ----: | ------------: | ------: | -------- | ----------------------------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |            % | Samples | Caller                                                    | Location                                      |
| ------: | ----: | -----------: | ------: | --------------------------------------------------------- | --------------------------------------------- |
| removed |    -2 | 50.0% → 0.0% |   2 → 0 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |

##### `checkIndex(int, int)` (`java.util.Objects`)

| Change | Delta |      % | Samples | Caller     | Location              |
| -----: | ----: | -----: | ------: | ---------- | --------------------- |
| -11.5% |    -3 | 100.0% | 26 → 23 | `get(int)` | `java.util.ArrayList` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

| Change | Delta |      % | Samples | Caller                              | Location                  |
| -----: | ----: | -----: | ------: | ----------------------------------- | ------------------------- |
| -10.3% |    -3 | 100.0% | 29 → 26 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `resize()` (`java.util.HashMap`)

|  Change | Delta |            % | Samples | Caller                                          | Location            |
| ------: | ----: | -----------: | ------: | ----------------------------------------------- | ------------------- |
| removed |    -2 | 50.0% → 0.0% |   2 → 0 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `merge(Object, Object, BiFunction)`             | `java.util.HashMap` |

##### `CompiledMethod::cleanup_inline_caches_impl` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                  | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------- | -------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `CompiledMethod::unload_nmethod_caches` | `libjvm.dylib` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |             % | Samples | Caller      | Location                                               |
| ------: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`)

|  Change | Delta |             % | Samples | Caller                              | Location            |
| ------: | ----: | ------------: | ------: | ----------------------------------- | ------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % | Samples | Caller                              | Location                            |
| -----: | ----: | -----: | ------: | ----------------------------------- | ----------------------------------- |
| -50.0% |    -2 | 100.0% |   4 → 2 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % | Samples | Caller       | Location                                            |
| -----: | ----: | -----: | ------: | ------------ | --------------------------------------------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change | Delta |             % | Samples | Caller      | Location                                               |
| ------: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % | Samples | Caller   | Location                                                               |
| -----: | ----: | -----: | ------: | -------- | ---------------------------------------------------------------------- |
| -50.0% |    -1 | 100.0% |   2 → 1 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0` |

##### `forkThreshold()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % | Samples | Caller      | Location                                               |
| ------: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `<init>(JavaKMeans, List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % | Samples | Caller                         | Location                                    |
| ------: | ----: | ------------: | ------: | ------------------------------ | ------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `<init>(JavaKMeans, List, List, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % | Samples | Caller                    | Location                                                   |
| ------: | ----: | ------------: | ------: | ------------------------- | ---------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `createSubtask(int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `SharedRuntime::on_slowpath_allocation_exit` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                     | Location       |
| ------: | ----: | -----------: | ------: | -------------------------- | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `OptoRuntime::new_array_C` | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `_new_array_Java`          | `<unknown>`    |

##### `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                                              | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::do_heap_region` | `libjvm.dylib` |

##### `void G1ScanEvacuatedObjClosure::do_oop_work<narrowOop>` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                          | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | -------------- |
|  -75.0% |    -3 | 80.0% → 33.3% |   4 → 1 | `G1ParScanThreadState::do_partial_array`        | `libjvm.dylib` |
|     new |    +2 |  0.0% → 66.7% |   0 → 2 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib` |
| removed |    -1 |  20.0% → 0.0% |   1 → 0 | `G1ParScanThreadState::start_partial_objarray`  | `libjvm.dylib` |

##### `void HeapRegion::apply_to_marked_objects<G1FullGCPrepareTask::G1PrepareCompactLiveClosure>` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                      | Location       |
| -----: | ----: | -----: | ------: | --------------------------- | -------------- |
| -40.0% |    -2 | 100.0% |   5 → 3 | `G1FullGCPrepareTask::work` | `libjvm.dylib` |

##### `os::malloc` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller         | Location       |
| ------: | ----: | ------------: | ------: | -------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `AllocateHeap` | `libjvm.dylib` |

##### `ResourceBitMap::ResourceBitMap` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                     | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------ | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `LinearScan::compute_local_live_sets`      | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `NullCheckEliminator::NullCheckEliminator` | `libjvm.dylib` |

##### `read` (`libsystem_kernel.dylib`)

|  Change | Delta |             % | Samples | Caller      | Location        |
| ------: | ----: | ------------: | ------: | ----------- | --------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `readBytes` | `libjava.dylib` |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

|  Change | Delta |             % | Samples | Caller                           | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------- | -------------- |
|  -23.8% |    -5 | 80.8% → 64.0% | 21 → 16 | `WorkerThread::run`              | `libjvm.dylib` |
| +100.0% |    +4 | 15.4% → 32.0% |   4 → 8 | `GenericWaitBarrier::Cell::wait` | `libjvm.dylib` |

##### `MemAllocator::allocate` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                             | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `InstanceKlass::allocate_objArray` | `libjvm.dylib` |

##### `localeconv_l` (`libsystem_c.dylib`)

|  Change | Delta |             % | Samples | Caller       | Location            |
| ------: | ----: | ------------: | ------: | ------------ | ------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `_vsnprintf` | `libsystem_c.dylib` |

##### `NamedThread::is_Named_thread` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                       | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `G1RemSet::merge_heap_roots` | `libjvm.dylib` |

##### `ObjArrayAllocator::initialize` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                             | Location       |
| ------: | ----: | -----------: | ------: | -------------------------------------------------- | -------------- |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `ThreadLocalAllocBuffer::retire_before_allocation` | `libjvm.dylib` |

##### `TraceTime::TraceTime` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                   | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `SafepointSynchronize::do_cleanup_tasks` | `libjvm.dylib` |

##### `Events::log_vm_operation` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                     | Location       |
| ------: | ----: | ------------: | ------: | -------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `EventMarkBase::log_start` | `libjvm.dylib` |

##### `metaspace::RunningCounters::used_words_nonclass` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                           | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `MetaspaceUtils::get_statistics` | `libjvm.dylib` |

##### `add(Object)` (`java.util.ArrayList`)

|  Change | Delta |             % | Samples | Caller                   | Location                                                   |
| ------: | ----: | ------------: | ------: | ------------------------ | ---------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `getAndClearSlot(ForkJoinTask[], int)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change | Delta |             % | Samples | Caller                                    | Location                                      |
| ------: | ----: | ------------: | ------: | ----------------------------------------- | --------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `tryRemoveAndExec(ForkJoinTask, boolean)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |             % | Samples | Caller      | Location                                               |
| ------: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|  Change | Delta |             % | Samples | Caller   | Location                                 |
| ------: | ----: | ------------: | ------: | -------- | ---------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `park()` | `java.util.concurrent.locks.LockSupport` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

|  Change | Delta |             % | Samples | Caller                              | Location                            |
| ------: | ----: | ------------: | ------: | ----------------------------------- | ----------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `awaitWork(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `<init>(Collection)` (`java.util.ArrayList`)

|  Change | Delta |             % | Samples | Caller                       | Location                                    |
| ------: | ----: | ------------: | ------: | ---------------------------- | ------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `signalWaiters()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |            % | Samples | Caller                 | Location                            |
| ------: | ----: | -----------: | ------: | ---------------------- | ----------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `<init>(HashMap)` (`java.util.HashMap$HashIterator`)

|  Change | Delta |             % | Samples | Caller            | Location                          |
| ------: | ----: | ------------: | ------: | ----------------- | --------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>(HashMap)` | `java.util.HashMap$EntryIterator` |

##### `putMapEntries(Map, boolean)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Caller        | Location            |
| ------: | ----: | ------------: | ------: | ------------- | ------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>(Map)` | `java.util.HashMap` |

##### `Node::latency` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                              | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `PhaseCFG::partial_latency_of_defs` | `libjvm.dylib` |

##### `PhaseChaitin::merge_multidefs` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                            | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `RelocIterator::set_limits` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                           | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------ | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `trampoline_stub_Relocation::get_trampoline_for` | `libjvm.dylib` |

##### `LinearScanWalker::alloc_free_reg` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                               | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `LinearScanWalker::activate_current` | `libjvm.dylib` |

##### `IntervalWalker::walk_to` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                           | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `LinearScan::allocate_registers` | `libjvm.dylib` |

##### `RelocIterator::advance_over_prefix` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `CodeBuffer::finalize_oop_references` | `libjvm.dylib` |

##### `ValueStack::pin_stack_for_linear_scan` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                   | Location       |
| ------: | ----: | ------------: | ------: | ------------------------ | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `IR::compute_use_counts` | `libjvm.dylib` |

##### `BlockBegin::try_merge` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                            | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `GraphBuilder::setup_start_block` | `libjvm.dylib` |

##### `LIR_OprPtr::as_constant` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                         | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------ | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `LIR_Assembler::emit_lir_list` | `libjvm.dylib` |

##### `CompileBroker::possibly_add_compiler_threads` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `LinearScanWalker::free_collect_inactive_any` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                             | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `LinearScanWalker::alloc_free_reg` | `libjvm.dylib` |

##### `MethodLiveness::BasicBlock::propagate` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                             | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `MethodLiveness::compute_liveness` | `libjvm.dylib` |

##### `Scheduling::DoScheduling` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                | Location       |
| ------: | ----: | ------------: | ------: | --------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseOutput::Output` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_tree` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                               | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseCCP::push_cast_ii` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                     | Location       |
| ------: | ----: | ------------: | ------: | -------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseCCP::push_more_uses` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_tree_impl` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                            | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseIdealLoop::build_loop_tree` | `libjvm.dylib` |

##### `CountedLoopNode::bt` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                         | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseIdealLoop::loop_predication_impl_helper` | `libjvm.dylib` |

##### `Node::set_req_X` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller           | Location       |
| ------: | ----: | ------------: | ------: | ---------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhiNode::Ideal` | `libjvm.dylib` |

##### `decodeHeapOopNode::rule` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                | Location       |
| ------: | ----: | ------------: | ------: | --------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseChaitin::Split` | `libjvm.dylib` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                            | Location       |
| -----: | ----: | -----: | ------: | --------------------------------- | -------------- |
| -50.0% |    -1 | 100.0% |   2 → 1 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

### Total samples

#### Regressions

Functions with the largest increase in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |             % |       Samples | Function                                                                                                               | Location                                                   |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
|  +30.6% |  +313 | 18.9% → 23.7% | 1,024 → 1,337 | `Unsafe_Park`                                                                                                          | `libjvm.dylib`                                             |
|  +30.4% |  +312 | 19.0% → 23.7% | 1,026 → 1,338 | `park(boolean, long)`                                                                                                  | `jdk.internal.misc.Unsafe`                                 |
|  +29.7% |  +308 | 19.2% → 23.8% | 1,037 → 1,345 | `__psynch_cvwait`                                                                                                      | `libsystem_kernel.dylib`                                   |
|  +30.5% |  +308 | 18.7% → 23.3% | 1,010 → 1,318 | `Parker::park`                                                                                                         | `libjvm.dylib`                                             |
|  +28.6% |  +287 | 18.5% → 22.8% | 1,003 → 1,290 | `park()`                                                                                                               | `java.util.concurrent.locks.LockSupport`                   |
|  +57.6% |  +281 |  9.0% → 13.6% |     488 → 769 | `awaitWork(ForkJoinPool$WorkQueue)`                                                                                    | `java.util.concurrent.ForkJoinPool`                        |
|   +4.5% |  +233 | 94.8% → 94.9% | 5,132 → 5,365 | `run()`                                                                                                                | `java.util.concurrent.ForkJoinWorkerThread`                |
|   +4.5% |  +231 | 94.8% → 94.9% | 5,132 → 5,363 | `runWorker(ForkJoinPool$WorkQueue)`                                                                                    | `java.util.concurrent.ForkJoinPool`                        |
|  +13.1% |   +58 |   8.2% → 8.9% |     443 → 501 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +51.1% |   +46 |   1.7% → 2.4% |      90 → 136 | `grow(int)`                                                                                                            | `java.util.ArrayList`                                      |
|  +37.5% |   +45 |   2.2% → 2.9% |     120 → 165 | `add(Object, Object[], int)`                                                                                           | `java.util.ArrayList`                                      |
|  +35.2% |   +43 |   2.3% → 2.9% |     122 → 165 | `add(Object)`                                                                                                          | `java.util.ArrayList`                                      |
|  +52.2% |   +36 |   1.3% → 1.9% |      69 → 105 | `grow()`                                                                                                               | `java.util.ArrayList`                                      |
| +100.0% |   +24 |   0.4% → 0.8% |       24 → 48 | `parkUntil(long)`                                                                                                      | `java.util.concurrent.locks.LockSupport`                   |
|     new |   +24 |   0.0% → 0.4% |        0 → 24 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                |
|   +9.6% |   +20 |   3.8% → 4.0% |     208 → 228 | `copyOf(Object[], int)`                                                                                                | `java.util.Arrays`                                         |
|  +74.1% |   +20 |   0.5% → 0.8% |       27 → 47 | `G1FullGCMarker::complete_marking`                                                                                     | `libjvm.dylib`                                             |
|  +74.1% |   +20 |   0.5% → 0.8% |       27 → 47 | `G1FullGCMarkTask::work`                                                                                               | `libjvm.dylib`                                             |
|   +4.8% |   +13 |          5.0% |     270 → 283 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| +260.0% |   +13 |   0.1% → 0.3% |        5 → 18 | `signalWork()`                                                                                                         | `java.util.concurrent.ForkJoinPool`                        |

##### Ours

|  Change | Delta |            % |   Samples | Function                                                                                                               | Location                                                                                      |
| ------: | ----: | -----------: | --------: | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
|  +13.1% |   +58 |  8.2% → 8.9% | 443 → 501 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                    |
|     new |   +24 |  0.0% → 0.4% |    0 → 24 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                                                   |
|   +4.8% |   +13 |         5.0% | 270 → 283 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                                                   |
|   +4.0% |   +11 |         5.0% | 272 → 283 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`                        |
| +300.0% |    +6 | <0.1% → 0.1% |     2 → 8 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda`                                             |
|     new |    +6 |  0.0% → 0.1% |     0 → 6 | `rowToArray$1(Map)`                                                                                                    | `org.renaissance.jdk.concurrent.FjKmeans`                                                     |
|     new |    +6 |  0.0% → 0.1% |     0 → 6 | `setUpBeforeAll$$anonfun$1(Map)`                                                                                       | `org.renaissance.jdk.concurrent.FjKmeans`                                                     |
|     new |    +6 |  0.0% → 0.1% |     0 → 6 | `lambda$toCsvRows$2(String[], Function, String)`                                                                       | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`                            |
|     new |    +6 |  0.0% → 0.1% |     0 → 6 | `apply(Object)`                                                                                                        | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter$$Lambda.0x0000007001123bf8` |
|     new |    +6 |  0.0% → 0.1% |     0 → 6 | `toCsvRows(Function)`                                                                                                  | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`                            |
|   +0.9% |    +5 |  9.7% → 9.4% | 527 → 532 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                                                   |
|   +0.9% |    +5 |  9.7% → 9.4% | 527 → 532 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`                        |
|  +55.6% |    +5 |         0.2% |    9 → 14 | `setUpBeforeAll(BenchmarkContext)`                                                                                     | `org.renaissance.jdk.concurrent.FjKmeans`                                                     |
|  +80.0% |    +4 |  0.1% → 0.2% |     5 → 9 | `boxed(double[])`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                        |
|  +20.0% |    +4 |         0.4% |   20 → 24 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111ede0`                        |
|     new |    +4 |  0.0% → 0.1% |     0 → 4 | `deleteRecursively(Path, boolean)`                                                                                     | `org.renaissance.core.DirUtils`                                                               |
|     new |    +4 |  0.0% → 0.1% |     0 → 4 | `deleteRecursively(Path)`                                                                                              | `org.renaissance.core.DirUtils`                                                               |
|     new |    +4 |  0.0% → 0.1% |     0 → 4 | `lambda$createScratchDirectory$1(Path)`                                                                                | `org.renaissance.core.DirUtils`                                                               |
|     new |    +4 |  0.0% → 0.1% |     0 → 4 | `run()`                                                                                                                | `org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`                                    |
|   +8.1% |    +3 |         0.7% |   37 → 40 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                                                    |

##### Native

|  Change | Delta |             % |       Samples | Function                                                        | Location                 |
| ------: | ----: | ------------: | ------------: | --------------------------------------------------------------- | ------------------------ |
|  +30.6% |  +313 | 18.9% → 23.7% | 1,024 → 1,337 | `Unsafe_Park`                                                   | `libjvm.dylib`           |
|  +29.7% |  +308 | 19.2% → 23.8% | 1,037 → 1,345 | `__psynch_cvwait`                                               | `libsystem_kernel.dylib` |
|  +30.5% |  +308 | 18.7% → 23.3% | 1,010 → 1,318 | `Parker::park`                                                  | `libjvm.dylib`           |
|  +74.1% |   +20 |   0.5% → 0.8% |       27 → 47 | `G1FullGCMarker::complete_marking`                              | `libjvm.dylib`           |
|  +74.1% |   +20 |   0.5% → 0.8% |       27 → 47 | `G1FullGCMarkTask::work`                                        | `libjvm.dylib`           |
|   +4.7% |   +12 |          4.7% |     255 → 267 | `forward_copy_longs`                                            | `<unknown>`              |
|   +4.6% |   +10 |          4.0% |     218 → 228 | `arrayof_jint_disjoint_arraycopy`                               | `<unknown>`              |
|  +22.2% |   +10 |   0.8% → 1.0% |       45 → 55 | `CollectedHeap::array_allocate`                                 | `libjvm.dylib`           |
|  +62.5% |   +10 |   0.3% → 0.5% |       16 → 26 | `G1FullGCMarker::mark_object`                                   | `libjvm.dylib`           |
|  +60.0% |    +9 |   0.3% → 0.4% |       15 → 24 | `G1FullGCMarker::follow_marking_stacks`                         | `libjvm.dylib`           |
| +160.0% |    +8 |   0.1% → 0.2% |        5 → 13 | `G1CollectedHeap::attempt_allocation`                           | `libjvm.dylib`           |
|  +47.1% |    +8 |   0.3% → 0.4% |       17 → 25 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` | `libjvm.dylib`           |
| +100.0% |    +8 |   0.1% → 0.3% |        8 → 16 | `Mutex::lock`                                                   | `libjvm.dylib`           |
|  +14.6% |    +7 |   0.9% → 1.0% |       48 → 55 | `MemAllocator::allocate`                                        | `libjvm.dylib`           |
|  +15.2% |    +7 |   0.8% → 0.9% |       46 → 53 | `InstanceKlass::allocate_objArray`                              | `libjvm.dylib`           |
|  +87.5% |    +7 |   0.1% → 0.3% |        8 → 15 | `G1CollectedHeap::attempt_allocation_slow`                      | `libjvm.dylib`           |
|     new |    +7 |   0.0% → 0.1% |         0 → 7 | `G1FullGCCompactTask::G1CompactRegionClosure::apply`            | `libjvm.dylib`           |
|     new |    +7 |   0.0% → 0.1% |         0 → 7 | `G1FullGCCompactTask::work`                                     | `libjvm.dylib`           |
|  +10.3% |    +6 |          1.1% |       58 → 64 | `_new_array_Java`                                               | `<unknown>`              |
|   +8.5% |    +5 |          1.1% |       59 → 64 | `arrayof_oop_disjoint_arraycopy`                                | `<unknown>`              |

##### Standard library

|  Change | Delta |             % |       Samples | Function                                    | Location                                      |
| ------: | ----: | ------------: | ------------: | ------------------------------------------- | --------------------------------------------- |
|  +30.4% |  +312 | 19.0% → 23.7% | 1,026 → 1,338 | `park(boolean, long)`                       | `jdk.internal.misc.Unsafe`                    |
|  +28.6% |  +287 | 18.5% → 22.8% | 1,003 → 1,290 | `park()`                                    | `java.util.concurrent.locks.LockSupport`      |
|  +57.6% |  +281 |  9.0% → 13.6% |     488 → 769 | `awaitWork(ForkJoinPool$WorkQueue)`         | `java.util.concurrent.ForkJoinPool`           |
|   +4.5% |  +233 | 94.8% → 94.9% | 5,132 → 5,365 | `run()`                                     | `java.util.concurrent.ForkJoinWorkerThread`   |
|   +4.5% |  +231 | 94.8% → 94.9% | 5,132 → 5,363 | `runWorker(ForkJoinPool$WorkQueue)`         | `java.util.concurrent.ForkJoinPool`           |
|  +51.1% |   +46 |   1.7% → 2.4% |      90 → 136 | `grow(int)`                                 | `java.util.ArrayList`                         |
|  +37.5% |   +45 |   2.2% → 2.9% |     120 → 165 | `add(Object, Object[], int)`                | `java.util.ArrayList`                         |
|  +35.2% |   +43 |   2.3% → 2.9% |     122 → 165 | `add(Object)`                               | `java.util.ArrayList`                         |
|  +52.2% |   +36 |   1.3% → 1.9% |      69 → 105 | `grow()`                                    | `java.util.ArrayList`                         |
| +100.0% |   +24 |   0.4% → 0.8% |       24 → 48 | `parkUntil(long)`                           | `java.util.concurrent.locks.LockSupport`      |
|   +9.6% |   +20 |   3.8% → 4.0% |     208 → 228 | `copyOf(Object[], int)`                     | `java.util.Arrays`                            |
| +260.0% |   +13 |   0.1% → 0.3% |        5 → 18 | `signalWork()`                              | `java.util.concurrent.ForkJoinPool`           |
|  +11.1% |   +10 |   1.7% → 1.8% |      90 → 100 | `<init>(Collection)`                        | `java.util.ArrayList`                         |
| +225.0% |    +9 |   0.1% → 0.2% |        4 → 13 | `fork()`                                    | `java.util.concurrent.ForkJoinTask`           |
|  +90.0% |    +9 |   0.2% → 0.3% |       10 → 19 | `wrapAndCopyInto(Sink, Spliterator)`        | `java.util.stream.AbstractPipeline`           |
|  +72.7% |    +8 |   0.2% → 0.3% |       11 → 19 | `tryCompensate(long, boolean)`              | `java.util.concurrent.ForkJoinPool`           |
| +266.7% |    +8 |   0.1% → 0.2% |        3 → 11 | `push(ForkJoinTask, ForkJoinPool, boolean)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  +80.0% |    +8 |   0.2% → 0.3% |       10 → 18 | `copyInto(Sink, Spliterator)`               | `java.util.stream.AbstractPipeline`           |
|   +3.6% |    +6 |          3.1% |     168 → 174 | `computeIfAbsent(Object, Function)`         | `java.util.HashMap`                           |
|   +3.4% |    +6 |   3.3% → 3.2% |     177 → 183 | `toArray()`                                 | `java.util.ArrayList`                         |

##### JIT

|  Change | Delta |            % | Samples | Function           | Location    |
| ------: | ----: | -----------: | ------: | ------------------ | ----------- |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `I2C/C2I adapters` | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `vtable stub`      | `<unknown>` |

##### Compiler

|  Change | Delta |            % | Samples | Function                                         | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------------ | -------------- |
| +133.3% |    +4 |         0.1% |   3 → 7 | `CompilationPolicy::event`                       | `libjvm.dylib` |
| +400.0% |    +4 | <0.1% → 0.1% |   1 → 5 | `IndexSetIterator::advance_and_next`             | `libjvm.dylib` |
| +400.0% |    +4 | <0.1% → 0.1% |   1 → 5 | `CompileBroker::compile_method_base`             | `libjvm.dylib` |
| +200.0% |    +4 | <0.1% → 0.1% |   2 → 6 | `CompileBroker::compile_method`                  | `libjvm.dylib` |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `PhaseGVN::transform_no_reclaim`                 | `libjvm.dylib` |
|  +16.7% |    +3 |  0.3% → 0.4% | 18 → 21 | `PhaseChaitin::Register_Allocate`                | `libjvm.dylib` |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `PhaseRemoveUseless::PhaseRemoveUseless`         | `libjvm.dylib` |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `Assembler::operand_valid_for_logical_immediate` | `libjvm.dylib` |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `GraphBuilder::iterate_bytecodes_for_block`      | `libjvm.dylib` |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `GraphBuilder::iterate_all_blocks`               | `libjvm.dylib` |
|  +50.0% |    +2 |         0.1% |   4 → 6 | `Compilation::build_hir`                         | `libjvm.dylib` |
|  +66.7% |    +2 |         0.1% |   3 → 5 | `PhaseChaitin::build_ifg_physical`               | `libjvm.dylib` |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `Compile::disconnect_useless_nodes`              | `libjvm.dylib` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `PhaseIFG::effective_degree`                     | `libjvm.dylib` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `PhaseIFG::Compute_Effective_Degree`             | `libjvm.dylib` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `ciEnv::get_klass_by_index_impl`                 | `libjvm.dylib` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `ciEnv::get_method_by_index_impl`                | `libjvm.dylib` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `PhaseCFG::schedule_late`                        | `libjvm.dylib` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `PhaseIFG::re_insert`                            | `libjvm.dylib` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `PhaseChaitin::Select`                           | `libjvm.dylib` |

#### Improvements

Functions with the largest decrease in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |             % |       Samples | Function                                                                                                               | Location                                                   |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
|  -28.9% |  -275 | 17.6% → 12.0% |     951 → 676 | `distance(Double[], Double[])`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -12.1% |  -146 | 22.3% → 18.8% | 1,207 → 1,061 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`                                                              | `java.util.concurrent.ForkJoinPool`                        |
|  -11.3% |  -124 | 20.3% → 17.3% |   1,099 → 975 | `accumulate(Double[], double[])`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   -2.0% |   -82 | 77.0% → 72.3% | 4,167 → 4,085 | `tryRemoveAndExec(ForkJoinTask, boolean)`                                                                              | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
|   -4.6% |   -76 | 30.8% → 28.1% | 1,665 → 1,589 | `vectorSum()`                                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   -4.5% |   -75 | 30.8% → 28.2% | 1,666 → 1,591 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   -4.7% |   -66 | 26.2% → 23.9% | 1,419 → 1,353 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -1.5% |   -65 | 81.7% → 77.1% | 4,424 → 4,359 | `join()`                                                                                                               | `java.util.concurrent.ForkJoinTask`                        |
|   -1.4% |   -64 | 81.7% → 77.2% | 4,424 → 4,360 | `awaitDone(int, long)`                                                                                                 | `java.util.concurrent.ForkJoinTask`                        |
|   -1.2% |   -55 | 85.4% → 80.9% | 4,625 → 4,570 | `doExec()`                                                                                                             | `java.util.concurrent.ForkJoinTask`                        |
|   -1.2% |   -54 | 85.4% → 80.9% | 4,626 → 4,572 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`                                                                   | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
|   -1.0% |   -47 | 85.6% → 81.2% | 4,637 → 4,590 | `scan(ForkJoinPool$WorkQueue, int, int)`                                                                               | `java.util.concurrent.ForkJoinPool`                        |
|   -1.0% |   -45 | 84.7% → 80.4% | 4,587 → 4,542 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
|   -0.9% |   -42 | 84.7% → 80.4% | 4,587 → 4,545 | `exec()`                                                                                                               | `java.util.concurrent.RecursiveTask`                       |
|  -35.7% |   -41 |   2.1% → 1.3% |      115 → 74 | `doubleValue()`                                                                                                        | `java.lang.Double`                                         |
|  -10.9% |   -21 |   3.5% → 3.0% |     192 → 171 | `get(int)`                                                                                                             | `java.util.ArrayList`                                      |
| removed |   -20 |   0.4% → 0.0% |        20 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                |
|  -11.5% |   -19 |   3.0% → 2.6% |     165 → 146 | `elementData(int)`                                                                                                     | `java.util.ArrayList`                                      |
|  -30.4% |   -17 |   1.0% → 0.7% |       56 → 39 | `signalWaiters()`                                                                                                      | `java.util.concurrent.ForkJoinTask`                        |
|  -26.8% |   -15 |   1.0% → 0.7% |       56 → 41 | `setDone()`                                                                                                            | `java.util.concurrent.ForkJoinTask`                        |

##### Ours

|  Change | Delta |             % |       Samples | Function                                                                                                               | Location                                                               |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|  -28.9% |  -275 | 17.6% → 12.0% |     951 → 676 | `distance(Double[], Double[])`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -11.3% |  -124 | 20.3% → 17.3% |   1,099 → 975 | `accumulate(Double[], double[])`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   -4.6% |   -76 | 30.8% → 28.1% | 1,665 → 1,589 | `vectorSum()`                                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   -4.5% |   -75 | 30.8% → 28.2% | 1,666 → 1,591 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   -4.7% |   -66 | 26.2% → 23.9% | 1,419 → 1,353 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -1.0% |   -45 | 84.7% → 80.4% | 4,587 → 4,542 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| removed |   -20 |   0.4% → 0.0% |        20 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|   -1.7% |   -13 | 14.5% → 13.6% |     784 → 771 | `average(List)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   -1.1% |    -9 | 14.6% → 13.8% |     790 → 781 | `computeClusterAverages()`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   -1.1% |    -9 | 14.6% → 13.8% |     790 → 781 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   -0.3% |    -5 | 34.4% → 32.8% | 1,861 → 1,856 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -71.4% |    -5 |  0.1% → <0.1% |         7 → 2 | `run(BenchmarkContext)`                                                                                                | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|   -1.0% |    -4 |   7.2% → 6.8% |     389 → 385 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| removed |    -3 |   0.1% → 0.0% |         3 → 0 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   -0.5% |    -2 |   7.2% → 6.8% |     389 → 387 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90` |
|  -22.2% |    -2 |   0.2% → 0.1% |         9 → 7 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`                    |
|  -22.2% |    -2 |   0.2% → 0.1% |         9 → 7 | `lambda$generateData$5(int, int, Random[], int)`                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -28.6% |    -2 |          0.1% |         7 → 5 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                              |
| removed |    -2 |  <0.1% → 0.0% |         2 → 0 | `$anonfun$1(int)`                                                                                                      | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  -11.1% |    -1 |   0.2% → 0.1% |         9 → 8 | `extractResource(String, Path)`                                                                                        | `org.renaissance.core.ResourceUtils`                                   |

##### Native

|  Change | Delta |            % |  Samples | Function                                                                          | Location                  |
| ------: | ----: | -----------: | -------: | --------------------------------------------------------------------------------- | ------------------------- |
|  -46.9% |   -15 |  0.6% → 0.3% |  32 → 17 | `G1EvacuateRegionsBaseTask::work`                                                 | `libjvm.dylib`            |
|  -56.0% |   -14 |  0.5% → 0.2% |  25 → 11 | `G1ParEvacuateFollowersClosure::do_void`                                          | `libjvm.dylib`            |
|  -56.0% |   -14 |  0.5% → 0.2% |  25 → 11 | `G1EvacuateRegionsTask::evacuate_live_objects`                                    | `libjvm.dylib`            |
|  -75.0% |   -12 |  0.3% → 0.1% |   16 → 4 | `G1ParEvacuateFollowersClosure::offer_termination`                                | `libjvm.dylib`            |
|  -37.5% |    -9 |  0.4% → 0.3% |  24 → 15 | `pthread_jit_write_protect_np`                                                    | `libsystem_pthread.dylib` |
|  -46.2% |    -6 |  0.2% → 0.1% |   13 → 7 | `Mutex::lock_without_safepoint_check`                                             | `libjvm.dylib`            |
| removed |    -6 |  0.1% → 0.0% |    6 → 0 | `G1ParScanThreadState::steal_and_trim_queue`                                      | `libjvm.dylib`            |
| removed |    -6 |  0.1% → 0.0% |    6 → 0 | `CodeCacheUnloadingTask::work`                                                    | `libjvm.dylib`            |
| removed |    -6 |  0.1% → 0.0% |    6 → 0 | `G1ParallelCleaningTask::work`                                                    | `libjvm.dylib`            |
|  -66.7% |    -4 | 0.1% → <0.1% |    6 → 2 | `tlv_get_addr`                                                                    | `libdyld.dylib`           |
|  -23.5% |    -4 |  0.3% → 0.2% |  17 → 13 | `TaskTerminator::offer_termination`                                               | `libjvm.dylib`            |
|  -66.7% |    -4 | 0.1% → <0.1% |    6 → 2 | `G1ParScanThreadState::do_partial_array`                                          | `libjvm.dylib`            |
| removed |    -4 |  0.1% → 0.0% |    4 → 0 | `AllocateHeap`                                                                    | `libjvm.dylib`            |
|   -3.9% |    -4 |  1.9% → 1.7% | 102 → 98 | `JavaThread::thread_main_inner`                                                   | `libjvm.dylib`            |
|  -10.3% |    -3 |         0.5% |  29 → 26 | `__psynch_mutexwait`                                                              | `libsystem_kernel.dylib`  |
|  -10.3% |    -3 |         0.5% |  29 → 26 | `_pthread_mutex_firstfit_lock_slow`                                               | `libsystem_pthread.dylib` |
| removed |    -3 |  0.1% → 0.0% |    3 → 0 | `G1AllocRegion::retire_internal`                                                  | `libjvm.dylib`            |
| removed |    -3 |  0.1% → 0.0% |    3 → 0 | `MutatorAllocRegion::retire`                                                      | `libjvm.dylib`            |
| removed |    -3 |  0.1% → 0.0% |    3 → 0 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region` | `libjvm.dylib`            |
| removed |    -3 |  0.1% → 0.0% |    3 → 0 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::do_heap_region`               | `libjvm.dylib`            |

##### Standard library

|  Change | Delta |             % |       Samples | Function                                                                        | Location                                           |
| ------: | ----: | ------------: | ------------: | ------------------------------------------------------------------------------- | -------------------------------------------------- |
|  -12.1% |  -146 | 22.3% → 18.8% | 1,207 → 1,061 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`                       | `java.util.concurrent.ForkJoinPool`                |
|   -2.0% |   -82 | 77.0% → 72.3% | 4,167 → 4,085 | `tryRemoveAndExec(ForkJoinTask, boolean)`                                       | `java.util.concurrent.ForkJoinPool$WorkQueue`      |
|   -1.5% |   -65 | 81.7% → 77.1% | 4,424 → 4,359 | `join()`                                                                        | `java.util.concurrent.ForkJoinTask`                |
|   -1.4% |   -64 | 81.7% → 77.2% | 4,424 → 4,360 | `awaitDone(int, long)`                                                          | `java.util.concurrent.ForkJoinTask`                |
|   -1.2% |   -55 | 85.4% → 80.9% | 4,625 → 4,570 | `doExec()`                                                                      | `java.util.concurrent.ForkJoinTask`                |
|   -1.2% |   -54 | 85.4% → 80.9% | 4,626 → 4,572 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`                            | `java.util.concurrent.ForkJoinPool$WorkQueue`      |
|   -1.0% |   -47 | 85.6% → 81.2% | 4,637 → 4,590 | `scan(ForkJoinPool$WorkQueue, int, int)`                                        | `java.util.concurrent.ForkJoinPool`                |
|   -0.9% |   -42 | 84.7% → 80.4% | 4,587 → 4,545 | `exec()`                                                                        | `java.util.concurrent.RecursiveTask`               |
|  -35.7% |   -41 |   2.1% → 1.3% |      115 → 74 | `doubleValue()`                                                                 | `java.lang.Double`                                 |
|  -10.9% |   -21 |   3.5% → 3.0% |     192 → 171 | `get(int)`                                                                      | `java.util.ArrayList`                              |
|  -11.5% |   -19 |   3.0% → 2.6% |     165 → 146 | `elementData(int)`                                                              | `java.util.ArrayList`                              |
|  -30.4% |   -17 |   1.0% → 0.7% |       56 → 39 | `signalWaiters()`                                                               | `java.util.concurrent.ForkJoinTask`                |
|  -26.8% |   -15 |   1.0% → 0.7% |       56 → 41 | `setDone()`                                                                     | `java.util.concurrent.ForkJoinTask`                |
|  -46.2% |    -6 |   0.2% → 0.1% |        13 → 7 | `defineClass(String, byte[], int, int, CodeSource)`                             | `java.security.SecureClassLoader`                  |
|  -41.7% |    -5 |   0.2% → 0.1% |        12 → 7 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                            |
|  -41.7% |    -5 |   0.2% → 0.1% |        12 → 7 | `defineClass(String, byte[], int, int, ProtectionDomain)`                       | `java.lang.ClassLoader`                            |
|   -1.0% |    -4 |   7.2% → 6.8% |     389 → 385 | `merge(Object, Object, BiFunction)`                                             | `java.util.HashMap`                                |
| removed |    -4 |   0.1% → 0.0% |         4 → 0 | `getRawResult()`                                                                | `java.util.concurrent.RecursiveTask`               |
| removed |    -4 |   0.1% → 0.0% |         4 → 0 | `fill()`                                                                        | `java.util.zip.ZipFile$ZipFileInflaterInputStream` |
|  -11.5% |    -3 |   0.5% → 0.4% |       26 → 23 | `checkIndex(int, int)`                                                          | `java.util.Objects`                                |

##### JIT

| Change | Delta |           % | Samples | Function      | Location    |
| -----: | ----: | ----------: | ------: | ------------- | ----------- |
| -17.4% |   -12 | 1.3% → 1.0% | 69 → 57 | `zero_blocks` | `<unknown>` |

##### Compiler

|  Change | Delta |            % |  Samples | Function                                   | Location       |
| ------: | ----: | -----------: | -------: | ------------------------------------------ | -------------- |
|   -5.9% |    -6 |  1.9% → 1.7% | 102 → 96 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib` |
|  -19.0% |    -4 |  0.4% → 0.3% |  21 → 17 | `Compile::Optimize`                        | `libjvm.dylib` |
|  -57.1% |    -4 |         0.1% |    7 → 3 | `PhaseOutput::Output`                      | `libjvm.dylib` |
|   -3.6% |    -3 |  1.6% → 1.4% |  84 → 81 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
|  -60.0% |    -3 | 0.1% → <0.1% |    5 → 2 | `PhaseIterGVN::transform_old`              | `libjvm.dylib` |
|  -75.0% |    -3 | 0.1% → <0.1% |    4 → 1 | `PhaseChaitin::Split`                      | `libjvm.dylib` |
|  -75.0% |    -3 | 0.1% → <0.1% |    4 → 1 | `PhaseOutput::fill_buffer`                 | `libjvm.dylib` |
| removed |    -3 |  0.1% → 0.0% |    3 → 0 | `ciMethod::get_flow_analysis`              | `libjvm.dylib` |
|  -50.0% |    -3 |         0.1% |    6 → 3 | `Matcher::match`                           | `libjvm.dylib` |
|  -11.8% |    -2 |         0.3% |  17 → 15 | `CompileQueue::get`                        | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |    2 → 0 | `LinearScanWalker::alloc_free_reg`         | `libjvm.dylib` |
|  -66.7% |    -2 | 0.1% → <0.1% |    3 → 1 | `IntervalWalker::walk_to`                  | `libjvm.dylib` |
|  -66.7% |    -2 | 0.1% → <0.1% |    3 → 1 | `LinearScan::allocate_registers`           | `libjvm.dylib` |
|  -16.7% |    -2 |         0.2% |  12 → 10 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
|   -3.2% |    -2 |  1.2% → 1.1% |  63 → 61 | `Compile::Compile`                         | `libjvm.dylib` |
|   -5.9% |    -2 |         0.6% |  34 → 32 | `Compile::Code_Gen`                        | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |    2 → 0 | `PhaseIdealLoop::build_loop_tree`          | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |    2 → 0 | `PhaseCCP::push_child_nodes_to_worklist`   | `libjvm.dylib` |
|  -40.0% |    -2 |         0.1% |    5 → 3 | `PhaseIterGVN::optimize`                   | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |    2 → 0 | `PhiNode::Ideal`                           | `libjvm.dylib` |

#### Callers

Callers with the largest change in contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `Unsafe_Park` (`libjvm.dylib`)

| Change | Delta |      % |       Samples | Caller                | Location                   |
| -----: | ----: | -----: | ------------: | --------------------- | -------------------------- |
| +30.6% |  +313 | 100.0% | 1,024 → 1,337 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|  Change | Delta |             % |       Samples | Caller            | Location                                 |
| ------: | ----: | ------------: | ------------: | ----------------- | ---------------------------------------- |
|  +28.7% |  +288 | 97.7% → 96.4% | 1,002 → 1,290 | `park()`          | `java.util.concurrent.locks.LockSupport` |
| +100.0% |   +24 |   2.3% → 3.6% |       24 → 48 | `parkUntil(long)` | `java.util.concurrent.locks.LockSupport` |

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

| Change | Delta |             % |       Samples | Caller                  | Location       |
| -----: | ----: | ------------: | ------------: | ----------------------- | -------------- |
| +30.2% |  +304 | 97.2% → 97.5% | 1,008 → 1,312 | `Parker::park`          | `libjvm.dylib` |
| +13.8% |    +4 |   2.8% → 2.5% |       29 → 33 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `Parker::park` (`libjvm.dylib`)

| Change | Delta |      % |       Samples | Caller        | Location       |
| -----: | ----: | -----: | ------------: | ------------- | -------------- |
| +30.5% |  +308 | 100.0% | 1,010 → 1,318 | `Unsafe_Park` | `libjvm.dylib` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

| Change | Delta |             % |   Samples | Caller                              | Location                            |
| -----: | ----: | ------------: | --------: | ----------------------------------- | ----------------------------------- |
| +55.9% |  +257 | 45.9% → 55.6% | 460 → 717 | `awaitWork(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |
|  +5.5% |   +30 | 54.1% → 44.4% | 543 → 573 | `awaitDone(int, long)`              | `java.util.concurrent.ForkJoinTask` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % |   Samples | Caller                              | Location                            |
| -----: | ----: | -----: | --------: | ----------------------------------- | ----------------------------------- |
| +57.6% |  +281 | 100.0% | 488 → 769 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % |       Samples | Caller  | Location                                    |
| -----: | ----: | -----: | ------------: | ------- | ------------------------------------------- |
|  +4.5% |  +231 | 100.0% | 5,132 → 5,363 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller              | Location                                                   |
| -----: | ----: | -----: | --------: | ------------------- | ---------------------------------------------------------- |
| +13.1% |   +58 | 100.0% | 443 → 501 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `grow(int)` (`java.util.ArrayList`)

| Change | Delta |             % |  Samples | Caller               | Location              |
| -----: | ----: | ------------: | -------: | -------------------- | --------------------- |
| +70.5% |   +43 | 67.8% → 76.5% | 61 → 104 | `grow()`             | `java.util.ArrayList` |
| +10.3% |    +3 | 32.2% → 23.5% |  29 → 32 | `addAll(Collection)` | `java.util.ArrayList` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

| Change | Delta |      % |   Samples | Caller        | Location              |
| -----: | ----: | -----: | --------: | ------------- | --------------------- |
| +37.5% |   +45 | 100.0% | 120 → 165 | `add(Object)` | `java.util.ArrayList` |

##### `add(Object)` (`java.util.ArrayList`)

| Change | Delta |              % |   Samples | Caller                   | Location                                                   |
| -----: | ----: | -------------: | --------: | ------------------------ | ---------------------------------------------------------- |
| +34.4% |   +42 | 100.0% → 99.4% | 122 → 164 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|    new |    +1 |    0.0% → 0.6% |     0 → 1 | `accept(Object, Object)` | `java.util.stream.Collectors$$Lambda.0x0000007001070ab8`   |

##### `grow()` (`java.util.ArrayList`)

| Change | Delta |      % |  Samples | Caller                       | Location              |
| -----: | ----: | -----: | -------: | ---------------------------- | --------------------- |
| +52.2% |   +36 | 100.0% | 69 → 105 | `add(Object, Object[], int)` | `java.util.ArrayList` |

##### `parkUntil(long)` (`java.util.concurrent.locks.LockSupport`)

|  Change | Delta |      % | Samples | Caller                              | Location                            |
| ------: | ----: | -----: | ------: | ----------------------------------- | ----------------------------------- |
| +100.0% |   +24 | 100.0% | 24 → 48 | `awaitWork(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change | Delta |             % | Samples | Caller              | Location                                                               |
| -----: | ----: | ------------: | ------: | ------------------- | ---------------------------------------------------------------------- |
|    new |   +24 | 0.0% → 100.0% |  0 → 24 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111ede0` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change | Delta |             % |   Samples | Caller      | Location              |
| -----: | ----: | ------------: | --------: | ----------- | --------------------- |
| +45.2% |   +14 | 14.9% → 19.7% |   31 → 45 | `grow(int)` | `java.util.ArrayList` |
|  +3.4% |    +6 | 85.1% → 80.3% | 177 → 183 | `toArray()` | `java.util.ArrayList` |

##### `G1FullGCMarker::complete_marking` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                   | Location       |
| -----: | ----: | -----: | ------: | ------------------------ | -------------- |
| +74.1% |   +20 | 100.0% | 27 → 47 | `G1FullGCMarkTask::work` | `libjvm.dylib` |

##### `G1FullGCMarkTask::work` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller              | Location       |
| -----: | ----: | -----: | ------: | ------------------- | -------------- |
| +74.1% |   +20 | 100.0% | 27 → 47 | `WorkerThread::run` | `libjvm.dylib` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % |   Samples | Caller                  | Location                                                               |
| -----: | ----: | -----: | --------: | ----------------------- | ---------------------------------------------------------------------- |
|  +4.8% |   +13 | 100.0% | 270 → 283 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000` |

##### `signalWork()` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % | Samples | Caller                                      | Location                                      |
| ------: | ----: | ------------: | ------: | ------------------------------------------- | --------------------------------------------- |
| +800.0% |    +8 | 20.0% → 50.0% |   1 → 9 | `push(ForkJoinTask, ForkJoinPool, boolean)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| +125.0% |    +5 | 80.0% → 50.0% |   4 → 9 | `scan(ForkJoinPool$WorkQueue, int, int)`    | `java.util.concurrent.ForkJoinPool`           |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`)

| Change | Delta |      % |   Samples | Caller                              | Location            |
| -----: | ----: | -----: | --------: | ----------------------------------- | ------------------- |
|  +4.0% |   +11 | 100.0% | 272 → 283 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda`)

| Change | Delta |            % | Samples | Caller                                           | Location                                                           |
| -----: | ----: | -----------: | ------: | ------------------------------------------------ | ------------------------------------------------------------------ |
|    new |    +6 | 0.0% → 75.0% |   0 → 6 | `lambda$toCsvRows$2(String[], Function, String)` | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter` |

##### `rowToArray$1(Map)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |             % | Samples | Caller                           | Location                                  |
| -----: | ----: | ------------: | ------: | -------------------------------- | ----------------------------------------- |
|    new |    +6 | 0.0% → 100.0% |   0 → 6 | `setUpBeforeAll$$anonfun$1(Map)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `setUpBeforeAll$$anonfun$1(Map)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |             % | Samples | Caller          | Location                                          |
| -----: | ----: | ------------: | ------: | --------------- | ------------------------------------------------- |
|    new |    +6 | 0.0% → 100.0% |   0 → 6 | `apply(Object)` | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda` |

##### `lambda$toCsvRows$2(String[], Function, String)` (`org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`)

| Change | Delta |             % | Samples | Caller          | Location                                                                                      |
| -----: | ----: | ------------: | ------: | --------------- | --------------------------------------------------------------------------------------------- |
|    new |    +6 | 0.0% → 100.0% |   0 → 6 | `apply(Object)` | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter$$Lambda.0x0000007001123bf8` |

##### `apply(Object)` (`org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter$$Lambda.0x0000007001123bf8`)

| Change | Delta |             % | Samples | Caller           | Location                                 |
| -----: | ----: | ------------: | ------: | ---------------- | ---------------------------------------- |
|    new |    +6 | 0.0% → 100.0% |   0 → 6 | `accept(Object)` | `java.util.stream.ReferencePipeline$3$1` |

##### `toCsvRows(Function)` (`org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`)

| Change | Delta |             % | Samples | Caller                             | Location                                  |
| -----: | ----: | ------------: | ------: | ---------------------------------- | ----------------------------------------- |
|    new |    +6 | 0.0% → 100.0% |   0 → 6 | `setUpBeforeAll(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % |   Samples | Caller   | Location                                                               |
| -----: | ----: | -----: | --------: | -------- | ---------------------------------------------------------------------- |
|  +0.9% |    +5 | 100.0% | 527 → 532 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`)

| Change | Delta |      % |   Samples | Caller   | Location                                            |
| -----: | ----: | -----: | --------: | -------- | --------------------------------------------------- |
|  +0.9% |    +5 | 100.0% | 527 → 532 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |      % | Samples | Caller               | Location                                  |
| -----: | ----: | -----: | ------: | -------------------- | ----------------------------------------- |
| +55.6% |    +5 | 100.0% |  9 → 14 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % | Samples | Caller                     | Location                                               |
| -----: | ----: | -----: | ------: | -------------------------- | ------------------------------------------------------ |
| +80.0% |    +4 | 100.0% |   5 → 9 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111ede0`)

| Change | Delta |      % | Samples | Caller          | Location                             |
| -----: | ----: | -----: | ------: | --------------- | ------------------------------------ |
| +20.0% |    +4 | 100.0% | 20 → 24 | `apply(Object)` | `scala.runtime.function.JProcedure1` |

##### `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`)

| Change | Delta |             % | Samples | Caller                    | Location                        |
| -----: | ----: | ------------: | ------: | ------------------------- | ------------------------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `deleteRecursively(Path)` | `org.renaissance.core.DirUtils` |

##### `deleteRecursively(Path)` (`org.renaissance.core.DirUtils`)

| Change | Delta |             % | Samples | Caller                                  | Location                        |
| -----: | ----: | ------------: | ------: | --------------------------------------- | ------------------------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `lambda$createScratchDirectory$1(Path)` | `org.renaissance.core.DirUtils` |

##### `lambda$createScratchDirectory$1(Path)` (`org.renaissance.core.DirUtils`)

| Change | Delta |             % | Samples | Caller  | Location                                                   |
| -----: | ----: | ------------: | ------: | ------- | ---------------------------------------------------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `run()` | `org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68` |

##### `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`)

| Change | Delta |             % | Samples | Caller                      | Location           |
| -----: | ----: | ------------: | ------: | --------------------------- | ------------------ |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

| Change | Delta |      % | Samples | Caller                         | Location                                             |
| -----: | ----: | -----: | ------: | ------------------------------ | ---------------------------------------------------- |
|  +8.1% |    +3 | 100.0% | 37 → 40 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001004800` |

##### `forward_copy_longs` (`<unknown>`)

| Change | Delta |             % |   Samples | Caller                            | Location    |
| -----: | ----: | ------------: | --------: | --------------------------------- | ----------- |
|  +2.9% |    +6 | 80.0% → 78.7% | 204 → 210 | `arrayof_jint_disjoint_arraycopy` | `<unknown>` |
| +11.8% |    +6 | 20.0% → 21.3% |   51 → 57 | `arrayof_oop_disjoint_arraycopy`  | `<unknown>` |

##### `arrayof_jint_disjoint_arraycopy` (`<unknown>`)

| Change | Delta |             % |   Samples | Caller                              | Location              |
| -----: | ----: | ------------: | --------: | ----------------------------------- | --------------------- |
|  +6.9% |   +10 | 66.5% → 68.0% | 145 → 155 | `copyOf(Object[], int)`             | `java.util.Arrays`    |
|  +8.3% |    +5 | 27.5% → 28.5% |   60 → 65 | `merge(Object, Object, BiFunction)` | `java.util.HashMap`   |
| -38.5% |    -5 |   6.0% → 3.5% |    13 → 8 | `grow(int)`                         | `java.util.ArrayList` |

##### `CollectedHeap::array_allocate` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                             | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------- | -------------- |
|  +18.2% |    +8 | 97.8% → 94.5% | 44 → 52 | `InstanceKlass::allocate_objArray` | `libjvm.dylib` |
| +200.0% |    +2 |   2.2% → 5.5% |   1 → 3 | `OptoRuntime::new_array_C`         | `libjvm.dylib` |

##### `G1FullGCMarker::mark_object` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                                          | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------- | -------------- |
|  +53.3% |    +8 | 93.8% → 88.5% | 15 → 23 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` | `libjvm.dylib` |
| +100.0% |    +1 |   6.3% → 7.7% |   1 → 2 | `G1FullGCMarker::complete_marking`                              | `libjvm.dylib` |
|     new |    +1 |   0.0% → 3.8% |   0 → 1 | `G1FullGCMarker::follow_marking_stacks`                         | `libjvm.dylib` |

##### `G1FullGCMarker::follow_marking_stacks` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                             | Location       |
| -----: | ----: | -----: | ------: | ---------------------------------- | -------------- |
| +60.0% |    +9 | 100.0% | 15 → 24 | `G1FullGCMarker::complete_marking` | `libjvm.dylib` |

##### `G1CollectedHeap::attempt_allocation` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                                        | Location       |
| ------: | ----: | -----: | ------: | --------------------------------------------- | -------------- |
| +160.0% |    +8 | 100.0% |  5 → 13 | `MemAllocator::mem_allocate_inside_tlab_slow` | `libjvm.dylib` |

##### `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                  | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------------- | -------------- |
| +75.0% |    +6 | 47.1% → 56.0% |  8 → 14 | `G1FullGCMarker::follow_marking_stacks` | `libjvm.dylib` |
| +22.2% |    +2 | 52.9% → 44.0% |  9 → 11 | `G1FullGCMarker::complete_marking`      | `libjvm.dylib` |

##### `Mutex::lock` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                     | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | -------------- |
| +200.0% |    +8 | 50.0% → 75.0% |  4 → 12 | `G1CollectedHeap::attempt_allocation_slow` | `libjvm.dylib` |
| +300.0% |    +3 | 12.5% → 25.0% |   1 → 4 | `CompileBroker::compile_method_base`       | `libjvm.dylib` |
| removed |    -1 |  12.5% → 0.0% |   1 → 0 | `ciEnv::register_method`                   | `libjvm.dylib` |
| removed |    -1 |  12.5% → 0.0% |   1 → 0 | `ciMethod::ciMethod`                       | `libjvm.dylib` |
| removed |    -1 |  12.5% → 0.0% |   1 → 0 | `SystemDictionary::add_loader_constraint`  | `libjvm.dylib` |

##### `MemAllocator::allocate` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                             | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------- | -------------- |
|  +20.5% |    +9 | 91.7% → 96.4% | 44 → 53 | `CollectedHeap::array_allocate`    | `libjvm.dylib` |
|  -33.3% |    -1 |   6.3% → 3.6% |   3 → 2 | `InstanceKlass::allocate_instance` | `libjvm.dylib` |
| removed |    -1 |   2.1% → 0.0% |   1 → 0 | `InstanceKlass::allocate_objArray` | `libjvm.dylib` |

##### `InstanceKlass::allocate_objArray` (`libjvm.dylib`)

| Change | Delta |              % | Samples | Caller                     | Location       |
| -----: | ----: | -------------: | ------: | -------------------------- | -------------- |
| +13.0% |    +6 | 100.0% → 98.1% | 46 → 52 | `OptoRuntime::new_array_C` | `libjvm.dylib` |
|    new |    +1 |    0.0% → 1.9% |   0 → 1 | `_new_array_Java`          | `<unknown>`    |

##### `G1CollectedHeap::attempt_allocation_slow` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------- | -------------- |
| +160.0% |    +8 | 62.5% → 86.7% |  5 → 13 | `G1CollectedHeap::attempt_allocation` | `libjvm.dylib` |
|  -33.3% |    -1 | 37.5% → 13.3% |   3 → 2 | `G1CollectedHeap::mem_allocate`       | `libjvm.dylib` |

##### `G1FullGCCompactTask::G1CompactRegionClosure::apply` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                                | Location       |
| -----: | ----: | -----------: | ------: | ------------------------------------- | -------------- |
|    new |    +5 | 0.0% → 71.4% |   0 → 5 | `G1FullGCCompactTask::compact_region` | `libjvm.dylib` |
|    new |    +2 | 0.0% → 28.6% |   0 → 2 | `G1FullGCCompactTask::work`           | `libjvm.dylib` |

##### `G1FullGCCompactTask::work` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller              | Location       |
| -----: | ----: | ------------: | ------: | ------------------- | -------------- |
|    new |    +7 | 0.0% → 100.0% |   0 → 7 | `WorkerThread::run` | `libjvm.dylib` |

##### `_new_array_Java` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                  | Location                                                   |
| ------: | ----: | ------------: | ------: | ----------------------- | ---------------------------------------------------------- |
|   +7.0% |    +4 | 98.3% → 95.3% | 57 → 61 | `copyOf(Object[], int)` | `java.util.Arrays`                                         |
| +100.0% |    +1 |   1.7% → 3.1% |   1 → 2 | `findNearestCentroid()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `arrayof_oop_disjoint_arraycopy` (`<unknown>`)

| Change | Delta |              % | Samples | Caller                         | Location              |
| -----: | ----: | -------------: | ------: | ------------------------------ | --------------------- |
|  +6.8% |    +4 | 100.0% → 98.4% | 59 → 63 | `addAll(Collection)`           | `java.util.ArrayList` |
|    new |    +1 |    0.0% → 1.6% |   0 → 1 | `copyOf(Object[], int, Class)` | `java.util.Arrays`    |

##### `<init>(Collection)` (`java.util.ArrayList`)

| Change | Delta |              % | Samples | Caller                       | Location                                               |
| -----: | ----: | -------------: | ------: | ---------------------------- | ------------------------------------------------------ |
| +10.0% |    +9 | 100.0% → 99.0% | 90 → 99 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans`            |
|    new |    +1 |    0.0% → 1.0% |   0 → 1 | `<init>(JavaKMeans, Map)`    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `fork()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |      % | Samples | Caller      | Location                                               |
| ------: | ----: | -----: | ------: | ----------- | ------------------------------------------------------ |
| +225.0% |    +9 | 100.0% |  4 → 13 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `wrapAndCopyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

| Change | Delta |              % | Samples | Caller                                            | Location                              |
| -----: | ----: | -------------: | ------: | ------------------------------------------------- | ------------------------------------- |
| +40.0% |    +4 | 100.0% → 73.7% | 10 → 14 | `evaluateSequential(PipelineHelper, Spliterator)` | `java.util.stream.ReduceOps$ReduceOp` |
| +60.0% |    +3 |  50.0% → 42.1% |   5 → 8 | `evaluate(Spliterator, boolean, IntFunction)`     | `java.util.stream.AbstractPipeline`   |
|    new |    +1 |    0.0% → 5.3% |   0 → 1 | `evaluateSequential(PipelineHelper, Spliterator)` | `java.util.stream.FindOps$FindOp`     |

##### `tryCompensate(long, boolean)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % | Samples | Caller                                                    | Location                            |
| -----: | ----: | -----: | ------: | --------------------------------------------------------- | ----------------------------------- |
| +72.7% |    +8 | 100.0% | 11 → 19 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool` |

##### `push(ForkJoinTask, ForkJoinPool, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change | Delta |      % | Samples | Caller   | Location                            |
| ------: | ----: | -----: | ------: | -------- | ----------------------------------- |
| +266.7% |    +8 | 100.0% |  3 → 11 | `fork()` | `java.util.concurrent.ForkJoinTask` |

##### `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

| Change | Delta |      % | Samples | Caller                               | Location                            |
| -----: | ----: | -----: | ------: | ------------------------------------ | ----------------------------------- |
| +80.0% |    +8 | 100.0% | 10 → 18 | `wrapAndCopyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

| Change | Delta |      % |   Samples | Caller                   | Location                                                   |
| -----: | ----: | -----: | --------: | ------------------------ | ---------------------------------------------------------- |
|  +3.6% |    +6 | 100.0% | 168 → 174 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `toArray()` (`java.util.ArrayList`)

| Change | Delta |             % | Samples | Caller               | Location              |
| -----: | ----: | ------------: | ------: | -------------------- | --------------------- |
| +12.5% |   +11 | 49.7% → 54.1% | 88 → 99 | `<init>(Collection)` | `java.util.ArrayList` |
|  -5.6% |    -5 | 50.3% → 45.9% | 89 → 84 | `addAll(Collection)` | `java.util.ArrayList` |

##### `I2C/C2I adapters` (`<unknown>`)

| Change | Delta |            % | Samples | Caller     | Location                                    |
| -----: | ----: | -----------: | ------: | ---------- | ------------------------------------------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `run()`    | `java.util.concurrent.ForkJoinWorkerThread` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `<init>()` | `scala.collection.AbstractIterator`         |

##### `vtable stub` (`<unknown>`)

| Change | Delta |             % | Samples | Caller      | Location                                               |
| -----: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `CompilationPolicy::event` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                                 | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------ | -------------- |
| +500.0% |    +5 | 33.3% → 85.7% |   1 → 6 | `InterpreterRuntime::frequency_counter_overflow_inner` | `libjvm.dylib` |
|  -50.0% |    -1 | 66.7% → 14.3% |   2 → 1 | `Runtime1::counter_overflow`                           | `libjvm.dylib` |

##### `IndexSetIterator::advance_and_next` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                             | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------- | -------------- |
|     new |    +2 |  0.0% → 40.0% |   0 → 2 | `PhaseChaitin::Simplify`           | `libjvm.dylib` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseIFG::remove_node`            | `libjvm.dylib` |
|     new |    +1 |  0.0% → 20.0% |   0 → 1 | `PhaseChaitin::build_ifg_physical` | `libjvm.dylib` |
|     new |    +1 |  0.0% → 20.0% |   0 → 1 | `PhaseIFG::re_insert`              | `libjvm.dylib` |
|     new |    +1 |  0.0% → 20.0% |   0 → 1 | `PhaseIFG::effective_degree`       | `libjvm.dylib` |

##### `CompileBroker::compile_method_base` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                          | Location       |
| ------: | ----: | -----: | ------: | ------------------------------- | -------------- |
| +400.0% |    +4 | 100.0% |   1 → 5 | `CompileBroker::compile_method` | `libjvm.dylib` |

##### `CompileBroker::compile_method` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                          | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------- | -------------- |
| +400.0% |    +4 | 50.0% → 83.3% |   1 → 5 | `CompileBroker::compile_method` | `libjvm.dylib` |
| +400.0% |    +4 | 50.0% → 83.3% |   1 → 5 | `CompilationPolicy::event`      | `libjvm.dylib` |

##### `PhaseGVN::transform_no_reclaim` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                            | Location       |
| -----: | ----: | -----------: | ------: | --------------------------------- | -------------- |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `GraphKit::new_array`             | `libjvm.dylib` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `Parse::do_if`                    | `libjvm.dylib` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `GraphKit::array_element_address` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `GraphKit::make_load`             | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller              | Location       |
| -----: | ----: | -----: | ------: | ------------------- | -------------- |
| +16.7% |    +3 | 100.0% | 18 → 21 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `PhaseRemoveUseless::PhaseRemoveUseless` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller             | Location       |
| ------: | ----: | -----: | ------: | ------------------ | -------------- |
| +300.0% |    +3 | 100.0% |   1 → 4 | `Compile::Compile` | `libjvm.dylib` |

##### `Assembler::operand_valid_for_logical_immediate` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                            | Location       |
| -----: | ----: | -----------: | ------: | --------------------------------- | -------------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `State::_sub_Op_ConL`             | `libjvm.dylib` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `MacroAssembler::mov_immediate32` | `libjvm.dylib` |

##### `GraphBuilder::iterate_bytecodes_for_block` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                             | Location       |
| -----: | ----: | ------------: | ------: | ---------------------------------- | -------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `GraphBuilder::iterate_all_blocks` | `libjvm.dylib` |

##### `GraphBuilder::iterate_all_blocks` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                       | Location       |
| -----: | ----: | ------------: | ------: | ---------------------------- | -------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `GraphBuilder::GraphBuilder` | `libjvm.dylib` |

##### `Compilation::build_hir` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                             | Location       |
| -----: | ----: | -----: | ------: | ---------------------------------- | -------------- |
| +50.0% |    +2 | 100.0% |   4 → 6 | `Compilation::compile_java_method` | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                            | Location       |
| -----: | ----: | -----: | ------: | --------------------------------- | -------------- |
| +66.7% |    +2 | 100.0% |   3 → 5 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `Compile::disconnect_useless_nodes` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                                   | Location       |
| ------: | ----: | -----: | ------: | ---------------------------------------- | -------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |

##### `PhaseIFG::effective_degree` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                               | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `PhaseIFG::Compute_Effective_Degree` | `libjvm.dylib` |

##### `PhaseIFG::Compute_Effective_Degree` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                            | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `ciEnv::get_klass_by_index_impl` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                            | Location       |
| -----: | ----: | -----------: | ------: | --------------------------------- | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `ciEnv::get_method_by_index_impl` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `ciBytecodeStream::get_klass`     | `libjvm.dylib` |

##### `ciEnv::get_method_by_index_impl` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                         | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------ | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `ciBytecodeStream::get_method` | `libjvm.dylib` |

##### `PhaseCFG::schedule_late` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                         | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------ | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |

##### `PhaseIFG::re_insert` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                 | Location       |
| -----: | ----: | ------------: | ------: | ---------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `PhaseChaitin::Select` | `libjvm.dylib` |

##### `PhaseChaitin::Select` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                            | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller                  | Location                                                   |
| -----: | ----: | -----: | --------: | ----------------------- | ---------------------------------------------------------- |
| -28.9% |  -275 | 100.0% | 951 → 676 | `findNearestCentroid()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % |       Samples | Caller                 | Location                            |
| -----: | ----: | -----: | ------------: | ---------------------- | ----------------------------------- |
| -12.1% |  -146 | 100.0% | 1,207 → 1,061 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |     Samples | Caller        | Location                                                  |
| -----: | ----: | -----: | ----------: | ------------- | --------------------------------------------------------- |
| -11.3% |  -124 | 100.0% | 1,099 → 975 | `vectorSum()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |      % |       Samples | Caller                 | Location                            |
| -----: | ----: | -----: | ------------: | ---------------------- | ----------------------------------- |
|  -2.0% |   -82 | 100.0% | 4,167 → 4,085 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |       Samples | Caller              | Location                                                  |
| -----: | ----: | -----: | ------------: | ------------------- | --------------------------------------------------------- |
|  -4.6% |   -76 | 100.0% | 1,665 → 1,589 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |       Samples | Caller              | Location                                                  |
| -----: | ----: | -----: | ------------: | ------------------- | --------------------------------------------------------- |
|  -4.5% |   -75 |  99.9% | 1,665 → 1,590 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  -4.5% |   -75 | 100.0% | 1,666 → 1,591 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`    |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |              % |       Samples | Caller              | Location                                                   |
| ------: | ----: | -------------: | ------------: | ------------------- | ---------------------------------------------------------- |
|   -4.6% |   -65 | 99.9% → 100.0% | 1,418 → 1,353 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |    -1 |    0.1% → 0.0% |         1 → 0 | `break_deopt`       | `<unknown>`                                                |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |      % |       Samples | Caller      | Location                                               |
| -----: | ----: | -----: | ------------: | ----------- | ------------------------------------------------------ |
|  -1.5% |   -65 | 100.0% | 4,424 → 4,359 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |      % |       Samples | Caller   | Location                            |
| -----: | ----: | -----: | ------------: | -------- | ----------------------------------- |
|  -1.4% |   -64 | 100.0% | 4,423 → 4,359 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % |       Samples | Caller                                                    | Location                                      |
| -----: | ----: | ------------: | ------------: | --------------------------------------------------------- | --------------------------------------------- |
| -12.1% |  -143 | 25.5% → 22.6% | 1,178 → 1,035 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
|  -2.0% |   -82 | 90.1% → 89.4% | 4,167 → 4,085 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  -1.2% |   -55 |        100.0% | 4,625 → 4,570 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  -0.2% |    -2 | 24.1% → 24.4% | 1,115 → 1,113 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`           |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |      % |       Samples | Caller                                   | Location                            |
| -----: | ----: | -----: | ------------: | ---------------------------------------- | ----------------------------------- |
|  -1.2% |   -54 | 100.0% | 4,626 → 4,572 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % |       Samples | Caller                              | Location                            |
| -----: | ----: | -----: | ------------: | ----------------------------------- | ----------------------------------- |
|  -1.0% |   -47 | 100.0% | 4,637 → 4,590 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change | Delta |      % |       Samples | Caller   | Location                             |
| -----: | ----: | -----: | ------------: | -------- | ------------------------------------ |
|  -1.0% |   -45 | 100.0% | 4,587 → 4,542 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change | Delta |      % |       Samples | Caller     | Location                            |
| -----: | ----: | -----: | ------------: | ---------- | ----------------------------------- |
|  -0.9% |   -42 | 100.0% | 4,587 → 4,545 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `doubleValue()` (`java.lang.Double`)

| Change | Delta |             % | Samples | Caller                           | Location                                                   |
| -----: | ----: | ------------: | ------: | -------------------------------- | ---------------------------------------------------------- |
| -34.7% |   -33 | 82.6% → 83.8% | 95 → 62 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| -40.0% |    -8 | 17.4% → 16.2% | 20 → 12 | `distance(Double[], Double[])`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `get(int)` (`java.util.ArrayList`)

| Change | Delta |             % | Samples | Caller                   | Location                                                   |
| -----: | ----: | ------------: | ------: | ------------------------ | ---------------------------------------------------------- |
| -43.8% |   -42 | 50.0% → 31.6% | 96 → 54 | `vectorSum()`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| +65.2% |   +30 | 24.0% → 44.4% | 46 → 76 | `findNearestCentroid()`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -18.0% |    -9 | 26.0% → 24.0% | 50 → 41 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change | Delta |             % | Samples | Caller              | Location                                                               |
| ------: | ----: | ------------: | ------: | ------------------- | ---------------------------------------------------------------------- |
| removed |   -20 | 100.0% → 0.0% |  20 → 0 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111f208` |

##### `elementData(int)` (`java.util.ArrayList`)

| Change | Delta |      % |   Samples | Caller     | Location              |
| -----: | ----: | -----: | --------: | ---------- | --------------------- |
| -11.5% |   -19 | 100.0% | 165 → 146 | `get(int)` | `java.util.ArrayList` |

##### `signalWaiters()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |              % | Samples | Caller                 | Location                            |
| ------: | ----: | -------------: | ------: | ---------------------- | ----------------------------------- |
|  -29.1% |   -16 | 98.2% → 100.0% | 55 → 39 | `setDone()`            | `java.util.concurrent.ForkJoinTask` |
| removed |    -1 |    1.8% → 0.0% |   1 → 0 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `setDone()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |      % | Samples | Caller     | Location                            |
| -----: | ----: | -----: | ------: | ---------- | ----------------------------------- |
| -26.8% |   -15 | 100.0% | 56 → 41 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % |   Samples | Caller                     | Location                                               |
| -----: | ----: | -----: | --------: | -------------------------- | ------------------------------------------------------ |
|  -1.7% |   -13 | 100.0% | 784 → 771 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % |   Samples | Caller              | Location                                               |
| -----: | ----: | -----: | --------: | ------------------- | ------------------------------------------------------ |
|  -1.1% |    -9 | 100.0% | 790 → 781 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % |   Samples | Caller              | Location                                               |
| -----: | ----: | -----: | --------: | ------------------- | ------------------------------------------------------ |
|  -1.1% |    -9 | 100.0% | 790 → 781 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  -1.1% |    -9 | 100.0% | 790 → 781 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |              % |       Samples | Caller              | Location                                                   |
| -----: | ----: | -------------: | ------------: | ------------------- | ---------------------------------------------------------- |
|  -0.4% |    -7 | 100.0% → 99.9% | 1,861 → 1,854 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -0.3% |    -5 |         100.0% | 1,861 → 1,856 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |

##### `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |      % | Samples | Caller                  | Location                                  |
| -----: | ----: | -----: | ------: | ----------------------- | ----------------------------------------- |
| -71.4% |    -5 | 100.0% |   7 → 2 | `executeOperation(int)` | `org.renaissance.harness.ExecutionDriver` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % |   Samples | Caller                   | Location                                                               |
| -----: | ----: | -----: | --------: | ------------------------ | ---------------------------------------------------------------------- |
|  -1.0% |    -4 | 100.0% | 389 → 385 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |             % | Samples | Caller      | Location                                               |
| ------: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`)

| Change | Delta |      % |   Samples | Caller                | Location            |
| -----: | ----: | -----: | --------: | --------------------- | ------------------- |
|  -0.5% |    -2 | 100.0% | 389 → 387 | `forEach(BiConsumer)` | `java.util.HashMap` |

##### `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`)

| Change | Delta |      % | Samples | Caller        | Location                           |
| -----: | ----: | -----: | ------: | ------------- | ---------------------------------- |
| -22.2% |    -2 | 100.0% |   9 → 7 | `accept(int)` | `java.util.stream.IntPipeline$1$1` |

##### `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % | Samples | Caller       | Location                                            |
| -----: | ----: | -----: | ------: | ------------ | --------------------------------------------------- |
| -22.2% |    -2 | 100.0% |   9 → 7 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda` |

##### `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`)

| Change | Delta |      % | Samples | Caller               | Location                                  |
| -----: | ----: | -----: | ------: | -------------------- | ----------------------------------------- |
| -28.6% |    -2 | 100.0% |   7 → 5 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `$anonfun$1(int)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change | Delta |             % | Samples | Caller                       | Location                                  |
| ------: | ----: | ------------: | ------: | ---------------------------- | ----------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `$anonfun$adapted$1(Object)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `extractResource(String, Path)` (`org.renaissance.core.ResourceUtils`)

| Change | Delta |      % | Samples | Caller                             | Location                             |
| -----: | ----: | -----: | ------: | ---------------------------------- | ------------------------------------ |
| -11.1% |    -1 | 100.0% |   9 → 8 | `extractResources(Iterable, Path)` | `org.renaissance.core.ResourceUtils` |

##### `G1EvacuateRegionsBaseTask::work` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller              | Location       |
| -----: | ----: | -----: | ------: | ------------------- | -------------- |
| -46.9% |   -15 | 100.0% | 32 → 17 | `WorkerThread::run` | `libjvm.dylib` |

##### `G1ParEvacuateFollowersClosure::do_void` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                         | Location       |
| -----: | ----: | -----: | ------: | ---------------------------------------------- | -------------- |
| -56.0% |   -14 | 100.0% | 25 → 11 | `G1EvacuateRegionsTask::evacuate_live_objects` | `libjvm.dylib` |

##### `G1EvacuateRegionsTask::evacuate_live_objects` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                            | Location       |
| -----: | ----: | -----: | ------: | --------------------------------- | -------------- |
| -56.0% |   -14 | 100.0% | 25 → 11 | `G1EvacuateRegionsBaseTask::work` | `libjvm.dylib` |

##### `G1ParEvacuateFollowersClosure::offer_termination` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                   | Location       |
| -----: | ----: | -----: | ------: | ---------------------------------------- | -------------- |
| -75.0% |   -12 | 100.0% |  16 → 4 | `G1ParEvacuateFollowersClosure::do_void` | `libjvm.dylib` |

##### `pthread_jit_write_protect_np` (`libsystem_pthread.dylib`)

|  Change | Delta |             % | Samples | Caller                     | Location       |
| ------: | ----: | ------------: | ------: | -------------------------- | -------------- |
| removed |    -5 |  20.8% → 0.0% |   5 → 0 | `OptoRuntime::new_array_C` | `libjvm.dylib` |
|  +25.0% |    +2 | 33.3% → 66.7% |  8 → 10 | `Unsafe_Park`              | `libjvm.dylib` |
|  -50.0% |    -2 | 16.7% → 13.3% |   4 → 2 | `Unsafe_Unpark`            | `libjvm.dylib` |
| removed |    -2 |   8.3% → 0.0% |   2 → 0 | `Unsafe_AllocateInstance`  | `libjvm.dylib` |
|  -50.0% |    -1 |   8.3% → 6.7% |   2 → 1 | `_new_array_Java`          | `<unknown>`    |

##### `Mutex::lock_without_safepoint_check` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                  | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------- | -------------- |
|  -75.0% |    -3 | 30.8% → 14.3% |   4 → 1 | `DefaultICProtectionBehaviour::lock`    | `libjvm.dylib` |
|  -50.0% |    -1 | 15.4% → 14.3% |   2 → 1 | `Events::log_deopt_message`             | `libjvm.dylib` |
|  -20.0% |    -1 | 38.5% → 57.1% |   5 → 4 | `TaskTerminator::offer_termination`     | `libjvm.dylib` |
| removed |    -1 |   7.7% → 0.0% |   1 → 0 | `DirectivesStack::getMatchingDirective` | `libjvm.dylib` |

##### `G1ParScanThreadState::steal_and_trim_queue` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                   | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | -------------- |
| removed |    -6 | 100.0% → 0.0% |   6 → 0 | `G1ParEvacuateFollowersClosure::do_void` | `libjvm.dylib` |

##### `CodeCacheUnloadingTask::work` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                         | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------ | -------------- |
| removed |    -6 | 100.0% → 0.0% |   6 → 0 | `G1ParallelCleaningTask::work` | `libjvm.dylib` |

##### `G1ParallelCleaningTask::work` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller              | Location       |
| ------: | ----: | ------------: | ------: | ------------------- | -------------- |
| removed |    -6 | 100.0% → 0.0% |   6 → 0 | `WorkerThread::run` | `libjvm.dylib` |

##### `tlv_get_addr` (`libdyld.dylib`)

|  Change | Delta |              % | Samples | Caller                                           | Location       |
| ------: | ----: | -------------: | ------: | ------------------------------------------------ | -------------- |
| removed |    -1 |   16.7% → 0.0% |   1 → 0 | `SafepointSynchronize::begin`                    | `libjvm.dylib` |
| +100.0% |    +1 | 16.7% → 100.0% |   1 → 2 | `arrayof_oop_disjoint_arraycopy`                 | `<unknown>`    |
| removed |    -1 |   16.7% → 0.0% |   1 → 0 | `PhaseChaitin::build_ifg_physical`               | `libjvm.dylib` |
| removed |    -1 |   16.7% → 0.0% |   1 → 0 | `TypeInstPtr::xmeet_helper`                      | `libjvm.dylib` |
| removed |    -1 |   16.7% → 0.0% |   1 → 0 | `PhaseChaitin::stretch_base_pointer_live_ranges` | `libjvm.dylib` |

##### `TaskTerminator::offer_termination` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                             | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- | -------------- |
|  -75.0% |   -12 | 94.1% → 30.8% |  16 → 4 | `G1ParEvacuateFollowersClosure::offer_termination` | `libjvm.dylib` |
| +800.0% |    +8 |  5.9% → 69.2% |   1 → 9 | `G1FullGCMarker::complete_marking`                 | `libjvm.dylib` |

##### `G1ParScanThreadState::do_partial_array` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                          | Location       |
| -----: | ----: | -----: | ------: | ----------------------------------------------- | -------------- |
| -66.7% |    -4 | 100.0% |   6 → 2 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib` |

##### `AllocateHeap` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                       | Location       |
| ------: | ----: | -----------: | ------: | -------------------------------------------- | -------------- |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `G1PLABAllocator::G1PLABAllocator`           | `libjvm.dylib` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `G1ParScanThreadState::G1ParScanThreadState` | `libjvm.dylib` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `PlatformMonitor::PlatformMonitor`           | `libjvm.dylib` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `G1ParScanThreadStateSet::state_for_worker`  | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

| Change | Delta |      % |  Samples | Caller             | Location       |
| -----: | ----: | -----: | -------: | ------------------ | -------------- |
|  -3.9% |    -4 | 100.0% | 102 → 98 | `Thread::call_run` | `libjvm.dylib` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

| Change | Delta |      % | Samples | Caller                              | Location                  |
| -----: | ----: | -----: | ------: | ----------------------------------- | ------------------------- |
| -10.3% |    -3 | 100.0% | 29 → 26 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `_pthread_mutex_firstfit_lock_slow` (`libsystem_pthread.dylib`)

| Change | Delta |             % | Samples | Caller                                | Location                  |
| -----: | ----: | ------------: | ------: | ------------------------------------- | ------------------------- |
| -46.2% |    -6 | 44.8% → 26.9% |  13 → 7 | `Mutex::lock_without_safepoint_check` | `libjvm.dylib`            |
| +75.0% |    +6 | 27.6% → 53.8% |  8 → 14 | `Mutex::lock`                         | `libjvm.dylib`            |
| -66.7% |    -4 |  20.7% → 7.7% |   6 → 2 | `_pthread_cond_wait`                  | `libsystem_pthread.dylib` |
| +50.0% |    +1 |  6.9% → 11.5% |   2 → 3 | `ThreadCritical::ThreadCritical`      | `libjvm.dylib`            |

##### `G1AllocRegion::retire_internal` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                       | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------- | -------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `MutatorAllocRegion::retire` | `libjvm.dylib` |

##### `MutatorAllocRegion::retire` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                     | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | -------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `G1CollectedHeap::attempt_allocation_slow` | `libjvm.dylib` |

##### `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                                              | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------- | -------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::do_heap_region` | `libjvm.dylib` |

##### `G1FullGCResetMetadataTask::G1ResetMetadataClosure::do_heap_region` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                           | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------- | -------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `HeapRegionManager::par_iterate` | `libjvm.dylib` |

##### `defineClass(String, byte[], int, int, CodeSource)` (`java.security.SecureClassLoader`)

| Change | Delta |      % | Samples | Caller                          | Location                  |
| -----: | ----: | -----: | ------: | ------------------------------- | ------------------------- |
| -46.2% |    -6 | 100.0% |  13 → 7 | `defineClass(String, Resource)` | `java.net.URLClassLoader` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

| Change | Delta |      % | Samples | Caller                                                    | Location                |
| -----: | ----: | -----: | ------: | --------------------------------------------------------- | ----------------------- |
| -41.7% |    -5 | 100.0% |  12 → 7 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `defineClass(String, byte[], int, int, ProtectionDomain)` (`java.lang.ClassLoader`)

| Change | Delta |      % | Samples | Caller                                              | Location                          |
| -----: | ----: | -----: | ------: | --------------------------------------------------- | --------------------------------- |
| -41.7% |    -5 | 100.0% |  12 → 7 | `defineClass(String, byte[], int, int, CodeSource)` | `java.security.SecureClassLoader` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

| Change | Delta |      % |   Samples | Caller                              | Location                                    |
| -----: | ----: | -----: | --------: | ----------------------------------- | ------------------------------------------- |
|  -1.0% |    -4 | 100.0% | 389 → 385 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `getRawResult()` (`java.util.concurrent.RecursiveTask`)

|  Change | Delta |             % | Samples | Caller   | Location                            |
| ------: | ----: | ------------: | ------: | -------- | ----------------------------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `fill()` (`java.util.zip.ZipFile$ZipFileInflaterInputStream`)

|  Change | Delta |             % | Samples | Caller                   | Location                            |
| ------: | ----: | ------------: | ------: | ------------------------ | ----------------------------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `read(byte[], int, int)` | `java.util.zip.InflaterInputStream` |

##### `checkIndex(int, int)` (`java.util.Objects`)

| Change | Delta |      % | Samples | Caller     | Location              |
| -----: | ----: | -----: | ------: | ---------- | --------------------- |
| -11.5% |    -3 | 100.0% | 26 → 23 | `get(int)` | `java.util.ArrayList` |

##### `zero_blocks` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                              | Location                                                   |
| ------: | ----: | ------------: | ------: | ----------------------------------- | ---------------------------------------------------------- |
|  -30.2% |   -13 | 62.3% → 52.6% | 43 → 30 | `merge(Object, Object, BiFunction)` | `java.util.HashMap`                                        |
| +200.0% |    +6 |  4.3% → 15.8% |   3 → 9 | `findNearestCentroid()`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -15.0% |    -3 | 29.0% → 29.8% | 20 → 17 | `grow(int)`                         | `java.util.ArrayList`                                      |
| removed |    -1 |   1.4% → 0.0% |   1 → 0 | `<init>(Collection)`                | `java.util.ArrayList`                                      |
| removed |    -1 |   1.4% → 0.0% |   1 → 0 | `copyOf(Object[], int, Class)`      | `java.util.Arrays`                                         |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

| Change | Delta |      % |  Samples | Caller                          | Location       |
| -----: | ----: | -----: | -------: | ------------------------------- | -------------- |
|  -5.9% |    -6 | 100.0% | 102 → 96 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller             | Location       |
| -----: | ----: | -----: | ------: | ------------------ | -------------- |
| -19.0% |    -4 | 100.0% | 21 → 17 | `Compile::Compile` | `libjvm.dylib` |

##### `PhaseOutput::Output` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller              | Location       |
| -----: | ----: | -----: | ------: | ------------------- | -------------- |
| -57.1% |    -4 | 100.0% |   7 → 3 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------- | -------------- |
|  -3.6% |    -3 | 100.0% | 84 → 81 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                   | Location       |
| -----: | ----: | -----: | ------: | ------------------------ | -------------- |
| -60.0% |    -3 | 100.0% |   5 → 2 | `PhaseIterGVN::optimize` | `libjvm.dylib` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                            | Location       |
| -----: | ----: | -----: | ------: | --------------------------------- | -------------- |
| -75.0% |    -3 | 100.0% |   4 → 1 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseOutput::fill_buffer` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                | Location       |
| -----: | ----: | -----: | ------: | --------------------- | -------------- |
| -75.0% |    -3 | 100.0% |   4 → 1 | `PhaseOutput::Output` | `libjvm.dylib` |

##### `ciMethod::get_flow_analysis` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                        | Location       |
| ------: | ----: | -----------: | ------: | ----------------------------- | -------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `InlineTree::check_can_parse` | `libjvm.dylib` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `InlineTree::ok_to_inline`    | `libjvm.dylib` |

##### `Matcher::match` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller              | Location       |
| -----: | ----: | -----: | ------: | ------------------- | -------------- |
| -50.0% |    -3 | 100.0% |   6 → 3 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `CompileQueue::get` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------- | -------------- |
| -11.8% |    -2 | 100.0% | 17 → 15 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `LinearScanWalker::alloc_free_reg` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                               | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `LinearScanWalker::activate_current` | `libjvm.dylib` |

##### `IntervalWalker::walk_to` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                           | Location       |
| -----: | ----: | -----: | ------: | -------------------------------- | -------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `LinearScan::allocate_registers` | `libjvm.dylib` |

##### `LinearScan::allocate_registers` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                       | Location       |
| -----: | ----: | -----: | ------: | ---------------------------- | -------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `LinearScan::do_linear_scan` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                    | Location       |
| -----: | ----: | ------------: | ------: | ------------------------- | -------------- |
| -37.5% |    -3 | 66.7% → 50.0% |   8 → 5 | `Compile::Optimize`       | `libjvm.dylib` |
| +25.0% |    +1 | 33.3% → 50.0% |   4 → 5 | `Compile::optimize_loops` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                       | Location       |
| -----: | ----: | -----: | ------: | ---------------------------- | -------------- |
|  -3.2% |    -2 | 100.0% | 63 → 61 | `C2Compiler::compile_method` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller             | Location       |
| -----: | ----: | -----: | ------: | ------------------ | -------------- |
|  -5.9% |    -2 | 100.0% | 34 → 32 | `Compile::Compile` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_tree` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                               | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseCCP::push_child_nodes_to_worklist` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller              | Location       |
| ------: | ----: | ------------: | ------: | ------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `PhaseCCP::analyze` | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                 | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------------- | -------------- |
|  -66.7% |    -2 | 60.0% → 33.3% |   3 → 1 | `Compile::Optimize`                    | `libjvm.dylib` |
| +100.0% |    +1 | 20.0% → 66.7% |   1 → 2 | `PhaseMacroExpand::expand_macro_nodes` | `libjvm.dylib` |
| removed |    -1 |  20.0% → 0.0% |   1 → 0 | `PhaseIdealLoop::optimize`             | `libjvm.dylib` |

##### `PhiNode::Ideal` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                        | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |

#### Callees

Callees with the largest change in contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `Unsafe_Park` (`libjvm.dylib`)

|  Change | Delta |           % |       Samples | Callee                                         | Location                  |
| ------: | ----: | ----------: | ------------: | ---------------------------------------------- | ------------------------- |
|  +30.5% |  +308 |       98.6% | 1,010 → 1,318 | `Parker::park`                                 | `libjvm.dylib`            |
|  +25.0% |    +2 | 0.8% → 0.7% |        8 → 10 | `pthread_jit_write_protect_np`                 | `libsystem_pthread.dylib` |
| removed |    -1 | 0.1% → 0.0% |         1 → 0 | `JavaThread::threadObj`                        | `libjvm.dylib`            |
|  -33.3% |    -1 | 0.3% → 0.1% |         3 → 2 | `JavaThreadParkedState::JavaThreadParkedState` | `libjvm.dylib`            |
|     new |    +1 | 0.0% → 0.1% |         0 → 1 | `pthread_mutex_unlock`                         | `libsystem_pthread.dylib` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|  Change | Delta |             % |       Samples | Callee                                | Location       |
| ------: | ----: | ------------: | ------------: | ------------------------------------- | -------------- |
|  +30.6% |  +313 | 99.8% → 99.9% | 1,024 → 1,337 | `Unsafe_Park`                         | `libjvm.dylib` |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `java_lang_Thread::set_thread_status` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 0.1% |         0 → 1 | `os::current_thread_enable_wx`        | `libjvm.dylib` |

##### `Parker::park` (`libjvm.dylib`)

|  Change | Delta |             % |       Samples | Callee                           | Location                  |
| ------: | ----: | ------------: | ------------: | -------------------------------- | ------------------------- |
|  +30.2% |  +304 | 99.8% → 99.5% | 1,008 → 1,312 | `__psynch_cvwait`                | `libsystem_kernel.dylib`  |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `__gettimeofday`                 | `libsystem_kernel.dylib`  |
| +100.0% |    +1 |   0.1% → 0.2% |         1 → 2 | `_pthread_cond_wait`             | `libsystem_pthread.dylib` |
|     new |    +1 |   0.0% → 0.1% |         0 → 1 | `_pthread_mutex_droplock`        | `libsystem_pthread.dylib` |
|     new |    +1 |   0.0% → 0.1% |         0 → 1 | `JavaFrameAnchor::make_walkable` | `libjvm.dylib`            |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

| Change | Delta |              % |       Samples | Callee                | Location                   |
| -----: | ----: | -------------: | ------------: | --------------------- | -------------------------- |
| +28.7% |  +288 | 99.9% → 100.0% | 1,002 → 1,290 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % |   Samples | Callee                              | Location                                 |
| ------: | ----: | ------------: | --------: | ----------------------------------- | ---------------------------------------- |
|  +55.9% |  +257 | 94.3% → 93.2% | 460 → 717 | `park()`                            | `java.util.concurrent.locks.LockSupport` |
| +100.0% |   +24 |   4.9% → 6.2% |   24 → 48 | `parkUntil(long)`                   | `java.util.concurrent.locks.LockSupport` |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `setCurrentBlocker(Object)`         | `java.util.concurrent.locks.LockSupport` |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `compareAndExchangeCtl(long, long)` | `java.util.concurrent.ForkJoinPool`      |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

| Change | Delta |            % |       Samples | Callee                              | Location                            |
| -----: | ----: | -----------: | ------------: | ----------------------------------- | ----------------------------------- |
|  +4.5% |  +231 |       100.0% | 5,132 → 5,363 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |
|    new |    +2 | 0.0% → <0.1% |         0 → 2 | `I2C/C2I adapters`                  | `<unknown>`                         |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |             % |       Samples | Callee                                           | Location                            |
| -----: | ----: | ------------: | ------------: | ------------------------------------------------ | ----------------------------------- |
| +57.6% |  +281 |  9.5% → 14.3% |     488 → 769 | `awaitWork(ForkJoinPool$WorkQueue)`              | `java.util.concurrent.ForkJoinPool` |
|  -1.0% |   -47 | 90.4% → 85.6% | 4,637 → 4,590 | `scan(ForkJoinPool$WorkQueue, int, int)`         | `java.util.concurrent.ForkJoinPool` |
|    new |    +1 |  0.0% → <0.1% |         0 → 1 | `InterpreterRuntime::frequency_counter_overflow` | `libjvm.dylib`                      |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % |   Samples | Callee                              | Location              |
| ------: | ----: | ------------: | --------: | ----------------------------------- | --------------------- |
|  +34.4% |   +42 | 27.5% → 32.7% | 122 → 164 | `add(Object)`                       | `java.util.ArrayList` |
|  -18.0% |    -9 |  11.3% → 8.2% |   50 → 41 | `get(int)`                          | `java.util.ArrayList` |
|   +3.6% |    +6 | 37.9% → 34.7% | 168 → 174 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`   |
| removed |    -1 |   0.2% → 0.0% |     1 → 0 | `_new_instance_Java`                | `<unknown>`           |
| removed |    -1 |   0.2% → 0.0% |     1 → 0 | `resolve_opt_virtual_call`          | `<unknown>`           |

##### `grow(int)` (`java.util.ArrayList`)

| Change | Delta |             % | Samples | Callee                            | Location                          |
| -----: | ----: | ------------: | ------: | --------------------------------- | --------------------------------- |
| +45.2% |   +14 | 34.4% → 33.1% | 31 → 45 | `copyOf(Object[], int)`           | `java.util.Arrays`                |
| -38.5% |    -5 |  14.4% → 5.9% |  13 → 8 | `arrayof_jint_disjoint_arraycopy` | `<unknown>`                       |
| -15.0% |    -3 | 22.2% → 12.5% | 20 → 17 | `zero_blocks`                     | `<unknown>`                       |
| +50.0% |    +1 |          2.2% |   2 → 3 | `newLength(int, int, int)`        | `jdk.internal.util.ArraysSupport` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

| Change | Delta |             % |  Samples | Callee   | Location              |
| -----: | ----: | ------------: | -------: | -------- | --------------------- |
| +52.2% |   +36 | 57.5% → 63.6% | 69 → 105 | `grow()` | `java.util.ArrayList` |

##### `add(Object)` (`java.util.ArrayList`)

| Change | Delta |              % |   Samples | Callee                       | Location              |
| -----: | ----: | -------------: | --------: | ---------------------------- | --------------------- |
| +37.5% |   +45 | 98.4% → 100.0% | 120 → 165 | `add(Object, Object[], int)` | `java.util.ArrayList` |

##### `grow()` (`java.util.ArrayList`)

| Change | Delta |             % |  Samples | Callee      | Location              |
| -----: | ----: | ------------: | -------: | ----------- | --------------------- |
| +70.5% |   +43 | 88.4% → 99.0% | 61 → 104 | `grow(int)` | `java.util.ArrayList` |

##### `parkUntil(long)` (`java.util.concurrent.locks.LockSupport`)

|  Change | Delta |      % | Samples | Callee                | Location                   |
| ------: | ----: | -----: | ------: | --------------------- | -------------------------- |
| +100.0% |   +24 | 100.0% | 24 → 48 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change | Delta |            % | Samples | Callee                                                                                       | Location                                  |
| -----: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
|    new |   +19 | 0.0% → 79.2% |  0 → 19 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
|    new |    +5 | 0.0% → 20.8% |   0 → 5 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change | Delta |             % |   Samples | Callee                            | Location    |
| -----: | ----: | ------------: | --------: | --------------------------------- | ----------- |
|  +6.9% |   +10 | 69.7% → 68.0% | 145 → 155 | `arrayof_jint_disjoint_arraycopy` | `<unknown>` |
|  +7.0% |    +4 | 27.4% → 26.8% |   57 → 61 | `_new_array_Java`                 | `<unknown>` |

##### `G1FullGCMarker::complete_marking` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                                          | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------- | -------------- |
|  +60.0% |    +9 | 55.6% → 51.1% | 15 → 24 | `G1FullGCMarker::follow_marking_stacks`                         | `libjvm.dylib` |
| +800.0% |    +8 |  3.7% → 19.1% |   1 → 9 | `TaskTerminator::offer_termination`                             | `libjvm.dylib` |
|  +22.2% |    +2 | 33.3% → 23.4% |  9 → 11 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` | `libjvm.dylib` |
| +100.0% |    +1 |   3.7% → 4.3% |   1 → 2 | `G1FullGCMarker::mark_object`                                   | `libjvm.dylib` |

##### `G1FullGCMarkTask::work` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                             | Location       |
| -----: | ----: | -----: | ------: | ---------------------------------- | -------------- |
| +74.1% |   +20 | 100.0% | 27 → 47 | `G1FullGCMarker::complete_marking` | `libjvm.dylib` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |             % |   Samples | Callee               | Location              |
| -----: | ----: | ------------: | --------: | -------------------- | --------------------- |
| +10.0% |    +9 | 33.3% → 35.0% |   90 → 99 | `<init>(Collection)` | `java.util.ArrayList` |
|  +2.2% |    +4 | 66.7% → 65.0% | 180 → 184 | `addAll(Collection)` | `java.util.ArrayList` |

##### `signalWork()` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % | Samples | Callee           | Location                                 |
| ------: | ----: | ------------: | ------: | ---------------- | ---------------------------------------- |
| +300.0% |   +12 | 80.0% → 88.9% |  4 → 16 | `unpark(Thread)` | `java.util.concurrent.locks.LockSupport` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`)

| Change | Delta |              % |   Samples | Callee                       | Location                                    |
| -----: | ----: | -------------: | --------: | ---------------------------- | ------------------------------------------- |
|  +4.8% |   +13 | 99.3% → 100.0% | 270 → 283 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda`)

| Change | Delta |            % | Samples | Callee                           | Location                                  |
| -----: | ----: | -----------: | ------: | -------------------------------- | ----------------------------------------- |
|    new |    +6 | 0.0% → 75.0% |   0 → 6 | `setUpBeforeAll$$anonfun$1(Map)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `rowToArray$1(Map)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |            % | Samples | Callee              | Location                           |
| -----: | ----: | -----------: | ------: | ------------------- | ---------------------------------- |
|    new |    +3 | 0.0% → 50.0% |   0 → 3 | `<clinit>()`        | `scala.Predef$`                    |
|    new |    +2 | 0.0% → 33.3% |   0 → 2 | `map(Function1)`    | `scala.collection.immutable.Range` |
|    new |    +1 | 0.0% → 16.7% |   0 → 1 | `loadClass(String)` | `java.lang.ClassLoader`            |

##### `setUpBeforeAll$$anonfun$1(Map)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |             % | Samples | Callee              | Location                                  |
| -----: | ----: | ------------: | ------: | ------------------- | ----------------------------------------- |
|    new |    +6 | 0.0% → 100.0% |   0 → 6 | `rowToArray$1(Map)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `lambda$toCsvRows$2(String[], Function, String)` (`org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`)

| Change | Delta |             % | Samples | Callee          | Location                                          |
| -----: | ----: | ------------: | ------: | --------------- | ------------------------------------------------- |
|    new |    +6 | 0.0% → 100.0% |   0 → 6 | `apply(Object)` | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda` |

##### `apply(Object)` (`org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter$$Lambda.0x0000007001123bf8`)

| Change | Delta |             % | Samples | Callee                                           | Location                                                           |
| -----: | ----: | ------------: | ------: | ------------------------------------------------ | ------------------------------------------------------------------ |
|    new |    +6 | 0.0% → 100.0% |   0 → 6 | `lambda$toCsvRows$2(String[], Function, String)` | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter` |

##### `toCsvRows(Function)` (`org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`)

| Change | Delta |             % | Samples | Callee               | Location                             |
| -----: | ----: | ------------: | ------: | -------------------- | ------------------------------------ |
|    new |    +6 | 0.0% → 100.0% |   0 → 6 | `collect(Collector)` | `java.util.stream.ReferencePipeline` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |             % |   Samples | Callee                           | Location                                                   |
| ------: | ----: | ------------: | --------: | -------------------------------- | ---------------------------------------------------------- |
|   +1.1% |    +6 | 99.2% → 99.4% | 523 → 529 | `invoke()`                       | `java.util.concurrent.ForkJoinTask`                        |
| removed |    -1 |   0.2% → 0.0% |     1 → 0 | `<init>(JavaKMeans, List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|     new |    +1 |   0.0% → 0.2% |     0 → 1 | `<init>(JavaKMeans, Map)`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`)

| Change | Delta |      % |   Samples | Callee                         | Location                                    |
| -----: | ----: | -----: | --------: | ------------------------------ | ------------------------------------------- |
|  +0.9% |    +5 | 100.0% | 527 → 532 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |              % | Samples | Callee                        | Location                                                           |
| -----: | ----: | -------------: | ------: | ----------------------------- | ------------------------------------------------------------------ |
|    new |    +6 |   0.0% → 42.9% |   0 → 6 | `toCsvRows(Function)`         | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter` |
| -11.1% |    -1 | 100.0% → 57.1% |   9 → 8 | `generateData(int, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                        |

##### `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change | Delta |             % | Samples | Callee                                                           | Location                               |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------- | -------------------------------------- |
| +300.0% |    +3 | 20.0% → 44.4% |   1 → 4 | `boxed()`                                                        | `java.util.stream.DoublePipeline`      |
|     new |    +3 |  0.0% → 33.3% |   0 → 3 | `toArray(IntFunction)`                                           | `java.util.stream.ReferencePipeline`   |
|  -33.3% |    -1 | 60.0% → 22.2% |   3 → 2 | `stream(double[])`                                               | `java.util.Arrays`                     |
| removed |    -1 |  20.0% → 0.0% |   1 → 0 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111ede0`)

|  Change | Delta |             % | Samples | Callee                                                                                                                 | Location                                    |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
|     new |   +24 | 0.0% → 100.0% |  0 → 24 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |
| removed |   -20 | 100.0% → 0.0% |  20 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`)

| Change | Delta |             % | Samples | Callee                            | Location              |
| -----: | ----: | ------------: | ------: | --------------------------------- | --------------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `walkFileTree(Path, FileVisitor)` | `java.nio.file.Files` |

##### `deleteRecursively(Path)` (`org.renaissance.core.DirUtils`)

| Change | Delta |             % | Samples | Callee                             | Location                        |
| -----: | ----: | ------------: | ------: | ---------------------------------- | ------------------------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `deleteRecursively(Path, boolean)` | `org.renaissance.core.DirUtils` |

##### `lambda$createScratchDirectory$1(Path)` (`org.renaissance.core.DirUtils`)

| Change | Delta |             % | Samples | Callee                    | Location                        |
| -----: | ----: | ------------: | ------: | ------------------------- | ------------------------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `deleteRecursively(Path)` | `org.renaissance.core.DirUtils` |

##### `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`)

| Change | Delta |             % | Samples | Callee                                  | Location                        |
| -----: | ----: | ------------: | ------: | --------------------------------------- | ------------------------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `lambda$createScratchDirectory$1(Path)` | `org.renaissance.core.DirUtils` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

|  Change | Delta |             % | Samples | Callee              | Location                                    |
| ------: | ----: | ------------: | ------: | ------------------- | ------------------------------------------- |
| +200.0% |    +2 |   2.7% → 7.5% |   1 → 3 | `loadClass(String)` | `java.lang.ClassLoader`                     |
|   +2.8% |    +1 | 97.3% → 92.5% | 36 → 37 | `main(String[])`    | `org.renaissance.harness.RenaissanceSuite$` |

##### `arrayof_jint_disjoint_arraycopy` (`<unknown>`)

| Change | Delta |             % |   Samples | Callee               | Location    |
| -----: | ----: | ------------: | --------: | -------------------- | ----------- |
|  +2.9% |    +6 | 93.6% → 92.1% | 204 → 210 | `forward_copy_longs` | `<unknown>` |

##### `CollectedHeap::array_allocate` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                          | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | -------------- |
|  +20.5% |    +9 | 97.8% → 96.4% | 44 → 53 | `MemAllocator::allocate`                        | `libjvm.dylib` |
| removed |    -1 |   2.2% → 0.0% |   1 → 0 | `MemAllocator::Allocation::check_out_of_memory` | `libjvm.dylib` |

##### `G1FullGCMarker::mark_object` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                   | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | -------------- |
| +100.0% |    +4 | 25.0% → 30.8% |   4 → 8 | `G1RegionMarkStatsCache::add_live_words` | `libjvm.dylib` |

##### `G1FullGCMarker::follow_marking_stacks` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                                                          | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------- | -------------- |
| +75.0% |    +6 | 53.3% → 58.3% |  8 → 14 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` | `libjvm.dylib` |
| +60.0% |    +3 |         33.3% |   5 → 8 | `G1FullGCMarker::publish_and_drain_oop_tasks`                   | `libjvm.dylib` |
| -50.0% |    -1 |  13.3% → 4.2% |   2 → 1 | `G1FullGCMarker::follow_object`                                 | `libjvm.dylib` |
|    new |    +1 |   0.0% → 4.2% |   0 → 1 | `G1FullGCMarker::mark_object`                                   | `libjvm.dylib` |

##### `G1CollectedHeap::attempt_allocation` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Callee                                     | Location       |
| ------: | ----: | -----: | ------: | ------------------------------------------ | -------------- |
| +160.0% |    +8 | 100.0% |  5 → 13 | `G1CollectedHeap::attempt_allocation_slow` | `libjvm.dylib` |

##### `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                        | Location       |
| -----: | ----: | ------------: | ------: | ----------------------------- | -------------- |
| +53.3% |    +8 | 88.2% → 92.0% | 15 → 23 | `G1FullGCMarker::mark_object` | `libjvm.dylib` |

##### `Mutex::lock` (`libjvm.dylib`)

| Change | Delta |              % | Samples | Callee                              | Location                  |
| -----: | ----: | -------------: | ------: | ----------------------------------- | ------------------------- |
| +75.0% |    +6 | 100.0% → 87.5% |  8 → 14 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |
|    new |    +1 |    0.0% → 6.3% |   0 → 1 | `_pthread_mutex_firstfit_lock_wait` | `libsystem_pthread.dylib` |

##### `MemAllocator::allocate` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                                      | Location                   |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------- | -------------------------- |
| +100.0% |    +5 | 10.4% → 18.2% |  5 → 10 | `_platform_memset`                                          | `libsystem_platform.dylib` |
|  +36.4% |    +4 | 22.9% → 27.3% | 11 → 15 | `MemAllocator::mem_allocate_inside_tlab_slow`               | `libjvm.dylib`             |
|  +11.8% |    +2 | 35.4% → 34.5% | 17 → 19 | `_platform_bzero`                                           | `libsystem_platform.dylib` |
|  -50.0% |    -2 |   8.3% → 3.6% |   4 → 2 | `G1CollectedHeap::mem_allocate`                             | `libjvm.dylib`             |
| removed |    -1 |   2.1% → 0.0% |   1 → 0 | `MemAllocator::Allocation::notify_allocation_jvmti_sampler` | `libjvm.dylib`             |

##### `InstanceKlass::allocate_objArray` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                          | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------- | -------------- |
|  +18.2% |    +8 | 95.7% → 98.1% | 44 → 52 | `CollectedHeap::array_allocate` | `libjvm.dylib` |
| removed |    -1 |   2.2% → 0.0% |   1 → 0 | `MemAllocator::allocate`        | `libjvm.dylib` |

##### `G1CollectedHeap::attempt_allocation_slow` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                         | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------------------- | -------------- |
| +200.0% |    +8 | 50.0% → 80.0% |  4 → 12 | `Mutex::lock`                                  | `libjvm.dylib` |
| removed |    -3 |  37.5% → 0.0% |   3 → 0 | `MutatorAllocRegion::retire`                   | `libjvm.dylib` |
| +100.0% |    +1 | 12.5% → 13.3% |   1 → 2 | `VMThread::execute`                            | `libjvm.dylib` |
|     new |    +1 |   0.0% → 6.7% |   0 → 1 | `G1AllocRegion::new_alloc_region_and_allocate` | `libjvm.dylib` |

##### `G1FullGCCompactTask::G1CompactRegionClosure::apply` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                                             | Location       |
| -----: | ----: | -----------: | ------: | -------------------------------------------------- | -------------- |
|    new |    +4 | 0.0% → 57.1% |   0 → 4 | `G1FullGCCompactTask::copy_object_to_new_location` | `libjvm.dylib` |

##### `G1FullGCCompactTask::work` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                                               | Location       |
| -----: | ----: | -----------: | ------: | ---------------------------------------------------- | -------------- |
|    new |    +5 | 0.0% → 71.4% |   0 → 5 | `G1FullGCCompactTask::compact_region`                | `libjvm.dylib` |
|    new |    +2 | 0.0% → 28.6% |   0 → 2 | `G1FullGCCompactTask::G1CompactRegionClosure::apply` | `libjvm.dylib` |

##### `_new_array_Java` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                             | Location                  |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- | ------------------------- |
|   +7.4% |    +4 | 93.1% → 90.6% | 54 → 58 | `OptoRuntime::new_array_C`                         | `libjvm.dylib`            |
|     new |    +2 |   0.0% → 3.1% |   0 → 2 | `CardTableBarrierSet::on_slowpath_allocation_exit` | `libjvm.dylib`            |
|  -50.0% |    -1 |   3.4% → 1.6% |   2 → 1 | `pthread_jit_write_protect_np`                     | `libsystem_pthread.dylib` |
| removed |    -1 |   1.7% → 0.0% |   1 → 0 | `oopFactory::new_objArray`                         | `libjvm.dylib`            |
| removed |    -1 |   1.7% → 0.0% |   1 → 0 | `SharedRuntime::on_slowpath_allocation_exit`       | `libjvm.dylib`            |

##### `arrayof_oop_disjoint_arraycopy` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                            | Location        |
| ------: | ----: | ------------: | ------: | ------------------------------------------------- | --------------- |
|  +11.8% |    +6 | 86.4% → 89.1% | 51 → 57 | `forward_copy_longs`                              | `<unknown>`     |
| +100.0% |    +1 |   1.7% → 3.1% |   1 → 2 | `tlv_get_addr`                                    | `libdyld.dylib` |
| removed |    -1 |   1.7% → 0.0% |   1 → 0 | `G1BarrierSet::write_ref_array_work`              | `libjvm.dylib`  |
|  -50.0% |    -1 |   3.4% → 1.6% |   2 → 1 | `G1BarrierSet::invalidate`                        | `libjvm.dylib`  |
| removed |    -1 |   1.7% → 0.0% |   1 → 0 | `G1BarrierSetRuntime::write_ref_array_post_entry` | `libjvm.dylib`  |

##### `<init>(Collection)` (`java.util.ArrayList`)

|  Change | Delta |             % | Samples | Callee        | Location                   |
| ------: | ----: | ------------: | ------: | ------------- | -------------------------- |
|  +12.5% |   +11 | 97.8% → 99.0% | 88 → 99 | `toArray()`   | `java.util.ArrayList`      |
| removed |    -1 |   1.1% → 0.0% |   1 → 0 | `zero_blocks` | `<unknown>`                |
|     new |    +1 |   0.0% → 1.0% |   0 → 1 | `toArray()`   | `java.util.HashMap$Values` |

##### `fork()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |             % | Samples | Callee                                      | Location                                      |
| ------: | ----: | ------------: | ------: | ------------------------------------------- | --------------------------------------------- |
| +266.7% |    +8 | 75.0% → 84.6% |  3 → 11 | `push(ForkJoinTask, ForkJoinPool, boolean)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `wrapAndCopyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

| Change | Delta |              % | Samples | Callee                             | Location                            |
| -----: | ----: | -------------: | ------: | ---------------------------------- | ----------------------------------- |
| +80.0% |    +8 | 100.0% → 94.7% | 10 → 18 | `copyInto(Sink, Spliterator)`      | `java.util.stream.AbstractPipeline` |
|    new |    +1 |    0.0% → 5.3% |   0 → 1 | `slow_subtype_check Runtime1 stub` | `<unknown>`                         |

##### `tryCompensate(long, boolean)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |              % | Samples | Callee           | Location                                 |
| -----: | ----: | -------------: | ------: | ---------------- | ---------------------------------------- |
| +63.6% |    +7 | 100.0% → 94.7% | 11 → 18 | `unpark(Thread)` | `java.util.concurrent.locks.LockSupport` |
|    new |    +1 |    0.0% → 5.3% |   0 → 1 | `createWorker()` | `java.util.concurrent.ForkJoinPool`      |

##### `push(ForkJoinTask, ForkJoinPool, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change | Delta |             % | Samples | Callee         | Location                            |
| ------: | ----: | ------------: | ------: | -------------- | ----------------------------------- |
| +800.0% |    +8 | 33.3% → 81.8% |   1 → 9 | `signalWork()` | `java.util.concurrent.ForkJoinPool` |

##### `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

| Change | Delta |              % | Samples | Callee                                  | Location                                  |
| -----: | ----: | -------------: | ------: | --------------------------------------- | ----------------------------------------- |
|    new |    +6 |   0.0% → 33.3% |   0 → 6 | `forEachRemaining(Consumer)`            | `java.util.Spliterators$ArraySpliterator` |
| -20.0% |    -2 | 100.0% → 44.4% |  10 → 8 | `forEachRemaining(Consumer)`            | `java.util.Spliterator$OfInt`             |
|    new |    +2 |   0.0% → 11.1% |   0 → 2 | `forEachRemaining(Consumer)`            | `java.util.Spliterator$OfDouble`          |
|    new |    +1 |    0.0% → 5.6% |   0 → 1 | `copyIntoWithCancel(Sink, Spliterator)` | `java.util.stream.AbstractPipeline`       |
|    new |    +1 |    0.0% → 5.6% |   0 → 1 | `getExactSizeIfKnown()`                 | `java.util.Spliterator`                   |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|  Change | Delta |           % | Samples | Callee                                       | Location                                                                              |
| ------: | ----: | ----------: | ------: | -------------------------------------------- | ------------------------------------------------------------------------------------- |
|     new |    +2 | 0.0% → 1.1% |   0 → 2 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap`                                                                   |
| removed |    -1 | 0.6% → 0.0% |   1 → 0 | `afterNodeAccess(HashMap$Node)`              | `java.util.HashMap`                                                                   |
|     new |    +1 | 0.0% → 0.6% |   0 → 1 | `apply(Object)`                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011a3940` |
|     new |    +1 | 0.0% → 0.6% |   0 → 1 | `SafepointBlob`                              | `<unknown>`                                                                           |

##### `toArray()` (`java.util.ArrayList`)

| Change | Delta |      % |   Samples | Callee                  | Location           |
| -----: | ----: | -----: | --------: | ----------------------- | ------------------ |
|  +3.4% |    +6 | 100.0% | 177 → 183 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `CompilationPolicy::event` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                          | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------- | -------------- |
| +400.0% |    +4 | 33.3% → 71.4% |   1 → 5 | `CompileBroker::compile_method` | `libjvm.dylib` |

##### `CompileBroker::compile_method_base` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                               | Location       |
| ------: | ----: | -------------: | ------: | ------------------------------------ | -------------- |
| +300.0% |    +3 | 100.0% → 80.0% |   1 → 4 | `Mutex::lock`                        | `libjvm.dylib` |
|     new |    +1 |   0.0% → 20.0% |   0 → 1 | `CompileBroker::create_compile_task` | `libjvm.dylib` |

##### `CompileBroker::compile_method` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                               | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
| +400.0% |    +4 | 50.0% → 83.3% |   1 → 5 | `CompileBroker::compile_method_base` | `libjvm.dylib` |
| +400.0% |    +4 | 50.0% → 83.3% |   1 → 5 | `CompileBroker::compile_method`      | `libjvm.dylib` |

##### `PhaseGVN::transform_no_reclaim` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee               | Location       |
| -----: | ----: | -----------: | ------: | -------------------- | -------------- |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `Type::hashcons`     | `libjvm.dylib` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `LShiftLNode::Value` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `LoadNode::Ideal`    | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                   | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | -------------- |
|  -75.0% |    -3 |  22.2% → 4.8% |   4 → 1 | `PhaseChaitin::Split`                    | `libjvm.dylib` |
|  +66.7% |    +2 | 16.7% → 23.8% |   3 → 5 | `PhaseChaitin::build_ifg_physical`       | `libjvm.dylib` |
|     new |    +2 |   0.0% → 9.5% |   0 → 2 | `PhaseIFG::Compute_Effective_Degree`     | `libjvm.dylib` |
|     new |    +2 |   0.0% → 9.5% |   0 → 2 | `PhaseChaitin::Select`                   | `libjvm.dylib` |
| +100.0% |    +1 |   5.6% → 9.5% |   1 → 2 | `PhaseAggressiveCoalesce::insert_copies` | `libjvm.dylib` |

##### `PhaseRemoveUseless::PhaseRemoveUseless` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                              | Location       |
| ------: | ----: | -------------: | ------: | ----------------------------------- | -------------- |
| +200.0% |    +2 | 100.0% → 75.0% |   1 → 3 | `Compile::disconnect_useless_nodes` | `libjvm.dylib` |

##### `Assembler::operand_valid_for_logical_immediate` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                           | Location       |
| -----: | ----: | ------------: | ------: | -------------------------------- | -------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `encoding_for_logical_immediate` | `libjvm.dylib` |

##### `GraphBuilder::iterate_bytecodes_for_block` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                        | Location       |
| -----: | ----: | -----------: | ------: | ----------------------------- | -------------- |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `GraphBuilder::method_return` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `GraphBuilder::check_cast`    | `libjvm.dylib` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `GraphBuilder::invoke`        | `libjvm.dylib` |

##### `GraphBuilder::iterate_all_blocks` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                                      | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------------- | -------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib` |

##### `Compilation::build_hir` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                                       | Location       |
| ------: | ----: | -----------: | ------: | -------------------------------------------- | -------------- |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `IR::compute_use_counts`                     | `libjvm.dylib` |
|  +50.0% |    +1 |        50.0% |   2 → 3 | `IR::IR`                                     | `libjvm.dylib` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `IR::eliminate_null_checks`                  | `libjvm.dylib` |
|     new |    +1 | 0.0% → 16.7% |   0 → 1 | `GlobalValueNumbering::GlobalValueNumbering` | `libjvm.dylib` |
|     new |    +1 | 0.0% → 16.7% |   0 → 1 | `IR::compute_code`                           | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                               | Location        |
| ------: | ----: | -----------: | ------: | ------------------------------------ | --------------- |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `tlv_get_addr`                       | `libdyld.dylib` |
|     new |    +1 | 0.0% → 20.0% |   0 → 1 | `IndexSetIterator::advance_and_next` | `libjvm.dylib`  |
|     new |    +1 | 0.0% → 20.0% |   0 → 1 | `Node::disconnect_inputs`            | `libjvm.dylib`  |

##### `PhaseIFG::effective_degree` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                               | Location       |
| -----: | ----: | -----------: | ------: | ------------------------------------ | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `IndexSetIterator::advance_and_next` | `libjvm.dylib` |

##### `PhaseIFG::Compute_Effective_Degree` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                       | Location       |
| -----: | ----: | ------------: | ------: | ---------------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `PhaseIFG::effective_degree` | `libjvm.dylib` |

##### `ciEnv::get_klass_by_index_impl` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                          | Location       |
| -----: | ----: | -----------: | ------: | ------------------------------- | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `ciObjectFactory::get_metadata` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `ciEnv::get_klass_by_name_impl` | `libjvm.dylib` |

##### `ciEnv::get_method_by_index_impl` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                           | Location       |
| -----: | ----: | -----------: | ------: | -------------------------------- | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `ciEnv::get_klass_by_index_impl` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `ciEnv::lookup_method`           | `libjvm.dylib` |

##### `PhaseCFG::schedule_late` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                              | Location       |
| -----: | ----: | -----------: | ------: | ----------------------------------- | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `PhaseCFG::insert_anti_dependences` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `TypeRawPtr::add_offset`            | `libjvm.dylib` |

##### `PhaseIFG::re_insert` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                               | Location       |
| -----: | ----: | -----------: | ------: | ------------------------------------ | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `IndexSetIterator::advance_and_next` | `libjvm.dylib` |

##### `PhaseChaitin::Select` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                | Location       |
| -----: | ----: | ------------: | ------: | --------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `PhaseIFG::re_insert` | `libjvm.dylib` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |           % | Samples | Callee          | Location           |
| ------: | ----: | ----------: | ------: | --------------- | ------------------ |
|  -40.0% |    -8 | 2.1% → 1.8% | 20 → 12 | `doubleValue()` | `java.lang.Double` |
| +150.0% |    +3 | 0.2% → 0.7% |   2 → 5 | `SafepointBlob` | `<unknown>`        |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |             % |       Samples | Callee                         | Location                            |
| -----: | ----: | ------------: | ------------: | ------------------------------ | ----------------------------------- |
| -12.1% |  -143 | 97.6% → 97.5% | 1,178 → 1,035 | `doExec()`                     | `java.util.concurrent.ForkJoinTask` |
| +72.7% |    +8 |   0.9% → 1.8% |       11 → 19 | `tryCompensate(long, boolean)` | `java.util.concurrent.ForkJoinPool` |
|    new |    +1 |   0.0% → 0.1% |         0 → 1 | `DeoptimizationBlob`           | `<unknown>`                         |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |           % | Samples | Callee                           | Location           |
| -----: | ----: | ----------: | ------: | -------------------------------- | ------------------ |
| -34.7% |   -33 | 8.6% → 6.4% | 95 → 62 | `doubleValue()`                  | `java.lang.Double` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `counter_overflow Runtime1 stub` | `<unknown>`        |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change | Delta |            % |       Samples | Callee                                 | Location                                      |
| ------: | ----: | -----------: | ------------: | -------------------------------------- | --------------------------------------------- |
|   -2.0% |   -82 |       100.0% | 4,167 → 4,085 | `doExec()`                             | `java.util.concurrent.ForkJoinTask`           |
| removed |    -2 | <0.1% → 0.0% |         2 → 0 | `getAndClearSlot(ForkJoinTask[], int)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| removed |    -1 | <0.1% → 0.0% |         1 → 0 | `releaseAccess()`                      | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |             % |     Samples | Callee                                           | Location                                                  |
| ------: | ----: | ------------: | ----------: | ------------------------------------------------ | --------------------------------------------------------- |
|  -11.3% |  -124 | 66.0% → 61.4% | 1,099 → 975 | `accumulate(Double[], double[])`                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  -43.8% |   -42 |   5.8% → 3.4% |     96 → 54 | `get(int)`                                       | `java.util.ArrayList`                                     |
| removed |    -1 |   0.1% → 0.0% |       1 → 0 | `DeoptimizationBlob`                             | `<unknown>`                                               |
| removed |    -1 |   0.1% → 0.0% |       1 → 0 | `counter_overflow Runtime1 stub`                 | `<unknown>`                                               |
|     new |    +1 |   0.0% → 0.1% |       0 → 1 | `InterpreterRuntime::frequency_counter_overflow` | `libjvm.dylib`                                            |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |     % |       Samples | Callee              | Location                                                  |
| -----: | ----: | ----: | ------------: | ------------------- | --------------------------------------------------------- |
|  -4.6% |   -76 | 99.9% | 1,665 → 1,589 | `vectorSum()`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  -4.5% |   -75 | 99.9% | 1,665 → 1,590 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % |   Samples | Callee                         | Location                                                   |
| ------: | ----: | ------------: | --------: | ------------------------------ | ---------------------------------------------------------- |
|  -28.9% |  -275 | 67.0% → 50.0% | 951 → 676 | `distance(Double[], Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +65.2% |   +30 |   3.2% → 5.6% |   46 → 76 | `get(int)`                     | `java.util.ArrayList`                                      |
| +200.0% |    +6 |   0.2% → 0.7% |     3 → 9 | `zero_blocks`                  | `<unknown>`                                                |
| +100.0% |    +1 |          0.1% |     1 → 2 | `_new_array_Java`              | `<unknown>`                                                |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `DeoptimizationBlob`           | `<unknown>`                                                |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |            % |       Samples | Callee                 | Location                             |
| ------: | ----: | -----------: | ------------: | ---------------------- | ------------------------------------ |
|   -1.4% |   -64 |       100.0% | 4,423 → 4,359 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask`  |
| removed |    -4 |  0.1% → 0.0% |         4 → 0 | `getRawResult()`       | `java.util.concurrent.RecursiveTask` |
| removed |    -1 | <0.1% → 0.0% |         1 → 0 | `wrong_method_stub`    | `<unknown>`                          |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |             % |       Samples | Callee                                                    | Location                                      |
| ------: | ----: | ------------: | ------------: | --------------------------------------------------------- | --------------------------------------------- |
|  -12.1% |  -146 | 27.3% → 24.3% | 1,207 → 1,061 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
|   -2.0% |   -82 | 94.2% → 93.7% | 4,167 → 4,085 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|   +5.5% |   +30 | 12.3% → 13.1% |     543 → 573 | `park()`                                                  | `java.util.concurrent.locks.LockSupport`      |
| removed |    -2 |  <0.1% → 0.0% |         2 → 0 | `uncompensate()`                                          | `java.util.concurrent.ForkJoinPool`           |
| removed |    -1 |  <0.1% → 0.0% |         1 → 0 | `signalWaiters()`                                         | `java.util.concurrent.ForkJoinTask`           |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |             % |       Samples | Callee                 | Location                                            |
| ------: | ----: | ------------: | ------------: | ---------------------- | --------------------------------------------------- |
|   -0.9% |   -42 | 99.2% → 99.5% | 4,587 → 4,545 | `exec()`               | `java.util.concurrent.RecursiveTask`                |
|  -26.8% |   -15 |   1.2% → 0.9% |       56 → 41 | `setDone()`            | `java.util.concurrent.ForkJoinTask`                 |
|   +0.9% |    +5 | 11.4% → 11.6% |     527 → 532 | `exec()`               | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
| removed |    -1 |  <0.1% → 0.0% |         1 → 0 | `resolve_virtual_call` | `<unknown>`                                         |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |      % |       Samples | Callee     | Location                            |
| -----: | ----: | -----: | ------------: | ---------- | ----------------------------------- |
|  -1.2% |   -55 | 100.0% | 4,625 → 4,570 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % |       Samples | Callee                                               | Location                                      |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------- | --------------------------------------------- |
|   -1.2% |   -54 | 99.8% → 99.6% | 4,626 → 4,572 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| +125.0% |    +5 |   0.1% → 0.2% |         4 → 9 | `signalWork()`                                       | `java.util.concurrent.ForkJoinPool`           |
| removed |    -1 |  <0.1% → 0.0% |         1 → 0 | `casSlotToNull(ForkJoinTask[], int, ForkJoinTask)`   | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|  Change | Delta |             % |       Samples | Callee              | Location                                                   |
| ------: | ----: | ------------: | ------------: | ------------------- | ---------------------------------------------------------- |
|   -4.5% |   -75 | 36.3% → 35.0% | 1,666 → 1,591 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   -1.5% |   -65 | 96.4% → 96.0% | 4,424 → 4,359 | `join()`            | `java.util.concurrent.ForkJoinTask`                        |
|   -1.1% |    -9 |         17.2% |     790 → 781 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| +225.0% |    +9 |   0.1% → 0.3% |        4 → 13 | `fork()`            | `java.util.concurrent.ForkJoinTask`                        |
|   -0.3% |    -5 | 40.6% → 40.9% | 1,861 → 1,856 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change | Delta |              % |       Samples | Callee      | Location                                               |
| -----: | ----: | -------------: | ------------: | ----------- | ------------------------------------------------------ |
|  -1.0% |   -45 | 100.0% → 99.9% | 4,587 → 4,542 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `get(int)` (`java.util.ArrayList`)

| Change | Delta |             % |   Samples | Callee                 | Location              |
| -----: | ----: | ------------: | --------: | ---------------------- | --------------------- |
| -11.5% |   -19 | 85.9% → 85.4% | 165 → 146 | `elementData(int)`     | `java.util.ArrayList` |
| -11.5% |    -3 |         13.5% |   26 → 23 | `checkIndex(int, int)` | `java.util.Objects`   |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change | Delta |            % | Samples | Callee                                                                                       | Location                                  |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
| removed |   -16 | 80.0% → 0.0% |  16 → 0 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
| removed |    -4 | 20.0% → 0.0% |   4 → 0 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `signalWaiters()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % | Samples | Callee           | Location                                 |
| -----: | ----: | ------------: | ------: | ---------------- | ---------------------------------------- |
| -29.6% |   -16 | 96.4% → 97.4% | 54 → 38 | `unpark(Thread)` | `java.util.concurrent.locks.LockSupport` |

##### `setDone()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |             % | Samples | Callee                       | Location                            |
| ------: | ----: | ------------: | ------: | ---------------------------- | ----------------------------------- |
|  -29.1% |   -16 | 98.2% → 95.1% | 55 → 39 | `signalWaiters()`            | `java.util.concurrent.ForkJoinTask` |
| +100.0% |    +1 |   1.8% → 4.9% |   1 → 2 | `getAndBitwiseOrStatus(int)` | `java.util.concurrent.ForkJoinTask` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |              % |   Samples | Callee              | Location                            |
| -----: | ----: | -------------: | --------: | ------------------- | ----------------------------------- |
|  -1.9% |   -15 | 100.0% → 99.7% | 784 → 769 | `invoke()`          | `java.util.concurrent.ForkJoinTask` |
|    new |    +1 |    0.0% → 0.1% |     0 → 1 | `wrong_method_stub` | `<unknown>`                         |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change | Delta |             % |   Samples | Callee                | Location                                               |
| ------: | ----: | ------------: | --------: | --------------------- | ------------------------------------------------------ |
|   -1.7% |   -13 | 99.2% → 98.7% | 784 → 771 | `average(List)`       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  +80.0% |    +4 |   0.6% → 1.2% |     5 → 9 | `boxed(double[])`     | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `put(Object, Object)` | `java.util.HashMap`                                    |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % |   Samples | Callee                     | Location                                               |
| -----: | ----: | -----: | --------: | -------------------------- | ------------------------------------------------------ |
|  -1.1% |    -9 | 100.0% | 790 → 781 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  -1.1% |    -9 | 100.0% | 790 → 781 | `computeDirectly()`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |              % |       Samples | Callee                   | Location                                                   |
| -----: | ----: | -------------: | ------------: | ------------------------ | ---------------------------------------------------------- |
|  -4.6% |   -65 |  76.2% → 72.9% | 1,418 → 1,353 | `findNearestCentroid()`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +13.1% |   +58 |  23.8% → 27.0% |     443 → 501 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -0.4% |    -7 | 100.0% → 99.9% | 1,861 → 1,854 | `computeDirectly()`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change | Delta |            % | Samples | Callee              | Location                |
| ------: | ----: | -----------: | ------: | ------------------- | ----------------------- |
| removed |    -4 | 57.1% → 0.0% |   4 → 0 | `<clinit>()`        | `scala.Predef$`         |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % |   Samples | Callee                              | Location            |
| -----: | ----: | -----: | --------: | ----------------------------------- | ------------------- |
|  -1.0% |    -4 | 100.0% | 389 → 385 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`)

| Change | Delta |              % |   Samples | Callee                                           | Location                                    |
| -----: | ----: | -------------: | --------: | ------------------------------------------------ | ------------------------------------------- |
|  -1.0% |    -4 | 100.0% → 99.5% | 389 → 385 | `lambda$merge$7(Map, Object, List)`              | `org.renaissance.jdk.concurrent.JavaKMeans` |
|    new |    +1 |    0.0% → 0.3% |     0 → 1 | `InterpreterRuntime::frequency_counter_overflow` | `libjvm.dylib`                              |

##### `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`)

| Change | Delta |             % | Samples | Callee                                           | Location                                    |
| -----: | ----: | ------------: | ------: | ------------------------------------------------ | ------------------------------------------- |
| -22.2% |    -2 |        100.0% |   9 → 7 | `lambda$generateData$5(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |
| -25.0% |    -1 | 44.4% → 42.9% |   4 → 3 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |             % | Samples | Callee                                         | Location                                            |
| ------: | ----: | ------------: | ------: | ---------------------------------------------- | --------------------------------------------------- |
| removed |    -2 |  22.2% → 0.0% |   2 → 0 | `linkToTargetMethod(int, int, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001126c00` |
|     new |    +2 |  0.0% → 28.6% |   0 → 2 | `range(int, int)`                              | `java.util.stream.IntStream`                        |
|  -20.0% |    -1 | 55.6% → 57.1% |   5 → 4 | `toArray(IntFunction)`                         | `java.util.stream.ReferencePipeline`                |
|  -50.0% |    -1 | 22.2% → 14.3% |   2 → 1 | `mapToObj(IntFunction)`                        | `java.util.stream.IntPipeline`                      |

##### `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`)

| Change | Delta |              % | Samples | Callee                                            | Location                                                             |
| -----: | ----: | -------------: | ------: | ------------------------------------------------- | -------------------------------------------------------------------- |
| -71.4% |    -5 | 100.0% → 40.0% |   7 → 2 | `run(BenchmarkContext)`                           | `org.renaissance.jdk.concurrent.FjKmeans`                            |
|    new |    +2 |   0.0% → 40.0% |   0 → 2 | `validate()`                                      | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000070011a8230` |
|    new |    +1 |   0.0% → 20.0% |   0 → 1 | `notifyAfterOperationSetUp(String, int, boolean)` | `org.renaissance.harness.EventDispatcher`                            |

##### `$anonfun$1(int)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change | Delta |             % | Samples | Callee                | Location                                    |
| ------: | ----: | ------------: | ------: | --------------------- | ------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `run(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `extractResource(String, Path)` (`org.renaissance.core.ResourceUtils`)

| Change | Delta |             % | Samples | Callee                                  | Location              |
| -----: | ----: | ------------: | ------: | --------------------------------------- | --------------------- |
| -12.5% |    -1 | 88.9% → 87.5% |   8 → 7 | `copy(InputStream, Path, CopyOption[])` | `java.nio.file.Files` |

##### `G1EvacuateRegionsBaseTask::work` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                                         | Location       |
| -----: | ----: | ------------: | ------: | ---------------------------------------------- | -------------- |
| -56.0% |   -14 | 78.1% → 64.7% | 25 → 11 | `G1EvacuateRegionsTask::evacuate_live_objects` | `libjvm.dylib` |
| -75.0% |    -3 |  12.5% → 5.9% |   4 → 1 | `G1ParScanThreadStateSet::state_for_worker`    | `libjvm.dylib` |
| +33.3% |    +1 |  9.4% → 23.5% |   3 → 4 | `G1EvacuateRegionsTask::scan_roots`            | `libjvm.dylib` |
|    new |    +1 |   0.0% → 5.9% |   0 → 1 | `G1RemSet::scan_collection_set_code_roots`     | `libjvm.dylib` |

##### `G1ParEvacuateFollowersClosure::do_void` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                             | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- | -------------- |
|  -75.0% |   -12 | 64.0% → 36.4% |  16 → 4 | `G1ParEvacuateFollowersClosure::offer_termination` | `libjvm.dylib` |
| removed |    -6 |  24.0% → 0.0% |   6 → 0 | `G1ParScanThreadState::steal_and_trim_queue`       | `libjvm.dylib` |
| +133.3% |    +4 | 12.0% → 63.6% |   3 → 7 | `G1ParScanThreadState::trim_queue_to_threshold`    | `libjvm.dylib` |

##### `G1EvacuateRegionsTask::evacuate_live_objects` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                                   | Location       |
| -----: | ----: | -----: | ------: | ---------------------------------------- | -------------- |
| -56.0% |   -14 | 100.0% | 25 → 11 | `G1ParEvacuateFollowersClosure::do_void` | `libjvm.dylib` |

##### `G1ParEvacuateFollowersClosure::offer_termination` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                              | Location       |
| -----: | ----: | -----: | ------: | ----------------------------------- | -------------- |
| -75.0% |   -12 | 100.0% |  16 → 4 | `TaskTerminator::offer_termination` | `libjvm.dylib` |

##### `Mutex::lock_without_safepoint_check` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                              | Location                  |
| -----: | ----: | -----: | ------: | ----------------------------------- | ------------------------- |
| -46.2% |    -6 | 100.0% |  13 → 7 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `G1ParScanThreadState::steal_and_trim_queue` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                          | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | -------------- |
| removed |    -6 | 100.0% → 0.0% |   6 → 0 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib` |

##### `CodeCacheUnloadingTask::work` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                                   | Location       |
| ------: | ----: | -----------: | ------: | ---------------------------------------- | -------------- |
| removed |    -3 | 50.0% → 0.0% |   3 → 0 | `nmethod::do_unloading`                  | `libjvm.dylib` |
| removed |    -2 | 33.3% → 0.0% |   2 → 0 | `CodeCacheUnloadingTask::claim_nmethods` | `libjvm.dylib` |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `BarrierSetNMethod::set_guard_value`     | `libjvm.dylib` |

##### `G1ParallelCleaningTask::work` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                         | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------ | -------------- |
| removed |    -6 | 100.0% → 0.0% |   6 → 0 | `CodeCacheUnloadingTask::work` | `libjvm.dylib` |

##### `TaskTerminator::offer_termination` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                  | Location                  |
| ------: | ----: | ------------: | ------: | --------------------------------------- | ------------------------- |
| removed |    -2 |  11.8% → 0.0% |   2 → 0 | `_pthread_mutex_firstfit_unlock_slow`   | `libsystem_pthread.dylib` |
|  -20.0% |    -1 | 29.4% → 30.8% |   5 → 4 | `Mutex::lock_without_safepoint_check`   | `libjvm.dylib`            |
|  -11.1% |    -1 | 52.9% → 61.5% |   9 → 8 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib`            |
| removed |    -1 |   5.9% → 0.0% |   1 → 0 | `swtch_pri`                             | `libsystem_kernel.dylib`  |
|     new |    +1 |   0.0% → 7.7% |   0 → 1 | `__psynch_cvbroad`                      | `libsystem_kernel.dylib`  |

##### `G1ParScanThreadState::do_partial_array` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                                                   | Location       |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------- | -------------- |
| -80.0% |    -4 | 83.3% → 50.0% |   5 → 1 | `void G1ScanEvacuatedObjClosure::do_oop_work<narrowOop>` | `libjvm.dylib` |

##### `AllocateHeap` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee          | Location                 |
| ------: | ----: | -----------: | ------: | --------------- | ------------------------ |
| removed |    -3 | 75.0% → 0.0% |   3 → 0 | `os::malloc`    | `libjvm.dylib`           |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `nanov2_malloc` | `libsystem_malloc.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

| Change | Delta |              % |  Samples | Callee                                                   | Location       |
| -----: | ----: | -------------: | -------: | -------------------------------------------------------- | -------------- |
|  -5.9% |    -6 | 100.0% → 98.0% | 102 → 96 | `CompileBroker::compiler_thread_loop`                    | `libjvm.dylib` |
|    new |    +1 |    0.0% → 1.0% |    0 → 1 | `MonitorDeflationThread::monitor_deflation_thread_entry` | `libjvm.dylib` |
|    new |    +1 |    0.0% → 1.0% |    0 → 1 | `ServiceThread::service_thread_entry`                    | `libjvm.dylib` |

##### `_pthread_mutex_firstfit_lock_slow` (`libsystem_pthread.dylib`)

| Change | Delta |      % | Samples | Callee               | Location                 |
| -----: | ----: | -----: | ------: | -------------------- | ------------------------ |
| -10.3% |    -3 | 100.0% | 29 → 26 | `__psynch_mutexwait` | `libsystem_kernel.dylib` |

##### `G1AllocRegion::retire_internal` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                                  | Location       |
| ------: | ----: | -----------: | ------: | --------------------------------------- | -------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `G1MonitoringSupport::update_eden_size` | `libjvm.dylib` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `G1CollectionSet::add_eden_region`      | `libjvm.dylib` |

##### `MutatorAllocRegion::retire` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                           | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------- | -------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `G1AllocRegion::retire_internal` | `libjvm.dylib` |

##### `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                             | Location       |
| ------: | ----: | -----------: | ------: | ---------------------------------- | -------------- |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `HeapRegion::update_bot_for_block` | `libjvm.dylib` |

##### `G1FullGCResetMetadataTask::G1ResetMetadataClosure::do_heap_region` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                                                            | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------- | -------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region` | `libjvm.dylib` |

##### `defineClass(String, byte[], int, int, CodeSource)` (`java.security.SecureClassLoader`)

|  Change | Delta |              % | Samples | Callee                                                    | Location                          |
| ------: | ----: | -------------: | ------: | --------------------------------------------------------- | --------------------------------- |
|  -41.7% |    -5 | 92.3% → 100.0% |  12 → 7 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader`           |
| removed |    -1 |    7.7% → 0.0% |   1 → 0 | `getProtectionDomain(CodeSource)`                         | `java.security.SecureClassLoader` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

| Change | Delta |              % | Samples | Callee                                    | Location                |
| -----: | ----: | -------------: | ------: | ----------------------------------------- | ----------------------- |
| -33.3% |    -2 |  50.0% → 57.1% |   6 → 4 | `loadClass(String)`                       | `java.lang.ClassLoader` |
| -12.5% |    -1 | 66.7% → 100.0% |   8 → 7 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`         |

##### `defineClass(String, byte[], int, int, ProtectionDomain)` (`java.lang.ClassLoader`)

| Change | Delta |      % | Samples | Callee                                                                          | Location                |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------- | ----------------------- |
| -41.7% |    -5 | 100.0% |  12 → 7 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|  Change | Delta |             % |   Samples | Callee                            | Location                                                               |
| ------: | ----: | ------------: | --------: | --------------------------------- | ---------------------------------------------------------------------- |
|  -30.2% |   -13 |  11.1% → 7.8% |   43 → 30 | `zero_blocks`                     | `<unknown>`                                                            |
|   +4.0% |   +11 | 69.9% → 73.5% | 272 → 283 | `apply(Object, Object)`           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000` |
|   +8.3% |    +5 | 15.4% → 16.9% |   60 → 65 | `arrayof_jint_disjoint_arraycopy` | `<unknown>`                                                            |
| removed |    -1 |   0.3% → 0.0% |     1 → 0 | `ic_miss_stub`                    | `<unknown>`                                                            |
| removed |    -1 |   0.3% → 0.0% |     1 → 0 | `resize()`                        | `java.util.HashMap`                                                    |

##### `fill()` (`java.util.zip.ZipFile$ZipFileInflaterInputStream`)

|  Change | Delta |            % | Samples | Callee                       | Location                                   |
| ------: | ----: | -----------: | ------: | ---------------------------- | ------------------------------------------ |
| removed |    -3 | 75.0% → 0.0% |   3 → 0 | `read(byte[], int, int)`     | `java.util.zip.ZipFile$ZipFileInputStream` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `setInput(byte[], int, int)` | `java.util.zip.Inflater`                   |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                         | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------------------- | -------------- |
|   -3.6% |    -3 | 82.4% → 84.4% | 84 → 81 | `CompileBroker::invoke_compiler_on_method`     | `libjvm.dylib` |
|  -11.8% |    -2 | 16.7% → 15.6% | 17 → 15 | `CompileQueue::get`                            | `libjvm.dylib` |
| removed |    -1 |   1.0% → 0.0% |   1 → 0 | `CompileBroker::possibly_add_compiler_threads` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                  | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------- | -------------- |
|  -37.5% |    -3 | 38.1% → 29.4% |   8 → 5 | `PhaseIdealLoop::optimize`              | `libjvm.dylib` |
|  -66.7% |    -2 |  14.3% → 5.9% |   3 → 1 | `PhaseIterGVN::optimize`                | `libjvm.dylib` |
|  +25.0% |    +1 | 19.0% → 29.4% |   4 → 5 | `Compile::optimize_loops`               | `libjvm.dylib` |
|  -50.0% |    -1 |   9.5% → 5.9% |   2 → 1 | `PhaseCCP::PhaseCCP`                    | `libjvm.dylib` |
| removed |    -1 |   4.8% → 0.0% |   1 → 0 | `Compile::inline_incrementally_cleanup` | `libjvm.dylib` |

##### `PhaseOutput::Output` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                     | Location       |
| -----: | ----: | ------------: | ------: | -------------------------- | -------------- |
| -75.0% |    -3 | 57.1% → 33.3% |   4 → 1 | `PhaseOutput::fill_buffer` | `libjvm.dylib` |
| -50.0% |    -1 | 28.6% → 33.3% |   2 → 1 | `Scheduling::DoScheduling` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                       | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------- | -------------- |
|   -5.6% |    -1 | 21.4% → 21.0% | 18 → 17 | `Compiler::compile_method`   | `libjvm.dylib` |
| removed |    -1 |   1.2% → 0.0% |   1 → 0 | `ciEnv::ciEnv`               | `libjvm.dylib` |
|   -1.6% |    -1 | 75.0% → 76.5% | 63 → 62 | `C2Compiler::compile_method` | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                              | Location       |
| ------: | ----: | -----------: | ------: | ----------------------------------- | -------------- |
| removed |    -2 | 40.0% → 0.0% |   2 → 0 | `PhiNode::Ideal`                    | `libjvm.dylib` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `CallStaticJavaNode::Ideal`         | `libjvm.dylib` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `OuterStripMinedLoopEndNode::Value` | `libjvm.dylib` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `NodeHash::hash_find_insert`        | `libjvm.dylib` |
|     new |    +1 | 0.0% → 50.0% |   0 → 1 | `HaltNode::Ideal`                   | `libjvm.dylib` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                    | Location       |
| ------: | ----: | -----------: | ------: | ------------------------- | -------------- |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `decodeHeapOopNode::rule` | `libjvm.dylib` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `PhaseChaitin::split_DEF` | `libjvm.dylib` |

##### `PhaseOutput::fill_buffer` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                     | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | -------------- |
| removed |    -2 |  50.0% → 0.0% |   2 → 0 | `NonSafepointEmitter::observe_instruction` | `libjvm.dylib` |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `branchNode::emit`                         | `libjvm.dylib` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `loadConINode::emit`                       | `libjvm.dylib` |

##### `ciMethod::get_flow_analysis` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                   | Location       |
| ------: | ----: | -----------: | ------: | ------------------------ | -------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `ciTypeFlow::do_flow`    | `libjvm.dylib` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `ciTypeFlow::ciTypeFlow` | `libjvm.dylib` |

##### `Matcher::match` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                 | Location       |
| ------: | ----: | -------------: | ------: | ---------------------- | -------------- |
|  -40.0% |    -2 | 83.3% → 100.0% |   5 → 3 | `Matcher::xform`       | `libjvm.dylib` |
| removed |    -1 |   16.7% → 0.0% |   1 → 0 | `Matcher::find_shared` | `libjvm.dylib` |

##### `CompileQueue::get` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee          | Location       |
| -----: | ----: | -----: | ------: | --------------- | -------------- |
| -11.8% |    -2 | 100.0% | 17 → 15 | `Monitor::wait` | `libjvm.dylib` |

##### `LinearScanWalker::alloc_free_reg` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                                        | Location       |
| ------: | ----: | -----------: | ------: | --------------------------------------------- | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `LinearScanWalker::free_collect_inactive_any` | `libjvm.dylib` |

##### `IntervalWalker::walk_to` (`libjvm.dylib`)

| Change | Delta |              % | Samples | Callee                               | Location       |
| -----: | ----: | -------------: | ------: | ------------------------------------ | -------------- |
| -50.0% |    -1 | 66.7% → 100.0% |   2 → 1 | `LinearScanWalker::activate_current` | `libjvm.dylib` |

##### `LinearScan::allocate_registers` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                    | Location       |
| -----: | ----: | -----: | ------: | ------------------------- | -------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `IntervalWalker::walk_to` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|  Change | Delta |           % | Samples | Callee                   | Location       |
| ------: | ----: | ----------: | ------: | ------------------------ | -------------- |
| removed |    -1 | 8.3% → 0.0% |   1 → 0 | `Chunk::next_chop`       | `libjvm.dylib` |
| removed |    -1 | 8.3% → 0.0% |   1 → 0 | `PhaseIterGVN::optimize` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                   | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | -------------- |
|  -19.0% |    -4 | 33.3% → 27.9% | 21 → 17 | `Compile::Optimize`                      | `libjvm.dylib` |
|  +75.0% |    +3 |  6.3% → 11.5% |   4 → 7 | `ParseGenerator::generate`               | `libjvm.dylib` |
| +300.0% |    +3 |   1.6% → 6.6% |   1 → 4 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|   -5.9% |    -2 | 54.0% → 52.5% | 34 → 32 | `Compile::Code_Gen`                      | `libjvm.dylib` |
| removed |    -1 |   1.6% → 0.0% |   1 → 0 | `CallGenerator::for_osr`                 | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                               | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
| -57.1% |    -4 |  20.6% → 9.4% |   7 → 3 | `PhaseOutput::Output`                | `libjvm.dylib` |
| +16.7% |    +3 | 52.9% → 65.6% | 18 → 21 | `PhaseChaitin::Register_Allocate`    | `libjvm.dylib` |
| -50.0% |    -3 |  17.6% → 9.4% |   6 → 3 | `Matcher::match`                     | `libjvm.dylib` |
|    new |    +1 |   0.0% → 3.1% |   0 → 1 | `PhaseOutput::install_code`          | `libjvm.dylib` |
|    new |    +1 |   0.0% → 3.1% |   0 → 1 | `PhaseBlockLayout::PhaseBlockLayout` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_tree` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                                 | Location       |
| ------: | ----: | -----------: | ------: | -------------------------------------- | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `PhaseIdealLoop::build_loop_tree_impl` | `libjvm.dylib` |

##### `PhaseCCP::push_child_nodes_to_worklist` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                     | Location       |
| ------: | ----: | -----------: | ------: | -------------------------- | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `PhaseCCP::push_more_uses` | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `ProjNode::bottom_type`    | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

| Change | Delta |              % | Samples | Callee                        | Location       |
| -----: | ----: | -------------: | ------: | ----------------------------- | -------------- |
| -60.0% |    -3 | 100.0% → 66.7% |   5 → 2 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |
|    new |    +1 |   0.0% → 33.3% |   0 → 1 | `CmpLNode::sub`               | `libjvm.dylib` |

##### `PhiNode::Ideal` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee            | Location       |
| ------: | ----: | -----------: | ------: | ----------------- | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `Node::set_req_X` | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `TypePtr::xmeet`  | `libjvm.dylib` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in samples collected in their leaf frame.

Common call stack: `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`) ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|  Change | Delta |            % |   Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------: | ----: | -----------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  +54.8% |  +249 | 8.4% → 12.4% | 454 → 703 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  +82.8% |   +48 |  1.1% → 1.9% |  58 → 106 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  +84.1% |   +37 |  0.8% → 1.4% |   44 → 81 | `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  +52.2% |   +36 |  1.3% → 1.9% |  69 → 105 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  +62.8% |   +27 |  0.8% → 1.2% |   43 → 70 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| +118.2% |   +26 |  0.4% → 0.8% |   22 → 48 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `parkUntil(long)` (`java.util.concurrent.locks.LockSupport`) ← `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  +85.7% |   +18 |  0.4% → 0.7% |   21 → 39 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| +160.0% |   +16 |  0.2% → 0.5% |   10 → 26 | `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  +18.5% |   +15 |  1.5% → 1.7% |   81 → 96 | `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  +31.9% |   +15 |  0.9% → 1.1% |   47 → 62 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  +45.2% |   +14 |  0.6% → 0.8% |   31 → 45 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) |
|  +81.3% |   +13 |  0.3% → 0.5% |   16 → 29 | `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  +65.0% |   +13 |  0.4% → 0.6% |   20 → 33 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  +84.6% |   +11 |  0.2% → 0.4% |   13 → 24 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| +122.2% |   +11 |  0.2% → 0.4% |    9 → 20 | `forward_copy_longs` ← `arrayof_jint_disjoint_arraycopy` ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|   +6.1% |   +10 |  3.0% → 3.1% | 164 → 174 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  +27.0% |   +10 |  0.7% → 0.8% |   37 → 47 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  +23.1% |    +9 |  0.7% → 0.8% |   39 → 48 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|     new |    +9 |  0.0% → 0.2% |     0 → 9 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  +33.3% |    +8 |  0.4% → 0.6% |   24 → 32 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                  |

### Improvements

Call stacks with the largest decrease in samples collected in their leaf frame.

Common call stack: `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

| Change | Delta |            % |   Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| -----: | ----: | -----------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| -36.5% |   -61 |  3.1% → 1.9% | 167 → 106 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| -28.1% |   -34 |  2.2% → 1.5% |  121 → 87 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| -44.9% |   -31 |  1.3% → 0.7% |   69 → 38 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| -23.3% |   -20 |  1.6% → 1.2% |   86 → 66 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) |
| -54.3% |   -19 |  0.6% → 0.3% |   35 → 16 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| -36.7% |   -18 |  0.9% → 0.5% |   49 → 31 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| -28.8% |   -15 |  1.0% → 0.7% |   52 → 37 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| -42.9% |   -15 |  0.6% → 0.4% |   35 → 20 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| -21.5% |   -14 |  1.2% → 0.9% |   65 → 51 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| -40.6% |   -13 |  0.6% → 0.3% |   32 → 19 | `__psynch_cvsignal` (`libsystem_kernel.dylib`) ← `Unsafe_Unpark` (`libjvm.dylib`) ← `unpark(Object)` (`jdk.internal.misc.Unsafe`) ← `unpark(Thread)` (`java.util.concurrent.locks.LockSupport`) ← `signalWaiters()` (`java.util.concurrent.ForkJoinTask`) ← `setDone()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| -11.4% |   -12 |  1.9% → 1.6% |  105 → 93 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| -61.1% |   -11 |  0.3% → 0.1% |    18 → 7 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| -52.6% |   -10 |  0.4% → 0.2% |    19 → 9 | `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| -52.9% |    -9 |  0.3% → 0.1% |    17 → 8 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| -32.0% |    -8 |  0.5% → 0.3% |   25 → 17 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  -8.8% |    -8 |  1.7% → 1.5% |   91 → 83 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| -46.7% |    -7 |  0.3% → 0.1% |    15 → 8 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| -63.6% |    -7 |  0.2% → 0.1% |    11 → 4 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| -46.7% |    -7 |  0.3% → 0.1% |    15 → 8 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| -87.5% |    -7 | 0.1% → <0.1% |     8 → 1 | `computeIfAbsent(Object, Function)` (`java.util.HashMap`) ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

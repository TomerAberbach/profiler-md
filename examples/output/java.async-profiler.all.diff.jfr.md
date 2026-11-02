# Sampling profile diff

Collected 5,420 → 4,605 samples (-815 samples, -15.0%).

| Category         | Change | Delta |             % |       Samples |
| ---------------- | -----: | ----: | ------------: | ------------: |
| Ours             |  -7.9% |  -199 | 46.3% → 50.2% | 2,509 → 2,310 |
| Native           | -27.1% |  -590 | 40.1% → 34.4% | 2,174 → 1,584 |
| Standard library |  -2.3% |   -14 | 11.5% → 13.2% |     622 → 608 |
| Compiler         |  +9.3% |    +5 |   1.0% → 1.3% |       54 → 59 |
| JIT              | -27.9% |   -17 |   1.1% → 1.0% |       61 → 44 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
├── 5,146 → 4,309 samples (94.9% → 93.6%) run() at java.util.concurrent.ForkJoinWorkerThread
│   └── 5,146 → 4,309 samples (94.9% → 93.6%) runWorker(ForkJoinPool$WorkQueue) at java.util.concurrent.ForkJoinPool
│       ├── … 4,323 → 3,863 samples (79.8% → 83.9%) doExec() at java.util.concurrent.ForkJoinTask
│       │   ├── … 4,261 → 3,804 samples (78.6% → 82.6%) exec() at java.util.concurrent.RecursiveTask
│       │   │   └── 4,260 → 3,802 samples (78.6% → 82.6%) compute() at org.renaissance.jdk.concurrent.JavaKMeans$RangedTask
│       │   │       ├── 1,795 → 1,561 samples (33.1% → 33.9%) computeDirectly() at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│       │   │       │   ├── … 1,354 → 1,124 samples (25.0% → 24.4%, self 7.9% → 6.7%) findNearestCentroid() at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│       │   │       │   │   ├── 850 → 745 samples (15.7% → 16.2%, self 15.3% → 15.7%) distance(Double[], Double[])
│       │   │       │   │   │   └── 18 → 19 samples (0.3% → 0.4%) doubleValue() at java.lang.Double
│       │   │       │   │   └── 58 → 52 samples (1.1%) get(int) at java.util.ArrayList
│       │   │       │   │       ├── 45 → 51 samples (0.8% → 1.1%, self 2.7% → 2.9% globally) elementData(int)
│       │   │       │   │       └── 13 → 1 sample (0.2% → <0.1%) checkIndex(int, int) at java.util.Objects
│       │   │       │   └── … 441 → 437 samples (8.1% → 9.5%) collectClusters(int[]) at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask …
│       │   │       ├── 1,302 → 1,316 samples (24.0% → 28.6%) computeDirectly() at org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│       │   │       │   └── … 1,302 → 1,316 samples (24.0% → 28.6%, self 8.0% → 9.7%) vectorSum() at org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│       │   │       │       ├── 792 → 808 samples (14.6% → 17.5%, self 13.2% → 15.7%) accumulate(Double[], double[])
│       │   │       │       │   └── 75 → 85 samples (1.4% → 1.8%) doubleValue() at java.lang.Double
│       │   │       │       └── 74 → 62 samples (1.4% → 1.3%) 4 more callees, led by (1.3%) get(int) at java.util.ArrayList
│       │   │       ├── … 442 → 350 samples (8.2% → 7.6%) merge(Object, Object, BiFunction) at java.util.HashMap
│       │   │       │   ├── 347 → 263 samples (6.4% → 5.7%) apply(Object, Object) at org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a7000
│       │   │       │   │   └── 347 → 263 samples (6.4% → 5.7%) lambda$merge$6(List, List) at org.renaissance.jdk.concurrent.JavaKMeans
│       │   │       │   │       ├── 240 → 182 samples (4.4% → 4.0%) addAll(Collection) at java.util.ArrayList …
│       │   │       │   │       └── … 106 → 81 samples (2.0% → 1.8%) copyOf(Object[], int) at java.util.Arrays
│       │   │       │   │           ├── 70 → 57 samples (1.3% → 1.2%) arrayof_jint_disjoint_arraycopy
│       │   │       │   │           │   └── 66 → 52 samples (1.2% → 1.1%, self 4.0% globally) forward_copy_longs
│       │   │       │   │           └── 33 → 23 samples (0.6% → 0.5%) _new_array_Java …
│       │   │       │   ├── 41 → 27 samples (0.8% → 0.6%) zero_blocks
│       │   │       │   └── 48 → 53 samples (0.9% → 1.2%) 2 more callees, led by (0.8% → 1.2%) arrayof_jint_disjoint_arraycopy
│       │   │       └── 708 → 557 samples (13.1% → 12.1%) 9 more callees, led by (12.5% → 11.5%) join() at java.util.concurrent.ForkJoinTask
│       │   └── 61 → 57 samples (1.1% → 1.2%) 4 more callees, led by (1.0% → 1.2%) setDone() at java.util.concurrent.ForkJoinTask
│       └── 805 → 416 samples (14.9% → 9.0%) awaitWork(ForkJoinPool$WorkQueue)
│           ├── … 733 → 365 samples (13.5% → 7.9%, self 26.4% → 18.9% globally) __psynch_cvwait at libsystem_kernel.dylib
│           └── 46 → 29 samples (0.8% → 0.6%) 4 more callees, led by (0.8% → 0.6%) parkUntil(long) at java.util.concurrent.locks.LockSupport
├── … 220 → 241 samples (4.1% → 5.2%) Thread::call_run at libjvm.dylib
│   ├── 100 → 135 samples (1.8% → 2.9%) WorkerThread::run
│   │   ├── … 4 → 23 samples (0.1% → 0.5%) G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region at libjvm.dylib
│   │   ├── … 2 → 7 samples (<0.1% → 0.2%, self 1.0% → 0.8% globally) __psynch_mutexwait at libsystem_kernel.dylib
│   │   └── 80 → 85 samples (1.5% → 1.8%) 7 more callees, led by (0.8% → 1.3%) G1FullGCMarkTask::work
│   └── 120 → 106 samples (2.2% → 2.3%) 4 more callees, led by (1.7% → 2.0%) JavaThread::thread_main_inner
└── 54 → 55 samples (1.0% → 1.2%) 6 more root frames, led by (0.9% → 1.1%) main(String[]) at org.renaissance.core.Launcher
```

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |             % |   Samples | Function                                                                                     | Location                                                   |
| ------: | ----: | ------------: | --------: | -------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| +475.0% |   +19 |   0.1% → 0.5% |    4 → 23 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region`            | `libjvm.dylib`                                             |
|  +13.8% |   +12 |   1.6% → 2.1% |   87 → 99 | `collectClusters(int[])`                                                                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +11.8% |   +11 |   1.7% → 2.3% |  93 → 104 | `doubleValue()`                                                                              | `java.lang.Double`                                         |
|  +91.7% |   +11 |   0.2% → 0.5% |   12 → 23 | `G1FullGCMarker::mark_object`                                                                | `libjvm.dylib`                                             |
|   +2.3% |   +10 |   8.0% → 9.7% | 436 → 446 | `vectorSum()`                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| +133.3% |    +8 |   0.1% → 0.3% |    6 → 14 | `G1RegionMarkStatsCache::add_live_words`                                                     | `libjvm.dylib`                                             |
|   +1.0% |    +7 | 13.2% → 15.7% | 716 → 723 | `accumulate(Double[], double[])`                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   +4.9% |    +6 |   2.3% → 2.8% | 123 → 129 | `computeIfAbsent(Object, Function)`                                                          | `java.util.HashMap`                                        |
|  +85.7% |    +6 |   0.1% → 0.3% |    7 → 13 | `ScopeDesc::decode_body`                                                                     | `libjvm.dylib`                                             |
| +166.7% |    +5 |   0.1% → 0.2% |     3 → 8 | `scan(ForkJoinPool$WorkQueue, int, int)`                                                     | `java.util.concurrent.ForkJoinPool`                        |
| +500.0% |    +5 |  <0.1% → 0.1% |     1 → 6 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>`                              | `libjvm.dylib`                                             |
|     new |    +5 |   0.0% → 0.1% |     0 → 5 | `putVal(int, Object, Object, boolean, boolean)`                                              | `java.util.HashMap`                                        |
|     new |    +5 |   0.0% → 0.1% |     0 → 5 | `void HeapRegion::apply_to_marked_objects<G1FullGCPrepareTask::G1PrepareCompactLiveClosure>` | `libjvm.dylib`                                             |
|     new |    +5 |   0.0% → 0.1% |     0 → 5 | `resize()`                                                                                   | `java.util.HashMap`                                        |
|  +80.0% |    +4 |   0.1% → 0.2% |     5 → 9 | `awaitDone(int, long)`                                                                       | `java.util.concurrent.ForkJoinTask`                        |
|  +23.5% |    +4 |   0.3% → 0.5% |   17 → 21 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`                                    | `java.util.concurrent.ForkJoinPool`                        |
|  +30.8% |    +4 |   0.2% → 0.4% |   13 → 17 | `arrayof_jint_disjoint_arraycopy`                                                            | `<unknown>`                                                |
| +300.0% |    +3 |  <0.1% → 0.1% |     1 → 4 | `tryRemoveAndExec(ForkJoinTask, boolean)`                                                    | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| +300.0% |    +3 |  <0.1% → 0.1% |     1 → 4 | `newLength(int, int, int)`                                                                   | `jdk.internal.util.ArraysSupport`                          |
|  +75.0% |    +3 |   0.1% → 0.2% |     4 → 7 | `inflate_fast`                                                                               | `libzip.dylib`                                             |

##### Ours

|  Change | Delta |             % |   Samples | Function                                   | Location                                                   |
| ------: | ----: | ------------: | --------: | ------------------------------------------ | ---------------------------------------------------------- |
|  +13.8% |   +12 |   1.6% → 2.1% |   87 → 99 | `collectClusters(int[])`                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   +2.3% |   +10 |   8.0% → 9.7% | 436 → 446 | `vectorSum()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   +1.0% |    +7 | 13.2% → 15.7% | 716 → 723 | `accumulate(Double[], double[])`           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|     new |    +1 |  0.0% → <0.1% |     0 → 1 | `merge(Map, Map)`                          | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|     new |    +1 |  0.0% → <0.1% |     0 → 1 | `combineResults(Object, Object)`           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|     new |    +1 |  0.0% → <0.1% |     0 → 1 | `computeClusterAverages()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|     new |    +1 |  0.0% → <0.1% |     0 → 1 | `<init>(JavaKMeans, int, int)`             | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
|     new |    +1 |  0.0% → <0.1% |     0 → 1 | `<init>(JavaKMeans, List, List, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +100.0% |    +1 |         <0.1% |     1 → 2 | `combineResults(Object, Object)`           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|     new |    +1 |  0.0% → <0.1% |     0 → 1 | `combineResults(Object, Object)`           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

##### Native

|  Change | Delta |            % | Samples | Function                                                                                                                                                   | Location                 |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| +475.0% |   +19 |  0.1% → 0.5% |  4 → 23 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region`                                                                          | `libjvm.dylib`           |
|  +91.7% |   +11 |  0.2% → 0.5% | 12 → 23 | `G1FullGCMarker::mark_object`                                                                                                                              | `libjvm.dylib`           |
| +133.3% |    +8 |  0.1% → 0.3% |  6 → 14 | `G1RegionMarkStatsCache::add_live_words`                                                                                                                   | `libjvm.dylib`           |
|  +85.7% |    +6 |  0.1% → 0.3% |  7 → 13 | `ScopeDesc::decode_body`                                                                                                                                   | `libjvm.dylib`           |
| +500.0% |    +5 | <0.1% → 0.1% |   1 → 6 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>`                                                                                            | `libjvm.dylib`           |
|     new |    +5 |  0.0% → 0.1% |   0 → 5 | `void HeapRegion::apply_to_marked_objects<G1FullGCPrepareTask::G1PrepareCompactLiveClosure>`                                                               | `libjvm.dylib`           |
|  +30.8% |    +4 |  0.2% → 0.4% | 13 → 17 | `arrayof_jint_disjoint_arraycopy`                                                                                                                          | `<unknown>`              |
|  +75.0% |    +3 |  0.1% → 0.2% |   4 → 7 | `inflate_fast`                                                                                                                                             | `libzip.dylib`           |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `G1FullGCCompactTask::copy_object_to_new_location`                                                                                                         | `libjvm.dylib`           |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `frame::sender_raw`                                                                                                                                        | `libjvm.dylib`           |
| +100.0% |    +2 | <0.1% → 0.1% |   2 → 4 | `resource_allocate_bytes`                                                                                                                                  | `libjvm.dylib`           |
|   +3.1% |    +2 |  1.2% → 1.4% | 64 → 66 | `__psynch_cvsignal`                                                                                                                                        | `libsystem_kernel.dylib` |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `G1BarrierSet::write_ref_array_work`                                                                                                                       | `libjvm.dylib`           |
| +100.0% |    +2 | <0.1% → 0.1% |   2 → 4 | `InstanceKlass::get_jmethod_id`                                                                                                                            | `libjvm.dylib`           |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `inflate`                                                                                                                                                  | `libzip.dylib`           |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `ClassFileParser::parse_method`                                                                                                                            | `libjvm.dylib`           |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `__psynch_mutexdrop`                                                                                                                                       | `libsystem_kernel.dylib` |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `CallTraceStorage::put`                                                                                                                                    | `libasyncProfiler.dylib` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `AccessInternal::PostRuntimeDispatch<G1BarrierSet::AccessBarrier<401510ull, G1BarrierSet>, (AccessInternal::BarrierType)3, 401510ull>::oop_access_barrier` | `libjvm.dylib`           |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `ThreadLocalAllocBuffer::print_stats`                                                                                                                      | `libjvm.dylib`           |

##### Standard library

|  Change | Delta |            % |   Samples | Function                                                  | Location                                      |
| ------: | ----: | -----------: | --------: | --------------------------------------------------------- | --------------------------------------------- |
|  +11.8% |   +11 |  1.7% → 2.3% |  93 → 104 | `doubleValue()`                                           | `java.lang.Double`                            |
|   +4.9% |    +6 |  2.3% → 2.8% | 123 → 129 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                           |
| +166.7% |    +5 |  0.1% → 0.2% |     3 → 8 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`           |
|     new |    +5 |  0.0% → 0.1% |     0 → 5 | `putVal(int, Object, Object, boolean, boolean)`           | `java.util.HashMap`                           |
|     new |    +5 |  0.0% → 0.1% |     0 → 5 | `resize()`                                                | `java.util.HashMap`                           |
|  +80.0% |    +4 |  0.1% → 0.2% |     5 → 9 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`           |
|  +23.5% |    +4 |  0.3% → 0.5% |   17 → 21 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
| +300.0% |    +3 | <0.1% → 0.1% |     1 → 4 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| +300.0% |    +3 | <0.1% → 0.1% |     1 → 4 | `newLength(int, int, int)`                                | `jdk.internal.util.ArraysSupport`             |
|  +28.6% |    +2 |  0.1% → 0.2% |     7 → 9 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`           |
|     new |    +2 | 0.0% → <0.1% |     0 → 2 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`           |
|     new |    +2 | 0.0% → <0.1% |     0 → 2 | `compareAndSet(long, long)`                               | `java.util.concurrent.atomic.AtomicLong`      |
|     new |    +2 | 0.0% → <0.1% |     0 → 2 | `entrySet()`                                              | `java.util.HashMap`                           |
| +100.0% |    +1 |        <0.1% |     1 → 2 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`           |
| +100.0% |    +1 |        <0.1% |     1 → 2 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`          |
|  +16.7% |    +1 |  0.1% → 0.2% |     6 → 7 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                           |
|  +50.0% |    +1 | <0.1% → 0.1% |     2 → 3 | `park(boolean, long)`                                     | `jdk.internal.misc.Unsafe`                    |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `park()`                                                  | `java.util.concurrent.locks.LockSupport`      |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `push(ForkJoinTask, ForkJoinPool, boolean)`               | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `toArray()`                                               | `java.util.HashMap$KeySet`                    |

##### Compiler

|  Change | Delta |            % | Samples | Function                                    | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------- | -------------- |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `PhaseIdealLoop::build_loop_early`          | `libjvm.dylib` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `ConnectionGraph::compute_escape`           | `libjvm.dylib` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `PhaseChaitin::build_ifg_physical`          | `libjvm.dylib` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `Matcher::find_shared`                      | `libjvm.dylib` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `LinearScanWalker::alloc_free_reg`          | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `Node::replace_edge`                        | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseIterGVN::transform_old`               | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseCFG::partial_latency_of_defs`         | `libjvm.dylib` |
| +100.0% |    +1 |        <0.1% |   1 → 2 | `PhaseAggressiveCoalesce::insert_copies`    | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseChaitin::post_allocate_copy_removal`  | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `CompilationPolicy::call_event`             | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `Node_Backward_Iterator::next`              | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `RegionNode::Identity`                      | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `RegionNode::hash`                          | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `Node::needs_anti_dependence_check`         | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `Node::latency`                             | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `TypeTuple::xdual`                          | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `Type::hashcons`                            | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseIFG::re_insert`                       | `libjvm.dylib` |

##### JIT

| Change | Delta |            % | Samples | Function                  | Location    |
| -----: | ----: | -----------: | ------: | ------------------------- | ----------- |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `I2C/C2I adapters(0xbbb)` | `<unknown>` |

#### Improvements

Functions with the largest decrease in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |             % |     Samples | Function                                                                                                   | Location                                                   |
| ------: | ----: | ------------: | ----------: | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
|  -39.2% |  -562 | 26.4% → 18.9% | 1,432 → 870 | `__psynch_cvwait`                                                                                          | `libsystem_kernel.dylib`                                   |
|  -28.1% |  -120 |   7.9% → 6.7% |   427 → 307 | `findNearestCentroid()`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -13.2% |  -110 | 15.3% → 15.7% |   831 → 721 | `distance(Double[], Double[])`                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -14.0% |   -30 |          4.0% |   215 → 185 | `forward_copy_longs`                                                                                       | `<unknown>`                                                |
|  -34.0% |   -18 |   1.0% → 0.8% |     53 → 35 | `__psynch_mutexwait`                                                                                       | `libsystem_kernel.dylib`                                   |
|  -45.9% |   -17 |   0.7% → 0.4% |     37 → 20 | `checkIndex(int, int)`                                                                                     | `java.util.Objects`                                        |
|  -24.1% |   -13 |   1.0% → 0.9% |     54 → 41 | `zero_blocks`                                                                                              | `<unknown>`                                                |
|   -8.8% |   -13 |   2.7% → 2.9% |   148 → 135 | `elementData(int)`                                                                                         | `java.util.ArrayList`                                      |
|  -39.1% |    -9 |   0.4% → 0.3% |     23 → 14 | `RegisterMap::RegisterMap`                                                                                 | `libjvm.dylib`                                             |
| removed |    -7 |   0.1% → 0.0% |       7 → 0 | `join()`                                                                                                   | `java.util.concurrent.ForkJoinTask`                        |
|  -85.7% |    -6 |  0.1% → <0.1% |       7 → 1 | `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>`                                            | `libjvm.dylib`                                             |
|  -41.7% |    -5 |          0.2% |      12 → 7 | `_platform_memmove`                                                                                        | `libsystem_platform.dylib`                                 |
|  -71.4% |    -5 |  0.1% → <0.1% |       7 → 2 | `GenericTaskQueueSet<OverflowTaskQueue<ObjArrayTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>::steal_best_of_2` | `libjvm.dylib`                                             |
|  -44.4% |    -4 |   0.2% → 0.1% |       9 → 5 | `copyOf(Object[], int)`                                                                                    | `java.util.Arrays`                                         |
| removed |    -4 |   0.1% → 0.0% |       4 → 0 | `addAll(Collection)`                                                                                       | `java.util.ArrayList`                                      |
| removed |    -4 |   0.1% → 0.0% |       4 → 0 | `ObjArrayAllocator::initialize`                                                                            | `libjvm.dylib`                                             |
| removed |    -3 |   0.1% → 0.0% |       3 → 0 | `forEach(BiConsumer)`                                                                                      | `java.util.HashMap`                                        |
|  -75.0% |    -3 |  0.1% → <0.1% |       4 → 1 | `JvmtiEnvBase::get_stack_trace`                                                                            | `libjvm.dylib`                                             |
| removed |    -3 |   0.1% → 0.0% |       3 → 0 | `Klass::check_array_allocation_length`                                                                     | `libjvm.dylib`                                             |
| removed |    -3 |   0.1% → 0.0% |       3 → 0 | `FastThreadsListHandle::FastThreadsListHandle`                                                             | `libjvm.dylib`                                             |

##### Ours

|  Change | Delta |             % |   Samples | Function                       | Location                                                   |
| ------: | ----: | ------------: | --------: | ------------------------------ | ---------------------------------------------------------- |
|  -28.1% |  -120 |   7.9% → 6.7% | 427 → 307 | `findNearestCentroid()`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -13.2% |  -110 | 15.3% → 15.7% | 831 → 721 | `distance(Double[], Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |    -2 |  <0.1% → 0.0% |     2 → 0 | `add(double[], double[])`      | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `compute()`                    | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
|  -50.0% |    -1 |         <0.1% |     2 → 1 | `createSubtask(int, int)`      | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `forkThreshold()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### Native

|  Change | Delta |             % |     Samples | Function                                                                                                   | Location                   |
| ------: | ----: | ------------: | ----------: | ---------------------------------------------------------------------------------------------------------- | -------------------------- |
|  -39.2% |  -562 | 26.4% → 18.9% | 1,432 → 870 | `__psynch_cvwait`                                                                                          | `libsystem_kernel.dylib`   |
|  -14.0% |   -30 |          4.0% |   215 → 185 | `forward_copy_longs`                                                                                       | `<unknown>`                |
|  -34.0% |   -18 |   1.0% → 0.8% |     53 → 35 | `__psynch_mutexwait`                                                                                       | `libsystem_kernel.dylib`   |
|  -39.1% |    -9 |   0.4% → 0.3% |     23 → 14 | `RegisterMap::RegisterMap`                                                                                 | `libjvm.dylib`             |
|  -85.7% |    -6 |  0.1% → <0.1% |       7 → 1 | `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>`                                            | `libjvm.dylib`             |
|  -41.7% |    -5 |          0.2% |      12 → 7 | `_platform_memmove`                                                                                        | `libsystem_platform.dylib` |
|  -71.4% |    -5 |  0.1% → <0.1% |       7 → 2 | `GenericTaskQueueSet<OverflowTaskQueue<ObjArrayTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>::steal_best_of_2` | `libjvm.dylib`             |
| removed |    -4 |   0.1% → 0.0% |       4 → 0 | `ObjArrayAllocator::initialize`                                                                            | `libjvm.dylib`             |
|  -75.0% |    -3 |  0.1% → <0.1% |       4 → 1 | `JvmtiEnvBase::get_stack_trace`                                                                            | `libjvm.dylib`             |
| removed |    -3 |   0.1% → 0.0% |       3 → 0 | `Klass::check_array_allocation_length`                                                                     | `libjvm.dylib`             |
| removed |    -3 |   0.1% → 0.0% |       3 → 0 | `FastThreadsListHandle::FastThreadsListHandle`                                                             | `libjvm.dylib`             |
| removed |    -2 |  <0.1% → 0.0% |       2 → 0 | `G1ParScanThreadState::trim_queue_to_threshold`                                                            | `libjvm.dylib`             |
|   -9.5% |    -2 |          0.4% |     21 → 19 | `_platform_bzero`                                                                                          | `libsystem_platform.dylib` |
|  -66.7% |    -2 |  0.1% → <0.1% |       3 → 1 | `LockTracer::UnsafeParkHook`                                                                               | `libasyncProfiler.dylib`   |
| removed |    -2 |  <0.1% → 0.0% |       2 → 0 | `vframe::java_sender`                                                                                      | `libjvm.dylib`             |
|  -28.6% |    -2 |          0.1% |       7 → 5 | `_kernelrpc_mach_port_deallocate_trap`                                                                     | `libsystem_kernel.dylib`   |
| removed |    -2 |  <0.1% → 0.0% |       2 → 0 | `jni_GetObjectClass`                                                                                       | `libjvm.dylib`             |
| removed |    -2 |  <0.1% → 0.0% |       2 → 0 | `compiledVFrame::sender`                                                                                   | `libjvm.dylib`             |
|  -66.7% |    -2 |  0.1% → <0.1% |       3 → 1 | `pthread_testcancel`                                                                                       | `libsystem_pthread.dylib`  |
|  -66.7% |    -2 |  0.1% → <0.1% |       3 → 1 | `write`                                                                                                    | `libsystem_kernel.dylib`   |

##### Standard library

|  Change | Delta |            % |   Samples | Function                            | Location                                            |
| ------: | ----: | -----------: | --------: | ----------------------------------- | --------------------------------------------------- |
|  -45.9% |   -17 |  0.7% → 0.4% |   37 → 20 | `checkIndex(int, int)`              | `java.util.Objects`                                 |
|   -8.8% |   -13 |  2.7% → 2.9% | 148 → 135 | `elementData(int)`                  | `java.util.ArrayList`                               |
| removed |    -7 |  0.1% → 0.0% |     7 → 0 | `join()`                            | `java.util.concurrent.ForkJoinTask`                 |
|  -44.4% |    -4 |  0.2% → 0.1% |     9 → 5 | `copyOf(Object[], int)`             | `java.util.Arrays`                                  |
| removed |    -4 |  0.1% → 0.0% |     4 → 0 | `addAll(Collection)`                | `java.util.ArrayList`                               |
| removed |    -3 |  0.1% → 0.0% |     3 → 0 | `forEach(BiConsumer)`               | `java.util.HashMap`                                 |
|   -8.3% |    -2 |  0.4% → 0.5% |   24 → 22 | `grow(int)`                         | `java.util.ArrayList`                               |
|  -50.0% |    -2 | 0.1% → <0.1% |     4 → 2 | `awaitWork(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool`                 |
|  -66.7% |    -2 | 0.1% → <0.1% |     3 → 1 | `putMapEntries(Map, boolean)`       | `java.util.HashMap`                                 |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `unpark(Thread)`                    | `java.util.concurrent.locks.LockSupport`            |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `begin(long)`                       | `java.util.stream.Nodes$FixedNodeBuilder`           |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `isOpen()`                          | `java.lang.module.ModuleDescriptor`                 |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `get(int)`                          | `java.util.ArrayList`                               |
|   -2.1% |    -1 |  0.9% → 1.0% |   47 → 46 | `add(Object, Object[], int)`        | `java.util.ArrayList`                               |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `add(Object)`                       | `java.util.ArrayList`                               |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `invoke(Object)`                    | `java.lang.invoke.LambdaForm$MH.0x000000f001000c00` |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `boxed()`                           | `java.util.stream.DoublePipeline`                   |
|   -3.7% |    -1 |  0.5% → 0.6% |   27 → 26 | `hash(Object)`                      | `java.util.HashMap`                                 |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `hasTasks(boolean)`                 | `java.util.concurrent.ForkJoinPool`                 |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `hashCode()`                        | `java.lang.Object`                                  |

##### Compiler

|  Change | Delta |            % | Samples | Function                                      | Location       |
| ------: | ----: | -----------: | ------: | --------------------------------------------- | -------------- |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `PhaseChaitin::elide_copy`                    | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Node::set_req_X`                             | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseIterGVN::remove_globally_dead_node`     | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhiNode::Identity`                           | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `CompileQueue::get`                           | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseCCP::push_more_uses`                    | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseIdealLoop::build_loop_tree`             | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `C2Compiler::name`                            | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Node::jvms`                                  | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseBlockLayout::find_edges`                | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep` | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseIdealLoop::build_loop_late`             | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Scheduling::AddNodeToBundle`                 | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `ParmNode::is_CFG`                            | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseLive::compute`                          | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `ciTypeFlow::get_block_for`                   | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `loadConNKlassNode::emit`                     | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `TypeInstPtr::make`                           | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseCFG::fixup_flow`                        | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseCCP::transform`                         | `libjvm.dylib` |

##### JIT

|  Change | Delta |            % | Samples | Function                 | Location    |
| ------: | ----: | -----------: | ------: | ------------------------ | ----------- |
|  -24.1% |   -13 |  1.0% → 0.9% | 54 → 41 | `zero_blocks`            | `<unknown>` |
|  -75.0% |    -3 | 0.1% → <0.1% |   4 → 1 | `vtable stub`            | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0xbb)` | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `itable stub`            | `<unknown>` |

#### Lines

Lines with the largest change in contribution to each function's self samples.

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % | Samples | Location                                                       |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------- |
| +62.5% |   +10 | 18.4% → 26.3% | 16 → 26 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:212` |
| +20.0% |    +4 | 23.0% → 24.2% | 20 → 24 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |
|  -8.3% |    -2 | 27.6% → 22.2% | 24 → 22 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:214` |

##### `doubleValue()` (`java.lang.Double`)

| Change | Delta |      % |  Samples | Location                |
| -----: | ----: | -----: | -------: | ----------------------- |
| +11.8% |   +11 | 100.0% | 93 → 104 | `java.lang.Double:1001` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |             % |   Samples | Location                                                      |
| -----: | ----: | ------------: | --------: | ------------------------------------------------------------- |
| +32.0% |    +8 |   5.7% → 7.4% |   25 → 33 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:402` |
|  +0.5% |    +2 | 94.3% → 92.6% | 411 → 413 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:403` |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |             % |   Samples | Location                                                      |
| -----: | ----: | ------------: | --------: | ------------------------------------------------------------- |
| +26.7% |   +20 | 10.5% → 13.1% |   75 → 95 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:411` |
|  -2.0% |   -13 | 89.5% → 86.9% | 641 → 628 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:412` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

| Change | Delta |             % | Samples | Location                 |
| -----: | ----: | ------------: | ------: | ------------------------ |
| +40.6% |   +13 | 26.0% → 34.9% | 32 → 45 | `java.util.HashMap:1213` |
| -25.0% |    -8 | 26.0% → 18.6% | 32 → 24 | `java.util.HashMap:1197` |
| -83.3% |    -5 |   4.9% → 0.8% |   6 → 1 | `java.util.HashMap:1219` |
| +44.4% |    +4 |  7.3% → 10.1% |  9 → 13 | `java.util.HashMap:1222` |
| +11.8% |    +2 | 13.8% → 14.7% | 17 → 19 | `java.util.HashMap:1204` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |              % | Samples | Location                                 |
| -----: | ----: | -------------: | ------: | ---------------------------------------- |
|    new |    +2 |   0.0% → 25.0% |   0 → 2 | `java.util.concurrent.ForkJoinPool:1825` |
| +33.3% |    +1 | 100.0% → 50.0% |   3 → 4 | `java.util.concurrent.ForkJoinPool:1829` |
|    new |    +1 |   0.0% → 12.5% |   0 → 1 | `java.util.concurrent.ForkJoinPool:1837` |
|    new |    +1 |   0.0% → 12.5% |   0 → 1 | `java.util.concurrent.ForkJoinPool:1846` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

| Change | Delta |            % | Samples | Location                |
| -----: | ----: | -----------: | ------: | ----------------------- |
|    new |    +2 | 0.0% → 40.0% |   0 → 2 | `java.util.HashMap:637` |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `java.util.HashMap:634` |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `java.util.HashMap:636` |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `java.util.HashMap:649` |

##### `resize()` (`java.util.HashMap`)

| Change | Delta |            % | Samples | Location                |
| -----: | ----: | -----------: | ------: | ----------------------- |
|    new |    +3 | 0.0% → 60.0% |   0 → 3 | `java.util.HashMap:711` |
|    new |    +2 | 0.0% → 40.0% |   0 → 2 | `java.util.HashMap:684` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |             % | Samples | Location                                |
| ------: | ----: | ------------: | ------: | --------------------------------------- |
|     new |    +2 |  0.0% → 22.2% |   0 → 2 | `java.util.concurrent.ForkJoinTask:409` |
|     new |    +2 |  0.0% → 22.2% |   0 → 2 | `java.util.concurrent.ForkJoinTask:413` |
| +100.0% |    +1 | 20.0% → 22.2% |   1 → 2 | `java.util.concurrent.ForkJoinTask:411` |
| removed |    -1 |  20.0% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinTask:423` |
| removed |    -1 |  20.0% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinTask:435` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % | Samples | Location                                 |
| ------: | ----: | ------------: | ------: | ---------------------------------------- |
|  -80.0% |    -4 |  29.4% → 4.8% |   5 → 1 | `java.util.concurrent.ForkJoinPool:2051` |
| +100.0% |    +1 |   5.9% → 9.5% |   1 → 2 | `java.util.concurrent.ForkJoinPool:2044` |
|  +20.0% |    +1 | 29.4% → 28.6% |   5 → 6 | `java.util.concurrent.ForkJoinPool:2053` |
|     new |    +1 |   0.0% → 4.8% |   0 → 1 | `java.util.concurrent.ForkJoinPool:2023` |
|     new |    +1 |   0.0% → 4.8% |   0 → 1 | `java.util.concurrent.ForkJoinPool:2047` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change | Delta |             % | Samples | Location                                           |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinPool$WorkQueue:1331` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `java.util.concurrent.ForkJoinPool$WorkQueue:1329` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `java.util.concurrent.ForkJoinPool$WorkQueue:1337` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `java.util.concurrent.ForkJoinPool$WorkQueue:1343` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `java.util.concurrent.ForkJoinPool$WorkQueue:1344` |

##### `newLength(int, int, int)` (`jdk.internal.util.ArraysSupport`)

|  Change | Delta |      % | Samples | Location                              |
| ------: | ----: | -----: | ------: | ------------------------------------- |
| +300.0% |    +3 | 100.0% |   1 → 4 | `jdk.internal.util.ArraysSupport:741` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |             % | Samples | Location                                        |
| -----: | ----: | ------------: | ------: | ----------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans:112` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % | Samples | Location                                                       |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:171` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |             % | Samples | Location                                                   |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:318` |

##### `<init>(JavaKMeans, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change | Delta |             % | Samples | Location                                                   |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask:136` |

##### `<init>(JavaKMeans, List, List, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % | Samples | Location                                                       |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:190` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |      % | Samples | Location                                                      |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:367` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |             % | Samples | Location                                                   |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:276` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |             % | Samples | Location                                 |
| -----: | ----: | ------------: | ------: | ---------------------------------------- |
| +75.0% |    +3 | 57.1% → 77.8% |   4 → 7 | `java.util.concurrent.ForkJoinPool:1809` |
| -33.3% |    -1 | 42.9% → 22.2% |   3 → 2 | `java.util.concurrent.ForkJoinPool:1808` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % | Samples | Location                                |
| -----: | ----: | ------------: | ------: | --------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `java.util.concurrent.ForkJoinTask:667` |

##### `compareAndSet(long, long)` (`java.util.concurrent.atomic.AtomicLong`)

| Change | Delta |             % | Samples | Location                                     |
| -----: | ----: | ------------: | ------: | -------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `java.util.concurrent.atomic.AtomicLong:151` |

##### `entrySet()` (`java.util.HashMap`)

| Change | Delta |             % | Samples | Location                 |
| -----: | ----: | ------------: | ------: | ------------------------ |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `java.util.HashMap:1099` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |            % | Samples | Location                                |
| -----: | ----: | -----------: | ------: | --------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `java.util.concurrent.ForkJoinTask:385` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|  Change | Delta |      % | Samples | Location                                 |
| ------: | ----: | -----: | ------: | ---------------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `java.util.concurrent.RecursiveTask:110` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Location                 |
| ------: | ----: | ------------: | ------: | ------------------------ |
| removed |    -1 |  16.7% → 0.0% |   1 → 0 | `java.util.HashMap:1372` |
| +100.0% |    +1 | 16.7% → 28.6% |   1 → 2 | `java.util.HashMap:1378` |
|     new |    +1 |  0.0% → 14.3% |   0 → 1 | `java.util.HashMap:1391` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

| Change | Delta |             % | Samples | Location                                     |
| -----: | ----: | ------------: | ------: | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.concurrent.locks.LockSupport:371` |

##### `push(ForkJoinTask, ForkJoinPool, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |             % | Samples | Location                                           |
| -----: | ----: | ------------: | ------: | -------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.concurrent.ForkJoinPool$WorkQueue:1154` |

##### `toArray()` (`java.util.HashMap$KeySet`)

| Change | Delta |             % | Samples | Location                        |
| -----: | ----: | ------------: | ------: | ------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.HashMap$KeySet:1001` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % |   Samples | Location                                                       |
| ------: | ----: | ------------: | --------: | -------------------------------------------------------------- |
|  -44.2% |  -106 | 56.2% → 43.6% | 240 → 134 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:231` |
|  -35.7% |   -15 |   9.8% → 8.8% |   42 → 27 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:229` |
|  -77.8% |   -14 |   4.2% → 1.3% |    18 → 4 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:226` |
| +171.4% |   +12 |   1.6% → 6.2% |    7 → 19 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:225` |
|   +4.2% |    +5 | 27.6% → 40.1% | 118 → 123 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:230` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % |   Samples | Location                                                       |
| ------: | ----: | ------------: | --------: | -------------------------------------------------------------- |
|  -26.8% |   -77 | 34.5% → 29.1% | 287 → 210 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:249` |
|   -9.1% |   -49 | 64.5% → 67.5% | 536 → 487 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:248` |
| +200.0% |   +16 |   1.0% → 3.3% |    8 → 24 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:250` |

##### `checkIndex(int, int)` (`java.util.Objects`)

| Change | Delta |      % | Samples | Location                |
| -----: | ----: | -----: | ------: | ----------------------- |
| -45.9% |   -17 | 100.0% | 37 → 20 | `java.util.Objects:385` |

##### `elementData(int)` (`java.util.ArrayList`)

| Change | Delta |      % |   Samples | Location                  |
| -----: | ----: | -----: | --------: | ------------------------- |
|  -8.8% |   -13 | 100.0% | 148 → 135 | `java.util.ArrayList:411` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |            % | Samples | Location                                |
| ------: | ----: | -----------: | ------: | --------------------------------------- |
| removed |    -4 | 57.1% → 0.0% |   4 → 0 | `java.util.concurrent.ForkJoinTask:651` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinTask:650` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinTask:652` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinTask:654` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change | Delta |      % | Samples | Location                |
| -----: | ----: | -----: | ------: | ----------------------- |
| -44.4% |    -4 | 100.0% |   9 → 5 | `java.util.Arrays:3482` |

##### `addAll(Collection)` (`java.util.ArrayList`)

|  Change | Delta |            % | Samples | Location                  |
| ------: | ----: | -----------: | ------: | ------------------------- |
| removed |    -2 | 50.0% → 0.0% |   2 → 0 | `java.util.ArrayList:760` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `java.util.ArrayList:755` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `java.util.ArrayList:759` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Location                 |
| ------: | ----: | ------------: | ------: | ------------------------ |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `java.util.HashMap:1427` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |             % | Samples | Location                                                      |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:432` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|  Change | Delta |             % | Samples | Location                                                   |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask:150` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % | Samples | Location                                                      |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------- |
| -50.0% |    -1 | 100.0% |   2 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:419` |

##### `forkThreshold()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % | Samples | Location                                                       |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:198` |

##### `grow(int)` (`java.util.ArrayList`)

|  Change | Delta |           % | Samples | Location                  |
| ------: | ----: | ----------: | ------: | ------------------------- |
| removed |    -1 | 4.2% → 0.0% |   1 → 0 | `java.util.ArrayList:232` |
| removed |    -1 | 4.2% → 0.0% |   1 → 0 | `java.util.ArrayList:234` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |              % | Samples | Location                                 |
| ------: | ----: | -------------: | ------: | ---------------------------------------- |
| removed |    -1 |   25.0% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinPool:1869` |
|  -33.3% |    -1 | 75.0% → 100.0% |   3 → 2 | `java.util.concurrent.ForkJoinPool:1880` |

##### `putMapEntries(Map, boolean)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Location                |
| ------: | ----: | ------------: | ------: | ----------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `java.util.HashMap:503` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.HashMap:522` |

##### `unpark(Thread)` (`java.util.concurrent.locks.LockSupport`)

|  Change | Delta |             % | Samples | Location                                     |
| ------: | ----: | ------------: | ------: | -------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `java.util.concurrent.locks.LockSupport:181` |

##### `begin(long)` (`java.util.stream.Nodes$FixedNodeBuilder`)

|  Change | Delta |             % | Samples | Location                                       |
| ------: | ----: | ------------: | ------: | ---------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `java.util.stream.Nodes$FixedNodeBuilder:1225` |

##### `isOpen()` (`java.lang.module.ModuleDescriptor`)

|  Change | Delta |             % | Samples | Location                                 |
| ------: | ----: | ------------: | ------: | ---------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.lang.module.ModuleDescriptor:1387` |

##### `get(int)` (`java.util.ArrayList`)

|  Change | Delta |             % | Samples | Location                  |
| ------: | ----: | ------------: | ------: | ------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.ArrayList:427` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

|  Change | Delta |             % | Samples | Location                  |
| ------: | ----: | ------------: | ------: | ------------------------- |
| +100.0% |    +4 |  8.5% → 17.4% |   4 → 8 | `java.util.ArrayList:484` |
|   -7.3% |    -3 | 87.2% → 82.6% | 41 → 38 | `java.util.ArrayList:482` |
| removed |    -2 |   4.3% → 0.0% |   2 → 0 | `java.util.ArrayList:483` |

##### `add(Object)` (`java.util.ArrayList`)

|  Change | Delta |             % | Samples | Location                  |
| ------: | ----: | ------------: | ------: | ------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.ArrayList:495` |

##### `boxed()` (`java.util.stream.DoublePipeline`)

|  Change | Delta |             % | Samples | Location                              |
| ------: | ----: | ------------: | ------: | ------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.stream.DoublePipeline:199` |

##### `hash(Object)` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Location                |
| -----: | ----: | -----: | ------: | ----------------------- |
|  -3.7% |    -1 | 100.0% | 27 → 26 | `java.util.HashMap:338` |

##### `hasTasks(boolean)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % | Samples | Location                                 |
| ------: | ----: | ------------: | ------: | ---------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinPool:1786` |

#### Callers

Callers with the largest change in contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                                                              | Location       |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------------- | -------------- |
| +475.0% |   +19 | 100.0% |  4 → 23 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::do_heap_region` | `libjvm.dylib` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % | Samples | Caller              | Location                                                   |
| -----: | ----: | -----: | ------: | ------------------- | ---------------------------------------------------------- |
| +13.8% |   +12 | 100.0% | 87 → 99 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `doubleValue()` (`java.lang.Double`)

| Change | Delta |             % | Samples | Caller                           | Location                                                   |
| -----: | ----: | ------------: | ------: | -------------------------------- | ---------------------------------------------------------- |
| +13.3% |   +10 | 80.6% → 81.7% | 75 → 85 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +5.6% |    +1 | 19.4% → 18.3% | 18 → 19 | `distance(Double[], Double[])`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `G1FullGCMarker::mark_object` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                                                                               | Location       |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------- | -------------- |
| +81.8% |    +9 | 91.7% → 87.0% | 11 → 20 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>`                                      | `libjvm.dylib` |
|    new |    +1 |   0.0% → 4.3% |   0 → 1 | `G1FullGCMarker::follow_marking_stacks`                                                              | `libjvm.dylib` |
|    new |    +1 |   0.0% → 4.3% |   0 → 1 | `void OopOopIterateDispatch<G1MarkAndPushClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `libjvm.dylib` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |   Samples | Caller              | Location                                                  |
| -----: | ----: | -----: | --------: | ------------------- | --------------------------------------------------------- |
|  +2.3% |   +10 | 100.0% | 436 → 446 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `G1RegionMarkStatsCache::add_live_words` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                                          | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------- | -------------- |
| +400.0% |    +4 | 16.7% → 35.7% |   1 → 5 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` | `libjvm.dylib` |
|  +80.0% |    +4 | 83.3% → 64.3% |   5 → 9 | `G1FullGCMarker::mark_object`                                   | `libjvm.dylib` |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |   Samples | Caller        | Location                                                  |
| -----: | ----: | -----: | --------: | ------------- | --------------------------------------------------------- |
|  +1.0% |    +7 | 100.0% | 716 → 723 | `vectorSum()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

| Change | Delta |      % |   Samples | Caller                   | Location                                                   |
| -----: | ----: | -----: | --------: | ------------------------ | ---------------------------------------------------------- |
|  +4.9% |    +6 | 100.0% | 123 → 129 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `ScopeDesc::decode_body` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                 | Location       |
| ------: | ----: | ------------: | ------: | ---------------------- | -------------- |
| +100.0% |    +5 | 71.4% → 76.9% |  5 → 10 | `ScopeDesc::sender`    | `libjvm.dylib` |
|  +50.0% |    +1 | 28.6% → 23.1% |   2 → 3 | `ScopeDesc::ScopeDesc` | `libjvm.dylib` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |      % | Samples | Caller                              | Location                            |
| ------: | ----: | -----: | ------: | ----------------------------------- | ----------------------------------- |
| +166.7% |    +5 | 100.0% |   3 → 8 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                                  | Location       |
| ------: | ----: | -------------: | ------: | --------------------------------------- | -------------- |
|     new |    +3 |   0.0% → 50.0% |   0 → 3 | `G1FullGCMarker::complete_marking`      | `libjvm.dylib` |
| +200.0% |    +2 | 100.0% → 50.0% |   1 → 3 | `G1FullGCMarker::follow_marking_stacks` | `libjvm.dylib` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

| Change | Delta |             % | Samples | Caller                        | Location            |
| -----: | ----: | ------------: | ------: | ----------------------------- | ------------------- |
|    new |    +5 | 0.0% → 100.0% |   0 → 5 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `void HeapRegion::apply_to_marked_objects<G1FullGCPrepareTask::G1PrepareCompactLiveClosure>` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                      | Location       |
| -----: | ----: | ------------: | ------: | --------------------------- | -------------- |
|    new |    +5 | 0.0% → 100.0% |   0 → 5 | `G1FullGCPrepareTask::work` | `libjvm.dylib` |

##### `resize()` (`java.util.HashMap`)

| Change | Delta |            % | Samples | Caller                                          | Location            |
| -----: | ----: | -----------: | ------: | ----------------------------------------------- | ------------------- |
|    new |    +3 | 0.0% → 60.0% |   0 → 3 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |
|    new |    +2 | 0.0% → 40.0% |   0 → 2 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |      % | Samples | Caller   | Location                            |
| -----: | ----: | -----: | ------: | -------- | ----------------------------------- |
| +80.0% |    +4 | 100.0% |   5 → 9 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % | Samples | Caller                 | Location                            |
| -----: | ----: | -----: | ------: | ---------------------- | ----------------------------------- |
| +23.5% |    +4 | 100.0% | 17 → 21 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `arrayof_jint_disjoint_arraycopy` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller      | Location              |
| ------: | ----: | ------------: | ------: | ----------- | --------------------- |
| +200.0% |    +4 | 15.4% → 35.3% |   2 → 6 | `grow(int)` | `java.util.ArrayList` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change | Delta |      % | Samples | Caller                 | Location                            |
| ------: | ----: | -----: | ------: | ---------------------- | ----------------------------------- |
| +300.0% |    +3 | 100.0% |   1 → 4 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `newLength(int, int, int)` (`jdk.internal.util.ArraysSupport`)

|  Change | Delta |      % | Samples | Caller      | Location              |
| ------: | ----: | -----: | ------: | ----------- | --------------------- |
| +300.0% |    +3 | 100.0% |   1 → 4 | `grow(int)` | `java.util.ArrayList` |

##### `inflate_fast` (`libzip.dylib`)

| Change | Delta |      % | Samples | Caller                                          | Location       |
| -----: | ----: | -----: | ------: | ----------------------------------------------- | -------------- |
| +75.0% |    +3 | 100.0% |   4 → 7 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |             % | Samples | Caller                     | Location                                                   |
| -----: | ----: | ------------: | ------: | -------------------------- | ---------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % | Samples | Caller      | Location                                               |
| -----: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |             % | Samples | Caller              | Location                                               |
| -----: | ----: | ------------: | ------: | ------------------- | ------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `<init>(JavaKMeans, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change | Delta |             % | Samples | Caller                                     | Location                                                   |
| -----: | ----: | ------------: | ------: | ------------------------------------------ | ---------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<init>(JavaKMeans, List, List, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `<init>(JavaKMeans, List, List, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % | Samples | Caller                    | Location                                                   |
| -----: | ----: | ------------: | ------: | ------------------------- | ---------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `createSubtask(int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |      % | Samples | Caller      | Location                                               |
| ------: | ----: | -----: | ------: | ----------- | ------------------------------------------------------ |
| +100.0% |    +1 | 100.0% |   1 → 2 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |             % | Samples | Caller      | Location                                               |
| -----: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `G1FullGCCompactTask::copy_object_to_new_location` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                                               | Location       |
| ------: | ----: | -----: | ------: | ---------------------------------------------------- | -------------- |
| +300.0% |    +3 | 100.0% |   1 → 4 | `G1FullGCCompactTask::G1CompactRegionClosure::apply` | `libjvm.dylib` |

##### `frame::sender_raw` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                                     | Location       |
| -----: | ----: | -----------: | ------: | ------------------------------------------ | -------------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `frame::real_sender`                       | `libjvm.dylib` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |

##### `resource_allocate_bytes` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                            | Location       |
| ------: | ----: | -----------: | ------: | --------------------------------- | -------------- |
|     new |    +2 | 0.0% → 50.0% |   0 → 2 | `InstanceKlass::signature_name`   | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `vframeArrayElement::fill_in`     | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `compiledVFrame::sender`          | `libjvm.dylib` |
|     new |    +1 | 0.0% → 25.0% |   0 → 1 | `BlockListBuilder::make_block_at` | `libjvm.dylib` |
|     new |    +1 | 0.0% → 25.0% |   0 → 1 | `ScopeDesc::sender`               | `libjvm.dylib` |

##### `__psynch_cvsignal` (`libsystem_kernel.dylib`)

| Change | Delta |      % | Samples | Caller          | Location       |
| -----: | ----: | -----: | ------: | --------------- | -------------- |
|  +3.1% |    +2 | 100.0% | 64 → 66 | `Unsafe_Unpark` | `libjvm.dylib` |

##### `G1BarrierSet::write_ref_array_work` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                           | Location              |
| ------: | ----: | -------------: | ------: | -------------------------------- | --------------------- |
| +100.0% |    +1 | 100.0% → 66.7% |   1 → 2 | `addAll(Collection)`             | `java.util.ArrayList` |
|     new |    +1 |   0.0% → 33.3% |   0 → 1 | `arrayof_oop_disjoint_arraycopy` | `<unknown>`           |

##### `InstanceKlass::get_jmethod_id` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                          | Location       |
| -----: | ----: | -----------: | ------: | ------------------------------- | -------------- |
|    new |    +2 | 0.0% → 50.0% |   0 → 2 | `JvmtiEnvBase::get_stack_trace` | `libjvm.dylib` |

##### `inflate` (`libzip.dylib`)

|  Change | Delta |      % | Samples | Caller                                          | Location       |
| ------: | ----: | -----: | ------: | ----------------------------------------------- | -------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `ClassFileParser::parse_method` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                           | Location       |
| -----: | ----: | ------------: | ------: | -------------------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `ClassFileParser::parse_methods` | `libjvm.dylib` |

##### `__psynch_mutexdrop` (`libsystem_kernel.dylib`)

|  Change | Delta |      % | Samples | Caller                                | Location                  |
| ------: | ----: | -----: | ------: | ------------------------------------- | ------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `_pthread_mutex_firstfit_unlock_slow` | `libsystem_pthread.dylib` |

##### `CallTraceStorage::put` (`libasyncProfiler.dylib`)

|  Change | Delta |      % | Samples | Caller                   | Location                 |
| ------: | ----: | -----: | ------: | ------------------------ | ------------------------ |
| +200.0% |    +2 | 100.0% |   1 → 3 | `Profiler::recordSample` | `libasyncProfiler.dylib` |

##### `AccessInternal::PostRuntimeDispatch<G1BarrierSet::AccessBarrier<401510ull, G1BarrierSet>, (AccessInternal::BarrierType)3, 401510ull>::oop_access_barrier` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                       | Location                 |
| -----: | ----: | ------------: | ------: | ---------------------------- | ------------------------ |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `LockTracer::UnsafeParkHook` | `libasyncProfiler.dylib` |

##### `ThreadLocalAllocBuffer::print_stats` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                        | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `MemAllocator::mem_allocate_inside_tlab_slow` | `libjvm.dylib` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % | Samples | Caller  | Location                                    |
| -----: | ----: | -----: | ------: | ------- | ------------------------------------------- |
| +28.6% |    +2 | 100.0% |   7 → 9 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |            % | Samples | Caller                         | Location                                               |
| -----: | ----: | -----------: | ------: | ------------------------------ | ------------------------------------------------------ |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans`            |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `average(List)`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `compareAndSet(long, long)` (`java.util.concurrent.atomic.AtomicLong`)

| Change | Delta |             % | Samples | Caller      | Location           |
| -----: | ----: | ------------: | ------: | ----------- | ------------------ |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `next(int)` | `java.util.Random` |

##### `entrySet()` (`java.util.HashMap`)

| Change | Delta |             % | Samples | Caller                        | Location            |
| -----: | ----: | ------------: | ------: | ----------------------------- | ------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |             % | Samples | Caller                                                    | Location                                      |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------- | --------------------------------------------- |
|     new |    +1 |  0.0% → 50.0% |   0 → 1 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|     new |    +1 |  0.0% → 50.0% |   0 → 1 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|  Change | Delta |      % | Samples | Caller     | Location                            |
| ------: | ----: | -----: | ------: | ---------- | ----------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Caller                              | Location                                    |
| -----: | ----: | -----: | ------: | ----------------------------------- | ------------------------------------------- |
| +16.7% |    +1 | 100.0% |   6 → 7 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

| Change | Delta |      % | Samples | Caller   | Location                                 |
| -----: | ----: | -----: | ------: | -------- | ---------------------------------------- |
| +50.0% |    +1 | 100.0% |   2 → 3 | `park()` | `java.util.concurrent.locks.LockSupport` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

| Change | Delta |             % | Samples | Caller                 | Location                            |
| -----: | ----: | ------------: | ------: | ---------------------- | ----------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `push(ForkJoinTask, ForkJoinPool, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |             % | Samples | Caller   | Location                            |
| -----: | ----: | ------------: | ------: | -------- | ----------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `fork()` | `java.util.concurrent.ForkJoinTask` |

##### `toArray()` (`java.util.HashMap$KeySet`)

| Change | Delta |             % | Samples | Caller               | Location              |
| -----: | ----: | ------------: | ------: | -------------------- | --------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<init>(Collection)` | `java.util.ArrayList` |

##### `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                               | Location       |
| ------: | ----: | -----: | ------: | ------------------------------------ | -------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `ConnectionGraph::compute_escape` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                         | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------ | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `ConnectionGraph::do_analysis` | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                            | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `Matcher::find_shared` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller           | Location       |
| -----: | ----: | ------------: | ------: | ---------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `Matcher::match` | `libjvm.dylib` |

##### `LinearScanWalker::alloc_free_reg` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                               | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `LinearScanWalker::activate_current` | `libjvm.dylib` |

##### `Node::replace_edge` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                    | Location       |
| -----: | ----: | ------------: | ------: | ----------------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseIterGVN::remove_globally_dead_node` | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                   | Location       |
| -----: | ----: | ------------: | ------: | ------------------------ | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseIterGVN::optimize` | `libjvm.dylib` |

##### `PhaseCFG::partial_latency_of_defs` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                         | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------ | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |

##### `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                            | Location       |
| ------: | ----: | -----: | ------: | --------------------------------- | -------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseChaitin::post_allocate_copy_removal` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                            | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `CompilationPolicy::call_event` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                     | Location       |
| -----: | ----: | ------------: | ------: | -------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `CompilationPolicy::event` | `libjvm.dylib` |

##### `GraphBuilder::iterate_bytecodes_for_block` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                             | Location       |
| -----: | ----: | ------------: | ------: | ---------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `GraphBuilder::iterate_all_blocks` | `libjvm.dylib` |

##### `Node_Backward_Iterator::next` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                    | Location       |
| -----: | ----: | ------------: | ------: | ------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseCFG::schedule_late` | `libjvm.dylib` |

##### `RegionNode::Identity` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                   | Location       |
| -----: | ----: | ------------: | ------: | ------------------------ | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseIterGVN::optimize` | `libjvm.dylib` |

##### `RegionNode::hash` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                          | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `IdealLoopTree::beautify_loops` | `libjvm.dylib` |

##### `Node::needs_anti_dependence_check` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                    | Location       |
| -----: | ----: | ------------: | ------: | ------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseCFG::schedule_late` | `libjvm.dylib` |

##### `Node::latency` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                              | Location       |
| -----: | ----: | ------------: | ------: | ----------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseCFG::partial_latency_of_defs` | `libjvm.dylib` |

##### `TypeTuple::xdual` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller           | Location       |
| -----: | ----: | ------------: | ------: | ---------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `Type::hashcons` | `libjvm.dylib` |

##### `Type::hashcons` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                    | Location       |
| -----: | ----: | ------------: | ------: | ------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `TypeInstPtr::add_offset` | `libjvm.dylib` |

##### `PhaseIFG::re_insert` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                 | Location       |
| -----: | ----: | ------------: | ------: | ---------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseChaitin::Select` | `libjvm.dylib` |

##### `I2C/C2I adapters(0xbbb)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                   | Location                            |
| -----: | ----: | ------------: | ------: | ---------------------------------------- | ----------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|  Change | Delta |           % |     Samples | Caller                  | Location                 |
| ------: | ----: | ----------: | ----------: | ----------------------- | ------------------------ |
|  -39.3% |  -543 |       96.6% | 1,383 → 840 | `Parker::park`          | `libjvm.dylib`           |
|  -37.5% |   -18 |        3.4% |     48 → 30 | `PlatformMonitor::wait` | `libjvm.dylib`           |
| removed |    -1 | 0.1% → 0.0% |       1 → 0 | `Profiler::timerLoop`   | `libasyncProfiler.dylib` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller              | Location                                                   |
| -----: | ----: | -----: | --------: | ------------------- | ---------------------------------------------------------- |
| -28.1% |  -120 | 100.0% | 427 → 307 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller                  | Location                                                   |
| -----: | ----: | -----: | --------: | ----------------------- | ---------------------------------------------------------- |
| -13.2% |  -110 | 100.0% | 831 → 721 | `findNearestCentroid()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `forward_copy_longs` (`<unknown>`)

| Change | Delta |             % |   Samples | Caller                            | Location    |
| -----: | ----: | ------------: | --------: | --------------------------------- | ----------- |
| -13.4% |   -24 | 83.3% → 83.8% | 179 → 155 | `arrayof_jint_disjoint_arraycopy` | `<unknown>` |
| -16.7% |    -6 | 16.7% → 16.2% |   36 → 30 | `arrayof_oop_disjoint_arraycopy`  | `<unknown>` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

| Change | Delta |      % | Samples | Caller                              | Location                  |
| -----: | ----: | -----: | ------: | ----------------------------------- | ------------------------- |
| -34.0% |   -18 | 100.0% | 53 → 35 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `checkIndex(int, int)` (`java.util.Objects`)

| Change | Delta |      % | Samples | Caller     | Location              |
| -----: | ----: | -----: | ------: | ---------- | --------------------- |
| -45.9% |   -17 | 100.0% | 37 → 20 | `get(int)` | `java.util.ArrayList` |

##### `zero_blocks` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                              | Location                                                   |
| ------: | ----: | ------------: | ------: | ----------------------------------- | ---------------------------------------------------------- |
|  -34.1% |   -14 | 75.9% → 65.9% | 41 → 27 | `merge(Object, Object, BiFunction)` | `java.util.HashMap`                                        |
| +200.0% |    +2 |   1.9% → 7.3% |   1 → 3 | `findNearestCentroid()`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -8.3% |    -1 | 22.2% → 26.8% | 12 → 11 | `grow(int)`                         | `java.util.ArrayList`                                      |

##### `elementData(int)` (`java.util.ArrayList`)

| Change | Delta |      % |   Samples | Caller     | Location              |
| -----: | ----: | -----: | --------: | ---------- | --------------------- |
|  -8.8% |   -13 | 100.0% | 148 → 135 | `get(int)` | `java.util.ArrayList` |

##### `RegisterMap::RegisterMap` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller           | Location       |
| -----: | ----: | ------------: | ------: | ---------------- | -------------- |
| -40.9% |    -9 | 95.7% → 92.9% | 22 → 13 | `vframe::vframe` | `libjvm.dylib` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |             % | Samples | Caller      | Location                                               |
| ------: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
| removed |    -7 | 100.0% → 0.0% |   7 → 0 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                  | Location       |
| -----: | ----: | -----: | ------: | --------------------------------------- | -------------- |
| -85.7% |    -6 | 100.0% |   7 → 1 | `G1AdjustRegionClosure::do_heap_region` | `libjvm.dylib` |

##### `_platform_memmove` (`libsystem_platform.dylib`)

|  Change | Delta |             % | Samples | Caller                           | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------- | -------------- |
|  -66.7% |    -6 | 75.0% → 42.9% |   9 → 3 | `vframe::java_sender`            | `libjvm.dylib` |
| removed |    -1 |   8.3% → 0.0% |   1 → 0 | `Node::out_grow`                 | `libjvm.dylib` |
|     new |    +1 |  0.0% → 14.3% |   0 → 1 | `ClassFileParser::parse_methods` | `libjvm.dylib` |
|     new |    +1 |  0.0% → 14.3% |   0 → 1 | `frame::oops_interpreted_do`     | `libjvm.dylib` |

##### `GenericTaskQueueSet<OverflowTaskQueue<ObjArrayTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>::steal_best_of_2` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                             | Location       |
| -----: | ----: | -----: | ------: | ---------------------------------- | -------------- |
| -71.4% |    -5 | 100.0% |   7 → 2 | `G1FullGCMarker::complete_marking` | `libjvm.dylib` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change | Delta |             % | Samples | Caller      | Location              |
| -----: | ----: | ------------: | ------: | ----------- | --------------------- |
| -57.1% |    -4 | 77.8% → 60.0% |   7 → 3 | `toArray()` | `java.util.ArrayList` |

##### `addAll(Collection)` (`java.util.ArrayList`)

|  Change | Delta |             % | Samples | Caller                       | Location                                    |
| ------: | ----: | ------------: | ------: | ---------------------------- | ------------------------------------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `ObjArrayAllocator::initialize` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                          | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------- | -------------- |
| removed |    -3 | 75.0% → 0.0% |   3 → 0 | `MemAllocator::allocate`        | `libjvm.dylib` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `CollectedHeap::array_allocate` | `libjvm.dylib` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Caller            | Location                                    |
| ------: | ----: | ------------: | ------: | ----------------- | ------------------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `JvmtiEnvBase::get_stack_trace` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                          | Location       |
| ------: | ----: | -------------: | ------: | ------------------------------- | -------------- |
|  -66.7% |    -2 | 75.0% → 100.0% |   3 → 1 | `JvmtiEnvBase::get_stack_trace` | `libjvm.dylib` |
| removed |    -1 |   25.0% → 0.0% |   1 → 0 | `jvmti_GetStackTrace`           | `libjvm.dylib` |

##### `Klass::check_array_allocation_length` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                             | Location       |
| ------: | ----: | -----------: | ------: | ---------------------------------- | -------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `InstanceKlass::allocate_objArray` | `libjvm.dylib` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `InterpreterRuntime::newarray`     | `libjvm.dylib` |

##### `FastThreadsListHandle::FastThreadsListHandle` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller           | Location                   |
| ------: | ----: | -----------: | ------: | ---------------- | -------------------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `unpark(Object)` | `jdk.internal.misc.Unsafe` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `Unsafe_Unpark`  | `libjvm.dylib`             |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |             % | Samples | Caller                               | Location                                                  |
| ------: | ----: | ------------: | ------: | ------------------------------------ | --------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|  Change | Delta |             % | Samples | Caller   | Location                             |
| ------: | ----: | ------------: | ------: | -------- | ------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % | Samples | Caller      | Location                                               |
| -----: | ----: | -----: | ------: | ----------- | ------------------------------------------------------ |
| -50.0% |    -1 | 100.0% |   2 → 1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `forkThreshold()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % | Samples | Caller      | Location                                               |
| ------: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `G1ParScanThreadState::trim_queue_to_threshold` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                       | Location       |
| ------: | ----: | -----------: | ------: | -------------------------------------------- | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `G1ParScanThreadState::steal_and_trim_queue` | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `G1ParEvacuateFollowersClosure::do_void`     | `libjvm.dylib` |

##### `_platform_bzero` (`libsystem_platform.dylib`)

|  Change | Delta |              % | Samples | Caller                   | Location       |
| ------: | ----: | -------------: | ------: | ------------------------ | -------------- |
|   -5.0% |    -1 | 95.2% → 100.0% | 20 → 19 | `MemAllocator::allocate` | `libjvm.dylib` |
| removed |    -1 |    4.8% → 0.0% |   1 → 0 | `JvmtiEnv::Deallocate`   | `libjvm.dylib` |

##### `LockTracer::UnsafeParkHook` (`libasyncProfiler.dylib`)

|  Change | Delta |              % | Samples | Caller                | Location                   |
| ------: | ----: | -------------: | ------: | --------------------- | -------------------------- |
|  -50.0% |    -1 | 66.7% → 100.0% |   2 → 1 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |
| removed |    -1 |   33.3% → 0.0% |   1 → 0 | `break_stack_range`   | `<unknown>`                |

##### `vframe::java_sender` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                          | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `JvmtiEnvBase::get_stack_trace` | `libjvm.dylib` |

##### `_kernelrpc_mach_port_deallocate_trap` (`libsystem_kernel.dylib`)

| Change | Delta |      % | Samples | Caller                   | Location                 |
| -----: | ----: | -----: | ------: | ------------------------ | ------------------------ |
| -28.6% |    -2 | 100.0% |   7 → 5 | `Profiler::recordSample` | `libasyncProfiler.dylib` |

##### `jni_GetObjectClass` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                       | Location                   |
| ------: | ----: | -----------: | ------: | ---------------------------- | -------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `park(boolean, long)`        | `jdk.internal.misc.Unsafe` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `LockTracer::UnsafeParkHook` | `libasyncProfiler.dylib`   |

##### `compiledVFrame::sender` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                | Location       |
| ------: | ----: | ------------: | ------: | --------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `vframe::java_sender` | `libjvm.dylib` |

##### `pthread_testcancel` (`libsystem_pthread.dylib`)

| Change | Delta |      % | Samples | Caller               | Location                  |
| -----: | ----: | -----: | ------: | -------------------- | ------------------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `_pthread_cond_wait` | `libsystem_pthread.dylib` |

##### `write` (`libsystem_kernel.dylib`)

| Change | Delta |      % | Samples | Caller                              | Location                            |
| -----: | ----: | -----: | ------: | ----------------------------------- | ----------------------------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `write0(FileDescriptor, long, int)` | `sun.nio.ch.UnixFileDispatcherImpl` |

##### `grow(int)` (`java.util.ArrayList`)

| Change | Delta |      % | Samples | Caller   | Location              |
| -----: | ----: | -----: | ------: | -------- | --------------------- |
|  -8.3% |    -2 | 100.0% | 24 → 22 | `grow()` | `java.util.ArrayList` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % | Samples | Caller                              | Location                            |
| -----: | ----: | -----: | ------: | ----------------------------------- | ----------------------------------- |
| -50.0% |    -2 | 100.0% |   4 → 2 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `putMapEntries(Map, boolean)` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Caller        | Location            |
| -----: | ----: | -----: | ------: | ------------- | ------------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `<init>(Map)` | `java.util.HashMap` |

##### `unpark(Thread)` (`java.util.concurrent.locks.LockSupport`)

|  Change | Delta |            % | Samples | Caller                         | Location                            |
| ------: | ----: | -----------: | ------: | ------------------------------ | ----------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `signalWaiters()`              | `java.util.concurrent.ForkJoinTask` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `tryCompensate(long, boolean)` | `java.util.concurrent.ForkJoinPool` |

##### `begin(long)` (`java.util.stream.Nodes$FixedNodeBuilder`)

|  Change | Delta |             % | Samples | Caller        | Location                           |
| ------: | ----: | ------------: | ------: | ------------- | ---------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `begin(long)` | `java.util.stream.Sink$ChainedInt` |

##### `isOpen()` (`java.lang.module.ModuleDescriptor`)

|  Change | Delta |             % | Samples | Caller                                          | Location           |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | ------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `implIsExportedOrOpen(String, Module, boolean)` | `java.lang.Module` |

##### `get(int)` (`java.util.ArrayList`)

|  Change | Delta |             % | Samples | Caller        | Location                                                  |
| ------: | ----: | ------------: | ------: | ------------- | --------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `vectorSum()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

| Change | Delta |      % | Samples | Caller        | Location              |
| -----: | ----: | -----: | ------: | ------------- | --------------------- |
|  -2.1% |    -1 | 100.0% | 47 → 46 | `add(Object)` | `java.util.ArrayList` |

##### `add(Object)` (`java.util.ArrayList`)

|  Change | Delta |             % | Samples | Caller                   | Location                                                   |
| ------: | ----: | ------------: | ------: | ------------------------ | ---------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `invoke(Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f001000c00`)

|  Change | Delta |             % | Samples | Caller                       | Location                           |
| ------: | ----: | ------------: | ------: | ---------------------------- | ---------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `linkToTargetMethod(Object)` | `java.lang.invoke.Invokers$Holder` |

##### `boxed()` (`java.util.stream.DoublePipeline`)

|  Change | Delta |             % | Samples | Caller            | Location                                               |
| ------: | ----: | ------------: | ------: | ----------------- | ------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `boxed(double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `hash(Object)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Caller                              | Location            |
| ------: | ----: | ------------: | ------: | ----------------------------------- | ------------------- |
|  +13.6% |    +3 | 81.5% → 96.2% | 22 → 25 | `computeIfAbsent(Object, Function)` | `java.util.HashMap` |
| removed |    -2 |   7.4% → 0.0% |   2 → 0 | `putMapEntries(Map, boolean)`       | `java.util.HashMap` |
| removed |    -2 |   7.4% → 0.0% |   2 → 0 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `hasTasks(boolean)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % | Samples | Caller                              | Location                            |
| ------: | ----: | ------------: | ------: | ----------------------------------- | ----------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `awaitWork(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `hashCode()` (`java.lang.Object`)

|  Change | Delta |             % | Samples | Caller         | Location            |
| ------: | ----: | ------------: | ------: | -------------- | ------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `hash(Object)` | `java.util.HashMap` |

##### `PhaseChaitin::elide_copy` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                     | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |

##### `Node::set_req_X` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller               | Location       |
| ------: | ----: | ------------: | ------: | -------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `Node::replace_edge` | `libjvm.dylib` |

##### `PhaseIterGVN::remove_globally_dead_node` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                       | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseIterGVN::subsume_node` | `libjvm.dylib` |

##### `PhiNode::Identity` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                        | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |

##### `CompileQueue::get` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `PhaseCCP::push_more_uses` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                   | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseCCP::push_child_nodes_to_worklist` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_tree` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                               | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `C2Compiler::name` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `Node::jvms` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                | Location       |
| ------: | ----: | ------------: | ------: | --------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseOutput::Output` | `libjvm.dylib` |

##### `PhaseBlockLayout::find_edges` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                               | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseBlockLayout::PhaseBlockLayout` | `libjvm.dylib` |

##### `PhaseIdealLoop::get_late_ctrl_with_anti_dep` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                      | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                               | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Scheduling::AddNodeToBundle` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                     | Location       |
| ------: | ----: | ------------: | ------: | -------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `Scheduling::DoScheduling` | `libjvm.dylib` |

##### `ParmNode::is_CFG` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                               | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseLive::compute` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                            | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `ciTypeFlow::get_block_for` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                          | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `ciTypeFlow::Block::successors` | `libjvm.dylib` |

##### `loadConNKlassNode::emit` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                           | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseOutput::scratch_emit_size` | `libjvm.dylib` |

##### `TypeInstPtr::make` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                    | Location       |
| ------: | ----: | ------------: | ------: | ------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `TypeInstPtr::add_offset` | `libjvm.dylib` |

##### `PhaseCFG::fixup_flow` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller              | Location       |
| ------: | ----: | ------------: | ------: | ------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `PhaseCCP::transform` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                   | Location       |
| ------: | ----: | ------------: | ------: | ------------------------ | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseCCP::do_transform` | `libjvm.dylib` |

##### `vtable stub` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller      | Location                                               |
| ------: | ----: | -----------: | ------: | ----------- | ------------------------------------------------------ |
| removed |    -2 | 50.0% → 0.0% |   2 → 0 | `join()`    | `java.util.concurrent.ForkJoinTask`                    |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `I2C/C2I adapters(0xbb)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller   | Location                                                               |
| ------: | ----: | ------------: | ------: | -------- | ---------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f001183d68` |

##### `itable stub` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                  | Location                |
| ------: | ----: | ------------: | ------: | ----------------------- | ----------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `getExactSizeIfKnown()` | `java.util.Spliterator` |

### Total samples

#### Regressions

Functions with the largest increase in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |             % |       Samples | Function                                                                                                               | Location                                                  |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
|  +35.0% |   +35 |   1.8% → 2.9% |     100 → 135 | `WorkerThread::run`                                                                                                    | `libjvm.dylib`                                            |
| +110.0% |   +22 |   0.4% → 0.9% |       20 → 42 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>`                                                        | `libjvm.dylib`                                            |
|   +9.5% |   +21 |   4.1% → 5.2% |     220 → 241 | `Thread::call_run`                                                                                                     | `libjvm.dylib`                                            |
|   +9.5% |   +21 |   4.1% → 5.2% |     220 → 241 | `thread_native_entry`                                                                                                  | `libjvm.dylib`                                            |
|   +9.5% |   +21 |   4.1% → 5.2% |     220 → 241 | `_pthread_start`                                                                                                       | `libsystem_pthread.dylib`                                 |
|   +9.5% |   +21 |   4.1% → 5.2% |     220 → 241 | `thread_start`                                                                                                         | `libsystem_pthread.dylib`                                 |
|  +13.8% |   +21 |   2.8% → 3.8% |     152 → 173 | `computeIfAbsent(Object, Function)`                                                                                    | `java.util.HashMap`                                       |
|     new |   +21 |   0.0% → 0.5% |        0 → 21 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`               |
| +475.0% |   +19 |   0.1% → 0.5% |        4 → 23 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region`                                      | `libjvm.dylib`                                            |
| +475.0% |   +19 |   0.1% → 0.5% |        4 → 23 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::do_heap_region`                                                    | `libjvm.dylib`                                            |
| +475.0% |   +19 |   0.1% → 0.5% |        4 → 23 | `G1FullGCResetMetadataTask::work`                                                                                      | `libjvm.dylib`                                            |
|   +2.0% |   +16 | 14.6% → 17.5% |     792 → 808 | `accumulate(Double[], double[])`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  +78.9% |   +15 |   0.4% → 0.7% |       19 → 34 | `G1FullGCMarker::follow_marking_stacks`                                                                                | `libjvm.dylib`                                            |
| +136.4% |   +15 |   0.2% → 0.6% |       11 → 26 | `HeapRegionManager::par_iterate`                                                                                       | `libjvm.dylib`                                            |
|  +31.8% |   +14 |   0.8% → 1.3% |       44 → 58 | `G1FullGCMarker::complete_marking`                                                                                     | `libjvm.dylib`                                            |
|  +31.8% |   +14 |   0.8% → 1.3% |       44 → 58 | `G1FullGCMarkTask::work`                                                                                               | `libjvm.dylib`                                            |
|   +1.1% |   +14 | 24.0% → 28.6% | 1,302 → 1,316 | `vectorSum()`                                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|   +1.1% |   +14 | 24.0% → 28.6% | 1,302 → 1,316 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  +73.7% |   +14 |   0.4% → 0.7% |       19 → 33 | `G1FullGCMarker::mark_object`                                                                                          | `libjvm.dylib`                                            |
|  +68.8% |   +11 |   0.3% → 0.6% |       16 → 27 | `G1EvacuateRegionsBaseTask::work`                                                                                      | `libjvm.dylib`                                            |

##### Ours

|  Change | Delta |             % |       Samples | Function                                                                                                               | Location                                                                                      |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
|     new |   +21 |   0.0% → 0.5% |        0 → 21 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                                                   |
|   +2.0% |   +16 | 14.6% → 17.5% |     792 → 808 | `accumulate(Double[], double[])`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                     |
|   +1.1% |   +14 | 24.0% → 28.6% | 1,302 → 1,316 | `vectorSum()`                                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                     |
|   +1.1% |   +14 | 24.0% → 28.6% | 1,302 → 1,316 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                     |
|     new |    +6 |   0.0% → 0.1% |         0 → 6 | `rowToArray$1(Map)`                                                                                                    | `org.renaissance.jdk.concurrent.FjKmeans`                                                     |
|     new |    +6 |   0.0% → 0.1% |         0 → 6 | `setUpBeforeAll$$anonfun$1(Map)`                                                                                       | `org.renaissance.jdk.concurrent.FjKmeans`                                                     |
|     new |    +6 |   0.0% → 0.1% |         0 → 6 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x0000007801126908`                          |
|     new |    +6 |   0.0% → 0.1% |         0 → 6 | `lambda$toCsvRows$2(String[], Function, String)`                                                                       | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`                            |
|     new |    +6 |   0.0% → 0.1% |         0 → 6 | `apply(Object)`                                                                                                        | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter$$Lambda.0x0000007801123bf8` |
|     new |    +6 |   0.0% → 0.1% |         0 → 6 | `toCsvRows(Function)`                                                                                                  | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`                            |
|  +50.0% |    +5 |   0.2% → 0.3% |       10 → 15 | `setUpBeforeAll(BenchmarkContext)`                                                                                     | `org.renaissance.jdk.concurrent.FjKmeans`                                                     |
|   +4.3% |    +2 |   0.9% → 1.1% |       47 → 49 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                                               |
|   +4.3% |    +2 |   0.9% → 1.1% |       47 → 49 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                                               |
| +200.0% |    +2 |  <0.1% → 0.1% |         1 → 3 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                        |
|     new |    +2 |  0.0% → <0.1% |         0 → 2 | `deleteRecursively(Path, boolean)`                                                                                     | `org.renaissance.core.DirUtils`                                                               |
|     new |    +2 |  0.0% → <0.1% |         0 → 2 | `deleteRecursively(Path)`                                                                                              | `org.renaissance.core.DirUtils`                                                               |
|     new |    +2 |  0.0% → <0.1% |         0 → 2 | `lambda$createScratchDirectory$1(Path)`                                                                                | `org.renaissance.core.DirUtils`                                                               |
|     new |    +2 |  0.0% → <0.1% |         0 → 2 | `run()`                                                                                                                | `org.renaissance.core.DirUtils$$Lambda.0x0000007801003a68`                                    |
|  +33.3% |    +1 |          0.1% |         3 → 4 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                     |
| +100.0% |    +1 |         <0.1% |         1 → 2 | `<init>(JavaKMeans, List, List, int, int)`                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                    |

##### Native

|  Change | Delta |           % |   Samples | Function                                                                          | Location                  |
| ------: | ----: | ----------: | --------: | --------------------------------------------------------------------------------- | ------------------------- |
|  +35.0% |   +35 | 1.8% → 2.9% | 100 → 135 | `WorkerThread::run`                                                               | `libjvm.dylib`            |
| +110.0% |   +22 | 0.4% → 0.9% |   20 → 42 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>`                   | `libjvm.dylib`            |
|   +9.5% |   +21 | 4.1% → 5.2% | 220 → 241 | `Thread::call_run`                                                                | `libjvm.dylib`            |
|   +9.5% |   +21 | 4.1% → 5.2% | 220 → 241 | `thread_native_entry`                                                             | `libjvm.dylib`            |
|   +9.5% |   +21 | 4.1% → 5.2% | 220 → 241 | `_pthread_start`                                                                  | `libsystem_pthread.dylib` |
|   +9.5% |   +21 | 4.1% → 5.2% | 220 → 241 | `thread_start`                                                                    | `libsystem_pthread.dylib` |
| +475.0% |   +19 | 0.1% → 0.5% |    4 → 23 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region` | `libjvm.dylib`            |
| +475.0% |   +19 | 0.1% → 0.5% |    4 → 23 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::do_heap_region`               | `libjvm.dylib`            |
| +475.0% |   +19 | 0.1% → 0.5% |    4 → 23 | `G1FullGCResetMetadataTask::work`                                                 | `libjvm.dylib`            |
|  +78.9% |   +15 | 0.4% → 0.7% |   19 → 34 | `G1FullGCMarker::follow_marking_stacks`                                           | `libjvm.dylib`            |
| +136.4% |   +15 | 0.2% → 0.6% |   11 → 26 | `HeapRegionManager::par_iterate`                                                  | `libjvm.dylib`            |
|  +31.8% |   +14 | 0.8% → 1.3% |   44 → 58 | `G1FullGCMarker::complete_marking`                                                | `libjvm.dylib`            |
|  +31.8% |   +14 | 0.8% → 1.3% |   44 → 58 | `G1FullGCMarkTask::work`                                                          | `libjvm.dylib`            |
|  +73.7% |   +14 | 0.4% → 0.7% |   19 → 33 | `G1FullGCMarker::mark_object`                                                     | `libjvm.dylib`            |
|  +68.8% |   +11 | 0.3% → 0.6% |   16 → 27 | `G1EvacuateRegionsBaseTask::work`                                                 | `libjvm.dylib`            |
| +133.3% |    +8 | 0.1% → 0.3% |    6 → 14 | `G1RegionMarkStatsCache::add_live_words`                                          | `libjvm.dylib`            |
| +160.0% |    +8 | 0.1% → 0.3% |    5 → 13 | `JVM_IHashCode`                                                                   | `libjvm.dylib`            |
| +160.0% |    +8 | 0.1% → 0.3% |    5 → 13 | `G1ParEvacuateFollowersClosure::offer_termination`                                | `libjvm.dylib`            |
|  +85.7% |    +6 | 0.1% → 0.3% |    7 → 13 | `ScopeDesc::decode_body`                                                          | `libjvm.dylib`            |
|  +85.7% |    +6 | 0.1% → 0.3% |    7 → 13 | `Java_java_util_zip_Inflater_inflateBytesBytes`                                   | `libzip.dylib`            |

##### Standard library

|  Change | Delta |            % |   Samples | Function                                                                    | Location                                  |
| ------: | ----: | -----------: | --------: | --------------------------------------------------------------------------- | ----------------------------------------- |
|  +13.8% |   +21 |  2.8% → 3.8% | 152 → 173 | `computeIfAbsent(Object, Function)`                                         | `java.util.HashMap`                       |
|  +11.8% |   +11 |  1.7% → 2.3% |  93 → 104 | `doubleValue()`                                                             | `java.lang.Double`                        |
| +133.3% |    +8 |  0.1% → 0.3% |    6 → 14 | `hashCode()`                                                                | `java.lang.Object`                        |
|  +21.2% |    +7 |  0.6% → 0.9% |   33 → 40 | `hash(Object)`                                                              | `java.util.HashMap`                       |
| +700.0% |    +7 | <0.1% → 0.2% |     1 → 8 | `putVal(int, Object, Object, boolean, boolean)`                             | `java.util.HashMap`                       |
|  +60.0% |    +6 |  0.2% → 0.3% |   10 → 16 | `putMapEntries(Map, boolean)`                                               | `java.util.HashMap`                       |
|  +60.0% |    +6 |  0.2% → 0.3% |   10 → 16 | `<init>(Map)`                                                               | `java.util.HashMap`                       |
|  +85.7% |    +6 |  0.1% → 0.3% |    7 → 13 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)`               | `java.util.zip.Inflater`                  |
|  +85.7% |    +6 |  0.1% → 0.3% |    7 → 13 | `inflate(byte[], int, int)`                                                 | `java.util.zip.Inflater`                  |
|  +40.0% |    +6 |  0.3% → 0.5% |   15 → 21 | `run()`                                                                     | `java.net.URLClassLoader$1`               |
|  +40.0% |    +6 |  0.3% → 0.5% |   15 → 21 | `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` | `java.security.AccessController`          |
|  +40.0% |    +6 |  0.3% → 0.5% |   15 → 21 | `doPrivileged(PrivilegedExceptionAction, AccessControlContext)`             | `java.security.AccessController`          |
|  +40.0% |    +6 |  0.3% → 0.5% |   15 → 21 | `findClass(String)`                                                         | `java.net.URLClassLoader`                 |
|  +37.5% |    +6 |  0.3% → 0.5% |   16 → 22 | `loadClass(String, boolean)`                                                | `java.lang.ClassLoader`                   |
|  +37.5% |    +6 |  0.3% → 0.5% |   16 → 22 | `loadClass(String)`                                                         | `java.lang.ClassLoader`                   |
|     new |    +6 |  0.0% → 0.1% |     0 → 6 | `accept(Object)`                                                            | `java.util.stream.ReferencePipeline$3$1`  |
|     new |    +6 |  0.0% → 0.1% |     0 → 6 | `forEachRemaining(Consumer)`                                                | `java.util.Spliterators$ArraySpliterator` |
|  +55.6% |    +5 |  0.2% → 0.3% |    9 → 14 | `signalWork()`                                                              | `java.util.concurrent.ForkJoinPool`       |
|  +55.6% |    +5 |  0.2% → 0.3% |    9 → 14 | `read(byte[], int, int)`                                                    | `java.util.zip.InflaterInputStream`       |
|  +41.7% |    +5 |  0.2% → 0.4% |   12 → 17 | `defineClass(String, Resource)`                                             | `java.net.URLClassLoader`                 |

##### Compiler

|  Change | Delta |            % | Samples | Function                                    | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------- | -------------- |
|  +52.6% |   +10 |  0.4% → 0.6% | 19 → 29 | `Compile::Code_Gen`                         | `libjvm.dylib` |
| +200.0% |   +10 |  0.1% → 0.3% |  5 → 15 | `PhaseChaitin::Register_Allocate`           | `libjvm.dylib` |
|  +14.6% |    +7 |  0.9% → 1.2% | 48 → 55 | `Compile::Compile`                          | `libjvm.dylib` |
|  +10.0% |    +7 |  1.3% → 1.7% | 70 → 77 | `CompileBroker::invoke_compiler_on_method`  | `libjvm.dylib` |
|  +12.2% |    +6 |  0.9% → 1.2% | 49 → 55 | `C2Compiler::compile_method`                | `libjvm.dylib` |
| +125.0% |    +5 |  0.1% → 0.2% |   4 → 9 | `GraphBuilder::GraphBuilder`                | `libjvm.dylib` |
| +133.3% |    +4 |  0.1% → 0.2% |   3 → 7 | `CompileBroker::compile_method`             | `libjvm.dylib` |
|  +66.7% |    +4 |  0.1% → 0.2% |  6 → 10 | `CompilationPolicy::event`                  | `libjvm.dylib` |
|  +66.7% |    +4 |  0.1% → 0.2% |  6 → 10 | `Compilation::build_hir`                    | `libjvm.dylib` |
| +100.0% |    +4 |  0.1% → 0.2% |   4 → 8 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib` |
| +100.0% |    +4 |  0.1% → 0.2% |   4 → 8 | `GraphBuilder::iterate_all_blocks`          | `libjvm.dylib` |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `Type::hashcons`                            | `libjvm.dylib` |
| +100.0% |    +3 |         0.1% |   3 → 6 | `PhaseIterGVN::optimize`                    | `libjvm.dylib` |
|  +18.8% |    +3 |  0.3% → 0.4% | 16 → 19 | `Compile::Optimize`                         | `libjvm.dylib` |
|   +3.3% |    +3 |  1.7% → 2.0% | 90 → 93 | `CompileBroker::compiler_thread_loop`       | `libjvm.dylib` |
|  +18.8% |    +3 |  0.3% → 0.4% | 16 → 19 | `Compilation::compile_java_method`          | `libjvm.dylib` |
| +100.0% |    +3 |         0.1% |   3 → 6 | `GraphBuilder::invoke`                      | `libjvm.dylib` |
| +150.0% |    +3 | <0.1% → 0.1% |   2 → 5 | `GraphBuilder::try_inline`                  | `libjvm.dylib` |
|  +66.7% |    +2 |         0.1% |   3 → 5 | `CompileBroker::compile_method_base`        | `libjvm.dylib` |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `PhaseMacroExpand::expand_macro_nodes`      | `libjvm.dylib` |

#### Improvements

Functions with the largest decrease in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

| Change | Delta |             % |       Samples | Function                                             | Location                                                   |
| -----: | ----: | ------------: | ------------: | ---------------------------------------------------- | ---------------------------------------------------------- |
| -16.3% |  -837 | 94.9% → 93.6% | 5,146 → 4,309 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                        |
| -16.3% |  -837 | 94.9% → 93.6% | 5,146 → 4,309 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`                |
| -39.2% |  -562 | 26.4% → 18.9% |   1,432 → 870 | `__psynch_cvwait`                                    | `libsystem_kernel.dylib`                                   |
| -38.9% |  -541 | 25.7% → 18.5% |   1,391 → 850 | `Parker::park`                                       | `libjvm.dylib`                                             |
| -37.9% |  -541 | 26.3% → 19.2% |   1,427 → 886 | `LockTracer::UnsafeParkHook`                         | `libasyncProfiler.dylib`                                   |
| -37.8% |  -541 | 26.4% → 19.3% |   1,431 → 890 | `park(boolean, long)`                                | `jdk.internal.misc.Unsafe`                                 |
| -38.4% |  -535 | 25.7% → 18.7% |   1,395 → 860 | `Unsafe_Park`                                        | `libjvm.dylib`                                             |
| -37.7% |  -522 | 25.6% → 18.8% |   1,386 → 864 | `park()`                                             | `java.util.concurrent.locks.LockSupport`                   |
| -10.6% |  -460 | 79.8% → 83.9% | 4,323 → 3,863 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                        |
| -10.6% |  -458 | 79.8% → 83.9% | 4,323 → 3,865 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| -10.7% |  -457 | 79.2% → 83.2% | 4,290 → 3,833 | `compute()`                                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
| -10.7% |  -457 | 79.2% → 83.2% | 4,290 → 3,833 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                       |
| -10.4% |  -450 | 79.9% → 84.3% | 4,333 → 3,883 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                        |
| -10.4% |  -428 | 75.9% → 80.1% | 4,116 → 3,688 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                        |
| -10.4% |  -426 | 75.9% → 80.1% | 4,114 → 3,688 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                        |
| -48.3% |  -389 |  14.9% → 9.0% |     805 → 416 | `awaitWork(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                        |
|  -9.9% |  -381 | 71.1% → 75.4% | 3,851 → 3,470 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| -13.1% |  -236 | 33.2% → 33.9% | 1,797 → 1,561 | `computeDirectly()`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -17.1% |  -232 | 25.0% → 24.4% | 1,356 → 1,124 | `findNearestCentroid()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -12.4% |  -105 | 15.7% → 16.2% |     850 → 745 | `distance(Double[], Double[])`                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### Ours

|  Change | Delta |             % |       Samples | Function                                                                                                               | Location                                                               |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|  -10.7% |  -457 | 79.2% → 83.2% | 4,290 → 3,833 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  -13.1% |  -236 | 33.2% → 33.9% | 1,797 → 1,561 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -17.1% |  -232 | 25.0% → 24.4% | 1,356 → 1,124 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -12.4% |  -105 | 15.7% → 16.2% |     850 → 745 | `distance(Double[], Double[])`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -20.8% |   -92 |   8.2% → 7.6% |     442 → 350 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -20.8% |   -92 |   8.2% → 7.6% |     442 → 350 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a3b90` |
|  -16.4% |   -90 | 10.1% → 10.0% |     550 → 460 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a2bd0` |
|  -16.2% |   -89 | 10.1% → 10.0% |     549 → 460 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -19.2% |   -87 |   8.4% → 8.0% |     454 → 367 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -18.9% |   -86 |   8.4% → 8.0% |     455 → 369 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -18.9% |   -86 |   8.4% → 8.0% |     454 → 368 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -24.2% |   -84 |   6.4% → 5.7% |     347 → 263 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -24.2% |   -84 |   6.4% → 5.7% |     347 → 263 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a7000` |
| removed |   -23 |   0.4% → 0.0% |        23 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|   -3.1% |   -21 | 12.6% → 14.4% |     682 → 661 | `computeClusterAverages()`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   -3.1% |   -21 | 12.6% → 14.4% |     682 → 661 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   -2.7% |   -18 | 12.4% → 14.2% |     673 → 655 | `average(List)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| removed |    -6 |   0.1% → 0.0% |         6 → 0 | `run(BenchmarkContext)`                                                                                                | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  -83.3% |    -5 |  0.1% → <0.1% |         6 → 1 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                              |
|   -0.9% |    -4 |   8.1% → 9.5% |     441 → 437 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |

##### Native

| Change | Delta |             % |     Samples | Function                                                                        | Location                 |
| -----: | ----: | ------------: | ----------: | ------------------------------------------------------------------------------- | ------------------------ |
| -39.2% |  -562 | 26.4% → 18.9% | 1,432 → 870 | `__psynch_cvwait`                                                               | `libsystem_kernel.dylib` |
| -38.9% |  -541 | 25.7% → 18.5% | 1,391 → 850 | `Parker::park`                                                                  | `libjvm.dylib`           |
| -37.9% |  -541 | 26.3% → 19.2% | 1,427 → 886 | `LockTracer::UnsafeParkHook`                                                    | `libasyncProfiler.dylib` |
| -38.4% |  -535 | 25.7% → 18.7% | 1,395 → 860 | `Unsafe_Park`                                                                   | `libjvm.dylib`           |
| -29.5% |   -61 |   3.8% → 3.2% |   207 → 146 | `_new_array_Java`                                                               | `<unknown>`              |
| -28.2% |   -57 |   3.7% → 3.1% |   202 → 145 | `OptoRuntime::new_array_C`                                                      | `libjvm.dylib`           |
| -25.0% |   -48 |   3.5% → 3.1% |   192 → 144 | `CollectedHeap::array_allocate`                                                 | `libjvm.dylib`           |
| -25.3% |   -46 |   3.4% → 3.0% |   182 → 136 | `InstanceKlass::allocate_objArray`                                              | `libjvm.dylib`           |
| -22.6% |   -44 |   3.6% → 3.3% |   195 → 151 | `MemAllocator::allocate`                                                        | `libjvm.dylib`           |
| -25.8% |   -34 |   2.4% → 2.1% |    132 → 98 | `JvmtiObjectAllocEventCollector::generate_call_for_allocated`                   | `libjvm.dylib`           |
| -24.8% |   -33 |   2.5% → 2.2% |   133 → 100 | `JvmtiSampledObjectAllocEventCollector::~JvmtiSampledObjectAllocEventCollector` | `libjvm.dylib`           |
| -25.4% |   -32 |   2.3% → 2.0% |    126 → 94 | `ObjectSampler::recordAllocation`                                               | `libasyncProfiler.dylib` |
| -25.2% |   -32 |   2.3% → 2.1% |    127 → 95 | `JvmtiExport::post_sampled_object_alloc`                                        | `libjvm.dylib`           |
| -14.0% |   -30 |          4.0% |   215 → 185 | `forward_copy_longs`                                                            | `<unknown>`              |
| -30.9% |   -30 |   1.8% → 1.5% |     97 → 67 | `JvmtiEnvBase::get_stack_trace`                                                 | `libjvm.dylib`           |
| -21.0% |   -29 |   2.5% → 2.4% |   138 → 109 | `MemAllocator::Allocation::notify_allocation_jvmti_sampler`                     | `libjvm.dylib`           |
| -28.7% |   -29 |   1.9% → 1.6% |    101 → 72 | `jvmti_GetStackTrace`                                                           | `libjvm.dylib`           |
| -27.3% |   -27 |   1.8% → 1.6% |     99 → 72 | `JvmtiEnv::GetStackTrace`                                                       | `libjvm.dylib`           |
| -24.8% |   -27 |   2.0% → 1.8% |    109 → 82 | `Profiler::recordSample`                                                        | `libasyncProfiler.dylib` |
| -31.9% |   -22 |   1.3% → 1.0% |     69 → 47 | `vframe::java_sender`                                                           | `libjvm.dylib`           |

##### Standard library

| Change | Delta |             % |       Samples | Function                                                  | Location                                            |
| -----: | ----: | ------------: | ------------: | --------------------------------------------------------- | --------------------------------------------------- |
| -16.3% |  -837 | 94.9% → 93.6% | 5,146 → 4,309 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                 |
| -16.3% |  -837 | 94.9% → 93.6% | 5,146 → 4,309 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`         |
| -37.8% |  -541 | 26.4% → 19.3% |   1,431 → 890 | `park(boolean, long)`                                     | `jdk.internal.misc.Unsafe`                          |
| -37.7% |  -522 | 25.6% → 18.8% |   1,386 → 864 | `park()`                                                  | `java.util.concurrent.locks.LockSupport`            |
| -10.6% |  -460 | 79.8% → 83.9% | 4,323 → 3,863 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                 |
| -10.6% |  -458 | 79.8% → 83.9% | 4,323 → 3,865 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| -10.7% |  -457 | 79.2% → 83.2% | 4,290 → 3,833 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                |
| -10.4% |  -450 | 79.9% → 84.3% | 4,333 → 3,883 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`                 |
| -10.4% |  -428 | 75.9% → 80.1% | 4,116 → 3,688 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                 |
| -10.4% |  -426 | 75.9% → 80.1% | 4,114 → 3,688 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                 |
| -48.3% |  -389 |  14.9% → 9.0% |     805 → 416 | `awaitWork(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                 |
|  -9.9% |  -381 | 71.1% → 75.4% | 3,851 → 3,470 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
|  -9.4% |   -99 | 19.3% → 20.6% |   1,048 → 949 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`                 |
| -21.3% |   -95 |   8.2% → 7.6% |     445 → 350 | `forEach(BiConsumer)`                                     | `java.util.HashMap`                                 |
| -20.8% |   -92 |   8.2% → 7.6% |     442 → 350 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                                 |
| -16.4% |   -90 | 10.1% → 10.0% |     550 → 460 | `exec()`                                                  | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
| -24.5% |   -81 |   6.1% → 5.4% |     331 → 250 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                                  |
| -24.2% |   -58 |   4.4% → 4.0% |     240 → 182 | `addAll(Collection)`                                      | `java.util.ArrayList`                               |
|  -5.4% |   -55 | 18.9% → 21.0% |   1,023 → 968 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                 |
| -23.0% |   -50 |   4.0% → 3.6% |     217 → 167 | `toArray()`                                               | `java.util.ArrayList`                               |

##### Compiler

|  Change | Delta |            % | Samples | Function                                      | Location       |
| ------: | ----: | -----------: | ------: | --------------------------------------------- | -------------- |
| removed |    -5 |  0.1% → 0.0% |   5 → 0 | `Compile::call_generator`                     | `libjvm.dylib` |
| removed |    -4 |  0.1% → 0.0% |   4 → 0 | `ciTypeFlow::flow_types`                      | `libjvm.dylib` |
| removed |    -4 |  0.1% → 0.0% |   4 → 0 | `ciTypeFlow::do_flow`                         | `libjvm.dylib` |
| removed |    -4 |  0.1% → 0.0% |   4 → 0 | `ciMethod::get_flow_analysis`                 | `libjvm.dylib` |
|  -15.8% |    -3 |  0.4% → 0.3% | 19 → 16 | `CompileQueue::get`                           | `libjvm.dylib` |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `PhaseCCP::push_child_nodes_to_worklist`      | `libjvm.dylib` |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `PhaseCCP::analyze`                           | `libjvm.dylib` |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `PhaseCCP::PhaseCCP`                          | `libjvm.dylib` |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `ciTypeFlow::flow_block`                      | `libjvm.dylib` |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `PhaseGVN::transform_no_reclaim`              | `libjvm.dylib` |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `LinearScan::compute_debug_info_for_scope`    | `libjvm.dylib` |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `LinearScan::assign_reg_num`                  | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `PhaseCCP::push_more_uses`                    | `libjvm.dylib` |
|  -22.2% |    -2 |         0.2% |   9 → 7 | `PhaseIdealLoop::build_and_optimize`          | `libjvm.dylib` |
|  -22.2% |    -2 |         0.2% |   9 → 7 | `PhaseIdealLoop::PhaseIdealLoop`              | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `ciTypeFlow::StateVector::apply_one_bytecode` | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `ciTypeFlow::df_flow_types`                   | `libjvm.dylib` |
|  -66.7% |    -2 | 0.1% → <0.1% |   3 → 1 | `PhaseIdealLoop::build_loop_late_post_work`   | `libjvm.dylib` |
|  -66.7% |    -2 | 0.1% → <0.1% |   3 → 1 | `PhaseIdealLoop::build_loop_late`             | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `TypeInstPtr::make`                           | `libjvm.dylib` |

##### JIT

|  Change | Delta |            % | Samples | Function                 | Location    |
| ------: | ----: | -----------: | ------: | ------------------------ | ----------- |
|  -24.1% |   -13 |  1.0% → 0.9% | 54 → 41 | `zero_blocks`            | `<unknown>` |
|  -75.0% |    -3 | 0.1% → <0.1% |   4 → 1 | `vtable stub`            | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0xbb)` | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `itable stub`            | `<unknown>` |

#### Callers

Callers with the largest change in contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `WorkerThread::run` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller             | Location       |
| -----: | ----: | -----: | --------: | ------------------ | -------------- |
| +35.0% |   +35 | 100.0% | 100 → 135 | `Thread::call_run` | `libjvm.dylib` |

##### `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                  | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------- | -------------- |
| +166.7% |   +15 | 45.0% → 57.1% |  9 → 24 | `G1FullGCMarker::follow_marking_stacks` | `libjvm.dylib` |
|  +63.6% |    +7 | 55.0% → 42.9% | 11 → 18 | `G1FullGCMarker::complete_marking`      | `libjvm.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller                | Location       |
| -----: | ----: | -----: | --------: | --------------------- | -------------- |
|  +9.5% |   +21 | 100.0% | 220 → 241 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller           | Location                  |
| -----: | ----: | -----: | --------: | ---------------- | ------------------------- |
|  +9.5% |   +21 | 100.0% | 220 → 241 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

| Change | Delta |      % |   Samples | Caller         | Location                  |
| -----: | ----: | -----: | --------: | -------------- | ------------------------- |
|  +9.5% |   +21 | 100.0% | 220 → 241 | `thread_start` | `libsystem_pthread.dylib` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

| Change | Delta |      % |   Samples | Caller                   | Location                                                   |
| -----: | ----: | -----: | --------: | ------------------------ | ---------------------------------------------------------- |
| +13.8% |   +21 | 100.0% | 152 → 173 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change | Delta |             % | Samples | Caller              | Location                                                               |
| -----: | ----: | ------------: | ------: | ------------------- | ---------------------------------------------------------------------- |
|    new |   +21 | 0.0% → 100.0% |  0 → 21 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000780111f1b8` |

##### `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                                                              | Location       |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------------- | -------------- |
| +475.0% |   +19 | 100.0% |  4 → 23 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::do_heap_region` | `libjvm.dylib` |

##### `G1FullGCResetMetadataTask::G1ResetMetadataClosure::do_heap_region` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                           | Location       |
| ------: | ----: | -----: | ------: | -------------------------------- | -------------- |
| +475.0% |   +19 | 100.0% |  4 → 23 | `HeapRegionManager::par_iterate` | `libjvm.dylib` |

##### `G1FullGCResetMetadataTask::work` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller              | Location       |
| ------: | ----: | -----: | ------: | ------------------- | -------------- |
| +475.0% |   +19 | 100.0% |  4 → 23 | `WorkerThread::run` | `libjvm.dylib` |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |   Samples | Caller        | Location                                                  |
| -----: | ----: | -----: | --------: | ------------- | --------------------------------------------------------- |
|  +2.0% |   +16 | 100.0% | 792 → 808 | `vectorSum()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `G1FullGCMarker::follow_marking_stacks` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                             | Location       |
| -----: | ----: | -----: | ------: | ---------------------------------- | -------------- |
| +78.9% |   +15 | 100.0% | 19 → 34 | `G1FullGCMarker::complete_marking` | `libjvm.dylib` |

##### `HeapRegionManager::par_iterate` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                            | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------- | -------------- |
| +475.0% |   +19 | 36.4% → 88.5% |  4 → 23 | `G1FullGCResetMetadataTask::work` | `libjvm.dylib` |
|  -57.1% |    -4 | 63.6% → 11.5% |   7 → 3 | `G1FullGCAdjustTask::work`        | `libjvm.dylib` |

##### `G1FullGCMarker::complete_marking` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                   | Location       |
| -----: | ----: | -----: | ------: | ------------------------ | -------------- |
| +31.8% |   +14 | 100.0% | 44 → 58 | `G1FullGCMarkTask::work` | `libjvm.dylib` |

##### `G1FullGCMarkTask::work` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller              | Location       |
| -----: | ----: | -----: | ------: | ------------------- | -------------- |
| +31.8% |   +14 | 100.0% | 44 → 58 | `WorkerThread::run` | `libjvm.dylib` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |       Samples | Caller              | Location                                                  |
| -----: | ----: | -----: | ------------: | ------------------- | --------------------------------------------------------- |
|  +1.1% |   +14 | 100.0% | 1,302 → 1,316 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |       Samples | Caller              | Location                                                  |
| -----: | ----: | -----: | ------------: | ------------------- | --------------------------------------------------------- |
|  +1.1% |   +14 | 100.0% | 1,302 → 1,316 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  +1.1% |   +14 | 100.0% | 1,302 → 1,316 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`    |

##### `G1FullGCMarker::mark_object` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                                                                               | Location       |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------- | -------------- |
| +66.7% |   +12 | 94.7% → 90.9% | 18 → 30 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>`                                      | `libjvm.dylib` |
|    new |    +1 |   0.0% → 3.0% |   0 → 1 | `G1FullGCMarker::follow_marking_stacks`                                                              | `libjvm.dylib` |
|    new |    +1 |   0.0% → 3.0% |   0 → 1 | `void OopOopIterateDispatch<G1MarkAndPushClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `libjvm.dylib` |

##### `G1EvacuateRegionsBaseTask::work` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller              | Location       |
| -----: | ----: | -----: | ------: | ------------------- | -------------- |
| +68.8% |   +11 | 100.0% | 16 → 27 | `WorkerThread::run` | `libjvm.dylib` |

##### `rowToArray$1(Map)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |             % | Samples | Caller                           | Location                                  |
| -----: | ----: | ------------: | ------: | -------------------------------- | ----------------------------------------- |
|    new |    +6 | 0.0% → 100.0% |   0 → 6 | `setUpBeforeAll$$anonfun$1(Map)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `setUpBeforeAll$$anonfun$1(Map)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |             % | Samples | Caller          | Location                                                             |
| -----: | ----: | ------------: | ------: | --------------- | -------------------------------------------------------------------- |
|    new |    +6 | 0.0% → 100.0% |   0 → 6 | `apply(Object)` | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x0000007801126908` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x0000007801126908`)

| Change | Delta |             % | Samples | Caller                                           | Location                                                           |
| -----: | ----: | ------------: | ------: | ------------------------------------------------ | ------------------------------------------------------------------ |
|    new |    +6 | 0.0% → 100.0% |   0 → 6 | `lambda$toCsvRows$2(String[], Function, String)` | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter` |

##### `lambda$toCsvRows$2(String[], Function, String)` (`org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`)

| Change | Delta |             % | Samples | Caller          | Location                                                                                      |
| -----: | ----: | ------------: | ------: | --------------- | --------------------------------------------------------------------------------------------- |
|    new |    +6 | 0.0% → 100.0% |   0 → 6 | `apply(Object)` | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter$$Lambda.0x0000007801123bf8` |

##### `apply(Object)` (`org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter$$Lambda.0x0000007801123bf8`)

| Change | Delta |             % | Samples | Caller           | Location                                 |
| -----: | ----: | ------------: | ------: | ---------------- | ---------------------------------------- |
|    new |    +6 | 0.0% → 100.0% |   0 → 6 | `accept(Object)` | `java.util.stream.ReferencePipeline$3$1` |

##### `toCsvRows(Function)` (`org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`)

| Change | Delta |             % | Samples | Caller                             | Location                                  |
| -----: | ----: | ------------: | ------: | ---------------------------------- | ----------------------------------------- |
|    new |    +6 | 0.0% → 100.0% |   0 → 6 | `setUpBeforeAll(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |      % | Samples | Caller               | Location                                  |
| -----: | ----: | -----: | ------: | -------------------- | ----------------------------------------- |
| +50.0% |    +5 | 100.0% | 10 → 15 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

| Change | Delta |      % | Samples | Caller           | Location                        |
| -----: | ----: | -----: | ------: | ---------------- | ------------------------------- |
|  +4.3% |    +2 | 100.0% | 47 → 49 | `main(String[])` | `org.renaissance.core.Launcher` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change | Delta |      % | Samples | Caller      | Location                                               |
| ------: | ----: | -----: | ------: | ----------- | ------------------------------------------------------ |
| +200.0% |    +2 | 100.0% |   1 → 3 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`)

| Change | Delta |             % | Samples | Caller                    | Location                        |
| -----: | ----: | ------------: | ------: | ------------------------- | ------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `deleteRecursively(Path)` | `org.renaissance.core.DirUtils` |

##### `deleteRecursively(Path)` (`org.renaissance.core.DirUtils`)

| Change | Delta |             % | Samples | Caller                                  | Location                        |
| -----: | ----: | ------------: | ------: | --------------------------------------- | ------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `lambda$createScratchDirectory$1(Path)` | `org.renaissance.core.DirUtils` |

##### `lambda$createScratchDirectory$1(Path)` (`org.renaissance.core.DirUtils`)

| Change | Delta |             % | Samples | Caller  | Location                                                   |
| -----: | ----: | ------------: | ------: | ------- | ---------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `run()` | `org.renaissance.core.DirUtils$$Lambda.0x0000007801003a68` |

##### `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007801003a68`)

| Change | Delta |             % | Samples | Caller                      | Location           |
| -----: | ----: | ------------: | ------: | --------------------------- | ------------------ |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % | Samples | Caller      | Location                                               |
| -----: | ----: | -----: | ------: | ----------- | ------------------------------------------------------ |
| +33.3% |    +1 | 100.0% |   3 → 4 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `<init>(JavaKMeans, List, List, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |            % | Samples | Caller                           | Location                                                   |
| -----: | ----: | -----------: | ------: | -------------------------------- | ---------------------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `<init>(JavaKMeans, List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `G1RegionMarkStatsCache::add_live_words` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                                          | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------- | -------------- |
| +400.0% |    +4 | 16.7% → 35.7% |   1 → 5 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` | `libjvm.dylib` |
|  +80.0% |    +4 | 83.3% → 64.3% |   5 → 9 | `G1FullGCMarker::mark_object`                                   | `libjvm.dylib` |

##### `JVM_IHashCode` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller       | Location           |
| ------: | ----: | -----: | ------: | ------------ | ------------------ |
| +160.0% |    +8 | 100.0% |  5 → 13 | `hashCode()` | `java.lang.Object` |

##### `G1ParEvacuateFollowersClosure::offer_termination` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                                   | Location       |
| ------: | ----: | -----: | ------: | ---------------------------------------- | -------------- |
| +160.0% |    +8 | 100.0% |  5 → 13 | `G1ParEvacuateFollowersClosure::do_void` | `libjvm.dylib` |

##### `ScopeDesc::decode_body` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                 | Location       |
| ------: | ----: | ------------: | ------: | ---------------------- | -------------- |
| +100.0% |    +5 | 71.4% → 76.9% |  5 → 10 | `ScopeDesc::sender`    | `libjvm.dylib` |
|  +50.0% |    +1 | 28.6% → 23.1% |   2 → 3 | `ScopeDesc::ScopeDesc` | `libjvm.dylib` |

##### `Java_java_util_zip_Inflater_inflateBytesBytes` (`libzip.dylib`)

| Change | Delta |      % | Samples | Caller                                                        | Location                 |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------- | ------------------------ |
| +85.7% |    +6 | 100.0% |  7 → 13 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater` |

##### `doubleValue()` (`java.lang.Double`)

| Change | Delta |             % | Samples | Caller                           | Location                                                   |
| -----: | ----: | ------------: | ------: | -------------------------------- | ---------------------------------------------------------- |
| +13.3% |   +10 | 80.6% → 81.7% | 75 → 85 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +5.6% |    +1 | 19.4% → 18.3% | 18 → 19 | `distance(Double[], Double[])`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `hashCode()` (`java.lang.Object`)

|  Change | Delta |      % | Samples | Caller         | Location            |
| ------: | ----: | -----: | ------: | -------------- | ------------------- |
| +133.3% |    +8 | 100.0% |  6 → 14 | `hash(Object)` | `java.util.HashMap` |

##### `hash(Object)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Caller                              | Location            |
| ------: | ----: | ------------: | ------: | ----------------------------------- | ------------------- |
|  +37.0% |   +10 | 81.8% → 92.5% | 27 → 37 | `computeIfAbsent(Object, Function)` | `java.util.HashMap` |
| removed |    -2 |   6.1% → 0.0% |   2 → 0 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |
|  -50.0% |    -1 |   6.1% → 2.5% |   2 → 1 | `put(Object, Object)`               | `java.util.HashMap` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|  Change | Delta |              % | Samples | Caller                        | Location            |
| ------: | ----: | -------------: | ------: | ----------------------------- | ------------------- |
| +600.0% |    +6 | 100.0% → 87.5% |   1 → 7 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |
|     new |    +1 |   0.0% → 12.5% |   0 → 1 | `put(Object, Object)`         | `java.util.HashMap` |

##### `putMapEntries(Map, boolean)` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Caller        | Location            |
| -----: | ----: | -----: | ------: | ------------- | ------------------- |
| +60.0% |    +6 | 100.0% | 10 → 16 | `<init>(Map)` | `java.util.HashMap` |

##### `<init>(Map)` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Caller            | Location                                    |
| -----: | ----: | -----: | ------: | ----------------- | ------------------------------------------- |
| +60.0% |    +6 | 100.0% | 10 → 16 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`)

| Change | Delta |      % | Samples | Caller                      | Location                 |
| -----: | ----: | -----: | ------: | --------------------------- | ------------------------ |
| +85.7% |    +6 | 100.0% |  7 → 13 | `inflate(byte[], int, int)` | `java.util.zip.Inflater` |

##### `inflate(byte[], int, int)` (`java.util.zip.Inflater`)

| Change | Delta |      % | Samples | Caller                   | Location                            |
| -----: | ----: | -----: | ------: | ------------------------ | ----------------------------------- |
| +85.7% |    +6 | 100.0% |  7 → 13 | `read(byte[], int, int)` | `java.util.zip.InflaterInputStream` |

##### `run()` (`java.net.URLClassLoader$1`)

| Change | Delta |      % | Samples | Caller                                                                      | Location                         |
| -----: | ----: | -----: | ------: | --------------------------------------------------------------------------- | -------------------------------- |
| +40.0% |    +6 | 100.0% | 15 → 21 | `run()`                                                                     | `java.net.URLClassLoader$1`      |
| +40.0% |    +6 | 100.0% | 15 → 21 | `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` | `java.security.AccessController` |

##### `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`)

| Change | Delta |      % | Samples | Caller                                                          | Location                         |
| -----: | ----: | -----: | ------: | --------------------------------------------------------------- | -------------------------------- |
| +40.0% |    +6 | 100.0% | 15 → 21 | `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` | `java.security.AccessController` |

##### `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` (`java.security.AccessController`)

| Change | Delta |      % | Samples | Caller              | Location                  |
| -----: | ----: | -----: | ------: | ------------------- | ------------------------- |
| +40.0% |    +6 | 100.0% | 15 → 21 | `findClass(String)` | `java.net.URLClassLoader` |

##### `findClass(String)` (`java.net.URLClassLoader`)

| Change | Delta |      % | Samples | Caller                       | Location                |
| -----: | ----: | -----: | ------: | ---------------------------- | ----------------------- |
| +40.0% |    +6 | 100.0% | 15 → 21 | `loadClass(String, boolean)` | `java.lang.ClassLoader` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

| Change | Delta |      % | Samples | Caller              | Location                |
| -----: | ----: | -----: | ------: | ------------------- | ----------------------- |
| +37.5% |    +6 | 100.0% | 16 → 22 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `loadClass(String)` (`java.lang.ClassLoader`)

|  Change | Delta |             % | Samples | Caller                                                                          | Location                                    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------- |
|  +33.3% |    +2 | 37.5% → 36.4% |   6 → 8 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                     |
|  +50.0% |    +1 | 12.5% → 13.6% |   2 → 3 | `main(String[])`                                                                | `org.renaissance.harness.RenaissanceSuite`  |
|  -50.0% |    -1 |  12.5% → 4.5% |   2 → 1 | `main(String[])`                                                                | `org.renaissance.harness.RenaissanceSuite$` |
| removed |    -1 |   6.3% → 0.0% |   1 → 0 | `<clinit>()`                                                                    | `scala.Predef$`                             |
|  -50.0% |    -1 |  12.5% → 4.5% |   2 → 1 | `<clinit>()`                                                                    | `scala.reflect.ManifestFactory$`            |

##### `accept(Object)` (`java.util.stream.ReferencePipeline$3$1`)

| Change | Delta |             % | Samples | Caller                       | Location                                  |
| -----: | ----: | ------------: | ------: | ---------------------------- | ----------------------------------------- |
|    new |    +6 | 0.0% → 100.0% |   0 → 6 | `forEachRemaining(Consumer)` | `java.util.Spliterators$ArraySpliterator` |

##### `forEachRemaining(Consumer)` (`java.util.Spliterators$ArraySpliterator`)

| Change | Delta |             % | Samples | Caller                        | Location                            |
| -----: | ----: | ------------: | ------: | ----------------------------- | ----------------------------------- |
|    new |    +6 | 0.0% → 100.0% |   0 → 6 | `copyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `signalWork()` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |             % | Samples | Caller                                      | Location                                      |
| -----: | ----: | ------------: | ------: | ------------------------------------------- | --------------------------------------------- |
| +50.0% |    +3 | 66.7% → 64.3% |   6 → 9 | `scan(ForkJoinPool$WorkQueue, int, int)`    | `java.util.concurrent.ForkJoinPool`           |
| +66.7% |    +2 | 33.3% → 35.7% |   3 → 5 | `push(ForkJoinTask, ForkJoinPool, boolean)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`)

|  Change | Delta |             % | Samples | Caller       | Location                       |
| ------: | ----: | ------------: | ------: | ------------ | ------------------------------ |
| +250.0% |    +5 | 22.2% → 50.0% |   2 → 7 | `getBytes()` | `jdk.internal.loader.Resource` |

##### `defineClass(String, Resource)` (`java.net.URLClassLoader`)

| Change | Delta |      % | Samples | Caller  | Location                    |
| -----: | ----: | -----: | ------: | ------- | --------------------------- |
| +41.7% |    +5 | 100.0% | 12 → 17 | `run()` | `java.net.URLClassLoader$1` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller             | Location       |
| -----: | ----: | -----: | ------: | ------------------ | -------------- |
| +52.6% |   +10 | 100.0% | 19 → 29 | `Compile::Compile` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller              | Location       |
| ------: | ----: | -----: | ------: | ------------------- | -------------- |
| +200.0% |   +10 | 100.0% |  5 → 15 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                       | Location       |
| -----: | ----: | -----: | ------: | ---------------------------- | -------------- |
| +14.6% |    +7 | 100.0% | 48 → 55 | `C2Compiler::compile_method` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------- | -------------- |
| +10.0% |    +7 | 100.0% | 70 → 77 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                     | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------------ | -------------- |
| +12.2% |    +6 | 100.0% | 49 → 55 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `GraphBuilder::GraphBuilder` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller             | Location       |
| ------: | ----: | -----: | ------: | ------------------ | -------------- |
| +125.0% |    +5 | 100.0% |   4 → 9 | `IRScope::IRScope` | `libjvm.dylib` |

##### `CompileBroker::compile_method` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                                        | Location       |
| ------: | ----: | -------------: | ------: | --------------------------------------------- | -------------- |
| +100.0% |    +3 | 100.0% → 85.7% |   3 → 6 | `CompileBroker::compile_method`               | `libjvm.dylib` |
| +150.0% |    +3 |  66.7% → 71.4% |   2 → 5 | `CompilationPolicy::event`                    | `libjvm.dylib` |
| +100.0% |    +1 |  33.3% → 28.6% |   1 → 2 | `CompilationPolicy::method_back_branch_event` | `libjvm.dylib` |

##### `CompilationPolicy::event` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                                 | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------ | -------------- |
| +500.0% |    +5 | 16.7% → 60.0% |   1 → 6 | `InterpreterRuntime::frequency_counter_overflow_inner` | `libjvm.dylib` |
|  -20.0% |    -1 | 83.3% → 40.0% |   5 → 4 | `Runtime1::counter_overflow`                           | `libjvm.dylib` |

##### `Compilation::build_hir` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                             | Location       |
| -----: | ----: | -----: | ------: | ---------------------------------- | -------------- |
| +66.7% |    +4 | 100.0% |  6 → 10 | `Compilation::compile_java_method` | `libjvm.dylib` |

##### `GraphBuilder::iterate_bytecodes_for_block` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                             | Location       |
| ------: | ----: | -----: | ------: | ---------------------------------- | -------------- |
| +100.0% |    +4 | 100.0% |   4 → 8 | `GraphBuilder::iterate_all_blocks` | `libjvm.dylib` |

##### `GraphBuilder::iterate_all_blocks` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                       | Location       |
| ------: | ----: | -----: | ------: | ---------------------------- | -------------- |
| +100.0% |    +4 | 100.0% |   4 → 8 | `GraphBuilder::GraphBuilder` | `libjvm.dylib` |

##### `Type::hashcons` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                    | Location       |
| -----: | ----: | -----------: | ------: | ------------------------- | -------------- |
|    new |    +2 | 0.0% → 50.0% |   0 → 2 | `TypeInstPtr::add_offset` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `TypeFunc::make`          | `libjvm.dylib` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `LoadNode::make`          | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                     | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------ | -------------- |
|     new |    +3 | 0.0% → 50.0% |   0 → 3 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
| +100.0% |    +1 |        33.3% |   1 → 2 | `Compile::Optimize`                        | `libjvm.dylib` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `Compile::process_for_post_loop_opts_igvn` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller             | Location       |
| -----: | ----: | -----: | ------: | ------------------ | -------------- |
| +18.8% |    +3 | 100.0% | 16 → 19 | `Compile::Compile` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                          | Location       |
| -----: | ----: | -----: | ------: | ------------------------------- | -------------- |
|  +3.3% |    +3 | 100.0% | 90 → 93 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                        | Location       |
| -----: | ----: | -----: | ------: | ----------------------------- | -------------- |
| +18.8% |    +3 | 100.0% | 16 → 19 | `Compilation::compile_method` | `libjvm.dylib` |

##### `GraphBuilder::invoke` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                                      | Location       |
| ------: | ----: | -----: | ------: | ------------------------------------------- | -------------- |
| +100.0% |    +3 | 100.0% |   3 → 6 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib` |

##### `GraphBuilder::try_inline` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                 | Location       |
| ------: | ----: | -----: | ------: | ---------------------- | -------------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `GraphBuilder::invoke` | `libjvm.dylib` |

##### `CompileBroker::compile_method_base` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                          | Location       |
| -----: | ----: | -----: | ------: | ------------------------------- | -------------- |
| +66.7% |    +2 | 100.0% |   3 → 5 | `CompileBroker::compile_method` | `libjvm.dylib` |

##### `PhaseMacroExpand::expand_macro_nodes` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller              | Location       |
| ------: | ----: | -----: | ------: | ------------------- | -------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `Compile::Optimize` | `libjvm.dylib` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % |       Samples | Caller  | Location                                    |
| -----: | ----: | -----: | ------------: | ------- | ------------------------------------------- |
| -16.3% |  -837 | 100.0% | 5,146 → 4,309 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|  Change | Delta |           % |     Samples | Caller                  | Location                 |
| ------: | ----: | ----------: | ----------: | ----------------------- | ------------------------ |
|  -39.3% |  -543 |       96.6% | 1,383 → 840 | `Parker::park`          | `libjvm.dylib`           |
|  -37.5% |   -18 |        3.4% |     48 → 30 | `PlatformMonitor::wait` | `libjvm.dylib`           |
| removed |    -1 | 0.1% → 0.0% |       1 → 0 | `Profiler::timerLoop`   | `libasyncProfiler.dylib` |

##### `Parker::park` (`libjvm.dylib`)

|  Change | Delta |              % |     Samples | Caller                       | Location                 |
| ------: | ----: | -------------: | ----------: | ---------------------------- | ------------------------ |
|  -38.8% |  -540 | 99.9% → 100.0% | 1,390 → 850 | `Unsafe_Park`                | `libjvm.dylib`           |
| removed |    -1 |    0.1% → 0.0% |       1 → 0 | `LockTracer::UnsafeParkHook` | `libasyncProfiler.dylib` |

##### `LockTracer::UnsafeParkHook` (`libasyncProfiler.dylib`)

|  Change | Delta |              % |     Samples | Caller                | Location                   |
| ------: | ----: | -------------: | ----------: | --------------------- | -------------------------- |
|  -37.9% |  -540 | 99.9% → 100.0% | 1,426 → 886 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |
| removed |    -1 |    0.1% → 0.0% |       1 → 0 | `break_stack_range`   | `<unknown>`                |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

| Change | Delta |             % |     Samples | Caller            | Location                                 |
| -----: | ----: | ------------: | ----------: | ----------------- | ---------------------------------------- |
| -37.7% |  -523 | 96.9% → 97.0% | 1,386 → 863 | `park()`          | `java.util.concurrent.locks.LockSupport` |
| -40.0% |   -18 |   3.1% → 3.0% |     45 → 27 | `parkUntil(long)` | `java.util.concurrent.locks.LockSupport` |

##### `Unsafe_Park` (`libjvm.dylib`)

| Change | Delta |      % |     Samples | Caller                       | Location                 |
| -----: | ----: | -----: | ----------: | ---------------------------- | ------------------------ |
| -38.4% |  -535 | 100.0% | 1,395 → 860 | `LockTracer::UnsafeParkHook` | `libasyncProfiler.dylib` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

| Change | Delta |             % |   Samples | Caller                              | Location                            |
| -----: | ----: | ------------: | --------: | ----------------------------------- | ----------------------------------- |
| -49.0% |  -370 | 54.5% → 44.6% | 755 → 385 | `awaitWork(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |
| -24.1% |  -152 | 45.5% → 55.4% | 631 → 479 | `awaitDone(int, long)`              | `java.util.concurrent.ForkJoinTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % |       Samples | Caller                                                    | Location                                      |
| -----: | ----: | ------------: | ------------: | --------------------------------------------------------- | --------------------------------------------- |
| -10.6% |  -460 |        100.0% | 4,323 → 3,863 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  -9.9% |  -382 | 89.1% → 89.8% | 3,851 → 3,469 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  -9.6% |  -100 | 24.2% → 24.5% |   1,047 → 947 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`           |
|  -5.7% |   -57 | 23.2% → 24.5% |   1,004 → 947 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |      % |       Samples | Caller                                   | Location                            |
| -----: | ----: | -----: | ------------: | ---------------------------------------- | ----------------------------------- |
| -10.6% |  -458 | 100.0% | 4,323 → 3,865 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change | Delta |      % |       Samples | Caller   | Location                             |
| -----: | ----: | -----: | ------------: | -------- | ------------------------------------ |
| -10.7% |  -457 | 100.0% | 4,290 → 3,833 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change | Delta |      % |       Samples | Caller     | Location                            |
| -----: | ----: | -----: | ------------: | ---------- | ----------------------------------- |
| -10.7% |  -457 | 100.0% | 4,290 → 3,833 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % |       Samples | Caller                              | Location                            |
| -----: | ----: | -----: | ------------: | ----------------------------------- | ----------------------------------- |
| -10.4% |  -450 | 100.0% | 4,333 → 3,883 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |      % |       Samples | Caller      | Location                                               |
| -----: | ----: | -----: | ------------: | ----------- | ------------------------------------------------------ |
| -10.4% |  -428 | 100.0% | 4,116 → 3,688 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |      % |       Samples | Caller   | Location                            |
| -----: | ----: | -----: | ------------: | -------- | ----------------------------------- |
| -10.4% |  -426 | 100.0% | 4,114 → 3,688 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % |   Samples | Caller                              | Location                            |
| -----: | ----: | -----: | --------: | ----------------------------------- | ----------------------------------- |
| -48.3% |  -389 | 100.0% | 805 → 416 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |      % |       Samples | Caller                 | Location                            |
| -----: | ----: | -----: | ------------: | ---------------------- | ----------------------------------- |
|  -9.9% |  -381 | 100.0% | 3,851 → 3,470 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |              % |       Samples | Caller              | Location                                                   |
| ------: | ----: | -------------: | ------------: | ------------------- | ---------------------------------------------------------- |
|  -13.1% |  -236 |         100.0% | 1,797 → 1,561 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -13.0% |  -234 | 99.9% → 100.0% | 1,795 → 1,561 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
| removed |    -2 |    0.1% → 0.0% |         2 → 0 | `unknown`           | `<unknown>`                                                |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |       Samples | Caller              | Location                                                   |
| -----: | ----: | -----: | ------------: | ------------------- | ---------------------------------------------------------- |
| -17.1% |  -232 | 100.0% | 1,356 → 1,124 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller                  | Location                                                   |
| -----: | ----: | -----: | --------: | ----------------------- | ---------------------------------------------------------- |
| -12.4% |  -105 | 100.0% | 850 → 745 | `findNearestCentroid()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % |   Samples | Caller                   | Location                                                               |
| -----: | ----: | -----: | --------: | ------------------------ | ---------------------------------------------------------------------- |
| -20.8% |   -92 | 100.0% | 442 → 350 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a3b90` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a3b90`)

| Change | Delta |      % |   Samples | Caller                | Location            |
| -----: | ----: | -----: | --------: | --------------------- | ------------------- |
| -20.8% |   -92 | 100.0% | 442 → 350 | `forEach(BiConsumer)` | `java.util.HashMap` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a2bd0`)

| Change | Delta |      % |   Samples | Caller   | Location                                            |
| -----: | ----: | -----: | --------: | -------- | --------------------------------------------------- |
| -16.4% |   -90 | 100.0% | 550 → 460 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % |   Samples | Caller   | Location                                                               |
| -----: | ----: | -----: | --------: | -------- | ---------------------------------------------------------------------- |
| -16.2% |   -89 | 100.0% | 549 → 460 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a2bd0` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller                           | Location                                                   |
| -----: | ----: | -----: | --------: | -------------------------------- | ---------------------------------------------------------- |
| -19.2% |   -87 | 100.0% | 454 → 367 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |             % |   Samples | Caller                     | Location                                                   |
| ------: | ----: | ------------: | --------: | -------------------------- | ---------------------------------------------------------- |
|  -19.2% |   -87 | 99.8% → 99.5% | 454 → 367 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +100.0% |    +1 |   0.2% → 0.5% |     1 → 2 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller      | Location                                               |
| -----: | ----: | -----: | --------: | ----------- | ------------------------------------------------------ |
| -18.9% |   -86 | 100.0% | 454 → 368 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % |   Samples | Caller                  | Location                                                               |
| -----: | ----: | -----: | --------: | ----------------------- | ---------------------------------------------------------------------- |
| -24.2% |   -84 | 100.0% | 347 → 263 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a7000` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a7000`)

| Change | Delta |      % |   Samples | Caller                              | Location            |
| -----: | ----: | -----: | --------: | ----------------------------------- | ------------------- |
| -24.2% |   -84 | 100.0% | 347 → 263 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change | Delta |             % | Samples | Caller              | Location                                                               |
| ------: | ----: | ------------: | ------: | ------------------- | ---------------------------------------------------------------------- |
| removed |   -23 | 100.0% → 0.0% |  23 → 0 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000f00111f208` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % |   Samples | Caller              | Location                                               |
| -----: | ----: | -----: | --------: | ------------------- | ------------------------------------------------------ |
|  -3.1% |   -21 | 100.0% | 682 → 661 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % |   Samples | Caller              | Location                                               |
| -----: | ----: | -----: | --------: | ------------------- | ------------------------------------------------------ |
|  -3.1% |   -21 | 100.0% | 682 → 661 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  -3.1% |   -21 | 100.0% | 682 → 661 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % |   Samples | Caller                     | Location                                               |
| -----: | ----: | -----: | --------: | -------------------------- | ------------------------------------------------------ |
|  -2.7% |   -18 | 100.0% | 673 → 655 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change | Delta |             % | Samples | Caller                  | Location                                  |
| ------: | ----: | ------------: | ------: | ----------------------- | ----------------------------------------- |
| removed |    -6 | 100.0% → 0.0% |   6 → 0 | `executeOperation(int)` | `org.renaissance.harness.ExecutionDriver` |

##### `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`)

| Change | Delta |      % | Samples | Caller               | Location                                  |
| -----: | ----: | -----: | ------: | -------------------- | ----------------------------------------- |
| -83.3% |    -5 | 100.0% |   6 → 1 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller              | Location                                                   |
| -----: | ----: | -----: | --------: | ------------------- | ---------------------------------------------------------- |
|  -0.9% |    -4 | 100.0% | 441 → 437 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `_new_array_Java` (`<unknown>`)

|  Change | Delta |             % |   Samples | Caller                    | Location                                                   |
| ------: | ----: | ------------: | --------: | ------------------------- | ---------------------------------------------------------- |
|  -27.9% |   -53 | 91.8% → 93.8% | 190 → 137 | `copyOf(Object[], int)`   | `java.util.Arrays`                                         |
|  -38.5% |    -5 |   6.3% → 5.5% |    13 → 8 | `findNearestCentroid()`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -66.7% |    -2 |   1.4% → 0.7% |     3 → 1 | `grow(int)`               | `java.util.ArrayList`                                      |
| removed |    -1 |   0.5% → 0.0% |     1 → 0 | `add(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

##### `OptoRuntime::new_array_C` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller            | Location    |
| -----: | ----: | -----: | --------: | ----------------- | ----------- |
| -28.2% |   -57 | 100.0% | 202 → 145 | `_new_array_Java` | `<unknown>` |

##### `CollectedHeap::array_allocate` (`libjvm.dylib`)

| Change | Delta |             % |   Samples | Caller                             | Location       |
| -----: | ----: | ------------: | --------: | ---------------------------------- | -------------- |
| -24.0% |   -43 | 93.2% → 94.4% | 179 → 136 | `InstanceKlass::allocate_objArray` | `libjvm.dylib` |
| -46.2% |    -6 |   6.8% → 4.9% |    13 → 7 | `OptoRuntime::new_array_C`         | `libjvm.dylib` |
|    new |    +1 |   0.0% → 0.7% |     0 → 1 | `InterpreterRuntime::newarray`     | `libjvm.dylib` |

##### `InstanceKlass::allocate_objArray` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller                     | Location       |
| -----: | ----: | -----: | --------: | -------------------------- | -------------- |
| -25.3% |   -46 | 100.0% | 182 → 136 | `OptoRuntime::new_array_C` | `libjvm.dylib` |

##### `MemAllocator::allocate` (`libjvm.dylib`)

| Change | Delta |             % |   Samples | Caller                             | Location       |
| -----: | ----: | ------------: | --------: | ---------------------------------- | -------------- |
| -24.2% |   -46 | 97.4% → 95.4% | 190 → 144 | `CollectedHeap::array_allocate`    | `libjvm.dylib` |
| +40.0% |    +2 |   2.6% → 4.6% |     5 → 7 | `InstanceKlass::allocate_instance` | `libjvm.dylib` |

##### `JvmtiObjectAllocEventCollector::generate_call_for_allocated` (`libjvm.dylib`)

| Change | Delta |      % |  Samples | Caller                                                                          | Location       |
| -----: | ----: | -----: | -------: | ------------------------------------------------------------------------------- | -------------- |
| -25.8% |   -34 | 100.0% | 132 → 98 | `JvmtiSampledObjectAllocEventCollector::~JvmtiSampledObjectAllocEventCollector` | `libjvm.dylib` |

##### `JvmtiSampledObjectAllocEventCollector::~JvmtiSampledObjectAllocEventCollector` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller                                                      | Location       |
| -----: | ----: | -----: | --------: | ----------------------------------------------------------- | -------------- |
| -24.8% |   -33 | 100.0% | 133 → 100 | `MemAllocator::Allocation::notify_allocation_jvmti_sampler` | `libjvm.dylib` |

##### `ObjectSampler::recordAllocation` (`libasyncProfiler.dylib`)

|  Change | Delta |              % |  Samples | Caller                                                        | Location       |
| ------: | ----: | -------------: | -------: | ------------------------------------------------------------- | -------------- |
|  -24.8% |   -31 | 99.2% → 100.0% | 125 → 94 | `JvmtiExport::post_sampled_object_alloc`                      | `libjvm.dylib` |
| removed |    -1 |    0.8% → 0.0% |    1 → 0 | `JvmtiObjectAllocEventCollector::generate_call_for_allocated` | `libjvm.dylib` |

##### `JvmtiExport::post_sampled_object_alloc` (`libjvm.dylib`)

| Change | Delta |      % |  Samples | Caller                                                        | Location       |
| -----: | ----: | -----: | -------: | ------------------------------------------------------------- | -------------- |
| -25.2% |   -32 | 100.0% | 127 → 95 | `JvmtiObjectAllocEventCollector::generate_call_for_allocated` | `libjvm.dylib` |

##### `forward_copy_longs` (`<unknown>`)

| Change | Delta |             % |   Samples | Caller                            | Location    |
| -----: | ----: | ------------: | --------: | --------------------------------- | ----------- |
| -13.4% |   -24 | 83.3% → 83.8% | 179 → 155 | `arrayof_jint_disjoint_arraycopy` | `<unknown>` |
| -16.7% |    -6 | 16.7% → 16.2% |   36 → 30 | `arrayof_oop_disjoint_arraycopy`  | `<unknown>` |

##### `JvmtiEnvBase::get_stack_trace` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                          | Location       |
| ------: | ----: | -------------: | ------: | ------------------------------- | -------------- |
|  -30.2% |   -29 | 99.0% → 100.0% | 96 → 67 | `JvmtiEnv::GetStackTrace`       | `libjvm.dylib` |
|  -31.7% |   -26 |  84.5% → 83.6% | 82 → 56 | `JvmtiEnvBase::get_stack_trace` | `libjvm.dylib` |
| removed |    -1 |    1.0% → 0.0% |   1 → 0 | `jvmti_GetStackTrace`           | `libjvm.dylib` |

##### `MemAllocator::Allocation::notify_allocation_jvmti_sampler` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller                   | Location       |
| -----: | ----: | -----: | --------: | ------------------------ | -------------- |
| -21.0% |   -29 | 100.0% | 138 → 109 | `MemAllocator::allocate` | `libjvm.dylib` |

##### `jvmti_GetStackTrace` (`libjvm.dylib`)

| Change | Delta |      % |  Samples | Caller                   | Location                 |
| -----: | ----: | -----: | -------: | ------------------------ | ------------------------ |
| -28.7% |   -29 | 100.0% | 101 → 72 | `Profiler::recordSample` | `libasyncProfiler.dylib` |

##### `JvmtiEnv::GetStackTrace` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                | Location       |
| -----: | ----: | -----: | ------: | --------------------- | -------------- |
| -27.3% |   -27 | 100.0% | 99 → 72 | `jvmti_GetStackTrace` | `libjvm.dylib` |

##### `Profiler::recordSample` (`libasyncProfiler.dylib`)

| Change | Delta |      % |  Samples | Caller                            | Location                 |
| -----: | ----: | -----: | -------: | --------------------------------- | ------------------------ |
| -24.8% |   -27 | 100.0% | 109 → 82 | `ObjectSampler::recordAllocation` | `libasyncProfiler.dylib` |

##### `vframe::java_sender` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                          | Location       |
| -----: | ----: | -----: | ------: | ------------------------------- | -------------- |
| -31.9% |   -22 | 100.0% | 69 → 47 | `JvmtiEnvBase::get_stack_trace` | `libjvm.dylib` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % |   Samples | Caller                         | Location                                               |
| -----: | ----: | ------------: | --------: | ------------------------------ | ------------------------------------------------------ |
| -16.1% |   -88 | 52.1% → 48.3% | 546 → 458 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans`            |
|  -2.7% |   -18 | 64.2% → 69.0% | 673 → 655 | `average(List)`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

| Change | Delta |      % |   Samples | Caller            | Location                                    |
| -----: | ----: | -----: | --------: | ----------------- | ------------------------------------------- |
| -21.3% |   -95 | 100.0% | 445 → 350 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

| Change | Delta |      % |   Samples | Caller                              | Location                                    |
| -----: | ----: | -----: | --------: | ----------------------------------- | ------------------------------------------- |
| -20.8% |   -92 | 100.0% | 442 → 350 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

| Change | Delta |      % |   Samples | Caller     | Location                            |
| -----: | ----: | -----: | --------: | ---------- | ----------------------------------- |
| -16.4% |   -90 | 100.0% | 550 → 460 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change | Delta |             % |   Samples | Caller      | Location              |
| -----: | ----: | ------------: | --------: | ----------- | --------------------- |
| -23.0% |   -50 | 65.6% → 66.8% | 217 → 167 | `toArray()` | `java.util.ArrayList` |
| -27.2% |   -31 | 34.4% → 33.2% |  114 → 83 | `grow(int)` | `java.util.ArrayList` |

##### `addAll(Collection)` (`java.util.ArrayList`)

| Change | Delta |      % |   Samples | Caller                       | Location                                    |
| -----: | ----: | -----: | --------: | ---------------------------- | ------------------------------------------- |
| -24.2% |   -58 | 100.0% | 240 → 182 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % |     Samples | Caller                 | Location                            |
| -----: | ----: | -----: | ----------: | ---------------------- | ----------------------------------- |
|  -5.4% |   -55 | 100.0% | 1,023 → 968 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `toArray()` (`java.util.ArrayList`)

| Change | Delta |             % |  Samples | Caller               | Location              |
| -----: | ----: | ------------: | -------: | -------------------- | --------------------- |
| -23.6% |   -25 | 48.8% → 48.5% | 106 → 81 | `<init>(Collection)` | `java.util.ArrayList` |
| -22.5% |   -25 | 51.2% → 51.5% | 111 → 86 | `addAll(Collection)` | `java.util.ArrayList` |

##### `Compile::call_generator` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller           | Location       |
| ------: | ----: | ------------: | ------: | ---------------- | -------------- |
| removed |    -5 | 100.0% → 0.0% |   5 → 0 | `Parse::do_call` | `libjvm.dylib` |

##### `ciTypeFlow::flow_types` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                | Location       |
| ------: | ----: | ------------: | ------: | --------------------- | -------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `ciTypeFlow::do_flow` | `libjvm.dylib` |

##### `ciTypeFlow::do_flow` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                        | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------- | -------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `ciMethod::get_flow_analysis` | `libjvm.dylib` |

##### `ciMethod::get_flow_analysis` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                     | Location       |
| ------: | ----: | ------------: | ------: | -------------------------- | -------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `InlineTree::ok_to_inline` | `libjvm.dylib` |

##### `CompileQueue::get` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------- | -------------- |
| -15.8% |    -3 | 100.0% | 19 → 16 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

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

##### `ciTypeFlow::flow_block` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                      | Location       |
| ------: | ----: | -----------: | ------: | --------------------------- | -------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `ciTypeFlow::df_flow_types` | `libjvm.dylib` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `ciTypeFlow::flow_types`    | `libjvm.dylib` |

##### `PhaseGVN::transform_no_reclaim` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                   | Location       |
| ------: | ----: | -----------: | ------: | ------------------------ | -------------- |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `Parse::do_one_bytecode` | `libjvm.dylib` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `LoadNode::make`         | `libjvm.dylib` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `GraphKit::make_load`    | `libjvm.dylib` |

##### `LinearScan::compute_debug_info_for_scope` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                       | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------- | -------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `LinearScan::assign_reg_num` | `libjvm.dylib` |

##### `LinearScan::assign_reg_num` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                       | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------- | -------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `LinearScan::do_linear_scan` | `libjvm.dylib` |

##### `PhaseCCP::push_more_uses` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                   | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `PhaseCCP::push_child_nodes_to_worklist` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                           | Location       |
| -----: | ----: | -----: | ------: | -------------------------------- | -------------- |
| -22.2% |    -2 | 100.0% |   9 → 7 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                     | Location       |
| -----: | ----: | -----: | ------: | -------------------------- | -------------- |
| -22.2% |    -2 | 100.0% |   9 → 7 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `ciTypeFlow::StateVector::apply_one_bytecode` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                   | Location       |
| ------: | ----: | ------------: | ------: | ------------------------ | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `ciTypeFlow::flow_block` | `libjvm.dylib` |

##### `ciTypeFlow::df_flow_types` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                   | Location       |
| ------: | ----: | ------------: | ------: | ------------------------ | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `ciTypeFlow::flow_types` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                               | Location       |
| ------: | ----: | -------------: | ------: | ------------------------------------ | -------------- |
|  -50.0% |    -1 | 66.7% → 100.0% |   2 → 1 | `PhaseIdealLoop::build_loop_late`    | `libjvm.dylib` |
| removed |    -1 |   33.3% → 0.0% |   1 → 0 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                               | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------ | -------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `TypeInstPtr::make` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                    | Location       |
| ------: | ----: | ------------: | ------: | ------------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `TypeInstPtr::add_offset` | `libjvm.dylib` |

##### `zero_blocks` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                              | Location                                                   |
| ------: | ----: | ------------: | ------: | ----------------------------------- | ---------------------------------------------------------- |
|  -34.1% |   -14 | 75.9% → 65.9% | 41 → 27 | `merge(Object, Object, BiFunction)` | `java.util.HashMap`                                        |
| +200.0% |    +2 |   1.9% → 7.3% |   1 → 3 | `findNearestCentroid()`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -8.3% |    -1 | 22.2% → 26.8% | 12 → 11 | `grow(int)`                         | `java.util.ArrayList`                                      |

##### `vtable stub` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller      | Location                                               |
| ------: | ----: | -----------: | ------: | ----------- | ------------------------------------------------------ |
| removed |    -2 | 50.0% → 0.0% |   2 → 0 | `join()`    | `java.util.concurrent.ForkJoinTask`                    |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `I2C/C2I adapters(0xbb)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller   | Location                                                               |
| ------: | ----: | ------------: | ------: | -------- | ---------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f001183d68` |

##### `itable stub` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                  | Location                |
| ------: | ----: | ------------: | ------: | ----------------------- | ----------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `getExactSizeIfKnown()` | `java.util.Spliterator` |

#### Callees

Callees with the largest change in contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `WorkerThread::run` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                            | Location                 |
| ------: | ----: | ------------: | ------: | --------------------------------- | ------------------------ |
| +475.0% |   +19 |  4.0% → 17.0% |  4 → 23 | `G1FullGCResetMetadataTask::work` | `libjvm.dylib`           |
|  +31.8% |   +14 | 44.0% → 43.0% | 44 → 58 | `G1FullGCMarkTask::work`          | `libjvm.dylib`           |
|  +68.8% |   +11 | 16.0% → 20.0% | 16 → 27 | `G1EvacuateRegionsBaseTask::work` | `libjvm.dylib`           |
|  -44.4% |    -8 |  18.0% → 7.4% | 18 → 10 | `semaphore_wait_trap`             | `libsystem_kernel.dylib` |
|     new |    +6 |   0.0% → 4.4% |   0 → 6 | `G1FullGCPrepareTask::work`       | `libjvm.dylib`           |

##### `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                   | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | -------------- |
|  +66.7% |   +12 | 90.0% → 71.4% | 18 → 30 | `G1FullGCMarker::mark_object`            | `libjvm.dylib` |
| +400.0% |    +4 |  5.0% → 11.9% |   1 → 5 | `G1RegionMarkStatsCache::add_live_words` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 2.4% |   0 → 1 | `MarkBitMap::check_mark`                 | `libjvm.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|  Change | Delta |             % |   Samples | Callee                    | Location       |
| ------: | ----: | ------------: | --------: | ------------------------- | -------------- |
|  +35.0% |   +35 | 45.5% → 56.0% | 100 → 135 | `WorkerThread::run`       | `libjvm.dylib` |
| removed |   -11 |   5.0% → 0.0% |    11 → 0 | `ConcurrentGCThread::run` | `libjvm.dylib` |
|  -58.3% |    -7 |   5.5% → 2.1% |    12 → 5 | `WatcherThread::run`      | `libjvm.dylib` |
| +100.0% |    +4 |   1.8% → 3.3% |     4 → 8 | `VMThread::run`           | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Callee             | Location       |
| -----: | ----: | -----: | --------: | ------------------ | -------------- |
|  +9.5% |   +21 | 100.0% | 220 → 241 | `Thread::call_run` | `libjvm.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

| Change | Delta |      % |   Samples | Callee                | Location       |
| -----: | ----: | -----: | --------: | --------------------- | -------------- |
|  +9.5% |   +21 | 100.0% | 220 → 241 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

| Change | Delta |      % |   Samples | Callee           | Location                  |
| -----: | ----: | -----: | --------: | ---------------- | ------------------------- |
|  +9.5% |   +21 | 100.0% | 220 → 241 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Callee                                       | Location                                                                              |
| ------: | ----: | ------------: | ------: | -------------------------------------------- | ------------------------------------------------------------------------------------- |
|  +37.0% |   +10 | 17.8% → 21.4% | 27 → 37 | `hash(Object)`                               | `java.util.HashMap`                                                                   |
|     new |    +3 |   0.0% → 1.7% |   0 → 3 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap`                                                                   |
|     new |    +2 |   0.0% → 1.2% |   0 → 2 | `resize()`                                   | `java.util.HashMap`                                                                   |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `InterpreterRuntime::at_safepoint`           | `libjvm.dylib`                                                                        |
| +100.0% |    +1 |   0.7% → 1.2% |   1 → 2 | `apply(Object)`                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000078011a3940` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change | Delta |            % | Samples | Callee                                                                                       | Location                                  |
| -----: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
|    new |   +16 | 0.0% → 76.2% |  0 → 16 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
|    new |    +5 | 0.0% → 23.8% |   0 → 5 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `G1FullGCResetMetadataTask::G1ResetMetadataClosure::do_heap_region` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Callee                                                                            | Location       |
| ------: | ----: | -----: | ------: | --------------------------------------------------------------------------------- | -------------- |
| +475.0% |   +19 | 100.0% |  4 → 23 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region` | `libjvm.dylib` |

##### `G1FullGCResetMetadataTask::work` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Callee                           | Location       |
| ------: | ----: | -----: | ------: | -------------------------------- | -------------- |
| +475.0% |   +19 | 100.0% |  4 → 23 | `HeapRegionManager::par_iterate` | `libjvm.dylib` |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |            % | Samples | Callee                           | Location           |
| ------: | ----: | -----------: | ------: | -------------------------------- | ------------------ |
|  +13.3% |   +10 | 9.5% → 10.5% | 75 → 85 | `doubleValue()`                  | `java.lang.Double` |
| removed |    -1 |  0.1% → 0.0% |   1 → 0 | `counter_overflow Runtime1 stub` | `<unknown>`        |

##### `G1FullGCMarker::follow_marking_stacks` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                                                                               | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------- | -------------- |
| +166.7% |   +15 | 47.4% → 70.6% |  9 → 24 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>`                                      | `libjvm.dylib` |
|  -66.7% |    -2 |  15.8% → 2.9% |   3 → 1 | `void OopOopIterateDispatch<G1MarkAndPushClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `libjvm.dylib` |
|  +25.0% |    +1 | 21.1% → 14.7% |   4 → 5 | `G1FullGCMarker::publish_and_drain_oop_tasks`                                                        | `libjvm.dylib` |
|  -50.0% |    -1 |  10.5% → 2.9% |   2 → 1 | `G1FullGCMarker::follow_object`                                                                      | `libjvm.dylib` |
|     new |    +1 |   0.0% → 2.9% |   0 → 1 | `G1FullGCMarker::mark_object`                                                                        | `libjvm.dylib` |

##### `HeapRegionManager::par_iterate` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                                              | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------- | -------------- |
| +475.0% |   +19 | 36.4% → 88.5% |  4 → 23 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::do_heap_region` | `libjvm.dylib` |
|  -57.1% |    -4 | 63.6% → 11.5% |   7 → 3 | `G1AdjustRegionClosure::do_heap_region`                             | `libjvm.dylib` |

##### `G1FullGCMarker::complete_marking` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                                                                                                     | Location       |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------- | -------------- |
| +78.9% |   +15 | 43.2% → 58.6% | 19 → 34 | `G1FullGCMarker::follow_marking_stacks`                                                                    | `libjvm.dylib` |
| +63.6% |    +7 | 25.0% → 31.0% | 11 → 18 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>`                                            | `libjvm.dylib` |
| -71.4% |    -5 |  15.9% → 3.4% |   7 → 2 | `GenericTaskQueueSet<OverflowTaskQueue<ObjArrayTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>::steal_best_of_2` | `libjvm.dylib` |
| -50.0% |    -3 |  13.6% → 5.2% |   6 → 3 | `TaskTerminator::offer_termination`                                                                        | `libjvm.dylib` |

##### `G1FullGCMarkTask::work` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                             | Location       |
| -----: | ----: | -----: | ------: | ---------------------------------- | -------------- |
| +31.8% |   +14 | 100.0% | 44 → 58 | `G1FullGCMarker::complete_marking` | `libjvm.dylib` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |             % |   Samples | Callee                                           | Location                                                  |
| ------: | ----: | ------------: | --------: | ------------------------------------------------ | --------------------------------------------------------- |
|   +2.0% |   +16 | 60.8% → 61.4% | 792 → 808 | `accumulate(Double[], double[])`                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  -15.3% |   -11 |   5.5% → 4.6% |   72 → 61 | `get(int)`                                       | `java.util.ArrayList`                                     |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `InterpreterRuntime::newarray`                   | `libjvm.dylib`                                            |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `counter_overflow Runtime1 stub`                 | `<unknown>`                                               |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `InterpreterRuntime::frequency_counter_overflow` | `libjvm.dylib`                                            |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |       Samples | Callee              | Location                                                  |
| -----: | ----: | -----: | ------------: | ------------------- | --------------------------------------------------------- |
|  +1.1% |   +14 | 100.0% | 1,302 → 1,316 | `vectorSum()`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  +1.1% |   +14 | 100.0% | 1,302 → 1,316 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `G1FullGCMarker::mark_object` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                                   | Location       |
| -----: | ----: | ------------: | ------: | ---------------------------------------- | -------------- |
| +80.0% |    +4 | 26.3% → 27.3% |   5 → 9 | `G1RegionMarkStatsCache::add_live_words` | `libjvm.dylib` |
| -50.0% |    -1 |  10.5% → 3.0% |   2 → 1 | `MarkBitMap::check_mark`                 | `libjvm.dylib` |

##### `G1EvacuateRegionsBaseTask::work` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                         | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------------------- | -------------- |
|     new |    +6 |  0.0% → 22.2% |   0 → 6 | `G1EvacuateRegionsTask::scan_roots`            | `libjvm.dylib` |
|  +26.7% |    +4 | 93.8% → 70.4% | 15 → 19 | `G1EvacuateRegionsTask::evacuate_live_objects` | `libjvm.dylib` |
|     new |    +2 |   0.0% → 7.4% |   0 → 2 | `G1ParScanThreadStateSet::state_for_worker`    | `libjvm.dylib` |
| removed |    -1 |   6.3% → 0.0% |   1 → 0 | `G1RemSet::scan_collection_set_code_roots`     | `libjvm.dylib` |

##### `rowToArray$1(Map)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |            % | Samples | Callee                      | Location                  |
| -----: | ----: | -----------: | ------: | --------------------------- | ------------------------- |
|    new |    +3 | 0.0% → 50.0% |   0 → 3 | `<clinit>()`                | `scala.Predef$`           |
|    new |    +1 | 0.0% → 16.7% |   0 → 1 | `loadClass(String)`         | `java.lang.ClassLoader`   |
|    new |    +1 | 0.0% → 16.7% |   0 → 1 | `until$extension(int, int)` | `scala.runtime.RichInt$`  |
|    new |    +1 | 0.0% → 16.7% |   0 → 1 | `apply(Class)`              | `scala.reflect.ClassTag$` |

##### `setUpBeforeAll$$anonfun$1(Map)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |             % | Samples | Callee              | Location                                  |
| -----: | ----: | ------------: | ------: | ------------------- | ----------------------------------------- |
|    new |    +6 | 0.0% → 100.0% |   0 → 6 | `rowToArray$1(Map)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x0000007801126908`)

| Change | Delta |             % | Samples | Callee                           | Location                                  |
| -----: | ----: | ------------: | ------: | -------------------------------- | ----------------------------------------- |
|    new |    +6 | 0.0% → 100.0% |   0 → 6 | `setUpBeforeAll$$anonfun$1(Map)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `lambda$toCsvRows$2(String[], Function, String)` (`org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`)

| Change | Delta |             % | Samples | Callee          | Location                                                             |
| -----: | ----: | ------------: | ------: | --------------- | -------------------------------------------------------------------- |
|    new |    +6 | 0.0% → 100.0% |   0 → 6 | `apply(Object)` | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x0000007801126908` |

##### `apply(Object)` (`org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter$$Lambda.0x0000007801123bf8`)

| Change | Delta |             % | Samples | Callee                                           | Location                                                           |
| -----: | ----: | ------------: | ------: | ------------------------------------------------ | ------------------------------------------------------------------ |
|    new |    +6 | 0.0% → 100.0% |   0 → 6 | `lambda$toCsvRows$2(String[], Function, String)` | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter` |

##### `toCsvRows(Function)` (`org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`)

| Change | Delta |             % | Samples | Callee               | Location                             |
| -----: | ----: | ------------: | ------: | -------------------- | ------------------------------------ |
|    new |    +6 | 0.0% → 100.0% |   0 → 6 | `collect(Collector)` | `java.util.stream.ReferencePipeline` |

##### `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |              % | Samples | Callee                        | Location                                                           |
| -----: | ----: | -------------: | ------: | ----------------------------- | ------------------------------------------------------------------ |
|    new |    +6 |   0.0% → 40.0% |   0 → 6 | `toCsvRows(Function)`         | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter` |
| -10.0% |    -1 | 100.0% → 60.0% |  10 → 9 | `generateData(int, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                        |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

| Change | Delta |             % | Samples | Callee                                                      | Location                        |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------- | ------------------------------- |
|  +2.2% |    +1 | 97.9% → 95.9% | 46 → 47 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher` |
|    new |    +1 |   0.0% → 2.0% |   0 → 1 | `createScratchRoot(Path, boolean)`                          | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.core.Launcher`)

| Change | Delta |      % | Samples | Callee                                 | Location                        |
| -----: | ----: | -----: | ------: | -------------------------------------- | ------------------------------- |
|  +4.3% |    +2 | 100.0% | 47 → 49 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change | Delta |              % | Samples | Callee                     | Location                                               |
| ------: | ----: | -------------: | ------: | -------------------------- | ------------------------------------------------------ |
| +100.0% |    +1 | 100.0% → 66.7% |   1 → 2 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`)

| Change | Delta |             % | Samples | Callee                            | Location              |
| -----: | ----: | ------------: | ------: | --------------------------------- | --------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `walkFileTree(Path, FileVisitor)` | `java.nio.file.Files` |

##### `deleteRecursively(Path)` (`org.renaissance.core.DirUtils`)

| Change | Delta |             % | Samples | Callee                             | Location                        |
| -----: | ----: | ------------: | ------: | ---------------------------------- | ------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `deleteRecursively(Path, boolean)` | `org.renaissance.core.DirUtils` |

##### `lambda$createScratchDirectory$1(Path)` (`org.renaissance.core.DirUtils`)

| Change | Delta |             % | Samples | Callee                    | Location                        |
| -----: | ----: | ------------: | ------: | ------------------------- | ------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `deleteRecursively(Path)` | `org.renaissance.core.DirUtils` |

##### `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007801003a68`)

| Change | Delta |             % | Samples | Callee                                  | Location                        |
| -----: | ----: | ------------: | ------: | --------------------------------------- | ------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `lambda$createScratchDirectory$1(Path)` | `org.renaissance.core.DirUtils` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |             % | Samples | Callee               | Location    |
| ------: | ----: | ------------: | ------: | -------------------- | ----------- |
| +200.0% |    +2 | 33.3% → 75.0% |   1 → 3 | `_new_instance_Java` | `<unknown>` |

##### `JVM_IHashCode` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Callee                         | Location                  |
| ------: | ----: | -----: | ------: | ------------------------------ | ------------------------- |
| +160.0% |    +8 | 100.0% |  5 → 13 | `pthread_jit_write_protect_np` | `libsystem_pthread.dylib` |

##### `G1ParEvacuateFollowersClosure::offer_termination` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Callee                              | Location       |
| ------: | ----: | -----: | ------: | ----------------------------------- | -------------- |
| +160.0% |    +8 | 100.0% |  5 → 13 | `TaskTerminator::offer_termination` | `libjvm.dylib` |

##### `Java_java_util_zip_Inflater_inflateBytesBytes` (`libzip.dylib`)

| Change | Delta |             % | Samples | Callee                          | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------- | -------------- |
| +75.0% |    +3 | 57.1% → 53.8% |   4 → 7 | `inflate_fast`                  | `libzip.dylib` |
|    new |    +2 |  0.0% → 15.4% |   0 → 2 | `jni_GetPrimitiveArrayCritical` | `libjvm.dylib` |
| +33.3% |    +1 | 42.9% → 30.8% |   3 → 4 | `inflate`                       | `libzip.dylib` |

##### `hashCode()` (`java.lang.Object`)

|  Change | Delta |             % | Samples | Callee                             | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------- | -------------- |
| +160.0% |    +8 | 83.3% → 92.9% |  5 → 13 | `JVM_IHashCode`                    | `libjvm.dylib` |
|     new |    +1 |   0.0% → 7.1% |   0 → 1 | `ObjectSynchronizer::FastHashCode` | `libjvm.dylib` |

##### `hash(Object)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Callee       | Location           |
| ------: | ----: | ------------: | ------: | ------------ | ------------------ |
| +133.3% |    +8 | 18.2% → 35.0% |  6 → 14 | `hashCode()` | `java.lang.Object` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Callee                                       | Location            |
| ------: | ----: | ------------: | ------: | -------------------------------------------- | ------------------- |
|     new |    +3 |  0.0% → 37.5% |   0 → 3 | `resize()`                                   | `java.util.HashMap` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap` |

##### `putMapEntries(Map, boolean)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Callee                                          | Location                     |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | ---------------------------- |
| +600.0% |    +6 | 10.0% → 43.8% |   1 → 7 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap`          |
|     new |    +2 |  0.0% → 12.5% |   0 → 2 | `entrySet()`                                    | `java.util.HashMap`          |
| removed |    -1 |  10.0% → 0.0% |   1 → 0 | `resolve_virtual_call`                          | `<unknown>`                  |
|     new |    +1 |   0.0% → 6.3% |   0 → 1 | `iterator()`                                    | `java.util.HashMap$EntrySet` |

##### `<init>(Map)` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Callee                        | Location            |
| -----: | ----: | -----: | ------: | ----------------------------- | ------------------- |
| +60.0% |    +6 | 100.0% | 10 → 16 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`)

| Change | Delta |      % | Samples | Callee                                          | Location       |
| -----: | ----: | -----: | ------: | ----------------------------------------------- | -------------- |
| +85.7% |    +6 | 100.0% |  7 → 13 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `inflate(byte[], int, int)` (`java.util.zip.Inflater`)

| Change | Delta |      % | Samples | Callee                                                        | Location                 |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------- | ------------------------ |
| +85.7% |    +6 | 100.0% |  7 → 13 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater` |

##### `run()` (`java.net.URLClassLoader$1`)

| Change | Delta |             % | Samples | Callee                          | Location                           |
| -----: | ----: | ------------: | ------: | ------------------------------- | ---------------------------------- |
| +40.0% |    +6 |        100.0% | 15 → 21 | `run()`                         | `java.net.URLClassLoader$1`        |
| +41.7% |    +5 | 80.0% → 81.0% | 12 → 17 | `defineClass(String, Resource)` | `java.net.URLClassLoader`          |
| +33.3% |    +1 | 20.0% → 19.0% |   3 → 4 | `getResource(String, boolean)`  | `jdk.internal.loader.URLClassPath` |

##### `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`)

| Change | Delta |      % | Samples | Callee  | Location                    |
| -----: | ----: | -----: | ------: | ------- | --------------------------- |
| +40.0% |    +6 | 100.0% | 15 → 21 | `run()` | `java.net.URLClassLoader$1` |

##### `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` (`java.security.AccessController`)

|  Change | Delta |           % | Samples | Callee                                                                      | Location                         |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------------------------- | -------------------------------- |
|  +40.0% |    +6 |      100.0% | 15 → 21 | `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` | `java.security.AccessController` |
| removed |    -1 | 6.7% → 0.0% |   1 → 0 | `checkContext(AccessControlContext, Class)`                                 | `java.security.AccessController` |

##### `findClass(String)` (`java.net.URLClassLoader`)

| Change | Delta |      % | Samples | Callee                                                          | Location                         |
| -----: | ----: | -----: | ------: | --------------------------------------------------------------- | -------------------------------- |
| +40.0% |    +6 | 100.0% | 15 → 21 | `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` | `java.security.AccessController` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|  Change | Delta |             % | Samples | Callee                       | Location                                          |
| ------: | ----: | ------------: | ------: | ---------------------------- | ------------------------------------------------- |
|  +40.0% |    +6 | 93.8% → 95.5% | 15 → 21 | `findClass(String)`          | `java.net.URLClassLoader`                         |
| +100.0% |    +1 |   6.3% → 9.1% |   1 → 2 | `loadClass(String, boolean)` | `jdk.internal.loader.ClassLoaders$AppClassLoader` |

##### `loadClass(String)` (`java.lang.ClassLoader`)

| Change | Delta |      % | Samples | Callee                       | Location                |
| -----: | ----: | -----: | ------: | ---------------------------- | ----------------------- |
| +37.5% |    +6 | 100.0% | 16 → 22 | `loadClass(String, boolean)` | `java.lang.ClassLoader` |

##### `accept(Object)` (`java.util.stream.ReferencePipeline$3$1`)

| Change | Delta |             % | Samples | Callee          | Location                                                                                      |
| -----: | ----: | ------------: | ------: | --------------- | --------------------------------------------------------------------------------------------- |
|    new |    +6 | 0.0% → 100.0% |   0 → 6 | `apply(Object)` | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter$$Lambda.0x0000007801123bf8` |

##### `forEachRemaining(Consumer)` (`java.util.Spliterators$ArraySpliterator`)

| Change | Delta |             % | Samples | Callee           | Location                                 |
| -----: | ----: | ------------: | ------: | ---------------- | ---------------------------------------- |
|    new |    +6 | 0.0% → 100.0% |   0 → 6 | `accept(Object)` | `java.util.stream.ReferencePipeline$3$1` |

##### `signalWork()` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % | Samples | Callee           | Location                                 |
| -----: | ----: | -----: | ------: | ---------------- | ---------------------------------------- |
| +55.6% |    +5 | 100.0% |  9 → 14 | `unpark(Thread)` | `java.util.concurrent.locks.LockSupport` |

##### `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`)

| Change | Delta |             % | Samples | Callee                      | Location                                           |
| -----: | ----: | ------------: | ------: | --------------------------- | -------------------------------------------------- |
| +85.7% |    +6 | 77.8% → 92.9% |  7 → 13 | `inflate(byte[], int, int)` | `java.util.zip.Inflater`                           |
| -50.0% |    -1 |  22.2% → 7.1% |   2 → 1 | `fill()`                    | `java.util.zip.ZipFile$ZipFileInflaterInputStream` |

##### `defineClass(String, Resource)` (`java.net.URLClassLoader`)

|  Change | Delta |             % | Samples | Callee                                       | Location                                       |
| ------: | ----: | ------------: | ------: | -------------------------------------------- | ---------------------------------------------- |
| +250.0% |    +5 | 16.7% → 41.2% |   2 → 7 | `getBytes()`                                 | `jdk.internal.loader.URLClassPath$JarLoader$2` |
| removed |    -1 |   8.3% → 0.0% |   1 → 0 | `getAndVerifyPackage(String, Manifest, URL)` | `java.net.URLClassLoader`                      |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                               | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
| +200.0% |   +10 | 26.3% → 51.7% |  5 → 15 | `PhaseChaitin::Register_Allocate`    | `libjvm.dylib` |
|  +66.7% |    +2 | 15.8% → 17.2% |   3 → 5 | `Matcher::match`                     | `libjvm.dylib` |
|  -20.0% |    -1 | 26.3% → 13.8% |   5 → 4 | `PhaseOutput::Output`                | `libjvm.dylib` |
| removed |    -1 |   5.3% → 0.0% |   1 → 0 | `PhaseBlockLayout::PhaseBlockLayout` | `libjvm.dylib` |
|  +25.0% |    +1 | 21.1% → 17.2% |   4 → 5 | `PhaseCFG::do_global_code_motion`    | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                     | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | -------------- |
|     new |    +2 |  0.0% → 13.3% |   0 → 2 | `PhaseChaitin::build_ifg_physical`         | `libjvm.dylib` |
| +100.0% |    +1 | 20.0% → 13.3% |   1 → 2 | `PhaseAggressiveCoalesce::insert_copies`   | `libjvm.dylib` |
|  -50.0% |    -1 |  40.0% → 6.7% |   2 → 1 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |
| +100.0% |    +1 | 20.0% → 13.3% |   1 → 2 | `PhaseChaitin::Split`                      | `libjvm.dylib` |
|     new |    +1 |   0.0% → 6.7% |   0 → 1 | `PhaseChaitin::Select`                     | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                   | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | -------------- |
|  +52.6% |   +10 | 39.6% → 52.7% | 19 → 29 | `Compile::Code_Gen`                      | `libjvm.dylib` |
|  -50.0% |    -6 | 25.0% → 10.9% |  12 → 6 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  +18.8% |    +3 | 33.3% → 34.5% | 16 → 19 | `Compile::Optimize`                      | `libjvm.dylib` |
| removed |    -1 |   2.1% → 0.0% |   1 → 0 | `Compile::return_values`                 | `libjvm.dylib` |
|     new |    +1 |   0.0% → 1.8% |   0 → 1 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                              | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------------- | -------------- |
|  +12.2% |    +6 | 70.0% → 71.4% | 49 → 55 | `C2Compiler::compile_method`        | `libjvm.dylib` |
|  +11.1% |    +2 | 25.7% → 26.0% | 18 → 20 | `Compiler::compile_method`          | `libjvm.dylib` |
| removed |    -1 |   1.4% → 0.0% |   1 → 0 | `ciEnv::~ciEnv`                     | `libjvm.dylib` |
| removed |    -1 |   1.4% → 0.0% |   1 → 0 | `ciEnv::get_method_from_handle`     | `libjvm.dylib` |
| removed |    -1 |   1.4% → 0.0% |   1 → 0 | `CompileBroker::collect_statistics` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                   | Location       |
| ------: | ----: | -------------: | ------: | ------------------------ | -------------- |
|  +14.6% |    +7 | 98.0% → 100.0% | 48 → 55 | `Compile::Compile`       | `libjvm.dylib` |
| removed |    -1 |    2.0% → 0.0% |   1 → 0 | `StartNode::bottom_type` | `libjvm.dylib` |

##### `GraphBuilder::GraphBuilder` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                               | Location       |
| ------: | ----: | -------------: | ------: | ------------------------------------ | -------------- |
| +100.0% |    +4 | 100.0% → 88.9% |   4 → 8 | `GraphBuilder::iterate_all_blocks`   | `libjvm.dylib` |
|     new |    +1 |   0.0% → 11.1% |   0 → 1 | `BlockListBuilder::BlockListBuilder` | `libjvm.dylib` |

##### `CompileBroker::compile_method` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                                         | Location       |
| ------: | ----: | -------------: | ------: | ---------------------------------------------- | -------------- |
| +100.0% |    +3 | 100.0% → 85.7% |   3 → 6 | `CompileBroker::compile_method`                | `libjvm.dylib` |
|  +66.7% |    +2 | 100.0% → 71.4% |   3 → 5 | `CompileBroker::compile_method_base`           | `libjvm.dylib` |
|     new |    +1 |   0.0% → 14.3% |   0 → 1 | `AdapterHandlerLibrary::create_native_wrapper` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 14.3% |   0 → 1 | `DirectivesStack::getMatchingDirective`        | `libjvm.dylib` |

##### `CompilationPolicy::event` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                        | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------------- | -------------- |
| +150.0% |    +3 | 33.3% → 50.0% |   2 → 5 | `CompileBroker::compile_method`               | `libjvm.dylib` |
| +100.0% |    +1 | 16.7% → 20.0% |   1 → 2 | `CompilationPolicy::method_back_branch_event` | `libjvm.dylib` |

##### `Compilation::build_hir` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                       | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------------------- | -------------- |
| +125.0% |    +5 | 66.7% → 90.0% |   4 → 9 | `IR::IR`                                     | `libjvm.dylib` |
| removed |    -1 |  16.7% → 0.0% |   1 → 0 | `IR::compute_use_counts`                     | `libjvm.dylib` |
| removed |    -1 |  16.7% → 0.0% |   1 → 0 | `GlobalValueNumbering::GlobalValueNumbering` | `libjvm.dylib` |
|     new |    +1 |  0.0% → 10.0% |   0 → 1 | `Optimizer::Optimizer`                       | `libjvm.dylib` |

##### `GraphBuilder::iterate_bytecodes_for_block` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                      | Location       |
| ------: | ----: | -----------: | ------: | --------------------------- | -------------- |
| +100.0% |    +3 |        75.0% |   3 → 6 | `GraphBuilder::invoke`      | `libjvm.dylib` |
|     new |    +1 | 0.0% → 12.5% |   0 → 1 | `ObjectType::as_ObjectType` | `libjvm.dylib` |

##### `GraphBuilder::iterate_all_blocks` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Callee                                      | Location       |
| ------: | ----: | -----: | ------: | ------------------------------------------- | -------------- |
| +100.0% |    +4 | 100.0% |   4 → 8 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib` |

##### `Type::hashcons` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee             | Location       |
| -----: | ----: | -----------: | ------: | ------------------ | -------------- |
|    new |    +2 | 0.0% → 50.0% |   0 → 2 | `Dict::Insert`     | `libjvm.dylib` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `TypeTuple::xdual` | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                  | Location       |
| -----: | ----: | -----------: | ------: | ----------------------- | -------------- |
|    new |    +1 | 0.0% → 16.7% |   0 → 1 | `RegionNode::Identity`  | `libjvm.dylib` |
|    new |    +1 | 0.0% → 16.7% |   0 → 1 | `AddINode::Ideal`       | `libjvm.dylib` |
|    new |    +1 | 0.0% → 16.7% |   0 → 1 | `TypeOopPtr::singleton` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                    | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------------------- | -------------- |
| removed |    -3 |  18.8% → 0.0% |   3 → 0 | `PhaseCCP::PhaseCCP`                      | `libjvm.dylib` |
| +200.0% |    +2 |  6.3% → 15.8% |   1 → 3 | `PhaseMacroExpand::expand_macro_nodes`    | `libjvm.dylib` |
|  +33.3% |    +2 | 37.5% → 42.1% |   6 → 8 | `PhaseIdealLoop::optimize`                | `libjvm.dylib` |
|     new |    +2 |  0.0% → 10.5% |   0 → 2 | `ConnectionGraph::do_analysis`            | `libjvm.dylib` |
|     new |    +2 |  0.0% → 10.5% |   0 → 2 | `PhaseMacroExpand::eliminate_macro_nodes` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                     | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | -------------- |
|  +10.0% |    +7 | 77.8% → 82.8% | 70 → 77 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
|  -15.8% |    -3 | 21.1% → 17.2% | 19 → 16 | `CompileQueue::get`                        | `libjvm.dylib` |
| removed |    -1 |   1.1% → 0.0% |   1 → 0 | `C2Compiler::name`                         | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                         | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------ | -------------- |
|  +66.7% |    +4 | 37.5% → 52.6% |  6 → 10 | `Compilation::build_hir`       | `libjvm.dylib` |
|  -14.3% |    -1 | 43.8% → 31.6% |   7 → 6 | `Compilation::emit_lir`        | `libjvm.dylib` |
| removed |    -1 |   6.3% → 0.0% |   1 → 0 | `FrameMap::FrameMap`           | `libjvm.dylib` |
|     new |    +1 |   0.0% → 5.3% |   0 → 1 | `ciMethod::ensure_method_data` | `libjvm.dylib` |

##### `GraphBuilder::invoke` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                          | Location        |
| ------: | ----: | ------------: | ------: | ------------------------------- | --------------- |
| +150.0% |    +3 | 66.7% → 83.3% |   2 → 5 | `GraphBuilder::try_inline`      | `libjvm.dylib`  |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `tlv_get_addr`                  | `libdyld.dylib` |
|     new |    +1 |  0.0% → 16.7% |   0 → 1 | `GraphBuilder::append_with_bci` | `libjvm.dylib`  |

##### `GraphBuilder::try_inline` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                                | Location        |
| ------: | ----: | -------------: | ------: | ------------------------------------- | --------------- |
| +100.0% |    +2 | 100.0% → 80.0% |   2 → 4 | `GraphBuilder::try_inline_full`       | `libjvm.dylib`  |
| removed |    -1 |   50.0% → 0.0% |   1 → 0 | `tlv_get_addr`                        | `libdyld.dylib` |
|     new |    +1 |   0.0% → 20.0% |   0 → 1 | `GraphBuilder::try_inline_intrinsics` | `libjvm.dylib`  |

##### `CompileBroker::compile_method_base` (`libjvm.dylib`)

| Change | Delta |              % | Samples | Callee                                | Location                  |
| -----: | ----: | -------------: | ------: | ------------------------------------- | ------------------------- |
| +33.3% |    +1 | 100.0% → 80.0% |   3 → 4 | `Mutex::lock`                         | `libjvm.dylib`            |
|    new |    +1 |   0.0% → 20.0% |   0 → 1 | `_pthread_mutex_firstfit_unlock_slow` | `libsystem_pthread.dylib` |

##### `PhaseMacroExpand::expand_macro_nodes` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                                     | Location       |
| -----: | ----: | -----------: | ------: | ------------------------------------------ | -------------- |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `PhaseMacroExpand::expand_allocate_common` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `OptoRuntime::stub_name`                   | `libjvm.dylib` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |             % |       Samples | Callee                                   | Location                            |
| -----: | ----: | ------------: | ------------: | ---------------------------------------- | ----------------------------------- |
| -10.4% |  -450 | 84.2% → 90.1% | 4,333 → 3,883 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |
| -48.3% |  -389 |  15.6% → 9.7% |     805 → 416 | `awaitWork(ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

| Change | Delta |      % |       Samples | Callee                              | Location                            |
| -----: | ----: | -----: | ------------: | ----------------------------------- | ----------------------------------- |
| -16.3% |  -837 | 100.0% | 5,146 → 4,309 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `Parker::park` (`libjvm.dylib`)

| Change | Delta |             % |     Samples | Callee                        | Location                  |
| -----: | ----: | ------------: | ----------: | ----------------------------- | ------------------------- |
| -39.3% |  -543 | 99.4% → 98.8% | 1,383 → 840 | `__psynch_cvwait`             | `libsystem_kernel.dylib`  |
|    new |    +2 |   0.0% → 0.2% |       0 → 2 | `SafepointMechanism::process` | `libjvm.dylib`            |
|    new |    +2 |   0.0% → 0.2% |       0 → 2 | `__gettimeofday`              | `libsystem_kernel.dylib`  |
| -33.3% |    -1 |          0.2% |       3 → 2 | `_pthread_cond_wait`          | `libsystem_pthread.dylib` |

##### `LockTracer::UnsafeParkHook` (`libasyncProfiler.dylib`)

|  Change | Delta |             % |     Samples | Callee                   | Location       |
| ------: | ----: | ------------: | ----------: | ------------------------ | -------------- |
|  -38.4% |  -535 | 97.8% → 97.1% | 1,395 → 860 | `Unsafe_Park`            | `libjvm.dylib` |
|  -50.0% |    -4 |   0.6% → 0.5% |       8 → 4 | `jvmti_GetCurrentThread` | `libjvm.dylib` |
| removed |    -3 |   0.2% → 0.0% |       3 → 0 | `jni_GetObjectClass`     | `libjvm.dylib` |
| +100.0% |    +2 |   0.1% → 0.5% |       2 → 4 | `jvmti_Deallocate`       | `libjvm.dylib` |
| removed |    -2 |   0.1% → 0.0% |       2 → 0 | `JNIHandles::make_local` | `libjvm.dylib` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|  Change | Delta |             % |     Samples | Callee                                                 | Location                 |
| ------: | ----: | ------------: | ----------: | ------------------------------------------------------ | ------------------------ |
|  -37.9% |  -540 | 99.7% → 99.6% | 1,426 → 886 | `LockTracer::UnsafeParkHook`                           | `libasyncProfiler.dylib` |
| removed |    -1 |   0.1% → 0.0% |       1 → 0 | `jni_GetObjectClass`                                   | `libjvm.dylib`           |
| removed |    -1 |   0.1% → 0.0% |       1 → 0 | `jni_GetObjectField`                                   | `libjvm.dylib`           |
| removed |    -1 |   0.1% → 0.0% |       1 → 0 | `jvmti_GetCurrentThread`                               | `libjvm.dylib`           |
|     new |    +1 |   0.0% → 0.1% |       0 → 1 | `JavaThread::check_special_condition_for_native_trans` | `libjvm.dylib`           |

##### `Unsafe_Park` (`libjvm.dylib`)

| Change | Delta |             % |     Samples | Callee                                                                                                                                                     | Location                  |
| -----: | ----: | ------------: | ----------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| -38.8% |  -540 | 99.6% → 98.8% | 1,390 → 850 | `Parker::park`                                                                                                                                             | `libjvm.dylib`            |
| +50.0% |    +2 |   0.3% → 0.7% |       4 → 6 | `pthread_jit_write_protect_np`                                                                                                                             | `libsystem_pthread.dylib` |
|    new |    +2 |   0.0% → 0.2% |       0 → 2 | `AccessInternal::PostRuntimeDispatch<G1BarrierSet::AccessBarrier<286822ull, G1BarrierSet>, (AccessInternal::BarrierType)3, 286822ull>::oop_access_barrier` | `libjvm.dylib`            |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

| Change | Delta |              % |     Samples | Callee                | Location                   |
| -----: | ----: | -------------: | ----------: | --------------------- | -------------------------- |
| -37.7% |  -523 | 100.0% → 99.9% | 1,386 → 863 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |             % |       Samples | Callee         | Location                                            |
| ------: | ----: | ------------: | ------------: | -------------- | --------------------------------------------------- |
|  -10.7% |  -457 |         99.2% | 4,290 → 3,833 | `exec()`       | `java.util.concurrent.RecursiveTask`                |
|  -16.4% |   -90 | 12.7% → 11.9% |     550 → 460 | `exec()`       | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|   -3.6% |    -2 |   1.3% → 1.4% |       55 → 53 | `setDone()`    | `java.util.concurrent.ForkJoinTask`                 |
| removed |    -1 |  <0.1% → 0.0% |         1 → 0 | `ic_miss_stub` | `<unknown>`                                         |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |              % |       Samples | Callee      | Location                                      |
| -----: | ----: | -------------: | ------------: | ----------- | --------------------------------------------- |
| -10.6% |  -460 | 100.0% → 99.9% | 4,323 → 3,863 | `doExec()`  | `java.util.concurrent.ForkJoinTask`           |
|    new |    +2 |    0.0% → 0.1% |         0 → 2 | `tryPoll()` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change | Delta |             % |       Samples | Callee                           | Location                                                   |
| -----: | ----: | ------------: | ------------: | -------------------------------- | ---------------------------------------------------------- |
| -10.4% |  -428 | 95.9% → 96.2% | 4,116 → 3,688 | `join()`                         | `java.util.concurrent.ForkJoinTask`                        |
| -13.0% |  -234 | 41.8% → 40.7% | 1,795 → 1,561 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -18.9% |   -86 |  10.6% → 9.6% |     454 → 368 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -3.1% |   -21 | 15.9% → 17.2% |     682 → 661 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  +1.1% |   +14 | 30.3% → 34.3% | 1,302 → 1,316 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change | Delta |      % |       Samples | Callee      | Location                                               |
| -----: | ----: | -----: | ------------: | ----------- | ------------------------------------------------------ |
| -10.7% |  -457 | 100.0% | 4,290 → 3,833 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % |       Samples | Callee                                               | Location                                      |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------- | --------------------------------------------- |
|  -10.6% |  -458 | 99.8% → 99.5% | 4,323 → 3,865 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  +50.0% |    +3 |   0.1% → 0.2% |         6 → 9 | `signalWork()`                                       | `java.util.concurrent.ForkJoinPool`           |
| removed |    -1 |  <0.1% → 0.0% |         1 → 0 | `casSlotToNull(ForkJoinTask[], int, ForkJoinTask)`   | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|     new |    +1 |  0.0% → <0.1% |         0 → 1 | `I2C/C2I adapters(0xbbb)`                            | `<unknown>`                                   |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |            % |       Samples | Callee                 | Location                            |
| ------: | ----: | -----------: | ------------: | ---------------------- | ----------------------------------- |
|  -10.4% |  -426 |       100.0% | 4,114 → 3,688 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |
| removed |    -2 | <0.1% → 0.0% |         2 → 0 | `vtable stub`          | `<unknown>`                         |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |             % |       Samples | Callee                                                    | Location                                      |
| ------: | ----: | ------------: | ------------: | --------------------------------------------------------- | --------------------------------------------- |
|   -9.9% |  -381 | 93.6% → 94.1% | 3,851 → 3,470 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  -24.1% |  -152 | 15.3% → 13.0% |     631 → 479 | `park()`                                                  | `java.util.concurrent.locks.LockSupport`      |
|   -5.4% |   -55 | 24.9% → 26.2% |   1,023 → 968 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
|     new |    +2 |   0.0% → 0.1% |         0 → 2 | `uncompensate()`                                          | `java.util.concurrent.ForkJoinPool`           |
| removed |    -1 |  <0.1% → 0.0% |         1 → 0 | `wrong_method_stub`                                       | `<unknown>`                                   |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % |   Samples | Callee                     | Location                                 |
| ------: | ----: | ------------: | --------: | -------------------------- | ---------------------------------------- |
|  -49.0% |  -370 | 93.8% → 92.5% | 755 → 385 | `park()`                   | `java.util.concurrent.locks.LockSupport` |
|  -40.0% |   -18 |   5.6% → 6.5% |   45 → 27 | `parkUntil(long)`          | `java.util.concurrent.locks.LockSupport` |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `hasTasks(boolean)`        | `java.util.concurrent.ForkJoinPool`      |
|     new |    +1 |   0.0% → 0.2% |     0 → 1 | `onSpinWait()`             | `java.lang.Thread`                       |
|     new |    +1 |   0.0% → 0.2% |     0 → 1 | `resolve_opt_virtual_call` | `<unknown>`                              |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |      % |       Samples | Callee     | Location                            |
| -----: | ----: | -----: | ------------: | ---------- | ----------------------------------- |
|  -9.9% |  -382 | 100.0% | 3,851 → 3,469 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % |       Samples | Callee                   | Location                                                   |
| -----: | ----: | ------------: | ------------: | ------------------------ | ---------------------------------------------------------- |
| -13.1% |  -236 |        100.0% | 1,797 → 1,561 | `computeDirectly()`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -17.1% |  -232 | 75.5% → 72.0% | 1,356 → 1,124 | `findNearestCentroid()`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -0.9% |    -4 | 24.5% → 28.0% |     441 → 437 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % |   Samples | Callee                         | Location                                                   |
| ------: | ----: | ------------: | --------: | ------------------------------ | ---------------------------------------------------------- |
|  -12.4% |  -105 | 62.7% → 66.3% | 850 → 745 | `distance(Double[], Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -10.3% |    -6 |   4.3% → 4.6% |   58 → 52 | `get(int)`                     | `java.util.ArrayList`                                      |
|  -38.5% |    -5 |   1.0% → 0.7% |    13 → 8 | `_new_array_Java`              | `<unknown>`                                                |
|  -66.7% |    -2 |   0.2% → 0.1% |     3 → 1 | `DeoptimizationBlob`           | `<unknown>`                                                |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `_sigtramp`                    | `libsystem_platform.dylib`                                 |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |           % | Samples | Callee          | Location           |
| ------: | ----: | ----------: | ------: | --------------- | ------------------ |
| +400.0% |    +4 | 0.1% → 0.7% |   1 → 5 | `SafepointBlob` | `<unknown>`        |
|   +5.6% |    +1 | 2.1% → 2.6% | 18 → 19 | `doubleValue()` | `java.lang.Double` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % |   Samples | Callee                              | Location            |
| -----: | ----: | -----: | --------: | ----------------------------------- | ------------------- |
| -20.8% |   -92 | 100.0% | 442 → 350 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a3b90`)

| Change | Delta |      % |   Samples | Callee                              | Location                                    |
| -----: | ----: | -----: | --------: | ----------------------------------- | ------------------------------------------- |
| -20.8% |   -92 | 100.0% | 442 → 350 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a2bd0`)

|  Change | Delta |              % |   Samples | Callee                         | Location                                    |
| ------: | ----: | -------------: | --------: | ------------------------------ | ------------------------------------------- |
|  -16.2% |   -89 | 99.8% → 100.0% | 549 → 460 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |
| removed |    -1 |    0.2% → 0.0% |     1 → 0 | `I2C/C2I adapters(0xbb)`       | `<unknown>`                                 |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |             % |   Samples | Callee                            | Location                                                   |
| ------: | ----: | ------------: | --------: | --------------------------------- | ---------------------------------------------------------- |
|  -16.1% |   -88 | 99.5% → 99.6% | 546 → 458 | `invoke()`                        | `java.util.concurrent.ForkJoinTask`                        |
| removed |    -1 |   0.2% → 0.0% |     1 → 0 | `randomSample(int, List, Random)` | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |    -1 |   0.2% → 0.0% |     1 → 0 | `keySet()`                        | `java.util.HashMap`                                        |
|     new |    +1 |   0.0% → 0.2% |     0 → 1 | `<init>(JavaKMeans, List, List)`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Callee            | Location                                    |
| -----: | ----: | -----: | --------: | ----------------- | ------------------------------------------- |
| -19.2% |   -87 | 100.0% | 454 → 367 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |             % |   Samples | Callee                               | Location                           |
| -----: | ----: | ------------: | --------: | ------------------------------------ | ---------------------------------- |
| -21.3% |   -95 | 97.8% → 94.9% | 445 → 350 | `forEach(BiConsumer)`                | `java.util.HashMap`                |
| +60.0% |    +6 |   2.2% → 4.3% |   10 → 16 | `<init>(Map)`                        | `java.util.HashMap`                |
|    new |    +2 |   0.0% → 0.5% |     0 → 2 | `linkToTargetMethod(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |              % |   Samples | Callee                     | Location                                                   |
| -----: | ----: | -------------: | --------: | -------------------------- | ---------------------------------------------------------- |
| -19.2% |   -87 | 100.0% → 99.7% | 454 → 367 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |     % |   Samples | Callee               | Location              |
| -----: | ----: | ----: | --------: | -------------------- | --------------------- |
| -24.2% |   -58 | 69.2% | 240 → 182 | `addAll(Collection)` | `java.util.ArrayList` |
| -24.3% |   -26 | 30.8% |  107 → 81 | `<init>(Collection)` | `java.util.ArrayList` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a7000`)

| Change | Delta |      % |   Samples | Callee                       | Location                                    |
| -----: | ----: | -----: | --------: | ---------------------------- | ------------------------------------------- |
| -24.2% |   -84 | 100.0% | 347 → 263 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change | Delta |            % | Samples | Callee                                                                                       | Location                                  |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
| removed |   -16 | 69.6% → 0.0% |  16 → 0 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
| removed |    -7 | 30.4% → 0.0% |   7 → 0 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |             % |   Samples | Callee            | Location                                               |
| -----: | ----: | ------------: | --------: | ----------------- | ------------------------------------------------------ |
|  -2.7% |   -18 | 98.7% → 99.1% | 673 → 655 | `average(List)`   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| -57.1% |    -4 |   1.0% → 0.5% |     7 → 3 | `boxed(double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % |   Samples | Callee                     | Location                                               |
| -----: | ----: | -----: | --------: | -------------------------- | ------------------------------------------------------ |
|  -3.1% |   -21 | 100.0% | 682 → 661 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  -3.1% |   -21 | 100.0% | 682 → 661 | `computeDirectly()`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % |   Samples | Callee     | Location                            |
| -----: | ----: | -----: | --------: | ---------- | ----------------------------------- |
|  -2.7% |   -18 | 100.0% | 673 → 655 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change | Delta |            % | Samples | Callee              | Location                           |
| ------: | ----: | -----------: | ------: | ------------------- | ---------------------------------- |
| removed |    -4 | 66.7% → 0.0% |   4 → 0 | `<clinit>()`        | `scala.Predef$`                    |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `loadClass(String)` | `java.lang.ClassLoader`            |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `map(Function1)`    | `scala.collection.immutable.Range` |

##### `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`)

|  Change | Delta |             % | Samples | Callee                  | Location                                                             |
| ------: | ----: | ------------: | ------: | ----------------------- | -------------------------------------------------------------------- |
| removed |    -6 | 100.0% → 0.0% |   6 → 0 | `run(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans`                            |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `validate()`            | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000078011a7770` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % |   Samples | Callee                              | Location              |
| ------: | ----: | ------------: | --------: | ----------------------------------- | --------------------- |
|  +13.8% |   +21 | 34.5% → 39.6% | 152 → 173 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`   |
|  -12.1% |   -17 | 31.7% → 28.1% | 140 → 123 | `add(Object)`                       | `java.util.ArrayList` |
|  -25.0% |   -14 |  12.7% → 9.6% |   56 → 42 | `get(int)`                          | `java.util.ArrayList` |
| removed |    -2 |   0.5% → 0.0% |     2 → 0 | `_new_instance_Java`                | `<unknown>`           |
| removed |    -2 |   0.5% → 0.0% |     2 → 0 | `SafepointBlob`                     | `<unknown>`           |

##### `_new_array_Java` (`<unknown>`)

|  Change | Delta |             % |   Samples | Callee                                             | Location                  |
| ------: | ----: | ------------: | --------: | -------------------------------------------------- | ------------------------- |
|  -28.2% |   -57 | 97.6% → 99.3% | 202 → 145 | `OptoRuntime::new_array_C`                         | `libjvm.dylib`            |
| removed |    -3 |   1.4% → 0.0% |     3 → 0 | `pthread_jit_write_protect_np`                     | `libsystem_pthread.dylib` |
| removed |    -1 |   0.5% → 0.0% |     1 → 0 | `CardTableBarrierSet::on_slowpath_allocation_exit` | `libjvm.dylib`            |
|     new |    +1 |   0.0% → 0.7% |     0 → 1 | `TypeArrayKlass::allocate_common`                  | `libjvm.dylib`            |

##### `OptoRuntime::new_array_C` (`libjvm.dylib`)

|  Change | Delta |             % |   Samples | Callee                                             | Location                  |
| ------: | ----: | ------------: | --------: | -------------------------------------------------- | ------------------------- |
|  -25.3% |   -46 | 90.1% → 93.8% | 182 → 136 | `InstanceKlass::allocate_objArray`                 | `libjvm.dylib`            |
| removed |    -6 |   3.0% → 0.0% |     6 → 0 | `pthread_jit_write_protect_np`                     | `libsystem_pthread.dylib` |
|  -46.2% |    -6 |   6.4% → 4.8% |    13 → 7 | `CollectedHeap::array_allocate`                    | `libjvm.dylib`            |
|     new |    +1 |   0.0% → 0.7% |     0 → 1 | `InstanceKlass::array_klass`                       | `libjvm.dylib`            |
|     new |    +1 |   0.0% → 0.7% |     0 → 1 | `CardTableBarrierSet::on_slowpath_allocation_exit` | `libjvm.dylib`            |

##### `CollectedHeap::array_allocate` (`libjvm.dylib`)

|  Change | Delta |              % |   Samples | Callee                                        | Location       |
| ------: | ----: | -------------: | --------: | --------------------------------------------- | -------------- |
|  -24.2% |   -46 | 99.0% → 100.0% | 190 → 144 | `MemAllocator::allocate`                      | `libjvm.dylib` |
| removed |    -1 |    0.5% → 0.0% |     1 → 0 | `ObjArrayAllocator::initialize`               | `libjvm.dylib` |
| removed |    -1 |    0.5% → 0.0% |     1 → 0 | `MemAllocator::Allocation::notify_allocation` | `libjvm.dylib` |

##### `InstanceKlass::allocate_objArray` (`libjvm.dylib`)

|  Change | Delta |              % |   Samples | Callee                                 | Location       |
| ------: | ----: | -------------: | --------: | -------------------------------------- | -------------- |
|  -24.0% |   -43 | 98.4% → 100.0% | 179 → 136 | `CollectedHeap::array_allocate`        | `libjvm.dylib` |
| removed |    -2 |    1.1% → 0.0% |     2 → 0 | `Klass::check_array_allocation_length` | `libjvm.dylib` |

##### `MemAllocator::allocate` (`libjvm.dylib`)

|  Change | Delta |             % |   Samples | Callee                                                      | Location                   |
| ------: | ----: | ------------: | --------: | ----------------------------------------------------------- | -------------------------- |
|  -21.0% |   -29 | 70.8% → 72.2% | 138 → 109 | `MemAllocator::Allocation::notify_allocation_jvmti_sampler` | `libjvm.dylib`             |
|  -72.7% |    -8 |   5.6% → 2.0% |    11 → 3 | `MemAllocator::mem_allocate_inside_tlab_slow`               | `libjvm.dylib`             |
| removed |    -3 |   1.5% → 0.0% |     3 → 0 | `ObjArrayAllocator::initialize`                             | `libjvm.dylib`             |
|  -16.7% |    -2 |   6.2% → 6.6% |   12 → 10 | `_platform_memset`                                          | `libsystem_platform.dylib` |
|   -5.0% |    -1 | 10.3% → 12.6% |   20 → 19 | `_platform_bzero`                                           | `libsystem_platform.dylib` |

##### `JvmtiObjectAllocEventCollector::generate_call_for_allocated` (`libjvm.dylib`)

|  Change | Delta |             % |  Samples | Callee                                                 | Location                 |
| ------: | ----: | ------------: | -------: | ------------------------------------------------------ | ------------------------ |
|  -25.2% |   -32 | 96.2% → 96.9% | 127 → 95 | `JvmtiExport::post_sampled_object_alloc`               | `libjvm.dylib`           |
| removed |    -1 |   0.8% → 0.0% |    1 → 0 | `JvmtiObjectAllocEventMark::JvmtiObjectAllocEventMark` | `libjvm.dylib`           |
| removed |    -1 |   0.8% → 0.0% |    1 → 0 | `ObjectSampler::recordAllocation`                      | `libasyncProfiler.dylib` |
|     new |    +1 |   0.0% → 1.0% |    0 → 1 | `OopStorage::Block::block_for_ptr`                     | `libjvm.dylib`           |

##### `JvmtiSampledObjectAllocEventCollector::~JvmtiSampledObjectAllocEventCollector` (`libjvm.dylib`)

| Change | Delta |             % |  Samples | Callee                                                        | Location                 |
| -----: | ----: | ------------: | -------: | ------------------------------------------------------------- | ------------------------ |
| -25.8% |   -34 | 99.2% → 98.0% | 132 → 98 | `JvmtiObjectAllocEventCollector::generate_call_for_allocated` | `libjvm.dylib`           |
|    new |    +1 |   0.0% → 1.0% |    0 → 1 | `nanov2_try_free_default`                                     | `libsystem_malloc.dylib` |

##### `ObjectSampler::recordAllocation` (`libasyncProfiler.dylib`)

|  Change | Delta |             % |  Samples | Callee                    | Location                   |
| ------: | ----: | ------------: | -------: | ------------------------- | -------------------------- |
|  -24.8% |   -27 | 86.5% → 87.2% | 109 → 82 | `Profiler::recordSample`  | `libasyncProfiler.dylib`   |
| removed |    -2 |   1.6% → 0.0% |    2 → 0 | `jvmti_Deallocate`        | `libjvm.dylib`             |
| removed |    -1 |   0.8% → 0.0% |    1 → 0 | `_platform_strncmp`       | `libsystem_platform.dylib` |
|  -50.0% |    -1 |   1.6% → 1.1% |    2 → 1 | `jvmti_GetClassSignature` | `libjvm.dylib`             |

##### `JvmtiExport::post_sampled_object_alloc` (`libjvm.dylib`)

|  Change | Delta |             % |  Samples | Callee                                                 | Location                 |
| ------: | ----: | ------------: | -------: | ------------------------------------------------------ | ------------------------ |
|  -24.8% |   -31 | 98.4% → 98.9% | 125 → 94 | `ObjectSampler::recordAllocation`                      | `libasyncProfiler.dylib` |
| removed |    -1 |   0.8% → 0.0% |    1 → 0 | `JvmtiObjectAllocEventMark::JvmtiObjectAllocEventMark` | `libjvm.dylib`           |
| removed |    -1 |   0.8% → 0.0% |    1 → 0 | `JNIHandleBlock::release_block`                        | `libjvm.dylib`           |
|     new |    +1 |   0.0% → 1.1% |    0 → 1 | `mach_absolute_time`                                   | `libsystem_kernel.dylib` |

##### `JvmtiEnvBase::get_stack_trace` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                                       | Location       |
| -----: | ----: | ------------: | ------: | -------------------------------------------- | -------------- |
| -31.7% |   -26 | 84.5% → 83.6% | 82 → 56 | `JvmtiEnvBase::get_stack_trace`              | `libjvm.dylib` |
| -31.9% |   -22 | 71.1% → 70.1% | 69 → 47 | `vframe::java_sender`                        | `libjvm.dylib` |
| -21.4% |    -3 | 14.4% → 16.4% | 14 → 11 | `JvmtiEnvBase::get_cthread_last_java_vframe` | `libjvm.dylib` |
| -50.0% |    -2 |   4.1% → 3.0% |   4 → 2 | `Method::jmethod_id`                         | `libjvm.dylib` |
|    new |    +2 |   0.0% → 3.0% |   0 → 2 | `InstanceKlass::get_jmethod_id`              | `libjvm.dylib` |

##### `MemAllocator::Allocation::notify_allocation_jvmti_sampler` (`libjvm.dylib`)

| Change | Delta |             % |   Samples | Callee                                                                          | Location        |
| -----: | ----: | ------------: | --------: | ------------------------------------------------------------------------------- | --------------- |
| -24.8% |   -33 | 96.4% → 91.7% | 133 → 100 | `JvmtiSampledObjectAllocEventCollector::~JvmtiSampledObjectAllocEventCollector` | `libjvm.dylib`  |
| +75.0% |    +3 |   2.9% → 6.4% |     4 → 7 | `ThreadHeapSampler::check_for_sampling`                                         | `libjvm.dylib`  |
|    new |    +1 |   0.0% → 0.9% |     0 → 1 | `tlv_get_addr`                                                                  | `libdyld.dylib` |
|    new |    +1 |   0.0% → 0.9% |     0 → 1 | `JvmtiThreadState::state_for`                                                   | `libjvm.dylib`  |

##### `jvmti_GetStackTrace` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                                       | Location       |
| ------: | ----: | -------------: | ------: | -------------------------------------------- | -------------- |
|  -27.3% |   -27 | 98.0% → 100.0% | 99 → 72 | `JvmtiEnv::GetStackTrace`                    | `libjvm.dylib` |
| removed |    -1 |    1.0% → 0.0% |   1 → 0 | `JvmtiEnvBase::get_threadOop_and_JavaThread` | `libjvm.dylib` |
| removed |    -1 |    1.0% → 0.0% |   1 → 0 | `JvmtiEnvBase::get_stack_trace`              | `libjvm.dylib` |

##### `JvmtiEnv::GetStackTrace` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                                     | Location                  |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------- | ------------------------- |
|  -30.2% |   -29 | 97.0% → 93.1% | 96 → 67 | `JvmtiEnvBase::get_stack_trace`                            | `libjvm.dylib`            |
| +100.0% |    +2 |   2.0% → 5.6% |   2 → 4 | `JvmtiVTMSTransitionDisabler::JvmtiVTMSTransitionDisabler` | `libjvm.dylib`            |
| removed |    -1 |   1.0% → 0.0% |   1 → 0 | `pthread_mutex_unlock`                                     | `libsystem_pthread.dylib` |
|     new |    +1 |   0.0% → 1.4% |   0 → 1 | `ThreadsListHandle::ThreadsListHandle`                     | `libjvm.dylib`            |

##### `Profiler::recordSample` (`libasyncProfiler.dylib`)

|  Change | Delta |             % |  Samples | Callee                                 | Location                 |
| ------: | ----: | ------------: | -------: | -------------------------------------- | ------------------------ |
|  -28.7% |   -29 | 92.7% → 87.8% | 101 → 72 | `jvmti_GetStackTrace`                  | `libjvm.dylib`           |
| +300.0% |    +3 |   0.9% → 4.9% |    1 → 4 | `CallTraceStorage::put`                | `libasyncProfiler.dylib` |
|  -28.6% |    -2 |   6.4% → 6.1% |    7 → 5 | `_kernelrpc_mach_port_deallocate_trap` | `libsystem_kernel.dylib` |
|     new |    +1 |   0.0% → 1.2% |    0 → 1 | `FlightRecorder::recordEvent`          | `libasyncProfiler.dylib` |

##### `vframe::java_sender` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                   | Location                   |
| ------: | ----: | ------------: | ------: | ------------------------ | -------------------------- |
|  -38.5% |   -10 | 37.7% → 34.0% | 26 → 16 | `vframe::sender`         | `libjvm.dylib`             |
|  -66.7% |    -6 |  13.0% → 6.4% |   9 → 3 | `_platform_memmove`      | `libsystem_platform.dylib` |
|  -16.1% |    -5 | 44.9% → 55.3% | 31 → 26 | `compiledVFrame::sender` | `libjvm.dylib`             |
| removed |    -1 |   1.4% → 0.0% |   1 → 0 | `vframe::new_vframe`     | `libjvm.dylib`             |
|     new |    +1 |   0.0% → 2.1% |   0 → 1 | `ScopeDesc::is_top`      | `libjvm.dylib`             |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |             % |     Samples | Callee                 | Location                            |
| ------: | ----: | ------------: | ----------: | ---------------------- | ----------------------------------- |
|   -9.6% |  -100 | 99.9% → 99.8% | 1,047 → 947 | `doExec()`             | `java.util.concurrent.ForkJoinTask` |
| removed |    -1 |   0.1% → 0.0% |       1 → 0 | `reportException(int)` | `java.util.concurrent.ForkJoinTask` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

| Change | Delta |              % |   Samples | Callee                   | Location                                                               |
| -----: | ----: | -------------: | --------: | ------------------------ | ---------------------------------------------------------------------- |
| -20.8% |   -92 | 99.3% → 100.0% | 442 → 350 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a3b90` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|  Change | Delta |             % |   Samples | Callee                            | Location                                                               |
| ------: | ----: | ------------: | --------: | --------------------------------- | ---------------------------------------------------------------------- |
|  -24.2% |   -84 | 78.5% → 75.1% | 347 → 263 | `apply(Object, Object)`           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a7000` |
|  -34.1% |   -14 |   9.3% → 7.7% |   41 → 27 | `zero_blocks`                     | `<unknown>`                                                            |
|  +15.2% |    +7 | 10.4% → 15.1% |   46 → 53 | `arrayof_jint_disjoint_arraycopy` | `<unknown>`                                                            |
| removed |    -2 |   0.5% → 0.0% |     2 → 0 | `hash(Object)`                    | `java.util.HashMap`                                                    |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

| Change | Delta |      % |   Samples | Callee   | Location                                                               |
| -----: | ----: | -----: | --------: | -------- | ---------------------------------------------------------------------- |
| -16.4% |   -90 | 100.0% | 550 → 460 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a2bd0` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change | Delta |             % |   Samples | Callee                            | Location    |
| -----: | ----: | ------------: | --------: | --------------------------------- | ----------- |
| -27.9% |   -53 | 57.4% → 54.8% | 190 → 137 | `_new_array_Java`                 | `<unknown>` |
| -18.2% |   -24 | 39.9% → 43.2% | 132 → 108 | `arrayof_jint_disjoint_arraycopy` | `<unknown>` |

##### `addAll(Collection)` (`java.util.ArrayList`)

|  Change | Delta |             % |  Samples | Callee                                            | Location              |
| ------: | ----: | ------------: | -------: | ------------------------------------------------- | --------------------- |
|  -22.5% |   -25 | 46.3% → 47.3% | 111 → 86 | `toArray()`                                       | `java.util.ArrayList` |
|  -28.0% |   -23 | 34.2% → 32.4% |  82 → 59 | `grow(int)`                                       | `java.util.ArrayList` |
|  -12.5% |    -5 | 16.7% → 19.2% |  40 → 35 | `arrayof_oop_disjoint_arraycopy`                  | `<unknown>`           |
| removed |    -2 |   0.8% → 0.0% |    2 → 0 | `G1BarrierSetRuntime::write_ref_array_post_entry` | `libjvm.dylib`        |
| +100.0% |    +1 |   0.4% → 1.1% |    1 → 2 | `G1BarrierSet::write_ref_array_work`              | `libjvm.dylib`        |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |             % |     Samples | Callee                         | Location                            |
| -----: | ----: | ------------: | ----------: | ------------------------------ | ----------------------------------- |
|  -5.7% |   -57 | 98.1% → 97.8% | 1,004 → 947 | `doExec()`                     | `java.util.concurrent.ForkJoinTask` |
| -16.7% |    -2 |   1.2% → 1.0% |     12 → 10 | `tryCompensate(long, boolean)` | `java.util.concurrent.ForkJoinPool` |
|    new |    +1 |   0.0% → 0.1% |       0 → 1 | `loadFence()`                  | `jdk.internal.misc.Unsafe`          |

##### `toArray()` (`java.util.ArrayList`)

| Change | Delta |      % |   Samples | Callee                  | Location           |
| -----: | ----: | -----: | --------: | ----------------------- | ------------------ |
| -23.0% |   -50 | 100.0% | 217 → 167 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `Compile::call_generator` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                     | Location       |
| ------: | ----: | -----------: | ------: | -------------------------- | -------------- |
| removed |    -4 | 80.0% → 0.0% |   4 → 0 | `InlineTree::ok_to_inline` | `libjvm.dylib` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `ciMethod::resolve_invoke` | `libjvm.dylib` |

##### `ciTypeFlow::flow_types` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                         | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------ | -------------- |
| removed |    -2 | 50.0% → 0.0% |   2 → 0 | `ciTypeFlow::df_flow_types`    | `libjvm.dylib` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `ciTypeFlow::clone_loop_heads` | `libjvm.dylib` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `ciTypeFlow::flow_block`       | `libjvm.dylib` |

##### `ciTypeFlow::do_flow` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                   | Location       |
| ------: | ----: | ------------: | ------: | ------------------------ | -------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `ciTypeFlow::flow_types` | `libjvm.dylib` |

##### `ciMethod::get_flow_analysis` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                | Location       |
| ------: | ----: | ------------: | ------: | --------------------- | -------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `ciTypeFlow::do_flow` | `libjvm.dylib` |

##### `CompileQueue::get` (`libjvm.dylib`)

| Change | Delta |              % | Samples | Callee          | Location       |
| -----: | ----: | -------------: | ------: | --------------- | -------------- |
| -11.1% |    -2 | 94.7% → 100.0% | 18 → 16 | `Monitor::wait` | `libjvm.dylib` |

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

##### `ciTypeFlow::flow_block` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                                        | Location       |
| ------: | ----: | -----------: | ------: | --------------------------------------------- | -------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `ciTypeFlow::StateVector::apply_one_bytecode` | `libjvm.dylib` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `ciTypeFlow::Block::successors`               | `libjvm.dylib` |

##### `PhaseGVN::transform_no_reclaim` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee            | Location       |
| ------: | ----: | -----------: | ------: | ----------------- | -------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `LoadNode::Ideal` | `libjvm.dylib` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `AddNode::Value`  | `libjvm.dylib` |

##### `LinearScan::compute_debug_info_for_scope` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                                       | Location       |
| ------: | ----: | -----------: | ------: | -------------------------------------------- | -------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `LinearScan::append_scope_value_for_operand` | `libjvm.dylib` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `LinearScan::append_scope_value`             | `libjvm.dylib` |

##### `LinearScan::assign_reg_num` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                     | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | -------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `LinearScan::compute_debug_info_for_scope` | `libjvm.dylib` |

##### `PhaseCCP::push_more_uses` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                            | Location       |
| ------: | ----: | -----------: | ------: | --------------------------------- | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `PhaseCCP::push_counted_loop_phi` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                             | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------- | -------------- |
|  -66.7% |    -2 | 33.3% → 14.3% |   3 → 1 | `PhaseIdealLoop::build_loop_late`  | `libjvm.dylib` |
| +200.0% |    +2 | 11.1% → 42.9% |   1 → 3 | `PhaseIdealLoop::build_loop_early` | `libjvm.dylib` |
|     new |    +2 |  0.0% → 28.6% |   0 → 2 | `PhaseIdealLoop::Dominators`       | `libjvm.dylib` |
| removed |    -1 |  11.1% → 0.0% |   1 → 0 | `PhaseIdealLoop::build_loop_tree`  | `libjvm.dylib` |
| removed |    -1 |  11.1% → 0.0% |   1 → 0 | `ParmNode::is_CFG`                 | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                               | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------ | -------------- |
| -22.2% |    -2 | 100.0% |   9 → 7 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `ciTypeFlow::StateVector::apply_one_bytecode` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                                  | Location       |
| ------: | ----: | -----------: | ------: | --------------------------------------- | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `ciTypeFlow::StateVector::do_getstatic` | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `ciTypeFlow::StateVector::do_invoke`    | `libjvm.dylib` |

##### `ciTypeFlow::df_flow_types` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                   | Location       |
| ------: | ----: | ------------: | ------: | ------------------------ | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `ciTypeFlow::flow_block` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                                        | Location       |
| ------: | ----: | -----------: | ------: | --------------------------------------------- | -------------- |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep` | `libjvm.dylib` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `PhaseIdealLoop::compute_lca_of_uses`         | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

| Change | Delta |              % | Samples | Callee                                      | Location       |
| -----: | ----: | -------------: | ------: | ------------------------------------------- | -------------- |
| -50.0% |    -1 | 66.7% → 100.0% |   2 → 1 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib` |

##### `TypeInstPtr::make` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                   | Location       |
| ------: | ----: | -----------: | ------: | ------------------------ | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `TypeOopPtr::TypeOopPtr` | `libjvm.dylib` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in samples collected in their leaf frame.

|  Change | Delta |            % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------: | ----: | -----------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  +40.4% |   +19 |  0.9% → 1.4% | 47 → 66 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| +475.0% |   +19 |  0.1% → 0.5% |  4 → 23 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region` (`libjvm.dylib`) ← `G1FullGCResetMetadataTask::G1ResetMetadataClosure::do_heap_region` ← `HeapRegionManager::par_iterate` ← `G1FullGCResetMetadataTask::work` ← `WorkerThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  +36.4% |   +12 |  0.6% → 1.0% | 33 → 45 | `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  +30.0% |   +12 |  0.7% → 1.1% | 40 → 52 | `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  +32.4% |   +12 |  0.7% → 1.1% | 37 → 49 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  +45.8% |   +11 |  0.4% → 0.8% | 24 → 35 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                   |
| +500.0% |   +10 | <0.1% → 0.3% |  2 → 12 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  +24.3% |    +9 |  0.7% → 1.0% | 37 → 46 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`) |
| +400.0% |    +8 | <0.1% → 0.2% |  2 → 10 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| +266.7% |    +8 |  0.1% → 0.2% |  3 → 11 | `G1FullGCMarker::mark_object` (`libjvm.dylib`) ← `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` ← `G1FullGCMarker::follow_marking_stacks` ← `G1FullGCMarker::complete_marking` ← `G1FullGCMarkTask::work` ← `WorkerThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  +16.3% |    +7 |  0.8% → 1.1% | 43 → 50 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| +100.0% |    +7 |  0.1% → 0.3% |  7 → 14 | `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| +140.0% |    +7 |  0.1% → 0.3% |  5 → 12 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `LockTracer::UnsafeParkHook` (`libasyncProfiler.dylib`) ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  +75.0% |    +6 |  0.1% → 0.3% |  8 → 14 | `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                     |
| +125.0% |    +5 |  0.1% → 0.2% |   4 → 9 | `computeIfAbsent(Object, Function)` (`java.util.HashMap`) ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  +41.7% |    +5 |  0.2% → 0.4% | 12 → 17 | `forward_copy_longs` ← `arrayof_jint_disjoint_arraycopy` ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a3b90`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| +250.0% |    +5 | <0.1% → 0.2% |   2 → 7 | `__psynch_mutexwait` (`libsystem_kernel.dylib`) ← `_pthread_mutex_firstfit_lock_slow` (`libsystem_pthread.dylib`) ← `Mutex::lock_without_safepoint_check` (`libjvm.dylib`) ← `TaskTerminator::offer_termination` ← `G1ParEvacuateFollowersClosure::offer_termination` ← `G1ParEvacuateFollowersClosure::do_void` ← `G1EvacuateRegionsTask::evacuate_live_objects` ← `G1EvacuateRegionsBaseTask::work` ← `WorkerThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| +166.7% |    +5 |  0.1% → 0.2% |   3 → 8 | `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| +166.7% |    +5 |  0.1% → 0.2% |   3 → 8 | `forward_copy_longs` ← `arrayof_jint_disjoint_arraycopy` ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a3b90`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| +500.0% |    +5 | <0.1% → 0.1% |   1 → 6 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `LockTracer::UnsafeParkHook` (`libasyncProfiler.dylib`) ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a2bd0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

### Improvements

Call stacks with the largest decrease in samples collected in their leaf frame.

Common call stack: `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`) ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

| Change | Delta |            % |   Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| -----: | ----: | -----------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| -50.2% |  -368 | 13.5% → 7.9% | 733 → 365 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `LockTracer::UnsafeParkHook` (`libasyncProfiler.dylib`) ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| -30.8% |   -56 |  3.4% → 2.7% | 182 → 126 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `LockTracer::UnsafeParkHook` (`libasyncProfiler.dylib`) ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| -36.0% |   -40 |  2.0% → 1.5% |  111 → 71 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| -40.2% |   -33 |  1.5% → 1.1% |   82 → 49 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| -17.9% |   -22 |  2.3% → 2.2% | 123 → 101 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| -45.5% |   -20 |  0.8% → 0.5% |   44 → 24 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `LockTracer::UnsafeParkHook` (`libasyncProfiler.dylib`) ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `parkUntil(long)` (`java.util.concurrent.locks.LockSupport`) ← `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| -48.7% |   -19 |  0.7% → 0.4% |   39 → 20 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `LockTracer::UnsafeParkHook` (`libasyncProfiler.dylib`) ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| -29.2% |   -19 |  1.2% → 1.0% |   65 → 46 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| -70.4% |   -19 |  0.5% → 0.2% |    27 → 8 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `LockTracer::UnsafeParkHook` (`libasyncProfiler.dylib`) ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| -52.9% |   -18 |  0.6% → 0.3% |   34 → 16 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a2bd0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                |
| -56.7% |   -17 |  0.6% → 0.3% |   30 → 13 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| -42.4% |   -14 |  0.6% → 0.4% |   33 → 19 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| -10.1% |   -14 |  2.5% → 2.7% | 138 → 124 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| -31.0% |   -13 |  0.8% → 0.6% |   42 → 29 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| -44.4% |   -12 |  0.5% → 0.3% |   27 → 15 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| -39.3% |   -11 |  0.5% → 0.4% |   28 → 17 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                  |
| -28.6% |   -10 |  0.6% → 0.5% |   35 → 25 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a2bd0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) |
| -47.6% |   -10 |  0.4% → 0.2% |   21 → 11 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `LockTracer::UnsafeParkHook` (`libasyncProfiler.dylib`) ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| -83.3% |   -10 | 0.2% → <0.1% |    12 → 2 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `LockTracer::UnsafeParkHook` (`libasyncProfiler.dylib`) ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| -71.4% |   -10 |  0.3% → 0.1% |    14 → 4 | `forward_copy_longs` ← `arrayof_oop_disjoint_arraycopy` ← `addAll(Collection)` (`java.util.ArrayList`) ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a7000`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a3b90`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

# Allocated heap profile diff

Allocated 37 GiB → 36.8 GiB (-108.475 MiB, -0.3%) over 75,365 → 75,148 samples (514 KiB per sample).

| Category         | Change |        Delta |             % |                Size |         Samples |
| ---------------- | -----: | -----------: | ------------: | ------------------: | --------------: |
| Standard library |    ~0% |   -1.475 MiB | 92.9% → 93.1% |            34.3 GiB | 69,972 → 69,969 |
| Ours             |  -4.0% | -106.999 MiB |   7.1% → 6.9% | 2.63 GiB → 2.53 GiB |   5,393 → 5,179 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
├── 36.8 GiB → 36.6 GiB (99.5% → 99.4%) run() at java.util.concurrent.ForkJoinWorkerThread
│   └── 36.8 GiB → 36.6 GiB (99.5% → 99.4%) runWorker(ForkJoinPool$WorkQueue) at java.util.concurrent.ForkJoinPool
│       └── 36.8 GiB → 36.6 GiB (99.5% → 99.4%) scan(ForkJoinPool$WorkQueue, int, int)
│           └── 36.8 GiB → 36.6 GiB (99.5% → 99.4%) topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue) at java.util.concurrent.ForkJoinPool$WorkQueue
│               └── 36.8 GiB → 36.6 GiB (99.5% → 99.4%) doExec() at java.util.concurrent.ForkJoinTask
│                   └── … 36.8 GiB → 36.6 GiB (99.5% → 99.4%) exec() at java.util.concurrent.RecursiveTask
│                       └── 36.8 GiB → 36.6 GiB (99.5% → 99.4%) compute() at org.renaissance.jdk.concurrent.JavaKMeans$RangedTask
│                           ├── 28.1 GiB (76.0% → 76.1%) combineResults(Object, Object) at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│                           │   └── 28.1 GiB (76.0% → 76.1%) combineResults(Map, Map)
│                           │       └── 28.1 GiB (76.0% → 76.1%) merge(Map, Map) at org.renaissance.jdk.concurrent.JavaKMeans
│                           │           ├── … 27.8 GiB (75.3% → 75.5%) apply(Object, Object) at org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a7000
│                           │           │   └── 27.8 GiB (75.3% → 75.5%) lambda$merge$6(List, List) at org.renaissance.jdk.concurrent.JavaKMeans
│                           │           │       ├── 20.7 GiB (56.1% → 56.2%) addAll(Collection) at java.util.ArrayList
│                           │           │       │   ├── 13.3 GiB → 13.4 GiB (36.1% → 36.3%) grow(int)
│                           │           │       │   │   └── 13.3 GiB → 13.4 GiB (36.1% → 36.3%, self 36.1% → 36.3%, self 90.7% → 90.9% globally) copyOf(Object[], int) at java.util.Arrays
│                           │           │       │   └── 7.38 GiB → 7.34 GiB (20.0% → 19.9%) toArray()
│                           │           │       │       └── 7.38 GiB → 7.34 GiB (20.0% → 19.9%, self 20.0% → 19.9%) copyOf(Object[], int) at java.util.Arrays
│                           │           │       └── … 7.03 GiB → 6.99 GiB (19.0%, self 19.0% → 18.9%) copyOf(Object[], int) at java.util.Arrays
│                           │           └── … 122 MiB → 130 MiB (0.3%) newNode(int, Object, Object, HashMap$Node) at java.util.HashMap
│                           ├── 8.1 GiB → 8.07 GiB (21.9%) computeDirectly() at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│                           │   ├── … 6.39 GiB → 6.44 GiB (17.3% → 17.5%) collectClusters(int[]) at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│                           │   │   ├── … 6.02 GiB (16.3%, self 0.7% → 0.6%) grow(int) at java.util.ArrayList
│                           │   │   │   └── 5.78 GiB → 5.79 GiB (15.6% → 15.7%, self 15.6% → 15.7%) copyOf(Object[], int) at java.util.Arrays
│                           │   │   └── 288 MiB → 331 MiB (0.8% → 0.9%) computeIfAbsent(Object, Function) at java.util.HashMap
│                           │   │       ├── 103 MiB → 118 MiB (0.3%) apply(Object) at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000078011a3940
│                           │   │       │   └── 103 MiB → 118 MiB (0.3%) lambda$collectClusters$0(Double[]) at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│                           │   │       └── 58.5 MiB → 81.5 MiB (0.2%) resize()
│                           │   └── … 1.71 GiB → 1.63 GiB (4.6% → 4.4%) findNearestCentroid() at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│                           ├── 197 MiB → 165 MiB (0.5% → 0.4%) createSubtask(int, int) at org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│                           ├── 149 MiB → 141 MiB (0.4%) createSubtask(int, int) at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│                           ├── … 111 MiB → 96 MiB (0.3%) add(double[], double[]) at org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│                           ├── 89.5 MiB → 90 MiB (0.2%) computeDirectly() at org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│                           │   └── … 89.5 MiB → 90 MiB (0.2%) vectorSum() at org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│                           └── 19.5 MiB → 21 MiB (0.1%) computeDirectly() at org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask
│                               └── … 19.5 MiB → 21 MiB (0.1%) computeClusterAverages() at org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask
└── … 195 MiB → 203 MiB (0.5%) main(String[]) at org.renaissance.harness.RenaissanceSuite$
    └── … 181 MiB → 187 MiB (0.5%) applyVoid(Object) at org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000780111f1b8
        ├── … 60.5 MiB → 0 B (0.2% → 0.0%) valueOf(double) at java.lang.Double
        └── … 0 B → 42 MiB (0.0% → 0.1%) range(int, int) at java.util.stream.IntStream
            └── 0 B → 28 MiB (0.0% → 0.1%) intStream(Spliterator$OfInt, boolean) at java.util.stream.StreamSupport
```

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |          Delta |            % |                Size |   Samples | Function                                              | Location                                                   |
| ------: | -------------: | -----------: | ------------------: | --------: | ----------------------------------------------------- | ---------------------------------------------------------- |
|  +28.6% |    +23.999 MiB |  0.2% → 0.3% |    84 MiB → 108 MiB | 168 → 216 | `collectClusters(int[])`                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +22.1% |    +22.999 MiB |         0.3% |   104 MiB → 127 MiB | 208 → 254 | `resize()`                                            | `java.util.HashMap`                                        |
|   +6.0% |    +14.999 MiB |         0.7% |   250 MiB → 265 MiB | 501 → 531 | `newNode(int, Object, Object, HashMap$Node)`          | `java.util.HashMap`                                        |
|  +14.6% |    +14.999 MiB |         0.3% |   103 MiB → 118 MiB | 206 → 236 | `lambda$collectClusters$0(Double[])`                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +86.7% |     +6.499 MiB |        <0.1% |    7.5 MiB → 14 MiB |   15 → 28 | `range(int, int)`                                     | `java.util.stream.IntStream`                               |
|  +19.1% |     +4.499 MiB |         0.1% |   23.5 MiB → 28 MiB |   47 → 56 | `intStream(Spliterator$OfInt, boolean)`               | `java.util.stream.StreamSupport`                           |
|  +19.5% |     +2.526 MiB |        <0.1% | 12.9 MiB → 15.5 MiB |   21 → 25 | `copyOf(Object[], int, Class)`                        | `java.util.Arrays`                                         |
|  +26.7% |     +1.999 MiB |        <0.1% |   7.5 MiB → 9.5 MiB |   15 → 19 | `<init>(InputStream, Inflater, int)`                  | `java.util.zip.InflaterInputStream`                        |
|  +75.0% |     +1.499 MiB |        <0.1% |     2 MiB → 3.5 MiB |     4 → 7 | `doubleStream(Spliterator$OfDouble, boolean)`         | `java.util.stream.StreamSupport`                           |
|     new |     +1.499 MiB | 0.0% → <0.1% |       0 B → 1.5 MiB |     0 → 3 | `lambda$boxed$0(int)`                                 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|   +7.7% | +1,023.998 KiB |        <0.1% |     13 MiB → 14 MiB |   26 → 28 | `entrySet()`                                          | `java.util.HashMap`                                        |
|     new | +1,023.998 KiB | 0.0% → <0.1% |         0 B → 1 MiB |     0 → 2 | `addConstantUtf8(String)`                             | `jdk.internal.org.objectweb.asm.SymbolTable`               |
|   +6.3% | +1,023.998 KiB |        <0.1% |     16 MiB → 17 MiB |   32 → 34 | `lambda$generateData$4(int)`                          | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| +200.0% | +1,023.998 KiB |        <0.1% |   512 KiB → 1.5 MiB |     1 → 3 | `readNBytes(int)`                                     | `java.io.InputStream`                                      |
|     new | +1,023.998 KiB | 0.0% → <0.1% |         0 B → 1 MiB |     0 → 2 | `read(Manifest$FastInputStream, byte[], String, int)` | `java.util.jar.Attributes`                                 |
|     new | +1,023.998 KiB | 0.0% → <0.1% |         0 B → 1 MiB |     0 → 2 | `<init>(JavaKMeans, Map)`                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  +50.0% |   +511.999 KiB |        <0.1% |     1 MiB → 1.5 MiB |     2 → 3 | `lambda$run$0(int, List, int)`                        | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|     new |   +511.999 KiB | 0.0% → <0.1% |       0 B → 512 KiB |     0 → 1 | `average(List)`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|   +7.7% |   +511.999 KiB |        <0.1% |     6.5 MiB → 7 MiB |   13 → 14 | `computeClusterAverages()`                            | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|   +7.1% |   +511.999 KiB |        <0.1% |     7 MiB → 7.5 MiB |   14 → 15 | `createSubtask(int, int)`                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

##### Standard library

|  Change |          Delta |            % |                Size |   Samples | Function                                              | Location                                       |
| ------: | -------------: | -----------: | ------------------: | --------: | ----------------------------------------------------- | ---------------------------------------------- |
|  +22.1% |    +22.999 MiB |         0.3% |   104 MiB → 127 MiB | 208 → 254 | `resize()`                                            | `java.util.HashMap`                            |
|   +6.0% |    +14.999 MiB |         0.7% |   250 MiB → 265 MiB | 501 → 531 | `newNode(int, Object, Object, HashMap$Node)`          | `java.util.HashMap`                            |
|  +86.7% |     +6.499 MiB |        <0.1% |    7.5 MiB → 14 MiB |   15 → 28 | `range(int, int)`                                     | `java.util.stream.IntStream`                   |
|  +19.1% |     +4.499 MiB |         0.1% |   23.5 MiB → 28 MiB |   47 → 56 | `intStream(Spliterator$OfInt, boolean)`               | `java.util.stream.StreamSupport`               |
|  +19.5% |     +2.526 MiB |        <0.1% | 12.9 MiB → 15.5 MiB |   21 → 25 | `copyOf(Object[], int, Class)`                        | `java.util.Arrays`                             |
|  +26.7% |     +1.999 MiB |        <0.1% |   7.5 MiB → 9.5 MiB |   15 → 19 | `<init>(InputStream, Inflater, int)`                  | `java.util.zip.InflaterInputStream`            |
|  +75.0% |     +1.499 MiB |        <0.1% |     2 MiB → 3.5 MiB |     4 → 7 | `doubleStream(Spliterator$OfDouble, boolean)`         | `java.util.stream.StreamSupport`               |
|   +7.7% | +1,023.998 KiB |        <0.1% |     13 MiB → 14 MiB |   26 → 28 | `entrySet()`                                          | `java.util.HashMap`                            |
|     new | +1,023.998 KiB | 0.0% → <0.1% |         0 B → 1 MiB |     0 → 2 | `addConstantUtf8(String)`                             | `jdk.internal.org.objectweb.asm.SymbolTable`   |
| +200.0% | +1,023.998 KiB |        <0.1% |   512 KiB → 1.5 MiB |     1 → 3 | `readNBytes(int)`                                     | `java.io.InputStream`                          |
|     new | +1,023.998 KiB | 0.0% → <0.1% |         0 B → 1 MiB |     0 → 2 | `read(Manifest$FastInputStream, byte[], String, int)` | `java.util.jar.Attributes`                     |
|     new |   +511.999 KiB | 0.0% → <0.1% |       0 B → 512 KiB |     0 → 1 | `defineClass(String, Resource)`                       | `java.net.URLClassLoader`                      |
| +100.0% |   +511.999 KiB |        <0.1% |     512 KiB → 1 MiB |     1 → 2 | `spliterator(double[], int, int, int)`                | `java.util.Spliterators`                       |
|     new |   +511.999 KiB | 0.0% → <0.1% |       0 B → 512 KiB |     0 → 1 | `values()`                                            | `java.util.HashMap`                            |
|     new |   +511.999 KiB | 0.0% → <0.1% |       0 B → 512 KiB |     0 → 1 | `lookupKey(Object)`                                   | `jdk.internal.util.ReferencedKeyMap`           |
|     new |   +511.999 KiB | 0.0% → <0.1% |       0 B → 512 KiB |     0 → 1 | `getContents()`                                       | `sun.text.resources.cldr.FormatData_en`        |
|     new |   +511.999 KiB | 0.0% → <0.1% |       0 B → 512 KiB |     0 → 1 | `register(Object, Runnable)`                          | `java.lang.ref.Cleaner`                        |
|     new |   +511.999 KiB | 0.0% → <0.1% |       0 B → 512 KiB |     0 → 1 | `clone()`                                             | `java.lang.Object`                             |
|     new |   +511.999 KiB | 0.0% → <0.1% |       0 B → 512 KiB |     0 → 1 | `newString(byte[], int, int)`                         | `java.lang.StringLatin1`                       |
|     new |   +511.999 KiB | 0.0% → <0.1% |       0 B → 512 KiB |     0 → 1 | `generateSerializationFriendlyMethods()`              | `java.lang.invoke.InnerClassLambdaMetafactory` |

##### Ours

|  Change |          Delta |            % |              Size |   Samples | Function                             | Location                                                   |
| ------: | -------------: | -----------: | ----------------: | --------: | ------------------------------------ | ---------------------------------------------------------- |
|  +28.6% |    +23.999 MiB |  0.2% → 0.3% |  84 MiB → 108 MiB | 168 → 216 | `collectClusters(int[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +14.6% |    +14.999 MiB |         0.3% | 103 MiB → 118 MiB | 206 → 236 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|     new |     +1.499 MiB | 0.0% → <0.1% |     0 B → 1.5 MiB |     0 → 3 | `lambda$boxed$0(int)`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|   +6.3% | +1,023.998 KiB |        <0.1% |   16 MiB → 17 MiB |   32 → 34 | `lambda$generateData$4(int)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|     new | +1,023.998 KiB | 0.0% → <0.1% |       0 B → 1 MiB |     0 → 2 | `<init>(JavaKMeans, Map)`            | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  +50.0% |   +511.999 KiB |        <0.1% |   1 MiB → 1.5 MiB |     2 → 3 | `lambda$run$0(int, List, int)`       | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|     new |   +511.999 KiB | 0.0% → <0.1% |     0 B → 512 KiB |     0 → 1 | `average(List)`                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|   +7.7% |   +511.999 KiB |        <0.1% |   6.5 MiB → 7 MiB |   13 → 14 | `computeClusterAverages()`           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|   +7.1% |   +511.999 KiB |        <0.1% |   7 MiB → 7.5 MiB |   14 → 15 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|   +0.6% |   +511.999 KiB |         0.2% | 89.5 MiB → 90 MiB | 179 → 180 | `vectorSum()`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| +100.0% |   +511.999 KiB |        <0.1% |   512 KiB → 1 MiB |     1 → 2 | `collectGarbage(String)`             | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`   |

#### Improvements

Functions with the largest decrease in bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |          Delta |             % |                Size |         Samples | Function                                                                        | Location                                                   |
| ------: | -------------: | ------------: | ------------------: | --------------: | ------------------------------------------------------------------------------- | ---------------------------------------------------------- |
|   -4.7% |    -82.499 MiB |   4.6% → 4.4% | 1.71 GiB → 1.63 GiB |   3,497 → 3,332 | `findNearestCentroid()`                                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -16.0% |    -31.499 MiB |   0.5% → 0.4% |   197 MiB → 165 MiB |       394 → 331 | `createSubtask(int, int)`                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   -0.1% |    -30.502 MiB | 90.7% → 90.9% |            33.5 GiB | 68,326 → 68,266 | `copyOf(Object[], int)`                                                         | `java.util.Arrays`                                         |
|   -7.6% |    -18.999 MiB |   0.7% → 0.6% |   251 MiB → 232 MiB |       503 → 465 | `grow(int)`                                                                     | `java.util.ArrayList`                                      |
|  -13.9% |    -15.499 MiB |          0.3% |    111 MiB → 96 MiB |       223 → 192 | `add(double[], double[])`                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -17.4% |    -13.999 MiB |          0.2% | 80.5 MiB → 66.5 MiB |       161 → 133 | `merge(Map, Map)`                                                               | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|   -5.0% |     -7.499 MiB |          0.4% |   149 MiB → 141 MiB |       298 → 283 | `createSubtask(int, int)`                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -7.0% |     -4.499 MiB |          0.2% |   64 MiB → 59.5 MiB |       128 → 119 | `valueOf(double)`                                                               | `java.lang.Double`                                         |
|  -25.9% |     -3.499 MiB |         <0.1% |   13.5 MiB → 10 MiB |         27 → 20 | `opWrapSink(int, Sink)`                                                         | `java.util.stream.IntPipeline$1`                           |
|  -12.0% |     -1.499 MiB |         <0.1% |   12.5 MiB → 11 MiB |         25 → 22 | `builder(long, IntFunction)`                                                    | `java.util.stream.Nodes`                                   |
|  -75.0% |     -1.499 MiB |         <0.1% |     2 MiB → 512 KiB |           4 → 1 | `mapToObj(DoubleFunction, int)`                                                 | `java.util.stream.DoublePipeline`                          |
|   -1.0% | -1,023.998 KiB |          0.3% |  100 MiB → 99.5 MiB |       201 → 199 | `lambda$merge$6(List, List)`                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed | -1,023.998 KiB |  <0.1% → 0.0% |         1 MiB → 0 B |           2 → 0 | `opWrapSink(int, Sink)`                                                         | `java.util.stream.DoublePipeline$1`                        |
| removed |   -511.999 KiB |  <0.1% → 0.0% |       512 KiB → 0 B |           1 → 0 | `putVal(Object, Object, boolean)`                                               | `java.util.concurrent.ConcurrentHashMap`                   |
| removed |   -511.999 KiB |  <0.1% → 0.0% |       512 KiB → 0 B |           1 → 0 | `getEntry(String)`                                                              | `sun.net.www.protocol.jar.URLJarFile`                      |
| removed |   -511.999 KiB |  <0.1% → 0.0% |       512 KiB → 0 B |           1 → 0 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                                    |
| removed |   -511.999 KiB |  <0.1% → 0.0% |       512 KiB → 0 B |           1 → 0 | `main(String[])`                                                                | `org.renaissance.harness.RenaissanceSuite$`                |
| removed |   -511.999 KiB |  <0.1% → 0.0% |       512 KiB → 0 B |           1 → 0 | `allocateUninitializedArray(Class, int)`                                        | `jdk.internal.misc.Unsafe`                                 |
| removed |   -511.999 KiB |  <0.1% → 0.0% |       512 KiB → 0 B |           1 → 0 | `enlarge(int)`                                                                  | `jdk.internal.org.objectweb.asm.ByteVector`                |
| removed |   -511.999 KiB |  <0.1% → 0.0% |       512 KiB → 0 B |           1 → 0 | `initCEN(int, ZipCoder)`                                                        | `java.util.zip.ZipFile$Source`                             |

##### Standard library

|  Change |          Delta |             % |              Size |         Samples | Function                                                                        | Location                                    |
| ------: | -------------: | ------------: | ----------------: | --------------: | ------------------------------------------------------------------------------- | ------------------------------------------- |
|   -0.1% |    -30.502 MiB | 90.7% → 90.9% |          33.5 GiB | 68,326 → 68,266 | `copyOf(Object[], int)`                                                         | `java.util.Arrays`                          |
|   -7.6% |    -18.999 MiB |   0.7% → 0.6% | 251 MiB → 232 MiB |       503 → 465 | `grow(int)`                                                                     | `java.util.ArrayList`                       |
|   -7.0% |     -4.499 MiB |          0.2% | 64 MiB → 59.5 MiB |       128 → 119 | `valueOf(double)`                                                               | `java.lang.Double`                          |
|  -25.9% |     -3.499 MiB |         <0.1% | 13.5 MiB → 10 MiB |         27 → 20 | `opWrapSink(int, Sink)`                                                         | `java.util.stream.IntPipeline$1`            |
|  -12.0% |     -1.499 MiB |         <0.1% | 12.5 MiB → 11 MiB |         25 → 22 | `builder(long, IntFunction)`                                                    | `java.util.stream.Nodes`                    |
|  -75.0% |     -1.499 MiB |         <0.1% |   2 MiB → 512 KiB |           4 → 1 | `mapToObj(DoubleFunction, int)`                                                 | `java.util.stream.DoublePipeline`           |
| removed | -1,023.998 KiB |  <0.1% → 0.0% |       1 MiB → 0 B |           2 → 0 | `opWrapSink(int, Sink)`                                                         | `java.util.stream.DoublePipeline$1`         |
| removed |   -511.999 KiB |  <0.1% → 0.0% |     512 KiB → 0 B |           1 → 0 | `putVal(Object, Object, boolean)`                                               | `java.util.concurrent.ConcurrentHashMap`    |
| removed |   -511.999 KiB |  <0.1% → 0.0% |     512 KiB → 0 B |           1 → 0 | `getEntry(String)`                                                              | `sun.net.www.protocol.jar.URLJarFile`       |
| removed |   -511.999 KiB |  <0.1% → 0.0% |     512 KiB → 0 B |           1 → 0 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                     |
| removed |   -511.999 KiB |  <0.1% → 0.0% |     512 KiB → 0 B |           1 → 0 | `allocateUninitializedArray(Class, int)`                                        | `jdk.internal.misc.Unsafe`                  |
| removed |   -511.999 KiB |  <0.1% → 0.0% |     512 KiB → 0 B |           1 → 0 | `enlarge(int)`                                                                  | `jdk.internal.org.objectweb.asm.ByteVector` |
| removed |   -511.999 KiB |  <0.1% → 0.0% |     512 KiB → 0 B |           1 → 0 | `initCEN(int, ZipCoder)`                                                        | `java.util.zip.ZipFile$Source`              |
| removed |   -511.999 KiB |  <0.1% → 0.0% |     512 KiB → 0 B |           1 → 0 | `<init>(int)`                                                                   | `java.io.ByteArrayOutputStream`             |
| removed |   -511.999 KiB |  <0.1% → 0.0% |     512 KiB → 0 B |           1 → 0 | `getProtectionDomain(CodeSource)`                                               | `java.security.SecureClassLoader`           |
| removed |   -511.999 KiB |  <0.1% → 0.0% |     512 KiB → 0 B |           1 → 0 | `keySet()`                                                                      | `java.util.HashMap`                         |

##### Ours

|  Change |          Delta |            % |                Size |       Samples | Function                     | Location                                                   |
| ------: | -------------: | -----------: | ------------------: | ------------: | ---------------------------- | ---------------------------------------------------------- |
|   -4.7% |    -82.499 MiB |  4.6% → 4.4% | 1.71 GiB → 1.63 GiB | 3,497 → 3,332 | `findNearestCentroid()`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -16.0% |    -31.499 MiB |  0.5% → 0.4% |   197 MiB → 165 MiB |     394 → 331 | `createSubtask(int, int)`    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -13.9% |    -15.499 MiB |         0.3% |    111 MiB → 96 MiB |     223 → 192 | `add(double[], double[])`    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -17.4% |    -13.999 MiB |         0.2% | 80.5 MiB → 66.5 MiB |     161 → 133 | `merge(Map, Map)`            | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|   -5.0% |     -7.499 MiB |         0.4% |   149 MiB → 141 MiB |     298 → 283 | `createSubtask(int, int)`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -1.0% | -1,023.998 KiB |         0.3% |  100 MiB → 99.5 MiB |     201 → 199 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |   -511.999 KiB | <0.1% → 0.0% |       512 KiB → 0 B |         1 → 0 | `main(String[])`             | `org.renaissance.harness.RenaissanceSuite$`                |

#### Lines

Lines with the largest change in contribution to each function's self size.

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |             Size |   Samples | Location                                                       |
| -----: | ----------: | -----: | ---------------: | --------: | -------------------------------------------------------------- |
| +28.6% | +23.999 MiB | 100.0% | 84 MiB → 108 MiB | 168 → 216 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:209` |

##### `resize()` (`java.util.HashMap`)

| Change |       Delta |      % |              Size |   Samples | Location                |
| -----: | ----------: | -----: | ----------------: | --------: | ----------------------- |
| +22.1% | +22.999 MiB | 100.0% | 104 MiB → 127 MiB | 208 → 254 | `java.util.HashMap:710` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

| Change |       Delta |      % |              Size |   Samples | Location                 |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------------ |
|  +6.0% | +14.999 MiB | 100.0% | 250 MiB → 265 MiB | 501 → 531 | `java.util.HashMap:1909` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |              Size |   Samples | Location                                                       |
| -----: | ----------: | -----: | ----------------: | --------: | -------------------------------------------------------------- |
| +14.6% | +14.999 MiB | 100.0% | 103 MiB → 118 MiB | 206 → 236 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |

##### `range(int, int)` (`java.util.stream.IntStream`)

| Change |      Delta |      % |             Size | Samples | Location                          |
| -----: | ---------: | -----: | ---------------: | ------: | --------------------------------- |
| +86.7% | +6.499 MiB | 100.0% | 7.5 MiB → 14 MiB | 15 → 28 | `java.util.stream.IntStream:1083` |

##### `intStream(Spliterator$OfInt, boolean)` (`java.util.stream.StreamSupport`)

| Change |      Delta |      % |              Size | Samples | Location                             |
| -----: | ---------: | -----: | ----------------: | ------: | ------------------------------------ |
| +19.1% | +4.499 MiB | 100.0% | 23.5 MiB → 28 MiB | 47 → 56 | `java.util.stream.StreamSupport:138` |

##### `copyOf(Object[], int, Class)` (`java.util.Arrays`)

| Change |      Delta |      % |                Size | Samples | Location                |
| -----: | ---------: | -----: | ------------------: | ------: | ----------------------- |
| +19.5% | +2.526 MiB | 100.0% | 12.9 MiB → 15.5 MiB | 21 → 25 | `java.util.Arrays:3513` |

##### `<init>(InputStream, Inflater, int)` (`java.util.zip.InflaterInputStream`)

| Change |      Delta |      % |              Size | Samples | Location                               |
| -----: | ---------: | -----: | ----------------: | ------: | -------------------------------------- |
| +26.7% | +1.999 MiB | 100.0% | 7.5 MiB → 9.5 MiB | 15 → 19 | `java.util.zip.InflaterInputStream:89` |

##### `doubleStream(Spliterator$OfDouble, boolean)` (`java.util.stream.StreamSupport`)

| Change |      Delta |      % |            Size | Samples | Location                             |
| -----: | ---------: | -----: | --------------: | ------: | ------------------------------------ |
| +75.0% | +1.499 MiB | 100.0% | 2 MiB → 3.5 MiB |   4 → 7 | `java.util.stream.StreamSupport:274` |

##### `lambda$boxed$0(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |      Delta |             % |          Size | Samples | Location                                                   |
| -----: | ---------: | ------------: | ------------: | ------: | ---------------------------------------------------------- |
|    new | +1.499 MiB | 0.0% → 100.0% | 0 B → 1.5 MiB |   0 → 3 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:327` |

##### `entrySet()` (`java.util.HashMap`)

| Change |          Delta |      % |            Size | Samples | Location                 |
| -----: | -------------: | -----: | --------------: | ------: | ------------------------ |
|  +7.7% | +1,023.998 KiB | 100.0% | 13 MiB → 14 MiB | 26 → 28 | `java.util.HashMap:1099` |

##### `addConstantUtf8(String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

| Change |          Delta |             % |        Size | Samples | Location                                         |
| -----: | -------------: | ------------: | ----------: | ------: | ------------------------------------------------ |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `jdk.internal.org.objectweb.asm.SymbolTable:807` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |          Delta |      % |            Size | Samples | Location                                       |
| -----: | -------------: | -----: | --------------: | ------: | ---------------------------------------------- |
|  +6.3% | +1,023.998 KiB | 100.0% | 16 MiB → 17 MiB | 32 → 34 | `org.renaissance.jdk.concurrent.JavaKMeans:87` |

##### `readNBytes(int)` (`java.io.InputStream`)

|  Change |        Delta |              % |            Size | Samples | Location                  |
| ------: | -----------: | -------------: | --------------: | ------: | ------------------------- |
| +100.0% | +511.999 KiB | 100.0% → 66.7% | 512 KiB → 1 MiB |   1 → 2 | `java.io.InputStream:448` |
|     new | +511.999 KiB |   0.0% → 33.3% |   0 B → 512 KiB |   0 → 1 | `java.io.InputStream:408` |

##### `read(Manifest$FastInputStream, byte[], String, int)` (`java.util.jar.Attributes`)

| Change |        Delta |            % |          Size | Samples | Location                       |
| -----: | -----------: | -----------: | ------------: | ------: | ------------------------------ |
|    new | +511.999 KiB | 0.0% → 50.0% | 0 B → 512 KiB |   0 → 1 | `java.util.jar.Attributes:371` |
|    new | +511.999 KiB | 0.0% → 50.0% | 0 B → 512 KiB |   0 → 1 | `java.util.jar.Attributes:420` |

##### `<init>(JavaKMeans, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |          Delta |             % |        Size | Samples | Location                                                   |
| -----: | -------------: | ------------: | ----------: | ------: | ---------------------------------------------------------- |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:282` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |      % |            Size | Samples | Location                                       |
| -----: | -----------: | -----: | --------------: | ------: | ---------------------------------------------- |
| +50.0% | +511.999 KiB | 100.0% | 1 MiB → 1.5 MiB |   2 → 3 | `org.renaissance.jdk.concurrent.JavaKMeans:53` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |        Delta |             % |          Size | Samples | Location                                                   |
| -----: | -----------: | ------------: | ------------: | ------: | ---------------------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:332` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |        Delta |      % |            Size | Samples | Location                                                   |
| -----: | -----------: | -----: | --------------: | ------: | ---------------------------------------------------------- |
|  +7.7% | +511.999 KiB | 100.0% | 6.5 MiB → 7 MiB | 13 → 14 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:314` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |        Delta |      % |            Size | Samples | Location                                                   |
| -----: | -----------: | -----: | --------------: | ------: | ---------------------------------------------------------- |
|  +7.1% | +511.999 KiB | 100.0% | 7 MiB → 7.5 MiB | 14 → 15 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:352` |

##### `defineClass(String, Resource)` (`java.net.URLClassLoader`)

| Change |        Delta |             % |          Size | Samples | Location                      |
| -----: | -----------: | ------------: | ------------: | ------: | ----------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `java.net.URLClassLoader:522` |

##### `spliterator(double[], int, int, int)` (`java.util.Spliterators`)

|  Change |        Delta |      % |            Size | Samples | Location                     |
| ------: | -----------: | -----: | --------------: | ------: | ---------------------------- |
| +100.0% | +511.999 KiB | 100.0% | 512 KiB → 1 MiB |   1 → 2 | `java.util.Spliterators:372` |

##### `values()` (`java.util.HashMap`)

| Change |        Delta |             % |          Size | Samples | Location                 |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------ |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `java.util.HashMap:1042` |

##### `lookupKey(Object)` (`jdk.internal.util.ReferencedKeyMap`)

| Change |        Delta |             % |          Size | Samples | Location                                 |
| -----: | -----------: | ------------: | ------------: | ------: | ---------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `jdk.internal.util.ReferencedKeyMap:176` |

##### `getContents()` (`sun.text.resources.cldr.FormatData_en`)

| Change |        Delta |             % |          Size | Samples | Location                                    |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `sun.text.resources.cldr.FormatData_en:117` |

##### `register(Object, Runnable)` (`java.lang.ref.Cleaner`)

| Change |        Delta |             % |          Size | Samples | Location                    |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `java.lang.ref.Cleaner:224` |

##### `newString(byte[], int, int)` (`java.lang.StringLatin1`)

| Change |        Delta |             % |          Size | Samples | Location                     |
| -----: | -----------: | ------------: | ------------: | ------: | ---------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `java.lang.StringLatin1:750` |

##### `generateSerializationFriendlyMethods()` (`java.lang.invoke.InnerClassLambdaMetafactory`)

| Change |        Delta |             % |          Size | Samples | Location                                           |
| -----: | -----------: | ------------: | ------------: | ------: | -------------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `java.lang.invoke.InnerClassLambdaMetafactory:423` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |        Delta |      % |              Size |   Samples | Location                                                      |
| -----: | -----------: | -----: | ----------------: | --------: | ------------------------------------------------------------- |
|  +0.6% | +511.999 KiB | 100.0% | 89.5 MiB → 90 MiB | 179 → 180 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:400` |

##### `collectGarbage(String)` (`org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`)

|  Change |        Delta |      % |            Size | Samples | Location                                                    |
| ------: | -----------: | -----: | --------------: | ------: | ----------------------------------------------------------- |
| +100.0% | +511.999 KiB | 100.0% | 512 KiB → 1 MiB |   1 → 2 | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin:26` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |                Size |       Samples | Location                                                       |
| -----: | ----------: | -----: | ------------------: | ------------: | -------------------------------------------------------------- |
|  -4.7% | -82.499 MiB | 100.0% | 1.71 GiB → 1.63 GiB | 3,497 → 3,332 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:223` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |              Size |   Samples | Location                                                      |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------------------------------------------------- |
| -16.0% | -31.499 MiB | 100.0% | 197 MiB → 165 MiB | 394 → 331 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:419` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |       Delta |      % |     Size |         Samples | Location                |
| -----: | ----------: | -----: | -------: | --------------: | ----------------------- |
|  -0.1% | -30.502 MiB | 100.0% | 33.5 GiB | 68,326 → 68,266 | `java.util.Arrays:3482` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |       Delta |      % |              Size |   Samples | Location                  |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------------- |
|  -7.6% | -18.999 MiB | 100.0% | 251 MiB → 232 MiB | 503 → 465 | `java.util.ArrayList:239` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |             Size |   Samples | Location                                                      |
| -----: | ----------: | -----: | ---------------: | --------: | ------------------------------------------------------------- |
| -13.9% | -15.499 MiB | 100.0% | 111 MiB → 96 MiB | 223 → 192 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:430` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |       Delta |      % |                Size |   Samples | Location                                        |
| -----: | ----------: | -----: | ------------------: | --------: | ----------------------------------------------- |
| -17.4% | -13.999 MiB | 100.0% | 80.5 MiB → 66.5 MiB | 161 → 133 | `org.renaissance.jdk.concurrent.JavaKMeans:110` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |      Delta |      % |              Size |   Samples | Location                                                       |
| -----: | ---------: | -----: | ----------------: | --------: | -------------------------------------------------------------- |
|  -5.0% | -7.499 MiB | 100.0% | 149 MiB → 141 MiB | 298 → 283 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:261` |

##### `valueOf(double)` (`java.lang.Double`)

| Change |      Delta |      % |              Size |   Samples | Location               |
| -----: | ---------: | -----: | ----------------: | --------: | ---------------------- |
|  -7.0% | -4.499 MiB | 100.0% | 64 MiB → 59.5 MiB | 128 → 119 | `java.lang.Double:773` |

##### `opWrapSink(int, Sink)` (`java.util.stream.IntPipeline$1`)

| Change |      Delta |      % |              Size | Samples | Location                             |
| -----: | ---------: | -----: | ----------------: | ------: | ------------------------------------ |
| -25.9% | -3.499 MiB | 100.0% | 13.5 MiB → 10 MiB | 27 → 20 | `java.util.stream.IntPipeline$1:177` |

##### `builder(long, IntFunction)` (`java.util.stream.Nodes`)

| Change |      Delta |      % |              Size | Samples | Location                     |
| -----: | ---------: | -----: | ----------------: | ------: | ---------------------------- |
| -12.0% | -1.499 MiB | 100.0% | 12.5 MiB → 11 MiB | 25 → 22 | `java.util.stream.Nodes:168` |

##### `mapToObj(DoubleFunction, int)` (`java.util.stream.DoublePipeline`)

| Change |      Delta |      % |            Size | Samples | Location                              |
| -----: | ---------: | -----: | --------------: | ------: | ------------------------------------- |
| -75.0% | -1.499 MiB | 100.0% | 2 MiB → 512 KiB |   4 → 1 | `java.util.stream.DoublePipeline:170` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |          Delta |      % |               Size |   Samples | Location                                        |
| -----: | -------------: | -----: | -----------------: | --------: | ----------------------------------------------- |
|  -1.0% | -1,023.998 KiB | 100.0% | 100 MiB → 99.5 MiB | 201 → 199 | `org.renaissance.jdk.concurrent.JavaKMeans:114` |

##### `opWrapSink(int, Sink)` (`java.util.stream.DoublePipeline$1`)

|  Change |          Delta |             % |        Size | Samples | Location                                |
| ------: | -------------: | ------------: | ----------: | ------: | --------------------------------------- |
| removed | -1,023.998 KiB | 100.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `java.util.stream.DoublePipeline$1:173` |

##### `putVal(Object, Object, boolean)` (`java.util.concurrent.ConcurrentHashMap`)

|  Change |        Delta |             % |          Size | Samples | Location                                      |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `java.util.concurrent.ConcurrentHashMap:1047` |

##### `getEntry(String)` (`sun.net.www.protocol.jar.URLJarFile`)

|  Change |        Delta |             % |          Size | Samples | Location                                  |
| ------: | -----------: | ------------: | ------------: | ------: | ----------------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `sun.net.www.protocol.jar.URLJarFile:131` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |        Delta |             % |          Size | Samples | Location                                        |
| ------: | -----------: | ------------: | ------------: | ------: | ----------------------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `org.renaissance.harness.RenaissanceSuite$:122` |

##### `allocateUninitializedArray(Class, int)` (`jdk.internal.misc.Unsafe`)

|  Change |        Delta |             % |          Size | Samples | Location                        |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `jdk.internal.misc.Unsafe:1380` |

##### `enlarge(int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

|  Change |        Delta |             % |          Size | Samples | Location                                        |
| ------: | -----------: | ------------: | ------------: | ------: | ----------------------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `jdk.internal.org.objectweb.asm.ByteVector:401` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|  Change |        Delta |             % |          Size | Samples | Location                            |
| ------: | -----------: | ------------: | ------------: | ------: | ----------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `java.util.zip.ZipFile$Source:1733` |

##### `<init>(int)` (`java.io.ByteArrayOutputStream`)

|  Change |        Delta |             % |          Size | Samples | Location                           |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `java.io.ByteArrayOutputStream:81` |

##### `getProtectionDomain(CodeSource)` (`java.security.SecureClassLoader`)

|  Change |        Delta |             % |          Size | Samples | Location                              |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `java.security.SecureClassLoader:221` |

##### `keySet()` (`java.util.HashMap`)

|  Change |        Delta |             % |          Size | Samples | Location                |
| ------: | -----------: | ------------: | ------------: | ------: | ----------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `java.util.HashMap:914` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |             Size |   Samples | Caller              | Location                                                   |
| -----: | ----------: | -----: | ---------------: | --------: | ------------------- | ---------------------------------------------------------- |
| +28.6% | +23.999 MiB | 100.0% | 84 MiB → 108 MiB | 168 → 216 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `resize()` (`java.util.HashMap`)

| Change |       Delta |             % |                Size |   Samples | Caller                              | Location            |
| -----: | ----------: | ------------: | ------------------: | --------: | ----------------------------------- | ------------------- |
| +39.3% | +22.999 MiB | 56.3% → 64.2% | 58.5 MiB → 81.5 MiB | 117 → 163 | `computeIfAbsent(Object, Function)` | `java.util.HashMap` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

|  Change |        Delta |             % |              Size |   Samples | Caller                                          | Location            |
| ------: | -----------: | ------------: | ----------------: | --------: | ----------------------------------------------- | ------------------- |
|   +7.7% |   +9.499 MiB | 49.1% → 49.9% | 123 MiB → 132 MiB | 246 → 265 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |
|   +3.9% |   +4.999 MiB | 50.7% → 49.7% | 127 MiB → 132 MiB | 254 → 264 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap` |
| +100.0% | +511.999 KiB |   0.2% → 0.4% |   512 KiB → 1 MiB |     1 → 2 | `merge(Object, Object, BiFunction)`             | `java.util.HashMap` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |              Size |   Samples | Caller          | Location                                                                              |
| -----: | ----------: | -----: | ----------------: | --------: | --------------- | ------------------------------------------------------------------------------------- |
| +14.6% | +14.999 MiB | 100.0% | 103 MiB → 118 MiB | 206 → 236 | `apply(Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000078011a3940` |

##### `range(int, int)` (`java.util.stream.IntStream`)

| Change |      Delta |      % |             Size | Samples | Caller                                           | Location                                    |
| -----: | ---------: | -----: | ---------------: | ------: | ------------------------------------------------ | ------------------------------------------- |
| +86.7% | +6.499 MiB | 100.0% | 7.5 MiB → 14 MiB | 15 → 28 | `lambda$generateData$5(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `intStream(Spliterator$OfInt, boolean)` (`java.util.stream.StreamSupport`)

| Change |      Delta |      % |              Size | Samples | Caller            | Location                     |
| -----: | ---------: | -----: | ----------------: | ------: | ----------------- | ---------------------------- |
| +19.1% | +4.499 MiB | 100.0% | 23.5 MiB → 28 MiB | 47 → 56 | `range(int, int)` | `java.util.stream.IntStream` |

##### `copyOf(Object[], int, Class)` (`java.util.Arrays`)

| Change |      Delta |      % |                Size | Samples | Caller                  | Location           |
| -----: | ---------: | -----: | ------------------: | ------: | ----------------------- | ------------------ |
| +19.5% | +2.526 MiB | 100.0% | 12.9 MiB → 15.5 MiB | 21 → 25 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `<init>(InputStream, Inflater, int)` (`java.util.zip.InflaterInputStream`)

| Change |      Delta |      % |              Size | Samples | Caller                                                                                  | Location                                           |
| -----: | ---------: | -----: | ----------------: | ------: | --------------------------------------------------------------------------------------- | -------------------------------------------------- |
| +26.7% | +1.999 MiB | 100.0% | 7.5 MiB → 9.5 MiB | 15 → 19 | `<init>(ZipFile, ZipFile$ZipFileInputStream, ZipFile$CleanableResource, Inflater, int)` | `java.util.zip.ZipFile$ZipFileInflaterInputStream` |

##### `doubleStream(Spliterator$OfDouble, boolean)` (`java.util.stream.StreamSupport`)

| Change |      Delta |      % |            Size | Samples | Caller                       | Location           |
| -----: | ---------: | -----: | --------------: | ------: | ---------------------------- | ------------------ |
| +75.0% | +1.499 MiB | 100.0% | 2 MiB → 3.5 MiB |   4 → 7 | `stream(double[], int, int)` | `java.util.Arrays` |

##### `lambda$boxed$0(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |      Delta |             % |          Size | Samples | Caller       | Location                                                                          |
| -----: | ---------: | ------------: | ------------: | ------: | ------------ | --------------------------------------------------------------------------------- |
|    new | +1.499 MiB | 0.0% → 100.0% | 0 B → 1.5 MiB |   0 → 3 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask$$Lambda.0x00000078011a7540` |

##### `entrySet()` (`java.util.HashMap`)

| Change |          Delta |      % |            Size | Samples | Caller                        | Location            |
| -----: | -------------: | -----: | --------------: | ------: | ----------------------------- | ------------------- |
|  +7.7% | +1,023.998 KiB | 100.0% | 13 MiB → 14 MiB | 26 → 28 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `addConstantUtf8(String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

| Change |          Delta |             % |        Size | Samples | Caller                                  | Location                                     |
| -----: | -------------: | ------------: | ----------: | ------: | --------------------------------------- | -------------------------------------------- |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `addConstantUtf8Reference(int, String)` | `jdk.internal.org.objectweb.asm.SymbolTable` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |          Delta |      % |            Size | Samples | Caller       | Location                                            |
| -----: | -------------: | -----: | --------------: | ------: | ------------ | --------------------------------------------------- |
|  +6.3% | +1,023.998 KiB | 100.0% | 16 MiB → 17 MiB | 32 → 34 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda` |

##### `readNBytes(int)` (`java.io.InputStream`)

|  Change |          Delta |      % |              Size | Samples | Caller           | Location              |
| ------: | -------------: | -----: | ----------------: | ------: | ---------------- | --------------------- |
| +200.0% | +1,023.998 KiB | 100.0% | 512 KiB → 1.5 MiB |   1 → 3 | `readAllBytes()` | `java.io.InputStream` |

##### `read(Manifest$FastInputStream, byte[], String, int)` (`java.util.jar.Attributes`)

| Change |          Delta |             % |        Size | Samples | Caller                      | Location                 |
| -----: | -------------: | ------------: | ----------: | ------: | --------------------------- | ------------------------ |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `read(InputStream, String)` | `java.util.jar.Manifest` |

##### `<init>(JavaKMeans, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |          Delta |             % |        Size | Samples | Caller                         | Location                                    |
| -----: | -------------: | ------------: | ----------: | ------: | ------------------------------ | ------------------------------------------- |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |      % |            Size | Samples | Caller   | Location                                                               |
| -----: | -----------: | -----: | --------------: | ------: | -------- | ---------------------------------------------------------------------- |
| +50.0% | +511.999 KiB | 100.0% | 1 MiB → 1.5 MiB |   2 → 3 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a2bd0` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |        Delta |             % |          Size | Samples | Caller                     | Location                                               |
| -----: | -----------: | ------------: | ------------: | ------: | -------------------------- | ------------------------------------------------------ |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |        Delta |      % |            Size | Samples | Caller              | Location                                               |
| -----: | -----------: | -----: | --------------: | ------: | ------------------- | ------------------------------------------------------ |
|  +7.7% | +511.999 KiB | 100.0% | 6.5 MiB → 7 MiB | 13 → 14 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |        Delta |      % |            Size | Samples | Caller      | Location                                               |
| -----: | -----------: | -----: | --------------: | ------: | ----------- | ------------------------------------------------------ |
|  +7.1% | +511.999 KiB | 100.0% | 7 MiB → 7.5 MiB | 14 → 15 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `defineClass(String, Resource)` (`java.net.URLClassLoader`)

| Change |        Delta |             % |          Size | Samples | Caller  | Location                    |
| -----: | -----------: | ------------: | ------------: | ------: | ------- | --------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `run()` | `java.net.URLClassLoader$1` |

##### `spliterator(double[], int, int, int)` (`java.util.Spliterators`)

|  Change |        Delta |      % |            Size | Samples | Caller                            | Location           |
| ------: | -----------: | -----: | --------------: | ------: | --------------------------------- | ------------------ |
| +100.0% | +511.999 KiB | 100.0% | 512 KiB → 1 MiB |   1 → 2 | `spliterator(double[], int, int)` | `java.util.Arrays` |

##### `values()` (`java.util.HashMap`)

| Change |        Delta |             % |          Size | Samples | Caller                    | Location                                               |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------- | ------------------------------------------------------ |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `<init>(JavaKMeans, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `lookupKey(Object)` (`jdk.internal.util.ReferencedKeyMap`)

| Change |        Delta |             % |          Size | Samples | Caller                    | Location                             |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------- | ------------------------------------ |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `getNoCheckStale(Object)` | `jdk.internal.util.ReferencedKeyMap` |

##### `getContents()` (`sun.text.resources.cldr.FormatData_en`)

| Change |        Delta |             % |          Size | Samples | Caller         | Location                       |
| -----: | -----------: | ------------: | ------------: | ------: | -------------- | ------------------------------ |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `loadLookup()` | `java.util.ListResourceBundle` |

##### `register(Object, Runnable)` (`java.lang.ref.Cleaner`)

| Change |        Delta |             % |          Size | Samples | Caller                                                                                  | Location                                           |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------------------------------------------------------------------------- | -------------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `<init>(ZipFile, ZipFile$ZipFileInputStream, ZipFile$CleanableResource, Inflater, int)` | `java.util.zip.ZipFile$ZipFileInflaterInputStream` |

##### `clone()` (`java.lang.Object`)

| Change |        Delta |             % |          Size | Samples | Caller                          | Location           |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------- | ------------------ |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `copyOfRange(byte[], int, int)` | `java.util.Arrays` |

##### `newString(byte[], int, int)` (`java.lang.StringLatin1`)

| Change |        Delta |             % |          Size | Samples | Caller                | Location           |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------- | ------------------ |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `substring(int, int)` | `java.lang.String` |

##### `generateSerializationFriendlyMethods()` (`java.lang.invoke.InnerClassLambdaMetafactory`)

| Change |        Delta |             % |          Size | Samples | Caller                 | Location                                       |
| -----: | -----------: | ------------: | ------------: | ------: | ---------------------- | ---------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `generateInnerClass()` | `java.lang.invoke.InnerClassLambdaMetafactory` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |        Delta |      % |              Size |   Samples | Caller              | Location                                                  |
| -----: | -----------: | -----: | ----------------: | --------: | ------------------- | --------------------------------------------------------- |
|  +0.6% | +511.999 KiB | 100.0% | 89.5 MiB → 90 MiB | 179 → 180 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `collectGarbage(String)` (`org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`)

|  Change |        Delta |      % |            Size | Samples | Caller                                      | Location                                                 |
| ------: | -----------: | -----: | --------------: | ------: | ------------------------------------------- | -------------------------------------------------------- |
| +100.0% | +511.999 KiB | 100.0% | 512 KiB → 1 MiB |   1 → 2 | `afterOperationSetUp(String, int, boolean)` | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |                Size |       Samples | Caller              | Location                                                   |
| -----: | ----------: | -----: | ------------------: | ------------: | ------------------- | ---------------------------------------------------------- |
|  -4.7% | -82.499 MiB | 100.0% | 1.71 GiB → 1.63 GiB | 3,497 → 3,332 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |              Size |   Samples | Caller      | Location                                               |
| -----: | ----------: | -----: | ----------------: | --------: | ----------- | ------------------------------------------------------ |
| -16.0% | -31.499 MiB | 100.0% | 197 MiB → 165 MiB | 394 → 331 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |       Delta |             % |                Size |         Samples | Caller      | Location              |
| -----: | ----------: | ------------: | ------------------: | --------------: | ----------- | --------------------- |
|  -0.6% | -91.999 MiB | 43.0% → 42.7% | 14.4 GiB → 14.3 GiB | 29,499 → 29,315 | `toArray()` | `java.util.ArrayList` |
|  +0.3% | +61.497 MiB | 57.0% → 57.3% | 19.1 GiB → 19.2 GiB | 38,827 → 38,951 | `grow(int)` | `java.util.ArrayList` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |       Delta |      % |              Size |   Samples | Caller   | Location              |
| -----: | ----------: | -----: | ----------------: | --------: | -------- | --------------------- |
|  -7.6% | -18.999 MiB | 100.0% | 251 MiB → 232 MiB | 503 → 465 | `grow()` | `java.util.ArrayList` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |             Size |   Samples | Caller                               | Location                                                  |
| -----: | ----------: | -----: | ---------------: | --------: | ------------------------------------ | --------------------------------------------------------- |
| -13.9% | -15.499 MiB | 100.0% | 111 MiB → 96 MiB | 223 → 192 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |       Delta |      % |                Size |   Samples | Caller                     | Location                                                   |
| -----: | ----------: | -----: | ------------------: | --------: | -------------------------- | ---------------------------------------------------------- |
| -17.4% | -13.999 MiB | 100.0% | 80.5 MiB → 66.5 MiB | 161 → 133 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |      Delta |      % |              Size |   Samples | Caller      | Location                                               |
| -----: | ---------: | -----: | ----------------: | --------: | ----------- | ------------------------------------------------------ |
|  -5.0% | -7.499 MiB | 100.0% | 149 MiB → 141 MiB | 298 → 283 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `valueOf(double)` (`java.lang.Double`)

| Change |      Delta |             % |              Size |   Samples | Caller                                           | Location                                    |
| -----: | ---------: | ------------: | ----------------: | --------: | ------------------------------------------------ | ------------------------------------------- |
|  -7.4% | -4.499 MiB | 94.5% → 94.1% | 60.5 MiB → 56 MiB | 121 → 112 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `opWrapSink(int, Sink)` (`java.util.stream.IntPipeline$1`)

| Change |      Delta |      % |              Size | Samples | Caller           | Location                            |
| -----: | ---------: | -----: | ----------------: | ------: | ---------------- | ----------------------------------- |
| -25.9% | -3.499 MiB | 100.0% | 13.5 MiB → 10 MiB | 27 → 20 | `wrapSink(Sink)` | `java.util.stream.AbstractPipeline` |

##### `builder(long, IntFunction)` (`java.util.stream.Nodes`)

| Change |      Delta |      % |              Size | Samples | Caller                               | Location                             |
| -----: | ---------: | -----: | ----------------: | ------: | ------------------------------------ | ------------------------------------ |
| -12.0% | -1.499 MiB | 100.0% | 12.5 MiB → 11 MiB | 25 → 22 | `makeNodeBuilder(long, IntFunction)` | `java.util.stream.ReferencePipeline` |

##### `mapToObj(DoubleFunction, int)` (`java.util.stream.DoublePipeline`)

| Change |      Delta |      % |            Size | Samples | Caller    | Location                          |
| -----: | ---------: | -----: | --------------: | ------: | --------- | --------------------------------- |
| -75.0% | -1.499 MiB | 100.0% | 2 MiB → 512 KiB |   4 → 1 | `boxed()` | `java.util.stream.DoublePipeline` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |          Delta |      % |               Size |   Samples | Caller                  | Location                                                               |
| -----: | -------------: | -----: | -----------------: | --------: | ----------------------- | ---------------------------------------------------------------------- |
|  -1.0% | -1,023.998 KiB | 100.0% | 100 MiB → 99.5 MiB | 201 → 199 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a7000` |

##### `opWrapSink(int, Sink)` (`java.util.stream.DoublePipeline$1`)

|  Change |          Delta |             % |        Size | Samples | Caller           | Location                            |
| ------: | -------------: | ------------: | ----------: | ------: | ---------------- | ----------------------------------- |
| removed | -1,023.998 KiB | 100.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `wrapSink(Sink)` | `java.util.stream.AbstractPipeline` |

##### `putVal(Object, Object, boolean)` (`java.util.concurrent.ConcurrentHashMap`)

|  Change |        Delta |             % |          Size | Samples | Caller                | Location                                 |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------- | ---------------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `put(Object, Object)` | `java.util.concurrent.ConcurrentHashMap` |

##### `getEntry(String)` (`sun.net.www.protocol.jar.URLJarFile`)

|  Change |        Delta |             % |          Size | Samples | Caller      | Location                                    |
| ------: | -----------: | ------------: | ------------: | ------: | ----------- | ------------------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `connect()` | `sun.net.www.protocol.jar.JarURLConnection` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

|  Change |        Delta |             % |          Size | Samples | Caller                                                    | Location                |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------------------------------------------- | ----------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |        Delta |             % |          Size | Samples | Caller           | Location                                   |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------- | ------------------------------------------ |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `allocateUninitializedArray(Class, int)` (`jdk.internal.misc.Unsafe`)

|  Change |        Delta |             % |          Size | Samples | Caller           | Location                       |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------- | ------------------------------ |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `newArray(long)` | `java.lang.StringConcatHelper` |

##### `enlarge(int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

|  Change |        Delta |             % |          Size | Samples | Caller            | Location                                    |
| ------: | -----------: | ------------: | ------------: | ------: | ----------------- | ------------------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `putUTF8(String)` | `jdk.internal.org.objectweb.asm.ByteVector` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|  Change |        Delta |             % |          Size | Samples | Caller                                          | Location                       |
| ------: | -----------: | ------------: | ------------: | ------: | ----------------------------------------------- | ------------------------------ |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `<init>(int)` (`java.io.ByteArrayOutputStream`)

|  Change |        Delta |             % |          Size | Samples | Caller     | Location                        |
| ------: | -----------: | ------------: | ------------: | ------: | ---------- | ------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `<init>()` | `java.io.ByteArrayOutputStream` |

##### `getProtectionDomain(CodeSource)` (`java.security.SecureClassLoader`)

|  Change |        Delta |             % |          Size | Samples | Caller                                              | Location                          |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------------------------------------- | --------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `defineClass(String, byte[], int, int, CodeSource)` | `java.security.SecureClassLoader` |

##### `keySet()` (`java.util.HashMap`)

|  Change |        Delta |             % |          Size | Samples | Caller                         | Location                                    |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------ | ------------------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

### Total size

#### Regressions

Functions with the largest increase in bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

| Change |       Delta |             % |                Size |         Samples | Function                                                                                                               | Location                                                                              |
| -----: | ----------: | ------------: | ------------------: | --------------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|    new | +188.46 MiB |   0.0% → 0.5% |       0 B → 188 MiB |         0 → 371 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                                           |
|  +0.9% | +57.999 MiB | 17.3% → 17.5% | 6.39 GiB → 6.44 GiB | 13,083 → 13,199 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +0.7% | +57.497 MiB | 20.3% → 20.5% | 7.52 GiB → 7.57 GiB | 15,078 → 15,194 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|  +0.7% | +57.497 MiB | 20.3% → 20.5% | 7.52 GiB → 7.57 GiB | 15,078 → 15,194 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a2bd0`                |
|  +0.7% | +57.497 MiB | 20.3% → 20.5% | 7.52 GiB → 7.57 GiB | 15,078 → 15,194 | `exec()`                                                                                                               | `java.util.concurrent.ForkJoinTask$AdaptedCallable`                                   |
| +14.9% | +42.999 MiB |   0.8% → 0.9% |   288 MiB → 331 MiB |       577 → 663 | `computeIfAbsent(Object, Function)`                                                                                    | `java.util.HashMap`                                                                   |
|  +0.2% | +42.524 MiB | 52.4% → 52.7% |            19.4 GiB | 39,336 → 39,421 | `grow(int)`                                                                                                            | `java.util.ArrayList`                                                                 |
|  +0.4% | +34.497 MiB | 20.9% → 21.0% | 7.72 GiB → 7.76 GiB | 15,499 → 15,569 | `invoke()`                                                                                                             | `java.util.concurrent.ForkJoinTask`                                                   |
| +22.1% | +22.999 MiB |          0.3% |   104 MiB → 127 MiB |       208 → 254 | `resize()`                                                                                                             | `java.util.HashMap`                                                                   |
|  +6.0% | +14.999 MiB |          0.7% |   250 MiB → 265 MiB |       501 → 531 | `newNode(int, Object, Object, HashMap$Node)`                                                                           | `java.util.HashMap`                                                                   |
| +14.6% | +14.999 MiB |          0.3% |   103 MiB → 118 MiB |       206 → 236 | `lambda$collectClusters$0(Double[])`                                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| +14.6% | +14.999 MiB |          0.3% |   103 MiB → 118 MiB |       206 → 236 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000078011a3940` |
|  +7.2% | +12.026 MiB |   0.4% → 0.5% |   167 MiB → 179 MiB |       330 → 353 | `setUpBeforeAll(BenchmarkContext)`                                                                                     | `org.renaissance.jdk.concurrent.FjKmeans`                                             |
|  +6.5% | +11.026 MiB |          0.5% |   170 MiB → 181 MiB |       336 → 357 | `copyInto(Sink, Spliterator)`                                                                                          | `java.util.stream.AbstractPipeline`                                                   |
|  +6.6% | +11.026 MiB |   0.4% → 0.5% |   167 MiB → 178 MiB |       329 → 350 | `evaluateSequential(PipelineHelper, Spliterator)`                                                                      | `java.util.stream.ReduceOps$ReduceOp`                                                 |
|  +6.6% | +11.026 MiB |   0.4% → 0.5% |   167 MiB → 178 MiB |       329 → 350 | `evaluate(TerminalOp)`                                                                                                 | `java.util.stream.AbstractPipeline`                                                   |
|  +6.6% | +11.026 MiB |   0.4% → 0.5% |   167 MiB → 178 MiB |       329 → 350 | `collect(Collector)`                                                                                                   | `java.util.stream.ReferencePipeline`                                                  |
| +35.5% | +10.999 MiB |          0.1% |     31 MiB → 42 MiB |         62 → 84 | `range(int, int)`                                                                                                      | `java.util.stream.IntStream`                                                          |
|  +5.8% | +10.026 MiB |          0.5% |   171 MiB → 181 MiB |       338 → 357 | `wrapAndCopyInto(Sink, Spliterator)`                                                                                   | `java.util.stream.AbstractPipeline`                                                   |
|  +5.6% |  +9.999 MiB |          0.5% |   178 MiB → 188 MiB |       357 → 377 | `putMapEntries(Map, boolean)`                                                                                          | `java.util.HashMap`                                                                   |

##### Standard library

| Change |       Delta |             % |                Size |         Samples | Function                                          | Location                                             |
| -----: | ----------: | ------------: | ------------------: | --------------: | ------------------------------------------------- | ---------------------------------------------------- |
|  +0.7% | +57.497 MiB | 20.3% → 20.5% | 7.52 GiB → 7.57 GiB | 15,078 → 15,194 | `exec()`                                          | `java.util.concurrent.ForkJoinTask$AdaptedCallable`  |
| +14.9% | +42.999 MiB |   0.8% → 0.9% |   288 MiB → 331 MiB |       577 → 663 | `computeIfAbsent(Object, Function)`               | `java.util.HashMap`                                  |
|  +0.2% | +42.524 MiB | 52.4% → 52.7% |            19.4 GiB | 39,336 → 39,421 | `grow(int)`                                       | `java.util.ArrayList`                                |
|  +0.4% | +34.497 MiB | 20.9% → 21.0% | 7.72 GiB → 7.76 GiB | 15,499 → 15,569 | `invoke()`                                        | `java.util.concurrent.ForkJoinTask`                  |
| +22.1% | +22.999 MiB |          0.3% |   104 MiB → 127 MiB |       208 → 254 | `resize()`                                        | `java.util.HashMap`                                  |
|  +6.0% | +14.999 MiB |          0.7% |   250 MiB → 265 MiB |       501 → 531 | `newNode(int, Object, Object, HashMap$Node)`      | `java.util.HashMap`                                  |
|  +6.5% | +11.026 MiB |          0.5% |   170 MiB → 181 MiB |       336 → 357 | `copyInto(Sink, Spliterator)`                     | `java.util.stream.AbstractPipeline`                  |
|  +6.6% | +11.026 MiB |   0.4% → 0.5% |   167 MiB → 178 MiB |       329 → 350 | `evaluateSequential(PipelineHelper, Spliterator)` | `java.util.stream.ReduceOps$ReduceOp`                |
|  +6.6% | +11.026 MiB |   0.4% → 0.5% |   167 MiB → 178 MiB |       329 → 350 | `evaluate(TerminalOp)`                            | `java.util.stream.AbstractPipeline`                  |
|  +6.6% | +11.026 MiB |   0.4% → 0.5% |   167 MiB → 178 MiB |       329 → 350 | `collect(Collector)`                              | `java.util.stream.ReferencePipeline`                 |
| +35.5% | +10.999 MiB |          0.1% |     31 MiB → 42 MiB |         62 → 84 | `range(int, int)`                                 | `java.util.stream.IntStream`                         |
|  +5.8% | +10.026 MiB |          0.5% |   171 MiB → 181 MiB |       338 → 357 | `wrapAndCopyInto(Sink, Spliterator)`              | `java.util.stream.AbstractPipeline`                  |
|  +5.6% |  +9.999 MiB |          0.5% |   178 MiB → 188 MiB |       357 → 377 | `putMapEntries(Map, boolean)`                     | `java.util.HashMap`                                  |
|  +5.6% |  +9.999 MiB |          0.5% |   178 MiB → 188 MiB |       357 → 377 | `<init>(Map)`                                     | `java.util.HashMap`                                  |
|  +5.7% |  +9.499 MiB |   0.4% → 0.5% |   167 MiB → 177 MiB |       335 → 354 | `putVal(int, Object, Object, boolean, boolean)`   | `java.util.HashMap`                                  |
|  +4.5% |  +9.026 MiB |   0.5% → 0.6% |   199 MiB → 208 MiB |       393 → 410 | `invokeStatic(Object, Object)`                    | `java.lang.invoke.LambdaForm$DMH.0x0000007801004800` |
|  +4.5% |  +9.026 MiB |   0.5% → 0.6% |   199 MiB → 208 MiB |       393 → 410 | `invoke(Object, Object, Object)`                  | `java.lang.invoke.LambdaForm$MH.0x0000007801009800`  |
|  +4.5% |  +9.026 MiB |   0.5% → 0.6% |   199 MiB → 208 MiB |       393 → 410 | `invokeExact_MT(Object, Object, Object, Object)`  | `java.lang.invoke.Invokers$Holder`                   |
|  +4.5% |  +9.026 MiB |   0.5% → 0.6% |   199 MiB → 208 MiB |       393 → 410 | `invokeImpl(Object, Object[])`                    | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  +4.5% |  +9.026 MiB |   0.5% → 0.6% |   199 MiB → 208 MiB |       393 → 410 | `invoke(Object, Object[])`                        | `jdk.internal.reflect.DirectMethodHandleAccessor`    |

##### Ours

|  Change |       Delta |             % |                Size |         Samples | Function                                                                                                               | Location                                                                                      |
| ------: | ----------: | ------------: | ------------------: | --------------: | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
|     new | +188.46 MiB |   0.0% → 0.5% |       0 B → 188 MiB |         0 → 371 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                                                   |
|   +0.9% | +57.999 MiB | 17.3% → 17.5% | 6.39 GiB → 6.44 GiB | 13,083 → 13,199 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                    |
|   +0.7% | +57.497 MiB | 20.3% → 20.5% | 7.52 GiB → 7.57 GiB | 15,078 → 15,194 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                                                   |
|   +0.7% | +57.497 MiB | 20.3% → 20.5% | 7.52 GiB → 7.57 GiB | 15,078 → 15,194 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a2bd0`                        |
|  +14.6% | +14.999 MiB |          0.3% |   103 MiB → 118 MiB |       206 → 236 | `lambda$collectClusters$0(Double[])`                                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                    |
|  +14.6% | +14.999 MiB |          0.3% |   103 MiB → 118 MiB |       206 → 236 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000078011a3940`         |
|   +7.2% | +12.026 MiB |   0.4% → 0.5% |   167 MiB → 179 MiB |       330 → 353 | `setUpBeforeAll(BenchmarkContext)`                                                                                     | `org.renaissance.jdk.concurrent.FjKmeans`                                                     |
|   +4.5% |  +9.026 MiB |   0.5% → 0.6% |   199 MiB → 208 MiB |       394 → 411 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                                               |
|   +4.5% |  +9.026 MiB |   0.5% → 0.6% |   199 MiB → 208 MiB |       393 → 410 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                                                    |
| +600.0% |  +8.999 MiB |         <0.1% |  1.5 MiB → 10.5 MiB |          3 → 21 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda`                                             |
|   +4.3% |  +8.526 MiB |   0.5% → 0.6% |   200 MiB → 209 MiB |       396 → 412 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                                               |
|   +4.3% |  +8.526 MiB |   0.5% → 0.6% |   200 MiB → 209 MiB |       396 → 412 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                                               |
|     new |  +7.999 MiB |  0.0% → <0.1% |         0 B → 8 MiB |          0 → 16 | `rowToArray$1(Map)`                                                                                                    | `org.renaissance.jdk.concurrent.FjKmeans`                                                     |
|     new |  +7.999 MiB |  0.0% → <0.1% |         0 B → 8 MiB |          0 → 16 | `setUpBeforeAll$$anonfun$1(Map)`                                                                                       | `org.renaissance.jdk.concurrent.FjKmeans`                                                     |
|     new |  +7.999 MiB |  0.0% → <0.1% |         0 B → 8 MiB |          0 → 16 | `lambda$toCsvRows$2(String[], Function, String)`                                                                       | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`                            |
|     new |  +7.999 MiB |  0.0% → <0.1% |         0 B → 8 MiB |          0 → 16 | `apply(Object)`                                                                                                        | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter$$Lambda.0x0000007801123bf8` |
|     new |  +7.999 MiB |  0.0% → <0.1% |         0 B → 8 MiB |          0 → 16 | `toCsvRows(Function)`                                                                                                  | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`                            |
|   +3.9% |  +7.526 MiB |          0.5% |   195 MiB → 203 MiB |       386 → 400 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                                                   |
|   +3.9% |  +7.026 MiB |          0.5% |   181 MiB → 188 MiB |       358 → 371 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000780111f1b8`                        |
|   +3.6% |  +6.526 MiB |          0.5% |   182 MiB → 188 MiB |       359 → 371 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                                                   |

#### Improvements

Functions with the largest decrease in bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |        Delta |             % |                Size |         Samples | Function                                                                                                               | Location                                                               |
| ------: | -----------: | ------------: | ------------------: | --------------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|   -1.0% | -288.999 MiB | 79.2% → 78.6% |   29.3 GiB → 29 GiB | 59,907 → 59,329 | `tryRemoveAndExec(ForkJoinTask, boolean)`                                                                              | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
|   -0.9% | -287.499 MiB | 80.1% → 79.6% | 29.6 GiB → 29.3 GiB | 60,611 → 60,036 | `awaitDone(int, long)`                                                                                                 | `java.util.concurrent.ForkJoinTask`                                    |
|   -0.9% | -287.499 MiB | 80.1% → 79.6% | 29.6 GiB → 29.3 GiB | 60,611 → 60,036 | `join()`                                                                                                               | `java.util.concurrent.ForkJoinTask`                                    |
| removed | -181.434 MiB |   0.5% → 0.0% |       181 MiB → 0 B |         358 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|   -3.0% | -178.499 MiB | 16.0% → 15.5% | 5.89 GiB → 5.72 GiB | 12,072 → 11,715 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`                                                              | `java.util.concurrent.ForkJoinPool`                                    |
|   -0.3% | -120.502 MiB | 99.5% → 99.4% | 36.8 GiB → 36.6 GiB | 74,966 → 74,726 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|   -0.3% | -120.502 MiB | 99.5% → 99.4% | 36.8 GiB → 36.6 GiB | 74,966 → 74,726 | `exec()`                                                                                                               | `java.util.concurrent.RecursiveTask`                                   |
|   -0.3% | -119.002 MiB | 99.5% → 99.4% | 36.8 GiB → 36.6 GiB | 74,969 → 74,732 | `doExec()`                                                                                                             | `java.util.concurrent.ForkJoinTask`                                    |
|   -0.3% | -119.002 MiB | 99.5% → 99.4% | 36.8 GiB → 36.6 GiB | 74,969 → 74,732 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`                                                                   | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
|   -0.3% | -119.002 MiB | 99.5% → 99.4% | 36.8 GiB → 36.6 GiB | 74,969 → 74,732 | `scan(ForkJoinPool$WorkQueue, int, int)`                                                                               | `java.util.concurrent.ForkJoinPool`                                    |
|   -0.3% | -119.002 MiB | 99.5% → 99.4% | 36.8 GiB → 36.6 GiB | 74,969 → 74,732 | `runWorker(ForkJoinPool$WorkQueue)`                                                                                    | `java.util.concurrent.ForkJoinPool`                                    |
|   -0.3% | -119.002 MiB | 99.5% → 99.4% | 36.8 GiB → 36.6 GiB | 74,969 → 74,732 | `run()`                                                                                                                | `java.util.concurrent.ForkJoinWorkerThread`                            |
|   -0.6% |  -89.499 MiB | 39.0% → 38.9% | 14.4 GiB → 14.3 GiB | 29,514 → 29,335 | `toArray()`                                                                                                            | `java.util.ArrayList`                                                  |
|   -4.7% |  -82.499 MiB |   4.6% → 4.4% | 1.71 GiB → 1.63 GiB |   3,497 → 3,332 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -0.2% |  -44.002 MiB | 76.0% → 76.1% |            28.1 GiB | 57,233 → 57,146 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -0.2% |  -44.002 MiB | 76.0% → 76.1% |            28.1 GiB | 57,227 → 57,140 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -0.2% |  -44.002 MiB | 76.0% → 76.1% |            28.1 GiB | 57,227 → 57,140 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -0.6% |  -43.499 MiB |         19.0% | 7.03 GiB → 6.99 GiB | 14,394 → 14,307 | `<init>(Collection)`                                                                                                   | `java.util.ArrayList`                                                  |
|   -0.1% |  -40.502 MiB | 75.3% → 75.5% |            27.8 GiB | 56,710 → 56,630 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -0.1% |  -40.502 MiB | 75.3% → 75.5% |            27.8 GiB | 56,710 → 56,630 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a7000` |

##### Standard library

| Change |        Delta |             % |                Size |         Samples | Function                                                  | Location                                      |
| -----: | -----------: | ------------: | ------------------: | --------------: | --------------------------------------------------------- | --------------------------------------------- |
|  -1.0% | -288.999 MiB | 79.2% → 78.6% |   29.3 GiB → 29 GiB | 59,907 → 59,329 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  -0.9% | -287.499 MiB | 80.1% → 79.6% | 29.6 GiB → 29.3 GiB | 60,611 → 60,036 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`           |
|  -0.9% | -287.499 MiB | 80.1% → 79.6% | 29.6 GiB → 29.3 GiB | 60,611 → 60,036 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`           |
|  -3.0% | -178.499 MiB | 16.0% → 15.5% | 5.89 GiB → 5.72 GiB | 12,072 → 11,715 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
|  -0.3% | -120.502 MiB | 99.5% → 99.4% | 36.8 GiB → 36.6 GiB | 74,966 → 74,726 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`          |
|  -0.3% | -119.002 MiB | 99.5% → 99.4% | 36.8 GiB → 36.6 GiB | 74,969 → 74,732 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`           |
|  -0.3% | -119.002 MiB | 99.5% → 99.4% | 36.8 GiB → 36.6 GiB | 74,969 → 74,732 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  -0.3% | -119.002 MiB | 99.5% → 99.4% | 36.8 GiB → 36.6 GiB | 74,969 → 74,732 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`           |
|  -0.3% | -119.002 MiB | 99.5% → 99.4% | 36.8 GiB → 36.6 GiB | 74,969 → 74,732 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`           |
|  -0.3% | -119.002 MiB | 99.5% → 99.4% | 36.8 GiB → 36.6 GiB | 74,969 → 74,732 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`   |
|  -0.6% |  -89.499 MiB | 39.0% → 38.9% | 14.4 GiB → 14.3 GiB | 29,514 → 29,335 | `toArray()`                                               | `java.util.ArrayList`                         |
|  -0.6% |  -43.499 MiB |         19.0% | 7.03 GiB → 6.99 GiB | 14,394 → 14,307 | `<init>(Collection)`                                      | `java.util.ArrayList`                         |
|  -0.1% |  -40.002 MiB | 75.3% → 75.5% |            27.8 GiB | 56,713 → 56,634 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                           |
|  -0.1% |  -40.002 MiB | 75.3% → 75.5% |            27.8 GiB | 56,713 → 56,634 | `forEach(BiConsumer)`                                     | `java.util.HashMap`                           |
|  -0.1% |  -27.975 MiB | 90.7% → 90.9% |            33.5 GiB | 68,347 → 68,291 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                            |
|  -7.5% |   -7.999 MiB |          0.3% |    107 MiB → 99 MiB |       214 → 198 | `evaluate(Spliterator, boolean, IntFunction)`             | `java.util.stream.AbstractPipeline`           |
|  -7.5% |   -7.999 MiB |          0.3% |    107 MiB → 99 MiB |       214 → 198 | `evaluateToArrayNode(IntFunction)`                        | `java.util.stream.AbstractPipeline`           |
|  -7.5% |   -7.999 MiB |          0.3% |    107 MiB → 99 MiB |       214 → 198 | `toArray(IntFunction)`                                    | `java.util.stream.ReferencePipeline`          |
|  -0.1% |   -7.473 MiB |         16.3% | 6.03 GiB → 6.02 GiB | 12,341 → 12,325 | `grow()`                                                  | `java.util.ArrayList`                         |
|  -0.1% |   -7.473 MiB |         16.3% | 6.03 GiB → 6.02 GiB | 12,341 → 12,325 | `add(Object, Object[], int)`                              | `java.util.ArrayList`                         |

##### Ours

|  Change |        Delta |             % |                Size |         Samples | Function                                                                                                               | Location                                                               |
| ------: | -----------: | ------------: | ------------------: | --------------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| removed | -181.434 MiB |   0.5% → 0.0% |       181 MiB → 0 B |         358 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|   -0.3% | -120.502 MiB | 99.5% → 99.4% | 36.8 GiB → 36.6 GiB | 74,966 → 74,726 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|   -4.7% |  -82.499 MiB |   4.6% → 4.4% | 1.71 GiB → 1.63 GiB |   3,497 → 3,332 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -0.2% |  -44.002 MiB | 76.0% → 76.1% |            28.1 GiB | 57,233 → 57,146 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -0.2% |  -44.002 MiB | 76.0% → 76.1% |            28.1 GiB | 57,227 → 57,140 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -0.2% |  -44.002 MiB | 76.0% → 76.1% |            28.1 GiB | 57,227 → 57,140 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -0.1% |  -40.502 MiB | 75.3% → 75.5% |            27.8 GiB | 56,710 → 56,630 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -0.1% |  -40.502 MiB | 75.3% → 75.5% |            27.8 GiB | 56,710 → 56,630 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a7000` |
|   -0.1% |  -40.002 MiB | 75.3% → 75.5% |            27.8 GiB | 56,713 → 56,634 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -0.1% |  -40.002 MiB | 75.3% → 75.5% |            27.8 GiB | 56,713 → 56,634 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a3b90` |
|  -16.0% |  -31.499 MiB |   0.5% → 0.4% |   197 MiB → 165 MiB |       394 → 331 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -12.3% |  -29.499 MiB |          0.6% |   239 MiB → 209 MiB |       478 → 419 | `average(List)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -11.0% |  -27.999 MiB |   0.7% → 0.6% |   255 MiB → 227 MiB |       511 → 455 | `computeClusterAverages()`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -11.0% |  -27.999 MiB |   0.7% → 0.6% |   255 MiB → 227 MiB |       511 → 455 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   -0.3% |  -24.499 MiB |         21.9% |  8.1 GiB → 8.07 GiB | 16,580 → 16,531 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -13.9% |  -15.499 MiB |          0.3% |    111 MiB → 96 MiB |       223 → 192 | `add(double[], double[])`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -13.9% |  -15.499 MiB |          0.3% |    111 MiB → 96 MiB |       223 → 192 | `combineResults(double[], double[])`                                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -13.9% |  -15.499 MiB |          0.3% |    111 MiB → 96 MiB |       223 → 192 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -77.8% |  -10.499 MiB |         <0.1% |    13.5 MiB → 3 MiB |          27 → 6 | `run(BenchmarkContext)`                                                                                                | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|   -5.0% |   -7.499 MiB |          0.4% |   149 MiB → 141 MiB |       298 → 283 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |

#### Callers

Callers with the largest change in contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |       Delta |             % |          Size | Samples | Caller              | Location                                                               |
| -----: | ----------: | ------------: | ------------: | ------: | ------------------- | ---------------------------------------------------------------------- |
|    new | +188.46 MiB | 0.0% → 100.0% | 0 B → 188 MiB | 0 → 371 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000780111f1b8` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |                Size |         Samples | Caller              | Location                                                   |
| -----: | ----------: | -----: | ------------------: | --------------: | ------------------- | ---------------------------------------------------------- |
|  +0.9% | +57.999 MiB | 100.0% | 6.39 GiB → 6.44 GiB | 13,083 → 13,199 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |       Delta |      % |                Size |         Samples | Caller   | Location                                                               |
| -----: | ----------: | -----: | ------------------: | --------------: | -------- | ---------------------------------------------------------------------- |
|  +0.7% | +57.497 MiB | 100.0% | 7.52 GiB → 7.57 GiB | 15,078 → 15,194 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a2bd0` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a2bd0`)

| Change |       Delta |      % |                Size |         Samples | Caller   | Location                                            |
| -----: | ----------: | -----: | ------------------: | --------------: | -------- | --------------------------------------------------- |
|  +0.7% | +57.497 MiB | 100.0% | 7.52 GiB → 7.57 GiB | 15,078 → 15,194 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

| Change |       Delta |      % |                Size |         Samples | Caller     | Location                            |
| -----: | ----------: | -----: | ------------------: | --------------: | ---------- | ----------------------------------- |
|  +0.7% | +57.497 MiB | 100.0% | 7.52 GiB → 7.57 GiB | 15,078 → 15,194 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

| Change |       Delta |      % |              Size |   Samples | Caller                   | Location                                                   |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------------ | ---------------------------------------------------------- |
| +14.9% | +42.999 MiB | 100.0% | 288 MiB → 331 MiB | 577 → 663 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |       Delta |             % |                Size |         Samples | Caller               | Location              |
| -----: | ----------: | ------------: | ------------------: | --------------: | -------------------- | --------------------- |
|  +0.4% | +49.997 MiB | 68.9% → 69.0% | 13.3 GiB → 13.4 GiB | 26,995 → 27,096 | `addAll(Collection)` | `java.util.ArrayList` |
|  -0.1% |  -7.473 MiB | 31.1% → 31.0% | 6.03 GiB → 6.02 GiB | 12,341 → 12,325 | `grow()`             | `java.util.ArrayList` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

| Change |       Delta |             % |                Size |         Samples | Caller                         | Location                                               |
| -----: | ----------: | ------------: | ------------------: | --------------: | ------------------------------ | ------------------------------------------------------ |
|  +0.7% | +55.997 MiB | 97.3% → 97.6% | 7.51 GiB → 7.57 GiB | 15,075 → 15,188 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans`            |
| -12.4% | -29.499 MiB |   3.0% → 2.6% |   237 MiB → 208 MiB |       475 → 416 | `average(List)`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `resize()` (`java.util.HashMap`)

| Change |       Delta |             % |                Size |   Samples | Caller                              | Location            |
| -----: | ----------: | ------------: | ------------------: | --------: | ----------------------------------- | ------------------- |
| +39.3% | +22.999 MiB | 56.3% → 64.2% | 58.5 MiB → 81.5 MiB | 117 → 163 | `computeIfAbsent(Object, Function)` | `java.util.HashMap` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

|  Change |        Delta |             % |              Size |   Samples | Caller                                          | Location            |
| ------: | -----------: | ------------: | ----------------: | --------: | ----------------------------------------------- | ------------------- |
|   +7.7% |   +9.499 MiB | 49.1% → 49.9% | 123 MiB → 132 MiB | 246 → 265 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |
|   +3.9% |   +4.999 MiB | 50.7% → 49.7% | 127 MiB → 132 MiB | 254 → 264 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap` |
| +100.0% | +511.999 KiB |   0.2% → 0.4% |   512 KiB → 1 MiB |     1 → 2 | `merge(Object, Object, BiFunction)`             | `java.util.HashMap` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |              Size |   Samples | Caller          | Location                                                                              |
| -----: | ----------: | -----: | ----------------: | --------: | --------------- | ------------------------------------------------------------------------------------- |
| +14.6% | +14.999 MiB | 100.0% | 103 MiB → 118 MiB | 206 → 236 | `apply(Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000078011a3940` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000078011a3940`)

| Change |       Delta |      % |              Size |   Samples | Caller                              | Location            |
| -----: | ----------: | -----: | ----------------: | --------: | ----------------------------------- | ------------------- |
| +14.6% | +14.999 MiB | 100.0% | 103 MiB → 118 MiB | 206 → 236 | `computeIfAbsent(Object, Function)` | `java.util.HashMap` |

##### `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |       Delta |      % |              Size |   Samples | Caller               | Location                                  |
| -----: | ----------: | -----: | ----------------: | --------: | -------------------- | ----------------------------------------- |
|  +7.2% | +12.026 MiB | 100.0% | 167 MiB → 179 MiB | 330 → 353 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

| Change |       Delta |      % |              Size |   Samples | Caller                               | Location                            |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------------------------ | ----------------------------------- |
|  +6.5% | +11.026 MiB | 100.0% | 170 MiB → 181 MiB | 336 → 357 | `wrapAndCopyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`)

| Change |       Delta |      % |              Size |   Samples | Caller                 | Location                            |
| -----: | ----------: | -----: | ----------------: | --------: | ---------------------- | ----------------------------------- |
|  +6.6% | +11.026 MiB | 100.0% | 167 MiB → 178 MiB | 329 → 350 | `evaluate(TerminalOp)` | `java.util.stream.AbstractPipeline` |

##### `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`)

| Change |       Delta |      % |              Size |   Samples | Caller               | Location                             |
| -----: | ----------: | -----: | ----------------: | --------: | -------------------- | ------------------------------------ |
|  +6.6% | +11.026 MiB | 100.0% | 167 MiB → 178 MiB | 329 → 350 | `collect(Collector)` | `java.util.stream.ReferencePipeline` |

##### `collect(Collector)` (`java.util.stream.ReferencePipeline`)

| Change |      Delta |              % |              Size |   Samples | Caller                        | Location                                                           |
| -----: | ---------: | -------------: | ----------------: | --------: | ----------------------------- | ------------------------------------------------------------------ |
|    new | +7.999 MiB |    0.0% → 4.5% |       0 B → 8 MiB |    0 → 16 | `toCsvRows(Function)`         | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter` |
|  +1.8% | +3.026 MiB | 100.0% → 95.5% | 167 MiB → 170 MiB | 329 → 334 | `generateData(int, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                        |

##### `range(int, int)` (`java.util.stream.IntStream`)

| Change |       Delta |      % |            Size | Samples | Caller                                           | Location                                    |
| -----: | ----------: | -----: | --------------: | ------: | ------------------------------------------------ | ------------------------------------------- |
| +35.5% | +10.999 MiB | 100.0% | 31 MiB → 42 MiB | 62 → 84 | `lambda$generateData$5(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `wrapAndCopyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

| Change |       Delta |             % |                Size |   Samples | Caller                                            | Location                              |
| -----: | ----------: | ------------: | ------------------: | --------: | ------------------------------------------------- | ------------------------------------- |
|  +6.6% | +11.026 MiB | 97.4% → 98.1% |   167 MiB → 178 MiB | 329 → 350 | `evaluateSequential(PipelineHelper, Spliterator)` | `java.util.stream.ReduceOps$ReduceOp` |
| -11.5% |  -8.999 MiB | 45.8% → 38.3% | 78.5 MiB → 69.5 MiB | 157 → 139 | `evaluate(Spliterator, boolean, IntFunction)`     | `java.util.stream.AbstractPipeline`   |

##### `putMapEntries(Map, boolean)` (`java.util.HashMap`)

| Change |      Delta |      % |              Size |   Samples | Caller        | Location            |
| -----: | ---------: | -----: | ----------------: | --------: | ------------- | ------------------- |
|  +5.6% | +9.999 MiB | 100.0% | 178 MiB → 188 MiB | 357 → 377 | `<init>(Map)` | `java.util.HashMap` |

##### `<init>(Map)` (`java.util.HashMap`)

| Change |      Delta |      % |              Size |   Samples | Caller            | Location                                    |
| -----: | ---------: | -----: | ----------------: | --------: | ----------------- | ------------------------------------------- |
|  +5.6% | +9.999 MiB | 100.0% | 178 MiB → 188 MiB | 357 → 377 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

| Change |        Delta |             % |              Size |   Samples | Caller                        | Location            |
| -----: | -----------: | ------------: | ----------------: | --------: | ----------------------------- | ------------------- |
|  +5.4% |   +8.999 MiB | 98.8% → 98.6% | 165 MiB → 174 MiB | 331 → 349 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |
| +25.0% | +511.999 KiB |   1.2% → 1.4% |   2 MiB → 2.5 MiB |     4 → 5 | `put(Object, Object)`         | `java.util.HashMap` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007801004800`)

| Change |      Delta |      % |              Size |   Samples | Caller                           | Location                                            |
| -----: | ---------: | -----: | ----------------: | --------: | -------------------------------- | --------------------------------------------------- |
|  +4.5% | +9.026 MiB | 100.0% | 199 MiB → 208 MiB | 393 → 410 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007801009800` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007801009800`)

| Change |      Delta |      % |              Size |   Samples | Caller                                           | Location                           |
| -----: | ---------: | -----: | ----------------: | --------: | ------------------------------------------------ | ---------------------------------- |
|  +4.5% | +9.026 MiB | 100.0% | 199 MiB → 208 MiB | 393 → 410 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change |      Delta |      % |              Size |   Samples | Caller                         | Location                                          |
| -----: | ---------: | -----: | ----------------: | --------: | ------------------------------ | ------------------------------------------------- |
|  +4.5% | +9.026 MiB | 100.0% | 199 MiB → 208 MiB | 393 → 410 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |      Delta |      % |              Size |   Samples | Caller                     | Location                                          |
| -----: | ---------: | -----: | ----------------: | --------: | -------------------------- | ------------------------------------------------- |
|  +4.5% | +9.026 MiB | 100.0% | 199 MiB → 208 MiB | 393 → 410 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |      Delta |      % |              Size |   Samples | Caller                     | Location                   |
| -----: | ---------: | -----: | ----------------: | --------: | -------------------------- | -------------------------- |
|  +4.5% | +9.026 MiB | 100.0% | 199 MiB → 208 MiB | 393 → 410 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

| Change |      Delta |      % |              Size |   Samples | Caller                                 | Location                        |
| -----: | ---------: | -----: | ----------------: | --------: | -------------------------------------- | ------------------------------- |
|  +4.5% | +9.026 MiB | 100.0% | 199 MiB → 208 MiB | 394 → 411 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

| Change |      Delta |      % |              Size |   Samples | Caller                         | Location                                             |
| -----: | ---------: | -----: | ----------------: | --------: | ------------------------------ | ---------------------------------------------------- |
|  +4.5% | +9.026 MiB | 100.0% | 199 MiB → 208 MiB | 393 → 410 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007801004800` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda`)

| Change |          Delta |              % |              Size | Samples | Caller                                           | Location                                                           |
| -----: | -------------: | -------------: | ----------------: | ------: | ------------------------------------------------ | ------------------------------------------------------------------ |
|    new |     +7.999 MiB |   0.0% → 76.2% |       0 B → 8 MiB |  0 → 16 | `lambda$toCsvRows$2(String[], Function, String)` | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter` |
| +66.7% | +1,023.998 KiB | 100.0% → 23.8% | 1.5 MiB → 2.5 MiB |   3 → 5 | `map(Function1)`                                 | `scala.collection.immutable.Range`                                 |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

| Change |      Delta |      % |              Size |   Samples | Caller           | Location                        |
| -----: | ---------: | -----: | ----------------: | --------: | ---------------- | ------------------------------- |
|  +4.3% | +8.526 MiB | 100.0% | 200 MiB → 209 MiB | 396 → 412 | `main(String[])` | `org.renaissance.core.Launcher` |

##### `rowToArray$1(Map)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |      Delta |             % |        Size | Samples | Caller                           | Location                                  |
| -----: | ---------: | ------------: | ----------: | ------: | -------------------------------- | ----------------------------------------- |
|    new | +7.999 MiB | 0.0% → 100.0% | 0 B → 8 MiB |  0 → 16 | `setUpBeforeAll$$anonfun$1(Map)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `setUpBeforeAll$$anonfun$1(Map)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |      Delta |             % |        Size | Samples | Caller          | Location                                          |
| -----: | ---------: | ------------: | ----------: | ------: | --------------- | ------------------------------------------------- |
|    new | +7.999 MiB | 0.0% → 100.0% | 0 B → 8 MiB |  0 → 16 | `apply(Object)` | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda` |

##### `lambda$toCsvRows$2(String[], Function, String)` (`org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`)

| Change |      Delta |             % |        Size | Samples | Caller          | Location                                                                                      |
| -----: | ---------: | ------------: | ----------: | ------: | --------------- | --------------------------------------------------------------------------------------------- |
|    new | +7.999 MiB | 0.0% → 100.0% | 0 B → 8 MiB |  0 → 16 | `apply(Object)` | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter$$Lambda.0x0000007801123bf8` |

##### `apply(Object)` (`org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter$$Lambda.0x0000007801123bf8`)

| Change |      Delta |             % |        Size | Samples | Caller           | Location                                 |
| -----: | ---------: | ------------: | ----------: | ------: | ---------------- | ---------------------------------------- |
|    new | +7.999 MiB | 0.0% → 100.0% | 0 B → 8 MiB |  0 → 16 | `accept(Object)` | `java.util.stream.ReferencePipeline$3$1` |

##### `toCsvRows(Function)` (`org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`)

| Change |      Delta |             % |        Size | Samples | Caller                             | Location                                  |
| -----: | ---------: | ------------: | ----------: | ------: | ---------------------------------- | ----------------------------------------- |
|    new | +7.999 MiB | 0.0% → 100.0% | 0 B → 8 MiB |  0 → 16 | `setUpBeforeAll(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |      Delta |      % |              Size |   Samples | Caller           | Location                                   |
| -----: | ---------: | -----: | ----------------: | --------: | ---------------- | ------------------------------------------ |
|  +3.9% | +7.526 MiB | 100.0% | 195 MiB → 203 MiB | 386 → 400 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000780111f1b8`)

| Change |      Delta |      % |              Size |   Samples | Caller          | Location                             |
| -----: | ---------: | -----: | ----------------: | --------: | --------------- | ------------------------------------ |
|  +3.9% | +7.026 MiB | 100.0% | 181 MiB → 188 MiB | 358 → 371 | `apply(Object)` | `scala.runtime.function.JProcedure1` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |      Delta |      % |              Size |   Samples | Caller           | Location                                    |
| -----: | ---------: | -----: | ----------------: | --------: | ---------------- | ------------------------------------------- |
|  +3.6% | +6.526 MiB | 100.0% | 182 MiB → 188 MiB | 359 → 371 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite$` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |        Delta |      % |              Size |         Samples | Caller                 | Location                            |
| -----: | -----------: | -----: | ----------------: | --------------: | ---------------------- | ----------------------------------- |
|  -1.0% | -288.999 MiB | 100.0% | 29.3 GiB → 29 GiB | 59,907 → 59,329 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change |        Delta |      % |                Size |         Samples | Caller   | Location                            |
| -----: | -----------: | -----: | ------------------: | --------------: | -------- | ----------------------------------- |
|  -0.9% | -287.499 MiB | 100.0% | 29.6 GiB → 29.3 GiB | 60,611 → 60,036 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change |        Delta |      % |                Size |         Samples | Caller      | Location                                               |
| -----: | -----------: | -----: | ------------------: | --------------: | ----------- | ------------------------------------------------------ |
|  -0.9% | -287.499 MiB | 100.0% | 29.6 GiB → 29.3 GiB | 60,611 → 60,036 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |        Delta |             % |          Size | Samples | Caller              | Location                                                               |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------- | ---------------------------------------------------------------------- |
| removed | -181.434 MiB | 100.0% → 0.0% | 181 MiB → 0 B | 358 → 0 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000f00111f208` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

| Change |        Delta |      % |                Size |         Samples | Caller                 | Location                            |
| -----: | -----------: | -----: | ------------------: | --------------: | ---------------------- | ----------------------------------- |
|  -3.0% | -178.499 MiB | 100.0% | 5.89 GiB → 5.72 GiB | 12,072 → 11,715 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change |        Delta |      % |                Size |         Samples | Caller   | Location                             |
| -----: | -----------: | -----: | ------------------: | --------------: | -------- | ------------------------------------ |
|  -0.3% | -120.502 MiB | 100.0% | 36.8 GiB → 36.6 GiB | 74,966 → 74,726 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change |        Delta |      % |                Size |         Samples | Caller     | Location                            |
| -----: | -----------: | -----: | ------------------: | --------------: | ---------- | ----------------------------------- |
|  -0.3% | -120.502 MiB | 100.0% | 36.8 GiB → 36.6 GiB | 74,966 → 74,726 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

| Change |        Delta |             % |                Size |         Samples | Caller                                                    | Location                                      |
| -----: | -----------: | ------------: | ------------------: | --------------: | --------------------------------------------------------- | --------------------------------------------- |
|  -1.0% | -288.999 MiB | 79.6% → 79.1% |   29.3 GiB → 29 GiB | 59,907 → 59,329 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  -3.0% | -178.499 MiB | 16.0% → 15.6% | 5.89 GiB → 5.72 GiB | 12,072 → 11,715 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
|  -0.3% | -119.002 MiB |        100.0% | 36.8 GiB → 36.6 GiB | 74,969 → 74,732 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  +0.4% |  +34.497 MiB | 21.0% → 21.2% | 7.72 GiB → 7.76 GiB | 15,499 → 15,569 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`           |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |        Delta |      % |                Size |         Samples | Caller                                   | Location                            |
| -----: | -----------: | -----: | ------------------: | --------------: | ---------------------------------------- | ----------------------------------- |
|  -0.3% | -119.002 MiB | 100.0% | 36.8 GiB → 36.6 GiB | 74,969 → 74,732 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

| Change |        Delta |      % |                Size |         Samples | Caller                              | Location                            |
| -----: | -----------: | -----: | ------------------: | --------------: | ----------------------------------- | ----------------------------------- |
|  -0.3% | -119.002 MiB | 100.0% | 36.8 GiB → 36.6 GiB | 74,969 → 74,732 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change |        Delta |      % |                Size |         Samples | Caller  | Location                                    |
| -----: | -----------: | -----: | ------------------: | --------------: | ------- | ------------------------------------------- |
|  -0.3% | -119.002 MiB | 100.0% | 36.8 GiB → 36.6 GiB | 74,969 → 74,732 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `toArray()` (`java.util.ArrayList`)

| Change |       Delta |     % |                Size |         Samples | Caller               | Location              |
| -----: | ----------: | ----: | ------------------: | --------------: | -------------------- | --------------------- |
|  -0.6% | -45.999 MiB | 51.2% | 7.38 GiB → 7.34 GiB | 15,120 → 15,028 | `addAll(Collection)` | `java.util.ArrayList` |
|  -0.6% | -43.499 MiB | 48.8% | 7.03 GiB → 6.99 GiB | 14,394 → 14,307 | `<init>(Collection)` | `java.util.ArrayList` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |                Size |       Samples | Caller              | Location                                                   |
| -----: | ----------: | -----: | ------------------: | ------------: | ------------------- | ---------------------------------------------------------- |
|  -4.7% | -82.499 MiB | 100.0% | 1.71 GiB → 1.63 GiB | 3,497 → 3,332 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |       Delta |      % |     Size |         Samples | Caller                     | Location                                                   |
| -----: | ----------: | -----: | -------: | --------------: | -------------------------- | ---------------------------------------------------------- |
|  -0.2% | -44.002 MiB | 100.0% | 28.1 GiB | 57,227 → 57,140 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |     Size |         Samples | Caller                           | Location                                                   |
| -----: | ----------: | -----: | -------: | --------------: | -------------------------------- | ---------------------------------------------------------- |
|  -0.2% | -44.002 MiB | 100.0% | 28.1 GiB | 57,227 → 57,140 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |     Size |         Samples | Caller      | Location                                               |
| -----: | ----------: | -----: | -------: | --------------: | ----------- | ------------------------------------------------------ |
|  -0.2% | -44.002 MiB | 100.0% | 28.1 GiB | 57,227 → 57,140 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `<init>(Collection)` (`java.util.ArrayList`)

| Change |       Delta |      % |                Size |         Samples | Caller                       | Location                                    |
| -----: | ----------: | -----: | ------------------: | --------------: | ---------------------------- | ------------------------------------------- |
|  -0.6% | -43.499 MiB | 100.0% | 7.03 GiB → 6.99 GiB | 14,394 → 14,307 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |       Delta |      % |     Size |         Samples | Caller                  | Location                                                               |
| -----: | ----------: | -----: | -------: | --------------: | ----------------------- | ---------------------------------------------------------------------- |
|  -0.1% | -40.502 MiB | 100.0% | 27.8 GiB | 56,710 → 56,630 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a7000` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a7000`)

| Change |       Delta |      % |     Size |         Samples | Caller                              | Location            |
| -----: | ----------: | -----: | -------: | --------------: | ----------------------------------- | ------------------- |
|  -0.1% | -40.502 MiB | 100.0% | 27.8 GiB | 56,710 → 56,630 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

| Change |       Delta |      % |     Size |         Samples | Caller                              | Location                                    |
| -----: | ----------: | -----: | -------: | --------------: | ----------------------------------- | ------------------------------------------- |
|  -0.1% | -40.002 MiB | 100.0% | 27.8 GiB | 56,713 → 56,634 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

| Change |       Delta |      % |     Size |         Samples | Caller            | Location                                    |
| -----: | ----------: | -----: | -------: | --------------: | ----------------- | ------------------------------------------- |
|  -0.1% | -40.002 MiB | 100.0% | 27.8 GiB | 56,713 → 56,634 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |       Delta |             % |                Size |         Samples | Caller      | Location              |
| -----: | ----------: | ------------: | ------------------: | --------------: | ----------- | --------------------- |
|  -0.6% | -89.499 MiB | 43.0% → 42.8% | 14.4 GiB → 14.3 GiB | 29,514 → 29,335 | `toArray()` | `java.util.ArrayList` |
|  +0.3% | +61.523 MiB | 57.0% → 57.2% | 19.1 GiB → 19.2 GiB | 38,833 → 38,956 | `grow(int)` | `java.util.ArrayList` |

##### `evaluate(Spliterator, boolean, IntFunction)` (`java.util.stream.AbstractPipeline`)

| Change |      Delta |      % |             Size |   Samples | Caller                             | Location                            |
| -----: | ---------: | -----: | ---------------: | --------: | ---------------------------------- | ----------------------------------- |
|  -7.5% | -7.999 MiB | 100.0% | 107 MiB → 99 MiB | 214 → 198 | `evaluateToArrayNode(IntFunction)` | `java.util.stream.AbstractPipeline` |

##### `evaluateToArrayNode(IntFunction)` (`java.util.stream.AbstractPipeline`)

| Change |      Delta |      % |             Size |   Samples | Caller                 | Location                             |
| -----: | ---------: | -----: | ---------------: | --------: | ---------------------- | ------------------------------------ |
|  -7.5% | -7.999 MiB | 100.0% | 107 MiB → 99 MiB | 214 → 198 | `toArray(IntFunction)` | `java.util.stream.ReferencePipeline` |

##### `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`)

| Change |          Delta |             % |             Size |   Samples | Caller                                           | Location                                               |
| -----: | -------------: | ------------: | ---------------: | --------: | ------------------------------------------------ | ------------------------------------------------------ |
|  -8.8% |     -8.999 MiB | 95.3% → 93.9% | 102 MiB → 93 MiB | 204 → 186 | `lambda$generateData$5(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans`            |
| +20.0% | +1,023.998 KiB |   4.7% → 6.1% |    5 MiB → 6 MiB |   10 → 12 | `boxed(double[])`                                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `grow()` (`java.util.ArrayList`)

| Change |      Delta |      % |                Size |         Samples | Caller                       | Location              |
| -----: | ---------: | -----: | ------------------: | --------------: | ---------------------------- | --------------------- |
|  -0.1% | -7.473 MiB | 100.0% | 6.03 GiB → 6.02 GiB | 12,341 → 12,325 | `add(Object, Object[], int)` | `java.util.ArrayList` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

| Change |      Delta |      % |                Size |         Samples | Caller        | Location              |
| -----: | ---------: | -----: | ------------------: | --------------: | ------------- | --------------------- |
|  -0.1% | -7.473 MiB | 100.0% | 6.03 GiB → 6.02 GiB | 12,341 → 12,325 | `add(Object)` | `java.util.ArrayList` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |       Delta |      % |     Size |         Samples | Caller                   | Location                                                               |
| -----: | ----------: | -----: | -------: | --------------: | ------------------------ | ---------------------------------------------------------------------- |
|  -0.1% | -40.002 MiB | 100.0% | 27.8 GiB | 56,713 → 56,634 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a3b90` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a3b90`)

| Change |       Delta |      % |     Size |         Samples | Caller                | Location            |
| -----: | ----------: | -----: | -------: | --------------: | --------------------- | ------------------- |
|  -0.1% | -40.002 MiB | 100.0% | 27.8 GiB | 56,713 → 56,634 | `forEach(BiConsumer)` | `java.util.HashMap` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |              Size |   Samples | Caller      | Location                                               |
| -----: | ----------: | -----: | ----------------: | --------: | ----------- | ------------------------------------------------------ |
| -16.0% | -31.499 MiB | 100.0% | 197 MiB → 165 MiB | 394 → 331 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |       Delta |      % |              Size |   Samples | Caller                     | Location                                               |
| -----: | ----------: | -----: | ----------------: | --------: | -------------------------- | ------------------------------------------------------ |
| -12.3% | -29.499 MiB | 100.0% | 239 MiB → 209 MiB | 478 → 419 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |       Delta |      % |              Size |   Samples | Caller              | Location                                               |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------- | ------------------------------------------------------ |
| -11.0% | -27.999 MiB | 100.0% | 255 MiB → 227 MiB | 511 → 455 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |       Delta |      % |              Size |   Samples | Caller              | Location                                               |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------- | ------------------------------------------------------ |
| -11.0% | -27.999 MiB | 100.0% | 255 MiB → 227 MiB | 511 → 455 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| -11.0% | -27.999 MiB | 100.0% | 255 MiB → 227 MiB | 511 → 455 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |               Size |         Samples | Caller              | Location                                                   |
| -----: | ----------: | -----: | -----------------: | --------------: | ------------------- | ---------------------------------------------------------- |
|  -0.3% | -24.499 MiB | 100.0% | 8.1 GiB → 8.07 GiB | 16,580 → 16,531 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -0.3% | -24.499 MiB | 100.0% | 8.1 GiB → 8.07 GiB | 16,580 → 16,531 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |             Size |   Samples | Caller                               | Location                                                  |
| -----: | ----------: | -----: | ---------------: | --------: | ------------------------------------ | --------------------------------------------------------- |
| -13.9% | -15.499 MiB | 100.0% | 111 MiB → 96 MiB | 223 → 192 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `combineResults(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |             Size |   Samples | Caller                           | Location                                                  |
| -----: | ----------: | -----: | ---------------: | --------: | -------------------------------- | --------------------------------------------------------- |
| -13.9% | -15.499 MiB | 100.0% | 111 MiB → 96 MiB | 223 → 192 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |             Size |   Samples | Caller      | Location                                               |
| -----: | ----------: | -----: | ---------------: | --------: | ----------- | ------------------------------------------------------ |
| -13.9% | -15.499 MiB | 100.0% | 111 MiB → 96 MiB | 223 → 192 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |       Delta |      % |             Size | Samples | Caller                  | Location                                  |
| -----: | ----------: | -----: | ---------------: | ------: | ----------------------- | ----------------------------------------- |
| -77.8% | -10.499 MiB | 100.0% | 13.5 MiB → 3 MiB |  27 → 6 | `executeOperation(int)` | `org.renaissance.harness.ExecutionDriver` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |      Delta |      % |              Size |   Samples | Caller      | Location                                               |
| -----: | ---------: | -----: | ----------------: | --------: | ----------- | ------------------------------------------------------ |
|  -5.0% | -7.499 MiB | 100.0% | 149 MiB → 141 MiB | 298 → 283 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |       Delta |            % |          Size | Samples | Callee                                                                                       | Location                                  |
| -----: | ----------: | -----------: | ------------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
|    new | +185.96 MiB | 0.0% → 98.7% | 0 B → 186 MiB | 0 → 366 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
|    new |  +2.499 MiB |  0.0% → 1.3% | 0 B → 2.5 MiB |   0 → 5 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |             % |              Size |         Samples | Callee                              | Location              |
| -----: | ----------: | ------------: | ----------------: | --------------: | ----------------------------------- | --------------------- |
| +14.9% | +42.999 MiB |   4.4% → 5.0% | 288 MiB → 331 MiB |       577 → 663 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`   |
|  -0.1% |  -8.999 MiB | 94.3% → 93.3% |          6.02 GiB | 12,338 → 12,320 | `add(Object)`                       | `java.util.ArrayList` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |        Delta |            % |                Size |         Samples | Callee                    | Location                                               |
| ------: | -----------: | -----------: | ------------------: | --------------: | ------------------------- | ------------------------------------------------------ |
|   +0.7% |  +55.997 MiB |       100.0% | 7.51 GiB → 7.57 GiB | 15,075 → 15,188 | `invoke()`                | `java.util.concurrent.ForkJoinTask`                    |
|     new |   +1.499 MiB | 0.0% → <0.1% |       0 B → 1.5 MiB |           0 → 3 | `<init>(JavaKMeans, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| removed | -511.999 KiB | <0.1% → 0.0% |       512 KiB → 0 B |           1 → 0 | `keySet()`                | `java.util.HashMap`                                    |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a2bd0`)

| Change |       Delta |      % |                Size |         Samples | Callee                         | Location                                    |
| -----: | ----------: | -----: | ------------------: | --------------: | ------------------------------ | ------------------------------------------- |
|  +0.7% | +57.497 MiB | 100.0% | 7.52 GiB → 7.57 GiB | 15,078 → 15,194 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

| Change |       Delta |      % |                Size |         Samples | Callee   | Location                                                               |
| -----: | ----------: | -----: | ------------------: | --------------: | -------- | ---------------------------------------------------------------------- |
|  +0.7% | +57.497 MiB | 100.0% | 7.52 GiB → 7.57 GiB | 15,078 → 15,194 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a2bd0` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

| Change |       Delta |             % |                Size |   Samples | Callee                                       | Location                                                                              |
| -----: | ----------: | ------------: | ------------------: | --------: | -------------------------------------------- | ------------------------------------------------------------------------------------- |
| +39.3% | +22.999 MiB | 20.3% → 24.6% | 58.5 MiB → 81.5 MiB | 117 → 163 | `resize()`                                   | `java.util.HashMap`                                                                   |
| +14.6% | +14.999 MiB | 35.7% → 35.6% |   103 MiB → 118 MiB | 206 → 236 | `apply(Object)`                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000078011a3940` |
|  +3.9% |  +4.999 MiB | 44.0% → 39.8% |   127 MiB → 132 MiB | 254 → 264 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap`                                                                   |

##### `grow(int)` (`java.util.ArrayList`)

| Change |       Delta |             % |                Size |         Samples | Callee                  | Location           |
| -----: | ----------: | ------------: | ------------------: | --------------: | ----------------------- | ------------------ |
|  +0.3% | +61.523 MiB | 98.7% → 98.8% | 19.1 GiB → 19.2 GiB | 38,833 → 38,956 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

| Change |       Delta |      % |                Size |         Samples | Callee     | Location                            |
| -----: | ----------: | -----: | ------------------: | --------------: | ---------- | ----------------------------------- |
|  +0.4% | +34.497 MiB | 100.0% | 7.72 GiB → 7.76 GiB | 15,499 → 15,569 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000078011a3940`)

| Change |       Delta |      % |              Size |   Samples | Callee                               | Location                                                   |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------------------------ | ---------------------------------------------------------- |
| +14.6% | +14.999 MiB | 100.0% | 103 MiB → 118 MiB | 206 → 236 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |          Delta |              % |              Size |   Samples | Callee                        | Location                                                           |
| -----: | -------------: | -------------: | ----------------: | --------: | ----------------------------- | ------------------------------------------------------------------ |
|    new |     +7.999 MiB |    0.0% → 4.5% |       0 B → 8 MiB |    0 → 16 | `toCsvRows(Function)`         | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter` |
|  +1.5% |     +2.526 MiB | 100.0% → 94.7% | 167 MiB → 170 MiB | 330 → 334 | `generateData(int, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                        |
|    new | +1,023.998 KiB |    0.0% → 0.6% |       0 B → 1 MiB |     0 → 2 | `loadClass(String)`           | `java.lang.ClassLoader`                                            |
|    new |   +511.999 KiB |    0.0% → 0.3% |     0 B → 512 KiB |     0 → 1 | `asScala()`                   | `scala.collection.convert.AsScalaExtensions$ListHasAsScala`        |

##### `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

| Change |      Delta |             % |              Size |   Samples | Callee                       | Location                                  |
| -----: | ---------: | ------------: | ----------------: | --------: | ---------------------------- | ----------------------------------------- |
|    new | +7.999 MiB |   0.0% → 4.4% |       0 B → 8 MiB |    0 → 16 | `forEachRemaining(Consumer)` | `java.util.Spliterators$ArraySpliterator` |
|  +1.8% | +3.026 MiB | 97.9% → 93.7% | 167 MiB → 170 MiB | 329 → 334 | `forEachRemaining(Consumer)` | `java.util.Spliterator$OfInt`             |

##### `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`)

| Change |       Delta |      % |              Size |   Samples | Callee                               | Location                            |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------------------------ | ----------------------------------- |
|  +6.6% | +11.026 MiB | 100.0% | 167 MiB → 178 MiB | 329 → 350 | `wrapAndCopyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`)

| Change |       Delta |      % |              Size |   Samples | Callee                                            | Location                              |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------------------------------------- | ------------------------------------- |
|  +6.6% | +11.026 MiB | 100.0% | 167 MiB → 178 MiB | 329 → 350 | `evaluateSequential(PipelineHelper, Spliterator)` | `java.util.stream.ReduceOps$ReduceOp` |

##### `collect(Collector)` (`java.util.stream.ReferencePipeline`)

| Change |       Delta |      % |              Size |   Samples | Callee                 | Location                            |
| -----: | ----------: | -----: | ----------------: | --------: | ---------------------- | ----------------------------------- |
|  +6.6% | +11.026 MiB | 100.0% | 167 MiB → 178 MiB | 329 → 350 | `evaluate(TerminalOp)` | `java.util.stream.AbstractPipeline` |

##### `range(int, int)` (`java.util.stream.IntStream`)

| Change |      Delta |             % |              Size | Samples | Callee                                  | Location                         |
| -----: | ---------: | ------------: | ----------------: | ------: | --------------------------------------- | -------------------------------- |
| +19.1% | +4.499 MiB | 75.8% → 66.7% | 23.5 MiB → 28 MiB | 47 → 56 | `intStream(Spliterator$OfInt, boolean)` | `java.util.stream.StreamSupport` |

##### `wrapAndCopyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

| Change |       Delta |              % |              Size |   Samples | Callee                        | Location                            |
| -----: | ----------: | -------------: | ----------------: | --------: | ----------------------------- | ----------------------------------- |
|  +6.5% | +11.026 MiB | 99.4% → 100.0% | 170 MiB → 181 MiB | 336 → 357 | `copyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |
| -31.0% |  -4.499 MiB |    8.5% → 5.5% | 14.5 MiB → 10 MiB |   29 → 20 | `wrapSink(Sink)`              | `java.util.stream.AbstractPipeline` |

##### `putMapEntries(Map, boolean)` (`java.util.HashMap`)

| Change |          Delta |             % |              Size |   Samples | Callee                                          | Location            |
| -----: | -------------: | ------------: | ----------------: | --------: | ----------------------------------------------- | ------------------- |
|  +5.4% |     +8.999 MiB | 92.7% → 92.6% | 165 MiB → 174 MiB | 331 → 349 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |
|  +7.7% | +1,023.998 KiB |   7.3% → 7.4% |   13 MiB → 14 MiB |   26 → 28 | `entrySet()`                                    | `java.util.HashMap` |

##### `<init>(Map)` (`java.util.HashMap`)

| Change |      Delta |      % |              Size |   Samples | Callee                        | Location            |
| -----: | ---------: | -----: | ----------------: | --------: | ----------------------------- | ------------------- |
|  +5.6% | +9.999 MiB | 100.0% | 178 MiB → 188 MiB | 357 → 377 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

| Change |      Delta |             % |              Size |   Samples | Callee                                       | Location            |
| -----: | ---------: | ------------: | ----------------: | --------: | -------------------------------------------- | ------------------- |
|  +7.7% | +9.499 MiB | 73.4% → 74.9% | 123 MiB → 132 MiB | 246 → 265 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007801004800`)

| Change |      Delta |      % |              Size |   Samples | Callee           | Location                                   |
| -----: | ---------: | -----: | ----------------: | --------: | ---------------- | ------------------------------------------ |
|  +4.5% | +9.026 MiB | 100.0% | 199 MiB → 208 MiB | 393 → 410 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007801009800`)

| Change |      Delta |      % |              Size |   Samples | Callee                         | Location                                             |
| -----: | ---------: | -----: | ----------------: | --------: | ------------------------------ | ---------------------------------------------------- |
|  +4.5% | +9.026 MiB | 100.0% | 199 MiB → 208 MiB | 393 → 410 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007801004800` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change |      Delta |      % |              Size |   Samples | Callee                           | Location                                            |
| -----: | ---------: | -----: | ----------------: | --------: | -------------------------------- | --------------------------------------------------- |
|  +4.5% | +9.026 MiB | 100.0% | 199 MiB → 208 MiB | 393 → 410 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007801009800` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |      Delta |      % |              Size |   Samples | Callee                                           | Location                           |
| -----: | ---------: | -----: | ----------------: | --------: | ------------------------------------------------ | ---------------------------------- |
|  +4.5% | +9.026 MiB | 100.0% | 199 MiB → 208 MiB | 393 → 410 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |      Delta |      % |              Size |   Samples | Callee                         | Location                                          |
| -----: | ---------: | -----: | ----------------: | --------: | ------------------------------ | ------------------------------------------------- |
|  +4.5% | +9.026 MiB | 100.0% | 199 MiB → 208 MiB | 393 → 410 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

| Change |      Delta |             % |              Size |   Samples | Callee                     | Location                   |
| -----: | ---------: | ------------: | ----------------: | --------: | -------------------------- | -------------------------- |
|  +4.5% | +9.026 MiB | 99.7% → 99.8% | 199 MiB → 208 MiB | 393 → 410 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

| Change |      Delta |             % |              Size |   Samples | Callee              | Location                                    |
| -----: | ---------: | ------------: | ----------------: | --------: | ------------------- | ------------------------------------------- |
|  +3.9% | +7.526 MiB | 98.2% → 97.6% | 195 MiB → 203 MiB | 386 → 400 | `main(String[])`    | `org.renaissance.harness.RenaissanceSuite$` |
| +42.9% | +1.499 MiB |   1.8% → 2.4% |   3.5 MiB → 5 MiB |    7 → 10 | `loadClass(String)` | `java.lang.ClassLoader`                     |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda`)

| Change |          Delta |              % |              Size | Samples | Callee                           | Location                                  |
| -----: | -------------: | -------------: | ----------------: | ------: | -------------------------------- | ----------------------------------------- |
|    new |     +7.999 MiB |   0.0% → 76.2% |       0 B → 8 MiB |  0 → 16 | `setUpBeforeAll$$anonfun$1(Map)` | `org.renaissance.jdk.concurrent.FjKmeans` |
| +66.7% | +1,023.998 KiB | 100.0% → 23.8% | 1.5 MiB → 2.5 MiB |   3 → 5 | `$anonfun$adapted$1(Object)`     | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

|  Change |        Delta |             % |              Size |   Samples | Callee                                                      | Location                            |
| ------: | -----------: | ------------: | ----------------: | --------: | ----------------------------------------------------------- | ----------------------------------- |
|   +4.5% |   +9.026 MiB | 99.5% → 99.8% | 199 MiB → 208 MiB | 394 → 411 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher`     |
| removed | -511.999 KiB |   0.2% → 0.0% |     512 KiB → 0 B |     1 → 0 | `create(Path, URI)`                                         | `org.renaissance.core.ModuleLoader` |

##### `main(String[])` (`org.renaissance.core.Launcher`)

| Change |      Delta |      % |              Size |   Samples | Callee                                 | Location                        |
| -----: | ---------: | -----: | ----------------: | --------: | -------------------------------------- | ------------------------------- |
|  +4.3% | +8.526 MiB | 100.0% | 200 MiB → 209 MiB | 396 → 412 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `rowToArray$1(Map)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |        Delta |            % |          Size | Samples | Callee                                                           | Location                               |
| -----: | -----------: | -----------: | ------------: | ------: | ---------------------------------------------------------------- | -------------------------------------- |
|    new |   +6.499 MiB | 0.0% → 81.3% | 0 B → 6.5 MiB |  0 → 13 | `<clinit>()`                                                     | `scala.Predef$`                        |
|    new | +511.999 KiB |  0.0% → 6.3% | 0 B → 512 KiB |   0 → 1 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |
|    new | +511.999 KiB |  0.0% → 6.3% | 0 B → 512 KiB |   0 → 1 | `map(Function1)`                                                 | `scala.collection.immutable.Range`     |
|    new | +511.999 KiB |  0.0% → 6.3% | 0 B → 512 KiB |   0 → 1 | `apply(Class)`                                                   | `scala.reflect.ClassTag$`              |

##### `setUpBeforeAll$$anonfun$1(Map)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |      Delta |             % |        Size | Samples | Callee              | Location                                  |
| -----: | ---------: | ------------: | ----------: | ------: | ------------------- | ----------------------------------------- |
|    new | +7.999 MiB | 0.0% → 100.0% | 0 B → 8 MiB |  0 → 16 | `rowToArray$1(Map)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `lambda$toCsvRows$2(String[], Function, String)` (`org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`)

| Change |      Delta |             % |        Size | Samples | Callee          | Location                                          |
| -----: | ---------: | ------------: | ----------: | ------: | --------------- | ------------------------------------------------- |
|    new | +7.999 MiB | 0.0% → 100.0% | 0 B → 8 MiB |  0 → 16 | `apply(Object)` | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda` |

##### `apply(Object)` (`org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter$$Lambda.0x0000007801123bf8`)

| Change |      Delta |             % |        Size | Samples | Callee                                           | Location                                                           |
| -----: | ---------: | ------------: | ----------: | ------: | ------------------------------------------------ | ------------------------------------------------------------------ |
|    new | +7.999 MiB | 0.0% → 100.0% | 0 B → 8 MiB |  0 → 16 | `lambda$toCsvRows$2(String[], Function, String)` | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter` |

##### `toCsvRows(Function)` (`org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`)

| Change |      Delta |             % |        Size | Samples | Callee               | Location                             |
| -----: | ---------: | ------------: | ----------: | ------: | -------------------- | ------------------------------------ |
|    new | +7.999 MiB | 0.0% → 100.0% | 0 B → 8 MiB |  0 → 16 | `collect(Collector)` | `java.util.stream.ReferencePipeline` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |          Delta |             % |              Size |   Samples | Callee                                                                        | Location                                    |
| ------: | -------------: | ------------: | ----------------: | --------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
|   +3.6% |     +6.526 MiB | 93.1% → 92.9% | 182 MiB → 188 MiB | 359 → 371 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |
| +100.0% |     +1.499 MiB |   0.8% → 1.5% |   1.5 MiB → 3 MiB |     3 → 6 | `<init>(Map)`                                                                 | `org.renaissance.harness.ConfigParser`      |
| removed | -1,023.998 KiB |   0.5% → 0.0% |       1 MiB → 0 B |     2 → 0 | `loadClass(String)`                                                           | `java.lang.ClassLoader`                     |
|  +28.6% | +1,023.998 KiB |   1.8% → 2.2% | 3.5 MiB → 4.5 MiB |     7 → 9 | `<clinit>()`                                                                  | `scala.Predef$`                             |
|  -50.0% | -1,023.998 KiB |   1.0% → 0.5% |     2 MiB → 1 MiB |     4 → 2 | `parse(String[])`                                                             | `org.renaissance.harness.ConfigParser`      |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000780111f1b8`)

|  Change |        Delta |             % |          Size | Samples | Callee                                                                                                                 | Location                                    |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
|     new |  +188.46 MiB | 0.0% → 100.0% | 0 B → 188 MiB | 0 → 371 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |
| removed | -181.434 MiB | 100.0% → 0.0% | 181 MiB → 0 B | 358 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |        Delta |              % |              Size |   Samples | Callee                                                           | Location                               |
| ------: | -----------: | -------------: | ----------------: | --------: | ---------------------------------------------------------------- | -------------------------------------- |
|   +3.9% |   +7.026 MiB | 99.7% → 100.0% | 181 MiB → 188 MiB | 358 → 371 | `foreach(Function1)`                                             | `scala.collection.immutable.List`      |
| removed | -511.999 KiB |    0.3% → 0.0% |     512 KiB → 0 B |     1 → 0 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |        Delta |      % |              Size |         Samples | Callee     | Location                            |
| -----: | -----------: | -----: | ----------------: | --------------: | ---------- | ----------------------------------- |
|  -1.0% | -288.999 MiB | 100.0% | 29.3 GiB → 29 GiB | 59,907 → 59,329 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change |        Delta |             % |                Size |         Samples | Callee                                                    | Location                                      |
| -----: | -----------: | ------------: | ------------------: | --------------: | --------------------------------------------------------- | --------------------------------------------- |
|  -1.0% | -288.999 MiB |         98.8% |   29.3 GiB → 29 GiB | 59,907 → 59,329 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  -3.0% | -178.499 MiB | 19.9% → 19.5% | 5.89 GiB → 5.72 GiB | 12,072 → 11,715 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change |        Delta |      % |                Size |         Samples | Callee                 | Location                            |
| -----: | -----------: | -----: | ------------------: | --------------: | ---------------------- | ----------------------------------- |
|  -0.9% | -287.499 MiB | 100.0% | 29.6 GiB → 29.3 GiB | 60,611 → 60,036 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |        Delta |             % |          Size | Samples | Callee               | Location                                  |
| ------: | -----------: | ------------: | ------------: | ------: | -------------------- | ----------------------------------------- |
| removed | -181.434 MiB | 100.0% → 0.0% | 181 MiB → 0 B | 358 → 0 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

| Change |        Delta |      % |                Size |         Samples | Callee     | Location                            |
| -----: | -----------: | -----: | ------------------: | --------------: | ---------- | ----------------------------------- |
|  -3.0% | -178.499 MiB | 100.0% | 5.89 GiB → 5.72 GiB | 12,072 → 11,715 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change |        Delta |             % |                Size |         Samples | Callee                           | Location                                                   |
| -----: | -----------: | ------------: | ------------------: | --------------: | -------------------------------- | ---------------------------------------------------------- |
|  -0.9% | -287.499 MiB | 80.5% → 80.0% | 29.6 GiB → 29.3 GiB | 60,611 → 60,036 | `join()`                         | `java.util.concurrent.ForkJoinTask`                        |
|  -0.2% |  -44.002 MiB | 76.4% → 76.6% |            28.1 GiB | 57,227 → 57,140 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -16.0% |  -31.499 MiB |   0.5% → 0.4% |   197 MiB → 165 MiB |       394 → 331 | `createSubtask(int, int)`        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| -11.0% |  -27.999 MiB |   0.7% → 0.6% |   255 MiB → 227 MiB |       511 → 455 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -0.3% |  -24.499 MiB |         22.0% |  8.1 GiB → 8.07 GiB | 16,580 → 16,531 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change |        Delta |      % |                Size |         Samples | Callee      | Location                                               |
| -----: | -----------: | -----: | ------------------: | --------------: | ----------- | ------------------------------------------------------ |
|  -0.3% | -120.502 MiB | 100.0% | 36.8 GiB → 36.6 GiB | 74,966 → 74,726 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

| Change |        Delta |             % |                Size |         Samples | Callee   | Location                                            |
| -----: | -----------: | ------------: | ------------------: | --------------: | -------- | --------------------------------------------------- |
|  -0.3% | -120.502 MiB |        100.0% | 36.8 GiB → 36.6 GiB | 74,966 → 74,726 | `exec()` | `java.util.concurrent.RecursiveTask`                |
|  +0.7% |  +57.497 MiB | 20.4% → 20.7% | 7.52 GiB → 7.57 GiB | 15,078 → 15,194 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |        Delta |      % |                Size |         Samples | Callee     | Location                            |
| -----: | -----------: | -----: | ------------------: | --------------: | ---------- | ----------------------------------- |
|  -0.3% | -119.002 MiB | 100.0% | 36.8 GiB → 36.6 GiB | 74,969 → 74,732 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

| Change |        Delta |      % |                Size |         Samples | Callee                                               | Location                                      |
| -----: | -----------: | -----: | ------------------: | --------------: | ---------------------------------------------------- | --------------------------------------------- |
|  -0.3% | -119.002 MiB | 100.0% | 36.8 GiB → 36.6 GiB | 74,969 → 74,732 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change |        Delta |      % |                Size |         Samples | Callee                                   | Location                            |
| -----: | -----------: | -----: | ------------------: | --------------: | ---------------------------------------- | ----------------------------------- |
|  -0.3% | -119.002 MiB | 100.0% | 36.8 GiB → 36.6 GiB | 74,969 → 74,732 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

| Change |        Delta |      % |                Size |         Samples | Callee                              | Location                            |
| -----: | -----------: | -----: | ------------------: | --------------: | ----------------------------------- | ----------------------------------- |
|  -0.3% | -119.002 MiB | 100.0% | 36.8 GiB → 36.6 GiB | 74,969 → 74,732 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `toArray()` (`java.util.ArrayList`)

| Change |       Delta |      % |                Size |         Samples | Callee                  | Location           |
| -----: | ----------: | -----: | ------------------: | --------------: | ----------------------- | ------------------ |
|  -0.6% | -89.499 MiB | 100.0% | 14.4 GiB → 14.3 GiB | 29,514 → 29,335 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |       Delta |           % |              Size |         Samples | Callee                | Location            |
| -----: | ----------: | ----------: | ----------------: | --------------: | --------------------- | ------------------- |
|  -0.1% | -40.002 MiB |       99.1% |          27.8 GiB | 56,713 → 56,634 | `forEach(BiConsumer)` | `java.util.HashMap` |
|  +5.6% |  +9.999 MiB | 0.6% → 0.7% | 178 MiB → 188 MiB |       357 → 377 | `<init>(Map)`         | `java.util.HashMap` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |     Size |         Samples | Callee            | Location                                    |
| -----: | ----------: | -----: | -------: | --------------: | ----------------- | ------------------------------------------- |
|  -0.2% | -44.002 MiB | 100.0% | 28.1 GiB | 57,227 → 57,140 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |     Size |         Samples | Callee                     | Location                                                   |
| -----: | ----------: | -----: | -------: | --------------: | -------------------------- | ---------------------------------------------------------- |
|  -0.2% | -44.002 MiB | 100.0% | 28.1 GiB | 57,227 → 57,140 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `<init>(Collection)` (`java.util.ArrayList`)

| Change |       Delta |      % |                Size |         Samples | Callee      | Location              |
| -----: | ----------: | -----: | ------------------: | --------------: | ----------- | --------------------- |
|  -0.6% | -43.499 MiB | 100.0% | 7.03 GiB → 6.99 GiB | 14,394 → 14,307 | `toArray()` | `java.util.ArrayList` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |       Delta |             % |                Size |         Samples | Callee               | Location              |
| -----: | ----------: | ------------: | ------------------: | --------------: | -------------------- | --------------------- |
|  -0.6% | -43.499 MiB | 25.2% → 25.1% | 7.03 GiB → 6.99 GiB | 14,394 → 14,307 | `<init>(Collection)` | `java.util.ArrayList` |
|    ~0% |  +3.997 MiB | 74.4% → 74.5% |            20.7 GiB | 42,115 → 42,124 | `addAll(Collection)` | `java.util.ArrayList` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a7000`)

| Change |       Delta |      % |     Size |         Samples | Callee                       | Location                                    |
| -----: | ----------: | -----: | -------: | --------------: | ---------------------------- | ------------------------------------------- |
|  -0.1% | -40.502 MiB | 100.0% | 27.8 GiB | 56,710 → 56,630 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|  Change |        Delta |      % |            Size |         Samples | Callee                                       | Location                                                               |
| ------: | -----------: | -----: | --------------: | --------------: | -------------------------------------------- | ---------------------------------------------------------------------- |
|   -0.1% |  -40.502 MiB | 100.0% |        27.8 GiB | 56,710 → 56,630 | `apply(Object, Object)`                      | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a7000` |
| +100.0% | +511.999 KiB |  <0.1% | 512 KiB → 1 MiB |           1 → 2 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap`                                                    |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

| Change |       Delta |      % |     Size |         Samples | Callee                   | Location                                                               |
| -----: | ----------: | -----: | -------: | --------------: | ------------------------ | ---------------------------------------------------------------------- |
|  -0.1% | -40.002 MiB | 100.0% | 27.8 GiB | 56,713 → 56,634 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a3b90` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |      Delta |     % |                Size | Samples | Callee                         | Location           |
| -----: | ---------: | ----: | ------------------: | ------: | ------------------------------ | ------------------ |
| +19.5% | +2.526 MiB | <0.1% | 12.9 MiB → 15.5 MiB | 21 → 25 | `copyOf(Object[], int, Class)` | `java.util.Arrays` |

##### `evaluate(Spliterator, boolean, IntFunction)` (`java.util.stream.AbstractPipeline`)

| Change |          Delta |             % |                Size |   Samples | Callee                               | Location                             |
| -----: | -------------: | ------------: | ------------------: | --------: | ------------------------------------ | ------------------------------------ |
| -11.5% |     -8.999 MiB | 73.4% → 70.2% | 78.5 MiB → 69.5 MiB | 157 → 139 | `wrapAndCopyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline`  |
|  +3.5% | +1,023.998 KiB | 26.6% → 29.8% | 28.5 MiB → 29.5 MiB |   57 → 59 | `makeNodeBuilder(long, IntFunction)` | `java.util.stream.ReferencePipeline` |

##### `evaluateToArrayNode(IntFunction)` (`java.util.stream.AbstractPipeline`)

| Change |      Delta |      % |             Size |   Samples | Callee                                        | Location                            |
| -----: | ---------: | -----: | ---------------: | --------: | --------------------------------------------- | ----------------------------------- |
|  -7.5% | -7.999 MiB | 100.0% | 107 MiB → 99 MiB | 214 → 198 | `evaluate(Spliterator, boolean, IntFunction)` | `java.util.stream.AbstractPipeline` |

##### `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`)

| Change |      Delta |      % |             Size |   Samples | Callee                             | Location                            |
| -----: | ---------: | -----: | ---------------: | --------: | ---------------------------------- | ----------------------------------- |
|  -7.5% | -7.999 MiB | 100.0% | 107 MiB → 99 MiB | 214 → 198 | `evaluateToArrayNode(IntFunction)` | `java.util.stream.AbstractPipeline` |

##### `grow()` (`java.util.ArrayList`)

| Change |      Delta |      % |                Size |         Samples | Callee      | Location              |
| -----: | ---------: | -----: | ------------------: | --------------: | ----------- | --------------------- |
|  -0.1% | -7.473 MiB | 100.0% | 6.03 GiB → 6.02 GiB | 12,341 → 12,325 | `grow(int)` | `java.util.ArrayList` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

| Change |      Delta |      % |                Size |         Samples | Callee   | Location              |
| -----: | ---------: | -----: | ------------------: | --------------: | -------- | --------------------- |
|  -0.1% | -7.473 MiB | 100.0% | 6.03 GiB → 6.02 GiB | 12,341 → 12,325 | `grow()` | `java.util.ArrayList` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |       Delta |      % |     Size |         Samples | Callee                              | Location            |
| -----: | ----------: | -----: | -------: | --------------: | ----------------------------------- | ------------------- |
|  -0.1% | -40.002 MiB | 100.0% | 27.8 GiB | 56,713 → 56,634 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a3b90`)

| Change |       Delta |      % |     Size |         Samples | Callee                              | Location                                    |
| -----: | ----------: | -----: | -------: | --------------: | ----------------------------------- | ------------------------------------------- |
|  -0.1% | -40.002 MiB | 100.0% | 27.8 GiB | 56,713 → 56,634 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |       Delta |             % |              Size |   Samples | Callee     | Location                            |
| -----: | ----------: | ------------: | ----------------: | --------: | ---------- | ----------------------------------- |
| -12.4% | -29.499 MiB | 99.4% → 99.3% | 237 MiB → 208 MiB | 475 → 416 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |          Delta |             % |              Size |   Samples | Callee                | Location                                               |
| -----: | -------------: | ------------: | ----------------: | --------: | --------------------- | ------------------------------------------------------ |
| -12.3% |    -29.499 MiB | 93.5% → 92.1% | 239 MiB → 209 MiB | 478 → 419 | `average(List)`       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| +15.8% |     +1.499 MiB |   3.7% → 4.8% |  9.5 MiB → 11 MiB |   19 → 22 | `boxed(double[])`     | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| -50.0% | -1,023.998 KiB |   0.8% → 0.4% |     2 MiB → 1 MiB |     4 → 2 | `put(Object, Object)` | `java.util.HashMap`                                    |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |       Delta |      % |              Size |   Samples | Callee                     | Location                                               |
| -----: | ----------: | -----: | ----------------: | --------: | -------------------------- | ------------------------------------------------------ |
| -11.0% | -27.999 MiB | 100.0% | 255 MiB → 227 MiB | 511 → 455 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| -11.0% | -27.999 MiB | 100.0% | 255 MiB → 227 MiB | 511 → 455 | `computeDirectly()`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |             % |                Size |         Samples | Callee                   | Location                                                   |
| -----: | ----------: | ------------: | ------------------: | --------------: | ------------------------ | ---------------------------------------------------------- |
|  -4.7% | -82.499 MiB | 21.1% → 20.2% | 1.71 GiB → 1.63 GiB |   3,497 → 3,332 | `findNearestCentroid()`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +0.9% | +57.999 MiB | 78.9% → 79.8% | 6.39 GiB → 6.44 GiB | 13,083 → 13,199 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -0.3% | -24.499 MiB |        100.0% |  8.1 GiB → 8.07 GiB | 16,580 → 16,531 | `computeDirectly()`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `combineResults(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |             Size |   Samples | Callee                    | Location                                                  |
| -----: | ----------: | -----: | ---------------: | --------: | ------------------------- | --------------------------------------------------------- |
| -13.9% | -15.499 MiB | 100.0% | 111 MiB → 96 MiB | 223 → 192 | `add(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |             Size |   Samples | Callee                               | Location                                                  |
| -----: | ----------: | -----: | ---------------: | --------: | ------------------------------------ | --------------------------------------------------------- |
| -13.9% | -15.499 MiB | 100.0% | 111 MiB → 96 MiB | 223 → 192 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change |        Delta |              % |            Size | Samples | Callee              | Location                           |
| ------: | -----------: | -------------: | --------------: | ------: | ------------------- | ---------------------------------- |
| removed |   -7.499 MiB |   55.6% → 0.0% |   7.5 MiB → 0 B |  15 → 0 | `<clinit>()`        | `scala.Predef$`                    |
| removed |   -3.499 MiB |   25.9% → 0.0% |   3.5 MiB → 0 B |   7 → 0 | `loadClass(String)` | `java.lang.ClassLoader`            |
|  +20.0% | +511.999 KiB | 18.5% → 100.0% | 2.5 MiB → 3 MiB |   5 → 6 | `map(Function1)`    | `scala.collection.immutable.Range` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in bytes allocated in their leaf frame.

| Change |        Delta |            % |                Size |       Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| -----: | -----------: | -----------: | ------------------: | ------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  +4.8% | +108.499 MiB |  6.0% → 6.3% | 2.21 GiB → 2.31 GiB | 4,516 → 4,733 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a7000`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a3b90`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| +12.7% |  +60.499 MiB |  1.3% → 1.4% |   475 MiB → 536 MiB |   951 → 1,072 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a2bd0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`) |
|  +5.9% |  +60.499 MiB |  2.7% → 2.9% | 1.01 GiB → 1.07 GiB | 2,063 → 2,184 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|    new |  +55.999 MiB |  0.0% → 0.1% |        0 B → 56 MiB |       0 → 112 | `valueOf(double)` (`java.lang.Double`) ← `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluate(Spliterator, boolean, IntFunction)` ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000780111f1b8`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007801004800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007801009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  +3.9% |  +52.999 MiB |  3.6% → 3.8% |  1.34 GiB → 1.4 GiB | 2,752 → 2,858 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a7000`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a3b90`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  +5.5% |  +52.499 MiB |  2.5% → 2.7% | 953 MiB → 1,006 MiB | 1,907 → 2,012 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a7000`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a3b90`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  +7.3% |  +46.999 MiB |  1.7% → 1.8% |   642 MiB → 689 MiB | 1,285 → 1,379 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  +8.5% |  +32.499 MiB |  1.0% → 1.1% |   382 MiB → 414 MiB |     764 → 829 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|    new |  +27.999 MiB |  0.0% → 0.1% |        0 B → 28 MiB |        0 → 56 | `intStream(Spliterator$OfInt, boolean)` (`java.util.stream.StreamSupport`) ← `range(int, int)` (`java.util.stream.IntStream`) ← `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000780111f1b8`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007801004800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007801009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| +48.4% |  +22.999 MiB |  0.1% → 0.2% | 47.5 MiB → 70.5 MiB |      95 → 141 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a7000`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a3b90`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a2bd0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| +11.9% |  +19.499 MiB |  0.4% → 0.5% |   164 MiB → 184 MiB |     329 → 368 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a7000`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a3b90`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a2bd0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| +41.9% |  +19.499 MiB |  0.1% → 0.2% |   46.5 MiB → 66 MiB |      93 → 132 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a7000`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a3b90`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|    new |  +19.499 MiB |  0.0% → 0.1% |      0 B → 19.5 MiB |        0 → 39 | `mapToObj(IntFunction, int)` (`java.util.stream.IntPipeline`) ← `mapToObj(IntFunction)` ← `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000780111f1b8`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007801004800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007801009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| +71.7% |  +18.999 MiB |         0.1% | 26.5 MiB → 45.5 MiB |       53 → 91 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a7000`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a3b90`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  +2.2% |  +18.499 MiB |  2.2% → 2.3% |   844 MiB → 862 MiB | 1,688 → 1,725 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a7000`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a3b90`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|    new |  +16.999 MiB | 0.0% → <0.1% |        0 B → 17 MiB |        0 → 34 | `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `<init>(long, IntFunction)` (`java.util.stream.Nodes$ArrayNode`) ← `<init>(long, IntFunction)` (`java.util.stream.Nodes$FixedNodeBuilder`) ← `builder(long, IntFunction)` (`java.util.stream.Nodes`) ← `makeNodeBuilder(long, IntFunction)` (`java.util.stream.ReferencePipeline`) ← `evaluate(Spliterator, boolean, IntFunction)` (`java.util.stream.AbstractPipeline`) ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000780111f1b8`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007801004800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007801009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  +3.2% |  +15.499 MiB |         1.3% |   480 MiB → 495 MiB |     960 → 991 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a7000`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a3b90`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  +2.2% |  +14.999 MiB |         1.8% |   667 MiB → 682 MiB | 1,334 → 1,364 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a7000`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a3b90`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| +22.5% |  +14.499 MiB |         0.2% |   64.5 MiB → 79 MiB |     129 → 158 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a7000`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a3b90`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a2bd0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                           |
|    new |  +13.999 MiB | 0.0% → <0.1% |        0 B → 14 MiB |        0 → 28 | `range(int, int)` (`java.util.stream.IntStream`) ← `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000780111f1b8`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007801004800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007801009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

### Improvements

Call stacks with the largest decrease in bytes allocated in their leaf frame.

|  Change |       Delta |            % |                Size |       Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------: | ----------: | -----------: | ------------------: | ------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   -7.7% | -72.499 MiB |  2.5% → 2.3% |   947 MiB → 874 MiB | 1,894 → 1,749 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                   |
| removed | -60.499 MiB |  0.2% → 0.0% |      60.5 MiB → 0 B |       121 → 0 | `valueOf(double)` (`java.lang.Double`) ← `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluate(Spliterator, boolean, IntFunction)` ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000f00111f208`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000f001004800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f001009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|   -8.1% | -32.499 MiB |  1.1% → 1.0% |   400 MiB → 367 MiB |     800 → 735 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a7000`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a3b90`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                           |
|   -8.4% | -31.999 MiB |  1.0% → 0.9% |   379 MiB → 347 MiB |     759 → 695 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a7000`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a3b90`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                             |
|   -2.0% | -27.999 MiB |         3.6% | 1.34 GiB → 1.31 GiB | 2,737 → 2,681 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a7000`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a3b90`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|   -4.1% | -26.499 MiB |  1.7% → 1.6% |   640 MiB → 613 MiB | 1,280 → 1,227 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a7000`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a3b90`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|   -7.2% | -25.999 MiB |  1.0% → 0.9% |   363 MiB → 337 MiB |     726 → 674 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a7000`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a3b90`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                             |
|   -9.2% | -25.499 MiB |         0.7% |   276 MiB → 251 MiB |     553 → 502 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                   |
|  -32.5% | -24.999 MiB |  0.2% → 0.1% |     77 MiB → 52 MiB |     154 → 104 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| removed | -23.499 MiB |  0.1% → 0.0% |      23.5 MiB → 0 B |        47 → 0 | `intStream(Spliterator$OfInt, boolean)` (`java.util.stream.StreamSupport`) ← `range(int, int)` (`java.util.stream.IntStream`) ← `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000f00111f208`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000f001004800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f001009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|   -4.5% | -22.499 MiB |         1.3% |   497 MiB → 474 MiB |     994 → 949 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a7000`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a3b90`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  -22.3% | -22.499 MiB |  0.3% → 0.2% |  101 MiB → 78.5 MiB |     202 → 157 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|   -3.5% | -19.999 MiB |         1.5% |   572 MiB → 552 MiB | 1,144 → 1,104 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a7000`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a3b90`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|   -2.4% | -19.999 MiB |         2.2% |   838 MiB → 818 MiB | 1,676 → 1,636 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a7000`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a3b90`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| removed | -19.499 MiB |  0.1% → 0.0% |      19.5 MiB → 0 B |        39 → 0 | `mapToObj(IntFunction, int)` (`java.util.stream.IntPipeline`) ← `mapToObj(IntFunction)` ← `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000f00111f208`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000f001004800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f001009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  -10.7% | -17.499 MiB |         0.4% |   164 MiB → 146 MiB |     328 → 293 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`) |
|  -15.6% | -16.499 MiB |  0.3% → 0.2% |  106 MiB → 89.5 MiB |     212 → 179 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a7000`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a3b90`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| removed | -15.999 MiB | <0.1% → 0.0% |        16 MiB → 0 B |        32 → 0 | `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `<init>(long, IntFunction)` (`java.util.stream.Nodes$ArrayNode`) ← `<init>(long, IntFunction)` (`java.util.stream.Nodes$FixedNodeBuilder`) ← `builder(long, IntFunction)` (`java.util.stream.Nodes`) ← `makeNodeBuilder(long, IntFunction)` (`java.util.stream.ReferencePipeline`) ← `evaluate(Spliterator, boolean, IntFunction)` (`java.util.stream.AbstractPipeline`) ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000f00111f208`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000f001004800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f001009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  -57.1% | -13.999 MiB | 0.1% → <0.1% | 24.5 MiB → 10.5 MiB |       49 → 21 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a7000`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a3b90`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                       |
|  -32.1% | -13.499 MiB |         0.1% |   42 MiB → 28.5 MiB |       84 → 57 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a7000`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a3b90`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

# Lock contention profile diff

Blocked 1.3ms → 1.1ms (-0.23ms, -17.8%) over 13 → 16 contentions (100.5µs → 67.1µs per contention).

| Category         | Change |   Delta |             % |            Time | Contentions |
| ---------------- | -----: | ------: | ------------: | --------------: | ----------: |
| Standard library | -18.0% | -0.23ms | 98.1% → 97.8% |   1.3ms → 1.1ms |     12 → 15 |
| Ours             |  -4.5% | -1.13µs |   1.9% → 2.2% | 25.2µs → 24.0µs |           1 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
├── 1.0ms → 0.8ms (73.7% → 71.0%) run() at java.util.concurrent.ForkJoinWorkerThread
│   └── 1.0ms → 0.8ms (73.7% → 71.0%) runWorker(ForkJoinPool$WorkQueue) at java.util.concurrent.ForkJoinPool
│       └── 1.0ms → 0.8ms (73.7% → 71.0%) scan(ForkJoinPool$WorkQueue, int, int)
│           └── 1.0ms → 0.8ms (73.7% → 71.0%) topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue) at java.util.concurrent.ForkJoinPool$WorkQueue
│               └── 1.0ms → 0.8ms (73.7% → 71.0%) doExec() at java.util.concurrent.ForkJoinTask
│                   └── … 1.0ms → 0.8ms (73.7% → 71.0%) exec() at java.util.concurrent.RecursiveTask
│                       └── 1.0ms → 0.8ms (73.7% → 71.0%) compute() at org.renaissance.jdk.concurrent.JavaKMeans$RangedTask
│                           └── 1.0ms → 0.8ms (73.7% → 71.0%) computeDirectly() at org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask
│                               └── … 1.0ms → 0.8ms (73.7% → 71.0%) computeClusterAverages() at org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask
│                                   └── 1.0ms → 0.8ms (73.7% → 71.0%, self 1.9% → 2.2%) average(List)
│                                       └── 0.9ms → 0.7ms (71.7% → 68.8%) loadClass(String) at java.lang.ClassLoader
│                                           └── 0.9ms → 0.7ms (71.7% → 68.8%) loadClass(String, boolean)
└── 0.3ms (26.3% → 29.0%) run() at java.lang.Thread
    └── 0.3ms (26.3% → 29.0%) runWith(Object, Runnable)
        └── 0.3ms (26.3% → 29.0%) run() at org.renaissance.core.DirUtils$$Lambda.0x0000007801003a68
            └── 0.3ms (26.3% → 29.0%) lambda$createScratchDirectory$1(Path) at org.renaissance.core.DirUtils
                └── 0.3ms (26.3% → 29.0%) deleteRecursively(Path)
                    └── 0.3ms (26.3% → 29.0%) deleteRecursively(Path, boolean)
                        ├── 0.2ms (16.5% → 19.0%) loadClass(String) at java.lang.ClassLoader
                        │   └── 0.2ms (16.5% → 19.0%) loadClass(String, boolean) at jdk.internal.loader.ClassLoaders$AppClassLoader
                        │       └── 0.2ms (16.5% → 19.0%) loadClass(String, boolean) at jdk.internal.loader.BuiltinClassLoader
                        │           └── 0.2ms (16.5% → 19.0%, self 18.1% → 19.0% globally) loadClassOrNull(String, boolean)
                        └── 0.1ms (9.9% → 10.0%) walkFileTree(Path, FileVisitor) at java.nio.file.Files
                            └── 0.1ms (9.9% → 10.0%, self 0.5% → 1.3%) walkFileTree(Path, Set, int, FileVisitor)
                                ├── 0.1ms (6.0% → 7.3%) walk(Path) at java.nio.file.FileTreeWalker
                                │   └── 0.1ms (6.0% → 7.3%) visit(Path, boolean, boolean)
                                │       ├── 0.1ms (6.0% → 5.8%) newDirectoryStream(Path) at java.nio.file.Files
                                │       │   └── 0.1ms (6.0% → 5.5%) newDirectoryStream(Path, DirectoryStream$Filter) at sun.nio.fs.UnixFileSystemProvider
                                │       │       └── 0.1ms (6.0% → 5.5%, self 0.0% → 1.0%) <init>(UnixPath, long, DirectoryStream$Filter) at sun.nio.fs.UnixDirectoryStream
                                │       │           └── 0.1ms → 48.5µs (6.0% → 4.5%, self 6.0% → 4.1%) <init>(boolean) at java.util.concurrent.locks.ReentrantReadWriteLock
                                │       │               └── 0ms → 4.4µs (0.0% → 0.4%) <init>() at java.util.concurrent.locks.ReentrantReadWriteLock$FairSync
                                │       │                   └── 0ms → 4.4µs (0.0% → 0.4%) <init>() at java.util.concurrent.locks.ReentrantReadWriteLock$Sync
                                │       └── 0ms → 16.2µs (0.0% → 1.5%) <init>(Path, Object, DirectoryStream) at java.nio.file.FileTreeWalker$DirectoryNode
                                │           └── 0ms → 16.2µs (0.0% → 1.5%) iterator() at sun.nio.fs.UnixDirectoryStream
                                │               └── 0ms → 16.2µs (0.0% → 1.5%, self 0.0% → 0.6%) iterator(DirectoryStream)
                                │                   └── 0ms → 9.5µs (0.0% → 0.9%) <clinit>() at sun.nio.fs.UnixDirectoryStream$UnixDirectoryIterator
                                ├── … 21.4µs → 0ms (1.6% → 0.0%) loadClassOrNull(String, boolean) at jdk.internal.loader.BuiltinClassLoader
                                ├── 0ms → 16.0µs (0.0% → 1.5%) preVisitDirectory(Object, BasicFileAttributes) at java.nio.file.SimpleFileVisitor
                                ├── 13.1µs → 0ms (1.0% → 0.0%) <init>(Collection, int) at java.nio.file.FileTreeWalker
                                └── 9.9µs → 0ms (0.8% → 0.0%) <clinit>() at java.nio.file.FileTreeWalker
```

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time blocked within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

##### Standard library

|  Change |   Delta |           % |           Time | Contentions | Function                                         | Location                                                 |
| ------: | ------: | ----------: | -------------: | ----------: | ------------------------------------------------ | -------------------------------------------------------- |
|     new | +0.02ms | 0.0% → 1.5% |   0ms → 16.0µs |       0 → 1 | `preVisitDirectory(Object, BasicFileAttributes)` | `java.nio.file.SimpleFileVisitor`                        |
|     new | +0.01ms | 0.0% → 1.0% |   0ms → 10.4µs |       0 → 1 | `<init>(UnixPath, long, DirectoryStream$Filter)` | `sun.nio.fs.UnixDirectoryStream`                         |
|     new | +0.01ms | 0.0% → 0.9% |    0ms → 9.5µs |       0 → 1 | `<clinit>()`                                     | `sun.nio.fs.UnixDirectoryStream$UnixDirectoryIterator`   |
| +127.5% | +0.01ms | 0.5% → 1.3% | 5.9µs → 13.5µs |       1 → 2 | `walkFileTree(Path, Set, int, FileVisitor)`      | `java.nio.file.Files`                                    |
|     new | +0.01ms | 0.0% → 0.6% |    0ms → 6.7µs |       0 → 1 | `iterator(DirectoryStream)`                      | `sun.nio.fs.UnixDirectoryStream`                         |
|     new | +4.42µs | 0.0% → 0.4% |    0ms → 4.4µs |       0 → 1 | `<init>()`                                       | `java.util.concurrent.locks.ReentrantReadWriteLock$Sync` |
|     new | +2.96µs | 0.0% → 0.3% |    0ms → 3.0µs |       0 → 1 | `newDirectoryStream(Path)`                       | `java.nio.file.Files`                                    |

#### Improvements

Functions with the largest decrease in time blocked within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |   Delta |             % |            Time | Contentions | Function                           | Location                                               |
| ------: | ------: | ------------: | --------------: | ----------: | ---------------------------------- | ------------------------------------------------------ |
|  -21.1% | -0.20ms | 71.7% → 68.8% |   0.9ms → 0.7ms |           4 | `loadClass(String, boolean)`       | `java.lang.ClassLoader`                                |
|  -43.8% | -0.03ms |   6.0% → 4.1% |  0.1ms → 44.1µs |       3 → 2 | `<init>(boolean)`                  | `java.util.concurrent.locks.ReentrantReadWriteLock`    |
|  -13.9% | -0.03ms | 18.1% → 19.0% |           0.2ms |       2 → 1 | `loadClassOrNull(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader`               |
| removed | -0.01ms |   1.0% → 0.0% |    13.1µs → 0ms |       1 → 0 | `<init>(Collection, int)`          | `java.nio.file.FileTreeWalker`                         |
| removed | -0.01ms |   0.8% → 0.0% |     9.9µs → 0ms |       1 → 0 | `<clinit>()`                       | `java.nio.file.FileTreeWalker`                         |
|   -4.5% | -1.13µs |   1.9% → 2.2% | 25.2µs → 24.0µs |           1 | `average(List)`                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### Standard library

|  Change |   Delta |             % |           Time | Contentions | Function                           | Location                                            |
| ------: | ------: | ------------: | -------------: | ----------: | ---------------------------------- | --------------------------------------------------- |
|  -21.1% | -0.20ms | 71.7% → 68.8% |  0.9ms → 0.7ms |           4 | `loadClass(String, boolean)`       | `java.lang.ClassLoader`                             |
|  -43.8% | -0.03ms |   6.0% → 4.1% | 0.1ms → 44.1µs |       3 → 2 | `<init>(boolean)`                  | `java.util.concurrent.locks.ReentrantReadWriteLock` |
|  -13.9% | -0.03ms | 18.1% → 19.0% |          0.2ms |       2 → 1 | `loadClassOrNull(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader`            |
| removed | -0.01ms |   1.0% → 0.0% |   13.1µs → 0ms |       1 → 0 | `<init>(Collection, int)`          | `java.nio.file.FileTreeWalker`                      |
| removed | -0.01ms |   0.8% → 0.0% |    9.9µs → 0ms |       1 → 0 | `<clinit>()`                       | `java.nio.file.FileTreeWalker`                      |

##### Ours

| Change |   Delta |           % |            Time | Contentions | Function        | Location                                               |
| -----: | ------: | ----------: | --------------: | ----------: | --------------- | ------------------------------------------------------ |
|  -4.5% | -1.13µs | 1.9% → 2.2% | 25.2µs → 24.0µs |           1 | `average(List)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

#### Lines

Lines with the largest change in contribution to each function's self time.

##### `preVisitDirectory(Object, BasicFileAttributes)` (`java.nio.file.SimpleFileVisitor`)

| Change |   Delta |             % |         Time | Contentions | Location                             |
| -----: | ------: | ------------: | -----------: | ----------: | ------------------------------------ |
|    new | +0.02ms | 0.0% → 100.0% | 0ms → 16.0µs |       0 → 1 | `java.nio.file.SimpleFileVisitor:62` |

##### `<init>(UnixPath, long, DirectoryStream$Filter)` (`sun.nio.fs.UnixDirectoryStream`)

| Change |   Delta |             % |         Time | Contentions | Location                            |
| -----: | ------: | ------------: | -----------: | ----------: | ----------------------------------- |
|    new | +0.01ms | 0.0% → 100.0% | 0ms → 10.4µs |       0 → 1 | `sun.nio.fs.UnixDirectoryStream:52` |

##### `<clinit>()` (`sun.nio.fs.UnixDirectoryStream$UnixDirectoryIterator`)

| Change |   Delta |             % |        Time | Contentions | Location                                                   |
| -----: | ------: | ------------: | ----------: | ----------: | ---------------------------------------------------------- |
|    new | +0.01ms | 0.0% → 100.0% | 0ms → 9.5µs |       0 → 1 | `sun.nio.fs.UnixDirectoryStream$UnixDirectoryIterator:132` |

##### `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`)

| Change |   Delta |              % |           Time | Contentions | Location                   |
| -----: | ------: | -------------: | -------------: | ----------: | -------------------------- |
| +78.2% | +4.63µs | 100.0% → 78.3% | 5.9µs → 10.5µs |           1 | `java.nio.file.Files:2791` |
|    new | +2.92µs |   0.0% → 21.7% |    0ms → 2.9µs |       0 → 1 | `java.nio.file.Files:2794` |

##### `iterator(DirectoryStream)` (`sun.nio.fs.UnixDirectoryStream`)

| Change |   Delta |             % |        Time | Contentions | Location                             |
| -----: | ------: | ------------: | ----------: | ----------: | ------------------------------------ |
|    new | +0.01ms | 0.0% → 100.0% | 0ms → 6.7µs |       0 → 1 | `sun.nio.fs.UnixDirectoryStream:119` |

##### `<init>()` (`java.util.concurrent.locks.ReentrantReadWriteLock$Sync`)

| Change |   Delta |             % |        Time | Contentions | Location                                                     |
| -----: | ------: | ------------: | ----------: | ----------: | ------------------------------------------------------------ |
|    new | +4.42µs | 0.0% → 100.0% | 0ms → 4.4µs |       0 → 1 | `java.util.concurrent.locks.ReentrantReadWriteLock$Sync:339` |

##### `newDirectoryStream(Path)` (`java.nio.file.Files`)

| Change |   Delta |             % |        Time | Contentions | Location                  |
| -----: | ------: | ------------: | ----------: | ----------: | ------------------------- |
|    new | +2.96µs | 0.0% → 100.0% | 0ms → 3.0µs |       0 → 1 | `java.nio.file.Files:482` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

| Change |   Delta |      % |          Time | Contentions | Location                    |
| -----: | ------: | -----: | ------------: | ----------: | --------------------------- |
| -21.1% | -0.20ms | 100.0% | 0.9ms → 0.7ms |           4 | `java.lang.ClassLoader:573` |

##### `<init>(boolean)` (`java.util.concurrent.locks.ReentrantReadWriteLock`)

|  Change |   Delta |             % |           Time | Contentions | Location                                                |
| ------: | ------: | ------------: | -------------: | ----------: | ------------------------------------------------------- |
|  -29.2% | -0.02ms | 66.3% → 83.6% | 0.1ms → 36.8µs |           1 | `java.util.concurrent.locks.ReentrantReadWriteLock:241` |
|  -58.0% | -0.01ms | 22.0% → 16.4% | 17.2µs → 7.2µs |           1 | `java.util.concurrent.locks.ReentrantReadWriteLock:242` |
| removed | -0.01ms |  11.7% → 0.0% |    9.2µs → 0ms |       1 → 0 | `java.util.concurrent.locks.ReentrantReadWriteLock:243` |

##### `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

| Change |   Delta |      % |  Time | Contentions | Location                                     |
| -----: | ------: | -----: | ----: | ----------: | -------------------------------------------- |
| -13.9% | -0.03ms | 100.0% | 0.2ms |       2 → 1 | `jdk.internal.loader.BuiltinClassLoader:651` |

##### `<init>(Collection, int)` (`java.nio.file.FileTreeWalker`)

|  Change |   Delta |             % |         Time | Contentions | Location                           |
| ------: | ------: | ------------: | -----------: | ----------: | ---------------------------------- |
| removed | -0.01ms | 100.0% → 0.0% | 13.1µs → 0ms |       1 → 0 | `java.nio.file.FileTreeWalker:192` |

##### `<clinit>()` (`java.nio.file.FileTreeWalker`)

|  Change |   Delta |             % |        Time | Contentions | Location                          |
| ------: | ------: | ------------: | ----------: | ----------: | --------------------------------- |
| removed | -0.01ms | 100.0% → 0.0% | 9.9µs → 0ms |       1 → 0 | `java.nio.file.FileTreeWalker:57` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |   Delta |      % |            Time | Contentions | Location                                                   |
| -----: | ------: | -----: | --------------: | ----------: | ---------------------------------------------------------- |
|  -4.5% | -1.13µs | 100.0% | 25.2µs → 24.0µs |           1 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:332` |

#### Callers

Callers with the largest change in contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `preVisitDirectory(Object, BasicFileAttributes)` (`java.nio.file.SimpleFileVisitor`)

| Change |   Delta |             % |         Time | Contentions | Caller                                      | Location              |
| -----: | ------: | ------------: | -----------: | ----------: | ------------------------------------------- | --------------------- |
|    new | +0.02ms | 0.0% → 100.0% | 0ms → 16.0µs |       0 → 1 | `walkFileTree(Path, Set, int, FileVisitor)` | `java.nio.file.Files` |

##### `<init>(UnixPath, long, DirectoryStream$Filter)` (`sun.nio.fs.UnixDirectoryStream`)

| Change |   Delta |             % |         Time | Contentions | Caller                                             | Location                            |
| -----: | ------: | ------------: | -----------: | ----------: | -------------------------------------------------- | ----------------------------------- |
|    new | +0.01ms | 0.0% → 100.0% | 0ms → 10.4µs |       0 → 1 | `newDirectoryStream(Path, DirectoryStream$Filter)` | `sun.nio.fs.UnixFileSystemProvider` |

##### `<clinit>()` (`sun.nio.fs.UnixDirectoryStream$UnixDirectoryIterator`)

| Change |   Delta |             % |        Time | Contentions | Caller                      | Location                         |
| -----: | ------: | ------------: | ----------: | ----------: | --------------------------- | -------------------------------- |
|    new | +0.01ms | 0.0% → 100.0% | 0ms → 9.5µs |       0 → 1 | `iterator(DirectoryStream)` | `sun.nio.fs.UnixDirectoryStream` |

##### `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`)

|  Change |   Delta |      % |           Time | Contentions | Caller                            | Location              |
| ------: | ------: | -----: | -------------: | ----------: | --------------------------------- | --------------------- |
| +127.5% | +0.01ms | 100.0% | 5.9µs → 13.5µs |       1 → 2 | `walkFileTree(Path, FileVisitor)` | `java.nio.file.Files` |

##### `iterator(DirectoryStream)` (`sun.nio.fs.UnixDirectoryStream`)

| Change |   Delta |             % |        Time | Contentions | Caller       | Location                         |
| -----: | ------: | ------------: | ----------: | ----------: | ------------ | -------------------------------- |
|    new | +0.01ms | 0.0% → 100.0% | 0ms → 6.7µs |       0 → 1 | `iterator()` | `sun.nio.fs.UnixDirectoryStream` |

##### `<init>()` (`java.util.concurrent.locks.ReentrantReadWriteLock$Sync`)

| Change |   Delta |             % |        Time | Contentions | Caller     | Location                                                     |
| -----: | ------: | ------------: | ----------: | ----------: | ---------- | ------------------------------------------------------------ |
|    new | +4.42µs | 0.0% → 100.0% | 0ms → 4.4µs |       0 → 1 | `<init>()` | `java.util.concurrent.locks.ReentrantReadWriteLock$FairSync` |

##### `newDirectoryStream(Path)` (`java.nio.file.Files`)

| Change |   Delta |             % |        Time | Contentions | Caller                          | Location                       |
| -----: | ------: | ------------: | ----------: | ----------: | ------------------------------- | ------------------------------ |
|    new | +2.96µs | 0.0% → 100.0% | 0ms → 3.0µs |       0 → 1 | `visit(Path, boolean, boolean)` | `java.nio.file.FileTreeWalker` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

| Change |   Delta |      % |          Time | Contentions | Caller              | Location                |
| -----: | ------: | -----: | ------------: | ----------: | ------------------- | ----------------------- |
| -21.1% | -0.20ms | 100.0% | 0.9ms → 0.7ms |           4 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `<init>(boolean)` (`java.util.concurrent.locks.ReentrantReadWriteLock`)

| Change |   Delta |      % |           Time | Contentions | Caller                                           | Location                         |
| -----: | ------: | -----: | -------------: | ----------: | ------------------------------------------------ | -------------------------------- |
| -43.8% | -0.03ms | 100.0% | 0.1ms → 44.1µs |       3 → 2 | `<init>(UnixPath, long, DirectoryStream$Filter)` | `sun.nio.fs.UnixDirectoryStream` |

##### `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

| Change |   Delta |      % |  Time | Contentions | Caller                       | Location                                 |
| -----: | ------: | -----: | ----: | ----------: | ---------------------------- | ---------------------------------------- |
| -13.9% | -0.03ms | 100.0% | 0.2ms |       2 → 1 | `loadClass(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `<init>(Collection, int)` (`java.nio.file.FileTreeWalker`)

|  Change |   Delta |             % |         Time | Contentions | Caller                                      | Location              |
| ------: | ------: | ------------: | -----------: | ----------: | ------------------------------------------- | --------------------- |
| removed | -0.01ms | 100.0% → 0.0% | 13.1µs → 0ms |       1 → 0 | `walkFileTree(Path, Set, int, FileVisitor)` | `java.nio.file.Files` |

##### `<clinit>()` (`java.nio.file.FileTreeWalker`)

|  Change |   Delta |             % |        Time | Contentions | Caller                                      | Location              |
| ------: | ------: | ------------: | ----------: | ----------: | ------------------------------------------- | --------------------- |
| removed | -0.01ms | 100.0% → 0.0% | 9.9µs → 0ms |       1 → 0 | `walkFileTree(Path, Set, int, FileVisitor)` | `java.nio.file.Files` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |   Delta |      % |            Time | Contentions | Caller                     | Location                                               |
| -----: | ------: | -----: | --------------: | ----------: | -------------------------- | ------------------------------------------------------ |
|  -4.5% | -1.13µs | 100.0% | 25.2µs → 24.0µs |           1 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

### Total time

#### Regressions

Functions with the largest increase in time blocked within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

##### Standard library

| Change |   Delta |           % |         Time | Contentions | Function                                         | Location                                                     |
| -----: | ------: | ----------: | -----------: | ----------: | ------------------------------------------------ | ------------------------------------------------------------ |
|    new | +0.02ms | 0.0% → 1.5% | 0ms → 16.2µs |       0 → 2 | `iterator(DirectoryStream)`                      | `sun.nio.fs.UnixDirectoryStream`                             |
|    new | +0.02ms | 0.0% → 1.5% | 0ms → 16.2µs |       0 → 2 | `iterator()`                                     | `sun.nio.fs.UnixDirectoryStream`                             |
|    new | +0.02ms | 0.0% → 1.5% | 0ms → 16.2µs |       0 → 2 | `<init>(Path, Object, DirectoryStream)`          | `java.nio.file.FileTreeWalker$DirectoryNode`                 |
|    new | +0.02ms | 0.0% → 1.5% | 0ms → 16.0µs |       0 → 1 | `preVisitDirectory(Object, BasicFileAttributes)` | `java.nio.file.SimpleFileVisitor`                            |
|    new | +0.01ms | 0.0% → 0.9% |  0ms → 9.5µs |       0 → 1 | `<clinit>()`                                     | `sun.nio.fs.UnixDirectoryStream$UnixDirectoryIterator`       |
|    new | +4.42µs | 0.0% → 0.4% |  0ms → 4.4µs |       0 → 1 | `<init>()`                                       | `java.util.concurrent.locks.ReentrantReadWriteLock$Sync`     |
|    new | +4.42µs | 0.0% → 0.4% |  0ms → 4.4µs |       0 → 1 | `<init>()`                                       | `java.util.concurrent.locks.ReentrantReadWriteLock$FairSync` |

#### Improvements

Functions with the largest decrease in time blocked within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

| Change |   Delta |             % |          Time | Contentions | Function                                             | Location                                                               |
| -----: | ------: | ------------: | ------------: | ----------: | ---------------------------------------------------- | ---------------------------------------------------------------------- |
| -19.7% | -0.23ms | 89.9% → 87.8% | 1.2ms → 0.9ms |       6 → 5 | `loadClass(String)`                                  | `java.lang.ClassLoader`                                                |
| -20.7% | -0.20ms | 73.7% → 71.0% | 1.0ms → 0.8ms |           5 | `average(List)`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| -20.7% | -0.20ms | 73.7% → 71.0% | 1.0ms → 0.8ms |           5 | `computeClusterAverages()`                           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| -20.7% | -0.20ms | 73.7% → 71.0% | 1.0ms → 0.8ms |           5 | `computeDirectly()`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| -20.7% | -0.20ms | 73.7% → 71.0% | 1.0ms → 0.8ms |           5 | `compute()`                                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| -20.7% | -0.20ms | 73.7% → 71.0% | 1.0ms → 0.8ms |           5 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                                   |
| -20.7% | -0.20ms | 73.7% → 71.0% | 1.0ms → 0.8ms |           5 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                                    |
| -20.7% | -0.20ms | 73.7% → 71.0% | 1.0ms → 0.8ms |           5 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
| -20.7% | -0.20ms | 73.7% → 71.0% | 1.0ms → 0.8ms |           5 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                                    |
| -20.7% | -0.20ms | 73.7% → 71.0% | 1.0ms → 0.8ms |           5 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                                    |
| -20.7% | -0.20ms | 73.7% → 71.0% | 1.0ms → 0.8ms |           5 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`                            |
| -21.1% | -0.20ms | 71.7% → 68.8% | 0.9ms → 0.7ms |           4 | `loadClass(String, boolean)`                         | `java.lang.ClassLoader`                                                |
| -46.4% | -0.13ms | 21.0% → 13.7% | 0.3ms → 0.1ms |       1 → 2 | `invoke()`                                           | `java.util.concurrent.ForkJoinTask`                                    |
| -46.4% | -0.13ms | 21.0% → 13.7% | 0.3ms → 0.1ms |       1 → 2 | `lambda$run$0(int, List, int)`                       | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| -46.4% | -0.13ms | 21.0% → 13.7% | 0.3ms → 0.1ms |       1 → 2 | `call()`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a2bd0` |
| -46.4% | -0.13ms | 21.0% → 13.7% | 0.3ms → 0.1ms |       1 → 2 | `exec()`                                             | `java.util.concurrent.ForkJoinTask$AdaptedCallable`                    |
| -18.8% | -0.10ms | 39.2% → 38.7% | 0.5ms → 0.4ms |       2 → 3 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
| -18.8% | -0.10ms | 39.2% → 38.7% | 0.5ms → 0.4ms |       2 → 3 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                                    |
| -18.8% | -0.10ms | 39.2% → 38.7% | 0.5ms → 0.4ms |       2 → 3 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                                    |
| -13.9% | -0.03ms | 18.1% → 19.0% |         0.2ms |       2 → 1 | `loadClassOrNull(String, boolean)`                   | `jdk.internal.loader.BuiltinClassLoader`                               |

##### Standard library

| Change |   Delta |             % |           Time | Contentions | Function                                             | Location                                            |
| -----: | ------: | ------------: | -------------: | ----------: | ---------------------------------------------------- | --------------------------------------------------- |
| -19.7% | -0.23ms | 89.9% → 87.8% |  1.2ms → 0.9ms |       6 → 5 | `loadClass(String)`                                  | `java.lang.ClassLoader`                             |
| -20.7% | -0.20ms | 73.7% → 71.0% |  1.0ms → 0.8ms |           5 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                |
| -20.7% | -0.20ms | 73.7% → 71.0% |  1.0ms → 0.8ms |           5 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                 |
| -20.7% | -0.20ms | 73.7% → 71.0% |  1.0ms → 0.8ms |           5 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| -20.7% | -0.20ms | 73.7% → 71.0% |  1.0ms → 0.8ms |           5 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                 |
| -20.7% | -0.20ms | 73.7% → 71.0% |  1.0ms → 0.8ms |           5 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                 |
| -20.7% | -0.20ms | 73.7% → 71.0% |  1.0ms → 0.8ms |           5 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`         |
| -21.1% | -0.20ms | 71.7% → 68.8% |  0.9ms → 0.7ms |           4 | `loadClass(String, boolean)`                         | `java.lang.ClassLoader`                             |
| -46.4% | -0.13ms | 21.0% → 13.7% |  0.3ms → 0.1ms |       1 → 2 | `invoke()`                                           | `java.util.concurrent.ForkJoinTask`                 |
| -46.4% | -0.13ms | 21.0% → 13.7% |  0.3ms → 0.1ms |       1 → 2 | `exec()`                                             | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
| -18.8% | -0.10ms | 39.2% → 38.7% |  0.5ms → 0.4ms |       2 → 3 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| -18.8% | -0.10ms | 39.2% → 38.7% |  0.5ms → 0.4ms |       2 → 3 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                 |
| -18.8% | -0.10ms | 39.2% → 38.7% |  0.5ms → 0.4ms |       2 → 3 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                 |
| -13.9% | -0.03ms | 18.1% → 19.0% |          0.2ms |       2 → 1 | `loadClassOrNull(String, boolean)`                   | `jdk.internal.loader.BuiltinClassLoader`            |
| -13.9% | -0.03ms | 18.1% → 19.0% |          0.2ms |       2 → 1 | `loadClass(String, boolean)`                         | `jdk.internal.loader.BuiltinClassLoader`            |
| -13.9% | -0.03ms | 18.1% → 19.0% |          0.2ms |       2 → 1 | `loadClass(String, boolean)`                         | `jdk.internal.loader.ClassLoaders$AppClassLoader`   |
|  -9.6% | -0.03ms | 26.3% → 29.0% |          0.3ms |      8 → 11 | `runWith(Object, Runnable)`                          | `java.lang.Thread`                                  |
|  -9.6% | -0.03ms | 26.3% → 29.0% |          0.3ms |      8 → 11 | `run()`                                              | `java.lang.Thread`                                  |
| -38.2% | -0.03ms |   6.0% → 4.5% | 0.1ms → 48.5µs |           3 | `<init>(boolean)`                                    | `java.util.concurrent.locks.ReentrantReadWriteLock` |
| -16.5% | -0.02ms |  9.9% → 10.0% |          0.1ms |      7 → 10 | `walkFileTree(Path, Set, int, FileVisitor)`          | `java.nio.file.Files`                               |

##### Ours

|  Change |   Delta |             % |          Time | Contentions | Function                                 | Location                                                               |
| ------: | ------: | ------------: | ------------: | ----------: | ---------------------------------------- | ---------------------------------------------------------------------- |
|  -20.7% | -0.20ms | 73.7% → 71.0% | 1.0ms → 0.8ms |           5 | `average(List)`                          | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -20.7% | -0.20ms | 73.7% → 71.0% | 1.0ms → 0.8ms |           5 | `computeClusterAverages()`               | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -20.7% | -0.20ms | 73.7% → 71.0% | 1.0ms → 0.8ms |           5 | `computeDirectly()`                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -20.7% | -0.20ms | 73.7% → 71.0% | 1.0ms → 0.8ms |           5 | `compute()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  -46.4% | -0.13ms | 21.0% → 13.7% | 0.3ms → 0.1ms |       1 → 2 | `lambda$run$0(int, List, int)`           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -46.4% | -0.13ms | 21.0% → 13.7% | 0.3ms → 0.1ms |       1 → 2 | `call()`                                 | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a2bd0` |
|   -9.6% | -0.03ms | 26.3% → 29.0% |         0.3ms |      8 → 11 | `deleteRecursively(Path, boolean)`       | `org.renaissance.core.DirUtils`                                        |
|   -9.6% | -0.03ms | 26.3% → 29.0% |         0.3ms |      8 → 11 | `deleteRecursively(Path)`                | `org.renaissance.core.DirUtils`                                        |
|   -9.6% | -0.03ms | 26.3% → 29.0% |         0.3ms |      8 → 11 | `lambda$createScratchDirectory$1(Path)`  | `org.renaissance.core.DirUtils`                                        |
|   -9.6% | -0.03ms | 26.3% → 29.0% |         0.3ms |      8 → 11 | `run()`                                  | `org.renaissance.core.DirUtils$$Lambda.0x0000007801003a68`             |
| removed | -0.02ms |   1.6% → 0.0% |  21.4µs → 0ms |       1 → 0 | `visitFile(Path, BasicFileAttributes)`   | `org.renaissance.core.DirUtils$1`                                      |
| removed | -0.02ms |   1.6% → 0.0% |  21.4µs → 0ms |       1 → 0 | `visitFile(Object, BasicFileAttributes)` | `org.renaissance.core.DirUtils$1`                                      |

#### Callers

Callers with the largest change in contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `iterator(DirectoryStream)` (`sun.nio.fs.UnixDirectoryStream`)

| Change |   Delta |             % |         Time | Contentions | Caller       | Location                         |
| -----: | ------: | ------------: | -----------: | ----------: | ------------ | -------------------------------- |
|    new | +0.02ms | 0.0% → 100.0% | 0ms → 16.2µs |       0 → 2 | `iterator()` | `sun.nio.fs.UnixDirectoryStream` |

##### `iterator()` (`sun.nio.fs.UnixDirectoryStream`)

| Change |   Delta |             % |         Time | Contentions | Caller                                  | Location                                     |
| -----: | ------: | ------------: | -----------: | ----------: | --------------------------------------- | -------------------------------------------- |
|    new | +0.02ms | 0.0% → 100.0% | 0ms → 16.2µs |       0 → 2 | `<init>(Path, Object, DirectoryStream)` | `java.nio.file.FileTreeWalker$DirectoryNode` |

##### `<init>(Path, Object, DirectoryStream)` (`java.nio.file.FileTreeWalker$DirectoryNode`)

| Change |   Delta |             % |         Time | Contentions | Caller                          | Location                       |
| -----: | ------: | ------------: | -----------: | ----------: | ------------------------------- | ------------------------------ |
|    new | +0.02ms | 0.0% → 100.0% | 0ms → 16.2µs |       0 → 2 | `visit(Path, boolean, boolean)` | `java.nio.file.FileTreeWalker` |

##### `preVisitDirectory(Object, BasicFileAttributes)` (`java.nio.file.SimpleFileVisitor`)

| Change |   Delta |             % |         Time | Contentions | Caller                                      | Location              |
| -----: | ------: | ------------: | -----------: | ----------: | ------------------------------------------- | --------------------- |
|    new | +0.02ms | 0.0% → 100.0% | 0ms → 16.0µs |       0 → 1 | `walkFileTree(Path, Set, int, FileVisitor)` | `java.nio.file.Files` |

##### `<clinit>()` (`sun.nio.fs.UnixDirectoryStream$UnixDirectoryIterator`)

| Change |   Delta |             % |        Time | Contentions | Caller                      | Location                         |
| -----: | ------: | ------------: | ----------: | ----------: | --------------------------- | -------------------------------- |
|    new | +0.01ms | 0.0% → 100.0% | 0ms → 9.5µs |       0 → 1 | `iterator(DirectoryStream)` | `sun.nio.fs.UnixDirectoryStream` |

##### `<init>()` (`java.util.concurrent.locks.ReentrantReadWriteLock$Sync`)

| Change |   Delta |             % |        Time | Contentions | Caller     | Location                                                     |
| -----: | ------: | ------------: | ----------: | ----------: | ---------- | ------------------------------------------------------------ |
|    new | +4.42µs | 0.0% → 100.0% | 0ms → 4.4µs |       0 → 1 | `<init>()` | `java.util.concurrent.locks.ReentrantReadWriteLock$FairSync` |

##### `<init>()` (`java.util.concurrent.locks.ReentrantReadWriteLock$FairSync`)

| Change |   Delta |             % |        Time | Contentions | Caller            | Location                                            |
| -----: | ------: | ------------: | ----------: | ----------: | ----------------- | --------------------------------------------------- |
|    new | +4.42µs | 0.0% → 100.0% | 0ms → 4.4µs |       0 → 1 | `<init>(boolean)` | `java.util.concurrent.locks.ReentrantReadWriteLock` |

##### `loadClass(String)` (`java.lang.ClassLoader`)

|  Change |   Delta |             % |          Time | Contentions | Caller                                 | Location                                               |
| ------: | ------: | ------------: | ------------: | ----------: | -------------------------------------- | ------------------------------------------------------ |
|  -21.1% | -0.20ms | 79.8% → 78.4% | 0.9ms → 0.7ms |           4 | `average(List)`                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| removed | -0.02ms |   1.8% → 0.0% |  21.4µs → 0ms |       1 → 0 | `visitFile(Path, BasicFileAttributes)` | `org.renaissance.core.DirUtils$1`                      |
|   -5.4% | -0.01ms | 18.3% → 21.6% |         0.2ms |           1 | `deleteRecursively(Path, boolean)`     | `org.renaissance.core.DirUtils`                        |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |   Delta |      % |          Time | Contentions | Caller                     | Location                                               |
| -----: | ------: | -----: | ------------: | ----------: | -------------------------- | ------------------------------------------------------ |
| -20.7% | -0.20ms | 100.0% | 1.0ms → 0.8ms |           5 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |   Delta |      % |          Time | Contentions | Caller              | Location                                               |
| -----: | ------: | -----: | ------------: | ----------: | ------------------- | ------------------------------------------------------ |
| -20.7% | -0.20ms | 100.0% | 1.0ms → 0.8ms |           5 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |   Delta |      % |          Time | Contentions | Caller              | Location                                               |
| -----: | ------: | -----: | ------------: | ----------: | ------------------- | ------------------------------------------------------ |
| -20.7% | -0.20ms | 100.0% | 1.0ms → 0.8ms |           5 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| -20.7% | -0.20ms | 100.0% | 1.0ms → 0.8ms |           5 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change |   Delta |      % |          Time | Contentions | Caller   | Location                             |
| -----: | ------: | -----: | ------------: | ----------: | -------- | ------------------------------------ |
| -20.7% | -0.20ms | 100.0% | 1.0ms → 0.8ms |           5 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change |   Delta |      % |          Time | Contentions | Caller     | Location                            |
| -----: | ------: | -----: | ------------: | ----------: | ---------- | ----------------------------------- |
| -20.7% | -0.20ms | 100.0% | 1.0ms → 0.8ms |           5 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

| Change |   Delta |             % |          Time | Contentions | Caller                                               | Location                                      |
| -----: | ------: | ------------: | ------------: | ----------: | ---------------------------------------------------- | --------------------------------------------- |
| -20.7% | -0.20ms |        100.0% | 1.0ms → 0.8ms |           5 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| -46.4% | -0.13ms | 28.5% → 19.3% | 0.3ms → 0.1ms |       1 → 2 | `invoke()`                                           | `java.util.concurrent.ForkJoinTask`           |
| -18.8% | -0.10ms | 53.2% → 54.5% | 0.5ms → 0.4ms |       2 → 3 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |   Delta |      % |          Time | Contentions | Caller                                   | Location                            |
| -----: | ------: | -----: | ------------: | ----------: | ---------------------------------------- | ----------------------------------- |
| -20.7% | -0.20ms | 100.0% | 1.0ms → 0.8ms |           5 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

| Change |   Delta |      % |          Time | Contentions | Caller                              | Location                            |
| -----: | ------: | -----: | ------------: | ----------: | ----------------------------------- | ----------------------------------- |
| -20.7% | -0.20ms | 100.0% | 1.0ms → 0.8ms |           5 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change |   Delta |      % |          Time | Contentions | Caller  | Location                                    |
| -----: | ------: | -----: | ------------: | ----------: | ------- | ------------------------------------------- |
| -20.7% | -0.20ms | 100.0% | 1.0ms → 0.8ms |           5 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

| Change |   Delta |      % |          Time | Contentions | Caller              | Location                |
| -----: | ------: | -----: | ------------: | ----------: | ------------------- | ----------------------- |
| -21.1% | -0.20ms | 100.0% | 0.9ms → 0.7ms |           4 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

| Change |   Delta |      % |          Time | Contentions | Caller                         | Location                                    |
| -----: | ------: | -----: | ------------: | ----------: | ------------------------------ | ------------------------------------------- |
| -46.4% | -0.13ms | 100.0% | 0.3ms → 0.1ms |       1 → 2 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |   Delta |      % |          Time | Contentions | Caller   | Location                                                               |
| -----: | ------: | -----: | ------------: | ----------: | -------- | ---------------------------------------------------------------------- |
| -46.4% | -0.13ms | 100.0% | 0.3ms → 0.1ms |       1 → 2 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a2bd0` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a2bd0`)

| Change |   Delta |      % |          Time | Contentions | Caller   | Location                                            |
| -----: | ------: | -----: | ------------: | ----------: | -------- | --------------------------------------------------- |
| -46.4% | -0.13ms | 100.0% | 0.3ms → 0.1ms |       1 → 2 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

| Change |   Delta |      % |          Time | Contentions | Caller     | Location                            |
| -----: | ------: | -----: | ------------: | ----------: | ---------- | ----------------------------------- |
| -46.4% | -0.13ms | 100.0% | 0.3ms → 0.1ms |       1 → 2 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |   Delta |      % |          Time | Contentions | Caller                 | Location                            |
| -----: | ------: | -----: | ------------: | ----------: | ---------------------- | ----------------------------------- |
| -18.8% | -0.10ms | 100.0% | 0.5ms → 0.4ms |       2 → 3 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change |   Delta |      % |          Time | Contentions | Caller   | Location                            |
| -----: | ------: | -----: | ------------: | ----------: | -------- | ----------------------------------- |
| -18.8% | -0.10ms | 100.0% | 0.5ms → 0.4ms |       2 → 3 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change |   Delta |      % |          Time | Contentions | Caller      | Location                                               |
| -----: | ------: | -----: | ------------: | ----------: | ----------- | ------------------------------------------------------ |
| -18.8% | -0.10ms | 100.0% | 0.5ms → 0.4ms |       2 → 3 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

| Change |   Delta |      % |  Time | Contentions | Caller                       | Location                                 |
| -----: | ------: | -----: | ----: | ----------: | ---------------------------- | ---------------------------------------- |
| -13.9% | -0.03ms | 100.0% | 0.2ms |       2 → 1 | `loadClass(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `loadClass(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

| Change |   Delta |      % |  Time | Contentions | Caller                       | Location                                          |
| -----: | ------: | -----: | ----: | ----------: | ---------------------------- | ------------------------------------------------- |
| -13.9% | -0.03ms | 100.0% | 0.2ms |       2 → 1 | `loadClass(String, boolean)` | `jdk.internal.loader.ClassLoaders$AppClassLoader` |

##### `loadClass(String, boolean)` (`jdk.internal.loader.ClassLoaders$AppClassLoader`)

| Change |   Delta |      % |  Time | Contentions | Caller              | Location                |
| -----: | ------: | -----: | ----: | ----------: | ------------------- | ----------------------- |
| -13.9% | -0.03ms | 100.0% | 0.2ms |       2 → 1 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

| Change |   Delta |      % |  Time | Contentions | Caller  | Location           |
| -----: | ------: | -----: | ----: | ----------: | ------- | ------------------ |
|  -9.6% | -0.03ms | 100.0% | 0.3ms |      8 → 11 | `run()` | `java.lang.Thread` |

##### `<init>(boolean)` (`java.util.concurrent.locks.ReentrantReadWriteLock`)

| Change |   Delta |      % |           Time | Contentions | Caller                                           | Location                         |
| -----: | ------: | -----: | -------------: | ----------: | ------------------------------------------------ | -------------------------------- |
| -38.2% | -0.03ms | 100.0% | 0.1ms → 48.5µs |           3 | `<init>(UnixPath, long, DirectoryStream$Filter)` | `sun.nio.fs.UnixDirectoryStream` |

##### `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`)

| Change |   Delta |      % |  Time | Contentions | Caller                            | Location              |
| -----: | ------: | -----: | ----: | ----------: | --------------------------------- | --------------------- |
| -16.5% | -0.02ms | 100.0% | 0.1ms |      7 → 10 | `walkFileTree(Path, FileVisitor)` | `java.nio.file.Files` |

##### `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`)

| Change |   Delta |      % |  Time | Contentions | Caller                    | Location                        |
| -----: | ------: | -----: | ----: | ----------: | ------------------------- | ------------------------------- |
|  -9.6% | -0.03ms | 100.0% | 0.3ms |      8 → 11 | `deleteRecursively(Path)` | `org.renaissance.core.DirUtils` |

##### `deleteRecursively(Path)` (`org.renaissance.core.DirUtils`)

| Change |   Delta |      % |  Time | Contentions | Caller                                  | Location                        |
| -----: | ------: | -----: | ----: | ----------: | --------------------------------------- | ------------------------------- |
|  -9.6% | -0.03ms | 100.0% | 0.3ms |      8 → 11 | `lambda$createScratchDirectory$1(Path)` | `org.renaissance.core.DirUtils` |

##### `lambda$createScratchDirectory$1(Path)` (`org.renaissance.core.DirUtils`)

| Change |   Delta |      % |  Time | Contentions | Caller  | Location                                                   |
| -----: | ------: | -----: | ----: | ----------: | ------- | ---------------------------------------------------------- |
|  -9.6% | -0.03ms | 100.0% | 0.3ms |      8 → 11 | `run()` | `org.renaissance.core.DirUtils$$Lambda.0x0000007801003a68` |

##### `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007801003a68`)

| Change |   Delta |      % |  Time | Contentions | Caller                      | Location           |
| -----: | ------: | -----: | ----: | ----------: | --------------------------- | ------------------ |
|  -9.6% | -0.03ms | 100.0% | 0.3ms |      8 → 11 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `visitFile(Path, BasicFileAttributes)` (`org.renaissance.core.DirUtils$1`)

|  Change |   Delta |             % |         Time | Contentions | Caller                                   | Location                          |
| ------: | ------: | ------------: | -----------: | ----------: | ---------------------------------------- | --------------------------------- |
| removed | -0.02ms | 100.0% → 0.0% | 21.4µs → 0ms |       1 → 0 | `visitFile(Object, BasicFileAttributes)` | `org.renaissance.core.DirUtils$1` |

##### `visitFile(Object, BasicFileAttributes)` (`org.renaissance.core.DirUtils$1`)

|  Change |   Delta |             % |         Time | Contentions | Caller                                      | Location              |
| ------: | ------: | ------------: | -----------: | ----------: | ------------------------------------------- | --------------------- |
| removed | -0.02ms | 100.0% → 0.0% | 21.4µs → 0ms |       1 → 0 | `walkFileTree(Path, Set, int, FileVisitor)` | `java.nio.file.Files` |

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `iterator(DirectoryStream)` (`sun.nio.fs.UnixDirectoryStream`)

| Change |   Delta |            % |        Time | Contentions | Callee       | Location                                               |
| -----: | ------: | -----------: | ----------: | ----------: | ------------ | ------------------------------------------------------ |
|    new | +0.01ms | 0.0% → 58.8% | 0ms → 9.5µs |       0 → 1 | `<clinit>()` | `sun.nio.fs.UnixDirectoryStream$UnixDirectoryIterator` |

##### `iterator()` (`sun.nio.fs.UnixDirectoryStream`)

| Change |   Delta |             % |         Time | Contentions | Callee                      | Location                         |
| -----: | ------: | ------------: | -----------: | ----------: | --------------------------- | -------------------------------- |
|    new | +0.02ms | 0.0% → 100.0% | 0ms → 16.2µs |       0 → 2 | `iterator(DirectoryStream)` | `sun.nio.fs.UnixDirectoryStream` |

##### `<init>(Path, Object, DirectoryStream)` (`java.nio.file.FileTreeWalker$DirectoryNode`)

| Change |   Delta |             % |         Time | Contentions | Callee       | Location                         |
| -----: | ------: | ------------: | -----------: | ----------: | ------------ | -------------------------------- |
|    new | +0.02ms | 0.0% → 100.0% | 0ms → 16.2µs |       0 → 2 | `iterator()` | `sun.nio.fs.UnixDirectoryStream` |

##### `<init>()` (`java.util.concurrent.locks.ReentrantReadWriteLock$FairSync`)

| Change |   Delta |             % |        Time | Contentions | Callee     | Location                                                 |
| -----: | ------: | ------------: | ----------: | ----------: | ---------- | -------------------------------------------------------- |
|    new | +4.42µs | 0.0% → 100.0% | 0ms → 4.4µs |       0 → 1 | `<init>()` | `java.util.concurrent.locks.ReentrantReadWriteLock$Sync` |

##### `loadClass(String)` (`java.lang.ClassLoader`)

| Change |   Delta |             % |          Time | Contentions | Callee                       | Location                                          |
| -----: | ------: | ------------: | ------------: | ----------: | ---------------------------- | ------------------------------------------------- |
| -21.1% | -0.20ms | 79.8% → 78.4% | 0.9ms → 0.7ms |           4 | `loadClass(String, boolean)` | `java.lang.ClassLoader`                           |
| -13.9% | -0.03ms | 20.2% → 21.6% |         0.2ms |       2 → 1 | `loadClass(String, boolean)` | `jdk.internal.loader.ClassLoaders$AppClassLoader` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |   Delta |             % |          Time | Contentions | Callee              | Location                |
| -----: | ------: | ------------: | ------------: | ----------: | ------------------- | ----------------------- |
| -21.1% | -0.20ms | 97.4% → 96.8% | 0.9ms → 0.7ms |           4 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |   Delta |      % |          Time | Contentions | Callee          | Location                                               |
| -----: | ------: | -----: | ------------: | ----------: | --------------- | ------------------------------------------------------ |
| -20.7% | -0.20ms | 100.0% | 1.0ms → 0.8ms |           5 | `average(List)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |   Delta |      % |          Time | Contentions | Callee                     | Location                                               |
| -----: | ------: | -----: | ------------: | ----------: | -------------------------- | ------------------------------------------------------ |
| -20.7% | -0.20ms | 100.0% | 1.0ms → 0.8ms |           5 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| -20.7% | -0.20ms | 100.0% | 1.0ms → 0.8ms |           5 | `computeDirectly()`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change |   Delta |             % |          Time | Contentions | Callee              | Location                                               |
| -----: | ------: | ------------: | ------------: | ----------: | ------------------- | ------------------------------------------------------ |
| -20.7% | -0.20ms |        100.0% | 1.0ms → 0.8ms |           5 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| -18.8% | -0.10ms | 53.2% → 54.5% | 0.5ms → 0.4ms |       2 → 3 | `join()`            | `java.util.concurrent.ForkJoinTask`                    |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change |   Delta |      % |          Time | Contentions | Callee      | Location                                               |
| -----: | ------: | -----: | ------------: | ----------: | ----------- | ------------------------------------------------------ |
| -20.7% | -0.20ms | 100.0% | 1.0ms → 0.8ms |           5 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

| Change |   Delta |             % |          Time | Contentions | Callee   | Location                                            |
| -----: | ------: | ------------: | ------------: | ----------: | -------- | --------------------------------------------------- |
| -20.7% | -0.20ms |        100.0% | 1.0ms → 0.8ms |           5 | `exec()` | `java.util.concurrent.RecursiveTask`                |
| -46.4% | -0.13ms | 28.5% → 19.3% | 0.3ms → 0.1ms |       1 → 2 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |   Delta |      % |          Time | Contentions | Callee     | Location                            |
| -----: | ------: | -----: | ------------: | ----------: | ---------- | ----------------------------------- |
| -20.7% | -0.20ms | 100.0% | 1.0ms → 0.8ms |           5 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

| Change |   Delta |      % |          Time | Contentions | Callee                                               | Location                                      |
| -----: | ------: | -----: | ------------: | ----------: | ---------------------------------------------------- | --------------------------------------------- |
| -20.7% | -0.20ms | 100.0% | 1.0ms → 0.8ms |           5 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change |   Delta |      % |          Time | Contentions | Callee                                   | Location                            |
| -----: | ------: | -----: | ------------: | ----------: | ---------------------------------------- | ----------------------------------- |
| -20.7% | -0.20ms | 100.0% | 1.0ms → 0.8ms |           5 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

| Change |   Delta |      % |          Time | Contentions | Callee                              | Location                            |
| -----: | ------: | -----: | ------------: | ----------: | ----------------------------------- | ----------------------------------- |
| -20.7% | -0.20ms | 100.0% | 1.0ms → 0.8ms |           5 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

| Change |   Delta |      % |          Time | Contentions | Callee     | Location                            |
| -----: | ------: | -----: | ------------: | ----------: | ---------- | ----------------------------------- |
| -46.4% | -0.13ms | 100.0% | 0.3ms → 0.1ms |       1 → 2 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |   Delta |      % |          Time | Contentions | Callee     | Location                            |
| -----: | ------: | -----: | ------------: | ----------: | ---------- | ----------------------------------- |
| -46.4% | -0.13ms | 100.0% | 0.3ms → 0.1ms |       1 → 2 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a2bd0`)

| Change |   Delta |      % |          Time | Contentions | Callee                         | Location                                    |
| -----: | ------: | -----: | ------------: | ----------: | ------------------------------ | ------------------------------------------- |
| -46.4% | -0.13ms | 100.0% | 0.3ms → 0.1ms |       1 → 2 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

| Change |   Delta |      % |          Time | Contentions | Callee   | Location                                                               |
| -----: | ------: | -----: | ------------: | ----------: | -------- | ---------------------------------------------------------------------- |
| -46.4% | -0.13ms | 100.0% | 0.3ms → 0.1ms |       1 → 2 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a2bd0` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |   Delta |      % |          Time | Contentions | Callee     | Location                            |
| -----: | ------: | -----: | ------------: | ----------: | ---------- | ----------------------------------- |
| -18.8% | -0.10ms | 100.0% | 0.5ms → 0.4ms |       2 → 3 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change |   Delta |      % |          Time | Contentions | Callee                                    | Location                                      |
| -----: | ------: | -----: | ------------: | ----------: | ----------------------------------------- | --------------------------------------------- |
| -18.8% | -0.10ms | 100.0% | 0.5ms → 0.4ms |       2 → 3 | `tryRemoveAndExec(ForkJoinTask, boolean)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change |   Delta |      % |          Time | Contentions | Callee                 | Location                            |
| -----: | ------: | -----: | ------------: | ----------: | ---------------------- | ----------------------------------- |
| -18.8% | -0.10ms | 100.0% | 0.5ms → 0.4ms |       2 → 3 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `loadClass(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

| Change |   Delta |      % |  Time | Contentions | Callee                             | Location                                 |
| -----: | ------: | -----: | ----: | ----------: | ---------------------------------- | ---------------------------------------- |
| -13.9% | -0.03ms | 100.0% | 0.2ms |       2 → 1 | `loadClassOrNull(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `loadClass(String, boolean)` (`jdk.internal.loader.ClassLoaders$AppClassLoader`)

| Change |   Delta |      % |  Time | Contentions | Callee                       | Location                                 |
| -----: | ------: | -----: | ----: | ----------: | ---------------------------- | ---------------------------------------- |
| -13.9% | -0.03ms | 100.0% | 0.2ms |       2 → 1 | `loadClass(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

| Change |   Delta |      % |  Time | Contentions | Callee  | Location                                                   |
| -----: | ------: | -----: | ----: | ----------: | ------- | ---------------------------------------------------------- |
|  -9.6% | -0.03ms | 100.0% | 0.3ms |      8 → 11 | `run()` | `org.renaissance.core.DirUtils$$Lambda.0x0000007801003a68` |

##### `run()` (`java.lang.Thread`)

| Change |   Delta |      % |  Time | Contentions | Callee                      | Location           |
| -----: | ------: | -----: | ----: | ----------: | --------------------------- | ------------------ |
|  -9.6% | -0.03ms | 100.0% | 0.3ms |      8 → 11 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `<init>(boolean)` (`java.util.concurrent.locks.ReentrantReadWriteLock`)

| Change |   Delta |           % |        Time | Contentions | Callee     | Location                                                     |
| -----: | ------: | ----------: | ----------: | ----------: | ---------- | ------------------------------------------------------------ |
|    new | +4.42µs | 0.0% → 9.1% | 0ms → 4.4µs |       0 → 1 | `<init>()` | `java.util.concurrent.locks.ReentrantReadWriteLock$FairSync` |

##### `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`)

|  Change |   Delta |             % |         Time | Contentions | Callee                                           | Location                          |
| ------: | ------: | ------------: | -----------: | ----------: | ------------------------------------------------ | --------------------------------- |
| removed | -0.02ms |  16.6% → 0.0% | 21.4µs → 0ms |       1 → 0 | `visitFile(Object, BasicFileAttributes)`         | `org.renaissance.core.DirUtils$1` |
|     new | +0.02ms |  0.0% → 14.9% | 0ms → 16.0µs |       0 → 1 | `preVisitDirectory(Object, BasicFileAttributes)` | `java.nio.file.SimpleFileVisitor` |
| removed | -0.01ms |  10.2% → 0.0% | 13.1µs → 0ms |       1 → 0 | `<init>(Collection, int)`                        | `java.nio.file.FileTreeWalker`    |
| removed | -0.01ms |   7.7% → 0.0% |  9.9µs → 0ms |       1 → 0 | `<clinit>()`                                     | `java.nio.file.FileTreeWalker`    |
|   -0.5% | -0.42µs | 60.9% → 72.6% |        0.1ms |       3 → 7 | `walk(Path)`                                     | `java.nio.file.FileTreeWalker`    |

##### `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`)

| Change |   Delta |             % |  Time | Contentions | Callee                            | Location                |
| -----: | ------: | ------------: | ----: | ----------: | --------------------------------- | ----------------------- |
| -16.5% | -0.02ms | 37.4% → 34.6% | 0.1ms |      7 → 10 | `walkFileTree(Path, FileVisitor)` | `java.nio.file.Files`   |
|  -5.4% | -0.01ms | 62.6% → 65.4% | 0.2ms |           1 | `loadClass(String)`               | `java.lang.ClassLoader` |

##### `deleteRecursively(Path)` (`org.renaissance.core.DirUtils`)

| Change |   Delta |      % |  Time | Contentions | Callee                             | Location                        |
| -----: | ------: | -----: | ----: | ----------: | ---------------------------------- | ------------------------------- |
|  -9.6% | -0.03ms | 100.0% | 0.3ms |      8 → 11 | `deleteRecursively(Path, boolean)` | `org.renaissance.core.DirUtils` |

##### `lambda$createScratchDirectory$1(Path)` (`org.renaissance.core.DirUtils`)

| Change |   Delta |      % |  Time | Contentions | Callee                    | Location                        |
| -----: | ------: | -----: | ----: | ----------: | ------------------------- | ------------------------------- |
|  -9.6% | -0.03ms | 100.0% | 0.3ms |      8 → 11 | `deleteRecursively(Path)` | `org.renaissance.core.DirUtils` |

##### `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007801003a68`)

| Change |   Delta |      % |  Time | Contentions | Callee                                  | Location                        |
| -----: | ------: | -----: | ----: | ----------: | --------------------------------------- | ------------------------------- |
|  -9.6% | -0.03ms | 100.0% | 0.3ms |      8 → 11 | `lambda$createScratchDirectory$1(Path)` | `org.renaissance.core.DirUtils` |

##### `visitFile(Path, BasicFileAttributes)` (`org.renaissance.core.DirUtils$1`)

|  Change |   Delta |             % |         Time | Contentions | Callee              | Location                |
| ------: | ------: | ------------: | -----------: | ----------: | ------------------- | ----------------------- |
| removed | -0.02ms | 100.0% → 0.0% | 21.4µs → 0ms |       1 → 0 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `visitFile(Object, BasicFileAttributes)` (`org.renaissance.core.DirUtils$1`)

|  Change |   Delta |             % |         Time | Contentions | Callee                                 | Location                          |
| ------: | ------: | ------------: | -----------: | ----------: | -------------------------------------- | --------------------------------- |
| removed | -0.02ms | 100.0% → 0.0% | 21.4µs → 0ms |       1 → 0 | `visitFile(Path, BasicFileAttributes)` | `org.renaissance.core.DirUtils$1` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in time blocked in their leaf frame.

|  Change |   Delta |             % |           Time | Contentions | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------: | ------: | ------------: | -------------: | ----------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  +13.2% | +0.03ms | 18.2% → 25.0% |  0.2ms → 0.3ms |           1 | `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|     new | +0.02ms |   0.0% → 2.2% |   0ms → 24.0µs |       0 → 1 | `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a2bd0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`) |
|     new | +0.02ms |   0.0% → 1.5% |   0ms → 16.0µs |       0 → 1 | `preVisitDirectory(Object, BasicFileAttributes)` (`java.nio.file.SimpleFileVisitor`) ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007801003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|     new | +0.01ms |   0.0% → 1.0% |   0ms → 10.4µs |       0 → 1 | `<init>(UnixPath, long, DirectoryStream$Filter)` (`sun.nio.fs.UnixDirectoryStream`) ← `newDirectoryStream(Path, DirectoryStream$Filter)` (`sun.nio.fs.UnixFileSystemProvider`) ← `newDirectoryStream(Path)` (`java.nio.file.Files`) ← `visit(Path, boolean, boolean)` (`java.nio.file.FileTreeWalker`) ← `walk(Path)` ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007801003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|     new | +0.01ms |   0.0% → 0.9% |    0ms → 9.5µs |       0 → 1 | `<clinit>()` (`sun.nio.fs.UnixDirectoryStream$UnixDirectoryIterator`) ← `iterator(DirectoryStream)` (`sun.nio.fs.UnixDirectoryStream`) ← `iterator()` ← `<init>(Path, Object, DirectoryStream)` (`java.nio.file.FileTreeWalker$DirectoryNode`) ← `visit(Path, boolean, boolean)` (`java.nio.file.FileTreeWalker`) ← `walk(Path)` ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007801003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| +127.5% | +0.01ms |   0.5% → 1.3% | 5.9µs → 13.5µs |       1 → 2 | `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007801003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|     new | +0.01ms |   0.0% → 0.6% |    0ms → 6.7µs |       0 → 1 | `iterator(DirectoryStream)` (`sun.nio.fs.UnixDirectoryStream`) ← `iterator()` ← `<init>(Path, Object, DirectoryStream)` (`java.nio.file.FileTreeWalker$DirectoryNode`) ← `visit(Path, boolean, boolean)` (`java.nio.file.FileTreeWalker`) ← `walk(Path)` ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007801003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|     new | +4.42µs |   0.0% → 0.4% |    0ms → 4.4µs |       0 → 1 | `<init>()` (`java.util.concurrent.locks.ReentrantReadWriteLock$Sync`) ← `<init>()` (`java.util.concurrent.locks.ReentrantReadWriteLock$FairSync`) ← `<init>(boolean)` (`java.util.concurrent.locks.ReentrantReadWriteLock`) ← `<init>(UnixPath, long, DirectoryStream$Filter)` (`sun.nio.fs.UnixDirectoryStream`) ← `newDirectoryStream(Path, DirectoryStream$Filter)` (`sun.nio.fs.UnixFileSystemProvider`) ← `newDirectoryStream(Path)` (`java.nio.file.Files`) ← `visit(Path, boolean, boolean)` (`java.nio.file.FileTreeWalker`) ← `walk(Path)` ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007801003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|     new | +2.96µs |   0.0% → 0.3% |    0ms → 3.0µs |       0 → 1 | `newDirectoryStream(Path)` (`java.nio.file.Files`) ← `visit(Path, boolean, boolean)` (`java.nio.file.FileTreeWalker`) ← `walk(Path)` ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007801003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

### Improvements

Call stacks with the largest decrease in time blocked in their leaf frame.

|  Change |   Delta |             % |           Time | Contentions | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------: | ------: | ------------: | -------------: | ----------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -55.1% | -0.15ms | 21.0% → 11.5% |  0.3ms → 0.1ms |           1 | `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a2bd0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`) |
|  -18.3% | -0.08ms | 32.6% → 32.3% |  0.4ms → 0.3ms |           2 | `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  -43.8% | -0.03ms |   6.0% → 4.1% | 0.1ms → 44.1µs |       3 → 2 | `<init>(boolean)` (`java.util.concurrent.locks.ReentrantReadWriteLock`) ← `<init>(UnixPath, long, DirectoryStream$Filter)` (`sun.nio.fs.UnixDirectoryStream`) ← `newDirectoryStream(Path, DirectoryStream$Filter)` (`sun.nio.fs.UnixFileSystemProvider`) ← `newDirectoryStream(Path)` (`java.nio.file.Files`) ← `visit(Path, boolean, boolean)` (`java.nio.file.FileTreeWalker`) ← `walk(Path)` ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007801003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| removed | -0.03ms |   1.9% → 0.0% |   25.2µs → 0ms |       1 → 0 | `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| removed | -0.02ms |   1.6% → 0.0% |   21.4µs → 0ms |       1 → 0 | `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`) ← `loadClass(String, boolean)` ← `loadClass(String, boolean)` (`jdk.internal.loader.ClassLoaders$AppClassLoader`) ← `loadClass(String)` (`java.lang.ClassLoader`) ← `visitFile(Path, BasicFileAttributes)` (`org.renaissance.core.DirUtils$1`) ← `visitFile(Object, BasicFileAttributes)` ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x000000f001003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| removed | -0.01ms |   1.0% → 0.0% |   13.1µs → 0ms |       1 → 0 | `<init>(Collection, int)` (`java.nio.file.FileTreeWalker`) ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x000000f001003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|   -5.4% | -0.01ms | 16.5% → 19.0% |          0.2ms |           1 | `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`) ← `loadClass(String, boolean)` ← `loadClass(String, boolean)` (`jdk.internal.loader.ClassLoaders$AppClassLoader`) ← `loadClass(String)` (`java.lang.ClassLoader`) ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007801003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| removed | -0.01ms |   0.8% → 0.0% |    9.9µs → 0ms |       1 → 0 | `<clinit>()` (`java.nio.file.FileTreeWalker`) ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x000000f001003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

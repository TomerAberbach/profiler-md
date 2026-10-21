# Sampling profile diff

Collected 4,739 samples → 4,903 samples (+164 samples, +3.5%).

| Category         | Change | Delta |             % |       Samples |
| ---------------- | -----: | ----: | ------------: | ------------: |
| Ours             |  +3.9% |  +104 | 55.6% → 55.9% | 2,636 → 2,740 |
| Native           |  +1.3% |   +17 | 28.1% → 27.5% | 1,333 → 1,350 |
| Standard library |  +7.9% |   +51 | 13.6% → 14.2% |     645 → 696 |
| JIT              |  +7.7% |    +5 |          1.4% |       65 → 70 |
| Compiler         | -21.7% |   -13 |   1.3% → 1.0% |       60 → 47 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |             % |   Samples | Function                                                                                        | Location                                                   |
| ------: | ----: | ------------: | --------: | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
|  +26.4% |  +101 |   8.1% → 9.9% | 382 → 483 | `vectorSum()`                                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +24.3% |   +36 |   3.1% → 3.8% | 148 → 184 | `elementData(int)`                                                                              | `java.util.ArrayList`                                      |
|  +29.8% |   +31 |   2.2% → 2.8% | 104 → 135 | `collectClusters(int[])`                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +428.6% |   +30 |   0.1% → 0.8% |    7 → 37 | `grow()`                                                                                        | `java.util.ArrayList`                                      |
|   +4.0% |   +29 | 15.4% → 15.5% | 729 → 758 | `__psynch_cvwait`                                                                               | `libsystem_kernel.dylib`                                   |
|  +17.7% |   +22 |   2.6% → 3.0% | 124 → 146 | `computeIfAbsent(Object, Function)`                                                             | `java.util.HashMap`                                        |
| +100.0% |   +17 |   0.4% → 0.7% |   17 → 34 | `grow(int)`                                                                                     | `java.util.ArrayList`                                      |
|   +1.6% |   +14 | 18.4% → 18.1% | 874 → 888 | `distance(Double[], Double[])`                                                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|     new |    +7 |   0.0% → 0.1% |     0 → 7 | `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>`                                 | `libjvm.dylib`                                             |
|  +83.3% |    +5 |   0.1% → 0.2% |    6 → 11 | `G1RegionMarkStatsCache::add_live_words`                                                        | `libjvm.dylib`                                             |
|     new |    +5 |   0.0% → 0.1% |     0 → 5 | `putVal(int, Object, Object, boolean, boolean)`                                                 | `java.util.HashMap`                                        |
|     new |    +5 |   0.0% → 0.1% |     0 → 5 | `G1FullGCCompactTask::copy_object_to_new_location`                                              | `libjvm.dylib`                                             |
|     new |    +5 |   0.0% → 0.1% |     0 → 5 | `void OopOopIterateDispatch<G1AdjustClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>` | `libjvm.dylib`                                             |
| +400.0% |    +4 |  <0.1% → 0.1% |     1 → 5 | `compute()`                                                                                     | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
| +200.0% |    +4 |  <0.1% → 0.1% |     2 → 6 | `arrayof_oop_disjoint_arraycopy`                                                                | `<unknown>`                                                |
| +200.0% |    +4 |  <0.1% → 0.1% |     2 → 6 | `forEach(BiConsumer)`                                                                           | `java.util.HashMap`                                        |
|  +80.0% |    +4 |   0.1% → 0.2% |     5 → 9 | `copyOf(Object[], int)`                                                                         | `java.util.Arrays`                                         |
|     new |    +4 |   0.0% → 0.1% |     0 → 4 | `putMapEntries(Map, boolean)`                                                                   | `java.util.HashMap`                                        |
| +200.0% |    +4 |  <0.1% → 0.1% |     2 → 6 | `void HeapRegion::apply_to_marked_objects<G1FullGCPrepareTask::G1PrepareCompactLiveClosure>`    | `libjvm.dylib`                                             |
| +400.0% |    +4 |  <0.1% → 0.1% |     1 → 5 | `_sigtramp`                                                                                     | `libsystem_platform.dylib`                                 |

##### Ours

|  Change | Delta |             % |   Samples | Function                                   | Location                                                               |
| ------: | ----: | ------------: | --------: | ------------------------------------------ | ---------------------------------------------------------------------- |
|  +26.4% |  +101 |   8.1% → 9.9% | 382 → 483 | `vectorSum()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  +29.8% |   +31 |   2.2% → 2.8% | 104 → 135 | `collectClusters(int[])`                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   +1.6% |   +14 | 18.4% → 18.1% | 874 → 888 | `distance(Double[], Double[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| +400.0% |    +4 |  <0.1% → 0.1% |     1 → 5 | `compute()`                                | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|     new |    +3 |   0.0% → 0.1% |     0 → 3 | `<init>(JavaKMeans, List, List, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   +0.3% |    +1 |   8.4% → 8.1% | 396 → 397 | `findNearestCentroid()`                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|     new |    +1 |  0.0% → <0.1% |     0 → 1 | `combineResults(Object, Object)`           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|     new |    +1 |  0.0% → <0.1% |     0 → 1 | `apply(int)`                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000003011a2150` |
| +100.0% |    +1 |         <0.1% |     1 → 2 | `combineResults(Object, Object)`           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|     new |    +1 |  0.0% → <0.1% |     0 → 1 | `createSubtask(int, int)`                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |

##### Native

|  Change | Delta |             % |   Samples | Function                                                                                             | Location                   |
| ------: | ----: | ------------: | --------: | ---------------------------------------------------------------------------------------------------- | -------------------------- |
|   +4.0% |   +29 | 15.4% → 15.5% | 729 → 758 | `__psynch_cvwait`                                                                                    | `libsystem_kernel.dylib`   |
|     new |    +7 |   0.0% → 0.1% |     0 → 7 | `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>`                                      | `libjvm.dylib`             |
|  +83.3% |    +5 |   0.1% → 0.2% |    6 → 11 | `G1RegionMarkStatsCache::add_live_words`                                                             | `libjvm.dylib`             |
|     new |    +5 |   0.0% → 0.1% |     0 → 5 | `G1FullGCCompactTask::copy_object_to_new_location`                                                   | `libjvm.dylib`             |
|     new |    +5 |   0.0% → 0.1% |     0 → 5 | `void OopOopIterateDispatch<G1AdjustClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>`      | `libjvm.dylib`             |
| +200.0% |    +4 |  <0.1% → 0.1% |     2 → 6 | `arrayof_oop_disjoint_arraycopy`                                                                     | `<unknown>`                |
| +200.0% |    +4 |  <0.1% → 0.1% |     2 → 6 | `void HeapRegion::apply_to_marked_objects<G1FullGCPrepareTask::G1PrepareCompactLiveClosure>`         | `libjvm.dylib`             |
| +400.0% |    +4 |  <0.1% → 0.1% |     1 → 5 | `_sigtramp`                                                                                          | `libsystem_platform.dylib` |
|  +75.0% |    +3 |          0.1% |     4 → 7 | `G1FullGCMarker::follow_object`                                                                      | `libjvm.dylib`             |
| +300.0% |    +3 |  <0.1% → 0.1% |     1 → 4 | `__psynch_mutexdrop`                                                                                 | `libsystem_kernel.dylib`   |
|     new |    +2 |  0.0% → <0.1% |     0 → 2 | `Arena::grow`                                                                                        | `libjvm.dylib`             |
|  +11.8% |    +2 |          0.4% |   17 → 19 | `pthread_jit_write_protect_np`                                                                       | `libsystem_pthread.dylib`  |
| +200.0% |    +2 |  <0.1% → 0.1% |     1 → 3 | `InstanceKlass::find_method_index`                                                                   | `libjvm.dylib`             |
|  +50.0% |    +2 |          0.1% |     4 → 6 | `void OopOopIterateDispatch<G1MarkAndPushClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `libjvm.dylib`             |
| +200.0% |    +2 |  <0.1% → 0.1% |     1 → 3 | `__gettimeofday`                                                                                     | `libsystem_kernel.dylib`   |
|     new |    +2 |  0.0% → <0.1% |     0 → 2 | `G1FullGCCompactTask::compact_region`                                                                | `libjvm.dylib`             |
| +200.0% |    +2 |  <0.1% → 0.1% |     1 → 3 | `G1BarrierSet::invalidate`                                                                           | `libjvm.dylib`             |
|     new |    +2 |  0.0% → <0.1% |     0 → 2 | `ThreadLocalAllocBuffer::retire_before_allocation`                                                   | `libjvm.dylib`             |
|     new |    +2 |  0.0% → <0.1% |     0 → 2 | `__psynch_cvbroad`                                                                                   | `libsystem_kernel.dylib`   |
|     new |    +2 |  0.0% → <0.1% |     0 → 2 | `pthread_mutex_unlock`                                                                               | `libsystem_pthread.dylib`  |

##### Standard library

|  Change | Delta |            % |   Samples | Function                                        | Location                                       |
| ------: | ----: | -----------: | --------: | ----------------------------------------------- | ---------------------------------------------- |
|  +24.3% |   +36 |  3.1% → 3.8% | 148 → 184 | `elementData(int)`                              | `java.util.ArrayList`                          |
| +428.6% |   +30 |  0.1% → 0.8% |    7 → 37 | `grow()`                                        | `java.util.ArrayList`                          |
|  +17.7% |   +22 |  2.6% → 3.0% | 124 → 146 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap`                            |
| +100.0% |   +17 |  0.4% → 0.7% |   17 → 34 | `grow(int)`                                     | `java.util.ArrayList`                          |
|     new |    +5 |  0.0% → 0.1% |     0 → 5 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap`                            |
| +200.0% |    +4 | <0.1% → 0.1% |     2 → 6 | `forEach(BiConsumer)`                           | `java.util.HashMap`                            |
|  +80.0% |    +4 |  0.1% → 0.2% |     5 → 9 | `copyOf(Object[], int)`                         | `java.util.Arrays`                             |
|     new |    +4 |  0.0% → 0.1% |     0 → 4 | `putMapEntries(Map, boolean)`                   | `java.util.HashMap`                            |
|     new |    +4 |  0.0% → 0.1% |     0 → 4 | `getRawResult()`                                | `java.util.concurrent.RecursiveTask`           |
|     new |    +2 | 0.0% → <0.1% |     0 → 2 | `signalWaiters()`                               | `java.util.concurrent.ForkJoinTask`            |
| +200.0% |    +2 | <0.1% → 0.1% |     1 → 3 | `compareAndSet(long, long)`                     | `java.util.concurrent.atomic.AtomicLong`       |
|  +20.0% |    +1 |         0.1% |     5 → 6 | `awaitDone(int, long)`                          | `java.util.concurrent.ForkJoinTask`            |
|  +33.3% |    +1 |         0.1% |     3 → 4 | `add(Object)`                                   | `java.util.ArrayList`                          |
|  +50.0% |    +1 | <0.1% → 0.1% |     2 → 3 | `get(int)`                                      | `java.util.ArrayList`                          |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `copyInto(Sink, Spliterator)`                   | `java.util.stream.AbstractPipeline`            |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `wrapAndCopyInto(Sink, Spliterator)`            | `java.util.stream.AbstractPipeline`            |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `forEachRemaining(IntConsumer)`                 | `java.util.stream.Streams$RangeIntSpliterator` |
| +100.0% |    +1 |        <0.1% |     1 → 2 | `getAndClearSlot(ForkJoinTask[], int)`          | `java.util.concurrent.ForkJoinPool$WorkQueue`  |
| +100.0% |    +1 |        <0.1% |     1 → 2 | `newLength(int, int, int)`                      | `jdk.internal.util.ArraysSupport`              |
| +100.0% |    +1 |        <0.1% |     1 → 2 | `nextNode()`                                    | `java.util.HashMap$HashIterator`               |

##### JIT

| Change | Delta |            % | Samples | Function                    | Location    |
| -----: | ----: | -----------: | ------: | --------------------------- | ----------- |
|  +1.6% |    +1 |         1.3% | 63 → 64 | `zero_blocks`               | `<unknown>` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `vtable stub`               | `<unknown>` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `I2C/C2I adapters(0xbbe)`   | `<unknown>` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `I2C/C2I adapters(0xabebe)` | `<unknown>` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `I2C/C2I adapters(0xbbaa)`  | `<unknown>` |

##### Compiler

| Change | Delta |            % | Samples | Function                              | Location       |
| -----: | ----: | -----------: | ------: | ------------------------------------- | -------------- |
|    new |    +2 | 0.0% → <0.1% |   0 → 2 | `Compile::disconnect_useless_nodes`   | `libjvm.dylib` |
|    new |    +2 | 0.0% → <0.1% |   0 → 2 | `Node_Backward_Iterator::next`        | `libjvm.dylib` |
|    new |    +2 | 0.0% → <0.1% |   0 → 2 | `PhaseChaitin::bias_color`            | `libjvm.dylib` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseIdealLoop::Dominators`          | `libjvm.dylib` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseIterGVN::transform_old`         | `libjvm.dylib` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseCCP::analyze`                   | `libjvm.dylib` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `Compile::final_graph_reshaping_walk` | `libjvm.dylib` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseChaitin::build_ifg_virtual`     | `libjvm.dylib` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseCFG::partial_latency_of_defs`   | `libjvm.dylib` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseOutput::fill_buffer`            | `libjvm.dylib` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `LoadNode::Identity`                  | `libjvm.dylib` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseCFG::sched_call`                | `libjvm.dylib` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseCFG::schedule_local`            | `libjvm.dylib` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `BCEscapeAnalyzer::BCEscapeAnalyzer`  | `libjvm.dylib` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseCCP::transform`                 | `libjvm.dylib` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `MultiNode::is_CFG`                   | `libjvm.dylib` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseCFG::schedule_late`             | `libjvm.dylib` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseIdealLoop::build_loop_late`     | `libjvm.dylib` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseValues::init_con_caches`        | `libjvm.dylib` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `CProjNode::is_CFG`                   | `libjvm.dylib` |

#### Improvements

Functions with the largest decrease in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |             % |   Samples | Function                                                                                                                     | Location                                                  |
| ------: | ----: | ------------: | --------: | ---------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
|   -5.3% |   -46 | 18.3% → 16.7% | 867 → 821 | `accumulate(Double[], double[])`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  -66.7% |   -36 |   1.1% → 0.4% |   54 → 18 | `add(Object, Object[], int)`                                                                                                 | `java.util.ArrayList`                                     |
|  -53.8% |   -21 |   0.8% → 0.4% |   39 → 18 | `hash(Object)`                                                                                                               | `java.util.HashMap`                                       |
|  -22.2% |    -8 |   0.8% → 0.6% |   36 → 28 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`                                                                    | `java.util.concurrent.ForkJoinPool`                       |
|  -88.9% |    -8 |  0.2% → <0.1% |     9 → 1 | `ObjArrayAllocator::initialize`                                                                                              | `libjvm.dylib`                                            |
| removed |    -8 |   0.2% → 0.0% |     8 → 0 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                            | `libjvm.dylib`                                            |
|  -38.9% |    -7 |   0.4% → 0.2% |   18 → 11 | `semaphore_wait_trap`                                                                                                        | `libsystem_kernel.dylib`                                  |
|  -16.2% |    -6 |   0.8% → 0.6% |   37 → 31 | `G1FullGCMarker::mark_object`                                                                                                | `libjvm.dylib`                                            |
|  -33.3% |    -6 |   0.4% → 0.2% |   18 → 12 | `_platform_bzero`                                                                                                            | `libsystem_platform.dylib`                                |
|  -83.3% |    -5 |  0.1% → <0.1% |     6 → 1 | `Unsafe_Park`                                                                                                                | `libjvm.dylib`                                            |
|   -4.3% |    -5 |   2.4% → 2.2% | 115 → 110 | `doubleValue()`                                                                                                              | `java.lang.Double`                                        |
| removed |    -5 |   0.1% → 0.0% |     5 → 0 | `G1ParScanThreadState::trim_queue_to_threshold`                                                                              | `libjvm.dylib`                                            |
|   -6.1% |    -4 |   1.4% → 1.3% |   66 → 62 | `__psynch_cvsignal`                                                                                                          | `libsystem_kernel.dylib`                                  |
|  -14.3% |    -4 |   0.6% → 0.5% |   28 → 24 | `checkIndex(int, int)`                                                                                                       | `java.util.Objects`                                       |
|  -66.7% |    -4 |  0.1% → <0.1% |     6 → 2 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>`                                                              | `libjvm.dylib`                                            |
|  -26.7% |    -4 |   0.3% → 0.2% |   15 → 11 | `_platform_memset`                                                                                                           | `libsystem_platform.dylib`                                |
| removed |    -4 |   0.1% → 0.0% |     4 → 0 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` | `libjvm.dylib`                                            |
| removed |    -3 |   0.1% → 0.0% |     3 → 0 | `pthread_mutex_lock`                                                                                                         | `libsystem_pthread.dylib`                                 |
|  -42.9% |    -3 |          0.1% |     7 → 4 | `G1FullGCMarker::publish_and_drain_oop_tasks`                                                                                | `libjvm.dylib`                                            |
| removed |    -3 |   0.1% → 0.0% |     3 → 0 | `entrySet()`                                                                                                                 | `java.util.HashMap`                                       |

##### Ours

|  Change | Delta |             % |   Samples | Function                                         | Location                                                   |
| ------: | ----: | ------------: | --------: | ------------------------------------------------ | ---------------------------------------------------------- |
|   -5.3% |   -46 | 18.3% → 16.7% | 867 → 821 | `accumulate(Double[], double[])`                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -75.0% |    -3 |  0.1% → <0.1% |     4 → 1 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `div(double[], int)`                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `forkThreshold()`                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `lambda$collectClusters$0(Double[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `lambda$run$0(int, List, int)`                   | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `<init>(JavaKMeans, int, int)`                   | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |

##### Native

|  Change | Delta |            % | Samples | Function                                                                                                                     | Location                   |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
|  -88.9% |    -8 | 0.2% → <0.1% |   9 → 1 | `ObjArrayAllocator::initialize`                                                                                              | `libjvm.dylib`             |
| removed |    -8 |  0.2% → 0.0% |   8 → 0 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                            | `libjvm.dylib`             |
|  -38.9% |    -7 |  0.4% → 0.2% | 18 → 11 | `semaphore_wait_trap`                                                                                                        | `libsystem_kernel.dylib`   |
|  -16.2% |    -6 |  0.8% → 0.6% | 37 → 31 | `G1FullGCMarker::mark_object`                                                                                                | `libjvm.dylib`             |
|  -33.3% |    -6 |  0.4% → 0.2% | 18 → 12 | `_platform_bzero`                                                                                                            | `libsystem_platform.dylib` |
|  -83.3% |    -5 | 0.1% → <0.1% |   6 → 1 | `Unsafe_Park`                                                                                                                | `libjvm.dylib`             |
| removed |    -5 |  0.1% → 0.0% |   5 → 0 | `G1ParScanThreadState::trim_queue_to_threshold`                                                                              | `libjvm.dylib`             |
|   -6.1% |    -4 |  1.4% → 1.3% | 66 → 62 | `__psynch_cvsignal`                                                                                                          | `libsystem_kernel.dylib`   |
|  -66.7% |    -4 | 0.1% → <0.1% |   6 → 2 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>`                                                              | `libjvm.dylib`             |
|  -26.7% |    -4 |  0.3% → 0.2% | 15 → 11 | `_platform_memset`                                                                                                           | `libsystem_platform.dylib` |
| removed |    -4 |  0.1% → 0.0% |   4 → 0 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` | `libjvm.dylib`             |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `pthread_mutex_lock`                                                                                                         | `libsystem_pthread.dylib`  |
|  -42.9% |    -3 |         0.1% |   7 → 4 | `G1FullGCMarker::publish_and_drain_oop_tasks`                                                                                | `libjvm.dylib`             |
|  -25.0% |    -2 |  0.2% → 0.1% |   8 → 6 | `tlv_get_addr`                                                                                                               | `libdyld.dylib`            |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `_pthread_cond_wait`                                                                                                         | `libsystem_pthread.dylib`  |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `G1CardSetMemoryManager::flush`                                                                                              | `libjvm.dylib`             |
|  -66.7% |    -2 | 0.1% → <0.1% |   3 → 1 | `mach_absolute_time`                                                                                                         | `libsystem_kernel.dylib`   |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `ImmutableOopMap::update_register_map`                                                                                       | `libjvm.dylib`             |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `SafeThreadsListPtr::release_stable_list`                                                                                    | `libjvm.dylib`             |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `pthread_testcancel`                                                                                                         | `libsystem_pthread.dylib`  |

##### Standard library

|  Change | Delta |            % |   Samples | Function                                                  | Location                                      |
| ------: | ----: | -----------: | --------: | --------------------------------------------------------- | --------------------------------------------- |
|  -66.7% |   -36 |  1.1% → 0.4% |   54 → 18 | `add(Object, Object[], int)`                              | `java.util.ArrayList`                         |
|  -53.8% |   -21 |  0.8% → 0.4% |   39 → 18 | `hash(Object)`                                            | `java.util.HashMap`                           |
|  -22.2% |    -8 |  0.8% → 0.6% |   36 → 28 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
|   -4.3% |    -5 |  2.4% → 2.2% | 115 → 110 | `doubleValue()`                                           | `java.lang.Double`                            |
|  -14.3% |    -4 |  0.6% → 0.5% |   28 → 24 | `checkIndex(int, int)`                                    | `java.util.Objects`                           |
| removed |    -3 |  0.1% → 0.0% |     3 → 0 | `entrySet()`                                              | `java.util.HashMap`                           |
|  -75.0% |    -3 | 0.1% → <0.1% |     4 → 1 | `resize()`                                                | `java.util.HashMap`                           |
|  -66.7% |    -2 | 0.1% → <0.1% |     3 → 1 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  -66.7% |    -2 | 0.1% → <0.1% |     3 → 1 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`           |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `push(ForkJoinTask, ForkJoinPool, boolean)`               | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `read(Manifest$FastInputStream, byte[], String, int)`     | `java.util.jar.Attributes`                    |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `accept(Object)`                                          | `java.util.stream.Nodes$FixedNodeBuilder`     |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`           |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  -25.0% |    -1 |         0.1% |     4 → 3 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`           |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `spliterator(double[], int, int, int)`                    | `java.util.Spliterators`                      |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `signalWork()`                                            | `java.util.concurrent.ForkJoinPool`           |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `update(byte[], int, int)`                                | `java.util.zip.CRC32`                         |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `substring(int, int)`                                     | `java.lang.String`                            |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `poll()`                                                  | `java.util.ArrayDeque`                        |

##### Compiler

|  Change | Delta |            % | Samples | Function                                      | Location       |
| ------: | ----: | -----------: | ------: | --------------------------------------------- | -------------- |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `GraphKit::add_safepoint_edges`               | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `PhaseLive::compute`                          | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `IfTrueNode::Opcode`                          | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `Node::is_CFG`                                | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Node::clone`                                 | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseChaitin::elide_copy`                    | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `NTarjan::DFS`                                | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseChaitin::Split`                         | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseOutput::BuildOopMaps`                   | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `MachNode::Opcode`                            | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `BoolNode::Value`                             | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `StoreNode::Ideal`                            | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Node::replace_by`                            | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `ConnectionGraph::optimize_ptr_compare`       | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `ProjNode::Opcode`                            | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `LinearScan::assign_reg_num`                  | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `GraphBuilder::method_return`                 | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `LinearScan::eliminate_spill_moves`           | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `LinearScan::compute_local_live_sets`         | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `LinearScan::sort_intervals_after_allocation` | `libjvm.dylib` |

#### Lines

Lines with the largest change in contribution to each function's self samples.

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |             % |   Samples | Location                                                      |
| -----: | ----: | ------------: | --------: | ------------------------------------------------------------- |
| +38.5% |  +119 | 80.9% → 88.6% | 309 → 428 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:403` |
| -24.7% |   -18 | 19.1% → 11.4% |   73 → 55 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:402` |

##### `elementData(int)` (`java.util.ArrayList`)

| Change | Delta |      % |   Samples | Location                  |
| -----: | ----: | -----: | --------: | ------------------------- |
| +24.3% |   +36 | 100.0% | 148 → 184 | `java.util.ArrayList:411` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % | Samples | Location                                                       |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------- |
| +100.0% |   +18 | 17.3% → 26.7% | 18 → 36 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:213` |
|  +55.0% |   +11 | 19.2% → 23.0% | 20 → 31 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:212` |
|  -30.3% |   -10 | 31.7% → 17.0% | 33 → 23 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |
|  +52.9% |    +9 | 16.3% → 19.3% | 17 → 26 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:211` |
|  +18.8% |    +3 | 15.4% → 14.1% | 16 → 19 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:214` |

##### `grow()` (`java.util.ArrayList`)

|  Change | Delta |      % | Samples | Location                  |
| ------: | ----: | -----: | ------: | ------------------------- |
| +428.6% |   +30 | 100.0% |  7 → 37 | `java.util.ArrayList:244` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

| Change | Delta |             % | Samples | Location                 |
| -----: | ----: | ------------: | ------: | ------------------------ |
| +47.6% |   +20 | 33.9% → 42.5% | 42 → 62 | `java.util.HashMap:1213` |
| -30.8% |    -8 | 21.0% → 12.3% | 26 → 18 | `java.util.HashMap:1207` |
| +41.7% |    +5 |  9.7% → 11.6% | 12 → 17 | `java.util.HashMap:1204` |
| +13.8% |    +4 | 23.4% → 22.6% | 29 → 33 | `java.util.HashMap:1197` |
| +50.0% |    +2 |   3.2% → 4.1% |   4 → 6 | `java.util.HashMap:1228` |

##### `grow(int)` (`java.util.ArrayList`)

|  Change | Delta |             % | Samples | Location                  |
| ------: | ----: | ------------: | ------: | ------------------------- |
|  +73.3% |   +11 | 88.2% → 76.5% | 15 → 26 | `java.util.ArrayList:239` |
| +200.0% |    +4 | 11.8% → 17.6% |   2 → 6 | `java.util.ArrayList:232` |
|     new |    +1 |   0.0% → 2.9% |   0 → 1 | `java.util.ArrayList:233` |
|     new |    +1 |   0.0% → 2.9% |   0 → 1 | `java.util.ArrayList:234` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % |   Samples | Location                                                       |
| ------: | ----: | ------------: | --------: | -------------------------------------------------------------- |
|   +4.9% |   +25 | 58.0% → 59.9% | 507 → 532 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:248` |
|   -5.7% |   -20 | 40.2% → 37.3% | 351 → 331 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:249` |
|  +40.0% |    +6 |   1.7% → 2.4% |   15 → 21 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:250` |
| +300.0% |    +3 |   0.1% → 0.5% |     1 → 4 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:247` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

| Change | Delta |            % | Samples | Location                |
| -----: | ----: | -----------: | ------: | ----------------------- |
|    new |    +3 | 0.0% → 60.0% |   0 → 3 | `java.util.HashMap:634` |
|    new |    +2 | 0.0% → 40.0% |   0 → 2 | `java.util.HashMap:637` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change | Delta |            % | Samples | Location                                                   |
| -----: | ----: | -----------: | ------: | ---------------------------------------------------------- |
|    new |    +3 | 0.0% → 60.0% |   0 → 3 | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask:146` |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask:151` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|  Change | Delta |      % | Samples | Location                 |
| ------: | ----: | -----: | ------: | ------------------------ |
| +200.0% |    +4 | 100.0% |   2 → 6 | `java.util.HashMap:1428` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change | Delta |      % | Samples | Location                |
| -----: | ----: | -----: | ------: | ----------------------- |
| +80.0% |    +4 | 100.0% |   5 → 9 | `java.util.Arrays:3482` |

##### `putMapEntries(Map, boolean)` (`java.util.HashMap`)

| Change | Delta |            % | Samples | Location                |
| -----: | ----: | -----------: | ------: | ----------------------- |
|    new |    +2 | 0.0% → 50.0% |   0 → 2 | `java.util.HashMap:519` |
|    new |    +2 | 0.0% → 50.0% |   0 → 2 | `java.util.HashMap:522` |

##### `<init>(JavaKMeans, List, List, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |            % | Samples | Location                                                       |
| -----: | ----: | -----------: | ------: | -------------------------------------------------------------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:190` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:188` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % |   Samples | Location                                                       |
| ------: | ----: | ------------: | --------: | -------------------------------------------------------------- |
|  +16.1% |   +20 | 31.3% → 36.3% | 124 → 144 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:230` |
|  -60.0% |    -9 |   3.8% → 1.5% |    15 → 6 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:226` |
|  -17.1% |    -7 |  10.4% → 8.6% |   41 → 34 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:229` |
|   -1.5% |    -3 | 51.0% → 50.1% | 202 → 199 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:231` |
| removed |    -1 |   0.3% → 0.0% |     1 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:223` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % | Samples | Location                                                       |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:171` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |      % | Samples | Location                                                      |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:367` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % | Samples | Location                                                       |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:261` |

##### `getRawResult()` (`java.util.concurrent.RecursiveTask`)

| Change | Delta |             % | Samples | Location                                |
| -----: | ----: | ------------: | ------: | --------------------------------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `java.util.concurrent.RecursiveTask:99` |

##### `signalWaiters()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % | Samples | Location                                |
| -----: | ----: | ------------: | ------: | --------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `java.util.concurrent.ForkJoinTask:301` |

##### `compareAndSet(long, long)` (`java.util.concurrent.atomic.AtomicLong`)

|  Change | Delta |      % | Samples | Location                                     |
| ------: | ----: | -----: | ------: | -------------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `java.util.concurrent.atomic.AtomicLong:151` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |            % | Samples | Location                                |
| ------: | ----: | -----------: | ------: | --------------------------------------- |
| removed |    -2 | 40.0% → 0.0% |   2 → 0 | `java.util.concurrent.ForkJoinTask:409` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinTask:435` |
|     new |    +1 | 0.0% → 16.7% |   0 → 1 | `java.util.concurrent.ForkJoinTask:408` |
|     new |    +1 | 0.0% → 16.7% |   0 → 1 | `java.util.concurrent.ForkJoinTask:413` |
|     new |    +1 | 0.0% → 16.7% |   0 → 1 | `java.util.concurrent.ForkJoinTask:422` |

##### `add(Object)` (`java.util.ArrayList`)

| Change | Delta |            % | Samples | Location                  |
| -----: | ----: | -----------: | ------: | ------------------------- |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `java.util.ArrayList:496` |

##### `get(int)` (`java.util.ArrayList`)

| Change | Delta |      % | Samples | Location                  |
| -----: | ----: | -----: | ------: | ------------------------- |
| +50.0% |    +1 | 100.0% |   2 → 3 | `java.util.ArrayList:427` |

##### `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

| Change | Delta |             % | Samples | Location                                |
| -----: | ----: | ------------: | ------: | --------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.stream.AbstractPipeline:508` |

##### `wrapAndCopyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

| Change | Delta |             % | Samples | Location                                |
| -----: | ----: | ------------: | ------: | --------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.stream.AbstractPipeline:499` |

##### `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`)

| Change | Delta |             % | Samples | Location                                           |
| -----: | ----: | ------------: | ------: | -------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.stream.Streams$RangeIntSpliterator:104` |

##### `getAndClearSlot(ForkJoinTask[], int)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change | Delta |      % | Samples | Location                                           |
| ------: | ----: | -----: | ------: | -------------------------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `java.util.concurrent.ForkJoinPool$WorkQueue:1076` |

##### `newLength(int, int, int)` (`jdk.internal.util.ArraysSupport`)

|  Change | Delta |      % | Samples | Location                              |
| ------: | ----: | -----: | ------: | ------------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `jdk.internal.util.ArraysSupport:741` |

##### `nextNode()` (`java.util.HashMap$HashIterator`)

|  Change | Delta |             % | Samples | Location                              |
| ------: | ----: | ------------: | ------: | ------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.HashMap$HashIterator:1608` |
|     new |    +1 |  0.0% → 50.0% |   0 → 1 | `java.util.HashMap$HashIterator:1604` |
|     new |    +1 |  0.0% → 50.0% |   0 → 1 | `java.util.HashMap$HashIterator:1609` |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |             % |   Samples | Location                                                      |
| -----: | ----: | ------------: | --------: | ------------------------------------------------------------- |
| -34.7% |   -50 | 16.6% → 11.4% |  144 → 94 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:411` |
|  +0.6% |    +4 | 83.4% → 88.6% | 723 → 727 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:412` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

| Change | Delta |             % | Samples | Location                  |
| -----: | ----: | ------------: | ------: | ------------------------- |
| -80.0% |   -36 | 83.3% → 50.0% |  45 → 9 | `java.util.ArrayList:482` |

##### `hash(Object)` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Location                |
| -----: | ----: | -----: | ------: | ----------------------- |
| -53.8% |   -21 | 100.0% | 39 → 18 | `java.util.HashMap:338` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % | Samples | Location                                 |
| ------: | ----: | ------------: | ------: | ---------------------------------------- |
|  -50.0% |    -6 | 33.3% → 21.4% |  12 → 6 | `java.util.concurrent.ForkJoinPool:2053` |
| +250.0% |    +5 |  5.6% → 25.0% |   2 → 7 | `java.util.concurrent.ForkJoinPool:2057` |
|  -42.9% |    -3 | 19.4% → 14.3% |   7 → 4 | `java.util.concurrent.ForkJoinPool:2041` |
|  -42.9% |    -3 | 19.4% → 14.3% |   7 → 4 | `java.util.concurrent.ForkJoinPool:2051` |
| removed |    -2 |   5.6% → 0.0% |   2 → 0 | `java.util.concurrent.ForkJoinPool:2047` |

##### `doubleValue()` (`java.lang.Double`)

| Change | Delta |      % |   Samples | Location                |
| -----: | ----: | -----: | --------: | ----------------------- |
|  -4.3% |    -5 | 100.0% | 115 → 110 | `java.lang.Double:1001` |

##### `checkIndex(int, int)` (`java.util.Objects`)

| Change | Delta |      % | Samples | Location                |
| -----: | ----: | -----: | ------: | ----------------------- |
| -14.3% |    -4 | 100.0% | 28 → 24 | `java.util.Objects:385` |

##### `entrySet()` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Location                 |
| ------: | ----: | ------------: | ------: | ------------------------ |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `java.util.HashMap:1099` |

##### `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % | Samples | Location                                       |
| -----: | ----: | -----: | ------: | ---------------------------------------------- |
| -75.0% |    -3 | 100.0% |   4 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans:86` |

##### `div(double[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change | Delta |             % | Samples | Location                                                   |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:339` |

##### `forkThreshold()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % | Samples | Location                                                       |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:198` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % | Samples | Location                                                       |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |             % | Samples | Location                                       |
| ------: | ----: | ------------: | ------: | ---------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans:57` |

##### `<init>(JavaKMeans, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|  Change | Delta |             % | Samples | Location                                                   |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask:136` |

##### `resize()` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Location                |
| ------: | ----: | ------------: | ------: | ----------------------- |
| removed |    -2 |  50.0% → 0.0% |   2 → 0 | `java.util.HashMap:710` |
| removed |    -2 |  50.0% → 0.0% |   2 → 0 | `java.util.HashMap:711` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.HashMap:705` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change | Delta |            % | Samples | Location                                           |
| ------: | ----: | -----------: | ------: | -------------------------------------------------- |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinPool$WorkQueue:1330` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinPool$WorkQueue:1351` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |             % | Samples | Location                                |
| ------: | ----: | ------------: | ------: | --------------------------------------- |
| removed |    -2 |  66.7% → 0.0% |   2 → 0 | `java.util.concurrent.ForkJoinTask:654` |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinTask:652` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.concurrent.ForkJoinTask:651` |

##### `push(ForkJoinTask, ForkJoinPool, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change | Delta |            % | Samples | Location                                           |
| ------: | ----: | -----------: | ------: | -------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinPool$WorkQueue:1152` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinPool$WorkQueue:1154` |

##### `read(Manifest$FastInputStream, byte[], String, int)` (`java.util.jar.Attributes`)

|  Change | Delta |            % | Samples | Location                       |
| ------: | ----: | -----------: | ------: | ------------------------------ |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `java.util.jar.Attributes:370` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `java.util.jar.Attributes:374` |

##### `accept(Object)` (`java.util.stream.Nodes$FixedNodeBuilder`)

|  Change | Delta |             % | Samples | Location                                       |
| ------: | ----: | ------------: | ------: | ---------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `java.util.stream.Nodes$FixedNodeBuilder:1230` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |             % | Samples | Location                                |
| ------: | ----: | ------------: | ------: | --------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinTask:387` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change | Delta |             % | Samples | Location                                           |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinPool$WorkQueue:1314` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |            % | Samples | Location                                 |
| ------: | ----: | -----------: | ------: | ---------------------------------------- |
| removed |    -2 | 50.0% → 0.0% |   2 → 0 | `java.util.concurrent.ForkJoinPool:1846` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinPool:1825` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinPool:1834` |
|     new |    +1 | 0.0% → 33.3% |   0 → 1 | `java.util.concurrent.ForkJoinPool:1837` |
|     new |    +1 | 0.0% → 33.3% |   0 → 1 | `java.util.concurrent.ForkJoinPool:1840` |

##### `spliterator(double[], int, int, int)` (`java.util.Spliterators`)

|  Change | Delta |             % | Samples | Location                     |
| ------: | ----: | ------------: | ------: | ---------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.Spliterators:371` |

##### `signalWork()` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % | Samples | Location                                 |
| ------: | ----: | ------------: | ------: | ---------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinPool:1692` |

##### `update(byte[], int, int)` (`java.util.zip.CRC32`)

|  Change | Delta |             % | Samples | Location                 |
| ------: | ----: | ------------: | ------: | ------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.zip.CRC32:78` |

##### `substring(int, int)` (`java.lang.String`)

|  Change | Delta |             % | Samples | Location                |
| ------: | ----: | ------------: | ------: | ----------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.lang.String:2822` |

##### `poll()` (`java.util.ArrayDeque`)

|  Change | Delta |             % | Samples | Location                   |
| ------: | ----: | ------------: | ------: | -------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.ArrayDeque:536` |

#### Callers

Callers with the largest change in contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |   Samples | Caller              | Location                                                  |
| -----: | ----: | -----: | --------: | ------------------- | --------------------------------------------------------- |
| +26.4% |  +101 | 100.0% | 382 → 483 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `elementData(int)` (`java.util.ArrayList`)

| Change | Delta |      % |   Samples | Caller     | Location              |
| -----: | ----: | -----: | --------: | ---------- | --------------------- |
| +24.3% |   +36 | 100.0% | 148 → 184 | `get(int)` | `java.util.ArrayList` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller              | Location                                                   |
| -----: | ----: | -----: | --------: | ------------------- | ---------------------------------------------------------- |
| +29.8% |   +31 | 100.0% | 104 → 135 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `grow()` (`java.util.ArrayList`)

|  Change | Delta |      % | Samples | Caller                       | Location              |
| ------: | ----: | -----: | ------: | ---------------------------- | --------------------- |
| +428.6% |   +30 | 100.0% |  7 → 37 | `add(Object, Object[], int)` | `java.util.ArrayList` |

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

| Change | Delta |             % |   Samples | Caller                  | Location       |
| -----: | ----: | ------------: | --------: | ----------------------- | -------------- |
|  +4.5% |   +32 | 97.5% → 98.0% | 711 → 743 | `Parker::park`          | `libjvm.dylib` |
| -16.7% |    -3 |   2.5% → 2.0% |   18 → 15 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

| Change | Delta |      % |   Samples | Caller                   | Location                                                   |
| -----: | ----: | -----: | --------: | ------------------------ | ---------------------------------------------------------- |
| +17.7% |   +22 | 100.0% | 124 → 146 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `grow(int)` (`java.util.ArrayList`)

| Change | Delta |              % | Samples | Caller               | Location              |
| -----: | ----: | -------------: | ------: | -------------------- | --------------------- |
| +94.1% |   +16 | 100.0% → 97.1% | 17 → 33 | `grow()`             | `java.util.ArrayList` |
|    new |    +1 |    0.0% → 2.9% |   0 → 1 | `addAll(Collection)` | `java.util.ArrayList` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller                  | Location                                                   |
| -----: | ----: | -----: | --------: | ----------------------- | ---------------------------------------------------------- |
|  +1.6% |   +14 | 100.0% | 874 → 888 | `findNearestCentroid()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                  | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------------- | -------------- |
|    new |    +7 | 0.0% → 100.0% |   0 → 7 | `G1AdjustRegionClosure::do_heap_region` | `libjvm.dylib` |

##### `G1RegionMarkStatsCache::add_live_words` (`libjvm.dylib`)

| Change | Delta |              % | Samples | Caller                                                          | Location       |
| -----: | ----: | -------------: | ------: | --------------------------------------------------------------- | -------------- |
| +50.0% |    +3 | 100.0% → 81.8% |   6 → 9 | `G1FullGCMarker::mark_object`                                   | `libjvm.dylib` |
|    new |    +2 |   0.0% → 18.2% |   0 → 2 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` | `libjvm.dylib` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

| Change | Delta |             % | Samples | Caller                        | Location            |
| -----: | ----: | ------------: | ------: | ----------------------------- | ------------------- |
|    new |    +5 | 0.0% → 100.0% |   0 → 5 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `G1FullGCCompactTask::copy_object_to_new_location` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                                               | Location       |
| -----: | ----: | -----------: | ------: | ---------------------------------------------------- | -------------- |
|    new |    +4 | 0.0% → 80.0% |   0 → 4 | `G1FullGCCompactTask::G1CompactRegionClosure::apply` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `G1FullGCCompactTask::compact_region`                | `libjvm.dylib` |

##### `void OopOopIterateDispatch<G1AdjustClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                                          | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------- | -------------- |
|    new |    +5 | 0.0% → 100.0% |   0 → 5 | `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>` | `libjvm.dylib` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|  Change | Delta |      % | Samples | Caller   | Location                             |
| ------: | ----: | -----: | ------: | -------- | ------------------------------------ |
| +400.0% |    +4 | 100.0% |   1 → 5 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `arrayof_oop_disjoint_arraycopy` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller               | Location              |
| ------: | ----: | -----: | ------: | -------------------- | --------------------- |
| +200.0% |    +4 | 100.0% |   2 → 6 | `addAll(Collection)` | `java.util.ArrayList` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|  Change | Delta |      % | Samples | Caller            | Location                                    |
| ------: | ----: | -----: | ------: | ----------------- | ------------------------------------------- |
| +200.0% |    +4 | 100.0% |   2 → 6 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|  Change | Delta |             % | Samples | Caller      | Location              |
| ------: | ----: | ------------: | ------: | ----------- | --------------------- |
| +150.0% |    +3 | 40.0% → 55.6% |   2 → 5 | `grow(int)` | `java.util.ArrayList` |
|  +33.3% |    +1 | 60.0% → 44.4% |   3 → 4 | `toArray()` | `java.util.ArrayList` |

##### `putMapEntries(Map, boolean)` (`java.util.HashMap`)

| Change | Delta |             % | Samples | Caller        | Location            |
| -----: | ----: | ------------: | ------: | ------------- | ------------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `<init>(Map)` | `java.util.HashMap` |

##### `void HeapRegion::apply_to_marked_objects<G1FullGCPrepareTask::G1PrepareCompactLiveClosure>` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                      | Location       |
| ------: | ----: | -----: | ------: | --------------------------- | -------------- |
| +200.0% |    +4 | 100.0% |   2 → 6 | `G1FullGCPrepareTask::work` | `libjvm.dylib` |

##### `<init>(JavaKMeans, List, List, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % | Samples | Caller                    | Location                                                   |
| -----: | ----: | ------------: | ------: | ------------------------- | ---------------------------------------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `createSubtask(int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller              | Location                                                   |
| -----: | ----: | -----: | --------: | ------------------- | ---------------------------------------------------------- |
|  +0.3% |    +1 | 100.0% | 396 → 397 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % | Samples | Caller      | Location                                               |
| -----: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000003011a2150`)

| Change | Delta |             % | Samples | Caller        | Location                           |
| -----: | ----: | ------------: | ------: | ------------- | ---------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `accept(int)` | `java.util.stream.IntPipeline$1$1` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |      % | Samples | Caller      | Location                                               |
| ------: | ----: | -----: | ------: | ----------- | ------------------------------------------------------ |
| +100.0% |    +1 | 100.0% |   1 → 2 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % | Samples | Caller      | Location                                               |
| -----: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `G1FullGCMarker::follow_object` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                  | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------- | -------------- |
| +150.0% |    +3 | 50.0% → 71.4% |   2 → 5 | `G1FullGCMarker::follow_marking_stacks` | `libjvm.dylib` |

##### `__psynch_mutexdrop` (`libsystem_kernel.dylib`)

|  Change | Delta |      % | Samples | Caller                                | Location                  |
| ------: | ----: | -----: | ------: | ------------------------------------- | ------------------------- |
| +300.0% |    +3 | 100.0% |   1 → 4 | `_pthread_mutex_firstfit_unlock_slow` | `libsystem_pthread.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller           | Location       |
| -----: | ----: | -----------: | ------: | ---------------- | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `Matcher::xform` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `PhaseIFG::init` | `libjvm.dylib` |

##### `pthread_jit_write_protect_np` (`libsystem_pthread.dylib`)

|  Change | Delta |             % | Samples | Caller                        | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------- | -------------- |
|  -60.0% |    -3 | 29.4% → 10.5% |   5 → 2 | `OptoRuntime::new_array_C`    | `libjvm.dylib` |
|  +50.0% |    +3 | 35.3% → 47.4% |   6 → 9 | `Unsafe_Park`                 | `libjvm.dylib` |
| +200.0% |    +2 |  5.9% → 15.8% |   1 → 3 | `Unsafe_Unpark`               | `libjvm.dylib` |
| removed |    -1 |   5.9% → 0.0% |   1 → 0 | `JVM_ReferenceRefersTo`       | `libjvm.dylib` |
|     new |    +1 |   0.0% → 5.3% |   0 → 1 | `OptoRuntime::new_instance_C` | `libjvm.dylib` |

##### `InstanceKlass::find_method_index` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                                  | Location       |
| ------: | ----: | -------------: | ------: | --------------------------------------- | -------------- |
| +100.0% |    +1 | 100.0% → 66.7% |   1 → 2 | `InstanceKlass::uncached_lookup_method` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 33.3% |   0 → 1 | `InstanceKlass::find_method`            | `libjvm.dylib` |

##### `void OopOopIterateDispatch<G1MarkAndPushClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                        | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------------- | -------------- |
| +300.0% |    +3 | 25.0% → 66.7% |   1 → 4 | `G1FullGCMarker::follow_marking_stacks`       | `libjvm.dylib` |
|  -33.3% |    -1 | 75.0% → 33.3% |   3 → 2 | `G1FullGCMarker::publish_and_drain_oop_tasks` | `libjvm.dylib` |

##### `__gettimeofday` (`libsystem_kernel.dylib`)

| Change | Delta |            % | Samples | Caller         | Location       |
| -----: | ----: | -----------: | ------: | -------------- | -------------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `Parker::park` | `libjvm.dylib` |

##### `G1FullGCCompactTask::compact_region` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                      | Location       |
| -----: | ----: | ------------: | ------: | --------------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `G1FullGCCompactTask::work` | `libjvm.dylib` |

##### `G1BarrierSet::invalidate` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                           | Location              |
| ------: | ----: | -------------: | ------: | -------------------------------- | --------------------- |
| +100.0% |    +1 | 100.0% → 66.7% |   1 → 2 | `arrayof_oop_disjoint_arraycopy` | `<unknown>`           |
|     new |    +1 |   0.0% → 33.3% |   0 → 1 | `addAll(Collection)`             | `java.util.ArrayList` |

##### `ThreadLocalAllocBuffer::retire_before_allocation` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                   | Location       |
| -----: | ----: | ------------: | ------: | ------------------------ | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `MemAllocator::allocate` | `libjvm.dylib` |

##### `__psynch_cvbroad` (`libsystem_kernel.dylib`)

| Change | Delta |            % | Samples | Caller                              | Location       |
| -----: | ----: | -----------: | ------: | ----------------------------------- | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `VMThread::wait_until_executed`     | `libjvm.dylib` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `TaskTerminator::offer_termination` | `libjvm.dylib` |

##### `pthread_mutex_unlock` (`libsystem_pthread.dylib`)

| Change | Delta |             % | Samples | Caller           | Location       |
| -----: | ----: | ------------: | ------: | ---------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `Parker::unpark` | `libjvm.dylib` |

##### `getRawResult()` (`java.util.concurrent.RecursiveTask`)

| Change | Delta |             % | Samples | Caller   | Location                            |
| -----: | ----: | ------------: | ------: | -------- | ----------------------------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `signalWaiters()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |            % | Samples | Caller                 | Location                            |
| -----: | ----: | -----------: | ------: | ---------------------- | ----------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `setDone()`            | `java.util.concurrent.ForkJoinTask` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `compareAndSet(long, long)` (`java.util.concurrent.atomic.AtomicLong`)

|  Change | Delta |      % | Samples | Caller      | Location           |
| ------: | ----: | -----: | ------: | ----------- | ------------------ |
| +200.0% |    +2 | 100.0% |   1 → 3 | `next(int)` | `java.util.Random` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |      % | Samples | Caller   | Location                            |
| -----: | ----: | -----: | ------: | -------- | ----------------------------------- |
| +20.0% |    +1 | 100.0% |   5 → 6 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `add(Object)` (`java.util.ArrayList`)

| Change | Delta |      % | Samples | Caller                   | Location                                                   |
| -----: | ----: | -----: | ------: | ------------------------ | ---------------------------------------------------------- |
| +33.3% |    +1 | 100.0% |   3 → 4 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `get(int)` (`java.util.ArrayList`)

|  Change | Delta |             % | Samples | Caller        | Location                                                  |
| ------: | ----: | ------------: | ------: | ------------- | --------------------------------------------------------- |
| +100.0% |    +1 | 50.0% → 66.7% |   1 → 2 | `vectorSum()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

| Change | Delta |             % | Samples | Caller                               | Location                            |
| -----: | ----: | ------------: | ------: | ------------------------------------ | ----------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `wrapAndCopyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `wrapAndCopyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

| Change | Delta |             % | Samples | Caller                                        | Location                            |
| -----: | ----: | ------------: | ------: | --------------------------------------------- | ----------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `evaluate(Spliterator, boolean, IntFunction)` | `java.util.stream.AbstractPipeline` |

##### `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`)

| Change | Delta |             % | Samples | Caller                       | Location                      |
| -----: | ----: | ------------: | ------: | ---------------------------- | ----------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `forEachRemaining(Consumer)` | `java.util.Spliterator$OfInt` |

##### `getAndClearSlot(ForkJoinTask[], int)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change | Delta |      % | Samples | Caller                                    | Location                                      |
| ------: | ----: | -----: | ------: | ----------------------------------------- | --------------------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `tryRemoveAndExec(ForkJoinTask, boolean)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `newLength(int, int, int)` (`jdk.internal.util.ArraysSupport`)

|  Change | Delta |      % | Samples | Caller      | Location              |
| ------: | ----: | -----: | ------: | ----------- | --------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `grow(int)` | `java.util.ArrayList` |

##### `nextNode()` (`java.util.HashMap$HashIterator`)

|  Change | Delta |      % | Samples | Caller   | Location                          |
| ------: | ----: | -----: | ------: | -------- | --------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `next()` | `java.util.HashMap$EntryIterator` |

##### `zero_blocks` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                              | Location                                                   |
| ------: | ----: | ------------: | ------: | ----------------------------------- | ---------------------------------------------------------- |
|  -27.9% |   -12 | 68.3% → 48.4% | 43 → 31 | `merge(Object, Object, BiFunction)` | `java.util.HashMap`                                        |
|  +57.1% |    +8 | 22.2% → 34.4% | 14 → 22 | `grow(int)`                         | `java.util.ArrayList`                                      |
| +175.0% |    +7 |  6.3% → 17.2% |  4 → 11 | `findNearestCentroid()`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |    -2 |   3.2% → 0.0% |   2 → 0 | `resize()`                          | `java.util.HashMap`                                        |

##### `vtable stub` (`<unknown>`)

| Change | Delta |             % | Samples | Caller      | Location                                               |
| -----: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `I2C/C2I adapters(0xbbe)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                 | Location                            |
| -----: | ----: | ------------: | ------: | ---------------------- | ----------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `I2C/C2I adapters(0xabebe)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                     | Location                                     |
| -----: | ----: | ------------: | ------: | ------------------------------------------ | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `checkResource(String, boolean, JarEntry)` | `jdk.internal.loader.URLClassPath$JarLoader` |

##### `I2C/C2I adapters(0xbbaa)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                              | Location                            |
| -----: | ----: | ------------: | ------: | ----------------------------------- | ----------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `Compile::disconnect_useless_nodes` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                   | Location       |
| -----: | ----: | ------------: | ------: | ---------------------------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |

##### `Node_Backward_Iterator::next` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                         | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------ | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |

##### `PhaseChaitin::bias_color` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                            | Location       |
| -----: | ----: | -----------: | ------: | --------------------------------- | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `PhaseChaitin::Select`            | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                               | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                   | Location       |
| -----: | ----: | ------------: | ------: | ------------------------ | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseIterGVN::optimize` | `libjvm.dylib` |

##### `PhaseCCP::analyze` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller               | Location       |
| -----: | ----: | ------------: | ------: | -------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseCCP::PhaseCCP` | `libjvm.dylib` |

##### `Compile::final_graph_reshaping_walk` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                           | Location       |
| -----: | ----: | ------------: | ------: | -------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `Compile::final_graph_reshaping` | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_virtual` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                            | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseCFG::partial_latency_of_defs` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                         | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------ | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |

##### `PhaseOutput::fill_buffer` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                | Location       |
| -----: | ----: | ------------: | ------: | --------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseOutput::Output` | `libjvm.dylib` |

##### `LoadNode::Identity` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                | Location       |
| -----: | ----: | ------------: | ------: | --------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `GraphKit::make_load` | `libjvm.dylib` |

##### `PhaseCFG::sched_call` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                     | Location       |
| -----: | ----: | ------------: | ------: | -------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseCFG::schedule_local` | `libjvm.dylib` |

##### `PhaseCFG::schedule_local` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                         | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------ | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |

##### `BCEscapeAnalyzer::BCEscapeAnalyzer` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                           | Location       |
| -----: | ----: | ------------: | ------: | -------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `ConnectionGraph::add_call_node` | `libjvm.dylib` |

##### `PhaseCCP::transform` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                   | Location       |
| -----: | ----: | ------------: | ------: | ------------------------ | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseCCP::do_transform` | `libjvm.dylib` |

##### `MultiNode::is_CFG` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                               | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseCFG::schedule_late` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                         | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------ | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                               | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseValues::init_con_caches` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller             | Location       |
| -----: | ----: | ------------: | ------: | ------------------ | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `Compile::Compile` | `libjvm.dylib` |

##### `CProjNode::is_CFG` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                               | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |   Samples | Caller        | Location                                                  |
| -----: | ----: | -----: | --------: | ------------- | --------------------------------------------------------- |
|  -5.3% |   -46 | 100.0% | 867 → 821 | `vectorSum()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

| Change | Delta |      % | Samples | Caller        | Location              |
| -----: | ----: | -----: | ------: | ------------- | --------------------- |
| -66.7% |   -36 | 100.0% | 54 → 18 | `add(Object)` | `java.util.ArrayList` |

##### `hash(Object)` (`java.util.HashMap`)

|  Change | Delta |              % | Samples | Caller                              | Location            |
| ------: | ----: | -------------: | ------: | ----------------------------------- | ------------------- |
|  -52.6% |   -20 | 97.4% → 100.0% | 38 → 18 | `computeIfAbsent(Object, Function)` | `java.util.HashMap` |
| removed |    -1 |    2.6% → 0.0% |   1 → 0 | `putMapEntries(Map, boolean)`       | `java.util.HashMap` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % | Samples | Caller                 | Location                            |
| -----: | ----: | -----: | ------: | ---------------------- | ----------------------------------- |
| -22.2% |    -8 | 100.0% | 36 → 28 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `ObjArrayAllocator::initialize` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                          | Location       |
| ------: | ----: | -------------: | ------: | ------------------------------- | -------------- |
|  -87.5% |    -7 | 88.9% → 100.0% |   8 → 1 | `MemAllocator::allocate`        | `libjvm.dylib` |
| removed |    -1 |   11.1% → 0.0% |   1 → 0 | `CollectedHeap::array_allocate` | `libjvm.dylib` |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                          | Location       |
| ------: | ----: | -----------: | ------: | ----------------------------------------------- | -------------- |
| removed |    -6 | 75.0% → 0.0% |   6 → 0 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib` |
| removed |    -2 | 25.0% → 0.0% |   2 → 0 | `G1ParScanThreadState::steal_and_trim_queue`    | `libjvm.dylib` |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

| Change | Delta |             % | Samples | Caller              | Location       |
| -----: | ----: | ------------: | ------: | ------------------- | -------------- |
| -46.7% |    -7 | 83.3% → 72.7% |  15 → 8 | `WorkerThread::run` | `libjvm.dylib` |

##### `G1FullGCMarker::mark_object` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                                                                               | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------- | -------------- |
|  -20.0% |    -7 | 94.6% → 90.3% | 35 → 28 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>`                                      | `libjvm.dylib` |
|     new |    +2 |   0.0% → 6.5% |   0 → 2 | `G1FullGCMarker::follow_marking_stacks`                                                              | `libjvm.dylib` |
| removed |    -1 |   2.7% → 0.0% |   1 → 0 | `void OopOopIterateDispatch<G1MarkAndPushClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `libjvm.dylib` |

##### `_platform_bzero` (`libsystem_platform.dylib`)

|  Change | Delta |              % | Samples | Caller                          | Location       |
| ------: | ----: | -------------: | ------: | ------------------------------- | -------------- |
|  -29.4% |    -5 | 94.4% → 100.0% | 17 → 12 | `MemAllocator::allocate`        | `libjvm.dylib` |
| removed |    -1 |    5.6% → 0.0% |   1 → 0 | `GraphKit::create_and_xform_if` | `libjvm.dylib` |

##### `Unsafe_Park` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                | Location                   |
| -----: | ----: | -----: | ------: | --------------------- | -------------------------- |
| -83.3% |    -5 | 100.0% |   6 → 1 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `doubleValue()` (`java.lang.Double`)

| Change | Delta |             % |  Samples | Caller                           | Location                                                   |
| -----: | ----: | ------------: | -------: | -------------------------------- | ---------------------------------------------------------- |
|  -9.7% |   -10 | 89.6% → 84.5% | 103 → 93 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| +41.7% |    +5 | 10.4% → 15.5% |  12 → 17 | `distance(Double[], Double[])`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `G1ParScanThreadState::trim_queue_to_threshold` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                       | Location       |
| ------: | ----: | -----------: | ------: | -------------------------------------------- | -------------- |
| removed |    -4 | 80.0% → 0.0% |   4 → 0 | `G1ParScanThreadState::steal_and_trim_queue` | `libjvm.dylib` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `G1ParEvacuateFollowersClosure::do_void`     | `libjvm.dylib` |

##### `__psynch_cvsignal` (`libsystem_kernel.dylib`)

| Change | Delta |              % | Samples | Caller                      | Location       |
| -----: | ----: | -------------: | ------: | --------------------------- | -------------- |
|  -7.6% |    -5 | 100.0% → 98.4% | 66 → 61 | `Unsafe_Unpark`             | `libjvm.dylib` |
|    new |    +1 |    0.0% → 1.6% |   0 → 1 | `G1ServiceThread::schedule` | `libjvm.dylib` |

##### `checkIndex(int, int)` (`java.util.Objects`)

| Change | Delta |      % | Samples | Caller     | Location              |
| -----: | ----: | -----: | ------: | ---------- | --------------------- |
| -14.3% |    -4 | 100.0% | 28 → 24 | `get(int)` | `java.util.ArrayList` |

##### `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                                  | Location       |
| ------: | ----: | -------------: | ------: | --------------------------------------- | -------------- |
|  -50.0% |    -2 | 66.7% → 100.0% |   4 → 2 | `G1FullGCMarker::complete_marking`      | `libjvm.dylib` |
| removed |    -2 |   33.3% → 0.0% |   2 → 0 | `G1FullGCMarker::follow_marking_stacks` | `libjvm.dylib` |

##### `_platform_memset` (`libsystem_platform.dylib`)

|  Change | Delta |            % | Samples | Caller                                        | Location       |
| ------: | ----: | -----------: | ------: | --------------------------------------------- | -------------- |
| removed |    -2 | 13.3% → 0.0% |   2 → 0 | `MemAllocator::mem_allocate_inside_tlab_slow` | `libjvm.dylib` |
| removed |    -1 |  6.7% → 0.0% |   1 → 0 | `ConstMethod::copy_stackmap_data`             | `libjvm.dylib` |
| removed |    -1 |  6.7% → 0.0% |   1 → 0 | `G1BatchedTask::work`                         | `libjvm.dylib` |
| removed |    -1 |  6.7% → 0.0% |   1 → 0 | `Parse::do_one_bytecode`                      | `libjvm.dylib` |
|     new |    +1 |  0.0% → 9.1% |   0 → 1 | `BlockListBuilder::mark_loops`                | `libjvm.dylib` |

##### `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                            | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------------- | -------------- |
| removed |    -2 | 50.0% → 0.0% |   2 → 0 | `G1ParScanThreadState::trim_queue_to_threshold`   | `libjvm.dylib` |
| removed |    -2 | 50.0% → 0.0% |   2 → 0 | `G1ParScanThreadState::do_copy_to_survivor_space` | `libjvm.dylib` |

##### `pthread_mutex_lock` (`libsystem_pthread.dylib`)

|  Change | Delta |            % | Samples | Caller                           | Location                  |
| ------: | ----: | -----------: | ------: | -------------------------------- | ------------------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `_pthread_cond_wait`             | `libsystem_pthread.dylib` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `ThreadCritical::ThreadCritical` | `libjvm.dylib`            |

##### `G1FullGCMarker::publish_and_drain_oop_tasks` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                  | Location       |
| -----: | ----: | -----: | ------: | --------------------------------------- | -------------- |
| -42.9% |    -3 | 100.0% |   7 → 4 | `G1FullGCMarker::follow_marking_stacks` | `libjvm.dylib` |

##### `entrySet()` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Caller                        | Location            |
| ------: | ----: | ------------: | ------: | ----------------------------- | ------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |             % | Samples | Caller       | Location                                                               |
| ------: | ----: | ------------: | ------: | ------------ | ---------------------------------------------------------------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801125b10` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000003011a2388` |

##### `div(double[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change | Delta |             % | Samples | Caller          | Location                                               |
| ------: | ----: | ------------: | ------: | --------------- | ------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `average(List)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `forkThreshold()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % | Samples | Caller      | Location                                               |
| ------: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % | Samples | Caller          | Location                                                                              |
| ------: | ----: | ------------: | ------: | --------------- | ------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `apply(Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000003011a3940` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |             % | Samples | Caller   | Location                                                               |
| ------: | ----: | ------------: | ------: | -------- | ---------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000003011a2bd0` |

##### `<init>(JavaKMeans, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|  Change | Delta |             % | Samples | Caller                               | Location                                                  |
| ------: | ----: | ------------: | ------: | ------------------------------------ | --------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>(JavaKMeans, List, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `tlv_get_addr` (`libdyld.dylib`)

|  Change | Delta |             % | Samples | Caller                               | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
| removed |    -3 |  37.5% → 0.0% |   3 → 0 | `Unsafe_Unpark`                      | `libjvm.dylib` |
| removed |    -1 |  12.5% → 0.0% |   1 → 0 | `ResourceBitMap::ResourceBitMap`     | `libjvm.dylib` |
| +100.0% |    +1 | 12.5% → 33.3% |   1 → 2 | `arrayof_oop_disjoint_arraycopy`     | `<unknown>`    |
| removed |    -1 |  12.5% → 0.0% |   1 → 0 | `BlockListBuilder::BlockListBuilder` | `libjvm.dylib` |
| removed |    -1 |  12.5% → 0.0% |   1 → 0 | `Scheduling::anti_do_def`            | `libjvm.dylib` |

##### `_pthread_cond_wait` (`libsystem_pthread.dylib`)

|  Change | Delta |             % | Samples | Caller         | Location       |
| ------: | ----: | ------------: | ------: | -------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `Parker::park` | `libjvm.dylib` |

##### `G1CardSetMemoryManager::flush` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                    | Location       |
| ------: | ----: | ------------: | ------: | ------------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `HeapRegionRemSet::clear` | `libjvm.dylib` |

##### `mach_absolute_time` (`libsystem_kernel.dylib`)

|  Change | Delta |             % | Samples | Caller                | Location                                    |
| ------: | ----: | ------------: | ------: | --------------------- | ------------------------------------------- |
| removed |    -2 |  66.7% → 0.0% |   2 → 0 | `os::elapsed_counter` | `libjvm.dylib`                              |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `getVmStartNanos()`   | `org.renaissance.harness.RenaissanceSuite$` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `gettimeofday`        | `libsystem_c.dylib`                         |

##### `ImmutableOopMap::update_register_map` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                             | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `frame::sender_for_compiled_frame` | `libjvm.dylib` |

##### `SafeThreadsListPtr::release_stable_list` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                  | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `ThreadsListHandle::~ThreadsListHandle` | `libjvm.dylib` |

##### `pthread_testcancel` (`libsystem_pthread.dylib`)

|  Change | Delta |             % | Samples | Caller               | Location                  |
| ------: | ----: | ------------: | ------: | -------------------- | ------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `_pthread_cond_wait` | `libsystem_pthread.dylib` |

##### `resize()` (`java.util.HashMap`)

|  Change | Delta |              % | Samples | Caller                                          | Location            |
| ------: | ----: | -------------: | ------: | ----------------------------------------------- | ------------------- |
|  -66.7% |    -2 | 75.0% → 100.0% |   3 → 1 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |
| removed |    -1 |   25.0% → 0.0% |   1 → 0 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |      % | Samples | Caller                 | Location                            |
| -----: | ----: | -----: | ------: | ---------------------- | ----------------------------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |      % | Samples | Caller      | Location                                               |
| -----: | ----: | -----: | ------: | ----------- | ------------------------------------------------------ |
| -66.7% |    -2 | 100.0% |   3 → 1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `push(ForkJoinTask, ForkJoinPool, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change | Delta |             % | Samples | Caller   | Location                            |
| ------: | ----: | ------------: | ------: | -------- | ----------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `fork()` | `java.util.concurrent.ForkJoinTask` |

##### `read(Manifest$FastInputStream, byte[], String, int)` (`java.util.jar.Attributes`)

|  Change | Delta |             % | Samples | Caller                      | Location                 |
| ------: | ----: | ------------: | ------: | --------------------------- | ------------------------ |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `read(InputStream, String)` | `java.util.jar.Manifest` |

##### `accept(Object)` (`java.util.stream.Nodes$FixedNodeBuilder`)

|  Change | Delta |            % | Samples | Caller           | Location                              |
| ------: | ----: | -----------: | ------: | ---------------- | ------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `accept(int)`    | `java.util.stream.IntPipeline$1$1`    |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `accept(double)` | `java.util.stream.DoublePipeline$1$1` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |             % | Samples | Caller                                    | Location                                      |
| ------: | ----: | ------------: | ------: | ----------------------------------------- | --------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `tryRemoveAndExec(ForkJoinTask, boolean)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change | Delta |             % | Samples | Caller                                   | Location                            |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | ----------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % | Samples | Caller                              | Location                            |
| -----: | ----: | -----: | ------: | ----------------------------------- | ----------------------------------- |
| -25.0% |    -1 | 100.0% |   4 → 3 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `spliterator(double[], int, int, int)` (`java.util.Spliterators`)

|  Change | Delta |             % | Samples | Caller                            | Location           |
| ------: | ----: | ------------: | ------: | --------------------------------- | ------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `spliterator(double[], int, int)` | `java.util.Arrays` |

##### `signalWork()` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % | Samples | Caller                                      | Location                                      |
| ------: | ----: | ------------: | ------: | ------------------------------------------- | --------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `push(ForkJoinTask, ForkJoinPool, boolean)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `update(byte[], int, int)` (`java.util.zip.CRC32`)

|  Change | Delta |             % | Samples | Caller           | Location                 |
| ------: | ----: | ------------: | ------: | ---------------- | ------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `update(byte[])` | `java.util.zip.Checksum` |

##### `substring(int, int)` (`java.lang.String`)

|  Change | Delta |             % | Samples | Caller                  | Location           |
| ------: | ----: | ------------: | ------: | ----------------------- | ------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `subSequence(int, int)` | `java.lang.String` |

##### `poll()` (`java.util.ArrayDeque`)

|  Change | Delta |             % | Samples | Caller          | Location                                  |
| ------: | ----: | ------------: | ------: | --------------- | ----------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `getInflater()` | `java.util.zip.ZipFile$CleanableResource` |

##### `GraphKit::add_safepoint_edges` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                        | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `GraphKit::make_runtime_call` | `libjvm.dylib` |

##### `PhaseLive::compute` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                            | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `IfTrueNode::Opcode` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                      | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------- | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `PhaseCCP::push_more_uses`                  | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `PhaseIdealLoop::split_if_with_blocks_post` | `libjvm.dylib` |

##### `Node::is_CFG` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                               | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------ | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `IdealLoopTree::est_loop_clone_sz`   | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Node::clone` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                       | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseIdealLoop::clone_loop` | `libjvm.dylib` |

##### `PhaseChaitin::elide_copy` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                     | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |

##### `NTarjan::DFS` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                       | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseIdealLoop::Dominators` | `libjvm.dylib` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                            | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseOutput::BuildOopMaps` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                | Location       |
| ------: | ----: | ------------: | ------: | --------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseOutput::Output` | `libjvm.dylib` |

##### `MachNode::Opcode` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                            | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `BoolNode::Value` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller               | Location       |
| ------: | ----: | ------------: | ------: | -------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseCCP::PhaseCCP` | `libjvm.dylib` |

##### `StoreNode::Ideal` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                        | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |

##### `Node::replace_by` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                     | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |

##### `ConnectionGraph::optimize_ptr_compare` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                  | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `ConnectionGraph::optimize_ideal_graph` | `libjvm.dylib` |

##### `ProjNode::Opcode` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                               | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `LinearScan::assign_reg_num` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                       | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `LinearScan::do_linear_scan` | `libjvm.dylib` |

##### `GraphBuilder::method_return` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                      | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib` |

##### `LinearScan::eliminate_spill_moves` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                       | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `LinearScan::do_linear_scan` | `libjvm.dylib` |

##### `LinearScan::compute_local_live_sets` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                       | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `LinearScan::do_linear_scan` | `libjvm.dylib` |

##### `LinearScan::sort_intervals_after_allocation` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                       | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `LinearScan::do_linear_scan` | `libjvm.dylib` |

### Total samples

#### Regressions

Functions with the largest increase in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

| Change | Delta |             % |       Samples | Function                                                  | Location                                                   |
| -----: | ----: | ------------: | ------------: | --------------------------------------------------------- | ---------------------------------------------------------- |
|  +4.5% |  +177 | 82.7% → 83.6% | 3,920 → 4,097 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                        |
|  +4.5% |  +176 | 82.7% → 83.5% | 3,920 → 4,096 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                        |
|  +3.9% |  +173 | 93.8% → 94.2% | 4,445 → 4,618 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                        |
|  +3.9% |  +173 | 93.8% → 94.2% | 4,445 → 4,618 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`                |
|  +4.5% |  +166 | 78.2% → 79.0% | 3,706 → 3,872 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
|  +3.9% |  +163 | 87.4% → 87.8% | 4,141 → 4,304 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`                        |
|  +3.9% |  +161 | 87.2% → 87.6% | 4,133 → 4,294 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                        |
|  +3.9% |  +160 | 87.2% → 87.6% | 4,134 → 4,294 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
|  +3.9% |  +159 | 86.6% → 86.9% | 4,104 → 4,263 | `compute()`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
|  +3.9% |  +159 | 86.6% → 87.0% | 4,105 → 4,264 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                       |
|  +9.7% |  +100 | 21.8% → 23.1% | 1,035 → 1,135 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                        |
|  +4.4% |   +79 | 37.5% → 37.9% | 1,777 → 1,856 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +4.8% |   +68 | 30.2% → 30.5% | 1,429 → 1,497 | `vectorSum()`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +4.8% |   +68 | 30.2% → 30.5% | 1,429 → 1,497 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +6.2% |   +56 | 19.2% → 19.7% |     909 → 965 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`                        |
|  +8.7% |   +54 | 13.1% → 13.8% |     623 → 677 | `average(List)`                                           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  +8.4% |   +53 | 13.3% → 13.9% |     630 → 683 | `computeClusterAverages()`                                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  +8.4% |   +53 | 13.3% → 13.9% |     630 → 683 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| +96.2% |   +50 |   1.1% → 2.1% |      52 → 102 | `grow()`                                                  | `java.util.ArrayList`                                      |
|  +3.2% |   +43 | 28.3% → 28.2% | 1,342 → 1,385 | `findNearestCentroid()`                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### Ours

| Change | Delta |             % |       Samples | Function                                                                                                               | Location                                                                                      |
| -----: | ----: | ------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
|  +3.9% |  +159 | 86.6% → 86.9% | 4,104 → 4,263 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                        |
|  +4.4% |   +79 | 37.5% → 37.9% | 1,777 → 1,856 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                    |
|  +4.8% |   +68 | 30.2% → 30.5% | 1,429 → 1,497 | `vectorSum()`                                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                     |
|  +4.8% |   +68 | 30.2% → 30.5% | 1,429 → 1,497 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                     |
|  +8.7% |   +54 | 13.1% → 13.8% |     623 → 677 | `average(List)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                        |
|  +8.4% |   +53 | 13.3% → 13.9% |     630 → 683 | `computeClusterAverages()`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                        |
|  +8.4% |   +53 | 13.3% → 13.9% |     630 → 683 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                        |
|  +3.2% |   +43 | 28.3% → 28.2% | 1,342 → 1,385 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                    |
|  +8.3% |   +36 |   9.2% → 9.6% |     435 → 471 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                    |
|    new |   +21 |   0.0% → 0.4% |        0 → 21 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                                                   |
|  +1.8% |   +16 | 18.8% → 18.5% |     889 → 905 | `distance(Double[], Double[])`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                    |
|  +7.3% |   +16 |   4.6% → 4.8% |     219 → 235 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                                                   |
|  +7.3% |   +16 |   4.6% → 4.8% |     219 → 235 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000003011a7248`                        |
| +87.5% |    +7 |   0.2% → 0.3% |        8 → 15 | `setUpBeforeAll(BenchmarkContext)`                                                                                     | `org.renaissance.jdk.concurrent.FjKmeans`                                                     |
|  +1.5% |    +5 |   7.2% → 7.1% |     341 → 346 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                    |
|    new |    +5 |   0.0% → 0.1% |         0 → 5 | `rowToArray$1(Map)`                                                                                                    | `org.renaissance.jdk.concurrent.FjKmeans`                                                     |
|    new |    +5 |   0.0% → 0.1% |         0 → 5 | `setUpBeforeAll$$anonfun$1(Map)`                                                                                       | `org.renaissance.jdk.concurrent.FjKmeans`                                                     |
|    new |    +5 |   0.0% → 0.1% |         0 → 5 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x0000000301126908`                          |
|    new |    +5 |   0.0% → 0.1% |         0 → 5 | `lambda$toCsvRows$2(String[], Function, String)`                                                                       | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`                            |
|    new |    +5 |   0.0% → 0.1% |         0 → 5 | `apply(Object)`                                                                                                        | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter$$Lambda.0x0000000301123bf8` |

##### Native

|   Change | Delta |             % |   Samples | Function                                                                                        | Location                   |
| -------: | ----: | ------------: | --------: | ----------------------------------------------------------------------------------------------- | -------------------------- |
|    +4.0% |   +29 | 15.4% → 15.5% | 729 → 758 | `__psynch_cvwait`                                                                               | `libsystem_kernel.dylib`   |
|    +4.0% |   +29 |         15.2% | 718 → 747 | `Parker::park`                                                                                  | `libjvm.dylib`             |
|    +3.5% |   +26 |         15.5% | 734 → 760 | `Unsafe_Park`                                                                                   | `libjvm.dylib`             |
| +1700.0% |   +17 |  <0.1% → 0.4% |    1 → 18 | `G1FullGCAdjustTask::work`                                                                      | `libjvm.dylib`             |
| +1700.0% |   +17 |  <0.1% → 0.4% |    1 → 18 | `HeapRegionManager::par_iterate`                                                                | `libjvm.dylib`             |
|      new |   +17 |   0.0% → 0.3% |    0 → 17 | `G1AdjustRegionClosure::do_heap_region`                                                         | `libjvm.dylib`             |
|      new |   +15 |   0.0% → 0.3% |    0 → 15 | `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>`                                 | `libjvm.dylib`             |
|   +26.2% |   +11 |   0.9% → 1.1% |   42 → 53 | `arrayof_oop_disjoint_arraycopy`                                                                | `<unknown>`                |
| +1100.0% |   +11 |  <0.1% → 0.2% |    1 → 12 | `G1ParEvacuateFollowersClosure::offer_termination`                                              | `libjvm.dylib`             |
|  +500.0% |   +10 |  <0.1% → 0.2% |    2 → 12 | `TaskTerminator::offer_termination`                                                             | `libjvm.dylib`             |
|    +4.4% |    +6 |          2.9% | 136 → 142 | `WorkerThread::run`                                                                             | `libjvm.dylib`             |
|  +600.0% |    +6 |  <0.1% → 0.1% |     1 → 7 | `G1FullGCCompactTask::compact_region`                                                           | `libjvm.dylib`             |
|  +600.0% |    +6 |  <0.1% → 0.1% |     1 → 7 | `G1FullGCCompactTask::work`                                                                     | `libjvm.dylib`             |
|   +83.3% |    +5 |   0.1% → 0.2% |    6 → 11 | `G1RegionMarkStatsCache::add_live_words`                                                        | `libjvm.dylib`             |
|      new |    +5 |   0.0% → 0.1% |     0 → 5 | `G1FullGCCompactTask::copy_object_to_new_location`                                              | `libjvm.dylib`             |
|      new |    +5 |   0.0% → 0.1% |     0 → 5 | `void OopOopIterateDispatch<G1AdjustClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>` | `libjvm.dylib`             |
|  +133.3% |    +4 |          0.1% |     3 → 7 | `G1CollectedHeap::attempt_allocation_slow`                                                      | `libjvm.dylib`             |
|   +80.0% |    +4 |   0.1% → 0.2% |     5 → 9 | `void HeapRegion::apply_to_marked_objects<G1FullGCPrepareTask::G1PrepareCompactLiveClosure>`    | `libjvm.dylib`             |
|   +80.0% |    +4 |   0.1% → 0.2% |     5 → 9 | `G1FullGCPrepareTask::work`                                                                     | `libjvm.dylib`             |
|  +400.0% |    +4 |  <0.1% → 0.1% |     1 → 5 | `_sigtramp`                                                                                     | `libsystem_platform.dylib` |

##### Standard library

| Change | Delta |             % |       Samples | Function                                                  | Location                                      |
| -----: | ----: | ------------: | ------------: | --------------------------------------------------------- | --------------------------------------------- |
|  +4.5% |  +177 | 82.7% → 83.6% | 3,920 → 4,097 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`           |
|  +4.5% |  +176 | 82.7% → 83.5% | 3,920 → 4,096 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`           |
|  +3.9% |  +173 | 93.8% → 94.2% | 4,445 → 4,618 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`           |
|  +3.9% |  +173 | 93.8% → 94.2% | 4,445 → 4,618 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`   |
|  +4.5% |  +166 | 78.2% → 79.0% | 3,706 → 3,872 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  +3.9% |  +163 | 87.4% → 87.8% | 4,141 → 4,304 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`           |
|  +3.9% |  +161 | 87.2% → 87.6% | 4,133 → 4,294 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`           |
|  +3.9% |  +160 | 87.2% → 87.6% | 4,134 → 4,294 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  +3.9% |  +159 | 86.6% → 87.0% | 4,105 → 4,264 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`          |
|  +9.7% |  +100 | 21.8% → 23.1% | 1,035 → 1,135 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
|  +6.2% |   +56 | 19.2% → 19.7% |     909 → 965 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`           |
| +96.2% |   +50 |   1.1% → 2.1% |      52 → 102 | `grow()`                                                  | `java.util.ArrayList`                         |
| +24.3% |   +36 |   3.1% → 3.8% |     148 → 184 | `elementData(int)`                                        | `java.util.ArrayList`                         |
| +18.5% |   +33 |   3.8% → 4.3% |     178 → 211 | `get(int)`                                                | `java.util.ArrayList`                         |
|  +3.5% |   +26 |         15.5% |     735 → 761 | `park(boolean, long)`                                     | `jdk.internal.misc.Unsafe`                    |
|  +2.6% |   +19 | 15.3% → 15.2% |     725 → 744 | `park()`                                                  | `java.util.concurrent.locks.LockSupport`      |
| +19.7% |   +15 |   1.6% → 1.9% |       76 → 91 | `grow(int)`                                               | `java.util.ArrayList`                         |
| +13.8% |   +15 |   2.3% → 2.5% |     109 → 124 | `add(Object)`                                             | `java.util.ArrayList`                         |
| +13.2% |   +14 |   2.2% → 2.4% |     106 → 120 | `add(Object, Object[], int)`                              | `java.util.ArrayList`                         |
|  +6.4% |    +9 |          3.0% |     140 → 149 | `addAll(Collection)`                                      | `java.util.ArrayList`                         |

##### JIT

| Change | Delta |            % | Samples | Function                    | Location    |
| -----: | ----: | -----------: | ------: | --------------------------- | ----------- |
|  +1.6% |    +1 |         1.3% | 63 → 64 | `zero_blocks`               | `<unknown>` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `vtable stub`               | `<unknown>` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `I2C/C2I adapters(0xbbe)`   | `<unknown>` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `I2C/C2I adapters(0xabebe)` | `<unknown>` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `I2C/C2I adapters(0xbbaa)`  | `<unknown>` |

##### Compiler

|  Change | Delta |            % | Samples | Function                            | Location       |
| ------: | ----: | -----------: | ------: | ----------------------------------- | -------------- |
| +700.0% |    +7 | <0.1% → 0.2% |   1 → 8 | `PhaseCFG::global_code_motion`      | `libjvm.dylib` |
| +700.0% |    +7 | <0.1% → 0.2% |   1 → 8 | `PhaseCFG::do_global_code_motion`   | `libjvm.dylib` |
| +150.0% |    +3 | <0.1% → 0.1% |   2 → 5 | `Compile::optimize_loops`           | `libjvm.dylib` |
| +150.0% |    +3 | <0.1% → 0.1% |   2 → 5 | `LIR_Assembler::emit_lir_list`      | `libjvm.dylib` |
| +150.0% |    +3 | <0.1% → 0.1% |   2 → 5 | `LIR_Assembler::emit_code`          | `libjvm.dylib` |
| +100.0% |    +2 | <0.1% → 0.1% |   2 → 4 | `CompileBroker::compile_method`     | `libjvm.dylib` |
|  +66.7% |    +2 |         0.1% |   3 → 5 | `CompilationPolicy::event`          | `libjvm.dylib` |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `PhaseOutput::fill_buffer`          | `libjvm.dylib` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `PhaseCFG::schedule_local`          | `libjvm.dylib` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `Compile::disconnect_useless_nodes` | `libjvm.dylib` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `Node_Backward_Iterator::next`      | `libjvm.dylib` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `PhaseChaitin::bias_color`          | `libjvm.dylib` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `ciField::ciField`                  | `libjvm.dylib` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `ciEnv::get_field_by_index_impl`    | `libjvm.dylib` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `ciEnv::get_field_by_index`         | `libjvm.dylib` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `ciBytecodeStream::get_field`       | `libjvm.dylib` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `PhaseCFG::schedule_late`           | `libjvm.dylib` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `PhaseIdealLoop::build_loop_late`   | `libjvm.dylib` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `Matcher::Label_Root`               | `libjvm.dylib` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `PhaseBlockLayout::grow_traces`     | `libjvm.dylib` |

#### Improvements

Functions with the largest decrease in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |             % |   Samples | Function                                                                                                               | Location                                                  |
| ------: | ----: | ------------: | --------: | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
|   -5.8% |   -56 | 20.5% → 18.6% | 970 → 914 | `accumulate(Double[], double[])`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  -52.5% |   -21 |   0.8% → 0.4% |   40 → 19 | `hash(Object)`                                                                                                         | `java.util.HashMap`                                       |
|  -18.1% |   -17 |   2.0% → 1.6% |   94 → 77 | `CompileBroker::compiler_thread_loop`                                                                                  | `libjvm.dylib`                                            |
|  -17.9% |   -17 |   2.0% → 1.6% |   95 → 78 | `JavaThread::thread_main_inner`                                                                                        | `libjvm.dylib`                                            |
|   -6.8% |   -17 |   5.3% → 4.7% | 249 → 232 | `_pthread_start`                                                                                                       | `libsystem_pthread.dylib`                                 |
|   -6.8% |   -17 |   5.3% → 4.7% | 249 → 232 | `thread_start`                                                                                                         | `libsystem_pthread.dylib`                                 |
|  -56.7% |   -17 |   0.6% → 0.3% |   30 → 13 | `G1ParScanThreadState::trim_queue_to_threshold`                                                                        | `libjvm.dylib`                                            |
| removed |   -17 |   0.4% → 0.0% |    17 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`               |
|   -6.5% |   -16 |   5.2% → 4.7% | 248 → 232 | `Thread::call_run`                                                                                                     | `libjvm.dylib`                                            |
|   -6.5% |   -16 |   5.2% → 4.7% | 248 → 232 | `thread_native_entry`                                                                                                  | `libjvm.dylib`                                            |
|  -17.4% |   -15 |   1.8% → 1.4% |   86 → 71 | `CompileBroker::invoke_compiler_on_method`                                                                             | `libjvm.dylib`                                            |
|  -25.4% |   -15 |   1.2% → 0.9% |   59 → 44 | `_new_array_Java`                                                                                                      | `<unknown>`                                               |
|  -25.9% |   -14 |   1.1% → 0.8% |   54 → 40 | `OptoRuntime::new_array_C`                                                                                             | `libjvm.dylib`                                            |
|  -54.2% |   -13 |   0.5% → 0.2% |   24 → 11 | `G1ParScanThreadState::steal_and_trim_queue`                                                                           | `libjvm.dylib`                                            |
|  -24.5% |   -12 |   1.0% → 0.8% |   49 → 37 | `CollectedHeap::array_allocate`                                                                                        | `libjvm.dylib`                                            |
|  -22.4% |   -11 |   1.0% → 0.8% |   49 → 38 | `MemAllocator::allocate`                                                                                               | `libjvm.dylib`                                            |
|  -20.8% |   -10 |   1.0% → 0.8% |   48 → 38 | `InstanceKlass::allocate_objArray`                                                                                     | `libjvm.dylib`                                            |
| removed |   -10 |   0.2% → 0.0% |    10 → 0 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                      | `libjvm.dylib`                                            |
|  -45.0% |    -9 |   0.4% → 0.2% |   20 → 11 | `tryCompensate(long, boolean)`                                                                                         | `java.util.concurrent.ForkJoinPool`                       |
|  -39.1% |    -9 |   0.5% → 0.3% |   23 → 14 | `Compilation::compile_method`                                                                                          | `libjvm.dylib`                                            |

##### Ours

|  Change | Delta |             % |   Samples | Function                                                                                                               | Location                                                               |
| ------: | ----: | ------------: | --------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|   -5.8% |   -56 | 20.5% → 18.6% | 970 → 914 | `accumulate(Double[], double[])`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| removed |   -17 |   0.4% → 0.0% |    17 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|   -1.8% |    -6 |   6.9% → 6.6% | 329 → 323 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -1.8% |    -6 |   7.0% → 6.6% | 330 → 324 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000003011a3b90` |
|  -80.0% |    -4 |  0.1% → <0.1% |     5 → 1 | `run(BenchmarkContext)`                                                                                                | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  -37.5% |    -3 |   0.2% → 0.1% |     8 → 5 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000003011a2388` |
|  -60.0% |    -3 |  0.1% → <0.1% |     5 → 2 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                              |
|   -0.7% |    -3 |   9.5% → 9.2% | 452 → 449 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -0.7% |    -3 |   9.5% → 9.2% | 452 → 449 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000003011a2bd0` |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `div(double[], int)`                                                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `forkThreshold()`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `<clinit>()`                                                                                                           | `scopt.OptionParser`                                                   |
|  -33.3% |    -1 |  0.1% → <0.1% |     3 → 2 | `createParser(Map)`                                                                                                    | `org.renaissance.harness.ConfigParser`                                 |
|  -33.3% |    -1 |  0.1% → <0.1% |     3 → 2 | `<init>(Map)`                                                                                                          | `org.renaissance.harness.ConfigParser`                                 |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `liftedTree1$1()`                                                                                                      | `scopt.Read$`                                                          |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `updateOption(OptionDef, Read)`                                                                                        | `scopt.OptionParser`                                                   |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `onChange(OptionDef, Read)`                                                                                            | `scopt.OptionParser`                                                   |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `fireChange(OptionDef, Read)`                                                                                          | `scopt.OptionDef`                                                      |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `validate(Function1)`                                                                                                  | `scopt.OptionDef`                                                      |
|  -50.0% |    -1 |         <0.1% |     2 → 1 | `parse(Seq, Object)`                                                                                                   | `scopt.OptionParser`                                                   |

##### Native

|  Change | Delta |            % |   Samples | Function                                          | Location                  |
| ------: | ----: | -----------: | --------: | ------------------------------------------------- | ------------------------- |
|  -17.9% |   -17 |  2.0% → 1.6% |   95 → 78 | `JavaThread::thread_main_inner`                   | `libjvm.dylib`            |
|   -6.8% |   -17 |  5.3% → 4.7% | 249 → 232 | `_pthread_start`                                  | `libsystem_pthread.dylib` |
|   -6.8% |   -17 |  5.3% → 4.7% | 249 → 232 | `thread_start`                                    | `libsystem_pthread.dylib` |
|  -56.7% |   -17 |  0.6% → 0.3% |   30 → 13 | `G1ParScanThreadState::trim_queue_to_threshold`   | `libjvm.dylib`            |
|   -6.5% |   -16 |  5.2% → 4.7% | 248 → 232 | `Thread::call_run`                                | `libjvm.dylib`            |
|   -6.5% |   -16 |  5.2% → 4.7% | 248 → 232 | `thread_native_entry`                             | `libjvm.dylib`            |
|  -25.4% |   -15 |  1.2% → 0.9% |   59 → 44 | `_new_array_Java`                                 | `<unknown>`               |
|  -25.9% |   -14 |  1.1% → 0.8% |   54 → 40 | `OptoRuntime::new_array_C`                        | `libjvm.dylib`            |
|  -54.2% |   -13 |  0.5% → 0.2% |   24 → 11 | `G1ParScanThreadState::steal_and_trim_queue`      | `libjvm.dylib`            |
|  -24.5% |   -12 |  1.0% → 0.8% |   49 → 37 | `CollectedHeap::array_allocate`                   | `libjvm.dylib`            |
|  -22.4% |   -11 |  1.0% → 0.8% |   49 → 38 | `MemAllocator::allocate`                          | `libjvm.dylib`            |
|  -20.8% |   -10 |  1.0% → 0.8% |   48 → 38 | `InstanceKlass::allocate_objArray`                | `libjvm.dylib`            |
| removed |   -10 |  0.2% → 0.0% |    10 → 0 | `G1ParScanThreadState::do_copy_to_survivor_space` | `libjvm.dylib`            |
|  -39.1% |    -9 |  0.5% → 0.3% |   23 → 14 | `Compiler::compile_method`                        | `libjvm.dylib`            |
|  -10.8% |    -8 |  1.6% → 1.3% |   74 → 66 | `Unsafe_Unpark`                                   | `libjvm.dylib`            |
|  -88.9% |    -8 | 0.2% → <0.1% |     9 → 1 | `ObjArrayAllocator::initialize`                   | `libjvm.dylib`            |
|  -38.9% |    -7 |  0.4% → 0.2% |   18 → 11 | `semaphore_wait_trap`                             | `libsystem_kernel.dylib`  |
|  -21.2% |    -7 |  0.7% → 0.5% |   33 → 26 | `G1ParEvacuateFollowersClosure::do_void`          | `libjvm.dylib`            |
|  -21.2% |    -7 |  0.7% → 0.5% |   33 → 26 | `G1EvacuateRegionsTask::evacuate_live_objects`    | `libjvm.dylib`            |
| removed |    -7 |  0.1% → 0.0% |     7 → 0 | `G1CollectedHeap::par_iterate_regions_array`      | `libjvm.dylib`            |

##### Standard library

|  Change | Delta |            % |   Samples | Function                                                                        | Location                                            |
| ------: | ----: | -----------: | --------: | ------------------------------------------------------------------------------- | --------------------------------------------------- |
|  -52.5% |   -21 |  0.8% → 0.4% |   40 → 19 | `hash(Object)`                                                                  | `java.util.HashMap`                                 |
|  -45.0% |    -9 |  0.4% → 0.2% |   20 → 11 | `tryCompensate(long, boolean)`                                                  | `java.util.concurrent.ForkJoinPool`                 |
|   -2.1% |    -7 |  6.9% → 6.6% | 329 → 322 | `merge(Object, Object, BiFunction)`                                             | `java.util.HashMap`                                 |
|   -9.5% |    -7 |  1.6% → 1.4% |   74 → 67 | `unpark(Object)`                                                                | `jdk.internal.misc.Unsafe`                          |
|   -9.5% |    -7 |  1.6% → 1.4% |   74 → 67 | `unpark(Thread)`                                                                | `java.util.concurrent.locks.LockSupport`            |
|   -4.3% |    -5 |  2.4% → 2.2% | 115 → 110 | `doubleValue()`                                                                 | `java.lang.Double`                                  |
|  -31.3% |    -5 |  0.3% → 0.2% |   16 → 11 | `defineClass(String, Resource)`                                                 | `java.net.URLClassLoader`                           |
|  -83.3% |    -5 | 0.1% → <0.1% |     6 → 1 | `resize()`                                                                      | `java.util.HashMap`                                 |
|  -14.3% |    -4 |  0.6% → 0.5% |   28 → 24 | `checkIndex(int, int)`                                                          | `java.util.Objects`                                 |
| removed |    -3 |  0.1% → 0.0% |     3 → 0 | `entrySet()`                                                                    | `java.util.HashMap`                                 |
|  -23.1% |    -3 |  0.3% → 0.2% |   13 → 10 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                             |
|  -23.1% |    -3 |  0.3% → 0.2% |   13 → 10 | `defineClass(String, byte[], int, int, ProtectionDomain)`                       | `java.lang.ClassLoader`                             |
|  -23.1% |    -3 |  0.3% → 0.2% |   13 → 10 | `defineClass(String, byte[], int, int, CodeSource)`                             | `java.security.SecureClassLoader`                   |
|   -0.7% |    -3 |  9.5% → 9.2% | 452 → 449 | `exec()`                                                                        | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|   -0.6% |    -2 |  7.0% → 6.7% | 332 → 330 | `forEach(BiConsumer)`                                                           | `java.util.HashMap`                                 |
|  -66.7% |    -2 | 0.1% → <0.1% |     3 → 1 | `stream(double[], int, int)`                                                    | `java.util.Arrays`                                  |
|  -66.7% |    -2 | 0.1% → <0.1% |     3 → 1 | `stream(double[])`                                                              | `java.util.Arrays`                                  |
|  -40.0% |    -2 |         0.1% |     5 → 3 | `push(ForkJoinTask, ForkJoinPool, boolean)`                                     | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
|  -40.0% |    -2 |         0.1% |     5 → 3 | `fork()`                                                                        | `java.util.concurrent.ForkJoinTask`                 |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `read(Manifest$FastInputStream, byte[], String, int)`                           | `java.util.jar.Attributes`                          |

##### Compiler

|  Change | Delta |            % | Samples | Function                                   | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------ | -------------- |
|  -18.1% |   -17 |  2.0% → 1.6% | 94 → 77 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib` |
|  -17.4% |   -15 |  1.8% → 1.4% | 86 → 71 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
|  -39.1% |    -9 |  0.5% → 0.3% | 23 → 14 | `Compilation::compile_method`              | `libjvm.dylib` |
|  -39.1% |    -9 |  0.5% → 0.3% | 23 → 14 | `Compilation::Compilation`                 | `libjvm.dylib` |
|  -11.3% |    -7 |  1.3% → 1.1% | 62 → 55 | `Compile::Compile`                         | `libjvm.dylib` |
|  -11.3% |    -7 |  1.3% → 1.1% | 62 → 55 | `C2Compiler::compile_method`               | `libjvm.dylib` |
|  -33.3% |    -7 |  0.4% → 0.3% | 21 → 14 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib` |
|  -71.4% |    -5 | 0.1% → <0.1% |   7 → 2 | `PhaseIterGVN::transform_old`              | `libjvm.dylib` |
|  -71.4% |    -5 | 0.1% → <0.1% |   7 → 2 | `PhaseIterGVN::optimize`                   | `libjvm.dylib` |
|  -26.3% |    -5 |  0.4% → 0.3% | 19 → 14 | `Compilation::compile_java_method`         | `libjvm.dylib` |
|  -20.0% |    -4 |  0.4% → 0.3% | 20 → 16 | `Compile::Optimize`                        | `libjvm.dylib` |
|  -66.7% |    -4 | 0.1% → <0.1% |   6 → 2 | `GraphBuilder::invoke`                     | `libjvm.dylib` |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `PhaseChaitin::Split`                      | `libjvm.dylib` |
|  -60.0% |    -3 | 0.1% → <0.1% |   5 → 2 | `LinearScan::do_linear_scan`               | `libjvm.dylib` |
|  -75.0% |    -3 | 0.1% → <0.1% |   4 → 1 | `GraphBuilder::try_inline_full`            | `libjvm.dylib` |
|  -75.0% |    -3 | 0.1% → <0.1% |   4 → 1 | `GraphBuilder::try_inline`                 | `libjvm.dylib` |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `ciEnv::register_method`                   | `libjvm.dylib` |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `MemNode::Ideal_common`                    | `libjvm.dylib` |
|  -66.7% |    -2 | 0.1% → <0.1% |   3 → 1 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `GraphKit::add_safepoint_edges`            | `libjvm.dylib` |

#### Callers

Callers with the largest change in contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |      % |       Samples | Caller      | Location                                               |
| -----: | ----: | -----: | ------------: | ----------- | ------------------------------------------------------ |
|  +4.5% |  +177 | 100.0% | 3,920 → 4,097 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |      % |       Samples | Caller   | Location                            |
| -----: | ----: | -----: | ------------: | -------- | ----------------------------------- |
|  +4.5% |  +176 | 100.0% | 3,920 → 4,096 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % |       Samples | Caller  | Location                                    |
| -----: | ----: | -----: | ------------: | ------- | ------------------------------------------- |
|  +3.9% |  +173 | 100.0% | 4,445 → 4,618 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |      % |       Samples | Caller                 | Location                            |
| -----: | ----: | -----: | ------------: | ---------------------- | ----------------------------------- |
|  +4.5% |  +166 | 100.0% | 3,706 → 3,872 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % |       Samples | Caller                              | Location                            |
| -----: | ----: | -----: | ------------: | ----------------------------------- | ----------------------------------- |
|  +3.9% |  +163 | 100.0% | 4,141 → 4,304 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % |       Samples | Caller                                                    | Location                                      |
| -----: | ----: | ------------: | ------------: | --------------------------------------------------------- | --------------------------------------------- |
|  +4.5% |  +166 | 89.7% → 90.2% | 3,706 → 3,872 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  +3.9% |  +161 |        100.0% | 4,133 → 4,294 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| +11.8% |  +117 | 24.0% → 25.9% |   993 → 1,110 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
|  +6.2% |   +56 | 22.0% → 22.4% |     908 → 964 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`           |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |      % |       Samples | Caller                                   | Location                            |
| -----: | ----: | -----: | ------------: | ---------------------------------------- | ----------------------------------- |
|  +3.9% |  +160 | 100.0% | 4,134 → 4,294 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change | Delta |      % |       Samples | Caller   | Location                             |
| -----: | ----: | -----: | ------------: | -------- | ------------------------------------ |
|  +3.9% |  +159 | 100.0% | 4,104 → 4,263 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change | Delta |      % |       Samples | Caller     | Location                            |
| -----: | ----: | -----: | ------------: | ---------- | ----------------------------------- |
|  +3.9% |  +159 | 100.0% | 4,105 → 4,264 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % |       Samples | Caller                 | Location                            |
| -----: | ----: | -----: | ------------: | ---------------------- | ----------------------------------- |
|  +9.7% |  +100 | 100.0% | 1,035 → 1,135 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |       Samples | Caller              | Location                                                   |
| -----: | ----: | -----: | ------------: | ------------------- | ---------------------------------------------------------- |
|  +4.4% |   +79 | 100.0% | 1,777 → 1,856 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +4.4% |   +79 | 100.0% | 1,777 → 1,856 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |       Samples | Caller              | Location                                                  |
| -----: | ----: | -----: | ------------: | ------------------- | --------------------------------------------------------- |
|  +4.8% |   +68 | 100.0% | 1,429 → 1,497 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |       Samples | Caller              | Location                                                  |
| -----: | ----: | -----: | ------------: | ------------------- | --------------------------------------------------------- |
|  +4.8% |   +68 | 100.0% | 1,429 → 1,497 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  +4.8% |   +68 | 100.0% | 1,429 → 1,497 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`    |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % |   Samples | Caller                         | Location                                               |
| -----: | ----: | ------------: | --------: | ------------------------------ | ------------------------------------------------------ |
|  +8.8% |   +55 | 68.4% → 70.2% | 622 → 677 | `average(List)`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  -0.7% |    -3 | 49.5% → 46.3% | 450 → 447 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans`            |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % |   Samples | Caller                     | Location                                               |
| -----: | ----: | -----: | --------: | -------------------------- | ------------------------------------------------------ |
|  +8.7% |   +54 | 100.0% | 623 → 677 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % |   Samples | Caller              | Location                                               |
| -----: | ----: | -----: | --------: | ------------------- | ------------------------------------------------------ |
|  +8.4% |   +53 | 100.0% | 630 → 683 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % |   Samples | Caller              | Location                                               |
| -----: | ----: | -----: | --------: | ------------------- | ------------------------------------------------------ |
|  +8.4% |   +53 | 100.0% | 630 → 683 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  +8.4% |   +53 | 100.0% | 630 → 683 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `grow()` (`java.util.ArrayList`)

| Change | Delta |      % |  Samples | Caller                       | Location              |
| -----: | ----: | -----: | -------: | ---------------------------- | --------------------- |
| +96.2% |   +50 | 100.0% | 52 → 102 | `add(Object, Object[], int)` | `java.util.ArrayList` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |       Samples | Caller              | Location                                                   |
| -----: | ----: | -----: | ------------: | ------------------- | ---------------------------------------------------------- |
|  +3.2% |   +43 | 100.0% | 1,342 → 1,385 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller              | Location                                                   |
| -----: | ----: | -----: | --------: | ------------------- | ---------------------------------------------------------- |
|  +8.3% |   +36 | 100.0% | 435 → 471 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change | Delta |             % | Samples | Caller              | Location                                                               |
| -----: | ----: | ------------: | ------: | ------------------- | ---------------------------------------------------------------------- |
|    new |   +21 | 0.0% → 100.0% |  0 → 21 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000030111f1b8` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller                  | Location                                                   |
| -----: | ----: | -----: | --------: | ----------------------- | ---------------------------------------------------------- |
|  +1.8% |   +16 | 100.0% | 889 → 905 | `findNearestCentroid()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % |   Samples | Caller                  | Location                                                               |
| -----: | ----: | -----: | --------: | ----------------------- | ---------------------------------------------------------------------- |
|  +7.3% |   +16 | 100.0% | 219 → 235 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000003011a7248` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000003011a7248`)

| Change | Delta |      % |   Samples | Caller                              | Location            |
| -----: | ----: | -----: | --------: | ----------------------------------- | ------------------- |
|  +7.3% |   +16 | 100.0% | 219 → 235 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |      % | Samples | Caller               | Location                                  |
| -----: | ----: | -----: | ------: | -------------------- | ----------------------------------------- |
| +87.5% |    +7 | 100.0% |  8 → 15 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller      | Location                                               |
| -----: | ----: | -----: | --------: | ----------- | ------------------------------------------------------ |
|  +1.5% |    +5 | 100.0% | 341 → 346 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `rowToArray$1(Map)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |             % | Samples | Caller                           | Location                                  |
| -----: | ----: | ------------: | ------: | -------------------------------- | ----------------------------------------- |
|    new |    +5 | 0.0% → 100.0% |   0 → 5 | `setUpBeforeAll$$anonfun$1(Map)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `setUpBeforeAll$$anonfun$1(Map)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |             % | Samples | Caller          | Location                                                             |
| -----: | ----: | ------------: | ------: | --------------- | -------------------------------------------------------------------- |
|    new |    +5 | 0.0% → 100.0% |   0 → 5 | `apply(Object)` | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x0000000301126908` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x0000000301126908`)

| Change | Delta |             % | Samples | Caller                                           | Location                                                           |
| -----: | ----: | ------------: | ------: | ------------------------------------------------ | ------------------------------------------------------------------ |
|    new |    +5 | 0.0% → 100.0% |   0 → 5 | `lambda$toCsvRows$2(String[], Function, String)` | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter` |

##### `lambda$toCsvRows$2(String[], Function, String)` (`org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`)

| Change | Delta |             % | Samples | Caller          | Location                                                                                      |
| -----: | ----: | ------------: | ------: | --------------- | --------------------------------------------------------------------------------------------- |
|    new |    +5 | 0.0% → 100.0% |   0 → 5 | `apply(Object)` | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter$$Lambda.0x0000000301123bf8` |

##### `apply(Object)` (`org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter$$Lambda.0x0000000301123bf8`)

| Change | Delta |             % | Samples | Caller           | Location                                 |
| -----: | ----: | ------------: | ------: | ---------------- | ---------------------------------------- |
|    new |    +5 | 0.0% → 100.0% |   0 → 5 | `accept(Object)` | `java.util.stream.ReferencePipeline$3$1` |

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

| Change | Delta |             % |   Samples | Caller                  | Location       |
| -----: | ----: | ------------: | --------: | ----------------------- | -------------- |
|  +4.5% |   +32 | 97.5% → 98.0% | 711 → 743 | `Parker::park`          | `libjvm.dylib` |
| -16.7% |    -3 |   2.5% → 2.0% |   18 → 15 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `Parker::park` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller        | Location       |
| -----: | ----: | -----: | --------: | ------------- | -------------- |
|  +4.0% |   +29 | 100.0% | 718 → 747 | `Unsafe_Park` | `libjvm.dylib` |

##### `Unsafe_Park` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller                | Location                   |
| -----: | ----: | -----: | --------: | --------------------- | -------------------------- |
|  +3.5% |   +26 | 100.0% | 734 → 760 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `G1FullGCAdjustTask::work` (`libjvm.dylib`)

|   Change | Delta |      % | Samples | Caller              | Location       |
| -------: | ----: | -----: | ------: | ------------------- | -------------- |
| +1700.0% |   +17 | 100.0% |  1 → 18 | `WorkerThread::run` | `libjvm.dylib` |

##### `HeapRegionManager::par_iterate` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                            | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------- | -------------- |
|     new |   +17 |  0.0% → 94.4% |  0 → 17 | `G1FullGCAdjustTask::work`        | `libjvm.dylib` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `G1FullGCResetMetadataTask::work` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 5.6% |   0 → 1 | `G1PrepareEvacuationTask::work`   | `libjvm.dylib` |

##### `G1AdjustRegionClosure::do_heap_region` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                           | Location       |
| -----: | ----: | ------------: | ------: | -------------------------------- | -------------- |
|    new |   +17 | 0.0% → 100.0% |  0 → 17 | `HeapRegionManager::par_iterate` | `libjvm.dylib` |

##### `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                  | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------------- | -------------- |
|    new |   +15 | 0.0% → 100.0% |  0 → 15 | `G1AdjustRegionClosure::do_heap_region` | `libjvm.dylib` |

##### `arrayof_oop_disjoint_arraycopy` (`<unknown>`)

| Change | Delta |      % | Samples | Caller               | Location              |
| -----: | ----: | -----: | ------: | -------------------- | --------------------- |
| +26.2% |   +11 | 100.0% | 42 → 53 | `addAll(Collection)` | `java.util.ArrayList` |

##### `G1ParEvacuateFollowersClosure::offer_termination` (`libjvm.dylib`)

|   Change | Delta |      % | Samples | Caller                                   | Location       |
| -------: | ----: | -----: | ------: | ---------------------------------------- | -------------- |
| +1100.0% |   +11 | 100.0% |  1 → 12 | `G1ParEvacuateFollowersClosure::do_void` | `libjvm.dylib` |

##### `TaskTerminator::offer_termination` (`libjvm.dylib`)

|   Change | Delta |              % | Samples | Caller                                             | Location       |
| -------: | ----: | -------------: | ------: | -------------------------------------------------- | -------------- |
| +1100.0% |   +11 | 50.0% → 100.0% |  1 → 12 | `G1ParEvacuateFollowersClosure::offer_termination` | `libjvm.dylib` |
|  removed |    -1 |   50.0% → 0.0% |   1 → 0 | `G1FullGCMarker::complete_marking`                 | `libjvm.dylib` |

##### `WorkerThread::run` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller             | Location       |
| -----: | ----: | -----: | --------: | ------------------ | -------------- |
|  +4.4% |    +6 | 100.0% | 136 → 142 | `Thread::call_run` | `libjvm.dylib` |

##### `G1FullGCCompactTask::compact_region` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                      | Location       |
| ------: | ----: | -----: | ------: | --------------------------- | -------------- |
| +600.0% |    +6 | 100.0% |   1 → 7 | `G1FullGCCompactTask::work` | `libjvm.dylib` |

##### `G1FullGCCompactTask::work` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller              | Location       |
| ------: | ----: | -----: | ------: | ------------------- | -------------- |
| +600.0% |    +6 | 100.0% |   1 → 7 | `WorkerThread::run` | `libjvm.dylib` |

##### `G1RegionMarkStatsCache::add_live_words` (`libjvm.dylib`)

| Change | Delta |              % | Samples | Caller                                                          | Location       |
| -----: | ----: | -------------: | ------: | --------------------------------------------------------------- | -------------- |
| +50.0% |    +3 | 100.0% → 81.8% |   6 → 9 | `G1FullGCMarker::mark_object`                                   | `libjvm.dylib` |
|    new |    +2 |   0.0% → 18.2% |   0 → 2 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` | `libjvm.dylib` |

##### `G1FullGCCompactTask::copy_object_to_new_location` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                                               | Location       |
| -----: | ----: | -----------: | ------: | ---------------------------------------------------- | -------------- |
|    new |    +4 | 0.0% → 80.0% |   0 → 4 | `G1FullGCCompactTask::G1CompactRegionClosure::apply` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `G1FullGCCompactTask::compact_region`                | `libjvm.dylib` |

##### `void OopOopIterateDispatch<G1AdjustClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                                          | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------- | -------------- |
|    new |    +5 | 0.0% → 100.0% |   0 → 5 | `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>` | `libjvm.dylib` |

##### `G1CollectedHeap::attempt_allocation_slow` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------- | -------------- |
| +300.0% |    +3 | 33.3% → 57.1% |   1 → 4 | `G1CollectedHeap::attempt_allocation` | `libjvm.dylib` |
|  +50.0% |    +1 | 66.7% → 42.9% |   2 → 3 | `G1CollectedHeap::mem_allocate`       | `libjvm.dylib` |

##### `void HeapRegion::apply_to_marked_objects<G1FullGCPrepareTask::G1PrepareCompactLiveClosure>` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                      | Location       |
| -----: | ----: | -----: | ------: | --------------------------- | -------------- |
| +80.0% |    +4 | 100.0% |   5 → 9 | `G1FullGCPrepareTask::work` | `libjvm.dylib` |

##### `G1FullGCPrepareTask::work` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller              | Location       |
| -----: | ----: | -----: | ------: | ------------------- | -------------- |
| +80.0% |    +4 | 100.0% |   5 → 9 | `WorkerThread::run` | `libjvm.dylib` |

##### `elementData(int)` (`java.util.ArrayList`)

| Change | Delta |      % |   Samples | Caller     | Location              |
| -----: | ----: | -----: | --------: | ---------- | --------------------- |
| +24.3% |   +36 | 100.0% | 148 → 184 | `get(int)` | `java.util.ArrayList` |

##### `get(int)` (`java.util.ArrayList`)

| Change | Delta |             % | Samples | Caller                   | Location                                                   |
| -----: | ----: | ------------: | ------: | ------------------------ | ---------------------------------------------------------- |
| +47.8% |   +22 | 25.8% → 32.2% | 46 → 68 | `findNearestCentroid()`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +27.3% |   +21 | 43.3% → 46.4% | 77 → 98 | `vectorSum()`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| -18.2% |   -10 | 30.9% → 21.3% | 55 → 45 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

| Change | Delta |             % |   Samples | Caller            | Location                                 |
| -----: | ----: | ------------: | --------: | ----------------- | ---------------------------------------- |
|  +2.6% |   +19 | 98.6% → 97.8% | 725 → 744 | `park()`          | `java.util.concurrent.locks.LockSupport` |
| +70.0% |    +7 |   1.4% → 2.2% |   10 → 17 | `parkUntil(long)` | `java.util.concurrent.locks.LockSupport` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

| Change | Delta |             % |   Samples | Caller                              | Location                            |
| -----: | ----: | ------------: | --------: | ----------------------------------- | ----------------------------------- |
|  +3.6% |   +16 | 60.6% → 61.2% | 439 → 455 | `awaitDone(int, long)`              | `java.util.concurrent.ForkJoinTask` |
|  +1.0% |    +3 | 39.4% → 38.8% | 286 → 289 | `awaitWork(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `grow(int)` (`java.util.ArrayList`)

| Change | Delta |             % | Samples | Caller               | Location              |
| -----: | ----: | ------------: | ------: | -------------------- | --------------------- |
| +44.4% |   +20 | 59.2% → 71.4% | 45 → 65 | `grow()`             | `java.util.ArrayList` |
| -16.1% |    -5 | 40.8% → 28.6% | 31 → 26 | `addAll(Collection)` | `java.util.ArrayList` |

##### `add(Object)` (`java.util.ArrayList`)

| Change | Delta |      % |   Samples | Caller                   | Location                                                   |
| -----: | ----: | -----: | --------: | ------------------------ | ---------------------------------------------------------- |
| +13.8% |   +15 | 100.0% | 109 → 124 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

| Change | Delta |      % |   Samples | Caller        | Location              |
| -----: | ----: | -----: | --------: | ------------- | --------------------- |
| +13.2% |   +14 | 100.0% | 106 → 120 | `add(Object)` | `java.util.ArrayList` |

##### `addAll(Collection)` (`java.util.ArrayList`)

| Change | Delta |      % |   Samples | Caller                       | Location                                    |
| -----: | ----: | -----: | --------: | ---------------------------- | ------------------------------------------- |
|  +6.4% |    +9 | 100.0% | 140 → 149 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `zero_blocks` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                              | Location                                                   |
| ------: | ----: | ------------: | ------: | ----------------------------------- | ---------------------------------------------------------- |
|  -27.9% |   -12 | 68.3% → 48.4% | 43 → 31 | `merge(Object, Object, BiFunction)` | `java.util.HashMap`                                        |
|  +57.1% |    +8 | 22.2% → 34.4% | 14 → 22 | `grow(int)`                         | `java.util.ArrayList`                                      |
| +175.0% |    +7 |  6.3% → 17.2% |  4 → 11 | `findNearestCentroid()`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |    -2 |   3.2% → 0.0% |   2 → 0 | `resize()`                          | `java.util.HashMap`                                        |

##### `vtable stub` (`<unknown>`)

| Change | Delta |             % | Samples | Caller      | Location                                               |
| -----: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `I2C/C2I adapters(0xbbe)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                 | Location                            |
| -----: | ----: | ------------: | ------: | ---------------------- | ----------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `I2C/C2I adapters(0xabebe)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                     | Location                                     |
| -----: | ----: | ------------: | ------: | ------------------------------------------ | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `checkResource(String, boolean, JarEntry)` | `jdk.internal.loader.URLClassPath$JarLoader` |

##### `I2C/C2I adapters(0xbbaa)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                              | Location                            |
| -----: | ----: | ------------: | ------: | ----------------------------------- | ----------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `PhaseCFG::global_code_motion` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                            | Location       |
| ------: | ----: | -----: | ------: | --------------------------------- | -------------- |
| +700.0% |    +7 | 100.0% |   1 → 8 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |

##### `PhaseCFG::do_global_code_motion` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller              | Location       |
| ------: | ----: | -----: | ------: | ------------------- | -------------- |
| +700.0% |    +7 | 100.0% |   1 → 8 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `Compile::optimize_loops` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller              | Location       |
| ------: | ----: | -----: | ------: | ------------------- | -------------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `Compile::Optimize` | `libjvm.dylib` |

##### `LIR_Assembler::emit_lir_list` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                     | Location       |
| ------: | ----: | -----: | ------: | -------------------------- | -------------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `LIR_Assembler::emit_code` | `libjvm.dylib` |

##### `LIR_Assembler::emit_code` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                        | Location       |
| ------: | ----: | -----: | ------: | ----------------------------- | -------------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `Compilation::emit_code_body` | `libjvm.dylib` |

##### `CompileBroker::compile_method` (`libjvm.dylib`)

| Change | Delta |              % | Samples | Caller                                        | Location       |
| -----: | ----: | -------------: | ------: | --------------------------------------------- | -------------- |
| +50.0% |    +1 | 100.0% → 75.0% |   2 → 3 | `CompilationPolicy::event`                    | `libjvm.dylib` |
|    new |    +1 |   0.0% → 25.0% |   0 → 1 | `CompilationPolicy::method_back_branch_event` | `libjvm.dylib` |

##### `CompilationPolicy::event` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                       | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------- | -------------- |
| +200.0% |    +2 | 33.3% → 60.0% |   1 → 3 | `Runtime1::counter_overflow` | `libjvm.dylib` |

##### `PhaseOutput::fill_buffer` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                | Location       |
| ------: | ----: | -----: | ------: | --------------------- | -------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `PhaseOutput::Output` | `libjvm.dylib` |

##### `PhaseCFG::schedule_local` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                         | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------ | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |

##### `Compile::disconnect_useless_nodes` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                   | Location       |
| -----: | ----: | ------------: | ------: | ---------------------------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |

##### `Node_Backward_Iterator::next` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                         | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------ | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |

##### `PhaseChaitin::bias_color` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                            | Location       |
| -----: | ----: | -----------: | ------: | --------------------------------- | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `PhaseChaitin::Select`            | `libjvm.dylib` |

##### `ciField::ciField` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                           | Location       |
| -----: | ----: | ------------: | ------: | -------------------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `ciEnv::get_field_by_index_impl` | `libjvm.dylib` |

##### `ciEnv::get_field_by_index_impl` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                      | Location       |
| -----: | ----: | ------------: | ------: | --------------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `ciEnv::get_field_by_index` | `libjvm.dylib` |

##### `ciEnv::get_field_by_index` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                        | Location       |
| -----: | ----: | ------------: | ------: | ----------------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `ciBytecodeStream::get_field` | `libjvm.dylib` |

##### `ciBytecodeStream::get_field` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                       | Location       |
| -----: | ----: | -----------: | ------: | ---------------------------- | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `Parse::do_field_access`     | `libjvm.dylib` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `GraphBuilder::access_field` | `libjvm.dylib` |

##### `PhaseCFG::schedule_late` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                         | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------ | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                               | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Matcher::Label_Root` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                | Location       |
| -----: | ----: | ------------: | ------: | --------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `Matcher::Label_Root` | `libjvm.dylib` |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `Matcher::match_tree` | `libjvm.dylib` |

##### `PhaseBlockLayout::grow_traces` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                               | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `PhaseBlockLayout::PhaseBlockLayout` | `libjvm.dylib` |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |   Samples | Caller        | Location                                                  |
| -----: | ----: | -----: | --------: | ------------- | --------------------------------------------------------- |
|  -5.8% |   -56 | 100.0% | 970 → 914 | `vectorSum()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `hash(Object)` (`java.util.HashMap`)

|  Change | Delta |              % | Samples | Caller                              | Location            |
| ------: | ----: | -------------: | ------: | ----------------------------------- | ------------------- |
|  -50.0% |   -19 | 95.0% → 100.0% | 38 → 19 | `computeIfAbsent(Object, Function)` | `java.util.HashMap` |
| removed |    -1 |    2.5% → 0.0% |   1 → 0 | `putMapEntries(Map, boolean)`       | `java.util.HashMap` |
| removed |    -1 |    2.5% → 0.0% |   1 → 0 | `put(Object, Object)`               | `java.util.HashMap` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                          | Location       |
| -----: | ----: | -----: | ------: | ------------------------------- | -------------- |
| -18.1% |   -17 | 100.0% | 94 → 77 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller             | Location       |
| -----: | ----: | -----: | ------: | ------------------ | -------------- |
| -17.9% |   -17 | 100.0% | 95 → 78 | `Thread::call_run` | `libjvm.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

| Change | Delta |      % |   Samples | Caller         | Location                  |
| -----: | ----: | -----: | --------: | -------------- | ------------------------- |
|  -6.8% |   -17 | 100.0% | 249 → 232 | `thread_start` | `libsystem_pthread.dylib` |

##### `G1ParScanThreadState::trim_queue_to_threshold` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                       | Location       |
| -----: | ----: | ------------: | ------: | -------------------------------------------- | -------------- |
| -50.0% |   -11 | 73.3% → 84.6% | 22 → 11 | `G1ParScanThreadState::steal_and_trim_queue` | `libjvm.dylib` |
| -75.0% |    -6 | 26.7% → 15.4% |   8 → 2 | `G1ParEvacuateFollowersClosure::do_void`     | `libjvm.dylib` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change | Delta |             % | Samples | Caller              | Location                                                               |
| ------: | ----: | ------------: | ------: | ------------------- | ---------------------------------------------------------------------- |
| removed |   -17 | 100.0% → 0.0% |  17 → 0 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000c80111f208` |

##### `Thread::call_run` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller                | Location       |
| -----: | ----: | -----: | --------: | --------------------- | -------------- |
|  -6.5% |   -16 | 100.0% | 248 → 232 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller           | Location                  |
| -----: | ----: | -----: | --------: | ---------------- | ------------------------- |
|  -6.5% |   -16 | 100.0% | 248 → 232 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------- | -------------- |
| -17.4% |   -15 | 100.0% | 86 → 71 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `_new_array_Java` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                  | Location                                                   |
| ------: | ----: | -------------: | ------: | ----------------------- | ---------------------------------------------------------- |
|  -24.1% |   -14 | 98.3% → 100.0% | 58 → 44 | `copyOf(Object[], int)` | `java.util.Arrays`                                         |
| removed |    -1 |    1.7% → 0.0% |   1 → 0 | `findNearestCentroid()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `OptoRuntime::new_array_C` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller            | Location    |
| -----: | ----: | -----: | ------: | ----------------- | ----------- |
| -25.9% |   -14 | 100.0% | 54 → 40 | `_new_array_Java` | `<unknown>` |

##### `G1ParScanThreadState::steal_and_trim_queue` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                   | Location       |
| -----: | ----: | -----: | ------: | ---------------------------------------- | -------------- |
| -54.2% |   -13 | 100.0% | 24 → 11 | `G1ParEvacuateFollowersClosure::do_void` | `libjvm.dylib` |

##### `CollectedHeap::array_allocate` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                             | Location       |
| ------: | ----: | -------------: | ------: | ---------------------------------- | -------------- |
|  -22.9% |   -11 | 98.0% → 100.0% | 48 → 37 | `InstanceKlass::allocate_objArray` | `libjvm.dylib` |
| removed |    -1 |    2.0% → 0.0% |   1 → 0 | `OptoRuntime::new_array_C`         | `libjvm.dylib` |

##### `MemAllocator::allocate` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                          | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------- | -------------- |
| -25.0% |   -12 | 98.0% → 94.7% | 48 → 36 | `CollectedHeap::array_allocate` | `libjvm.dylib` |
|    new |    +1 |   0.0% → 2.6% |   0 → 1 | `Unsafe_AllocateInstance`       | `libjvm.dylib` |

##### `InstanceKlass::allocate_objArray` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                     | Location       |
| -----: | ----: | -----: | ------: | -------------------------- | -------------- |
| -20.8% |   -10 | 100.0% | 48 → 38 | `OptoRuntime::new_array_C` | `libjvm.dylib` |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                          | Location       |
| ------: | ----: | -----------: | ------: | ----------------------------------------------- | -------------- |
| removed |    -8 | 80.0% → 0.0% |   8 → 0 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib` |
| removed |    -2 | 20.0% → 0.0% |   2 → 0 | `G1ParScanThreadState::steal_and_trim_queue`    | `libjvm.dylib` |

##### `tryCompensate(long, boolean)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % | Samples | Caller                                                    | Location                            |
| -----: | ----: | -----: | ------: | --------------------------------------------------------- | ----------------------------------- |
| -45.0% |    -9 | 100.0% | 20 → 11 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool` |

##### `Compilation::compile_method` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                     | Location       |
| -----: | ----: | -----: | ------: | -------------------------- | -------------- |
| -39.1% |    -9 | 100.0% | 23 → 14 | `Compilation::Compilation` | `libjvm.dylib` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % |   Samples | Caller                   | Location                                                               |
| -----: | ----: | -----: | --------: | ------------------------ | ---------------------------------------------------------------------- |
|  -1.8% |    -6 | 100.0% | 329 → 323 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000003011a3b90` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000003011a3b90`)

| Change | Delta |      % |   Samples | Caller                | Location            |
| -----: | ----: | -----: | --------: | --------------------- | ------------------- |
|  -1.8% |    -6 | 100.0% | 330 → 324 | `forEach(BiConsumer)` | `java.util.HashMap` |

##### `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |      % | Samples | Caller                  | Location                                  |
| -----: | ----: | -----: | ------: | ----------------------- | ----------------------------------------- |
| -80.0% |    -4 | 100.0% |   5 → 1 | `executeOperation(int)` | `org.renaissance.harness.ExecutionDriver` |

##### `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000003011a2388`)

| Change | Delta |      % | Samples | Caller        | Location                           |
| -----: | ----: | -----: | ------: | ------------- | ---------------------------------- |
| -37.5% |    -3 | 100.0% |   8 → 5 | `accept(int)` | `java.util.stream.IntPipeline$1$1` |

##### `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`)

| Change | Delta |      % | Samples | Caller               | Location                                  |
| -----: | ----: | -----: | ------: | -------------------- | ----------------------------------------- |
| -60.0% |    -3 | 100.0% |   5 → 2 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % |   Samples | Caller   | Location                                                               |
| -----: | ----: | -----: | --------: | -------- | ---------------------------------------------------------------------- |
|  -0.7% |    -3 | 100.0% | 452 → 449 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000003011a2bd0` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000003011a2bd0`)

| Change | Delta |      % |   Samples | Caller   | Location                                            |
| -----: | ----: | -----: | --------: | -------- | --------------------------------------------------- |
|  -0.7% |    -3 | 100.0% | 452 → 449 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `div(double[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change | Delta |             % | Samples | Caller          | Location                                               |
| ------: | ----: | ------------: | ------: | --------------- | ------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `average(List)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `forkThreshold()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % | Samples | Caller      | Location                                               |
| ------: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `<clinit>()` (`scopt.OptionParser`)

|  Change | Delta |             % | Samples | Caller              | Location                               |
| ------: | ----: | ------------: | ------: | ------------------- | -------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `createParser(Map)` | `org.renaissance.harness.ConfigParser` |

##### `createParser(Map)` (`org.renaissance.harness.ConfigParser`)

| Change | Delta |      % | Samples | Caller        | Location                               |
| -----: | ----: | -----: | ------: | ------------- | -------------------------------------- |
| -33.3% |    -1 | 100.0% |   3 → 2 | `<init>(Map)` | `org.renaissance.harness.ConfigParser` |

##### `<init>(Map)` (`org.renaissance.harness.ConfigParser`)

| Change | Delta |      % | Samples | Caller           | Location                                    |
| -----: | ----: | -----: | ------: | ---------------- | ------------------------------------------- |
| -33.3% |    -1 | 100.0% |   3 → 2 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite$` |

##### `liftedTree1$1()` (`scopt.Read$`)

|  Change | Delta |             % | Samples | Caller       | Location      |
| ------: | ----: | ------------: | ------: | ------------ | ------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<clinit>()` | `scopt.Read$` |

##### `updateOption(OptionDef, Read)` (`scopt.OptionParser`)

|  Change | Delta |             % | Samples | Caller                      | Location             |
| ------: | ----: | ------------: | ------: | --------------------------- | -------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `onChange(OptionDef, Read)` | `scopt.OptionParser` |

##### `onChange(OptionDef, Read)` (`scopt.OptionParser`)

|  Change | Delta |             % | Samples | Caller                        | Location          |
| ------: | ----: | ------------: | ------: | ----------------------------- | ----------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `fireChange(OptionDef, Read)` | `scopt.OptionDef` |

##### `fireChange(OptionDef, Read)` (`scopt.OptionDef`)

|  Change | Delta |             % | Samples | Caller                | Location          |
| ------: | ----: | ------------: | ------: | --------------------- | ----------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `validate(Function1)` | `scopt.OptionDef` |

##### `validate(Function1)` (`scopt.OptionDef`)

|  Change | Delta |             % | Samples | Caller        | Location                                       |
| ------: | ----: | ------------: | ------: | ------------- | ---------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>(Map)` | `org.renaissance.harness.ConfigParser$$anon$1` |

##### `parse(Seq, Object)` (`scopt.OptionParser`)

| Change | Delta |      % | Samples | Caller            | Location                               |
| -----: | ----: | -----: | ------: | ----------------- | -------------------------------------- |
| -50.0% |    -1 | 100.0% |   2 → 1 | `parse(String[])` | `org.renaissance.harness.ConfigParser` |

##### `Compiler::compile_method` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                     | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------------ | -------------- |
| -39.1% |    -9 | 100.0% | 23 → 14 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `Unsafe_Unpark` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller              | Location                   |
| ------: | ----: | -------------: | ------: | ------------------- | -------------------------- |
|   -9.6% |    -7 | 98.6% → 100.0% | 73 → 66 | `unpark(Object)`    | `jdk.internal.misc.Unsafe` |
| removed |    -1 |    1.4% → 0.0% |   1 → 0 | `break_stack_range` | `<unknown>`                |

##### `ObjArrayAllocator::initialize` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                          | Location       |
| ------: | ----: | -------------: | ------: | ------------------------------- | -------------- |
|  -87.5% |    -7 | 88.9% → 100.0% |   8 → 1 | `MemAllocator::allocate`        | `libjvm.dylib` |
| removed |    -1 |   11.1% → 0.0% |   1 → 0 | `CollectedHeap::array_allocate` | `libjvm.dylib` |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

| Change | Delta |             % | Samples | Caller              | Location       |
| -----: | ----: | ------------: | ------: | ------------------- | -------------- |
| -46.7% |    -7 | 83.3% → 72.7% |  15 → 8 | `WorkerThread::run` | `libjvm.dylib` |

##### `G1ParEvacuateFollowersClosure::do_void` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                         | Location       |
| -----: | ----: | -----: | ------: | ---------------------------------------------- | -------------- |
| -21.2% |    -7 | 100.0% | 33 → 26 | `G1EvacuateRegionsTask::evacuate_live_objects` | `libjvm.dylib` |

##### `G1EvacuateRegionsTask::evacuate_live_objects` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                            | Location       |
| -----: | ----: | -----: | ------: | --------------------------------- | -------------- |
| -21.2% |    -7 | 100.0% | 33 → 26 | `G1EvacuateRegionsBaseTask::work` | `libjvm.dylib` |

##### `G1CollectedHeap::par_iterate_regions_array` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                                                    | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------- | -------------- |
| removed |    -3 | 42.9% → 0.0% |   3 → 0 | `G1PostEvacuateCollectionSetCleanupTask2::FreeCollectionSetTask::do_work` | `libjvm.dylib` |
| removed |    -3 | 42.9% → 0.0% |   3 → 0 | `G1MergeHeapRootsTask::work`                                              | `libjvm.dylib` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `G1RemSet::scan_collection_set_code_roots`                                | `libjvm.dylib` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

| Change | Delta |      % |   Samples | Caller                              | Location                                    |
| -----: | ----: | -----: | --------: | ----------------------------------- | ------------------------------------------- |
|  -2.1% |    -7 | 100.0% | 329 → 322 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `unpark(Object)` (`jdk.internal.misc.Unsafe`)

| Change | Delta |      % | Samples | Caller           | Location                                 |
| -----: | ----: | -----: | ------: | ---------------- | ---------------------------------------- |
|  -9.5% |    -7 | 100.0% | 74 → 67 | `unpark(Thread)` | `java.util.concurrent.locks.LockSupport` |

##### `unpark(Thread)` (`java.util.concurrent.locks.LockSupport`)

| Change | Delta |             % | Samples | Caller                         | Location                            |
| -----: | ----: | ------------: | ------: | ------------------------------ | ----------------------------------- |
| -50.0% |    -9 | 24.3% → 13.4% |  18 → 9 | `tryCompensate(long, boolean)` | `java.util.concurrent.ForkJoinPool` |
| +60.0% |    +3 |  6.8% → 11.9% |   5 → 8 | `signalWork()`                 | `java.util.concurrent.ForkJoinPool` |
|  -2.0% |    -1 | 68.9% → 74.6% | 51 → 50 | `signalWaiters()`              | `java.util.concurrent.ForkJoinTask` |

##### `doubleValue()` (`java.lang.Double`)

| Change | Delta |             % |  Samples | Caller                           | Location                                                   |
| -----: | ----: | ------------: | -------: | -------------------------------- | ---------------------------------------------------------- |
|  -9.7% |   -10 | 89.6% → 84.5% | 103 → 93 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| +41.7% |    +5 | 10.4% → 15.5% |  12 → 17 | `distance(Double[], Double[])`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `defineClass(String, Resource)` (`java.net.URLClassLoader`)

| Change | Delta |      % | Samples | Caller  | Location                    |
| -----: | ----: | -----: | ------: | ------- | --------------------------- |
| -31.3% |    -5 | 100.0% | 16 → 11 | `run()` | `java.net.URLClassLoader$1` |

##### `resize()` (`java.util.HashMap`)

|  Change | Delta |              % | Samples | Caller                                          | Location            |
| ------: | ----: | -------------: | ------: | ----------------------------------------------- | ------------------- |
| removed |    -3 |   50.0% → 0.0% |   3 → 0 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap` |
|  -66.7% |    -2 | 50.0% → 100.0% |   3 → 1 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `checkIndex(int, int)` (`java.util.Objects`)

| Change | Delta |      % | Samples | Caller     | Location              |
| -----: | ----: | -----: | ------: | ---------- | --------------------- |
| -14.3% |    -4 | 100.0% | 28 → 24 | `get(int)` | `java.util.ArrayList` |

##### `entrySet()` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Caller                        | Location            |
| ------: | ----: | ------------: | ------: | ----------------------------- | ------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

| Change | Delta |      % | Samples | Caller                                                    | Location                |
| -----: | ----: | -----: | ------: | --------------------------------------------------------- | ----------------------- |
| -23.1% |    -3 | 100.0% | 13 → 10 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `defineClass(String, byte[], int, int, ProtectionDomain)` (`java.lang.ClassLoader`)

| Change | Delta |      % | Samples | Caller                                              | Location                          |
| -----: | ----: | -----: | ------: | --------------------------------------------------- | --------------------------------- |
| -23.1% |    -3 | 100.0% | 13 → 10 | `defineClass(String, byte[], int, int, CodeSource)` | `java.security.SecureClassLoader` |

##### `defineClass(String, byte[], int, int, CodeSource)` (`java.security.SecureClassLoader`)

|  Change | Delta |           % | Samples | Caller                          | Location                                 |
| ------: | ----: | ----------: | ------: | ------------------------------- | ---------------------------------------- |
|  -23.1% |    -3 |      100.0% | 13 → 10 | `defineClass(String, Resource)` | `java.net.URLClassLoader`                |
| removed |    -1 | 7.7% → 0.0% |   1 → 0 | `defineClass(String, Resource)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

| Change | Delta |      % |   Samples | Caller     | Location                            |
| -----: | ----: | -----: | --------: | ---------- | ----------------------------------- |
|  -0.7% |    -3 | 100.0% | 452 → 449 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

| Change | Delta |      % |   Samples | Caller            | Location                                    |
| -----: | ----: | -----: | --------: | ----------------- | ------------------------------------------- |
|  -0.6% |    -2 | 100.0% | 332 → 330 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `stream(double[], int, int)` (`java.util.Arrays`)

| Change | Delta |      % | Samples | Caller             | Location           |
| -----: | ----: | -----: | ------: | ------------------ | ------------------ |
| -66.7% |    -2 | 100.0% |   3 → 1 | `stream(double[])` | `java.util.Arrays` |

##### `stream(double[])` (`java.util.Arrays`)

| Change | Delta |      % | Samples | Caller            | Location                                               |
| -----: | ----: | -----: | ------: | ----------------- | ------------------------------------------------------ |
| -66.7% |    -2 | 100.0% |   3 → 1 | `boxed(double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `push(ForkJoinTask, ForkJoinPool, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |      % | Samples | Caller   | Location                            |
| -----: | ----: | -----: | ------: | -------- | ----------------------------------- |
| -40.0% |    -2 | 100.0% |   5 → 3 | `fork()` | `java.util.concurrent.ForkJoinTask` |

##### `fork()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |      % | Samples | Caller      | Location                                               |
| -----: | ----: | -----: | ------: | ----------- | ------------------------------------------------------ |
| -40.0% |    -2 | 100.0% |   5 → 3 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `read(Manifest$FastInputStream, byte[], String, int)` (`java.util.jar.Attributes`)

|  Change | Delta |             % | Samples | Caller                      | Location                 |
| ------: | ----: | ------------: | ------: | --------------------------- | ------------------------ |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `read(InputStream, String)` | `java.util.jar.Manifest` |

##### `Compilation::Compilation` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                     | Location       |
| -----: | ----: | -----: | ------: | -------------------------- | -------------- |
| -39.1% |    -9 | 100.0% | 23 → 14 | `Compiler::compile_method` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                       | Location       |
| -----: | ----: | -----: | ------: | ---------------------------- | -------------- |
| -11.3% |    -7 | 100.0% | 62 → 55 | `C2Compiler::compile_method` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                     | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------------ | -------------- |
| -11.3% |    -7 | 100.0% | 62 → 55 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller              | Location       |
| -----: | ----: | -----: | ------: | ------------------- | -------------- |
| -33.3% |    -7 | 100.0% | 21 → 14 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                   | Location       |
| -----: | ----: | -----: | ------: | ------------------------ | -------------- |
| -71.4% |    -5 | 100.0% |   7 → 2 | `PhaseIterGVN::optimize` | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                     | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | -------------- |
| removed |    -4 |  57.1% → 0.0% |   4 → 0 | `Compile::Optimize`                        | `libjvm.dylib` |
|  -50.0% |    -1 | 28.6% → 50.0% |   2 → 1 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
| removed |    -1 |  14.3% → 0.0% |   1 → 0 | `Compile::remove_speculative_types`        | `libjvm.dylib` |
|     new |    +1 |  0.0% → 50.0% |   0 → 1 | `Compile::process_for_post_loop_opts_igvn` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                        | Location       |
| -----: | ----: | -----: | ------: | ----------------------------- | -------------- |
| -26.3% |    -5 | 100.0% | 19 → 14 | `Compilation::compile_method` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller             | Location       |
| -----: | ----: | -----: | ------: | ------------------ | -------------- |
| -20.0% |    -4 | 100.0% | 20 → 16 | `Compile::Compile` | `libjvm.dylib` |

##### `GraphBuilder::invoke` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                      | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------------- | -------------- |
| -66.7% |    -4 | 100.0% |   6 → 2 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                            | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------- | -------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `LinearScan::do_linear_scan` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                  | Location       |
| -----: | ----: | -----: | ------: | ----------------------- | -------------- |
| -60.0% |    -3 | 100.0% |   5 → 2 | `Compilation::emit_lir` | `libjvm.dylib` |

##### `GraphBuilder::try_inline_full` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                     | Location       |
| -----: | ----: | -----: | ------: | -------------------------- | -------------- |
| -75.0% |    -3 | 100.0% |   4 → 1 | `GraphBuilder::try_inline` | `libjvm.dylib` |

##### `GraphBuilder::try_inline` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                 | Location       |
| -----: | ----: | -----: | ------: | ---------------------- | -------------- |
| -75.0% |    -3 | 100.0% |   4 → 1 | `GraphBuilder::invoke` | `libjvm.dylib` |

##### `ciEnv::register_method` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                        | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------- | -------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `Compilation::compile_method` | `libjvm.dylib` |

##### `MemNode::Ideal_common` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller             | Location       |
| ------: | ----: | -----------: | ------: | ------------------ | -------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `LoadNode::Ideal`  | `libjvm.dylib` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `StoreNode::Ideal` | `libjvm.dylib` |

##### `PhaseChaitin::post_allocate_copy_removal` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                            | Location       |
| -----: | ----: | -----: | ------: | --------------------------------- | -------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `GraphKit::add_safepoint_edges` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                        | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `GraphKit::make_runtime_call` | `libjvm.dylib` |

#### Callees

Callees with the largest change in contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |           % |       Samples | Callee                 | Location                             |
| -----: | ----: | ----------: | ------------: | ---------------------- | ------------------------------------ |
|  +4.5% |  +176 |      100.0% | 3,920 → 4,096 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask`  |
|    new |    +4 | 0.0% → 0.1% |         0 → 4 | `getRawResult()`       | `java.util.concurrent.RecursiveTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % |       Samples | Callee                                                    | Location                                      |
| -----: | ----: | ------------: | ------------: | --------------------------------------------------------- | --------------------------------------------- |
|  +4.5% |  +166 |         94.5% | 3,706 → 3,872 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  +9.7% |  +100 | 26.4% → 27.7% | 1,035 → 1,135 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
|  +3.6% |   +16 | 11.2% → 11.1% |     439 → 455 | `park()`                                                  | `java.util.concurrent.locks.LockSupport`      |
|    new |    +1 |  0.0% → <0.1% |         0 → 1 | `I2C/C2I adapters(0xbbe)`                                 | `<unknown>`                                   |
|    new |    +1 |  0.0% → <0.1% |         0 → 1 | `signalWaiters()`                                         | `java.util.concurrent.ForkJoinTask`           |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |            % |       Samples | Callee                                           | Location                            |
| ------: | ----: | -----------: | ------------: | ------------------------------------------------ | ----------------------------------- |
|   +3.9% |  +163 |        93.2% | 4,141 → 4,304 | `scan(ForkJoinPool$WorkQueue, int, int)`         | `java.util.concurrent.ForkJoinPool` |
|   +3.0% |    +9 |         6.7% |     300 → 309 | `awaitWork(ForkJoinPool$WorkQueue)`              | `java.util.concurrent.ForkJoinPool` |
| removed |    -1 | <0.1% → 0.0% |         1 → 0 | `InterpreterRuntime::frequency_counter_overflow` | `libjvm.dylib`                      |
|     new |    +1 | 0.0% → <0.1% |         0 → 1 | `I2C/C2I adapters(0xbb)`                         | `<unknown>`                         |
|     new |    +1 | 0.0% → <0.1% |         0 → 1 | `I2C/C2I adapters(0xbbaa)`                       | `<unknown>`                         |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

| Change | Delta |      % |       Samples | Callee                              | Location                            |
| -----: | ----: | -----: | ------------: | ----------------------------------- | ----------------------------------- |
|  +3.9% |  +173 | 100.0% | 4,445 → 4,618 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change | Delta |            % |       Samples | Callee                                 | Location                                      |
| ------: | ----: | -----------: | ------------: | -------------------------------------- | --------------------------------------------- |
|   +4.5% |  +166 |       100.0% | 3,706 → 3,872 | `doExec()`                             | `java.util.concurrent.ForkJoinTask`           |
| +100.0% |    +1 | <0.1% → 0.1% |         1 → 2 | `getAndClearSlot(ForkJoinTask[], int)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |            % |       Samples | Callee                                               | Location                                      |
| ------: | ----: | -----------: | ------------: | ---------------------------------------------------- | --------------------------------------------- |
|   +3.9% |  +160 |        99.8% | 4,134 → 4,294 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| +100.0% |    +3 |         0.1% |         3 → 6 | `signalWork()`                                       | `java.util.concurrent.ForkJoinPool`           |
|     new |    +1 | 0.0% → <0.1% |         0 → 1 | `casSlotToNull(ForkJoinTask[], int, ForkJoinTask)`   | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % |       Samples | Callee                           | Location                                            |
| -----: | ----: | ------------: | ------------: | -------------------------------- | --------------------------------------------------- |
|  +3.9% |  +159 |         99.3% | 4,105 → 4,264 | `exec()`                         | `java.util.concurrent.RecursiveTask`                |
|  -0.7% |    -3 | 10.9% → 10.5% |     452 → 449 | `exec()`                         | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|  +1.9% |    +1 |   1.3% → 1.2% |       52 → 53 | `setDone()`                      | `java.util.concurrent.ForkJoinTask`                 |
|    new |    +1 |  0.0% → <0.1% |         0 → 1 | `ic_miss_stub`                   | `<unknown>`                                         |
|    new |    +1 |  0.0% → <0.1% |         0 → 1 | `counter_overflow Runtime1 stub` | `<unknown>`                                         |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |      % |       Samples | Callee     | Location                            |
| -----: | ----: | -----: | ------------: | ---------- | ----------------------------------- |
|  +3.9% |  +161 | 100.0% | 4,133 → 4,294 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change | Delta |             % |       Samples | Callee                           | Location                                                   |
| -----: | ----: | ------------: | ------------: | -------------------------------- | ---------------------------------------------------------- |
|  +4.5% |  +177 | 95.5% → 96.1% | 3,920 → 4,097 | `join()`                         | `java.util.concurrent.ForkJoinTask`                        |
|  +4.4% |   +79 | 43.3% → 43.5% | 1,777 → 1,856 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +4.8% |   +68 | 34.8% → 35.1% | 1,429 → 1,497 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +8.4% |   +53 | 15.4% → 16.0% |     630 → 683 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  +1.5% |    +5 |   8.3% → 8.1% |     341 → 346 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change | Delta |      % |       Samples | Callee      | Location                                               |
| -----: | ----: | -----: | ------------: | ----------- | ------------------------------------------------------ |
|  +3.9% |  +159 | 100.0% | 4,104 → 4,263 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |             % |     Samples | Callee                         | Location                            |
| -----: | ----: | ------------: | ----------: | ------------------------------ | ----------------------------------- |
| +11.8% |  +117 | 95.9% → 97.8% | 993 → 1,110 | `doExec()`                     | `java.util.concurrent.ForkJoinTask` |
| -45.0% |    -9 |   1.9% → 1.0% |     20 → 11 | `tryCompensate(long, boolean)` | `java.util.concurrent.ForkJoinPool` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % |       Samples | Callee                   | Location                                                   |
| -----: | ----: | ------------: | ------------: | ------------------------ | ---------------------------------------------------------- |
|  +4.4% |   +79 |        100.0% | 1,777 → 1,856 | `computeDirectly()`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +3.2% |   +43 | 75.5% → 74.6% | 1,342 → 1,385 | `findNearestCentroid()`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +8.3% |   +36 | 24.5% → 25.4% |     435 → 471 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |             % |   Samples | Callee                                           | Location                                                  |
| -----: | ----: | ------------: | --------: | ------------------------------------------------ | --------------------------------------------------------- |
|  -5.8% |   -56 | 67.9% → 61.1% | 970 → 914 | `accumulate(Double[], double[])`                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| +27.3% |   +21 |   5.4% → 6.5% |   77 → 98 | `get(int)`                                       | `java.util.ArrayList`                                     |
|    new |    +2 |   0.0% → 0.1% |     0 → 2 | `InterpreterRuntime::frequency_counter_overflow` | `libjvm.dylib`                                            |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |       Samples | Callee              | Location                                                  |
| -----: | ----: | -----: | ------------: | ------------------- | --------------------------------------------------------- |
|  +4.8% |   +68 | 100.0% | 1,429 → 1,497 | `vectorSum()`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  +4.8% |   +68 | 100.0% | 1,429 → 1,497 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |     % |   Samples | Callee     | Location                            |
| -----: | ----: | ----: | --------: | ---------- | ----------------------------------- |
|  +6.2% |   +56 | 99.9% | 908 → 964 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change | Delta |              % |   Samples | Callee               | Location                                               |
| ------: | ----: | -------------: | --------: | -------------------- | ------------------------------------------------------ |
|   +8.8% |   +55 | 99.8% → 100.0% | 622 → 677 | `invoke()`           | `java.util.concurrent.ForkJoinTask`                    |
| removed |    -1 |    0.2% → 0.0% |     1 → 0 | `div(double[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change | Delta |             % |   Samples | Callee                | Location                                               |
| ------: | ----: | ------------: | --------: | --------------------- | ------------------------------------------------------ |
|   +8.7% |   +54 | 98.9% → 99.1% | 623 → 677 | `average(List)`       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| removed |    -1 |   0.2% → 0.0% |     1 → 0 | `put(Object, Object)` | `java.util.HashMap`                                    |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % |   Samples | Callee                     | Location                                               |
| -----: | ----: | -----: | --------: | -------------------------- | ------------------------------------------------------ |
|  +8.4% |   +53 | 100.0% | 630 → 683 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  +8.4% |   +53 | 100.0% | 630 → 683 | `computeDirectly()`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `grow()` (`java.util.ArrayList`)

| Change | Delta |             % | Samples | Callee      | Location              |
| -----: | ----: | ------------: | ------: | ----------- | --------------------- |
| +44.4% |   +20 | 86.5% → 63.7% | 45 → 65 | `grow(int)` | `java.util.ArrayList` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % |   Samples | Callee                                           | Location                                                   |
| ------: | ----: | ------------: | --------: | ------------------------------------------------ | ---------------------------------------------------------- |
|  +47.8% |   +22 |   3.4% → 4.9% |   46 → 68 | `get(int)`                                       | `java.util.ArrayList`                                      |
|   +1.8% |   +16 | 66.2% → 65.3% | 889 → 905 | `distance(Double[], Double[])`                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +175.0% |    +7 |   0.3% → 0.8% |    4 → 11 | `zero_blocks`                                    | `<unknown>`                                                |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `InterpreterRuntime::frequency_counter_overflow` | `libjvm.dylib`                                             |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `DeoptimizationBlob`                             | `<unknown>`                                                |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % |   Samples | Callee               | Location              |
| ------: | ----: | ------------: | --------: | -------------------- | --------------------- |
|  +13.8% |   +15 | 25.1% → 26.3% | 109 → 124 | `add(Object)`        | `java.util.ArrayList` |
|  -18.2% |   -10 |  12.6% → 9.6% |   55 → 45 | `get(int)`           | `java.util.ArrayList` |
| removed |    -1 |   0.2% → 0.0% |     1 → 0 | `_new_instance_Java` | `<unknown>`           |
|     new |    +1 |   0.0% → 0.2% |     0 → 1 | `SafepointBlob`      | `<unknown>`           |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change | Delta |            % | Samples | Callee                                                                                       | Location                                  |
| -----: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
|    new |   +17 | 0.0% → 81.0% |  0 → 17 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
|    new |    +4 | 0.0% → 19.0% |   0 → 4 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |           % | Samples | Callee          | Location           |
| ------: | ----: | ----------: | ------: | --------------- | ------------------ |
|  +41.7% |    +5 | 1.3% → 1.9% | 12 → 17 | `doubleValue()` | `java.lang.Double` |
| removed |    -3 | 0.3% → 0.0% |   3 → 0 | `SafepointBlob` | `<unknown>`        |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |             % |   Samples | Callee               | Location              |
| -----: | ----: | ------------: | --------: | -------------------- | --------------------- |
|  +6.4% |    +9 | 63.9% → 63.4% | 140 → 149 | `addAll(Collection)` | `java.util.ArrayList` |
|  +8.9% |    +7 | 36.1% → 36.6% |   79 → 86 | `<init>(Collection)` | `java.util.ArrayList` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000003011a7248`)

| Change | Delta |      % |   Samples | Callee                       | Location                                    |
| -----: | ----: | -----: | --------: | ---------------------------- | ------------------------------------------- |
|  +7.3% |   +16 | 100.0% | 219 → 235 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |              % | Samples | Callee                        | Location                                                           |
| -----: | ----: | -------------: | ------: | ----------------------------- | ------------------------------------------------------------------ |
|    new |    +5 |   0.0% → 33.3% |   0 → 5 | `toCsvRows(Function)`         | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter` |
| +12.5% |    +1 | 100.0% → 60.0% |   8 → 9 | `generateData(int, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                        |
|    new |    +1 |    0.0% → 6.7% |   0 → 1 | `loadClass(String)`           | `java.lang.ClassLoader`                                            |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |              % |   Samples | Callee                           | Location                                                   |
| -----: | ----: | -------------: | --------: | -------------------------------- | ---------------------------------------------------------- |
|  +0.9% |    +3 | 100.0% → 99.4% | 341 → 344 | `combineResults(Map, Map)`       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|    new |    +1 |    0.0% → 0.3% |     0 → 1 | `counter_overflow Runtime1 stub` | `<unknown>`                                                |

##### `rowToArray$1(Map)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |            % | Samples | Callee              | Location                            |
| -----: | ----: | -----------: | ------: | ------------------- | ----------------------------------- |
|    new |    +4 | 0.0% → 80.0% |   0 → 4 | `<clinit>()`        | `scala.Predef$`                     |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `toArray(ClassTag)` | `scala.collection.AbstractIterable` |

##### `setUpBeforeAll$$anonfun$1(Map)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |             % | Samples | Callee              | Location                                  |
| -----: | ----: | ------------: | ------: | ------------------- | ----------------------------------------- |
|    new |    +5 | 0.0% → 100.0% |   0 → 5 | `rowToArray$1(Map)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x0000000301126908`)

| Change | Delta |             % | Samples | Callee                           | Location                                  |
| -----: | ----: | ------------: | ------: | -------------------------------- | ----------------------------------------- |
|    new |    +5 | 0.0% → 100.0% |   0 → 5 | `setUpBeforeAll$$anonfun$1(Map)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `lambda$toCsvRows$2(String[], Function, String)` (`org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`)

| Change | Delta |             % | Samples | Callee          | Location                                                             |
| -----: | ----: | ------------: | ------: | --------------- | -------------------------------------------------------------------- |
|    new |    +5 | 0.0% → 100.0% |   0 → 5 | `apply(Object)` | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x0000000301126908` |

##### `apply(Object)` (`org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter$$Lambda.0x0000000301123bf8`)

| Change | Delta |             % | Samples | Callee                                           | Location                                                           |
| -----: | ----: | ------------: | ------: | ------------------------------------------------ | ------------------------------------------------------------------ |
|    new |    +5 | 0.0% → 100.0% |   0 → 5 | `lambda$toCsvRows$2(String[], Function, String)` | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter` |

##### `Parker::park` (`libjvm.dylib`)

|  Change | Delta |             % |   Samples | Callee                              | Location                  |
| ------: | ----: | ------------: | --------: | ----------------------------------- | ------------------------- |
|   +4.5% |   +32 | 99.0% → 99.5% | 711 → 743 | `__psynch_cvwait`                   | `libsystem_kernel.dylib`  |
| removed |    -6 |   0.8% → 0.0% |     6 → 0 | `_pthread_cond_wait`                | `libsystem_pthread.dylib` |
|     new |    +2 |   0.0% → 0.3% |     0 → 2 | `__gettimeofday`                    | `libsystem_kernel.dylib`  |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `pthread_dependency_wait_np.cold.3` | `libsystem_pthread.dylib` |

##### `Unsafe_Park` (`libjvm.dylib`)

|  Change | Delta |             % |   Samples | Callee                                                                                                                                                     | Location                  |
| ------: | ----: | ------------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
|   +4.0% |   +29 | 97.8% → 98.3% | 718 → 747 | `Parker::park`                                                                                                                                             | `libjvm.dylib`            |
|  +50.0% |    +3 |   0.8% → 1.2% |     6 → 9 | `pthread_jit_write_protect_np`                                                                                                                             | `libsystem_pthread.dylib` |
|  -50.0% |    -1 |   0.3% → 0.1% |     2 → 1 | `AccessInternal::PostRuntimeDispatch<G1BarrierSet::AccessBarrier<286822ull, G1BarrierSet>, (AccessInternal::BarrierType)3, 286822ull>::oop_access_barrier` | `libjvm.dylib`            |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `JavaThread::threadObj`                                                                                                                                    | `libjvm.dylib`            |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `pthread_cond_wait`                                                                                                                                        | `libsystem_pthread.dylib` |

##### `G1FullGCAdjustTask::work` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                           | Location       |
| -----: | ----: | -----------: | ------: | -------------------------------- | -------------- |
|    new |   +17 | 0.0% → 94.4% |  0 → 17 | `HeapRegionManager::par_iterate` | `libjvm.dylib` |

##### `HeapRegionManager::par_iterate` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                                              | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------- | -------------- |
|     new |   +17 |  0.0% → 94.4% |  0 → 17 | `G1AdjustRegionClosure::do_heap_region`                             | `libjvm.dylib` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::do_heap_region` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 5.6% |   0 → 1 | `G1PrepareEvacuationTask::G1PrepareRegionsClosure::do_heap_region`  | `libjvm.dylib` |

##### `G1AdjustRegionClosure::do_heap_region` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                                                                                                         | Location       |
| -----: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------------------------- | -------------- |
|    new |   +15 | 0.0% → 88.2% |  0 → 15 | `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>`                                                | `libjvm.dylib` |
|    new |    +2 | 0.0% → 11.8% |   0 → 2 | `void OopOopIterateBoundedDispatch<G1AdjustClosure>::Table::oop_oop_iterate_bounded<ObjArrayKlass, narrowOop>` | `libjvm.dylib` |

##### `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                                                                                                | Location       |
| -----: | ----: | -----------: | ------: | ----------------------------------------------------------------------------------------------------- | -------------- |
|    new |    +5 | 0.0% → 33.3% |   0 → 5 | `void OopOopIterateDispatch<G1AdjustClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>`       | `libjvm.dylib` |
|    new |    +1 |  0.0% → 6.7% |   0 → 1 | `void OopOopIterateDispatch<G1AdjustClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`       | `libjvm.dylib` |
|    new |    +1 |  0.0% → 6.7% |   0 → 1 | `void OopOopIterateDispatch<G1AdjustClosure>::Table::oop_oop_iterate<InstanceMirrorKlass, narrowOop>` | `libjvm.dylib` |
|    new |    +1 |  0.0% → 6.7% |   0 → 1 | `java_lang_Class::static_oop_field_count`                                                             | `libjvm.dylib` |

##### `arrayof_oop_disjoint_arraycopy` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                            | Location        |
| ------: | ----: | ------------: | ------: | ------------------------------------------------- | --------------- |
|  +10.8% |    +4 | 88.1% → 77.4% | 37 → 41 | `forward_copy_longs`                              | `<unknown>`     |
| +100.0% |    +1 |   2.4% → 3.8% |   1 → 2 | `G1BarrierSetRuntime::write_ref_array_post_entry` | `libjvm.dylib`  |
| +100.0% |    +1 |   2.4% → 3.8% |   1 → 2 | `tlv_get_addr`                                    | `libdyld.dylib` |
| +100.0% |    +1 |   2.4% → 3.8% |   1 → 2 | `G1BarrierSet::invalidate`                        | `libjvm.dylib`  |

##### `G1ParEvacuateFollowersClosure::offer_termination` (`libjvm.dylib`)

|   Change | Delta |      % | Samples | Callee                              | Location       |
| -------: | ----: | -----: | ------: | ----------------------------------- | -------------- |
| +1100.0% |   +11 | 100.0% |  1 → 12 | `TaskTerminator::offer_termination` | `libjvm.dylib` |

##### `TaskTerminator::offer_termination` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                  | Location                 |
| ------: | ----: | ------------: | ------: | --------------------------------------- | ------------------------ |
| +600.0% |    +6 | 50.0% → 58.3% |   1 → 7 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib`           |
|     new |    +2 |  0.0% → 16.7% |   0 → 2 | `Mutex::lock_without_safepoint_check`   | `libjvm.dylib`           |
|     new |    +1 |   0.0% → 8.3% |   0 → 1 | `SpinPause`                             | `libjvm.dylib`           |
|     new |    +1 |   0.0% → 8.3% |   0 → 1 | `__psynch_cvbroad`                      | `libsystem_kernel.dylib` |

##### `WorkerThread::run` (`libjvm.dylib`)

|   Change | Delta |             % | Samples | Callee                            | Location                 |
| -------: | ----: | ------------: | ------: | --------------------------------- | ------------------------ |
| +1700.0% |   +17 |  0.7% → 12.7% |  1 → 18 | `G1FullGCAdjustTask::work`        | `libjvm.dylib`           |
|   -46.7% |    -7 |  11.0% → 5.6% |  15 → 8 | `semaphore_wait_trap`             | `libsystem_kernel.dylib` |
|   -17.6% |    -6 | 25.0% → 19.7% | 34 → 28 | `G1EvacuateRegionsBaseTask::work` | `libjvm.dylib`           |
|  +600.0% |    +6 |   0.7% → 4.9% |   1 → 7 | `G1FullGCCompactTask::work`       | `libjvm.dylib`           |
|   +80.0% |    +4 |   3.7% → 6.3% |   5 → 9 | `G1FullGCPrepareTask::work`       | `libjvm.dylib`           |

##### `G1FullGCCompactTask::compact_region` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                                               | Location       |
| ------: | ----: | -------------: | ------: | ---------------------------------------------------- | -------------- |
| +300.0% |    +3 | 100.0% → 57.1% |   1 → 4 | `G1FullGCCompactTask::G1CompactRegionClosure::apply` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 14.3% |   0 → 1 | `G1FullGCCompactTask::copy_object_to_new_location`   | `libjvm.dylib` |

##### `G1FullGCCompactTask::work` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Callee                                | Location       |
| ------: | ----: | -----: | ------: | ------------------------------------- | -------------- |
| +600.0% |    +6 | 100.0% |   1 → 7 | `G1FullGCCompactTask::compact_region` | `libjvm.dylib` |

##### `G1CollectedHeap::attempt_allocation_slow` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                         | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------------------- | -------------- |
|     new |    +2 |  0.0% → 28.6% |   0 → 2 | `MutatorAllocRegion::retire`                   | `libjvm.dylib` |
| +100.0% |    +1 | 33.3% → 28.6% |   1 → 2 | `G1AllocRegion::new_alloc_region_and_allocate` | `libjvm.dylib` |
|     new |    +1 |  0.0% → 14.3% |   0 → 1 | `VMThread::execute`                            | `libjvm.dylib` |

##### `G1FullGCPrepareTask::work` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                                                                                       | Location       |
| -----: | ----: | -----: | ------: | -------------------------------------------------------------------------------------------- | -------------- |
| +80.0% |    +4 | 100.0% |   5 → 9 | `void HeapRegion::apply_to_marked_objects<G1FullGCPrepareTask::G1PrepareCompactLiveClosure>` | `libjvm.dylib` |

##### `get(int)` (`java.util.ArrayList`)

| Change | Delta |             % |   Samples | Callee                 | Location              |
| -----: | ----: | ------------: | --------: | ---------------------- | --------------------- |
| +24.3% |   +36 | 83.1% → 87.2% | 148 → 184 | `elementData(int)`     | `java.util.ArrayList` |
| -14.3% |    -4 | 15.7% → 11.4% |   28 → 24 | `checkIndex(int, int)` | `java.util.Objects`   |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|  Change | Delta |           % |   Samples | Callee                           | Location       |
| ------: | ----: | ----------: | --------: | -------------------------------- | -------------- |
|   +3.5% |   +26 |       99.9% | 734 → 760 | `Unsafe_Park`                    | `libjvm.dylib` |
| removed |    -1 | 0.1% → 0.0% |     1 → 0 | `JavaThread::threadObj`          | `libjvm.dylib` |
|     new |    +1 | 0.0% → 0.1% |     0 → 1 | `JavaFrameAnchor::make_walkable` | `libjvm.dylib` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

| Change | Delta |      % |   Samples | Callee                | Location                   |
| -----: | ----: | -----: | --------: | --------------------- | -------------------------- |
|  +2.6% |   +19 | 100.0% | 725 → 744 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `grow(int)` (`java.util.ArrayList`)

|  Change | Delta |             % | Samples | Callee                            | Location                          |
| ------: | ----: | ------------: | ------: | --------------------------------- | --------------------------------- |
|  -27.0% |   -10 | 48.7% → 29.7% | 37 → 27 | `copyOf(Object[], int)`           | `java.util.Arrays`                |
|  +57.1% |    +8 | 18.4% → 24.2% | 14 → 22 | `zero_blocks`                     | `<unknown>`                       |
|  -14.3% |    -1 |   9.2% → 6.6% |   7 → 6 | `arrayof_jint_disjoint_arraycopy` | `<unknown>`                       |
| +100.0% |    +1 |   1.3% → 2.2% |   1 → 2 | `newLength(int, int, int)`        | `jdk.internal.util.ArraysSupport` |

##### `add(Object)` (`java.util.ArrayList`)

| Change | Delta |             % |   Samples | Callee                       | Location              |
| -----: | ----: | ------------: | --------: | ---------------------------- | --------------------- |
| +13.2% |   +14 | 97.2% → 96.8% | 106 → 120 | `add(Object, Object[], int)` | `java.util.ArrayList` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

| Change | Delta |             % |  Samples | Callee   | Location              |
| -----: | ----: | ------------: | -------: | -------- | --------------------- |
| +96.2% |   +50 | 49.1% → 85.0% | 52 → 102 | `grow()` | `java.util.ArrayList` |

##### `addAll(Collection)` (`java.util.ArrayList`)

| Change | Delta |             % | Samples | Callee                           | Location              |
| -----: | ----: | ------------: | ------: | -------------------------------- | --------------------- |
| +26.2% |   +11 | 30.0% → 35.6% | 42 → 53 | `arrayof_oop_disjoint_arraycopy` | `<unknown>`           |
| -16.1% |    -5 | 22.1% → 17.4% | 31 → 26 | `grow(int)`                      | `java.util.ArrayList` |
|  +3.0% |    +2 | 47.9% → 46.3% | 67 → 69 | `toArray()`                      | `java.util.ArrayList` |
|    new |    +1 |   0.0% → 0.7% |   0 → 1 | `G1BarrierSet::invalidate`       | `libjvm.dylib`        |

##### `PhaseCFG::global_code_motion` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                              | Location       |
| ------: | ----: | -------------: | ------: | ----------------------------------- | -------------- |
|     new |    +2 |   0.0% → 25.0% |   0 → 2 | `PhaseCFG::schedule_local`          | `libjvm.dylib` |
|     new |    +2 |   0.0% → 25.0% |   0 → 2 | `Node_Backward_Iterator::next`      | `libjvm.dylib` |
|     new |    +2 |   0.0% → 25.0% |   0 → 2 | `PhaseCFG::schedule_late`           | `libjvm.dylib` |
| +100.0% |    +1 | 100.0% → 25.0% |   1 → 2 | `PhaseCFG::partial_latency_of_defs` | `libjvm.dylib` |

##### `PhaseCFG::do_global_code_motion` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Callee                         | Location       |
| ------: | ----: | -----: | ------: | ------------------------------ | -------------- |
| +700.0% |    +7 | 100.0% |   1 → 8 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |

##### `Compile::optimize_loops` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Callee                     | Location       |
| ------: | ----: | -----: | ------: | -------------------------- | -------------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `LIR_Assembler::emit_lir_list` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                       | Location       |
| -----: | ----: | -----------: | ------: | ---------------------------- | -------------- |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `LIR_OpArrayCopy::emit_code` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `ciMethodData::data_from`    | `libjvm.dylib` |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `LIR_Assembler::mem2reg`     | `libjvm.dylib` |

##### `LIR_Assembler::emit_code` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Callee                         | Location       |
| ------: | ----: | -----: | ------: | ------------------------------ | -------------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `LIR_Assembler::emit_lir_list` | `libjvm.dylib` |

##### `CompileBroker::compile_method` (`libjvm.dylib`)

| Change | Delta |              % | Samples | Callee                                               | Location       |
| -----: | ----: | -------------: | ------: | ---------------------------------------------------- | -------------- |
|    new |    +2 |   0.0% → 50.0% |   0 → 2 | `DirectivesStack::release`                           | `libjvm.dylib` |
| -50.0% |    -1 | 100.0% → 25.0% |   2 → 1 | `CompileBroker::compile_method_base`                 | `libjvm.dylib` |
|    new |    +1 |   0.0% → 25.0% |   0 → 1 | `ResolvingSignatureStream::ResolvingSignatureStream` | `libjvm.dylib` |

##### `CompilationPolicy::event` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                        | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------------- | -------------- |
|  +50.0% |    +1 | 66.7% → 60.0% |   2 → 3 | `CompileBroker::compile_method`               | `libjvm.dylib` |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `InstanceKlass::lookup_osr_nmethod`           | `libjvm.dylib` |
|     new |    +1 |  0.0% → 20.0% |   0 → 1 | `CompilationPolicy::call_event`               | `libjvm.dylib` |
|     new |    +1 |  0.0% → 20.0% |   0 → 1 | `CompilationPolicy::method_back_branch_event` | `libjvm.dylib` |

##### `PhaseOutput::fill_buffer` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                              | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `andI_reg_immNode::emit`            | `libjvm.dylib` |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `PhaseOutput::Process_OopMap_Node`  | `libjvm.dylib` |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `MachSpillCopyNode::implementation` | `libjvm.dylib` |

##### `PhaseCFG::schedule_local` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                 | Location       |
| -----: | ----: | -----------: | ------: | ---------------------- | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `PhaseCFG::sched_call` | `libjvm.dylib` |

##### `ciField::ciField` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                           | Location       |
| -----: | ----: | -----------: | ------: | -------------------------------- | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `ciField::initialize_from`       | `libjvm.dylib` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `ciEnv::get_klass_by_index_impl` | `libjvm.dylib` |

##### `ciEnv::get_field_by_index_impl` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee             | Location       |
| -----: | ----: | ------------: | ------: | ------------------ | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `ciField::ciField` | `libjvm.dylib` |

##### `ciEnv::get_field_by_index` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                           | Location       |
| -----: | ----: | ------------: | ------: | -------------------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `ciEnv::get_field_by_index_impl` | `libjvm.dylib` |

##### `ciBytecodeStream::get_field` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                      | Location       |
| -----: | ----: | ------------: | ------: | --------------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `ciEnv::get_field_by_index` | `libjvm.dylib` |

##### `PhaseCFG::schedule_late` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                               | Location       |
| -----: | ----: | -----------: | ------: | ------------------------------------ | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `PhaseCFG::schedule_node_into_block` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                                      | Location       |
| -----: | ----: | -----------: | ------: | ------------------------------------------- | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib` |

##### `Matcher::Label_Root` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                | Location       |
| -----: | ----: | ------------: | ------: | --------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `Matcher::Label_Root` | `libjvm.dylib` |
|    new |    +1 |  0.0% → 50.0% |   0 → 1 | `Arena::grow`         | `libjvm.dylib` |
|    new |    +1 |  0.0% → 50.0% |   0 → 1 | `State::DFA`          | `libjvm.dylib` |

##### `PhaseBlockLayout::grow_traces` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee   | Location            |
| -----: | ----: | ------------: | ------: | -------- | ------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `_qsort` | `libsystem_c.dylib` |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |             % |  Samples | Callee          | Location           |
| -----: | ----: | ------------: | -------: | --------------- | ------------------ |
|  -9.7% |   -10 | 10.6% → 10.2% | 103 → 93 | `doubleValue()` | `java.lang.Double` |

##### `hash(Object)` (`java.util.HashMap`)

|  Change | Delta |           % | Samples | Callee                 | Location           |
| ------: | ----: | ----------: | ------: | ---------------------- | ------------------ |
| removed |    -1 | 2.5% → 0.0% |   1 → 0 | `hashCode()`           | `java.lang.Object` |
|     new |    +1 | 0.0% → 5.3% |   0 → 1 | `resolve_virtual_call` | `<unknown>`        |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                                     | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------------ | -------------- |
| -17.4% |   -15 | 91.5% → 92.2% | 86 → 71 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
| -25.0% |    -2 |   8.5% → 7.8% |   8 → 6 | `CompileQueue::get`                        | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                                | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------- | -------------- |
| -18.1% |   -17 | 98.9% → 98.7% | 94 → 77 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

|  Change | Delta |              % |   Samples | Callee                | Location       |
| ------: | ----: | -------------: | --------: | --------------------- | -------------- |
|   -6.5% |   -16 | 99.6% → 100.0% | 248 → 232 | `thread_native_entry` | `libjvm.dylib` |
| removed |    -1 |    0.4% → 0.0% |     1 → 0 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

| Change | Delta |      % |   Samples | Callee           | Location                  |
| -----: | ----: | -----: | --------: | ---------------- | ------------------------- |
|  -6.8% |   -17 | 100.0% | 249 → 232 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `G1ParScanThreadState::trim_queue_to_threshold` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                                                                                                       | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | -------------- |
| removed |    -8 |  26.7% → 0.0% |   8 → 0 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                            | `libjvm.dylib` |
| removed |    -2 |   6.7% → 0.0% |   2 → 0 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` | `libjvm.dylib` |
|   -7.7% |    -1 | 43.3% → 92.3% | 13 → 12 | `G1ParScanThreadState::do_partial_array`                                                                                     | `libjvm.dylib` |
| removed |    -1 |   3.3% → 0.0% |   1 → 0 | `fwd_copy_again`                                                                                                             | `libjvm.dylib` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change | Delta |            % | Samples | Callee                                                                                       | Location                                  |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
| removed |   -13 | 76.5% → 0.0% |  13 → 0 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
| removed |    -4 | 23.5% → 0.0% |   4 → 0 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `Thread::call_run` (`libjvm.dylib`)

| Change | Delta |             % |   Samples | Callee                          | Location       |
| -----: | ----: | ------------: | --------: | ------------------------------- | -------------- |
| -17.9% |   -17 | 38.3% → 33.6% |   95 → 78 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
| -70.0% |    -7 |   4.0% → 1.3% |    10 → 3 | `ConcurrentGCThread::run`       | `libjvm.dylib` |
|  +4.4% |    +6 | 54.8% → 61.2% | 136 → 142 | `WorkerThread::run`             | `libjvm.dylib` |
| +50.0% |    +2 |   1.6% → 2.6% |     4 → 6 | `VMThread::run`                 | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Callee             | Location       |
| -----: | ----: | -----: | --------: | ------------------ | -------------- |
|  -6.5% |   -16 | 100.0% | 248 → 232 | `Thread::call_run` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                             | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------- | -------------- |
|  -39.1% |    -9 | 26.7% → 19.7% | 23 → 14 | `Compiler::compile_method`         | `libjvm.dylib` |
|  -11.3% |    -7 | 72.1% → 77.5% | 62 → 55 | `C2Compiler::compile_method`       | `libjvm.dylib` |
| removed |    -1 |   1.2% → 0.0% |   1 → 0 | `PerfString::set_string`           | `libjvm.dylib` |
|     new |    +1 |   0.0% → 1.4% |   0 → 1 | `ciObjectFactory::ciObjectFactory` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 1.4% |   0 → 1 | `CompilationLog::log_compile`      | `libjvm.dylib` |

##### `_new_array_Java` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                     | Location       |
| ------: | ----: | ------------: | ------: | -------------------------- | -------------- |
|  -25.9% |   -14 | 91.5% → 90.9% | 54 → 40 | `OptoRuntime::new_array_C` | `libjvm.dylib` |
| removed |    -1 |   1.7% → 0.0% |   1 → 0 | `oopFactory::new_objArray` | `libjvm.dylib` |

##### `OptoRuntime::new_array_C` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                             | Location                  |
| ------: | ----: | ------------: | ------: | ---------------------------------- | ------------------------- |
|  -20.8% |   -10 | 88.9% → 95.0% | 48 → 38 | `InstanceKlass::allocate_objArray` | `libjvm.dylib`            |
|  -60.0% |    -3 |   9.3% → 5.0% |   5 → 2 | `pthread_jit_write_protect_np`     | `libsystem_pthread.dylib` |
| removed |    -1 |   1.9% → 0.0% |   1 → 0 | `CollectedHeap::array_allocate`    | `libjvm.dylib`            |

##### `G1ParScanThreadState::steal_and_trim_queue` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                                            | Location       |
| ------: | ----: | -------------: | ------: | ------------------------------------------------- | -------------- |
|  -50.0% |   -11 | 91.7% → 100.0% | 22 → 11 | `G1ParScanThreadState::trim_queue_to_threshold`   | `libjvm.dylib` |
| removed |    -2 |    8.3% → 0.0% |   2 → 0 | `G1ParScanThreadState::do_copy_to_survivor_space` | `libjvm.dylib` |

##### `CollectedHeap::array_allocate` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                          | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | -------------- |
|  -25.0% |   -12 | 98.0% → 97.3% | 48 → 36 | `MemAllocator::allocate`                        | `libjvm.dylib` |
| removed |    -1 |   2.0% → 0.0% |   1 → 0 | `ObjArrayAllocator::initialize`                 | `libjvm.dylib` |
|     new |    +1 |   0.0% → 2.7% |   0 → 1 | `MemAllocator::Allocation::check_out_of_memory` | `libjvm.dylib` |

##### `MemAllocator::allocate` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                             | Location                   |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- | -------------------------- |
|  -87.5% |    -7 |  16.3% → 2.6% |   8 → 1 | `ObjArrayAllocator::initialize`                    | `libjvm.dylib`             |
|  -29.4% |    -5 | 34.7% → 31.6% | 17 → 12 | `_platform_bzero`                                  | `libsystem_platform.dylib` |
| removed |    -2 |   4.1% → 0.0% |   2 → 0 | `MemAllocator::Allocation::check_out_of_memory`    | `libjvm.dylib`             |
|     new |    +2 |   0.0% → 5.3% |   0 → 2 | `ThreadLocalAllocBuffer::retire_before_allocation` | `libjvm.dylib`             |
|  +33.3% |    +1 |  6.1% → 10.5% |   3 → 4 | `G1CollectedHeap::mem_allocate`                    | `libjvm.dylib`             |

##### `InstanceKlass::allocate_objArray` (`libjvm.dylib`)

| Change | Delta |              % | Samples | Callee                          | Location       |
| -----: | ----: | -------------: | ------: | ------------------------------- | -------------- |
| -22.9% |   -11 | 100.0% → 97.4% | 48 → 37 | `CollectedHeap::array_allocate` | `libjvm.dylib` |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                                                                                                                       | Location       |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | -------------- |
| removed |    -2 | 20.0% → 0.0% |   2 → 0 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` | `libjvm.dylib` |

##### `tryCompensate(long, boolean)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % | Samples | Callee                         | Location                                 |
| ------: | ----: | ------------: | ------: | ------------------------------ | ---------------------------------------- |
|  -50.0% |    -9 | 90.0% → 81.8% |  18 → 9 | `unpark(Thread)`               | `java.util.concurrent.locks.LockSupport` |
| removed |    -1 |   5.0% → 0.0% |   1 → 0 | `createWorker()`               | `java.util.concurrent.ForkJoinPool`      |
|     new |    +1 |   0.0% → 9.1% |   0 → 1 | `compareAndSetCtl(long, long)` | `java.util.concurrent.ForkJoinPool`      |

##### `Compilation::compile_method` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                             | Location       |
| ------: | ----: | -------------: | ------: | ---------------------------------- | -------------- |
|  -26.3% |    -5 | 82.6% → 100.0% | 19 → 14 | `Compilation::compile_java_method` | `libjvm.dylib` |
| removed |    -3 |   13.0% → 0.0% |   3 → 0 | `ciEnv::register_method`           | `libjvm.dylib` |
| removed |    -1 |    4.3% → 0.0% |   1 → 0 | `Dependencies::assert_common_1`    | `libjvm.dylib` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |              % |   Samples | Callee                                                           | Location                               |
| -----: | ----: | -------------: | --------: | ---------------------------------------------------------------- | -------------------------------------- |
|  -2.1% |    -7 | 100.0% → 99.7% | 329 → 322 | `merge(Object, Object, BiFunction)`                              | `java.util.HashMap`                    |
|    new |    +1 |    0.0% → 0.3% |     0 → 1 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000003011a3b90`)

| Change | Delta |     % |   Samples | Callee                              | Location                                    |
| -----: | ----: | ----: | --------: | ----------------------------------- | ------------------------------------------- |
|  -1.8% |    -6 | 99.7% | 329 → 323 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change | Delta |             % | Samples | Callee                      | Location                           |
| ------: | ----: | ------------: | ------: | --------------------------- | ---------------------------------- |
| removed |    -3 |  60.0% → 0.0% |   3 → 0 | `<clinit>()`                | `scala.Predef$`                    |
| removed |    -1 |  20.0% → 0.0% |   1 → 0 | `loadClass(String)`         | `java.lang.ClassLoader`            |
| removed |    -1 |  20.0% → 0.0% |   1 → 0 | `until$extension(int, int)` | `scala.runtime.RichInt$`           |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `map(Function1)`            | `scala.collection.immutable.Range` |

##### `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000003011a2388`)

|  Change | Delta |             % | Samples | Callee                                           | Location                                    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------ | ------------------------------------------- |
| removed |    -8 | 100.0% → 0.0% |   8 → 0 | `lambda$generateData$5(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |
|     new |    +5 | 0.0% → 100.0% |   0 → 5 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`)

| Change | Delta |              % | Samples | Callee                  | Location                                                             |
| -----: | ----: | -------------: | ------: | ----------------------- | -------------------------------------------------------------------- |
| -80.0% |    -4 | 100.0% → 50.0% |   5 → 1 | `run(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans`                            |
|    new |    +1 |   0.0% → 50.0% |   0 → 1 | `validate()`            | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000003011a8230` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |           % |   Samples | Callee                    | Location                                               |
| ------: | ----: | ----------: | --------: | ------------------------- | ------------------------------------------------------ |
|   -0.7% |    -3 |       99.6% | 450 → 447 | `invoke()`                | `java.util.concurrent.ForkJoinTask`                    |
|     new |    +2 | 0.0% → 0.4% |     0 → 2 | `<init>(Collection)`      | `java.util.ArrayList`                                  |
| removed |    -1 | 0.2% → 0.0% |     1 → 0 | `<init>(JavaKMeans, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000003011a2bd0`)

| Change | Delta |      % |   Samples | Callee                         | Location                                    |
| -----: | ----: | -----: | --------: | ------------------------------ | ------------------------------------------- |
|  -0.7% |    -3 | 100.0% | 452 → 449 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `<clinit>()` (`scopt.OptionParser`)

|  Change | Delta |             % | Samples | Callee       | Location                  |
| ------: | ----: | ------------: | ------: | ------------ | ------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<clinit>()` | `scala.runtime.LazyVals$` |

##### `createParser(Map)` (`org.renaissance.harness.ConfigParser`)

|  Change | Delta |            % | Samples | Callee       | Location             |
| ------: | ----: | -----------: | ------: | ------------ | -------------------- |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `<clinit>()` | `scopt.OptionParser` |

##### `<init>(Map)` (`org.renaissance.harness.ConfigParser`)

| Change | Delta |      % | Samples | Callee              | Location                               |
| -----: | ----: | -----: | ------: | ------------------- | -------------------------------------- |
| -33.3% |    -1 | 100.0% |   3 → 2 | `createParser(Map)` | `org.renaissance.harness.ConfigParser` |

##### `liftedTree1$1()` (`scopt.Read$`)

|  Change | Delta |             % | Samples | Callee                                                           | Location                               |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------- | -------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |

##### `updateOption(OptionDef, Read)` (`scopt.OptionParser`)

|  Change | Delta |             % | Samples | Callee                  | Location                       |
| ------: | ----: | ------------: | ------: | ----------------------- | ------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `indexWhere(Function1)` | `scala.collection.AbstractSeq` |

##### `onChange(OptionDef, Read)` (`scopt.OptionParser`)

|  Change | Delta |             % | Samples | Callee                          | Location             |
| ------: | ----: | ------------: | ------: | ------------------------------- | -------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `updateOption(OptionDef, Read)` | `scopt.OptionParser` |

##### `fireChange(OptionDef, Read)` (`scopt.OptionDef`)

|  Change | Delta |             % | Samples | Callee                      | Location             |
| ------: | ----: | ------------: | ------: | --------------------------- | -------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `onChange(OptionDef, Read)` | `scopt.OptionParser` |

##### `validate(Function1)` (`scopt.OptionDef`)

|  Change | Delta |             % | Samples | Callee                        | Location          |
| ------: | ----: | ------------: | ------: | ----------------------------- | ----------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `fireChange(OptionDef, Read)` | `scopt.OptionDef` |

##### `parse(Seq, Object)` (`scopt.OptionParser`)

|  Change | Delta |            % | Samples | Callee              | Location                |
| ------: | ----: | -----------: | ------: | ------------------- | ----------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `Compiler::compile_method` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                     | Location       |
| -----: | ----: | -----: | ------: | -------------------------- | -------------- |
| -39.1% |    -9 | 100.0% | 23 → 14 | `Compilation::Compilation` | `libjvm.dylib` |

##### `Unsafe_Unpark` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                  | Location                  |
| ------: | ----: | ------------: | ------: | --------------------------------------- | ------------------------- |
|   -7.6% |    -5 | 89.2% → 92.4% | 66 → 61 | `__psynch_cvsignal`                     | `libsystem_kernel.dylib`  |
| removed |    -3 |   4.1% → 0.0% |   3 → 0 | `tlv_get_addr`                          | `libdyld.dylib`           |
| removed |    -2 |   2.7% → 0.0% |   2 → 0 | `ThreadsListHandle::~ThreadsListHandle` | `libjvm.dylib`            |
| +200.0% |    +2 |   1.4% → 4.5% |   1 → 3 | `pthread_jit_write_protect_np`          | `libsystem_pthread.dylib` |
|     new |    +2 |   0.0% → 3.0% |   0 → 2 | `Parker::unpark`                        | `libjvm.dylib`            |

##### `G1ParEvacuateFollowersClosure::do_void` (`libjvm.dylib`)

|   Change | Delta |             % | Samples | Callee                                             | Location       |
| -------: | ----: | ------------: | ------: | -------------------------------------------------- | -------------- |
|   -54.2% |   -13 | 72.7% → 42.3% | 24 → 11 | `G1ParScanThreadState::steal_and_trim_queue`       | `libjvm.dylib` |
| +1100.0% |   +11 |  3.0% → 46.2% |  1 → 12 | `G1ParEvacuateFollowersClosure::offer_termination` | `libjvm.dylib` |
|   -75.0% |    -6 |  24.2% → 7.7% |   8 → 2 | `G1ParScanThreadState::trim_queue_to_threshold`    | `libjvm.dylib` |

##### `G1EvacuateRegionsTask::evacuate_live_objects` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                                   | Location       |
| -----: | ----: | -----: | ------: | ---------------------------------------- | -------------- |
| -21.2% |    -7 | 100.0% | 33 → 26 | `G1ParEvacuateFollowersClosure::do_void` | `libjvm.dylib` |

##### `G1CollectedHeap::par_iterate_regions_array` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                                                       | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------ | -------------- |
| removed |    -3 | 42.9% → 0.0% |   3 → 0 | `FreeCSetClosure::do_heap_region`                            | `libjvm.dylib` |
| removed |    -2 | 28.6% → 0.0% |   2 → 0 | `G1MergeHeapRootsTask::G1CombinedClosure::do_heap_region`    | `libjvm.dylib` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `G1MergeHeapRootsTask::G1ClearBitmapClosure::do_heap_region` | `libjvm.dylib` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `G1ScanCodeRootsClosure::do_heap_region`                     | `libjvm.dylib` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

| Change | Delta |             % |   Samples | Callee                            | Location                                                               |
| -----: | ----: | ------------: | --------: | --------------------------------- | ---------------------------------------------------------------------- |
|  +7.3% |   +16 | 66.6% → 73.0% | 219 → 235 | `apply(Object, Object)`           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000003011a7248` |
| -27.9% |   -12 |  13.1% → 9.6% |   43 → 31 | `zero_blocks`                     | `<unknown>`                                                            |
| -18.0% |   -11 | 18.5% → 15.5% |   61 → 50 | `arrayof_jint_disjoint_arraycopy` | `<unknown>`                                                            |

##### `unpark(Object)` (`jdk.internal.misc.Unsafe`)

|  Change | Delta |             % | Samples | Callee                                         | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------------------- | -------------- |
|   -9.6% |    -7 | 98.6% → 98.5% | 73 → 66 | `Unsafe_Unpark`                                | `libjvm.dylib` |
| removed |    -1 |   1.4% → 0.0% |   1 → 0 | `FastThreadsListHandle::FastThreadsListHandle` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 1.5% |   0 → 1 | `ThreadsListHandle::~ThreadsListHandle`        | `libjvm.dylib` |

##### `unpark(Thread)` (`java.util.concurrent.locks.LockSupport`)

| Change | Delta |      % | Samples | Callee           | Location                   |
| -----: | ----: | -----: | ------: | ---------------- | -------------------------- |
|  -9.5% |    -7 | 100.0% | 74 → 67 | `unpark(Object)` | `jdk.internal.misc.Unsafe` |

##### `defineClass(String, Resource)` (`java.net.URLClassLoader`)

|  Change | Delta |             % | Samples | Callee                                              | Location                                       |
| ------: | ----: | ------------: | ------: | --------------------------------------------------- | ---------------------------------------------- |
|  -23.1% |    -3 | 81.3% → 90.9% | 13 → 10 | `defineClass(String, byte[], int, int, CodeSource)` | `java.security.SecureClassLoader`              |
| removed |    -1 |   6.3% → 0.0% |   1 → 0 | `getManifest()`                                     | `jdk.internal.loader.URLClassPath$JarLoader$2` |
| removed |    -1 |   6.3% → 0.0% |   1 → 0 | `getByteBuffer()`                                   | `jdk.internal.loader.Resource`                 |
| +100.0% |    +1 |  6.3% → 18.2% |   1 → 2 | `getBytes()`                                        | `jdk.internal.loader.URLClassPath$JarLoader$2` |

##### `resize()` (`java.util.HashMap`)

|  Change | Delta |            % | Samples | Callee        | Location    |
| ------: | ----: | -----------: | ------: | ------------- | ----------- |
| removed |    -2 | 33.3% → 0.0% |   2 → 0 | `zero_blocks` | `<unknown>` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

| Change | Delta |             % | Samples | Callee                                    | Location                |
| -----: | ----: | ------------: | ------: | ----------------------------------------- | ----------------------- |
| -66.7% |    -4 | 46.2% → 20.0% |   6 → 2 | `loadClass(String)`                       | `java.lang.ClassLoader` |
| -18.2% |    -2 | 84.6% → 90.0% |  11 → 9 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`         |

##### `defineClass(String, byte[], int, int, ProtectionDomain)` (`java.lang.ClassLoader`)

| Change | Delta |      % | Samples | Callee                                                                          | Location                |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------- | ----------------------- |
| -23.1% |    -3 | 100.0% | 13 → 10 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader` |

##### `defineClass(String, byte[], int, int, CodeSource)` (`java.security.SecureClassLoader`)

|  Change | Delta |           % | Samples | Callee                                                    | Location                          |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------- | --------------------------------- |
|  -23.1% |    -3 |      100.0% | 13 → 10 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader`           |
| removed |    -1 | 7.7% → 0.0% |   1 → 0 | `getProtectionDomain(CodeSource)`                         | `java.security.SecureClassLoader` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

| Change | Delta |      % |   Samples | Callee   | Location                                                               |
| -----: | ----: | -----: | --------: | -------- | ---------------------------------------------------------------------- |
|  -0.7% |    -3 | 100.0% | 452 → 449 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000003011a2bd0` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

| Change | Delta |             % |   Samples | Callee                   | Location                                                               |
| -----: | ----: | ------------: | --------: | ------------------------ | ---------------------------------------------------------------------- |
|  -1.8% |    -6 | 99.4% → 98.2% | 330 → 324 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000003011a3b90` |

##### `stream(double[], int, int)` (`java.util.Arrays`)

|  Change | Delta |              % | Samples | Callee                                        | Location                         |
| ------: | ----: | -------------: | ------: | --------------------------------------------- | -------------------------------- |
| removed |    -1 |   33.3% → 0.0% |   1 → 0 | `spliterator(double[], int, int)`             | `java.util.Arrays`               |
|  -50.0% |    -1 | 66.7% → 100.0% |   2 → 1 | `doubleStream(Spliterator$OfDouble, boolean)` | `java.util.stream.StreamSupport` |

##### `stream(double[])` (`java.util.Arrays`)

| Change | Delta |      % | Samples | Callee                       | Location           |
| -----: | ----: | -----: | ------: | ---------------------------- | ------------------ |
| -66.7% |    -2 | 100.0% |   3 → 1 | `stream(double[], int, int)` | `java.util.Arrays` |

##### `push(ForkJoinTask, ForkJoinPool, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |             % | Samples | Callee                 | Location                                      |
| -----: | ----: | ------------: | ------: | ---------------------- | --------------------------------------------- |
| -33.3% |    -1 | 60.0% → 66.7% |   3 → 2 | `signalWork()`         | `java.util.concurrent.ForkJoinPool`           |
|    new |    +1 |  0.0% → 33.3% |   0 → 1 | `getAndSetAccess(int)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `fork()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |      % | Samples | Callee                                      | Location                                      |
| -----: | ----: | -----: | ------: | ------------------------------------------- | --------------------------------------------- |
| -40.0% |    -2 | 100.0% |   5 → 3 | `push(ForkJoinTask, ForkJoinPool, boolean)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `Compilation::Compilation` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                        | Location       |
| -----: | ----: | -----: | ------: | ----------------------------- | -------------- |
| -39.1% |    -9 | 100.0% | 23 → 14 | `Compilation::compile_method` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                   | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | -------------- |
|  -20.0% |    -4 | 32.3% → 29.1% | 20 → 16 | `Compile::Optimize`                      | `libjvm.dylib` |
|  -50.0% |    -4 |  12.9% → 7.3% |   8 → 4 | `ParseGenerator::generate`               | `libjvm.dylib` |
| removed |    -1 |   1.6% → 0.0% |   1 → 0 | `Compile::Init`                          | `libjvm.dylib` |
| +100.0% |    +1 |   1.6% → 3.6% |   1 → 2 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
| removed |    -1 |   1.6% → 0.0% |   1 → 0 | `CallGenerator::for_inline`              | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee             | Location       |
| -----: | ----: | -----: | ------: | ------------------ | -------------- |
| -11.3% |    -7 | 100.0% | 62 → 55 | `Compile::Compile` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                                     | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------ | -------------- |
| removed |    -3 | 14.3% → 0.0% |   3 → 0 | `PhaseChaitin::Split`                      | `libjvm.dylib` |
|  -66.7% |    -2 | 14.3% → 7.1% |   3 → 1 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |
|  -66.7% |    -2 | 14.3% → 7.1% |   3 → 1 | `PhaseLive::compute`                       | `libjvm.dylib` |
| removed |    -1 |  4.8% → 0.0% |   1 → 0 | `MachNode::Opcode`                         | `libjvm.dylib` |
| removed |    -1 |  4.8% → 0.0% |   1 → 0 | `MachNode::oper_input_base`                | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                         | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------ | -------------- |
| removed |    -2 | 28.6% → 0.0% |   2 → 0 | `StoreNode::Ideal`             | `libjvm.dylib` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `PhiNode::Ideal`               | `libjvm.dylib` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `CallStaticJavaNode::Ideal`    | `libjvm.dylib` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `ConstraintCastNode::Identity` | `libjvm.dylib` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `MemBarNode::Ideal`            | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                        | Location       |
| -----: | ----: | -----: | ------: | ----------------------------- | -------------- |
| -71.4% |    -5 | 100.0% |   7 → 2 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                         | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------ | -------------- |
|  -25.0% |    -2 | 42.1% → 42.9% |   8 → 6 | `Compilation::build_hir`       | `libjvm.dylib` |
|  -40.0% |    -2 | 26.3% → 21.4% |   5 → 3 | `Compilation::emit_lir`        | `libjvm.dylib` |
| removed |    -1 |   5.3% → 0.0% |   1 → 0 | `ciMethod::ensure_method_data` | `libjvm.dylib` |
|  +25.0% |    +1 | 21.1% → 35.7% |   4 → 5 | `Compilation::emit_code_body`  | `libjvm.dylib` |
| removed |    -1 |   5.3% → 0.0% |   1 → 0 | `FrameMap::FrameMap`           | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                          | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------- | -------------- |
| removed |    -4 |  20.0% → 0.0% |   4 → 0 | `PhaseIterGVN::optimize`        | `libjvm.dylib` |
|  -37.5% |    -3 | 40.0% → 31.3% |   8 → 5 | `PhaseIdealLoop::optimize`      | `libjvm.dylib` |
| +150.0% |    +3 | 10.0% → 31.3% |   2 → 5 | `Compile::optimize_loops`       | `libjvm.dylib` |
|  -50.0% |    -1 |  10.0% → 6.3% |   2 → 1 | `PhaseCCP::PhaseCCP`            | `libjvm.dylib` |
| removed |    -1 |   5.0% → 0.0% |   1 → 0 | `Compile::inline_incrementally` | `libjvm.dylib` |

##### `GraphBuilder::invoke` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                         | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------ | -------------- |
| -75.0% |    -3 | 66.7% → 50.0% |   4 → 1 | `GraphBuilder::try_inline`     | `libjvm.dylib` |
| -50.0% |    -1 | 33.3% → 50.0% |   2 → 1 | `ciBytecodeStream::get_method` | `libjvm.dylib` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                    | Location       |
| ------: | ----: | -----------: | ------: | ------------------------- | -------------- |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `MachNode::rematerialize` | `libjvm.dylib` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `PhaseChaitin::split_DEF` | `libjvm.dylib` |

##### `LinearScan::do_linear_scan` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                                        | Location       |
| ------: | ----: | -------------: | ------: | --------------------------------------------- | -------------- |
| removed |    -1 |   20.0% → 0.0% |   1 → 0 | `LinearScan::assign_reg_num`                  | `libjvm.dylib` |
| removed |    -1 |   20.0% → 0.0% |   1 → 0 | `LinearScan::eliminate_spill_moves`           | `libjvm.dylib` |
| removed |    -1 |   20.0% → 0.0% |   1 → 0 | `LinearScan::compute_local_live_sets`         | `libjvm.dylib` |
| removed |    -1 |   20.0% → 0.0% |   1 → 0 | `LinearScan::sort_intervals_after_allocation` | `libjvm.dylib` |
| +100.0% |    +1 | 20.0% → 100.0% |   1 → 2 | `LinearScan::allocate_registers`              | `libjvm.dylib` |

##### `GraphBuilder::try_inline_full` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                             | Location       |
| ------: | ----: | -------------: | ------: | ---------------------------------- | -------------- |
| removed |    -2 |   50.0% → 0.0% |   2 → 0 | `GraphBuilder::push_scope`         | `libjvm.dylib` |
|  -50.0% |    -1 | 50.0% → 100.0% |   2 → 1 | `GraphBuilder::iterate_all_blocks` | `libjvm.dylib` |
| removed |    -1 |   25.0% → 0.0% |   1 → 0 | `GraphBuilder::append_with_bci`    | `libjvm.dylib` |

##### `GraphBuilder::try_inline` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                          | Location       |
| -----: | ----: | -----: | ------: | ------------------------------- | -------------- |
| -75.0% |    -3 | 100.0% |   4 → 1 | `GraphBuilder::try_inline_full` | `libjvm.dylib` |

##### `ciEnv::register_method` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                 | Location       |
| ------: | ----: | ------------: | ------: | ---------------------- | -------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `nmethod::new_nmethod` | `libjvm.dylib` |

##### `MemNode::Ideal_common` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                     | Location       |
| ------: | ----: | -----------: | ------: | -------------------------- | -------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `Compile::find_alias_type` | `libjvm.dylib` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `MemNode::adr_type`        | `libjvm.dylib` |

##### `PhaseChaitin::post_allocate_copy_removal` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                     | Location       |
| ------: | ----: | -----------: | ------: | -------------------------- | -------------- |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `PhaseChaitin::elide_copy` | `libjvm.dylib` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `Node::replace_by`         | `libjvm.dylib` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in samples collected in their leaf frame.

|  Change | Delta |            % |   Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------: | ----: | -----------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  +20.3% |   +24 |  2.5% → 2.9% | 118 → 142 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  +40.0% |   +22 |  1.2% → 1.6% |   55 → 77 | `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  +22.8% |   +13 |  1.2% → 1.4% |   57 → 70 | `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  +81.3% |   +13 |  0.3% → 0.6% |   16 → 29 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000003011a2bd0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`) |
|  +48.0% |   +12 |  0.5% → 0.8% |   25 → 37 | `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| +120.0% |   +12 |  0.2% → 0.4% |   10 → 22 | `computeIfAbsent(Object, Function)` (`java.util.HashMap`) ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  +24.3% |    +9 |  0.8% → 0.9% |   37 → 46 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| +450.0% |    +9 | <0.1% → 0.2% |    2 → 11 | `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  +42.1% |    +8 |  0.4% → 0.6% |   19 → 27 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  +15.7% |    +8 |  1.1% → 1.2% |   51 → 59 | `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| +114.3% |    +8 |  0.1% → 0.3% |    7 → 15 | `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  +29.2% |    +7 |  0.5% → 0.6% |   24 → 31 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                  |
| +100.0% |    +7 |  0.1% → 0.3% |    7 → 14 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|     new |    +7 |  0.0% → 0.1% |     0 → 7 | `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>` (`libjvm.dylib`) ← `G1AdjustRegionClosure::do_heap_region` ← `HeapRegionManager::par_iterate` ← `G1FullGCAdjustTask::work` ← `WorkerThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|   +5.4% |    +6 |         2.4% | 112 → 118 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|   +8.6% |    +6 |  1.5% → 1.6% |   70 → 76 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  +40.0% |    +6 |  0.3% → 0.4% |   15 → 21 | `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|   +2.2% |    +6 |  5.9% → 5.8% | 278 → 284 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  +13.3% |    +6 |  0.9% → 1.0% |   45 → 51 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  +75.0% |    +6 |  0.2% → 0.3% |    8 → 14 | `computeIfAbsent(Object, Function)` (`java.util.HashMap`) ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

### Improvements

Call stacks with the largest decrease in samples collected in their leaf frame.

| Change | Delta |            % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| -----: | ----: | -----------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| -32.6% |   -30 |  1.9% → 1.3% | 92 → 62 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| -33.8% |   -24 |  1.5% → 1.0% | 71 → 47 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| -41.9% |   -18 |  0.9% → 0.5% | 43 → 25 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| -60.9% |   -14 |  0.5% → 0.2% |  23 → 9 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| -19.1% |   -13 |  1.4% → 1.1% | 68 → 55 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| -52.2% |   -12 |  0.5% → 0.2% | 23 → 11 | `forward_copy_longs` ← `arrayof_jint_disjoint_arraycopy` ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000003011a3b90`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| -25.0% |   -10 |  0.8% → 0.6% | 40 → 30 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| -50.0% |   -10 |  0.4% → 0.2% | 20 → 10 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000003011a2bd0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`) |
| -80.0% |    -8 | 0.2% → <0.1% |  10 → 2 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| -22.2% |    -8 |  0.8% → 0.6% | 36 → 28 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  -8.8% |    -7 |  1.7% → 1.5% | 80 → 73 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| -18.4% |    -7 |  0.8% → 0.6% | 38 → 31 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| -77.8% |    -7 | 0.2% → <0.1% |   9 → 2 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| -46.7% |    -7 |  0.3% → 0.2% |  15 → 8 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `WorkerThread::run` (`libjvm.dylib`) ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| -66.7% |    -6 |  0.2% → 0.1% |   9 → 3 | `add(Object, Object[], int)` (`java.util.ArrayList`) ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| -14.3% |    -6 |  0.9% → 0.7% | 42 → 36 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| -75.0% |    -6 | 0.2% → <0.1% |   8 → 2 | `hash(Object)` (`java.util.HashMap`) ← `computeIfAbsent(Object, Function)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| -50.0% |    -6 |  0.3% → 0.1% |  12 → 6 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| -50.0% |    -6 |  0.3% → 0.1% |  12 → 6 | `doubleValue()` (`java.lang.Double`) ← `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| -85.7% |    -6 | 0.1% → <0.1% |   7 → 1 | `add(Object, Object[], int)` (`java.util.ArrayList`) ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

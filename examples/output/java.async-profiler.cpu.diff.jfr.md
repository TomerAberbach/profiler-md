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

Functions with the largest increase in samples taken directly in the function body, excluding callees.

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

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

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

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

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

Functions with the largest decrease in total samples taken in the function and all its callees.

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

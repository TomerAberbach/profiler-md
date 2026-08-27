# Sampling profile diff

Collected 7,795 samples → 5,002 samples (-2,793 samples, -35.8%).

| Category         | Change |  Delta |             % |       Samples |
| ---------------- | -----: | -----: | ------------: | ------------: |
| Ours             |  +9.6% |   +268 | 35.9% → 61.3% | 2,799 → 3,067 |
| Native           | -71.7% | -2,889 | 51.7% → 22.8% | 4,029 → 1,140 |
| Standard library | -18.0% |   -151 | 10.8% → 13.7% |     838 → 687 |
| Compiler         |   0.0% |      0 |   0.8% → 1.3% |            63 |
| JIT              | -31.8% |    -21 |   0.8% → 0.9% |       66 → 45 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |     Samples | Function                                                        | Location                                                   |
| ------: | ----: | ------------: | ----------: | --------------------------------------------------------------- | ---------------------------------------------------------- |
|  +28.0% |  +111 |  5.1% → 10.1% |   396 → 507 | `vectorSum()`                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +10.8% |   +97 | 11.5% → 19.9% |   896 → 993 | `accumulate(Double[], double[])`                                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   +7.1% |   +66 | 12.0% → 20.0% | 935 → 1,001 | `distance(Double[], Double[])`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +281.3% |   +45 |   0.2% → 1.2% |     16 → 61 | `add(Object, Object[], int)`                                    | `java.util.ArrayList`                                      |
|  +88.2% |   +15 |   0.2% → 0.6% |     17 → 32 | `G1FullGCMarker::mark_object`                                   | `libjvm.dylib`                                             |
| +800.0% |    +8 |  <0.1% → 0.2% |       1 → 9 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` | `libjvm.dylib`                                             |
| +120.0% |    +6 |   0.1% → 0.2% |      5 → 11 | `G1RegionMarkStatsCache::add_live_words`                        | `libjvm.dylib`                                             |
|  +27.8% |    +5 |   0.2% → 0.5% |     18 → 23 | `semaphore_wait_trap`                                           | `libsystem_kernel.dylib`                                   |
|     new |    +5 |   0.0% → 0.1% |       0 → 5 | `add(double[], double[])`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| +400.0% |    +4 |  <0.1% → 0.1% |       1 → 5 | `exec()`                                                        | `java.util.concurrent.RecursiveTask`                       |
| +300.0% |    +3 |  <0.1% → 0.1% |       1 → 4 | `get(int)`                                                      | `java.util.ArrayList`                                      |
|  +14.3% |    +3 |   0.3% → 0.5% |     21 → 24 | `hash(Object)`                                                  | `java.util.HashMap`                                        |
| +300.0% |    +3 |  <0.1% → 0.1% |       1 → 4 | `PhaseChaitin::Split`                                           | `libjvm.dylib`                                             |
|     new |    +3 |   0.0% → 0.1% |       0 → 3 | `MarkBitMap::check_mark`                                        | `libjvm.dylib`                                             |
|     new |    +2 |  0.0% → <0.1% |       0 → 2 | `HeapRegionManager::par_iterate`                                | `libjvm.dylib`                                             |
|     new |    +2 |  0.0% → <0.1% |       0 → 2 | `HierarchyVisitor<FindMethodsByErasedSig>::run`                 | `libjvm.dylib`                                             |
|     new |    +2 |  0.0% → <0.1% |       0 → 2 | `Node_Backward_Iterator::next`                                  | `libjvm.dylib`                                             |
|     new |    +2 |  0.0% → <0.1% |       0 → 2 | `Type::cmp`                                                     | `libjvm.dylib`                                             |
|     new |    +2 |  0.0% → <0.1% |       0 → 2 | `combineResults(Object, Object)`                                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|     new |    +2 |  0.0% → <0.1% |       0 → 2 | `PhaseIterGVN::add_users_to_worklist`                           | `libjvm.dylib`                                             |

##### Ours

|  Change | Delta |             % |     Samples | Function                             | Location                                                   |
| ------: | ----: | ------------: | ----------: | ------------------------------------ | ---------------------------------------------------------- |
|  +28.0% |  +111 |  5.1% → 10.1% |   396 → 507 | `vectorSum()`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +10.8% |   +97 | 11.5% → 19.9% |   896 → 993 | `accumulate(Double[], double[])`     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   +7.1% |   +66 | 12.0% → 20.0% | 935 → 1,001 | `distance(Double[], Double[])`       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|     new |    +5 |   0.0% → 0.1% |       0 → 5 | `add(double[], double[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|     new |    +2 |  0.0% → <0.1% |       0 → 2 | `combineResults(Object, Object)`     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +50.0% |    +1 |  <0.1% → 0.1% |       2 → 3 | `compute()`                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
|     new |    +1 |  0.0% → <0.1% |       0 → 1 | `computeDirectly()`                  | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| +100.0% |    +1 |         <0.1% |       1 → 2 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +100.0% |    +1 |         <0.1% |       1 → 2 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|     new |    +1 |  0.0% → <0.1% |       0 → 1 | `forkThreshold()`                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### Native

|  Change | Delta |            % | Samples | Function                                                                                     | Location                   |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------- | -------------------------- |
|  +88.2% |   +15 |  0.2% → 0.6% | 17 → 32 | `G1FullGCMarker::mark_object`                                                                | `libjvm.dylib`             |
| +800.0% |    +8 | <0.1% → 0.2% |   1 → 9 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>`                              | `libjvm.dylib`             |
| +120.0% |    +6 |  0.1% → 0.2% |  5 → 11 | `G1RegionMarkStatsCache::add_live_words`                                                     | `libjvm.dylib`             |
|  +27.8% |    +5 |  0.2% → 0.5% | 18 → 23 | `semaphore_wait_trap`                                                                        | `libsystem_kernel.dylib`   |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `MarkBitMap::check_mark`                                                                     | `libjvm.dylib`             |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `HeapRegionManager::par_iterate`                                                             | `libjvm.dylib`             |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `HierarchyVisitor<FindMethodsByErasedSig>::run`                                              | `libjvm.dylib`             |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `__psynch_cvclrprepost`                                                                      | `libsystem_kernel.dylib`   |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `G1FullGCCompactTask::G1CompactRegionClosure::apply`                                         | `libjvm.dylib`             |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `__psynch_cvbroad`                                                                           | `libsystem_kernel.dylib`   |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `void HeapRegion::apply_to_marked_objects<G1FullGCPrepareTask::G1PrepareCompactLiveClosure>` | `libjvm.dylib`             |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `Unsafe_Unpark`                                                                              | `libjvm.dylib`             |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `MemAllocator::Allocation::notify_allocation`                                                | `libjvm.dylib`             |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `_new_array_Java`                                                                            | `<unknown>`                |
|  +14.3% |    +1 |  0.1% → 0.2% |   7 → 8 | `inflate_fast`                                                                               | `libzip.dylib`             |
| +100.0% |    +1 |        <0.1% |   1 → 2 | `_platform_memmove`                                                                          | `libsystem_platform.dylib` |
| +100.0% |    +1 |        <0.1% |   1 → 2 | `G1BarrierSet::write_ref_array_work`                                                         | `libjvm.dylib`             |
| +100.0% |    +1 |        <0.1% |   1 → 2 | `semaphore_signal_trap`                                                                      | `libsystem_kernel.dylib`   |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `MergeMemStream::MergeMemStream`                                                             | `libjvm.dylib`             |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `Symbol::as_klass_external_name`                                                             | `libjvm.dylib`             |

##### Standard library

|  Change | Delta |            % | Samples | Function                                                     | Location                                       |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------ | ---------------------------------------------- |
| +281.3% |   +45 |  0.2% → 1.2% | 16 → 61 | `add(Object, Object[], int)`                                 | `java.util.ArrayList`                          |
| +400.0% |    +4 | <0.1% → 0.1% |   1 → 5 | `exec()`                                                     | `java.util.concurrent.RecursiveTask`           |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `get(int)`                                                   | `java.util.ArrayList`                          |
|  +14.3% |    +3 |  0.3% → 0.5% | 21 → 24 | `hash(Object)`                                               | `java.util.HashMap`                            |
| +100.0% |    +1 |        <0.1% |   1 → 2 | `doExec()`                                                   | `java.util.concurrent.ForkJoinTask`            |
| +100.0% |    +1 |        <0.1% |   1 → 2 | `join()`                                                     | `java.util.concurrent.ForkJoinTask`            |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`         | `java.util.concurrent.ForkJoinPool$WorkQueue`  |
|   +4.2% |    +1 |  0.3% → 0.5% | 24 → 25 | `grow(int)`                                                  | `java.util.ArrayList`                          |
| +100.0% |    +1 |        <0.1% |   1 → 2 | `add(Object)`                                                | `java.util.ArrayList`                          |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `park()`                                                     | `java.util.concurrent.locks.LockSupport`       |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `unpark(Thread)`                                             | `java.util.concurrent.locks.LockSupport`       |
| +100.0% |    +1 |        <0.1% |   1 → 2 | `awaitWork(ForkJoinPool$WorkQueue)`                          | `java.util.concurrent.ForkJoinPool`            |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `wrapSink(Sink)`                                             | `java.util.stream.AbstractPipeline`            |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `toArray()`                                                  | `java.util.HashMap$Values`                     |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `invoke(Class, MethodHandle, String, Object, Object, Class)` | `java.lang.invoke.BootstrapMethodInvoker`      |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `generateCustomizedCodeBytes()`                              | `java.lang.invoke.InvokerBytecodeGenerator`    |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `accept(int)`                                                | `java.util.stream.IntPipeline$1$1`             |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `forEachRemaining(IntConsumer)`                              | `java.util.stream.Streams$RangeIntSpliterator` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `keySet()`                                                   | `java.util.HashMap`                            |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `fromCharacteristics(Spliterator)`                           | `java.util.stream.StreamOpFlag`                |

##### Compiler

|  Change | Delta |            % | Samples | Function                                      | Location       |
| ------: | ----: | -----------: | ------: | --------------------------------------------- | -------------- |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `PhaseChaitin::Split`                         | `libjvm.dylib` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `Node_Backward_Iterator::next`                | `libjvm.dylib` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `Type::cmp`                                   | `libjvm.dylib` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `PhaseIterGVN::add_users_to_worklist`         | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `CompileBroker::invoke_compiler_on_method`    | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseGVN::transform_no_reclaim`              | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseLive::compute`                          | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseIdealLoop::split_if_with_blocks_pre`    | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseCFG::schedule_late`                     | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseChaitin::elide_copy`                    | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseChaitin::gather_lrg_masks`              | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `CompilationPolicy::method_back_branch_event` | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `IntervalWalker::walk_to`                     | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `Node::clone`                                 | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `Node::dominates`                             | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `IfTrueNode::Opcode`                          | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `Compile::flatten_alias_type`                 | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `Compile::identify_useful_nodes`              | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseIFG::effective_degree`                  | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `LinearScan::add_def`                         | `libjvm.dylib` |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change |  Delta |             % |     Samples | Function                                                  | Location                                                   |
| ------: | -----: | ------------: | ----------: | --------------------------------------------------------- | ---------------------------------------------------------- |
|  -99.2% | -1,967 |  25.4% → 0.3% |  1,983 → 16 | `pthread_jit_write_protect_np`                            | `libsystem_pthread.dylib`                                  |
|  -41.1% |   -449 | 14.0% → 12.9% | 1,093 → 644 | `__psynch_cvwait`                                         | `libsystem_kernel.dylib`                                   |
| removed |   -152 |   1.9% → 0.0% |     152 → 0 | `JVM_IHashCode`                                           | `libjvm.dylib`                                             |
| removed |    -76 |   1.0% → 0.0% |      76 → 0 | `hashCode()`                                              | `java.lang.Object`                                         |
|  -98.6% |    -70 |  0.9% → <0.1% |      71 → 1 | `stub:pthread_jit_write_protect_np`                       | `libjvm.dylib`                                             |
| removed |    -53 |   0.7% → 0.0% |      53 → 0 | `ObjectSynchronizer::FastHashCode`                        | `libjvm.dylib`                                             |
| removed |    -50 |   0.6% → 0.0% |      50 → 0 | `read_stable_mark`                                        | `libjvm.dylib`                                             |
|  -19.1% |    -46 |   3.1% → 3.9% |   241 → 195 | `forward_copy_longs`                                      | `<unknown>`                                                |
|  -25.4% |    -44 |   2.2% → 2.6% |   173 → 129 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                                        |
|  -97.2% |    -35 |  0.5% → <0.1% |      36 → 1 | `JavaFrameAnchor::make_walkable`                          | `libjvm.dylib`                                             |
|  -75.9% |    -22 |   0.4% → 0.1% |      29 → 7 | `grow()`                                                  | `java.util.ArrayList`                                      |
|  -24.1% |    -14 |   0.7% → 0.9% |     58 → 44 | `zero_blocks`                                             | `<unknown>`                                                |
|  -51.9% |    -14 |          0.3% |     27 → 13 | `arrayof_jint_disjoint_arraycopy`                         | `<unknown>`                                                |
|  -28.6% |    -14 |   0.6% → 0.7% |     49 → 35 | `__psynch_cvsignal`                                       | `libsystem_kernel.dylib`                                   |
| removed |    -12 |   0.2% → 0.0% |      12 → 0 | `hashCode()`                                              | `java.lang.String`                                         |
|   -9.1% |    -11 |   1.6% → 2.2% |   121 → 110 | `collectClusters(int[])`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -27.5% |    -11 |   0.5% → 0.6% |     40 → 29 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                        |
|  -47.6% |    -10 |   0.3% → 0.2% |     21 → 11 | `__psynch_mutexwait`                                      | `libsystem_kernel.dylib`                                   |
|   -6.2% |     -8 |   1.7% → 2.4% |   130 → 122 | `doubleValue()`                                           | `java.lang.Double`                                         |
|  -85.7% |     -6 |  0.1% → <0.1% |       7 → 1 | `HeapRegion::update_bot_for_block`                        | `libjvm.dylib`                                             |

##### Ours

|  Change | Delta |            % |   Samples | Function                                         | Location                                                   |
| ------: | ----: | -----------: | --------: | ------------------------------------------------ | ---------------------------------------------------------- |
|   -9.1% |   -11 |  1.6% → 2.2% | 121 → 110 | `collectClusters(int[])`                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -0.7% |    -3 |  5.6% → 8.7% | 437 → 434 | `findNearestCentroid()`                          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -40.0% |    -2 |         0.1% |     5 → 3 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `computeClusterAverages()`                       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `forkThreshold()`                                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

##### Native

|  Change |  Delta |             % |     Samples | Function                                                                                        | Location                  |
| ------: | -----: | ------------: | ----------: | ----------------------------------------------------------------------------------------------- | ------------------------- |
|  -99.2% | -1,967 |  25.4% → 0.3% |  1,983 → 16 | `pthread_jit_write_protect_np`                                                                  | `libsystem_pthread.dylib` |
|  -41.1% |   -449 | 14.0% → 12.9% | 1,093 → 644 | `__psynch_cvwait`                                                                               | `libsystem_kernel.dylib`  |
| removed |   -152 |   1.9% → 0.0% |     152 → 0 | `JVM_IHashCode`                                                                                 | `libjvm.dylib`            |
|  -98.6% |    -70 |  0.9% → <0.1% |      71 → 1 | `stub:pthread_jit_write_protect_np`                                                             | `libjvm.dylib`            |
| removed |    -53 |   0.7% → 0.0% |      53 → 0 | `ObjectSynchronizer::FastHashCode`                                                              | `libjvm.dylib`            |
| removed |    -50 |   0.6% → 0.0% |      50 → 0 | `read_stable_mark`                                                                              | `libjvm.dylib`            |
|  -19.1% |    -46 |   3.1% → 3.9% |   241 → 195 | `forward_copy_longs`                                                                            | `<unknown>`               |
|  -97.2% |    -35 |  0.5% → <0.1% |      36 → 1 | `JavaFrameAnchor::make_walkable`                                                                | `libjvm.dylib`            |
|  -51.9% |    -14 |          0.3% |     27 → 13 | `arrayof_jint_disjoint_arraycopy`                                                               | `<unknown>`               |
|  -28.6% |    -14 |   0.6% → 0.7% |     49 → 35 | `__psynch_cvsignal`                                                                             | `libsystem_kernel.dylib`  |
|  -47.6% |    -10 |   0.3% → 0.2% |     21 → 11 | `__psynch_mutexwait`                                                                            | `libsystem_kernel.dylib`  |
|  -85.7% |     -6 |  0.1% → <0.1% |       7 → 1 | `HeapRegion::update_bot_for_block`                                                              | `libjvm.dylib`            |
|  -75.0% |     -6 |  0.1% → <0.1% |       8 → 2 | `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>`                                 | `libjvm.dylib`            |
| removed |     -6 |   0.1% → 0.0% |       6 → 0 | `void G1ScanEvacuatedObjClosure::do_oop_work<narrowOop>`                                        | `libjvm.dylib`            |
|  -83.3% |     -5 |  0.1% → <0.1% |       6 → 1 | `void OopOopIterateDispatch<G1AdjustClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>` | `libjvm.dylib`            |
|  -66.7% |     -4 |  0.1% → <0.1% |       6 → 2 | `G1FullGCMarker::publish_and_drain_oop_tasks`                                                   | `libjvm.dylib`            |
|  -57.1% |     -4 |          0.1% |       7 → 3 | `G1FullGCMarker::follow_object`                                                                 | `libjvm.dylib`            |
| removed |     -3 |  <0.1% → 0.0% |       3 → 0 | `os::current_thread_enable_wx`                                                                  | `libjvm.dylib`            |
| removed |     -3 |  <0.1% → 0.0% |       3 → 0 | `__mmap`                                                                                        | `libsystem_kernel.dylib`  |
| removed |     -3 |  <0.1% → 0.0% |       3 → 0 | `void G1ScanClosureBase::handle_non_cset_obj_common<narrowOop>`                                 | `libjvm.dylib`            |

##### Standard library

|  Change | Delta |            % |   Samples | Function                                                  | Location                                      |
| ------: | ----: | -----------: | --------: | --------------------------------------------------------- | --------------------------------------------- |
| removed |   -76 |  1.0% → 0.0% |    76 → 0 | `hashCode()`                                              | `java.lang.Object`                            |
|  -25.4% |   -44 |  2.2% → 2.6% | 173 → 129 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                           |
|  -75.9% |   -22 |  0.4% → 0.1% |    29 → 7 | `grow()`                                                  | `java.util.ArrayList`                         |
| removed |   -12 |  0.2% → 0.0% |    12 → 0 | `hashCode()`                                              | `java.lang.String`                            |
|  -27.5% |   -11 |  0.5% → 0.6% |   40 → 29 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
|   -6.2% |    -8 |  1.7% → 2.4% | 130 → 122 | `doubleValue()`                                           | `java.lang.Double`                            |
|  -13.9% |    -5 |  0.5% → 0.6% |   36 → 31 | `checkIndex(int, int)`                                    | `java.util.Objects`                           |
|  -38.5% |    -5 |         0.2% |    13 → 8 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                            |
|   -2.9% |    -5 |  2.2% → 3.4% | 175 → 170 | `elementData(int)`                                        | `java.util.ArrayList`                         |
|  -40.0% |    -4 |         0.1% |    10 → 6 | `putVal(int, Object, Object, boolean, boolean)`           | `java.util.HashMap`                           |
| removed |    -4 |  0.1% → 0.0% |     4 → 0 | `nextNode()`                                              | `java.util.HashMap$HashIterator`              |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `unpark(Object)`                                          | `jdk.internal.misc.Unsafe`                    |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `casAux(ForkJoinTask$Aux, ForkJoinTask$Aux)`              | `java.util.concurrent.ForkJoinTask`           |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `builder(long, IntFunction)`                              | `java.util.stream.Nodes`                      |
|  -50.0% |    -2 | 0.1% → <0.1% |     4 → 2 | `newLength(int, int, int)`                                | `jdk.internal.util.ArraysSupport`             |
|  -50.0% |    -1 |        <0.1% |     2 → 1 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  -25.0% |    -1 |         0.1% |     4 → 3 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`           |
|  -25.0% |    -1 |         0.1% |     4 → 3 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`           |
|  -33.3% |    -1 |        <0.1% |     3 → 2 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`           |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `resize()`                                                | `java.util.HashMap`                           |

##### Compiler

|  Change | Delta |            % | Samples | Function                               | Location       |
| ------: | ----: | -----------: | ------: | -------------------------------------- | -------------- |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `PhaseIdealLoop::build_loop_late`      | `libjvm.dylib` |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `Node::is_CFG`                         | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `RelocIterator::set_limits`            | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `MachProjNode::bottom_type`            | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `NodeHash::hash_find_insert`           | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseBlockLayout::reorder_traces`     | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `ProjNode::Value`                      | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Matcher::xform`                       | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `ConLNode::Opcode`                     | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Compile::process_print_inlining`      | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `CastIINode::Opcode`                   | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `IndexSet::alloc_block_containing`     | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Node::hash`                           | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseIdealLoop::build_loop_tree_impl` | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `MergeMemNode::hash`                   | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `TypeKlassPtr::exact_klass_helper`     | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `TypeInterfaces::initialize`           | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Compile::remove_useless_node`         | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `load_fenceNode::bottom_type`          | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseChaitin::build_ifg_physical`     | `libjvm.dylib` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |             % |       Samples | Function                                                        | Location                                                   |
| ------: | ----: | ------------: | ------------: | --------------------------------------------------------------- | ---------------------------------------------------------- |
|  +17.6% |  +258 | 18.8% → 34.4% | 1,464 → 1,722 | `vectorSum()`                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +17.5% |  +257 | 18.8% → 34.4% | 1,466 → 1,723 | `computeDirectly()`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +19.8% |  +128 |  8.3% → 15.5% |     646 → 774 | `average(List)`                                                 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  +19.4% |  +126 |  8.4% → 15.5% |     651 → 777 | `computeClusterAverages()`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  +19.4% |  +126 |  8.4% → 15.5% |     651 → 777 | `computeDirectly()`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  +12.5% |  +123 | 12.6% → 22.1% |   981 → 1,104 | `accumulate(Double[], double[])`                                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|     new |   +35 |   0.0% → 0.7% |        0 → 35 | `invokeStatic(Object, Object)`                                  | `java.lang.invoke.LambdaForm$DMH.0x000000f001004800`       |
|     new |   +35 |   0.0% → 0.7% |        0 → 35 | `invoke(Object, Object, Object)`                                | `java.lang.invoke.LambdaForm$MH.0x000000f001009800`        |
|   +3.3% |   +32 | 12.6% → 20.2% |   980 → 1,012 | `distance(Double[], Double[])`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +128.6% |   +27 |   0.3% → 1.0% |       21 → 48 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` | `libjvm.dylib`                                             |
|  +54.5% |   +24 |   0.6% → 1.4% |       44 → 68 | `G1FullGCMarker::complete_marking`                              | `libjvm.dylib`                                             |
|  +54.5% |   +24 |   0.6% → 1.4% |       44 → 68 | `G1FullGCMarkTask::work`                                        | `libjvm.dylib`                                             |
|  +95.5% |   +21 |   0.3% → 0.9% |       22 → 43 | `G1FullGCMarker::mark_object`                                   | `libjvm.dylib`                                             |
|  +27.3% |    +9 |   0.4% → 0.8% |       33 → 42 | `G1FullGCMarker::follow_marking_stacks`                         | `libjvm.dylib`                                             |
|     new |    +7 |   0.0% → 0.1% |         0 → 7 | `combineResults(Object, Object)`                                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +66.7% |    +6 |   0.1% → 0.3% |        9 → 15 | `PhaseChaitin::Register_Allocate`                               | `libjvm.dylib`                                             |
| +200.0% |    +6 |  <0.1% → 0.2% |         3 → 9 | `PhaseIterGVN::transform_old`                                   | `libjvm.dylib`                                             |
| +120.0% |    +6 |   0.1% → 0.2% |        5 → 11 | `G1RegionMarkStatsCache::add_live_words`                        | `libjvm.dylib`                                             |
|  +27.8% |    +5 |   0.2% → 0.5% |       18 → 23 | `semaphore_wait_trap`                                           | `libsystem_kernel.dylib`                                   |
|  +83.3% |    +5 |   0.1% → 0.2% |        6 → 11 | `tryCompensate(long, boolean)`                                  | `java.util.concurrent.ForkJoinPool`                        |

##### Ours

| Change | Delta |             % |       Samples | Function                                        | Location                                                   |
| -----: | ----: | ------------: | ------------: | ----------------------------------------------- | ---------------------------------------------------------- |
| +17.6% |  +258 | 18.8% → 34.4% | 1,464 → 1,722 | `vectorSum()`                                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| +17.5% |  +257 | 18.8% → 34.4% | 1,466 → 1,723 | `computeDirectly()`                             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| +19.8% |  +128 |  8.3% → 15.5% |     646 → 774 | `average(List)`                                 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| +19.4% |  +126 |  8.4% → 15.5% |     651 → 777 | `computeClusterAverages()`                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| +19.4% |  +126 |  8.4% → 15.5% |     651 → 777 | `computeDirectly()`                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| +12.5% |  +123 | 12.6% → 22.1% |   981 → 1,104 | `accumulate(Double[], double[])`                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +3.3% |   +32 | 12.6% → 20.2% |   980 → 1,012 | `distance(Double[], Double[])`                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|    new |    +7 |   0.0% → 0.1% |         0 → 7 | `combineResults(Object, Object)`                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|    new |    +5 |   0.0% → 0.1% |         0 → 5 | `add(double[], double[])`                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|    new |    +5 |   0.0% → 0.1% |         0 → 5 | `combineResults(double[], double[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| +50.0% |    +1 |  <0.1% → 0.1% |         2 → 3 | `createSubtask(int, int)`                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +50.0% |    +1 |  <0.1% → 0.1% |         2 → 3 | `createHandler()`                               | `org.renaissance.core.Logging`                             |
| +50.0% |    +1 |  <0.1% → 0.1% |         2 → 3 | `createRootLogger()`                            | `org.renaissance.core.Logging`                             |
| +50.0% |    +1 |  <0.1% → 0.1% |         2 → 3 | `<clinit>()`                                    | `org.renaissance.core.Logging`                             |
| +50.0% |    +1 |  <0.1% → 0.1% |         2 → 3 | `<clinit>()`                                    | `org.renaissance.core.Launcher`                            |
|  +6.3% |    +1 |   0.2% → 0.3% |       16 → 17 | `executeBenchmark()`                            | `org.renaissance.harness.ExecutionDriver`                  |
| +20.0% |    +1 |          0.1% |         5 → 6 | `run(BenchmarkContext)`                         | `org.renaissance.jdk.concurrent.FjKmeans`                  |
| +16.7% |    +1 |          0.1% |         6 → 7 | `executeOperation(int)`                         | `org.renaissance.harness.ExecutionDriver`                  |
|    new |    +1 |  0.0% → <0.1% |         0 → 1 | `createScratchDirectory(Path, String, boolean)` | `org.renaissance.core.DirUtils`                            |
|    new |    +1 |  0.0% → <0.1% |         0 → 1 | `createScratchRoot(Path, boolean)`              | `org.renaissance.core.Launcher`                            |

##### Native

|  Change | Delta |            % | Samples | Function                                                                                             | Location                 |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------------------------------------------------------- | ------------------------ |
| +128.6% |   +27 |  0.3% → 1.0% | 21 → 48 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>`                                      | `libjvm.dylib`           |
|  +54.5% |   +24 |  0.6% → 1.4% | 44 → 68 | `G1FullGCMarker::complete_marking`                                                                   | `libjvm.dylib`           |
|  +54.5% |   +24 |  0.6% → 1.4% | 44 → 68 | `G1FullGCMarkTask::work`                                                                             | `libjvm.dylib`           |
|  +95.5% |   +21 |  0.3% → 0.9% | 22 → 43 | `G1FullGCMarker::mark_object`                                                                        | `libjvm.dylib`           |
|  +27.3% |    +9 |  0.4% → 0.8% | 33 → 42 | `G1FullGCMarker::follow_marking_stacks`                                                              | `libjvm.dylib`           |
| +120.0% |    +6 |  0.1% → 0.2% |  5 → 11 | `G1RegionMarkStatsCache::add_live_words`                                                             | `libjvm.dylib`           |
|  +27.8% |    +5 |  0.2% → 0.5% | 18 → 23 | `semaphore_wait_trap`                                                                                | `libsystem_kernel.dylib` |
|     new |    +5 |  0.0% → 0.1% |   0 → 5 | `InterpreterRuntime::frequency_counter_overflow_inner`                                               | `libjvm.dylib`           |
|     new |    +5 |  0.0% → 0.1% |   0 → 5 | `InterpreterRuntime::frequency_counter_overflow`                                                     | `libjvm.dylib`           |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `ServiceThread::service_thread_entry`                                                                | `libjvm.dylib`           |
|  +33.3% |    +3 |  0.1% → 0.2% |  9 → 12 | `Parse::do_all_blocks`                                                                               | `libjvm.dylib`           |
|  +33.3% |    +3 |  0.1% → 0.2% |  9 → 12 | `Parse::Parse`                                                                                       | `libjvm.dylib`           |
|  +33.3% |    +3 |  0.1% → 0.2% |  9 → 12 | `ParseGenerator::generate`                                                                           | `libjvm.dylib`           |
|  +75.0% |    +3 |         0.1% |   4 → 7 | `void OopOopIterateDispatch<G1MarkAndPushClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `libjvm.dylib`           |
| +150.0% |    +3 | <0.1% → 0.1% |   2 → 5 | `G1CollectedHeap::mem_allocate`                                                                      | `libjvm.dylib`           |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `BarrierSetC2::store_at`                                                                             | `libjvm.dylib`           |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `G1FullGCCompactTask::work`                                                                          | `libjvm.dylib`           |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `MarkBitMap::check_mark`                                                                             | `libjvm.dylib`           |
|  +22.2% |    +2 |  0.1% → 0.2% |  9 → 11 | `Parse::do_one_block`                                                                                | `libjvm.dylib`           |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `Parse::do_put_xxx`                                                                                  | `libjvm.dylib`           |

##### Standard library

|  Change | Delta |            % | Samples | Function                                                                                 | Location                                             |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|     new |   +35 |  0.0% → 0.7% |  0 → 35 | `invokeStatic(Object, Object)`                                                           | `java.lang.invoke.LambdaForm$DMH.0x000000f001004800` |
|     new |   +35 |  0.0% → 0.7% |  0 → 35 | `invoke(Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x000000f001009800`  |
|  +83.3% |    +5 |  0.1% → 0.2% |  6 → 11 | `tryCompensate(long, boolean)`                                                           | `java.util.concurrent.ForkJoinPool`                  |
| +100.0% |    +3 | <0.1% → 0.1% |   3 → 6 | `getBytes()`                                                                             | `jdk.internal.loader.Resource`                       |
| +100.0% |    +3 | <0.1% → 0.1% |   3 → 6 | `getBytes()`                                                                             | `jdk.internal.loader.URLClassPath$JarLoader$2`       |
|  +28.6% |    +2 |  0.1% → 0.2% |   7 → 9 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)`                            | `java.util.zip.Inflater`                             |
|  +28.6% |    +2 |  0.1% → 0.2% |   7 → 9 | `inflate(byte[], int, int)`                                                              | `java.util.zip.Inflater`                             |
|  +22.2% |    +2 |  0.1% → 0.2% |  9 → 11 | `read(byte[], int, int)`                                                                 | `java.util.zip.InflaterInputStream`                  |
|  +16.7% |    +2 |  0.2% → 0.3% | 12 → 14 | `run()`                                                                                  | `java.net.URLClassLoader$1`                          |
|  +16.7% |    +2 |  0.2% → 0.3% | 12 → 14 | `doPrivileged(PrivilegedExceptionAction, AccessControlContext)`                          | `java.security.AccessController`                     |
|  +16.7% |    +2 |  0.2% → 0.3% | 12 → 14 | `findClass(String)`                                                                      | `java.net.URLClassLoader`                            |
|  +16.7% |    +2 |  0.2% → 0.3% | 12 → 14 | `loadClass(String, boolean)`                                                             | `java.lang.ClassLoader`                              |
|  +16.7% |    +2 |  0.2% → 0.3% | 12 → 14 | `loadClass(String)`                                                                      | `java.lang.ClassLoader`                              |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `getDirectMethodCommon(byte, Class, MemberName, boolean, boolean, MethodHandles$Lookup)` | `java.lang.invoke.MethodHandles$Lookup`              |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `getDirectMethodNoSecurityManager(byte, Class, MemberName, MethodHandles$Lookup)`        | `java.lang.invoke.MethodHandles$Lookup`              |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `getDirectMethodForConstant(byte, Class, MemberName)`                                    | `java.lang.invoke.MethodHandles$Lookup`              |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `linkMethodHandleConstant(byte, Class, String, Object)`                                  | `java.lang.invoke.MethodHandles$Lookup`              |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `linkMethodHandleConstant(Class, int, Class, String, Object)`                            | `java.lang.invoke.MethodHandleNatives`               |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `stream(double[], int, int)`                                                             | `java.util.Arrays`                                   |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `stream(double[])`                                                                       | `java.util.Arrays`                                   |

##### Compiler

|  Change | Delta |            % | Samples | Function                                      | Location       |
| ------: | ----: | -----------: | ------: | --------------------------------------------- | -------------- |
|  +66.7% |    +6 |  0.1% → 0.3% |  9 → 15 | `PhaseChaitin::Register_Allocate`             | `libjvm.dylib` |
| +200.0% |    +6 | <0.1% → 0.2% |   3 → 9 | `PhaseIterGVN::transform_old`                 | `libjvm.dylib` |
|  +80.0% |    +4 |  0.1% → 0.2% |   5 → 9 | `PhaseIterGVN::optimize`                      | `libjvm.dylib` |
| +400.0% |    +4 | <0.1% → 0.1% |   1 → 5 | `PhaseChaitin::Split`                         | `libjvm.dylib` |
| +100.0% |    +3 | <0.1% → 0.1% |   3 → 6 | `CompilationPolicy::event`                    | `libjvm.dylib` |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `CompilationPolicy::method_back_branch_event` | `libjvm.dylib` |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `Type::hashcons`                              | `libjvm.dylib` |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `GraphKit::access_store_at`                   | `libjvm.dylib` |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `ciBytecodeStream::get_method`                | `libjvm.dylib` |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `ciTypeFlow::StateVector::apply_one_bytecode` | `libjvm.dylib` |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `ciTypeFlow::flow_block`                      | `libjvm.dylib` |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `ciTypeFlow::df_flow_types`                   | `libjvm.dylib` |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `ciTypeFlow::flow_types`                      | `libjvm.dylib` |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `ciTypeFlow::do_flow`                         | `libjvm.dylib` |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `ciMethod::get_flow_analysis`                 | `libjvm.dylib` |
|   +8.3% |    +2 |  0.3% → 0.5% | 24 → 26 | `Compile::Code_Gen`                           | `libjvm.dylib` |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `Compile::call_generator`                     | `libjvm.dylib` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `PhaseIdealLoop::split_if_with_blocks_post`   | `libjvm.dylib` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `Node_Backward_Iterator::next`                | `libjvm.dylib` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `GraphKit::clone_map`                         | `libjvm.dylib` |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

| Change |  Delta |             % |       Samples | Function                                                  | Location                                                   |
| -----: | -----: | ------------: | ------------: | --------------------------------------------------------- | ---------------------------------------------------------- |
| -36.6% | -2,750 | 96.3% → 95.0% | 7,504 → 4,754 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                        |
| -36.6% | -2,750 | 96.3% → 95.0% | 7,504 → 4,754 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`                |
| -36.1% | -2,542 | 90.3% → 89.9% | 7,041 → 4,499 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`                        |
| -36.1% | -2,538 | 90.2% → 89.8% | 7,032 → 4,494 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                        |
| -36.1% | -2,537 | 90.2% → 89.9% | 7,032 → 4,495 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| -36.2% | -2,535 | 89.9% → 89.4% | 7,006 → 4,471 | `compute()`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
| -36.1% | -2,532 | 89.9% → 89.4% | 7,006 → 4,474 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                       |
| -36.4% | -2,475 | 87.1% → 86.3% | 6,792 → 4,317 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                        |
| -36.4% | -2,475 | 87.1% → 86.3% | 6,792 → 4,317 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                        |
| -56.0% | -2,463 | 56.4% → 38.7% | 4,397 → 1,934 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -84.8% | -2,446 |  37.0% → 8.8% |   2,885 → 439 | `collectClusters(int[])`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -94.0% | -2,431 |  33.2% → 3.1% |   2,587 → 156 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                                        |
| -99.8% | -2,389 |  30.7% → 0.1% |     2,393 → 4 | `hashCode()`                                              | `java.lang.Object`                                         |
| -98.8% | -2,388 |  31.0% → 0.6% |    2,416 → 28 | `hash(Object)`                                            | `java.util.HashMap`                                        |
| -36.6% | -2,378 | 83.3% → 82.2% | 6,491 → 4,113 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| -99.8% | -2,282 |  29.3% → 0.1% |     2,286 → 4 | `JVM_IHashCode`                                           | `libjvm.dylib`                                             |
| -99.2% | -1,967 |  25.4% → 0.3% |    1,983 → 16 | `pthread_jit_write_protect_np`                            | `libsystem_pthread.dylib`                                  |
| -36.4% |   -645 | 22.7% → 22.5% | 1,771 → 1,126 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                        |
| -41.1% |   -449 | 14.0% → 12.9% |   1,093 → 644 | `__psynch_cvwait`                                         | `libsystem_kernel.dylib`                                   |
| -40.7% |   -441 | 13.9% → 12.8% |   1,083 → 642 | `Unsafe_Park`                                             | `libjvm.dylib`                                             |

##### Ours

| Change |  Delta |             % |       Samples | Function                                                    | Location                                                               |
| -----: | -----: | ------------: | ------------: | ----------------------------------------------------------- | ---------------------------------------------------------------------- |
| -36.2% | -2,535 | 89.9% → 89.4% | 7,006 → 4,471 | `compute()`                                                 | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| -56.0% | -2,463 | 56.4% → 38.7% | 4,397 → 1,934 | `computeDirectly()`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| -84.8% | -2,446 |  37.0% → 8.8% |   2,885 → 439 | `collectClusters(int[])`                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| -33.3% |   -241 |   9.3% → 9.6% |     723 → 482 | `lambda$run$0(int, List, int)`                              | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| -33.3% |   -241 |   9.3% → 9.6% |     723 → 482 | `call()`                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f001183d68` |
| -20.4% |    -84 |   5.3% → 6.6% |     412 → 328 | `merge(Map, Map)`                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| -20.4% |    -84 |   5.3% → 6.5% |     411 → 327 | `combineResults(Map, Map)`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| -20.4% |    -84 |   5.3% → 6.6% |     412 → 328 | `combineResults(Object, Object)`                            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| -19.0% |    -73 |   4.9% → 6.2% |     385 → 312 | `lambda$merge$7(Map, Object, List)`                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| -19.0% |    -73 |   4.9% → 6.2% |     385 → 312 | `accept(Object, Object)`                                    | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f001186d88` |
| -19.4% |    -55 |   3.6% → 4.6% |     284 → 229 | `lambda$merge$6(List, List)`                                | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| -19.4% |    -55 |   3.6% → 4.6% |     284 → 229 | `apply(Object, Object)`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f001186fd0` |
|  -1.1% |    -17 | 19.4% → 29.9% | 1,512 → 1,495 | `findNearestCentroid()`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| -13.0% |     -6 |   0.6% → 0.8% |       46 → 40 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher`                                        |
| -10.9% |     -5 |   0.6% → 0.8% |       46 → 41 | `launchHarnessClass(String, String[])`                      | `org.renaissance.core.Launcher`                                        |
| -10.9% |     -5 |   0.6% → 0.8% |       46 → 41 | `main(String[])`                                            | `org.renaissance.core.Launcher`                                        |
| -10.3% |     -4 |   0.5% → 0.7% |       39 → 35 | `main(String[])`                                            | `org.renaissance.harness.RenaissanceSuite`                             |
| -10.5% |     -4 |   0.5% → 0.7% |       38 → 34 | `main(String[])`                                            | `org.renaissance.harness.RenaissanceSuite$`                            |
| -30.0% |     -3 |          0.1% |        10 → 7 | `extractResource(String, Path)`                             | `org.renaissance.core.ResourceUtils`                                   |
| -30.0% |     -3 |          0.1% |        10 → 7 | `extractResources(Iterable, Path)`                          | `org.renaissance.core.ResourceUtils`                                   |

##### Native

|  Change |  Delta |             % |     Samples | Function                                       | Location                  |
| ------: | -----: | ------------: | ----------: | ---------------------------------------------- | ------------------------- |
|  -99.8% | -2,282 |  29.3% → 0.1% |   2,286 → 4 | `JVM_IHashCode`                                | `libjvm.dylib`            |
|  -99.2% | -1,967 |  25.4% → 0.3% |  1,983 → 16 | `pthread_jit_write_protect_np`                 | `libsystem_pthread.dylib` |
|  -41.1% |   -449 | 14.0% → 12.9% | 1,093 → 644 | `__psynch_cvwait`                              | `libsystem_kernel.dylib`  |
|  -40.7% |   -441 | 13.9% → 12.8% | 1,083 → 642 | `Unsafe_Park`                                  | `libjvm.dylib`            |
|  -40.5% |   -433 | 13.7% → 12.7% | 1,069 → 636 | `Parker::park`                                 | `libjvm.dylib`            |
| removed |    -92 |   1.2% → 0.0% |      92 → 0 | `ObjectSynchronizer::FastHashCode`             | `libjvm.dylib`            |
|  -98.6% |    -70 |  0.9% → <0.1% |      71 → 1 | `stub:pthread_jit_write_protect_np`            | `libjvm.dylib`            |
| removed |    -50 |   0.6% → 0.0% |      50 → 0 | `read_stable_mark`                             | `libjvm.dylib`            |
|  -19.1% |    -46 |   3.1% → 3.9% |   241 → 195 | `forward_copy_longs`                           | `<unknown>`               |
|  -18.8% |    -41 |   2.8% → 3.5% |   218 → 177 | `arrayof_jint_disjoint_arraycopy`              | `<unknown>`               |
|  -97.2% |    -35 |  0.5% → <0.1% |      36 → 1 | `JavaFrameAnchor::make_walkable`               | `libjvm.dylib`            |
|  -10.3% |    -23 |   2.9% → 4.0% |   223 → 200 | `Thread::call_run`                             | `libjvm.dylib`            |
|  -10.3% |    -23 |   2.9% → 4.0% |   223 → 200 | `thread_native_entry`                          | `libjvm.dylib`            |
|  -10.3% |    -23 |   2.9% → 4.0% |   223 → 200 | `_pthread_start`                               | `libsystem_pthread.dylib` |
|  -10.3% |    -23 |   2.9% → 4.0% |   223 → 200 | `thread_start`                                 | `libsystem_pthread.dylib` |
| removed |    -21 |   0.3% → 0.0% |      21 → 0 | `G1EvacuateRegionsBaseTask::work`              | `libjvm.dylib`            |
| removed |    -19 |   0.2% → 0.0% |      19 → 0 | `G1ParEvacuateFollowersClosure::do_void`       | `libjvm.dylib`            |
| removed |    -19 |   0.2% → 0.0% |      19 → 0 | `G1EvacuateRegionsTask::evacuate_live_objects` | `libjvm.dylib`            |
|  -56.3% |    -18 |   0.4% → 0.3% |     32 → 14 | `PlatformMonitor::wait`                        | `libjvm.dylib`            |
|  -31.6% |    -18 |   0.7% → 0.8% |     57 → 39 | `arrayof_oop_disjoint_arraycopy`               | `<unknown>`               |

##### Standard library

| Change |  Delta |             % |       Samples | Function                                                  | Location                                            |
| -----: | -----: | ------------: | ------------: | --------------------------------------------------------- | --------------------------------------------------- |
| -36.6% | -2,750 | 96.3% → 95.0% | 7,504 → 4,754 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                 |
| -36.6% | -2,750 | 96.3% → 95.0% | 7,504 → 4,754 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`         |
| -36.1% | -2,542 | 90.3% → 89.9% | 7,041 → 4,499 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`                 |
| -36.1% | -2,538 | 90.2% → 89.8% | 7,032 → 4,494 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                 |
| -36.1% | -2,537 | 90.2% → 89.9% | 7,032 → 4,495 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| -36.1% | -2,532 | 89.9% → 89.4% | 7,006 → 4,474 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                |
| -36.4% | -2,475 | 87.1% → 86.3% | 6,792 → 4,317 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                 |
| -36.4% | -2,475 | 87.1% → 86.3% | 6,792 → 4,317 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                 |
| -94.0% | -2,431 |  33.2% → 3.1% |   2,587 → 156 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                                 |
| -99.8% | -2,389 |  30.7% → 0.1% |     2,393 → 4 | `hashCode()`                                              | `java.lang.Object`                                  |
| -98.8% | -2,388 |  31.0% → 0.6% |    2,416 → 28 | `hash(Object)`                                            | `java.util.HashMap`                                 |
| -36.6% | -2,378 | 83.3% → 82.2% | 6,491 → 4,113 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| -36.4% |   -645 | 22.7% → 22.5% | 1,771 → 1,126 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                 |
| -40.6% |   -441 | 13.9% → 12.9% |   1,085 → 644 | `park(boolean, long)`                                     | `jdk.internal.misc.Unsafe`                          |
| -40.2% |   -427 | 13.6% → 12.7% |   1,062 → 635 | `park()`                                                  | `java.util.concurrent.locks.LockSupport`            |
| -33.3% |   -241 |   9.3% → 9.6% |     723 → 482 | `exec()`                                                  | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
| -45.0% |   -207 |   5.9% → 5.1% |     460 → 253 | `awaitWork(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                 |
| -12.2% |   -148 | 15.6% → 21.3% | 1,214 → 1,066 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`                 |
| -19.0% |    -74 |   5.0% → 6.3% |     390 → 316 | `forEach(BiConsumer)`                                     | `java.util.HashMap`                                 |
| -18.5% |    -71 |   4.9% → 6.2% |     383 → 312 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                                 |

##### Compiler

|  Change | Delta |            % | Samples | Function                              | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------- | -------------- |
|  -15.2% |   -15 |  1.3% → 1.7% | 99 → 84 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |
|  -77.8% |   -14 |  0.2% → 0.1% |  18 → 4 | `CompileQueue::get`                   | `libjvm.dylib` |
|  -30.8% |    -4 |         0.2% |  13 → 9 | `PhaseIdealLoop::build_and_optimize`  | `libjvm.dylib` |
|  -30.8% |    -4 |         0.2% |  13 → 9 | `PhaseIdealLoop::PhaseIdealLoop`      | `libjvm.dylib` |
|  -15.4% |    -4 |  0.3% → 0.4% | 26 → 22 | `Compile::Optimize`                   | `libjvm.dylib` |
|  -57.1% |    -4 |         0.1% |   7 → 3 | `Compile::optimize_loops`             | `libjvm.dylib` |
|  -21.4% |    -3 |         0.2% | 14 → 11 | `PhaseIdealLoop::optimize`            | `libjvm.dylib` |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `PhaseIdealLoop::build_loop_late`     | `libjvm.dylib` |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `Node::is_CFG`                        | `libjvm.dylib` |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `ciEnv::get_field_by_index_impl`      | `libjvm.dylib` |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `ciEnv::get_field_by_index`           | `libjvm.dylib` |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `GraphBuilder::access_field`          | `libjvm.dylib` |
|  -18.8% |    -3 |  0.2% → 0.3% | 16 → 13 | `Compilation::compile_java_method`    | `libjvm.dylib` |
|  -15.8% |    -3 |  0.2% → 0.3% | 19 → 16 | `Compilation::compile_method`         | `libjvm.dylib` |
|  -15.8% |    -3 |  0.2% → 0.3% | 19 → 16 | `Compilation::Compilation`            | `libjvm.dylib` |
|  -42.9% |    -3 |         0.1% |   7 → 4 | `Compilation::emit_lir`               | `libjvm.dylib` |
|   -3.3% |    -2 |  0.8% → 1.2% | 61 → 59 | `Compile::Compile`                    | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `MachProjNode::bottom_type`           | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `ConnectionGraph::compute_escape`     | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `ConnectionGraph::do_analysis`        | `libjvm.dylib` |

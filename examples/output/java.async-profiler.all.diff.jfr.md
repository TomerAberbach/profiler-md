# Sampling profile diff

Collected 5,011 samples → 4,890 samples (-121 samples, -2.4%).

| Category         | Change | Delta |             % |       Samples |
| ---------------- | -----: | ----: | ------------: | ------------: |
| Ours             |  -9.5% |  -281 | 59.3% → 55.0% | 2,972 → 2,691 |
| Native           |  +3.6% |   +45 | 25.3% → 26.8% | 1,267 → 1,312 |
| Standard library | +16.2% |  +107 | 13.2% → 15.7% |     661 → 768 |
| JIT              |   0.0% |     0 |   1.2% → 1.3% |            62 |
| Compiler         | +16.3% |    +8 |   1.0% → 1.2% |       49 → 57 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|   Change | Delta |             % |   Samples | Function                                                                                     | Location                                                   |
| -------: | ----: | ------------: | --------: | -------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
|   +47.9% |  +198 |  8.2% → 12.5% | 413 → 611 | `findNearestCentroid()`                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   +15.9% |   +91 | 11.4% → 13.6% | 573 → 664 | `__psynch_cvwait`                                                                            | `libsystem_kernel.dylib`                                   |
|   +84.0% |   +79 |   1.9% → 3.5% |  94 → 173 | `doubleValue()`                                                                              | `java.lang.Double`                                         |
|  +405.6% |   +73 |   0.4% → 1.9% |   18 → 91 | `grow(int)`                                                                                  | `java.util.ArrayList`                                      |
|   +19.6% |   +22 |   2.2% → 2.7% | 112 → 134 | `collectClusters(int[])`                                                                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|    +6.8% |   +13 |   3.8% → 4.2% | 192 → 205 | `forward_copy_longs`                                                                         | `<unknown>`                                                |
|   +35.5% |   +11 |   0.6% → 0.9% |   31 → 42 | `checkIndex(int, int)`                                                                       | `java.util.Objects`                                        |
| +1100.0% |   +11 |  <0.1% → 0.2% |    1 → 12 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region`            | `libjvm.dylib`                                             |
|  +800.0% |    +8 |  <0.1% → 0.2% |     1 → 9 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>`                              | `libjvm.dylib`                                             |
|      new |    +5 |   0.0% → 0.1% |     0 → 5 | `void HeapRegion::apply_to_marked_objects<G1FullGCPrepareTask::G1PrepareCompactLiveClosure>` | `libjvm.dylib`                                             |
|  +133.3% |    +4 |          0.1% |     3 → 7 | `awaitDone(int, long)`                                                                       | `java.util.concurrent.ForkJoinTask`                        |
|   +15.4% |    +4 |   0.5% → 0.6% |   26 → 30 | `__psynch_mutexwait`                                                                         | `libsystem_kernel.dylib`                                   |
|   +22.2% |    +4 |          0.4% |   18 → 22 | `hash(Object)`                                                                               | `java.util.HashMap`                                        |
|   +57.1% |    +4 |   0.1% → 0.2% |    7 → 11 | `thread_self_trap`                                                                           | `libsystem_kernel.dylib`                                   |
|  +400.0% |    +4 |  <0.1% → 0.1% |     1 → 5 | `_kernelrpc_mach_port_deallocate_trap`                                                       | `libsystem_kernel.dylib`                                   |
|  +300.0% |    +3 |  <0.1% → 0.1% |     1 → 4 | `arrayof_oop_disjoint_arraycopy`                                                             | `<unknown>`                                                |
|  +150.0% |    +3 |  <0.1% → 0.1% |     2 → 5 | `resource_allocate_bytes`                                                                    | `libjvm.dylib`                                             |
|   +16.7% |    +3 |          0.4% |   18 → 21 | `RegisterMap::RegisterMap`                                                                   | `libjvm.dylib`                                             |
|  +100.0% |    +3 |          0.1% |     3 → 6 | `ObjArrayAllocator::initialize`                                                              | `libjvm.dylib`                                             |
|  +300.0% |    +3 |  <0.1% → 0.1% |     1 → 4 | `newLength(int, int, int)`                                                                   | `jdk.internal.util.ArraysSupport`                          |

##### Ours

|  Change | Delta |            % |   Samples | Function                            | Location                                                               |
| ------: | ----: | -----------: | --------: | ----------------------------------- | ---------------------------------------------------------------------- |
|  +47.9% |  +198 | 8.2% → 12.5% | 413 → 611 | `findNearestCentroid()`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  +19.6% |   +22 |  2.2% → 2.7% | 112 → 134 | `collectClusters(int[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|     new |    +2 | 0.0% → <0.1% |     0 → 2 | `accept(Object, Object)`            | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186d88` |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `combineResults(Object, Object)`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `compute()`                         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `lambda$run$0(int, List, int)`      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `apply(Object, Object)`             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186fd0` |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `computeDirectly()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| +100.0% |    +1 |        <0.1% |     1 → 2 | `createSubtask(int, int)`           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `combineResults(Object, Object)`    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `div(double[], int)`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `<init>(JavaKMeans, Map)`           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |

##### Native

|   Change | Delta |             % |   Samples | Function                                                                                     | Location                   |
| -------: | ----: | ------------: | --------: | -------------------------------------------------------------------------------------------- | -------------------------- |
|   +15.9% |   +91 | 11.4% → 13.6% | 573 → 664 | `__psynch_cvwait`                                                                            | `libsystem_kernel.dylib`   |
|    +6.8% |   +13 |   3.8% → 4.2% | 192 → 205 | `forward_copy_longs`                                                                         | `<unknown>`                |
| +1100.0% |   +11 |  <0.1% → 0.2% |    1 → 12 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region`            | `libjvm.dylib`             |
|  +800.0% |    +8 |  <0.1% → 0.2% |     1 → 9 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>`                              | `libjvm.dylib`             |
|      new |    +5 |   0.0% → 0.1% |     0 → 5 | `void HeapRegion::apply_to_marked_objects<G1FullGCPrepareTask::G1PrepareCompactLiveClosure>` | `libjvm.dylib`             |
|   +15.4% |    +4 |   0.5% → 0.6% |   26 → 30 | `__psynch_mutexwait`                                                                         | `libsystem_kernel.dylib`   |
|   +57.1% |    +4 |   0.1% → 0.2% |    7 → 11 | `thread_self_trap`                                                                           | `libsystem_kernel.dylib`   |
|  +400.0% |    +4 |  <0.1% → 0.1% |     1 → 5 | `_kernelrpc_mach_port_deallocate_trap`                                                       | `libsystem_kernel.dylib`   |
|  +300.0% |    +3 |  <0.1% → 0.1% |     1 → 4 | `arrayof_oop_disjoint_arraycopy`                                                             | `<unknown>`                |
|  +150.0% |    +3 |  <0.1% → 0.1% |     2 → 5 | `resource_allocate_bytes`                                                                    | `libjvm.dylib`             |
|   +16.7% |    +3 |          0.4% |   18 → 21 | `RegisterMap::RegisterMap`                                                                   | `libjvm.dylib`             |
|  +100.0% |    +3 |          0.1% |     3 → 6 | `ObjArrayAllocator::initialize`                                                              | `libjvm.dylib`             |
|   +20.0% |    +2 |          0.2% |   10 → 12 | `_platform_memset`                                                                           | `libsystem_platform.dylib` |
|      new |    +2 |  0.0% → <0.1% |     0 → 2 | `HierarchyVisitor<FindMethodsByErasedSig>::run`                                              | `libjvm.dylib`             |
|   +50.0% |    +2 |          0.1% |     4 → 6 | `G1ParScanThreadState::do_copy_to_survivor_space`                                            | `libjvm.dylib`             |
|      new |    +2 |  0.0% → <0.1% |     0 → 2 | `jvmti_GetCurrentThread`                                                                     | `libjvm.dylib`             |
|   +22.2% |    +2 |          0.2% |    9 → 11 | `_platform_memmove`                                                                          | `libsystem_platform.dylib` |
|      new |    +2 |  0.0% → <0.1% |     0 → 2 | `G1BarrierSet::write_ref_array_work`                                                         | `libjvm.dylib`             |
|      new |    +2 |  0.0% → <0.1% |     0 → 2 | `CardTableBarrierSet::on_slowpath_allocation_exit`                                           | `libjvm.dylib`             |
|      new |    +2 |  0.0% → <0.1% |     0 → 2 | `JavaThread::threadObj`                                                                      | `libjvm.dylib`             |

##### Standard library

|  Change | Delta |            % |  Samples | Function                                           | Location                                      |
| ------: | ----: | -----------: | -------: | -------------------------------------------------- | --------------------------------------------- |
|  +84.0% |   +79 |  1.9% → 3.5% | 94 → 173 | `doubleValue()`                                    | `java.lang.Double`                            |
| +405.6% |   +73 |  0.4% → 1.9% |  18 → 91 | `grow(int)`                                        | `java.util.ArrayList`                         |
|  +35.5% |   +11 |  0.6% → 0.9% |  31 → 42 | `checkIndex(int, int)`                             | `java.util.Objects`                           |
| +133.3% |    +4 |         0.1% |    3 → 7 | `awaitDone(int, long)`                             | `java.util.concurrent.ForkJoinTask`           |
|  +22.2% |    +4 |         0.4% |  18 → 22 | `hash(Object)`                                     | `java.util.HashMap`                           |
| +300.0% |    +3 | <0.1% → 0.1% |    1 → 4 | `newLength(int, int, int)`                         | `jdk.internal.util.ArraysSupport`             |
|     new |    +2 | 0.0% → <0.1% |    0 → 2 | `unpark(Thread)`                                   | `java.util.concurrent.locks.LockSupport`      |
|     new |    +2 | 0.0% → <0.1% |    0 → 2 | `signalWaiters()`                                  | `java.util.concurrent.ForkJoinTask`           |
|     new |    +2 | 0.0% → <0.1% |    0 → 2 | `putMapEntries(Map, boolean)`                      | `java.util.HashMap`                           |
| +200.0% |    +2 | <0.1% → 0.1% |    1 → 3 | `casSlotToNull(ForkJoinTask[], int, ForkJoinTask)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|     new |    +2 | 0.0% → <0.1% |    0 → 2 | `<init>(Spliterator, int, boolean)`                | `java.util.stream.AbstractPipeline`           |
|     new |    +1 | 0.0% → <0.1% |    0 → 1 | `exec()`                                           | `java.util.concurrent.RecursiveTask`          |
|     new |    +1 | 0.0% → <0.1% |    0 → 1 | `join()`                                           | `java.util.concurrent.ForkJoinTask`           |
|     new |    +1 | 0.0% → <0.1% |    0 → 1 | `toArray()`                                        | `java.util.ArrayList`                         |
|  +14.3% |    +1 |  0.1% → 0.2% |    7 → 8 | `merge(Object, Object, BiFunction)`                | `java.util.HashMap`                           |
|  +50.0% |    +1 | <0.1% → 0.1% |    2 → 3 | `awaitWork(ForkJoinPool$WorkQueue)`                | `java.util.concurrent.ForkJoinPool`           |
|     new |    +1 | 0.0% → <0.1% |    0 → 1 | `addAll(Collection)`                               | `java.util.ArrayList`                         |
|  +33.3% |    +1 |         0.1% |    3 → 4 | `getRawResult()`                                   | `java.util.concurrent.RecursiveTask`          |
|  +25.0% |    +1 |         0.1% |    4 → 5 | `putVal(int, Object, Object, boolean, boolean)`    | `java.util.HashMap`                           |
|     new |    +1 | 0.0% → <0.1% |    0 → 1 | `read(InputStream, String)`                        | `java.util.jar.Manifest`                      |

##### JIT

| Change | Delta |    % | Samples | Function      | Location    |
| -----: | ----: | ---: | ------: | ------------- | ----------- |
|  +3.4% |    +2 | 1.2% | 59 → 61 | `zero_blocks` | `<unknown>` |

##### Compiler

|  Change | Delta |            % | Samples | Function                                 | Location       |
| ------: | ----: | -----------: | ------: | ---------------------------------------- | -------------- |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `Node_Backward_Iterator::next`           | `libjvm.dylib` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `PhaseIterGVN::PhaseIterGVN`             | `libjvm.dylib` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `Scheduling::anti_do_def`                | `libjvm.dylib` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `Compile::identify_useful_nodes`         | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `CompileBroker::compiler_thread_loop`    | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `LinearScan::assign_reg_num`             | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `IntervalWalker::walk_to`                | `libjvm.dylib` |
| +100.0% |    +1 |        <0.1% |   1 → 2 | `PhaseChaitin::elide_copy`               | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseCCP::push_child_nodes_to_worklist` | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `Matcher::match_tree`                    | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `Matcher::xform`                         | `libjvm.dylib` |
| +100.0% |    +1 |        <0.1% |   1 → 2 | `PhaseIdealLoop::build_loop_late`        | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `Node_Array::insert`                     | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `MemNode::can_see_stored_value`          | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `MethodLiveness::BasicBlock::BasicBlock` | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `LIR_Assembler::receiverOpr`             | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `ciObjectFactory::ciObjectFactory`       | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `ciField::ciField`                       | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseIterGVN::add_users_to_worklist`    | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseChaitin::Simplify`                 | `libjvm.dylib` |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |     Samples | Function                                                                                             | Location                                                   |
| ------: | ----: | ------------: | ----------: | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
|  -25.0% |  -231 | 18.5% → 14.2% |   925 → 694 | `distance(Double[], Double[])`                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -21.4% |  -223 | 20.8% → 16.7% | 1,040 → 817 | `accumulate(Double[], double[])`                                                                     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   -9.7% |   -45 |   9.2% → 8.5% |   463 → 418 | `vectorSum()`                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -11.9% |   -20 |   3.4% → 3.0% |   168 → 148 | `elementData(int)`                                                                                   | `java.util.ArrayList`                                      |
|  -12.4% |   -19 |   3.1% → 2.7% |   153 → 134 | `computeIfAbsent(Object, Function)`                                                                  | `java.util.HashMap`                                        |
|  -45.2% |   -19 |   0.8% → 0.5% |     42 → 23 | `G1FullGCMarker::mark_object`                                                                        | `libjvm.dylib`                                             |
|  -21.0% |   -13 |   1.2% → 1.0% |     62 → 49 | `add(Object, Object[], int)`                                                                         | `java.util.ArrayList`                                      |
|  -48.0% |   -12 |   0.5% → 0.3% |     25 → 13 | `pthread_jit_write_protect_np`                                                                       | `libsystem_pthread.dylib`                                  |
|  -42.3% |   -11 |   0.5% → 0.3% |     26 → 15 | `_platform_bzero`                                                                                    | `libsystem_platform.dylib`                                 |
| removed |    -7 |   0.1% → 0.0% |       7 → 0 | `grow()`                                                                                             | `java.util.ArrayList`                                      |
|  -22.2% |    -6 |   0.5% → 0.4% |     27 → 21 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`                                            | `java.util.concurrent.ForkJoinPool`                        |
|  -30.0% |    -6 |   0.4% → 0.3% |     20 → 14 | `arrayof_jint_disjoint_arraycopy`                                                                    | `<unknown>`                                                |
|  -83.3% |    -5 |  0.1% → <0.1% |       6 → 1 | `runWorker(ForkJoinPool$WorkQueue)`                                                                  | `java.util.concurrent.ForkJoinPool`                        |
|  -45.5% |    -5 |   0.2% → 0.1% |      11 → 6 | `ScopeDesc::decode_body`                                                                             | `libjvm.dylib`                                             |
| removed |    -5 |   0.1% → 0.0% |       5 → 0 | `G1FullGCCompactTask::copy_object_to_new_location`                                                   | `libjvm.dylib`                                             |
|  -62.5% |    -5 |   0.2% → 0.1% |       8 → 3 | `void OopOopIterateDispatch<G1MarkAndPushClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `libjvm.dylib`                                             |
|  -66.7% |    -4 |  0.1% → <0.1% |       6 → 2 | `G1ParScanThreadState::trim_queue_to_threshold`                                                      | `libjvm.dylib`                                             |
| removed |    -4 |   0.1% → 0.0% |       4 → 0 | `frame::sender_for_compiled_frame`                                                                   | `libjvm.dylib`                                             |
|  -36.4% |    -4 |   0.2% → 0.1% |      11 → 7 | `tlv_get_addr`                                                                                       | `libdyld.dylib`                                            |
| removed |    -4 |   0.1% → 0.0% |       4 → 0 | `add(double[], double[])`                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

##### Ours

|  Change | Delta |             % |     Samples | Function                                         | Location                                                   |
| ------: | ----: | ------------: | ----------: | ------------------------------------------------ | ---------------------------------------------------------- |
|  -25.0% |  -231 | 18.5% → 14.2% |   925 → 694 | `distance(Double[], Double[])`                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -21.4% |  -223 | 20.8% → 16.7% | 1,040 → 817 | `accumulate(Double[], double[])`                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   -9.7% |   -45 |   9.2% → 8.5% |   463 → 418 | `vectorSum()`                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| removed |    -4 |   0.1% → 0.0% |       4 → 0 | `add(double[], double[])`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| removed |    -3 |   0.1% → 0.0% |       3 → 0 | `createSubtask(int, int)`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| removed |    -2 |  <0.1% → 0.0% |       2 → 0 | `computeDirectly()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| removed |    -1 |  <0.1% → 0.0% |       1 → 0 | `lambda$generateData$5(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |    -1 |  <0.1% → 0.0% |       1 → 0 | `<init>(JavaKMeans, int, int)`                   | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
|  -50.0% |    -1 |         <0.1% |       2 → 1 | `<init>(JavaKMeans, List, List, int, int)`       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |    -1 |  <0.1% → 0.0% |       1 → 0 | `lambda$collectClusters$0(Double[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |    -1 |  <0.1% → 0.0% |       1 → 0 | `<init>(JavaKMeans, List, int, int)`             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

##### Native

|  Change | Delta |            % | Samples | Function                                                                                                   | Location                   |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------------------------------------------------------------- | -------------------------- |
|  -45.2% |   -19 |  0.8% → 0.5% | 42 → 23 | `G1FullGCMarker::mark_object`                                                                              | `libjvm.dylib`             |
|  -48.0% |   -12 |  0.5% → 0.3% | 25 → 13 | `pthread_jit_write_protect_np`                                                                             | `libsystem_pthread.dylib`  |
|  -42.3% |   -11 |  0.5% → 0.3% | 26 → 15 | `_platform_bzero`                                                                                          | `libsystem_platform.dylib` |
|  -30.0% |    -6 |  0.4% → 0.3% | 20 → 14 | `arrayof_jint_disjoint_arraycopy`                                                                          | `<unknown>`                |
|  -45.5% |    -5 |  0.2% → 0.1% |  11 → 6 | `ScopeDesc::decode_body`                                                                                   | `libjvm.dylib`             |
| removed |    -5 |  0.1% → 0.0% |   5 → 0 | `G1FullGCCompactTask::copy_object_to_new_location`                                                         | `libjvm.dylib`             |
|  -62.5% |    -5 |  0.2% → 0.1% |   8 → 3 | `void OopOopIterateDispatch<G1MarkAndPushClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`       | `libjvm.dylib`             |
|  -66.7% |    -4 | 0.1% → <0.1% |   6 → 2 | `G1ParScanThreadState::trim_queue_to_threshold`                                                            | `libjvm.dylib`             |
| removed |    -4 |  0.1% → 0.0% |   4 → 0 | `frame::sender_for_compiled_frame`                                                                         | `libjvm.dylib`             |
|  -36.4% |    -4 |  0.2% → 0.1% |  11 → 7 | `tlv_get_addr`                                                                                             | `libdyld.dylib`            |
|  -50.0% |    -3 |         0.1% |   6 → 3 | `GenericTaskQueueSet<OverflowTaskQueue<ObjArrayTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>::steal_best_of_2` | `libjvm.dylib`             |
|  -75.0% |    -3 | 0.1% → <0.1% |   4 → 1 | `JavaThread::push_jni_handle_block`                                                                        | `libjvm.dylib`             |
|  -23.1% |    -3 |  0.3% → 0.2% | 13 → 10 | `semaphore_wait_trap`                                                                                      | `libsystem_kernel.dylib`   |
|  -75.0% |    -3 | 0.1% → <0.1% |   4 → 1 | `MarkBitMap::check_mark`                                                                                   | `libjvm.dylib`             |
|  -75.0% |    -3 | 0.1% → <0.1% |   4 → 1 | `_sigtramp`                                                                                                | `libsystem_platform.dylib` |
|  -75.0% |    -3 | 0.1% → <0.1% |   4 → 1 | `__mmap`                                                                                                   | `libsystem_kernel.dylib`   |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `Parker::park`                                                                                             | `libjvm.dylib`             |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `compiledVFrame::compiledVFrame`                                                                           | `libjvm.dylib`             |
|  -40.0% |    -2 |         0.1% |   5 → 3 | `vframe::java_sender`                                                                                      | `libjvm.dylib`             |
|  -50.0% |    -2 | 0.1% → <0.1% |   4 → 2 | `compiledVFrame::sender`                                                                                   | `libjvm.dylib`             |

##### Standard library

|  Change | Delta |            % |   Samples | Function                                                  | Location                                      |
| ------: | ----: | -----------: | --------: | --------------------------------------------------------- | --------------------------------------------- |
|  -11.9% |   -20 |  3.4% → 3.0% | 168 → 148 | `elementData(int)`                                        | `java.util.ArrayList`                         |
|  -12.4% |   -19 |  3.1% → 2.7% | 153 → 134 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                           |
|  -21.0% |   -13 |  1.2% → 1.0% |   62 → 49 | `add(Object, Object[], int)`                              | `java.util.ArrayList`                         |
| removed |    -7 |  0.1% → 0.0% |     7 → 0 | `grow()`                                                  | `java.util.ArrayList`                         |
|  -22.2% |    -6 |  0.5% → 0.4% |   27 → 21 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
|  -83.3% |    -5 | 0.1% → <0.1% |     6 → 1 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`           |
| removed |    -3 |  0.1% → 0.0% |     3 → 0 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`           |
| removed |    -3 |  0.1% → 0.0% |     3 → 0 | `signalWork()`                                            | `java.util.concurrent.ForkJoinPool`           |
|  -33.3% |    -2 |         0.1% |     6 → 4 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`           |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `<init>(Collection)`                                      | `java.util.ArrayList`                         |
|  -50.0% |    -2 | 0.1% → <0.1% |     4 → 2 | `getAndSetAccess(int)`                                    | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  -66.7% |    -2 | 0.1% → <0.1% |     3 → 1 | `getAndClearSlot(ForkJoinTask[], int)`                    | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `execute(int, int, Symbol, SymbolTable)`                  | `jdk.internal.org.objectweb.asm.Frame`        |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `doubleStream(Spliterator$OfDouble, boolean)`             | `java.util.stream.StreamSupport`              |
|  -50.0% |    -1 |        <0.1% |     2 → 1 | `park(boolean, long)`                                     | `jdk.internal.misc.Unsafe`                    |
|  -33.3% |    -1 | 0.1% → <0.1% |     3 → 2 | `get(int)`                                                | `java.util.ArrayList`                         |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `unpark(Object)`                                          | `jdk.internal.misc.Unsafe`                    |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `releaseAccess()`                                         | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `getNode(Object)`                                         | `java.util.HashMap`                           |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `loadedByBuiltinLoader(Class)`                            | `java.lang.invoke.LambdaProxyClassArchive`    |

##### JIT

|  Change | Delta |            % | Samples | Function                   | Location    |
| ------: | ----: | -----------: | ------: | -------------------------- | ----------- |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0xbbaa)` | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `vtable stub`              | `<unknown>` |

##### Compiler

|  Change | Delta |            % | Samples | Function                                                           | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------ | -------------- |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `PhaseLive::compute`                                               | `libjvm.dylib` |
|  -66.7% |    -2 | 0.1% → <0.1% |   3 → 1 | `PhaseChaitin::build_ifg_physical`                                 | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `MachNode::rematerialize`                                          | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `Node::pinned`                                                     | `libjvm.dylib` |
|  -50.0% |    -1 |        <0.1% |   2 → 1 | `LIR_OpVisitState::visit`                                          | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `CodeSection::relocate`                                            | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `LIR_List::jump`                                                   | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `DebugInformationRecorder::create_monitor_values`                  | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `LinearScanWalker::spill_block_inactive_fixed`                     | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `LinearScanWalker::alloc_locked_reg`                               | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `DebugInformationRecorder::serialize_scope_values`                 | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `LinearScan::build_intervals`                                      | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhiNode::pinned`                                                  | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `RegMask::is_aligned_pairs`                                        | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Compile::remove_speculative_types`                                | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseCCP::push_more_uses`                                         | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `IndexSet::alloc_block_containing`                                 | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `branchConUNode::oper_input_base`                                  | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseChaitin::remove_bound_register_from_interfering_live_ranges` | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseIdealLoop::split_if_with_blocks_post`                        | `libjvm.dylib` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|   Change | Delta |             % |       Samples | Function                                                  | Location                                                   |
| -------: | ----: | ------------: | ------------: | --------------------------------------------------------- | ---------------------------------------------------------- |
|   +15.9% |   +91 | 11.4% → 13.6% |     573 → 664 | `__psynch_cvwait`                                         | `libsystem_kernel.dylib`                                   |
|   +16.0% |   +91 | 11.4% → 13.5% |     569 → 660 | `park()`                                                  | `java.util.concurrent.locks.LockSupport`                   |
|   +15.9% |   +89 | 11.2% → 13.3% |     560 → 649 | `Parker::park`                                            | `libjvm.dylib`                                             |
|   +15.2% |   +89 | 11.7% → 13.8% |     585 → 674 | `park(boolean, long)`                                     | `jdk.internal.misc.Unsafe`                                 |
|   +15.5% |   +88 | 11.3% → 13.4% |     566 → 654 | `Unsafe_Park`                                             | `libjvm.dylib`                                             |
|   +15.1% |   +88 | 11.6% → 13.7% |     582 → 670 | `LockTracer::UnsafeParkHook`                              | `libasyncProfiler.dylib`                                   |
|    +4.5% |   +87 | 38.2% → 41.0% | 1,916 → 2,003 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   +84.0% |   +79 |   1.9% → 3.5% |      94 → 173 | `doubleValue()`                                           | `java.lang.Double`                                         |
|  +100.0% |   +77 |   1.5% → 3.1% |      77 → 154 | `grow()`                                                  | `java.util.ArrayList`                                      |
|   +32.6% |   +72 |   4.4% → 6.0% |     221 → 293 | `awaitWork(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                        |
|   +50.7% |   +69 |   2.7% → 4.2% |     136 → 205 | `grow(int)`                                               | `java.util.ArrayList`                                      |
|   +46.0% |   +64 |   2.8% → 4.2% |     139 → 203 | `add(Object, Object[], int)`                              | `java.util.ArrayList`                                      |
|   +46.0% |   +64 |   2.8% → 4.2% |     139 → 203 | `add(Object)`                                             | `java.util.ArrayList`                                      |
|    +9.2% |   +47 | 10.2% → 11.4% |     511 → 558 | `collectClusters(int[])`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|    +2.8% |   +39 | 28.0% → 29.5% | 1,405 → 1,444 | `findNearestCentroid()`                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|      new |   +33 |   0.0% → 0.7% |        0 → 33 | `invokeStatic(Object, Object)`                            | `java.lang.invoke.LambdaForm$DMH.0x000000c801004800`       |
|      new |   +33 |   0.0% → 0.7% |        0 → 33 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x000000c801009800`        |
| +1700.0% |   +17 |  <0.1% → 0.4% |        1 → 18 | `HeapRegionManager::par_iterate`                          | `libjvm.dylib`                                             |
|    +1.5% |   +16 | 21.6% → 22.5% | 1,084 → 1,100 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                        |
|    +6.8% |   +13 |   3.8% → 4.2% |     192 → 205 | `forward_copy_longs`                                      | `<unknown>`                                                |

##### Ours

|  Change | Delta |             % |       Samples | Function                                                                                                               | Location                                                               |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|   +4.5% |   +87 | 38.2% → 41.0% | 1,916 → 2,003 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   +9.2% |   +47 | 10.2% → 11.4% |     511 → 558 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   +2.8% |   +39 | 28.0% → 29.5% | 1,405 → 1,444 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| +400.0% |    +4 |  <0.1% → 0.1% |         1 → 5 | `boxed(double[])`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| +200.0% |    +2 |  <0.1% → 0.1% |         1 → 3 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| +200.0% |    +2 |  <0.1% → 0.1% |         1 → 3 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  +11.1% |    +2 |          0.4% |       18 → 20 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +25.0% |    +2 |          0.2% |        8 → 10 | `lambda$generateData$5(int, int, Random[], int)`                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +25.0% |    +2 |          0.2% |        8 → 10 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c8011258d8` |
|  +25.0% |    +2 |          0.2% |        8 → 10 | `generateData(int, int, int)`                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +25.0% |    +2 |          0.2% |        8 → 10 | `setUpBeforeAll(BenchmarkContext)`                                                                                     | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  +15.4% |    +2 |          0.3% |       13 → 15 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
|   +2.6% |    +1 |          0.8% |       38 → 39 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                        |
|   +2.6% |    +1 |          0.8% |       38 → 39 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                        |
|   +2.7% |    +1 |   0.7% → 0.8% |       37 → 38 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                        |
|  +50.0% |    +1 |  <0.1% → 0.1% |         2 → 3 | `createParser(Map)`                                                                                                    | `org.renaissance.harness.ConfigParser`                                 |
|  +50.0% |    +1 |  <0.1% → 0.1% |         2 → 3 | `<init>(Map)`                                                                                                          | `org.renaissance.harness.ConfigParser`                                 |
|   +5.9% |    +1 |   0.3% → 0.4% |       17 → 18 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|   +5.9% |    +1 |   0.3% → 0.4% |       17 → 18 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000c80111f208` |
|     new |    +1 |  0.0% → <0.1% |         0 → 1 | `loadProperties(URL)`                                                                                                  | `org.renaissance.core.ResourceUtils`                                   |

##### Native

|   Change | Delta |             % |   Samples | Function                                                                          | Location                 |
| -------: | ----: | ------------: | --------: | --------------------------------------------------------------------------------- | ------------------------ |
|   +15.9% |   +91 | 11.4% → 13.6% | 573 → 664 | `__psynch_cvwait`                                                                 | `libsystem_kernel.dylib` |
|   +15.9% |   +89 | 11.2% → 13.3% | 560 → 649 | `Parker::park`                                                                    | `libjvm.dylib`           |
|   +15.5% |   +88 | 11.3% → 13.4% | 566 → 654 | `Unsafe_Park`                                                                     | `libjvm.dylib`           |
|   +15.1% |   +88 | 11.6% → 13.7% | 582 → 670 | `LockTracer::UnsafeParkHook`                                                      | `libasyncProfiler.dylib` |
| +1700.0% |   +17 |  <0.1% → 0.4% |    1 → 18 | `HeapRegionManager::par_iterate`                                                  | `libjvm.dylib`           |
|    +6.8% |   +13 |   3.8% → 4.2% | 192 → 205 | `forward_copy_longs`                                                              | `<unknown>`              |
|   +28.6% |   +12 |   0.8% → 1.1% |   42 → 54 | `arrayof_oop_disjoint_arraycopy`                                                  | `<unknown>`              |
|  +157.1% |   +11 |   0.1% → 0.4% |    7 → 18 | `TaskTerminator::offer_termination`                                               | `libjvm.dylib`           |
| +1100.0% |   +11 |  <0.1% → 0.2% |    1 → 12 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region` | `libjvm.dylib`           |
| +1100.0% |   +11 |  <0.1% → 0.2% |    1 → 12 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::do_heap_region`               | `libjvm.dylib`           |
| +1100.0% |   +11 |  <0.1% → 0.2% |    1 → 12 | `G1FullGCResetMetadataTask::work`                                                 | `libjvm.dylib`           |
|   +43.5% |   +10 |   0.5% → 0.7% |   23 → 33 | `G1EvacuateRegionsBaseTask::work`                                                 | `libjvm.dylib`           |
|      new |   +10 |   0.0% → 0.2% |    0 → 10 | `SharedRuntime::find_callee_info_helper`                                          | `libjvm.dylib`           |
|      new |   +10 |   0.0% → 0.2% |    0 → 10 | `SharedRuntime::resolve_sub_helper`                                               | `libjvm.dylib`           |
|      new |   +10 |   0.0% → 0.2% |    0 → 10 | `SharedRuntime::resolve_helper`                                                   | `libjvm.dylib`           |
|  +128.6% |    +9 |   0.1% → 0.3% |    7 → 16 | `G1ParEvacuateFollowersClosure::offer_termination`                                | `libjvm.dylib`           |
|  +400.0% |    +8 |  <0.1% → 0.2% |    2 → 10 | `G1EvacuateRegionsTask::scan_roots`                                               | `libjvm.dylib`           |
|      new |    +8 |   0.0% → 0.2% |     0 → 8 | `DefaultICProtectionBehaviour::lock`                                              | `libjvm.dylib`           |
|  +700.0% |    +7 |  <0.1% → 0.2% |     1 → 8 | `G1ScanHRForRegionClosure::do_heap_region`                                        | `libjvm.dylib`           |
|  +700.0% |    +7 |  <0.1% → 0.2% |     1 → 8 | `G1RemSet::scan_heap_roots`                                                       | `libjvm.dylib`           |

##### Standard library

|  Change | Delta |             % |       Samples | Function                                                             | Location                                             |
| ------: | ----: | ------------: | ------------: | -------------------------------------------------------------------- | ---------------------------------------------------- |
|  +16.0% |   +91 | 11.4% → 13.5% |     569 → 660 | `park()`                                                             | `java.util.concurrent.locks.LockSupport`             |
|  +15.2% |   +89 | 11.7% → 13.8% |     585 → 674 | `park(boolean, long)`                                                | `jdk.internal.misc.Unsafe`                           |
|  +84.0% |   +79 |   1.9% → 3.5% |      94 → 173 | `doubleValue()`                                                      | `java.lang.Double`                                   |
| +100.0% |   +77 |   1.5% → 3.1% |      77 → 154 | `grow()`                                                             | `java.util.ArrayList`                                |
|  +32.6% |   +72 |   4.4% → 6.0% |     221 → 293 | `awaitWork(ForkJoinPool$WorkQueue)`                                  | `java.util.concurrent.ForkJoinPool`                  |
|  +50.7% |   +69 |   2.7% → 4.2% |     136 → 205 | `grow(int)`                                                          | `java.util.ArrayList`                                |
|  +46.0% |   +64 |   2.8% → 4.2% |     139 → 203 | `add(Object, Object[], int)`                                         | `java.util.ArrayList`                                |
|  +46.0% |   +64 |   2.8% → 4.2% |     139 → 203 | `add(Object)`                                                        | `java.util.ArrayList`                                |
|     new |   +33 |   0.0% → 0.7% |        0 → 33 | `invokeStatic(Object, Object)`                                       | `java.lang.invoke.LambdaForm$DMH.0x000000c801004800` |
|     new |   +33 |   0.0% → 0.7% |        0 → 33 | `invoke(Object, Object, Object)`                                     | `java.lang.invoke.LambdaForm$MH.0x000000c801009800`  |
|   +1.5% |   +16 | 21.6% → 22.5% | 1,084 → 1,100 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`            | `java.util.concurrent.ForkJoinPool`                  |
|  +35.5% |   +11 |   0.6% → 0.9% |       31 → 42 | `checkIndex(int, int)`                                               | `java.util.Objects`                                  |
|     new |    +5 |   0.0% → 0.1% |         0 → 5 | `invokeExact_MT(Object, Object, Object, Object, Object, Object)`     | `java.lang.invoke.LambdaForm$MH.0x000000c801098000`  |
| +400.0% |    +4 |  <0.1% → 0.1% |         1 → 5 | `generateInnerClass()`                                               | `java.lang.invoke.InnerClassLambdaMetafactory`       |
|  +50.0% |    +4 |          0.2% |        8 → 12 | `copyInto(Sink, Spliterator)`                                        | `java.util.stream.AbstractPipeline`                  |
|  +50.0% |    +4 |          0.2% |        8 → 12 | `wrapAndCopyInto(Sink, Spliterator)`                                 | `java.util.stream.AbstractPipeline`                  |
| +150.0% |    +3 |  <0.1% → 0.1% |         2 → 5 | `spinInnerClass()`                                                   | `java.lang.invoke.InnerClassLambdaMetafactory`       |
| +150.0% |    +3 |  <0.1% → 0.1% |         2 → 5 | `altMetafactory(MethodHandles$Lookup, String, MethodType, Object[])` | `java.lang.invoke.LambdaMetafactory`                 |
| +150.0% |    +3 |  <0.1% → 0.1% |         2 → 5 | `invokeStatic(Object, Object, Object, Object, Object)`               | `java.lang.invoke.DirectMethodHandle$Holder`         |
| +150.0% |    +3 |  <0.1% → 0.1% |         2 → 5 | `delegate(Object, Object, Object, Object, Object)`                   | `java.lang.invoke.DelegatingMethodHandle$Holder`     |

##### JIT

| Change | Delta |    % | Samples | Function      | Location    |
| -----: | ----: | ---: | ------: | ------------- | ----------- |
|  +3.4% |    +2 | 1.2% | 59 → 61 | `zero_blocks` | `<unknown>` |

##### Compiler

|  Change | Delta |            % | Samples | Function                                    | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------- | -------------- |
| +250.0% |    +5 | <0.1% → 0.1% |   2 → 7 | `PhaseIterGVN::transform_old`               | `libjvm.dylib` |
| +250.0% |    +5 | <0.1% → 0.1% |   2 → 7 | `PhaseIterGVN::optimize`                    | `libjvm.dylib` |
| +133.3% |    +4 |         0.1% |   3 → 7 | `PhaseCFG::global_code_motion`              | `libjvm.dylib` |
| +133.3% |    +4 |         0.1% |   3 → 7 | `PhaseCFG::do_global_code_motion`           | `libjvm.dylib` |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `GraphBuilder::iterate_all_blocks`          | `libjvm.dylib` |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `GraphBuilder::GraphBuilder`                | `libjvm.dylib` |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `PhaseChaitin::post_allocate_copy_removal`  | `libjvm.dylib` |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `Node_Backward_Iterator::next`              | `libjvm.dylib` |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `PhaseChaitin::gather_lrg_masks`            | `libjvm.dylib` |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib` |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `BlockList::iterate_forward`                | `libjvm.dylib` |
|   +3.9% |    +2 |  1.0% → 1.1% | 51 → 53 | `Compile::Compile`                          | `libjvm.dylib` |
|   +3.9% |    +2 |  1.0% → 1.1% | 51 → 53 | `C2Compiler::compile_method`                | `libjvm.dylib` |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `PhaseChaitin::elide_copy`                  | `libjvm.dylib` |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `PhaseGVN::transform_no_reclaim`            | `libjvm.dylib` |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `PhaseCFG::schedule_late`                   | `libjvm.dylib` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `PhaseCFG::schedule_local`                  | `libjvm.dylib` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `GraphKit::uncommon_trap`                   | `libjvm.dylib` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `PhaseChaitin::Simplify`                    | `libjvm.dylib` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `TypeInstPtr::xmeet_helper`                 | `libjvm.dylib` |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |             % |       Samples | Function                                             | Location                                                   |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------- | ---------------------------------------------------------- |
|  -15.5% |  -259 | 33.4% → 29.0% | 1,675 → 1,416 | `computeDirectly()`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -15.3% |  -256 | 33.4% → 29.0% | 1,672 → 1,416 | `vectorSum()`                                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -17.6% |  -198 | 22.5% → 19.0% |   1,126 → 928 | `accumulate(Double[], double[])`                     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   -4.0% |  -180 | 89.8% → 88.4% | 4,502 → 4,322 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                        |
|   -4.0% |  -180 | 89.8% → 88.4% | 4,502 → 4,322 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
|   -4.0% |  -179 | 90.0% → 88.6% | 4,510 → 4,331 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                        |
|  -19.1% |  -179 | 18.7% → 15.5% |     937 → 758 | `distance(Double[], Double[])`                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -4.0% |  -177 | 89.3% → 87.9% | 4,473 → 4,296 | `compute()`                                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
|   -3.9% |  -176 | 89.3% → 87.9% | 4,473 → 4,297 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                       |
|   -3.9% |  -168 | 86.0% → 84.6% | 4,307 → 4,139 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                        |
|   -3.9% |  -167 | 86.0% → 84.7% | 4,307 → 4,140 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                        |
|   -3.8% |  -156 | 82.4% → 81.2% | 4,128 → 3,972 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
|  -17.2% |  -131 | 15.2% → 12.9% |     760 → 629 | `average(List)`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -16.8% |  -128 | 15.2% → 13.0% |     762 → 634 | `computeClusterAverages()`                           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -16.8% |  -128 | 15.2% → 13.0% |     762 → 634 | `computeDirectly()`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -11.6% |  -124 | 21.3% → 19.3% |   1,069 → 945 | `invoke()`                                           | `java.util.concurrent.ForkJoinTask`                        |
|   -2.4% |  -112 | 94.5% → 94.6% | 4,737 → 4,625 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                        |
|   -2.4% |  -112 |         94.6% | 4,738 → 4,626 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`                |
| removed |   -33 |   0.7% → 0.0% |        33 → 0 | `invokeStatic(Object, Object)`                       | `java.lang.invoke.LambdaForm$DMH.0x0000007001004800`       |
| removed |   -33 |   0.7% → 0.0% |        33 → 0 | `invoke(Object, Object, Object)`                     | `java.lang.invoke.LambdaForm$MH.0x0000007001009800`        |

##### Ours

| Change | Delta |             % |       Samples | Function                            | Location                                                               |
| -----: | ----: | ------------: | ------------: | ----------------------------------- | ---------------------------------------------------------------------- |
| -15.5% |  -259 | 33.4% → 29.0% | 1,675 → 1,416 | `computeDirectly()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| -15.3% |  -256 | 33.4% → 29.0% | 1,672 → 1,416 | `vectorSum()`                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| -17.6% |  -198 | 22.5% → 19.0% |   1,126 → 928 | `accumulate(Double[], double[])`    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| -19.1% |  -179 | 18.7% → 15.5% |     937 → 758 | `distance(Double[], Double[])`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -4.0% |  -177 | 89.3% → 87.9% | 4,473 → 4,296 | `compute()`                         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| -17.2% |  -131 | 15.2% → 12.9% |     760 → 629 | `average(List)`                     | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| -16.8% |  -128 | 15.2% → 13.0% |     762 → 634 | `computeClusterAverages()`          | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| -16.8% |  -128 | 15.2% → 13.0% |     762 → 634 | `computeDirectly()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -5.4% |   -22 |   8.2% → 7.9% |     410 → 388 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -5.0% |   -21 |   8.4% → 8.2% |     421 → 400 | `combineResults(Map, Map)`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -4.8% |   -20 |   8.4% → 8.2% |     421 → 401 | `combineResults(Object, Object)`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -4.9% |   -20 |   8.2% → 8.0% |     410 → 390 | `accept(Object, Object)`            | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186d88` |
|  -4.5% |   -19 |   8.4% → 8.2% |     422 → 403 | `merge(Map, Map)`                   | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -4.8% |   -15 |   6.3% → 6.1% |     315 → 300 | `lambda$merge$6(List, List)`        | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -4.4% |   -14 |   6.3% → 6.2% |     315 → 301 | `apply(Object, Object)`             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186fd0` |
|  -1.2% |    -6 |   9.7% → 9.9% |     488 → 482 | `lambda$run$0(int, List, int)`      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -1.2% |    -6 |   9.7% → 9.9% |     488 → 482 | `call()`                            | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801183d68` |
| -75.0% |    -3 |  0.1% → <0.1% |         4 → 1 | `createSubtask(int, int)`           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| -50.0% |    -3 |          0.1% |         6 → 3 | `createSubtask(int, int)`           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| -75.0% |    -3 |  0.1% → <0.1% |         4 → 1 | `add(double[], double[])`           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |

##### Native

|  Change | Delta |           % |   Samples | Function                                                        | Location                   |
| ------: | ----: | ----------: | --------: | --------------------------------------------------------------- | -------------------------- |
|  -18.8% |   -31 | 3.3% → 2.7% | 165 → 134 | `InstanceKlass::allocate_objArray`                              | `libjvm.dylib`             |
|  -14.8% |   -25 | 3.4% → 2.9% | 169 → 144 | `OptoRuntime::new_array_C`                                      | `libjvm.dylib`             |
|  -14.6% |   -25 | 3.4% → 3.0% | 171 → 146 | `_new_array_Java`                                               | `<unknown>`                |
|  -14.5% |   -24 | 3.3% → 2.9% | 166 → 142 | `CollectedHeap::array_allocate`                                 | `libjvm.dylib`             |
|  -26.7% |   -23 | 1.7% → 1.3% |   86 → 63 | `G1FullGCMarkTask::work`                                        | `libjvm.dylib`             |
|  -25.9% |   -22 | 1.7% → 1.3% |   85 → 63 | `G1FullGCMarker::complete_marking`                              | `libjvm.dylib`             |
|  -12.4% |   -21 | 3.4% → 3.0% | 170 → 149 | `MemAllocator::allocate`                                        | `libjvm.dylib`             |
|  -40.0% |   -20 | 1.0% → 0.6% |   50 → 30 | `G1FullGCMarker::mark_object`                                   | `libjvm.dylib`             |
|  -29.4% |   -15 | 1.0% → 0.7% |   51 → 36 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` | `libjvm.dylib`             |
|  -23.2% |   -13 | 1.1% → 0.9% |   56 → 43 | `G1FullGCMarker::follow_marking_stacks`                         | `libjvm.dylib`             |
|  -48.0% |   -12 | 0.5% → 0.3% |   25 → 13 | `pthread_jit_write_protect_np`                                  | `libsystem_pthread.dylib`  |
| removed |   -12 | 0.2% → 0.0% |    12 → 0 | `JVM_IHashCode`                                                 | `libjvm.dylib`             |
|  -42.3% |   -11 | 0.5% → 0.3% |   26 → 15 | `_platform_bzero`                                               | `libsystem_platform.dylib` |
|   -8.2% |   -10 | 2.4% → 2.3% | 122 → 112 | `MemAllocator::Allocation::notify_allocation_jvmti_sampler`     | `libjvm.dylib`             |
|  -61.5% |    -8 | 0.3% → 0.1% |    13 → 5 | `ScopeDesc::sender`                                             | `libjvm.dylib`             |
|   -3.5% |    -8 |        4.5% | 228 → 220 | `_pthread_start`                                                | `libsystem_pthread.dylib`  |
|   -3.5% |    -8 |        4.5% | 228 → 220 | `thread_start`                                                  | `libsystem_pthread.dylib`  |
|  -72.7% |    -8 | 0.2% → 0.1% |    11 → 3 | `G1ParScanThreadState::steal_and_trim_queue`                    | `libjvm.dylib`             |
|   -3.5% |    -8 |        4.5% | 227 → 219 | `Thread::call_run`                                              | `libjvm.dylib`             |
|   -3.5% |    -8 |        4.5% | 227 → 219 | `thread_native_entry`                                           | `libjvm.dylib`             |

##### Standard library

|  Change | Delta |             % |       Samples | Function                                             | Location                                             |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------- | ---------------------------------------------------- |
|   -4.0% |  -180 | 89.8% → 88.4% | 4,502 → 4,322 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                  |
|   -4.0% |  -180 | 89.8% → 88.4% | 4,502 → 4,322 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|   -4.0% |  -179 | 90.0% → 88.6% | 4,510 → 4,331 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                  |
|   -3.9% |  -176 | 89.3% → 87.9% | 4,473 → 4,297 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                 |
|   -3.9% |  -168 | 86.0% → 84.6% | 4,307 → 4,139 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                  |
|   -3.9% |  -167 | 86.0% → 84.7% | 4,307 → 4,140 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                  |
|   -3.8% |  -156 | 82.4% → 81.2% | 4,128 → 3,972 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|  -11.6% |  -124 | 21.3% → 19.3% |   1,069 → 945 | `invoke()`                                           | `java.util.concurrent.ForkJoinTask`                  |
|   -2.4% |  -112 | 94.5% → 94.6% | 4,737 → 4,625 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                  |
|   -2.4% |  -112 |         94.6% | 4,738 → 4,626 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`          |
| removed |   -33 |   0.7% → 0.0% |        33 → 0 | `invokeStatic(Object, Object)`                       | `java.lang.invoke.LambdaForm$DMH.0x0000007001004800` |
| removed |   -33 |   0.7% → 0.0% |        33 → 0 | `invoke(Object, Object, Object)`                     | `java.lang.invoke.LambdaForm$MH.0x0000007001009800`  |
|  -15.8% |   -29 |   3.7% → 3.2% |     184 → 155 | `computeIfAbsent(Object, Function)`                  | `java.util.HashMap`                                  |
|   -8.2% |   -24 |   5.8% → 5.5% |     291 → 267 | `copyOf(Object[], int)`                              | `java.util.Arrays`                                   |
|   -5.9% |   -24 |   8.2% → 7.9% |     409 → 385 | `merge(Object, Object, BiFunction)`                  | `java.util.HashMap`                                  |
|   -4.9% |   -20 |   8.2% → 8.0% |     411 → 391 | `forEach(BiConsumer)`                                | `java.util.HashMap`                                  |
|  -11.9% |   -20 |   3.4% → 3.0% |     168 → 148 | `elementData(int)`                                   | `java.util.ArrayList`                                |
|   -6.3% |   -13 |   4.1% → 3.9% |     205 → 192 | `toArray()`                                          | `java.util.ArrayList`                                |
| removed |   -12 |   0.2% → 0.0% |        12 → 0 | `hashCode()`                                         | `java.lang.Object`                                   |
|   -5.0% |   -10 |   4.0% → 3.9% |     202 → 192 | `get(int)`                                           | `java.util.ArrayList`                                |

##### JIT

|  Change | Delta |            % | Samples | Function                   | Location    |
| ------: | ----: | -----------: | ------: | -------------------------- | ----------- |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0xbbaa)` | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `vtable stub`              | `<unknown>` |

##### Compiler

|  Change | Delta |            % | Samples | Function                                    | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------- | -------------- |
|  -42.9% |    -6 |  0.3% → 0.2% |  14 → 8 | `PhaseIdealLoop::build_and_optimize`        | `libjvm.dylib` |
|  -42.9% |    -6 |  0.3% → 0.2% |  14 → 8 | `PhaseIdealLoop::PhaseIdealLoop`            | `libjvm.dylib` |
|  -71.4% |    -5 | 0.1% → <0.1% |   7 → 2 | `CompileBroker::compile_method_base`        | `libjvm.dylib` |
|  -50.0% |    -5 |  0.2% → 0.1% |  10 → 5 | `CompilationPolicy::event`                  | `libjvm.dylib` |
|  -83.3% |    -5 | 0.1% → <0.1% |   6 → 1 | `Matcher::match_tree`                       | `libjvm.dylib` |
|  -50.0% |    -4 |  0.2% → 0.1% |   8 → 4 | `CompileBroker::compile_method`             | `libjvm.dylib` |
|  -26.7% |    -4 |  0.3% → 0.2% | 15 → 11 | `PhaseIdealLoop::optimize`                  | `libjvm.dylib` |
|  -80.0% |    -4 | 0.1% → <0.1% |   5 → 1 | `PhaseChaitin::build_ifg_physical`          | `libjvm.dylib` |
|  -66.7% |    -4 | 0.1% → <0.1% |   6 → 2 | `Matcher::xform`                            | `libjvm.dylib` |
|  -17.6% |    -3 |         0.3% | 17 → 14 | `Compilation::compile_method`               | `libjvm.dylib` |
|  -17.6% |    -3 |         0.3% | 17 → 14 | `Compilation::Compilation`                  | `libjvm.dylib` |
|  -75.0% |    -3 | 0.1% → <0.1% |   4 → 1 | `Compilation::emit_code_body`               | `libjvm.dylib` |
|  -75.0% |    -3 | 0.1% → <0.1% |   4 → 1 | `ciObjectFactory::create_new_metadata`      | `libjvm.dylib` |
|  -75.0% |    -3 | 0.1% → <0.1% |   4 → 1 | `ciObjectFactory::get_metadata`             | `libjvm.dylib` |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `PhaseLive::compute`                        | `libjvm.dylib` |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `Matcher::Label_Root`                       | `libjvm.dylib` |
|  -42.9% |    -3 |         0.1% |   7 → 4 | `Matcher::match`                            | `libjvm.dylib` |
|  -75.0% |    -3 | 0.1% → <0.1% |   4 → 1 | `Compile::optimize_loops`                   | `libjvm.dylib` |
|  -75.0% |    -3 | 0.1% → <0.1% |   4 → 1 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib` |
|  -66.7% |    -2 | 0.1% → <0.1% |   3 → 1 | `CompileBroker::create_compile_task`        | `libjvm.dylib` |

# Allocated heap profile diff

Allocated 37.1 GiB → 36.8 GiB (-223.898 MiB, -0.6%) over 75,584 samples → 75,134 samples (514 KiB per sample).

| Category         | Change |        Delta |             % |                Size |         Samples |
| ---------------- | -----: | -----------: | ------------: | ------------------: | --------------: |
| Standard library |  -0.5% | -182.398 MiB | 93.1% → 93.2% | 34.5 GiB → 34.3 GiB | 70,375 → 70,008 |
| Ours             |  -1.6% |  -41.499 MiB |   6.9% → 6.8% |  2.54 GiB → 2.5 GiB |   5,209 → 5,126 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|  Change |          Delta |            % |               Size |   Samples | Function                                                                                             | Location                                                   |
| ------: | -------------: | -----------: | -----------------: | --------: | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
|  +12.3% |    +14.999 MiB |  0.3% → 0.4% |  122 MiB → 137 MiB | 244 → 274 | `createSubtask(int, int)`                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +10.3% |     +9.999 MiB |         0.3% | 97.5 MiB → 107 MiB | 195 → 215 | `lambda$collectClusters$0(Double[])`                                                                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +77.8% |     +6.999 MiB |        <0.1% |     9 MiB → 16 MiB |   18 → 32 | `copyOf(byte[], int)`                                                                                | `java.util.Arrays`                                         |
|  +52.4% |     +5.499 MiB |        <0.1% |  10.5 MiB → 16 MiB |   21 → 32 | `entrySet()`                                                                                         | `java.util.HashMap`                                        |
|  +30.0% |     +2.999 MiB |        <0.1% |    10 MiB → 13 MiB |   20 → 26 | `range(int, int)`                                                                                    | `java.util.stream.IntStream`                               |
|   +3.6% |     +2.499 MiB |         0.2% |  69 MiB → 71.5 MiB | 138 → 143 | `merge(Map, Map)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|   +0.7% |     +1.999 MiB |  0.7% → 0.8% |  281 MiB → 283 MiB | 563 → 567 | `newNode(int, Object, Object, HashMap$Node)`                                                         | `java.util.HashMap`                                        |
|  +15.0% |     +1.499 MiB |        <0.1% |  10 MiB → 11.5 MiB |   20 → 23 | `allocateInstance(Object)`                                                                           | `java.lang.invoke.DirectMethodHandle`                      |
|     new |     +1.499 MiB | 0.0% → <0.1% |      0 B → 1.5 MiB |     0 → 3 | `fillInStackTrace(int)`                                                                              | `java.lang.Throwable`                                      |
|   +7.1% | +1,023.998 KiB |        <0.1% |    14 MiB → 15 MiB |   23 → 25 | `copyOf(Object[], int, Class)`                                                                       | `java.util.Arrays`                                         |
| +200.0% | +1,023.998 KiB |        <0.1% |  512 KiB → 1.5 MiB |     1 → 3 | `newLinkedHashMap(int)`                                                                              | `java.util.LinkedHashMap`                                  |
|     new | +1,023.998 KiB | 0.0% → <0.1% |     0 B → 1024 KiB |     0 → 2 | `enlarge(int)`                                                                                       | `jdk.internal.org.objectweb.asm.ByteVector`                |
|   +0.7% |   +511.999 KiB |         0.2% |  75.5 MiB → 76 MiB | 151 → 152 | `add(double[], double[])`                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|     new |   +511.999 KiB | 0.0% → <0.1% |      0 B → 512 KiB |     0 → 1 | `newString(byte[], int, int)`                                                                        | `java.lang.StringLatin1`                                   |
|     new |   +511.999 KiB | 0.0% → <0.1% |      0 B → 512 KiB |     0 → 1 | `result()`                                                                                           | `scala.collection.immutable.VectorBuilder`                 |
| +100.0% |   +511.999 KiB |        <0.1% | 512 KiB → 1024 KiB |     1 → 2 | `mapToObj(DoubleFunction, int)`                                                                      | `java.util.stream.DoublePipeline`                          |
| +100.0% |   +511.999 KiB |        <0.1% | 512 KiB → 1024 KiB |     1 → 2 | `doubleStream(Spliterator$OfDouble, boolean)`                                                        | `java.util.stream.StreamSupport`                           |
|     new |   +511.999 KiB | 0.0% → <0.1% |      0 B → 512 KiB |     0 → 1 | `<clinit>()`                                                                                         | `sun.util.resources.LocaleData`                            |
|     new |   +511.999 KiB | 0.0% → <0.1% |      0 B → 512 KiB |     0 → 1 | `transferTo(OutputStream)`                                                                           | `java.io.InputStream`                                      |
|     new |   +511.999 KiB | 0.0% → <0.1% |      0 B → 512 KiB |     0 → 1 | `defineClass0(ClassLoader, Class, String, byte[], int, int, ProtectionDomain, boolean, int, Object)` | `java.lang.ClassLoader`                                    |

##### Standard library

|  Change |          Delta |            % |               Size |   Samples | Function                                                                                             | Location                                     |
| ------: | -------------: | -----------: | -----------------: | --------: | ---------------------------------------------------------------------------------------------------- | -------------------------------------------- |
|  +77.8% |     +6.999 MiB |        <0.1% |     9 MiB → 16 MiB |   18 → 32 | `copyOf(byte[], int)`                                                                                | `java.util.Arrays`                           |
|  +52.4% |     +5.499 MiB |        <0.1% |  10.5 MiB → 16 MiB |   21 → 32 | `entrySet()`                                                                                         | `java.util.HashMap`                          |
|  +30.0% |     +2.999 MiB |        <0.1% |    10 MiB → 13 MiB |   20 → 26 | `range(int, int)`                                                                                    | `java.util.stream.IntStream`                 |
|   +0.7% |     +1.999 MiB |  0.7% → 0.8% |  281 MiB → 283 MiB | 563 → 567 | `newNode(int, Object, Object, HashMap$Node)`                                                         | `java.util.HashMap`                          |
|  +15.0% |     +1.499 MiB |        <0.1% |  10 MiB → 11.5 MiB |   20 → 23 | `allocateInstance(Object)`                                                                           | `java.lang.invoke.DirectMethodHandle`        |
|     new |     +1.499 MiB | 0.0% → <0.1% |      0 B → 1.5 MiB |     0 → 3 | `fillInStackTrace(int)`                                                                              | `java.lang.Throwable`                        |
|   +7.1% | +1,023.998 KiB |        <0.1% |    14 MiB → 15 MiB |   23 → 25 | `copyOf(Object[], int, Class)`                                                                       | `java.util.Arrays`                           |
| +200.0% | +1,023.998 KiB |        <0.1% |  512 KiB → 1.5 MiB |     1 → 3 | `newLinkedHashMap(int)`                                                                              | `java.util.LinkedHashMap`                    |
|     new | +1,023.998 KiB | 0.0% → <0.1% |     0 B → 1024 KiB |     0 → 2 | `enlarge(int)`                                                                                       | `jdk.internal.org.objectweb.asm.ByteVector`  |
|     new |   +511.999 KiB | 0.0% → <0.1% |      0 B → 512 KiB |     0 → 1 | `newString(byte[], int, int)`                                                                        | `java.lang.StringLatin1`                     |
|     new |   +511.999 KiB | 0.0% → <0.1% |      0 B → 512 KiB |     0 → 1 | `result()`                                                                                           | `scala.collection.immutable.VectorBuilder`   |
| +100.0% |   +511.999 KiB |        <0.1% | 512 KiB → 1024 KiB |     1 → 2 | `mapToObj(DoubleFunction, int)`                                                                      | `java.util.stream.DoublePipeline`            |
| +100.0% |   +511.999 KiB |        <0.1% | 512 KiB → 1024 KiB |     1 → 2 | `doubleStream(Spliterator$OfDouble, boolean)`                                                        | `java.util.stream.StreamSupport`             |
|     new |   +511.999 KiB | 0.0% → <0.1% |      0 B → 512 KiB |     0 → 1 | `<clinit>()`                                                                                         | `sun.util.resources.LocaleData`              |
|     new |   +511.999 KiB | 0.0% → <0.1% |      0 B → 512 KiB |     0 → 1 | `transferTo(OutputStream)`                                                                           | `java.io.InputStream`                        |
|     new |   +511.999 KiB | 0.0% → <0.1% |      0 B → 512 KiB |     0 → 1 | `defineClass0(ClassLoader, Class, String, byte[], int, int, ProtectionDomain, boolean, int, Object)` | `java.lang.ClassLoader`                      |
|     new |   +511.999 KiB | 0.0% → <0.1% |      0 B → 512 KiB |     0 → 1 | `addConstantMemberReference(int, String, String, String)`                                            | `jdk.internal.org.objectweb.asm.SymbolTable` |

##### Ours

| Change |        Delta |           % |               Size |   Samples | Function                             | Location                                                   |
| -----: | -----------: | ----------: | -----------------: | --------: | ------------------------------------ | ---------------------------------------------------------- |
| +12.3% |  +14.999 MiB | 0.3% → 0.4% |  122 MiB → 137 MiB | 244 → 274 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +10.3% |   +9.999 MiB |        0.3% | 97.5 MiB → 107 MiB | 195 → 215 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +3.6% |   +2.499 MiB |        0.2% |  69 MiB → 71.5 MiB | 138 → 143 | `merge(Map, Map)`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  +0.7% | +511.999 KiB |        0.2% |  75.5 MiB → 76 MiB | 151 → 152 | `add(double[], double[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |          Delta |             % |                Size |         Samples | Function                                 | Location                                                   |
| ------: | -------------: | ------------: | ------------------: | --------------: | ---------------------------------------- | ---------------------------------------------------------- |
|   -0.5% |   -162.898 MiB | 90.9% → 91.0% | 33.7 GiB → 33.5 GiB | 68,667 → 68,339 | `copyOf(Object[], int)`                  | `java.util.Arrays`                                         |
|   -1.5% |    -26.499 MiB |   4.6% → 4.5% |  1.7 GiB → 1.68 GiB |   3,485 → 3,432 | `findNearestCentroid()`                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -7.2% |    -17.999 MiB |   0.7% → 0.6% |   251 MiB → 233 MiB |       503 → 467 | `grow(int)`                              | `java.util.ArrayList`                                      |
|   -9.9% |    -12.499 MiB |          0.3% |   126 MiB → 114 MiB |       253 → 228 | `lambda$merge$6(List, List)`             | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -14.5% |    -10.999 MiB |          0.2% |     76 MiB → 65 MiB |       152 → 130 | `vectorSum()`                            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -22.4% |     -7.499 MiB |          0.1% |   33.5 MiB → 26 MiB |         67 → 52 | `mapToObj(IntFunction, int)`             | `java.util.stream.IntPipeline`                             |
|   -6.9% |     -6.999 MiB |   0.3% → 0.2% |    101 MiB → 94 MiB |       202 → 188 | `collectClusters(int[])`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -7.1% |     -6.999 MiB |   0.3% → 0.2% |     99 MiB → 92 MiB |       198 → 184 | `resize()`                               | `java.util.HashMap`                                        |
|   -3.3% |     -4.999 MiB |          0.4% |   152 MiB → 147 MiB |       304 → 294 | `createSubtask(int, int)`                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -33.3% |     -2.999 MiB |         <0.1% |       9 MiB → 6 MiB |         18 → 12 | `createSubtask(int, int)`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -20.8% |     -2.499 MiB |         <0.1% |    12 MiB → 9.5 MiB |         24 → 19 | `opWrapSink(int, Sink)`                  | `java.util.stream.IntPipeline$1`                           |
|  -20.0% |     -1.499 MiB |         <0.1% |     7.5 MiB → 6 MiB |         15 → 12 | `computeClusterAverages()`               | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| removed |     -1.499 MiB |  <0.1% → 0.0% |       1.5 MiB → 0 B |           3 → 0 | `spliterator(double[], int, int, int)`   | `java.util.Spliterators`                                   |
|  -25.0% |     -1.499 MiB |         <0.1% |     6 MiB → 4.5 MiB |          12 → 9 | `<init>(InputStream, Inflater, int)`     | `java.util.zip.InflaterInputStream`                        |
|   -7.5% |     -1.499 MiB |  0.1% → <0.1% |   20 MiB → 18.5 MiB |         40 → 37 | `lambda$generateData$4(int)`             | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed | -1,023.998 KiB |  <0.1% → 0.0% |      1024 KiB → 0 B |           2 → 0 | `allocateUninitializedArray(Class, int)` | `jdk.internal.misc.Unsafe`                                 |
|  -66.7% | -1,023.998 KiB |         <0.1% |   1.5 MiB → 512 KiB |           3 → 1 | `copyOfRangeByte(byte[], int, int)`      | `java.util.Arrays`                                         |
|  -28.6% | -1,023.998 KiB |         <0.1% |   3.5 MiB → 2.5 MiB |           7 → 5 | `allocateInstance(Class)`                | `jdk.internal.misc.Unsafe`                                 |
| removed | -1,023.998 KiB |  <0.1% → 0.0% |      1024 KiB → 0 B |           2 → 0 | `<init>(int)`                            | `java.io.ByteArrayOutputStream`                            |
|  -50.0% |   -511.999 KiB |         <0.1% |  1024 KiB → 512 KiB |           2 → 1 | `<init>(JavaKMeans, Map)`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

##### Standard library

|  Change |          Delta |             % |                Size |         Samples | Function                                             | Location                                                           |
| ------: | -------------: | ------------: | ------------------: | --------------: | ---------------------------------------------------- | ------------------------------------------------------------------ |
|   -0.5% |   -162.898 MiB | 90.9% → 91.0% | 33.7 GiB → 33.5 GiB | 68,667 → 68,339 | `copyOf(Object[], int)`                              | `java.util.Arrays`                                                 |
|   -7.2% |    -17.999 MiB |   0.7% → 0.6% |   251 MiB → 233 MiB |       503 → 467 | `grow(int)`                                          | `java.util.ArrayList`                                              |
|  -22.4% |     -7.499 MiB |          0.1% |   33.5 MiB → 26 MiB |         67 → 52 | `mapToObj(IntFunction, int)`                         | `java.util.stream.IntPipeline`                                     |
|   -7.1% |     -6.999 MiB |   0.3% → 0.2% |     99 MiB → 92 MiB |       198 → 184 | `resize()`                                           | `java.util.HashMap`                                                |
|  -20.8% |     -2.499 MiB |         <0.1% |    12 MiB → 9.5 MiB |         24 → 19 | `opWrapSink(int, Sink)`                              | `java.util.stream.IntPipeline$1`                                   |
| removed |     -1.499 MiB |  <0.1% → 0.0% |       1.5 MiB → 0 B |           3 → 0 | `spliterator(double[], int, int, int)`               | `java.util.Spliterators`                                           |
|  -25.0% |     -1.499 MiB |         <0.1% |     6 MiB → 4.5 MiB |          12 → 9 | `<init>(InputStream, Inflater, int)`                 | `java.util.zip.InflaterInputStream`                                |
| removed | -1,023.998 KiB |  <0.1% → 0.0% |      1024 KiB → 0 B |           2 → 0 | `allocateUninitializedArray(Class, int)`             | `jdk.internal.misc.Unsafe`                                         |
|  -66.7% | -1,023.998 KiB |         <0.1% |   1.5 MiB → 512 KiB |           3 → 1 | `copyOfRangeByte(byte[], int, int)`                  | `java.util.Arrays`                                                 |
|  -28.6% | -1,023.998 KiB |         <0.1% |   3.5 MiB → 2.5 MiB |           7 → 5 | `allocateInstance(Class)`                            | `jdk.internal.misc.Unsafe`                                         |
| removed | -1,023.998 KiB |  <0.1% → 0.0% |      1024 KiB → 0 B |           2 → 0 | `<init>(int)`                                        | `java.io.ByteArrayOutputStream`                                    |
| removed |   -511.999 KiB |  <0.1% → 0.0% |       512 KiB → 0 B |           1 → 0 | `iterator()`                                         | `java.util.ServiceLoader`                                          |
| removed |   -511.999 KiB |  <0.1% → 0.0% |       512 KiB → 0 B |           1 → 0 | `<init>(List, boolean)`                              | `java.time.format.DateTimeFormatterBuilder$CompositePrinterParser` |
| removed |   -511.999 KiB |  <0.1% → 0.0% |       512 KiB → 0 B |           1 → 0 | `parseName(byte[], int)`                             | `java.util.jar.Manifest`                                           |
| removed |   -511.999 KiB |  <0.1% → 0.0% |       512 KiB → 0 B |           1 → 0 | `initDataOffset()`                                   | `java.util.zip.ZipFile$ZipFileInputStream`                         |
| removed |   -511.999 KiB |  <0.1% → 0.0% |       512 KiB → 0 B |           1 → 0 | `clone()`                                            | `java.lang.Object`                                                 |
| removed |   -511.999 KiB |  <0.1% → 0.0% |       512 KiB → 0 B |           1 → 0 | `entryKey(Object)`                                   | `jdk.internal.util.ReferencedKeyMap`                               |
| removed |   -511.999 KiB |  <0.1% → 0.0% |       512 KiB → 0 B |           1 → 0 | `visitMethod(int, String, String, String, String[])` | `jdk.internal.org.objectweb.asm.ClassWriter`                       |
|   -1.9% |   -511.999 KiB |          0.1% |   27 MiB → 26.5 MiB |         54 → 53 | `intStream(Spliterator$OfInt, boolean)`              | `java.util.stream.StreamSupport`                                   |
|   -4.3% |   -511.999 KiB |         <0.1% |   11.5 MiB → 11 MiB |         23 → 22 | `builder(long, IntFunction)`                         | `java.util.stream.Nodes`                                           |

##### Ours

|  Change |        Delta |            % |               Size |       Samples | Function                     | Location                                                   |
| ------: | -----------: | -----------: | -----------------: | ------------: | ---------------------------- | ---------------------------------------------------------- |
|   -1.5% |  -26.499 MiB |  4.6% → 4.5% | 1.7 GiB → 1.68 GiB | 3,485 → 3,432 | `findNearestCentroid()`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -9.9% |  -12.499 MiB |         0.3% |  126 MiB → 114 MiB |     253 → 228 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -14.5% |  -10.999 MiB |         0.2% |    76 MiB → 65 MiB |     152 → 130 | `vectorSum()`                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   -6.9% |   -6.999 MiB |  0.3% → 0.2% |   101 MiB → 94 MiB |     202 → 188 | `collectClusters(int[])`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -3.3% |   -4.999 MiB |         0.4% |  152 MiB → 147 MiB |     304 → 294 | `createSubtask(int, int)`    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -33.3% |   -2.999 MiB |        <0.1% |      9 MiB → 6 MiB |       18 → 12 | `createSubtask(int, int)`    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -20.0% |   -1.499 MiB |        <0.1% |    7.5 MiB → 6 MiB |       15 → 12 | `computeClusterAverages()`   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|   -7.5% |   -1.499 MiB | 0.1% → <0.1% |  20 MiB → 18.5 MiB |       40 → 37 | `lambda$generateData$4(int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -50.0% | -511.999 KiB |        <0.1% | 1024 KiB → 512 KiB |         2 → 1 | `<init>(JavaKMeans, Map)`    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -25.0% | -511.999 KiB |        <0.1% |    2 MiB → 1.5 MiB |         4 → 3 | `div(double[], int)`         | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| removed | -511.999 KiB | <0.1% → 0.0% |      512 KiB → 0 B |         1 → 0 | `lambda$boxed$0(int)`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|  Change |        Delta |             % |                Size |         Samples | Function                                                  | Location                                                                              |
| ------: | -----------: | ------------: | ------------------: | --------------: | --------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|   +8.0% | +435.499 MiB | 14.4% → 15.6% | 5.32 GiB → 5.75 GiB | 10,895 → 11,766 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                                                   |
|     new | +209.044 MiB |   0.0% → 0.6% |       0 B → 209 MiB |         0 → 413 | `invokeStatic(Object, Object)`                            | `java.lang.invoke.LambdaForm$DMH.0x000000c801004800`                                  |
|     new | +209.044 MiB |   0.0% → 0.6% |       0 B → 209 MiB |         0 → 413 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x000000c801009800`                                   |
|   +0.4% |  +57.499 MiB | 38.6% → 38.9% |            14.3 GiB | 29,268 → 29,383 | `toArray()`                                               | `java.util.ArrayList`                                                                 |
| +200.0% |  +39.999 MiB |   0.1% → 0.2% |     20 MiB → 60 MiB |        40 → 120 | `apply(int)`                                              | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801125b10`                |
|   +8.9% |  +15.499 MiB |          0.5% |   174 MiB → 190 MiB |       349 → 380 | `putMapEntries(Map, boolean)`                             | `java.util.HashMap`                                                                   |
|   +8.9% |  +15.499 MiB |          0.5% |   174 MiB → 190 MiB |       349 → 380 | `<init>(Map)`                                             | `java.util.HashMap`                                                                   |
|  +12.3% |  +14.999 MiB |   0.3% → 0.4% |   122 MiB → 137 MiB |       244 → 274 | `createSubtask(int, int)`                                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|     new |  +12.499 MiB |  0.0% → <0.1% |      0 B → 12.5 MiB |          0 → 25 | `newInvokeSpecial(Object, int, int, Object)`              | `java.lang.invoke.LambdaForm$DMH.0x000000c801126400`                                  |
|     new |  +12.499 MiB |  0.0% → <0.1% |      0 B → 12.5 MiB |          0 → 25 | `linkToTargetMethod(int, int, Object, Object)`            | `java.lang.invoke.LambdaForm$MH.0x000000c801126c00`                                   |
|  +10.3% |   +9.999 MiB |          0.3% |  97.5 MiB → 107 MiB |       195 → 215 | `lambda$collectClusters$0(Double[])`                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +10.3% |   +9.999 MiB |          0.3% |  97.5 MiB → 107 MiB |       195 → 215 | `apply(Object)`                                           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000c801186b38` |
|   +5.4% |   +8.999 MiB |   0.4% → 0.5% |   168 MiB → 177 MiB |       336 → 354 | `putVal(int, Object, Object, boolean, boolean)`           | `java.util.HashMap`                                                                   |
|  +77.8% |   +6.999 MiB |         <0.1% |      9 MiB → 16 MiB |         18 → 32 | `copyOf(byte[], int)`                                     | `java.util.Arrays`                                                                    |
|  +66.7% |   +5.999 MiB |         <0.1% |      9 MiB → 15 MiB |         18 → 30 | `getBytes()`                                              | `jdk.internal.loader.Resource`                                                        |
|  +66.7% |   +5.999 MiB |         <0.1% |      9 MiB → 15 MiB |         18 → 30 | `getBytes()`                                              | `jdk.internal.loader.URLClassPath$JarLoader$2`                                        |
|  +52.4% |   +5.499 MiB |         <0.1% |   10.5 MiB → 16 MiB |         21 → 32 | `entrySet()`                                              | `java.util.HashMap`                                                                   |
|  +66.7% |   +3.999 MiB |         <0.1% |      6 MiB → 10 MiB |         12 → 20 | `<clinit>()`                                              | `scala.Predef$`                                                                       |
|   +5.3% |   +2.999 MiB |          0.2% |     57 MiB → 60 MiB |       114 → 120 | `lambda$generateData$3(int, int, Random[], int)`          | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|   +6.8% |   +2.499 MiB |          0.1% |   37 MiB → 39.5 MiB |         74 → 79 | `range(int, int)`                                         | `java.util.stream.IntStream`                                                          |

##### Standard library

| Change |        Delta |             % |                Size |         Samples | Function                                                  | Location                                             |
| -----: | -----------: | ------------: | ------------------: | --------------: | --------------------------------------------------------- | ---------------------------------------------------- |
|  +8.0% | +435.499 MiB | 14.4% → 15.6% | 5.32 GiB → 5.75 GiB | 10,895 → 11,766 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                  |
|    new | +209.044 MiB |   0.0% → 0.6% |       0 B → 209 MiB |         0 → 413 | `invokeStatic(Object, Object)`                            | `java.lang.invoke.LambdaForm$DMH.0x000000c801004800` |
|    new | +209.044 MiB |   0.0% → 0.6% |       0 B → 209 MiB |         0 → 413 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x000000c801009800`  |
|  +0.4% |  +57.499 MiB | 38.6% → 38.9% |            14.3 GiB | 29,268 → 29,383 | `toArray()`                                               | `java.util.ArrayList`                                |
|  +8.9% |  +15.499 MiB |          0.5% |   174 MiB → 190 MiB |       349 → 380 | `putMapEntries(Map, boolean)`                             | `java.util.HashMap`                                  |
|  +8.9% |  +15.499 MiB |          0.5% |   174 MiB → 190 MiB |       349 → 380 | `<init>(Map)`                                             | `java.util.HashMap`                                  |
|    new |  +12.499 MiB |  0.0% → <0.1% |      0 B → 12.5 MiB |          0 → 25 | `newInvokeSpecial(Object, int, int, Object)`              | `java.lang.invoke.LambdaForm$DMH.0x000000c801126400` |
|    new |  +12.499 MiB |  0.0% → <0.1% |      0 B → 12.5 MiB |          0 → 25 | `linkToTargetMethod(int, int, Object, Object)`            | `java.lang.invoke.LambdaForm$MH.0x000000c801126c00`  |
|  +5.4% |   +8.999 MiB |   0.4% → 0.5% |   168 MiB → 177 MiB |       336 → 354 | `putVal(int, Object, Object, boolean, boolean)`           | `java.util.HashMap`                                  |
| +77.8% |   +6.999 MiB |         <0.1% |      9 MiB → 16 MiB |         18 → 32 | `copyOf(byte[], int)`                                     | `java.util.Arrays`                                   |
| +66.7% |   +5.999 MiB |         <0.1% |      9 MiB → 15 MiB |         18 → 30 | `getBytes()`                                              | `jdk.internal.loader.Resource`                       |
| +66.7% |   +5.999 MiB |         <0.1% |      9 MiB → 15 MiB |         18 → 30 | `getBytes()`                                              | `jdk.internal.loader.URLClassPath$JarLoader$2`       |
| +52.4% |   +5.499 MiB |         <0.1% |   10.5 MiB → 16 MiB |         21 → 32 | `entrySet()`                                              | `java.util.HashMap`                                  |
| +66.7% |   +3.999 MiB |         <0.1% |      6 MiB → 10 MiB |         12 → 20 | `<clinit>()`                                              | `scala.Predef$`                                      |
|  +6.8% |   +2.499 MiB |          0.1% |   37 MiB → 39.5 MiB |         74 → 79 | `range(int, int)`                                         | `java.util.stream.IntStream`                         |
|  +0.7% |   +1.999 MiB |   0.7% → 0.8% |   281 MiB → 283 MiB |       563 → 567 | `newNode(int, Object, Object, HashMap$Node)`              | `java.util.HashMap`                                  |
| +10.3% |   +1.999 MiB |          0.1% | 19.5 MiB → 21.5 MiB |         39 → 43 | `defineClass(String, Resource)`                           | `java.net.URLClassLoader`                            |
|  +9.1% |   +1.999 MiB |          0.1% |     22 MiB → 24 MiB |         44 → 48 | `loadClass(String, boolean)`                              | `java.lang.ClassLoader`                              |
|  +9.1% |   +1.999 MiB |          0.1% |     22 MiB → 24 MiB |         44 → 48 | `loadClass(String)`                                       | `java.lang.ClassLoader`                              |
| +44.4% |   +1.999 MiB |         <0.1% |   4.5 MiB → 6.5 MiB |          9 → 13 | `<clinit>()`                                              | `scala.package$`                                     |

##### Ours

|  Change |          Delta |            % |               Size |   Samples | Function                                         | Location                                                                              |
| ------: | -------------: | -----------: | -----------------: | --------: | ------------------------------------------------ | ------------------------------------------------------------------------------------- |
| +200.0% |    +39.999 MiB |  0.1% → 0.2% |    20 MiB → 60 MiB |  40 → 120 | `apply(int)`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801125b10`                |
|  +12.3% |    +14.999 MiB |  0.3% → 0.4% |  122 MiB → 137 MiB | 244 → 274 | `createSubtask(int, int)`                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +10.3% |     +9.999 MiB |         0.3% | 97.5 MiB → 107 MiB | 195 → 215 | `lambda$collectClusters$0(Double[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +10.3% |     +9.999 MiB |         0.3% | 97.5 MiB → 107 MiB | 195 → 215 | `apply(Object)`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000c801186b38` |
|   +5.3% |     +2.999 MiB |         0.2% |    57 MiB → 60 MiB | 114 → 120 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
| +300.0% |     +1.499 MiB |        <0.1% |    512 KiB → 2 MiB |     1 → 4 | `createHandler()`                                | `org.renaissance.core.Logging`                                                        |
| +300.0% |     +1.499 MiB |        <0.1% |    512 KiB → 2 MiB |     1 → 4 | `createRootLogger()`                             | `org.renaissance.core.Logging`                                                        |
| +300.0% |     +1.499 MiB |        <0.1% |    512 KiB → 2 MiB |     1 → 4 | `<clinit>()`                                     | `org.renaissance.core.Logging`                                                        |
| +300.0% |     +1.499 MiB |        <0.1% |    512 KiB → 2 MiB |     1 → 4 | `<clinit>()`                                     | `org.renaissance.core.Launcher`                                                       |
|  +33.3% | +1,023.998 KiB |        <0.1% |      3 MiB → 4 MiB |     6 → 8 | `combineResults(Map, Map)`                       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|  +33.3% | +1,023.998 KiB |        <0.1% |      3 MiB → 4 MiB |     6 → 8 | `combineResults(Object, Object)`                 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|     new | +1,023.998 KiB | 0.0% → <0.1% |     0 B → 1024 KiB |     0 → 2 | `extractResource(String, Path)`                  | `org.renaissance.core.ResourceUtils`                                                  |
|     new | +1,023.998 KiB | 0.0% → <0.1% |     0 B → 1024 KiB |     0 → 2 | `extractResources(Iterable, Path)`               | `org.renaissance.core.ResourceUtils`                                                  |
|     new | +1,023.998 KiB | 0.0% → <0.1% |     0 B → 1024 KiB |     0 → 2 | `createClassLoaderForModule(String)`             | `org.renaissance.core.ModuleLoader`                                                   |
|   +0.7% |   +511.999 KiB |         0.2% |  75.5 MiB → 76 MiB | 151 → 152 | `add(double[], double[])`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|   +0.7% |   +511.999 KiB |         0.2% |  75.5 MiB → 76 MiB | 151 → 152 | `combineResults(double[], double[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|   +0.7% |   +511.999 KiB |         0.2% |  75.5 MiB → 76 MiB | 151 → 152 | `combineResults(Object, Object)`                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|     new |   +511.999 KiB | 0.0% → <0.1% |      0 B → 512 KiB |     0 → 1 | `toStringMap(Properties)`                        | `org.renaissance.core.ResourceUtils`                                                  |
|     new |   +511.999 KiB | 0.0% → <0.1% |      0 B → 512 KiB |     0 → 1 | `create(Path, URI)`                              | `org.renaissance.core.ModuleLoader`                                                   |
|     new |   +511.999 KiB | 0.0% → <0.1% |      0 B → 512 KiB |     0 → 1 | `getManifestAttributeValue(ClassLoader, String)` | `org.renaissance.core.ResourceUtils`                                                  |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

|  Change |        Delta |             % |                Size |         Samples | Function                                             | Location                                                               |
| ------: | -----------: | ------------: | ------------------: | --------------: | ---------------------------------------------------- | ---------------------------------------------------------------------- |
|   -5.5% | -432.897 MiB | 20.9% → 19.8% | 7.73 GiB → 7.31 GiB | 15,509 → 14,641 | `invoke()`                                           | `java.util.concurrent.ForkJoinTask`                                    |
|   -5.5% | -423.397 MiB | 20.4% → 19.4% | 7.57 GiB → 7.16 GiB | 15,189 → 14,340 | `lambda$run$0(int, List, int)`                       | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -5.5% | -423.397 MiB | 20.4% → 19.4% | 7.57 GiB → 7.16 GiB | 15,189 → 14,340 | `call()`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801183d68` |
|   -5.5% | -423.397 MiB | 20.4% → 19.4% | 7.57 GiB → 7.16 GiB | 15,189 → 14,340 | `exec()`                                             | `java.util.concurrent.ForkJoinTask$AdaptedCallable`                    |
|   -1.0% | -286.999 MiB | 78.4% → 78.1% | 29.1 GiB → 28.8 GiB | 59,528 → 58,954 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
|   -1.2% | -237.398 MiB | 53.0% → 52.7% | 19.7 GiB → 19.4 GiB | 39,925 → 39,448 | `grow(int)`                                          | `java.util.ArrayList`                                                  |
|   -0.6% | -224.398 MiB |         99.4% | 36.9 GiB → 36.6 GiB | 75,164 → 74,713 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                                    |
|   -0.6% | -224.398 MiB |         99.4% | 36.9 GiB → 36.6 GiB | 75,164 → 74,713 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
|   -0.6% | -224.398 MiB |         99.4% | 36.9 GiB → 36.6 GiB | 75,164 → 74,713 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                                    |
|   -0.6% | -224.398 MiB |         99.4% | 36.9 GiB → 36.6 GiB | 75,164 → 74,713 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                                    |
|   -0.6% | -224.398 MiB |         99.4% | 36.9 GiB → 36.6 GiB | 75,164 → 74,713 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`                            |
|   -0.6% | -223.898 MiB |         99.4% | 36.9 GiB → 36.6 GiB | 75,159 → 74,709 | `compute()`                                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|   -0.6% | -223.898 MiB |         99.4% | 36.9 GiB → 36.6 GiB | 75,159 → 74,709 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                                   |
| removed | -211.544 MiB |   0.6% → 0.0% |       212 MiB → 0 B |         418 → 0 | `invokeStatic(Object, Object)`                       | `java.lang.invoke.LambdaForm$DMH.0x0000007001004800`                   |
| removed | -211.544 MiB |   0.6% → 0.0% |       212 MiB → 0 B |         418 → 0 | `invoke(Object, Object, Object)`                     | `java.lang.invoke.LambdaForm$MH.0x0000007001009800`                    |
|   -0.7% | -209.499 MiB | 79.2% → 79.1% | 29.4 GiB → 29.2 GiB | 60,146 → 59,727 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                                    |
|   -0.7% | -209.499 MiB | 79.2% → 79.1% | 29.4 GiB → 29.2 GiB | 60,146 → 59,727 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                                    |
|   -0.6% | -173.898 MiB |         75.6% |   28 GiB → 27.8 GiB | 57,063 → 56,713 | `merge(Object, Object, BiFunction)`                  | `java.util.HashMap`                                                    |
|   -0.6% | -173.898 MiB |         75.6% |   28 GiB → 27.8 GiB | 57,063 → 56,713 | `lambda$merge$7(Map, Object, List)`                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -0.6% | -173.898 MiB |         75.6% |   28 GiB → 27.8 GiB | 57,063 → 56,713 | `accept(Object, Object)`                             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186d88` |

##### Standard library

|  Change |        Delta |             % |                Size |         Samples | Function                                             | Location                                             |
| ------: | -----------: | ------------: | ------------------: | --------------: | ---------------------------------------------------- | ---------------------------------------------------- |
|   -5.5% | -432.897 MiB | 20.9% → 19.8% | 7.73 GiB → 7.31 GiB | 15,509 → 14,641 | `invoke()`                                           | `java.util.concurrent.ForkJoinTask`                  |
|   -5.5% | -423.397 MiB | 20.4% → 19.4% | 7.57 GiB → 7.16 GiB | 15,189 → 14,340 | `exec()`                                             | `java.util.concurrent.ForkJoinTask$AdaptedCallable`  |
|   -1.0% | -286.999 MiB | 78.4% → 78.1% | 29.1 GiB → 28.8 GiB | 59,528 → 58,954 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|   -1.2% | -237.398 MiB | 53.0% → 52.7% | 19.7 GiB → 19.4 GiB | 39,925 → 39,448 | `grow(int)`                                          | `java.util.ArrayList`                                |
|   -0.6% | -224.398 MiB |         99.4% | 36.9 GiB → 36.6 GiB | 75,164 → 74,713 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                  |
|   -0.6% | -224.398 MiB |         99.4% | 36.9 GiB → 36.6 GiB | 75,164 → 74,713 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|   -0.6% | -224.398 MiB |         99.4% | 36.9 GiB → 36.6 GiB | 75,164 → 74,713 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                  |
|   -0.6% | -224.398 MiB |         99.4% | 36.9 GiB → 36.6 GiB | 75,164 → 74,713 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                  |
|   -0.6% | -224.398 MiB |         99.4% | 36.9 GiB → 36.6 GiB | 75,164 → 74,713 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`          |
|   -0.6% | -223.898 MiB |         99.4% | 36.9 GiB → 36.6 GiB | 75,159 → 74,709 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                 |
| removed | -211.544 MiB |   0.6% → 0.0% |       212 MiB → 0 B |         418 → 0 | `invokeStatic(Object, Object)`                       | `java.lang.invoke.LambdaForm$DMH.0x0000007001004800` |
| removed | -211.544 MiB |   0.6% → 0.0% |       212 MiB → 0 B |         418 → 0 | `invoke(Object, Object, Object)`                     | `java.lang.invoke.LambdaForm$MH.0x0000007001009800`  |
|   -0.7% | -209.499 MiB | 79.2% → 79.1% | 29.4 GiB → 29.2 GiB | 60,146 → 59,727 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                  |
|   -0.7% | -209.499 MiB | 79.2% → 79.1% | 29.4 GiB → 29.2 GiB | 60,146 → 59,727 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                  |
|   -0.6% | -173.898 MiB |         75.6% |   28 GiB → 27.8 GiB | 57,063 → 56,713 | `merge(Object, Object, BiFunction)`                  | `java.util.HashMap`                                  |
|   -0.6% | -173.898 MiB |         75.6% |   28 GiB → 27.8 GiB | 57,063 → 56,713 | `forEach(BiConsumer)`                                | `java.util.HashMap`                                  |
|   -0.5% | -161.898 MiB | 90.9% → 91.0% | 33.7 GiB → 33.5 GiB | 68,690 → 68,364 | `copyOf(Object[], int)`                              | `java.util.Arrays`                                   |
|   -1.4% | -101.999 MiB | 18.9% → 18.7% | 7.01 GiB → 6.91 GiB | 14,348 → 14,144 | `<init>(Collection)`                                 | `java.util.ArrayList`                                |
|   -0.3% |  -58.398 MiB | 56.4% → 56.5% | 20.9 GiB → 20.8 GiB | 42,459 → 42,340 | `addAll(Collection)`                                 | `java.util.ArrayList`                                |
|   -0.3% |  -19.499 MiB | 16.3% → 16.4% | 6.05 GiB → 6.03 GiB | 12,386 → 12,347 | `grow()`                                             | `java.util.ArrayList`                                |

##### Ours

| Change |        Delta |             % |                Size |         Samples | Function                            | Location                                                               |
| -----: | -----------: | ------------: | ------------------: | --------------: | ----------------------------------- | ---------------------------------------------------------------------- |
|  -5.5% | -423.397 MiB | 20.4% → 19.4% | 7.57 GiB → 7.16 GiB | 15,189 → 14,340 | `lambda$run$0(int, List, int)`      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -5.5% | -423.397 MiB | 20.4% → 19.4% | 7.57 GiB → 7.16 GiB | 15,189 → 14,340 | `call()`                            | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801183d68` |
|  -0.6% | -223.898 MiB |         99.4% | 36.9 GiB → 36.6 GiB | 75,159 → 74,709 | `compute()`                         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  -0.6% | -173.898 MiB |         75.6% |   28 GiB → 27.8 GiB | 57,063 → 56,713 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -0.6% | -173.898 MiB |         75.6% |   28 GiB → 27.8 GiB | 57,063 → 56,713 | `accept(Object, Object)`            | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186d88` |
|  -0.6% | -172.898 MiB |         75.6% |   28 GiB → 27.8 GiB | 57,060 → 56,712 | `lambda$merge$6(List, List)`        | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -0.6% | -172.898 MiB |         75.6% |   28 GiB → 27.8 GiB | 57,060 → 56,712 | `apply(Object, Object)`             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186fd0` |
|  -0.5% | -156.898 MiB | 76.2% → 76.3% | 28.3 GiB → 28.1 GiB | 57,546 → 57,230 | `combineResults(Map, Map)`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -0.5% | -156.898 MiB | 76.2% → 76.3% | 28.3 GiB → 28.1 GiB | 57,546 → 57,230 | `combineResults(Object, Object)`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -0.5% | -155.898 MiB | 76.2% → 76.3% | 28.3 GiB → 28.1 GiB | 57,552 → 57,238 | `merge(Map, Map)`                   | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -0.7% |  -55.999 MiB |         22.0% | 8.15 GiB → 8.09 GiB | 16,686 → 16,574 | `computeDirectly()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| -67.5% |  -38.499 MiB |  0.2% → <0.1% |   57 MiB → 18.5 MiB |        114 → 37 | `apply(int)`                        | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801125d48` |
|  -0.4% |  -29.499 MiB |         17.4% | 6.45 GiB → 6.42 GiB | 13,201 → 13,142 | `collectClusters(int[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -1.5% |  -26.499 MiB |   4.6% → 4.5% |  1.7 GiB → 1.68 GiB |   3,485 → 3,432 | `findNearestCentroid()`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -7.5% |  -14.499 MiB |          0.5% |   193 MiB → 178 MiB |       386 → 357 | `computeClusterAverages()`          | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -7.5% |  -14.499 MiB |          0.5% |   193 MiB → 178 MiB |       386 → 357 | `computeDirectly()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| -14.5% |  -10.999 MiB |          0.2% |     76 MiB → 65 MiB |       152 → 130 | `vectorSum()`                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| -14.5% |  -10.999 MiB |          0.2% |     76 MiB → 65 MiB |       152 → 130 | `computeDirectly()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -4.8% |   -8.499 MiB |   0.5% → 0.4% |   177 MiB → 168 MiB |       354 → 337 | `average(List)`                     | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -3.8% |   -7.499 MiB |          0.5% |   197 MiB → 190 MiB |       389 → 374 | `executeBenchmark()`                | `org.renaissance.harness.ExecutionDriver`                              |

# Lock contention profile diff

Blocked 1.3ms → 1.4ms (+0.01ms, +0.8%) over 11 contentions → 12 contentions (121.7µs → 112.5µs per contention).

| Category         |  Change |   Delta |             % |           Time | Contentions |
| ---------------- | ------: | ------: | ------------: | -------------: | ----------: |
| Standard library |   -2.0% | -0.03ms | 98.1% → 95.3% |          1.3ms |          10 |
| Ours             | +143.4% | +0.04ms |   1.9% → 4.7% | 26.1µs → 0.1ms |       1 → 2 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time blocked directly in the function body, excluding callees.

|  Change |   Delta |             % |           Time | Contentions | Function                                         | Location                                               |
| ------: | ------: | ------------: | -------------: | ----------: | ------------------------------------------------ | ------------------------------------------------------ |
| +143.4% | +0.04ms |   1.9% → 4.7% | 26.1µs → 0.1ms |       1 → 2 | `average(List)`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|   +3.9% | +0.04ms | 69.3% → 71.4% |  0.9ms → 1.0ms |           4 | `loadClass(String, boolean)`                     | `java.lang.ClassLoader`                                |
|     new | +0.02ms |   0.0% → 1.7% |   0ms → 22.9µs |       0 → 1 | `<init>(UnixPath, long, DirectoryStream$Filter)` | `sun.nio.fs.UnixDirectoryStream`                       |
|     new | +3.83µs |   0.0% → 0.3% |    0ms → 3.8µs |       0 → 1 | `getDeclaredMethods0(boolean)`                   | `java.lang.Class`                                      |

##### Standard library

| Change |   Delta |             % |          Time | Contentions | Function                                         | Location                         |
| -----: | ------: | ------------: | ------------: | ----------: | ------------------------------------------------ | -------------------------------- |
|  +3.9% | +0.04ms | 69.3% → 71.4% | 0.9ms → 1.0ms |           4 | `loadClass(String, boolean)`                     | `java.lang.ClassLoader`          |
|    new | +0.02ms |   0.0% → 1.7% |  0ms → 22.9µs |       0 → 1 | `<init>(UnixPath, long, DirectoryStream$Filter)` | `sun.nio.fs.UnixDirectoryStream` |
|    new | +3.83µs |   0.0% → 0.3% |   0ms → 3.8µs |       0 → 1 | `getDeclaredMethods0(boolean)`                   | `java.lang.Class`                |

##### Ours

|  Change |   Delta |           % |           Time | Contentions | Function        | Location                                               |
| ------: | ------: | ----------: | -------------: | ----------: | --------------- | ------------------------------------------------------ |
| +143.4% | +0.04ms | 1.9% → 4.7% | 26.1µs → 0.1ms |       1 → 2 | `average(List)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

#### Improvements

Functions with the largest decrease in time blocked directly in the function body, excluding callees.

##### Standard library

|  Change |   Delta |             % |            Time | Contentions | Function                                      | Location                                            |
| ------: | ------: | ------------: | --------------: | ----------: | --------------------------------------------- | --------------------------------------------------- |
| removed | -0.02ms |   1.8% → 0.0% |    24.5µs → 0ms |       1 → 0 | `doubleStream(Spliterator$OfDouble, boolean)` | `java.util.stream.StreamSupport`                    |
|   -9.5% | -0.02ms | 17.4% → 15.6% |           0.2ms |           1 | `loadClassOrNull(String, boolean)`            | `jdk.internal.loader.BuiltinClassLoader`            |
| removed | -0.02ms |   1.4% → 0.0% |    19.0µs → 0ms |       1 → 0 | `<init>(Collection, int)`                     | `java.nio.file.FileTreeWalker`                      |
|  -29.4% | -0.02ms |   4.7% → 3.3% |  0.1ms → 44.5µs |       2 → 1 | `walkFileTree(Path, Set, int, FileVisitor)`   | `java.nio.file.Files`                               |
|  -11.3% | -0.01ms |   3.4% → 3.0% | 45.9µs → 40.7µs |       1 → 2 | `<init>(boolean)`                             | `java.util.concurrent.locks.ReentrantReadWriteLock` |

### Total time

#### Regressions

Functions with the largest increase in total time blocked in the function and all its callees.

| Change |   Delta |             % |           Time | Contentions | Function                                             | Location                                               |
| -----: | ------: | ------------: | -------------: | ----------: | ---------------------------------------------------- | ------------------------------------------------------ |
|  +7.8% | +0.07ms | 71.2% → 76.1% |          1.0ms |       5 → 6 | `average(List)`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  +5.1% | +0.05ms | 73.0% → 76.1% |          1.0ms |           6 | `computeClusterAverages()`                           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  +5.1% | +0.05ms | 73.0% → 76.1% |          1.0ms |           6 | `computeDirectly()`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  +5.1% | +0.05ms | 73.0% → 76.1% |          1.0ms |           6 | `compute()`                                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |
|  +5.1% | +0.05ms | 73.0% → 76.1% |          1.0ms |           6 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                   |
|  +5.1% | +0.05ms | 73.0% → 76.1% |          1.0ms |           6 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                    |
|  +5.1% | +0.05ms | 73.0% → 76.1% |          1.0ms |           6 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`          |
|  +5.1% | +0.05ms | 73.0% → 76.1% |          1.0ms |           6 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                    |
|  +5.1% | +0.05ms | 73.0% → 76.1% |          1.0ms |           6 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                    |
|  +5.1% | +0.05ms | 73.0% → 76.1% |          1.0ms |           6 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`            |
|  +3.9% | +0.04ms | 69.3% → 71.4% |  0.9ms → 1.0ms |           4 | `loadClass(String, boolean)`                         | `java.lang.ClassLoader`                                |
| +38.6% | +0.02ms |   3.4% → 4.7% | 45.9µs → 0.1ms |       1 → 3 | `<init>(UnixPath, long, DirectoryStream$Filter)`     | `sun.nio.fs.UnixDirectoryStream`                       |
| +38.6% | +0.02ms |   3.4% → 4.7% | 45.9µs → 0.1ms |       1 → 3 | `newDirectoryStream(Path, DirectoryStream$Filter)`   | `sun.nio.fs.UnixFileSystemProvider`                    |
| +38.6% | +0.02ms |   3.4% → 4.7% | 45.9µs → 0.1ms |       1 → 3 | `newDirectoryStream(Path)`                           | `java.nio.file.Files`                                  |
| +38.6% | +0.02ms |   3.4% → 4.7% | 45.9µs → 0.1ms |       1 → 3 | `visit(Path, boolean, boolean)`                      | `java.nio.file.FileTreeWalker`                         |
| +38.6% | +0.02ms |   3.4% → 4.7% | 45.9µs → 0.1ms |       1 → 3 | `walk(Path)`                                         | `java.nio.file.FileTreeWalker`                         |
|  +1.2% | +0.01ms | 86.7% → 87.0% |          1.2ms |           5 | `loadClass(String)`                                  | `java.lang.ClassLoader`                                |
|    new | +3.83µs |   0.0% → 0.3% |    0ms → 3.8µs |       0 → 1 | `getDeclaredMethods0(boolean)`                       | `java.lang.Class`                                      |
|    new | +3.83µs |   0.0% → 0.3% |    0ms → 3.8µs |       0 → 1 | `privateGetDeclaredMethods(boolean)`                 | `java.lang.Class`                                      |
|    new | +3.83µs |   0.0% → 0.3% |    0ms → 3.8µs |       0 → 1 | `getMethodsRecursive(String, Class[], boolean)`      | `java.lang.Class`                                      |

##### Standard library

| Change |   Delta |             % |           Time | Contentions | Function                                             | Location                                      |
| -----: | ------: | ------------: | -------------: | ----------: | ---------------------------------------------------- | --------------------------------------------- |
|  +5.1% | +0.05ms | 73.0% → 76.1% |          1.0ms |           6 | `exec()`                                             | `java.util.concurrent.RecursiveTask`          |
|  +5.1% | +0.05ms | 73.0% → 76.1% |          1.0ms |           6 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`           |
|  +5.1% | +0.05ms | 73.0% → 76.1% |          1.0ms |           6 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  +5.1% | +0.05ms | 73.0% → 76.1% |          1.0ms |           6 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`           |
|  +5.1% | +0.05ms | 73.0% → 76.1% |          1.0ms |           6 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`           |
|  +5.1% | +0.05ms | 73.0% → 76.1% |          1.0ms |           6 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`   |
|  +3.9% | +0.04ms | 69.3% → 71.4% |  0.9ms → 1.0ms |           4 | `loadClass(String, boolean)`                         | `java.lang.ClassLoader`                       |
| +38.6% | +0.02ms |   3.4% → 4.7% | 45.9µs → 0.1ms |       1 → 3 | `<init>(UnixPath, long, DirectoryStream$Filter)`     | `sun.nio.fs.UnixDirectoryStream`              |
| +38.6% | +0.02ms |   3.4% → 4.7% | 45.9µs → 0.1ms |       1 → 3 | `newDirectoryStream(Path, DirectoryStream$Filter)`   | `sun.nio.fs.UnixFileSystemProvider`           |
| +38.6% | +0.02ms |   3.4% → 4.7% | 45.9µs → 0.1ms |       1 → 3 | `newDirectoryStream(Path)`                           | `java.nio.file.Files`                         |
| +38.6% | +0.02ms |   3.4% → 4.7% | 45.9µs → 0.1ms |       1 → 3 | `visit(Path, boolean, boolean)`                      | `java.nio.file.FileTreeWalker`                |
| +38.6% | +0.02ms |   3.4% → 4.7% | 45.9µs → 0.1ms |       1 → 3 | `walk(Path)`                                         | `java.nio.file.FileTreeWalker`                |
|  +1.2% | +0.01ms | 86.7% → 87.0% |          1.2ms |           5 | `loadClass(String)`                                  | `java.lang.ClassLoader`                       |
|    new | +3.83µs |   0.0% → 0.3% |    0ms → 3.8µs |       0 → 1 | `getDeclaredMethods0(boolean)`                       | `java.lang.Class`                             |
|    new | +3.83µs |   0.0% → 0.3% |    0ms → 3.8µs |       0 → 1 | `privateGetDeclaredMethods(boolean)`                 | `java.lang.Class`                             |
|    new | +3.83µs |   0.0% → 0.3% |    0ms → 3.8µs |       0 → 1 | `getMethodsRecursive(String, Class[], boolean)`      | `java.lang.Class`                             |
|    new | +3.83µs |   0.0% → 0.3% |    0ms → 3.8µs |       0 → 1 | `getMethod0(String, Class[])`                        | `java.lang.Class`                             |
|    new | +3.83µs |   0.0% → 0.3% |    0ms → 3.8µs |       0 → 1 | `getMethod(String, Class[])`                         | `java.lang.Class`                             |
|    new | +3.83µs |   0.0% → 0.3% |    0ms → 3.8µs |       0 → 1 | `getEnumConstantsShared()`                           | `java.lang.Class`                             |
|    new | +3.83µs |   0.0% → 0.3% |    0ms → 3.8µs |       0 → 1 | `getEnumConstantsShared(Class)`                      | `java.lang.System$2`                          |

##### Ours

| Change |   Delta |             % |  Time | Contentions | Function                   | Location                                               |
| -----: | ------: | ------------: | ----: | ----------: | -------------------------- | ------------------------------------------------------ |
|  +7.8% | +0.07ms | 71.2% → 76.1% | 1.0ms |       5 → 6 | `average(List)`            | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  +5.1% | +0.05ms | 73.0% → 76.1% | 1.0ms |           6 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  +5.1% | +0.05ms | 73.0% → 76.1% | 1.0ms |           6 | `computeDirectly()`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  +5.1% | +0.05ms | 73.0% → 76.1% | 1.0ms |           6 | `compute()`                | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

#### Improvements

Functions with the largest decrease in total time blocked in the function and all its callees.

|  Change |   Delta |             % |            Time | Contentions | Function                                      | Location                                                   |
| ------: | ------: | ------------: | --------------: | ----------: | --------------------------------------------- | ---------------------------------------------------------- |
|  -10.6% | -0.04ms | 27.0% → 23.9% |   0.4ms → 0.3ms |       5 → 6 | `deleteRecursively(Path, boolean)`            | `org.renaissance.core.DirUtils`                            |
|  -10.6% | -0.04ms | 27.0% → 23.9% |   0.4ms → 0.3ms |       5 → 6 | `deleteRecursively(Path)`                     | `org.renaissance.core.DirUtils`                            |
|  -10.6% | -0.04ms | 27.0% → 23.9% |   0.4ms → 0.3ms |       5 → 6 | `lambda$createScratchDirectory$1(Path)`       | `org.renaissance.core.DirUtils`                            |
|  -10.6% | -0.04ms | 27.0% → 23.9% |   0.4ms → 0.3ms |       5 → 6 | `run()`                                       | `org.renaissance.core.DirUtils$$Lambda.0x000000c801003a68` |
|  -10.6% | -0.04ms | 27.0% → 23.9% |   0.4ms → 0.3ms |       5 → 6 | `runWith(Object, Runnable)`                   | `java.lang.Thread`                                         |
|  -10.6% | -0.04ms | 27.0% → 23.9% |   0.4ms → 0.3ms |       5 → 6 | `run()`                                       | `java.lang.Thread`                                         |
|   -5.2% | -0.03ms | 41.0% → 38.5% |           0.5ms |           3 | `tryRemoveAndExec(ForkJoinTask, boolean)`     | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
|   -5.2% | -0.03ms | 41.0% → 38.5% |           0.5ms |           3 | `awaitDone(int, long)`                        | `java.util.concurrent.ForkJoinTask`                        |
|   -5.2% | -0.03ms | 41.0% → 38.5% |           0.5ms |           3 | `join()`                                      | `java.util.concurrent.ForkJoinTask`                        |
| removed | -0.02ms |   1.8% → 0.0% |    24.5µs → 0ms |       1 → 0 | `doubleStream(Spliterator$OfDouble, boolean)` | `java.util.stream.StreamSupport`                           |
| removed | -0.02ms |   1.8% → 0.0% |    24.5µs → 0ms |       1 → 0 | `stream(double[], int, int)`                  | `java.util.Arrays`                                         |
| removed | -0.02ms |   1.8% → 0.0% |    24.5µs → 0ms |       1 → 0 | `stream(double[])`                            | `java.util.Arrays`                                         |
| removed | -0.02ms |   1.8% → 0.0% |    24.5µs → 0ms |       1 → 0 | `boxed(double[])`                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|   -9.5% | -0.02ms | 17.4% → 15.6% |           0.2ms |           1 | `loadClassOrNull(String, boolean)`            | `jdk.internal.loader.BuiltinClassLoader`                   |
|   -9.5% | -0.02ms | 17.4% → 15.6% |           0.2ms |           1 | `loadClass(String, boolean)`                  | `jdk.internal.loader.BuiltinClassLoader`                   |
|   -9.5% | -0.02ms | 17.4% → 15.6% |           0.2ms |           1 | `loadClass(String, boolean)`                  | `jdk.internal.loader.ClassLoaders$AppClassLoader`          |
|  -15.5% | -0.02ms |   9.6% → 8.0% |           0.1ms |           4 | `walkFileTree(Path, Set, int, FileVisitor)`   | `java.nio.file.Files`                                      |
| removed | -0.02ms |   1.4% → 0.0% |    19.0µs → 0ms |       1 → 0 | `<init>(Collection, int)`                     | `java.nio.file.FileTreeWalker`                             |
|  -12.5% | -0.02ms |   9.6% → 8.3% |           0.1ms |       4 → 5 | `walkFileTree(Path, FileVisitor)`             | `java.nio.file.Files`                                      |
|  -11.3% | -0.01ms |   3.4% → 3.0% | 45.9µs → 40.7µs |       1 → 2 | `<init>(boolean)`                             | `java.util.concurrent.locks.ReentrantReadWriteLock`        |

##### Standard library

|  Change |   Delta |             % |            Time | Contentions | Function                                      | Location                                            |
| ------: | ------: | ------------: | --------------: | ----------: | --------------------------------------------- | --------------------------------------------------- |
|  -10.6% | -0.04ms | 27.0% → 23.9% |   0.4ms → 0.3ms |       5 → 6 | `runWith(Object, Runnable)`                   | `java.lang.Thread`                                  |
|  -10.6% | -0.04ms | 27.0% → 23.9% |   0.4ms → 0.3ms |       5 → 6 | `run()`                                       | `java.lang.Thread`                                  |
|   -5.2% | -0.03ms | 41.0% → 38.5% |           0.5ms |           3 | `tryRemoveAndExec(ForkJoinTask, boolean)`     | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
|   -5.2% | -0.03ms | 41.0% → 38.5% |           0.5ms |           3 | `awaitDone(int, long)`                        | `java.util.concurrent.ForkJoinTask`                 |
|   -5.2% | -0.03ms | 41.0% → 38.5% |           0.5ms |           3 | `join()`                                      | `java.util.concurrent.ForkJoinTask`                 |
| removed | -0.02ms |   1.8% → 0.0% |    24.5µs → 0ms |       1 → 0 | `doubleStream(Spliterator$OfDouble, boolean)` | `java.util.stream.StreamSupport`                    |
| removed | -0.02ms |   1.8% → 0.0% |    24.5µs → 0ms |       1 → 0 | `stream(double[], int, int)`                  | `java.util.Arrays`                                  |
| removed | -0.02ms |   1.8% → 0.0% |    24.5µs → 0ms |       1 → 0 | `stream(double[])`                            | `java.util.Arrays`                                  |
|   -9.5% | -0.02ms | 17.4% → 15.6% |           0.2ms |           1 | `loadClassOrNull(String, boolean)`            | `jdk.internal.loader.BuiltinClassLoader`            |
|   -9.5% | -0.02ms | 17.4% → 15.6% |           0.2ms |           1 | `loadClass(String, boolean)`                  | `jdk.internal.loader.BuiltinClassLoader`            |
|   -9.5% | -0.02ms | 17.4% → 15.6% |           0.2ms |           1 | `loadClass(String, boolean)`                  | `jdk.internal.loader.ClassLoaders$AppClassLoader`   |
|  -15.5% | -0.02ms |   9.6% → 8.0% |           0.1ms |           4 | `walkFileTree(Path, Set, int, FileVisitor)`   | `java.nio.file.Files`                               |
| removed | -0.02ms |   1.4% → 0.0% |    19.0µs → 0ms |       1 → 0 | `<init>(Collection, int)`                     | `java.nio.file.FileTreeWalker`                      |
|  -12.5% | -0.02ms |   9.6% → 8.3% |           0.1ms |       4 → 5 | `walkFileTree(Path, FileVisitor)`             | `java.nio.file.Files`                               |
|  -11.3% | -0.01ms |   3.4% → 3.0% | 45.9µs → 40.7µs |       1 → 2 | `<init>(boolean)`                             | `java.util.concurrent.locks.ReentrantReadWriteLock` |

##### Ours

|  Change |   Delta |             % |          Time | Contentions | Function                                | Location                                                   |
| ------: | ------: | ------------: | ------------: | ----------: | --------------------------------------- | ---------------------------------------------------------- |
|  -10.6% | -0.04ms | 27.0% → 23.9% | 0.4ms → 0.3ms |       5 → 6 | `deleteRecursively(Path, boolean)`      | `org.renaissance.core.DirUtils`                            |
|  -10.6% | -0.04ms | 27.0% → 23.9% | 0.4ms → 0.3ms |       5 → 6 | `deleteRecursively(Path)`               | `org.renaissance.core.DirUtils`                            |
|  -10.6% | -0.04ms | 27.0% → 23.9% | 0.4ms → 0.3ms |       5 → 6 | `lambda$createScratchDirectory$1(Path)` | `org.renaissance.core.DirUtils`                            |
|  -10.6% | -0.04ms | 27.0% → 23.9% | 0.4ms → 0.3ms |       5 → 6 | `run()`                                 | `org.renaissance.core.DirUtils$$Lambda.0x000000c801003a68` |
| removed | -0.02ms |   1.8% → 0.0% |  24.5µs → 0ms |       1 → 0 | `boxed(double[])`                       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

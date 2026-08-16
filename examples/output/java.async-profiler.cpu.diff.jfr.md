# Sampling profile diff

Collected 4,802 samples → 4,822 samples (+20 samples, +0.4%).

| Category         | Change | Delta |             % |       Samples |
| ---------------- | -----: | ----: | ------------: | ------------: |
| Ours             |  +4.2% |  +117 | 57.8% → 60.0% | 2,777 → 2,894 |
| Native           | -12.1% |  -153 | 26.3% → 23.0% | 1,262 → 1,109 |
| Standard library |  +7.9% |   +52 | 13.7% → 14.7% |     657 → 709 |
| Compiler         | +17.3% |    +9 |   1.1% → 1.3% |       52 → 61 |
| JIT              |  -9.3% |    -5 |   1.1% → 1.0% |       54 → 49 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                                                                                     | Location                                                  |
| ------: | ----: | ------------: | --------: | -------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
|  +10.8% |   +97 | 18.8% → 20.7% | 901 → 998 | `accumulate(Double[], double[])`                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  +10.9% |   +45 |   8.6% → 9.5% | 411 → 456 | `vectorSum()`                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| +156.0% |   +39 |   0.5% → 1.3% |   25 → 64 | `checkIndex(int, int)`                                                                       | `java.util.Objects`                                       |
|  +16.5% |   +22 |   2.8% → 3.2% | 133 → 155 | `computeIfAbsent(Object, Function)`                                                          | `java.util.HashMap`                                       |
|  +14.1% |   +14 |   2.1% → 2.3% |  99 → 113 | `doubleValue()`                                                                              | `java.lang.Double`                                        |
| +144.4% |   +13 |   0.2% → 0.5% |    9 → 22 | `G1FullGCMarker::mark_object`                                                                | `libjvm.dylib`                                            |
| +150.0% |    +6 |   0.1% → 0.2% |    4 → 10 | `grow()`                                                                                     | `java.util.ArrayList`                                     |
|     new |    +4 |   0.0% → 0.1% |     0 → 4 | `compute()`                                                                                  | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`    |
| +200.0% |    +4 |  <0.1% → 0.1% |     2 → 6 | `awaitDone(int, long)`                                                                       | `java.util.concurrent.ForkJoinTask`                       |
|     new |    +4 |   0.0% → 0.1% |     0 → 4 | `void HeapRegion::apply_to_marked_objects<G1FullGCPrepareTask::G1PrepareCompactLiveClosure>` | `libjvm.dylib`                                            |
|  +23.1% |    +3 |          0.3% |   13 → 16 | `pthread_jit_write_protect_np`                                                               | `libsystem_pthread.dylib`                                 |
|  +37.5% |    +3 |          0.2% |    8 → 11 | `merge(Object, Object, BiFunction)`                                                          | `java.util.HashMap`                                       |
|  +50.0% |    +3 |   0.1% → 0.2% |     6 → 9 | `copyOf(Object[], int)`                                                                      | `java.util.Arrays`                                        |
|  +17.6% |    +3 |          0.4% |   17 → 20 | `arrayof_jint_disjoint_arraycopy`                                                            | `<unknown>`                                               |
| +300.0% |    +3 |  <0.1% → 0.1% |     1 → 4 | `newNode(int, Object, Object, HashMap$Node)`                                                 | `java.util.HashMap`                                       |
|     new |    +3 |   0.0% → 0.1% |     0 → 3 | `_platform_memmove`                                                                          | `libsystem_platform.dylib`                                |
| +100.0% |    +2 |  <0.1% → 0.1% |     2 → 4 | `mach_absolute_time`                                                                         | `libsystem_kernel.dylib`                                  |
| +200.0% |    +2 |  <0.1% → 0.1% |     1 → 3 | `PhaseChaitin::Split`                                                                        | `libjvm.dylib`                                            |
| +200.0% |    +2 |  <0.1% → 0.1% |     1 → 3 | `G1ParScanThreadState::trim_queue_to_threshold`                                              | `libjvm.dylib`                                            |
|  +66.7% |    +2 |          0.1% |     3 → 5 | `exec()`                                                                                     | `java.util.concurrent.RecursiveTask`                      |

##### Ours

| Change | Delta |             % |   Samples | Function                             | Location                                                   |
| -----: | ----: | ------------: | --------: | ------------------------------------ | ---------------------------------------------------------- |
| +10.8% |   +97 | 18.8% → 20.7% | 901 → 998 | `accumulate(Double[], double[])`     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| +10.9% |   +45 |   8.6% → 9.5% | 411 → 456 | `vectorSum()`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|    new |    +4 |   0.0% → 0.1% |     0 → 4 | `compute()`                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
|    new |    +2 |  0.0% → <0.1% |     0 → 2 | `combineResults(Object, Object)`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|    new |    +1 |  0.0% → <0.1% |     0 → 1 | `computeDirectly()`                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|    new |    +1 |  0.0% → <0.1% |     0 → 1 | `merge(Map, Map)`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  +0.9% |    +1 |          2.4% | 114 → 115 | `collectClusters(int[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|    new |    +1 |  0.0% → <0.1% |     0 → 1 | `lambda$run$0(int, List, int)`       | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| +50.0% |    +1 |  <0.1% → 0.1% |     2 → 3 | `add(double[], double[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|    new |    +1 |  0.0% → <0.1% |     0 → 1 | `<init>(JavaKMeans, List, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|    new |    +1 |  0.0% → <0.1% |     0 → 1 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### Native

|  Change | Delta |            % | Samples | Function                                                                                     | Location                   |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------- | -------------------------- |
| +144.4% |   +13 |  0.2% → 0.5% |  9 → 22 | `G1FullGCMarker::mark_object`                                                                | `libjvm.dylib`             |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `void HeapRegion::apply_to_marked_objects<G1FullGCPrepareTask::G1PrepareCompactLiveClosure>` | `libjvm.dylib`             |
|  +23.1% |    +3 |         0.3% | 13 → 16 | `pthread_jit_write_protect_np`                                                               | `libsystem_pthread.dylib`  |
|  +17.6% |    +3 |         0.4% | 17 → 20 | `arrayof_jint_disjoint_arraycopy`                                                            | `<unknown>`                |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `_platform_memmove`                                                                          | `libsystem_platform.dylib` |
| +100.0% |    +2 | <0.1% → 0.1% |   2 → 4 | `mach_absolute_time`                                                                         | `libsystem_kernel.dylib`   |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `G1ParScanThreadState::trim_queue_to_threshold`                                              | `libjvm.dylib`             |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `G1ParScanThreadState::do_partial_array`                                                     | `libjvm.dylib`             |
|  +50.0% |    +2 |         0.1% |   4 → 6 | `G1FullGCMarker::follow_object`                                                              | `libjvm.dylib`             |
|  +66.7% |    +2 |         0.1% |   3 → 5 | `ObjArrayAllocator::initialize`                                                              | `libjvm.dylib`             |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `stub:pthread_mutex_unlock`                                                                  | `libjvm.dylib`             |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `G1FullGCCompactTask::G1CompactRegionClosure::apply`                                         | `libjvm.dylib`             |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `Arena::contains`                                                                            | `libjvm.dylib`             |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `char* UNICODE::as_utf8<signed char>`                                                        | `libjvm.dylib`             |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `__psynch_cvbroad`                                                                           | `libsystem_kernel.dylib`   |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `stub:memset`                                                                                | `libjvm.dylib`             |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `GrowableArrayWithAllocator<int, GrowableArray<int>>::expand_to`                             | `libjvm.dylib`             |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `MarkBitMap::check_mark`                                                                     | `libjvm.dylib`             |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `ThreadCritical::ThreadCritical`                                                             | `libjvm.dylib`             |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `OptoRuntime::new_array_C`                                                                   | `libjvm.dylib`             |

##### Standard library

|  Change | Delta |            % |   Samples | Function                                      | Location                                       |
| ------: | ----: | -----------: | --------: | --------------------------------------------- | ---------------------------------------------- |
| +156.0% |   +39 |  0.5% → 1.3% |   25 → 64 | `checkIndex(int, int)`                        | `java.util.Objects`                            |
|  +16.5% |   +22 |  2.8% → 3.2% | 133 → 155 | `computeIfAbsent(Object, Function)`           | `java.util.HashMap`                            |
|  +14.1% |   +14 |  2.1% → 2.3% |  99 → 113 | `doubleValue()`                               | `java.lang.Double`                             |
| +150.0% |    +6 |  0.1% → 0.2% |    4 → 10 | `grow()`                                      | `java.util.ArrayList`                          |
| +200.0% |    +4 | <0.1% → 0.1% |     2 → 6 | `awaitDone(int, long)`                        | `java.util.concurrent.ForkJoinTask`            |
|  +37.5% |    +3 |         0.2% |    8 → 11 | `merge(Object, Object, BiFunction)`           | `java.util.HashMap`                            |
|  +50.0% |    +3 |  0.1% → 0.2% |     6 → 9 | `copyOf(Object[], int)`                       | `java.util.Arrays`                             |
| +300.0% |    +3 | <0.1% → 0.1% |     1 → 4 | `newNode(int, Object, Object, HashMap$Node)`  | `java.util.HashMap`                            |
|  +66.7% |    +2 |         0.1% |     3 → 5 | `exec()`                                      | `java.util.concurrent.RecursiveTask`           |
|     new |    +2 | 0.0% → <0.1% |     0 → 2 | `unpark(Thread)`                              | `java.util.concurrent.locks.LockSupport`       |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `doExec()`                                    | `java.util.concurrent.ForkJoinTask`            |
| +100.0% |    +1 |        <0.1% |     1 → 2 | `signalWork()`                                | `java.util.concurrent.ForkJoinPool`            |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `toArray()`                                   | `java.util.ArrayList`                          |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `evaluate(Spliterator, boolean, IntFunction)` | `java.util.stream.AbstractPipeline`            |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `evaluateToArrayNode(IntFunction)`            | `java.util.stream.AbstractPipeline`            |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `accept(int)`                                 | `java.util.stream.IntPipeline$1$1`             |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `forEachRemaining(IntConsumer)`               | `java.util.stream.Streams$RangeIntSpliterator` |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `allocateInstance(Object)`                    | `java.lang.invoke.DirectMethodHandle`          |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `size()`                                      | `java.util.ArrayList`                          |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `<init>(int, Object, Object, HashMap$Node)`   | `java.util.HashMap$Node`                       |

##### Compiler

|  Change | Delta |            % | Samples | Function                                        | Location       |
| ------: | ----: | -----------: | ------: | ----------------------------------------------- | -------------- |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `PhaseChaitin::Split`                           | `libjvm.dylib` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `PhaseChaitin::build_ifg_virtual`               | `libjvm.dylib` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `Node_Backward_Iterator::next`                  | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseIdealLoop::build_loop_late`               | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseIFG::effective_degree`                    | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `Matcher::match_tree`                           | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep`   | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `LIR_Assembler::emit_code`                      | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `ciObjectFactory::ciObjectFactory`              | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseIterGVN::remove_globally_dead_node`       | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseChaitin::post_allocate_copy_removal`      | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `DebugInformationRecorder::describe_scope`      | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhiNode::Identity`                             | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseIdealLoop::build_loop_tree`               | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `ProjNode::is_CFG`                              | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseIFG::init`                                | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `LinearScan::compute_debug_info_for_scope`      | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `LinearScan::assign_reg_num`                    | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `LIRGenerator::state_for`                       | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `LinearScanWalker::free_collect_inactive_fixed` | `libjvm.dylib` |

##### JIT

| Change | Delta |            % | Samples | Function                 | Location    |
| -----: | ----: | -----------: | ------: | ------------------------ | ----------- |
|    new |    +2 | 0.0% → <0.1% |   0 → 2 | `I2C/C2I adapters(0xba)` | `<unknown>` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `vtable stub`            | `<unknown>` |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                                                                                        | Location                                                   |
| ------: | ----: | ------------: | --------: | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
|   -8.1% |   -55 | 14.1% → 12.9% | 679 → 624 | `__psynch_cvwait`                                                                               | `libsystem_kernel.dylib`                                   |
|  -22.4% |   -55 |   5.1% → 3.9% | 245 → 190 | `forward_copy_longs`                                                                            | `<unknown>`                                                |
|   -5.9% |   -24 |   8.5% → 8.0% | 410 → 386 | `findNearestCentroid()`                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -9.8% |   -17 |   3.6% → 3.2% | 173 → 156 | `elementData(int)`                                                                              | `java.util.ArrayList`                                      |
|  -51.7% |   -15 |   0.6% → 0.3% |   29 → 14 | `_platform_bzero`                                                                               | `libsystem_platform.dylib`                                 |
|  -34.6% |    -9 |   0.5% → 0.4% |   26 → 17 | `grow(int)`                                                                                     | `java.util.ArrayList`                                      |
|  -37.5% |    -9 |   0.5% → 0.3% |   24 → 15 | `semaphore_wait_trap`                                                                           | `libsystem_kernel.dylib`                                   |
|  -15.1% |    -8 |   1.1% → 0.9% |   53 → 45 | `zero_blocks`                                                                                   | `<unknown>`                                                |
|  -43.8% |    -7 |   0.3% → 0.2% |    16 → 9 | `_platform_memset`                                                                              | `libsystem_platform.dylib`                                 |
|  -58.3% |    -7 |   0.2% → 0.1% |    12 → 5 | `void G1ScanEvacuatedObjClosure::do_oop_work<narrowOop>`                                        | `libjvm.dylib`                                             |
| removed |    -6 |   0.1% → 0.0% |     6 → 0 | `ClassLoaderDataGraphKlassIteratorAtomic::next_klass`                                           | `libjvm.dylib`                                             |
|   -0.5% |    -5 | 19.3% → 19.1% | 926 → 921 | `distance(Double[], Double[])`                                                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -57.1% |    -4 |          0.1% |     7 → 3 | `tlv_get_addr`                                                                                  | `libdyld.dylib`                                            |
| removed |    -4 |   0.1% → 0.0% |     4 → 0 | `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>`                                 | `libjvm.dylib`                                             |
|  -80.0% |    -4 |  0.1% → <0.1% |     5 → 1 | `forEach(BiConsumer)`                                                                           | `java.util.HashMap`                                        |
|   -7.1% |    -4 |   1.2% → 1.1% |   56 → 52 | `add(Object, Object[], int)`                                                                    | `java.util.ArrayList`                                      |
|   -8.2% |    -4 |   1.0% → 0.9% |   49 → 45 | `__psynch_cvsignal`                                                                             | `libsystem_kernel.dylib`                                   |
| removed |    -4 |   0.1% → 0.0% |     4 → 0 | `G1BarrierSet::invalidate`                                                                      | `libjvm.dylib`                                             |
|  -80.0% |    -4 |  0.1% → <0.1% |     5 → 1 | `void OopOopIterateDispatch<G1AdjustClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>` | `libjvm.dylib`                                             |
|  -75.0% |    -3 |  0.1% → <0.1% |     4 → 1 | `PhaseChaitin::build_ifg_physical`                                                              | `libjvm.dylib`                                             |

##### Ours

|  Change | Delta |             % |   Samples | Function                                   | Location                                                               |
| ------: | ----: | ------------: | --------: | ------------------------------------------ | ---------------------------------------------------------------------- |
|   -5.9% |   -24 |   8.5% → 8.0% | 410 → 386 | `findNearestCentroid()`                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -0.5% |    -5 | 19.3% → 19.1% | 926 → 921 | `distance(Double[], Double[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| removed |    -2 |  <0.1% → 0.0% |     2 → 0 | `accept(Object, Object)`                   | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000e801187478` |
| removed |    -2 |  <0.1% → 0.0% |     2 → 0 | `<init>(JavaKMeans, int, int)`             | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `computeDirectly()`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `div(double[], int)`                       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `createSubtask(int, int)`                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `<init>(JavaKMeans, List, List, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `combineResults(Object, Object)`           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |

##### Native

|  Change | Delta |             % |   Samples | Function                                                                                        | Location                   |
| ------: | ----: | ------------: | --------: | ----------------------------------------------------------------------------------------------- | -------------------------- |
|   -8.1% |   -55 | 14.1% → 12.9% | 679 → 624 | `__psynch_cvwait`                                                                               | `libsystem_kernel.dylib`   |
|  -22.4% |   -55 |   5.1% → 3.9% | 245 → 190 | `forward_copy_longs`                                                                            | `<unknown>`                |
|  -51.7% |   -15 |   0.6% → 0.3% |   29 → 14 | `_platform_bzero`                                                                               | `libsystem_platform.dylib` |
|  -37.5% |    -9 |   0.5% → 0.3% |   24 → 15 | `semaphore_wait_trap`                                                                           | `libsystem_kernel.dylib`   |
|  -43.8% |    -7 |   0.3% → 0.2% |    16 → 9 | `_platform_memset`                                                                              | `libsystem_platform.dylib` |
|  -58.3% |    -7 |   0.2% → 0.1% |    12 → 5 | `void G1ScanEvacuatedObjClosure::do_oop_work<narrowOop>`                                        | `libjvm.dylib`             |
| removed |    -6 |   0.1% → 0.0% |     6 → 0 | `ClassLoaderDataGraphKlassIteratorAtomic::next_klass`                                           | `libjvm.dylib`             |
|  -57.1% |    -4 |          0.1% |     7 → 3 | `tlv_get_addr`                                                                                  | `libdyld.dylib`            |
| removed |    -4 |   0.1% → 0.0% |     4 → 0 | `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>`                                 | `libjvm.dylib`             |
|   -8.2% |    -4 |   1.0% → 0.9% |   49 → 45 | `__psynch_cvsignal`                                                                             | `libsystem_kernel.dylib`   |
| removed |    -4 |   0.1% → 0.0% |     4 → 0 | `G1BarrierSet::invalidate`                                                                      | `libjvm.dylib`             |
|  -80.0% |    -4 |  0.1% → <0.1% |     5 → 1 | `void OopOopIterateDispatch<G1AdjustClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>` | `libjvm.dylib`             |
| removed |    -3 |   0.1% → 0.0% |     3 → 0 | `G1ParScanThreadState::start_partial_objarray`                                                  | `libjvm.dylib`             |
| removed |    -3 |   0.1% → 0.0% |     3 → 0 | `Unsafe_Unpark`                                                                                 | `libjvm.dylib`             |
|  -60.0% |    -3 |  0.1% → <0.1% |     5 → 2 | `void G1ScanClosureBase::handle_non_cset_obj_common<narrowOop>`                                 | `libjvm.dylib`             |
|  -16.7% |    -2 |          0.2% |   12 → 10 | `__psynch_mutexwait`                                                                            | `libsystem_kernel.dylib`   |
| removed |    -2 |  <0.1% → 0.0% |     2 → 0 | `_pthread_mutex_firstfit_lock_slow`                                                             | `libsystem_pthread.dylib`  |
|  -18.2% |    -2 |          0.2% |    11 → 9 | `G1ParScanThreadState::do_copy_to_survivor_space`                                               | `libjvm.dylib`             |
|  -50.0% |    -2 |  0.1% → <0.1% |     4 → 2 | `semaphore_signal_trap`                                                                         | `libsystem_kernel.dylib`   |
| removed |    -2 |  <0.1% → 0.0% |     2 → 0 | `pthread_cond_signal`                                                                           | `libsystem_pthread.dylib`  |

##### Standard library

|  Change | Delta |            % |   Samples | Function                                                  | Location                                      |
| ------: | ----: | -----------: | --------: | --------------------------------------------------------- | --------------------------------------------- |
|   -9.8% |   -17 |  3.6% → 3.2% | 173 → 156 | `elementData(int)`                                        | `java.util.ArrayList`                         |
|  -34.6% |    -9 |  0.5% → 0.4% |   26 → 17 | `grow(int)`                                               | `java.util.ArrayList`                         |
|  -80.0% |    -4 | 0.1% → <0.1% |     5 → 1 | `forEach(BiConsumer)`                                     | `java.util.HashMap`                           |
|   -7.1% |    -4 |  1.2% → 1.1% |   56 → 52 | `add(Object, Object[], int)`                              | `java.util.ArrayList`                         |
|  -75.0% |    -3 | 0.1% → <0.1% |     4 → 1 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  -75.0% |    -3 | 0.1% → <0.1% |     4 → 1 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`           |
| removed |    -3 |  0.1% → 0.0% |     3 → 0 | `signalWaiters()`                                         | `java.util.concurrent.ForkJoinTask`           |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `addAll(Collection)`                                      | `java.util.ArrayList`                         |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `unpark(Object)`                                          | `jdk.internal.misc.Unsafe`                    |
|   -6.9% |    -2 |         0.6% |   29 → 27 | `hash(Object)`                                            | `java.util.HashMap`                           |
|  -66.7% |    -2 | 0.1% → <0.1% |     3 → 1 | `putMapEntries(Map, boolean)`                             | `java.util.HashMap`                           |
|   -4.2% |    -1 |         0.5% |   24 → 23 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
|  -25.0% |    -1 |         0.1% |     4 → 3 | `add(Object)`                                             | `java.util.ArrayList`                         |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `copyOf(Object[], int, Class)`                            | `java.util.Arrays`                            |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `accept(double)`                                          | `java.util.stream.DoublePipeline$1$1`         |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `forEachRemaining(Consumer)`                              | `java.util.Spliterator$OfDouble`              |
|  -50.0% |    -1 |        <0.1% |     2 → 1 | `fork()`                                                  | `java.util.concurrent.ForkJoinTask`           |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `getAndSetAccess(int)`                                    | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `push(ForkJoinTask, ForkJoinPool, boolean)`               | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `resize()`                                                | `java.util.HashMap`                           |

##### Compiler

|  Change | Delta |            % | Samples | Function                                             | Location       |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------- | -------------- |
|  -75.0% |    -3 | 0.1% → <0.1% |   4 → 1 | `PhaseChaitin::build_ifg_physical`                   | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `IndexSetIterator::advance_and_next`                 | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal` | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Type::singleton`                                    | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `IdealKit::clear`                                    | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `TypeOopPtr::is_loaded`                              | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Type::cmp`                                          | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `RegMask::is_bound`                                  | `libjvm.dylib` |
|  -50.0% |    -1 |        <0.1% |   2 → 1 | `PhaseChaitin::gather_lrg_masks`                     | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Matcher::xform`                                     | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseIdealLoop::is_dominator`                       | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `CompilationPolicy::create_mdo`                      | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `AdapterHandlerLibrary::get_adapter`                 | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `LinearScan::resolve_data_flow`                      | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `IntervalWalker::walk_to`                            | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhiNode::wait_for_region_igvn`                      | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `loadLNode::oper_input_base`                         | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Unique_Node_List::remove`                           | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Node::is_CFG`                                       | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseCFG::build_cfg`                                | `libjvm.dylib` |

##### JIT

| Change | Delta |           % | Samples | Function      | Location    |
| -----: | ----: | ----------: | ------: | ------------- | ----------- |
| -15.1% |    -8 | 1.1% → 0.9% | 53 → 45 | `zero_blocks` | `<unknown>` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |             % |       Samples | Function                                             | Location                                                   |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------- | ---------------------------------------------------------- |
|   +9.7% |  +144 | 31.0% → 33.8% | 1,488 → 1,632 | `vectorSum()`                                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   +9.7% |  +144 | 31.0% → 33.9% | 1,489 → 1,633 | `computeDirectly()`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   +3.4% |  +130 | 79.7% → 82.1% | 3,829 → 3,959 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
|   +2.6% |  +107 | 84.3% → 86.2% | 4,049 → 4,156 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                        |
|   +2.6% |  +105 | 84.3% → 86.1% | 4,049 → 4,154 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                        |
|  +10.1% |  +100 | 20.6% → 22.6% |   990 → 1,090 | `accumulate(Double[], double[])`                     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   +1.8% |   +74 | 88.0% → 89.2% | 4,226 → 4,300 | `compute()`                                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
|   +1.7% |   +73 | 88.0% → 89.2% | 4,228 → 4,301 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                       |
|   +1.4% |   +60 | 88.7% → 89.5% | 4,258 → 4,318 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                        |
|   +1.4% |   +60 | 88.7% → 89.5% | 4,258 → 4,318 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
|   +1.3% |   +54 | 88.8% → 89.6% | 4,266 → 4,320 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                        |
| +156.0% |   +39 |   0.5% → 1.3% |       25 → 64 | `checkIndex(int, int)`                               | `java.util.Objects`                                        |
|   +2.0% |   +37 | 38.8% → 39.4% | 1,861 → 1,898 | `computeDirectly()`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   +5.4% |   +36 | 14.0% → 14.7% |     672 → 708 | `computeClusterAverages()`                           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|   +5.4% |   +36 | 14.0% → 14.7% |     672 → 708 | `computeDirectly()`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|   +7.5% |   +34 |  9.4% → 10.1% |     453 → 487 | `collectClusters(int[])`                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|     new |   +34 |   0.0% → 0.7% |        0 → 34 | `invokeStatic(Object, Object)`                       | `java.lang.invoke.LambdaForm$DMH.0x000000e801004800`       |
|     new |   +34 |   0.0% → 0.7% |        0 → 34 | `invoke(Object, Object, Object)`                     | `java.lang.invoke.LambdaForm$MH.0x000000e801009800`        |
|   +4.9% |   +33 | 13.9% → 14.6% |     669 → 702 | `average(List)`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|   +0.5% |   +24 | 94.7% → 94.8% | 4,549 → 4,573 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                        |

##### Ours

|  Change | Delta |             % |       Samples | Function                                                                                                               | Location                                                               |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|   +9.7% |  +144 | 31.0% → 33.8% | 1,488 → 1,632 | `vectorSum()`                                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   +9.7% |  +144 | 31.0% → 33.9% | 1,489 → 1,633 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  +10.1% |  +100 | 20.6% → 22.6% |   990 → 1,090 | `accumulate(Double[], double[])`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   +1.8% |   +74 | 88.0% → 89.2% | 4,226 → 4,300 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|   +2.0% |   +37 | 38.8% → 39.4% | 1,861 → 1,898 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   +5.4% |   +36 | 14.0% → 14.7% |     672 → 708 | `computeClusterAverages()`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   +5.4% |   +36 | 14.0% → 14.7% |     672 → 708 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   +7.5% |   +34 |  9.4% → 10.1% |     453 → 487 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   +4.9% |   +33 | 13.9% → 14.6% |     669 → 702 | `average(List)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   +0.4% |    +4 |         19.6% |     939 → 943 | `distance(Double[], Double[])`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  +11.1% |    +4 |   0.7% → 0.8% |       36 → 40 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                        |
|  +11.1% |    +4 |   0.7% → 0.8% |       36 → 40 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                        |
|  +11.4% |    +4 |   0.7% → 0.8% |       35 → 39 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                        |
|  +13.8% |    +4 |   0.6% → 0.7% |       29 → 33 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
| +150.0% |    +3 |  <0.1% → 0.1% |         2 → 5 | `boxed(double[])`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   +9.7% |    +3 |   0.6% → 0.7% |       31 → 34 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
|  +17.6% |    +3 |          0.4% |       17 → 20 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +18.8% |    +3 |   0.3% → 0.4% |       16 → 19 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +18.8% |    +3 |   0.3% → 0.4% |       16 → 19 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000e80111efe0` |
|  +25.0% |    +3 |   0.2% → 0.3% |       12 → 15 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |

##### Native

|  Change | Delta |            % | Samples | Function                                                                                     | Location                  |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------- | ------------------------- |
| +170.0% |   +17 |  0.2% → 0.6% | 10 → 27 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>`                              | `libjvm.dylib`            |
|  +64.0% |   +16 |  0.5% → 0.9% | 25 → 41 | `G1FullGCMarker::complete_marking`                                                           | `libjvm.dylib`            |
|  +64.0% |   +16 |  0.5% → 0.9% | 25 → 41 | `G1FullGCMarkTask::work`                                                                     | `libjvm.dylib`            |
| +116.7% |   +14 |  0.2% → 0.5% | 12 → 26 | `G1FullGCMarker::mark_object`                                                                | `libjvm.dylib`            |
|  +44.4% |    +8 |  0.4% → 0.5% | 18 → 26 | `G1FullGCMarker::follow_marking_stacks`                                                      | `libjvm.dylib`            |
| +100.0% |    +8 |  0.2% → 0.3% |  8 → 16 | `Compiler::compile_method`                                                                   | `libjvm.dylib`            |
|     new |    +6 |  0.0% → 0.1% |   0 → 6 | `void HeapRegion::apply_to_marked_objects<G1FullGCPrepareTask::G1PrepareCompactLiveClosure>` | `libjvm.dylib`            |
|     new |    +6 |  0.0% → 0.1% |   0 → 6 | `G1FullGCPrepareTask::work`                                                                  | `libjvm.dylib`            |
| +100.0% |    +5 |  0.1% → 0.2% |  5 → 10 | `MemAllocator::mem_allocate_inside_tlab_slow`                                                | `libjvm.dylib`            |
|     new |    +5 |  0.0% → 0.1% |   0 → 5 | `FreeCSetClosure::do_heap_region`                                                            | `libjvm.dylib`            |
|     new |    +5 |  0.0% → 0.1% |   0 → 5 | `G1CollectedHeap::par_iterate_regions_array`                                                 | `libjvm.dylib`            |
|     new |    +5 |  0.0% → 0.1% |   0 → 5 | `G1PostEvacuateCollectionSetCleanupTask2::FreeCollectionSetTask::do_work`                    | `libjvm.dylib`            |
| +400.0% |    +4 | <0.1% → 0.1% |   1 → 5 | `G1BatchedTask::work`                                                                        | `libjvm.dylib`            |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `CompositeElapsedCounterSource::now`                                                         | `libjvm.dylib`            |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `os::elapsed_counter`                                                                        | `libjvm.dylib`            |
|  +23.1% |    +3 |         0.3% | 13 → 16 | `pthread_jit_write_protect_np`                                                               | `libsystem_pthread.dylib` |
|   +5.7% |    +3 |  1.1% → 1.2% | 53 → 56 | `arrayof_oop_disjoint_arraycopy`                                                             | `<unknown>`               |
|  +75.0% |    +3 |         0.1% |   4 → 7 | `G1CollectedHeap::attempt_allocation`                                                        | `libjvm.dylib`            |
|  +75.0% |    +3 |         0.1% |   4 → 7 | `KlassFactory::create_from_stream`                                                           | `libjvm.dylib`            |
|  +75.0% |    +3 |         0.1% |   4 → 7 | `SystemDictionary::resolve_class_from_stream`                                                | `libjvm.dylib`            |

##### Standard library

|  Change | Delta |             % |       Samples | Function                                                                    | Location                                             |
| ------: | ----: | ------------: | ------------: | --------------------------------------------------------------------------- | ---------------------------------------------------- |
|   +3.4% |  +130 | 79.7% → 82.1% | 3,829 → 3,959 | `tryRemoveAndExec(ForkJoinTask, boolean)`                                   | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|   +2.6% |  +107 | 84.3% → 86.2% | 4,049 → 4,156 | `join()`                                                                    | `java.util.concurrent.ForkJoinTask`                  |
|   +2.6% |  +105 | 84.3% → 86.1% | 4,049 → 4,154 | `awaitDone(int, long)`                                                      | `java.util.concurrent.ForkJoinTask`                  |
|   +1.7% |   +73 | 88.0% → 89.2% | 4,228 → 4,301 | `exec()`                                                                    | `java.util.concurrent.RecursiveTask`                 |
|   +1.4% |   +60 | 88.7% → 89.5% | 4,258 → 4,318 | `doExec()`                                                                  | `java.util.concurrent.ForkJoinTask`                  |
|   +1.4% |   +60 | 88.7% → 89.5% | 4,258 → 4,318 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`                        | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|   +1.3% |   +54 | 88.8% → 89.6% | 4,266 → 4,320 | `scan(ForkJoinPool$WorkQueue, int, int)`                                    | `java.util.concurrent.ForkJoinPool`                  |
| +156.0% |   +39 |   0.5% → 1.3% |       25 → 64 | `checkIndex(int, int)`                                                      | `java.util.Objects`                                  |
|     new |   +34 |   0.0% → 0.7% |        0 → 34 | `invokeStatic(Object, Object)`                                              | `java.lang.invoke.LambdaForm$DMH.0x000000e801004800` |
|     new |   +34 |   0.0% → 0.7% |        0 → 34 | `invoke(Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x000000e801009800`  |
|   +0.5% |   +24 | 94.7% → 94.8% | 4,549 → 4,573 | `runWorker(ForkJoinPool$WorkQueue)`                                         | `java.util.concurrent.ForkJoinPool`                  |
|   +0.5% |   +24 | 94.7% → 94.8% | 4,549 → 4,573 | `run()`                                                                     | `java.util.concurrent.ForkJoinWorkerThread`          |
|  +14.2% |   +23 |   3.4% → 3.8% |     162 → 185 | `computeIfAbsent(Object, Function)`                                         | `java.util.HashMap`                                  |
|  +11.0% |   +22 |   4.2% → 4.6% |     200 → 222 | `get(int)`                                                                  | `java.util.ArrayList`                                |
|   +1.8% |   +17 | 20.1% → 20.3% |     964 → 981 | `invoke()`                                                                  | `java.util.concurrent.ForkJoinTask`                  |
|  +14.1% |   +14 |   2.1% → 2.3% |      99 → 113 | `doubleValue()`                                                             | `java.lang.Double`                                   |
|  +23.2% |   +13 |   1.2% → 1.4% |       56 → 69 | `grow()`                                                                    | `java.util.ArrayList`                                |
|   +5.2% |    +6 |   2.4% → 2.5% |     115 → 121 | `add(Object, Object[], int)`                                                | `java.util.ArrayList`                                |
|   +4.2% |    +5 |   2.5% → 2.6% |     119 → 124 | `add(Object)`                                                               | `java.util.ArrayList`                                |
|  +38.5% |    +5 |   0.3% → 0.4% |       13 → 18 | `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` | `java.security.AccessController`                     |

##### Compiler

|  Change | Delta |            % | Samples | Function                                    | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------- | -------------- |
| +100.0% |    +8 |  0.2% → 0.3% |  8 → 16 | `Compilation::compile_method`               | `libjvm.dylib` |
| +100.0% |    +8 |  0.2% → 0.3% |  8 → 16 | `Compilation::Compilation`                  | `libjvm.dylib` |
| +116.7% |    +7 |  0.1% → 0.3% |  6 → 13 | `Compilation::compile_java_method`          | `libjvm.dylib` |
|   +7.1% |    +5 |  1.5% → 1.6% | 70 → 75 | `CompileBroker::invoke_compiler_on_method`  | `libjvm.dylib` |
| +200.0% |    +4 | <0.1% → 0.1% |   2 → 6 | `PhaseChaitin::Split`                       | `libjvm.dylib` |
| +133.3% |    +4 |         0.1% |   3 → 7 | `Compilation::emit_lir`                     | `libjvm.dylib` |
| +150.0% |    +3 | <0.1% → 0.1% |   2 → 5 | `Compilation::build_hir`                    | `libjvm.dylib` |
| +100.0% |    +3 |         0.1% |   3 → 6 | `LinearScan::do_linear_scan`                | `libjvm.dylib` |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `PhaseOutput::Output`                       | `libjvm.dylib` |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `PhaseCFG::global_code_motion`              | `libjvm.dylib` |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `PhaseCFG::do_global_code_motion`           | `libjvm.dylib` |
|   +2.4% |    +2 |  1.7% → 1.8% | 84 → 86 | `CompileBroker::compiler_thread_loop`       | `libjvm.dylib` |
|  +50.0% |    +2 |         0.1% |   4 → 6 | `PhaseIterGVN::transform_old`               | `libjvm.dylib` |
|  +50.0% |    +2 |         0.1% |   4 → 6 | `PhaseIterGVN::optimize`                    | `libjvm.dylib` |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `GraphBuilder::invoke`                      | `libjvm.dylib` |
| +100.0% |    +2 | <0.1% → 0.1% |   2 → 4 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib` |
| +100.0% |    +2 | <0.1% → 0.1% |   2 → 4 | `GraphBuilder::iterate_all_blocks`          | `libjvm.dylib` |
| +100.0% |    +2 | <0.1% → 0.1% |   2 → 4 | `GraphBuilder::GraphBuilder`                | `libjvm.dylib` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `PhaseChaitin::build_ifg_virtual`           | `libjvm.dylib` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `LinearScan::assign_reg_num`                | `libjvm.dylib` |

##### JIT

| Change | Delta |            % | Samples | Function                 | Location    |
| -----: | ----: | -----------: | ------: | ------------------------ | ----------- |
|    new |    +2 | 0.0% → <0.1% |   0 → 2 | `I2C/C2I adapters(0xba)` | `<unknown>` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `vtable stub`            | `<unknown>` |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

| Change | Delta |             % |     Samples | Function                                                  | Location                                                               |
| -----: | ----: | ------------: | ----------: | --------------------------------------------------------- | ---------------------------------------------------------------------- |
| -24.1% |   -95 |   8.2% → 6.2% |   394 → 299 | `merge(Map, Map)`                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| -24.1% |   -95 |   8.2% → 6.2% |   394 → 299 | `combineResults(Map, Map)`                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| -24.5% |   -94 |   8.0% → 6.0% |   383 → 289 | `forEach(BiConsumer)`                                     | `java.util.HashMap`                                                    |
| -23.6% |   -93 |   8.2% → 6.2% |   394 → 301 | `combineResults(Object, Object)`                          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| -23.8% |   -90 |   7.9% → 6.0% |   378 → 288 | `accept(Object, Object)`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000e801187478` |
| -23.4% |   -88 |   7.8% → 6.0% |   376 → 288 | `lambda$merge$7(Map, Object, List)`                       | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| -23.2% |   -87 |   7.8% → 6.0% |   375 → 288 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                                                    |
|  -7.4% |   -79 | 22.3% → 20.6% | 1,070 → 991 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                                    |
| -26.4% |   -57 |   4.5% → 3.3% |   216 → 159 | `arrayof_jint_disjoint_arraycopy`                         | `<unknown>`                                                            |
|  -8.1% |   -55 | 14.1% → 12.9% |   679 → 624 | `__psynch_cvwait`                                         | `libsystem_kernel.dylib`                                               |
|  -8.3% |   -55 | 13.8% → 12.6% |   664 → 609 | `Parker::park`                                            | `libjvm.dylib`                                                         |
| -22.4% |   -55 |   5.1% → 3.9% |   245 → 190 | `forward_copy_longs`                                      | `<unknown>`                                                            |
|  -7.7% |   -52 | 14.0% → 12.8% |   671 → 619 | `Unsafe_Park`                                             | `libjvm.dylib`                                                         |
|  -7.7% |   -52 | 14.0% → 12.9% |   673 → 621 | `park(boolean, long)`                                     | `jdk.internal.misc.Unsafe`                                             |
|  -7.6% |   -50 | 13.7% → 12.7% |   660 → 610 | `park()`                                                  | `java.util.concurrent.locks.LockSupport`                               |
| -18.9% |   -50 |   5.5% → 4.5% |   265 → 215 | `lambda$merge$6(List, List)`                              | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| -18.9% |   -50 |   5.5% → 4.5% |   265 → 215 | `apply(Object, Object)`                                   | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000e8011876c0` |
| -24.5% |   -46 |   3.9% → 2.9% |   188 → 142 | `addAll(Collection)`                                      | `java.util.ArrayList`                                                  |
| -21.4% |   -45 |   4.4% → 3.4% |   210 → 165 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                                                     |
| -23.0% |   -40 |   3.6% → 2.8% |   174 → 134 | `toArray()`                                               | `java.util.ArrayList`                                                  |

##### Ours

|  Change | Delta |            % |   Samples | Function                                                               | Location                                                               |
| ------: | ----: | -----------: | --------: | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|  -24.1% |   -95 |  8.2% → 6.2% | 394 → 299 | `merge(Map, Map)`                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -24.1% |   -95 |  8.2% → 6.2% | 394 → 299 | `combineResults(Map, Map)`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -23.6% |   -93 |  8.2% → 6.2% | 394 → 301 | `combineResults(Object, Object)`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -23.8% |   -90 |  7.9% → 6.0% | 378 → 288 | `accept(Object, Object)`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000e801187478` |
|  -23.4% |   -88 |  7.8% → 6.0% | 376 → 288 | `lambda$merge$7(Map, Object, List)`                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -18.9% |   -50 |  5.5% → 4.5% | 265 → 215 | `lambda$merge$6(List, List)`                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -18.9% |   -50 |  5.5% → 4.5% | 265 → 215 | `apply(Object, Object)`                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000e8011876c0` |
| removed |    -3 |  0.1% → 0.0% |     3 → 0 | `createSubtask(int, int)`                                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -66.7% |    -2 | 0.1% → <0.1% |     3 → 1 | `apply(int)`                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000e801125b10` |
|  -66.7% |    -2 | 0.1% → <0.1% |     3 → 1 | `lambda$generateData$3(int, int, Random[], int)`                       | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `<init>(JavaKMeans, List, List, int, int)`                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `<init>(JavaKMeans, int, int)`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `div(double[], int)`                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -12.5% |    -1 |  0.2% → 0.1% |     8 → 7 | `extractResource(String, Path)`                                        | `org.renaissance.core.ResourceUtils`                                   |
|  -12.5% |    -1 |  0.2% → 0.1% |     8 → 7 | `extractResources(Iterable, Path)`                                     | `org.renaissance.core.ResourceUtils`                                   |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `<clinit>()`                                                           | `scopt.OptionParser`                                                   |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `OptionDef$superArg$1(OptionDefKind, String, OptionDefCallback, Read)` | `scopt.OptionDef`                                                      |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `<init>(OptionDefKind, String, OptionDefCallback, Read)`               | `scopt.OptionDef`                                                      |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `makeDef(OptionDefKind, String, Read)`                                 | `scopt.OptionParser`                                                   |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `handleOccurrence$1(ObjectRef, OptionDef, ListBuffer)`                 | `scopt.ORunner$`                                                       |

##### Native

| Change | Delta |             % |   Samples | Function                                                        | Location                   |
| -----: | ----: | ------------: | --------: | --------------------------------------------------------------- | -------------------------- |
| -26.4% |   -57 |   4.5% → 3.3% | 216 → 159 | `arrayof_jint_disjoint_arraycopy`                               | `<unknown>`                |
|  -8.1% |   -55 | 14.1% → 12.9% | 679 → 624 | `__psynch_cvwait`                                               | `libsystem_kernel.dylib`   |
|  -8.3% |   -55 | 13.8% → 12.6% | 664 → 609 | `Parker::park`                                                  | `libjvm.dylib`             |
| -22.4% |   -55 |   5.1% → 3.9% | 245 → 190 | `forward_copy_longs`                                            | `<unknown>`                |
|  -7.7% |   -52 | 14.0% → 12.8% | 671 → 619 | `Unsafe_Park`                                                   | `libjvm.dylib`             |
| -51.7% |   -15 |   0.6% → 0.3% |   29 → 14 | `_platform_bzero`                                               | `libsystem_platform.dylib` |
| -24.1% |   -13 |   1.1% → 0.9% |   54 → 41 | `MemAllocator::allocate`                                        | `libjvm.dylib`             |
| -37.5% |   -12 |   0.7% → 0.4% |   32 → 20 | `G1ParScanThreadState::trim_queue_to_threshold`                 | `libjvm.dylib`             |
| -22.6% |   -12 |   1.1% → 0.9% |   53 → 41 | `CollectedHeap::array_allocate`                                 | `libjvm.dylib`             |
| -23.1% |   -12 |   1.1% → 0.8% |   52 → 40 | `InstanceKlass::allocate_objArray`                              | `libjvm.dylib`             |
| -21.4% |   -12 |   1.2% → 0.9% |   56 → 44 | `OptoRuntime::new_array_C`                                      | `libjvm.dylib`             |
| -19.0% |   -11 |   1.2% → 1.0% |   58 → 47 | `_new_array_Java`                                               | `<unknown>`                |
| -19.0% |   -11 |   1.2% → 1.0% |   58 → 47 | `Unsafe_Unpark`                                                 | `libjvm.dylib`             |
| -66.7% |   -10 |   0.3% → 0.1% |    15 → 5 | `HeapRegionManager::par_iterate`                                | `libjvm.dylib`             |
| -37.5% |    -9 |   0.5% → 0.3% |   24 → 15 | `semaphore_wait_trap`                                           | `libsystem_kernel.dylib`   |
| -64.3% |    -9 |   0.3% → 0.1% |    14 → 5 | `void G1ScanEvacuatedObjClosure::do_oop_work<narrowOop>`        | `libjvm.dylib`             |
| -28.6% |    -8 |   0.6% → 0.4% |   28 → 20 | `G1ParEvacuateFollowersClosure::do_void`                        | `libjvm.dylib`             |
| -28.6% |    -8 |   0.6% → 0.4% |   28 → 20 | `G1EvacuateRegionsTask::evacuate_live_objects`                  | `libjvm.dylib`             |
| -21.6% |    -8 |   0.8% → 0.6% |   37 → 29 | `G1EvacuateRegionsBaseTask::work`                               | `libjvm.dylib`             |
| -88.9% |    -8 |  0.2% → <0.1% |     9 → 1 | `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>` | `libjvm.dylib`             |

##### Standard library

|  Change | Delta |             % |     Samples | Function                                                  | Location                                             |
| ------: | ----: | ------------: | ----------: | --------------------------------------------------------- | ---------------------------------------------------- |
|  -24.5% |   -94 |   8.0% → 6.0% |   383 → 289 | `forEach(BiConsumer)`                                     | `java.util.HashMap`                                  |
|  -23.2% |   -87 |   7.8% → 6.0% |   375 → 288 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                                  |
|   -7.4% |   -79 | 22.3% → 20.6% | 1,070 → 991 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                  |
|   -7.7% |   -52 | 14.0% → 12.9% |   673 → 621 | `park(boolean, long)`                                     | `jdk.internal.misc.Unsafe`                           |
|   -7.6% |   -50 | 13.7% → 12.7% |   660 → 610 | `park()`                                                  | `java.util.concurrent.locks.LockSupport`             |
|  -24.5% |   -46 |   3.9% → 2.9% |   188 → 142 | `addAll(Collection)`                                      | `java.util.ArrayList`                                |
|  -21.4% |   -45 |   4.4% → 3.4% |   210 → 165 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                                   |
|  -23.0% |   -40 |   3.6% → 2.8% |   174 → 134 | `toArray()`                                               | `java.util.ArrayList`                                |
| removed |   -31 |   0.6% → 0.0% |      31 → 0 | `invokeStatic(Object, Object)`                            | `java.lang.invoke.LambdaForm$DMH.0x000000f001004800` |
| removed |   -31 |   0.6% → 0.0% |      31 → 0 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x000000f001009800`  |
|  -10.7% |   -30 |   5.8% → 5.2% |   280 → 250 | `awaitWork(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                  |
|   -9.8% |   -17 |   3.6% → 3.2% |   173 → 156 | `elementData(int)`                                        | `java.util.ArrayList`                                |
|  -35.4% |   -17 |   1.0% → 0.6% |     48 → 31 | `signalWaiters()`                                         | `java.util.concurrent.ForkJoinTask`                  |
|  -34.0% |   -16 |   1.0% → 0.6% |     47 → 31 | `setDone()`                                               | `java.util.concurrent.ForkJoinTask`                  |
|  -23.0% |   -14 |   1.3% → 1.0% |     61 → 47 | `unpark(Object)`                                          | `jdk.internal.misc.Unsafe`                           |
|  -19.7% |   -12 |   1.3% → 1.0% |     61 → 49 | `unpark(Thread)`                                          | `java.util.concurrent.locks.LockSupport`             |
|   -5.7% |    -5 |   1.8% → 1.7% |     87 → 82 | `grow(int)`                                               | `java.util.ArrayList`                                |
|   -3.9% |    -3 |   1.6% → 1.5% |     77 → 74 | `<init>(Collection)`                                      | `java.util.ArrayList`                                |
|  -18.2% |    -2 |          0.2% |      11 → 9 | `putMapEntries(Map, boolean)`                             | `java.util.HashMap`                                  |
|  -18.2% |    -2 |          0.2% |      11 → 9 | `<init>(Map)`                                             | `java.util.HashMap`                                  |

##### Compiler

|  Change | Delta |            % | Samples | Function                                             | Location       |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------- | -------------- |
|  -55.6% |    -5 |  0.2% → 0.1% |   9 → 4 | `Matcher::match`                                     | `libjvm.dylib` |
|  -80.0% |    -4 | 0.1% → <0.1% |   5 → 1 | `PhaseChaitin::build_ifg_physical`                   | `libjvm.dylib` |
|   -5.0% |    -3 |         1.2% | 60 → 57 | `C2Compiler::compile_method`                         | `libjvm.dylib` |
|  -75.0% |    -3 | 0.1% → <0.1% |   4 → 1 | `PhaseChaitin::gather_lrg_masks`                     | `libjvm.dylib` |
|  -60.0% |    -3 | 0.1% → <0.1% |   5 → 2 | `Matcher::match_tree`                                | `libjvm.dylib` |
|  -42.9% |    -3 |         0.1% |   7 → 4 | `Matcher::xform`                                     | `libjvm.dylib` |
|   -8.7% |    -2 |  0.5% → 0.4% | 23 → 21 | `Compile::Optimize`                                  | `libjvm.dylib` |
|   -3.4% |    -2 |         1.2% | 59 → 57 | `Compile::Compile`                                   | `libjvm.dylib` |
|  -66.7% |    -2 | 0.1% → <0.1% |   3 → 1 | `PhaseIdealLoop::split_if_with_blocks_pre`           | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `Type::hashcons`                                     | `libjvm.dylib` |
|  -33.3% |    -2 |         0.1% |   6 → 4 | `PhaseIdealLoop::build_loop_late_post_work`          | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `IndexSetIterator::advance_and_next`                 | `libjvm.dylib` |
|  -15.4% |    -2 |  0.3% → 0.2% | 13 → 11 | `CompileQueue::get`                                  | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `PhaseIdealLoop::split_thru_phi`                     | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal` | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `PhaseIdealLoop::compute_lca_of_uses`                | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `Matcher::Label_Root`                                | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `PhaseCFG::PhaseCFG`                                 | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `PhaseCCP::analyze`                                  | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `PhaseCCP::PhaseCCP`                                 | `libjvm.dylib` |

##### JIT

| Change | Delta |           % | Samples | Function      | Location    |
| -----: | ----: | ----------: | ------: | ------------- | ----------- |
| -15.1% |    -8 | 1.1% → 0.9% | 53 → 45 | `zero_blocks` | `<unknown>` |

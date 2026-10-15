# Sampling profile diff

Collected 4,763 samples → 4,620 samples (-143 samples, -3.0%).

| Category         | Change | Delta |             % |       Samples |
| ---------------- | -----: | ----: | ------------: | ------------: |
| Ours             | -12.3% |  -337 | 57.7% → 52.1% | 2,746 → 2,409 |
| Native           | +12.4% |  +158 | 26.8% → 31.1% | 1,277 → 1,435 |
| Standard library |  +7.1% |   +44 | 13.0% → 14.3% |     618 → 662 |
| JIT              |  -9.2% |    -6 |   1.4% → 1.3% |       65 → 59 |
| Compiler         |  -3.5% |    -2 |          1.2% |       57 → 55 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |             % |   Samples | Function                                                                          | Location                                                   |
| ------: | ----: | ------------: | --------: | --------------------------------------------------------------------------------- | ---------------------------------------------------------- |
|  +23.6% |  +138 | 12.3% → 15.6% | 584 → 722 | `__psynch_cvwait`                                                                 | `libsystem_kernel.dylib`                                   |
|  +26.7% |  +108 |  8.5% → 11.1% | 404 → 512 | `findNearestCentroid()`                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +200.0% |   +40 |   0.4% → 1.3% |   20 → 60 | `grow(int)`                                                                       | `java.util.ArrayList`                                      |
|  +22.8% |   +21 |   1.9% → 2.4% |  92 → 113 | `doubleValue()`                                                                   | `java.lang.Double`                                         |
|  +15.5% |   +17 |   2.3% → 2.7% | 110 → 127 | `collectClusters(int[])`                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +30.4% |   +14 |   1.0% → 1.3% |   46 → 60 | `__psynch_cvsignal`                                                               | `libsystem_kernel.dylib`                                   |
|  +83.3% |   +10 |   0.3% → 0.5% |   12 → 22 | `semaphore_wait_trap`                                                             | `libsystem_kernel.dylib`                                   |
| +900.0% |    +9 |  <0.1% → 0.2% |    1 → 10 | `inflate_fast`                                                                    | `libzip.dylib`                                             |
| +200.0% |    +8 |   0.1% → 0.3% |    4 → 12 | `copyOf(Object[], int)`                                                           | `java.util.Arrays`                                         |
|  +38.1% |    +8 |   0.4% → 0.6% |   21 → 29 | `checkIndex(int, int)`                                                            | `java.util.Objects`                                        |
| +266.7% |    +8 |   0.1% → 0.2% |    3 → 11 | `putVal(int, Object, Object, boolean, boolean)`                                   | `java.util.HashMap`                                        |
|  +42.9% |    +6 |   0.3% → 0.4% |   14 → 20 | `RegisterMap::RegisterMap`                                                        | `libjvm.dylib`                                             |
|     new |    +6 |   0.0% → 0.1% |     0 → 6 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region` | `libjvm.dylib`                                             |
|   +4.2% |    +5 |   2.5% → 2.7% | 120 → 125 | `computeIfAbsent(Object, Function)`                                               | `java.util.HashMap`                                        |
|   +2.5% |    +5 |   4.3% → 4.5% | 203 → 208 | `forward_copy_longs`                                                              | `<unknown>`                                                |
| +125.0% |    +5 |   0.1% → 0.2% |     4 → 9 | `ScopeDesc::decode_body`                                                          | `libjvm.dylib`                                             |
|     new |    +4 |   0.0% → 0.1% |     0 → 4 | `<init>(Collection)`                                                              | `java.util.ArrayList`                                      |
|  +57.1% |    +4 |   0.1% → 0.2% |    7 → 11 | `tlv_get_addr`                                                                    | `libdyld.dylib`                                            |
| +400.0% |    +4 |  <0.1% → 0.1% |     1 → 5 | `createSubtask(int, int)`                                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +400.0% |    +4 |  <0.1% → 0.1% |     1 → 5 | `ObjArrayAllocator::initialize`                                                   | `libjvm.dylib`                                             |

##### Ours

|  Change | Delta |            % |   Samples | Function                                         | Location                                                               |
| ------: | ----: | -----------: | --------: | ------------------------------------------------ | ---------------------------------------------------------------------- |
|  +26.7% |  +108 | 8.5% → 11.1% | 404 → 512 | `findNearestCentroid()`                          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  +15.5% |   +17 |  2.3% → 2.7% | 110 → 127 | `collectClusters(int[])`                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| +400.0% |    +4 | <0.1% → 0.1% |     1 → 5 | `createSubtask(int, int)`                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| +150.0% |    +3 | <0.1% → 0.1% |     2 → 5 | `compute()`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|     new |    +3 |  0.0% → 0.1% |     0 → 3 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `lambda$run$0(int, List, int)`                   | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `average(List)`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `lambda$merge$7(Map, Object, List)`              | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `apply(Object, Object)`                          | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011a7248` |
|  +50.0% |    +1 | <0.1% → 0.1% |     2 → 3 | `add(double[], double[])`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| +100.0% |    +1 |        <0.1% |     1 → 2 | `combineResults(Object, Object)`                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `run(BenchmarkContext)`                          | `org.renaissance.jdk.concurrent.FjKmeans`                              |

##### Native

|  Change | Delta |             % |   Samples | Function                                                                          | Location                   |
| ------: | ----: | ------------: | --------: | --------------------------------------------------------------------------------- | -------------------------- |
|  +23.6% |  +138 | 12.3% → 15.6% | 584 → 722 | `__psynch_cvwait`                                                                 | `libsystem_kernel.dylib`   |
|  +30.4% |   +14 |   1.0% → 1.3% |   46 → 60 | `__psynch_cvsignal`                                                               | `libsystem_kernel.dylib`   |
|  +83.3% |   +10 |   0.3% → 0.5% |   12 → 22 | `semaphore_wait_trap`                                                             | `libsystem_kernel.dylib`   |
| +900.0% |    +9 |  <0.1% → 0.2% |    1 → 10 | `inflate_fast`                                                                    | `libzip.dylib`             |
|  +42.9% |    +6 |   0.3% → 0.4% |   14 → 20 | `RegisterMap::RegisterMap`                                                        | `libjvm.dylib`             |
|     new |    +6 |   0.0% → 0.1% |     0 → 6 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region` | `libjvm.dylib`             |
|   +2.5% |    +5 |   4.3% → 4.5% | 203 → 208 | `forward_copy_longs`                                                              | `<unknown>`                |
| +125.0% |    +5 |   0.1% → 0.2% |     4 → 9 | `ScopeDesc::decode_body`                                                          | `libjvm.dylib`             |
|  +57.1% |    +4 |   0.1% → 0.2% |    7 → 11 | `tlv_get_addr`                                                                    | `libdyld.dylib`            |
| +400.0% |    +4 |  <0.1% → 0.1% |     1 → 5 | `ObjArrayAllocator::initialize`                                                   | `libjvm.dylib`             |
|     new |    +4 |   0.0% → 0.1% |     0 → 4 | `InstanceKlass::signature_name`                                                   | `libjvm.dylib`             |
|     new |    +4 |   0.0% → 0.1% |     0 → 4 | `semaphore_signal_trap`                                                           | `libsystem_kernel.dylib`   |
|     new |    +3 |   0.0% → 0.1% |     0 → 3 | `compiledVFrame::sender`                                                          | `libjvm.dylib`             |
|  +60.0% |    +3 |   0.1% → 0.2% |     5 → 8 | `_kernelrpc_mach_port_deallocate_trap`                                            | `libsystem_kernel.dylib`   |
| +300.0% |    +3 |  <0.1% → 0.1% |     1 → 4 | `PcDescContainer::find_pc_desc_internal`                                          | `libjvm.dylib`             |
|     new |    +3 |   0.0% → 0.1% |     0 → 3 | `_platform_strncmp`                                                               | `libsystem_platform.dylib` |
|     new |    +2 |  0.0% → <0.1% |     0 → 2 | `Parker::park`                                                                    | `libjvm.dylib`             |
|     new |    +2 |  0.0% → <0.1% |     0 → 2 | `MemAllocator::allocate`                                                          | `libjvm.dylib`             |
|  +66.7% |    +2 |          0.1% |     3 → 5 | `__psynch_mutexdrop`                                                              | `libsystem_kernel.dylib`   |
| +100.0% |    +2 |  <0.1% → 0.1% |     2 → 4 | `write`                                                                           | `libsystem_kernel.dylib`   |

##### Standard library

|  Change | Delta |            % |   Samples | Function                                        | Location                                      |
| ------: | ----: | -----------: | --------: | ----------------------------------------------- | --------------------------------------------- |
| +200.0% |   +40 |  0.4% → 1.3% |   20 → 60 | `grow(int)`                                     | `java.util.ArrayList`                         |
|  +22.8% |   +21 |  1.9% → 2.4% |  92 → 113 | `doubleValue()`                                 | `java.lang.Double`                            |
| +200.0% |    +8 |  0.1% → 0.3% |    4 → 12 | `copyOf(Object[], int)`                         | `java.util.Arrays`                            |
|  +38.1% |    +8 |  0.4% → 0.6% |   21 → 29 | `checkIndex(int, int)`                          | `java.util.Objects`                           |
| +266.7% |    +8 |  0.1% → 0.2% |    3 → 11 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap`                           |
|   +4.2% |    +5 |  2.5% → 2.7% | 120 → 125 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap`                           |
|     new |    +4 |  0.0% → 0.1% |     0 → 4 | `<init>(Collection)`                            | `java.util.ArrayList`                         |
|  +60.0% |    +3 |  0.1% → 0.2% |     5 → 8 | `awaitDone(int, long)`                          | `java.util.concurrent.ForkJoinTask`           |
|  +50.0% |    +2 |         0.1% |     4 → 6 | `tryRemoveAndExec(ForkJoinTask, boolean)`       | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| +200.0% |    +2 | <0.1% → 0.1% |     1 → 3 | `scan(ForkJoinPool$WorkQueue, int, int)`        | `java.util.concurrent.ForkJoinPool`           |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `park(boolean, long)`                           | `jdk.internal.misc.Unsafe`                    |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `forEachRemaining(Consumer)`                    | `java.util.Spliterator$OfInt`                 |
|  +50.0% |    +1 | <0.1% → 0.1% |     2 → 3 | `resize()`                                      | `java.util.HashMap`                           |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `push(ForkJoinTask, ForkJoinPool, boolean)`     | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `newNode(int, Object, Object, HashMap$Node)`    | `java.util.HashMap`                           |
| +100.0% |    +1 |        <0.1% |     1 → 2 | `newLength(int, int, int)`                      | `jdk.internal.util.ArraysSupport`             |
| +100.0% |    +1 |        <0.1% |     1 → 2 | `nextNode()`                                    | `java.util.HashMap$HashIterator`              |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `<init>(long, IntFunction)`                     | `java.util.stream.Nodes$ArrayNode`            |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `getAndSetAccess(int)`                          | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `putVal(Object, Object, boolean)`               | `java.util.concurrent.ConcurrentHashMap`      |

##### JIT

| Change | Delta |            % | Samples | Function                   | Location    |
| -----: | ----: | -----------: | ------: | -------------------------- | ----------- |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `I2C/C2I adapters(0xbbea)` | `<unknown>` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `I2C/C2I adapters(0x)`     | `<unknown>` |

##### Compiler

|  Change | Delta |            % | Samples | Function                                    | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------- | -------------- |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `PhaseIdealLoop::Dominators`                | `libjvm.dylib` |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `PhaseChaitin::build_ifg_physical`          | `libjvm.dylib` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `PhaseIdealLoop::build_loop_late`           | `libjvm.dylib` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `ConNode::Opcode`                           | `libjvm.dylib` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `PhaseIFG::remove_node`                     | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `BlockBegin::iterate_preorder`              | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `LinearScanWalker::alloc_free_reg`          | `libjvm.dylib` |
| +100.0% |    +1 |        <0.1% |   1 → 2 | `PhaseChaitin::Split`                       | `libjvm.dylib` |
| +100.0% |    +1 |        <0.1% |   1 → 2 | `Node_Backward_Iterator::next`              | `libjvm.dylib` |
| +100.0% |    +1 |        <0.1% |   1 → 2 | `PhaseIdealLoop::build_loop_tree`           | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseChaitin::post_allocate_copy_removal`  | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `Matcher::xform`                            | `libjvm.dylib` |
| +100.0% |    +1 |        <0.1% |   1 → 2 | `MultiNode::is_CFG`                         | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseIdealLoop::build_loop_tree_impl`      | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `GraphKit::uncommon_trap`                   | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseIFG::re_insert`                       | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `CallStaticJavaNode::uncommon_trap_request` | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `ciObjectFactory::get_metadata`             | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `Node_Array::remove`                        | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `Node_Array::operator[]`                    | `libjvm.dylib` |

#### Improvements

Functions with the largest decrease in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |             % |   Samples | Function                                                                                                                     | Location                                                   |
| ------: | ----: | ------------: | --------: | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
|  -28.4% |  -246 | 18.2% → 13.4% | 867 → 621 | `distance(Double[], Double[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -23.3% |  -211 | 19.0% → 15.0% | 904 → 693 | `accumulate(Double[], double[])`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -12.9% |   -20 |   3.3% → 2.9% | 155 → 135 | `elementData(int)`                                                                                                           | `java.util.ArrayList`                                      |
| removed |   -14 |   0.3% → 0.0% |    14 → 0 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                            | `libjvm.dylib`                                             |
|  -42.9% |   -12 |   0.6% → 0.3% |   28 → 16 | `_platform_memset`                                                                                                           | `libsystem_platform.dylib`                                 |
|   -2.5% |   -11 |   9.2% → 9.3% | 440 → 429 | `vectorSum()`                                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -37.0% |   -10 |   0.6% → 0.4% |   27 → 17 | `pthread_jit_write_protect_np`                                                                                               | `libsystem_pthread.dylib`                                  |
|  -13.1% |    -8 |   1.3% → 1.1% |   61 → 53 | `zero_blocks`                                                                                                                | `<unknown>`                                                |
|  -20.7% |    -6 |   0.6% → 0.5% |   29 → 23 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`                                                                    | `java.util.concurrent.ForkJoinPool`                        |
|  -28.6% |    -6 |   0.4% → 0.3% |   21 → 15 | `_platform_bzero`                                                                                                            | `libsystem_platform.dylib`                                 |
|  -50.0% |    -6 |   0.3% → 0.1% |    12 → 6 | `thread_self_trap`                                                                                                           | `libsystem_kernel.dylib`                                   |
|  -62.5% |    -5 |   0.2% → 0.1% |     8 → 3 | `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>`                                                              | `libjvm.dylib`                                             |
| removed |    -5 |   0.1% → 0.0% |     5 → 0 | `resource_allocate_bytes`                                                                                                    | `libjvm.dylib`                                             |
| removed |    -5 |   0.1% → 0.0% |     5 → 0 | `void OopOopIterateDispatch<G1AdjustClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>`                              | `libjvm.dylib`                                             |
|  -83.3% |    -5 |  0.1% → <0.1% |     6 → 1 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` | `libjvm.dylib`                                             |
| removed |    -4 |   0.1% → 0.0% |     4 → 0 | `join()`                                                                                                                     | `java.util.concurrent.ForkJoinTask`                        |
|   -6.5% |    -4 |          1.3% |   62 → 58 | `add(Object, Object[], int)`                                                                                                 | `java.util.ArrayList`                                      |
|  -80.0% |    -4 |  0.1% → <0.1% |     5 → 1 | `_sigtramp`                                                                                                                  | `libsystem_platform.dylib`                                 |
|  -14.8% |    -4 |   0.6% → 0.5% |   27 → 23 | `G1FullGCMarker::mark_object`                                                                                                | `libjvm.dylib`                                             |
|  -16.7% |    -3 |   0.4% → 0.3% |   18 → 15 | `hash(Object)`                                                                                                               | `java.util.HashMap`                                        |

##### Ours

|  Change | Delta |             % |   Samples | Function                                   | Location                                                                              |
| ------: | ----: | ------------: | --------: | ------------------------------------------ | ------------------------------------------------------------------------------------- |
|  -28.4% |  -246 | 18.2% → 13.4% | 867 → 621 | `distance(Double[], Double[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -23.3% |  -211 | 19.0% → 15.0% | 904 → 693 | `accumulate(Double[], double[])`           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|   -2.5% |   -11 |   9.2% → 9.3% | 440 → 429 | `vectorSum()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| removed |    -3 |   0.1% → 0.0% |     3 → 0 | `combineResults(Object, Object)`           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| removed |    -2 |  <0.1% → 0.0% |     2 → 0 | `lambda$collectClusters$0(Double[])`       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `accept(Object, Object)`                   | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011a3b90`                |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `apply(Object)`                            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000004011a3940` |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `<init>(JavaKMeans, int, int)`             | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                |
|  -50.0% |    -1 |         <0.1% |     2 → 1 | `<init>(JavaKMeans, List, List, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `forkThreshold()`                          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `<init>(JavaKMeans, List, int, int)`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |

##### Native

|  Change | Delta |            % | Samples | Function                                                                                                                     | Location                   |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| removed |   -14 |  0.3% → 0.0% |  14 → 0 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                            | `libjvm.dylib`             |
|  -42.9% |   -12 |  0.6% → 0.3% | 28 → 16 | `_platform_memset`                                                                                                           | `libsystem_platform.dylib` |
|  -37.0% |   -10 |  0.6% → 0.4% | 27 → 17 | `pthread_jit_write_protect_np`                                                                                               | `libsystem_pthread.dylib`  |
|  -28.6% |    -6 |  0.4% → 0.3% | 21 → 15 | `_platform_bzero`                                                                                                            | `libsystem_platform.dylib` |
|  -50.0% |    -6 |  0.3% → 0.1% |  12 → 6 | `thread_self_trap`                                                                                                           | `libsystem_kernel.dylib`   |
|  -62.5% |    -5 |  0.2% → 0.1% |   8 → 3 | `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>`                                                              | `libjvm.dylib`             |
| removed |    -5 |  0.1% → 0.0% |   5 → 0 | `resource_allocate_bytes`                                                                                                    | `libjvm.dylib`             |
| removed |    -5 |  0.1% → 0.0% |   5 → 0 | `void OopOopIterateDispatch<G1AdjustClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>`                              | `libjvm.dylib`             |
|  -83.3% |    -5 | 0.1% → <0.1% |   6 → 1 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` | `libjvm.dylib`             |
|  -80.0% |    -4 | 0.1% → <0.1% |   5 → 1 | `_sigtramp`                                                                                                                  | `libsystem_platform.dylib` |
|  -14.8% |    -4 |  0.6% → 0.5% | 27 → 23 | `G1FullGCMarker::mark_object`                                                                                                | `libjvm.dylib`             |
|  -10.0% |    -3 |         0.6% | 30 → 27 | `__psynch_mutexwait`                                                                                                         | `libsystem_kernel.dylib`   |
|  -27.3% |    -3 |         0.2% |  11 → 8 | `_platform_memmove`                                                                                                          | `libsystem_platform.dylib` |
|  -75.0% |    -3 | 0.1% → <0.1% |   4 → 1 | `ClassLoaderData::oops_do`                                                                                                   | `libjvm.dylib`             |
|  -60.0% |    -3 | 0.1% → <0.1% |   5 → 2 | `HeapRegionManager::par_iterate`                                                                                             | `libjvm.dylib`             |
|  -75.0% |    -3 | 0.1% → <0.1% |   4 → 1 | `void OopOopIterateDispatch<G1MarkAndPushClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                         | `libjvm.dylib`             |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `JvmtiObjectAllocEventCollector::generate_call_for_allocated`                                                                | `libjvm.dylib`             |
|   -8.7% |    -2 |         0.5% | 23 → 21 | `arrayof_jint_disjoint_arraycopy`                                                                                            | `<unknown>`                |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `Chunk::operator new`                                                                                                        | `libjvm.dylib`             |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `inflate_table`                                                                                                              | `libzip.dylib`             |

##### Standard library

|  Change | Delta |            % |   Samples | Function                                                  | Location                                      |
| ------: | ----: | -----------: | --------: | --------------------------------------------------------- | --------------------------------------------- |
|  -12.9% |   -20 |  3.3% → 2.9% | 155 → 135 | `elementData(int)`                                        | `java.util.ArrayList`                         |
|  -20.7% |    -6 |  0.6% → 0.5% |   29 → 23 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
| removed |    -4 |  0.1% → 0.0% |     4 → 0 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`           |
|   -6.5% |    -4 |         1.3% |   62 → 58 | `add(Object, Object[], int)`                              | `java.util.ArrayList`                         |
|  -16.7% |    -3 |  0.4% → 0.3% |   18 → 15 | `hash(Object)`                                            | `java.util.HashMap`                           |
| removed |    -3 |  0.1% → 0.0% |     3 → 0 | `grow()`                                                  | `java.util.ArrayList`                         |
| removed |    -3 |  0.1% → 0.0% |     3 → 0 | `add(Object)`                                             | `java.util.ArrayList`                         |
| removed |    -3 |  0.1% → 0.0% |     3 → 0 | `fork()`                                                  | `java.util.concurrent.ForkJoinTask`           |
|  -50.0% |    -2 | 0.1% → <0.1% |     4 → 2 | `get(int)`                                                | `java.util.ArrayList`                         |
|  -66.7% |    -2 | 0.1% → <0.1% |     3 → 1 | `accept(Object)`                                          | `java.util.stream.Nodes$FixedNodeBuilder`     |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `entrySet()`                                              | `java.util.HashMap`                           |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `size()`                                                  | `java.util.ArrayList`                         |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `casSlotToNull(ForkJoinTask[], int, ForkJoinTask)`        | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  -16.7% |    -1 |         0.1% |     6 → 5 | `forEach(BiConsumer)`                                     | `java.util.HashMap`                           |
|  -50.0% |    -1 |        <0.1% |     2 → 1 | `addAll(Collection)`                                      | `java.util.ArrayList`                         |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `spliterator(double[], int, int, int)`                    | `java.util.Spliterators`                      |
|  -50.0% |    -1 |        <0.1% |     2 → 1 | `awaitWork(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`           |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `unpark(Object)`                                          | `jdk.internal.misc.Unsafe`                    |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `unpark(Thread)`                                          | `java.util.concurrent.locks.LockSupport`      |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `tryCompensate(long, boolean)`                            | `java.util.concurrent.ForkJoinPool`           |

##### JIT

| Change | Delta |           % | Samples | Function      | Location    |
| -----: | ----: | ----------: | ------: | ------------- | ----------- |
| -13.1% |    -8 | 1.3% → 1.1% | 61 → 53 | `zero_blocks` | `<unknown>` |

##### Compiler

|  Change | Delta |            % | Samples | Function                                        | Location       |
| ------: | ----: | -----------: | ------: | ----------------------------------------------- | -------------- |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `PhaseChaitin::build_ifg_virtual`               | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `RegionNode::is_CFG`                            | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `Node::destruct`                                | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `ValueStack::total_locks_size`                  | `libjvm.dylib` |
|  -50.0% |    -1 |        <0.1% |   2 → 1 | `LinearScanWalker::split_before_usage`          | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Canonicalizer::do_If`                          | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `GraphBuilder::iterate_bytecodes_for_block`     | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `GraphBuilder::try_inline`                      | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `ciMetadata::is_classless`                      | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `LIR_OpVisitState::visit`                       | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `BlockBegin::state_values_do`                   | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `LinearScanWalker::free_collect_inactive_fixed` | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseOutput::Process_OopMap_Node`              | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Node_Array::insert`                            | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseLive::add_liveout`                        | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseRegAlloc::reg2offset`                     | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `LoadPNode::Opcode`                             | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `CountedLoopNode::stride_con`                   | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseCCP::push_child_nodes_to_worklist`        | `libjvm.dylib` |
|  -50.0% |    -1 |        <0.1% |   2 → 1 | `Compile::update_dead_node_list`                | `libjvm.dylib` |

#### Lines

Lines with the largest change in contribution to each function's self samples.

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % |   Samples | Location                                                       |
| ------: | ----: | ------------: | --------: | -------------------------------------------------------------- |
| +355.6% |  +160 | 11.1% → 40.0% |  45 → 205 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:229` |
|  -17.5% |   -22 | 31.2% → 20.3% | 126 → 104 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:230` |
|   -8.1% |   -16 | 49.0% → 35.5% | 198 → 182 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:231` |
|  -47.8% |   -11 |   5.7% → 2.3% |   23 → 12 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:226` |
|  -27.3% |    -3 |   2.7% → 1.6% |    11 → 8 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:225` |

##### `grow(int)` (`java.util.ArrayList`)

|  Change | Delta |             % | Samples | Location                  |
| ------: | ----: | ------------: | ------: | ------------------------- |
| +216.7% |   +39 | 90.0% → 95.0% | 18 → 57 | `java.util.ArrayList:239` |
|     new |    +2 |   0.0% → 3.3% |   0 → 2 | `java.util.ArrayList:237` |
| removed |    -1 |   5.0% → 0.0% |   1 → 0 | `java.util.ArrayList:232` |

##### `doubleValue()` (`java.lang.Double`)

| Change | Delta |      % |  Samples | Location                |
| -----: | ----: | -----: | -------: | ----------------------- |
| +22.8% |   +21 | 100.0% | 92 → 113 | `java.lang.Double:1001` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % | Samples | Location                                                       |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------- |
| +130.8% |   +17 | 11.8% → 23.6% | 13 → 30 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:211` |
| +115.4% |   +15 | 11.8% → 22.0% | 13 → 28 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:214` |
|  -19.4% |    -6 | 28.2% → 19.7% | 31 → 25 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:212` |
|  -20.0% |    -5 | 22.7% → 15.7% | 25 → 20 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:213` |
|  -14.3% |    -4 | 25.5% → 18.9% | 28 → 24 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|  Change | Delta |      % | Samples | Location                |
| ------: | ----: | -----: | ------: | ----------------------- |
| +200.0% |    +8 | 100.0% |  4 → 12 | `java.util.Arrays:3482` |

##### `checkIndex(int, int)` (`java.util.Objects`)

| Change | Delta |      % | Samples | Location                |
| -----: | ----: | -----: | ------: | ----------------------- |
| +38.1% |    +8 | 100.0% | 21 → 29 | `java.util.Objects:385` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Location                |
| ------: | ----: | ------------: | ------: | ----------------------- |
|     new |    +3 |  0.0% → 27.3% |   0 → 3 | `java.util.HashMap:637` |
|     new |    +3 |  0.0% → 27.3% |   0 → 3 | `java.util.HashMap:668` |
|     new |    +2 |  0.0% → 18.2% |   0 → 2 | `java.util.HashMap:634` |
| +100.0% |    +1 | 33.3% → 18.2% |   1 → 2 | `java.util.HashMap:636` |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `java.util.HashMap:649` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Location                 |
| ------: | ----: | ------------: | ------: | ------------------------ |
| +900.0% |    +9 |   0.8% → 8.0% |  1 → 10 | `java.util.HashMap:1219` |
| removed |    -5 |   4.2% → 0.0% |   5 → 0 | `java.util.HashMap:1228` |
|  +28.6% |    +4 | 11.7% → 14.4% | 14 → 18 | `java.util.HashMap:1204` |
|  -15.0% |    -3 | 16.7% → 13.6% | 20 → 17 | `java.util.HashMap:1207` |
|  +37.5% |    +3 |   6.7% → 8.8% |  8 → 11 | `java.util.HashMap:1222` |

##### `<init>(Collection)` (`java.util.ArrayList`)

| Change | Delta |             % | Samples | Location                  |
| -----: | ----: | ------------: | ------: | ------------------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `java.util.ArrayList:184` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |      % | Samples | Location                                                       |
| ------: | ----: | -----: | ------: | -------------------------------------------------------------- |
| +400.0% |    +4 | 100.0% |   1 → 5 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:261` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|  Change | Delta |             % | Samples | Location                                                   |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------- |
|     new |    +2 |  0.0% → 40.0% |   0 → 2 | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask:150` |
| +100.0% |    +1 | 50.0% → 40.0% |   1 → 2 | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask:145` |

##### `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |             % | Samples | Location                                       |
| -----: | ----: | ------------: | ------: | ---------------------------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `org.renaissance.jdk.concurrent.JavaKMeans:86` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |             % | Samples | Location                                       |
| -----: | ----: | ------------: | ------: | ---------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans:59` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |             % | Samples | Location                                                   |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:334` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |             % | Samples | Location                                        |
| -----: | ----: | ------------: | ------: | ----------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans:112` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |            % | Samples | Location                                                      |
| -----: | ----: | -----------: | ------: | ------------------------------------------------------------- |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:432` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |      % | Samples | Location                                                      |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:367` |

##### `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |             % | Samples | Location                                      |
| -----: | ----: | ------------: | ------: | --------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.renaissance.jdk.concurrent.FjKmeans:132` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |             % | Samples | Location                                |
| ------: | ----: | ------------: | ------: | --------------------------------------- |
|     new |    +2 |  0.0% → 25.0% |   0 → 2 | `java.util.concurrent.ForkJoinTask:422` |
| removed |    -1 |  20.0% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinTask:409` |
|  +33.3% |    +1 | 60.0% → 50.0% |   3 → 4 | `java.util.concurrent.ForkJoinTask:411` |
|     new |    +1 |  0.0% → 12.5% |   0 → 1 | `java.util.concurrent.ForkJoinTask:441` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |             % | Samples | Location                                           |
| -----: | ----: | ------------: | ------: | -------------------------------------------------- |
|    new |    +3 |  0.0% → 50.0% |   0 → 3 | `java.util.concurrent.ForkJoinPool$WorkQueue:1337` |
| -66.7% |    -2 | 75.0% → 16.7% |   3 → 1 | `java.util.concurrent.ForkJoinPool$WorkQueue:1343` |
|    new |    +1 |  0.0% → 16.7% |   0 → 1 | `java.util.concurrent.ForkJoinPool$WorkQueue:1354` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % | Samples | Location                                 |
| ------: | ----: | ------------: | ------: | ---------------------------------------- |
|     new |    +2 |  0.0% → 66.7% |   0 → 2 | `java.util.concurrent.ForkJoinPool:1829` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinPool:1825` |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `java.util.concurrent.ForkJoinPool:1837` |

##### `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`)

| Change | Delta |             % | Samples | Location                          |
| -----: | ----: | ------------: | ------: | --------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.Spliterator$OfInt:711` |

##### `resize()` (`java.util.HashMap`)

|  Change | Delta |            % | Samples | Location                |
| ------: | ----: | -----------: | ------: | ----------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `java.util.HashMap:710` |
|     new |    +1 | 0.0% → 33.3% |   0 → 1 | `java.util.HashMap:686` |
|     new |    +1 | 0.0% → 33.3% |   0 → 1 | `java.util.HashMap:711` |

##### `push(ForkJoinTask, ForkJoinPool, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |             % | Samples | Location                                           |
| -----: | ----: | ------------: | ------: | -------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.concurrent.ForkJoinPool$WorkQueue:1154` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

| Change | Delta |             % | Samples | Location                 |
| -----: | ----: | ------------: | ------: | ------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.HashMap:1909` |

##### `newLength(int, int, int)` (`jdk.internal.util.ArraysSupport`)

|  Change | Delta |      % | Samples | Location                              |
| ------: | ----: | -----: | ------: | ------------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `jdk.internal.util.ArraysSupport:741` |

##### `nextNode()` (`java.util.HashMap$HashIterator`)

|  Change | Delta |             % | Samples | Location                              |
| ------: | ----: | ------------: | ------: | ------------------------------------- |
|     new |    +2 | 0.0% → 100.0% |   0 → 2 | `java.util.HashMap$HashIterator:1611` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.HashMap$HashIterator:1609` |

##### `<init>(long, IntFunction)` (`java.util.stream.Nodes$ArrayNode`)

| Change | Delta |             % | Samples | Location                               |
| -----: | ----: | ------------: | ------: | -------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.stream.Nodes$ArrayNode:649` |

##### `getAndSetAccess(int)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |             % | Samples | Location                                           |
| -----: | ----: | ------------: | ------: | -------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.concurrent.ForkJoinPool$WorkQueue:1087` |

##### `putVal(Object, Object, boolean)` (`java.util.concurrent.ConcurrentHashMap`)

| Change | Delta |             % | Samples | Location                                      |
| -----: | ----: | ------------: | ------: | --------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.concurrent.ConcurrentHashMap:1032` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % |   Samples | Location                                                       |
| ------: | ----: | ------------: | --------: | -------------------------------------------------------------- |
|  -43.9% |  -228 | 59.9% → 46.9% | 519 → 291 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:248` |
|  -10.9% |   -37 | 39.0% → 48.5% | 338 → 301 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:249` |
| +190.0% |   +19 |   1.2% → 4.7% |   10 → 29 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:250` |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |             % |   Samples | Location                                                      |
| -----: | ----: | ------------: | --------: | ------------------------------------------------------------- |
| -22.7% |  -177 | 86.2% → 86.9% | 779 → 602 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:412` |
| -27.2% |   -34 | 13.8% → 13.1% |  125 → 91 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:411` |

##### `elementData(int)` (`java.util.ArrayList`)

| Change | Delta |      % |   Samples | Location                  |
| -----: | ----: | -----: | --------: | ------------------------- |
| -12.9% |   -20 | 100.0% | 155 → 135 | `java.util.ArrayList:411` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |             % |   Samples | Location                                                      |
| -----: | ----: | ------------: | --------: | ------------------------------------------------------------- |
| -30.5% |   -29 | 21.6% → 15.4% |   95 → 66 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:402` |
|  +5.2% |   +18 | 78.4% → 84.6% | 345 → 363 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:403` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % | Samples | Location                                 |
| ------: | ----: | ------------: | ------: | ---------------------------------------- |
| removed |    -4 |  13.8% → 0.0% |   4 → 0 | `java.util.concurrent.ForkJoinPool:2047` |
|  -33.3% |    -2 | 20.7% → 17.4% |   6 → 4 | `java.util.concurrent.ForkJoinPool:2051` |
|  +25.0% |    +2 | 27.6% → 43.5% |  8 → 10 | `java.util.concurrent.ForkJoinPool:2053` |
|     new |    +2 |   0.0% → 8.7% |   0 → 2 | `java.util.concurrent.ForkJoinPool:2055` |
|  -50.0% |    -1 |   6.9% → 4.3% |   2 → 1 | `java.util.concurrent.ForkJoinPool:2054` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |            % | Samples | Location                                |
| ------: | ----: | -----------: | ------: | --------------------------------------- |
| removed |    -2 | 50.0% → 0.0% |   2 → 0 | `java.util.concurrent.ForkJoinTask:654` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinTask:651` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinTask:652` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

|  Change | Delta |             % | Samples | Location                  |
| ------: | ----: | ------------: | ------: | ------------------------- |
|  -21.4% |    -3 | 22.6% → 19.0% | 14 → 11 | `java.util.ArrayList:484` |
| removed |    -1 |   1.6% → 0.0% |   1 → 0 | `java.util.ArrayList:483` |

##### `hash(Object)` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Location                |
| -----: | ----: | -----: | ------: | ----------------------- |
| -16.7% |    -3 | 100.0% | 18 → 15 | `java.util.HashMap:338` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % | Samples | Location                                                       |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:171` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % | Samples | Location                                                       |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |

##### `<init>(JavaKMeans, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|  Change | Delta |             % | Samples | Location                                                   |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask:137` |

##### `<init>(JavaKMeans, List, List, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % | Samples | Location                                                       |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------- |
| removed |    -1 |  50.0% → 0.0% |   1 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:188` |
| removed |    -1 |  50.0% → 0.0% |   1 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:190` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:189` |

##### `forkThreshold()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % | Samples | Location                                                       |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:198` |

##### `<init>(JavaKMeans, List, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |             % | Samples | Location                                                      |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:382` |

##### `grow()` (`java.util.ArrayList`)

|  Change | Delta |             % | Samples | Location                  |
| ------: | ----: | ------------: | ------: | ------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `java.util.ArrayList:244` |

##### `add(Object)` (`java.util.ArrayList`)

|  Change | Delta |             % | Samples | Location                  |
| ------: | ----: | ------------: | ------: | ------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `java.util.ArrayList:495` |

##### `fork()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |             % | Samples | Location                                |
| ------: | ----: | ------------: | ------: | --------------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `java.util.concurrent.ForkJoinTask:627` |

##### `get(int)` (`java.util.ArrayList`)

| Change | Delta |      % | Samples | Location                  |
| -----: | ----: | -----: | ------: | ------------------------- |
| -50.0% |    -2 | 100.0% |   4 → 2 | `java.util.ArrayList:427` |

##### `accept(Object)` (`java.util.stream.Nodes$FixedNodeBuilder`)

| Change | Delta |      % | Samples | Location                                       |
| -----: | ----: | -----: | ------: | ---------------------------------------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `java.util.stream.Nodes$FixedNodeBuilder:1230` |

##### `entrySet()` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Location                 |
| ------: | ----: | ------------: | ------: | ------------------------ |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `java.util.HashMap:1099` |

##### `size()` (`java.util.ArrayList`)

|  Change | Delta |             % | Samples | Location                  |
| ------: | ----: | ------------: | ------: | ------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.ArrayList:253` |

##### `casSlotToNull(ForkJoinTask[], int, ForkJoinTask)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change | Delta |             % | Samples | Location                                           |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinPool$WorkQueue:1080` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Location                 |
| ------: | ----: | ------------: | ------: | ------------------------ |
|  -75.0% |    -3 | 66.7% → 20.0% |   4 → 1 | `java.util.HashMap:1428` |
|     new |    +2 |  0.0% → 40.0% |   0 → 2 | `java.util.HashMap:1429` |
| removed |    -1 |  16.7% → 0.0% |   1 → 0 | `java.util.HashMap:1423` |
| +100.0% |    +1 | 16.7% → 40.0% |   1 → 2 | `java.util.HashMap:1427` |

##### `addAll(Collection)` (`java.util.ArrayList`)

|  Change | Delta |            % | Samples | Location                  |
| ------: | ----: | -----------: | ------: | ------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `java.util.ArrayList:759` |

##### `spliterator(double[], int, int, int)` (`java.util.Spliterators`)

|  Change | Delta |             % | Samples | Location                     |
| ------: | ----: | ------------: | ------: | ---------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.Spliterators:371` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |            % | Samples | Location                                 |
| ------: | ----: | -----------: | ------: | ---------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinPool:1859` |

##### `unpark(Thread)` (`java.util.concurrent.locks.LockSupport`)

|  Change | Delta |             % | Samples | Location                                     |
| ------: | ----: | ------------: | ------: | -------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.concurrent.locks.LockSupport:177` |

##### `tryCompensate(long, boolean)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % | Samples | Location                                 |
| ------: | ----: | ------------: | ------: | ---------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinPool:1966` |

#### Callers

Callers with the largest change in contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

| Change | Delta |             % |   Samples | Caller         | Location       |
| -----: | ----: | ------------: | --------: | -------------- | -------------- |
| +24.6% |  +138 | 96.2% → 97.0% | 562 → 700 | `Parker::park` | `libjvm.dylib` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller              | Location                                                   |
| -----: | ----: | -----: | --------: | ------------------- | ---------------------------------------------------------- |
| +26.7% |  +108 | 100.0% | 404 → 512 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `grow(int)` (`java.util.ArrayList`)

|  Change | Delta |      % | Samples | Caller   | Location              |
| ------: | ----: | -----: | ------: | -------- | --------------------- |
| +200.0% |   +40 | 100.0% | 20 → 60 | `grow()` | `java.util.ArrayList` |

##### `doubleValue()` (`java.lang.Double`)

|  Change | Delta |             % | Samples | Caller                           | Location                                                   |
| ------: | ----: | ------------: | ------: | -------------------------------- | ---------------------------------------------------------- |
| +145.5% |   +16 | 12.0% → 23.9% | 11 → 27 | `distance(Double[], Double[])`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   +6.2% |    +5 | 88.0% → 76.1% | 81 → 86 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller              | Location                                                   |
| -----: | ----: | -----: | --------: | ------------------- | ---------------------------------------------------------- |
| +15.5% |   +17 | 100.0% | 110 → 127 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `__psynch_cvsignal` (`libsystem_kernel.dylib`)

| Change | Delta |      % | Samples | Caller          | Location       |
| -----: | ----: | -----: | ------: | --------------- | -------------- |
| +30.4% |   +14 | 100.0% | 46 → 60 | `Unsafe_Unpark` | `libjvm.dylib` |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

|  Change | Delta |             % | Samples | Caller                           | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------- | -------------- |
| +128.6% |    +9 | 58.3% → 72.7% |  7 → 16 | `WorkerThread::run`              | `libjvm.dylib` |
|     new |    +2 |   0.0% → 9.1% |   0 → 2 | `WorkerThreads::run_task`        | `libjvm.dylib` |
|  -20.0% |    -1 | 41.7% → 18.2% |   5 → 4 | `GenericWaitBarrier::Cell::wait` | `libjvm.dylib` |

##### `inflate_fast` (`libzip.dylib`)

|  Change | Delta |      % | Samples | Caller                                          | Location       |
| ------: | ----: | -----: | ------: | ----------------------------------------------- | -------------- |
| +900.0% |    +9 | 100.0% |  1 → 10 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|  Change | Delta |             % | Samples | Caller      | Location              |
| ------: | ----: | ------------: | ------: | ----------- | --------------------- |
| +800.0% |    +8 | 25.0% → 75.0% |   1 → 9 | `toArray()` | `java.util.ArrayList` |

##### `checkIndex(int, int)` (`java.util.Objects`)

| Change | Delta |      % | Samples | Caller     | Location              |
| -----: | ----: | -----: | ------: | ---------- | --------------------- |
| +38.1% |    +8 | 100.0% | 21 → 29 | `get(int)` | `java.util.ArrayList` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|  Change | Delta |      % | Samples | Caller                        | Location            |
| ------: | ----: | -----: | ------: | ----------------------------- | ------------------- |
| +266.7% |    +8 | 100.0% |  3 → 11 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `RegisterMap::RegisterMap` (`libjvm.dylib`)

| Change | Delta |              % | Samples | Caller               | Location       |
| -----: | ----: | -------------: | ------: | -------------------- | -------------- |
| +28.6% |    +4 | 100.0% → 90.0% | 14 → 18 | `vframe::vframe`     | `libjvm.dylib` |
|    new |    +2 |   0.0% → 10.0% |   0 → 2 | `vframe::new_vframe` | `libjvm.dylib` |

##### `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                                              | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------- | -------------- |
|    new |    +6 | 0.0% → 100.0% |   0 → 6 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::do_heap_region` | `libjvm.dylib` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

| Change | Delta |      % |   Samples | Caller                   | Location                                                   |
| -----: | ----: | -----: | --------: | ------------------------ | ---------------------------------------------------------- |
|  +4.2% |    +5 | 100.0% | 120 → 125 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `forward_copy_longs` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                           | Location    |
| -----: | ----: | ------------: | ------: | -------------------------------- | ----------- |
| +12.2% |    +5 | 20.2% → 22.1% | 41 → 46 | `arrayof_oop_disjoint_arraycopy` | `<unknown>` |

##### `ScopeDesc::decode_body` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                   | Location       |
| ------: | ----: | ------------: | ------: | ------------------------ | -------------- |
|  +66.7% |    +2 | 75.0% → 55.6% |   3 → 5 | `ScopeDesc::sender`      | `libjvm.dylib` |
| +200.0% |    +2 | 25.0% → 33.3% |   1 → 3 | `ScopeDesc::ScopeDesc`   | `libjvm.dylib` |
|     new |    +1 |  0.0% → 11.1% |   0 → 1 | `compiledVFrame::sender` | `libjvm.dylib` |

##### `<init>(Collection)` (`java.util.ArrayList`)

| Change | Delta |             % | Samples | Caller                       | Location                                    |
| -----: | ----: | ------------: | ------: | ---------------------------- | ------------------------------------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `tlv_get_addr` (`libdyld.dylib`)

|  Change | Delta |            % | Samples | Caller                                                      | Location                 |
| ------: | ----: | -----------: | ------: | ----------------------------------------------------------- | ------------------------ |
|     new |    +2 | 0.0% → 18.2% |   0 → 2 | `LockTracer::UnsafeParkHook`                                | `libasyncProfiler.dylib` |
|     new |    +2 | 0.0% → 18.2% |   0 → 2 | `MemAllocator::Allocation::notify_allocation_jvmti_sampler` | `libjvm.dylib`           |
|     new |    +2 | 0.0% → 18.2% |   0 → 2 | `vframe::new_vframe`                                        | `libjvm.dylib`           |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `JvmtiEnvBase::get_stack_trace`                             | `libjvm.dylib`           |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `ciMethod::get_method_at_bci`                               | `libjvm.dylib`           |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |      % | Samples | Caller      | Location                                               |
| ------: | ----: | -----: | ------: | ----------- | ------------------------------------------------------ |
| +400.0% |    +4 | 100.0% |   1 → 5 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `ObjArrayAllocator::initialize` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                   | Location       |
| ------: | ----: | -----: | ------: | ------------------------ | -------------- |
| +400.0% |    +4 | 100.0% |   1 → 5 | `MemAllocator::allocate` | `libjvm.dylib` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|  Change | Delta |      % | Samples | Caller   | Location                             |
| ------: | ----: | -----: | ------: | -------- | ------------------------------------ |
| +150.0% |    +3 | 100.0% |   2 → 5 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |             % | Samples | Caller       | Location                                                               |
| -----: | ----: | ------------: | ------: | ------------ | ---------------------------------------------------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011a2388` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |             % | Samples | Caller   | Location                                                               |
| -----: | ----: | ------------: | ------: | -------- | ---------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011a2bd0` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |             % | Samples | Caller                     | Location                                               |
| -----: | ----: | ------------: | ------: | -------------------------- | ------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |             % | Samples | Caller                   | Location                                                               |
| -----: | ----: | ------------: | ------: | ------------------------ | ---------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011a3b90` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011a7248`)

| Change | Delta |             % | Samples | Caller                              | Location            |
| -----: | ----: | ------------: | ------: | ----------------------------------- | ------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % | Samples | Caller                               | Location                                                  |
| -----: | ----: | -----: | ------: | ------------------------------------ | --------------------------------------------------------- |
| +50.0% |    +1 | 100.0% |   2 → 3 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |      % | Samples | Caller      | Location                                               |
| ------: | ----: | -----: | ------: | ----------- | ------------------------------------------------------ |
| +100.0% |    +1 | 100.0% |   1 → 2 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |             % | Samples | Caller                  | Location                                  |
| -----: | ----: | ------------: | ------: | ----------------------- | ----------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `executeOperation(int)` | `org.renaissance.harness.ExecutionDriver` |

##### `InstanceKlass::signature_name` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                        | Location       |
| -----: | ----: | -----------: | ------: | ----------------------------- | -------------- |
|    new |    +2 | 0.0% → 50.0% |   0 → 2 | `JvmtiEnv::GetClassSignature` | `libjvm.dylib` |
|    new |    +2 | 0.0% → 50.0% |   0 → 2 | `jvmti_GetClassSignature`     | `libjvm.dylib` |

##### `semaphore_signal_trap` (`libsystem_kernel.dylib`)

| Change | Delta |             % | Samples | Caller                    | Location       |
| -----: | ----: | ------------: | ------: | ------------------------- | -------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `WorkerThreads::run_task` | `libjvm.dylib` |

##### `compiledVFrame::sender` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                | Location       |
| -----: | ----: | ------------: | ------: | --------------------- | -------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `vframe::java_sender` | `libjvm.dylib` |

##### `_kernelrpc_mach_port_deallocate_trap` (`libsystem_kernel.dylib`)

| Change | Delta |      % | Samples | Caller                   | Location                 |
| -----: | ----: | -----: | ------: | ------------------------ | ------------------------ |
| +60.0% |    +3 | 100.0% |   5 → 8 | `Profiler::recordSample` | `libasyncProfiler.dylib` |

##### `PcDescContainer::find_pc_desc_internal` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                                | Location       |
| ------: | ----: | -------------: | ------: | ------------------------------------- | -------------- |
| +200.0% |    +2 | 100.0% → 75.0% |   1 → 3 | `CompiledMethod::scope_desc_at`       | `libjvm.dylib` |
|     new |    +1 |   0.0% → 25.0% |   0 → 1 | `vframeStreamCommon::fill_from_frame` | `libjvm.dylib` |

##### `_platform_strncmp` (`libsystem_platform.dylib`)

| Change | Delta |             % | Samples | Caller                            | Location                 |
| -----: | ----: | ------------: | ------: | --------------------------------- | ------------------------ |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `ObjectSampler::recordAllocation` | `libasyncProfiler.dylib` |

##### `Parker::park` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller        | Location       |
| -----: | ----: | ------------: | ------: | ------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `Unsafe_Park` | `libjvm.dylib` |

##### `MemAllocator::allocate` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                             | Location       |
| -----: | ----: | -----------: | ------: | ---------------------------------- | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `InstanceKlass::allocate_objArray` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `OptoRuntime::new_array_C`         | `libjvm.dylib` |

##### `__psynch_mutexdrop` (`libsystem_kernel.dylib`)

| Change | Delta |      % | Samples | Caller                                | Location                  |
| -----: | ----: | -----: | ------: | ------------------------------------- | ------------------------- |
| +66.7% |    +2 | 100.0% |   3 → 5 | `_pthread_mutex_firstfit_unlock_slow` | `libsystem_pthread.dylib` |

##### `write` (`libsystem_kernel.dylib`)

|  Change | Delta |      % | Samples | Caller                              | Location                            |
| ------: | ----: | -----: | ------: | ----------------------------------- | ----------------------------------- |
| +100.0% |    +2 | 100.0% |   2 → 4 | `write0(FileDescriptor, long, int)` | `sun.nio.ch.UnixFileDispatcherImpl` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |      % | Samples | Caller   | Location                            |
| -----: | ----: | -----: | ------: | -------- | ----------------------------------- |
| +60.0% |    +3 | 100.0% |   5 → 8 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |      % | Samples | Caller                 | Location                            |
| -----: | ----: | -----: | ------: | ---------------------- | ----------------------------------- |
| +50.0% |    +2 | 100.0% |   4 → 6 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |      % | Samples | Caller                              | Location                            |
| ------: | ----: | -----: | ------: | ----------------------------------- | ----------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

| Change | Delta |             % | Samples | Caller   | Location                                 |
| -----: | ----: | ------------: | ------: | -------- | ---------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `park()` | `java.util.concurrent.locks.LockSupport` |

##### `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`)

| Change | Delta |             % | Samples | Caller                        | Location                            |
| -----: | ----: | ------------: | ------: | ----------------------------- | ----------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `copyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `resize()` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Caller                                          | Location            |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | ------------------- |
| +100.0% |    +1 | 50.0% → 66.7% |   1 → 2 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `push(ForkJoinTask, ForkJoinPool, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |             % | Samples | Caller   | Location                            |
| -----: | ----: | ------------: | ------: | -------- | ----------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `fork()` | `java.util.concurrent.ForkJoinTask` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

| Change | Delta |             % | Samples | Caller                                          | Location            |
| -----: | ----: | ------------: | ------: | ----------------------------------------------- | ------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `newLength(int, int, int)` (`jdk.internal.util.ArraysSupport`)

|  Change | Delta |      % | Samples | Caller      | Location              |
| ------: | ----: | -----: | ------: | ----------- | --------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `grow(int)` | `java.util.ArrayList` |

##### `nextNode()` (`java.util.HashMap$HashIterator`)

|  Change | Delta |      % | Samples | Caller   | Location                          |
| ------: | ----: | -----: | ------: | -------- | --------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `next()` | `java.util.HashMap$EntryIterator` |

##### `<init>(long, IntFunction)` (`java.util.stream.Nodes$ArrayNode`)

| Change | Delta |             % | Samples | Caller                      | Location                                  |
| -----: | ----: | ------------: | ------: | --------------------------- | ----------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<init>(long, IntFunction)` | `java.util.stream.Nodes$FixedNodeBuilder` |

##### `getAndSetAccess(int)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |             % | Samples | Caller                                      | Location                                      |
| -----: | ----: | ------------: | ------: | ------------------------------------------- | --------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `push(ForkJoinTask, ForkJoinPool, boolean)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `putVal(Object, Object, boolean)` (`java.util.concurrent.ConcurrentHashMap`)

| Change | Delta |             % | Samples | Caller                | Location                                 |
| -----: | ----: | ------------: | ------: | --------------------- | ---------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `put(Object, Object)` | `java.util.concurrent.ConcurrentHashMap` |

##### `I2C/C2I adapters(0xbbea)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                             | Location                            |
| -----: | ----: | ------------: | ------: | ---------------------------------- | ----------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `write(FileDescriptor, long, int)` | `sun.nio.ch.UnixFileDispatcherImpl` |

##### `I2C/C2I adapters(0x)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller              | Location                             |
| -----: | ----: | ------------: | ------: | ------------------- | ------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `checkPermission()` | `java.lang.reflect.AccessibleObject` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                               | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                            | Location       |
| ------: | ----: | -----: | ------: | --------------------------------- | -------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                               | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `ConNode::Opcode` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller           | Location       |
| -----: | ----: | ------------: | ------: | ---------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `Matcher::match` | `libjvm.dylib` |

##### `PhaseIFG::remove_node` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                   | Location       |
| -----: | ----: | ------------: | ------: | ------------------------ | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `PhaseChaitin::Simplify` | `libjvm.dylib` |

##### `BlockBegin::iterate_preorder` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                         | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------ | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `BlockBegin::iterate_preorder` | `libjvm.dylib` |

##### `LinearScanWalker::alloc_free_reg` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                               | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `LinearScanWalker::activate_current` | `libjvm.dylib` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                            | Location       |
| ------: | ----: | -----: | ------: | --------------------------------- | -------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `Node_Backward_Iterator::next` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                    | Location       |
| -----: | ----: | -----------: | ------: | ------------------------- | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `PhaseCFG::schedule_late` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_tree` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                               | Location       |
| ------: | ----: | -----: | ------: | ------------------------------------ | -------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseChaitin::post_allocate_copy_removal` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                            | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `Matcher::xform` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller           | Location       |
| -----: | ----: | ------------: | ------: | ---------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `Matcher::match` | `libjvm.dylib` |

##### `MultiNode::is_CFG` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                 | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------------- | -------------- |
|     new |    +2 | 0.0% → 100.0% |   0 → 2 | `PhaseIdealLoop::build_and_optimize`   | `libjvm.dylib` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseIdealLoop::build_loop_tree_impl` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_tree_impl` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                            | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseIdealLoop::build_loop_tree` | `libjvm.dylib` |

##### `GraphKit::uncommon_trap` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                        | Location       |
| -----: | ----: | ------------: | ------: | ----------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `GraphKit::null_check_common` | `libjvm.dylib` |

##### `PhaseIFG::re_insert` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                 | Location       |
| -----: | ----: | ------------: | ------: | ---------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseChaitin::Select` | `libjvm.dylib` |

##### `CallStaticJavaNode::uncommon_trap_request` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                      | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib` |

##### `ciObjectFactory::get_metadata` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                   | Location       |
| -----: | ----: | ------------: | ------: | ------------------------ | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `ciInstanceKlass::super` | `libjvm.dylib` |

##### `Node_Array::remove` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                        | Location       |
| -----: | ----: | ------------: | ------: | ----------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `Scheduling::AddNodeToBundle` | `libjvm.dylib` |

##### `Node_Array::operator[]` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                     | Location       |
| -----: | ----: | ------------: | ------: | -------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseIdealLoop::has_node` | `libjvm.dylib` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller                  | Location                                                   |
| -----: | ----: | -----: | --------: | ----------------------- | ---------------------------------------------------------- |
| -28.4% |  -246 | 100.0% | 867 → 621 | `findNearestCentroid()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |   Samples | Caller        | Location                                                  |
| -----: | ----: | -----: | --------: | ------------- | --------------------------------------------------------- |
| -23.3% |  -211 | 100.0% | 904 → 693 | `vectorSum()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `elementData(int)` (`java.util.ArrayList`)

| Change | Delta |      % |   Samples | Caller     | Location              |
| -----: | ----: | -----: | --------: | ---------- | --------------------- |
| -12.9% |   -20 | 100.0% | 155 → 135 | `get(int)` | `java.util.ArrayList` |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                          | Location       |
| ------: | ----: | -----------: | ------: | ----------------------------------------------- | -------------- |
| removed |   -12 | 85.7% → 0.0% |  12 → 0 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib` |
| removed |    -2 | 14.3% → 0.0% |   2 → 0 | `G1ScanHRForRegionClosure::scan_memregion`      | `libjvm.dylib` |

##### `_platform_memset` (`libsystem_platform.dylib`)

|  Change | Delta |             % | Samples | Caller                                        | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------------- | -------------- |
| removed |   -16 |  57.1% → 0.0% |  16 → 0 | `MarkBitMap::do_clear`                        | `libjvm.dylib` |
|  +50.0% |    +4 | 28.6% → 75.0% |  8 → 12 | `MemAllocator::allocate`                      | `libjvm.dylib` |
| removed |    -2 |   7.1% → 0.0% |   2 → 0 | `MemAllocator::mem_allocate_inside_tlab_slow` | `libjvm.dylib` |
| removed |    -1 |   3.6% → 0.0% |   1 → 0 | `ClassVerifier::verify_method`                | `libjvm.dylib` |
| removed |    -1 |   3.6% → 0.0% |   1 → 0 | `MethodLiveness::BasicBlock::get_liveness_at` | `libjvm.dylib` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |   Samples | Caller              | Location                                                  |
| -----: | ----: | -----: | --------: | ------------------- | --------------------------------------------------------- |
|  -2.5% |   -11 | 100.0% | 440 → 429 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `pthread_jit_write_protect_np` (`libsystem_pthread.dylib`)

|  Change | Delta |             % | Samples | Caller                     | Location       |
| ------: | ----: | ------------: | ------: | -------------------------- | -------------- |
| removed |    -6 |  22.2% → 0.0% |   6 → 0 | `Unsafe_Park`              | `libjvm.dylib` |
| removed |    -2 |   7.4% → 0.0% |   2 → 0 | `JVM_IHashCode`            | `libjvm.dylib` |
|  -50.0% |    -2 | 14.8% → 11.8% |   4 → 2 | `_new_array_Java`          | `<unknown>`    |
| removed |    -2 |   7.4% → 0.0% |   2 → 0 | `OptoRuntime::new_array_C` | `libjvm.dylib` |
|     new |    +2 |  0.0% → 11.8% |   0 → 2 | `jni_GetObjectField`       | `libjvm.dylib` |

##### `zero_blocks` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                              | Location                                                   |
| ------: | ----: | ------------: | ------: | ----------------------------------- | ---------------------------------------------------------- |
| removed |   -38 |  62.3% → 0.0% |  38 → 0 | `merge(Object, Object, BiFunction)` | `java.util.HashMap`                                        |
|     new |   +37 |  0.0% → 69.8% |  0 → 37 | `<init>(Collection)`                | `java.util.ArrayList`                                      |
|  -38.1% |    -8 | 34.4% → 24.5% | 21 → 13 | `grow(int)`                         | `java.util.ArrayList`                                      |
|  +50.0% |    +1 |   3.3% → 5.7% |   2 → 3 | `findNearestCentroid()`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % | Samples | Caller                 | Location                            |
| -----: | ----: | -----: | ------: | ---------------------- | ----------------------------------- |
| -20.7% |    -6 | 100.0% | 29 → 23 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `_platform_bzero` (`libsystem_platform.dylib`)

| Change | Delta |      % | Samples | Caller                   | Location       |
| -----: | ----: | -----: | ------: | ------------------------ | -------------- |
| -28.6% |    -6 | 100.0% | 21 → 15 | `MemAllocator::allocate` | `libjvm.dylib` |

##### `thread_self_trap` (`libsystem_kernel.dylib`)

| Change | Delta |      % | Samples | Caller                            | Location                 |
| -----: | ----: | -----: | ------: | --------------------------------- | ------------------------ |
| -50.0% |    -6 | 100.0% |  12 → 6 | `ObjectSampler::recordAllocation` | `libasyncProfiler.dylib` |

##### `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                  | Location       |
| -----: | ----: | -----: | ------: | --------------------------------------- | -------------- |
| -62.5% |    -5 | 100.0% |   8 → 3 | `G1AdjustRegionClosure::do_heap_region` | `libjvm.dylib` |

##### `resource_allocate_bytes` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                        | Location       |
| ------: | ----: | -----------: | ------: | ----------------------------- | -------------- |
| removed |    -3 | 60.0% → 0.0% |   3 → 0 | `ScopeDesc::sender`           | `libjvm.dylib` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `Compilation::compile_method` | `libjvm.dylib` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `compiledVFrame::sender`      | `libjvm.dylib` |

##### `void OopOopIterateDispatch<G1AdjustClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                                          | Location       |
| ------: | ----: | -----------: | ------: | --------------------------------------------------------------- | -------------- |
| removed |    -4 | 80.0% → 0.0% |   4 → 0 | `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>` | `libjvm.dylib` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `G1AdjustRegionClosure::do_heap_region`                         | `libjvm.dylib` |

##### `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                                            | Location       |
| ------: | ----: | -------------: | ------: | ------------------------------------------------- | -------------- |
|  -80.0% |    -4 | 83.3% → 100.0% |   5 → 1 | `G1ParScanThreadState::do_copy_to_survivor_space` | `libjvm.dylib` |
| removed |    -1 |   16.7% → 0.0% |   1 → 0 | `G1ParScanThreadState::trim_queue_to_threshold`   | `libjvm.dylib` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |             % | Samples | Caller      | Location                                               |
| ------: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

| Change | Delta |      % | Samples | Caller        | Location              |
| -----: | ----: | -----: | ------: | ------------- | --------------------- |
|  -6.5% |    -4 | 100.0% | 62 → 58 | `add(Object)` | `java.util.ArrayList` |

##### `G1FullGCMarker::mark_object` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                                                          | Location       |
| ------: | ----: | -------------: | ------: | --------------------------------------------------------------- | -------------- |
| removed |    -2 |    7.4% → 0.0% |   2 → 0 | `G1FullGCMarker::complete_marking`                              | `libjvm.dylib` |
|   -4.2% |    -1 | 88.9% → 100.0% | 24 → 23 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` | `libjvm.dylib` |
| removed |    -1 |    3.7% → 0.0% |   1 → 0 | `G1FullGCMarker::follow_marking_stacks`                         | `libjvm.dylib` |

##### `hash(Object)` (`java.util.HashMap`)

| Change | Delta |             % | Samples | Caller                              | Location            |
| -----: | ----: | ------------: | ------: | ----------------------------------- | ------------------- |
| -17.6% |    -3 | 94.4% → 93.3% | 17 → 14 | `computeIfAbsent(Object, Function)` | `java.util.HashMap` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % | Samples | Caller      | Location                                               |
| ------: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % | Samples | Caller          | Location                                                                              |
| ------: | ----: | ------------: | ------: | --------------- | ------------------------------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `apply(Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000004011a3940` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011a3b90`)

|  Change | Delta |             % | Samples | Caller                | Location            |
| ------: | ----: | ------------: | ------: | --------------------- | ------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `forEach(BiConsumer)` | `java.util.HashMap` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000004011a3940`)

|  Change | Delta |             % | Samples | Caller                              | Location            |
| ------: | ----: | ------------: | ------: | ----------------------------------- | ------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `computeIfAbsent(Object, Function)` | `java.util.HashMap` |

##### `<init>(JavaKMeans, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|  Change | Delta |             % | Samples | Caller                                     | Location                                                   |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | ---------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>(JavaKMeans, List, List, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `<init>(JavaKMeans, List, List, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % | Samples | Caller                    | Location                                                   |
| -----: | ----: | -----: | ------: | ------------------------- | ---------------------------------------------------------- |
| -50.0% |    -1 | 100.0% |   2 → 1 | `createSubtask(int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `forkThreshold()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % | Samples | Caller      | Location                                               |
| ------: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `<init>(JavaKMeans, List, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |             % | Samples | Caller                    | Location                                                  |
| ------: | ----: | ------------: | ------: | ------------------------- | --------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `createSubtask(int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

| Change | Delta |      % | Samples | Caller                              | Location                  |
| -----: | ----: | -----: | ------: | ----------------------------------- | ------------------------- |
| -10.0% |    -3 | 100.0% | 30 → 27 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `_platform_memmove` (`libsystem_platform.dylib`)

|  Change | Delta |             % | Samples | Caller                          | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------- | -------------- |
|  -37.5% |    -3 | 72.7% → 62.5% |   8 → 5 | `vframe::java_sender`           | `libjvm.dylib` |
| removed |    -1 |   9.1% → 0.0% |   1 → 0 | `SymbolTable::do_add_if_needed` | `libjvm.dylib` |
|  -50.0% |    -1 | 18.2% → 12.5% |   2 → 1 | `JavaThread::last_java_vframe`  | `libjvm.dylib` |
|     new |    +1 |  0.0% → 12.5% |   0 → 1 | `Node::out_grow`                | `libjvm.dylib` |
|     new |    +1 |  0.0% → 12.5% |   0 → 1 | `Node::add_prec`                | `libjvm.dylib` |

##### `ClassLoaderData::oops_do` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                                                                                               | Location       |
| ------: | ----: | -------------: | ------: | ---------------------------------------------------------------------------------------------------- | -------------- |
|  -66.7% |    -2 | 75.0% → 100.0% |   3 → 1 | `G1FullGCMarker::publish_and_drain_oop_tasks`                                                        | `libjvm.dylib` |
| removed |    -1 |   25.0% → 0.0% |   1 → 0 | `void OopOopIterateDispatch<G1MarkAndPushClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `libjvm.dylib` |

##### `HeapRegionManager::par_iterate` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                          | Location       |
| ------: | ----: | -------------: | ------: | ------------------------------- | -------------- |
|  -50.0% |    -2 | 80.0% → 100.0% |   4 → 2 | `G1PrepareEvacuationTask::work` | `libjvm.dylib` |
| removed |    -1 |   20.0% → 0.0% |   1 → 0 | `WorkerThread::run`             | `libjvm.dylib` |

##### `void OopOopIterateDispatch<G1MarkAndPushClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                                        | Location       |
| ------: | ----: | -------------: | ------: | --------------------------------------------- | -------------- |
|  -66.7% |    -2 | 75.0% → 100.0% |   3 → 1 | `G1FullGCMarker::publish_and_drain_oop_tasks` | `libjvm.dylib` |
| removed |    -1 |   25.0% → 0.0% |   1 → 0 | `G1FullGCMarker::follow_marking_stacks`       | `libjvm.dylib` |

##### `JvmtiObjectAllocEventCollector::generate_call_for_allocated` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                                                          | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `JvmtiSampledObjectAllocEventCollector::~JvmtiSampledObjectAllocEventCollector` | `libjvm.dylib` |

##### `arrayof_jint_disjoint_arraycopy` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                              | Location              |
| ------: | ----: | ------------: | ------: | ----------------------------------- | --------------------- |
|  -31.3% |    -5 | 69.6% → 52.4% | 16 → 11 | `copyOf(Object[], int)`             | `java.util.Arrays`    |
| removed |    -4 |  17.4% → 0.0% |   4 → 0 | `merge(Object, Object, BiFunction)` | `java.util.HashMap`   |
|     new |    +4 |  0.0% → 19.0% |   0 → 4 | `<init>(Collection)`                | `java.util.ArrayList` |
| +100.0% |    +3 | 13.0% → 28.6% |   3 → 6 | `grow(int)`                         | `java.util.ArrayList` |

##### `Chunk::operator new` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller               | Location       |
| ------: | ----: | -----------: | ------: | -------------------- | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `Arena::grow`        | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `vframe::new_vframe` | `libjvm.dylib` |

##### `inflate_table` (`libzip.dylib`)

|  Change | Delta |             % | Samples | Caller    | Location       |
| ------: | ----: | ------------: | ------: | --------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `inflate` | `libzip.dylib` |

##### `grow()` (`java.util.ArrayList`)

|  Change | Delta |             % | Samples | Caller                       | Location              |
| ------: | ----: | ------------: | ------: | ---------------------------- | --------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `add(Object, Object[], int)` | `java.util.ArrayList` |

##### `add(Object)` (`java.util.ArrayList`)

|  Change | Delta |             % | Samples | Caller                   | Location                                                   |
| ------: | ----: | ------------: | ------: | ------------------------ | ---------------------------------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `fork()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |             % | Samples | Caller      | Location                                               |
| ------: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `get(int)` (`java.util.ArrayList`)

|  Change | Delta |            % | Samples | Caller                   | Location                                                   |
| ------: | ----: | -----------: | ------: | ------------------------ | ---------------------------------------------------------- |
| removed |    -2 | 50.0% → 0.0% |   2 → 0 | `findNearestCentroid()`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -50.0% |    -1 |        50.0% |   2 → 1 | `vectorSum()`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|     new |    +1 | 0.0% → 50.0% |   0 → 1 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `accept(Object)` (`java.util.stream.Nodes$FixedNodeBuilder`)

|  Change | Delta |             % | Samples | Caller           | Location                              |
| ------: | ----: | ------------: | ------: | ---------------- | ------------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `accept(int)`    | `java.util.stream.IntPipeline$1$1`    |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `accept(double)` | `java.util.stream.DoublePipeline$1$1` |

##### `entrySet()` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Caller                        | Location            |
| ------: | ----: | ------------: | ------: | ----------------------------- | ------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `size()` (`java.util.ArrayList`)

|  Change | Delta |             % | Samples | Caller                  | Location                                                   |
| ------: | ----: | ------------: | ------: | ----------------------- | ---------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `findNearestCentroid()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `casSlotToNull(ForkJoinTask[], int, ForkJoinTask)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change | Delta |             % | Samples | Caller                                   | Location                            |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | ----------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Caller            | Location                                    |
| -----: | ----: | -----: | ------: | ----------------- | ------------------------------------------- |
| -16.7% |    -1 | 100.0% |   6 → 5 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `addAll(Collection)` (`java.util.ArrayList`)

| Change | Delta |      % | Samples | Caller                       | Location                                    |
| -----: | ----: | -----: | ------: | ---------------------------- | ------------------------------------------- |
| -50.0% |    -1 | 100.0% |   2 → 1 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `spliterator(double[], int, int, int)` (`java.util.Spliterators`)

|  Change | Delta |             % | Samples | Caller                            | Location           |
| ------: | ----: | ------------: | ------: | --------------------------------- | ------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `spliterator(double[], int, int)` | `java.util.Arrays` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % | Samples | Caller                              | Location                            |
| -----: | ----: | -----: | ------: | ----------------------------------- | ----------------------------------- |
| -50.0% |    -1 | 100.0% |   2 → 1 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `unpark(Object)` (`jdk.internal.misc.Unsafe`)

|  Change | Delta |             % | Samples | Caller           | Location                                 |
| ------: | ----: | ------------: | ------: | ---------------- | ---------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `unpark(Thread)` | `java.util.concurrent.locks.LockSupport` |

##### `unpark(Thread)` (`java.util.concurrent.locks.LockSupport`)

|  Change | Delta |             % | Samples | Caller                         | Location                            |
| ------: | ----: | ------------: | ------: | ------------------------------ | ----------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `tryCompensate(long, boolean)` | `java.util.concurrent.ForkJoinPool` |

##### `tryCompensate(long, boolean)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % | Samples | Caller                                                    | Location                            |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------- | ----------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool` |

##### `PhaseChaitin::build_ifg_virtual` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                            | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `RegionNode::is_CFG` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                               | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------ | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `PhaseIdealLoop::Dominators`         | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Node::destruct` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                          | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------- | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `PhaseCFG::implicit_null_check` | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `PhaseValues::uncached_makecon` | `libjvm.dylib` |

##### `ValueStack::total_locks_size` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                        | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `LinearScan::compute_oop_map` | `libjvm.dylib` |

##### `LinearScanWalker::split_before_usage` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                             | Location       |
| ------: | ----: | -----------: | ------: | ---------------------------------- | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `LinearScanWalker::alloc_free_reg` | `libjvm.dylib` |

##### `Canonicalizer::do_If` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                          | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `GraphBuilder::append_with_bci` | `libjvm.dylib` |

##### `GraphBuilder::iterate_bytecodes_for_block` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                             | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `GraphBuilder::iterate_all_blocks` | `libjvm.dylib` |

##### `GraphBuilder::try_inline` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                 | Location       |
| ------: | ----: | ------------: | ------: | ---------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `GraphBuilder::invoke` | `libjvm.dylib` |

##### `ciMetadata::is_classless` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                 | Location       |
| ------: | ----: | ------------: | ------: | ---------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `GraphBuilder::invoke` | `libjvm.dylib` |

##### `LIR_OpVisitState::visit` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `LinearScan::compute_local_live_sets` | `libjvm.dylib` |

##### `BlockBegin::state_values_do` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                         | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------ | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `BlockBegin::iterate_preorder` | `libjvm.dylib` |

##### `LinearScanWalker::free_collect_inactive_fixed` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                             | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `LinearScanWalker::alloc_free_reg` | `libjvm.dylib` |

##### `PhaseOutput::Process_OopMap_Node` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                     | Location       |
| ------: | ----: | ------------: | ------: | -------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseOutput::fill_buffer` | `libjvm.dylib` |

##### `Node_Array::insert` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                               | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `Scheduling::AddNodeToAvailableList` | `libjvm.dylib` |

##### `PhaseLive::add_liveout` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller               | Location       |
| ------: | ----: | ------------: | ------: | -------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseLive::compute` | `libjvm.dylib` |

##### `PhaseRegAlloc::reg2offset` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller          | Location       |
| ------: | ----: | ------------: | ------: | --------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `new_loc_value` | `libjvm.dylib` |

##### `LoadPNode::Opcode` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                   | Location       |
| ------: | ----: | ------------: | ------: | ------------------------ | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `Matcher::pd_clone_node` | `libjvm.dylib` |

##### `CountedLoopNode::stride_con` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                                    | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseIdealLoop::loop_predication_should_follow_branches` | `libjvm.dylib` |

##### `PhaseCCP::push_child_nodes_to_worklist` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller              | Location       |
| ------: | ----: | ------------: | ------: | ------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseCCP::analyze` | `libjvm.dylib` |

##### `Compile::update_dead_node_list` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                   | Location       |
| ------: | ----: | -----------: | ------: | ---------------------------------------- | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |

### Total samples

#### Regressions

Functions with the largest increase in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

| Change | Delta |             % |   Samples | Function                                                                                                               | Location                                                               |
| -----: | ----: | ------------: | --------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| +25.9% |  +152 | 12.3% → 16.0% | 588 → 740 | `park(boolean, long)`                                                                                                  | `jdk.internal.misc.Unsafe`                                             |
| +26.5% |  +152 | 12.1% → 15.7% | 574 → 726 | `park()`                                                                                                               | `java.util.concurrent.locks.LockSupport`                               |
| +25.5% |  +150 | 12.3% → 16.0% | 588 → 738 | `LockTracer::UnsafeParkHook`                                                                                           | `libasyncProfiler.dylib`                                               |
| +25.9% |  +146 | 11.8% → 15.3% | 563 → 709 | `Parker::park`                                                                                                         | `libjvm.dylib`                                                         |
| +23.6% |  +138 | 12.3% → 15.6% | 584 → 722 | `__psynch_cvwait`                                                                                                      | `libsystem_kernel.dylib`                                               |
| +24.1% |  +138 | 12.0% → 15.4% | 573 → 711 | `Unsafe_Park`                                                                                                          | `libjvm.dylib`                                                         |
| +56.3% |  +125 |   4.7% → 7.5% | 222 → 347 | `awaitWork(ForkJoinPool$WorkQueue)`                                                                                    | `java.util.concurrent.ForkJoinPool`                                    |
| +30.5% |   +98 |   6.7% → 9.1% | 321 → 419 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011a7248` |
| +30.2% |   +97 |   6.7% → 9.0% | 321 → 418 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| +69.9% |   +79 |   2.4% → 4.2% | 113 → 192 | `<init>(Collection)`                                                                                                   | `java.util.ArrayList`                                                  |
| +45.1% |   +60 |   2.8% → 4.2% | 133 → 193 | `grow(int)`                                                                                                            | `java.util.ArrayList`                                                  |
|  +8.7% |   +39 |  9.4% → 10.6% | 450 → 489 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| +50.7% |   +38 |   1.6% → 2.4% |  75 → 113 | `grow()`                                                                                                               | `java.util.ArrayList`                                                  |
| +24.8% |   +34 |   2.9% → 3.7% | 137 → 171 | `add(Object, Object[], int)`                                                                                           | `java.util.ArrayList`                                                  |
| +22.1% |   +31 |   2.9% → 3.7% | 140 → 171 | `add(Object)`                                                                                                          | `java.util.ArrayList`                                                  |
|  +6.0% |   +26 |   9.0% → 9.9% | 431 → 457 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +6.0% |   +26 |   9.0% → 9.9% | 430 → 456 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  +5.3% |   +23 |   9.1% → 9.9% | 433 → 456 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|    new |   +22 |   0.0% → 0.5% |    0 → 22 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
| +13.0% |   +21 |   3.4% → 4.0% | 162 → 183 | `MemAllocator::allocate`                                                                                               | `libjvm.dylib`                                                         |

##### Ours

|  Change | Delta |            % |   Samples | Function                                                                                                               | Location                                                                                      |
| ------: | ----: | -----------: | --------: | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
|  +30.5% |   +98 |  6.7% → 9.1% | 321 → 419 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011a7248`                        |
|  +30.2% |   +97 |  6.7% → 9.0% | 321 → 418 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                                                   |
|   +8.7% |   +39 | 9.4% → 10.6% | 450 → 489 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                    |
|   +6.0% |   +26 |  9.0% → 9.9% | 431 → 457 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                                                   |
|   +6.0% |   +26 |  9.0% → 9.9% | 430 → 456 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                    |
|   +5.3% |   +23 |  9.1% → 9.9% | 433 → 456 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                    |
|     new |   +22 |  0.0% → 0.5% |    0 → 22 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                                                   |
|   +3.4% |   +14 |  8.7% → 9.3% | 414 → 428 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                                                   |
|   +3.1% |   +13 |  8.7% → 9.3% | 415 → 428 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011a3b90`                        |
| +128.6% |    +9 |  0.1% → 0.3% |    7 → 16 | `setUpBeforeAll(BenchmarkContext)`                                                                                     | `org.renaissance.jdk.concurrent.FjKmeans`                                                     |
|  +21.1% |    +8 |  0.8% → 1.0% |   38 → 46 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                                               |
|  +17.5% |    +7 |  0.8% → 1.0% |   40 → 47 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                                               |
|  +17.5% |    +7 |  0.8% → 1.0% |   40 → 47 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                                               |
|  +37.5% |    +6 |  0.3% → 0.5% |   16 → 22 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000040111f1b8`                        |
|  +50.0% |    +6 |  0.3% → 0.4% |   12 → 18 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                                                     |
|     new |    +6 |  0.0% → 0.1% |     0 → 6 | `rowToArray$1(Map)`                                                                                                    | `org.renaissance.jdk.concurrent.FjKmeans`                                                     |
|     new |    +6 |  0.0% → 0.1% |     0 → 6 | `setUpBeforeAll$$anonfun$1(Map)`                                                                                       | `org.renaissance.jdk.concurrent.FjKmeans`                                                     |
|     new |    +6 |  0.0% → 0.1% |     0 → 6 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x0000000401126908`                          |
|     new |    +6 |  0.0% → 0.1% |     0 → 6 | `lambda$toCsvRows$2(String[], Function, String)`                                                                       | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`                            |
|     new |    +6 |  0.0% → 0.1% |     0 → 6 | `apply(Object)`                                                                                                        | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter$$Lambda.0x0000000401123bf8` |

##### Native

|  Change | Delta |             % |   Samples | Function                                                                        | Location                 |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------------------------------- | ------------------------ |
|  +25.5% |  +150 | 12.3% → 16.0% | 588 → 738 | `LockTracer::UnsafeParkHook`                                                    | `libasyncProfiler.dylib` |
|  +25.9% |  +146 | 11.8% → 15.3% | 563 → 709 | `Parker::park`                                                                  | `libjvm.dylib`           |
|  +23.6% |  +138 | 12.3% → 15.6% | 584 → 722 | `__psynch_cvwait`                                                               | `libsystem_kernel.dylib` |
|  +24.1% |  +138 | 12.0% → 15.4% | 573 → 711 | `Unsafe_Park`                                                                   | `libjvm.dylib`           |
|  +13.0% |   +21 |   3.4% → 4.0% | 162 → 183 | `MemAllocator::allocate`                                                        | `libjvm.dylib`           |
|  +13.6% |   +21 |   3.2% → 3.8% | 154 → 175 | `CollectedHeap::array_allocate`                                                 | `libjvm.dylib`           |
|  +13.3% |   +21 |   3.3% → 3.9% | 158 → 179 | `OptoRuntime::new_array_C`                                                      | `libjvm.dylib`           |
|  +21.1% |   +19 |   1.9% → 2.4% |  90 → 109 | `Profiler::recordSample`                                                        | `libasyncProfiler.dylib` |
| +100.0% |   +19 |   0.4% → 0.8% |   19 → 38 | `vframe::new_vframe`                                                            | `libjvm.dylib`           |
|  +22.5% |   +18 |   1.7% → 2.1% |   80 → 98 | `JvmtiEnv::GetStackTrace`                                                       | `libjvm.dylib`           |
|  +11.0% |   +18 |   3.4% → 3.9% | 163 → 181 | `_new_array_Java`                                                               | `<unknown>`              |
|  +23.0% |   +17 |   1.6% → 2.0% |   74 → 91 | `JvmtiEnvBase::get_stack_trace`                                                 | `libjvm.dylib`           |
|  +21.0% |   +17 |   1.7% → 2.1% |   81 → 98 | `jvmti_GetStackTrace`                                                           | `libjvm.dylib`           |
|  +15.5% |   +17 |   2.3% → 2.7% | 110 → 127 | `JvmtiExport::post_sampled_object_alloc`                                        | `libjvm.dylib`           |
|  +11.6% |   +17 |   3.1% → 3.5% | 147 → 164 | `InstanceKlass::allocate_objArray`                                              | `libjvm.dylib`           |
|  +13.2% |   +15 |   2.4% → 2.8% | 114 → 129 | `JvmtiObjectAllocEventCollector::generate_call_for_allocated`                   | `libjvm.dylib`           |
| +115.4% |   +15 |   0.3% → 0.6% |   13 → 28 | `vframe::sender`                                                                | `libjvm.dylib`           |
|  +12.1% |   +14 |   2.4% → 2.8% | 116 → 130 | `JvmtiSampledObjectAllocEventCollector::~JvmtiSampledObjectAllocEventCollector` | `libjvm.dylib`           |
|  +11.4% |   +14 |   2.6% → 3.0% | 123 → 137 | `MemAllocator::Allocation::notify_allocation_jvmti_sampler`                     | `libjvm.dylib`           |
|  +30.4% |   +14 |   1.0% → 1.3% |   46 → 60 | `__psynch_cvsignal`                                                             | `libsystem_kernel.dylib` |

##### Standard library

|  Change | Delta |             % |   Samples | Function                                        | Location                                 |
| ------: | ----: | ------------: | --------: | ----------------------------------------------- | ---------------------------------------- |
|  +25.9% |  +152 | 12.3% → 16.0% | 588 → 740 | `park(boolean, long)`                           | `jdk.internal.misc.Unsafe`               |
|  +26.5% |  +152 | 12.1% → 15.7% | 574 → 726 | `park()`                                        | `java.util.concurrent.locks.LockSupport` |
|  +56.3% |  +125 |   4.7% → 7.5% | 222 → 347 | `awaitWork(ForkJoinPool$WorkQueue)`             | `java.util.concurrent.ForkJoinPool`      |
|  +69.9% |   +79 |   2.4% → 4.2% | 113 → 192 | `<init>(Collection)`                            | `java.util.ArrayList`                    |
|  +45.1% |   +60 |   2.8% → 4.2% | 133 → 193 | `grow(int)`                                     | `java.util.ArrayList`                    |
|  +50.7% |   +38 |   1.6% → 2.4% |  75 → 113 | `grow()`                                        | `java.util.ArrayList`                    |
|  +24.8% |   +34 |   2.9% → 3.7% | 137 → 171 | `add(Object, Object[], int)`                    | `java.util.ArrayList`                    |
|  +22.1% |   +31 |   2.9% → 3.7% | 140 → 171 | `add(Object)`                                   | `java.util.ArrayList`                    |
|  +22.8% |   +21 |   1.9% → 2.4% |  92 → 113 | `doubleValue()`                                 | `java.lang.Double`                       |
|   +6.9% |   +20 |   6.1% → 6.7% | 290 → 310 | `copyOf(Object[], int)`                         | `java.util.Arrays`                       |
|   +9.7% |   +20 |   4.3% → 4.9% | 206 → 226 | `addAll(Collection)`                            | `java.util.ArrayList`                    |
|   +3.1% |   +13 |   8.7% → 9.2% | 414 → 427 | `merge(Object, Object, BiFunction)`             | `java.util.HashMap`                      |
| +325.0% |   +13 |   0.1% → 0.4% |    4 → 17 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap`                      |
|   +2.9% |   +12 |   8.8% → 9.4% | 421 → 433 | `forEach(BiConsumer)`                           | `java.util.HashMap`                      |
| +133.3% |   +12 |   0.2% → 0.5% |    9 → 21 | `putMapEntries(Map, boolean)`                   | `java.util.HashMap`                      |
| +133.3% |   +12 |   0.2% → 0.5% |    9 → 21 | `<init>(Map)`                                   | `java.util.HashMap`                      |
|  +18.2% |   +10 |   1.2% → 1.4% |   55 → 65 | `unpark(Object)`                                | `jdk.internal.misc.Unsafe`               |
|  +16.1% |    +9 |   1.2% → 1.4% |   56 → 65 | `unpark(Thread)`                                | `java.util.concurrent.locks.LockSupport` |
| +112.5% |    +9 |   0.2% → 0.4% |    8 → 17 | `tryCompensate(long, boolean)`                  | `java.util.concurrent.ForkJoinPool`      |
|  +38.1% |    +8 |   0.4% → 0.6% |   21 → 29 | `checkIndex(int, int)`                          | `java.util.Objects`                      |

##### JIT

| Change | Delta |            % | Samples | Function                   | Location    |
| -----: | ----: | -----------: | ------: | -------------------------- | ----------- |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `I2C/C2I adapters(0xbbea)` | `<unknown>` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `I2C/C2I adapters(0x)`     | `<unknown>` |

##### Compiler

|  Change | Delta |            % | Samples | Function                                   | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------ | -------------- |
|  +22.6% |   +12 |  1.1% → 1.4% | 53 → 65 | `Compile::Compile`                         | `libjvm.dylib` |
|  +22.6% |   +12 |  1.1% → 1.4% | 53 → 65 | `C2Compiler::compile_method`               | `libjvm.dylib` |
|  +12.7% |   +10 |  1.7% → 1.9% | 79 → 89 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib` |
|   +8.6% |    +6 |  1.5% → 1.6% | 70 → 76 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
| +125.0% |    +5 |  0.1% → 0.2% |   4 → 9 | `Matcher::match`                           | `libjvm.dylib` |
|  +38.5% |    +5 |  0.3% → 0.4% | 13 → 18 | `Compile::Optimize`                        | `libjvm.dylib` |
|  +44.4% |    +4 |  0.2% → 0.3% |  9 → 13 | `CompileQueue::get`                        | `libjvm.dylib` |
| +400.0% |    +4 | <0.1% → 0.1% |   1 → 5 | `Matcher::xform`                           | `libjvm.dylib` |
|   +9.4% |    +3 |  0.7% → 0.8% | 32 → 35 | `Compile::Code_Gen`                        | `libjvm.dylib` |
|  +33.3% |    +3 |  0.2% → 0.3% |  9 → 12 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib` |
|  +33.3% |    +3 |  0.2% → 0.3% |  9 → 12 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib` |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `PhaseChaitin::build_ifg_physical`         | `libjvm.dylib` |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `Matcher::match_tree`                      | `libjvm.dylib` |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `Matcher::Label_Root`                      | `libjvm.dylib` |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `ciBytecodeStream::get_method`             | `libjvm.dylib` |
|  +20.0% |    +2 |  0.2% → 0.3% | 10 → 12 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
| +100.0% |    +2 | <0.1% → 0.1% |   2 → 4 | `PhaseIdealLoop::build_loop_tree`          | `libjvm.dylib` |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `PhaseIterGVN::transform_old`              | `libjvm.dylib` |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `PhaseIterGVN::optimize`                   | `libjvm.dylib` |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `TypeInstPtr::add_offset`                  | `libjvm.dylib` |

#### Improvements

Functions with the largest decrease in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

| Change | Delta |             % |       Samples | Function                                                  | Location                                                   |
| -----: | ----: | ------------: | ------------: | --------------------------------------------------------- | ---------------------------------------------------------- |
|  -7.1% |  -273 | 81.2% → 77.8% | 3,869 → 3,596 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
|  -6.3% |  -265 | 88.6% → 85.6% | 4,219 → 3,954 | `compute()`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
|  -6.3% |  -264 | 88.6% → 85.6% | 4,219 → 3,955 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                       |
|  -6.1% |  -258 | 89.1% → 86.2% | 4,242 → 3,984 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                        |
|  -6.1% |  -258 | 89.1% → 86.2% | 4,242 → 3,984 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
|  -6.0% |  -253 | 89.1% → 86.4% | 4,245 → 3,992 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`                        |
|  -6.2% |  -249 | 84.9% → 82.2% | 4,045 → 3,796 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                        |
|  -6.2% |  -249 | 84.9% → 82.2% | 4,045 → 3,796 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                        |
| -16.3% |  -247 | 31.8% → 27.5% | 1,517 → 1,270 | `vectorSum()`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| -16.3% |  -247 | 31.8% → 27.5% | 1,517 → 1,270 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| -26.3% |  -231 | 18.5% → 14.0% |     880 → 649 | `distance(Double[], Double[])`                            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -21.0% |  -207 | 20.7% → 16.9% |     986 → 779 | `accumulate(Double[], double[])`                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| -14.2% |  -153 | 22.7% → 20.1% |   1,081 → 928 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                        |
|  -2.9% |  -128 | 93.9% → 94.0% | 4,473 → 4,345 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                        |
|  -2.9% |  -128 | 93.9% → 94.0% | 4,473 → 4,345 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`                |
|  -7.6% |  -102 | 28.1% → 26.7% | 1,337 → 1,235 | `findNearestCentroid()`                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -12.2% |   -82 | 14.2% → 12.8% |     674 → 592 | `computeClusterAverages()`                                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| -12.2% |   -82 | 14.2% → 12.8% |     674 → 592 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| -12.0% |   -80 | 14.0% → 12.7% |     669 → 589 | `average(List)`                                           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -8.0% |   -78 | 20.5% → 19.5% |     977 → 899 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`                        |

##### Ours

|  Change | Delta |             % |       Samples | Function                                                                                                               | Location                                                                              |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|   -6.3% |  -265 | 88.6% → 85.6% | 4,219 → 3,954 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                |
|  -16.3% |  -247 | 31.8% → 27.5% | 1,517 → 1,270 | `vectorSum()`                                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  -16.3% |  -247 | 31.8% → 27.5% | 1,517 → 1,270 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  -26.3% |  -231 | 18.5% → 14.0% |     880 → 649 | `distance(Double[], Double[])`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -21.0% |  -207 | 20.7% → 16.9% |     986 → 779 | `accumulate(Double[], double[])`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|   -7.6% |  -102 | 28.1% → 26.7% | 1,337 → 1,235 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -12.2% |   -82 | 14.2% → 12.8% |     674 → 592 | `computeClusterAverages()`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|  -12.2% |   -82 | 14.2% → 12.8% |     674 → 592 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|  -12.0% |   -80 | 14.0% → 12.7% |     669 → 589 | `average(List)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|   -3.5% |   -63 | 37.5% → 37.3% | 1,787 → 1,724 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| removed |   -16 |   0.3% → 0.0% |        16 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                                           |
|   -3.0% |   -14 |          9.9% |     470 → 456 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|   -3.0% |   -14 |          9.9% |     470 → 456 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011a2bd0`                |
|  -80.0% |    -4 |  0.1% → <0.1% |         5 → 1 | `run(BenchmarkContext)`                                                                                                | `org.renaissance.jdk.concurrent.FjKmeans`                                             |
|  -80.0% |    -4 |  0.1% → <0.1% |         5 → 1 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000004011a3940` |
|  -60.0% |    -3 |  0.1% → <0.1% |         5 → 2 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                                             |
|  -75.0% |    -3 |  0.1% → <0.1% |         4 → 1 | `lambda$collectClusters$0(Double[])`                                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -50.0% |    -2 |  0.1% → <0.1% |         4 → 2 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  -66.7% |    -2 |  0.1% → <0.1% |         3 → 1 | `<init>(JavaKMeans, List, List, int, int)`                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -33.3% |    -1 |  0.1% → <0.1% |         3 → 2 | `boxed(double[])`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |

##### Native

|  Change | Delta |            % |   Samples | Function                                                    | Location                   |
| ------: | ----: | -----------: | --------: | ----------------------------------------------------------- | -------------------------- |
|  -20.3% |   -30 |  3.1% → 2.6% | 148 → 118 | `WorkerThread::run`                                         | `libjvm.dylib`             |
|   -8.7% |   -21 |  5.1% → 4.8% | 241 → 220 | `Thread::call_run`                                          | `libjvm.dylib`             |
|   -8.7% |   -21 |  5.1% → 4.8% | 241 → 220 | `thread_native_entry`                                       | `libjvm.dylib`             |
|  -56.8% |   -21 |  0.8% → 0.3% |   37 → 16 | `HeapRegionManager::par_iterate`                            | `libjvm.dylib`             |
|   -8.3% |   -20 |  5.1% → 4.8% | 241 → 221 | `_pthread_start`                                            | `libsystem_pthread.dylib`  |
|   -8.3% |   -20 |  5.1% → 4.8% | 241 → 221 | `thread_start`                                              | `libsystem_pthread.dylib`  |
|  -95.0% |   -19 | 0.4% → <0.1% |    20 → 1 | `G1ParScanThreadState::do_copy_to_survivor_space`           | `libjvm.dylib`             |
|  -54.8% |   -17 |  0.7% → 0.3% |   31 → 14 | `G1EvacuateRegionsBaseTask::work`                           | `libjvm.dylib`             |
|  -69.6% |   -16 |  0.5% → 0.2% |    23 → 7 | `G1ParScanThreadState::trim_queue_to_threshold`             | `libjvm.dylib`             |
| removed |   -16 |  0.3% → 0.0% |    16 → 0 | `MarkBitMap::do_clear`                                      | `libjvm.dylib`             |
| removed |   -16 |  0.3% → 0.0% |    16 → 0 | `G1ClearBitMapTask::G1ClearBitmapHRClosure::do_heap_region` | `libjvm.dylib`             |
|  -42.9% |   -12 |  0.6% → 0.3% |   28 → 16 | `_platform_memset`                                          | `libsystem_platform.dylib` |
|  -27.9% |   -12 |  0.9% → 0.7% |   43 → 31 | `G1FullGCMarker::follow_marking_stacks`                     | `libjvm.dylib`             |
|  -68.8% |   -11 |  0.3% → 0.1% |    16 → 5 | `G1ParScanThreadState::steal_and_trim_queue`                | `libjvm.dylib`             |
|  -37.0% |   -10 |  0.6% → 0.4% |   27 → 17 | `pthread_jit_write_protect_np`                              | `libsystem_pthread.dylib`  |
|  -14.7% |   -10 |  1.4% → 1.3% |   68 → 58 | `G1FullGCMarker::complete_marking`                          | `libjvm.dylib`             |
|  -14.7% |   -10 |  1.4% → 1.3% |   68 → 58 | `G1FullGCMarkTask::work`                                    | `libjvm.dylib`             |
| removed |    -9 |  0.2% → 0.0% |     9 → 0 | `G1EvacuateRegionsTask::scan_roots`                         | `libjvm.dylib`             |
|  -36.4% |    -8 |  0.5% → 0.3% |   22 → 14 | `G1ParEvacuateFollowersClosure::do_void`                    | `libjvm.dylib`             |
|  -36.4% |    -8 |  0.5% → 0.3% |   22 → 14 | `G1EvacuateRegionsTask::evacuate_live_objects`              | `libjvm.dylib`             |

##### Standard library

|  Change | Delta |             % |       Samples | Function                                                  | Location                                            |
| ------: | ----: | ------------: | ------------: | --------------------------------------------------------- | --------------------------------------------------- |
|   -7.1% |  -273 | 81.2% → 77.8% | 3,869 → 3,596 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
|   -6.3% |  -264 | 88.6% → 85.6% | 4,219 → 3,955 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                |
|   -6.1% |  -258 | 89.1% → 86.2% | 4,242 → 3,984 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                 |
|   -6.1% |  -258 | 89.1% → 86.2% | 4,242 → 3,984 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
|   -6.0% |  -253 | 89.1% → 86.4% | 4,245 → 3,992 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`                 |
|   -6.2% |  -249 | 84.9% → 82.2% | 4,045 → 3,796 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                 |
|   -6.2% |  -249 | 84.9% → 82.2% | 4,045 → 3,796 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                 |
|  -14.2% |  -153 | 22.7% → 20.1% |   1,081 → 928 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                 |
|   -2.9% |  -128 | 93.9% → 94.0% | 4,473 → 4,345 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                 |
|   -2.9% |  -128 | 93.9% → 94.0% | 4,473 → 4,345 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`         |
|   -8.0% |   -78 | 20.5% → 19.5% |     977 → 899 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`                 |
|  -12.9% |   -20 |   3.3% → 2.9% |     155 → 135 | `elementData(int)`                                        | `java.util.ArrayList`                               |
|   -3.0% |   -14 |          9.9% |     470 → 456 | `exec()`                                                  | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|   -7.8% |   -14 |   3.8% → 3.6% |     180 → 166 | `get(int)`                                                | `java.util.ArrayList`                               |
|   -4.1% |    -6 |          3.1% |     147 → 141 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                                 |
|  -23.8% |    -5 |   0.4% → 0.3% |       21 → 16 | `hash(Object)`                                            | `java.util.HashMap`                                 |
|   -2.4% |    -5 |   4.3% → 4.4% |     207 → 202 | `toArray()`                                               | `java.util.ArrayList`                               |
| removed |    -3 |   0.1% → 0.0% |         3 → 0 | `stream(double[], int, int)`                              | `java.util.Arrays`                                  |
| removed |    -3 |   0.1% → 0.0% |         3 → 0 | `stream(double[])`                                        | `java.util.Arrays`                                  |
|   -6.5% |    -3 |   1.0% → 0.9% |       46 → 43 | `signalWaiters()`                                         | `java.util.concurrent.ForkJoinTask`                 |

##### JIT

| Change | Delta |           % | Samples | Function      | Location    |
| -----: | ----: | ----------: | ------: | ------------- | ----------- |
| -13.1% |    -8 | 1.3% → 1.1% | 61 → 53 | `zero_blocks` | `<unknown>` |

##### Compiler

|  Change | Delta |            % | Samples | Function                                    | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------- | -------------- |
|  -42.9% |    -6 |  0.3% → 0.2% |  14 → 8 | `Compilation::compile_java_method`          | `libjvm.dylib` |
|  -37.5% |    -6 |  0.3% → 0.2% | 16 → 10 | `Compilation::compile_method`               | `libjvm.dylib` |
|  -37.5% |    -6 |  0.3% → 0.2% | 16 → 10 | `Compilation::Compilation`                  | `libjvm.dylib` |
| removed |    -5 |  0.1% → 0.0% |   5 → 0 | `CompileBroker::compile_method`             | `libjvm.dylib` |
|  -83.3% |    -5 | 0.1% → <0.1% |   6 → 1 | `CompilationPolicy::event`                  | `libjvm.dylib` |
|  -66.7% |    -4 | 0.1% → <0.1% |   6 → 2 | `PhaseCFG::global_code_motion`              | `libjvm.dylib` |
|  -66.7% |    -4 | 0.1% → <0.1% |   6 → 2 | `PhaseCFG::do_global_code_motion`           | `libjvm.dylib` |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `CompileBroker::compile_method_base`        | `libjvm.dylib` |
|  -50.0% |    -3 |         0.1% |   6 → 3 | `Compilation::emit_lir`                     | `libjvm.dylib` |
|  -42.9% |    -3 |         0.1% |   7 → 4 | `Compilation::build_hir`                    | `libjvm.dylib` |
|  -60.0% |    -3 | 0.1% → <0.1% |   5 → 2 | `PhaseChaitin::gather_lrg_masks`            | `libjvm.dylib` |
|  -40.0% |    -2 |         0.1% |   5 → 3 | `LinearScan::do_linear_scan`                | `libjvm.dylib` |
|  -50.0% |    -2 | 0.1% → <0.1% |   4 → 2 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib` |
|  -50.0% |    -2 | 0.1% → <0.1% |   4 → 2 | `GraphBuilder::iterate_all_blocks`          | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `GraphBuilder::try_inline`                  | `libjvm.dylib` |
|  -66.7% |    -2 | 0.1% → <0.1% |   3 → 1 | `GraphBuilder::invoke`                      | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `PhaseOutput::Process_OopMap_Node`          | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `PhaseOutput::fill_buffer`                  | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `PhaseChaitin::build_ifg_virtual`           | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `PhaseCFG::partial_latency_of_defs`         | `libjvm.dylib` |

#### Callees

Callees with the largest change in contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

| Change | Delta |              % |   Samples | Callee                       | Location                 |
| -----: | ----: | -------------: | --------: | ---------------------------- | ------------------------ |
| +25.5% |  +150 | 100.0% → 99.7% | 588 → 738 | `LockTracer::UnsafeParkHook` | `libasyncProfiler.dylib` |
|    new |    +1 |    0.0% → 0.1% |     0 → 1 | `jvmti_GetCurrentThread`     | `libjvm.dylib`           |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

| Change | Delta |      % |   Samples | Callee                | Location                   |
| -----: | ----: | -----: | --------: | --------------------- | -------------------------- |
| +26.5% |  +152 | 100.0% | 574 → 726 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `LockTracer::UnsafeParkHook` (`libasyncProfiler.dylib`)

|  Change | Delta |             % |   Samples | Callee                    | Location        |
| ------: | ----: | ------------: | --------: | ------------------------- | --------------- |
|  +24.1% |  +138 | 97.4% → 96.3% | 573 → 711 | `Unsafe_Park`             | `libjvm.dylib`  |
|  +66.7% |    +4 |   1.0% → 1.4% |    6 → 10 | `jvmti_GetClassSignature` | `libjvm.dylib`  |
|     new |    +4 |   0.0% → 0.5% |     0 → 4 | `jni_GetObjectField`      | `libjvm.dylib`  |
| +200.0% |    +2 |   0.2% → 0.4% |     1 → 3 | `jvmti_Deallocate`        | `libjvm.dylib`  |
|     new |    +2 |   0.0% → 0.3% |     0 → 2 | `tlv_get_addr`            | `libdyld.dylib` |

##### `Parker::park` (`libjvm.dylib`)

|  Change | Delta |             % |   Samples | Callee                                                                                                                                                     | Location                  |
| ------: | ----: | ------------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
|  +24.6% |  +138 | 99.8% → 98.7% | 562 → 700 | `__psynch_cvwait`                                                                                                                                          | `libsystem_kernel.dylib`  |
|     new |    +2 |   0.0% → 0.3% |     0 → 2 | `AccessInternal::PostRuntimeDispatch<G1BarrierSet::AccessBarrier<544868ull, G1BarrierSet>, (AccessInternal::BarrierType)2, 544868ull>::oop_access_barrier` | `libjvm.dylib`            |
|     new |    +2 |   0.0% → 0.3% |     0 → 2 | `_pthread_cond_wait`                                                                                                                                       | `libsystem_pthread.dylib` |
|     new |    +2 |   0.0% → 0.3% |     0 → 2 | `SafepointMechanism::process`                                                                                                                              | `libjvm.dylib`            |
| removed |    -1 |   0.2% → 0.0% |     1 → 0 | `__gettimeofday`                                                                                                                                           | `libsystem_kernel.dylib`  |

##### `Unsafe_Park` (`libjvm.dylib`)

|  Change | Delta |             % |   Samples | Callee                                                                                                                                                     | Location                  |
| ------: | ----: | ------------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
|  +25.9% |  +146 | 98.3% → 99.7% | 563 → 709 | `Parker::park`                                                                                                                                             | `libjvm.dylib`            |
| removed |    -6 |   1.0% → 0.0% |     6 → 0 | `pthread_jit_write_protect_np`                                                                                                                             | `libsystem_pthread.dylib` |
| removed |    -1 |   0.2% → 0.0% |     1 → 0 | `JavaFrameAnchor::make_walkable`                                                                                                                           | `libjvm.dylib`            |
| removed |    -1 |   0.2% → 0.0% |     1 → 0 | `AccessInternal::PostRuntimeDispatch<G1BarrierSet::AccessBarrier<286822ull, G1BarrierSet>, (AccessInternal::BarrierType)3, 286822ull>::oop_access_barrier` | `libjvm.dylib`            |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |             % |   Samples | Callee   | Location                                 |
| -----: | ----: | ------------: | --------: | -------- | ---------------------------------------- |
| +61.2% |  +126 | 92.8% → 95.7% | 206 → 332 | `park()` | `java.util.concurrent.locks.LockSupport` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011a7248`)

| Change | Delta |              % |   Samples | Callee                       | Location                                    |
| -----: | ----: | -------------: | --------: | ---------------------------- | ------------------------------------------- |
| +30.2% |   +97 | 100.0% → 99.8% | 321 → 418 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |             % |   Samples | Callee               | Location              |
| -----: | ----: | ------------: | --------: | -------------------- | --------------------- |
| +69.0% |   +78 | 35.2% → 45.7% | 113 → 191 | `<init>(Collection)` | `java.util.ArrayList` |
|  +9.7% |   +20 | 64.2% → 54.1% | 206 → 226 | `addAll(Collection)` | `java.util.ArrayList` |
| -50.0% |    -1 |   0.6% → 0.2% |     2 → 1 | `_new_instance_Java` | `<unknown>`           |

##### `<init>(Collection)` (`java.util.ArrayList`)

| Change | Delta |              % |   Samples | Callee                            | Location                   |
| -----: | ----: | -------------: | --------: | --------------------------------- | -------------------------- |
|    new |   +42 |   0.0% → 21.9% |    0 → 42 | `arrayof_jint_disjoint_arraycopy` | `<unknown>`                |
|    new |   +37 |   0.0% → 19.3% |    0 → 37 | `zero_blocks`                     | `<unknown>`                |
|  -4.4% |    -5 | 100.0% → 56.3% | 113 → 108 | `toArray()`                       | `java.util.ArrayList`      |
|    new |    +1 |    0.0% → 0.5% |     0 → 1 | `toArray()`                       | `java.util.HashMap$KeySet` |

##### `grow(int)` (`java.util.ArrayList`)

|  Change | Delta |             % |  Samples | Callee                            | Location                          |
| ------: | ----: | ------------: | -------: | --------------------------------- | --------------------------------- |
|  +30.1% |   +25 | 62.4% → 56.0% | 83 → 108 | `copyOf(Object[], int)`           | `java.util.Arrays`                |
|  -38.1% |    -8 |  15.8% → 6.7% |  21 → 13 | `zero_blocks`                     | `<unknown>`                       |
|  +66.7% |    +4 |   4.5% → 5.2% |   6 → 10 | `arrayof_jint_disjoint_arraycopy` | `<unknown>`                       |
| removed |    -2 |   1.5% → 0.0% |    2 → 0 | `_new_array_Java`                 | `<unknown>`                       |
| +100.0% |    +1 |   0.8% → 1.0% |    1 → 2 | `newLength(int, int, int)`        | `jdk.internal.util.ArraysSupport` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % |   Samples | Callee                              | Location              |
| ------: | ----: | ------------: | --------: | ----------------------------------- | --------------------- |
|  +22.1% |   +31 | 31.1% → 35.0% | 140 → 171 | `add(Object)`                       | `java.util.ArrayList` |
|   -4.1% |    -6 | 32.7% → 28.8% | 147 → 141 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`   |
| removed |    -1 |   0.2% → 0.0% |     1 → 0 | `SafepointBlob`                     | `<unknown>`           |
| removed |    -1 |   0.2% → 0.0% |     1 → 0 | `<init>()`                          | `java.util.HashMap`   |
|  -50.0% |    -1 |   0.4% → 0.2% |     2 → 1 | `_new_instance_Java`                | `<unknown>`           |

##### `grow()` (`java.util.ArrayList`)

| Change | Delta |              % |  Samples | Callee      | Location              |
| -----: | ----: | -------------: | -------: | ----------- | --------------------- |
| +56.9% |   +41 | 96.0% → 100.0% | 72 → 113 | `grow(int)` | `java.util.ArrayList` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

| Change | Delta |             % |  Samples | Callee   | Location              |
| -----: | ----: | ------------: | -------: | -------- | --------------------- |
| +50.7% |   +38 | 54.7% → 66.1% | 75 → 113 | `grow()` | `java.util.ArrayList` |

##### `add(Object)` (`java.util.ArrayList`)

| Change | Delta |              % |   Samples | Callee                       | Location              |
| -----: | ----: | -------------: | --------: | ---------------------------- | --------------------- |
| +24.8% |   +34 | 97.9% → 100.0% | 137 → 171 | `add(Object, Object[], int)` | `java.util.ArrayList` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |             % |   Samples | Callee                               | Location                           |
| ------: | ----: | ------------: | --------: | ------------------------------------ | ---------------------------------- |
|   +2.9% |   +12 | 97.7% → 94.7% | 421 → 433 | `forEach(BiConsumer)`                | `java.util.HashMap`                |
| +133.3% |   +12 |   2.1% → 4.6% |    9 → 21 | `<init>(Map)`                        | `java.util.HashMap`                |
|     new |    +3 |   0.0% → 0.7% |     0 → 3 | `linkToTargetMethod(Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| removed |    -1 |   0.2% → 0.0% |     1 → 0 | `_new_instance_Java`                 | `<unknown>`                        |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Callee            | Location                                    |
| -----: | ----: | -----: | --------: | ----------------- | ------------------------------------------- |
|  +6.0% |   +26 | 100.0% | 430 → 456 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |              % |   Samples | Callee                     | Location                                                   |
| -----: | ----: | -------------: | --------: | -------------------------- | ---------------------------------------------------------- |
|  +6.0% |   +26 | 99.3% → 100.0% | 430 → 456 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change | Delta |            % | Samples | Callee                                                                                       | Location                                  |
| -----: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
|    new |   +18 | 0.0% → 81.8% |  0 → 18 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
|    new |    +4 | 0.0% → 18.2% |   0 → 4 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `MemAllocator::allocate` (`libjvm.dylib`)

|  Change | Delta |             % |   Samples | Callee                                                      | Location                   |
| ------: | ----: | ------------: | --------: | ----------------------------------------------------------- | -------------------------- |
|  +11.4% |   +14 | 75.9% → 74.9% | 123 → 137 | `MemAllocator::Allocation::notify_allocation_jvmti_sampler` | `libjvm.dylib`             |
|  -28.6% |    -6 |  13.0% → 8.2% |   21 → 15 | `_platform_bzero`                                           | `libsystem_platform.dylib` |
|  +50.0% |    +4 |   4.9% → 6.6% |    8 → 12 | `_platform_memset`                                          | `libsystem_platform.dylib` |
| +400.0% |    +4 |   0.6% → 2.7% |     1 → 5 | `ObjArrayAllocator::initialize`                             | `libjvm.dylib`             |
|  -14.3% |    -1 |   4.3% → 3.3% |     7 → 6 | `MemAllocator::mem_allocate_inside_tlab_slow`               | `libjvm.dylib`             |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |              % |   Samples | Callee                              | Location            |
| -----: | ----: | -------------: | --------: | ----------------------------------- | ------------------- |
|  +3.1% |   +13 | 100.0% → 99.8% | 414 → 427 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011a3b90`)

| Change | Delta |              % |   Samples | Callee                              | Location                                    |
| -----: | ----: | -------------: | --------: | ----------------------------------- | ------------------------------------------- |
|  +3.4% |   +14 | 99.8% → 100.0% | 414 → 428 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |              % | Samples | Callee                        | Location                                                           |
| -----: | ----: | -------------: | ------: | ----------------------------- | ------------------------------------------------------------------ |
|    new |    +6 |   0.0% → 37.5% |   0 → 6 | `toCsvRows(Function)`         | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter` |
| +28.6% |    +2 | 100.0% → 56.3% |   7 → 9 | `generateData(int, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                        |
|    new |    +1 |    0.0% → 6.3% |   0 → 1 | `toSeq()`                     | `scala.collection.AbstractIterable`                                |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

| Change | Delta |             % | Samples | Callee                               | Location                            |
| -----: | ----: | ------------: | ------: | ------------------------------------ | ----------------------------------- |
| +15.2% |    +5 | 86.8% → 82.6% | 33 → 38 | `invoke(Object, Object[])`           | `java.lang.reflect.Method`          |
| +40.0% |    +2 | 13.2% → 15.2% |   5 → 7 | `createClassLoaderForModule(String)` | `org.renaissance.core.ModuleLoader` |
|    new |    +1 |   0.0% → 2.2% |   0 → 1 | `loadClass(String)`                  | `java.lang.ClassLoader`             |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

|  Change | Delta |             % | Samples | Callee                                                      | Location                        |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------- | ------------------------------- |
|  +21.1% |    +8 | 95.0% → 97.9% | 38 → 46 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher` |
| removed |    -1 |   2.5% → 0.0% |   1 → 0 | `createScratchRoot(Path, boolean)`                          | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.core.Launcher`)

| Change | Delta |      % | Samples | Callee                                 | Location                        |
| -----: | ----: | -----: | ------: | -------------------------------------- | ------------------------------- |
| +17.5% |    +7 | 100.0% | 40 → 47 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000040111f1b8`)

|  Change | Delta |             % | Samples | Callee                                                                                                                 | Location                                    |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
|     new |   +22 | 0.0% → 100.0% |  0 → 22 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |
| removed |   -16 | 100.0% → 0.0% |  16 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`)

|  Change | Delta |             % | Samples | Callee                             | Location                                  |
| ------: | ----: | ------------: | ------: | ---------------------------------- | ----------------------------------------- |
| +128.6% |    +9 | 58.3% → 88.9% |  7 → 16 | `setUpBeforeAll(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |
|  -60.0% |    -3 | 41.7% → 11.1% |   5 → 2 | `executeOperation(int)`            | `org.renaissance.harness.ExecutionDriver` |

##### `rowToArray$1(Map)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |            % | Samples | Callee              | Location                            |
| -----: | ----: | -----------: | ------: | ------------------- | ----------------------------------- |
|    new |    +3 | 0.0% → 50.0% |   0 → 3 | `<clinit>()`        | `scala.Predef$`                     |
|    new |    +1 | 0.0% → 16.7% |   0 → 1 | `loadClass(String)` | `java.lang.ClassLoader`             |
|    new |    +1 | 0.0% → 16.7% |   0 → 1 | `map(Function1)`    | `scala.collection.immutable.Range`  |
|    new |    +1 | 0.0% → 16.7% |   0 → 1 | `toArray(ClassTag)` | `scala.collection.AbstractIterable` |

##### `setUpBeforeAll$$anonfun$1(Map)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |             % | Samples | Callee              | Location                                  |
| -----: | ----: | ------------: | ------: | ------------------- | ----------------------------------------- |
|    new |    +6 | 0.0% → 100.0% |   0 → 6 | `rowToArray$1(Map)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x0000000401126908`)

| Change | Delta |             % | Samples | Callee                           | Location                                  |
| -----: | ----: | ------------: | ------: | -------------------------------- | ----------------------------------------- |
|    new |    +6 | 0.0% → 100.0% |   0 → 6 | `setUpBeforeAll$$anonfun$1(Map)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `lambda$toCsvRows$2(String[], Function, String)` (`org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`)

| Change | Delta |             % | Samples | Callee          | Location                                                             |
| -----: | ----: | ------------: | ------: | --------------- | -------------------------------------------------------------------- |
|    new |    +6 | 0.0% → 100.0% |   0 → 6 | `apply(Object)` | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x0000000401126908` |

##### `apply(Object)` (`org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter$$Lambda.0x0000000401123bf8`)

| Change | Delta |             % | Samples | Callee                                           | Location                                                           |
| -----: | ----: | ------------: | ------: | ------------------------------------------------ | ------------------------------------------------------------------ |
|    new |    +6 | 0.0% → 100.0% |   0 → 6 | `lambda$toCsvRows$2(String[], Function, String)` | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter` |

##### `CollectedHeap::array_allocate` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Callee                   | Location       |
| -----: | ----: | -----: | --------: | ------------------------ | -------------- |
| +13.6% |   +21 | 100.0% | 154 → 175 | `MemAllocator::allocate` | `libjvm.dylib` |

##### `OptoRuntime::new_array_C` (`libjvm.dylib`)

|  Change | Delta |             % |   Samples | Callee                                             | Location                  |
| ------: | ----: | ------------: | --------: | -------------------------------------------------- | ------------------------- |
|  +11.6% |   +17 | 93.0% → 91.6% | 147 → 164 | `InstanceKlass::allocate_objArray`                 | `libjvm.dylib`            |
| +116.7% |    +7 |   3.8% → 7.3% |    6 → 13 | `CollectedHeap::array_allocate`                    | `libjvm.dylib`            |
| removed |    -2 |   1.3% → 0.0% |     2 → 0 | `pthread_jit_write_protect_np`                     | `libsystem_pthread.dylib` |
| removed |    -1 |   0.6% → 0.0% |     1 → 0 | `ObjArrayKlass::array_klass`                       | `libjvm.dylib`            |
| removed |    -1 |   0.6% → 0.0% |     1 → 0 | `CardTableBarrierSet::on_slowpath_allocation_exit` | `libjvm.dylib`            |

##### `Profiler::recordSample` (`libasyncProfiler.dylib`)

| Change | Delta |             % | Samples | Callee                                 | Location                 |
| -----: | ----: | ------------: | ------: | -------------------------------------- | ------------------------ |
| +21.0% |   +17 | 90.0% → 89.9% | 81 → 98 | `jvmti_GetStackTrace`                  | `libjvm.dylib`           |
| +60.0% |    +3 |   5.6% → 7.3% |   5 → 8 | `_kernelrpc_mach_port_deallocate_trap` | `libsystem_kernel.dylib` |
| -50.0% |    -1 |   2.2% → 0.9% |   2 → 1 | `CallTraceStorage::put`                | `libasyncProfiler.dylib` |

##### `vframe::new_vframe` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                           | Location        |
| ------: | ----: | ------------: | ------: | -------------------------------- | --------------- |
| +118.2% |   +13 | 57.9% → 63.2% | 11 → 24 | `compiledVFrame::compiledVFrame` | `libjvm.dylib`  |
|  +85.7% |    +6 | 36.8% → 34.2% |  7 → 13 | `vframe::new_vframe`             | `libjvm.dylib`  |
|  +33.3% |    +2 | 31.6% → 21.1% |   6 → 8 | `Arena::grow`                    | `libjvm.dylib`  |
|     new |    +2 |   0.0% → 5.3% |   0 → 2 | `tlv_get_addr`                   | `libdyld.dylib` |
|     new |    +2 |   0.0% → 5.3% |   0 → 2 | `RegisterMap::RegisterMap`       | `libjvm.dylib`  |

##### `JvmtiEnv::GetStackTrace` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                                     | Location        |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------- | --------------- |
|  +23.0% |   +17 | 92.5% → 92.9% | 74 → 91 | `JvmtiEnvBase::get_stack_trace`                            | `libjvm.dylib`  |
|     new |    +2 |   0.0% → 2.0% |   0 → 2 | `ThreadsListHandle::ThreadsListHandle`                     | `libjvm.dylib`  |
|  -33.3% |    -1 |   3.8% → 2.0% |   3 → 2 | `JvmtiVTMSTransitionDisabler::JvmtiVTMSTransitionDisabler` | `libjvm.dylib`  |
| removed |    -1 |   1.3% → 0.0% |   1 → 0 | `tlv_get_addr`                                             | `libdyld.dylib` |
|     new |    +1 |   0.0% → 1.0% |   0 → 1 | `JvmtiEnvBase::get_cthread_last_java_vframe`               | `libjvm.dylib`  |

##### `_new_array_Java` (`<unknown>`)

|  Change | Delta |             % |   Samples | Callee                                             | Location                  |
| ------: | ----: | ------------: | --------: | -------------------------------------------------- | ------------------------- |
|  +13.3% |   +21 | 96.9% → 98.9% | 158 → 179 | `OptoRuntime::new_array_C`                         | `libjvm.dylib`            |
|  -50.0% |    -2 |   2.5% → 1.1% |     4 → 2 | `pthread_jit_write_protect_np`                     | `libsystem_pthread.dylib` |
| removed |    -1 |   0.6% → 0.0% |     1 → 0 | `CardTableBarrierSet::on_slowpath_allocation_exit` | `libjvm.dylib`            |

##### `JvmtiEnvBase::get_stack_trace` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                       | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------------------- | -------------- |
|  +18.0% |    +9 | 67.6% → 64.8% | 50 → 59 | `vframe::java_sender`                        | `libjvm.dylib` |
|  +80.0% |    +8 | 13.5% → 19.8% | 10 → 18 | `JvmtiEnvBase::get_cthread_last_java_vframe` | `libjvm.dylib` |
|   +9.5% |    +6 | 85.1% → 75.8% | 63 → 69 | `JvmtiEnvBase::get_stack_trace`              | `libjvm.dylib` |
|  -83.3% |    -5 |   8.1% → 1.1% |   6 → 1 | `Method::jmethod_id`                         | `libjvm.dylib` |
| +100.0% |    +3 |   4.1% → 6.6% |   3 → 6 | `Chunk::next_chop`                           | `libjvm.dylib` |

##### `jvmti_GetStackTrace` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                                                      | Location       |
| ------: | ----: | -------------: | ------: | ----------------------------------------------------------- | -------------- |
|  +22.5% |   +18 | 98.8% → 100.0% | 80 → 98 | `JvmtiEnv::GetStackTrace`                                   | `libjvm.dylib` |
| removed |    -1 |    1.2% → 0.0% |   1 → 0 | `JvmtiVTMSTransitionDisabler::~JvmtiVTMSTransitionDisabler` | `libjvm.dylib` |

##### `JvmtiExport::post_sampled_object_alloc` (`libjvm.dylib`)

|  Change | Delta |             % |   Samples | Callee                                                 | Location                 |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------ | ------------------------ |
|  +12.1% |   +13 | 97.3% → 94.5% | 107 → 120 | `ObjectSampler::recordAllocation`                      | `libasyncProfiler.dylib` |
|  +50.0% |    +1 |   1.8% → 2.4% |     2 → 3 | `JvmtiObjectAllocEventMark::JvmtiObjectAllocEventMark` | `libjvm.dylib`           |
| removed |    -1 |   0.9% → 0.0% |     1 → 0 | `SafepointMechanism::process`                          | `libjvm.dylib`           |
|     new |    +1 |   0.0% → 0.8% |     0 → 1 | `HandleMark::~HandleMark`                              | `libjvm.dylib`           |
|     new |    +1 |   0.0% → 0.8% |     0 → 1 | `HandleMark::initialize`                               | `libjvm.dylib`           |

##### `InstanceKlass::allocate_objArray` (`libjvm.dylib`)

| Change | Delta |              % |   Samples | Callee                                 | Location       |
| -----: | ----: | -------------: | --------: | -------------------------------------- | -------------- |
| +10.2% |   +15 | 100.0% → 98.8% | 147 → 162 | `CollectedHeap::array_allocate`        | `libjvm.dylib` |
|    new |    +1 |    0.0% → 0.6% |     0 → 1 | `Klass::check_array_allocation_length` | `libjvm.dylib` |
|    new |    +1 |    0.0% → 0.6% |     0 → 1 | `MemAllocator::allocate`               | `libjvm.dylib` |

##### `JvmtiObjectAllocEventCollector::generate_call_for_allocated` (`libjvm.dylib`)

|  Change | Delta |             % |   Samples | Callee                                   | Location                   |
| ------: | ----: | ------------: | --------: | ---------------------------------------- | -------------------------- |
|  +15.5% |   +17 | 96.5% → 98.4% | 110 → 127 | `JvmtiExport::post_sampled_object_alloc` | `libjvm.dylib`             |
| removed |    -2 |   1.8% → 0.0% |     2 → 0 | `OopStorage::release`                    | `libjvm.dylib`             |
|     new |    +1 |   0.0% → 0.8% |     0 → 1 | `_platform_memset`                       | `libsystem_platform.dylib` |
|     new |    +1 |   0.0% → 0.8% |     0 → 1 | `ObjectSampler::SampledObjectAlloc`      | `libasyncProfiler.dylib`   |

##### `vframe::sender` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                      | Location       |
| ------: | ----: | ------------: | ------: | --------------------------- | -------------- |
|  +91.7% |   +11 | 92.3% → 82.1% | 12 → 23 | `vframe::new_vframe`        | `libjvm.dylib` |
| +300.0% |    +3 |  7.7% → 14.3% |   1 → 4 | `frame::real_sender`        | `libjvm.dylib` |
|     new |    +1 |   0.0% → 3.6% |   0 → 1 | `CodeBlob::is_runtime_stub` | `libjvm.dylib` |

##### `JvmtiSampledObjectAllocEventCollector::~JvmtiSampledObjectAllocEventCollector` (`libjvm.dylib`)

|  Change | Delta |             % |   Samples | Callee                                                        | Location                 |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------------- | ------------------------ |
|  +13.2% |   +15 | 98.3% → 99.2% | 114 → 129 | `JvmtiObjectAllocEventCollector::generate_call_for_allocated` | `libjvm.dylib`           |
| removed |    -1 |   0.9% → 0.0% |     1 → 0 | `os::free`                                                    | `libjvm.dylib`           |
| removed |    -1 |   0.9% → 0.0% |     1 → 0 | `_free`                                                       | `libsystem_malloc.dylib` |

##### `MemAllocator::Allocation::notify_allocation_jvmti_sampler` (`libjvm.dylib`)

|  Change | Delta |             % |   Samples | Callee                                                                          | Location        |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------------------------------- | --------------- |
|  +12.1% |   +14 | 94.3% → 94.9% | 116 → 130 | `JvmtiSampledObjectAllocEventCollector::~JvmtiSampledObjectAllocEventCollector` | `libjvm.dylib`  |
|     new |    +2 |   0.0% → 1.5% |     0 → 2 | `tlv_get_addr`                                                                  | `libdyld.dylib` |
| removed |    -1 |   0.8% → 0.0% |     1 → 0 | `JvmtiSampledObjectAllocEventCollector::is_sampled_object_alloc_event`          | `libjvm.dylib`  |
|  -50.0% |    -1 |   1.6% → 0.7% |     2 → 1 | `JvmtiSampledObjectAllocEventCollector::start`                                  | `libjvm.dylib`  |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change | Delta |             % |   Samples | Callee                            | Location    |
| -----: | ----: | ------------: | --------: | --------------------------------- | ----------- |
|  +8.4% |   +13 | 53.1% → 53.9% | 154 → 167 | `_new_array_Java`                 | `<unknown>` |
|  -0.8% |    -1 | 45.5% → 42.3% | 132 → 131 | `arrayof_jint_disjoint_arraycopy` | `<unknown>` |

##### `addAll(Collection)` (`java.util.ArrayList`)

|  Change | Delta |             % | Samples | Callee                                            | Location              |
| ------: | ----: | ------------: | ------: | ------------------------------------------------- | --------------------- |
|  +31.1% |   +19 | 29.6% → 35.4% | 61 → 80 | `grow(int)`                                       | `java.util.ArrayList` |
|   +6.3% |    +3 | 23.3% → 22.6% | 48 → 51 | `arrayof_oop_disjoint_arraycopy`                  | `<unknown>`           |
| removed |    -1 |   0.5% → 0.0% |   1 → 0 | `G1BarrierSetRuntime::write_ref_array_post_entry` | `libjvm.dylib`        |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|  Change | Delta |             % |   Samples | Callee                            | Location                                                               |
| ------: | ----: | ------------: | --------: | --------------------------------- | ---------------------------------------------------------------------- |
|  +30.5% |   +98 | 77.5% → 98.1% | 321 → 419 | `apply(Object, Object)`           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011a7248` |
| removed |   -47 |  11.4% → 0.0% |    47 → 0 | `arrayof_jint_disjoint_arraycopy` | `<unknown>`                                                            |
| removed |   -38 |   9.2% → 0.0% |    38 → 0 | `zero_blocks`                     | `<unknown>`                                                            |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Callee                                       | Location            |
| ------: | ----: | ------------: | ------: | -------------------------------------------- | ------------------- |
|     new |    +4 |  0.0% → 23.5% |   0 → 4 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap` |
| +100.0% |    +1 | 25.0% → 11.8% |   1 → 2 | `resize()`                                   | `java.util.HashMap` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

| Change | Delta |             % |   Samples | Callee                   | Location                                                               |
| -----: | ----: | ------------: | --------: | ------------------------ | ---------------------------------------------------------------------- |
|  +3.1% |   +13 | 98.6% → 98.8% | 415 → 428 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011a3b90` |

##### `putMapEntries(Map, boolean)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Callee                                          | Location                          |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | --------------------------------- |
| +325.0% |   +13 | 44.4% → 81.0% |  4 → 17 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap`               |
| removed |    -3 |  33.3% → 0.0% |   3 → 0 | `entrySet()`                                    | `java.util.HashMap`               |
| +100.0% |    +1 |  11.1% → 9.5% |   1 → 2 | `next()`                                        | `java.util.HashMap$EntryIterator` |
|     new |    +1 |   0.0% → 4.8% |   0 → 1 | `ceil(double)`                                  | `java.lang.Math`                  |

##### `<init>(Map)` (`java.util.HashMap`)

|  Change | Delta |      % | Samples | Callee                        | Location            |
| ------: | ----: | -----: | ------: | ----------------------------- | ------------------- |
| +133.3% |   +12 | 100.0% |  9 → 21 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `unpark(Object)` (`jdk.internal.misc.Unsafe`)

|  Change | Delta |             % | Samples | Callee                | Location                  |
| ------: | ----: | ------------: | ------: | --------------------- | ------------------------- |
|  +23.1% |   +12 | 94.5% → 98.5% | 52 → 64 | `Unsafe_Unpark`       | `libjvm.dylib`            |
| removed |    -1 |   1.8% → 0.0% |   1 → 0 | `pthread_cond_signal` | `libsystem_pthread.dylib` |

##### `unpark(Thread)` (`java.util.concurrent.locks.LockSupport`)

| Change | Delta |              % | Samples | Callee           | Location                   |
| -----: | ----: | -------------: | ------: | ---------------- | -------------------------- |
| +18.2% |   +10 | 98.2% → 100.0% | 55 → 65 | `unpark(Object)` | `jdk.internal.misc.Unsafe` |

##### `tryCompensate(long, boolean)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % | Samples | Callee           | Location                                 |
| ------: | ----: | ------------: | ------: | ---------------- | ---------------------------------------- |
| +128.6% |    +9 | 87.5% → 94.1% |  7 → 16 | `unpark(Thread)` | `java.util.concurrent.locks.LockSupport` |
|     new |    +1 |   0.0% → 5.9% |   0 → 1 | `createWorker()` | `java.util.concurrent.ForkJoinPool`      |

##### `Compile::Compile` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                   | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | -------------- |
|  +38.5% |    +5 | 24.5% → 27.7% | 13 → 18 | `Compile::Optimize`                      | `libjvm.dylib` |
|  +57.1% |    +4 | 13.2% → 16.9% |  7 → 11 | `ParseGenerator::generate`               | `libjvm.dylib` |
|   +9.4% |    +3 | 60.4% → 53.8% | 32 → 35 | `Compile::Code_Gen`                      | `libjvm.dylib` |
| removed |    -1 |   1.9% → 0.0% |   1 → 0 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 1.5% |   0 → 1 | `CallGenerator::for_inline`              | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee             | Location       |
| -----: | ----: | -----: | ------: | ------------------ | -------------- |
| +22.6% |   +12 | 100.0% | 53 → 65 | `Compile::Compile` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                                     | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------------ | -------------- |
|  +8.6% |    +6 | 88.6% → 85.4% | 70 → 76 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
| +44.4% |    +4 | 11.4% → 14.6% |  9 → 13 | `CompileQueue::get`                        | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                       | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------- | -------------- |
|  +22.6% |   +12 | 75.7% → 85.5% | 53 → 65 | `C2Compiler::compile_method` | `libjvm.dylib` |
|  -37.5% |    -6 | 22.9% → 13.2% | 16 → 10 | `Compiler::compile_method`   | `libjvm.dylib` |
| removed |    -1 |   1.4% → 0.0% |   1 → 0 | `ciEnv::~ciEnv`              | `libjvm.dylib` |
|     new |    +1 |   0.0% → 1.3% |   0 → 1 | `ciEnv::ciEnv`               | `libjvm.dylib` |

##### `Matcher::match` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                        | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------------- | -------------- |
| +400.0% |    +4 | 25.0% → 55.6% |   1 → 5 | `Matcher::xform`                              | `libjvm.dylib` |
|     new |    +2 |  0.0% → 22.2% |   0 → 2 | `ConNode::Opcode`                             | `libjvm.dylib` |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `Matcher::find_shared`                        | `libjvm.dylib` |
|  -50.0% |    -1 | 50.0% → 11.1% |   2 → 1 | `Matcher::specialize_generic_vector_operands` | `libjvm.dylib` |
|     new |    +1 |  0.0% → 11.1% |   0 → 1 | `Matcher::Fixup_Save_On_Entry`                | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                     | Location       |
| -----: | ----: | ------------: | ------: | -------------------------- | -------------- |
|    new |    +3 |  0.0% → 16.7% |   0 → 3 | `PhaseIterGVN::optimize`   | `libjvm.dylib` |
| +20.0% |    +1 | 38.5% → 33.3% |   5 → 6 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |
| +20.0% |    +1 | 38.5% → 33.3% |   5 → 6 | `Compile::optimize_loops`  | `libjvm.dylib` |

##### `CompileQueue::get` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee          | Location       |
| -----: | ----: | -----: | ------: | --------------- | -------------- |
| +44.4% |    +4 | 100.0% |  9 → 13 | `Monitor::wait` | `libjvm.dylib` |

##### `Matcher::xform` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                | Location       |
| ------: | ----: | -------------: | ------: | --------------------- | -------------- |
| +300.0% |    +3 | 100.0% → 80.0% |   1 → 4 | `Matcher::match_tree` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                            | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------- | -------------- |
| +125.0% |    +5 | 12.5% → 25.7% |   4 → 9 | `Matcher::match`                  | `libjvm.dylib` |
|  -66.7% |    -4 |  18.8% → 5.7% |   6 → 2 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
|   +5.3% |    +1 | 59.4% → 57.1% | 19 → 20 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 2.9% |   0 → 1 | `PhaseCFG::PhaseCFG`              | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                            | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------- | -------------- |
| +100.0% |    +2 | 22.2% → 33.3% |   2 → 4 | `PhaseIdealLoop::build_loop_tree` | `libjvm.dylib` |
| +200.0% |    +2 | 11.1% → 25.0% |   1 → 3 | `PhaseIdealLoop::build_loop_late` | `libjvm.dylib` |
|     new |    +2 |  0.0% → 16.7% |   0 → 2 | `MultiNode::is_CFG`               | `libjvm.dylib` |
| removed |    -1 |  11.1% → 0.0% |   1 → 0 | `IdealLoopTree::loop_predication` | `libjvm.dylib` |
| removed |    -1 |  11.1% → 0.0% |   1 → 0 | `CProjNode::is_CFG`               | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                               | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------ | -------------- |
| +33.3% |    +3 | 100.0% |  9 → 12 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                                         | Location       |
| -----: | ----: | -----------: | ------: | ---------------------------------------------- | -------------- |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `PhaseChaitin::compute_initial_block_pressure` | `libjvm.dylib` |

##### `Matcher::match_tree` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                | Location       |
| -----: | ----: | -----------: | ------: | --------------------- | -------------- |
|    new |    +3 | 0.0% → 75.0% |   0 → 3 | `Matcher::Label_Root` | `libjvm.dylib` |

##### `Matcher::Label_Root` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                   | Location                   |
| -----: | ----: | -----------: | ------: | ------------------------ | -------------------------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `Matcher::Label_Root`    | `libjvm.dylib`             |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `_platform_memset`       | `libsystem_platform.dylib` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `Arena::grow`            | `libjvm.dylib`             |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `State::_sub_Op_DecodeN` | `libjvm.dylib`             |

##### `ciBytecodeStream::get_method` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                                  | Location       |
| -----: | ----: | -----------: | ------: | --------------------------------------- | -------------- |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `ciBytecodeStream::has_local_signature` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `ciEnv::get_method_by_index_impl`       | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                           | Location       |
| ------: | ----: | -------------: | ------: | -------------------------------- | -------------- |
|  +33.3% |    +3 | 90.0% → 100.0% |  9 → 12 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
| removed |    -1 |   10.0% → 0.0% |   1 → 0 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_tree` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee              | Location       |
| -----: | ----: | -----------: | ------: | ------------------- | -------------- |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `CProjNode::is_CFG` | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                  | Location       |
| ------: | ----: | ------------: | ------: | ----------------------- | -------------- |
|     new |    +2 |  0.0% → 66.7% |   0 → 2 | `IfNode::Ideal`         | `libjvm.dylib` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `RegionNode::Opcode`    | `libjvm.dylib` |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `Opaque1Node::Identity` | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Callee                        | Location       |
| ------: | ----: | -----: | ------: | ----------------------------- | -------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |

##### `TypeInstPtr::add_offset` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee              | Location        |
| ------: | ----: | -------------: | ------: | ------------------- | --------------- |
| +100.0% |    +1 | 100.0% → 66.7% |   1 → 2 | `TypeInstPtr::make` | `libjvm.dylib`  |
|     new |    +1 |   0.0% → 33.3% |   0 → 1 | `tlv_get_addr`      | `libdyld.dylib` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change | Delta |            % |       Samples | Callee            | Location                                      |
| ------: | ----: | -----------: | ------------: | ----------------- | --------------------------------------------- |
|   -7.1% |  -273 |       100.0% | 3,869 → 3,596 | `doExec()`        | `java.util.concurrent.ForkJoinTask`           |
| removed |    -1 | <0.1% → 0.0% |         1 → 0 | `releaseAccess()` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change | Delta |             % |       Samples | Callee                           | Location                                                   |
| -----: | ----: | ------------: | ------------: | -------------------------------- | ---------------------------------------------------------- |
|  -6.2% |  -249 | 95.9% → 96.0% | 4,045 → 3,796 | `join()`                         | `java.util.concurrent.ForkJoinTask`                        |
| -16.3% |  -247 | 36.0% → 32.1% | 1,517 → 1,270 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| -12.2% |   -82 | 16.0% → 15.0% |     674 → 592 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -3.5% |   -62 | 42.3% → 43.6% | 1,786 → 1,724 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +5.3% |   +23 | 10.3% → 11.5% |     433 → 456 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change | Delta |      % |       Samples | Callee      | Location                                               |
| -----: | ----: | -----: | ------------: | ----------- | ------------------------------------------------------ |
|  -6.3% |  -265 | 100.0% | 4,219 → 3,954 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |             % |       Samples | Callee         | Location                                            |
| ------: | ----: | ------------: | ------------: | -------------- | --------------------------------------------------- |
|   -6.3% |  -264 | 99.5% → 99.3% | 4,219 → 3,955 | `exec()`       | `java.util.concurrent.RecursiveTask`                |
|   -3.0% |   -14 | 11.1% → 11.4% |     470 → 456 | `exec()`       | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|   -6.5% |    -3 |          1.1% |       46 → 43 | `setDone()`    | `java.util.concurrent.ForkJoinTask`                 |
| removed |    -1 |  <0.1% → 0.0% |         1 → 0 | `ic_miss_stub` | `<unknown>`                                         |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |      % |       Samples | Callee     | Location                            |
| -----: | ----: | -----: | ------------: | ---------- | ----------------------------------- |
|  -6.1% |  -258 | 100.0% | 4,242 → 3,984 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % |       Samples | Callee                                               | Location                                      |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------- | --------------------------------------------- |
|   -6.1% |  -258 | 99.9% → 99.8% | 4,242 → 3,984 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| +400.0% |    +4 |  <0.1% → 0.1% |         1 → 5 | `signalWork()`                                       | `java.util.concurrent.ForkJoinPool`           |
| removed |    -1 |  <0.1% → 0.0% |         1 → 0 | `casSlotToNull(ForkJoinTask[], int, ForkJoinTask)`   | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % |       Samples | Callee                                                    | Location                                      |
| -----: | ----: | ------------: | ------------: | --------------------------------------------------------- | --------------------------------------------- |
|  -7.1% |  -273 | 95.6% → 94.7% | 3,869 → 3,596 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| -14.2% |  -153 | 26.7% → 24.4% |   1,081 → 928 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
|  +7.1% |   +26 |  9.1% → 10.4% |     368 → 394 | `park()`                                                  | `java.util.concurrent.locks.LockSupport`      |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |      % |       Samples | Callee                 | Location                            |
| -----: | ----: | -----: | ------------: | ---------------------- | ----------------------------------- |
|  -6.2% |  -249 | 100.0% | 4,045 → 3,796 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |             % |   Samples | Callee                                           | Location                                                  |
| ------: | ----: | ------------: | --------: | ------------------------------------------------ | --------------------------------------------------------- |
|  -21.0% |  -207 | 65.0% → 61.3% | 986 → 779 | `accumulate(Double[], double[])`                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  -33.3% |   -30 |   5.9% → 4.7% |   90 → 60 | `get(int)`                                       | `java.util.ArrayList`                                     |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `InterpreterRuntime::frequency_counter_overflow` | `libjvm.dylib`                                            |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `counter_overflow Runtime1 stub`                 | `<unknown>`                                               |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `_new_array_Java`                                | `<unknown>`                                               |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |       Samples | Callee              | Location                                                  |
| -----: | ----: | -----: | ------------: | ------------------- | --------------------------------------------------------- |
| -16.3% |  -247 | 100.0% | 1,517 → 1,270 | `vectorSum()`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| -16.3% |  -247 | 100.0% | 1,517 → 1,270 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |           % | Samples | Callee          | Location           |
| ------: | ----: | ----------: | ------: | --------------- | ------------------ |
| +145.5% |   +16 | 1.3% → 4.2% | 11 → 27 | `doubleValue()` | `java.lang.Double` |
|  -50.0% |    -1 |        0.2% |   2 → 1 | `SafepointBlob` | `<unknown>`        |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |            % | Samples | Callee                           | Location           |
| ------: | ----: | -----------: | ------: | -------------------------------- | ------------------ |
|   +6.2% |    +5 | 8.2% → 11.0% | 81 → 86 | `doubleValue()`                  | `java.lang.Double` |
| removed |    -1 |  0.1% → 0.0% |   1 → 0 | `counter_overflow Runtime1 stub` | `<unknown>`        |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % |     Samples | Callee                                             | Location                                      |
| ------: | ----: | ------------: | ----------: | -------------------------------------------------- | --------------------------------------------- |
|  -14.6% |  -154 | 97.7% → 97.2% | 1,056 → 902 | `doExec()`                                         | `java.util.concurrent.ForkJoinTask`           |
| +112.5% |    +9 |   0.7% → 1.8% |      8 → 17 | `tryCompensate(long, boolean)`                     | `java.util.concurrent.ForkJoinPool`           |
| removed |    -1 |   0.1% → 0.0% |       1 → 0 | `casSlotToNull(ForkJoinTask[], int, ForkJoinTask)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |             % |       Samples | Callee                                   | Location                            |
| -----: | ----: | ------------: | ------------: | ---------------------------------------- | ----------------------------------- |
|  -6.0% |  -253 | 94.9% → 91.9% | 4,245 → 3,992 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |
| +56.3% |  +125 |   5.0% → 8.0% |     222 → 347 | `awaitWork(ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

| Change | Delta |      % |       Samples | Callee                              | Location                            |
| -----: | ----: | -----: | ------------: | ----------------------------------- | ----------------------------------- |
|  -2.9% |  -128 | 100.0% | 4,473 → 4,345 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % |   Samples | Callee                         | Location                                                   |
| ------: | ----: | ------------: | --------: | ------------------------------ | ---------------------------------------------------------- |
|  -26.3% |  -231 | 65.8% → 52.6% | 880 → 649 | `distance(Double[], Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +39.0% |   +16 |   3.1% → 4.6% |   41 → 57 | `get(int)`                     | `java.util.ArrayList`                                      |
| +116.7% |    +7 |   0.4% → 1.1% |    6 → 13 | `_new_array_Java`              | `<unknown>`                                                |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `size()`                       | `java.util.ArrayList`                                      |
|  +50.0% |    +1 |   0.1% → 0.2% |     2 → 3 | `zero_blocks`                  | `<unknown>`                                                |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change | Delta |             % |   Samples | Callee                    | Location                                               |
| ------: | ----: | ------------: | --------: | ------------------------- | ------------------------------------------------------ |
|  -12.0% |   -80 | 99.3% → 99.5% | 669 → 589 | `average(List)`           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  -33.3% |    -1 |   0.4% → 0.3% |     3 → 2 | `boxed(double[])`         | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `I2C/C2I adapters(0xbbb)` | `<unknown>`                                            |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % |   Samples | Callee                     | Location                                               |
| -----: | ----: | -----: | --------: | -------------------------- | ------------------------------------------------------ |
| -12.2% |   -82 | 100.0% | 674 → 592 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| -12.2% |   -82 | 100.0% | 674 → 592 | `computeDirectly()`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |              % |   Samples | Callee     | Location                            |
| -----: | ----: | -------------: | --------: | ---------- | ----------------------------------- |
| -12.1% |   -81 | 100.0% → 99.8% | 669 → 588 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |      % |   Samples | Callee     | Location                            |
| -----: | ----: | -----: | --------: | ---------- | ----------------------------------- |
|  -8.0% |   -78 | 100.0% | 977 → 899 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % |       Samples | Callee                   | Location                                                   |
| -----: | ----: | ------------: | ------------: | ------------------------ | ---------------------------------------------------------- |
|  -7.6% |  -102 | 74.8% → 71.6% | 1,337 → 1,235 | `findNearestCentroid()`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -3.5% |   -63 |        100.0% | 1,787 → 1,724 | `computeDirectly()`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +8.7% |   +39 | 25.2% → 28.4% |     450 → 489 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change | Delta |            % | Samples | Callee                                                                                       | Location                                  |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
| removed |   -12 | 75.0% → 0.0% |  12 → 0 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
| removed |    -4 | 25.0% → 0.0% |   4 → 0 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |              % |   Samples | Callee                     | Location                            |
| -----: | ----: | -------------: | --------: | -------------------------- | ----------------------------------- |
|  -3.8% |   -18 | 100.0% → 99.1% | 470 → 452 | `invoke()`                 | `java.util.concurrent.ForkJoinTask` |
|    new |    +1 |    0.0% → 0.2% |     0 → 1 | `loadClass(String)`        | `java.lang.ClassLoader`             |
|    new |    +1 |    0.0% → 0.2% |     0 → 1 | `<init>(Collection)`       | `java.util.ArrayList`               |
|    new |    +1 |    0.0% → 0.2% |     0 → 1 | `I2C/C2I adapters(0xbbbb)` | `<unknown>`                         |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011a2bd0`)

| Change | Delta |      % |   Samples | Callee                         | Location                                    |
| -----: | ----: | -----: | --------: | ------------------------------ | ------------------------------------------- |
|  -3.0% |   -14 | 100.0% | 470 → 456 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change | Delta |            % | Samples | Callee              | Location                           |
| ------: | ----: | -----------: | ------: | ------------------- | ---------------------------------- |
| removed |    -3 | 60.0% → 0.0% |   3 → 0 | `<clinit>()`        | `scala.Predef$`                    |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `loadClass(String)` | `java.lang.ClassLoader`            |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `map(Function1)`    | `scala.collection.immutable.Range` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000004011a3940`)

| Change | Delta |              % | Samples | Callee                               | Location                                                   |
| -----: | ----: | -------------: | ------: | ------------------------------------ | ---------------------------------------------------------- |
| -75.0% |    -3 | 80.0% → 100.0% |   4 → 1 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`)

| Change | Delta |              % | Samples | Callee                  | Location                                                             |
| -----: | ----: | -------------: | ------: | ----------------------- | -------------------------------------------------------------------- |
| -80.0% |    -4 | 100.0% → 50.0% |   5 → 1 | `run(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans`                            |
|    new |    +1 |   0.0% → 50.0% |   0 → 1 | `validate()`            | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000004011a8bc0` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |              % | Samples | Callee               | Location    |
| -----: | ----: | -------------: | ------: | -------------------- | ----------- |
| -50.0% |    -1 | 50.0% → 100.0% |   2 → 1 | `_new_instance_Java` | `<unknown>` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |            % | Samples | Callee                               | Location                                                  |
| ------: | ----: | -----------: | ------: | ------------------------------------ | --------------------------------------------------------- |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `_new_instance_Java`                 | `<unknown>`                                               |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `<init>(JavaKMeans, List, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `<init>(JavaKMeans, List, List, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |            % | Samples | Callee                         | Location                                               |
| ------: | ----: | -----------: | ------: | ------------------------------ | ------------------------------------------------------ |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `<init>(JavaKMeans, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change | Delta |             % | Samples | Callee                 | Location                             |
| ------: | ----: | ------------: | ------: | ---------------------- | ------------------------------------ |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `stream(double[])`     | `java.util.Arrays`                   |
|     new |    +2 | 0.0% → 100.0% |   0 → 2 | `toArray(IntFunction)` | `java.util.stream.ReferencePipeline` |

##### `WorkerThread::run` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                            | Location                 |
| ------: | ----: | ------------: | ------: | --------------------------------- | ------------------------ |
|  -54.8% |   -17 | 20.9% → 11.9% | 31 → 14 | `G1EvacuateRegionsBaseTask::work` | `libjvm.dylib`           |
| removed |   -17 |  11.5% → 0.0% |  17 → 0 | `HeapRegionManager::par_iterate`  | `libjvm.dylib`           |
|  -14.7% |   -10 | 45.9% → 49.2% | 68 → 58 | `G1FullGCMarkTask::work`          | `libjvm.dylib`           |
| +128.6% |    +9 |  4.7% → 13.6% |  7 → 16 | `semaphore_wait_trap`             | `libsystem_kernel.dylib` |
|  -43.8% |    -7 |  10.8% → 7.6% |  16 → 9 | `G1FullGCAdjustTask::work`        | `libjvm.dylib`           |

##### `Thread::call_run` (`libjvm.dylib`)

|  Change | Delta |             % |   Samples | Callee                          | Location       |
| ------: | ----: | ------------: | --------: | ------------------------------- | -------------- |
|  -20.3% |   -30 | 61.4% → 53.6% | 148 → 118 | `WorkerThread::run`             | `libjvm.dylib` |
|   +9.9% |    +8 | 33.6% → 40.5% |   81 → 89 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
|  -83.3% |    -5 |   2.5% → 0.5% |     6 → 1 | `ConcurrentGCThread::run`       | `libjvm.dylib` |
| +166.7% |    +5 |   1.2% → 3.6% |     3 → 8 | `VMThread::run`                 | `libjvm.dylib` |
|  +33.3% |    +1 |   1.2% → 1.8% |     3 → 4 | `WatcherThread::run`            | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Callee             | Location       |
| -----: | ----: | -----: | --------: | ------------------ | -------------- |
|  -8.7% |   -21 | 100.0% | 241 → 220 | `Thread::call_run` | `libjvm.dylib` |

##### `HeapRegionManager::par_iterate` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                                              | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------- | -------------- |
| removed |   -16 |  43.2% → 0.0% |  16 → 0 | `G1ClearBitMapTask::G1ClearBitmapHRClosure::do_heap_region`         | `libjvm.dylib` |
|  -50.0% |    -8 | 43.2% → 50.0% |  16 → 8 | `G1AdjustRegionClosure::do_heap_region`                             | `libjvm.dylib` |
|     new |    +6 |  0.0% → 37.5% |   0 → 6 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::do_heap_region` | `libjvm.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

| Change | Delta |              % |   Samples | Callee                | Location       |
| -----: | ----: | -------------: | --------: | --------------------- | -------------- |
|  -8.7% |   -21 | 100.0% → 99.5% | 241 → 220 | `thread_native_entry` | `libjvm.dylib` |
|    new |    +1 |    0.0% → 0.5% |     0 → 1 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

| Change | Delta |      % |   Samples | Callee           | Location                  |
| -----: | ----: | -----: | --------: | ---------------- | ------------------------- |
|  -8.3% |   -20 | 100.0% | 241 → 221 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                                                                                                                       | Location       |
| ------: | ----: | -------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | -------------- |
|  -80.0% |    -4 | 25.0% → 100.0% |   5 → 1 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` | `libjvm.dylib` |
| removed |    -1 |    5.0% → 0.0% |   1 → 0 | `G1ParScanThreadState::start_partial_objarray`                                                                               | `libjvm.dylib` |

##### `G1EvacuateRegionsBaseTask::work` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                                         | Location       |
| ------: | ----: | -------------: | ------: | ---------------------------------------------- | -------------- |
| removed |    -9 |   29.0% → 0.0% |   9 → 0 | `G1EvacuateRegionsTask::scan_roots`            | `libjvm.dylib` |
|  -36.4% |    -8 | 71.0% → 100.0% | 22 → 14 | `G1EvacuateRegionsTask::evacuate_live_objects` | `libjvm.dylib` |

##### `G1ParScanThreadState::trim_queue_to_threshold` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                                                                                                                       | Location       |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | -------------- |
| removed |   -18 | 78.3% → 0.0% |  18 → 0 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                            | `libjvm.dylib` |
| +200.0% |    +4 | 8.7% → 85.7% |   2 → 6 | `G1ParScanThreadState::do_partial_array`                                                                                     | `libjvm.dylib` |
| removed |    -1 |  4.3% → 0.0% |   1 → 0 | `fwd_copy_drain`                                                                                                             | `libjvm.dylib` |
| removed |    -1 |  4.3% → 0.0% |   1 → 0 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` | `libjvm.dylib` |
|     new |    +1 | 0.0% → 14.3% |   0 → 1 | `void G1ScanEvacuatedObjClosure::do_oop_work<narrowOop>`                                                                     | `libjvm.dylib` |

##### `MarkBitMap::do_clear` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee             | Location                   |
| ------: | ----: | ------------: | ------: | ------------------ | -------------------------- |
| removed |   -16 | 100.0% → 0.0% |  16 → 0 | `_platform_memset` | `libsystem_platform.dylib` |

##### `G1ClearBitMapTask::G1ClearBitmapHRClosure::do_heap_region` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                 | Location       |
| ------: | ----: | ------------: | ------: | ---------------------- | -------------- |
| removed |   -16 | 100.0% → 0.0% |  16 → 0 | `MarkBitMap::do_clear` | `libjvm.dylib` |

##### `G1FullGCMarker::follow_marking_stacks` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                                                                               | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------- | -------------- |
|  -57.1% |    -8 | 32.6% → 19.4% |  14 → 6 | `G1FullGCMarker::publish_and_drain_oop_tasks`                                                        | `libjvm.dylib` |
|  -20.8% |    -5 | 55.8% → 61.3% | 24 → 19 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>`                                      | `libjvm.dylib` |
| +150.0% |    +3 |  4.7% → 16.1% |   2 → 5 | `G1FullGCMarker::follow_object`                                                                      | `libjvm.dylib` |
| removed |    -1 |   2.3% → 0.0% |   1 → 0 | `void OopOopIterateDispatch<G1MarkAndPushClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `libjvm.dylib` |
| removed |    -1 |   2.3% → 0.0% |   1 → 0 | `G1FullGCMarker::mark_object`                                                                        | `libjvm.dylib` |

##### `G1ParScanThreadState::steal_and_trim_queue` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                                                                                    | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------------- | -------------- |
|  -71.4% |   -10 | 87.5% → 80.0% |  14 → 4 | `G1ParScanThreadState::trim_queue_to_threshold`                                                           | `libjvm.dylib` |
| removed |    -2 |  12.5% → 0.0% |   2 → 0 | `GenericTaskQueueSet<OverflowTaskQueue<ScannerTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>::steal_best_of_2` | `libjvm.dylib` |
|     new |    +1 |  0.0% → 20.0% |   0 → 1 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                         | `libjvm.dylib` |

##### `G1FullGCMarker::complete_marking` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                                          | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------- | -------------- |
|  -27.9% |   -12 | 63.2% → 53.4% | 43 → 31 | `G1FullGCMarker::follow_marking_stacks`                         | `libjvm.dylib` |
|  +18.8% |    +3 | 23.5% → 32.8% | 16 → 19 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` | `libjvm.dylib` |
| removed |    -2 |   2.9% → 0.0% |   2 → 0 | `G1FullGCMarker::mark_object`                                   | `libjvm.dylib` |
|  +16.7% |    +1 |  8.8% → 12.1% |   6 → 7 | `TaskTerminator::offer_termination`                             | `libjvm.dylib` |

##### `G1FullGCMarkTask::work` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                             | Location       |
| -----: | ----: | -----: | ------: | ---------------------------------- | -------------- |
| -14.7% |   -10 | 100.0% | 68 → 58 | `G1FullGCMarker::complete_marking` | `libjvm.dylib` |

##### `G1EvacuateRegionsTask::scan_roots` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                            | Location       |
| ------: | ----: | -----------: | ------: | --------------------------------- | -------------- |
| removed |    -8 | 88.9% → 0.0% |   8 → 0 | `G1RemSet::scan_heap_roots`       | `libjvm.dylib` |
| removed |    -1 | 11.1% → 0.0% |   1 → 0 | `G1RootProcessor::evacuate_roots` | `libjvm.dylib` |

##### `G1ParEvacuateFollowersClosure::do_void` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                             | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- | -------------- |
|  -68.8% |   -11 | 72.7% → 35.7% |  16 → 5 | `G1ParScanThreadState::steal_and_trim_queue`       | `libjvm.dylib` |
| +100.0% |    +3 | 13.6% → 42.9% |   3 → 6 | `G1ParEvacuateFollowersClosure::offer_termination` | `libjvm.dylib` |

##### `G1EvacuateRegionsTask::evacuate_live_objects` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                                   | Location       |
| -----: | ----: | -----: | ------: | ---------------------------------------- | -------------- |
| -36.4% |    -8 | 100.0% | 22 → 14 | `G1ParEvacuateFollowersClosure::do_void` | `libjvm.dylib` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

| Change | Delta |      % |   Samples | Callee   | Location                                                               |
| -----: | ----: | -----: | --------: | -------- | ---------------------------------------------------------------------- |
|  -3.0% |   -14 | 100.0% | 470 → 456 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011a2bd0` |

##### `get(int)` (`java.util.ArrayList`)

| Change | Delta |             % |   Samples | Callee                 | Location              |
| -----: | ----: | ------------: | --------: | ---------------------- | --------------------- |
| -12.9% |   -20 | 86.1% → 81.3% | 155 → 135 | `elementData(int)`     | `java.util.ArrayList` |
| +38.1% |    +8 | 11.7% → 17.5% |   21 → 29 | `checkIndex(int, int)` | `java.util.Objects`   |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|  Change | Delta |            % | Samples | Callee                                       | Location                                                                              |
| ------: | ----: | -----------: | ------: | -------------------------------------------- | ------------------------------------------------------------------------------------- |
|  -26.3% |    -5 | 12.9% → 9.9% | 19 → 14 | `hash(Object)`                               | `java.util.HashMap`                                                                   |
|  -80.0% |    -4 |  3.4% → 0.7% |   5 → 1 | `apply(Object)`                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000004011a3940` |
|  -50.0% |    -1 |  1.4% → 0.7% |   2 → 1 | `resize()`                                   | `java.util.HashMap`                                                                   |
| removed |    -1 |  0.7% → 0.0% |   1 → 0 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap`                                                                   |

##### `hash(Object)` (`java.util.HashMap`)

| Change | Delta |            % | Samples | Callee       | Location           |
| -----: | ----: | -----------: | ------: | ------------ | ------------------ |
| -66.7% |    -2 | 14.3% → 6.3% |   3 → 1 | `hashCode()` | `java.lang.Object` |

##### `toArray()` (`java.util.ArrayList`)

| Change | Delta |      % |   Samples | Callee                  | Location           |
| -----: | ----: | -----: | --------: | ----------------------- | ------------------ |
|  -2.4% |    -5 | 100.0% | 207 → 202 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `stream(double[], int, int)` (`java.util.Arrays`)

|  Change | Delta |            % | Samples | Callee                                        | Location                         |
| ------: | ----: | -----------: | ------: | --------------------------------------------- | -------------------------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `spliterator(double[], int, int)`             | `java.util.Arrays`               |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `doubleStream(Spliterator$OfDouble, boolean)` | `java.util.stream.StreamSupport` |

##### `stream(double[])` (`java.util.Arrays`)

|  Change | Delta |             % | Samples | Callee                       | Location           |
| ------: | ----: | ------------: | ------: | ---------------------------- | ------------------ |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `stream(double[], int, int)` | `java.util.Arrays` |

##### `signalWaiters()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % | Samples | Callee           | Location                                 |
| -----: | ----: | ------------: | ------: | ---------------- | ---------------------------------------- |
|  -6.7% |    -3 | 97.8% → 97.7% | 45 → 42 | `unpark(Thread)` | `java.util.concurrent.locks.LockSupport` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                   | Location       |
| -----: | ----: | ------------: | ------: | ------------------------ | -------------- |
| -50.0% |    -3 | 42.9% → 37.5% |   6 → 3 | `Compilation::emit_lir`  | `libjvm.dylib` |
| -42.9% |    -3 |         50.0% |   7 → 4 | `Compilation::build_hir` | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                             | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------- | -------------- |
|  -42.9% |    -6 | 87.5% → 80.0% |  14 → 8 | `Compilation::compile_java_method` | `libjvm.dylib` |
| +100.0% |    +1 |  6.3% → 20.0% |   1 → 2 | `ciEnv::register_method`           | `libjvm.dylib` |
| removed |    -1 |   6.3% → 0.0% |   1 → 0 | `resource_allocate_bytes`          | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                        | Location       |
| -----: | ----: | -----: | ------: | ----------------------------- | -------------- |
| -37.5% |    -6 | 100.0% | 16 → 10 | `Compilation::compile_method` | `libjvm.dylib` |

##### `CompileBroker::compile_method` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                         | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------------------- | -------------- |
| removed |    -5 | 100.0% → 0.0% |   5 → 0 | `CompileBroker::compile_method`                | `libjvm.dylib` |
| removed |    -3 |  60.0% → 0.0% |   3 → 0 | `CompileBroker::compile_method_base`           | `libjvm.dylib` |
| removed |    -1 |  20.0% → 0.0% |   1 → 0 | `AdapterHandlerLibrary::create_native_wrapper` | `libjvm.dylib` |
| removed |    -1 |  20.0% → 0.0% |   1 → 0 | `InstanceKlass::lookup_osr_nmethod`            | `libjvm.dylib` |

##### `CompilationPolicy::event` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                                        | Location       |
| ------: | ----: | -----------: | ------: | --------------------------------------------- | -------------- |
| removed |    -4 | 66.7% → 0.0% |   4 → 0 | `CompileBroker::compile_method`               | `libjvm.dylib` |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `CompilationPolicy::method_back_branch_event` | `libjvm.dylib` |

##### `PhaseCFG::global_code_motion` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                              | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------------- | -------------- |
|  -50.0% |    -1 | 33.3% → 50.0% |   2 → 1 | `PhaseCFG::schedule_late`           | `libjvm.dylib` |
| removed |    -1 |  16.7% → 0.0% |   1 → 0 | `PhaseCFG::implicit_null_check`     | `libjvm.dylib` |
| removed |    -1 |  16.7% → 0.0% |   1 → 0 | `PhaseCFG::schedule_local`          | `libjvm.dylib` |
| removed |    -1 |  16.7% → 0.0% |   1 → 0 | `PhaseCFG::partial_latency_of_defs` | `libjvm.dylib` |

##### `PhaseCFG::do_global_code_motion` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                         | Location       |
| -----: | ----: | -----: | ------: | ------------------------------ | -------------- |
| -66.7% |    -4 | 100.0% |   6 → 2 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |

##### `CompileBroker::compile_method_base` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                               | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------ | -------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `Mutex::lock`                        | `libjvm.dylib` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `CompileBroker::create_compile_task` | `libjvm.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                       | Location       |
| ------: | ----: | -------------: | ------: | ---------------------------- | -------------- |
|  -40.0% |    -2 | 83.3% → 100.0% |   5 → 3 | `LinearScan::do_linear_scan` | `libjvm.dylib` |
| removed |    -1 |   16.7% → 0.0% |   1 → 0 | `BlockList::iterate_forward` | `libjvm.dylib` |

##### `Compilation::build_hir` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                       | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------------------- | -------------- |
|  -40.0% |    -2 | 71.4% → 75.0% |   5 → 3 | `IR::IR`                                     | `libjvm.dylib` |
| removed |    -1 |  14.3% → 0.0% |   1 → 0 | `IR::compute_code`                           | `libjvm.dylib` |
| removed |    -1 |  14.3% → 0.0% |   1 → 0 | `GlobalValueNumbering::GlobalValueNumbering` | `libjvm.dylib` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `RangeCheckElimination::eliminate`           | `libjvm.dylib` |

##### `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                   | Location       |
| ------: | ----: | -----------: | ------: | ------------------------ | -------------- |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `RegMask::is_bound`      | `libjvm.dylib` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `RegMask::clear_to_sets` | `libjvm.dylib` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `TypeNode::ideal_reg`    | `libjvm.dylib` |

##### `LinearScan::do_linear_scan` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------- | -------------- |
| removed |    -1 |  20.0% → 0.0% |   1 → 0 | `LinearScan::assign_reg_num`          | `libjvm.dylib` |
|  -33.3% |    -1 | 60.0% → 66.7% |   3 → 2 | `LinearScan::allocate_registers`      | `libjvm.dylib` |
| removed |    -1 |  20.0% → 0.0% |   1 → 0 | `LinearScan::compute_local_live_sets` | `libjvm.dylib` |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `LinearScan::resolve_data_flow`       | `libjvm.dylib` |

##### `GraphBuilder::iterate_bytecodes_for_block` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                       | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------- | -------------- |
|  -66.7% |    -2 | 75.0% → 50.0% |   3 → 1 | `GraphBuilder::invoke`       | `libjvm.dylib` |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `GraphBuilder::if_node`      | `libjvm.dylib` |
|     new |    +1 |  0.0% → 50.0% |   0 → 1 | `GraphBuilder::access_field` | `libjvm.dylib` |

##### `GraphBuilder::iterate_all_blocks` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                                      | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------------- | -------------- |
| -50.0% |    -2 | 100.0% |   4 → 2 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib` |

##### `GraphBuilder::try_inline` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                          | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------- | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `GraphBuilder::try_inline_full` | `libjvm.dylib` |

##### `GraphBuilder::invoke` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                         | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------ | -------------- |
| removed |    -2 |  66.7% → 0.0% |   2 → 0 | `GraphBuilder::try_inline`     | `libjvm.dylib` |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `ciMetadata::is_classless`     | `libjvm.dylib` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `ciBytecodeStream::get_method` | `libjvm.dylib` |

##### `PhaseOutput::Process_OopMap_Node` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                      | Location       |
| ------: | ----: | -----------: | ------: | --------------------------- | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `PhaseOutput::FillLocArray` | `libjvm.dylib` |

##### `PhaseOutput::fill_buffer` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                             | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `PhaseOutput::Process_OopMap_Node` | `libjvm.dylib` |

##### `PhaseCFG::partial_latency_of_defs` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee           | Location       |
| ------: | ----: | -----------: | ------: | ---------------- | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `Node::latency`  | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `Node::pipeline` | `libjvm.dylib` |

# Allocated heap profile diff

Allocated 36.9 GiB → 37.1 GiB (+200.872 MiB, +0.5%) over 75,234 samples → 75,635 samples (514 KiB per sample).

| Category         | Change |        Delta |             % |                Size |         Samples |
| ---------------- | -----: | -----------: | ------------: | ------------------: | --------------: |
| Standard library |  +0.3% | +115.872 MiB | 93.2% → 93.1% | 34.4 GiB → 34.5 GiB | 70,131 → 70,362 |
| Ours             |  +3.3% |  +84.999 MiB |   6.8% → 6.9% | 2.49 GiB → 2.57 GiB |   5,103 → 5,273 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |          Delta |             % |                Size |         Samples | Function                                     | Location                                                   |
| ------: | -------------: | ------------: | ------------------: | --------------: | -------------------------------------------- | ---------------------------------------------------------- |
|   +0.2% |    +67.872 MiB | 91.1% → 90.8% | 33.6 GiB → 33.7 GiB | 68,497 → 68,632 | `copyOf(Object[], int)`                      | `java.util.Arrays`                                         |
|  +41.3% |    +29.499 MiB |   0.2% → 0.3% |  71.5 MiB → 101 MiB |       143 → 202 | `vectorSum()`                                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +37.3% |    +24.999 MiB |          0.2% |     67 MiB → 92 MiB |       134 → 184 | `add(double[], double[])`                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +19.6% |    +23.999 MiB |   0.3% → 0.4% |   122 MiB → 146 MiB |       245 → 293 | `createSubtask(int, int)`                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +13.1% |    +19.999 MiB |   0.4% → 0.5% |   152 MiB → 172 MiB |       305 → 345 | `createSubtask(int, int)`                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +22.8% |    +12.999 MiB |          0.2% |     57 MiB → 70 MiB |       114 → 140 | `valueOf(double)`                            | `java.lang.Double`                                         |
|   +9.4% |     +9.499 MiB |          0.3% |   101 MiB → 110 MiB |       202 → 221 | `resize()`                                   | `java.util.HashMap`                                        |
|  +32.4% |     +5.499 MiB |  <0.1% → 0.1% |   17 MiB → 22.5 MiB |         28 → 39 | `copyOf(Object[], int, Class)`               | `java.util.Arrays`                                         |
|  +45.5% |     +4.999 MiB |         <0.1% |     11 MiB → 16 MiB |         22 → 32 | `entrySet()`                                 | `java.util.HashMap`                                        |
|   +6.1% |     +4.499 MiB |          0.2% |   74 MiB → 78.5 MiB |       148 → 157 | `merge(Map, Map)`                            | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|   +1.5% |     +3.999 MiB |          0.7% |   262 MiB → 266 MiB |       524 → 532 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap`                                        |
| +266.7% |     +3.999 MiB |         <0.1% |   1.5 MiB → 5.5 MiB |          3 → 11 | `allocateInstance(Class)`                    | `jdk.internal.misc.Unsafe`                                 |
|  +28.6% |     +2.999 MiB |         <0.1% | 10.5 MiB → 13.5 MiB |         21 → 27 | `range(int, int)`                            | `java.util.stream.IntStream`                               |
|   +1.1% |     +2.499 MiB |          0.6% |   236 MiB → 239 MiB |       473 → 478 | `grow(int)`                                  | `java.util.ArrayList`                                      |
|   +2.4% |     +2.499 MiB |          0.3% |   105 MiB → 108 MiB |       211 → 216 | `lambda$collectClusters$0(Double[])`         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +400.0% |     +1.999 MiB |         <0.1% |   512 KiB → 2.5 MiB |           1 → 5 | `fillInStackTrace(int)`                      | `java.lang.Throwable`                                      |
| +400.0% |     +1.999 MiB |         <0.1% |   512 KiB → 2.5 MiB |           1 → 5 | `div(double[], int)`                         | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| +300.0% |     +1.499 MiB |         <0.1% |     512 KiB → 2 MiB |           1 → 4 | `mapToObj(DoubleFunction, int)`              | `java.util.stream.DoublePipeline`                          |
|     new |     +1.499 MiB |  0.0% → <0.1% |       0 B → 1.5 MiB |           0 → 3 | `allocateUninitializedArray0(Class, int)`    | `jdk.internal.misc.Unsafe`                                 |
|  +40.0% | +1,023.998 KiB |         <0.1% |   2.5 MiB → 3.5 MiB |           5 → 7 | `awaitDone(int, long)`                       | `java.util.concurrent.ForkJoinTask`                        |

##### Standard library

|  Change |          Delta |             % |                Size |         Samples | Function                                                            | Location                                     |
| ------: | -------------: | ------------: | ------------------: | --------------: | ------------------------------------------------------------------- | -------------------------------------------- |
|   +0.2% |    +67.872 MiB | 91.1% → 90.8% | 33.6 GiB → 33.7 GiB | 68,497 → 68,632 | `copyOf(Object[], int)`                                             | `java.util.Arrays`                           |
|  +22.8% |    +12.999 MiB |          0.2% |     57 MiB → 70 MiB |       114 → 140 | `valueOf(double)`                                                   | `java.lang.Double`                           |
|   +9.4% |     +9.499 MiB |          0.3% |   101 MiB → 110 MiB |       202 → 221 | `resize()`                                                          | `java.util.HashMap`                          |
|  +32.4% |     +5.499 MiB |  <0.1% → 0.1% |   17 MiB → 22.5 MiB |         28 → 39 | `copyOf(Object[], int, Class)`                                      | `java.util.Arrays`                           |
|  +45.5% |     +4.999 MiB |         <0.1% |     11 MiB → 16 MiB |         22 → 32 | `entrySet()`                                                        | `java.util.HashMap`                          |
|   +1.5% |     +3.999 MiB |          0.7% |   262 MiB → 266 MiB |       524 → 532 | `newNode(int, Object, Object, HashMap$Node)`                        | `java.util.HashMap`                          |
| +266.7% |     +3.999 MiB |         <0.1% |   1.5 MiB → 5.5 MiB |          3 → 11 | `allocateInstance(Class)`                                           | `jdk.internal.misc.Unsafe`                   |
|  +28.6% |     +2.999 MiB |         <0.1% | 10.5 MiB → 13.5 MiB |         21 → 27 | `range(int, int)`                                                   | `java.util.stream.IntStream`                 |
|   +1.1% |     +2.499 MiB |          0.6% |   236 MiB → 239 MiB |       473 → 478 | `grow(int)`                                                         | `java.util.ArrayList`                        |
| +400.0% |     +1.999 MiB |         <0.1% |   512 KiB → 2.5 MiB |           1 → 5 | `fillInStackTrace(int)`                                             | `java.lang.Throwable`                        |
| +300.0% |     +1.499 MiB |         <0.1% |     512 KiB → 2 MiB |           1 → 4 | `mapToObj(DoubleFunction, int)`                                     | `java.util.stream.DoublePipeline`            |
|     new |     +1.499 MiB |  0.0% → <0.1% |       0 B → 1.5 MiB |           0 → 3 | `allocateUninitializedArray0(Class, int)`                           | `jdk.internal.misc.Unsafe`                   |
|  +40.0% | +1,023.998 KiB |         <0.1% |   2.5 MiB → 3.5 MiB |           5 → 7 | `awaitDone(int, long)`                                              | `java.util.concurrent.ForkJoinTask`          |
|     new | +1,023.998 KiB |  0.0% → <0.1% |         0 B → 1 MiB |           0 → 2 | `visitMethod(int, String, String, String, String[])`                | `jdk.internal.org.objectweb.asm.ClassWriter` |
|     new | +1,023.998 KiB |  0.0% → <0.1% |         0 B → 1 MiB |           0 → 2 | `makeImpl(Class, Class[], boolean)`                                 | `java.lang.invoke.MethodType`                |
|   +9.5% | +1,023.998 KiB |         <0.1% | 10.5 MiB → 11.5 MiB |         21 → 23 | `allocateInstance(Object)`                                          | `java.lang.invoke.DirectMethodHandle`        |
|  +66.7% | +1,023.998 KiB |         <0.1% |   1.5 MiB → 2.5 MiB |           3 → 5 | `doubleStream(Spliterator$OfDouble, boolean)`                       | `java.util.stream.StreamSupport`             |
|     new | +1,023.998 KiB |  0.0% → <0.1% |         0 B → 1 MiB |           0 → 2 | `spliterator(double[], int, int, int)`                              | `java.util.Spliterators`                     |
|     new |   +511.999 KiB |  0.0% → <0.1% |       0 B → 512 KiB |           0 → 1 | `descriptorString()`                                                | `java.lang.Class`                            |
|     new |   +511.999 KiB |  0.0% → <0.1% |       0 B → 512 KiB |           0 → 1 | `makeIntrinsic(MethodType, LambdaForm, MethodHandleImpl$Intrinsic)` | `java.lang.invoke.MethodHandleImpl`          |

##### Ours

|  Change |          Delta |            % |                Size |   Samples | Function                             | Location                                                   |
| ------: | -------------: | -----------: | ------------------: | --------: | ------------------------------------ | ---------------------------------------------------------- |
|  +41.3% |    +29.499 MiB |  0.2% → 0.3% |  71.5 MiB → 101 MiB | 143 → 202 | `vectorSum()`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +37.3% |    +24.999 MiB |         0.2% |     67 MiB → 92 MiB | 134 → 184 | `add(double[], double[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +19.6% |    +23.999 MiB |  0.3% → 0.4% |   122 MiB → 146 MiB | 245 → 293 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +13.1% |    +19.999 MiB |  0.4% → 0.5% |   152 MiB → 172 MiB | 305 → 345 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   +6.1% |     +4.499 MiB |         0.2% |   74 MiB → 78.5 MiB | 148 → 157 | `merge(Map, Map)`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|   +2.4% |     +2.499 MiB |         0.3% |   105 MiB → 108 MiB | 211 → 216 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +400.0% |     +1.999 MiB |        <0.1% |   512 KiB → 2.5 MiB |     1 → 5 | `div(double[], int)`                 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|   +5.4% | +1,023.998 KiB | <0.1% → 0.1% | 18.5 MiB → 19.5 MiB |   37 → 39 | `lambda$generateData$4(int)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  +33.3% |   +511.999 KiB |        <0.1% |     1.5 MiB → 2 MiB |     3 → 4 | `lambda$run$0(int, List, int)`       | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| +100.0% |   +511.999 KiB |        <0.1% |     512 KiB → 1 MiB |     1 → 2 | `average(List)`                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|     new |   +511.999 KiB | 0.0% → <0.1% |       0 B → 512 KiB |     0 → 1 | `<init>(JavaKMeans, Map)`            | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

#### Improvements

Functions with the largest decrease in bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |        Delta |            % |                Size |       Samples | Function                                | Location                                                   |
| ------: | -----------: | -----------: | ------------------: | ------------: | --------------------------------------- | ---------------------------------------------------------- |
|   -0.8% |  -13.499 MiB |         4.5% | 1.67 GiB → 1.65 GiB | 3,416 → 3,389 | `findNearestCentroid()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -6.8% |   -7.499 MiB |         0.3% |   111 MiB → 103 MiB |     222 → 207 | `lambda$merge$6(List, List)`            | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -28.1% |   -4.499 MiB |        <0.1% |   16 MiB → 11.5 MiB |       32 → 23 | `builder(long, IntFunction)`            | `java.util.stream.Nodes`                                   |
|   -1.9% |   -1.999 MiB |         0.3% |   104 MiB → 102 MiB |     208 → 204 | `collectClusters(int[])`                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -16.0% |   -1.999 MiB |        <0.1% | 12.5 MiB → 10.5 MiB |       25 → 21 | `copyOf(byte[], int)`                   | `java.util.Arrays`                                         |
|   -7.5% |   -1.999 MiB |         0.1% | 26.5 MiB → 24.5 MiB |       53 → 49 | `intStream(Spliterator$OfInt, boolean)` | `java.util.stream.StreamSupport`                           |
|   -5.7% |   -1.499 MiB |         0.1% |   26.5 MiB → 25 MiB |       53 → 50 | `mapToObj(IntFunction, int)`            | `java.util.stream.IntPipeline`                             |
|   -8.3% | -511.999 KiB |        <0.1% |     6 MiB → 5.5 MiB |       12 → 11 | `createSubtask(int, int)`               | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| removed | -511.999 KiB | <0.1% → 0.0% |       512 KiB → 0 B |         1 → 0 | `putVal(Object, Object, boolean)`       | `java.util.concurrent.ConcurrentHashMap`                   |
| removed | -511.999 KiB | <0.1% → 0.0% |       512 KiB → 0 B |         1 → 0 | `getDeclaredConstructors0(boolean)`     | `java.lang.Class`                                          |
| removed | -511.999 KiB | <0.1% → 0.0% |       512 KiB → 0 B |         1 → 0 | `newString(byte[], int, int)`           | `java.lang.StringLatin1`                                   |
| removed | -511.999 KiB | <0.1% → 0.0% |       512 KiB → 0 B |         1 → 0 | `addConstantUtf8Reference(int, String)` | `jdk.internal.org.objectweb.asm.SymbolTable`               |
| removed | -511.999 KiB | <0.1% → 0.0% |       512 KiB → 0 B |         1 → 0 | `<init>(Map)`                           | `org.renaissance.harness.ConfigParser$$anon$1`             |
| removed | -511.999 KiB | <0.1% → 0.0% |       512 KiB → 0 B |         1 → 0 | `addConstantUtf8(String)`               | `jdk.internal.org.objectweb.asm.SymbolTable`               |
| removed | -511.999 KiB | <0.1% → 0.0% |       512 KiB → 0 B |         1 → 0 | `lookupKey(Object)`                     | `jdk.internal.util.ReferencedKeyMap`                       |
| removed | -511.999 KiB | <0.1% → 0.0% |       512 KiB → 0 B |         1 → 0 | `enlarge(int)`                          | `jdk.internal.org.objectweb.asm.ByteVector`                |
| removed | -511.999 KiB | <0.1% → 0.0% |       512 KiB → 0 B |         1 → 0 | `initCEN(int, ZipCoder)`                | `java.util.zip.ZipFile$Source`                             |
| removed | -511.999 KiB | <0.1% → 0.0% |       512 KiB → 0 B |         1 → 0 | `newLinkedHashMap(int)`                 | `java.util.LinkedHashMap`                                  |
| removed | -511.999 KiB | <0.1% → 0.0% |       512 KiB → 0 B |         1 → 0 | `hashCode()`                            | `java.lang.invoke.MemberName`                              |
| removed | -511.999 KiB | <0.1% → 0.0% |       512 KiB → 0 B |         1 → 0 | `replace(byte[], char, char)`           | `java.lang.StringLatin1`                                   |

##### Standard library

|  Change |        Delta |            % |                Size | Samples | Function                                | Location                                     |
| ------: | -----------: | -----------: | ------------------: | ------: | --------------------------------------- | -------------------------------------------- |
|  -28.1% |   -4.499 MiB |        <0.1% |   16 MiB → 11.5 MiB | 32 → 23 | `builder(long, IntFunction)`            | `java.util.stream.Nodes`                     |
|  -16.0% |   -1.999 MiB |        <0.1% | 12.5 MiB → 10.5 MiB | 25 → 21 | `copyOf(byte[], int)`                   | `java.util.Arrays`                           |
|   -7.5% |   -1.999 MiB |         0.1% | 26.5 MiB → 24.5 MiB | 53 → 49 | `intStream(Spliterator$OfInt, boolean)` | `java.util.stream.StreamSupport`             |
|   -5.7% |   -1.499 MiB |         0.1% |   26.5 MiB → 25 MiB | 53 → 50 | `mapToObj(IntFunction, int)`            | `java.util.stream.IntPipeline`               |
| removed | -511.999 KiB | <0.1% → 0.0% |       512 KiB → 0 B |   1 → 0 | `putVal(Object, Object, boolean)`       | `java.util.concurrent.ConcurrentHashMap`     |
| removed | -511.999 KiB | <0.1% → 0.0% |       512 KiB → 0 B |   1 → 0 | `getDeclaredConstructors0(boolean)`     | `java.lang.Class`                            |
| removed | -511.999 KiB | <0.1% → 0.0% |       512 KiB → 0 B |   1 → 0 | `newString(byte[], int, int)`           | `java.lang.StringLatin1`                     |
| removed | -511.999 KiB | <0.1% → 0.0% |       512 KiB → 0 B |   1 → 0 | `addConstantUtf8Reference(int, String)` | `jdk.internal.org.objectweb.asm.SymbolTable` |
| removed | -511.999 KiB | <0.1% → 0.0% |       512 KiB → 0 B |   1 → 0 | `addConstantUtf8(String)`               | `jdk.internal.org.objectweb.asm.SymbolTable` |
| removed | -511.999 KiB | <0.1% → 0.0% |       512 KiB → 0 B |   1 → 0 | `lookupKey(Object)`                     | `jdk.internal.util.ReferencedKeyMap`         |
| removed | -511.999 KiB | <0.1% → 0.0% |       512 KiB → 0 B |   1 → 0 | `enlarge(int)`                          | `jdk.internal.org.objectweb.asm.ByteVector`  |
| removed | -511.999 KiB | <0.1% → 0.0% |       512 KiB → 0 B |   1 → 0 | `initCEN(int, ZipCoder)`                | `java.util.zip.ZipFile$Source`               |
| removed | -511.999 KiB | <0.1% → 0.0% |       512 KiB → 0 B |   1 → 0 | `newLinkedHashMap(int)`                 | `java.util.LinkedHashMap`                    |
| removed | -511.999 KiB | <0.1% → 0.0% |       512 KiB → 0 B |   1 → 0 | `hashCode()`                            | `java.lang.invoke.MemberName`                |
| removed | -511.999 KiB | <0.1% → 0.0% |       512 KiB → 0 B |   1 → 0 | `replace(byte[], char, char)`           | `java.lang.StringLatin1`                     |
|  -50.0% | -511.999 KiB |        <0.1% |     1 MiB → 512 KiB |   2 → 1 | `result()`                              | `scala.collection.immutable.VectorBuilder`   |

##### Ours

|  Change |        Delta |            % |                Size |       Samples | Function                     | Location                                                   |
| ------: | -----------: | -----------: | ------------------: | ------------: | ---------------------------- | ---------------------------------------------------------- |
|   -0.8% |  -13.499 MiB |         4.5% | 1.67 GiB → 1.65 GiB | 3,416 → 3,389 | `findNearestCentroid()`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -6.8% |   -7.499 MiB |         0.3% |   111 MiB → 103 MiB |     222 → 207 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|   -1.9% |   -1.999 MiB |         0.3% |   104 MiB → 102 MiB |     208 → 204 | `collectClusters(int[])`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -8.3% | -511.999 KiB |        <0.1% |     6 MiB → 5.5 MiB |       12 → 11 | `createSubtask(int, int)`    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| removed | -511.999 KiB | <0.1% → 0.0% |       512 KiB → 0 B |         1 → 0 | `<init>(Map)`                | `org.renaissance.harness.ConfigParser$$anon$1`             |
|  -50.0% | -511.999 KiB |        <0.1% |     1 MiB → 512 KiB |         2 → 1 | `collectGarbage(String)`     | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`   |
|  -50.0% | -511.999 KiB |        <0.1% |     1 MiB → 512 KiB |         2 → 1 | `lambda$boxed$0(int)`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

#### Lines

Lines with the largest change in contribution to each function's self size.

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |       Delta |      % |                Size |         Samples | Location                |
| -----: | ----------: | -----: | ------------------: | --------------: | ----------------------- |
|  +0.2% | +67.872 MiB | 100.0% | 33.6 GiB → 33.7 GiB | 68,497 → 68,632 | `java.util.Arrays:3482` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |               Size |   Samples | Location                                                      |
| -----: | ----------: | -----: | -----------------: | --------: | ------------------------------------------------------------- |
| +41.3% | +29.499 MiB | 100.0% | 71.5 MiB → 101 MiB | 143 → 202 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:400` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |            Size |   Samples | Location                                                      |
| -----: | ----------: | -----: | --------------: | --------: | ------------------------------------------------------------- |
| +37.3% | +24.999 MiB | 100.0% | 67 MiB → 92 MiB | 134 → 184 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:430` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |              Size |   Samples | Location                                                       |
| -----: | ----------: | -----: | ----------------: | --------: | -------------------------------------------------------------- |
| +19.6% | +23.999 MiB | 100.0% | 122 MiB → 146 MiB | 245 → 293 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:261` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |              Size |   Samples | Location                                                      |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------------------------------------------------- |
| +13.1% | +19.999 MiB | 100.0% | 152 MiB → 172 MiB | 305 → 345 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:419` |

##### `valueOf(double)` (`java.lang.Double`)

| Change |       Delta |      % |            Size |   Samples | Location               |
| -----: | ----------: | -----: | --------------: | --------: | ---------------------- |
| +22.8% | +12.999 MiB | 100.0% | 57 MiB → 70 MiB | 114 → 140 | `java.lang.Double:773` |

##### `resize()` (`java.util.HashMap`)

| Change |      Delta |      % |              Size |   Samples | Location                |
| -----: | ---------: | -----: | ----------------: | --------: | ----------------------- |
|  +9.4% | +9.499 MiB | 100.0% | 101 MiB → 110 MiB | 202 → 221 | `java.util.HashMap:710` |

##### `copyOf(Object[], int, Class)` (`java.util.Arrays`)

| Change |      Delta |      % |              Size | Samples | Location                |
| -----: | ---------: | -----: | ----------------: | ------: | ----------------------- |
| +32.4% | +5.499 MiB | 100.0% | 17 MiB → 22.5 MiB | 28 → 39 | `java.util.Arrays:3513` |

##### `entrySet()` (`java.util.HashMap`)

| Change |      Delta |      % |            Size | Samples | Location                 |
| -----: | ---------: | -----: | --------------: | ------: | ------------------------ |
| +45.5% | +4.999 MiB | 100.0% | 11 MiB → 16 MiB | 22 → 32 | `java.util.HashMap:1099` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |      Delta |      % |              Size |   Samples | Location                                        |
| -----: | ---------: | -----: | ----------------: | --------: | ----------------------------------------------- |
|  +6.1% | +4.499 MiB | 100.0% | 74 MiB → 78.5 MiB | 148 → 157 | `org.renaissance.jdk.concurrent.JavaKMeans:110` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

| Change |      Delta |      % |              Size |   Samples | Location                 |
| -----: | ---------: | -----: | ----------------: | --------: | ------------------------ |
|  +1.5% | +3.999 MiB | 100.0% | 262 MiB → 266 MiB | 524 → 532 | `java.util.HashMap:1909` |

##### `range(int, int)` (`java.util.stream.IntStream`)

| Change |      Delta |      % |                Size | Samples | Location                          |
| -----: | ---------: | -----: | ------------------: | ------: | --------------------------------- |
| +28.6% | +2.999 MiB | 100.0% | 10.5 MiB → 13.5 MiB | 21 → 27 | `java.util.stream.IntStream:1083` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |      Delta |      % |              Size |   Samples | Location                  |
| -----: | ---------: | -----: | ----------------: | --------: | ------------------------- |
|  +1.1% | +2.499 MiB | 100.0% | 236 MiB → 239 MiB | 473 → 478 | `java.util.ArrayList:239` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |      Delta |      % |              Size |   Samples | Location                                                       |
| -----: | ---------: | -----: | ----------------: | --------: | -------------------------------------------------------------- |
|  +2.4% | +2.499 MiB | 100.0% | 105 MiB → 108 MiB | 211 → 216 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |

##### `div(double[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change |      Delta |      % |              Size | Samples | Location                                                   |
| ------: | ---------: | -----: | ----------------: | ------: | ---------------------------------------------------------- |
| +400.0% | +1.999 MiB | 100.0% | 512 KiB → 2.5 MiB |   1 → 5 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:339` |

##### `mapToObj(DoubleFunction, int)` (`java.util.stream.DoublePipeline`)

|  Change |      Delta |      % |            Size | Samples | Location                              |
| ------: | ---------: | -----: | --------------: | ------: | ------------------------------------- |
| +300.0% | +1.499 MiB | 100.0% | 512 KiB → 2 MiB |   1 → 4 | `java.util.stream.DoublePipeline:170` |

##### `allocateUninitializedArray0(Class, int)` (`jdk.internal.misc.Unsafe`)

| Change |      Delta |             % |          Size | Samples | Location                        |
| -----: | ---------: | ------------: | ------------: | ------: | ------------------------------- |
|    new | +1.499 MiB | 0.0% → 100.0% | 0 B → 1.5 MiB |   0 → 3 | `jdk.internal.misc.Unsafe:1387` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change |          Delta |      % |              Size | Samples | Location                                |
| -----: | -------------: | -----: | ----------------: | ------: | --------------------------------------- |
| +40.0% | +1,023.998 KiB | 100.0% | 2.5 MiB → 3.5 MiB |   5 → 7 | `java.util.concurrent.ForkJoinTask:437` |

##### `visitMethod(int, String, String, String, String[])` (`jdk.internal.org.objectweb.asm.ClassWriter`)

| Change |          Delta |             % |        Size | Samples | Location                                         |
| -----: | -------------: | ------------: | ----------: | ------: | ------------------------------------------------ |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `jdk.internal.org.objectweb.asm.ClassWriter:500` |

##### `makeImpl(Class, Class[], boolean)` (`java.lang.invoke.MethodType`)

| Change |          Delta |             % |        Size | Samples | Location                          |
| -----: | -------------: | ------------: | ----------: | ------: | --------------------------------- |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `java.lang.invoke.MethodType:400` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

| Change |          Delta |      % |                Size | Samples | Location                                  |
| -----: | -------------: | -----: | ------------------: | ------: | ----------------------------------------- |
|  +9.5% | +1,023.998 KiB | 100.0% | 10.5 MiB → 11.5 MiB | 21 → 23 | `java.lang.invoke.DirectMethodHandle:501` |

##### `doubleStream(Spliterator$OfDouble, boolean)` (`java.util.stream.StreamSupport`)

| Change |          Delta |      % |              Size | Samples | Location                             |
| -----: | -------------: | -----: | ----------------: | ------: | ------------------------------------ |
| +66.7% | +1,023.998 KiB | 100.0% | 1.5 MiB → 2.5 MiB |   3 → 5 | `java.util.stream.StreamSupport:274` |

##### `spliterator(double[], int, int, int)` (`java.util.Spliterators`)

| Change |          Delta |             % |        Size | Samples | Location                     |
| -----: | -------------: | ------------: | ----------: | ------: | ---------------------------- |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `java.util.Spliterators:372` |

##### `descriptorString()` (`java.lang.Class`)

| Change |        Delta |             % |          Size | Samples | Location               |
| -----: | -----------: | ------------: | ------------: | ------: | ---------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `java.lang.Class:4585` |

##### `makeIntrinsic(MethodType, LambdaForm, MethodHandleImpl$Intrinsic)` (`java.lang.invoke.MethodHandleImpl`)

| Change |        Delta |             % |          Size | Samples | Location                                 |
| -----: | -----------: | ------------: | ------------: | ------: | ---------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `java.lang.invoke.MethodHandleImpl:1433` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |          Delta |      % |                Size | Samples | Location                                       |
| -----: | -------------: | -----: | ------------------: | ------: | ---------------------------------------------- |
|  +5.4% | +1,023.998 KiB | 100.0% | 18.5 MiB → 19.5 MiB | 37 → 39 | `org.renaissance.jdk.concurrent.JavaKMeans:87` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |            % |          Size | Samples | Location                                       |
| -----: | -----------: | -----------: | ------------: | ------: | ---------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 25.0% | 0 B → 512 KiB |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans:59` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change |        Delta |      % |            Size | Samples | Location                                                   |
| ------: | -----------: | -----: | --------------: | ------: | ---------------------------------------------------------- |
| +100.0% | +511.999 KiB | 100.0% | 512 KiB → 1 MiB |   1 → 2 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:332` |

##### `<init>(JavaKMeans, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |        Delta |             % |          Size | Samples | Location                                                   |
| -----: | -----------: | ------------: | ------------: | ------: | ---------------------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:282` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |                Size |       Samples | Location                                                       |
| -----: | ----------: | -----: | ------------------: | ------------: | -------------------------------------------------------------- |
|  -0.8% | -13.499 MiB | 100.0% | 1.67 GiB → 1.65 GiB | 3,416 → 3,389 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:223` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |      Delta |      % |              Size |   Samples | Location                                        |
| -----: | ---------: | -----: | ----------------: | --------: | ----------------------------------------------- |
|  -6.8% | -7.499 MiB | 100.0% | 111 MiB → 103 MiB | 222 → 207 | `org.renaissance.jdk.concurrent.JavaKMeans:114` |

##### `builder(long, IntFunction)` (`java.util.stream.Nodes`)

| Change |      Delta |      % |              Size | Samples | Location                     |
| -----: | ---------: | -----: | ----------------: | ------: | ---------------------------- |
| -28.1% | -4.499 MiB | 100.0% | 16 MiB → 11.5 MiB | 32 → 23 | `java.util.stream.Nodes:168` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |      Delta |      % |              Size |   Samples | Location                                                       |
| -----: | ---------: | -----: | ----------------: | --------: | -------------------------------------------------------------- |
|  -1.9% | -1.999 MiB | 100.0% | 104 MiB → 102 MiB | 208 → 204 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:209` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

| Change |      Delta |      % |                Size | Samples | Location                |
| -----: | ---------: | -----: | ------------------: | ------: | ----------------------- |
| -16.0% | -1.999 MiB | 100.0% | 12.5 MiB → 10.5 MiB | 25 → 21 | `java.util.Arrays:3541` |

##### `intStream(Spliterator$OfInt, boolean)` (`java.util.stream.StreamSupport`)

| Change |      Delta |      % |                Size | Samples | Location                             |
| -----: | ---------: | -----: | ------------------: | ------: | ------------------------------------ |
|  -7.5% | -1.999 MiB | 100.0% | 26.5 MiB → 24.5 MiB | 53 → 49 | `java.util.stream.StreamSupport:138` |

##### `mapToObj(IntFunction, int)` (`java.util.stream.IntPipeline`)

| Change |      Delta |      % |              Size | Samples | Location                           |
| -----: | ---------: | -----: | ----------------: | ------: | ---------------------------------- |
|  -5.7% | -1.499 MiB | 100.0% | 26.5 MiB → 25 MiB | 53 → 50 | `java.util.stream.IntPipeline:174` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |        Delta |      % |            Size | Samples | Location                                                   |
| -----: | -----------: | -----: | --------------: | ------: | ---------------------------------------------------------- |
|  -8.3% | -511.999 KiB | 100.0% | 6 MiB → 5.5 MiB | 12 → 11 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:352` |

##### `putVal(Object, Object, boolean)` (`java.util.concurrent.ConcurrentHashMap`)

|  Change |        Delta |             % |          Size | Samples | Location                                      |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `java.util.concurrent.ConcurrentHashMap:1019` |

##### `newString(byte[], int, int)` (`java.lang.StringLatin1`)

|  Change |        Delta |             % |          Size | Samples | Location                     |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `java.lang.StringLatin1:750` |

##### `addConstantUtf8Reference(int, String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

|  Change |        Delta |             % |          Size | Samples | Location                                          |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `jdk.internal.org.objectweb.asm.SymbolTable:1040` |

##### `<init>(Map)` (`org.renaissance.harness.ConfigParser$$anon$1`)

|  Change |        Delta |             % |          Size | Samples | Location                                           |
| ------: | -----------: | ------------: | ------------: | ------: | -------------------------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `org.renaissance.harness.ConfigParser$$anon$1:137` |

##### `addConstantUtf8(String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

|  Change |        Delta |             % |          Size | Samples | Location                                         |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------------------------ |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `jdk.internal.org.objectweb.asm.SymbolTable:807` |

##### `lookupKey(Object)` (`jdk.internal.util.ReferencedKeyMap`)

|  Change |        Delta |             % |          Size | Samples | Location                                 |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `jdk.internal.util.ReferencedKeyMap:176` |

##### `enlarge(int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

|  Change |        Delta |             % |          Size | Samples | Location                                        |
| ------: | -----------: | ------------: | ------------: | ------: | ----------------------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `jdk.internal.org.objectweb.asm.ByteVector:401` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|  Change |        Delta |             % |          Size | Samples | Location                            |
| ------: | -----------: | ------------: | ------------: | ------: | ----------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `java.util.zip.ZipFile$Source:1733` |

##### `newLinkedHashMap(int)` (`java.util.LinkedHashMap`)

|  Change |        Delta |             % |          Size | Samples | Location                       |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------ |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `java.util.LinkedHashMap:1078` |

##### `hashCode()` (`java.lang.invoke.MemberName`)

|  Change |        Delta |             % |          Size | Samples | Location                          |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `java.lang.invoke.MemberName:723` |

##### `replace(byte[], char, char)` (`java.lang.StringLatin1`)

|  Change |        Delta |             % |          Size | Samples | Location                     |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `java.lang.StringLatin1:317` |

##### `result()` (`scala.collection.immutable.VectorBuilder`)

|  Change |          Delta |             % |          Size | Samples | Location                                        |
| ------: | -------------: | ------------: | ------------: | ------: | ----------------------------------------------- |
| removed | -1,023.998 KiB | 100.0% → 0.0% |   1 MiB → 0 B |   2 → 0 | `scala.collection.immutable.VectorBuilder:1897` |
|     new |   +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `scala.collection.immutable.VectorBuilder:1898` |

##### `collectGarbage(String)` (`org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`)

| Change |        Delta |      % |            Size | Samples | Location                                                    |
| -----: | -----------: | -----: | --------------: | ------: | ----------------------------------------------------------- |
| -50.0% | -511.999 KiB | 100.0% | 1 MiB → 512 KiB |   2 → 1 | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin:26` |

##### `lambda$boxed$0(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |        Delta |      % |            Size | Samples | Location                                                   |
| -----: | -----------: | -----: | --------------: | ------: | ---------------------------------------------------------- |
| -50.0% | -511.999 KiB | 100.0% | 1 MiB → 512 KiB |   2 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:327` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |       Delta |             % |     Size |         Samples | Caller      | Location              |
| -----: | ----------: | ------------: | -------: | --------------: | ----------- | --------------------- |
|  +0.4% | +71.372 MiB | 57.3% → 57.4% | 19.3 GiB | 39,111 → 39,253 | `grow(int)` | `java.util.ArrayList` |
|    ~0% |  -3.499 MiB | 42.7% → 42.6% | 14.3 GiB | 29,386 → 29,379 | `toArray()` | `java.util.ArrayList` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |               Size |   Samples | Caller              | Location                                                  |
| -----: | ----------: | -----: | -----------------: | --------: | ------------------- | --------------------------------------------------------- |
| +41.3% | +29.499 MiB | 100.0% | 71.5 MiB → 101 MiB | 143 → 202 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |            Size |   Samples | Caller                               | Location                                                  |
| -----: | ----------: | -----: | --------------: | --------: | ------------------------------------ | --------------------------------------------------------- |
| +37.3% | +24.999 MiB | 100.0% | 67 MiB → 92 MiB | 134 → 184 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |              Size |   Samples | Caller      | Location                                               |
| -----: | ----------: | -----: | ----------------: | --------: | ----------- | ------------------------------------------------------ |
| +19.6% | +23.999 MiB | 100.0% | 122 MiB → 146 MiB | 245 → 293 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |              Size |   Samples | Caller      | Location                                               |
| -----: | ----------: | -----: | ----------------: | --------: | ----------- | ------------------------------------------------------ |
| +13.1% | +19.999 MiB | 100.0% | 152 MiB → 172 MiB | 305 → 345 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `valueOf(double)` (`java.lang.Double`)

| Change |       Delta |             % |            Size |   Samples | Caller                                           | Location                                    |
| -----: | ----------: | ------------: | --------------: | --------: | ------------------------------------------------ | ------------------------------------------- |
| +24.1% | +12.999 MiB | 94.7% → 95.7% | 54 MiB → 67 MiB | 108 → 134 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `resize()` (`java.util.HashMap`)

| Change |          Delta |             % |              Size |   Samples | Caller                                          | Location            |
| -----: | -------------: | ------------: | ----------------: | --------: | ----------------------------------------------- | ------------------- |
| +21.1% |    +11.999 MiB | 56.4% → 62.4% |   57 MiB → 69 MiB | 114 → 138 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap` |
|  -8.0% |     -3.499 MiB | 43.6% → 36.7% | 44 MiB → 40.5 MiB |   88 → 81 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |
|    new | +1,023.998 KiB |   0.0% → 0.9% |       0 B → 1 MiB |     0 → 2 | `merge(Object, Object, BiFunction)`             | `java.util.HashMap` |

##### `copyOf(Object[], int, Class)` (`java.util.Arrays`)

| Change |      Delta |      % |              Size | Samples | Caller                  | Location           |
| -----: | ---------: | -----: | ----------------: | ------: | ----------------------- | ------------------ |
| +32.4% | +5.499 MiB | 100.0% | 17 MiB → 22.5 MiB | 28 → 39 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `entrySet()` (`java.util.HashMap`)

| Change |      Delta |      % |            Size | Samples | Caller                        | Location            |
| -----: | ---------: | -----: | --------------: | ------: | ----------------------------- | ------------------- |
| +45.5% | +4.999 MiB | 100.0% | 11 MiB → 16 MiB | 22 → 32 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |             % |                Size |   Samples | Caller                     | Location                                                   |
| -----: | -----------: | ------------: | ------------------: | --------: | -------------------------- | ---------------------------------------------------------- |
|  +5.5% |   +3.999 MiB | 98.0% → 97.5% | 72.5 MiB → 76.5 MiB | 145 → 153 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +33.3% | +511.999 KiB |   2.0% → 2.5% |     1.5 MiB → 2 MiB |     3 → 4 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

| Change |      Delta |             % |              Size |   Samples | Caller                                          | Location            |
| -----: | ---------: | ------------: | ----------------: | --------: | ----------------------------------------------- | ------------------- |
|  +5.2% | +6.999 MiB | 51.5% → 53.4% | 135 MiB → 142 MiB | 270 → 284 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap` |
|  -3.9% | -4.999 MiB | 48.5% → 45.9% | 127 MiB → 122 MiB | 254 → 244 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |
|    new | +1.999 MiB |   0.0% → 0.8% |       0 B → 2 MiB |     0 → 4 | `merge(Object, Object, BiFunction)`             | `java.util.HashMap` |

##### `allocateInstance(Class)` (`jdk.internal.misc.Unsafe`)

|  Change |      Delta |      % |              Size | Samples | Caller                     | Location                              |
| ------: | ---------: | -----: | ----------------: | ------: | -------------------------- | ------------------------------------- |
| +266.7% | +3.999 MiB | 100.0% | 1.5 MiB → 5.5 MiB |  3 → 11 | `allocateInstance(Object)` | `java.lang.invoke.DirectMethodHandle` |

##### `range(int, int)` (`java.util.stream.IntStream`)

| Change |      Delta |      % |                Size | Samples | Caller                                           | Location                                    |
| -----: | ---------: | -----: | ------------------: | ------: | ------------------------------------------------ | ------------------------------------------- |
| +28.6% | +2.999 MiB | 100.0% | 10.5 MiB → 13.5 MiB | 21 → 27 | `lambda$generateData$5(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |      Delta |      % |              Size |   Samples | Caller   | Location              |
| -----: | ---------: | -----: | ----------------: | --------: | -------- | --------------------- |
|  +1.1% | +2.499 MiB | 100.0% | 236 MiB → 239 MiB | 473 → 478 | `grow()` | `java.util.ArrayList` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |      Delta |      % |              Size |   Samples | Caller          | Location                                                                              |
| -----: | ---------: | -----: | ----------------: | --------: | --------------- | ------------------------------------------------------------------------------------- |
|  +2.4% | +2.499 MiB | 100.0% | 105 MiB → 108 MiB | 211 → 216 | `apply(Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000004011a3940` |

##### `fillInStackTrace(int)` (`java.lang.Throwable`)

|  Change |      Delta |      % |              Size | Samples | Caller               | Location              |
| ------: | ---------: | -----: | ----------------: | ------: | -------------------- | --------------------- |
| +400.0% | +1.999 MiB | 100.0% | 512 KiB → 2.5 MiB |   1 → 5 | `fillInStackTrace()` | `java.lang.Throwable` |

##### `div(double[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change |      Delta |      % |              Size | Samples | Caller          | Location                                               |
| ------: | ---------: | -----: | ----------------: | ------: | --------------- | ------------------------------------------------------ |
| +400.0% | +1.999 MiB | 100.0% | 512 KiB → 2.5 MiB |   1 → 5 | `average(List)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `mapToObj(DoubleFunction, int)` (`java.util.stream.DoublePipeline`)

|  Change |      Delta |      % |            Size | Samples | Caller    | Location                          |
| ------: | ---------: | -----: | --------------: | ------: | --------- | --------------------------------- |
| +300.0% | +1.499 MiB | 100.0% | 512 KiB → 2 MiB |   1 → 4 | `boxed()` | `java.util.stream.DoublePipeline` |

##### `allocateUninitializedArray0(Class, int)` (`jdk.internal.misc.Unsafe`)

| Change |      Delta |             % |          Size | Samples | Caller                                   | Location                   |
| -----: | ---------: | ------------: | ------------: | ------: | ---------------------------------------- | -------------------------- |
|    new | +1.499 MiB | 0.0% → 100.0% | 0 B → 1.5 MiB |   0 → 3 | `allocateUninitializedArray(Class, int)` | `jdk.internal.misc.Unsafe` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change |          Delta |      % |              Size | Samples | Caller   | Location                            |
| -----: | -------------: | -----: | ----------------: | ------: | -------- | ----------------------------------- |
| +40.0% | +1,023.998 KiB | 100.0% | 2.5 MiB → 3.5 MiB |   5 → 7 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `visitMethod(int, String, String, String, String[])` (`jdk.internal.org.objectweb.asm.ClassWriter`)

| Change |        Delta |            % |          Size | Samples | Caller                                   | Location                                       |
| -----: | -----------: | -----------: | ------------: | ------: | ---------------------------------------- | ---------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 50.0% | 0 B → 512 KiB |   0 → 1 | `methodPrologue()`                       | `java.lang.invoke.InvokerBytecodeGenerator`    |
|    new | +511.999 KiB | 0.0% → 50.0% | 0 B → 512 KiB |   0 → 1 | `generateSerializationFriendlyMethods()` | `java.lang.invoke.InnerClassLambdaMetafactory` |

##### `makeImpl(Class, Class[], boolean)` (`java.lang.invoke.MethodType`)

| Change |          Delta |             % |        Size | Samples | Caller                                | Location                      |
| -----: | -------------: | ------------: | ----------: | ------: | ------------------------------------- | ----------------------------- |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `methodType(Class, Class[], boolean)` | `java.lang.invoke.MethodType` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

|  Change |      Delta |              % |               Size | Samples | Caller                                               | Location                                             |
| ------: | ---------: | -------------: | -----------------: | ------: | ---------------------------------------------------- | ---------------------------------------------------- |
|  +35.3% | +2.999 MiB | 81.0% → 100.0% | 8.5 MiB → 11.5 MiB | 17 → 23 | `newInvokeSpecial(Object, int, int, Object)`         | `java.lang.invoke.LambdaForm$DMH.0x00000004011a4400` |
| removed | -1.999 MiB |   19.0% → 0.0% |        2 MiB → 0 B |   4 → 0 | `newInvokeSpecial(Object, Object, int, Object, int)` | `java.lang.invoke.LambdaForm$DMH.0x00000004011a5400` |

##### `doubleStream(Spliterator$OfDouble, boolean)` (`java.util.stream.StreamSupport`)

| Change |          Delta |      % |              Size | Samples | Caller                       | Location           |
| -----: | -------------: | -----: | ----------------: | ------: | ---------------------------- | ------------------ |
| +66.7% | +1,023.998 KiB | 100.0% | 1.5 MiB → 2.5 MiB |   3 → 5 | `stream(double[], int, int)` | `java.util.Arrays` |

##### `spliterator(double[], int, int, int)` (`java.util.Spliterators`)

| Change |          Delta |             % |        Size | Samples | Caller                            | Location           |
| -----: | -------------: | ------------: | ----------: | ------: | --------------------------------- | ------------------ |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `spliterator(double[], int, int)` | `java.util.Arrays` |

##### `descriptorString()` (`java.lang.Class`)

| Change |        Delta |             % |          Size | Samples | Caller           | Location                             |
| -----: | -----------: | ------------: | ------------: | ------: | ---------------- | ------------------------------------ |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `unparse(Class)` | `sun.invoke.util.BytecodeDescriptor` |

##### `makeIntrinsic(MethodType, LambdaForm, MethodHandleImpl$Intrinsic)` (`java.lang.invoke.MethodHandleImpl`)

| Change |        Delta |             % |          Size | Samples | Caller                | Location                         |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------- | -------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `makeIdentity(Class)` | `java.lang.invoke.MethodHandles` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |          Delta |      % |                Size | Samples | Caller       | Location                                                               |
| -----: | -------------: | -----: | ------------------: | ------: | ------------ | ---------------------------------------------------------------------- |
|  +5.4% | +1,023.998 KiB | 100.0% | 18.5 MiB → 19.5 MiB | 37 → 39 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011a25c0` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |      % |            Size | Samples | Caller   | Location                                                               |
| -----: | -----------: | -----: | --------------: | ------: | -------- | ---------------------------------------------------------------------- |
| +33.3% | +511.999 KiB | 100.0% | 1.5 MiB → 2 MiB |   3 → 4 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011a2bd0` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change |        Delta |      % |            Size | Samples | Caller                     | Location                                               |
| ------: | -----------: | -----: | --------------: | ------: | -------------------------- | ------------------------------------------------------ |
| +100.0% | +511.999 KiB | 100.0% | 512 KiB → 1 MiB |   1 → 2 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `<init>(JavaKMeans, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |        Delta |             % |          Size | Samples | Caller                         | Location                                    |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------ | ------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |                Size |       Samples | Caller              | Location                                                   |
| -----: | ----------: | -----: | ------------------: | ------------: | ------------------- | ---------------------------------------------------------- |
|  -0.8% | -13.499 MiB | 100.0% | 1.67 GiB → 1.65 GiB | 3,416 → 3,389 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |      Delta |      % |              Size |   Samples | Caller                  | Location                                                               |
| -----: | ---------: | -----: | ----------------: | --------: | ----------------------- | ---------------------------------------------------------------------- |
|  -6.8% | -7.499 MiB | 100.0% | 111 MiB → 103 MiB | 222 → 207 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011a7248` |

##### `builder(long, IntFunction)` (`java.util.stream.Nodes`)

| Change |      Delta |      % |              Size | Samples | Caller                               | Location                             |
| -----: | ---------: | -----: | ----------------: | ------: | ------------------------------------ | ------------------------------------ |
| -28.1% | -4.499 MiB | 100.0% | 16 MiB → 11.5 MiB | 32 → 23 | `makeNodeBuilder(long, IntFunction)` | `java.util.stream.ReferencePipeline` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |      Delta |      % |              Size |   Samples | Caller              | Location                                                   |
| -----: | ---------: | -----: | ----------------: | --------: | ------------------- | ---------------------------------------------------------- |
|  -1.9% | -1.999 MiB | 100.0% | 104 MiB → 102 MiB | 208 → 204 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

| Change |          Delta |              % |               Size | Samples | Caller                        | Location                          |
| -----: | -------------: | -------------: | -----------------: | ------: | ----------------------------- | --------------------------------- |
| -24.0% |     -2.999 MiB | 100.0% → 90.5% | 12.5 MiB → 9.5 MiB | 25 → 19 | `getBytes()`                  | `jdk.internal.loader.Resource`    |
|    new | +1,023.998 KiB |    0.0% → 9.5% |        0 B → 1 MiB |   0 → 2 | `ensureCapacityInternal(int)` | `java.lang.AbstractStringBuilder` |

##### `intStream(Spliterator$OfInt, boolean)` (`java.util.stream.StreamSupport`)

| Change |      Delta |      % |                Size | Samples | Caller            | Location                     |
| -----: | ---------: | -----: | ------------------: | ------: | ----------------- | ---------------------------- |
|  -7.5% | -1.999 MiB | 100.0% | 26.5 MiB → 24.5 MiB | 53 → 49 | `range(int, int)` | `java.util.stream.IntStream` |

##### `mapToObj(IntFunction, int)` (`java.util.stream.IntPipeline`)

| Change |      Delta |      % |              Size | Samples | Caller                  | Location                       |
| -----: | ---------: | -----: | ----------------: | ------: | ----------------------- | ------------------------------ |
|  -5.7% | -1.499 MiB | 100.0% | 26.5 MiB → 25 MiB | 53 → 50 | `mapToObj(IntFunction)` | `java.util.stream.IntPipeline` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |        Delta |      % |            Size | Samples | Caller      | Location                                               |
| -----: | -----------: | -----: | --------------: | ------: | ----------- | ------------------------------------------------------ |
|  -8.3% | -511.999 KiB | 100.0% | 6 MiB → 5.5 MiB | 12 → 11 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `putVal(Object, Object, boolean)` (`java.util.concurrent.ConcurrentHashMap`)

|  Change |        Delta |             % |          Size | Samples | Caller                | Location                                 |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------- | ---------------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `put(Object, Object)` | `java.util.concurrent.ConcurrentHashMap` |

##### `getDeclaredConstructors0(boolean)` (`java.lang.Class`)

|  Change |        Delta |             % |          Size | Samples | Caller                                    | Location          |
| ------: | -----------: | ------------: | ------------: | ------: | ----------------------------------------- | ----------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `privateGetDeclaredConstructors(boolean)` | `java.lang.Class` |

##### `newString(byte[], int, int)` (`java.lang.StringLatin1`)

|  Change |        Delta |             % |          Size | Samples | Caller                | Location           |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------- | ------------------ |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `substring(int, int)` | `java.lang.String` |

##### `addConstantUtf8Reference(int, String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

|  Change |        Delta |             % |          Size | Samples | Caller                     | Location                                     |
| ------: | -----------: | ------------: | ------------: | ------: | -------------------------- | -------------------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `addConstantClass(String)` | `jdk.internal.org.objectweb.asm.SymbolTable` |

##### `<init>(Map)` (`org.renaissance.harness.ConfigParser$$anon$1`)

|  Change |        Delta |             % |          Size | Samples | Caller              | Location                               |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------- | -------------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `createParser(Map)` | `org.renaissance.harness.ConfigParser` |

##### `addConstantUtf8(String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

|  Change |        Delta |             % |          Size | Samples | Caller                                                            | Location                                      |
| ------: | -----------: | ------------: | ------------: | ------: | ----------------------------------------------------------------- | --------------------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `<init>(SymbolTable, int, String, String, String, String[], int)` | `jdk.internal.org.objectweb.asm.MethodWriter` |

##### `lookupKey(Object)` (`jdk.internal.util.ReferencedKeyMap`)

|  Change |        Delta |             % |          Size | Samples | Caller                    | Location                             |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------- | ------------------------------------ |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `getNoCheckStale(Object)` | `jdk.internal.util.ReferencedKeyMap` |

##### `enlarge(int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

|  Change |        Delta |             % |          Size | Samples | Caller            | Location                                    |
| ------: | -----------: | ------------: | ------------: | ------: | ----------------- | ------------------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `putUTF8(String)` | `jdk.internal.org.objectweb.asm.ByteVector` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|  Change |        Delta |             % |          Size | Samples | Caller                                          | Location                       |
| ------: | -----------: | ------------: | ------------: | ------: | ----------------------------------------------- | ------------------------------ |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `newLinkedHashMap(int)` (`java.util.LinkedHashMap`)

|  Change |        Delta |             % |          Size | Samples | Caller        | Location                   |
| ------: | -----------: | ------------: | ------------: | ------: | ------------- | -------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `<init>(int)` | `java.util.jar.Attributes` |

##### `hashCode()` (`java.lang.invoke.MemberName`)

|  Change |        Delta |             % |          Size | Samples | Caller        | Location                                 |
| ------: | -----------: | ------------: | ------------: | ------: | ------------- | ---------------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `get(Object)` | `java.util.concurrent.ConcurrentHashMap` |

##### `replace(byte[], char, char)` (`java.lang.StringLatin1`)

|  Change |        Delta |             % |          Size | Samples | Caller                | Location           |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------- | ------------------ |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `replace(char, char)` | `java.lang.String` |

##### `result()` (`scala.collection.immutable.VectorBuilder`)

| Change |        Delta |      % |            Size | Samples | Caller     | Location                                   |
| -----: | -----------: | -----: | --------------: | ------: | ---------- | ------------------------------------------ |
| -50.0% | -511.999 KiB | 100.0% | 1 MiB → 512 KiB |   2 → 1 | `result()` | `scala.collection.immutable.VectorBuilder` |

##### `collectGarbage(String)` (`org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`)

| Change |        Delta |      % |            Size | Samples | Caller                                      | Location                                                 |
| -----: | -----------: | -----: | --------------: | ------: | ------------------------------------------- | -------------------------------------------------------- |
| -50.0% | -511.999 KiB | 100.0% | 1 MiB → 512 KiB |   2 → 1 | `afterOperationSetUp(String, int, boolean)` | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin` |

##### `lambda$boxed$0(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |        Delta |      % |            Size | Samples | Caller       | Location                                                                          |
| -----: | -----------: | -----: | --------------: | ------: | ------------ | --------------------------------------------------------------------------------- |
| -50.0% | -511.999 KiB | 100.0% | 1 MiB → 512 KiB |   2 → 1 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask$$Lambda.0x00000004011a8300` |

### Total size

#### Regressions

Functions with the largest increase in bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |        Delta |             % |                Size |         Samples | Function                                                                                                               | Location                                                               |
| ------: | -----------: | ------------: | ------------------: | --------------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|     new |  +206.46 MiB |   0.0% → 0.5% |       0 B → 206 MiB |         0 → 407 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|   +0.5% | +185.372 MiB |         99.4% | 36.7 GiB → 36.9 GiB | 74,820 → 75,190 | `doExec()`                                                                                                             | `java.util.concurrent.ForkJoinTask`                                    |
|   +0.5% | +185.372 MiB |         99.4% | 36.7 GiB → 36.9 GiB | 74,820 → 75,190 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`                                                                   | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
|   +0.5% | +185.372 MiB |         99.4% | 36.7 GiB → 36.9 GiB | 74,820 → 75,190 | `scan(ForkJoinPool$WorkQueue, int, int)`                                                                               | `java.util.concurrent.ForkJoinPool`                                    |
|   +0.5% | +185.372 MiB |         99.4% | 36.7 GiB → 36.9 GiB | 74,820 → 75,190 | `runWorker(ForkJoinPool$WorkQueue)`                                                                                    | `java.util.concurrent.ForkJoinPool`                                    |
|   +0.5% | +185.372 MiB |         99.4% | 36.7 GiB → 36.9 GiB | 74,820 → 75,190 | `run()`                                                                                                                | `java.util.concurrent.ForkJoinWorkerThread`                            |
|   +0.5% | +184.372 MiB |         99.4% | 36.7 GiB → 36.9 GiB | 74,817 → 75,185 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|   +0.5% | +184.372 MiB |         99.4% | 36.7 GiB → 36.9 GiB | 74,817 → 75,185 | `exec()`                                                                                                               | `java.util.concurrent.RecursiveTask`                                   |
| +240.7% | +129.999 MiB |   0.1% → 0.5% |    54 MiB → 184 MiB |       108 → 368 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011a2150` |
|   +1.8% | +119.999 MiB | 17.4% → 17.6% | 6.41 GiB → 6.52 GiB | 13,122 → 13,362 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   +0.4% | +116.999 MiB | 79.4% → 79.3% | 29.3 GiB → 29.4 GiB | 59,990 → 60,224 | `awaitDone(int, long)`                                                                                                 | `java.util.concurrent.ForkJoinTask`                                    |
|   +0.4% | +116.999 MiB | 79.4% → 79.3% | 29.3 GiB → 29.4 GiB | 59,990 → 60,224 | `join()`                                                                                                               | `java.util.concurrent.ForkJoinTask`                                    |
|   +1.3% | +106.499 MiB | 21.9% → 22.1% | 8.08 GiB → 8.18 GiB | 16,538 → 16,751 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   +0.3% | +102.499 MiB | 78.6% → 78.4% |   29 GiB → 29.1 GiB | 59,368 → 59,573 | `tryRemoveAndExec(ForkJoinTask, boolean)`                                                                              | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
|   +1.6% |  +99.999 MiB | 16.3% → 16.5% | 6.02 GiB → 6.12 GiB | 12,326 → 12,526 | `grow()`                                                                                                               | `java.util.ArrayList`                                                  |
|   +1.6% |  +99.999 MiB | 16.3% → 16.5% | 6.02 GiB → 6.12 GiB | 12,326 → 12,526 | `add(Object, Object[], int)`                                                                                           | `java.util.ArrayList`                                                  |
|   +1.6% |  +99.999 MiB | 16.3% → 16.5% | 6.02 GiB → 6.12 GiB | 12,326 → 12,526 | `add(Object)`                                                                                                          | `java.util.ArrayList`                                                  |
|   +0.2% |  +73.372 MiB | 91.1% → 90.8% | 33.6 GiB → 33.7 GiB | 68,525 → 68,671 | `copyOf(Object[], int)`                                                                                                | `java.util.Arrays`                                                     |
|   +0.4% |  +71.372 MiB | 52.8% → 52.7% | 19.5 GiB → 19.6 GiB | 39,598 → 39,740 | `grow(int)`                                                                                                            | `java.util.ArrayList`                                                  |
|  +42.1% |  +70.499 MiB |   0.4% → 0.6% |   167 MiB → 238 MiB |       335 → 476 | `computeClusterAverages()`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |

##### Standard library

| Change |        Delta |             % |                Size |         Samples | Function                                                  | Location                                      |
| -----: | -----------: | ------------: | ------------------: | --------------: | --------------------------------------------------------- | --------------------------------------------- |
|  +0.5% | +185.372 MiB |         99.4% | 36.7 GiB → 36.9 GiB | 74,820 → 75,190 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`           |
|  +0.5% | +185.372 MiB |         99.4% | 36.7 GiB → 36.9 GiB | 74,820 → 75,190 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  +0.5% | +185.372 MiB |         99.4% | 36.7 GiB → 36.9 GiB | 74,820 → 75,190 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`           |
|  +0.5% | +185.372 MiB |         99.4% | 36.7 GiB → 36.9 GiB | 74,820 → 75,190 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`           |
|  +0.5% | +185.372 MiB |         99.4% | 36.7 GiB → 36.9 GiB | 74,820 → 75,190 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`   |
|  +0.5% | +184.372 MiB |         99.4% | 36.7 GiB → 36.9 GiB | 74,817 → 75,185 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`          |
|  +0.4% | +116.999 MiB | 79.4% → 79.3% | 29.3 GiB → 29.4 GiB | 59,990 → 60,224 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`           |
|  +0.4% | +116.999 MiB | 79.4% → 79.3% | 29.3 GiB → 29.4 GiB | 59,990 → 60,224 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`           |
|  +0.3% | +102.499 MiB | 78.6% → 78.4% |   29 GiB → 29.1 GiB | 59,368 → 59,573 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  +1.6% |  +99.999 MiB | 16.3% → 16.5% | 6.02 GiB → 6.12 GiB | 12,326 → 12,526 | `grow()`                                                  | `java.util.ArrayList`                         |
|  +1.6% |  +99.999 MiB | 16.3% → 16.5% | 6.02 GiB → 6.12 GiB | 12,326 → 12,526 | `add(Object, Object[], int)`                              | `java.util.ArrayList`                         |
|  +1.6% |  +99.999 MiB | 16.3% → 16.5% | 6.02 GiB → 6.12 GiB | 12,326 → 12,526 | `add(Object)`                                             | `java.util.ArrayList`                         |
|  +0.2% |  +73.372 MiB | 91.1% → 90.8% | 33.6 GiB → 33.7 GiB | 68,525 → 68,671 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                            |
|  +0.4% |  +71.372 MiB | 52.8% → 52.7% | 19.5 GiB → 19.6 GiB | 39,598 → 39,740 | `grow(int)`                                               | `java.util.ArrayList`                         |
|  +0.2% |  +38.372 MiB | 56.3% → 56.1% |            20.8 GiB | 42,209 → 42,285 | `addAll(Collection)`                                      | `java.util.ArrayList`                         |
|  +0.7% |  +35.999 MiB |         14.5% | 5.33 GiB → 5.37 GiB | 10,926 → 10,998 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
|  +7.2% |  +21.499 MiB |          0.8% |   297 MiB → 319 MiB |       595 → 638 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                           |
|  +9.6% |  +17.499 MiB |          0.5% |   183 MiB → 200 MiB |       360 → 395 | `copyInto(Sink, Spliterator)`                             | `java.util.stream.AbstractPipeline`           |
|  +9.5% |  +17.499 MiB |          0.5% |   184 MiB → 201 MiB |       362 → 397 | `wrapAndCopyInto(Sink, Spliterator)`                      | `java.util.stream.AbstractPipeline`           |
|  +9.7% |  +17.499 MiB |          0.5% |   180 MiB → 197 MiB |       354 → 389 | `evaluateSequential(PipelineHelper, Spliterator)`         | `java.util.stream.ReduceOps$ReduceOp`         |

##### Ours

|  Change |        Delta |             % |                Size |         Samples | Function                                                                                                               | Location                                                               |
| ------: | -----------: | ------------: | ------------------: | --------------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|     new |  +206.46 MiB |   0.0% → 0.5% |       0 B → 206 MiB |         0 → 407 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|   +0.5% | +184.372 MiB |         99.4% | 36.7 GiB → 36.9 GiB | 74,817 → 75,185 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| +240.7% | +129.999 MiB |   0.1% → 0.5% |    54 MiB → 184 MiB |       108 → 368 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011a2150` |
|   +1.8% | +119.999 MiB | 17.4% → 17.6% | 6.41 GiB → 6.52 GiB | 13,122 → 13,362 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   +1.3% | +106.499 MiB | 21.9% → 22.1% | 8.08 GiB → 8.18 GiB | 16,538 → 16,751 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  +42.1% |  +70.499 MiB |   0.4% → 0.6% |   167 MiB → 238 MiB |       335 → 476 | `computeClusterAverages()`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  +42.1% |  +70.499 MiB |   0.4% → 0.6% |   167 MiB → 238 MiB |       335 → 476 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  +42.8% |  +65.499 MiB |   0.4% → 0.6% |   153 MiB → 218 MiB |       306 → 437 | `average(List)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  +41.3% |  +29.499 MiB |   0.2% → 0.3% |  71.5 MiB → 101 MiB |       143 → 202 | `vectorSum()`                                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  +41.3% |  +29.499 MiB |   0.2% → 0.3% |  71.5 MiB → 101 MiB |       143 → 202 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  +37.3% |  +24.999 MiB |          0.2% |     67 MiB → 92 MiB |       134 → 184 | `add(double[], double[])`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  +37.3% |  +24.999 MiB |          0.2% |     67 MiB → 92 MiB |       134 → 184 | `combineResults(double[], double[])`                                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  +37.3% |  +24.999 MiB |          0.2% |     67 MiB → 92 MiB |       134 → 184 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  +19.6% |  +23.999 MiB |   0.3% → 0.4% |   122 MiB → 146 MiB |       245 → 293 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  +13.1% |  +19.999 MiB |   0.4% → 0.5% |   152 MiB → 172 MiB |       305 → 345 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  +10.6% |  +18.999 MiB |          0.5% |   179 MiB → 198 MiB |       352 → 390 | `setUpBeforeAll(BenchmarkContext)`                                                                                     | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|   +8.1% |  +15.499 MiB |          0.5% |   191 MiB → 206 MiB |       376 → 407 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000040111f1b8` |
|   +8.1% |  +15.499 MiB |          0.5% |   191 MiB → 206 MiB |       376 → 407 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |
|   +6.9% |  +14.499 MiB |          0.6% |   209 MiB → 223 MiB |       412 → 441 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                        |
|   +6.9% |  +14.499 MiB |          0.6% |   209 MiB → 223 MiB |       412 → 441 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                        |

#### Improvements

Functions with the largest decrease in bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |        Delta |             % |                Size |         Samples | Function                                                                                                               | Location                                                               |
| ------: | -----------: | ------------: | ------------------: | --------------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| removed |  -190.96 MiB |   0.5% → 0.0% |       191 MiB → 0 B |         376 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|   -2.4% | -190.126 MiB | 20.7% → 20.1% | 7.64 GiB → 7.45 GiB | 15,330 → 14,949 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -2.4% | -190.126 MiB | 20.7% → 20.1% | 7.64 GiB → 7.45 GiB | 15,330 → 14,949 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011a2bd0` |
|   -2.4% | -190.126 MiB | 20.7% → 20.1% | 7.64 GiB → 7.45 GiB | 15,330 → 14,949 | `exec()`                                                                                                               | `java.util.concurrent.ForkJoinTask$AdaptedCallable`                    |
|   -1.6% | -131.126 MiB | 21.1% → 20.6% | 7.77 GiB → 7.64 GiB | 15,603 → 15,340 | `invoke()`                                                                                                             | `java.util.concurrent.ForkJoinTask`                                    |
|  -61.3% | -105.999 MiB |   0.5% → 0.2% |    173 MiB → 67 MiB |       346 → 134 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011a2388` |
|   -0.9% |  -62.499 MiB | 19.1% → 18.9% |    7.06 GiB → 7 GiB | 14,463 → 14,338 | `<init>(Collection)`                                                                                                   | `java.util.ArrayList`                                                  |
|   -0.1% |  -31.626 MiB | 75.7% → 75.2% |            27.9 GiB | 56,894 → 56,830 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -0.1% |  -31.626 MiB | 75.7% → 75.2% |            27.9 GiB | 56,894 → 56,830 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011a7248` |
|   -0.1% |  -31.626 MiB | 76.4% → 75.9% | 28.2 GiB → 28.1 GiB | 57,397 → 57,333 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -0.1% |  -31.626 MiB | 76.4% → 75.9% | 28.2 GiB → 28.1 GiB | 57,397 → 57,333 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -0.1% |  -29.126 MiB | 75.7% → 75.2% |            27.9 GiB | 56,895 → 56,836 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -0.1% |  -29.126 MiB | 75.7% → 75.2% |            27.9 GiB | 56,895 → 56,836 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011a3b90` |
|   -0.1% |  -29.126 MiB | 75.7% → 75.2% |            27.9 GiB | 56,895 → 56,836 | `forEach(BiConsumer)`                                                                                                  | `java.util.HashMap`                                                    |
|   -0.1% |  -28.626 MiB | 75.7% → 75.2% |            27.9 GiB | 56,894 → 56,836 | `merge(Object, Object, BiFunction)`                                                                                    | `java.util.HashMap`                                                    |
|   -0.1% |  -28.626 MiB | 76.4% → 75.9% |            28.2 GiB | 57,402 → 57,344 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -0.8% |  -13.499 MiB |          4.5% | 1.67 GiB → 1.65 GiB |   3,416 → 3,389 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -5.0% |   -8.499 MiB |   0.5% → 0.4% |   171 MiB → 162 MiB |       342 → 325 | `putVal(int, Object, Object, boolean, boolean)`                                                                        | `java.util.HashMap`                                                    |
|  -59.1% |   -6.499 MiB |         <0.1% |    11 MiB → 4.5 MiB |          22 → 9 | `run(BenchmarkContext)`                                                                                                | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  -54.2% |   -6.499 MiB |         <0.1% |    12 MiB → 5.5 MiB |         24 → 11 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                              |

##### Standard library

|  Change |        Delta |             % |                Size |         Samples | Function                                        | Location                                                 |
| ------: | -----------: | ------------: | ------------------: | --------------: | ----------------------------------------------- | -------------------------------------------------------- |
|   -2.4% | -190.126 MiB | 20.7% → 20.1% | 7.64 GiB → 7.45 GiB | 15,330 → 14,949 | `exec()`                                        | `java.util.concurrent.ForkJoinTask$AdaptedCallable`      |
|   -1.6% | -131.126 MiB | 21.1% → 20.6% | 7.77 GiB → 7.64 GiB | 15,603 → 15,340 | `invoke()`                                      | `java.util.concurrent.ForkJoinTask`                      |
|   -0.9% |  -62.499 MiB | 19.1% → 18.9% |    7.06 GiB → 7 GiB | 14,463 → 14,338 | `<init>(Collection)`                            | `java.util.ArrayList`                                    |
|   -0.1% |  -29.126 MiB | 75.7% → 75.2% |            27.9 GiB | 56,895 → 56,836 | `forEach(BiConsumer)`                           | `java.util.HashMap`                                      |
|   -0.1% |  -28.626 MiB | 75.7% → 75.2% |            27.9 GiB | 56,894 → 56,836 | `merge(Object, Object, BiFunction)`             | `java.util.HashMap`                                      |
|   -5.0% |   -8.499 MiB |   0.5% → 0.4% |   171 MiB → 162 MiB |       342 → 325 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap`                                      |
| removed |   -5.961 MiB |  <0.1% → 0.0% |      5.96 MiB → 0 B |           6 → 0 | `accept(Object, Object)`                        | `java.util.stream.Collectors$$Lambda.0x00000070010708c0` |
|   -2.5% |   -4.499 MiB |          0.5% |   179 MiB → 175 MiB |       359 → 350 | `putMapEntries(Map, boolean)`                   | `java.util.HashMap`                                      |
|   -2.5% |   -4.499 MiB |          0.5% |   179 MiB → 175 MiB |       359 → 350 | `<init>(Map)`                                   | `java.util.HashMap`                                      |
|  -11.3% |   -3.999 MiB |          0.1% | 35.5 MiB → 31.5 MiB |         71 → 63 | `builder(long, IntFunction)`                    | `java.util.stream.Nodes`                                 |
|  -11.3% |   -3.999 MiB |          0.1% | 35.5 MiB → 31.5 MiB |         71 → 63 | `makeNodeBuilder(long, IntFunction)`            | `java.util.stream.ReferencePipeline`                     |
|  -24.0% |   -2.999 MiB |         <0.1% |  12.5 MiB → 9.5 MiB |         25 → 19 | `getBytes()`                                    | `jdk.internal.loader.Resource`                           |
|  -24.0% |   -2.999 MiB |         <0.1% |  12.5 MiB → 9.5 MiB |         25 → 19 | `getBytes()`                                    | `jdk.internal.loader.URLClassPath$JarLoader$2`           |
|  -29.4% |   -2.499 MiB |         <0.1% |     8.5 MiB → 6 MiB |         17 → 12 | `<clinit>()`                                    | `scala.Predef$`                                          |
|  -10.0% |   -1.999 MiB |  0.1% → <0.1% |     20 MiB → 18 MiB |         40 → 36 | `defineClass(String, Resource)`                 | `java.net.URLClassLoader`                                |
|  -16.0% |   -1.999 MiB |         <0.1% | 12.5 MiB → 10.5 MiB |         25 → 21 | `copyOf(byte[], int)`                           | `java.util.Arrays`                                       |
|  -66.7% |   -1.999 MiB |         <0.1% |       3 MiB → 1 MiB |           6 → 2 | `<clinit>()`                                    | `scala.reflect.ManifestFactory$`                         |
|   -7.5% |   -1.999 MiB |          0.1% | 26.5 MiB → 24.5 MiB |         53 → 49 | `intStream(Spliterator$OfInt, boolean)`         | `java.util.stream.StreamSupport`                         |
|  -75.0% |   -1.499 MiB |         <0.1% |     2 MiB → 512 KiB |           4 → 1 | `newString(byte[], int, int)`                   | `java.lang.StringLatin1`                                 |
|  -75.0% |   -1.499 MiB |         <0.1% |     2 MiB → 512 KiB |           4 → 1 | `substring(int, int)`                           | `java.lang.String`                                       |

##### Ours

|  Change |        Delta |             % |                Size |         Samples | Function                                                                                                               | Location                                                                  |
| ------: | -----------: | ------------: | ------------------: | --------------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| removed |  -190.96 MiB |   0.5% → 0.0% |       191 MiB → 0 B |         376 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                               |
|   -2.4% | -190.126 MiB | 20.7% → 20.1% | 7.64 GiB → 7.45 GiB | 15,330 → 14,949 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                               |
|   -2.4% | -190.126 MiB | 20.7% → 20.1% | 7.64 GiB → 7.45 GiB | 15,330 → 14,949 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011a2bd0`    |
|  -61.3% | -105.999 MiB |   0.5% → 0.2% |    173 MiB → 67 MiB |       346 → 134 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011a2388`    |
|   -0.1% |  -31.626 MiB | 75.7% → 75.2% |            27.9 GiB | 56,894 → 56,830 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                               |
|   -0.1% |  -31.626 MiB | 75.7% → 75.2% |            27.9 GiB | 56,894 → 56,830 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011a7248`    |
|   -0.1% |  -31.626 MiB | 76.4% → 75.9% | 28.2 GiB → 28.1 GiB | 57,397 → 57,333 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                |
|   -0.1% |  -31.626 MiB | 76.4% → 75.9% | 28.2 GiB → 28.1 GiB | 57,397 → 57,333 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                |
|   -0.1% |  -29.126 MiB | 75.7% → 75.2% |            27.9 GiB | 56,895 → 56,836 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                               |
|   -0.1% |  -29.126 MiB | 75.7% → 75.2% |            27.9 GiB | 56,895 → 56,836 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011a3b90`    |
|   -0.1% |  -28.626 MiB | 76.4% → 75.9% |            28.2 GiB | 57,402 → 57,344 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                               |
|   -0.8% |  -13.499 MiB |          4.5% | 1.67 GiB → 1.65 GiB |   3,416 → 3,389 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                |
|  -59.1% |   -6.499 MiB |         <0.1% |    11 MiB → 4.5 MiB |          22 → 9 | `run(BenchmarkContext)`                                                                                                | `org.renaissance.jdk.concurrent.FjKmeans`                                 |
|  -54.2% |   -6.499 MiB |         <0.1% |    12 MiB → 5.5 MiB |         24 → 11 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                                 |
| removed |   -1.999 MiB |  <0.1% → 0.0% |         2 MiB → 0 B |           4 → 0 | `$anonfun$1(int)`                                                                                                      | `org.renaissance.jdk.concurrent.FjKmeans`                                 |
| removed |   -1.499 MiB |  <0.1% → 0.0% |       1.5 MiB → 0 B |           3 → 0 | `withBenchmarkSpecification(String)`                                                                                   | `org.renaissance.harness.Config`                                          |
| removed |   -1.499 MiB |  <0.1% → 0.0% |       1.5 MiB → 0 B |           3 → 0 | `org$renaissance$harness$ConfigParser$$anon$1$$_$$lessinit$greater$$anonfun$25(String, Config)`                        | `org.renaissance.harness.ConfigParser`                                    |
| removed |   -1.499 MiB |  <0.1% → 0.0% |       1.5 MiB → 0 B |           3 → 0 | `apply(Object, Object)`                                                                                                | `org.renaissance.harness.ConfigParser$$anon$1$$Lambda.0x00000070010e7168` |
| removed |   -1.499 MiB |  <0.1% → 0.0% |       1.5 MiB → 0 B |           3 → 0 | `action$$anonfun$1(Function2, Object, Object)`                                                                         | `scopt.OptionDef`                                                         |
| removed |   -1.499 MiB |  <0.1% → 0.0% |       1.5 MiB → 0 B |           3 → 0 | `apply(Object, Object)`                                                                                                | `scopt.OptionDef$$Lambda.0x00000070010d97d8`                              |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |        Delta |            % |          Size | Samples | Callee                                                                                       | Location                                  |
| -----: | -----------: | -----------: | ------------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
|    new |  +203.46 MiB | 0.0% → 98.5% | 0 B → 203 MiB | 0 → 401 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
|    new |   +2.499 MiB |  0.0% → 1.2% | 0 B → 2.5 MiB |   0 → 5 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |
|    new | +511.999 KiB |  0.0% → 0.2% | 0 B → 512 KiB |   0 → 1 | `loadClass(String)`                                                                          | `java.lang.ClassLoader`                   |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

| Change |        Delta |             % |                Size |         Samples | Callee   | Location                                            |
| -----: | -----------: | ------------: | ------------------: | --------------: | -------- | --------------------------------------------------- |
|  -2.4% | -190.126 MiB | 20.8% → 20.2% | 7.64 GiB → 7.45 GiB | 15,330 → 14,949 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|  +0.5% | +184.372 MiB |        100.0% | 36.7 GiB → 36.9 GiB | 74,817 → 75,185 | `exec()` | `java.util.concurrent.RecursiveTask`                |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |        Delta |      % |                Size |         Samples | Callee     | Location                            |
| -----: | -----------: | -----: | ------------------: | --------------: | ---------- | ----------------------------------- |
|  +0.5% | +185.372 MiB | 100.0% | 36.7 GiB → 36.9 GiB | 74,820 → 75,190 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

| Change |        Delta |      % |                Size |         Samples | Callee                                               | Location                                      |
| -----: | -----------: | -----: | ------------------: | --------------: | ---------------------------------------------------- | --------------------------------------------- |
|  +0.5% | +185.372 MiB | 100.0% | 36.7 GiB → 36.9 GiB | 74,820 → 75,190 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change |        Delta |      % |                Size |         Samples | Callee                                   | Location                            |
| -----: | -----------: | -----: | ------------------: | --------------: | ---------------------------------------- | ----------------------------------- |
|  +0.5% | +185.372 MiB | 100.0% | 36.7 GiB → 36.9 GiB | 74,820 → 75,190 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

| Change |        Delta |      % |                Size |         Samples | Callee                              | Location                            |
| -----: | -----------: | -----: | ------------------: | --------------: | ----------------------------------- | ----------------------------------- |
|  +0.5% | +185.372 MiB | 100.0% | 36.7 GiB → 36.9 GiB | 74,820 → 75,190 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change |        Delta |             % |                Size |         Samples | Callee                           | Location                                                   |
| -----: | -----------: | ------------: | ------------------: | --------------: | -------------------------------- | ---------------------------------------------------------- |
|  +0.4% | +116.999 MiB |         79.8% | 29.3 GiB → 29.4 GiB | 59,990 → 60,224 | `join()`                         | `java.util.concurrent.ForkJoinTask`                        |
|  +1.3% | +106.499 MiB | 22.0% → 22.2% | 8.08 GiB → 8.18 GiB | 16,538 → 16,751 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +42.1% |  +70.499 MiB |   0.4% → 0.6% |   167 MiB → 238 MiB |       335 → 476 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -0.1% |  -31.626 MiB | 76.8% → 76.4% | 28.2 GiB → 28.1 GiB | 57,397 → 57,333 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +41.3% |  +29.499 MiB |   0.2% → 0.3% |  71.5 MiB → 101 MiB |       143 → 202 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change |        Delta |      % |                Size |         Samples | Callee      | Location                                               |
| -----: | -----------: | -----: | ------------------: | --------------: | ----------- | ------------------------------------------------------ |
|  +0.5% | +184.372 MiB | 100.0% | 36.7 GiB → 36.9 GiB | 74,817 → 75,185 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011a2150`)

|  Change |        Delta |             % |          Size | Samples | Callee                                           | Location                                    |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------------------------ | ------------------------------------------- |
|     new | +183.999 MiB | 0.0% → 100.0% | 0 B → 184 MiB | 0 → 368 | `lambda$generateData$5(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |
| removed |  -53.999 MiB | 100.0% → 0.0% |  54 MiB → 0 B | 108 → 0 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |             % |                Size |         Samples | Callee                              | Location              |
| -----: | -----------: | ------------: | ------------------: | --------------: | ----------------------------------- | --------------------- |
|  +1.6% | +100.499 MiB | 93.9% → 93.7% | 6.02 GiB → 6.11 GiB | 12,319 → 12,520 | `add(Object)`                       | `java.util.ArrayList` |
|  +7.2% |  +21.499 MiB |   4.5% → 4.8% |   297 MiB → 319 MiB |       595 → 638 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`   |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change |        Delta |             % |                Size |         Samples | Callee                                                    | Location                                      |
| -----: | -----------: | ------------: | ------------------: | --------------: | --------------------------------------------------------- | --------------------------------------------- |
|  +0.3% | +102.499 MiB | 99.0% → 98.9% |   29 GiB → 29.1 GiB | 59,368 → 59,573 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  +0.7% |  +35.999 MiB | 18.2% → 18.3% | 5.33 GiB → 5.37 GiB | 10,926 → 10,998 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change |        Delta |      % |                Size |         Samples | Callee                 | Location                            |
| -----: | -----------: | -----: | ------------------: | --------------: | ---------------------- | ----------------------------------- |
|  +0.4% | +116.999 MiB | 100.0% | 29.3 GiB → 29.4 GiB | 59,990 → 60,224 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |             % |                Size |         Samples | Callee                   | Location                                                   |
| -----: | -----------: | ------------: | ------------------: | --------------: | ------------------------ | ---------------------------------------------------------- |
|  +1.8% | +119.999 MiB | 79.3% → 79.8% | 6.41 GiB → 6.52 GiB | 13,122 → 13,362 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +1.3% | +106.499 MiB |        100.0% | 8.08 GiB → 8.18 GiB | 16,538 → 16,751 | `computeDirectly()`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -0.8% |  -13.499 MiB | 20.7% → 20.2% | 1.67 GiB → 1.65 GiB |   3,416 → 3,389 | `findNearestCentroid()`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |        Delta |      % |              Size |         Samples | Callee     | Location                            |
| -----: | -----------: | -----: | ----------------: | --------------: | ---------- | ----------------------------------- |
|  +0.3% | +102.499 MiB | 100.0% | 29 GiB → 29.1 GiB | 59,368 → 59,573 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `grow()` (`java.util.ArrayList`)

| Change |       Delta |      % |                Size |         Samples | Callee      | Location              |
| -----: | ----------: | -----: | ------------------: | --------------: | ----------- | --------------------- |
|  +1.6% | +99.999 MiB | 100.0% | 6.02 GiB → 6.12 GiB | 12,326 → 12,526 | `grow(int)` | `java.util.ArrayList` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

| Change |       Delta |      % |                Size |         Samples | Callee   | Location              |
| -----: | ----------: | -----: | ------------------: | --------------: | -------- | --------------------- |
|  +1.6% | +99.999 MiB | 100.0% | 6.02 GiB → 6.12 GiB | 12,326 → 12,526 | `grow()` | `java.util.ArrayList` |

##### `add(Object)` (`java.util.ArrayList`)

| Change |       Delta |      % |                Size |         Samples | Callee                       | Location              |
| -----: | ----------: | -----: | ------------------: | --------------: | ---------------------------- | --------------------- |
|  +1.6% | +99.999 MiB | 100.0% | 6.02 GiB → 6.12 GiB | 12,326 → 12,526 | `add(Object, Object[], int)` | `java.util.ArrayList` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |      Delta |            % |              Size | Samples | Callee                         | Location           |
| -----: | ---------: | -----------: | ----------------: | ------: | ------------------------------ | ------------------ |
| +32.4% | +5.499 MiB | <0.1% → 0.1% | 17 MiB → 22.5 MiB | 28 → 39 | `copyOf(Object[], int, Class)` | `java.util.Arrays` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |       Delta |     % |     Size |         Samples | Callee                  | Location           |
| -----: | ----------: | ----: | -------: | --------------: | ----------------------- | ------------------ |
|  +0.3% | +68.872 MiB | 98.8% | 19.3 GiB | 39,125 → 39,262 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |        Delta |             % |              Size |   Samples | Callee                | Location                                               |
| -----: | -----------: | ------------: | ----------------: | --------: | --------------------- | ------------------------------------------------------ |
| +42.8% |  +65.499 MiB | 91.3% → 91.8% | 153 MiB → 218 MiB | 306 → 437 | `average(List)`       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| +64.3% |   +4.499 MiB |   4.2% → 4.8% |  7 MiB → 11.5 MiB |   14 → 23 | `boxed(double[])`     | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| +20.0% | +511.999 KiB |   1.5% → 1.3% |   2.5 MiB → 3 MiB |     5 → 6 | `put(Object, Object)` | `java.util.HashMap`                                    |

##### `addAll(Collection)` (`java.util.ArrayList`)

| Change |       Delta |             % |                Size |         Samples | Callee      | Location              |
| -----: | ----------: | ------------: | ------------------: | --------------: | ----------- | --------------------- |
|  +0.9% | +66.999 MiB | 35.1% → 35.4% | 7.29 GiB → 7.36 GiB | 14,937 → 15,071 | `toArray()` | `java.util.ArrayList` |
|  -0.2% | -28.626 MiB | 64.9% → 64.6% | 13.5 GiB → 13.4 GiB | 27,272 → 27,214 | `grow(int)` | `java.util.ArrayList` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

| Change |       Delta |      % |                Size |         Samples | Callee     | Location                            |
| -----: | ----------: | -----: | ------------------: | --------------: | ---------- | ----------------------------------- |
|  +0.7% | +35.999 MiB | 100.0% | 5.33 GiB → 5.37 GiB | 10,926 → 10,998 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

| Change |       Delta |             % |              Size |   Samples | Callee                                       | Location                                                                              |
| -----: | ----------: | ------------: | ----------------: | --------: | -------------------------------------------- | ------------------------------------------------------------------------------------- |
| +21.1% | +11.999 MiB | 19.2% → 21.6% |   57 MiB → 69 MiB | 114 → 138 | `resize()`                                   | `java.util.HashMap`                                                                   |
|  +5.2% |  +6.999 MiB | 45.4% → 44.5% | 135 MiB → 142 MiB | 270 → 284 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap`                                                                   |
|  +2.4% |  +2.499 MiB | 35.5% → 33.9% | 105 MiB → 108 MiB | 211 → 216 | `apply(Object)`                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000004011a3940` |

##### `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

|  Change |          Delta |             % |              Size |   Samples | Callee                       | Location                                  |
| ------: | -------------: | ------------: | ----------------: | --------: | ---------------------------- | ----------------------------------------- |
|   +6.1% |    +10.999 MiB | 97.8% → 94.8% | 179 MiB → 190 MiB | 352 → 374 | `forEachRemaining(Consumer)` | `java.util.Spliterator$OfInt`             |
|     new |     +7.499 MiB |   0.0% → 3.7% |     0 B → 7.5 MiB |    0 → 15 | `forEachRemaining(Consumer)` | `java.util.Spliterators$ArraySpliterator` |
| removed | -1,023.998 KiB |   0.5% → 0.0% |       1 MiB → 0 B |     2 → 0 | `forEachRemaining(Consumer)` | `java.util.HashMap$EntrySpliterator`      |

##### `wrapAndCopyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

| Change |       Delta |     % |              Size |   Samples | Callee                        | Location                            |
| -----: | ----------: | ----: | ----------------: | --------: | ----------------------------- | ----------------------------------- |
|  +9.6% | +17.499 MiB | 99.5% | 183 MiB → 200 MiB | 360 → 395 | `copyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`)

| Change |       Delta |      % |              Size |   Samples | Callee                               | Location                            |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------------------------ | ----------------------------------- |
|  +9.7% | +17.499 MiB | 100.0% | 180 MiB → 197 MiB | 354 → 389 | `wrapAndCopyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |       Delta |      % |              Size |   Samples | Callee                     | Location                                               |
| -----: | ----------: | -----: | ----------------: | --------: | -------------------------- | ------------------------------------------------------ |
| +42.1% | +70.499 MiB | 100.0% | 167 MiB → 238 MiB | 335 → 476 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| +42.1% | +70.499 MiB | 100.0% | 167 MiB → 238 MiB | 335 → 476 | `computeDirectly()`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change |       Delta |             % |              Size |   Samples | Callee               | Location                                               |
| ------: | ----------: | ------------: | ----------------: | --------: | -------------------- | ------------------------------------------------------ |
|  +41.8% | +63.499 MiB | 99.3% → 98.6% | 152 MiB → 215 MiB | 304 → 431 | `invoke()`           | `java.util.concurrent.ForkJoinTask`                    |
| +400.0% |  +1.999 MiB |   0.3% → 1.1% | 512 KiB → 2.5 MiB |     1 → 5 | `div(double[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |               Size |   Samples | Callee              | Location                                                  |
| -----: | ----------: | -----: | -----------------: | --------: | ------------------- | --------------------------------------------------------- |
| +41.3% | +29.499 MiB | 100.0% | 71.5 MiB → 101 MiB | 143 → 202 | `vectorSum()`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| +41.3% | +29.499 MiB | 100.0% | 71.5 MiB → 101 MiB | 143 → 202 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `combineResults(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |            Size |   Samples | Callee                    | Location                                                  |
| -----: | ----------: | -----: | --------------: | --------: | ------------------------- | --------------------------------------------------------- |
| +37.3% | +24.999 MiB | 100.0% | 67 MiB → 92 MiB | 134 → 184 | `add(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |            Size |   Samples | Callee                               | Location                                                  |
| -----: | ----------: | -----: | --------------: | --------: | ------------------------------------ | --------------------------------------------------------- |
| +37.3% | +24.999 MiB | 100.0% | 67 MiB → 92 MiB | 134 → 184 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |        Delta |              % |              Size |   Samples | Callee                        | Location                                                           |
| -----: | -----------: | -------------: | ----------------: | --------: | ----------------------------- | ------------------------------------------------------------------ |
|  +6.1% |  +10.999 MiB | 100.0% → 96.0% | 179 MiB → 190 MiB | 352 → 374 | `generateData(int, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                        |
|    new |   +7.499 MiB |    0.0% → 3.8% |     0 B → 7.5 MiB |    0 → 15 | `toCsvRows(Function)`         | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter` |
|    new | +511.999 KiB |    0.0% → 0.3% |     0 B → 512 KiB |     0 → 1 | `asScala()`                   | `scala.collection.convert.AsScalaExtensions$ListHasAsScala`        |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000040111f1b8`)

|  Change |       Delta |             % |          Size | Samples | Callee                                                                                                                 | Location                                    |
| ------: | ----------: | ------------: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
|     new | +206.46 MiB | 0.0% → 100.0% | 0 B → 206 MiB | 0 → 407 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |
| removed | -190.96 MiB | 100.0% → 0.0% | 191 MiB → 0 B | 376 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |       Delta |      % |              Size |   Samples | Callee               | Location                          |
| -----: | ----------: | -----: | ----------------: | --------: | -------------------- | --------------------------------- |
|  +8.1% | +15.499 MiB | 100.0% | 191 MiB → 206 MiB | 376 → 407 | `foreach(Function1)` | `scala.collection.immutable.List` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

|  Change |        Delta |             % |              Size |   Samples | Callee                                                      | Location                            |
| ------: | -----------: | ------------: | ----------------: | --------: | ----------------------------------------------------------- | ----------------------------------- |
|   +6.7% |  +13.999 MiB | 99.8% → 99.6% | 208 MiB → 222 MiB | 411 → 439 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher`     |
| +100.0% | +511.999 KiB |   0.2% → 0.4% |   512 KiB → 1 MiB |     1 → 2 | `create(Path, URI)`                                         | `org.renaissance.core.ModuleLoader` |

##### `main(String[])` (`org.renaissance.core.Launcher`)

| Change |       Delta |      % |              Size |   Samples | Callee                                 | Location                        |
| -----: | ----------: | -----: | ----------------: | --------: | -------------------------------------- | ------------------------------- |
|  +6.9% | +14.499 MiB | 100.0% | 209 MiB → 223 MiB | 412 → 441 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |       Delta |             % |          Size | Samples | Callee               | Location                                  |
| ------: | ----------: | ------------: | ------------: | ------: | -------------------- | ----------------------------------------- |
| removed | -190.96 MiB | 100.0% → 0.0% | 191 MiB → 0 B | 376 → 0 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |            % |                Size |         Samples | Callee                    | Location                                               |
| -----: | -----------: | -----------: | ------------------: | --------------: | ------------------------- | ------------------------------------------------------ |
|  -2.4% | -191.126 MiB |       100.0% | 7.64 GiB → 7.45 GiB | 15,327 → 14,944 | `invoke()`                | `java.util.concurrent.ForkJoinTask`                    |
|    new | +511.999 KiB | 0.0% → <0.1% |       0 B → 512 KiB |           0 → 1 | `<init>(JavaKMeans, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011a2bd0`)

| Change |        Delta |      % |                Size |         Samples | Callee                         | Location                                    |
| -----: | -----------: | -----: | ------------------: | --------------: | ------------------------------ | ------------------------------------------- |
|  -2.4% | -190.126 MiB | 100.0% | 7.64 GiB → 7.45 GiB | 15,330 → 14,949 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

| Change |        Delta |      % |                Size |         Samples | Callee   | Location                                                               |
| -----: | -----------: | -----: | ------------------: | --------------: | -------- | ---------------------------------------------------------------------- |
|  -2.4% | -190.126 MiB | 100.0% | 7.64 GiB → 7.45 GiB | 15,330 → 14,949 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011a2bd0` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

| Change |        Delta |      % |                Size |         Samples | Callee     | Location                            |
| -----: | -----------: | -----: | ------------------: | --------------: | ---------- | ----------------------------------- |
|  -1.6% | -131.126 MiB | 100.0% | 7.77 GiB → 7.64 GiB | 15,603 → 15,340 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011a2388`)

|  Change |        Delta |             % |          Size | Samples | Callee                                           | Location                                    |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------------------------ | ------------------------------------------- |
| removed | -172.999 MiB | 100.0% → 0.0% | 173 MiB → 0 B | 346 → 0 | `lambda$generateData$5(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |
|     new |  +66.999 MiB | 0.0% → 100.0% |  0 B → 67 MiB | 0 → 134 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `<init>(Collection)` (`java.util.ArrayList`)

| Change |       Delta |      % |             Size |         Samples | Callee      | Location              |
| -----: | ----------: | -----: | ---------------: | --------------: | ----------- | --------------------- |
|  -0.9% | -62.499 MiB | 100.0% | 7.06 GiB → 7 GiB | 14,463 → 14,338 | `toArray()` | `java.util.ArrayList` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |       Delta |             % |             Size |         Samples | Callee               | Location              |
| -----: | ----------: | ------------: | ---------------: | --------------: | -------------------- | --------------------- |
|  -0.9% | -62.499 MiB | 25.3% → 25.1% | 7.06 GiB → 7 GiB | 14,463 → 14,338 | `<init>(Collection)` | `java.util.ArrayList` |
|  +0.2% | +38.372 MiB | 74.3% → 74.5% |         20.8 GiB | 42,209 → 42,285 | `addAll(Collection)` | `java.util.ArrayList` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011a7248`)

| Change |       Delta |      % |     Size |         Samples | Callee                       | Location                                    |
| -----: | ----------: | -----: | -------: | --------------: | ---------------------------- | ------------------------------------------- |
|  -0.1% | -31.626 MiB | 100.0% | 27.9 GiB | 56,894 → 56,830 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |                Size |         Samples | Callee            | Location                                    |
| -----: | ----------: | -----: | ------------------: | --------------: | ----------------- | ------------------------------------------- |
|  -0.1% | -31.626 MiB | 100.0% | 28.2 GiB → 28.1 GiB | 57,397 → 57,333 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |                Size |         Samples | Callee                     | Location                                                   |
| -----: | ----------: | -----: | ------------------: | --------------: | -------------------------- | ---------------------------------------------------------- |
|  -0.1% | -31.626 MiB | 100.0% | 28.2 GiB → 28.1 GiB | 57,397 → 57,333 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |        Delta |            % |          Size |         Samples | Callee                                                           | Location                               |
| ------: | -----------: | -----------: | ------------: | --------------: | ---------------------------------------------------------------- | -------------------------------------- |
|   -0.1% |  -28.626 MiB |       100.0% |      27.9 GiB | 56,894 → 56,836 | `merge(Object, Object, BiFunction)`                              | `java.util.HashMap`                    |
| removed | -511.999 KiB | <0.1% → 0.0% | 512 KiB → 0 B |           1 → 0 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011a3b90`)

| Change |       Delta |      % |     Size |         Samples | Callee                              | Location                                    |
| -----: | ----------: | -----: | -------: | --------------: | ----------------------------------- | ------------------------------------------- |
|  -0.1% | -29.126 MiB | 100.0% | 27.9 GiB | 56,895 → 56,836 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

| Change |       Delta |      % |     Size |         Samples | Callee                   | Location                                                               |
| -----: | ----------: | -----: | -------: | --------------: | ------------------------ | ---------------------------------------------------------------------- |
|  -0.1% | -29.126 MiB | 100.0% | 27.9 GiB | 56,895 → 56,836 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011a3b90` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

| Change |          Delta |            % |        Size |         Samples | Callee                                       | Location                                                               |
| -----: | -------------: | -----------: | ----------: | --------------: | -------------------------------------------- | ---------------------------------------------------------------------- |
|  -0.1% |    -31.626 MiB |       100.0% |    27.9 GiB | 56,894 → 56,830 | `apply(Object, Object)`                      | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011a7248` |
|    new |     +1.999 MiB | 0.0% → <0.1% | 0 B → 2 MiB |           0 → 4 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap`                                                    |
|    new | +1,023.998 KiB | 0.0% → <0.1% | 0 B → 1 MiB |           0 → 2 | `resize()`                                   | `java.util.HashMap`                                                    |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |            % |              Size |         Samples | Callee                                                        | Location                               |
| -----: | -----------: | -----------: | ----------------: | --------------: | ------------------------------------------------------------- | -------------------------------------- |
|  -0.1% |  -29.126 MiB |        99.1% |          27.9 GiB | 56,895 → 56,836 | `forEach(BiConsumer)`                                         | `java.util.HashMap`                    |
|  -2.5% |   -4.499 MiB |         0.6% | 179 MiB → 175 MiB |       359 → 350 | `<init>(Map)`                                                 | `java.util.HashMap`                    |
|    new | +511.999 KiB | 0.0% → <0.1% |     0 B → 512 KiB |           0 → 1 | `linkMethodHandleConstant(Class, int, Class, String, Object)` | `java.lang.invoke.MethodHandleNatives` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

| Change |      Delta |             % |              Size |   Samples | Callee                                       | Location            |
| -----: | ---------: | ------------: | ----------------: | --------: | -------------------------------------------- | ------------------- |
|  -3.9% | -4.999 MiB | 74.3% → 75.1% | 127 MiB → 122 MiB | 254 → 244 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap` |
|  -8.0% | -3.499 MiB | 25.7% → 24.9% | 44 MiB → 40.5 MiB |   88 → 81 | `resize()`                                   | `java.util.HashMap` |

##### `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change |      Delta |            % |          Size | Samples | Callee              | Location                |
| ------: | ---------: | -----------: | ------------: | ------: | ------------------- | ----------------------- |
| removed | -4.499 MiB | 40.9% → 0.0% | 4.5 MiB → 0 B |   9 → 0 | `<clinit>()`        | `scala.Predef$`         |
| removed | -1.999 MiB | 18.2% → 0.0% |   2 MiB → 0 B |   4 → 0 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`)

| Change |        Delta |             % |             Size | Samples | Callee                                            | Location                                                             |
| -----: | -----------: | ------------: | ---------------: | ------: | ------------------------------------------------- | -------------------------------------------------------------------- |
| -59.1% |   -6.499 MiB | 91.7% → 81.8% | 11 MiB → 4.5 MiB |  22 → 9 | `run(BenchmarkContext)`                           | `org.renaissance.jdk.concurrent.FjKmeans`                            |
| -50.0% | -511.999 KiB |   8.3% → 9.1% |  1 MiB → 512 KiB |   2 → 1 | `notifyAfterOperationSetUp(String, int, boolean)` | `org.renaissance.harness.EventDispatcher`                            |
|    new | +511.999 KiB |   0.0% → 9.1% |    0 B → 512 KiB |   0 → 1 | `validate()`                                      | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000004011a8bc0` |

##### `accept(Object, Object)` (`java.util.stream.Collectors$$Lambda.0x00000070010708c0`)

|  Change |      Delta |             % |           Size | Samples | Callee        | Location              |
| ------: | ---------: | ------------: | -------------: | ------: | ------------- | --------------------- |
| removed | -5.961 MiB | 100.0% → 0.0% | 5.96 MiB → 0 B |   6 → 0 | `add(Object)` | `java.util.ArrayList` |

##### `putMapEntries(Map, boolean)` (`java.util.HashMap`)

| Change |      Delta |             % |              Size |   Samples | Callee                                          | Location            |
| -----: | ---------: | ------------: | ----------------: | --------: | ----------------------------------------------- | ------------------- |
|  -5.6% | -9.499 MiB | 93.9% → 90.9% | 168 MiB → 159 MiB | 337 → 318 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |
| +45.5% | +4.999 MiB |   6.1% → 9.1% |   11 MiB → 16 MiB |   22 → 32 | `entrySet()`                                    | `java.util.HashMap` |

##### `<init>(Map)` (`java.util.HashMap`)

| Change |      Delta |      % |              Size |   Samples | Callee                        | Location            |
| -----: | ---------: | -----: | ----------------: | --------: | ----------------------------- | ------------------- |
|  -2.5% | -4.499 MiB | 100.0% | 179 MiB → 175 MiB | 359 → 350 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `builder(long, IntFunction)` (`java.util.stream.Nodes`)

| Change |        Delta |             % |              Size | Samples | Callee                      | Location                                  |
| -----: | -----------: | ------------: | ----------------: | ------: | --------------------------- | ----------------------------------------- |
|  +2.6% | +511.999 KiB | 54.9% → 63.5% | 19.5 MiB → 20 MiB | 39 → 40 | `<init>(long, IntFunction)` | `java.util.stream.Nodes$FixedNodeBuilder` |

##### `makeNodeBuilder(long, IntFunction)` (`java.util.stream.ReferencePipeline`)

| Change |      Delta |      % |                Size | Samples | Callee                       | Location                 |
| -----: | ---------: | -----: | ------------------: | ------: | ---------------------------- | ------------------------ |
| -11.3% | -3.999 MiB | 100.0% | 35.5 MiB → 31.5 MiB | 71 → 63 | `builder(long, IntFunction)` | `java.util.stream.Nodes` |

##### `getBytes()` (`jdk.internal.loader.Resource`)

| Change |      Delta |      % |               Size | Samples | Callee                | Location           |
| -----: | ---------: | -----: | -----------------: | ------: | --------------------- | ------------------ |
| -24.0% | -2.999 MiB | 100.0% | 12.5 MiB → 9.5 MiB | 25 → 19 | `copyOf(byte[], int)` | `java.util.Arrays` |

##### `getBytes()` (`jdk.internal.loader.URLClassPath$JarLoader$2`)

| Change |      Delta |      % |               Size | Samples | Callee       | Location                       |
| -----: | ---------: | -----: | -----------------: | ------: | ------------ | ------------------------------ |
| -24.0% | -2.999 MiB | 100.0% | 12.5 MiB → 9.5 MiB | 25 → 19 | `getBytes()` | `jdk.internal.loader.Resource` |

##### `<clinit>()` (`scala.Predef$`)

| Change |        Delta |             % |            Size | Samples | Callee              | Location                  |
| -----: | -----------: | ------------: | --------------: | ------: | ------------------- | ------------------------- |
| -50.0% |   -1.499 MiB | 35.3% → 25.0% | 3 MiB → 1.5 MiB |   6 → 3 | `<clinit>()`        | `scala.reflect.Manifest$` |
| -11.1% | -511.999 KiB | 52.9% → 66.7% | 4.5 MiB → 4 MiB |   9 → 8 | `<clinit>()`        | `scala.package$`          |
| -50.0% | -511.999 KiB |  11.8% → 8.3% | 1 MiB → 512 KiB |   2 → 1 | `loadClass(String)` | `java.lang.ClassLoader`   |

##### `defineClass(String, Resource)` (`java.net.URLClassLoader`)

| Change |          Delta |             % |              Size | Samples | Callee                                              | Location                                       |
| -----: | -------------: | ------------: | ----------------: | ------: | --------------------------------------------------- | ---------------------------------------------- |
| -28.0% |     -3.499 MiB | 62.5% → 50.0% |  12.5 MiB → 9 MiB | 25 → 18 | `getBytes()`                                        | `jdk.internal.loader.URLClassPath$JarLoader$2` |
| +66.7% | +1,023.998 KiB |  7.5% → 13.9% | 1.5 MiB → 2.5 MiB |   3 → 5 | `getManifest()`                                     | `jdk.internal.loader.URLClassPath$JarLoader$2` |
| +20.0% | +1,023.998 KiB | 25.0% → 33.3% |     5 MiB → 6 MiB | 10 → 12 | `defineClass(String, byte[], int, int, CodeSource)` | `java.security.SecureClassLoader`              |
|    new | +1,023.998 KiB |   0.0% → 5.6% |       0 B → 1 MiB |   0 → 2 | `getAndVerifyPackage(String, Manifest, URL)`        | `java.net.URLClassLoader`                      |
| -11.1% |   -511.999 KiB | 22.5% → 22.2% |   4.5 MiB → 4 MiB |   9 → 8 | `getByteBuffer()`                                   | `jdk.internal.loader.Resource`                 |

##### `<clinit>()` (`scala.reflect.ManifestFactory$`)

| Change |      Delta |      % |          Size | Samples | Callee              | Location                |
| -----: | ---------: | -----: | ------------: | ------: | ------------------- | ----------------------- |
| -66.7% | -1.999 MiB | 100.0% | 3 MiB → 1 MiB |   6 → 2 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `newString(byte[], int, int)` (`java.lang.StringLatin1`)

| Change |          Delta |              % |              Size | Samples | Callee                          | Location           |
| -----: | -------------: | -------------: | ----------------: | ------: | ------------------------------- | ------------------ |
| -66.7% | -1,023.998 KiB | 75.0% → 100.0% | 1.5 MiB → 512 KiB |   3 → 1 | `copyOfRange(byte[], int, int)` | `java.util.Arrays` |

##### `substring(int, int)` (`java.lang.String`)

| Change |      Delta |      % |            Size | Samples | Callee                        | Location                 |
| -----: | ---------: | -----: | --------------: | ------: | ----------------------------- | ------------------------ |
| -75.0% | -1.499 MiB | 100.0% | 2 MiB → 512 KiB |   4 → 1 | `newString(byte[], int, int)` | `java.lang.StringLatin1` |

##### `$anonfun$1(int)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change |      Delta |             % |        Size | Samples | Callee                | Location                                    |
| ------: | ---------: | ------------: | ----------: | ------: | --------------------- | ------------------------------------------- |
| removed | -1.999 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   4 → 0 | `run(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `withBenchmarkSpecification(String)` (`org.renaissance.harness.Config`)

|  Change |          Delta |            % |          Size | Samples | Callee              | Location                     |
| ------: | -------------: | -----------: | ------------: | ------: | ------------------- | ---------------------------- |
| removed | -1,023.998 KiB | 66.7% → 0.0% |   1 MiB → 0 B |   2 → 0 | `loadClass(String)` | `java.lang.ClassLoader`      |
| removed |   -511.999 KiB | 33.3% → 0.0% | 512 KiB → 0 B |   1 → 0 | `<clinit>()`        | `scala.collection.ArrayOps$` |

##### `org$renaissance$harness$ConfigParser$$anon$1$$_$$lessinit$greater$$anonfun$25(String, Config)` (`org.renaissance.harness.ConfigParser`)

|  Change |      Delta |             % |          Size | Samples | Callee                               | Location                         |
| ------: | ---------: | ------------: | ------------: | ------: | ------------------------------------ | -------------------------------- |
| removed | -1.499 MiB | 100.0% → 0.0% | 1.5 MiB → 0 B |   3 → 0 | `withBenchmarkSpecification(String)` | `org.renaissance.harness.Config` |

##### `apply(Object, Object)` (`org.renaissance.harness.ConfigParser$$anon$1$$Lambda.0x00000070010e7168`)

|  Change |      Delta |             % |          Size | Samples | Callee                                                                                          | Location                               |
| ------: | ---------: | ------------: | ------------: | ------: | ----------------------------------------------------------------------------------------------- | -------------------------------------- |
| removed | -1.499 MiB | 100.0% → 0.0% | 1.5 MiB → 0 B |   3 → 0 | `org$renaissance$harness$ConfigParser$$anon$1$$_$$lessinit$greater$$anonfun$25(String, Config)` | `org.renaissance.harness.ConfigParser` |

##### `action$$anonfun$1(Function2, Object, Object)` (`scopt.OptionDef`)

|  Change |      Delta |             % |          Size | Samples | Callee                  | Location                                                                  |
| ------: | ---------: | ------------: | ------------: | ------: | ----------------------- | ------------------------------------------------------------------------- |
| removed | -1.499 MiB | 100.0% → 0.0% | 1.5 MiB → 0 B |   3 → 0 | `apply(Object, Object)` | `org.renaissance.harness.ConfigParser$$anon$1$$Lambda.0x00000070010e7168` |

##### `apply(Object, Object)` (`scopt.OptionDef$$Lambda.0x00000070010d97d8`)

|  Change |      Delta |             % |          Size | Samples | Callee                                         | Location          |
| ------: | ---------: | ------------: | ------------: | ------: | ---------------------------------------------- | ----------------- |
| removed | -1.499 MiB | 100.0% → 0.0% | 1.5 MiB → 0 B |   3 → 0 | `action$$anonfun$1(Function2, Object, Object)` | `scopt.OptionDef` |

# Lock contention profile diff

Blocked 1.6ms (+0.04ms, +2.8%) over 10 contentions → 16 contentions (160.3µs → 103.0µs per contention).

| Category         | Change |   Delta |              % |        Time | Contentions |
| ---------------- | -----: | ------: | -------------: | ----------: | ----------: |
| Standard library |  -1.2% | -0.02ms | 100.0% → 96.2% |       1.6ms |     10 → 15 |
| Ours             |    new | +0.06ms |    0.0% → 3.8% | 0ms → 0.1ms |       0 → 1 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time blocked within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

| Change |   Delta |            % |            Time | Contentions | Function                                                                                             | Location                                               |
| -----: | ------: | -----------: | --------------: | ----------: | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
|    new | +0.26ms | 0.0% → 16.0% |     0ms → 0.3ms |       0 → 2 | `doubleStream(Spliterator$OfDouble, boolean)`                                                        | `java.util.stream.StreamSupport`                       |
|    new | +0.10ms |  0.0% → 6.3% |     0ms → 0.1ms |       0 → 1 | `mapToObj(DoubleFunction, int)`                                                                      | `java.util.stream.DoublePipeline`                      |
|    new | +0.06ms |  0.0% → 3.8% |     0ms → 0.1ms |       0 → 1 | `average(List)`                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|    new | +0.05ms |  0.0% → 3.3% |     0ms → 0.1ms |       0 → 1 | `opWrapSink(int, Sink)`                                                                              | `java.util.stream.DoublePipeline$1`                    |
|    new | +0.05ms |  0.0% → 2.9% |    0ms → 48.0µs |       0 → 1 | `spliterator(double[], int, int, int)`                                                               | `java.util.Spliterators`                               |
|    new | +0.03ms |  0.0% → 1.8% |    0ms → 29.3µs |       0 → 1 | `defineClass0(ClassLoader, Class, String, byte[], int, int, ProtectionDomain, boolean, int, Object)` | `java.lang.ClassLoader`                                |
|    new | +0.02ms |  0.0% → 1.5% |    0ms → 24.5µs |       0 → 1 | `getDeclaredMethods0(boolean)`                                                                       | `java.lang.Class`                                      |
|  +2.9% | +0.67µs |         1.4% | 23.2µs → 23.8µs |           1 | `<init>(UnixPath, long, DirectoryStream$Filter)`                                                     | `sun.nio.fs.UnixDirectoryStream`                       |

##### Standard library

| Change |   Delta |            % |            Time | Contentions | Function                                                                                             | Location                            |
| -----: | ------: | -----------: | --------------: | ----------: | ---------------------------------------------------------------------------------------------------- | ----------------------------------- |
|    new | +0.26ms | 0.0% → 16.0% |     0ms → 0.3ms |       0 → 2 | `doubleStream(Spliterator$OfDouble, boolean)`                                                        | `java.util.stream.StreamSupport`    |
|    new | +0.10ms |  0.0% → 6.3% |     0ms → 0.1ms |       0 → 1 | `mapToObj(DoubleFunction, int)`                                                                      | `java.util.stream.DoublePipeline`   |
|    new | +0.05ms |  0.0% → 3.3% |     0ms → 0.1ms |       0 → 1 | `opWrapSink(int, Sink)`                                                                              | `java.util.stream.DoublePipeline$1` |
|    new | +0.05ms |  0.0% → 2.9% |    0ms → 48.0µs |       0 → 1 | `spliterator(double[], int, int, int)`                                                               | `java.util.Spliterators`            |
|    new | +0.03ms |  0.0% → 1.8% |    0ms → 29.3µs |       0 → 1 | `defineClass0(ClassLoader, Class, String, byte[], int, int, ProtectionDomain, boolean, int, Object)` | `java.lang.ClassLoader`             |
|    new | +0.02ms |  0.0% → 1.5% |    0ms → 24.5µs |       0 → 1 | `getDeclaredMethods0(boolean)`                                                                       | `java.lang.Class`                   |
|  +2.9% | +0.67µs |         1.4% | 23.2µs → 23.8µs |           1 | `<init>(UnixPath, long, DirectoryStream$Filter)`                                                     | `sun.nio.fs.UnixDirectoryStream`    |

##### Ours

| Change |   Delta |           % |        Time | Contentions | Function        | Location                                               |
| -----: | ------: | ----------: | ----------: | ----------: | --------------- | ------------------------------------------------------ |
|    new | +0.06ms | 0.0% → 3.8% | 0ms → 0.1ms |       0 → 1 | `average(List)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

#### Improvements

Functions with the largest decrease in time blocked within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

##### Standard library

|  Change |   Delta |             % |            Time | Contentions | Function                                    | Location                                            |
| ------: | ------: | ------------: | --------------: | ----------: | ------------------------------------------- | --------------------------------------------------- |
|  -40.6% | -0.50ms | 76.7% → 44.4% |   1.2ms → 0.7ms |           4 | `loadClass(String, boolean)`                | `java.lang.ClassLoader`                             |
| removed | -0.02ms |   1.5% → 0.0% |    24.2µs → 0ms |       1 → 0 | `iterator(DirectoryStream)`                 | `sun.nio.fs.UnixDirectoryStream`                    |
|   -4.8% | -0.01ms | 14.8% → 13.7% |           0.2ms |           1 | `loadClassOrNull(String, boolean)`          | `jdk.internal.loader.BuiltinClassLoader`            |
|  -10.0% | -0.01ms |   4.0% → 3.5% |           0.1ms |       2 → 1 | `<init>(boolean)`                           | `java.util.concurrent.locks.ReentrantReadWriteLock` |
|   -1.8% | -0.42µs |          1.4% | 23.2µs → 22.8µs |           1 | `walkFileTree(Path, Set, int, FileVisitor)` | `java.nio.file.Files`                               |

#### Lines

Lines with the largest change in contribution to each function's self time.

##### `doubleStream(Spliterator$OfDouble, boolean)` (`java.util.stream.StreamSupport`)

| Change |   Delta |             % |        Time | Contentions | Location                             |
| -----: | ------: | ------------: | ----------: | ----------: | ------------------------------------ |
|    new | +0.26ms | 0.0% → 100.0% | 0ms → 0.3ms |       0 → 2 | `java.util.stream.StreamSupport:274` |

##### `mapToObj(DoubleFunction, int)` (`java.util.stream.DoublePipeline`)

| Change |   Delta |             % |        Time | Contentions | Location                              |
| -----: | ------: | ------------: | ----------: | ----------: | ------------------------------------- |
|    new | +0.10ms | 0.0% → 100.0% | 0ms → 0.1ms |       0 → 1 | `java.util.stream.DoublePipeline:170` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |   Delta |             % |        Time | Contentions | Location                                                   |
| -----: | ------: | ------------: | ----------: | ----------: | ---------------------------------------------------------- |
|    new | +0.06ms | 0.0% → 100.0% | 0ms → 0.1ms |       0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:332` |

##### `opWrapSink(int, Sink)` (`java.util.stream.DoublePipeline$1`)

| Change |   Delta |             % |        Time | Contentions | Location                                |
| -----: | ------: | ------------: | ----------: | ----------: | --------------------------------------- |
|    new | +0.05ms | 0.0% → 100.0% | 0ms → 0.1ms |       0 → 1 | `java.util.stream.DoublePipeline$1:173` |

##### `spliterator(double[], int, int, int)` (`java.util.Spliterators`)

| Change |   Delta |             % |         Time | Contentions | Location                     |
| -----: | ------: | ------------: | -----------: | ----------: | ---------------------------- |
|    new | +0.05ms | 0.0% → 100.0% | 0ms → 48.0µs |       0 → 1 | `java.util.Spliterators:372` |

##### `<init>(UnixPath, long, DirectoryStream$Filter)` (`sun.nio.fs.UnixDirectoryStream`)

| Change |   Delta |      % |            Time | Contentions | Location                            |
| -----: | ------: | -----: | --------------: | ----------: | ----------------------------------- |
|  +2.9% | +0.67µs | 100.0% | 23.2µs → 23.8µs |           1 | `sun.nio.fs.UnixDirectoryStream:52` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

| Change |   Delta |      % |          Time | Contentions | Location                    |
| -----: | ------: | -----: | ------------: | ----------: | --------------------------- |
| -40.6% | -0.50ms | 100.0% | 1.2ms → 0.7ms |           4 | `java.lang.ClassLoader:573` |

##### `iterator(DirectoryStream)` (`sun.nio.fs.UnixDirectoryStream`)

|  Change |   Delta |             % |         Time | Contentions | Location                             |
| ------: | ------: | ------------: | -----------: | ----------: | ------------------------------------ |
| removed | -0.02ms | 100.0% → 0.0% | 24.2µs → 0ms |       1 → 0 | `sun.nio.fs.UnixDirectoryStream:119` |

##### `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

| Change |   Delta |      % |  Time | Contentions | Location                                     |
| -----: | ------: | -----: | ----: | ----------: | -------------------------------------------- |
|  -4.8% | -0.01ms | 100.0% | 0.2ms |           1 | `jdk.internal.loader.BuiltinClassLoader:651` |

##### `<init>(boolean)` (`java.util.concurrent.locks.ReentrantReadWriteLock`)

|  Change |   Delta |              % |           Time | Contentions | Location                                                |
| ------: | ------: | -------------: | -------------: | ----------: | ------------------------------------------------------- |
| removed | -0.02ms |   35.5% → 0.0% |   23.0µs → 0ms |       1 → 0 | `java.util.concurrent.locks.ReentrantReadWriteLock:242` |
|  +39.6% | +0.02ms | 64.5% → 100.0% | 41.8µs → 0.1ms |           1 | `java.util.concurrent.locks.ReentrantReadWriteLock:241` |

##### `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`)

| Change |   Delta |      % |            Time | Contentions | Location                   |
| -----: | ------: | -----: | --------------: | ----------: | -------------------------- |
|  -1.8% | -0.42µs | 100.0% | 23.2µs → 22.8µs |           1 | `java.nio.file.Files:2791` |

#### Callers

Callers with the largest change in contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `doubleStream(Spliterator$OfDouble, boolean)` (`java.util.stream.StreamSupport`)

| Change |   Delta |             % |        Time | Contentions | Caller                       | Location           |
| -----: | ------: | ------------: | ----------: | ----------: | ---------------------------- | ------------------ |
|    new | +0.26ms | 0.0% → 100.0% | 0ms → 0.3ms |       0 → 2 | `stream(double[], int, int)` | `java.util.Arrays` |

##### `mapToObj(DoubleFunction, int)` (`java.util.stream.DoublePipeline`)

| Change |   Delta |             % |        Time | Contentions | Caller    | Location                          |
| -----: | ------: | ------------: | ----------: | ----------: | --------- | --------------------------------- |
|    new | +0.10ms | 0.0% → 100.0% | 0ms → 0.1ms |       0 → 1 | `boxed()` | `java.util.stream.DoublePipeline` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |   Delta |             % |        Time | Contentions | Caller                     | Location                                               |
| -----: | ------: | ------------: | ----------: | ----------: | -------------------------- | ------------------------------------------------------ |
|    new | +0.06ms | 0.0% → 100.0% | 0ms → 0.1ms |       0 → 1 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `opWrapSink(int, Sink)` (`java.util.stream.DoublePipeline$1`)

| Change |   Delta |             % |        Time | Contentions | Caller           | Location                            |
| -----: | ------: | ------------: | ----------: | ----------: | ---------------- | ----------------------------------- |
|    new | +0.05ms | 0.0% → 100.0% | 0ms → 0.1ms |       0 → 1 | `wrapSink(Sink)` | `java.util.stream.AbstractPipeline` |

##### `spliterator(double[], int, int, int)` (`java.util.Spliterators`)

| Change |   Delta |             % |         Time | Contentions | Caller                            | Location           |
| -----: | ------: | ------------: | -----------: | ----------: | --------------------------------- | ------------------ |
|    new | +0.05ms | 0.0% → 100.0% | 0ms → 48.0µs |       0 → 1 | `spliterator(double[], int, int)` | `java.util.Arrays` |

##### `defineClass0(ClassLoader, Class, String, byte[], int, int, ProtectionDomain, boolean, int, Object)` (`java.lang.ClassLoader`)

| Change |   Delta |             % |         Time | Contentions | Caller                                                                                    | Location             |
| -----: | ------: | ------------: | -----------: | ----------: | ----------------------------------------------------------------------------------------- | -------------------- |
|    new | +0.03ms | 0.0% → 100.0% | 0ms → 29.3µs |       0 → 1 | `defineClass(ClassLoader, Class, String, byte[], ProtectionDomain, boolean, int, Object)` | `java.lang.System$2` |

##### `getDeclaredMethods0(boolean)` (`java.lang.Class`)

| Change |   Delta |             % |         Time | Contentions | Caller                               | Location          |
| -----: | ------: | ------------: | -----------: | ----------: | ------------------------------------ | ----------------- |
|    new | +0.02ms | 0.0% → 100.0% | 0ms → 24.5µs |       0 → 1 | `privateGetDeclaredMethods(boolean)` | `java.lang.Class` |

##### `<init>(UnixPath, long, DirectoryStream$Filter)` (`sun.nio.fs.UnixDirectoryStream`)

| Change |   Delta |      % |            Time | Contentions | Caller                                             | Location                            |
| -----: | ------: | -----: | --------------: | ----------: | -------------------------------------------------- | ----------------------------------- |
|  +2.9% | +0.67µs | 100.0% | 23.2µs → 23.8µs |           1 | `newDirectoryStream(Path, DirectoryStream$Filter)` | `sun.nio.fs.UnixFileSystemProvider` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

| Change |   Delta |      % |          Time | Contentions | Caller              | Location                |
| -----: | ------: | -----: | ------------: | ----------: | ------------------- | ----------------------- |
| -40.6% | -0.50ms | 100.0% | 1.2ms → 0.7ms |           4 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `iterator(DirectoryStream)` (`sun.nio.fs.UnixDirectoryStream`)

|  Change |   Delta |             % |         Time | Contentions | Caller       | Location                         |
| ------: | ------: | ------------: | -----------: | ----------: | ------------ | -------------------------------- |
| removed | -0.02ms | 100.0% → 0.0% | 24.2µs → 0ms |       1 → 0 | `iterator()` | `sun.nio.fs.UnixDirectoryStream` |

##### `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

| Change |   Delta |      % |  Time | Contentions | Caller                       | Location                                 |
| -----: | ------: | -----: | ----: | ----------: | ---------------------------- | ---------------------------------------- |
|  -4.8% | -0.01ms | 100.0% | 0.2ms |           1 | `loadClass(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `<init>(boolean)` (`java.util.concurrent.locks.ReentrantReadWriteLock`)

| Change |   Delta |      % |  Time | Contentions | Caller                                           | Location                         |
| -----: | ------: | -----: | ----: | ----------: | ------------------------------------------------ | -------------------------------- |
| -10.0% | -0.01ms | 100.0% | 0.1ms |       2 → 1 | `<init>(UnixPath, long, DirectoryStream$Filter)` | `sun.nio.fs.UnixDirectoryStream` |

##### `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`)

| Change |   Delta |      % |            Time | Contentions | Caller                            | Location              |
| -----: | ------: | -----: | --------------: | ----------: | --------------------------------- | --------------------- |
|  -1.8% | -0.42µs | 100.0% | 23.2µs → 22.8µs |           1 | `walkFileTree(Path, FileVisitor)` | `java.nio.file.Files` |

### Total time

#### Regressions

Functions with the largest increase in time blocked within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

| Change |   Delta |             % |          Time | Contentions | Function                                                  | Location                                                               |
| -----: | ------: | ------------: | ------------: | ----------: | --------------------------------------------------------- | ---------------------------------------------------------------------- |
|    new | +0.67ms |  0.0% → 40.6% |   0ms → 0.7ms |       0 → 4 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                                    |
|    new | +0.50ms |  0.0% → 30.2% |   0ms → 0.5ms |       0 → 6 | `boxed(double[])`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|    new | +0.31ms |  0.0% → 18.9% |   0ms → 0.3ms |       0 → 3 | `stream(double[], int, int)`                              | `java.util.Arrays`                                                     |
|    new | +0.31ms |  0.0% → 18.9% |   0ms → 0.3ms |       0 → 3 | `stream(double[])`                                        | `java.util.Arrays`                                                     |
|    new | +0.26ms |  0.0% → 16.0% |   0ms → 0.3ms |       0 → 2 | `doubleStream(Spliterator$OfDouble, boolean)`             | `java.util.stream.StreamSupport`                                       |
|    new | +0.22ms |  0.0% → 13.2% |   0ms → 0.2ms |       0 → 2 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`                                    |
|    new | +0.22ms |  0.0% → 13.2% |   0ms → 0.2ms |       0 → 2 | `lambda$run$0(int, List, int)`                            | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|    new | +0.22ms |  0.0% → 13.2% |   0ms → 0.2ms |       0 → 2 | `call()`                                                  | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011a2bd0` |
|    new | +0.22ms |  0.0% → 13.2% |   0ms → 0.2ms |       0 → 2 | `exec()`                                                  | `java.util.concurrent.ForkJoinTask$AdaptedCallable`                    |
| +32.2% | +0.22ms | 41.9% → 53.9% | 0.7ms → 0.9ms |       2 → 6 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                                    |
| +32.2% | +0.22ms | 41.9% → 53.9% | 0.7ms → 0.9ms |       2 → 6 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                                    |
|    new | +0.13ms |   0.0% → 8.0% |   0ms → 0.1ms |       0 → 2 | `boxed()`                                                 | `java.util.stream.DoublePipeline`                                      |
|    new | +0.10ms |   0.0% → 6.3% |   0ms → 0.1ms |       0 → 1 | `mapToObj(DoubleFunction, int)`                           | `java.util.stream.DoublePipeline`                                      |
|  +5.0% | +0.06ms | 76.7% → 78.4% | 1.2ms → 1.3ms |      4 → 11 | `computeClusterAverages()`                                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  +5.0% | +0.06ms | 76.7% → 78.4% | 1.2ms → 1.3ms |      4 → 11 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  +5.0% | +0.06ms | 76.7% → 78.4% | 1.2ms → 1.3ms |      4 → 11 | `compute()`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  +5.0% | +0.06ms | 76.7% → 78.4% | 1.2ms → 1.3ms |      4 → 11 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                                   |
|  +5.0% | +0.06ms | 76.7% → 78.4% | 1.2ms → 1.3ms |      4 → 11 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                                    |
|  +5.0% | +0.06ms | 76.7% → 78.4% | 1.2ms → 1.3ms |      4 → 11 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
|  +5.0% | +0.06ms | 76.7% → 78.4% | 1.2ms → 1.3ms |      4 → 11 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`                                    |

##### Standard library

| Change |   Delta |             % |          Time | Contentions | Function                                                  | Location                                            |
| -----: | ------: | ------------: | ------------: | ----------: | --------------------------------------------------------- | --------------------------------------------------- |
|    new | +0.67ms |  0.0% → 40.6% |   0ms → 0.7ms |       0 → 4 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                 |
|    new | +0.31ms |  0.0% → 18.9% |   0ms → 0.3ms |       0 → 3 | `stream(double[], int, int)`                              | `java.util.Arrays`                                  |
|    new | +0.31ms |  0.0% → 18.9% |   0ms → 0.3ms |       0 → 3 | `stream(double[])`                                        | `java.util.Arrays`                                  |
|    new | +0.26ms |  0.0% → 16.0% |   0ms → 0.3ms |       0 → 2 | `doubleStream(Spliterator$OfDouble, boolean)`             | `java.util.stream.StreamSupport`                    |
|    new | +0.22ms |  0.0% → 13.2% |   0ms → 0.2ms |       0 → 2 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`                 |
|    new | +0.22ms |  0.0% → 13.2% |   0ms → 0.2ms |       0 → 2 | `exec()`                                                  | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
| +32.2% | +0.22ms | 41.9% → 53.9% | 0.7ms → 0.9ms |       2 → 6 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                 |
| +32.2% | +0.22ms | 41.9% → 53.9% | 0.7ms → 0.9ms |       2 → 6 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                 |
|    new | +0.13ms |   0.0% → 8.0% |   0ms → 0.1ms |       0 → 2 | `boxed()`                                                 | `java.util.stream.DoublePipeline`                   |
|    new | +0.10ms |   0.0% → 6.3% |   0ms → 0.1ms |       0 → 1 | `mapToObj(DoubleFunction, int)`                           | `java.util.stream.DoublePipeline`                   |
|  +5.0% | +0.06ms | 76.7% → 78.4% | 1.2ms → 1.3ms |      4 → 11 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                |
|  +5.0% | +0.06ms | 76.7% → 78.4% | 1.2ms → 1.3ms |      4 → 11 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                 |
|  +5.0% | +0.06ms | 76.7% → 78.4% | 1.2ms → 1.3ms |      4 → 11 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
|  +5.0% | +0.06ms | 76.7% → 78.4% | 1.2ms → 1.3ms |      4 → 11 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`                 |
|  +5.0% | +0.06ms | 76.7% → 78.4% | 1.2ms → 1.3ms |      4 → 11 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                 |
|  +5.0% | +0.06ms | 76.7% → 78.4% | 1.2ms → 1.3ms |      4 → 11 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`         |
|    new | +0.05ms |   0.0% → 3.3% |   0ms → 0.1ms |       0 → 1 | `opWrapSink(int, Sink)`                                   | `java.util.stream.DoublePipeline$1`                 |
|    new | +0.05ms |   0.0% → 3.3% |   0ms → 0.1ms |       0 → 1 | `wrapSink(Sink)`                                          | `java.util.stream.AbstractPipeline`                 |
|    new | +0.05ms |   0.0% → 3.3% |   0ms → 0.1ms |       0 → 1 | `wrapAndCopyInto(Sink, Spliterator)`                      | `java.util.stream.AbstractPipeline`                 |
|    new | +0.05ms |   0.0% → 3.3% |   0ms → 0.1ms |       0 → 1 | `evaluate(Spliterator, boolean, IntFunction)`             | `java.util.stream.AbstractPipeline`                 |

##### Ours

| Change |   Delta |             % |          Time | Contentions | Function                       | Location                                                               |
| -----: | ------: | ------------: | ------------: | ----------: | ------------------------------ | ---------------------------------------------------------------------- |
|    new | +0.50ms |  0.0% → 30.2% |   0ms → 0.5ms |       0 → 6 | `boxed(double[])`              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|    new | +0.22ms |  0.0% → 13.2% |   0ms → 0.2ms |       0 → 2 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|    new | +0.22ms |  0.0% → 13.2% |   0ms → 0.2ms |       0 → 2 | `call()`                       | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011a2bd0` |
|  +5.0% | +0.06ms | 76.7% → 78.4% | 1.2ms → 1.3ms |      4 → 11 | `computeClusterAverages()`     | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  +5.0% | +0.06ms | 76.7% → 78.4% | 1.2ms → 1.3ms |      4 → 11 | `computeDirectly()`            | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  +5.0% | +0.06ms | 76.7% → 78.4% | 1.2ms → 1.3ms |      4 → 11 | `compute()`                    | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |

#### Improvements

Functions with the largest decrease in time blocked within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |   Delta |             % |          Time | Contentions | Function                                    | Location                                                   |
| ------: | ------: | ------------: | ------------: | ----------: | ------------------------------------------- | ---------------------------------------------------------- |
|  -34.8% | -0.51ms | 91.5% → 58.1% | 1.5ms → 1.0ms |           5 | `loadClass(String)`                         | `java.lang.ClassLoader`                                    |
|  -40.6% | -0.50ms | 76.7% → 44.4% | 1.2ms → 0.7ms |           4 | `loadClass(String, boolean)`                | `java.lang.ClassLoader`                                    |
|  -67.6% | -0.45ms | 41.9% → 13.2% | 0.7ms → 0.2ms |           2 | `tryRemoveAndExec(ForkJoinTask, boolean)`   | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
|  -35.4% | -0.44ms | 76.7% → 48.2% | 1.2ms → 0.8ms |       4 → 5 | `average(List)`                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -22.5% | -0.03ms |   8.5% → 6.4% |         0.1ms |       5 → 3 | `walkFileTree(Path, Set, int, FileVisitor)` | `java.nio.file.Files`                                      |
|  -26.7% | -0.03ms |   7.0% → 5.0% |         0.1ms |       4 → 2 | `visit(Path, boolean, boolean)`             | `java.nio.file.FileTreeWalker`                             |
|  -26.7% | -0.03ms |   7.0% → 5.0% |         0.1ms |       4 → 2 | `walk(Path)`                                | `java.nio.file.FileTreeWalker`                             |
| removed | -0.02ms |   1.5% → 0.0% |  24.2µs → 0ms |       1 → 0 | `iterator(DirectoryStream)`                 | `sun.nio.fs.UnixDirectoryStream`                           |
| removed | -0.02ms |   1.5% → 0.0% |  24.2µs → 0ms |       1 → 0 | `iterator()`                                | `sun.nio.fs.UnixDirectoryStream`                           |
| removed | -0.02ms |   1.5% → 0.0% |  24.2µs → 0ms |       1 → 0 | `<init>(Path, Object, DirectoryStream)`     | `java.nio.file.FileTreeWalker$DirectoryNode`               |
|   -4.6% | -0.02ms | 23.3% → 21.6% |         0.4ms |       6 → 5 | `deleteRecursively(Path, boolean)`          | `org.renaissance.core.DirUtils`                            |
|   -4.6% | -0.02ms | 23.3% → 21.6% |         0.4ms |       6 → 5 | `deleteRecursively(Path)`                   | `org.renaissance.core.DirUtils`                            |
|   -4.6% | -0.02ms | 23.3% → 21.6% |         0.4ms |       6 → 5 | `lambda$createScratchDirectory$1(Path)`     | `org.renaissance.core.DirUtils`                            |
|   -4.6% | -0.02ms | 23.3% → 21.6% |         0.4ms |       6 → 5 | `run()`                                     | `org.renaissance.core.DirUtils$$Lambda.0x0000000401003a68` |
|   -4.6% | -0.02ms | 23.3% → 21.6% |         0.4ms |       6 → 5 | `runWith(Object, Runnable)`                 | `java.lang.Thread`                                         |
|   -4.6% | -0.02ms | 23.3% → 21.6% |         0.4ms |       6 → 5 | `run()`                                     | `java.lang.Thread`                                         |
|   -4.8% | -0.01ms | 14.8% → 13.7% |         0.2ms |           1 | `loadClassOrNull(String, boolean)`          | `jdk.internal.loader.BuiltinClassLoader`                   |
|   -4.8% | -0.01ms | 14.8% → 13.7% |         0.2ms |           1 | `loadClass(String, boolean)`                | `jdk.internal.loader.BuiltinClassLoader`                   |
|   -4.8% | -0.01ms | 14.8% → 13.7% |         0.2ms |           1 | `loadClass(String, boolean)`                | `jdk.internal.loader.ClassLoaders$AppClassLoader`          |
|  -10.0% | -0.01ms |   4.0% → 3.5% |         0.1ms |       2 → 1 | `<init>(boolean)`                           | `java.util.concurrent.locks.ReentrantReadWriteLock`        |

##### Standard library

|  Change |   Delta |             % |          Time | Contentions | Function                                           | Location                                            |
| ------: | ------: | ------------: | ------------: | ----------: | -------------------------------------------------- | --------------------------------------------------- |
|  -34.8% | -0.51ms | 91.5% → 58.1% | 1.5ms → 1.0ms |           5 | `loadClass(String)`                                | `java.lang.ClassLoader`                             |
|  -40.6% | -0.50ms | 76.7% → 44.4% | 1.2ms → 0.7ms |           4 | `loadClass(String, boolean)`                       | `java.lang.ClassLoader`                             |
|  -67.6% | -0.45ms | 41.9% → 13.2% | 0.7ms → 0.2ms |           2 | `tryRemoveAndExec(ForkJoinTask, boolean)`          | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
|  -22.5% | -0.03ms |   8.5% → 6.4% |         0.1ms |       5 → 3 | `walkFileTree(Path, Set, int, FileVisitor)`        | `java.nio.file.Files`                               |
|  -26.7% | -0.03ms |   7.0% → 5.0% |         0.1ms |       4 → 2 | `visit(Path, boolean, boolean)`                    | `java.nio.file.FileTreeWalker`                      |
|  -26.7% | -0.03ms |   7.0% → 5.0% |         0.1ms |       4 → 2 | `walk(Path)`                                       | `java.nio.file.FileTreeWalker`                      |
| removed | -0.02ms |   1.5% → 0.0% |  24.2µs → 0ms |       1 → 0 | `iterator(DirectoryStream)`                        | `sun.nio.fs.UnixDirectoryStream`                    |
| removed | -0.02ms |   1.5% → 0.0% |  24.2µs → 0ms |       1 → 0 | `iterator()`                                       | `sun.nio.fs.UnixDirectoryStream`                    |
| removed | -0.02ms |   1.5% → 0.0% |  24.2µs → 0ms |       1 → 0 | `<init>(Path, Object, DirectoryStream)`            | `java.nio.file.FileTreeWalker$DirectoryNode`        |
|   -4.6% | -0.02ms | 23.3% → 21.6% |         0.4ms |       6 → 5 | `runWith(Object, Runnable)`                        | `java.lang.Thread`                                  |
|   -4.6% | -0.02ms | 23.3% → 21.6% |         0.4ms |       6 → 5 | `run()`                                            | `java.lang.Thread`                                  |
|   -4.8% | -0.01ms | 14.8% → 13.7% |         0.2ms |           1 | `loadClassOrNull(String, boolean)`                 | `jdk.internal.loader.BuiltinClassLoader`            |
|   -4.8% | -0.01ms | 14.8% → 13.7% |         0.2ms |           1 | `loadClass(String, boolean)`                       | `jdk.internal.loader.BuiltinClassLoader`            |
|   -4.8% | -0.01ms | 14.8% → 13.7% |         0.2ms |           1 | `loadClass(String, boolean)`                       | `jdk.internal.loader.ClassLoaders$AppClassLoader`   |
|  -10.0% | -0.01ms |   4.0% → 3.5% |         0.1ms |       2 → 1 | `<init>(boolean)`                                  | `java.util.concurrent.locks.ReentrantReadWriteLock` |
|   -4.3% | -0.01ms |   8.5% → 7.9% |         0.1ms |       5 → 4 | `walkFileTree(Path, FileVisitor)`                  | `java.nio.file.Files`                               |
|   -6.6% | -0.01ms |   5.5% → 5.0% |         0.1ms |       3 → 2 | `<init>(UnixPath, long, DirectoryStream$Filter)`   | `sun.nio.fs.UnixDirectoryStream`                    |
|   -6.6% | -0.01ms |   5.5% → 5.0% |         0.1ms |       3 → 2 | `newDirectoryStream(Path, DirectoryStream$Filter)` | `sun.nio.fs.UnixFileSystemProvider`                 |
|   -6.6% | -0.01ms |   5.5% → 5.0% |         0.1ms |       3 → 2 | `newDirectoryStream(Path)`                         | `java.nio.file.Files`                               |

##### Ours

| Change |   Delta |             % |          Time | Contentions | Function                                | Location                                                   |
| -----: | ------: | ------------: | ------------: | ----------: | --------------------------------------- | ---------------------------------------------------------- |
| -35.4% | -0.44ms | 76.7% → 48.2% | 1.2ms → 0.8ms |       4 → 5 | `average(List)`                         | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -4.6% | -0.02ms | 23.3% → 21.6% |         0.4ms |       6 → 5 | `deleteRecursively(Path, boolean)`      | `org.renaissance.core.DirUtils`                            |
|  -4.6% | -0.02ms | 23.3% → 21.6% |         0.4ms |       6 → 5 | `deleteRecursively(Path)`               | `org.renaissance.core.DirUtils`                            |
|  -4.6% | -0.02ms | 23.3% → 21.6% |         0.4ms |       6 → 5 | `lambda$createScratchDirectory$1(Path)` | `org.renaissance.core.DirUtils`                            |
|  -4.6% | -0.02ms | 23.3% → 21.6% |         0.4ms |       6 → 5 | `run()`                                 | `org.renaissance.core.DirUtils$$Lambda.0x0000000401003a68` |

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

| Change |   Delta |             % |        Time | Contentions | Callee     | Location                            |
| -----: | ------: | ------------: | ----------: | ----------: | ---------- | ----------------------------------- |
|    new | +0.67ms | 0.0% → 100.0% | 0ms → 0.7ms |       0 → 4 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |   Delta |            % |        Time | Contentions | Callee                 | Location                             |
| -----: | ------: | -----------: | ----------: | ----------: | ---------------------- | ------------------------------------ |
|    new | +0.31ms | 0.0% → 62.5% | 0ms → 0.3ms |       0 → 3 | `stream(double[])`     | `java.util.Arrays`                   |
|    new | +0.13ms | 0.0% → 26.6% | 0ms → 0.1ms |       0 → 2 | `boxed()`              | `java.util.stream.DoublePipeline`    |
|    new | +0.05ms | 0.0% → 10.9% | 0ms → 0.1ms |       0 → 1 | `toArray(IntFunction)` | `java.util.stream.ReferencePipeline` |

##### `stream(double[], int, int)` (`java.util.Arrays`)

| Change |   Delta |            % |         Time | Contentions | Callee                                        | Location                         |
| -----: | ------: | -----------: | -----------: | ----------: | --------------------------------------------- | -------------------------------- |
|    new | +0.26ms | 0.0% → 84.6% |  0ms → 0.3ms |       0 → 2 | `doubleStream(Spliterator$OfDouble, boolean)` | `java.util.stream.StreamSupport` |
|    new | +0.05ms | 0.0% → 15.4% | 0ms → 48.0µs |       0 → 1 | `spliterator(double[], int, int)`             | `java.util.Arrays`               |

##### `stream(double[])` (`java.util.Arrays`)

| Change |   Delta |             % |        Time | Contentions | Callee                       | Location           |
| -----: | ------: | ------------: | ----------: | ----------: | ---------------------------- | ------------------ |
|    new | +0.31ms | 0.0% → 100.0% | 0ms → 0.3ms |       0 → 3 | `stream(double[], int, int)` | `java.util.Arrays` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

| Change |   Delta |             % |        Time | Contentions | Callee     | Location                            |
| -----: | ------: | ------------: | ----------: | ----------: | ---------- | ----------------------------------- |
|    new | +0.22ms | 0.0% → 100.0% | 0ms → 0.2ms |       0 → 2 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |   Delta |             % |        Time | Contentions | Callee     | Location                            |
| -----: | ------: | ------------: | ----------: | ----------: | ---------- | ----------------------------------- |
|    new | +0.22ms | 0.0% → 100.0% | 0ms → 0.2ms |       0 → 2 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011a2bd0`)

| Change |   Delta |             % |        Time | Contentions | Callee                         | Location                                    |
| -----: | ------: | ------------: | ----------: | ----------: | ------------------------------ | ------------------------------------------- |
|    new | +0.22ms | 0.0% → 100.0% | 0ms → 0.2ms |       0 → 2 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

| Change |   Delta |             % |        Time | Contentions | Callee   | Location                                                               |
| -----: | ------: | ------------: | ----------: | ----------: | -------- | ---------------------------------------------------------------------- |
|    new | +0.22ms | 0.0% → 100.0% | 0ms → 0.2ms |       0 → 2 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011a2bd0` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change |   Delta |              % |          Time | Contentions | Callee                                                    | Location                                      |
| -----: | ------: | -------------: | ------------: | ----------: | --------------------------------------------------------- | --------------------------------------------- |
|    new | +0.67ms |   0.0% → 75.5% |   0ms → 0.7ms |       0 → 4 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
| -67.6% | -0.45ms | 100.0% → 24.5% | 0.7ms → 0.2ms |           2 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change |   Delta |      % |          Time | Contentions | Callee                 | Location                            |
| -----: | ------: | -----: | ------------: | ----------: | ---------------------- | ----------------------------------- |
| +32.2% | +0.22ms | 100.0% | 0.7ms → 0.9ms |       2 → 6 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `boxed()` (`java.util.stream.DoublePipeline`)

| Change |   Delta |            % |         Time | Contentions | Callee                                                           | Location                               |
| -----: | ------: | -----------: | -----------: | ----------: | ---------------------------------------------------------------- | -------------------------------------- |
|    new | +0.10ms | 0.0% → 77.9% |  0ms → 0.1ms |       0 → 1 | `mapToObj(DoubleFunction, int)`                                  | `java.util.stream.DoublePipeline`      |
|    new | +0.03ms | 0.0% → 22.1% | 0ms → 29.3µs |       0 → 1 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |   Delta |              % |          Time | Contentions | Callee            | Location                                               |
| -----: | ------: | -------------: | ------------: | ----------: | ----------------- | ------------------------------------------------------ |
|    new | +0.50ms |   0.0% → 38.5% |   0ms → 0.5ms |       0 → 6 | `boxed(double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| -35.4% | -0.44ms | 100.0% → 61.5% | 1.2ms → 0.8ms |       4 → 5 | `average(List)`   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |   Delta |      % |          Time | Contentions | Callee                     | Location                                               |
| -----: | ------: | -----: | ------------: | ----------: | -------------------------- | ------------------------------------------------------ |
|  +5.0% | +0.06ms | 100.0% | 1.2ms → 1.3ms |      4 → 11 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  +5.0% | +0.06ms | 100.0% | 1.2ms → 1.3ms |      4 → 11 | `computeDirectly()`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change |   Delta |             % |          Time | Contentions | Callee              | Location                                               |
| -----: | ------: | ------------: | ------------: | ----------: | ------------------- | ------------------------------------------------------ |
| +32.2% | +0.22ms | 54.6% → 68.7% | 0.7ms → 0.9ms |       2 → 6 | `join()`            | `java.util.concurrent.ForkJoinTask`                    |
|  +5.0% | +0.06ms |        100.0% | 1.2ms → 1.3ms |      4 → 11 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change |   Delta |      % |          Time | Contentions | Callee      | Location                                               |
| -----: | ------: | -----: | ------------: | ----------: | ----------- | ------------------------------------------------------ |
|  +5.0% | +0.06ms | 100.0% | 1.2ms → 1.3ms |      4 → 11 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

| Change |   Delta |            % |          Time | Contentions | Callee   | Location                                            |
| -----: | ------: | -----------: | ------------: | ----------: | -------- | --------------------------------------------------- |
|    new | +0.22ms | 0.0% → 16.9% |   0ms → 0.2ms |       0 → 2 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|  +5.0% | +0.06ms |       100.0% | 1.2ms → 1.3ms |      4 → 11 | `exec()` | `java.util.concurrent.RecursiveTask`                |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |   Delta |      % |          Time | Contentions | Callee     | Location                            |
| -----: | ------: | -----: | ------------: | ----------: | ---------- | ----------------------------------- |
|  +5.0% | +0.06ms | 100.0% | 1.2ms → 1.3ms |      4 → 11 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

| Change |   Delta |      % |          Time | Contentions | Callee                                               | Location                                      |
| -----: | ------: | -----: | ------------: | ----------: | ---------------------------------------------------- | --------------------------------------------- |
|  +5.0% | +0.06ms | 100.0% | 1.2ms → 1.3ms |      4 → 11 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change |   Delta |      % |          Time | Contentions | Callee                                   | Location                            |
| -----: | ------: | -----: | ------------: | ----------: | ---------------------------------------- | ----------------------------------- |
|  +5.0% | +0.06ms | 100.0% | 1.2ms → 1.3ms |      4 → 11 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

| Change |   Delta |      % |          Time | Contentions | Callee                              | Location                            |
| -----: | ------: | -----: | ------------: | ----------: | ----------------------------------- | ----------------------------------- |
|  +5.0% | +0.06ms | 100.0% | 1.2ms → 1.3ms |      4 → 11 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `wrapSink(Sink)` (`java.util.stream.AbstractPipeline`)

| Change |   Delta |             % |        Time | Contentions | Callee                  | Location                            |
| -----: | ------: | ------------: | ----------: | ----------: | ----------------------- | ----------------------------------- |
|    new | +0.05ms | 0.0% → 100.0% | 0ms → 0.1ms |       0 → 1 | `opWrapSink(int, Sink)` | `java.util.stream.DoublePipeline$1` |

##### `wrapAndCopyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

| Change |   Delta |             % |        Time | Contentions | Callee           | Location                            |
| -----: | ------: | ------------: | ----------: | ----------: | ---------------- | ----------------------------------- |
|    new | +0.05ms | 0.0% → 100.0% | 0ms → 0.1ms |       0 → 1 | `wrapSink(Sink)` | `java.util.stream.AbstractPipeline` |

##### `evaluate(Spliterator, boolean, IntFunction)` (`java.util.stream.AbstractPipeline`)

| Change |   Delta |             % |        Time | Contentions | Callee                               | Location                            |
| -----: | ------: | ------------: | ----------: | ----------: | ------------------------------------ | ----------------------------------- |
|    new | +0.05ms | 0.0% → 100.0% | 0ms → 0.1ms |       0 → 1 | `wrapAndCopyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `loadClass(String)` (`java.lang.ClassLoader`)

| Change |   Delta |             % |          Time | Contentions | Callee                       | Location                                          |
| -----: | ------: | ------------: | ------------: | ----------: | ---------------------------- | ------------------------------------------------- |
| -40.6% | -0.50ms | 83.8% → 76.4% | 1.2ms → 0.7ms |           4 | `loadClass(String, boolean)` | `java.lang.ClassLoader`                           |
|  -4.8% | -0.01ms | 16.2% → 23.6% |         0.2ms |           1 | `loadClass(String, boolean)` | `jdk.internal.loader.ClassLoaders$AppClassLoader` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |   Delta |      % |          Time | Contentions | Callee     | Location                            |
| -----: | ------: | -----: | ------------: | ----------: | ---------- | ----------------------------------- |
| -67.6% | -0.45ms | 100.0% | 0.7ms → 0.2ms |           2 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |   Delta |              % |          Time | Contentions | Callee              | Location                |
| -----: | ------: | -------------: | ------------: | ----------: | ------------------- | ----------------------- |
| -40.6% | -0.50ms | 100.0% → 92.1% | 1.2ms → 0.7ms |           4 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`)

| Change |   Delta |             % |  Time | Contentions | Callee       | Location                       |
| -----: | ------: | ------------: | ----: | ----------: | ------------ | ------------------------------ |
| -26.7% | -0.03ms | 82.9% → 78.3% | 0.1ms |       4 → 2 | `walk(Path)` | `java.nio.file.FileTreeWalker` |

##### `visit(Path, boolean, boolean)` (`java.nio.file.FileTreeWalker`)

|  Change |   Delta |              % |         Time | Contentions | Callee                                  | Location                                     |
| ------: | ------: | -------------: | -----------: | ----------: | --------------------------------------- | -------------------------------------------- |
| removed | -0.02ms |   21.6% → 0.0% | 24.2µs → 0ms |       1 → 0 | `<init>(Path, Object, DirectoryStream)` | `java.nio.file.FileTreeWalker$DirectoryNode` |
|   -6.6% | -0.01ms | 78.4% → 100.0% |        0.1ms |       3 → 2 | `newDirectoryStream(Path)`              | `java.nio.file.Files`                        |

##### `walk(Path)` (`java.nio.file.FileTreeWalker`)

| Change |   Delta |      % |  Time | Contentions | Callee                          | Location                       |
| -----: | ------: | -----: | ----: | ----------: | ------------------------------- | ------------------------------ |
| -26.7% | -0.03ms | 100.0% | 0.1ms |       4 → 2 | `visit(Path, boolean, boolean)` | `java.nio.file.FileTreeWalker` |

##### `iterator()` (`sun.nio.fs.UnixDirectoryStream`)

|  Change |   Delta |             % |         Time | Contentions | Callee                      | Location                         |
| ------: | ------: | ------------: | -----------: | ----------: | --------------------------- | -------------------------------- |
| removed | -0.02ms | 100.0% → 0.0% | 24.2µs → 0ms |       1 → 0 | `iterator(DirectoryStream)` | `sun.nio.fs.UnixDirectoryStream` |

##### `<init>(Path, Object, DirectoryStream)` (`java.nio.file.FileTreeWalker$DirectoryNode`)

|  Change |   Delta |             % |         Time | Contentions | Callee       | Location                         |
| ------: | ------: | ------------: | -----------: | ----------: | ------------ | -------------------------------- |
| removed | -0.02ms | 100.0% → 0.0% | 24.2µs → 0ms |       1 → 0 | `iterator()` | `sun.nio.fs.UnixDirectoryStream` |

##### `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`)

| Change |   Delta |             % |  Time | Contentions | Callee                            | Location                |
| -----: | ------: | ------------: | ----: | ----------: | --------------------------------- | ----------------------- |
|  -4.8% | -0.01ms | 63.7% → 63.6% | 0.2ms |           1 | `loadClass(String)`               | `java.lang.ClassLoader` |
|  -4.3% | -0.01ms | 36.3% → 36.4% | 0.1ms |       5 → 4 | `walkFileTree(Path, FileVisitor)` | `java.nio.file.Files`   |

##### `deleteRecursively(Path)` (`org.renaissance.core.DirUtils`)

| Change |   Delta |      % |  Time | Contentions | Callee                             | Location                        |
| -----: | ------: | -----: | ----: | ----------: | ---------------------------------- | ------------------------------- |
|  -4.6% | -0.02ms | 100.0% | 0.4ms |       6 → 5 | `deleteRecursively(Path, boolean)` | `org.renaissance.core.DirUtils` |

##### `lambda$createScratchDirectory$1(Path)` (`org.renaissance.core.DirUtils`)

| Change |   Delta |      % |  Time | Contentions | Callee                    | Location                        |
| -----: | ------: | -----: | ----: | ----------: | ------------------------- | ------------------------------- |
|  -4.6% | -0.02ms | 100.0% | 0.4ms |       6 → 5 | `deleteRecursively(Path)` | `org.renaissance.core.DirUtils` |

##### `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000000401003a68`)

| Change |   Delta |      % |  Time | Contentions | Callee                                  | Location                        |
| -----: | ------: | -----: | ----: | ----------: | --------------------------------------- | ------------------------------- |
|  -4.6% | -0.02ms | 100.0% | 0.4ms |       6 → 5 | `lambda$createScratchDirectory$1(Path)` | `org.renaissance.core.DirUtils` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

| Change |   Delta |      % |  Time | Contentions | Callee  | Location                                                   |
| -----: | ------: | -----: | ----: | ----------: | ------- | ---------------------------------------------------------- |
|  -4.6% | -0.02ms | 100.0% | 0.4ms |       6 → 5 | `run()` | `org.renaissance.core.DirUtils$$Lambda.0x0000000401003a68` |

##### `run()` (`java.lang.Thread`)

| Change |   Delta |      % |  Time | Contentions | Callee                      | Location           |
| -----: | ------: | -----: | ----: | ----------: | --------------------------- | ------------------ |
|  -4.6% | -0.02ms | 100.0% | 0.4ms |       6 → 5 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `loadClass(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

| Change |   Delta |      % |  Time | Contentions | Callee                             | Location                                 |
| -----: | ------: | -----: | ----: | ----------: | ---------------------------------- | ---------------------------------------- |
|  -4.8% | -0.01ms | 100.0% | 0.2ms |           1 | `loadClassOrNull(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `loadClass(String, boolean)` (`jdk.internal.loader.ClassLoaders$AppClassLoader`)

| Change |   Delta |      % |  Time | Contentions | Callee                       | Location                                 |
| -----: | ------: | -----: | ----: | ----------: | ---------------------------- | ---------------------------------------- |
|  -4.8% | -0.01ms | 100.0% | 0.2ms |           1 | `loadClass(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `walkFileTree(Path, FileVisitor)` (`java.nio.file.Files`)

| Change |   Delta |              % |         Time | Contentions | Callee                                      | Location              |
| -----: | ------: | -------------: | -----------: | ----------: | ------------------------------------------- | --------------------- |
| -22.5% | -0.03ms | 100.0% → 81.1% |        0.1ms |       5 → 3 | `walkFileTree(Path, Set, int, FileVisitor)` | `java.nio.file.Files` |
|    new | +0.02ms |   0.0% → 18.9% | 0ms → 24.5µs |       0 → 1 | `noneOf(Class)`                             | `java.util.EnumSet`   |

##### `<init>(UnixPath, long, DirectoryStream$Filter)` (`sun.nio.fs.UnixDirectoryStream`)

| Change |   Delta |             % |  Time | Contentions | Callee            | Location                                            |
| -----: | ------: | ------------: | ----: | ----------: | ----------------- | --------------------------------------------------- |
| -10.0% | -0.01ms | 73.7% → 71.0% | 0.1ms |       2 → 1 | `<init>(boolean)` | `java.util.concurrent.locks.ReentrantReadWriteLock` |

##### `newDirectoryStream(Path, DirectoryStream$Filter)` (`sun.nio.fs.UnixFileSystemProvider`)

| Change |   Delta |      % |  Time | Contentions | Callee                                           | Location                         |
| -----: | ------: | -----: | ----: | ----------: | ------------------------------------------------ | -------------------------------- |
|  -6.6% | -0.01ms | 100.0% | 0.1ms |       3 → 2 | `<init>(UnixPath, long, DirectoryStream$Filter)` | `sun.nio.fs.UnixDirectoryStream` |

##### `newDirectoryStream(Path)` (`java.nio.file.Files`)

| Change |   Delta |      % |  Time | Contentions | Callee                                             | Location                            |
| -----: | ------: | -----: | ----: | ----------: | -------------------------------------------------- | ----------------------------------- |
|  -6.6% | -0.01ms | 100.0% | 0.1ms |       3 → 2 | `newDirectoryStream(Path, DirectoryStream$Filter)` | `sun.nio.fs.UnixFileSystemProvider` |

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

Functions with the largest increase in samples taken directly in the function body, excluding callees.

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

|  Change | Delta |            % |   Samples | Function                                         | Location                                                                                                                                      |
| ------: | ----: | -----------: | --------: | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
|  +26.7% |  +108 | 8.5% → 11.1% | 404 → 512 | `findNearestCentroid()`                          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |
|  +15.5% |   +17 |  2.3% → 2.7% | 110 → 127 | `collectClusters(int[])`                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |
| +400.0% |    +4 | <0.1% → 0.1% |     1 → 5 | `createSubtask(int, int)`                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |
| +150.0% |    +3 | <0.1% → 0.1% |     2 → 5 | `compute()`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                                                                        |
|     new |    +3 |  0.0% → 0.1% |     0 → 3 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                   |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `lambda$run$0(int, List, int)`                   | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                   |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `average(List)`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                                                                        |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `lambda$merge$7(Map, Object, List)`              | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                   |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `apply(Object, Object)`                          | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001188000 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011a7248` |
|  +50.0% |    +1 | <0.1% → 0.1% |     2 → 3 | `add(double[], double[])`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                                                                     |
| +100.0% |    +1 |        <0.1% |     1 → 2 | `combineResults(Object, Object)`                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                                                                     |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `run(BenchmarkContext)`                          | `org.renaissance.jdk.concurrent.FjKmeans`                                                                                                     |

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

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

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

|  Change | Delta |             % |   Samples | Function                                   | Location                                                                                                                                                                    |
| ------: | ----: | ------------: | --------: | ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -28.4% |  -246 | 18.2% → 13.4% | 867 → 621 | `distance(Double[], Double[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                                                  |
|  -23.3% |  -211 | 19.0% → 15.0% | 904 → 693 | `accumulate(Double[], double[])`           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                                                                                                   |
|   -2.5% |   -11 |   9.2% → 9.3% | 440 → 429 | `vectorSum()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                                                                                                   |
| removed |    -3 |   0.1% → 0.0% |     3 → 0 | `combineResults(Object, Object)`           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                                                  |
| removed |    -2 |  <0.1% → 0.0% |     2 → 0 | `lambda$collectClusters$0(Double[])`       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                                                  |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `accept(Object, Object)`                   | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187218 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011a3b90`                               |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `apply(Object)`                            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000007001186b38 → org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000004011a3940` |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `<init>(JavaKMeans, int, int)`             | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                                                                                                      |
|  -50.0% |    -1 |         <0.1% |     2 → 1 | `<init>(JavaKMeans, List, List, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                                                  |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `forkThreshold()`                          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                                                  |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `<init>(JavaKMeans, List, int, int)`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                                                                                                   |

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

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

| Change | Delta |             % |   Samples | Function                                                                                                               | Location                                                                                                                                      |
| -----: | ----: | ------------: | --------: | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| +25.9% |  +152 | 12.3% → 16.0% | 588 → 740 | `park(boolean, long)`                                                                                                  | `jdk.internal.misc.Unsafe`                                                                                                                    |
| +26.5% |  +152 | 12.1% → 15.7% | 574 → 726 | `park()`                                                                                                               | `java.util.concurrent.locks.LockSupport`                                                                                                      |
| +25.5% |  +150 | 12.3% → 16.0% | 588 → 738 | `LockTracer::UnsafeParkHook`                                                                                           | `libasyncProfiler.dylib`                                                                                                                      |
| +25.9% |  +146 | 11.8% → 15.3% | 563 → 709 | `Parker::park`                                                                                                         | `libjvm.dylib`                                                                                                                                |
| +23.6% |  +138 | 12.3% → 15.6% | 584 → 722 | `__psynch_cvwait`                                                                                                      | `libsystem_kernel.dylib`                                                                                                                      |
| +24.1% |  +138 | 12.0% → 15.4% | 573 → 711 | `Unsafe_Park`                                                                                                          | `libjvm.dylib`                                                                                                                                |
| +56.3% |  +125 |   4.7% → 7.5% | 222 → 347 | `awaitWork(ForkJoinPool$WorkQueue)`                                                                                    | `java.util.concurrent.ForkJoinPool`                                                                                                           |
| +30.5% |   +98 |   6.7% → 9.1% | 321 → 419 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001188000 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011a7248` |
| +30.2% |   +97 |   6.7% → 9.0% | 321 → 418 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                   |
| +69.9% |   +79 |   2.4% → 4.2% | 113 → 192 | `<init>(Collection)`                                                                                                   | `java.util.ArrayList`                                                                                                                         |
| +45.1% |   +60 |   2.8% → 4.2% | 133 → 193 | `grow(int)`                                                                                                            | `java.util.ArrayList`                                                                                                                         |
|  +8.7% |   +39 |  9.4% → 10.6% | 450 → 489 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |
| +50.7% |   +38 |   1.6% → 2.4% |  75 → 113 | `grow()`                                                                                                               | `java.util.ArrayList`                                                                                                                         |
| +24.8% |   +34 |   2.9% → 3.7% | 137 → 171 | `add(Object, Object[], int)`                                                                                           | `java.util.ArrayList`                                                                                                                         |
| +22.1% |   +31 |   2.9% → 3.7% | 140 → 171 | `add(Object)`                                                                                                          | `java.util.ArrayList`                                                                                                                         |
|  +6.0% |   +26 |   9.0% → 9.9% | 431 → 457 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                   |
|  +6.0% |   +26 |   9.0% → 9.9% | 430 → 456 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |
|  +5.3% |   +23 |   9.1% → 9.9% | 433 → 456 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |
|    new |   +22 |   0.0% → 0.5% |    0 → 22 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                                                                                                   |
| +13.0% |   +21 |   3.4% → 4.0% | 162 → 183 | `MemAllocator::allocate`                                                                                               | `libjvm.dylib`                                                                                                                                |

##### Ours

|  Change | Delta |            % |   Samples | Function                                                                                                               | Location                                                                                                                                      |
| ------: | ----: | -----------: | --------: | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
|  +30.5% |   +98 |  6.7% → 9.1% | 321 → 419 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001188000 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011a7248` |
|  +30.2% |   +97 |  6.7% → 9.0% | 321 → 418 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                   |
|   +8.7% |   +39 | 9.4% → 10.6% | 450 → 489 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |
|   +6.0% |   +26 |  9.0% → 9.9% | 431 → 457 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                   |
|   +6.0% |   +26 |  9.0% → 9.9% | 430 → 456 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |
|   +5.3% |   +23 |  9.1% → 9.9% | 433 → 456 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |
|     new |   +22 |  0.0% → 0.5% |    0 → 22 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                                                                                                   |
|   +3.4% |   +14 |  8.7% → 9.3% | 414 → 428 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                   |
|   +3.1% |   +13 |  8.7% → 9.3% | 415 → 428 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187218 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011a3b90` |
| +128.6% |    +9 |  0.1% → 0.3% |    7 → 16 | `setUpBeforeAll(BenchmarkContext)`                                                                                     | `org.renaissance.jdk.concurrent.FjKmeans`                                                                                                     |
|  +21.1% |    +8 |  0.8% → 1.0% |   38 → 46 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                                                                                               |
|  +17.5% |    +7 |  0.8% → 1.0% |   40 → 47 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                                                                                               |
|  +17.5% |    +7 |  0.8% → 1.0% |   40 → 47 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                                                                                               |
|  +37.5% |    +6 |  0.3% → 0.5% |   16 → 22 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111f208 → org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000040111f1b8` |
|  +50.0% |    +6 |  0.3% → 0.4% |   12 → 18 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                                                                                                     |
|     new |    +6 |  0.0% → 0.1% |     0 → 6 | `rowToArray$1(Map)`                                                                                                    | `org.renaissance.jdk.concurrent.FjKmeans`                                                                                                     |
|     new |    +6 |  0.0% → 0.1% |     0 → 6 | `setUpBeforeAll$$anonfun$1(Map)`                                                                                       | `org.renaissance.jdk.concurrent.FjKmeans`                                                                                                     |
|     new |    +6 |  0.0% → 0.1% |     0 → 6 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x0000000401126908`                                                                          |
|     new |    +6 |  0.0% → 0.1% |     0 → 6 | `lambda$toCsvRows$2(String[], Function, String)`                                                                       | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`                                                                            |
|     new |    +6 |  0.0% → 0.1% |     0 → 6 | `apply(Object)`                                                                                                        | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter$$Lambda.0x0000000401123bf8`                                                 |

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

Functions with the largest decrease in total samples taken in the function and all its callees.

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

|  Change | Delta |             % |       Samples | Function                                                                                                               | Location                                                                                                                                                                    |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   -6.3% |  -265 | 88.6% → 85.6% | 4,219 → 3,954 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                                                                                                      |
|  -16.3% |  -247 | 31.8% → 27.5% | 1,517 → 1,270 | `vectorSum()`                                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                                                                                                   |
|  -16.3% |  -247 | 31.8% → 27.5% | 1,517 → 1,270 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                                                                                                   |
|  -26.3% |  -231 | 18.5% → 14.0% |     880 → 649 | `distance(Double[], Double[])`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                                                  |
|  -21.0% |  -207 | 20.7% → 16.9% |     986 → 779 | `accumulate(Double[], double[])`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                                                                                                   |
|   -7.6% |  -102 | 28.1% → 26.7% | 1,337 → 1,235 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                                                  |
|  -12.2% |   -82 | 14.2% → 12.8% |     674 → 592 | `computeClusterAverages()`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                                                                                                      |
|  -12.2% |   -82 | 14.2% → 12.8% |     674 → 592 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                                                                                                      |
|  -12.0% |   -80 | 14.0% → 12.7% |     669 → 589 | `average(List)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                                                                                                      |
|   -3.5% |   -63 | 37.5% → 37.3% | 1,787 → 1,724 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                                                  |
| removed |   -16 |   0.3% → 0.0% |        16 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                                                                                                                                 |
|   -3.0% |   -14 |          9.9% |     470 → 456 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                                                 |
|   -3.0% |   -14 |          9.9% |     470 → 456 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011a2bd0`                               |
|  -80.0% |    -4 |  0.1% → <0.1% |         5 → 1 | `run(BenchmarkContext)`                                                                                                | `org.renaissance.jdk.concurrent.FjKmeans`                                                                                                                                   |
|  -80.0% |    -4 |  0.1% → <0.1% |         5 → 1 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000007001186b38 → org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000004011a3940` |
|  -60.0% |    -3 |  0.1% → <0.1% |         5 → 2 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                                                                                                                                   |
|  -75.0% |    -3 |  0.1% → <0.1% |         4 → 1 | `lambda$collectClusters$0(Double[])`                                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                                                  |
|  -50.0% |    -2 |  0.1% → <0.1% |         4 → 2 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                                                                                                   |
|  -66.7% |    -2 |  0.1% → <0.1% |         3 → 1 | `<init>(JavaKMeans, List, List, int, int)`                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                                                  |
|  -33.3% |    -1 |  0.1% → <0.1% |         3 → 2 | `boxed(double[])`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                                                                                                      |

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

# Allocated heap profile diff

Allocated 36.9 GiB → 37.1 GiB (+200.872 MiB, +0.5%) over 75,234 samples → 75,635 samples (514 KiB per sample).

| Category         | Change |        Delta |             % |                Size |         Samples |
| ---------------- | -----: | -----------: | ------------: | ------------------: | --------------: |
| Standard library |  +0.3% | +115.872 MiB | 93.2% → 93.1% | 34.4 GiB → 34.5 GiB | 70,131 → 70,362 |
| Ours             |  +3.3% |  +84.999 MiB |   6.8% → 6.9% | 2.49 GiB → 2.57 GiB |   5,103 → 5,273 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

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

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

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

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|  Change |        Delta |             % |                Size |         Samples | Function                                                                                                               | Location                                                                                                                                      |
| ------: | -----------: | ------------: | ------------------: | --------------: | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
|     new |  +206.46 MiB |   0.0% → 0.5% |       0 B → 206 MiB |         0 → 407 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                                                                                                   |
|   +0.5% | +185.372 MiB |         99.4% | 36.7 GiB → 36.9 GiB | 74,820 → 75,190 | `doExec()`                                                                                                             | `java.util.concurrent.ForkJoinTask`                                                                                                           |
|   +0.5% | +185.372 MiB |         99.4% | 36.7 GiB → 36.9 GiB | 74,820 → 75,190 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`                                                                   | `java.util.concurrent.ForkJoinPool$WorkQueue`                                                                                                 |
|   +0.5% | +185.372 MiB |         99.4% | 36.7 GiB → 36.9 GiB | 74,820 → 75,190 | `scan(ForkJoinPool$WorkQueue, int, int)`                                                                               | `java.util.concurrent.ForkJoinPool`                                                                                                           |
|   +0.5% | +185.372 MiB |         99.4% | 36.7 GiB → 36.9 GiB | 74,820 → 75,190 | `runWorker(ForkJoinPool$WorkQueue)`                                                                                    | `java.util.concurrent.ForkJoinPool`                                                                                                           |
|   +0.5% | +185.372 MiB |         99.4% | 36.7 GiB → 36.9 GiB | 74,820 → 75,190 | `run()`                                                                                                                | `java.util.concurrent.ForkJoinWorkerThread`                                                                                                   |
|   +0.5% | +184.372 MiB |         99.4% | 36.7 GiB → 36.9 GiB | 74,817 → 75,185 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                                                                        |
|   +0.5% | +184.372 MiB |         99.4% | 36.7 GiB → 36.9 GiB | 74,817 → 75,185 | `exec()`                                                                                                               | `java.util.concurrent.RecursiveTask`                                                                                                          |
| +240.7% | +129.999 MiB |   0.1% → 0.5% |    54 MiB → 184 MiB |       108 → 368 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001125b10 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011a2150` |
|   +1.8% | +119.999 MiB | 17.4% → 17.6% | 6.41 GiB → 6.52 GiB | 13,122 → 13,362 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |
|   +0.4% | +116.999 MiB | 79.4% → 79.3% | 29.3 GiB → 29.4 GiB | 59,990 → 60,224 | `awaitDone(int, long)`                                                                                                 | `java.util.concurrent.ForkJoinTask`                                                                                                           |
|   +0.4% | +116.999 MiB | 79.4% → 79.3% | 29.3 GiB → 29.4 GiB | 59,990 → 60,224 | `join()`                                                                                                               | `java.util.concurrent.ForkJoinTask`                                                                                                           |
|   +1.3% | +106.499 MiB | 21.9% → 22.1% | 8.08 GiB → 8.18 GiB | 16,538 → 16,751 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |
|   +0.3% | +102.499 MiB | 78.6% → 78.4% |   29 GiB → 29.1 GiB | 59,368 → 59,573 | `tryRemoveAndExec(ForkJoinTask, boolean)`                                                                              | `java.util.concurrent.ForkJoinPool$WorkQueue`                                                                                                 |
|   +1.6% |  +99.999 MiB | 16.3% → 16.5% | 6.02 GiB → 6.12 GiB | 12,326 → 12,526 | `grow()`                                                                                                               | `java.util.ArrayList`                                                                                                                         |
|   +1.6% |  +99.999 MiB | 16.3% → 16.5% | 6.02 GiB → 6.12 GiB | 12,326 → 12,526 | `add(Object, Object[], int)`                                                                                           | `java.util.ArrayList`                                                                                                                         |
|   +1.6% |  +99.999 MiB | 16.3% → 16.5% | 6.02 GiB → 6.12 GiB | 12,326 → 12,526 | `add(Object)`                                                                                                          | `java.util.ArrayList`                                                                                                                         |
|   +0.2% |  +73.372 MiB | 91.1% → 90.8% | 33.6 GiB → 33.7 GiB | 68,525 → 68,671 | `copyOf(Object[], int)`                                                                                                | `java.util.Arrays`                                                                                                                            |
|   +0.4% |  +71.372 MiB | 52.8% → 52.7% | 19.5 GiB → 19.6 GiB | 39,598 → 39,740 | `grow(int)`                                                                                                            | `java.util.ArrayList`                                                                                                                         |
|  +42.1% |  +70.499 MiB |   0.4% → 0.6% |   167 MiB → 238 MiB |       335 → 476 | `computeClusterAverages()`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                                                                        |

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

|  Change |        Delta |             % |                Size |         Samples | Function                                                                                                               | Location                                                                                                                                      |
| ------: | -----------: | ------------: | ------------------: | --------------: | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
|     new |  +206.46 MiB |   0.0% → 0.5% |       0 B → 206 MiB |         0 → 407 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                                                                                                   |
|   +0.5% | +184.372 MiB |         99.4% | 36.7 GiB → 36.9 GiB | 74,817 → 75,185 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                                                                        |
| +240.7% | +129.999 MiB |   0.1% → 0.5% |    54 MiB → 184 MiB |       108 → 368 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001125b10 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011a2150` |
|   +1.8% | +119.999 MiB | 17.4% → 17.6% | 6.41 GiB → 6.52 GiB | 13,122 → 13,362 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |
|   +1.3% | +106.499 MiB | 21.9% → 22.1% | 8.08 GiB → 8.18 GiB | 16,538 → 16,751 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |
|  +42.1% |  +70.499 MiB |   0.4% → 0.6% |   167 MiB → 238 MiB |       335 → 476 | `computeClusterAverages()`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                                                                        |
|  +42.1% |  +70.499 MiB |   0.4% → 0.6% |   167 MiB → 238 MiB |       335 → 476 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                                                                        |
|  +42.8% |  +65.499 MiB |   0.4% → 0.6% |   153 MiB → 218 MiB |       306 → 437 | `average(List)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                                                                        |
|  +41.3% |  +29.499 MiB |   0.2% → 0.3% |  71.5 MiB → 101 MiB |       143 → 202 | `vectorSum()`                                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                                                                     |
|  +41.3% |  +29.499 MiB |   0.2% → 0.3% |  71.5 MiB → 101 MiB |       143 → 202 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                                                                     |
|  +37.3% |  +24.999 MiB |          0.2% |     67 MiB → 92 MiB |       134 → 184 | `add(double[], double[])`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                                                                     |
|  +37.3% |  +24.999 MiB |          0.2% |     67 MiB → 92 MiB |       134 → 184 | `combineResults(double[], double[])`                                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                                                                     |
|  +37.3% |  +24.999 MiB |          0.2% |     67 MiB → 92 MiB |       134 → 184 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                                                                     |
|  +19.6% |  +23.999 MiB |   0.3% → 0.4% |   122 MiB → 146 MiB |       245 → 293 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |
|  +13.1% |  +19.999 MiB |   0.4% → 0.5% |   152 MiB → 172 MiB |       305 → 345 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                                                                     |
|  +10.6% |  +18.999 MiB |          0.5% |   179 MiB → 198 MiB |       352 → 390 | `setUpBeforeAll(BenchmarkContext)`                                                                                     | `org.renaissance.jdk.concurrent.FjKmeans`                                                                                                     |
|   +8.1% |  +15.499 MiB |          0.5% |   191 MiB → 206 MiB |       376 → 407 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111f208 → org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000040111f1b8` |
|   +8.1% |  +15.499 MiB |          0.5% |   191 MiB → 206 MiB |       376 → 407 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                                                                                                   |
|   +6.9% |  +14.499 MiB |          0.6% |   209 MiB → 223 MiB |       412 → 441 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                                                                                               |
|   +6.9% |  +14.499 MiB |          0.6% |   209 MiB → 223 MiB |       412 → 441 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                                                                                               |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

|  Change |        Delta |             % |                Size |         Samples | Function                                                                                                               | Location                                                                                                                                      |
| ------: | -----------: | ------------: | ------------------: | --------------: | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| removed |  -190.96 MiB |   0.5% → 0.0% |       191 MiB → 0 B |         376 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                                                                                                   |
|   -2.4% | -190.126 MiB | 20.7% → 20.1% | 7.64 GiB → 7.45 GiB | 15,330 → 14,949 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                   |
|   -2.4% | -190.126 MiB | 20.7% → 20.1% | 7.64 GiB → 7.45 GiB | 15,330 → 14,949 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011a2bd0` |
|   -2.4% | -190.126 MiB | 20.7% → 20.1% | 7.64 GiB → 7.45 GiB | 15,330 → 14,949 | `exec()`                                                                                                               | `java.util.concurrent.ForkJoinTask$AdaptedCallable`                                                                                           |
|   -1.6% | -131.126 MiB | 21.1% → 20.6% | 7.77 GiB → 7.64 GiB | 15,603 → 15,340 | `invoke()`                                                                                                             | `java.util.concurrent.ForkJoinTask`                                                                                                           |
|  -61.3% | -105.999 MiB |   0.5% → 0.2% |    173 MiB → 67 MiB |       346 → 134 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011258d8 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011a2388` |
|   -0.9% |  -62.499 MiB | 19.1% → 18.9% |    7.06 GiB → 7 GiB | 14,463 → 14,338 | `<init>(Collection)`                                                                                                   | `java.util.ArrayList`                                                                                                                         |
|   -0.1% |  -31.626 MiB | 75.7% → 75.2% |            27.9 GiB | 56,894 → 56,830 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                   |
|   -0.1% |  -31.626 MiB | 75.7% → 75.2% |            27.9 GiB | 56,894 → 56,830 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001188000 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011a7248` |
|   -0.1% |  -31.626 MiB | 76.4% → 75.9% | 28.2 GiB → 28.1 GiB | 57,397 → 57,333 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |
|   -0.1% |  -31.626 MiB | 76.4% → 75.9% | 28.2 GiB → 28.1 GiB | 57,397 → 57,333 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |
|   -0.1% |  -29.126 MiB | 75.7% → 75.2% |            27.9 GiB | 56,895 → 56,836 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                   |
|   -0.1% |  -29.126 MiB | 75.7% → 75.2% |            27.9 GiB | 56,895 → 56,836 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187218 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011a3b90` |
|   -0.1% |  -29.126 MiB | 75.7% → 75.2% |            27.9 GiB | 56,895 → 56,836 | `forEach(BiConsumer)`                                                                                                  | `java.util.HashMap`                                                                                                                           |
|   -0.1% |  -28.626 MiB | 75.7% → 75.2% |            27.9 GiB | 56,894 → 56,836 | `merge(Object, Object, BiFunction)`                                                                                    | `java.util.HashMap`                                                                                                                           |
|   -0.1% |  -28.626 MiB | 76.4% → 75.9% |            28.2 GiB | 57,402 → 57,344 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                   |
|   -0.8% |  -13.499 MiB |          4.5% | 1.67 GiB → 1.65 GiB |   3,416 → 3,389 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |
|   -5.0% |   -8.499 MiB |   0.5% → 0.4% |   171 MiB → 162 MiB |       342 → 325 | `putVal(int, Object, Object, boolean, boolean)`                                                                        | `java.util.HashMap`                                                                                                                           |
|  -59.1% |   -6.499 MiB |         <0.1% |    11 MiB → 4.5 MiB |          22 → 9 | `run(BenchmarkContext)`                                                                                                | `org.renaissance.jdk.concurrent.FjKmeans`                                                                                                     |
|  -54.2% |   -6.499 MiB |         <0.1% |    12 MiB → 5.5 MiB |         24 → 11 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                                                                                                     |

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

|  Change |        Delta |             % |                Size |         Samples | Function                                                                                                               | Location                                                                                                                                      |
| ------: | -----------: | ------------: | ------------------: | --------------: | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| removed |  -190.96 MiB |   0.5% → 0.0% |       191 MiB → 0 B |         376 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                                                                                                   |
|   -2.4% | -190.126 MiB | 20.7% → 20.1% | 7.64 GiB → 7.45 GiB | 15,330 → 14,949 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                   |
|   -2.4% | -190.126 MiB | 20.7% → 20.1% | 7.64 GiB → 7.45 GiB | 15,330 → 14,949 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011a2bd0` |
|  -61.3% | -105.999 MiB |   0.5% → 0.2% |    173 MiB → 67 MiB |       346 → 134 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011258d8 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011a2388` |
|   -0.1% |  -31.626 MiB | 75.7% → 75.2% |            27.9 GiB | 56,894 → 56,830 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                   |
|   -0.1% |  -31.626 MiB | 75.7% → 75.2% |            27.9 GiB | 56,894 → 56,830 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001188000 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011a7248` |
|   -0.1% |  -31.626 MiB | 76.4% → 75.9% | 28.2 GiB → 28.1 GiB | 57,397 → 57,333 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |
|   -0.1% |  -31.626 MiB | 76.4% → 75.9% | 28.2 GiB → 28.1 GiB | 57,397 → 57,333 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |
|   -0.1% |  -29.126 MiB | 75.7% → 75.2% |            27.9 GiB | 56,895 → 56,836 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                   |
|   -0.1% |  -29.126 MiB | 75.7% → 75.2% |            27.9 GiB | 56,895 → 56,836 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187218 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011a3b90` |
|   -0.1% |  -28.626 MiB | 76.4% → 75.9% |            28.2 GiB | 57,402 → 57,344 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                   |
|   -0.8% |  -13.499 MiB |          4.5% | 1.67 GiB → 1.65 GiB |   3,416 → 3,389 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |
|  -59.1% |   -6.499 MiB |         <0.1% |    11 MiB → 4.5 MiB |          22 → 9 | `run(BenchmarkContext)`                                                                                                | `org.renaissance.jdk.concurrent.FjKmeans`                                                                                                     |
|  -54.2% |   -6.499 MiB |         <0.1% |    12 MiB → 5.5 MiB |         24 → 11 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                                                                                                     |
| removed |   -1.999 MiB |  <0.1% → 0.0% |         2 MiB → 0 B |           4 → 0 | `$anonfun$1(int)`                                                                                                      | `org.renaissance.jdk.concurrent.FjKmeans`                                                                                                     |
| removed |   -1.499 MiB |  <0.1% → 0.0% |       1.5 MiB → 0 B |           3 → 0 | `withBenchmarkSpecification(String)`                                                                                   | `org.renaissance.harness.Config`                                                                                                              |
| removed |   -1.499 MiB |  <0.1% → 0.0% |       1.5 MiB → 0 B |           3 → 0 | `org$renaissance$harness$ConfigParser$$anon$1$$_$$lessinit$greater$$anonfun$25(String, Config)`                        | `org.renaissance.harness.ConfigParser`                                                                                                        |
| removed |   -1.499 MiB |  <0.1% → 0.0% |       1.5 MiB → 0 B |           3 → 0 | `apply(Object, Object)`                                                                                                | `org.renaissance.harness.ConfigParser$$anon$1$$Lambda.0x00000070010e7168`                                                                     |
| removed |   -1.499 MiB |  <0.1% → 0.0% |       1.5 MiB → 0 B |           3 → 0 | `action$$anonfun$1(Function2, Object, Object)`                                                                         | `scopt.OptionDef`                                                                                                                             |
| removed |   -1.499 MiB |  <0.1% → 0.0% |       1.5 MiB → 0 B |           3 → 0 | `apply(Object, Object)`                                                                                                | `scopt.OptionDef$$Lambda.0x00000070010d97d8`                                                                                                  |

# Lock contention profile diff

Blocked 1.6ms (+0.04ms, +2.8%) over 10 contentions → 16 contentions (160.3µs → 103.0µs per contention).

| Category         | Change |   Delta |              % |        Time | Contentions |
| ---------------- | -----: | ------: | -------------: | ----------: | ----------: |
| Standard library |  -1.2% | -0.02ms | 100.0% → 96.2% |       1.6ms |     10 → 15 |
| Ours             |    new | +0.06ms |    0.0% → 3.8% | 0ms → 0.1ms |       0 → 1 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time blocked directly in the function body, excluding callees.

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

Functions with the largest decrease in time blocked directly in the function body, excluding callees.

##### Standard library

|  Change |   Delta |             % |            Time | Contentions | Function                                    | Location                                            |
| ------: | ------: | ------------: | --------------: | ----------: | ------------------------------------------- | --------------------------------------------------- |
|  -40.6% | -0.50ms | 76.7% → 44.4% |   1.2ms → 0.7ms |           4 | `loadClass(String, boolean)`                | `java.lang.ClassLoader`                             |
| removed | -0.02ms |   1.5% → 0.0% |    24.2µs → 0ms |       1 → 0 | `iterator(DirectoryStream)`                 | `sun.nio.fs.UnixDirectoryStream`                    |
|   -4.8% | -0.01ms | 14.8% → 13.7% |           0.2ms |           1 | `loadClassOrNull(String, boolean)`          | `jdk.internal.loader.BuiltinClassLoader`            |
|  -10.0% | -0.01ms |   4.0% → 3.5% |           0.1ms |       2 → 1 | `<init>(boolean)`                           | `java.util.concurrent.locks.ReentrantReadWriteLock` |
|   -1.8% | -0.42µs |          1.4% | 23.2µs → 22.8µs |           1 | `walkFileTree(Path, Set, int, FileVisitor)` | `java.nio.file.Files`                               |

### Total time

#### Regressions

Functions with the largest increase in total time blocked in the function and all its callees.

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

Functions with the largest decrease in total time blocked in the function and all its callees.

|  Change |   Delta |             % |          Time | Contentions | Function                                    | Location                                                                                                              |
| ------: | ------: | ------------: | ------------: | ----------: | ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
|  -34.8% | -0.51ms | 91.5% → 58.1% | 1.5ms → 1.0ms |           5 | `loadClass(String)`                         | `java.lang.ClassLoader`                                                                                               |
|  -40.6% | -0.50ms | 76.7% → 44.4% | 1.2ms → 0.7ms |           4 | `loadClass(String, boolean)`                | `java.lang.ClassLoader`                                                                                               |
|  -67.6% | -0.45ms | 41.9% → 13.2% | 0.7ms → 0.2ms |           2 | `tryRemoveAndExec(ForkJoinTask, boolean)`   | `java.util.concurrent.ForkJoinPool$WorkQueue`                                                                         |
|  -35.4% | -0.44ms | 76.7% → 48.2% | 1.2ms → 0.8ms |       4 → 5 | `average(List)`                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                                                |
|  -22.5% | -0.03ms |   8.5% → 6.4% |         0.1ms |       5 → 3 | `walkFileTree(Path, Set, int, FileVisitor)` | `java.nio.file.Files`                                                                                                 |
|  -26.7% | -0.03ms |   7.0% → 5.0% |         0.1ms |       4 → 2 | `visit(Path, boolean, boolean)`             | `java.nio.file.FileTreeWalker`                                                                                        |
|  -26.7% | -0.03ms |   7.0% → 5.0% |         0.1ms |       4 → 2 | `walk(Path)`                                | `java.nio.file.FileTreeWalker`                                                                                        |
| removed | -0.02ms |   1.5% → 0.0% |  24.2µs → 0ms |       1 → 0 | `iterator(DirectoryStream)`                 | `sun.nio.fs.UnixDirectoryStream`                                                                                      |
| removed | -0.02ms |   1.5% → 0.0% |  24.2µs → 0ms |       1 → 0 | `iterator()`                                | `sun.nio.fs.UnixDirectoryStream`                                                                                      |
| removed | -0.02ms |   1.5% → 0.0% |  24.2µs → 0ms |       1 → 0 | `<init>(Path, Object, DirectoryStream)`     | `java.nio.file.FileTreeWalker$DirectoryNode`                                                                          |
|   -4.6% | -0.02ms | 23.3% → 21.6% |         0.4ms |       6 → 5 | `deleteRecursively(Path, boolean)`          | `org.renaissance.core.DirUtils`                                                                                       |
|   -4.6% | -0.02ms | 23.3% → 21.6% |         0.4ms |       6 → 5 | `deleteRecursively(Path)`                   | `org.renaissance.core.DirUtils`                                                                                       |
|   -4.6% | -0.02ms | 23.3% → 21.6% |         0.4ms |       6 → 5 | `lambda$createScratchDirectory$1(Path)`     | `org.renaissance.core.DirUtils`                                                                                       |
|   -4.6% | -0.02ms | 23.3% → 21.6% |         0.4ms |       6 → 5 | `run()`                                     | `org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68 → org.renaissance.core.DirUtils$$Lambda.0x0000000401003a68` |
|   -4.6% | -0.02ms | 23.3% → 21.6% |         0.4ms |       6 → 5 | `runWith(Object, Runnable)`                 | `java.lang.Thread`                                                                                                    |
|   -4.6% | -0.02ms | 23.3% → 21.6% |         0.4ms |       6 → 5 | `run()`                                     | `java.lang.Thread`                                                                                                    |
|   -4.8% | -0.01ms | 14.8% → 13.7% |         0.2ms |           1 | `loadClassOrNull(String, boolean)`          | `jdk.internal.loader.BuiltinClassLoader`                                                                              |
|   -4.8% | -0.01ms | 14.8% → 13.7% |         0.2ms |           1 | `loadClass(String, boolean)`                | `jdk.internal.loader.BuiltinClassLoader`                                                                              |
|   -4.8% | -0.01ms | 14.8% → 13.7% |         0.2ms |           1 | `loadClass(String, boolean)`                | `jdk.internal.loader.ClassLoaders$AppClassLoader`                                                                     |
|  -10.0% | -0.01ms |   4.0% → 3.5% |         0.1ms |       2 → 1 | `<init>(boolean)`                           | `java.util.concurrent.locks.ReentrantReadWriteLock`                                                                   |

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

| Change |   Delta |             % |          Time | Contentions | Function                                | Location                                                                                                              |
| -----: | ------: | ------------: | ------------: | ----------: | --------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| -35.4% | -0.44ms | 76.7% → 48.2% | 1.2ms → 0.8ms |       4 → 5 | `average(List)`                         | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                                                |
|  -4.6% | -0.02ms | 23.3% → 21.6% |         0.4ms |       6 → 5 | `deleteRecursively(Path, boolean)`      | `org.renaissance.core.DirUtils`                                                                                       |
|  -4.6% | -0.02ms | 23.3% → 21.6% |         0.4ms |       6 → 5 | `deleteRecursively(Path)`               | `org.renaissance.core.DirUtils`                                                                                       |
|  -4.6% | -0.02ms | 23.3% → 21.6% |         0.4ms |       6 → 5 | `lambda$createScratchDirectory$1(Path)` | `org.renaissance.core.DirUtils`                                                                                       |
|  -4.6% | -0.02ms | 23.3% → 21.6% |         0.4ms |       6 → 5 | `run()`                                 | `org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68 → org.renaissance.core.DirUtils$$Lambda.0x0000000401003a68` |

# Sampling profile diff

Collected 4,779 samples → 5,299 samples (+520 samples, +10.9%).

| Category         | Change | Delta |             % |       Samples |
| ---------------- | -----: | ----: | ------------: | ------------: |
| Ours             |  +1.9% |   +53 | 59.1% → 54.3% | 2,825 → 2,878 |
| Native           | +39.0% |  +468 | 25.1% → 31.5% | 1,199 → 1,667 |
| Standard library |  +2.4% |   +15 | 13.1% → 12.1% |     625 → 640 |
| Compiler         |  -2.9% |    -2 |   1.4% → 1.2% |       68 → 66 |
| JIT              | -24.2% |   -15 |   1.3% → 0.9% |       62 → 47 |
| Unknown          |    new |    +1 |  0.0% → <0.1% |         0 → 1 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |             % |     Samples | Function                                                                                             | Location                                                  |
| ------: | ----: | ------------: | ----------: | ---------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
|  +70.3% |  +466 | 13.9% → 21.3% | 663 → 1,129 | `__psynch_cvwait`                                                                                    | `<unknown>`                                               |
|  +51.2% |  +205 |  8.4% → 11.4% |   400 → 605 | `vectorSum()`                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  +18.4% |   +18 |   2.1% → 2.2% |    98 → 116 | `doubleValue()`                                                                                      | `java.lang.Double`                                        |
|   +7.5% |   +14 |   3.9% → 3.8% |   186 → 200 | `forward_copy_longs`                                                                                 | `<unknown>`                                               |
| +100.0% |   +10 |   0.2% → 0.4% |     10 → 20 | `__psynch_mutexwait`                                                                                 | `<unknown>`                                               |
|   +7.1% |    +9 |   2.6% → 2.5% |   126 → 135 | `computeIfAbsent(Object, Function)`                                                                  | `java.util.HashMap`                                       |
|  +37.5% |    +6 |   0.3% → 0.4% |     16 → 22 | `_platform_bzero`                                                                                    | `<unknown>`                                               |
| +600.0% |    +6 |  <0.1% → 0.1% |       1 → 7 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region(HeapRegion*, bool)` | `<unknown>`                                               |
|  +11.4% |    +5 |          0.9% |     44 → 49 | `add(Object, Object[], int)`                                                                         | `java.util.ArrayList`                                     |
| +166.7% |    +5 |   0.1% → 0.2% |       3 → 8 | `G1RegionMarkStatsCache::add_live_words(oopDesc*)`                                                   | `<unknown>`                                               |
| +200.0% |    +4 |  <0.1% → 0.1% |       2 → 6 | `scan(ForkJoinPool$WorkQueue, int, int)`                                                             | `java.util.concurrent.ForkJoinPool`                       |
| +400.0% |    +4 |  <0.1% → 0.1% |       1 → 5 | `G1ParScanThreadState::do_partial_array(PartialArrayScanTask)`                                       | `<unknown>`                                               |
|     new |    +3 |   0.0% → 0.1% |       0 → 3 | `join()`                                                                                             | `java.util.concurrent.ForkJoinTask`                       |
| +300.0% |    +3 |  <0.1% → 0.1% |       1 → 4 | `get(int)`                                                                                           | `java.util.ArrayList`                                     |
|  +13.6% |    +3 |          0.5% |     22 → 25 | `hash(Object)`                                                                                       | `java.util.HashMap`                                       |
|  +75.0% |    +3 |          0.1% |       4 → 7 | `_platform_memset`                                                                                   | `<unknown>`                                               |
| +100.0% |    +3 |          0.1% |       3 → 6 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>(G1MarkAndPushClosure*, int, int)`     | `<unknown>`                                               |
|     new |    +3 |   0.0% → 0.1% |       0 → 3 | `combineResults(Object, Object)`                                                                     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|     new |    +3 |   0.0% → 0.1% |       0 → 3 | `IndexSetIterator::advance_and_next()`                                                               | `<unknown>`                                               |
|     new |    +3 |   0.0% → 0.1% |       0 → 3 | `G1FullGCCompactTask::copy_object_to_new_location(oopDesc*)`                                         | `<unknown>`                                               |

##### Ours

|  Change | Delta |            % |   Samples | Function                                   | Location                                                   |
| ------: | ----: | -----------: | --------: | ------------------------------------------ | ---------------------------------------------------------- |
|  +51.2% |  +205 | 8.4% → 11.4% | 400 → 605 | `vectorSum()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|     new |    +3 |  0.0% → 0.1% |     0 → 3 | `combineResults(Object, Object)`           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `<init>(JavaKMeans, Map)`                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  +33.3% |    +1 |         0.1% |     3 → 4 | `createSubtask(int, int)`                  | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| +100.0% |    +1 |        <0.1% |     1 → 2 | `<init>(JavaKMeans, int, int)`             | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `forkThreshold()`                          | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `createSubtask(int, int)`                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `<init>(JavaKMeans, List, List, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### Native

|  Change | Delta |             % |     Samples | Function                                                                                             | Location    |
| ------: | ----: | ------------: | ----------: | ---------------------------------------------------------------------------------------------------- | ----------- |
|  +70.3% |  +466 | 13.9% → 21.3% | 663 → 1,129 | `__psynch_cvwait`                                                                                    | `<unknown>` |
|   +7.5% |   +14 |   3.9% → 3.8% |   186 → 200 | `forward_copy_longs`                                                                                 | `<unknown>` |
| +100.0% |   +10 |   0.2% → 0.4% |     10 → 20 | `__psynch_mutexwait`                                                                                 | `<unknown>` |
|  +37.5% |    +6 |   0.3% → 0.4% |     16 → 22 | `_platform_bzero`                                                                                    | `<unknown>` |
| +600.0% |    +6 |  <0.1% → 0.1% |       1 → 7 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region(HeapRegion*, bool)` | `<unknown>` |
| +166.7% |    +5 |   0.1% → 0.2% |       3 → 8 | `G1RegionMarkStatsCache::add_live_words(oopDesc*)`                                                   | `<unknown>` |
| +400.0% |    +4 |  <0.1% → 0.1% |       1 → 5 | `G1ParScanThreadState::do_partial_array(PartialArrayScanTask)`                                       | `<unknown>` |
|  +75.0% |    +3 |          0.1% |       4 → 7 | `_platform_memset`                                                                                   | `<unknown>` |
| +100.0% |    +3 |          0.1% |       3 → 6 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>(G1MarkAndPushClosure*, int, int)`     | `<unknown>` |
|     new |    +3 |   0.0% → 0.1% |       0 → 3 | `G1FullGCCompactTask::copy_object_to_new_location(oopDesc*)`                                         | `<unknown>` |
|     new |    +3 |   0.0% → 0.1% |       0 → 3 | `pthread_testcancel`                                                                                 | `<unknown>` |
|  +11.1% |    +2 |          0.4% |     18 → 20 | `arrayof_jint_disjoint_arraycopy`                                                                    | `<unknown>` |
|     new |    +2 |  0.0% → <0.1% |       0 → 2 | `CollectedHeap::array_allocate(Klass*, unsigned long, int, bool, JavaThread*)`                       | `<unknown>` |
| +200.0% |    +2 |  <0.1% → 0.1% |       1 → 3 | `ObjArrayAllocator::initialize(HeapWordImpl**) const`                                                | `<unknown>` |
| +200.0% |    +2 |  <0.1% → 0.1% |       1 → 3 | `pthread_dependency_wait_np.cold.3`                                                                  | `<unknown>` |
|     new |    +2 |  0.0% → <0.1% |       0 → 2 | `ObjAllocator::initialize(HeapWordImpl**) const`                                                     | `<unknown>` |
|     new |    +2 |  0.0% → <0.1% |       0 → 2 | `G1FullGCCompactTask::compact_region(HeapRegion*)`                                                   | `<unknown>` |
|     new |    +2 |  0.0% → <0.1% |       0 → 2 | `CollectedHeap::fill_with_object(HeapWordImpl**, unsigned long, bool)`                               | `<unknown>` |
|     new |    +2 |  0.0% → <0.1% |       0 → 2 | `thread_self_trap`                                                                                   | `<unknown>` |
| +100.0% |    +1 |         <0.1% |       1 → 2 | `Parker::park(bool, long)`                                                                           | `<unknown>` |

##### Standard library

|  Change | Delta |            % |   Samples | Function                                 | Location                                       |
| ------: | ----: | -----------: | --------: | ---------------------------------------- | ---------------------------------------------- |
|  +18.4% |   +18 |  2.1% → 2.2% |  98 → 116 | `doubleValue()`                          | `java.lang.Double`                             |
|   +7.1% |    +9 |  2.6% → 2.5% | 126 → 135 | `computeIfAbsent(Object, Function)`      | `java.util.HashMap`                            |
|  +11.4% |    +5 |         0.9% |   44 → 49 | `add(Object, Object[], int)`             | `java.util.ArrayList`                          |
| +200.0% |    +4 | <0.1% → 0.1% |     2 → 6 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool`            |
|     new |    +3 |  0.0% → 0.1% |     0 → 3 | `join()`                                 | `java.util.concurrent.ForkJoinTask`            |
| +300.0% |    +3 | <0.1% → 0.1% |     1 → 4 | `get(int)`                               | `java.util.ArrayList`                          |
|  +13.6% |    +3 |         0.5% |   22 → 25 | `hash(Object)`                           | `java.util.HashMap`                            |
| +200.0% |    +2 | <0.1% → 0.1% |     1 → 3 | `forEach(BiConsumer)`                    | `java.util.HashMap`                            |
| +100.0% |    +1 |        <0.1% |     1 → 2 | `exec()`                                 | `java.util.concurrent.RecursiveTask`           |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `park(boolean, long)`                    | `jdk.internal.misc.Unsafe`                     |
|  +33.3% |    +1 |         0.1% |     3 → 4 | `grow()`                                 | `java.util.ArrayList`                          |
|   +4.8% |    +1 |         0.4% |   21 → 22 | `checkIndex(int, int)`                   | `java.util.Objects`                            |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `<init>(Collection)`                     | `java.util.ArrayList`                          |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `allocateInstance(Class)`                | `jdk.internal.misc.Unsafe`                     |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `generateInnerClass()`                   | `java.lang.invoke.InnerClassLambdaMetafactory` |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `signalWork()`                           | `java.util.concurrent.ForkJoinPool`            |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `<init>(int)`                            | `java.util.jar.Attributes`                     |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `read(InputStream, String)`              | `java.util.jar.Manifest`                       |
| +100.0% |    +1 |        <0.1% |     1 → 2 | `entrySet()`                             | `java.util.HashMap`                            |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `getStreamAndOpFlags()`                  | `java.util.stream.AbstractPipeline`            |

##### Compiler

| Change | Delta |            % | Samples | Function                                                                          | Location    |
| -----: | ----: | -----------: | ------: | --------------------------------------------------------------------------------- | ----------- |
|    new |    +3 |  0.0% → 0.1% |   0 → 3 | `IndexSetIterator::advance_and_next()`                                            | `<unknown>` |
|    new |    +2 | 0.0% → <0.1% |   0 → 2 | `Node::set_req_X(unsigned int, Node*, PhaseIterGVN*)`                             | `<unknown>` |
|    new |    +2 | 0.0% → <0.1% |   0 → 2 | `ValueStack::values_do(ValueVisitor*)`                                            | `<unknown>` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseIdealLoop::split_if_with_blocks(VectorSet&, Node_Stack&)`                   | `<unknown>` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseIterGVN::transform_old(Node*)`                                              | `<unknown>` |
| +50.0% |    +1 | <0.1% → 0.1% |   2 → 3 | `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)`           | `<unknown>` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `Matcher::find_shared(Node*)`                                                     | `<unknown>` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `GraphBuilder::try_inline(ciMethod*, bool, bool, Bytecodes::Code, Instruction*)`  | `<unknown>` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `LinearScanWalker::alloc_free_reg(Interval*)`                                     | `<unknown>` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `ValueStack::ValueStack(ValueStack*, ValueStack::Kind, int)`                      | `<unknown>` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `IfTrueNode::Opcode() const`                                                      | `<unknown>` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseIdealLoop::match_fill_loop(IdealLoopTree*, Node*&, Node*&, Node*&, Node*&)` | `<unknown>` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `ciObjectFactory::get_metadata(Metadata*)`                                        | `<unknown>` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `TypeOopPtr::cleanup_speculative() const`                                         | `<unknown>` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `Unique_Node_List::remove(Node*)`                                                 | `<unknown>` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseCFG::implicit_null_check(Block*, Node*, Node*, int)`                        | `<unknown>` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `Node::rematerialize() const`                                                     | `<unknown>` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhiNode::Opcode() const`                                                         | `<unknown>` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `LinearScan::build_intervals()`                                                   | `<unknown>` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `LoadINode::Opcode() const`                                                       | `<unknown>` |

##### JIT

|  Change | Delta |            % | Samples | Function                | Location    |
| ------: | ----: | -----------: | ------: | ----------------------- | ----------- |
| +100.0% |    +1 |        <0.1% |   1 → 2 | `vtable stub`           | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `I2C/C2I adapters(0xb)` | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `itable stub`           | `<unknown>` |

#### Improvements

Functions with the largest decrease in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |             % |   Samples | Function                                                                                | Location                                                   |
| ------: | ----: | ------------: | --------: | --------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
|   -7.8% |   -70 | 18.7% → 15.6% | 894 → 824 | `distance(Double[], Double[])`                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -9.3% |   -38 |   8.5% → 7.0% | 408 → 370 | `findNearestCentroid()`                                                                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -2.6% |   -25 | 20.4% → 17.9% | 975 → 950 | `accumulate(Double[], double[])`                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -29.2% |   -19 |   1.4% → 0.9% |   65 → 46 | `__psynch_cvsignal`                                                                     | `<unknown>`                                                |
|  -30.0% |   -18 |   1.3% → 0.8% |   60 → 42 | `zero_blocks`                                                                           | `<unknown>`                                                |
|  -13.3% |   -17 |   2.7% → 2.1% | 128 → 111 | `collectClusters(int[])`                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -54.8% |   -17 |   0.6% → 0.3% |   31 → 14 | `G1FullGCMarker::mark_object(oopDesc*)`                                                 | `<unknown>`                                                |
| removed |   -10 |   0.2% → 0.0% |    10 → 0 | `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)` | `<unknown>`                                                |
|  -28.0% |    -7 |   0.5% → 0.3% |   25 → 18 | `semaphore_wait_trap`                                                                   | `<unknown>`                                                |
| removed |    -7 |   0.1% → 0.0% |     7 → 0 | `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)`                           | `<unknown>`                                                |
|  -38.9% |    -7 |   0.4% → 0.2% |   18 → 11 | `pthread_jit_write_protect_np`                                                          | `<unknown>`                                                |
|  -21.7% |    -5 |   0.5% → 0.3% |   23 → 18 | `grow(int)`                                                                             | `java.util.ArrayList`                                      |
|  -55.6% |    -5 |   0.2% → 0.1% |     9 → 4 | `copyOf(Object[], int)`                                                                 | `java.util.Arrays`                                         |
|   -2.5% |    -4 |   3.4% → 3.0% | 161 → 157 | `elementData(int)`                                                                      | `java.util.ArrayList`                                      |
| removed |    -4 |   0.1% → 0.0% |     4 → 0 | `releaseAccess()`                                                                       | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| removed |    -3 |   0.1% → 0.0% |     3 → 0 | `doExec()`                                                                              | `java.util.concurrent.ForkJoinTask`                        |
| removed |    -3 |   0.1% → 0.0% |     3 → 0 | `push(ForkJoinTask, ForkJoinPool, boolean)`                                             | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
|  -60.0% |    -3 |  0.1% → <0.1% |     5 → 2 | `G1BarrierSet::invalidate(MemRegion)`                                                   | `<unknown>`                                                |
|   -7.7% |    -2 |          0.5% |   26 → 24 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`                               | `java.util.concurrent.ForkJoinPool`                        |
|  -66.7% |    -2 |  0.1% → <0.1% |     3 → 1 | `signalWaiters()`                                                                       | `java.util.concurrent.ForkJoinTask`                        |

##### Ours

|  Change | Delta |             % |   Samples | Function                         | Location                                                               |
| ------: | ----: | ------------: | --------: | -------------------------------- | ---------------------------------------------------------------------- |
|   -7.8% |   -70 | 18.7% → 15.6% | 894 → 824 | `distance(Double[], Double[])`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -9.3% |   -38 |   8.5% → 7.0% | 408 → 370 | `findNearestCentroid()`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -2.6% |   -25 | 20.4% → 17.9% | 975 → 950 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -13.3% |   -17 |   2.7% → 2.1% | 128 → 111 | `collectClusters(int[])`         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -66.7% |    -2 |  0.1% → <0.1% |     3 → 1 | `add(double[], double[])`        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -50.0% |    -1 |         <0.1% |     2 → 1 | `compute()`                      | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  -50.0% |    -1 |         <0.1% |     2 → 1 | `computeClusterAverages()`       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `accept(Object, Object)`         | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000` |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `apply(int)`                     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2388` |
|  -50.0% |    -1 |         <0.1% |     2 → 1 | `forkThreshold()`                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `forkThreshold()`                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `createSubtask(int, int)`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |

##### Native

|  Change | Delta |            % | Samples | Function                                                                                   | Location    |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------ | ----------- |
|  -29.2% |   -19 |  1.4% → 0.9% | 65 → 46 | `__psynch_cvsignal`                                                                        | `<unknown>` |
|  -54.8% |   -17 |  0.6% → 0.3% | 31 → 14 | `G1FullGCMarker::mark_object(oopDesc*)`                                                    | `<unknown>` |
| removed |   -10 |  0.2% → 0.0% |  10 → 0 | `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)`    | `<unknown>` |
|  -28.0% |    -7 |  0.5% → 0.3% | 25 → 18 | `semaphore_wait_trap`                                                                      | `<unknown>` |
| removed |    -7 |  0.1% → 0.0% |   7 → 0 | `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)`                              | `<unknown>` |
|  -38.9% |    -7 |  0.4% → 0.2% | 18 → 11 | `pthread_jit_write_protect_np`                                                             | `<unknown>` |
|  -60.0% |    -3 | 0.1% → <0.1% |   5 → 2 | `G1BarrierSet::invalidate(MemRegion)`                                                      | `<unknown>` |
|  -33.3% |    -2 |         0.1% |   6 → 4 | `G1FullGCMarker::follow_object(oopDesc*)`                                                  | `<unknown>` |
|  -66.7% |    -2 | 0.1% → <0.1% |   3 → 1 | `HeapRegion::update_bot_for_block(HeapWordImpl**, HeapWordImpl**)`                         | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `__psynch_mutexdrop`                                                                       | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `G1CollectedHeap::unsafe_max_tlab_alloc(Thread*) const`                                    | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `G1ParScanThreadState::copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)`       | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `JNIHandleBlock::allocate_handle(JavaThread*, oopDesc*, AllocFailStrategy::AllocFailEnum)` | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Symbol::increment_refcount()`                                                             | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `JavaThread::is_interrupted(bool)`                                                         | `<unknown>` |
|  -20.0% |    -1 |         0.1% |   5 → 4 | `void G1ScanEvacuatedObjClosure::do_oop_work<narrowOop>(narrowOop*)`                       | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `G1DirtyCardQueueSet::num_par_ids()`                                                       | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Monitor::wait_without_safepoint_check(unsigned long long)`                                | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `ClassVerifier::create_temporary_symbol(Symbol*)`                                          | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `SpinPause`                                                                                | `<unknown>` |

##### Standard library

|  Change | Delta |            % |   Samples | Function                                                  | Location                                      |
| ------: | ----: | -----------: | --------: | --------------------------------------------------------- | --------------------------------------------- |
|  -21.7% |    -5 |  0.5% → 0.3% |   23 → 18 | `grow(int)`                                               | `java.util.ArrayList`                         |
|  -55.6% |    -5 |  0.2% → 0.1% |     9 → 4 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                            |
|   -2.5% |    -4 |  3.4% → 3.0% | 161 → 157 | `elementData(int)`                                        | `java.util.ArrayList`                         |
| removed |    -4 |  0.1% → 0.0% |     4 → 0 | `releaseAccess()`                                         | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| removed |    -3 |  0.1% → 0.0% |     3 → 0 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`           |
| removed |    -3 |  0.1% → 0.0% |     3 → 0 | `push(ForkJoinTask, ForkJoinPool, boolean)`               | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|   -7.7% |    -2 |         0.5% |   26 → 24 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
|  -66.7% |    -2 | 0.1% → <0.1% |     3 → 1 | `signalWaiters()`                                         | `java.util.concurrent.ForkJoinTask`           |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `fork()`                                                  | `java.util.concurrent.ForkJoinTask`           |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `<init>(HashMap)`                                         | `java.util.HashMap$HashIterator`              |
|  -28.6% |    -2 |         0.1% |     7 → 5 | `putVal(int, Object, Object, boolean, boolean)`           | `java.util.HashMap`                           |
|  -20.0% |    -1 |         0.1% |     5 → 4 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  -33.3% |    -1 | 0.1% → <0.1% |     3 → 2 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`           |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `add(Object)`                                             | `java.util.ArrayList`                         |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `unpark(Object)`                                          | `jdk.internal.misc.Unsafe`                    |
|  -50.0% |    -1 |        <0.1% |     2 → 1 | `unpark(Thread)`                                          | `java.util.concurrent.locks.LockSupport`      |
|  -50.0% |    -1 |        <0.1% |     2 → 1 | `nextNode()`                                              | `java.util.HashMap$HashIterator`              |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `append(char)`                                            | `java.lang.StringBuilder`                     |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `<init>(AbstractPipeline, int)`                           | `java.util.stream.AbstractPipeline`           |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `newLinkedHashMap(int)`                                   | `java.util.LinkedHashMap`                     |

##### Compiler

|  Change | Delta |            % | Samples | Function                                                                                                    | Location    |
| ------: | ----: | -----------: | ------: | ----------------------------------------------------------------------------------------------------------- | ----------- |
|  -66.7% |    -2 | 0.1% → <0.1% |   3 → 1 | `Matcher::match_tree(Node const*)`                                                                          | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `Matcher::pd_clone_node(Node*, Node*, Matcher::MStack&)`                                                    | `<unknown>` |
|  -40.0% |    -2 |         0.1% |   5 → 3 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`                                                           | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `Compile::identify_useful_nodes(Unique_Node_List&)`                                                         | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseIdealLoop::split_if_with_blocks_post(Node*)`                                                          | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `ConnectionGraph::find_non_escaped_objects(GrowableArray<PointsToNode*>&, GrowableArray<JavaObjectNode*>&)` | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `TypeInt::xmeet(Type const*) const`                                                                         | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Matcher::xform(Node*, int)`                                                                                | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `MacroAssembler::emit_trampoline_stub(int, unsigned char*)`                                                 | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Node::in(unsigned int) const`                                                                              | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseChaitin::Simplify()`                                                                                  | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseIterGVN::remove_globally_dead_node(Node*)`                                                            | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseIterGVN::subsume_node(Node*, Node*)`                                                                  | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `IfNode::Ideal(PhaseGVN*, bool)`                                                                            | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `CmpUNode::Opcode() const`                                                                                  | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `branchNode::is_block_proj() const`                                                                         | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `ciEnv::cache_dtrace_flags()`                                                                               | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `ciMetadata::is_array_klass() const`                                                                        | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Node::is_CFG() const`                                                                                      | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Assembler::operand_valid_for_sve_logical_immediate(unsigned int, unsigned long long)`                      | `<unknown>` |

##### JIT

| Change | Delta |           % | Samples | Function      | Location    |
| -----: | ----: | ----------: | ------: | ------------- | ----------- |
| -30.0% |   -18 | 1.3% → 0.8% | 60 → 42 | `zero_blocks` | `<unknown>` |

#### Callers

Callers with the largest change in contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `__psynch_cvwait` (`<unknown>`)

| Change | Delta |             % |     Samples | Caller                                      | Location    |
| -----: | ----: | ------------: | ----------: | ------------------------------------------- | ----------- |
| +70.7% |  +456 | 97.3% → 97.5% | 645 → 1,101 | `Parker::park(bool, long)`                  | `<unknown>` |
| +55.6% |   +10 |   2.7% → 2.5% |     18 → 28 | `PlatformMonitor::wait(unsigned long long)` | `<unknown>` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |   Samples | Caller              | Location                                                  |
| -----: | ----: | -----: | --------: | ------------------- | --------------------------------------------------------- |
| +51.2% |  +205 | 100.0% | 400 → 605 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `doubleValue()` (`java.lang.Double`)

| Change | Delta |             % |  Samples | Caller                           | Location                                                   |
| -----: | ----: | ------------: | -------: | -------------------------------- | ---------------------------------------------------------- |
| +23.9% |   +21 | 89.8% → 94.0% | 88 → 109 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| -30.0% |    -3 |  10.2% → 6.0% |   10 → 7 | `distance(Double[], Double[])`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `forward_copy_longs` (`<unknown>`)

| Change | Delta |             % |   Samples | Caller                            | Location    |
| -----: | ----: | ------------: | --------: | --------------------------------- | ----------- |
|  +9.0% |   +13 | 77.4% → 78.5% | 144 → 157 | `arrayof_jint_disjoint_arraycopy` | `<unknown>` |
|  +2.4% |    +1 | 22.6% → 21.5% |   42 → 43 | `arrayof_oop_disjoint_arraycopy`  | `<unknown>` |

##### `__psynch_mutexwait` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                              | Location    |
| ------: | ----: | -----: | ------: | ----------------------------------- | ----------- |
| +100.0% |   +10 | 100.0% | 10 → 20 | `_pthread_mutex_firstfit_lock_slow` | `<unknown>` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

| Change | Delta |      % |   Samples | Caller                   | Location                                                   |
| -----: | ----: | -----: | --------: | ------------------------ | ---------------------------------------------------------- |
|  +7.1% |    +9 | 100.0% | 126 → 135 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `_platform_bzero` (`<unknown>`)

| Change | Delta |              % | Samples | Caller                                                 | Location    |
| -----: | ----: | -------------: | ------: | ------------------------------------------------------ | ----------- |
| +31.3% |    +5 | 100.0% → 95.5% | 16 → 21 | `MemAllocator::allocate() const`                       | `<unknown>` |
|    new |    +1 |    0.0% → 4.5% |   0 → 1 | `PhaseOutput::fill_buffer(CodeBuffer*, unsigned int*)` | `<unknown>` |

##### `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region(HeapRegion*, bool)` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                                                                           | Location    |
| ------: | ----: | -----: | ------: | -------------------------------------------------------------------------------- | ----------- |
| +600.0% |    +6 | 100.0% |   1 → 7 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::do_heap_region(HeapRegion*)` | `<unknown>` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

| Change | Delta |      % | Samples | Caller        | Location              |
| -----: | ----: | -----: | ------: | ------------- | --------------------- |
| +11.4% |    +5 | 100.0% | 44 → 49 | `add(Object)` | `java.util.ArrayList` |

##### `G1RegionMarkStatsCache::add_live_words(oopDesc*)` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                                                                                           | Location    |
| ------: | ----: | -------------: | ------: | ------------------------------------------------------------------------------------------------ | ----------- |
| +300.0% |    +6 | 66.7% → 100.0% |   2 → 8 | `G1FullGCMarker::mark_object(oopDesc*)`                                                          | `<unknown>` |
| removed |    -1 |   33.3% → 0.0% |   1 → 0 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>(G1MarkAndPushClosure*, int, int)` | `<unknown>` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |      % | Samples | Caller                              | Location                            |
| ------: | ----: | -----: | ------: | ----------------------------------- | ----------------------------------- |
| +200.0% |    +4 | 100.0% |   2 → 6 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `G1ParScanThreadState::do_partial_array(PartialArrayScanTask)` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                                                        | Location    |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------- | ----------- |
| +400.0% |    +4 | 100.0% |   1 → 5 | `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)` | `<unknown>` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % | Samples | Caller      | Location                                               |
| -----: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `get(int)` (`java.util.ArrayList`)

|  Change | Delta |      % | Samples | Caller                  | Location                                                   |
| ------: | ----: | -----: | ------: | ----------------------- | ---------------------------------------------------------- |
| +300.0% |    +3 | 100.0% |   1 → 4 | `findNearestCentroid()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `hash(Object)` (`java.util.HashMap`)

| Change | Delta |              % | Samples | Caller                              | Location            |
| -----: | ----: | -------------: | ------: | ----------------------------------- | ------------------- |
|  +9.1% |    +2 | 100.0% → 96.0% | 22 → 24 | `computeIfAbsent(Object, Function)` | `java.util.HashMap` |
|    new |    +1 |    0.0% → 4.0% |   0 → 1 | `putMapEntries(Map, boolean)`       | `java.util.HashMap` |

##### `_platform_memset` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                                             | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------ | ----------- |
| +33.3% |    +1 | 75.0% → 57.1% |   3 → 4 | `MemAllocator::allocate() const`                                   | `<unknown>` |
|    new |    +1 |  0.0% → 14.3% |   0 → 1 | `Unique_Node_List::push(Node*)`                                    | `<unknown>` |
|    new |    +1 |  0.0% → 14.3% |   0 → 1 | `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` | `<unknown>` |

##### `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>(G1MarkAndPushClosure*, int, int)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                                                                                                                                                                              | Location    |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| +300.0% |    +3 | 33.3% → 66.7% |   1 → 4 | `G1FullGCMarker::complete_marking(GenericTaskQueueSet<OverflowTaskQueue<oopDesc*, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*, GenericTaskQueueSet<OverflowTaskQueue<ObjArrayTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*, TaskTerminator*)` | `<unknown>` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |             % | Samples | Caller      | Location                                               |
| -----: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `IndexSetIterator::advance_and_next()` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                                                               | Location    |
| -----: | ----: | -----------: | ------: | -------------------------------------------------------------------- | ----------- |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`                    | `<unknown>` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `PhaseChaitin::Select()`                                             | `<unknown>` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `PhaseLive::add_liveout(Block_List&, Block*, IndexSet*, VectorSet&)` | `<unknown>` |

##### `G1FullGCCompactTask::copy_object_to_new_location(oopDesc*)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                                         | Location    |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------- | ----------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `G1FullGCCompactTask::G1CompactRegionClosure::apply(oopDesc*)` | `<unknown>` |

##### `<init>(JavaKMeans, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |             % | Samples | Caller                         | Location                                    |
| -----: | ----: | ------------: | ------: | ------------------------------ | ------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % | Samples | Caller      | Location                                               |
| -----: | ----: | -----: | ------: | ----------- | ------------------------------------------------------ |
| +33.3% |    +1 | 100.0% |   3 → 4 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `<init>(JavaKMeans, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change | Delta |            % | Samples | Caller                               | Location                                               |
| -----: | ----: | -----------: | ------: | ------------------------------------ | ------------------------------------------------------ |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `<init>(JavaKMeans, List, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `forkThreshold()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |             % | Samples | Caller      | Location                                               |
| -----: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |             % | Samples | Caller      | Location                                               |
| -----: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `<init>(JavaKMeans, List, List, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % | Samples | Caller                    | Location                                                   |
| -----: | ----: | ------------: | ------: | ------------------------- | ---------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `createSubtask(int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `pthread_testcancel` (`<unknown>`)

| Change | Delta |             % | Samples | Caller               | Location    |
| -----: | ----: | ------------: | ------: | -------------------- | ----------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `_pthread_cond_wait` | `<unknown>` |

##### `arrayof_jint_disjoint_arraycopy` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                              | Location              |
| ------: | ----: | ------------: | ------: | ----------------------------------- | --------------------- |
| +400.0% |    +4 |  5.6% → 25.0% |   1 → 5 | `merge(Object, Object, BiFunction)` | `java.util.HashMap`   |
|  -28.6% |    -2 | 38.9% → 25.0% |   7 → 5 | `grow(int)`                         | `java.util.ArrayList` |

##### `CollectedHeap::array_allocate(Klass*, unsigned long, int, bool, JavaThread*)` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                                               | Location    |
| -----: | ----: | -----------: | ------: | ---------------------------------------------------- | ----------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `OptoRuntime::new_array_C(Klass*, int, JavaThread*)` | `<unknown>` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `_new_array_Java`                                    | `<unknown>` |

##### `ObjArrayAllocator::initialize(HeapWordImpl**) const` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                         | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------ | ----------- |
|     new |    +3 | 0.0% → 100.0% |   0 → 3 | `MemAllocator::allocate() const`                                               | `<unknown>` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `CollectedHeap::array_allocate(Klass*, unsigned long, int, bool, JavaThread*)` | `<unknown>` |

##### `pthread_dependency_wait_np.cold.3` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                                          | Location    |
| ------: | ----: | -----: | ------: | ----------------------------------------------- | ----------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `Unsafe_Unpark(JNIEnv_*, _jobject*, _jobject*)` | `<unknown>` |

##### `ObjAllocator::initialize(HeapWordImpl**) const` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                           | Location    |
| -----: | ----: | ------------: | ------: | -------------------------------- | ----------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `MemAllocator::allocate() const` | `<unknown>` |

##### `G1FullGCCompactTask::compact_region(HeapRegion*)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                    | Location    |
| -----: | ----: | ------------: | ------: | ----------------------------------------- | ----------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `G1FullGCCompactTask::work(unsigned int)` | `<unknown>` |

##### `CollectedHeap::fill_with_object(HeapWordImpl**, unsigned long, bool)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                               | Location    |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------- | ----------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `ThreadLocalAllocBuffer::retire_before_allocation()` | `<unknown>` |

##### `thread_self_trap` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                     | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------------------ | ----------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `SafepointSynchronize::block(JavaThread*)` | `<unknown>` |

##### `Parker::park(bool, long)` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                                                  | Location    |
| ------: | ----: | -----: | ------: | ------------------------------------------------------- | ----------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `Unsafe_Park(JNIEnv_*, _jobject*, unsigned char, long)` | `<unknown>` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|  Change | Delta |      % | Samples | Caller            | Location                                    |
| ------: | ----: | -----: | ------: | ----------------- | ------------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|  Change | Delta |      % | Samples | Caller     | Location                            |
| ------: | ----: | -----: | ------: | ---------- | ----------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

| Change | Delta |             % | Samples | Caller   | Location                                 |
| -----: | ----: | ------------: | ------: | -------- | ---------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `park()` | `java.util.concurrent.locks.LockSupport` |

##### `grow()` (`java.util.ArrayList`)

| Change | Delta |      % | Samples | Caller                       | Location              |
| -----: | ----: | -----: | ------: | ---------------------------- | --------------------- |
| +33.3% |    +1 | 100.0% |   3 → 4 | `add(Object, Object[], int)` | `java.util.ArrayList` |

##### `checkIndex(int, int)` (`java.util.Objects`)

| Change | Delta |      % | Samples | Caller     | Location              |
| -----: | ----: | -----: | ------: | ---------- | --------------------- |
|  +4.8% |    +1 | 100.0% | 21 → 22 | `get(int)` | `java.util.ArrayList` |

##### `<init>(Collection)` (`java.util.ArrayList`)

| Change | Delta |             % | Samples | Caller                       | Location                                    |
| -----: | ----: | ------------: | ------: | ---------------------------- | ------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `allocateInstance(Class)` (`jdk.internal.misc.Unsafe`)

| Change | Delta |             % | Samples | Caller                     | Location                              |
| -----: | ----: | ------------: | ------: | -------------------------- | ------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `allocateInstance(Object)` | `java.lang.invoke.DirectMethodHandle` |

##### `generateInnerClass()` (`java.lang.invoke.InnerClassLambdaMetafactory`)

| Change | Delta |             % | Samples | Caller             | Location                                       |
| -----: | ----: | ------------: | ------: | ------------------ | ---------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `spinInnerClass()` | `java.lang.invoke.InnerClassLambdaMetafactory` |

##### `signalWork()` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |             % | Samples | Caller                                      | Location                                      |
| -----: | ----: | ------------: | ------: | ------------------------------------------- | --------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `push(ForkJoinTask, ForkJoinPool, boolean)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `<init>(int)` (`java.util.jar.Attributes`)

| Change | Delta |             % | Samples | Caller                      | Location                 |
| -----: | ----: | ------------: | ------: | --------------------------- | ------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `read(InputStream, String)` | `java.util.jar.Manifest` |

##### `read(InputStream, String)` (`java.util.jar.Manifest`)

| Change | Delta |             % | Samples | Caller                                     | Location                 |
| -----: | ----: | ------------: | ------: | ------------------------------------------ | ------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<init>(JarVerifier, InputStream, String)` | `java.util.jar.Manifest` |

##### `entrySet()` (`java.util.HashMap`)

|  Change | Delta |      % | Samples | Caller                        | Location            |
| ------: | ----: | -----: | ------: | ----------------------------- | ------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `getStreamAndOpFlags()` (`java.util.stream.AbstractPipeline`)

| Change | Delta |             % | Samples | Caller                                | Location                            |
| -----: | ----: | ------------: | ------: | ------------------------------------- | ----------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `exactOutputSizeIfKnown(Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `Node::set_req_X(unsigned int, Node*, PhaseIterGVN*)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                        | Location    |
| -----: | ----: | ------------: | ------: | --------------------------------------------- | ----------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `Node::replace_edge(Node*, Node*, PhaseGVN*)` | `<unknown>` |

##### `ValueStack::values_do(ValueVisitor*)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                    | Location    |
| -----: | ----: | ------------: | ------: | ----------------------------------------- | ----------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `UseCountComputer::block_do(BlockBegin*)` | `<unknown>` |

##### `PhaseIdealLoop::split_if_with_blocks(VectorSet&, Node_Stack&)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                 | Location    |
| -----: | ----: | ------------: | ------: | -------------------------------------- | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `PhaseIterGVN::transform_old(Node*)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                     | Location    |
| -----: | ----: | ------------: | ------: | -------------------------- | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseIterGVN::optimize()` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                 | Location    |
| -----: | ----: | -----: | ------: | -------------------------------------- | ----------- |
| +50.0% |    +1 | 100.0% |   2 → 3 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `Matcher::find_shared(Node*)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller             | Location    |
| -----: | ----: | ------------: | ------: | ------------------ | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `Matcher::match()` | `<unknown>` |

##### `GraphBuilder::try_inline(ciMethod*, bool, bool, Bytecodes::Code, Instruction*)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                           | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------------------------ | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `GraphBuilder::iterate_bytecodes_for_block(int)` | `<unknown>` |

##### `LinearScanWalker::alloc_free_reg(Interval*)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                 | Location    |
| -----: | ----: | ------------: | ------: | -------------------------------------- | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `LinearScanWalker::activate_current()` | `<unknown>` |

##### `ValueStack::ValueStack(ValueStack*, ValueStack::Kind, int)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                     | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------------------ | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `BlockBegin::try_merge(ValueStack*, bool)` | `<unknown>` |

##### `IfTrueNode::Opcode() const` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                 | Location    |
| -----: | ----: | ------------: | ------: | -------------------------------------- | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `PhaseIdealLoop::match_fill_loop(IdealLoopTree*, Node*&, Node*&, Node*&, Node*&)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                 | Location    |
| -----: | ----: | ------------: | ------: | -------------------------------------- | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseIdealLoop::do_intrinsify_fill()` | `<unknown>` |

##### `ciObjectFactory::get_metadata(Metadata*)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                              | Location    |
| -----: | ----: | ------------: | ------: | --------------------------------------------------- | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `ciMethod::ensure_method_data(methodHandle const&)` | `<unknown>` |

##### `TypeOopPtr::cleanup_speculative() const` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                | Location    |
| -----: | ----: | ------------: | ------: | --------------------- | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseCCP::analyze()` | `<unknown>` |

##### `Unique_Node_List::remove(Node*)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                           | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------------------------ | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseIterGVN::remove_globally_dead_node(Node*)` | `<unknown>` |

##### `PhaseCFG::implicit_null_check(Block*, Node*, Node*, int)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                           | Location    |
| -----: | ----: | ------------: | ------: | -------------------------------- | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseCFG::global_code_motion()` | `<unknown>` |

##### `Node::rematerialize() const` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                            | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------------------------- | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseChaitin::build_ifg_physical(ResourceArea*)` | `<unknown>` |

##### `PhiNode::Opcode() const` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                  | Location    |
| -----: | ----: | ------------: | ------: | --------------------------------------- | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseGVN::transform_no_reclaim(Node*)` | `<unknown>` |

##### `LinearScan::build_intervals()` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                         | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------ | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `LinearScan::do_linear_scan()` | `<unknown>` |

##### `LoadINode::Opcode() const` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                | Location    |
| -----: | ----: | ------------: | ------: | --------------------- | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `Compile::Optimize()` | `<unknown>` |

##### `vtable stub` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller      | Location                                               |
| ------: | ----: | -----: | ------: | ----------- | ------------------------------------------------------ |
| +100.0% |    +1 | 100.0% |   1 → 2 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `I2C/C2I adapters(0xb)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                            | Location                                        |
| -----: | ----: | ------------: | ------: | --------------------------------- | ----------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<init>(double[], int, int, int)` | `java.util.Spliterators$DoubleArraySpliterator` |

##### `itable stub` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                             | Location                        |
| -----: | ----: | ------------: | ------: | ---------------------------------- | ------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `fromCharacteristics(Spliterator)` | `java.util.stream.StreamOpFlag` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller                  | Location                                                   |
| -----: | ----: | -----: | --------: | ----------------------- | ---------------------------------------------------------- |
|  -7.8% |   -70 | 100.0% | 894 → 824 | `findNearestCentroid()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller              | Location                                                   |
| -----: | ----: | -----: | --------: | ------------------- | ---------------------------------------------------------- |
|  -9.3% |   -38 | 100.0% | 408 → 370 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |   Samples | Caller        | Location                                                  |
| -----: | ----: | -----: | --------: | ------------- | --------------------------------------------------------- |
|  -2.6% |   -25 | 100.0% | 975 → 950 | `vectorSum()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `__psynch_cvsignal` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                          | Location    |
| -----: | ----: | -----: | ------: | ----------------------------------------------- | ----------- |
| -29.2% |   -19 | 100.0% | 65 → 46 | `Unsafe_Unpark(JNIEnv_*, _jobject*, _jobject*)` | `<unknown>` |

##### `zero_blocks` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                              | Location                                                   |
| ------: | ----: | ------------: | ------: | ----------------------------------- | ---------------------------------------------------------- |
|  -45.5% |   -10 | 36.7% → 28.6% | 22 → 12 | `grow(int)`                         | `java.util.ArrayList`                                      |
| removed |    -9 |  15.0% → 0.0% |   9 → 0 | `findNearestCentroid()`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   +7.1% |    +2 | 46.7% → 71.4% | 28 → 30 | `merge(Object, Object, BiFunction)` | `java.util.HashMap`                                        |
| removed |    -1 |   1.7% → 0.0% |   1 → 0 | `copyOf(Object[], int, Class)`      | `java.util.Arrays`                                         |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller              | Location                                                   |
| -----: | ----: | -----: | --------: | ------------------- | ---------------------------------------------------------- |
| -13.3% |   -17 | 100.0% | 128 → 111 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `G1FullGCMarker::mark_object(oopDesc*)` (`<unknown>`)

| Change | Delta |              % | Samples | Caller                                                                                                                                                                                                                              | Location    |
| -----: | ----: | -------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| -58.1% |   -18 | 100.0% → 92.9% | 31 → 13 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>(G1MarkAndPushClosure*, int, int)`                                                                                                                                    | `<unknown>` |
|    new |    +1 |    0.0% → 7.1% |   0 → 1 | `G1FullGCMarker::complete_marking(GenericTaskQueueSet<OverflowTaskQueue<oopDesc*, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*, GenericTaskQueueSet<OverflowTaskQueue<ObjArrayTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*, TaskTerminator*)` | `<unknown>` |

##### `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                                        | Location    |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------- | ----------- |
| removed |    -9 | 90.0% → 0.0% |   9 → 0 | `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)` | `<unknown>` |
| removed |    -1 | 10.0% → 0.0% |   1 → 0 | `G1ParEvacuateFollowersClosure::do_void()`                    | `<unknown>` |

##### `semaphore_wait_trap` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                 | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------- | ----------- |
|  -35.0% |    -7 | 80.0% → 72.2% | 20 → 13 | `WorkerThread::run()`                  | `<unknown>` |
|  +33.3% |    +1 | 12.0% → 22.2% |   3 → 4 | `GenericWaitBarrier::Cell::wait(int)`  | `<unknown>` |
| removed |    -1 |   4.0% → 0.0% |   1 → 0 | `WorkerThreads::run_task(WorkerTask*)` | `<unknown>` |

##### `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                                                                                                                | Location    |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| removed |    -4 | 57.1% → 0.0% |   4 → 0 | `G1ParScanThreadState::steal_and_trim_queue(GenericTaskQueueSet<OverflowTaskQueue<ScannerTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*)` | `<unknown>` |
| removed |    -3 | 42.9% → 0.0% |   3 → 0 | `G1ScanHRForRegionClosure::scan_memregion(unsigned int, MemRegion)`                                                                   | `<unknown>` |

##### `pthread_jit_write_protect_np` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                 | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------- | ----------- |
| removed |    -2 |  11.1% → 0.0% |   2 → 0 | `jni_GetObjectClass`                                                   | `<unknown>` |
|  -33.3% |    -1 | 16.7% → 18.2% |   3 → 2 | `JVM_IHashCode`                                                        | `<unknown>` |
| removed |    -1 |   5.6% → 0.0% |   1 → 0 | `InterpreterRuntime::resolve_from_cache(JavaThread*, Bytecodes::Code)` | `<unknown>` |
|  -33.3% |    -1 | 16.7% → 18.2% |   3 → 2 | `Unsafe_Unpark(JNIEnv_*, _jobject*, _jobject*)`                        | `<unknown>` |
|  -20.0% |    -1 | 27.8% → 36.4% |   5 → 4 | `Unsafe_Park(JNIEnv_*, _jobject*, unsigned char, long)`                | `<unknown>` |

##### `grow(int)` (`java.util.ArrayList`)

| Change | Delta |      % | Samples | Caller   | Location              |
| -----: | ----: | -----: | ------: | -------- | --------------------- |
| -21.7% |    -5 | 100.0% | 23 → 18 | `grow()` | `java.util.ArrayList` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change | Delta |             % | Samples | Caller      | Location              |
| -----: | ----: | ------------: | ------: | ----------- | --------------------- |
| -62.5% |    -5 | 88.9% → 75.0% |   8 → 3 | `toArray()` | `java.util.ArrayList` |

##### `elementData(int)` (`java.util.ArrayList`)

| Change | Delta |      % |   Samples | Caller     | Location              |
| -----: | ----: | -----: | --------: | ---------- | --------------------- |
|  -2.5% |    -4 | 100.0% | 161 → 157 | `get(int)` | `java.util.ArrayList` |

##### `releaseAccess()` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change | Delta |             % | Samples | Caller                                    | Location                                      |
| ------: | ----: | ------------: | ------: | ----------------------------------------- | --------------------------------------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `tryRemoveAndExec(ForkJoinTask, boolean)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |            % | Samples | Caller                                                    | Location                                      |
| ------: | ----: | -----------: | ------: | --------------------------------------------------------- | --------------------------------------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |

##### `push(ForkJoinTask, ForkJoinPool, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change | Delta |             % | Samples | Caller   | Location                            |
| ------: | ----: | ------------: | ------: | -------- | ----------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `fork()` | `java.util.concurrent.ForkJoinTask` |

##### `G1BarrierSet::invalidate(MemRegion)` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                           | Location              |
| ------: | ----: | -------------: | ------: | -------------------------------- | --------------------- |
| removed |    -2 |   40.0% → 0.0% |   2 → 0 | `addAll(Collection)`             | `java.util.ArrayList` |
|  -33.3% |    -1 | 60.0% → 100.0% |   3 → 2 | `arrayof_oop_disjoint_arraycopy` | `<unknown>`           |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % | Samples | Caller                 | Location                            |
| -----: | ----: | -----: | ------: | ---------------------- | ----------------------------------- |
|  -7.7% |    -2 | 100.0% | 26 → 24 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `signalWaiters()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |      % | Samples | Caller      | Location                            |
| -----: | ----: | -----: | ------: | ----------- | ----------------------------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `setDone()` | `java.util.concurrent.ForkJoinTask` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % | Samples | Caller                               | Location                                                  |
| -----: | ----: | -----: | ------: | ------------------------------------ | --------------------------------------------------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |             % | Samples | Caller      | Location                                               |
| ------: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change | Delta |      % | Samples | Caller   | Location                             |
| -----: | ----: | -----: | ------: | -------- | ------------------------------------ |
| -50.0% |    -1 | 100.0% |   2 → 1 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % | Samples | Caller              | Location                                               |
| -----: | ----: | -----: | ------: | ------------------- | ------------------------------------------------------ |
| -50.0% |    -1 | 100.0% |   2 → 1 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % | Samples | Caller      | Location                                               |
| ------: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`)

|  Change | Delta |             % | Samples | Caller                | Location            |
| ------: | ----: | ------------: | ------: | --------------------- | ------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `forEach(BiConsumer)` | `java.util.HashMap` |

##### `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2388`)

|  Change | Delta |             % | Samples | Caller        | Location                           |
| ------: | ----: | ------------: | ------: | ------------- | ---------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `accept(int)` | `java.util.stream.IntPipeline$1$1` |

##### `forkThreshold()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % | Samples | Caller      | Location                                               |
| -----: | ----: | -----: | ------: | ----------- | ------------------------------------------------------ |
| -50.0% |    -1 | 100.0% |   2 → 1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `forkThreshold()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |             % | Samples | Caller      | Location                                               |
| ------: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % | Samples | Caller      | Location                                               |
| ------: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `G1FullGCMarker::follow_object(oopDesc*)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                          | Location    |
| -----: | ----: | ------------: | ------: | ----------------------------------------------- | ----------- |
| -50.0% |    -1 | 33.3% → 25.0% |   2 → 1 | `G1FullGCMarker::follow_marking_stacks()`       | `<unknown>` |
| -25.0% |    -1 | 66.7% → 75.0% |   4 → 3 | `G1FullGCMarker::publish_and_drain_oop_tasks()` | `<unknown>` |

##### `HeapRegion::update_bot_for_block(HeapWordImpl**, HeapWordImpl**)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                                                                                                                                       | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `void HeapRegion::apply_to_marked_objects<G1FullGCPrepareTask::G1PrepareCompactLiveClosure>(G1CMBitMap*, G1FullGCPrepareTask::G1PrepareCompactLiveClosure*)` | `<unknown>` |

##### `__psynch_mutexdrop` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------- | ----------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `_pthread_mutex_firstfit_unlock_slow` | `<unknown>` |

##### `G1CollectedHeap::unsafe_max_tlab_alloc(Thread*) const` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                                                         | Location    |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------ | ----------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `MemAllocator::allocate() const`                                               | `<unknown>` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `MemAllocator::mem_allocate_inside_tlab_slow(MemAllocator::Allocation&) const` | `<unknown>` |

##### `G1ParScanThreadState::copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                         | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------ | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `void G1ParCopyClosure<(G1Barrier)0, false>::do_oop_work<oopDesc*>(oopDesc**)` | `<unknown>` |

##### `JNIHandleBlock::allocate_handle(JavaThread*, oopDesc*, AllocFailStrategy::AllocFailEnum)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                   | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `Unsafe_AllocateInstance(JNIEnv_*, _jobject*, _jclass*)` | `<unknown>` |

##### `Symbol::increment_refcount()` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                                                         | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PlaceholderTable::find_and_remove(Symbol*, ClassLoaderData*, PlaceholderTable::classloadAction, JavaThread*)` | `<unknown>` |

##### `JavaThread::is_interrupted(bool)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                  | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `Unsafe_Park(JNIEnv_*, _jobject*, unsigned char, long)` | `<unknown>` |

##### `void G1ScanEvacuatedObjClosure::do_oop_work<narrowOop>(narrowOop*)` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                                                                               | Location    |
| ------: | ----: | -------------: | ------: | ------------------------------------------------------------------------------------ | ----------- |
| removed |    -2 |   40.0% → 0.0% |   2 → 0 | `G1ParScanThreadState::start_partial_objarray(G1HeapRegionAttr, oopDesc*, oopDesc*)` | `<unknown>` |
|  +33.3% |    +1 | 60.0% → 100.0% |   3 → 4 | `G1ParScanThreadState::do_partial_array(PartialArrayScanTask)`                       | `<unknown>` |

##### `G1DirtyCardQueueSet::num_par_ids()` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                    | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `G1RemSetTrackingPolicy::update_at_allocate(HeapRegion*)` | `<unknown>` |

##### `Monitor::wait_without_safepoint_check(unsigned long long)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                         | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------ | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `WatcherThread::sleep() const` | `<unknown>` |

##### `ClassVerifier::create_temporary_symbol(Symbol*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                                                                       | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `ClassVerifier::verify_field_instructions(RawBytecodeStream*, StackMapFrame*, constantPoolHandle const&, bool, JavaThread*)` | `<unknown>` |

##### `SpinPause` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                     | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `TaskTerminator::offer_termination(TerminatorTerminator*)` | `<unknown>` |

##### `fork()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |             % | Samples | Caller      | Location                                               |
| ------: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `<init>(HashMap)` (`java.util.HashMap$HashIterator`)

|  Change | Delta |             % | Samples | Caller            | Location                          |
| ------: | ----: | ------------: | ------: | ----------------- | --------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `<init>(HashMap)` | `java.util.HashMap$EntryIterator` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Caller                        | Location            |
| -----: | ----: | -----: | ------: | ----------------------------- | ------------------- |
| -28.6% |    -2 | 100.0% |   7 → 5 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |      % | Samples | Caller                 | Location                            |
| -----: | ----: | -----: | ------: | ---------------------- | ----------------------------------- |
| -20.0% |    -1 | 100.0% |   5 → 4 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % | Samples | Caller  | Location                                    |
| -----: | ----: | -----: | ------: | ------- | ------------------------------------------- |
| -33.3% |    -1 | 100.0% |   3 → 2 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `add(Object)` (`java.util.ArrayList`)

|  Change | Delta |             % | Samples | Caller                   | Location                                                   |
| ------: | ----: | ------------: | ------: | ------------------------ | ---------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `unpark(Object)` (`jdk.internal.misc.Unsafe`)

|  Change | Delta |             % | Samples | Caller           | Location                                 |
| ------: | ----: | ------------: | ------: | ---------------- | ---------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `unpark(Thread)` | `java.util.concurrent.locks.LockSupport` |

##### `unpark(Thread)` (`java.util.concurrent.locks.LockSupport`)

| Change | Delta |      % | Samples | Caller                         | Location                            |
| -----: | ----: | -----: | ------: | ------------------------------ | ----------------------------------- |
| -50.0% |    -1 | 100.0% |   2 → 1 | `tryCompensate(long, boolean)` | `java.util.concurrent.ForkJoinPool` |

##### `nextNode()` (`java.util.HashMap$HashIterator`)

| Change | Delta |      % | Samples | Caller   | Location                          |
| -----: | ----: | -----: | ------: | -------- | --------------------------------- |
| -50.0% |    -1 | 100.0% |   2 → 1 | `next()` | `java.util.HashMap$EntryIterator` |

##### `append(char)` (`java.lang.StringBuilder`)

|  Change | Delta |             % | Samples | Caller               | Location          |
| ------: | ----: | ------------: | ------: | -------------------- | ----------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `descriptorString()` | `java.lang.Class` |

##### `<init>(AbstractPipeline, int)` (`java.util.stream.AbstractPipeline`)

|  Change | Delta |             % | Samples | Caller                          | Location                             |
| ------: | ----: | ------------: | ------: | ------------------------------- | ------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>(AbstractPipeline, int)` | `java.util.stream.ReferencePipeline` |

##### `newLinkedHashMap(int)` (`java.util.LinkedHashMap`)

|  Change | Delta |             % | Samples | Caller        | Location                   |
| ------: | ----: | ------------: | ------: | ------------- | -------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>(int)` | `java.util.jar.Attributes` |

##### `Matcher::match_tree(Node const*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                            | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------- | ----------- |
| removed |    -2 |  66.7% → 0.0% |   2 → 0 | `Matcher::xform(Node*, int)`                      | `<unknown>` |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `Matcher::match_sfpt(SafePointNode*)`             | `<unknown>` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseCFG::PhaseCFG(Arena*, RootNode*, Matcher&)` | `<unknown>` |

##### `Matcher::pd_clone_node(Node*, Node*, Matcher::MStack&)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                        | Location    |
| ------: | ----: | ------------: | ------: | ----------------------------- | ----------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `Matcher::find_shared(Node*)` | `<unknown>` |

##### `PhaseChaitin::build_ifg_physical(ResourceArea*)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                              | Location    |
| -----: | ----: | -----: | ------: | ----------------------------------- | ----------- |
| -40.0% |    -2 | 100.0% |   5 → 3 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `Compile::identify_useful_nodes(Unique_Node_List&)` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                                                                     | Location    |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------ | ----------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `Matcher::specialize_generic_vector_operands()`                                            | `<unknown>` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `PhaseRemoveUseless::PhaseRemoveUseless(PhaseGVN*, Unique_Node_List&, Phase::PhaseNumber)` | `<unknown>` |

##### `PhaseIdealLoop::split_if_with_blocks_post(Node*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                          | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseIdealLoop::split_if_with_blocks(VectorSet&, Node_Stack&)` | `<unknown>` |

##### `ConnectionGraph::find_non_escaped_objects(GrowableArray<PointsToNode*>&, GrowableArray<JavaObjectNode*>&)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                                                                                                                    | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `ConnectionGraph::complete_connection_graph(GrowableArray<PointsToNode*>&, GrowableArray<JavaObjectNode*>&, GrowableArray<JavaObjectNode*>&, GrowableArray<FieldNode*>&)` | `<unknown>` |

##### `TypeInt::xmeet(Type const*) const` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                         | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------ | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `AddNode::Identity(PhaseGVN*)` | `<unknown>` |

##### `Matcher::xform(Node*, int)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller             | Location    |
| ------: | ----: | ------------: | ------: | ------------------ | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `Matcher::match()` | `<unknown>` |

##### `MacroAssembler::emit_trampoline_stub(int, unsigned char*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                     | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `MacroAssembler::trampoline_call(Address)` | `<unknown>` |

##### `Node::in(unsigned int) const` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                  | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `IdealLoopTree::adjust_loop_exit_prob(PhaseIdealLoop*)` | `<unknown>` |

##### `PhaseChaitin::Simplify()` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                              | Location    |
| ------: | ----: | ------------: | ------: | ----------------------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `PhaseIterGVN::remove_globally_dead_node(Node*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                     | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseIterGVN::subsume_node(Node*, Node*)` | `<unknown>` |

##### `PhaseIterGVN::subsume_node(Node*, Node*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                            | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseIdealLoop::split_if_with_blocks_pre(Node*)` | `<unknown>` |

##### `IfNode::Ideal(PhaseGVN*, bool)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                               | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------ | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseIterGVN::transform_old(Node*)` | `<unknown>` |

##### `CmpUNode::Opcode() const` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                           | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `CMoveNode::Identity(PhaseGVN*)` | `<unknown>` |

##### `branchNode::is_block_proj() const` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                             | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseChaitin::Split(unsigned int, ResourceArea*)` | `<unknown>` |

##### `ciEnv::cache_dtrace_flags()` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                  | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `CompileBroker::compiler_thread_loop()` | `<unknown>` |

##### `ciMetadata::is_array_klass() const` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                   | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------ | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `ciEnv::get_field_by_index_impl(ciInstanceKlass*, int, Bytecodes::Code)` | `<unknown>` |

##### `Node::is_CFG() const` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                 | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `Assembler::operand_valid_for_sve_logical_immediate(unsigned int, unsigned long long)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                             | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `State::_sub_Op_ConI(Node const*)` | `<unknown>` |

### Total samples

#### Regressions

Functions with the largest increase in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |             % |       Samples | Function                                                | Location                                                  |
| ------: | ----: | ------------: | ------------: | ------------------------------------------------------- | --------------------------------------------------------- |
|  +11.6% |  +523 | 94.1% → 94.7% | 4,497 → 5,020 | `runWorker(ForkJoinPool$WorkQueue)`                     | `java.util.concurrent.ForkJoinPool`                       |
|  +11.6% |  +523 | 94.1% → 94.7% | 4,497 → 5,020 | `run()`                                                 | `java.util.concurrent.ForkJoinWorkerThread`               |
|  +70.3% |  +466 | 13.9% → 21.3% |   663 → 1,129 | `__psynch_cvwait`                                       | `<unknown>`                                               |
|  +71.3% |  +462 | 13.6% → 20.9% |   648 → 1,110 | `Parker::park(bool, long)`                              | `<unknown>`                                               |
|  +70.2% |  +462 | 13.8% → 21.1% |   658 → 1,120 | `park(boolean, long)`                                   | `jdk.internal.misc.Unsafe`                                |
|  +70.1% |  +461 | 13.8% → 21.1% |   658 → 1,119 | `Unsafe_Park(JNIEnv_*, _jobject*, unsigned char, long)` | `<unknown>`                                               |
|  +68.9% |  +446 | 13.5% → 20.6% |   647 → 1,093 | `park()`                                                | `java.util.concurrent.locks.LockSupport`                  |
| +144.3% |  +355 |  5.1% → 11.3% |     246 → 601 | `awaitWork(ForkJoinPool$WorkQueue)`                     | `java.util.concurrent.ForkJoinPool`                       |
|  +13.6% |  +209 | 32.2% → 33.0% | 1,538 → 1,747 | `vectorSum()`                                           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  +13.4% |  +207 | 32.2% → 33.0% | 1,540 → 1,747 | `computeDirectly()`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  +18.8% |  +181 | 20.1% → 21.6% |   962 → 1,143 | `invoke()`                                              | `java.util.concurrent.ForkJoinTask`                       |
|   +4.3% |  +179 | 88.0% → 82.7% | 4,205 → 4,384 | `exec()`                                                | `java.util.concurrent.RecursiveTask`                      |
|   +4.2% |  +178 | 88.0% → 82.7% | 4,205 → 4,383 | `compute()`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`    |
|   +4.3% |  +175 | 85.0% → 79.9% | 4,061 → 4,236 | `awaitDone(int, long)`                                  | `java.util.concurrent.ForkJoinTask`                       |
|   +4.3% |  +175 | 85.0% → 80.0% | 4,062 → 4,237 | `join()`                                                | `java.util.concurrent.ForkJoinTask`                       |
|   +4.0% |  +169 | 88.9% → 83.4% | 4,248 → 4,417 | `scan(ForkJoinPool$WorkQueue, int, int)`                | `java.util.concurrent.ForkJoinPool`                       |
|  +24.7% |  +167 | 14.1% → 15.9% |     675 → 842 | `average(List)`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`    |
|  +24.6% |  +167 | 14.2% → 16.0% |     680 → 847 | `computeClusterAverages()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`    |
|  +24.6% |  +167 | 14.2% → 16.0% |     680 → 847 | `computeDirectly()`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`    |
|   +3.9% |  +164 | 88.7% → 83.1% | 4,241 → 4,405 | `doExec()`                                              | `java.util.concurrent.ForkJoinTask`                       |

##### Ours

|  Change | Delta |             % |       Samples | Function                                                                                                               | Location                                                               |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|  +13.6% |  +209 | 32.2% → 33.0% | 1,538 → 1,747 | `vectorSum()`                                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  +13.4% |  +207 | 32.2% → 33.0% | 1,540 → 1,747 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   +4.2% |  +178 | 88.0% → 82.7% | 4,205 → 4,383 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  +24.7% |  +167 | 14.1% → 15.9% |     675 → 842 | `average(List)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  +24.6% |  +167 | 14.2% → 16.0% |     680 → 847 | `computeClusterAverages()`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  +24.6% |  +167 | 14.2% → 16.0% |     680 → 847 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  +14.6% |   +66 |   9.4% → 9.8% |     451 → 517 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +14.6% |   +66 |   9.4% → 9.8% |     451 → 517 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0` |
|   +7.7% |   +22 |   6.0% → 5.8% |     287 → 309 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|     new |   +22 |   0.0% → 0.4% |        0 → 22 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|   +7.3% |   +21 |   6.0% → 5.8% |     288 → 309 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000` |
|   +4.8% |   +15 |   6.5% → 6.1% |     310 → 325 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   +4.9% |   +15 |   6.4% → 6.1% |     308 → 323 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   +4.9% |   +15 |   6.4% → 6.1% |     308 → 323 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| +114.3% |    +8 |   0.1% → 0.3% |        7 → 15 | `setUpBeforeAll(BenchmarkContext)`                                                                                     | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  +18.4% |    +7 |          0.8% |       38 → 45 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                        |
|  +18.4% |    +7 |          0.8% |       38 → 45 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                        |
|  +41.2% |    +7 |   0.4% → 0.5% |       17 → 24 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +20.0% |    +6 |   0.6% → 0.7% |       30 → 36 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +18.8% |    +6 |          0.7% |       32 → 38 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |

##### Native

|  Change | Delta |             % |     Samples | Function                                                                                     | Location    |
| ------: | ----: | ------------: | ----------: | -------------------------------------------------------------------------------------------- | ----------- |
|  +70.3% |  +466 | 13.9% → 21.3% | 663 → 1,129 | `__psynch_cvwait`                                                                            | `<unknown>` |
|  +71.3% |  +462 | 13.6% → 20.9% | 648 → 1,110 | `Parker::park(bool, long)`                                                                   | `<unknown>` |
|  +70.1% |  +461 | 13.8% → 21.1% | 658 → 1,119 | `Unsafe_Park(JNIEnv_*, _jobject*, unsigned char, long)`                                      | `<unknown>` |
|  +80.8% |   +21 |   0.5% → 0.9% |     26 → 47 | `MemAllocator::allocate() const`                                                             | `<unknown>` |
|  +70.4% |   +19 |   0.6% → 0.9% |     27 → 46 | `CollectedHeap::array_allocate(Klass*, unsigned long, int, bool, JavaThread*)`               | `<unknown>` |
|  +54.5% |   +18 |   0.7% → 1.0% |     33 → 51 | `_new_array_Java`                                                                            | `<unknown>` |
|  +54.8% |   +17 |   0.6% → 0.9% |     31 → 48 | `OptoRuntime::new_array_C(Klass*, int, JavaThread*)`                                         | `<unknown>` |
|  +59.3% |   +16 |   0.6% → 0.8% |     27 → 43 | `InstanceKlass::allocate_objArray(int, int, JavaThread*)`                                    | `<unknown>` |
|   +9.3% |   +15 |   3.4% → 3.3% |   162 → 177 | `arrayof_jint_disjoint_arraycopy`                                                            | `<unknown>` |
| +250.0% |   +15 |   0.1% → 0.4% |      6 → 21 | `Monitor::wait_without_safepoint_check(unsigned long long)`                                  | `<unknown>` |
|   +7.5% |   +14 |   3.9% → 3.8% |   186 → 200 | `forward_copy_longs`                                                                         | `<unknown>` |
| +300.0% |   +12 |   0.1% → 0.3% |      4 → 16 | `TaskTerminator::offer_termination(TerminatorTerminator*)`                                   | `<unknown>` |
|  +57.9% |   +11 |   0.4% → 0.6% |     19 → 30 | `PlatformMonitor::wait(unsigned long long)`                                                  | `<unknown>` |
| +100.0% |   +10 |   0.2% → 0.4% |     10 → 20 | `__psynch_mutexwait`                                                                         | `<unknown>` |
| +100.0% |   +10 |   0.2% → 0.4% |     10 → 20 | `_pthread_mutex_firstfit_lock_slow`                                                          | `<unknown>` |
| +225.0% |    +9 |   0.1% → 0.2% |      4 → 13 | `MemAllocator::mem_allocate_inside_tlab_slow(MemAllocator::Allocation&) const`               | `<unknown>` |
| +450.0% |    +9 |  <0.1% → 0.2% |      2 → 11 | `HeapRegionManager::par_iterate(HeapRegionClosure*, HeapRegionClaimer*, unsigned int) const` | `<unknown>` |
| +350.0% |    +7 |  <0.1% → 0.2% |       2 → 9 | `G1CollectedHeap::attempt_allocation_slow(unsigned int, unsigned long, bool)`                | `<unknown>` |
| +175.0% |    +7 |   0.1% → 0.2% |      4 → 11 | `G1ParEvacuateFollowersClosure::offer_termination()`                                         | `<unknown>` |
|  +37.5% |    +6 |   0.3% → 0.4% |     16 → 22 | `_platform_bzero`                                                                            | `<unknown>` |

##### Standard library

|  Change | Delta |             % |       Samples | Function                                             | Location                                            |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------- | --------------------------------------------------- |
|  +11.6% |  +523 | 94.1% → 94.7% | 4,497 → 5,020 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                 |
|  +11.6% |  +523 | 94.1% → 94.7% | 4,497 → 5,020 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`         |
|  +70.2% |  +462 | 13.8% → 21.1% |   658 → 1,120 | `park(boolean, long)`                                | `jdk.internal.misc.Unsafe`                          |
|  +68.9% |  +446 | 13.5% → 20.6% |   647 → 1,093 | `park()`                                             | `java.util.concurrent.locks.LockSupport`            |
| +144.3% |  +355 |  5.1% → 11.3% |     246 → 601 | `awaitWork(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                 |
|  +18.8% |  +181 | 20.1% → 21.6% |   962 → 1,143 | `invoke()`                                           | `java.util.concurrent.ForkJoinTask`                 |
|   +4.3% |  +179 | 88.0% → 82.7% | 4,205 → 4,384 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                |
|   +4.3% |  +175 | 85.0% → 79.9% | 4,061 → 4,236 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                 |
|   +4.3% |  +175 | 85.0% → 80.0% | 4,062 → 4,237 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                 |
|   +4.0% |  +169 | 88.9% → 83.4% | 4,248 → 4,417 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                 |
|   +3.9% |  +164 | 88.7% → 83.1% | 4,241 → 4,405 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                 |
|   +3.8% |  +163 | 88.8% → 83.2% | 4,244 → 4,407 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
|   +3.7% |  +142 | 80.7% → 75.5% | 3,857 → 3,999 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
|  +14.6% |   +66 |   9.4% → 9.8% |     451 → 517 | `exec()`                                             | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|   +8.0% |   +23 |   6.0% → 5.9% |     289 → 312 | `forEach(BiConsumer)`                                | `java.util.HashMap`                                 |
|   +7.7% |   +22 |   6.0% → 5.8% |     287 → 309 | `merge(Object, Object, BiFunction)`                  | `java.util.HashMap`                                 |
|  +18.4% |   +18 |   2.1% → 2.2% |      98 → 116 | `doubleValue()`                                      | `java.lang.Double`                                  |
| +145.5% |   +16 |   0.2% → 0.5% |       11 → 27 | `parkUntil(long)`                                    | `java.util.concurrent.locks.LockSupport`            |
|   +7.7% |   +12 |          3.2% |     155 → 167 | `copyOf(Object[], int)`                              | `java.util.Arrays`                                  |
|   +6.0% |    +9 |   3.2% → 3.0% |     151 → 160 | `computeIfAbsent(Object, Function)`                  | `java.util.HashMap`                                 |

##### Compiler

|  Change | Delta |            % | Samples | Function                                                                                                                | Location    |
| ------: | ----: | -----------: | ------: | ----------------------------------------------------------------------------------------------------------------------- | ----------- |
|  +20.0% |    +5 |  0.5% → 0.6% | 25 → 30 | `Compile::Optimize()`                                                                                                   | `<unknown>` |
| +166.7% |    +5 |  0.1% → 0.2% |   3 → 8 | `Compilation::build_hir()`                                                                                              | `<unknown>` |
|  +30.8% |    +4 |         0.3% | 13 → 17 | `PhaseIdealLoop::build_and_optimize()`                                                                                  | `<unknown>` |
|  +30.8% |    +4 |         0.3% | 13 → 17 | `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)`                                                           | `<unknown>` |
| +200.0% |    +4 | <0.1% → 0.1% |   2 → 6 | `GraphBuilder::GraphBuilder(Compilation*, IRScope*)`                                                                    | `<unknown>` |
| +400.0% |    +4 | <0.1% → 0.1% |   1 → 5 | `GraphBuilder::try_inline(ciMethod*, bool, bool, Bytecodes::Code, Instruction*)`                                        | `<unknown>` |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `Type::hashcons()`                                                                                                      | `<unknown>` |
| +150.0% |    +3 | <0.1% → 0.1% |   2 → 5 | `GraphBuilder::iterate_bytecodes_for_block(int)`                                                                        | `<unknown>` |
| +150.0% |    +3 | <0.1% → 0.1% |   2 → 5 | `GraphBuilder::iterate_all_blocks(bool)`                                                                                | `<unknown>` |
| +150.0% |    +3 | <0.1% → 0.1% |   2 → 5 | `CompilationPolicy::event(methodHandle const&, methodHandle const&, int, int, CompLevel, CompiledMethod*, JavaThread*)` | `<unknown>` |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `GraphBuilder::try_inline_full(ciMethod*, bool, bool, Bytecodes::Code, Instruction*)`                                   | `<unknown>` |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `GraphBuilder::invoke(Bytecodes::Code)`                                                                                 | `<unknown>` |
| +150.0% |    +3 | <0.1% → 0.1% |   2 → 5 | `PhaseCCP::analyze()`                                                                                                   | `<unknown>` |
| +150.0% |    +3 | <0.1% → 0.1% |   2 → 5 | `PhaseCCP::PhaseCCP(PhaseIterGVN*)`                                                                                     | `<unknown>` |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `ciObjectFactory::get_metadata(Metadata*)`                                                                              | `<unknown>` |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `IndexSetIterator::advance_and_next()`                                                                                  | `<unknown>` |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `TypeInstPtr::add_offset(long) const`                                                                                   | `<unknown>` |
|  +13.3% |    +2 |         0.3% | 15 → 17 | `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)`                                                                 | `<unknown>` |
|  +16.7% |    +2 |         0.3% | 12 → 14 | `Compilation::compile_method()`                                                                                         | `<unknown>` |
|  +16.7% |    +2 |         0.3% | 12 → 14 | `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)`                 | `<unknown>` |

##### JIT

|  Change | Delta |            % | Samples | Function                | Location    |
| ------: | ----: | -----------: | ------: | ----------------------- | ----------- |
| +100.0% |    +1 |        <0.1% |   1 → 2 | `vtable stub`           | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `I2C/C2I adapters(0xb)` | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `itable stub`           | `<unknown>` |

#### Improvements

Functions with the largest decrease in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |             % |       Samples | Function                                                                                                                              | Location                                                   |
| ------: | ----: | ------------: | ------------: | ------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
|   -7.5% |  -137 | 38.2% → 31.9% | 1,825 → 1,688 | `computeDirectly()`                                                                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -8.5% |  -117 | 28.9% → 23.9% | 1,381 → 1,264 | `findNearestCentroid()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -7.5% |   -68 | 18.9% → 15.8% |     904 → 836 | `distance(Double[], Double[])`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -4.3% |   -19 |   9.3% → 8.0% |     443 → 424 | `collectClusters(int[])`                                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -1.6% |   -19 | 24.3% → 21.6% | 1,162 → 1,143 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`                                                                             | `java.util.concurrent.ForkJoinPool`                        |
|  -29.2% |   -19 |   1.4% → 0.9% |       65 → 46 | `__psynch_cvsignal`                                                                                                                   | `<unknown>`                                                |
|  -30.0% |   -18 |   1.3% → 0.8% |       60 → 42 | `zero_blocks`                                                                                                                         | `<unknown>`                                                |
|  -22.7% |   -17 |   1.6% → 1.1% |       75 → 58 | `unpark(Thread)`                                                                                                                      | `java.util.concurrent.locks.LockSupport`                   |
|  -21.9% |   -16 |   1.5% → 1.1% |       73 → 57 | `unpark(Object)`                                                                                                                      | `jdk.internal.misc.Unsafe`                                 |
| removed |   -16 |   0.3% → 0.0% |        16 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)`                | `org.renaissance.harness.RenaissanceSuite$`                |
|  -20.8% |   -15 |   1.5% → 1.1% |       72 → 57 | `Unsafe_Unpark(JNIEnv_*, _jobject*, _jobject*)`                                                                                       | `<unknown>`                                                |
|  -29.4% |   -15 |   1.1% → 0.7% |       51 → 36 | `signalWaiters()`                                                                                                                     | `java.util.concurrent.ForkJoinTask`                        |
|  -28.8% |   -15 |   1.1% → 0.7% |       52 → 37 | `setDone()`                                                                                                                           | `java.util.concurrent.ForkJoinTask`                        |
|  -15.9% |   -13 |   1.7% → 1.3% |       82 → 69 | `grow(int)`                                                                                                                           | `java.util.ArrayList`                                      |
|  -19.1% |   -13 |   1.4% → 1.0% |       68 → 55 | `grow()`                                                                                                                              | `java.util.ArrayList`                                      |
|  -50.0% |   -13 |   0.5% → 0.2% |       26 → 13 | `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)`                                                                         | `<unknown>`                                                |
|  -52.4% |   -11 |   0.4% → 0.2% |       21 → 10 | `G1ParScanThreadState::steal_and_trim_queue(GenericTaskQueueSet<OverflowTaskQueue<ScannerTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*)` | `<unknown>`                                                |
|  -91.7% |   -11 |  0.3% → <0.1% |        12 → 1 | `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)`                                               | `<unknown>`                                                |
|  -26.3% |   -10 |   0.8% → 0.5% |       38 → 28 | `G1EvacuateRegionsBaseTask::work(unsigned int)`                                                                                       | `<unknown>`                                                |
|   -8.1% |   -10 |   2.6% → 2.2% |     124 → 114 | `WorkerThread::run()`                                                                                                                 | `<unknown>`                                                |

##### Ours

|  Change | Delta |             % |       Samples | Function                                                                                                               | Location                                                   |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
|   -7.5% |  -137 | 38.2% → 31.9% | 1,825 → 1,688 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -8.5% |  -117 | 28.9% → 23.9% | 1,381 → 1,264 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -7.5% |   -68 | 18.9% → 15.8% |     904 → 836 | `distance(Double[], Double[])`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -4.3% |   -19 |   9.3% → 8.0% |     443 → 424 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |   -16 |   0.3% → 0.0% |        16 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                |
|   -0.4% |    -4 | 22.2% → 20.0% | 1,063 → 1,059 | `accumulate(Double[], double[])`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -80.0% |    -4 |  0.1% → <0.1% |         5 → 1 | `run(BenchmarkContext)`                                                                                                | `org.renaissance.jdk.concurrent.FjKmeans`                  |
|  -60.0% |    -3 |  0.1% → <0.1% |         5 → 2 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                  |
| removed |    -1 |  <0.1% → 0.0% |         1 → 0 | `loadExternalPlugins(BenchmarkSuite, Seq)`                                                                             | `org.renaissance.harness.RenaissanceSuite$`                |
|  -33.3% |    -1 |  0.1% → <0.1% |         3 → 2 | `createHandler()`                                                                                                      | `org.renaissance.core.Logging`                             |
|  -33.3% |    -1 |  0.1% → <0.1% |         3 → 2 | `createRootLogger()`                                                                                                   | `org.renaissance.core.Logging`                             |
|  -33.3% |    -1 |  0.1% → <0.1% |         3 → 2 | `<clinit>()`                                                                                                           | `org.renaissance.core.Logging`                             |
|  -33.3% |    -1 |  0.1% → <0.1% |         3 → 2 | `<clinit>()`                                                                                                           | `org.renaissance.core.Launcher`                            |
|  -33.3% |    -1 |  0.1% → <0.1% |         3 → 2 | `add(double[], double[])`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -33.3% |    -1 |  0.1% → <0.1% |         3 → 2 | `combineResults(double[], double[])`                                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -50.0% |    -1 |         <0.1% |         2 → 1 | `<init>(JavaKMeans, Map)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -50.0% |    -1 |         <0.1% |         2 → 1 | `forkThreshold()`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |    -1 |  <0.1% → 0.0% |         1 → 0 | `forkThreshold()`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| removed |    -1 |  <0.1% → 0.0% |         1 → 0 | `<init>(JavaKMeans, List)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| removed |    -1 |  <0.1% → 0.0% |         1 → 0 | `$anonfun$1(Config, Path)`                                                                                             | `org.renaissance.harness.RenaissanceSuite$`                |

##### Native

| Change | Delta |            % |   Samples | Function                                                                                                                              | Location    |
| -----: | ----: | -----------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| -29.2% |   -19 |  1.4% → 0.9% |   65 → 46 | `__psynch_cvsignal`                                                                                                                   | `<unknown>` |
| -20.8% |   -15 |  1.5% → 1.1% |   72 → 57 | `Unsafe_Unpark(JNIEnv_*, _jobject*, _jobject*)`                                                                                       | `<unknown>` |
| -50.0% |   -13 |  0.5% → 0.2% |   26 → 13 | `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)`                                                                         | `<unknown>` |
| -52.4% |   -11 |  0.4% → 0.2% |   21 → 10 | `G1ParScanThreadState::steal_and_trim_queue(GenericTaskQueueSet<OverflowTaskQueue<ScannerTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*)` | `<unknown>` |
| -91.7% |   -11 | 0.3% → <0.1% |    12 → 1 | `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)`                                               | `<unknown>` |
| -26.3% |   -10 |  0.8% → 0.5% |   38 → 28 | `G1EvacuateRegionsBaseTask::work(unsigned int)`                                                                                       | `<unknown>` |
|  -8.1% |   -10 |  2.6% → 2.2% | 124 → 114 | `WorkerThread::run()`                                                                                                                 | `<unknown>` |
| -30.3% |   -10 |  0.7% → 0.4% |   33 → 23 | `G1FullGCMarker::mark_object(oopDesc*)`                                                                                               | `<unknown>` |
| -26.3% |   -10 |  0.8% → 0.5% |   38 → 28 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>(G1MarkAndPushClosure*, int, int)`                                      | `<unknown>` |
|  -3.4% |    -8 |  4.9% → 4.3% | 236 → 228 | `Thread::call_run()`                                                                                                                  | `<unknown>` |
|  -3.4% |    -8 |  4.9% → 4.3% | 236 → 228 | `thread_native_entry(Thread*)`                                                                                                        | `<unknown>` |
| -57.1% |    -8 |  0.3% → 0.1% |    14 → 6 | `SystemDictionary::resolve_class_from_stream(ClassFileStream*, Symbol*, Handle, ClassLoadInfo const&, JavaThread*)`                   | `<unknown>` |
| -57.1% |    -8 |  0.3% → 0.1% |    14 → 6 | `jvm_define_class_common(char const*, _jobject*, signed char const*, int, _jobject*, char const*, JavaThread*)`                       | `<unknown>` |
| -57.1% |    -8 |  0.3% → 0.1% |    14 → 6 | `JVM_DefineClassWithSource`                                                                                                           | `<unknown>` |
| -57.1% |    -8 |  0.3% → 0.1% |    14 → 6 | `Java_java_lang_ClassLoader_defineClass1`                                                                                             | `<unknown>` |
|  -3.0% |    -7 |  4.9% → 4.3% | 236 → 229 | `_pthread_start`                                                                                                                      | `<unknown>` |
|  -3.0% |    -7 |  4.9% → 4.3% | 236 → 229 | `thread_start`                                                                                                                        | `<unknown>` |
| -77.8% |    -7 | 0.2% → <0.1% |     9 → 2 | `G1EvacuateRegionsTask::scan_roots(G1ParScanThreadState*, unsigned int)`                                                              | `<unknown>` |
| -28.0% |    -7 |  0.5% → 0.3% |   25 → 18 | `semaphore_wait_trap`                                                                                                                 | `<unknown>` |
| -50.0% |    -7 |  0.3% → 0.1% |    14 → 7 | `KlassFactory::create_from_stream(ClassFileStream*, Symbol*, ClassLoaderData*, ClassLoadInfo const&, JavaThread*)`                    | `<unknown>` |

##### Standard library

|  Change | Delta |             % |       Samples | Function                                                                        | Location                                      |
| ------: | ----: | ------------: | ------------: | ------------------------------------------------------------------------------- | --------------------------------------------- |
|   -1.6% |   -19 | 24.3% → 21.6% | 1,162 → 1,143 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`                       | `java.util.concurrent.ForkJoinPool`           |
|  -22.7% |   -17 |   1.6% → 1.1% |       75 → 58 | `unpark(Thread)`                                                                | `java.util.concurrent.locks.LockSupport`      |
|  -21.9% |   -16 |   1.5% → 1.1% |       73 → 57 | `unpark(Object)`                                                                | `jdk.internal.misc.Unsafe`                    |
|  -29.4% |   -15 |   1.1% → 0.7% |       51 → 36 | `signalWaiters()`                                                               | `java.util.concurrent.ForkJoinTask`           |
|  -28.8% |   -15 |   1.1% → 0.7% |       52 → 37 | `setDone()`                                                                     | `java.util.concurrent.ForkJoinTask`           |
|  -15.9% |   -13 |   1.7% → 1.3% |       82 → 69 | `grow(int)`                                                                     | `java.util.ArrayList`                         |
|  -19.1% |   -13 |   1.4% → 1.0% |       68 → 55 | `grow()`                                                                        | `java.util.ArrayList`                         |
|   -8.0% |    -9 |   2.4% → 2.0% |     113 → 104 | `add(Object)`                                                                   | `java.util.ArrayList`                         |
|  -90.0% |    -9 |  0.2% → <0.1% |        10 → 1 | `fork()`                                                                        | `java.util.concurrent.ForkJoinTask`           |
|   -7.1% |    -8 |   2.3% → 2.0% |     112 → 104 | `add(Object, Object[], int)`                                                    | `java.util.ArrayList`                         |
|  -42.1% |    -8 |   0.4% → 0.2% |       19 → 11 | `putMapEntries(Map, boolean)`                                                   | `java.util.HashMap`                           |
|  -42.1% |    -8 |   0.4% → 0.2% |       19 → 11 | `<init>(Map)`                                                                   | `java.util.HashMap`                           |
|  -46.7% |    -7 |   0.3% → 0.2% |        15 → 8 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                       |
|  -46.7% |    -7 |   0.3% → 0.2% |        15 → 8 | `defineClass(String, byte[], int, int, ProtectionDomain)`                       | `java.lang.ClassLoader`                       |
|  -46.7% |    -7 |   0.3% → 0.2% |        15 → 8 | `defineClass(String, byte[], int, int, CodeSource)`                             | `java.security.SecureClassLoader`             |
|  -87.5% |    -7 |  0.2% → <0.1% |         8 → 1 | `push(ForkJoinTask, ForkJoinPool, boolean)`                                     | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|   -2.5% |    -4 |   3.4% → 3.0% |     161 → 157 | `elementData(int)`                                                              | `java.util.ArrayList`                         |
| removed |    -4 |   0.1% → 0.0% |         4 → 0 | `releaseAccess()`                                                               | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  -33.3% |    -3 |   0.2% → 0.1% |         9 → 6 | `putVal(int, Object, Object, boolean, boolean)`                                 | `java.util.HashMap`                           |
|   -1.4% |    -2 |   3.1% → 2.8% |     148 → 146 | `addAll(Collection)`                                                            | `java.util.ArrayList`                         |

##### Compiler

|  Change | Delta |            % | Samples | Function                                                                  | Location    |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------- | ----------- |
|  -25.6% |   -10 |  0.8% → 0.5% | 39 → 29 | `Compile::Code_Gen()`                                                     | `<unknown>` |
|  -69.2% |    -9 |  0.3% → 0.1% |  13 → 4 | `Matcher::match()`                                                        | `<unknown>` |
|  -35.7% |    -5 |  0.3% → 0.2% |  14 → 9 | `CompileQueue::get(CompilerThread*)`                                      | `<unknown>` |
|   -4.0% |    -4 |  2.1% → 1.8% | 99 → 95 | `CompileBroker::compiler_thread_loop()`                                   | `<unknown>` |
|  -57.1% |    -4 |         0.1% |   7 → 3 | `Matcher::xform(Node*, int)`                                              | `<unknown>` |
|   -2.8% |    -2 |  1.5% → 1.3% | 71 → 69 | `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)`        | `<unknown>` |
|   -2.8% |    -2 |  1.5% → 1.3% | 71 → 69 | `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` | `<unknown>` |
|  -33.3% |    -2 |         0.1% |   6 → 4 | `Matcher::match_tree(Node const*)`                                        | `<unknown>` |
|  -40.0% |    -2 |         0.1% |   5 → 3 | `PhaseOutput::Output()`                                                   | `<unknown>` |
|  -66.7% |    -2 | 0.1% → <0.1% |   3 → 1 | `Compilation::emit_code_body()`                                           | `<unknown>` |
|  -33.3% |    -2 |         0.1% |   6 → 4 | `PhaseIterGVN::transform_old(Node*)`                                      | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `PhaseMacroExpand::expand_macro_nodes()`                                  | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `LIR_Assembler::add_call_info(int, CodeEmitInfo*)`                        | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `LIR_Assembler::emit_slow_case_stubs()`                                   | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `Compilation::emit_code_epilog(LIR_Assembler*)`                           | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `Matcher::pd_clone_node(Node*, Node*, Matcher::MStack&)`                  | `<unknown>` |
|  -66.7% |    -2 | 0.1% → <0.1% |   3 → 1 | `Matcher::find_shared(Node*)`                                             | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `PhaseCFG::schedule_late(VectorSet&, Node_Stack&)`                        | `<unknown>` |
|  -50.0% |    -2 | 0.1% → <0.1% |   4 → 2 | `PhaseCFG::do_global_code_motion()`                                       | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `Compile::identify_useful_nodes(Unique_Node_List&)`                       | `<unknown>` |

##### JIT

| Change | Delta |           % | Samples | Function      | Location    |
| -----: | ----: | ----------: | ------: | ------------- | ----------- |
| -30.0% |   -18 | 1.3% → 0.8% | 60 → 42 | `zero_blocks` | `<unknown>` |

#### Callers

Callers with the largest change in contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % |       Samples | Caller  | Location                                    |
| -----: | ----: | -----: | ------------: | ------- | ------------------------------------------- |
| +11.6% |  +523 | 100.0% | 4,497 → 5,020 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `__psynch_cvwait` (`<unknown>`)

| Change | Delta |             % |     Samples | Caller                                      | Location    |
| -----: | ----: | ------------: | ----------: | ------------------------------------------- | ----------- |
| +70.7% |  +456 | 97.3% → 97.5% | 645 → 1,101 | `Parker::park(bool, long)`                  | `<unknown>` |
| +55.6% |   +10 |   2.7% → 2.5% |     18 → 28 | `PlatformMonitor::wait(unsigned long long)` | `<unknown>` |

##### `Parker::park(bool, long)` (`<unknown>`)

| Change | Delta |      % |     Samples | Caller                                                  | Location    |
| -----: | ----: | -----: | ----------: | ------------------------------------------------------- | ----------- |
| +71.3% |  +462 | 100.0% | 648 → 1,110 | `Unsafe_Park(JNIEnv_*, _jobject*, unsigned char, long)` | `<unknown>` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|  Change | Delta |             % |     Samples | Caller            | Location                                 |
| ------: | ----: | ------------: | ----------: | ----------------- | ---------------------------------------- |
|  +68.9% |  +446 | 98.3% → 97.6% | 647 → 1,093 | `park()`          | `java.util.concurrent.locks.LockSupport` |
| +145.5% |   +16 |   1.7% → 2.4% |     11 → 27 | `parkUntil(long)` | `java.util.concurrent.locks.LockSupport` |

##### `Unsafe_Park(JNIEnv_*, _jobject*, unsigned char, long)` (`<unknown>`)

|  Change | Delta |              % |     Samples | Caller                | Location                   |
| ------: | ----: | -------------: | ----------: | --------------------- | -------------------------- |
|  +70.3% |  +462 | 99.8% → 100.0% | 657 → 1,119 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |
| removed |    -1 |    0.2% → 0.0% |       1 → 0 | `[break_stack_range]` | `<unknown>`                |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

|  Change | Delta |             % |   Samples | Caller                              | Location                            |
| ------: | ----: | ------------: | --------: | ----------------------------------- | ----------------------------------- |
| +146.6% |  +340 | 35.9% → 52.3% | 232 → 572 | `awaitWork(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |
|  +25.5% |  +106 | 64.1% → 47.7% | 415 → 521 | `awaitDone(int, long)`              | `java.util.concurrent.ForkJoinTask` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |      % |   Samples | Caller                              | Location                            |
| ------: | ----: | -----: | --------: | ----------------------------------- | ----------------------------------- |
| +144.3% |  +355 | 100.0% | 246 → 601 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |       Samples | Caller              | Location                                                  |
| -----: | ----: | -----: | ------------: | ------------------- | --------------------------------------------------------- |
| +13.6% |  +209 | 100.0% | 1,538 → 1,747 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |              % |       Samples | Caller              | Location                                                  |
| -----: | ----: | -------------: | ------------: | ------------------- | --------------------------------------------------------- |
| +13.5% |  +208 | 99.9% → 100.0% | 1,539 → 1,747 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| +13.4% |  +207 |         100.0% | 1,540 → 1,747 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`    |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % |   Samples | Caller                         | Location                                               |
| -----: | ----: | ------------: | --------: | ------------------------------ | ------------------------------------------------------ |
| +24.7% |  +167 | 70.2% → 73.7% | 675 → 842 | `average(List)`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| +15.0% |   +67 | 46.6% → 45.1% | 448 → 515 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans`            |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change | Delta |      % |       Samples | Caller     | Location                            |
| -----: | ----: | -----: | ------------: | ---------- | ----------------------------------- |
|  +4.3% |  +179 | 100.0% | 4,205 → 4,384 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change | Delta |      % |       Samples | Caller   | Location                             |
| -----: | ----: | -----: | ------------: | -------- | ------------------------------------ |
|  +4.2% |  +178 | 100.0% | 4,205 → 4,383 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |      % |       Samples | Caller   | Location                            |
| -----: | ----: | -----: | ------------: | -------- | ----------------------------------- |
|  +4.3% |  +175 | 100.0% | 4,061 → 4,236 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |      % |       Samples | Caller      | Location                                               |
| -----: | ----: | -----: | ------------: | ----------- | ------------------------------------------------------ |
|  +4.3% |  +175 | 100.0% | 4,062 → 4,237 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % |       Samples | Caller                              | Location                            |
| -----: | ----: | -----: | ------------: | ----------------------------------- | ----------------------------------- |
|  +4.0% |  +169 | 100.0% | 4,248 → 4,417 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % |   Samples | Caller                     | Location                                               |
| -----: | ----: | -----: | --------: | -------------------------- | ------------------------------------------------------ |
| +24.7% |  +167 | 100.0% | 675 → 842 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % |   Samples | Caller              | Location                                               |
| -----: | ----: | -----: | --------: | ------------------- | ------------------------------------------------------ |
| +24.6% |  +167 | 100.0% | 680 → 847 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % |   Samples | Caller              | Location                                               |
| -----: | ----: | -----: | --------: | ------------------- | ------------------------------------------------------ |
| +24.6% |  +167 | 100.0% | 680 → 847 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| +24.6% |  +167 | 100.0% | 680 → 847 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % |       Samples | Caller                                                    | Location                                      |
| -----: | ----: | ------------: | ------------: | --------------------------------------------------------- | --------------------------------------------- |
| +18.8% |  +181 | 22.7% → 25.9% |   962 → 1,143 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`           |
|  +3.9% |  +164 |        100.0% | 4,241 → 4,405 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  +3.7% |  +143 | 90.9% → 90.8% | 3,856 → 3,999 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  -1.4% |   -16 | 26.6% → 25.2% | 1,126 → 1,110 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % |   Samples | Caller   | Location                                                               |
| -----: | ----: | -----: | --------: | -------- | ---------------------------------------------------------------------- |
| +14.6% |   +66 | 100.0% | 451 → 517 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`)

| Change | Delta |      % |   Samples | Caller   | Location                                            |
| -----: | ----: | -----: | --------: | -------- | --------------------------------------------------- |
| +14.6% |   +66 | 100.0% | 451 → 517 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % |   Samples | Caller                   | Location                                                               |
| -----: | ----: | -----: | --------: | ------------------------ | ---------------------------------------------------------------------- |
|  +7.7% |   +22 | 100.0% | 287 → 309 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change | Delta |             % | Samples | Caller              | Location                                                               |
| -----: | ----: | ------------: | ------: | ------------------- | ---------------------------------------------------------------------- |
|    new |   +22 | 0.0% → 100.0% |  0 → 22 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111f1b8` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`)

| Change | Delta |      % |   Samples | Caller                | Location            |
| -----: | ----: | -----: | --------: | --------------------- | ------------------- |
|  +7.3% |   +21 | 100.0% | 288 → 309 | `forEach(BiConsumer)` | `java.util.HashMap` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |     % |   Samples | Caller                     | Location                                                   |
| -----: | ----: | ----: | --------: | -------------------------- | ---------------------------------------------------------- |
|  +4.9% |   +15 | 99.4% | 308 → 323 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller                           | Location                                                   |
| -----: | ----: | -----: | --------: | -------------------------------- | ---------------------------------------------------------- |
|  +4.9% |   +15 | 100.0% | 308 → 323 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller      | Location                                               |
| -----: | ----: | -----: | --------: | ----------- | ------------------------------------------------------ |
|  +4.9% |   +15 | 100.0% | 308 → 323 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change | Delta |      % | Samples | Caller               | Location                                  |
| ------: | ----: | -----: | ------: | -------------------- | ----------------------------------------- |
| +114.3% |    +8 | 100.0% |  7 → 15 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

| Change | Delta |      % | Samples | Caller           | Location                        |
| -----: | ----: | -----: | ------: | ---------------- | ------------------------------- |
| +18.4% |    +7 | 100.0% | 38 → 45 | `main(String[])` | `org.renaissance.core.Launcher` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change | Delta |      % | Samples | Caller           | Location                                    |
| -----: | ----: | -----: | ------: | ---------------- | ------------------------------------------- |
| +41.2% |    +7 | 100.0% | 17 → 24 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite$` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

| Change | Delta |      % | Samples | Caller           | Location                                   |
| -----: | ----: | -----: | ------: | ---------------- | ------------------------------------------ |
| +20.0% |    +6 | 100.0% | 30 → 36 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

| Change | Delta |      % | Samples | Caller                         | Location                                             |
| -----: | ----: | -----: | ------: | ------------------------------ | ---------------------------------------------------- |
| +18.8% |    +6 | 100.0% | 32 → 38 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001004800` |

##### `MemAllocator::allocate() const` (`<unknown>`)

| Change | Delta |              % | Samples | Caller                                                                         | Location    |
| -----: | ----: | -------------: | ------: | ------------------------------------------------------------------------------ | ----------- |
| +69.2% |   +18 | 100.0% → 93.6% | 26 → 44 | `CollectedHeap::array_allocate(Klass*, unsigned long, int, bool, JavaThread*)` | `<unknown>` |
|    new |    +3 |    0.0% → 6.4% |   0 → 3 | `InstanceKlass::allocate_instance(JavaThread*)`                                | `<unknown>` |

##### `CollectedHeap::array_allocate(Klass*, unsigned long, int, bool, JavaThread*)` (`<unknown>`)

| Change | Delta |              % | Samples | Caller                                                    | Location    |
| -----: | ----: | -------------: | ------: | --------------------------------------------------------- | ----------- |
| +55.6% |   +15 | 100.0% → 91.3% | 27 → 42 | `InstanceKlass::allocate_objArray(int, int, JavaThread*)` | `<unknown>` |
|    new |    +3 |    0.0% → 6.5% |   0 → 3 | `OptoRuntime::new_array_C(Klass*, int, JavaThread*)`      | `<unknown>` |
|    new |    +1 |    0.0% → 2.2% |   0 → 1 | `_new_array_Java`                                         | `<unknown>` |

##### `_new_array_Java` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                    | Location                                                   |
| ------: | ----: | ------------: | ------: | ------------------------- | ---------------------------------------------------------- |
|  +50.0% |   +16 | 97.0% → 94.1% | 32 → 48 | `copyOf(Object[], int)`   | `java.util.Arrays`                                         |
|     new |    +2 |   0.0% → 3.9% |   0 → 2 | `findNearestCentroid()`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |    -1 |   3.0% → 0.0% |   1 → 0 | `grow(int)`               | `java.util.ArrayList`                                      |
|     new |    +1 |   0.0% → 2.0% |   0 → 1 | `add(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

##### `OptoRuntime::new_array_C(Klass*, int, JavaThread*)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller            | Location    |
| -----: | ----: | -----: | ------: | ----------------- | ----------- |
| +54.8% |   +17 | 100.0% | 31 → 48 | `_new_array_Java` | `<unknown>` |

##### `InstanceKlass::allocate_objArray(int, int, JavaThread*)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                               | Location    |
| -----: | ----: | -----: | ------: | ---------------------------------------------------- | ----------- |
| +59.3% |   +16 | 100.0% | 27 → 43 | `OptoRuntime::new_array_C(Klass*, int, JavaThread*)` | `<unknown>` |

##### `arrayof_jint_disjoint_arraycopy` (`<unknown>`)

| Change | Delta |             % |   Samples | Caller                              | Location              |
| -----: | ----: | ------------: | --------: | ----------------------------------- | --------------------- |
| +44.4% |   +16 | 22.2% → 29.4% |   36 → 52 | `merge(Object, Object, BiFunction)` | `java.util.HashMap`   |
| -23.1% |    -3 |   8.0% → 5.6% |   13 → 10 | `grow(int)`                         | `java.util.ArrayList` |
|  +1.8% |    +2 | 69.8% → 65.0% | 113 → 115 | `copyOf(Object[], int)`             | `java.util.Arrays`    |

##### `Monitor::wait_without_safepoint_check(unsigned long long)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                                     | Location    |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------- | ----------- |
|    new |   +12 |  0.0% → 57.1% |  0 → 12 | `TaskTerminator::offer_termination(TerminatorTerminator*)` | `<unknown>` |
| +20.0% |    +1 | 83.3% → 28.6% |   5 → 6 | `WatcherThread::sleep() const`                             | `<unknown>` |
|    new |    +1 |   0.0% → 4.8% |   0 → 1 | `VMThread::wait_for_operation()`                           | `<unknown>` |
|    new |    +1 |   0.0% → 4.8% |   0 → 1 | `SuspendibleThreadSet::join()`                             | `<unknown>` |

##### `forward_copy_longs` (`<unknown>`)

| Change | Delta |             % |   Samples | Caller                            | Location    |
| -----: | ----: | ------------: | --------: | --------------------------------- | ----------- |
|  +9.0% |   +13 | 77.4% → 78.5% | 144 → 157 | `arrayof_jint_disjoint_arraycopy` | `<unknown>` |
|  +2.4% |    +1 | 22.6% → 21.5% |   42 → 43 | `arrayof_oop_disjoint_arraycopy`  | `<unknown>` |

##### `TaskTerminator::offer_termination(TerminatorTerminator*)` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                                                                                                                                                                                                                              | Location    |
| ------: | ----: | -------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| +175.0% |    +7 | 100.0% → 68.8% |  4 → 11 | `G1ParEvacuateFollowersClosure::offer_termination()`                                                                                                                                                                                | `<unknown>` |
|     new |    +5 |   0.0% → 31.3% |   0 → 5 | `G1FullGCMarker::complete_marking(GenericTaskQueueSet<OverflowTaskQueue<oopDesc*, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*, GenericTaskQueueSet<OverflowTaskQueue<ObjArrayTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*, TaskTerminator*)` | `<unknown>` |

##### `PlatformMonitor::wait(unsigned long long)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                      | Location    |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------- | ----------- |
| +320.0% |   +16 | 26.3% → 70.0% |  5 → 21 | `Monitor::wait_without_safepoint_check(unsigned long long)` | `<unknown>` |
|  -35.7% |    -5 | 73.7% → 30.0% |  14 → 9 | `Monitor::wait(unsigned long long)`                         | `<unknown>` |

##### `__psynch_mutexwait` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                              | Location    |
| ------: | ----: | -----: | ------: | ----------------------------------- | ----------- |
| +100.0% |   +10 | 100.0% | 10 → 20 | `_pthread_mutex_firstfit_lock_slow` | `<unknown>` |

##### `_pthread_mutex_firstfit_lock_slow` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                  | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------- | ----------- |
| +150.0% |    +6 | 40.0% → 50.0% |  4 → 10 | `Mutex::lock(Thread*)`                  | `<unknown>` |
|  +60.0% |    +3 | 50.0% → 40.0% |   5 → 8 | `Mutex::lock_without_safepoint_check()` | `<unknown>` |
|     new |    +2 |  0.0% → 10.0% |   0 → 2 | `_pthread_cond_wait`                    | `<unknown>` |
| removed |    -1 |  10.0% → 0.0% |   1 → 0 | `ThreadCritical::ThreadCritical()`      | `<unknown>` |

##### `MemAllocator::mem_allocate_inside_tlab_slow(MemAllocator::Allocation&) const` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                           | Location    |
| ------: | ----: | -----: | ------: | -------------------------------- | ----------- |
| +225.0% |    +9 | 100.0% |  4 → 13 | `MemAllocator::allocate() const` | `<unknown>` |

##### `HeapRegionManager::par_iterate(HeapRegionClosure*, HeapRegionClaimer*, unsigned int) const` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                          | Location    |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | ----------- |
| +600.0% |    +6 | 50.0% → 63.6% |   1 → 7 | `G1FullGCResetMetadataTask::work(unsigned int)` | `<unknown>` |
|     new |    +2 |  0.0% → 18.2% |   0 → 2 | `G1FullGCAdjustTask::work(unsigned int)`        | `<unknown>` |
| +100.0% |    +1 | 50.0% → 18.2% |   1 → 2 | `G1PrepareEvacuationTask::work(unsigned int)`   | `<unknown>` |

##### `G1CollectedHeap::attempt_allocation_slow(unsigned int, unsigned long, bool)` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                                                                                    | Location    |
| ------: | ----: | -------------: | ------: | ----------------------------------------------------------------------------------------- | ----------- |
| +300.0% |    +6 | 100.0% → 88.9% |   2 → 8 | `G1CollectedHeap::attempt_allocation(unsigned long, unsigned long, unsigned long*, bool)` | `<unknown>` |
|     new |    +1 |   0.0% → 11.1% |   0 → 1 | `G1CollectedHeap::mem_allocate(unsigned long, bool*)`                                     | `<unknown>` |

##### `G1ParEvacuateFollowersClosure::offer_termination()` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                                     | Location    |
| ------: | ----: | -----: | ------: | ------------------------------------------ | ----------- |
| +175.0% |    +7 | 100.0% |  4 → 11 | `G1ParEvacuateFollowersClosure::do_void()` | `<unknown>` |

##### `_platform_bzero` (`<unknown>`)

| Change | Delta |              % | Samples | Caller                                                 | Location    |
| -----: | ----: | -------------: | ------: | ------------------------------------------------------ | ----------- |
| +31.3% |    +5 | 100.0% → 95.5% | 16 → 21 | `MemAllocator::allocate() const`                       | `<unknown>` |
|    new |    +1 |    0.0% → 4.5% |   0 → 1 | `PhaseOutput::fill_buffer(CodeBuffer*, unsigned int*)` | `<unknown>` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |      % |       Samples | Caller                                   | Location                            |
| -----: | ----: | -----: | ------------: | ---------------------------------------- | ----------------------------------- |
|  +3.8% |  +163 | 100.0% | 4,244 → 4,407 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |      % |       Samples | Caller                 | Location                            |
| -----: | ----: | -----: | ------------: | ---------------------- | ----------------------------------- |
|  +3.7% |  +142 | 100.0% | 3,857 → 3,999 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

| Change | Delta |      % |   Samples | Caller     | Location                            |
| -----: | ----: | -----: | --------: | ---------- | ----------------------------------- |
| +14.6% |   +66 | 100.0% | 451 → 517 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

| Change | Delta |      % |   Samples | Caller            | Location                                    |
| -----: | ----: | -----: | --------: | ----------------- | ------------------------------------------- |
|  +8.0% |   +23 | 100.0% | 289 → 312 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

| Change | Delta |      % |   Samples | Caller                              | Location                                    |
| -----: | ----: | -----: | --------: | ----------------------------------- | ------------------------------------------- |
|  +7.7% |   +22 | 100.0% | 287 → 309 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `doubleValue()` (`java.lang.Double`)

| Change | Delta |             % |  Samples | Caller                           | Location                                                   |
| -----: | ----: | ------------: | -------: | -------------------------------- | ---------------------------------------------------------- |
| +23.9% |   +21 | 89.8% → 94.0% | 88 → 109 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| -30.0% |    -3 |  10.2% → 6.0% |   10 → 7 | `distance(Double[], Double[])`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `parkUntil(long)` (`java.util.concurrent.locks.LockSupport`)

|  Change | Delta |      % | Samples | Caller                              | Location                            |
| ------: | ----: | -----: | ------: | ----------------------------------- | ----------------------------------- |
| +145.5% |   +16 | 100.0% | 11 → 27 | `awaitWork(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change | Delta |             % |   Samples | Caller      | Location              |
| -----: | ----: | ------------: | --------: | ----------- | --------------------- |
| +36.8% |    +7 | 12.3% → 15.6% |   19 → 26 | `grow(int)` | `java.util.ArrayList` |
|  +3.7% |    +5 | 87.7% → 84.4% | 136 → 141 | `toArray()` | `java.util.ArrayList` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

| Change | Delta |      % |   Samples | Caller                   | Location                                                   |
| -----: | ----: | -----: | --------: | ------------------------ | ---------------------------------------------------------- |
|  +6.0% |    +9 | 100.0% | 151 → 160 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `Compile::Optimize()` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                                             | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------ | ----------- |
| +20.0% |    +5 | 100.0% | 25 → 30 | `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` | `<unknown>` |

##### `Compilation::build_hir()` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                               | Location    |
| ------: | ----: | -----: | ------: | ------------------------------------ | ----------- |
| +166.7% |    +5 | 100.0% |   3 → 8 | `Compilation::compile_java_method()` | `<unknown>` |

##### `PhaseIdealLoop::build_and_optimize()` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                                        | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------- | ----------- |
| +30.8% |    +4 | 100.0% | 13 → 17 | `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` | `<unknown>` |

##### `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                                  | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------------------------- | ----------- |
| +30.8% |    +4 | 100.0% | 13 → 17 | `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` | `<unknown>` |

##### `GraphBuilder::GraphBuilder(Compilation*, IRScope*)` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                                                                | Location    |
| ------: | ----: | -----: | ------: | --------------------------------------------------------------------- | ----------- |
| +200.0% |    +4 | 100.0% |   2 → 6 | `IRScope::IRScope(Compilation*, IRScope*, int, ciMethod*, int, bool)` | `<unknown>` |

##### `GraphBuilder::try_inline(ciMethod*, bool, bool, Bytecodes::Code, Instruction*)` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                                           | Location    |
| ------: | ----: | -------------: | ------: | ------------------------------------------------ | ----------- |
| +300.0% |    +3 | 100.0% → 80.0% |   1 → 4 | `GraphBuilder::invoke(Bytecodes::Code)`          | `<unknown>` |
|     new |    +1 |   0.0% → 20.0% |   0 → 1 | `GraphBuilder::iterate_bytecodes_for_block(int)` | `<unknown>` |

##### `Type::hashcons()` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                                              | Location    |
| -----: | ----: | -----------: | ------: | --------------------------------------------------- | ----------- |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `TypeInstPtr::cast_to_ptr_type(TypePtr::PTR) const` | `<unknown>` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `TypeInstPtr::add_offset(long) const`               | `<unknown>` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `TypeInstPtr::cast_to_exactness(bool) const`        | `<unknown>` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `PhaseGVN::transform_no_reclaim(Node*)`             | `<unknown>` |

##### `GraphBuilder::iterate_bytecodes_for_block(int)` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                                   | Location    |
| ------: | ----: | -----: | ------: | ---------------------------------------- | ----------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `GraphBuilder::iterate_all_blocks(bool)` | `<unknown>` |

##### `GraphBuilder::iterate_all_blocks(bool)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                                | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------- | ----------- |
| +150.0% |    +3 |        100.0% |   2 → 5 | `GraphBuilder::GraphBuilder(Compilation*, IRScope*)`                                  | `<unknown>` |
| +100.0% |    +1 | 50.0% → 40.0% |   1 → 2 | `GraphBuilder::try_inline_full(ciMethod*, bool, bool, Bytecodes::Code, Instruction*)` | `<unknown>` |

##### `CompilationPolicy::event(methodHandle const&, methodHandle const&, int, int, CompLevel, CompiledMethod*, JavaThread*)` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                                                                              | Location    |
| ------: | ----: | -------------: | ------: | ----------------------------------------------------------------------------------- | ----------- |
| +400.0% |    +4 | 50.0% → 100.0% |   1 → 5 | `InterpreterRuntime::frequency_counter_overflow_inner(JavaThread*, unsigned char*)` | `<unknown>` |
| removed |    -1 |   50.0% → 0.0% |   1 → 0 | `Runtime1::counter_overflow(JavaThread*, int, Method*)`                             | `<unknown>` |

##### `GraphBuilder::try_inline_full(ciMethod*, bool, bool, Bytecodes::Code, Instruction*)` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                                                                           | Location    |
| ------: | ----: | -----: | ------: | -------------------------------------------------------------------------------- | ----------- |
| +300.0% |    +3 | 100.0% |   1 → 4 | `GraphBuilder::try_inline(ciMethod*, bool, bool, Bytecodes::Code, Instruction*)` | `<unknown>` |

##### `GraphBuilder::invoke(Bytecodes::Code)` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                                           | Location    |
| ------: | ----: | -----: | ------: | ------------------------------------------------ | ----------- |
| +300.0% |    +3 | 100.0% |   1 → 4 | `GraphBuilder::iterate_bytecodes_for_block(int)` | `<unknown>` |

##### `PhaseCCP::analyze()` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                              | Location    |
| ------: | ----: | -----: | ------: | ----------------------------------- | ----------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `PhaseCCP::PhaseCCP(PhaseIterGVN*)` | `<unknown>` |

##### `PhaseCCP::PhaseCCP(PhaseIterGVN*)` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                | Location    |
| ------: | ----: | -----: | ------: | --------------------- | ----------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `Compile::Optimize()` | `<unknown>` |

##### `ciObjectFactory::get_metadata(Metadata*)` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                                              | Location    |
| -----: | ----: | -----------: | ------: | --------------------------------------------------- | ----------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `ciEnv::get_method_from_handle(Method*)`            | `<unknown>` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `ciMethod::ensure_method_data(methodHandle const&)` | `<unknown>` |

##### `IndexSetIterator::advance_and_next()` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                                                               | Location    |
| -----: | ----: | -----------: | ------: | -------------------------------------------------------------------- | ----------- |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`                    | `<unknown>` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `PhaseChaitin::Select()`                                             | `<unknown>` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `PhaseLive::add_liveout(Block_List&, Block*, IndexSet*, VectorSet&)` | `<unknown>` |

##### `TypeInstPtr::add_offset(long) const` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                                                                   | Location    |
| -----: | ----: | -----------: | ------: | ------------------------------------------------------------------------ | ----------- |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `PhaseCCP::push_child_nodes_to_worklist(Unique_Node_List&, Node*) const` | `<unknown>` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `Compile::alias_type(ciField*)`                                          | `<unknown>` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `PhaseGVN::transform_no_reclaim(Node*)`                                  | `<unknown>` |

##### `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                | Location    |
| -----: | ----: | ------------: | ------: | --------------------- | ----------- |
| +22.2% |    +2 | 60.0% → 64.7% |  9 → 11 | `Compile::Optimize()` | `<unknown>` |

##### `Compilation::compile_method()` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                                                                                  | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------- | ----------- |
| +16.7% |    +2 | 100.0% | 12 → 14 | `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` | `<unknown>` |

##### `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                                                  | Location    |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------------- | ----------- |
| +16.7% |    +2 | 100.0% | 12 → 14 | `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` | `<unknown>` |

##### `vtable stub` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller      | Location                                               |
| ------: | ----: | -----: | ------: | ----------- | ------------------------------------------------------ |
| +100.0% |    +1 | 100.0% |   1 → 2 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `I2C/C2I adapters(0xb)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                            | Location                                        |
| -----: | ----: | ------------: | ------: | --------------------------------- | ----------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<init>(double[], int, int, int)` | `java.util.Spliterators$DoubleArraySpliterator` |

##### `itable stub` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                             | Location                        |
| -----: | ----: | ------------: | ------: | ---------------------------------- | ------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `fromCharacteristics(Spliterator)` | `java.util.stream.StreamOpFlag` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |              % |       Samples | Caller              | Location                                                   |
| -----: | ----: | -------------: | ------------: | ------------------- | ---------------------------------------------------------- |
|  -7.5% |  -137 |         100.0% | 1,825 → 1,688 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
|  -7.5% |  -136 | 99.9% → 100.0% | 1,824 → 1,688 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |       Samples | Caller              | Location                                                   |
| -----: | ----: | -----: | ------------: | ------------------- | ---------------------------------------------------------- |
|  -8.5% |  -117 | 100.0% | 1,381 → 1,264 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller                  | Location                                                   |
| -----: | ----: | -----: | --------: | ----------------------- | ---------------------------------------------------------- |
|  -7.5% |   -68 | 100.0% | 904 → 836 | `findNearestCentroid()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller              | Location                                                   |
| -----: | ----: | -----: | --------: | ------------------- | ---------------------------------------------------------- |
|  -4.3% |   -19 | 100.0% | 443 → 424 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % |       Samples | Caller                 | Location                            |
| -----: | ----: | -----: | ------------: | ---------------------- | ----------------------------------- |
|  -1.6% |   -19 | 100.0% | 1,162 → 1,143 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `__psynch_cvsignal` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                          | Location    |
| -----: | ----: | -----: | ------: | ----------------------------------------------- | ----------- |
| -29.2% |   -19 | 100.0% | 65 → 46 | `Unsafe_Unpark(JNIEnv_*, _jobject*, _jobject*)` | `<unknown>` |

##### `zero_blocks` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                              | Location                                                   |
| ------: | ----: | ------------: | ------: | ----------------------------------- | ---------------------------------------------------------- |
|  -45.5% |   -10 | 36.7% → 28.6% | 22 → 12 | `grow(int)`                         | `java.util.ArrayList`                                      |
| removed |    -9 |  15.0% → 0.0% |   9 → 0 | `findNearestCentroid()`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   +7.1% |    +2 | 46.7% → 71.4% | 28 → 30 | `merge(Object, Object, BiFunction)` | `java.util.HashMap`                                        |
| removed |    -1 |   1.7% → 0.0% |   1 → 0 | `copyOf(Object[], int, Class)`      | `java.util.Arrays`                                         |

##### `unpark(Thread)` (`java.util.concurrent.locks.LockSupport`)

| Change | Delta |             % | Samples | Caller                         | Location                            |
| -----: | ----: | ------------: | ------: | ------------------------------ | ----------------------------------- |
| -27.1% |   -13 | 64.0% → 60.3% | 48 → 35 | `signalWaiters()`              | `java.util.concurrent.ForkJoinTask` |
|  -9.5% |    -2 | 28.0% → 32.8% | 21 → 19 | `tryCompensate(long, boolean)` | `java.util.concurrent.ForkJoinPool` |
| -33.3% |    -2 |   8.0% → 6.9% |   6 → 4 | `signalWork()`                 | `java.util.concurrent.ForkJoinPool` |

##### `unpark(Object)` (`jdk.internal.misc.Unsafe`)

| Change | Delta |      % | Samples | Caller           | Location                                 |
| -----: | ----: | -----: | ------: | ---------------- | ---------------------------------------- |
| -21.9% |   -16 | 100.0% | 73 → 57 | `unpark(Thread)` | `java.util.concurrent.locks.LockSupport` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change | Delta |             % | Samples | Caller              | Location                                                               |
| ------: | ----: | ------------: | ------: | ------------------- | ---------------------------------------------------------------------- |
| removed |   -16 | 100.0% → 0.0% |  16 → 0 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111f208` |

##### `Unsafe_Unpark(JNIEnv_*, _jobject*, _jobject*)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller           | Location                   |
| -----: | ----: | -----: | ------: | ---------------- | -------------------------- |
| -20.8% |   -15 | 100.0% | 72 → 57 | `unpark(Object)` | `jdk.internal.misc.Unsafe` |

##### `signalWaiters()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |      % | Samples | Caller      | Location                            |
| -----: | ----: | -----: | ------: | ----------- | ----------------------------------- |
| -29.4% |   -15 | 100.0% | 51 → 36 | `setDone()` | `java.util.concurrent.ForkJoinTask` |

##### `setDone()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |      % | Samples | Caller     | Location                            |
| -----: | ----: | -----: | ------: | ---------- | ----------------------------------- |
| -28.8% |   -15 | 100.0% | 52 → 37 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `grow(int)` (`java.util.ArrayList`)

| Change | Delta |             % | Samples | Caller               | Location              |
| -----: | ----: | ------------: | ------: | -------------------- | --------------------- |
| -21.5% |   -14 | 79.3% → 73.9% | 65 → 51 | `grow()`             | `java.util.ArrayList` |
|  +5.9% |    +1 | 20.7% → 26.1% | 17 → 18 | `addAll(Collection)` | `java.util.ArrayList` |

##### `grow()` (`java.util.ArrayList`)

| Change | Delta |      % | Samples | Caller                       | Location              |
| -----: | ----: | -----: | ------: | ---------------------------- | --------------------- |
| -19.1% |   -13 | 100.0% | 68 → 55 | `add(Object, Object[], int)` | `java.util.ArrayList` |

##### `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                                                                                | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  -52.6% |   -10 | 73.1% → 69.2% |  19 → 9 | `G1ParScanThreadState::steal_and_trim_queue(GenericTaskQueueSet<OverflowTaskQueue<ScannerTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*)` | `<unknown>` |
| removed |    -5 |  19.2% → 0.0% |   5 → 0 | `G1ScanHRForRegionClosure::scan_memregion(unsigned int, MemRegion)`                                                                   | `<unknown>` |
| +100.0% |    +2 |  7.7% → 30.8% |   2 → 4 | `G1ParEvacuateFollowersClosure::do_void()`                                                                                            | `<unknown>` |

##### `G1ParScanThreadState::steal_and_trim_queue(GenericTaskQueueSet<OverflowTaskQueue<ScannerTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                     | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------------ | ----------- |
| -52.4% |   -11 | 100.0% | 21 → 10 | `G1ParEvacuateFollowersClosure::do_void()` | `<unknown>` |

##### `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                                                        | Location    |
| ------: | ----: | -------------: | ------: | ------------------------------------------------------------- | ----------- |
|  -90.9% |   -10 | 91.7% → 100.0% |  11 → 1 | `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)` | `<unknown>` |
| removed |    -1 |    8.3% → 0.0% |   1 → 0 | `G1ParEvacuateFollowersClosure::do_void()`                    | `<unknown>` |

##### `G1EvacuateRegionsBaseTask::work(unsigned int)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                | Location    |
| -----: | ----: | -----: | ------: | --------------------- | ----------- |
| -26.3% |   -10 | 100.0% | 38 → 28 | `WorkerThread::run()` | `<unknown>` |

##### `WorkerThread::run()` (`<unknown>`)

| Change | Delta |      % |   Samples | Caller               | Location    |
| -----: | ----: | -----: | --------: | -------------------- | ----------- |
|  -8.1% |   -10 | 100.0% | 124 → 114 | `Thread::call_run()` | `<unknown>` |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |       Samples | Caller        | Location                                                  |
| -----: | ----: | -----: | ------------: | ------------- | --------------------------------------------------------- |
|  -0.4% |    -4 | 100.0% | 1,063 → 1,059 | `vectorSum()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |      % | Samples | Caller                  | Location                                  |
| -----: | ----: | -----: | ------: | ----------------------- | ----------------------------------------- |
| -80.0% |    -4 | 100.0% |   5 → 1 | `executeOperation(int)` | `org.renaissance.harness.ExecutionDriver` |

##### `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`)

| Change | Delta |      % | Samples | Caller               | Location                                  |
| -----: | ----: | -----: | ------: | -------------------- | ----------------------------------------- |
| -60.0% |    -3 | 100.0% |   5 → 2 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `loadExternalPlugins(BenchmarkSuite, Seq)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change | Delta |             % | Samples | Caller           | Location                                    |
| ------: | ----: | ------------: | ------: | ---------------- | ------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite$` |

##### `createHandler()` (`org.renaissance.core.Logging`)

| Change | Delta |      % | Samples | Caller               | Location                       |
| -----: | ----: | -----: | ------: | -------------------- | ------------------------------ |
| -33.3% |    -1 | 100.0% |   3 → 2 | `createRootLogger()` | `org.renaissance.core.Logging` |

##### `createRootLogger()` (`org.renaissance.core.Logging`)

| Change | Delta |      % | Samples | Caller       | Location                       |
| -----: | ----: | -----: | ------: | ------------ | ------------------------------ |
| -33.3% |    -1 | 100.0% |   3 → 2 | `<clinit>()` | `org.renaissance.core.Logging` |

##### `<clinit>()` (`org.renaissance.core.Logging`)

| Change | Delta |      % | Samples | Caller       | Location                        |
| -----: | ----: | -----: | ------: | ------------ | ------------------------------- |
| -33.3% |    -1 | 100.0% |   3 → 2 | `<clinit>()` | `org.renaissance.core.Launcher` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % | Samples | Caller                               | Location                                                  |
| -----: | ----: | -----: | ------: | ------------------------------------ | --------------------------------------------------------- |
| -33.3% |    -1 | 100.0% |   3 → 2 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `combineResults(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % | Samples | Caller                           | Location                                                  |
| -----: | ----: | -----: | ------: | -------------------------------- | --------------------------------------------------------- |
| -33.3% |    -1 | 100.0% |   3 → 2 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `<init>(JavaKMeans, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % | Samples | Caller                         | Location                                    |
| -----: | ----: | -----: | ------: | ------------------------------ | ------------------------------------------- |
| -50.0% |    -1 | 100.0% |   2 → 1 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `forkThreshold()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % | Samples | Caller      | Location                                               |
| -----: | ----: | -----: | ------: | ----------- | ------------------------------------------------------ |
| -50.0% |    -1 | 100.0% |   2 → 1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `forkThreshold()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |             % | Samples | Caller      | Location                                               |
| ------: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `<init>(JavaKMeans, List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change | Delta |             % | Samples | Caller                    | Location                                               |
| ------: | ----: | ------------: | ------: | ------------------------- | ------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>(JavaKMeans, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `$anonfun$1(Config, Path)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change | Delta |             % | Samples | Caller    | Location                                                               |
| ------: | ----: | ------------: | ------: | --------- | ---------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `apply()` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000070011038c0` |

##### `G1FullGCMarker::mark_object(oopDesc*)` (`<unknown>`)

| Change | Delta |              % | Samples | Caller                                                                                                                                                                                                                              | Location    |
| -----: | ----: | -------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| -33.3% |   -11 | 100.0% → 95.7% | 33 → 22 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>(G1MarkAndPushClosure*, int, int)`                                                                                                                                    | `<unknown>` |
|    new |    +1 |    0.0% → 4.3% |   0 → 1 | `G1FullGCMarker::complete_marking(GenericTaskQueueSet<OverflowTaskQueue<oopDesc*, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*, GenericTaskQueueSet<OverflowTaskQueue<ObjArrayTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*, TaskTerminator*)` | `<unknown>` |

##### `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>(G1MarkAndPushClosure*, int, int)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                                                                                                                                                                                                              | Location    |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| -28.6% |    -6 | 55.3% → 53.6% | 21 → 15 | `G1FullGCMarker::complete_marking(GenericTaskQueueSet<OverflowTaskQueue<oopDesc*, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*, GenericTaskQueueSet<OverflowTaskQueue<ObjArrayTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*, TaskTerminator*)` | `<unknown>` |
| -23.5% |    -4 | 44.7% → 46.4% | 17 → 13 | `G1FullGCMarker::follow_marking_stacks()`                                                                                                                                                                                           | `<unknown>` |

##### `Thread::call_run()` (`<unknown>`)

| Change | Delta |      % |   Samples | Caller                         | Location    |
| -----: | ----: | -----: | --------: | ------------------------------ | ----------- |
|  -3.4% |    -8 | 100.0% | 236 → 228 | `thread_native_entry(Thread*)` | `<unknown>` |

##### `thread_native_entry(Thread*)` (`<unknown>`)

| Change | Delta |      % |   Samples | Caller           | Location    |
| -----: | ----: | -----: | --------: | ---------------- | ----------- |
|  -3.4% |    -8 | 100.0% | 236 → 228 | `_pthread_start` | `<unknown>` |

##### `SystemDictionary::resolve_class_from_stream(ClassFileStream*, Symbol*, Handle, ClassLoadInfo const&, JavaThread*)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                                                                                          | Location    |
| -----: | ----: | -----: | ------: | --------------------------------------------------------------------------------------------------------------- | ----------- |
| -57.1% |    -8 | 100.0% |  14 → 6 | `jvm_define_class_common(char const*, _jobject*, signed char const*, int, _jobject*, char const*, JavaThread*)` | `<unknown>` |

##### `jvm_define_class_common(char const*, _jobject*, signed char const*, int, _jobject*, char const*, JavaThread*)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                      | Location    |
| -----: | ----: | -----: | ------: | --------------------------- | ----------- |
| -57.1% |    -8 | 100.0% |  14 → 6 | `JVM_DefineClassWithSource` | `<unknown>` |

##### `JVM_DefineClassWithSource` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                    | Location    |
| -----: | ----: | -----: | ------: | ----------------------------------------- | ----------- |
| -57.1% |    -8 | 100.0% |  14 → 6 | `Java_java_lang_ClassLoader_defineClass1` | `<unknown>` |

##### `Java_java_lang_ClassLoader_defineClass1` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                                                          | Location                |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------- | ----------------------- |
| -57.1% |    -8 | 100.0% |  14 → 6 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader` |

##### `_pthread_start` (`<unknown>`)

| Change | Delta |      % |   Samples | Caller         | Location    |
| -----: | ----: | -----: | --------: | -------------- | ----------- |
|  -3.0% |    -7 | 100.0% | 236 → 229 | `thread_start` | `<unknown>` |

##### `G1EvacuateRegionsTask::scan_roots(G1ParScanThreadState*, unsigned int)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                          | Location    |
| -----: | ----: | -----: | ------: | ----------------------------------------------- | ----------- |
| -77.8% |    -7 | 100.0% |   9 → 2 | `G1EvacuateRegionsBaseTask::work(unsigned int)` | `<unknown>` |

##### `semaphore_wait_trap` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                 | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------- | ----------- |
|  -35.0% |    -7 | 80.0% → 72.2% | 20 → 13 | `WorkerThread::run()`                  | `<unknown>` |
|  +33.3% |    +1 | 12.0% → 22.2% |   3 → 4 | `GenericWaitBarrier::Cell::wait(int)`  | `<unknown>` |
| removed |    -1 |   4.0% → 0.0% |   1 → 0 | `WorkerThreads::run_task(WorkerTask*)` | `<unknown>` |

##### `KlassFactory::create_from_stream(ClassFileStream*, Symbol*, ClassLoaderData*, ClassLoadInfo const&, JavaThread*)` (`<unknown>`)

| Change | Delta |              % | Samples | Caller                                                                                                              | Location    |
| -----: | ----: | -------------: | ------: | ------------------------------------------------------------------------------------------------------------------- | ----------- |
| -57.1% |    -8 | 100.0% → 85.7% |  14 → 6 | `SystemDictionary::resolve_class_from_stream(ClassFileStream*, Symbol*, Handle, ClassLoadInfo const&, JavaThread*)` | `<unknown>` |
|    new |    +1 |   0.0% → 14.3% |   0 → 1 | `ClassLoader::load_class(Symbol*, bool, JavaThread*)`                                                               | `<unknown>` |

##### `add(Object)` (`java.util.ArrayList`)

| Change | Delta |      % |   Samples | Caller                   | Location                                                   |
| -----: | ----: | -----: | --------: | ------------------------ | ---------------------------------------------------------- |
|  -8.0% |    -9 | 100.0% | 113 → 104 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `fork()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |      % | Samples | Caller      | Location                                               |
| -----: | ----: | -----: | ------: | ----------- | ------------------------------------------------------ |
| -90.0% |    -9 | 100.0% |  10 → 1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

| Change | Delta |      % |   Samples | Caller        | Location              |
| -----: | ----: | -----: | --------: | ------------- | --------------------- |
|  -7.1% |    -8 | 100.0% | 112 → 104 | `add(Object)` | `java.util.ArrayList` |

##### `putMapEntries(Map, boolean)` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Caller        | Location            |
| -----: | ----: | -----: | ------: | ------------- | ------------------- |
| -42.1% |    -8 | 100.0% | 19 → 11 | `<init>(Map)` | `java.util.HashMap` |

##### `<init>(Map)` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Caller            | Location                                    |
| -----: | ----: | -----: | ------: | ----------------- | ------------------------------------------- |
| -42.1% |    -8 | 100.0% | 19 → 11 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

| Change | Delta |      % | Samples | Caller                                                    | Location                |
| -----: | ----: | -----: | ------: | --------------------------------------------------------- | ----------------------- |
| -46.7% |    -7 | 100.0% |  15 → 8 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `defineClass(String, byte[], int, int, ProtectionDomain)` (`java.lang.ClassLoader`)

| Change | Delta |      % | Samples | Caller                                              | Location                          |
| -----: | ----: | -----: | ------: | --------------------------------------------------- | --------------------------------- |
| -46.7% |    -7 | 100.0% |  15 → 8 | `defineClass(String, byte[], int, int, CodeSource)` | `java.security.SecureClassLoader` |

##### `defineClass(String, byte[], int, int, CodeSource)` (`java.security.SecureClassLoader`)

| Change | Delta |      % | Samples | Caller                          | Location                  |
| -----: | ----: | -----: | ------: | ------------------------------- | ------------------------- |
| -46.7% |    -7 | 100.0% |  15 → 8 | `defineClass(String, Resource)` | `java.net.URLClassLoader` |

##### `push(ForkJoinTask, ForkJoinPool, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |      % | Samples | Caller   | Location                            |
| -----: | ----: | -----: | ------: | -------- | ----------------------------------- |
| -87.5% |    -7 | 100.0% |   8 → 1 | `fork()` | `java.util.concurrent.ForkJoinTask` |

##### `elementData(int)` (`java.util.ArrayList`)

| Change | Delta |      % |   Samples | Caller     | Location              |
| -----: | ----: | -----: | --------: | ---------- | --------------------- |
|  -2.5% |    -4 | 100.0% | 161 → 157 | `get(int)` | `java.util.ArrayList` |

##### `releaseAccess()` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change | Delta |             % | Samples | Caller                                    | Location                                      |
| ------: | ----: | ------------: | ------: | ----------------------------------------- | --------------------------------------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `tryRemoveAndExec(ForkJoinTask, boolean)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|  Change | Delta |              % | Samples | Caller                        | Location            |
| ------: | ----: | -------------: | ------: | ----------------------------- | ------------------- |
|  -25.0% |    -2 | 88.9% → 100.0% |   8 → 6 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |
| removed |    -1 |   11.1% → 0.0% |   1 → 0 | `put(Object, Object)`         | `java.util.HashMap` |

##### `addAll(Collection)` (`java.util.ArrayList`)

| Change | Delta |      % |   Samples | Caller                       | Location                                    |
| -----: | ----: | -----: | --------: | ---------------------------- | ------------------------------------------- |
|  -1.4% |    -2 | 100.0% | 148 → 146 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `Compile::Code_Gen()` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                                             | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------ | ----------- |
| -25.6% |   -10 | 100.0% | 39 → 29 | `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` | `<unknown>` |

##### `Matcher::match()` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                | Location    |
| -----: | ----: | -----: | ------: | --------------------- | ----------- |
| -69.2% |    -9 | 100.0% |  13 → 4 | `Compile::Code_Gen()` | `<unknown>` |

##### `CompileQueue::get(CompilerThread*)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                  | Location    |
| -----: | ----: | -----: | ------: | --------------------------------------- | ----------- |
| -35.7% |    -5 | 100.0% |  14 → 9 | `CompileBroker::compiler_thread_loop()` | `<unknown>` |

##### `CompileBroker::compiler_thread_loop()` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                            | Location    |
| -----: | ----: | -----: | ------: | --------------------------------- | ----------- |
|  -4.0% |    -4 | 100.0% | 99 → 95 | `JavaThread::thread_main_inner()` | `<unknown>` |

##### `Matcher::xform(Node*, int)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller             | Location    |
| -----: | ----: | -----: | ------: | ------------------ | ----------- |
| -57.1% |    -4 | 100.0% |   7 → 3 | `Matcher::match()` | `<unknown>` |

##### `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                                                    | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------- | ----------- |
|  -2.8% |    -2 | 100.0% | 71 → 69 | `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` | `<unknown>` |

##### `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                                   | Location    |
| -----: | ----: | -----: | ------: | -------------------------------------------------------- | ----------- |
|  -2.8% |    -2 | 100.0% | 71 → 69 | `CompileBroker::invoke_compiler_on_method(CompileTask*)` | `<unknown>` |

##### `Matcher::match_tree(Node const*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                            | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------- | ----------- |
|  -40.0% |    -2 | 83.3% → 75.0% |   5 → 3 | `Matcher::xform(Node*, int)`                      | `<unknown>` |
| removed |    -1 |  16.7% → 0.0% |   1 → 0 | `Matcher::match_sfpt(SafePointNode*)`             | `<unknown>` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `PhaseCFG::PhaseCFG(Arena*, RootNode*, Matcher&)` | `<unknown>` |

##### `PhaseOutput::Output()` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                | Location    |
| -----: | ----: | -----: | ------: | --------------------- | ----------- |
| -40.0% |    -2 | 100.0% |   5 → 3 | `Compile::Code_Gen()` | `<unknown>` |

##### `Compilation::emit_code_body()` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                               | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------ | ----------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `Compilation::compile_java_method()` | `<unknown>` |

##### `PhaseIterGVN::transform_old(Node*)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                     | Location    |
| -----: | ----: | -----: | ------: | -------------------------- | ----------- |
| -33.3% |    -2 | 100.0% |   6 → 4 | `PhaseIterGVN::optimize()` | `<unknown>` |

##### `PhaseMacroExpand::expand_macro_nodes()` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                | Location    |
| ------: | ----: | ------------: | ------: | --------------------- | ----------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `Compile::Optimize()` | `<unknown>` |

##### `LIR_Assembler::add_call_info(int, CodeEmitInfo*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                           | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------ | ----------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `CounterOverflowStub::emit_code(LIR_Assembler*)` | `<unknown>` |

##### `LIR_Assembler::emit_slow_case_stubs()` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                          | Location    |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | ----------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `Compilation::emit_code_epilog(LIR_Assembler*)` | `<unknown>` |

##### `Compilation::emit_code_epilog(LIR_Assembler*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                          | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------- | ----------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `Compilation::emit_code_body()` | `<unknown>` |

##### `Matcher::pd_clone_node(Node*, Node*, Matcher::MStack&)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                        | Location    |
| ------: | ----: | ------------: | ------: | ----------------------------- | ----------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `Matcher::find_shared(Node*)` | `<unknown>` |

##### `Matcher::find_shared(Node*)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller             | Location    |
| -----: | ----: | -----: | ------: | ------------------ | ----------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `Matcher::match()` | `<unknown>` |

##### `PhaseCFG::schedule_late(VectorSet&, Node_Stack&)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                           | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------- | ----------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `PhaseCFG::global_code_motion()` | `<unknown>` |

##### `PhaseCFG::do_global_code_motion()` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                | Location    |
| -----: | ----: | -----: | ------: | --------------------- | ----------- |
| -50.0% |    -2 | 100.0% |   4 → 2 | `Compile::Code_Gen()` | `<unknown>` |

##### `Compile::identify_useful_nodes(Unique_Node_List&)` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                                                                     | Location    |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------ | ----------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `Matcher::specialize_generic_vector_operands()`                                            | `<unknown>` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `PhaseRemoveUseless::PhaseRemoveUseless(PhaseGVN*, Unique_Node_List&, Phase::PhaseNumber)` | `<unknown>` |

#### Callees

Callees with the largest change in contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % |       Samples | Callee                                   | Location                            |
| ------: | ----: | ------------: | ------------: | ---------------------------------------- | ----------------------------------- |
| +144.3% |  +355 |  5.5% → 12.0% |     246 → 601 | `awaitWork(ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool` |
|   +4.0% |  +169 | 94.5% → 88.0% | 4,248 → 4,417 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

| Change | Delta |      % |       Samples | Callee                              | Location                            |
| -----: | ----: | -----: | ------------: | ----------------------------------- | ----------------------------------- |
| +11.6% |  +523 | 100.0% | 4,497 → 5,020 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `Parker::park(bool, long)` (`<unknown>`)

|  Change | Delta |             % |     Samples | Callee                                                 | Location    |
| ------: | ----: | ------------: | ----------: | ------------------------------------------------------ | ----------- |
|  +70.7% |  +456 | 99.5% → 99.2% | 645 → 1,101 | `__psynch_cvwait`                                      | `<unknown>` |
| +150.0% |    +3 |   0.3% → 0.5% |       2 → 5 | `_pthread_cond_wait`                                   | `<unknown>` |
|     new |    +2 |   0.0% → 0.2% |       0 → 2 | `SafepointMechanism::process(JavaThread*, bool, bool)` | `<unknown>` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|  Change | Delta |             % |     Samples | Callee                                                            | Location    |
| ------: | ----: | ------------: | ----------: | ----------------------------------------------------------------- | ----------- |
|  +70.3% |  +462 | 99.8% → 99.9% | 657 → 1,119 | `Unsafe_Park(JNIEnv_*, _jobject*, unsigned char, long)`           | `<unknown>` |
| removed |    -1 |   0.2% → 0.0% |       1 → 0 | `JavaThreadParkedState::JavaThreadParkedState(JavaThread*, bool)` | `<unknown>` |

##### `Unsafe_Park(JNIEnv_*, _jobject*, unsigned char, long)` (`<unknown>`)

|  Change | Delta |             % |     Samples | Callee                                                                                                                                                                     | Location    |
| ------: | ----: | ------------: | ----------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  +71.3% |  +462 | 98.5% → 99.2% | 648 → 1,110 | `Parker::park(bool, long)`                                                                                                                                                 | `<unknown>` |
| removed |    -1 |   0.2% → 0.0% |       1 → 0 | `JavaThread::is_interrupted(bool)`                                                                                                                                         | `<unknown>` |
|  -20.0% |    -1 |   0.8% → 0.4% |       5 → 4 | `pthread_jit_write_protect_np`                                                                                                                                             | `<unknown>` |
| removed |    -1 |   0.2% → 0.0% |       1 → 0 | `AccessInternal::PostRuntimeDispatch<G1BarrierSet::AccessBarrier<286822ull, G1BarrierSet>, (AccessInternal::BarrierType)3, 286822ull>::oop_access_barrier(oopDesc*, long)` | `<unknown>` |
| removed |    -1 |   0.2% → 0.0% |       1 → 0 | `pthread_mutex_trylock`                                                                                                                                                    | `<unknown>` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

| Change | Delta |      % |     Samples | Callee                | Location                   |
| -----: | ----: | -----: | ----------: | --------------------- | -------------------------- |
| +68.9% |  +446 | 100.0% | 647 → 1,093 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % |   Samples | Callee              | Location                                 |
| ------: | ----: | ------------: | --------: | ------------------- | ---------------------------------------- |
| +146.6% |  +340 | 94.3% → 95.2% | 232 → 572 | `park()`            | `java.util.concurrent.locks.LockSupport` |
| +145.5% |   +16 |          4.5% |   11 → 27 | `parkUntil(long)`   | `java.util.concurrent.locks.LockSupport` |
| removed |    -1 |   0.4% → 0.0% |     1 → 0 | `hasTasks(boolean)` | `java.util.concurrent.ForkJoinPool`      |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |             % |       Samples | Callee                                                                        | Location                                                  |
| -----: | ----: | ------------: | ------------: | ----------------------------------------------------------------------------- | --------------------------------------------------------- |
|  +6.7% |    +5 |   4.9% → 4.6% |       75 → 80 | `get(int)`                                                                    | `java.util.ArrayList`                                     |
|  -0.4% |    -4 | 69.1% → 60.6% | 1,063 → 1,059 | `accumulate(Double[], double[])`                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|    new |    +3 |   0.0% → 0.2% |         0 → 3 | `InterpreterRuntime::frequency_counter_overflow(JavaThread*, unsigned char*)` | `<unknown>`                                               |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |              % |       Samples | Callee                   | Location                                                  |
| ------: | ----: | -------------: | ------------: | ------------------------ | --------------------------------------------------------- |
|  +13.6% |  +209 | 99.9% → 100.0% | 1,538 → 1,747 | `vectorSum()`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  +13.5% |  +208 | 99.9% → 100.0% | 1,539 → 1,747 | `computeDirectly()`      | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| removed |    -1 |    0.1% → 0.0% |         1 → 0 | `I2C/C2I adapters(0xba)` | `<unknown>`                                               |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |      % |     Samples | Callee     | Location                            |
| -----: | ----: | -----: | ----------: | ---------- | ----------------------------------- |
| +18.8% |  +181 | 100.0% | 962 → 1,143 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change | Delta |      % |       Samples | Callee      | Location                                               |
| -----: | ----: | -----: | ------------: | ----------- | ------------------------------------------------------ |
|  +4.2% |  +178 | 100.0% | 4,205 → 4,383 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change | Delta |             % |       Samples | Callee                           | Location                                                   |
| -----: | ----: | ------------: | ------------: | -------------------------------- | ---------------------------------------------------------- |
| +13.4% |  +207 | 36.6% → 39.9% | 1,540 → 1,747 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +4.3% |  +175 | 96.6% → 96.7% | 4,062 → 4,237 | `join()`                         | `java.util.concurrent.ForkJoinTask`                        |
| +24.6% |  +167 | 16.2% → 19.3% |     680 → 847 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -7.5% |  -137 | 43.4% → 38.5% | 1,825 → 1,688 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +4.9% |   +15 |   7.3% → 7.4% |     308 → 323 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |             % |       Samples | Callee                                                    | Location                                      |
| ------: | ----: | ------------: | ------------: | --------------------------------------------------------- | --------------------------------------------- |
|   +3.7% |  +142 | 95.0% → 94.4% | 3,857 → 3,999 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  +25.5% |  +106 | 10.2% → 12.3% |     415 → 521 | `park()`                                                  | `java.util.concurrent.locks.LockSupport`      |
|   -1.6% |   -19 | 28.6% → 27.0% | 1,162 → 1,143 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
| removed |    -1 |  <0.1% → 0.0% |         1 → 0 | `uncompensate()`                                          | `java.util.concurrent.ForkJoinPool`           |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |      % |       Samples | Callee                 | Location                             |
| -----: | ----: | -----: | ------------: | ---------------------- | ------------------------------------ |
|  +4.3% |  +175 | 100.0% | 4,061 → 4,236 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask`  |
| -50.0% |    -1 |  <0.1% |         2 → 1 | `getRawResult()`       | `java.util.concurrent.RecursiveTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % |       Samples | Callee                                               | Location                                      |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------- | --------------------------------------------- |
|   +3.8% |  +163 | 99.9% → 99.8% | 4,244 → 4,407 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| +100.0% |    +2 |  <0.1% → 0.1% |         2 → 4 | `signalWork()`                                       | `java.util.concurrent.ForkJoinPool`           |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % |   Samples | Callee     | Location                            |
| -----: | ----: | -----: | --------: | ---------- | ----------------------------------- |
| +24.7% |  +167 | 100.0% | 675 → 842 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change | Delta |             % |   Samples | Callee                | Location                                               |
| ------: | ----: | ------------: | --------: | --------------------- | ------------------------------------------------------ |
|  +24.7% |  +167 | 99.3% → 99.4% | 675 → 842 | `average(List)`       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| +400.0% |    +4 |   0.1% → 0.6% |     1 → 5 | `boxed(double[])`     | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| removed |    -2 |   0.3% → 0.0% |     2 → 0 | `put(Object, Object)` | `java.util.HashMap`                                    |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % |   Samples | Callee                     | Location                                               |
| -----: | ----: | -----: | --------: | -------------------------- | ------------------------------------------------------ |
| +24.6% |  +167 | 100.0% | 680 → 847 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| +24.6% |  +167 | 100.0% | 680 → 847 | `computeDirectly()`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % |       Samples | Callee      | Location                                            |
| -----: | ----: | ------------: | ------------: | ----------- | --------------------------------------------------- |
|  +4.3% |  +179 | 99.2% → 99.5% | 4,205 → 4,384 | `exec()`    | `java.util.concurrent.RecursiveTask`                |
| +14.6% |   +66 | 10.6% → 11.7% |     451 → 517 | `exec()`    | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
| -28.8% |   -15 |   1.2% → 0.8% |       52 → 37 | `setDone()` | `java.util.concurrent.ForkJoinTask`                 |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |             % |   Samples | Callee                    | Location                                               |
| -----: | ----: | ------------: | --------: | ------------------------- | ------------------------------------------------------ |
| +15.0% |   +67 | 99.3% → 99.6% | 448 → 515 | `invoke()`                | `java.util.concurrent.ForkJoinTask`                    |
| -50.0% |    -1 |   0.4% → 0.2% |     2 → 1 | `<init>(JavaKMeans, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`)

| Change | Delta |      % |   Samples | Callee                         | Location                                    |
| -----: | ----: | -----: | --------: | ------------------------------ | ------------------------------------------- |
| +14.6% |   +66 | 100.0% | 451 → 517 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % |   Samples | Callee                              | Location            |
| -----: | ----: | -----: | --------: | ----------------------------------- | ------------------- |
|  +7.7% |   +22 | 100.0% | 287 → 309 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change | Delta |            % | Samples | Callee                                                                                       | Location                                  |
| -----: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
|    new |   +17 | 0.0% → 77.3% |  0 → 17 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
|    new |    +5 | 0.0% → 22.7% |   0 → 5 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`)

| Change | Delta |              % |   Samples | Callee                              | Location                                    |
| -----: | ----: | -------------: | --------: | ----------------------------------- | ------------------------------------------- |
|  +7.7% |   +22 | 99.7% → 100.0% | 287 → 309 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |             % |   Samples | Callee                | Location            |
| -----: | ----: | ------------: | --------: | --------------------- | ------------------- |
|  +8.0% |   +23 | 93.2% → 96.0% | 289 → 312 | `forEach(BiConsumer)` | `java.util.HashMap` |
| -42.1% |    -8 |   6.1% → 3.4% |   19 → 11 | `<init>(Map)`         | `java.util.HashMap` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Callee            | Location                                    |
| -----: | ----: | -----: | --------: | ----------------- | ------------------------------------------- |
|  +4.9% |   +15 | 100.0% | 308 → 323 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Callee                     | Location                                                   |
| -----: | ----: | -----: | --------: | -------------------------- | ---------------------------------------------------------- |
|  +4.9% |   +15 | 100.0% | 308 → 323 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |              % | Samples | Callee                        | Location                                                           |
| -----: | ----: | -------------: | ------: | ----------------------------- | ------------------------------------------------------------------ |
|    new |    +6 |   0.0% → 40.0% |   0 → 6 | `toCsvRows(Function)`         | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter` |
| +28.6% |    +2 | 100.0% → 60.0% |   7 → 9 | `generateData(int, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                        |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

| Change | Delta |             % | Samples | Callee                                                      | Location                            |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------- | ----------------------------------- |
| +16.2% |    +6 | 97.4% → 95.6% | 37 → 43 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher`     |
|    new |    +1 |   0.0% → 2.2% |   0 → 1 | `create(Path, URI)`                                         | `org.renaissance.core.ModuleLoader` |

##### `main(String[])` (`org.renaissance.core.Launcher`)

| Change | Delta |      % | Samples | Callee                                 | Location                        |
| -----: | ----: | -----: | ------: | -------------------------------------- | ------------------------------- |
| +18.4% |    +7 | 100.0% | 38 → 45 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change | Delta |             % | Samples | Callee               | Location                                    |
| ------: | ----: | ------------: | ------: | -------------------- | ------------------------------------------- |
|  +37.5% |    +6 | 94.1% → 91.7% | 16 → 22 | `foreach(Function1)` | `scala.collection.immutable.List`           |
| +100.0% |    +1 |   5.9% → 8.3% |   1 → 2 | `getVmStartNanos()`  | `org.renaissance.harness.RenaissanceSuite$` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change | Delta |             % | Samples | Callee                                                                        | Location                                    |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
|  +41.2% |    +7 | 56.7% → 66.7% | 17 → 24 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |
| removed |    -1 |   3.3% → 0.0% |   1 → 0 | `loadExternalPlugins(BenchmarkSuite, Seq)`                                    | `org.renaissance.harness.RenaissanceSuite$` |
|  +50.0% |    +1 |   6.7% → 8.3% |   2 → 3 | `parse(String[])`                                                             | `org.renaissance.harness.ConfigParser`      |
| removed |    -1 |   3.3% → 0.0% |   1 → 0 | `apply(Function0)`                                                            | `scala.util.Try$`                           |
| removed |    -1 |   3.3% → 0.0% |   1 → 0 | `selectBenchmarks(BenchmarkSuite, Seq)`                                       | `org.renaissance.harness.RenaissanceSuite$` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

| Change | Delta |             % | Samples | Callee           | Location                                    |
| -----: | ----: | ------------: | ------: | ---------------- | ------------------------------------------- |
| +20.0% |    +6 | 93.8% → 94.7% | 30 → 36 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite$` |

##### `MemAllocator::allocate() const` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                                         | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------ | ----------- |
| +225.0% |    +9 | 15.4% → 27.7% |  4 → 13 | `MemAllocator::mem_allocate_inside_tlab_slow(MemAllocator::Allocation&) const` | `<unknown>` |
|  +31.3% |    +5 | 61.5% → 44.7% | 16 → 21 | `_platform_bzero`                                                              | `<unknown>` |
|     new |    +3 |   0.0% → 6.4% |   0 → 3 | `ObjArrayAllocator::initialize(HeapWordImpl**) const`                          | `<unknown>` |
|     new |    +2 |   0.0% → 4.3% |   0 → 2 | `ObjAllocator::initialize(HeapWordImpl**) const`                               | `<unknown>` |
|  +33.3% |    +1 |  11.5% → 8.5% |   3 → 4 | `_platform_memset`                                                             | `<unknown>` |

##### `CollectedHeap::array_allocate(Klass*, unsigned long, int, bool, JavaThread*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                | Location    |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------- | ----------- |
|  +69.2% |   +18 | 96.3% → 95.7% | 26 → 44 | `MemAllocator::allocate() const`                      | `<unknown>` |
| removed |    -1 |   3.7% → 0.0% |   1 → 0 | `ObjArrayAllocator::initialize(HeapWordImpl**) const` | `<unknown>` |

##### `_new_array_Java` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                                         | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------ | ----------- |
|  +54.8% |   +17 | 93.9% → 94.1% | 31 → 48 | `OptoRuntime::new_array_C(Klass*, int, JavaThread*)`                           | `<unknown>` |
| removed |    -1 |   3.0% → 0.0% |   1 → 0 | `stub:pthread_jit_write_protect_np`                                            | `<unknown>` |
|     new |    +1 |   0.0% → 2.0% |   0 → 1 | `CardTableBarrierSet::on_slowpath_allocation_exit(JavaThread*, oopDesc*)`      | `<unknown>` |
|     new |    +1 |   0.0% → 2.0% |   0 → 1 | `CollectedHeap::array_allocate(Klass*, unsigned long, int, bool, JavaThread*)` | `<unknown>` |

##### `OptoRuntime::new_array_C(Klass*, int, JavaThread*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                                         | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------ | ----------- |
|  +59.3% |   +16 | 87.1% → 89.6% | 27 → 43 | `InstanceKlass::allocate_objArray(int, int, JavaThread*)`                      | `<unknown>` |
|     new |    +3 |   0.0% → 6.3% |   0 → 3 | `CollectedHeap::array_allocate(Klass*, unsigned long, int, bool, JavaThread*)` | `<unknown>` |
| removed |    -1 |   3.2% → 0.0% |   1 → 0 | `G1CardTable::is_in_young(void const*) const`                                  | `<unknown>` |
|  -50.0% |    -1 |   6.5% → 2.1% |   2 → 1 | `pthread_jit_write_protect_np`                                                 | `<unknown>` |
| removed |    -1 |   3.2% → 0.0% |   1 → 0 | `InstanceKlass::array_klass(int, JavaThread*)`                                 | `<unknown>` |

##### `InstanceKlass::allocate_objArray(int, int, JavaThread*)` (`<unknown>`)

| Change | Delta |              % | Samples | Callee                                                                         | Location    |
| -----: | ----: | -------------: | ------: | ------------------------------------------------------------------------------ | ----------- |
| +55.6% |   +15 | 100.0% → 97.7% | 27 → 42 | `CollectedHeap::array_allocate(Klass*, unsigned long, int, bool, JavaThread*)` | `<unknown>` |
|    new |    +1 |    0.0% → 2.3% |   0 → 1 | `Klass::check_array_allocation_length(int, int, JavaThread*)`                  | `<unknown>` |

##### `arrayof_jint_disjoint_arraycopy` (`<unknown>`)

| Change | Delta |             % |   Samples | Callee               | Location    |
| -----: | ----: | ------------: | --------: | -------------------- | ----------- |
|  +9.0% |   +13 | 88.9% → 88.7% | 144 → 157 | `forward_copy_longs` | `<unknown>` |

##### `Monitor::wait_without_safepoint_check(unsigned long long)` (`<unknown>`)

|  Change | Delta |              % | Samples | Callee                                      | Location    |
| ------: | ----: | -------------: | ------: | ------------------------------------------- | ----------- |
| +320.0% |   +16 | 83.3% → 100.0% |  5 → 21 | `PlatformMonitor::wait(unsigned long long)` | `<unknown>` |

##### `TaskTerminator::offer_termination(TerminatorTerminator*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                      | Location    |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------- | ----------- |
|     new |   +12 |  0.0% → 75.0% |  0 → 12 | `Monitor::wait_without_safepoint_check(unsigned long long)` | `<unknown>` |
| +100.0% |    +2 | 50.0% → 25.0% |   2 → 4 | `Mutex::lock_without_safepoint_check()`                     | `<unknown>` |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `SpinPause`                                                 | `<unknown>` |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `__psynch_cvbroad`                                          | `<unknown>` |

##### `PlatformMonitor::wait(unsigned long long)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee               | Location    |
| ------: | ----: | ------------: | ------: | -------------------- | ----------- |
|  +55.6% |   +10 | 94.7% → 93.3% | 18 → 28 | `__psynch_cvwait`    | `<unknown>` |
| +100.0% |    +1 |   5.3% → 6.7% |   1 → 2 | `_pthread_cond_wait` | `<unknown>` |

##### `_pthread_mutex_firstfit_lock_slow` (`<unknown>`)

|  Change | Delta |      % | Samples | Callee               | Location    |
| ------: | ----: | -----: | ------: | -------------------- | ----------- |
| +100.0% |   +10 | 100.0% | 10 → 20 | `__psynch_mutexwait` | `<unknown>` |

##### `MemAllocator::mem_allocate_inside_tlab_slow(MemAllocator::Allocation&) const` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                                                    | Location    |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------- | ----------- |
| +300.0% |    +6 | 50.0% → 61.5% |   2 → 8 | `G1CollectedHeap::attempt_allocation(unsigned long, unsigned long, unsigned long*, bool)` | `<unknown>` |
|     new |    +2 |  0.0% → 15.4% |   0 → 2 | `ThreadLocalAllocBuffer::retire_before_allocation()`                                      | `<unknown>` |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `G1CollectedHeap::unsafe_max_tlab_alloc(Thread*) const`                                   | `<unknown>` |
|     new |    +1 |   0.0% → 7.7% |   0 → 1 | `G1Allocator::unsafe_max_tlab_alloc()`                                                    | `<unknown>` |
|     new |    +1 |   0.0% → 7.7% |   0 → 1 | `ThreadLocalAllocBuffer::print_stats(char const*)`                                        | `<unknown>` |

##### `HeapRegionManager::par_iterate(HeapRegionClosure*, HeapRegionClaimer*, unsigned int) const` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                                           | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------- | ----------- |
| +600.0% |    +6 | 50.0% → 63.6% |   1 → 7 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::do_heap_region(HeapRegion*)` | `<unknown>` |
|     new |    +2 |  0.0% → 18.2% |   0 → 2 | `G1AdjustRegionClosure::do_heap_region(HeapRegion*)`                             | `<unknown>` |

##### `G1CollectedHeap::attempt_allocation_slow(unsigned int, unsigned long, bool)` (`<unknown>`)

|  Change | Delta |              % | Samples | Callee                                                              | Location    |
| ------: | ----: | -------------: | ------: | ------------------------------------------------------------------- | ----------- |
| +800.0% |    +8 | 50.0% → 100.0% |   1 → 9 | `Mutex::lock(Thread*)`                                              | `<unknown>` |
| removed |    -1 |   50.0% → 0.0% |   1 → 0 | `G1AllocRegion::new_alloc_region_and_allocate(unsigned long, bool)` | `<unknown>` |

##### `G1ParEvacuateFollowersClosure::offer_termination()` (`<unknown>`)

|  Change | Delta |      % | Samples | Callee                                                     | Location    |
| ------: | ----: | -----: | ------: | ---------------------------------------------------------- | ----------- |
| +175.0% |    +7 | 100.0% |  4 → 11 | `TaskTerminator::offer_termination(TerminatorTerminator*)` | `<unknown>` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |              % |       Samples | Callee      | Location                                      |
| -----: | ----: | -------------: | ------------: | ----------- | --------------------------------------------- |
|  +3.9% |  +164 | 99.9% → 100.0% | 4,241 → 4,405 | `doExec()`  | `java.util.concurrent.ForkJoinTask`           |
| -33.3% |    -1 |   0.1% → <0.1% |         3 → 2 | `tryPoll()` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change | Delta |            % |       Samples | Callee                                 | Location                                      |
| ------: | ----: | -----------: | ------------: | -------------------------------------- | --------------------------------------------- |
|   +3.7% |  +143 |       100.0% | 3,856 → 3,999 | `doExec()`                             | `java.util.concurrent.ForkJoinTask`           |
| removed |    -4 |  0.1% → 0.0% |         4 → 0 | `releaseAccess()`                      | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|     new |    +1 | 0.0% → <0.1% |         0 → 1 | `getAndClearSlot(ForkJoinTask[], int)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|     new |    +1 | 0.0% → <0.1% |         0 → 1 | `resolve_opt_virtual_call`             | `<unknown>`                                   |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

| Change | Delta |      % |   Samples | Callee   | Location                                                               |
| -----: | ----: | -----: | --------: | -------- | ---------------------------------------------------------------------- |
| +14.6% |   +66 | 100.0% | 451 → 517 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

| Change | Delta |             % |   Samples | Callee                   | Location                                                               |
| -----: | ----: | ------------: | --------: | ------------------------ | ---------------------------------------------------------------------- |
|  +7.3% |   +21 | 99.7% → 99.0% | 288 → 309 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|  Change | Delta |             % |   Samples | Callee                                       | Location                                                               |
| ------: | ----: | ------------: | --------: | -------------------------------------------- | ---------------------------------------------------------------------- |
|  +44.4% |   +16 | 12.5% → 16.8% |   36 → 52 | `arrayof_jint_disjoint_arraycopy`            | `<unknown>`                                                            |
|   +2.3% |    +5 | 74.6% → 70.9% | 214 → 219 | `apply(Object, Object)`                      | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7248` |
|   +7.1% |    +2 |   9.8% → 9.7% |   28 → 30 | `zero_blocks`                                | `<unknown>`                                                            |
| removed |    -1 |   0.3% → 0.0% |     1 → 0 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap`                                                    |

##### `parkUntil(long)` (`java.util.concurrent.locks.LockSupport`)

|  Change | Delta |      % | Samples | Callee                | Location                   |
| ------: | ----: | -----: | ------: | --------------------- | -------------------------- |
| +145.5% |   +16 | 100.0% | 11 → 27 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|  Change | Delta |             % |   Samples | Callee                            | Location           |
| ------: | ----: | ------------: | --------: | --------------------------------- | ------------------ |
|  +50.0% |   +16 | 20.6% → 28.7% |   32 → 48 | `_new_array_Java`                 | `<unknown>`        |
|   +1.8% |    +2 | 72.9% → 68.9% | 113 → 115 | `arrayof_jint_disjoint_arraycopy` | `<unknown>`        |
| removed |    -1 |   0.6% → 0.0% |     1 → 0 | `copyOf(Object[], int, Class)`    | `java.util.Arrays` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|  Change | Delta |           % | Samples | Callee                                       | Location            |
| ------: | ----: | ----------: | ------: | -------------------------------------------- | ------------------- |
| removed |    -1 | 0.7% → 0.0% |   1 → 0 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap` |
|     new |    +1 | 0.0% → 0.6% |   0 → 1 | `resize()`                                   | `java.util.HashMap` |

##### `Compile::Optimize()` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                  | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------- | ----------- |
| +150.0% |    +3 |  8.0% → 16.7% |   2 → 5 | `PhaseIterGVN::optimize()`                              | `<unknown>` |
| +150.0% |    +3 |  8.0% → 16.7% |   2 → 5 | `PhaseCCP::PhaseCCP(PhaseIterGVN*)`                     | `<unknown>` |
|  +22.2% |    +2 | 36.0% → 36.7% |  9 → 11 | `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` | `<unknown>` |
| removed |    -2 |   8.0% → 0.0% |   2 → 0 | `PhaseMacroExpand::expand_macro_nodes()`                | `<unknown>` |
|  -50.0% |    -1 |   8.0% → 3.3% |   2 → 1 | `ConnectionGraph::do_analysis(Compile*, PhaseIterGVN*)` | `<unknown>` |

##### `Compilation::build_hir()` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                            | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------- | ----------- |
| +200.0% |    +4 | 66.7% → 75.0% |   2 → 6 | `IR::IR(Compilation*, ciMethod*, int)`            | `<unknown>` |
|     new |    +2 |  0.0% → 25.0% |   0 → 2 | `IR::compute_use_counts()`                        | `<unknown>` |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `GlobalValueNumbering::GlobalValueNumbering(IR*)` | `<unknown>` |

##### `PhaseIdealLoop::build_and_optimize()` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                                  | Location    |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------- | ----------- |
| +100.0% |    +2 | 15.4% → 23.5% |   2 → 4 | `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)` | `<unknown>` |
|  -25.0% |    -1 | 30.8% → 17.6% |   4 → 3 | `PhaseIdealLoop::split_if_with_blocks(VectorSet&, Node_Stack&)`         | `<unknown>` |
| removed |    -1 |   7.7% → 0.0% |   1 → 0 | `IdealLoopTree::iteration_split(PhaseIdealLoop*, Node_List&)`           | `<unknown>` |
| removed |    -1 |   7.7% → 0.0% |   1 → 0 | `Node::is_CFG() const`                                                  | `<unknown>` |
| removed |    -1 |   7.7% → 0.0% |   1 → 0 | `ParmNode::is_CFG() const`                                              | `<unknown>` |

##### `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` (`<unknown>`)

| Change | Delta |      % | Samples | Callee                                 | Location    |
| -----: | ----: | -----: | ------: | -------------------------------------- | ----------- |
| +30.8% |    +4 | 100.0% | 13 → 17 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `GraphBuilder::GraphBuilder(Compilation*, IRScope*)` (`<unknown>`)

|  Change | Delta |              % | Samples | Callee                                                            | Location    |
| ------: | ----: | -------------: | ------: | ----------------------------------------------------------------- | ----------- |
| +150.0% |    +3 | 100.0% → 83.3% |   2 → 5 | `GraphBuilder::iterate_all_blocks(bool)`                          | `<unknown>` |
|     new |    +1 |   0.0% → 16.7% |   0 → 1 | `BlockListBuilder::BlockListBuilder(Compilation*, IRScope*, int)` | `<unknown>` |

##### `GraphBuilder::try_inline(ciMethod*, bool, bool, Bytecodes::Code, Instruction*)` (`<unknown>`)

|  Change | Delta |              % | Samples | Callee                                                                                | Location    |
| ------: | ----: | -------------: | ------: | ------------------------------------------------------------------------------------- | ----------- |
| +300.0% |    +3 | 100.0% → 80.0% |   1 → 4 | `GraphBuilder::try_inline_full(ciMethod*, bool, bool, Bytecodes::Code, Instruction*)` | `<unknown>` |

##### `Type::hashcons()` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                             | Location    |
| -----: | ----: | ------------: | ------: | ---------------------------------- | ----------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `Dict::Insert(void*, void*, bool)` | `<unknown>` |

##### `GraphBuilder::iterate_bytecodes_for_block(int)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                                           | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------- | ----------- |
| +300.0% |    +3 | 50.0% → 80.0% |   1 → 4 | `GraphBuilder::invoke(Bytecodes::Code)`                                          | `<unknown>` |
| removed |    -1 |  50.0% → 0.0% |   1 → 0 | `GraphBuilder::access_field(Bytecodes::Code)`                                    | `<unknown>` |
|     new |    +1 |  0.0% → 20.0% |   0 → 1 | `BlockBegin::try_merge(ValueStack*, bool)`                                       | `<unknown>` |
|     new |    +1 |  0.0% → 20.0% |   0 → 1 | `GraphBuilder::try_inline(ciMethod*, bool, bool, Bytecodes::Code, Instruction*)` | `<unknown>` |

##### `GraphBuilder::iterate_all_blocks(bool)` (`<unknown>`)

|  Change | Delta |      % | Samples | Callee                                           | Location    |
| ------: | ----: | -----: | ------: | ------------------------------------------------ | ----------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `GraphBuilder::iterate_bytecodes_for_block(int)` | `<unknown>` |

##### `CompilationPolicy::event(methodHandle const&, methodHandle const&, int, int, CompLevel, CompiledMethod*, JavaThread*)` (`<unknown>`)

|  Change | Delta |              % | Samples | Callee                                                                                                                            | Location    |
| ------: | ----: | -------------: | ------: | --------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| +100.0% |    +2 | 100.0% → 80.0% |   2 → 4 | `CompileBroker::compile_method(methodHandle const&, int, int, methodHandle const&, int, CompileTask::CompileReason, JavaThread*)` | `<unknown>` |
|     new |    +1 |   0.0% → 20.0% |   0 → 1 | `InvocationCounter::set_carry_on_overflow()`                                                                                      | `<unknown>` |

##### `GraphBuilder::try_inline_full(ciMethod*, bool, bool, Bytecodes::Code, Instruction*)` (`<unknown>`)

|  Change | Delta |              % | Samples | Callee                                             | Location    |
| ------: | ----: | -------------: | ------: | -------------------------------------------------- | ----------- |
|     new |    +2 |   0.0% → 50.0% |   0 → 2 | `ciMethod::ensure_method_data()`                   | `<unknown>` |
| removed |    -1 |  100.0% → 0.0% |   1 → 0 | `GraphBuilder::push_scope(ciMethod*, BlockBegin*)` | `<unknown>` |
| +100.0% |    +1 | 100.0% → 50.0% |   1 → 2 | `GraphBuilder::iterate_all_blocks(bool)`           | `<unknown>` |

##### `GraphBuilder::invoke(Bytecodes::Code)` (`<unknown>`)

|  Change | Delta |            % | Samples | Callee                                                                           | Location    |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------------------------------- | ----------- |
| +300.0% |    +3 |       100.0% |   1 → 4 | `GraphBuilder::try_inline(ciMethod*, bool, bool, Bytecodes::Code, Instruction*)` | `<unknown>` |
|     new |    +1 | 0.0% → 25.0% |   0 → 1 | `tlv_get_addr`                                                                   | `<unknown>` |

##### `PhaseCCP::analyze()` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                                   | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------ | ----------- |
| +200.0% |    +2 | 50.0% → 60.0% |   1 → 3 | `PhaseCCP::push_child_nodes_to_worklist(Unique_Node_List&, Node*) const` | `<unknown>` |
|     new |    +1 |  0.0% → 20.0% |   0 → 1 | `TypeOopPtr::cleanup_speculative() const`                                | `<unknown>` |

##### `PhaseCCP::PhaseCCP(PhaseIterGVN*)` (`<unknown>`)

|  Change | Delta |      % | Samples | Callee                | Location    |
| ------: | ----: | -----: | ------: | --------------------- | ----------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `PhaseCCP::analyze()` | `<unknown>` |

##### `ciObjectFactory::get_metadata(Metadata*)` (`<unknown>`)

| Change | Delta |            % | Samples | Callee                                            | Location    |
| -----: | ----: | -----------: | ------: | ------------------------------------------------- | ----------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `ciObjectFactory::create_new_metadata(Metadata*)` | `<unknown>` |

##### `TypeInstPtr::add_offset(long) const` (`<unknown>`)

| Change | Delta |            % | Samples | Callee                                                                                                             | Location    |
| -----: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------------------------------ | ----------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `TypeInstPtr::make(TypePtr::PTR, ciKlass*, TypeInterfaces const*, bool, ciObject*, int, int, TypePtr const*, int)` | `<unknown>` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `Type::hashcons()`                                                                                                 | `<unknown>` |

##### `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` (`<unknown>`)

|  Change | Delta |              % | Samples | Callee                                                        | Location    |
| ------: | ----: | -------------: | ------: | ------------------------------------------------------------- | ----------- |
|  +30.8% |    +4 | 86.7% → 100.0% | 13 → 17 | `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` | `<unknown>` |
| removed |    -2 |   13.3% → 0.0% |   2 → 0 | `PhaseIterGVN::optimize()`                                    | `<unknown>` |

##### `Compilation::compile_method()` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                                                                                                                                                         | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  +18.2% |    +2 | 91.7% → 92.9% | 11 → 13 | `Compilation::compile_java_method()`                                                                                                                                                           | `<unknown>` |
| removed |    -1 |   8.3% → 0.0% |   1 → 0 | `ciEnv::register_method(ciMethod*, int, CodeOffsets*, int, CodeBuffer*, int, OopMapSet*, ExceptionHandlerTable*, ImplicitExceptionTable*, AbstractCompiler*, bool, bool, bool, int, RTMState)` | `<unknown>` |
|     new |    +1 |   0.0% → 7.1% |   0 → 1 | `Dependencies::assert_common_1(Dependencies::DepType, ciBaseObject*)`                                                                                                                          | `<unknown>` |

##### `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` (`<unknown>`)

| Change | Delta |      % | Samples | Callee                          | Location    |
| -----: | ----: | -----: | ------: | ------------------------------- | ----------- |
| +16.7% |    +2 | 100.0% | 12 → 14 | `Compilation::compile_method()` | `<unknown>` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |              % |       Samples | Callee                   | Location                                                   |
| -----: | ----: | -------------: | ------------: | ------------------------ | ---------------------------------------------------------- |
|  -7.5% |  -136 | 99.9% → 100.0% | 1,824 → 1,688 | `computeDirectly()`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -8.5% |  -117 |  75.7% → 74.9% | 1,381 → 1,264 | `findNearestCentroid()`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -4.3% |   -19 |  24.3% → 25.1% |     443 → 424 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % |   Samples | Callee                         | Location                                                   |
| ------: | ----: | ------------: | --------: | ------------------------------ | ---------------------------------------------------------- |
|   -7.5% |   -68 | 65.5% → 66.1% | 904 → 836 | `distance(Double[], Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |    -9 |   0.7% → 0.0% |     9 → 0 | `zero_blocks`                  | `<unknown>`                                                |
|   -5.2% |    -3 |   4.2% → 4.4% |   58 → 55 | `get(int)`                     | `java.util.ArrayList`                                      |
|     new |    +2 |   0.0% → 0.2% |     0 → 2 | `_new_array_Java`              | `<unknown>`                                                |
|  -50.0% |    -1 |          0.1% |     2 → 1 | `SafepointBlob`                | `<unknown>`                                                |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |           % | Samples | Callee          | Location           |
| -----: | ----: | ----------: | ------: | --------------- | ------------------ |
|    new |    +5 | 0.0% → 0.6% |   0 → 5 | `SafepointBlob` | `<unknown>`        |
| -30.0% |    -3 | 1.1% → 0.8% |  10 → 7 | `doubleValue()` | `java.lang.Double` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % |   Samples | Callee                              | Location              |
| ------: | ----: | ------------: | --------: | ----------------------------------- | --------------------- |
|   -8.0% |    -9 | 25.5% → 24.5% | 113 → 104 | `add(Object)`                       | `java.util.ArrayList` |
|   +6.0% |    +9 | 34.1% → 37.7% | 151 → 160 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`   |
|   -4.0% |    -2 |         11.3% |   50 → 48 | `get(int)`                          | `java.util.ArrayList` |
| removed |    -1 |   0.2% → 0.0% |     1 → 0 | `SafepointBlob`                     | `<unknown>`           |
|     new |    +1 |   0.0% → 0.2% |     0 → 1 | `_new_instance_Java`                | `<unknown>`           |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |             % |       Samples | Callee                         | Location                            |
| -----: | ----: | ------------: | ------------: | ------------------------------ | ----------------------------------- |
|  -1.4% |   -16 | 96.9% → 97.1% | 1,126 → 1,110 | `doExec()`                     | `java.util.concurrent.ForkJoinTask` |
|  -9.5% |    -2 |   1.8% → 1.7% |       21 → 19 | `tryCompensate(long, boolean)` | `java.util.concurrent.ForkJoinPool` |

##### `unpark(Thread)` (`java.util.concurrent.locks.LockSupport`)

| Change | Delta |             % | Samples | Callee           | Location                   |
| -----: | ----: | ------------: | ------: | ---------------- | -------------------------- |
| -21.9% |   -16 | 97.3% → 98.3% | 73 → 57 | `unpark(Object)` | `jdk.internal.misc.Unsafe` |

##### `unpark(Object)` (`jdk.internal.misc.Unsafe`)

| Change | Delta |              % | Samples | Callee                                          | Location    |
| -----: | ----: | -------------: | ------: | ----------------------------------------------- | ----------- |
| -20.8% |   -15 | 98.6% → 100.0% | 72 → 57 | `Unsafe_Unpark(JNIEnv_*, _jobject*, _jobject*)` | `<unknown>` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change | Delta |            % | Samples | Callee                                                                                       | Location                                  |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
| removed |   -12 | 75.0% → 0.0% |  12 → 0 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
| removed |    -4 | 25.0% → 0.0% |   4 → 0 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `Unsafe_Unpark(JNIEnv_*, _jobject*, _jobject*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                    | Location    |
| ------: | ----: | ------------: | ------: | ----------------------------------------- | ----------- |
|  -29.2% |   -19 | 90.3% → 80.7% | 65 → 46 | `__psynch_cvsignal`                       | `<unknown>` |
| +200.0% |    +2 |   1.4% → 5.3% |   1 → 3 | `pthread_dependency_wait_np.cold.3`       | `<unknown>` |
|  -33.3% |    -1 |   4.2% → 3.5% |   3 → 2 | `pthread_jit_write_protect_np`            | `<unknown>` |
| removed |    -1 |   1.4% → 0.0% |   1 → 0 | `Parker::unpark()`                        | `<unknown>` |
|     new |    +1 |   0.0% → 1.8% |   0 → 1 | `ThreadsListHandle::~ThreadsListHandle()` | `<unknown>` |

##### `signalWaiters()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % | Samples | Callee           | Location                                 |
| -----: | ----: | ------------: | ------: | ---------------- | ---------------------------------------- |
| -27.1% |   -13 | 94.1% → 97.2% | 48 → 35 | `unpark(Thread)` | `java.util.concurrent.locks.LockSupport` |

##### `setDone()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % | Samples | Callee            | Location                            |
| -----: | ----: | ------------: | ------: | ----------------- | ----------------------------------- |
| -29.4% |   -15 | 98.1% → 97.3% | 51 → 36 | `signalWaiters()` | `java.util.concurrent.ForkJoinTask` |

##### `grow(int)` (`java.util.ArrayList`)

|  Change | Delta |             % | Samples | Callee                            | Location                          |
| ------: | ----: | ------------: | ------: | --------------------------------- | --------------------------------- |
|  -45.5% |   -10 | 26.8% → 17.4% | 22 → 12 | `zero_blocks`                     | `<unknown>`                       |
|  +36.8% |    +7 | 23.2% → 37.7% | 19 → 26 | `copyOf(Object[], int)`           | `java.util.Arrays`                |
|  -23.1% |    -3 | 15.9% → 14.5% | 13 → 10 | `arrayof_jint_disjoint_arraycopy` | `<unknown>`                       |
|  -25.0% |    -1 |   4.9% → 4.3% |   4 → 3 | `newLength(int, int, int)`        | `jdk.internal.util.ArraysSupport` |
| removed |    -1 |   1.2% → 0.0% |   1 → 0 | `_new_array_Java`                 | `<unknown>`                       |

##### `grow()` (`java.util.ArrayList`)

| Change | Delta |             % | Samples | Callee      | Location              |
| -----: | ----: | ------------: | ------: | ----------- | --------------------- |
| -21.5% |   -14 | 95.6% → 92.7% | 65 → 51 | `grow(int)` | `java.util.ArrayList` |

##### `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                                                                                                                                     | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  -90.9% |   -10 |  42.3% → 7.7% |  11 → 1 | `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)`                                                                                    | `<unknown>` |
| +120.0% |    +6 | 19.2% → 84.6% |  5 → 11 | `G1ParScanThreadState::do_partial_array(PartialArrayScanTask)`                                                                                                             | `<unknown>` |
| removed |    -2 |   7.7% → 0.0% |   2 → 0 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>(G1ScanEvacuatedObjClosure*, oopDesc*, Klass*)` | `<unknown>` |

##### `G1ParScanThreadState::steal_and_trim_queue(GenericTaskQueueSet<OverflowTaskQueue<ScannerTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*)` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                                                                                                                                | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| -52.6% |   -10 | 90.5% → 90.0% |  19 → 9 | `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)`                                                                         | `<unknown>` |
| -50.0% |    -1 |  9.5% → 10.0% |   2 → 1 | `GenericTaskQueueSet<OverflowTaskQueue<ScannerTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>::steal_best_of_2(unsigned int, ScannerTask&)` | `<unknown>` |

##### `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                                                                                                                                     | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| removed |    -2 |  16.7% → 0.0% |   2 → 0 | `G1ParScanThreadState::start_partial_objarray(G1HeapRegionAttr, oopDesc*, oopDesc*)`                                                                                       | `<unknown>` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>(G1ScanEvacuatedObjClosure*, oopDesc*, Klass*)` | `<unknown>` |

##### `G1EvacuateRegionsBaseTask::work(unsigned int)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                                                                                                    | Location    |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  -77.8% |    -7 |  23.7% → 7.1% |   9 → 2 | `G1EvacuateRegionsTask::scan_roots(G1ParScanThreadState*, unsigned int)`                                                                  | `<unknown>` |
|  -10.7% |    -3 | 73.7% → 89.3% | 28 → 25 | `G1EvacuateRegionsTask::evacuate_live_objects(G1ParScanThreadState*, unsigned int)`                                                       | `<unknown>` |
| removed |    -1 |   2.6% → 0.0% |   1 → 0 | `G1RemSet::scan_collection_set_code_roots(G1ParScanThreadState*, unsigned int, G1GCPhaseTimes::GCParPhases, G1GCPhaseTimes::GCParPhases)` | `<unknown>` |
|     new |    +1 |   0.0% → 3.6% |   0 → 1 | `G1ParScanThreadStateSet::state_for_worker(unsigned int)`                                                                                 | `<unknown>` |

##### `WorkerThread::run()` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                          | Location    |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | ----------- |
|  -26.3% |   -10 | 30.6% → 24.6% | 38 → 28 | `G1EvacuateRegionsBaseTask::work(unsigned int)` | `<unknown>` |
|  -35.0% |    -7 | 16.1% → 11.4% | 20 → 13 | `semaphore_wait_trap`                           | `<unknown>` |
| +600.0% |    +6 |   0.8% → 6.1% |   1 → 7 | `G1FullGCResetMetadataTask::work(unsigned int)` | `<unknown>` |
|     new |    +5 |   0.0% → 4.4% |   0 → 5 | `G1FullGCCompactTask::work(unsigned int)`       | `<unknown>` |
|   -7.7% |    -4 | 41.9% → 42.1% | 52 → 48 | `G1FullGCMarkTask::work(unsigned int)`          | `<unknown>` |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |            % |  Samples | Callee          | Location           |
| -----: | ----: | -----------: | -------: | --------------- | ------------------ |
| +23.9% |   +21 | 8.3% → 10.3% | 88 → 109 | `doubleValue()` | `java.lang.Double` |

##### `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change | Delta |            % | Samples | Callee              | Location                |
| ------: | ----: | -----------: | ------: | ------------------- | ----------------------- |
| removed |    -3 | 60.0% → 0.0% |   3 → 0 | `<clinit>()`        | `scala.Predef$`         |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`)

| Change | Delta |              % | Samples | Callee                  | Location                                                             |
| -----: | ----: | -------------: | ------: | ----------------------- | -------------------------------------------------------------------- |
| -80.0% |    -4 | 100.0% → 50.0% |   5 → 1 | `run(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans`                            |
|    new |    +1 |   0.0% → 50.0% |   0 → 1 | `validate()`            | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000070011a79b8` |

##### `loadExternalPlugins(BenchmarkSuite, Seq)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change | Delta |             % | Samples | Callee                                                           | Location                               |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------- | -------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |

##### `createHandler()` (`org.renaissance.core.Logging`)

| Change | Delta |      % | Samples | Callee     | Location                            |
| -----: | ----: | -----: | ------: | ---------- | ----------------------------------- |
| -33.3% |    -1 | 100.0% |   3 → 2 | `<init>()` | `java.util.logging.SimpleFormatter` |

##### `createRootLogger()` (`org.renaissance.core.Logging`)

| Change | Delta |      % | Samples | Callee            | Location                       |
| -----: | ----: | -----: | ------: | ----------------- | ------------------------------ |
| -33.3% |    -1 | 100.0% |   3 → 2 | `createHandler()` | `org.renaissance.core.Logging` |

##### `<clinit>()` (`org.renaissance.core.Logging`)

| Change | Delta |      % | Samples | Callee               | Location                       |
| -----: | ----: | -----: | ------: | -------------------- | ------------------------------ |
| -33.3% |    -1 | 100.0% |   3 → 2 | `createRootLogger()` | `org.renaissance.core.Logging` |

##### `<clinit>()` (`org.renaissance.core.Launcher`)

| Change | Delta |      % | Samples | Callee       | Location                       |
| -----: | ----: | -----: | ------: | ------------ | ------------------------------ |
| -33.3% |    -1 | 100.0% |   3 → 2 | `<clinit>()` | `org.renaissance.core.Logging` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |            % | Samples | Callee            | Location    |
| -----: | ----: | -----------: | ------: | ----------------- | ----------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `_new_array_Java` | `<unknown>` |

##### `combineResults(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % | Samples | Callee                    | Location                                                  |
| -----: | ----: | -----: | ------: | ------------------------- | --------------------------------------------------------- |
| -33.3% |    -1 | 100.0% |   3 → 2 | `add(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `<init>(JavaKMeans, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change | Delta |            % | Samples | Callee                     | Location                                               |
| ------: | ----: | -----------: | ------: | -------------------------- | ------------------------------------------------------ |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `<init>(Collection)`       | `java.util.ArrayList`                                  |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `<init>(JavaKMeans, List)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `<init>(JavaKMeans, List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change | Delta |             % | Samples | Callee   | Location              |
| ------: | ----: | ------------: | ------: | -------- | --------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `size()` | `java.util.ArrayList` |

##### `$anonfun$1(Config, Path)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change | Delta |             % | Samples | Callee     | Location                                                        |
| ------: | ----: | ------------: | ------: | ---------- | --------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `asJava()` | `scala.collection.convert.AsJavaExtensions$MutableMapHasAsJava` |

##### `G1FullGCMarker::mark_object(oopDesc*)` (`<unknown>`)

|  Change | Delta |            % | Samples | Callee                                             | Location    |
| ------: | ----: | -----------: | ------: | -------------------------------------------------- | ----------- |
| +300.0% |    +6 | 6.1% → 34.8% |   2 → 8 | `G1RegionMarkStatsCache::add_live_words(oopDesc*)` | `<unknown>` |
|     new |    +1 |  0.0% → 4.3% |   0 → 1 | `MarkBitMap::check_mark(HeapWordImpl**)`           | `<unknown>` |

##### `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>(G1MarkAndPushClosure*, int, int)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                             | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- | ----------- |
|  -33.3% |   -11 | 86.8% → 78.6% | 33 → 22 | `G1FullGCMarker::mark_object(oopDesc*)`            | `<unknown>` |
| removed |    -1 |   2.6% → 0.0% |   1 → 0 | `MarkBitMap::check_mark(HeapWordImpl**)`           | `<unknown>` |
| removed |    -1 |   2.6% → 0.0% |   1 → 0 | `G1RegionMarkStatsCache::add_live_words(oopDesc*)` | `<unknown>` |

##### `Thread::call_run()` (`<unknown>`)

|  Change | Delta |             % |   Samples | Callee                            | Location    |
| ------: | ----: | ------------: | --------: | --------------------------------- | ----------- |
|   -8.1% |   -10 | 52.5% → 50.0% | 124 → 114 | `WorkerThread::run()`             | `<unknown>` |
|   -4.0% |    -4 | 42.4% → 42.1% |  100 → 96 | `JavaThread::thread_main_inner()` | `<unknown>` |
|  +66.7% |    +4 |   2.5% → 4.4% |    6 → 10 | `VMThread::run()`                 | `<unknown>` |
|  +20.0% |    +1 |   2.1% → 2.6% |     5 → 6 | `WatcherThread::run()`            | `<unknown>` |
| +100.0% |    +1 |   0.4% → 0.9% |     1 → 2 | `ConcurrentGCThread::run()`       | `<unknown>` |

##### `thread_native_entry(Thread*)` (`<unknown>`)

| Change | Delta |      % |   Samples | Callee               | Location    |
| -----: | ----: | -----: | --------: | -------------------- | ----------- |
|  -3.4% |    -8 | 100.0% | 236 → 228 | `Thread::call_run()` | `<unknown>` |

##### `SystemDictionary::resolve_class_from_stream(ClassFileStream*, Symbol*, Handle, ClassLoadInfo const&, JavaThread*)` (`<unknown>`)

| Change | Delta |      % | Samples | Callee                                                                                                             | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------------------ | ----------- |
| -57.1% |    -8 | 100.0% |  14 → 6 | `KlassFactory::create_from_stream(ClassFileStream*, Symbol*, ClassLoaderData*, ClassLoadInfo const&, JavaThread*)` | `<unknown>` |

##### `jvm_define_class_common(char const*, _jobject*, signed char const*, int, _jobject*, char const*, JavaThread*)` (`<unknown>`)

| Change | Delta |      % | Samples | Callee                                                                                                              | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------------------- | ----------- |
| -57.1% |    -8 | 100.0% |  14 → 6 | `SystemDictionary::resolve_class_from_stream(ClassFileStream*, Symbol*, Handle, ClassLoadInfo const&, JavaThread*)` | `<unknown>` |

##### `JVM_DefineClassWithSource` (`<unknown>`)

| Change | Delta |      % | Samples | Callee                                                                                                          | Location    |
| -----: | ----: | -----: | ------: | --------------------------------------------------------------------------------------------------------------- | ----------- |
| -57.1% |    -8 | 100.0% |  14 → 6 | `jvm_define_class_common(char const*, _jobject*, signed char const*, int, _jobject*, char const*, JavaThread*)` | `<unknown>` |

##### `Java_java_lang_ClassLoader_defineClass1` (`<unknown>`)

| Change | Delta |      % | Samples | Callee                      | Location    |
| -----: | ----: | -----: | ------: | --------------------------- | ----------- |
| -57.1% |    -8 | 100.0% |  14 → 6 | `JVM_DefineClassWithSource` | `<unknown>` |

##### `_pthread_start` (`<unknown>`)

| Change | Delta |              % |   Samples | Callee                         | Location    |
| -----: | ----: | -------------: | --------: | ------------------------------ | ----------- |
|  -3.4% |    -8 | 100.0% → 99.6% | 236 → 228 | `thread_native_entry(Thread*)` | `<unknown>` |
|    new |    +1 |    0.0% → 0.4% |     0 → 1 | `ThreadJavaMain`               | `<unknown>` |

##### `thread_start` (`<unknown>`)

| Change | Delta |      % |   Samples | Callee           | Location    |
| -----: | ----: | -----: | --------: | ---------------- | ----------- |
|  -3.0% |    -7 | 100.0% | 236 → 229 | `_pthread_start` | `<unknown>` |

##### `G1EvacuateRegionsTask::scan_roots(G1ParScanThreadState*, unsigned int)` (`<unknown>`)

|  Change | Delta |            % | Samples | Callee                                                                                                                           | Location    |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| removed |    -7 | 77.8% → 0.0% |   7 → 0 | `G1RemSet::scan_heap_roots(G1ParScanThreadState*, unsigned int, G1GCPhaseTimes::GCParPhases, G1GCPhaseTimes::GCParPhases, bool)` | `<unknown>` |

##### `KlassFactory::create_from_stream(ClassFileStream*, Symbol*, ClassLoaderData*, ClassLoadInfo const&, JavaThread*)` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                                                                                                                                         | Location    |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| -83.3% |    -5 | 42.9% → 14.3% |   6 → 1 | `ClassFileParser::create_instance_klass(bool, ClassInstanceInfo const&, JavaThread*)`                                                          | `<unknown>` |
| -25.0% |    -2 | 57.1% → 85.7% |   8 → 6 | `ClassFileParser::ClassFileParser(ClassFileStream*, Symbol*, ClassLoaderData*, ClassLoadInfo const*, ClassFileParser::Publicity, JavaThread*)` | `<unknown>` |

##### `add(Object)` (`java.util.ArrayList`)

| Change | Delta |              % |   Samples | Callee                       | Location              |
| -----: | ----: | -------------: | --------: | ---------------------------- | --------------------- |
|  -7.1% |    -8 | 99.1% → 100.0% | 112 → 104 | `add(Object, Object[], int)` | `java.util.ArrayList` |

##### `fork()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |              % | Samples | Callee                                      | Location                                      |
| -----: | ----: | -------------: | ------: | ------------------------------------------- | --------------------------------------------- |
| -87.5% |    -7 | 80.0% → 100.0% |   8 → 1 | `push(ForkJoinTask, ForkJoinPool, boolean)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

| Change | Delta |             % | Samples | Callee   | Location              |
| -----: | ----: | ------------: | ------: | -------- | --------------------- |
| -19.1% |   -13 | 60.7% → 52.9% | 68 → 55 | `grow()` | `java.util.ArrayList` |

##### `putMapEntries(Map, boolean)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Callee                                          | Location                          |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | --------------------------------- |
| removed |    -4 |  21.1% → 0.0% |   4 → 0 | `resolve_opt_virtual_call`                      | `<unknown>`                       |
| removed |    -2 |  10.5% → 0.0% |   2 → 0 | `iterator()`                                    | `java.util.HashMap$EntrySet`      |
|  -25.0% |    -2 | 42.1% → 54.5% |   8 → 6 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap`               |
|  -50.0% |    -1 |  10.5% → 9.1% |   2 → 1 | `next()`                                        | `java.util.HashMap$EntryIterator` |
| +100.0% |    +1 |  5.3% → 18.2% |   1 → 2 | `hash(Object)`                                  | `java.util.HashMap`               |

##### `<init>(Map)` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Callee                        | Location            |
| -----: | ----: | -----: | ------: | ----------------------------- | ------------------- |
| -42.1% |    -8 | 100.0% | 19 → 11 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

| Change | Delta |             % | Samples | Callee                                    | Location    |
| -----: | ----: | ------------: | ------: | ----------------------------------------- | ----------- |
| -57.1% |    -8 | 93.3% → 75.0% |  14 → 6 | `Java_java_lang_ClassLoader_defineClass1` | `<unknown>` |

##### `defineClass(String, byte[], int, int, ProtectionDomain)` (`java.lang.ClassLoader`)

| Change | Delta |      % | Samples | Callee                                                                          | Location                |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------- | ----------------------- |
| -46.7% |    -7 | 100.0% |  15 → 8 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader` |

##### `defineClass(String, byte[], int, int, CodeSource)` (`java.security.SecureClassLoader`)

| Change | Delta |            % | Samples | Callee                                                    | Location                          |
| -----: | ----: | -----------: | ------: | --------------------------------------------------------- | --------------------------------- |
| -46.7% |    -7 |       100.0% |  15 → 8 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader`           |
|    new |    +1 | 0.0% → 12.5% |   0 → 1 | `getProtectionDomain(CodeSource)`                         | `java.security.SecureClassLoader` |

##### `push(ForkJoinTask, ForkJoinPool, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change | Delta |              % | Samples | Callee                 | Location                                      |
| ------: | ----: | -------------: | ------: | ---------------------- | --------------------------------------------- |
|  -75.0% |    -3 | 50.0% → 100.0% |   4 → 1 | `signalWork()`         | `java.util.concurrent.ForkJoinPool`           |
| removed |    -1 |   12.5% → 0.0% |   1 → 0 | `getAndSetAccess(int)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|  Change | Delta |            % | Samples | Callee                                       | Location            |
| ------: | ----: | -----------: | ------: | -------------------------------------------- | ------------------- |
| removed |    -2 | 22.2% → 0.0% |   2 → 0 | `resize()`                                   | `java.util.HashMap` |
|     new |    +1 | 0.0% → 16.7% |   0 → 1 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap` |

##### `addAll(Collection)` (`java.util.ArrayList`)

|  Change | Delta |             % | Samples | Callee                                | Location              |
| ------: | ----: | ------------: | ------: | ------------------------------------- | --------------------- |
|   -4.1% |    -3 | 49.3% → 47.9% | 73 → 70 | `toArray()`                           | `java.util.ArrayList` |
|   +3.9% |    +2 | 34.5% → 36.3% | 51 → 53 | `arrayof_oop_disjoint_arraycopy`      | `<unknown>`           |
| removed |    -2 |   1.4% → 0.0% |   2 → 0 | `G1BarrierSet::invalidate(MemRegion)` | `<unknown>`           |
|   +5.9% |    +1 | 11.5% → 12.3% | 17 → 18 | `grow(int)`                           | `java.util.ArrayList` |

##### `Compile::Code_Gen()` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                                                                               | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------ | ----------- |
| -69.2% |    -9 | 33.3% → 13.8% |  13 → 4 | `Matcher::match()`                                                                   | `<unknown>` |
| -40.0% |    -2 | 12.8% → 10.3% |   5 → 3 | `PhaseOutput::Output()`                                                              | `<unknown>` |
| -50.0% |    -2 |  10.3% → 6.9% |   4 → 2 | `PhaseCFG::do_global_code_motion()`                                                  | `<unknown>` |
|    new |    +1 |   0.0% → 3.4% |   0 → 1 | `PhaseCFG::PhaseCFG(Arena*, RootNode*, Matcher&)`                                    | `<unknown>` |
|    new |    +1 |   0.0% → 3.4% |   0 → 1 | `PhaseOutput::install_code(ciMethod*, int, AbstractCompiler*, bool, bool, RTMState)` | `<unknown>` |

##### `Matcher::match()` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                          | Location    |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | ----------- |
|  -57.1% |    -4 | 53.8% → 75.0% |   7 → 3 | `Matcher::xform(Node*, int)`                    | `<unknown>` |
|  -66.7% |    -2 | 23.1% → 25.0% |   3 → 1 | `Matcher::find_shared(Node*)`                   | `<unknown>` |
| removed |    -1 |   7.7% → 0.0% |   1 → 0 | `Arena::destruct_contents()`                    | `<unknown>` |
| removed |    -1 |   7.7% → 0.0% |   1 → 0 | `Matcher::specialize_generic_vector_operands()` | `<unknown>` |
| removed |    -1 |   7.7% → 0.0% |   1 → 0 | `AddLNode::Opcode() const`                      | `<unknown>` |

##### `CompileQueue::get(CompilerThread*)` (`<unknown>`)

| Change | Delta |      % | Samples | Callee                              | Location    |
| -----: | ----: | -----: | ------: | ----------------------------------- | ----------- |
| -35.7% |    -5 | 100.0% |  14 → 9 | `Monitor::wait(unsigned long long)` | `<unknown>` |

##### `CompileBroker::compiler_thread_loop()` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                   | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------- | ----------- |
|  -35.7% |    -5 |  14.1% → 9.5% |  14 → 9 | `CompileQueue::get(CompilerThread*)`                     | `<unknown>` |
|   +1.2% |    +1 | 84.8% → 89.5% | 84 → 85 | `CompileBroker::invoke_compiler_on_method(CompileTask*)` | `<unknown>` |
| removed |    -1 |   1.0% → 0.0% |   1 → 0 | `ciEnv::cache_dtrace_flags()`                            | `<unknown>` |
|     new |    +1 |   0.0% → 1.1% |   0 → 1 | `CompileTask::select_for_compilation()`                  | `<unknown>` |

##### `Matcher::xform(Node*, int)` (`<unknown>`)

|  Change | Delta |              % | Samples | Callee                                | Location    |
| ------: | ----: | -------------: | ------: | ------------------------------------- | ----------- |
|  -40.0% |    -2 | 71.4% → 100.0% |   5 → 3 | `Matcher::match_tree(Node const*)`    | `<unknown>` |
| removed |    -1 |   14.3% → 0.0% |   1 → 0 | `Matcher::match_sfpt(SafePointNode*)` | `<unknown>` |

##### `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                                                     | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------ | ----------- |
|  -25.6% |   -10 | 54.9% → 42.0% | 39 → 29 | `Compile::Code_Gen()`                                                                      | `<unknown>` |
|  +20.0% |    +5 | 35.2% → 43.5% | 25 → 30 | `Compile::Optimize()`                                                                      | `<unknown>` |
|  +50.0% |    +3 |  8.5% → 13.0% |   6 → 9 | `ParseGenerator::generate(JVMState*)`                                                      | `<unknown>` |
| removed |    -1 |   1.4% → 0.0% |   1 → 0 | `PhaseRemoveUseless::PhaseRemoveUseless(PhaseGVN*, Unique_Node_List&, Phase::PhaseNumber)` | `<unknown>` |
|     new |    +1 |   0.0% → 1.4% |   0 → 1 | `_platform_memset`                                                                         | `<unknown>` |

##### `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` (`<unknown>`)

| Change | Delta |      % | Samples | Callee                                                             | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------ | ----------- |
|  -2.8% |    -2 | 100.0% | 71 → 69 | `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` | `<unknown>` |

##### `PhaseOutput::Output()` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                 | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------ | ----------- |
| removed |    -1 |  20.0% → 0.0% |   1 → 0 | `PhaseOutput::BuildOopMaps()`                          | `<unknown>` |
|  -50.0% |    -1 | 40.0% → 33.3% |   2 → 1 | `PhaseOutput::fill_buffer(CodeBuffer*, unsigned int*)` | `<unknown>` |
|  -50.0% |    -1 | 40.0% → 33.3% |   2 → 1 | `PhaseOutput::shorten_branches(unsigned int*)`         | `<unknown>` |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `Scheduling::DoScheduling()`                           | `<unknown>` |

##### `Compilation::emit_code_body()` (`<unknown>`)

|  Change | Delta |            % | Samples | Callee                                          | Location    |
| ------: | ----: | -----------: | ------: | ----------------------------------------------- | ----------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `Compilation::emit_code_epilog(LIR_Assembler*)` | `<unknown>` |

##### `PhaseIterGVN::transform_old(Node*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                     | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | ----------- |
| removed |    -2 |  33.3% → 0.0% |   2 → 0 | `LoadNode::Ideal(PhaseGVN*, bool)`         | `<unknown>` |
|  -50.0% |    -1 | 33.3% → 25.0% |   2 → 1 | `IfNode::Ideal(PhaseGVN*, bool)`           | `<unknown>` |
| removed |    -1 |  16.7% → 0.0% |   1 → 0 | `CMoveNode::Identity(PhaseGVN*)`           | `<unknown>` |
| removed |    -1 |  16.7% → 0.0% |   1 → 0 | `AddINode::Opcode() const`                 | `<unknown>` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `PhaseIterGVN::subsume_node(Node*, Node*)` | `<unknown>` |

##### `PhaseMacroExpand::expand_macro_nodes()` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                     | Location    |
| ------: | ----: | ------------: | ------: | -------------------------- | ----------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `PhaseIterGVN::optimize()` | `<unknown>` |

##### `LIR_Assembler::add_call_info(int, CodeEmitInfo*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                            | Location    |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------- | ----------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `CodeEmitInfo::record_debug_info(DebugInformationRecorder*, int)` | `<unknown>` |

##### `LIR_Assembler::emit_slow_case_stubs()` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                           | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------ | ----------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `CounterOverflowStub::emit_code(LIR_Assembler*)` | `<unknown>` |

##### `Compilation::emit_code_epilog(LIR_Assembler*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                  | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------- | ----------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `LIR_Assembler::emit_slow_case_stubs()` | `<unknown>` |

##### `Matcher::find_shared(Node*)` (`<unknown>`)

|  Change | Delta |            % | Samples | Callee                                                   | Location    |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------- | ----------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `Matcher::pd_clone_node(Node*, Node*, Matcher::MStack&)` | `<unknown>` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `EncodeNarrowPtrNode::ideal_reg() const`                 | `<unknown>` |

##### `PhaseCFG::schedule_late(VectorSet&, Node_Stack&)` (`<unknown>`)

|  Change | Delta |            % | Samples | Callee                                                   | Location    |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------- | ----------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `Node_Backward_Iterator::next()`                         | `<unknown>` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `PhaseCFG::insert_anti_dependences(Block*, Node*, bool)` | `<unknown>` |

##### `PhaseCFG::do_global_code_motion()` (`<unknown>`)

|  Change | Delta |              % | Samples | Callee                           | Location    |
| ------: | ----: | -------------: | ------: | -------------------------------- | ----------- |
|  -33.3% |    -1 | 75.0% → 100.0% |   3 → 2 | `PhaseCFG::global_code_motion()` | `<unknown>` |
| removed |    -1 |   25.0% → 0.0% |   1 → 0 | `MachNode::Opcode() const`       | `<unknown>` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in samples collected in their leaf frame.

Common call stack: `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`) ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|  Change | Delta |            % |   Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------: | ----: | -----------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +150.2% |  +338 | 4.7% → 10.6% | 225 → 563 | `__psynch_cvwait` ← `Parker::park(bool, long)` ← `Unsafe_Park(JNIEnv_*, _jobject*, unsigned char, long)` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  +86.0% |   +49 |  1.2% → 2.0% |  57 → 106 | `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  +81.8% |   +36 |  0.9% → 1.5% |   44 → 80 | `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  +69.2% |   +27 |  0.8% → 1.2% |   39 → 66 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  +19.2% |   +24 |  2.6% → 2.8% | 125 → 149 | `__psynch_cvwait` ← `Parker::park(bool, long)` ← `Unsafe_Park(JNIEnv_*, _jobject*, unsigned char, long)` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| +191.7% |   +23 |  0.3% → 0.7% |   12 → 35 | `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  +39.3% |   +22 |  1.2% → 1.5% |   56 → 78 | `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  +80.0% |   +16 |  0.4% → 0.7% |   20 → 36 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                  |
| +136.4% |   +15 |  0.2% → 0.5% |   11 → 26 | `__psynch_cvwait` ← `Parker::park(bool, long)` ← `Unsafe_Park(JNIEnv_*, _jobject*, unsigned char, long)` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `parkUntil(long)` (`java.util.concurrent.locks.LockSupport`) ← `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  +93.3% |   +14 |  0.3% → 0.5% |   15 → 29 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                 |
|  +27.1% |   +13 |  1.0% → 1.2% |   48 → 61 | `__psynch_cvwait` ← `Parker::park(bool, long)` ← `Unsafe_Park(JNIEnv_*, _jobject*, unsigned char, long)` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  +52.0% |   +13 |  0.5% → 0.7% |   25 → 38 | `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  +15.7% |   +11 |         1.5% |   70 → 81 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) |
| +550.0% |   +11 | <0.1% → 0.2% |    2 → 13 | `__psynch_cvwait` ← `Parker::park(bool, long)` ← `Unsafe_Park(JNIEnv_*, _jobject*, unsigned char, long)` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  +66.7% |   +10 |  0.3% → 0.5% |   15 → 25 | `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| +100.0% |   +10 |  0.2% → 0.4% |   10 → 20 | `forward_copy_longs` ← `arrayof_jint_disjoint_arraycopy` ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  +58.8% |   +10 |  0.4% → 0.5% |   17 → 27 | `__psynch_cvwait` ← `Parker::park(bool, long)` ← `Unsafe_Park(JNIEnv_*, _jobject*, unsigned char, long)` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| +500.0% |   +10 | <0.1% → 0.2% |    2 → 12 | `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                      |
|  +27.3% |    +9 |  0.7% → 0.8% |   33 → 42 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| +450.0% |    +9 | <0.1% → 0.2% |    2 → 11 | `forward_copy_longs` ← `arrayof_jint_disjoint_arraycopy` ← `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7248`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

### Improvements

Call stacks with the largest decrease in samples collected in their leaf frame.

|  Change | Delta |            % |   Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------: | ----: | -----------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -34.1% |   -28 |  1.7% → 1.0% |   82 → 54 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  -36.8% |   -25 |  1.4% → 0.8% |   68 → 43 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  -14.8% |   -22 |  3.1% → 2.4% | 149 → 127 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  -30.6% |   -22 |  1.5% → 0.9% |   72 → 50 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  -17.6% |   -19 |  2.3% → 1.7% |  108 → 89 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                   |
|  -19.7% |   -15 |  1.6% → 1.2% |   76 → 61 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  -62.5% |   -15 |  0.5% → 0.2% |    24 → 9 | `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  -48.1% |   -13 |  0.6% → 0.3% |   27 → 14 | `__psynch_cvsignal` ← `Unsafe_Unpark(JNIEnv_*, _jobject*, _jobject*)` ← `unpark(Object)` (`jdk.internal.misc.Unsafe`) ← `unpark(Thread)` (`java.util.concurrent.locks.LockSupport`) ← `signalWaiters()` (`java.util.concurrent.ForkJoinTask`) ← `setDone()` ← `doExec()` ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  -52.4% |   -11 |  0.4% → 0.2% |   21 → 10 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  -61.1% |   -11 |  0.4% → 0.1% |    18 → 7 | `G1FullGCMarker::mark_object(oopDesc*)` ← `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>(G1MarkAndPushClosure*, int, int)` ← `G1FullGCMarker::complete_marking(GenericTaskQueueSet<OverflowTaskQueue<oopDesc*, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*, GenericTaskQueueSet<OverflowTaskQueue<ObjArrayTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*, TaskTerminator*)` ← `G1FullGCMarkTask::work(unsigned int)` ← `WorkerThread::run()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  -24.4% |   -10 |  0.9% → 0.6% |   41 → 31 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|   -9.8% |   -10 |  2.1% → 1.7% |  102 → 92 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  -19.2% |   -10 |  1.1% → 0.8% |   52 → 42 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  -20.9% |    -9 |  0.9% → 0.6% |   43 → 34 | `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  -14.8% |    -8 |  1.1% → 0.9% |   54 → 46 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`) |
|  -42.1% |    -8 |  0.4% → 0.2% |   19 → 11 | `forward_copy_longs` ← `arrayof_jint_disjoint_arraycopy` ← `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7248`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  -80.0% |    -8 | 0.2% → <0.1% |    10 → 2 | `add(Object, Object[], int)` (`java.util.ArrayList`) ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| removed |    -8 |  0.2% → 0.0% |     8 → 0 | `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)` ← `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)` ← `G1ParScanThreadState::steal_and_trim_queue(GenericTaskQueueSet<OverflowTaskQueue<ScannerTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*)` ← `G1ParEvacuateFollowersClosure::do_void()` ← `G1EvacuateRegionsTask::evacuate_live_objects(G1ParScanThreadState*, unsigned int)` ← `G1EvacuateRegionsBaseTask::work(unsigned int)` ← `WorkerThread::run()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  -63.6% |    -7 |  0.2% → 0.1% |    11 → 4 | `doubleValue()` (`java.lang.Double`) ← `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  -53.8% |    -7 |  0.3% → 0.1% |    13 → 6 | `G1FullGCMarker::mark_object(oopDesc*)` ← `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>(G1MarkAndPushClosure*, int, int)` ← `G1FullGCMarker::follow_marking_stacks()` ← `G1FullGCMarker::complete_marking(GenericTaskQueueSet<OverflowTaskQueue<oopDesc*, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*, GenericTaskQueueSet<OverflowTaskQueue<ObjArrayTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*, TaskTerminator*)` ← `G1FullGCMarkTask::work(unsigned int)` ← `WorkerThread::run()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

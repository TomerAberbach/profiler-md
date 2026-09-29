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

Functions with the largest increase in samples taken directly in the function body, excluding callees.

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

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

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

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

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

Functions with the largest decrease in total samples taken in the function and all its callees.

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

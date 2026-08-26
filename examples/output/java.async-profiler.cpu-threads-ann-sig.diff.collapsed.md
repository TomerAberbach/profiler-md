# Sampling profile diff

Collected 4,393 samples → 4,556 samples (+163 samples, +3.7%).

| Category         | Change | Delta |             % |       Samples |
| ---------------- | -----: | ----: | ------------: | ------------: |
| Ours             |  +6.9% |  +179 | 58.8% → 60.6% | 2,583 → 2,762 |
| Native           |  -4.3% |   -47 | 25.1% → 23.2% | 1,102 → 1,055 |
| Standard library |  +4.3% |   +26 | 13.7% → 13.8% |     602 → 628 |
| Compiler         |  +9.8% |    +5 |          1.2% |       51 → 56 |
| JIT              |   0.0% |     0 |   1.3% → 1.2% |            55 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |     Samples | Function                                                                                             | Location                                                   |
| ------: | ----: | ------------: | ----------: | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
|  +18.2% |   +57 |   7.1% → 8.1% |   314 → 371 | `findNearestCentroid()`                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   +7.2% |   +54 | 17.0% → 17.6% |   747 → 801 | `distance(Double[], Double[])`                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +10.0% |   +44 | 10.0% → 10.6% |   440 → 484 | `vectorSum()`                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   +4.4% |   +42 | 21.9% → 22.0% | 961 → 1,003 | `accumulate(Double[], double[])`                                                                     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +20.8% |   +32 |   3.5% → 4.1% |   154 → 186 | `elementData(int)`                                                                                   | `java.util.ArrayList`                                      |
| +117.4% |   +27 |   0.5% → 1.1% |     23 → 50 | `add(Object, Object[], int)`                                                                         | `java.util.ArrayList`                                      |
|   +5.5% |   +10 |   4.1% → 4.2% |   182 → 192 | `forward_copy_longs`                                                                                 | `<unknown>`                                                |
|     new |    +8 |   0.0% → 0.2% |       0 → 8 | `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)`              | `<unknown>`                                                |
|     new |    +8 |   0.0% → 0.2% |       0 → 8 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region(HeapRegion*, bool)` | `<unknown>`                                                |
|   +6.5% |    +7 |   2.4% → 2.5% |   107 → 114 | `computeIfAbsent(Object, Function)`                                                                  | `java.util.HashMap`                                        |
|  +27.3% |    +6 |   0.5% → 0.6% |     22 → 28 | `hash(Object)`                                                                                       | `java.util.HashMap`                                        |
|  +27.8% |    +5 |   0.4% → 0.5% |     18 → 23 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`                                            | `java.util.concurrent.ForkJoinPool`                        |
| +400.0% |    +4 |  <0.1% → 0.1% |       1 → 5 | `add(double[], double[])`                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|     new |    +3 |   0.0% → 0.1% |       0 → 3 | `tryRemoveAndExec(ForkJoinTask, boolean)`                                                            | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
|  +21.4% |    +3 |   0.3% → 0.4% |     14 → 17 | `arrayof_jint_disjoint_arraycopy`                                                                    | `<unknown>`                                                |
| +300.0% |    +3 |  <0.1% → 0.1% |       1 → 4 | `putVal(int, Object, Object, boolean, boolean)`                                                      | `java.util.HashMap`                                        |
|  +42.9% |    +3 |          0.2% |      7 → 10 | `__psynch_mutexwait`                                                                                 | `<unknown>`                                                |
| +100.0% |    +3 |          0.1% |       3 → 6 | `_sigtramp`                                                                                          | `<unknown>`                                                |
| +300.0% |    +3 |  <0.1% → 0.1% |       1 → 4 | `G1FullGCMarker::publish_and_drain_oop_tasks()`                                                      | `<unknown>`                                                |
| +300.0% |    +3 |  <0.1% → 0.1% |       1 → 4 | `mach_absolute_time`                                                                                 | `<unknown>`                                                |

##### Ours

|  Change | Delta |             % |     Samples | Function                         | Location                                                                              |
| ------: | ----: | ------------: | ----------: | -------------------------------- | ------------------------------------------------------------------------------------- |
|  +18.2% |   +57 |   7.1% → 8.1% |   314 → 371 | `findNearestCentroid()`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   +7.2% |   +54 | 17.0% → 17.6% |   747 → 801 | `distance(Double[], Double[])`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +10.0% |   +44 | 10.0% → 10.6% |   440 → 484 | `vectorSum()`                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|   +4.4% |   +42 | 21.9% → 22.0% | 961 → 1,003 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| +400.0% |    +4 |  <0.1% → 0.1% |       1 → 5 | `add(double[], double[])`        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|     new |    +1 |  0.0% → <0.1% |       0 → 1 | `lambda$merge$6(List, List)`     | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
| +100.0% |    +1 |         <0.1% |       1 → 2 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|     new |    +1 |  0.0% → <0.1% |       0 → 1 | `lambda$run$0(int, List, int)`   | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|     new |    +1 |  0.0% → <0.1% |       0 → 1 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|     new |    +1 |  0.0% → <0.1% |       0 → 1 | `apply(Object)`                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000007001186b38` |

##### Native

|  Change | Delta |            % |   Samples | Function                                                                                                                                                              | Location    |
| ------: | ----: | -----------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|   +5.5% |   +10 |  4.1% → 4.2% | 182 → 192 | `forward_copy_longs`                                                                                                                                                  | `<unknown>` |
|     new |    +8 |  0.0% → 0.2% |     0 → 8 | `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)`                                                                               | `<unknown>` |
|     new |    +8 |  0.0% → 0.2% |     0 → 8 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region(HeapRegion*, bool)`                                                                  | `<unknown>` |
|  +21.4% |    +3 |  0.3% → 0.4% |   14 → 17 | `arrayof_jint_disjoint_arraycopy`                                                                                                                                     | `<unknown>` |
|  +42.9% |    +3 |         0.2% |    7 → 10 | `__psynch_mutexwait`                                                                                                                                                  | `<unknown>` |
| +100.0% |    +3 |         0.1% |     3 → 6 | `_sigtramp`                                                                                                                                                           | `<unknown>` |
| +300.0% |    +3 | <0.1% → 0.1% |     1 → 4 | `G1FullGCMarker::publish_and_drain_oop_tasks()`                                                                                                                       | `<unknown>` |
| +300.0% |    +3 | <0.1% → 0.1% |     1 → 4 | `mach_absolute_time`                                                                                                                                                  | `<unknown>` |
|     new |    +3 |  0.0% → 0.1% |     0 → 3 | `G1MergeHeapRootsTask::G1MergeCardSetClosure::do_heap_region(HeapRegion*)`                                                                                            | `<unknown>` |
| +100.0% |    +2 | <0.1% → 0.1% |     2 → 4 | `G1RegionMarkStatsCache::add_live_words(oopDesc*)`                                                                                                                    | `<unknown>` |
|     new |    +2 | 0.0% → <0.1% |     0 → 2 | `G1FullGCMarker::follow_marking_stacks()`                                                                                                                             | `<unknown>` |
| +200.0% |    +2 | <0.1% → 0.1% |     1 → 3 | `InstanceKlass::find_method_index(Array<Method*> const*, Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::StaticLookupMode, Klass::PrivateLookupMode)` | `<unknown>` |
| +200.0% |    +2 | <0.1% → 0.1% |     1 → 3 | `void OopOopIterateDispatch<G1MarkAndPushClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>(G1MarkAndPushClosure*, oopDesc*, Klass*)`                         | `<unknown>` |
|     new |    +2 | 0.0% → <0.1% |     0 → 2 | `HierarchyVisitor<FindMethodsByErasedSig>::run(InstanceKlass*)`                                                                                                       | `<unknown>` |
|     new |    +2 | 0.0% → <0.1% |     0 → 2 | `ClassLoaderData::oops_do(OopClosure*, int, bool)`                                                                                                                    | `<unknown>` |
|     new |    +2 | 0.0% → <0.1% |     0 → 2 | `SignatureStream::next()`                                                                                                                                             | `<unknown>` |
|     new |    +2 | 0.0% → <0.1% |     0 → 2 | `G1BarrierSet::invalidate(MemRegion)`                                                                                                                                 | `<unknown>` |
|     new |    +2 | 0.0% → <0.1% |     0 → 2 | `JavaFrameAnchor::make_walkable()`                                                                                                                                    | `<unknown>` |
|     new |    +2 | 0.0% → <0.1% |     0 → 2 | `read`                                                                                                                                                                | `<unknown>` |
|  +50.0% |    +1 | <0.1% → 0.1% |     2 → 3 | `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)`                                                                                                         | `<unknown>` |

##### Standard library

|  Change | Delta |            % |   Samples | Function                                                  | Location                                       |
| ------: | ----: | -----------: | --------: | --------------------------------------------------------- | ---------------------------------------------- |
|  +20.8% |   +32 |  3.5% → 4.1% | 154 → 186 | `elementData(int)`                                        | `java.util.ArrayList`                          |
| +117.4% |   +27 |  0.5% → 1.1% |   23 → 50 | `add(Object, Object[], int)`                              | `java.util.ArrayList`                          |
|   +6.5% |    +7 |  2.4% → 2.5% | 107 → 114 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                            |
|  +27.3% |    +6 |  0.5% → 0.6% |   22 → 28 | `hash(Object)`                                            | `java.util.HashMap`                            |
|  +27.8% |    +5 |  0.4% → 0.5% |   18 → 23 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`            |
|     new |    +3 |  0.0% → 0.1% |     0 → 3 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`  |
| +300.0% |    +3 | <0.1% → 0.1% |     1 → 4 | `putVal(int, Object, Object, boolean, boolean)`           | `java.util.HashMap`                            |
|     new |    +2 | 0.0% → <0.1% |     0 → 2 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`           |
| +200.0% |    +2 | <0.1% → 0.1% |     1 → 3 | `awaitWork(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`            |
| +100.0% |    +2 | <0.1% → 0.1% |     2 → 4 | `push(ForkJoinTask, ForkJoinPool, boolean)`               | `java.util.concurrent.ForkJoinPool$WorkQueue`  |
|     new |    +2 | 0.0% → <0.1% |     0 → 2 | `getRawResult()`                                          | `java.util.concurrent.RecursiveTask`           |
|     new |    +2 | 0.0% → <0.1% |     0 → 2 | `<init>(HashMap)`                                         | `java.util.HashMap$HashIterator`               |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `forEachRemaining(IntConsumer)`                           | `java.util.stream.Streams$RangeIntSpliterator` |
|   +4.8% |    +1 |         0.5% |   21 → 22 | `grow(int)`                                               | `java.util.ArrayList`                          |
| +100.0% |    +1 |        <0.1% |     1 → 2 | `signalWaiters()`                                         | `java.util.concurrent.ForkJoinTask`            |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `tryCompensate(long, boolean)`                            | `java.util.concurrent.ForkJoinPool`            |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `signalWork()`                                            | `java.util.concurrent.ForkJoinPool`            |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `<init>(AbstractPipeline, int)`                           | `java.util.stream.ReferencePipeline`           |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `accept(double)`                                          | `java.util.stream.DoublePipeline$1$1`          |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `compareAndSet(long, long)`                               | `java.util.concurrent.atomic.AtomicLong`       |

##### JIT

| Change | Delta |            % | Samples | Function                 | Location    |
| -----: | ----: | -----------: | ------: | ------------------------ | ----------- |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `I2C/C2I adapters(0xbb)` | `<unknown>` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `vtable stub`            | `<unknown>` |

##### Compiler

| Change | Delta |            % | Samples | Function                                                                                | Location    |
| -----: | ----: | -----------: | ------: | --------------------------------------------------------------------------------------- | ----------- |
|    new |    +2 | 0.0% → <0.1% |   0 → 2 | `PhaseOutput::fill_buffer(CodeBuffer*, unsigned int*)`                                  | `<unknown>` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseIterGVN::subsume_node(Node*, Node*)`                                              | `<unknown>` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseCCP::push_more_uses(Unique_Node_List&, Node*, Node const*) const`                 | `<unknown>` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `Compile::call_generator(ciMethod*, int, bool, JVMState*, bool, float, ciKlass*, bool)` | `<unknown>` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseChaitin::post_allocate_copy_removal()`                                            | `<unknown>` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `Matcher::match_tree(Node const*)`                                                      | `<unknown>` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `IfNode::Ideal(PhaseGVN*, bool)`                                                        | `<unknown>` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `Node::add_req(Node*)`                                                                  | `<unknown>` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `BlockListBuilder::make_block_at(int, BlockBegin*)`                                     | `<unknown>` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `BlockListBuilder::BlockListBuilder(Compilation*, IRScope*, int)`                       | `<unknown>` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `lShiftI_reg_immNode::emit(CodeBuffer&, PhaseRegAlloc*) const`                          | `<unknown>` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `MethodLiveness::BasicBlock::compute_gen_kill_range(ciBytecodeStream*)`                 | `<unknown>` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `IfTrueNode::Opcode() const`                                                            | `<unknown>` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `Node::uncast(bool) const`                                                              | `<unknown>` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `ConNode::make(Type const*)`                                                            | `<unknown>` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `Compile::identify_useful_nodes(Unique_Node_List&)`                                     | `<unknown>` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseIFG::re_insert(unsigned int)`                                                     | `<unknown>` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `MergeMemNode::Opcode() const`                                                          | `<unknown>` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `addI_reg_immNode::reloc() const`                                                       | `<unknown>` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `AddPNode::bottom_type() const`                                                         | `<unknown>` |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                                                                                                                                                     | Location                                                   |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------- |
| removed |   -23 |   0.5% → 0.0% |    23 → 0 | `grow()`                                                                                                                                                     | `java.util.ArrayList`                                      |
|  -30.0% |   -18 |   1.4% → 0.9% |   60 → 42 | `__psynch_cvsignal`                                                                                                                                          | `<unknown>`                                                |
|  -13.9% |   -14 |   2.3% → 1.9% |  101 → 87 | `collectClusters(int[])`                                                                                                                                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -10.4% |   -12 |   2.6% → 2.3% | 115 → 103 | `doubleValue()`                                                                                                                                              | `java.lang.Double`                                         |
|  -47.8% |   -11 |   0.5% → 0.3% |   23 → 12 | `_platform_bzero`                                                                                                                                            | `<unknown>`                                                |
|  -81.8% |    -9 |  0.3% → <0.1% |    11 → 2 | `void G1ScanEvacuatedObjClosure::do_oop_work<narrowOop>(narrowOop*)`                                                                                         | `<unknown>`                                                |
|   -1.2% |    -7 | 13.7% → 13.0% | 600 → 593 | `__psynch_cvwait`                                                                                                                                            | `<unknown>`                                                |
|  -26.9% |    -7 |   0.6% → 0.4% |   26 → 19 | `checkIndex(int, int)`                                                                                                                                       | `java.util.Objects`                                        |
|  -87.5% |    -7 |  0.2% → <0.1% |     8 → 1 | `void OopOopIterateDispatch<G1AdjustClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>(G1AdjustClosure*, oopDesc*, Klass*)`                          | `<unknown>`                                                |
|  -21.1% |    -4 |   0.4% → 0.3% |   19 → 15 | `semaphore_wait_trap`                                                                                                                                        | `<unknown>`                                                |
| removed |    -4 |   0.1% → 0.0% |     4 → 0 | `createSubtask(int, int)`                                                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |    -3 |   0.1% → 0.0% |     3 → 0 | `void HeapRegion::apply_to_marked_objects<G1FullGCPrepareTask::G1PrepareCompactLiveClosure>(G1CMBitMap*, G1FullGCPrepareTask::G1PrepareCompactLiveClosure*)` | `<unknown>`                                                |
|  -75.0% |    -3 |  0.1% → <0.1% |     4 → 1 | `forEach(BiConsumer)`                                                                                                                                        | `java.util.HashMap`                                        |
|  -75.0% |    -3 |  0.1% → <0.1% |     4 → 1 | `addAll(Collection)`                                                                                                                                         | `java.util.ArrayList`                                      |
|  -75.0% |    -3 |  0.1% → <0.1% |     4 → 1 | `void G1ScanClosureBase::handle_non_cset_obj_common<narrowOop>(G1HeapRegionAttr, narrowOop*, oopDesc*)`                                                      | `<unknown>`                                                |
| removed |    -3 |   0.1% → 0.0% |     3 → 0 | `write`                                                                                                                                                      | `<unknown>`                                                |
| removed |    -3 |   0.1% → 0.0% |     3 → 0 | `combineResults(Object, Object)`                                                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| removed |    -3 |   0.1% → 0.0% |     3 → 0 | `semaphore_signal_trap`                                                                                                                                      | `<unknown>`                                                |
|  -60.0% |    -3 |  0.1% → <0.1% |     5 → 2 | `nextNode()`                                                                                                                                                 | `java.util.HashMap$HashIterator`                           |
|  -50.0% |    -2 |  0.1% → <0.1% |     4 → 2 | `scan(ForkJoinPool$WorkQueue, int, int)`                                                                                                                     | `java.util.concurrent.ForkJoinPool`                        |

##### Ours

|  Change | Delta |            % |  Samples | Function                                         | Location                                                   |
| ------: | ----: | -----------: | -------: | ------------------------------------------------ | ---------------------------------------------------------- |
|  -13.9% |   -14 |  2.3% → 1.9% | 101 → 87 | `collectClusters(int[])`                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |    -4 |  0.1% → 0.0% |    4 → 0 | `createSubtask(int, int)`                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |    -3 |  0.1% → 0.0% |    3 → 0 | `combineResults(Object, Object)`                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -50.0% |    -1 |        <0.1% |    2 → 1 | `compute()`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
| removed |    -1 | <0.1% → 0.0% |    1 → 0 | `computeClusterAverages()`                       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -33.3% |    -1 | 0.1% → <0.1% |    3 → 2 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |    -1 | <0.1% → 0.0% |    1 → 0 | `forkThreshold()`                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -50.0% |    -1 |        <0.1% |    2 → 1 | `createSubtask(int, int)`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| removed |    -1 | <0.1% → 0.0% |    1 → 0 | `<init>(JavaKMeans, List, int, int)`             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

##### Native

|  Change | Delta |             % |   Samples | Function                                                                                                                                                     | Location    |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
|  -30.0% |   -18 |   1.4% → 0.9% |   60 → 42 | `__psynch_cvsignal`                                                                                                                                          | `<unknown>` |
|  -47.8% |   -11 |   0.5% → 0.3% |   23 → 12 | `_platform_bzero`                                                                                                                                            | `<unknown>` |
|  -81.8% |    -9 |  0.3% → <0.1% |    11 → 2 | `void G1ScanEvacuatedObjClosure::do_oop_work<narrowOop>(narrowOop*)`                                                                                         | `<unknown>` |
|   -1.2% |    -7 | 13.7% → 13.0% | 600 → 593 | `__psynch_cvwait`                                                                                                                                            | `<unknown>` |
|  -87.5% |    -7 |  0.2% → <0.1% |     8 → 1 | `void OopOopIterateDispatch<G1AdjustClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>(G1AdjustClosure*, oopDesc*, Klass*)`                          | `<unknown>` |
|  -21.1% |    -4 |   0.4% → 0.3% |   19 → 15 | `semaphore_wait_trap`                                                                                                                                        | `<unknown>` |
| removed |    -3 |   0.1% → 0.0% |     3 → 0 | `void HeapRegion::apply_to_marked_objects<G1FullGCPrepareTask::G1PrepareCompactLiveClosure>(G1CMBitMap*, G1FullGCPrepareTask::G1PrepareCompactLiveClosure*)` | `<unknown>` |
|  -75.0% |    -3 |  0.1% → <0.1% |     4 → 1 | `void G1ScanClosureBase::handle_non_cset_obj_common<narrowOop>(G1HeapRegionAttr, narrowOop*, oopDesc*)`                                                      | `<unknown>` |
| removed |    -3 |   0.1% → 0.0% |     3 → 0 | `write`                                                                                                                                                      | `<unknown>` |
| removed |    -3 |   0.1% → 0.0% |     3 → 0 | `semaphore_signal_trap`                                                                                                                                      | `<unknown>` |
|  -16.7% |    -2 |   0.3% → 0.2% |   12 → 10 | `_platform_memset`                                                                                                                                           | `<unknown>` |
|  -15.4% |    -2 |   0.3% → 0.2% |   13 → 11 | `pthread_jit_write_protect_np`                                                                                                                               | `<unknown>` |
| removed |    -2 |  <0.1% → 0.0% |     2 → 0 | `Unsafe_Unpark(JNIEnv_*, _jobject*, _jobject*)`                                                                                                              | `<unknown>` |
|  -22.2% |    -2 |          0.2% |     9 → 7 | `G1FullGCMarker::mark_object(oopDesc*)`                                                                                                                      | `<unknown>` |
|  -66.7% |    -2 |  0.1% → <0.1% |     3 → 1 | `G1ParScanThreadState::do_partial_array(PartialArrayScanTask)`                                                                                               | `<unknown>` |
| removed |    -2 |  <0.1% → 0.0% |     2 → 0 | `HeapRegion::update_bot_for_block(HeapWordImpl**, HeapWordImpl**)`                                                                                           | `<unknown>` |
| removed |    -2 |  <0.1% → 0.0% |     2 → 0 | `GenericTaskQueueSet<OverflowTaskQueue<ObjArrayTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>::steal_best_of_2(unsigned int, ObjArrayTask&)`                      | `<unknown>` |
|  -66.7% |    -2 |  0.1% → <0.1% |     3 → 1 | `fwd_copy_again`                                                                                                                                             | `<unknown>` |
| removed |    -2 |  <0.1% → 0.0% |     2 → 0 | `CodeCacheUnloadingTask::claim_nmethods(CompiledMethod**, int*)`                                                                                             | `<unknown>` |
| removed |    -2 |  <0.1% → 0.0% |     2 → 0 | `CodeHeap::block_start(void*) const`                                                                                                                         | `<unknown>` |

##### Standard library

|  Change | Delta |            % |   Samples | Function                                                | Location                                       |
| ------: | ----: | -----------: | --------: | ------------------------------------------------------- | ---------------------------------------------- |
| removed |   -23 |  0.5% → 0.0% |    23 → 0 | `grow()`                                                | `java.util.ArrayList`                          |
|  -10.4% |   -12 |  2.6% → 2.3% | 115 → 103 | `doubleValue()`                                         | `java.lang.Double`                             |
|  -26.9% |    -7 |  0.6% → 0.4% |   26 → 19 | `checkIndex(int, int)`                                  | `java.util.Objects`                            |
|  -75.0% |    -3 | 0.1% → <0.1% |     4 → 1 | `forEach(BiConsumer)`                                   | `java.util.HashMap`                            |
|  -75.0% |    -3 | 0.1% → <0.1% |     4 → 1 | `addAll(Collection)`                                    | `java.util.ArrayList`                          |
|  -60.0% |    -3 | 0.1% → <0.1% |     5 → 2 | `nextNode()`                                            | `java.util.HashMap$HashIterator`               |
|  -50.0% |    -2 | 0.1% → <0.1% |     4 → 2 | `scan(ForkJoinPool$WorkQueue, int, int)`                | `java.util.concurrent.ForkJoinPool`            |
|  -66.7% |    -2 | 0.1% → <0.1% |     3 → 1 | `add(Object)`                                           | `java.util.ArrayList`                          |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `fork()`                                                | `java.util.concurrent.ForkJoinTask`            |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `newNode(int, Object, Object, HashMap$Node)`            | `java.util.HashMap`                            |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `<init>(Sink)`                                          | `java.util.stream.Sink$ChainedInt`             |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `doExec()`                                              | `java.util.concurrent.ForkJoinTask`            |
|  -50.0% |    -1 |        <0.1% |     2 → 1 | `join()`                                                | `java.util.concurrent.ForkJoinTask`            |
|  -16.7% |    -1 |         0.1% |     6 → 5 | `runWorker(ForkJoinPool$WorkQueue)`                     | `java.util.concurrent.ForkJoinPool`            |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `get(int)`                                              | `java.util.ArrayList`                          |
|  -14.3% |    -1 |  0.2% → 0.1% |     7 → 6 | `merge(Object, Object, BiFunction)`                     | `java.util.HashMap`                            |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `park(boolean, long)`                                   | `jdk.internal.misc.Unsafe`                     |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `unpark(Thread)`                                        | `java.util.concurrent.locks.LockSupport`       |
|  -33.3% |    -1 | 0.1% → <0.1% |     3 → 2 | `newLength(int, int, int)`                              | `jdk.internal.util.ArraysSupport`              |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `visitMethodInsn(int, String, String, String, boolean)` | `jdk.internal.org.objectweb.asm.MethodVisitor` |

##### JIT

| Change | Delta |           % | Samples | Function      | Location    |
| -----: | ----: | ----------: | ------: | ------------- | ----------- |
|  -3.7% |    -2 | 1.2% → 1.1% | 54 → 52 | `zero_blocks` | `<unknown>` |

##### Compiler

|  Change | Delta |            % | Samples | Function                                                                                            | Location    |
| ------: | ----: | -----------: | ------: | --------------------------------------------------------------------------------------------------- | ----------- |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `MachNode::rematerialize() const`                                                                   | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `ValueStack::values_do(ValueVisitor*)`                                                              | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `MultiNode::is_CFG() const`                                                                         | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `IndexSetIterator::advance_and_next()`                                                              | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `NodeHash::hash_delete(Node const*)`                                                                | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `OopFlow::build_oop_map(Node*, int, PhaseRegAlloc*, int*)`                                          | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseOutput::BuildOopMaps()`                                                                       | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseOutput::Output()`                                                                             | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseCCP::push_cmpu(Unique_Node_List&, Node const*) const`                                         | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `LinearScanWalker::split_for_spilling(Interval*)`                                                   | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `ciMethodData::bci_to_data(int, ciMethod*)`                                                         | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Node::clone() const`                                                                               | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `ciTypeFlow::StateVector::apply_one_bytecode(ciBytecodeStream*)`                                    | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `TypeNarrowOop::cleanup_speculative() const`                                                        | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseIterGVN::transform_old(Node*)`                                                                | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Node::is_CFG() const`                                                                              | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `JVMState::clone_shallow(Compile*) const`                                                           | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Compile::final_graph_reshaping_impl(Node*, Final_Reshape_Counts&, Unique_Node_List&)`              | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Compile::final_graph_reshaping_walk(Node_Stack&, Node*, Final_Reshape_Counts&, Unique_Node_List&)` | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `ciSignature::ciSignature(ciKlass*, constantPoolHandle const&, ciSymbol*)`                          | `<unknown>` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

| Change | Delta |             % |       Samples | Function                                             | Location                                                   |
| -----: | ----: | ------------: | ------------: | ---------------------------------------------------- | ---------------------------------------------------------- |
|  +7.3% |  +257 | 79.7% → 82.5% | 3,503 → 3,760 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
|  +6.0% |  +222 | 84.3% → 86.2% | 3,705 → 3,927 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                        |
|  +5.9% |  +220 | 84.3% → 86.2% | 3,705 → 3,925 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                        |
|  +5.3% |  +203 | 88.0% → 89.3% | 3,865 → 4,068 | `compute()`                                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
|  +5.3% |  +203 | 88.0% → 89.3% | 3,865 → 4,068 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                       |
|  +5.1% |  +199 | 88.6% → 89.8% | 3,891 → 4,090 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                        |
|  +5.1% |  +199 | 88.6% → 89.8% | 3,891 → 4,090 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
|  +5.0% |  +194 | 88.8% → 89.8% | 3,899 → 4,093 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                        |
|  +3.9% |  +163 | 94.5% → 94.7% | 4,150 → 4,313 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                        |
|  +3.9% |  +162 | 94.5% → 94.7% | 4,151 → 4,313 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`                |
|  +7.4% |  +112 | 34.5% → 35.8% | 1,517 → 1,629 | `computeDirectly()`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +6.2% |   +99 | 36.2% → 37.1% | 1,589 → 1,688 | `vectorSum()`                                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +6.2% |   +99 | 36.2% → 37.1% | 1,589 → 1,688 | `computeDirectly()`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +7.8% |   +89 | 26.0% → 27.0% | 1,142 → 1,231 | `findNearestCentroid()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +6.7% |   +46 | 15.5% → 16.0% |     682 → 728 | `average(List)`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  +6.6% |   +45 | 15.6% → 16.1% |     687 → 732 | `computeClusterAverages()`                           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  +6.6% |   +45 | 15.6% → 16.1% |     687 → 732 | `computeDirectly()`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  +5.5% |   +42 | 17.5% → 17.8% |     768 → 810 | `distance(Double[], Double[])`                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +3.8% |   +40 |         24.1% | 1,058 → 1,098 | `accumulate(Double[], double[])`                     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +4.2% |   +39 | 21.2% → 21.3% |     932 → 971 | `invoke()`                                           | `java.util.concurrent.ForkJoinTask`                        |

##### Ours

|  Change | Delta |             % |       Samples | Function                                                                      | Location                                                               |
| ------: | ----: | ------------: | ------------: | ----------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|   +5.3% |  +203 | 88.0% → 89.3% | 3,865 → 4,068 | `compute()`                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|   +7.4% |  +112 | 34.5% → 35.8% | 1,517 → 1,629 | `computeDirectly()`                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   +6.2% |   +99 | 36.2% → 37.1% | 1,589 → 1,688 | `vectorSum()`                                                                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   +6.2% |   +99 | 36.2% → 37.1% | 1,589 → 1,688 | `computeDirectly()`                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   +7.8% |   +89 | 26.0% → 27.0% | 1,142 → 1,231 | `findNearestCentroid()`                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   +6.7% |   +46 | 15.5% → 16.0% |     682 → 728 | `average(List)`                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   +6.6% |   +45 | 15.6% → 16.1% |     687 → 732 | `computeClusterAverages()`                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   +6.6% |   +45 | 15.6% → 16.1% |     687 → 732 | `computeDirectly()`                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   +5.5% |   +42 | 17.5% → 17.8% |     768 → 810 | `distance(Double[], Double[])`                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   +3.8% |   +40 |         24.1% | 1,058 → 1,098 | `accumulate(Double[], double[])`                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   +6.1% |   +23 |   8.5% → 8.7% |     375 → 398 | `collectClusters(int[])`                                                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| +133.3% |    +4 |   0.1% → 0.2% |         3 → 7 | `apply(int)`                                                                  | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011258d8` |
| +400.0% |    +4 |  <0.1% → 0.1% |         1 → 5 | `add(double[], double[])`                                                     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| +400.0% |    +4 |  <0.1% → 0.1% |         1 → 5 | `combineResults(double[], double[])`                                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  +60.0% |    +3 |   0.1% → 0.2% |         5 → 8 | `run(BenchmarkContext)`                                                       | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  +60.0% |    +3 |   0.1% → 0.2% |         5 → 8 | `executeOperation(int)`                                                       | `org.renaissance.harness.ExecutionDriver`                              |
|  +14.3% |    +2 |   0.3% → 0.4% |       14 → 16 | `executeBenchmark()`                                                          | `org.renaissance.harness.ExecutionDriver`                              |
|   +5.3% |    +1 |          0.4% |       19 → 20 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|   +0.5% |    +1 |   4.4% → 4.3% |     193 → 194 | `lambda$merge$6(List, List)`                                                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   +0.5% |    +1 |   4.4% → 4.3% |     193 → 194 | `apply(Object, Object)`                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0` |

##### Native

|  Change | Delta |            % |   Samples | Function                                                                                                                                                                                                                                                            | Location    |
| ------: | ----: | -----------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|     new |   +26 |  0.0% → 0.6% |    0 → 26 | `[tid=26627]`                                                                                                                                                                                                                                                       | `<unknown>` |
|  +25.0% |   +18 |  1.6% → 2.0% |   72 → 90 | `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                   | `<unknown>` |
|     new |   +14 |  0.0% → 0.3% |    0 → 14 | `[tid=40963]`                                                                                                                                                                                                                                                       | `<unknown>` |
| +122.2% |   +11 |  0.2% → 0.4% |    9 → 20 | `G1FullGCMarker::follow_marking_stacks()`                                                                                                                                                                                                                           | `<unknown>` |
|   +5.5% |   +10 |  4.1% → 4.2% | 182 → 192 | `forward_copy_longs`                                                                                                                                                                                                                                                | `<unknown>` |
| +900.0% |    +9 | <0.1% → 0.2% |    1 → 10 | `G1ScanHRForRegionClosure::scan_memregion(unsigned int, MemRegion)`                                                                                                                                                                                                 | `<unknown>` |
| +900.0% |    +9 | <0.1% → 0.2% |    1 → 10 | `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>(G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)&&)` | `<unknown>` |
| +900.0% |    +9 | <0.1% → 0.2% |    1 → 10 | `G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)`                                                                                                                                                                                                            | `<unknown>` |
| +900.0% |    +9 | <0.1% → 0.2% |    1 → 10 | `G1ScanHRForRegionClosure::do_heap_region(HeapRegion*)`                                                                                                                                                                                                             | `<unknown>` |
| +900.0% |    +9 | <0.1% → 0.2% |    1 → 10 | `G1RemSet::scan_heap_roots(G1ParScanThreadState*, unsigned int, G1GCPhaseTimes::GCParPhases, G1GCPhaseTimes::GCParPhases, bool)`                                                                                                                                    | `<unknown>` |
|  +47.1% |    +8 |  0.4% → 0.5% |   17 → 25 | `PlatformMonitor::wait(unsigned long long)`                                                                                                                                                                                                                         | `<unknown>` |
|  +42.1% |    +8 |  0.4% → 0.6% |   19 → 27 | `G1FullGCMarker::complete_marking(GenericTaskQueueSet<OverflowTaskQueue<oopDesc*, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*, GenericTaskQueueSet<OverflowTaskQueue<ObjArrayTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*, TaskTerminator*)`                                 | `<unknown>` |
|  +42.1% |    +8 |  0.4% → 0.6% |   19 → 27 | `G1FullGCMarkTask::work(unsigned int)`                                                                                                                                                                                                                              | `<unknown>` |
|     new |    +8 |  0.0% → 0.2% |     0 → 8 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region(HeapRegion*, bool)`                                                                                                                                                                | `<unknown>` |
|     new |    +8 |  0.0% → 0.2% |     0 → 8 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::do_heap_region(HeapRegion*)`                                                                                                                                                                                    | `<unknown>` |
|     new |    +8 |  0.0% → 0.2% |     0 → 8 | `G1FullGCResetMetadataTask::work(unsigned int)`                                                                                                                                                                                                                     | `<unknown>` |
|  +20.0% |    +7 |  0.8% → 0.9% |   35 → 42 | `arrayof_oop_disjoint_arraycopy`                                                                                                                                                                                                                                    | `<unknown>` |
| +350.0% |    +7 | <0.1% → 0.2% |     2 → 9 | `G1FullGCMarker::publish_and_drain_oop_tasks()`                                                                                                                                                                                                                     | `<unknown>` |
| +116.7% |    +7 |  0.1% → 0.3% |    6 → 13 | `Monitor::wait(unsigned long long)`                                                                                                                                                                                                                                 | `<unknown>` |
|     new |    +6 |  0.0% → 0.1% |     0 → 6 | `G1BatchedTask::work(unsigned int)`                                                                                                                                                                                                                                 | `<unknown>` |

##### Standard library

| Change | Delta |             % |       Samples | Function                                                  | Location                                      |
| -----: | ----: | ------------: | ------------: | --------------------------------------------------------- | --------------------------------------------- |
|  +7.3% |  +257 | 79.7% → 82.5% | 3,503 → 3,760 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  +6.0% |  +222 | 84.3% → 86.2% | 3,705 → 3,927 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`           |
|  +5.9% |  +220 | 84.3% → 86.2% | 3,705 → 3,925 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`           |
|  +5.3% |  +203 | 88.0% → 89.3% | 3,865 → 4,068 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`          |
|  +5.1% |  +199 | 88.6% → 89.8% | 3,891 → 4,090 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`           |
|  +5.1% |  +199 | 88.6% → 89.8% | 3,891 → 4,090 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  +5.0% |  +194 | 88.8% → 89.8% | 3,899 → 4,093 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`           |
|  +3.9% |  +163 | 94.5% → 94.7% | 4,150 → 4,313 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`           |
|  +3.9% |  +162 | 94.5% → 94.7% | 4,151 → 4,313 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`   |
|  +4.2% |   +39 | 21.2% → 21.3% |     932 → 971 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`           |
| +20.8% |   +32 |   3.5% → 4.1% |     154 → 186 | `elementData(int)`                                        | `java.util.ArrayList`                         |
|  +3.0% |   +29 | 22.1% → 21.9% |   971 → 1,000 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
| +13.3% |   +24 |   4.1% → 4.5% |     181 → 205 | `get(int)`                                                | `java.util.ArrayList`                         |
| +11.6% |   +15 |   2.9% → 3.2% |     129 → 144 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                           |
| +26.1% |    +6 |   0.5% → 0.6% |       23 → 29 | `hash(Object)`                                            | `java.util.HashMap`                           |
|  +5.1% |    +5 |   2.2% → 2.3% |      98 → 103 | `add(Object, Object[], int)`                              | `java.util.ArrayList`                         |
|  +3.0% |    +3 |          2.3% |     101 → 104 | `add(Object)`                                             | `java.util.ArrayList`                         |
| +42.9% |    +3 |          0.2% |        7 → 10 | `push(ForkJoinTask, ForkJoinPool, boolean)`               | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  +2.9% |    +2 |          1.6% |       69 → 71 | `<init>(Collection)`                                      | `java.util.ArrayList`                         |
| +66.7% |    +2 |          0.1% |         3 → 5 | `putVal(int, Object, Object, boolean, boolean)`           | `java.util.HashMap`                           |

##### JIT

| Change | Delta |            % | Samples | Function                 | Location    |
| -----: | ----: | -----------: | ------: | ------------------------ | ----------- |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `I2C/C2I adapters(0xbb)` | `<unknown>` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `vtable stub`            | `<unknown>` |

##### Compiler

|  Change | Delta |            % | Samples | Function                                                                                                                                                                                       | Location    |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  +25.0% |   +18 |  1.6% → 2.0% | 72 → 90 | `CompileBroker::compiler_thread_loop()`                                                                                                                                                        | `<unknown>` |
|  +18.5% |   +12 |  1.5% → 1.7% | 65 → 77 | `CompileBroker::invoke_compiler_on_method(CompileTask*)`                                                                                                                                       | `<unknown>` |
|  +55.0% |   +11 |  0.5% → 0.7% | 20 → 31 | `Compile::Code_Gen()`                                                                                                                                                                          | `<unknown>` |
|  +22.0% |   +11 |  1.1% → 1.3% | 50 → 61 | `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                                                                                                                      | `<unknown>` |
|  +20.0% |   +10 |  1.1% → 1.3% | 50 → 60 | `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)`                                                                                                                             | `<unknown>` |
| +116.7% |    +7 |  0.1% → 0.3% |  6 → 13 | `CompileQueue::get(CompilerThread*)`                                                                                                                                                           | `<unknown>` |
| +166.7% |    +5 |  0.1% → 0.2% |   3 → 8 | `PhaseOutput::Output()`                                                                                                                                                                        | `<unknown>` |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `PhaseOutput::fill_buffer(CodeBuffer*, unsigned int*)`                                                                                                                                         | `<unknown>` |
|  +33.3% |    +3 |  0.2% → 0.3% |  9 → 12 | `PhaseChaitin::Register_Allocate()`                                                                                                                                                            | `<unknown>` |
| +150.0% |    +3 | <0.1% → 0.1% |   2 → 5 | `PhaseCFG::global_code_motion()`                                                                                                                                                               | `<unknown>` |
| +150.0% |    +3 | <0.1% → 0.1% |   2 → 5 | `PhaseCFG::do_global_code_motion()`                                                                                                                                                            | `<unknown>` |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `BlockListBuilder::BlockListBuilder(Compilation*, IRScope*, int)`                                                                                                                              | `<unknown>` |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `TypeFunc::make(ciMethod*)`                                                                                                                                                                    | `<unknown>` |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `ciEnv::register_method(ciMethod*, int, CodeOffsets*, int, CodeBuffer*, int, OopMapSet*, ExceptionHandlerTable*, ImplicitExceptionTable*, AbstractCompiler*, bool, bool, bool, int, RTMState)` | `<unknown>` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `PhaseRemoveUseless::PhaseRemoveUseless(PhaseGVN*, Unique_Node_List&, Phase::PhaseNumber)`                                                                                                     | `<unknown>` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `PhaseOutput::scratch_emit_size(Node const*)`                                                                                                                                                  | `<unknown>` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `PhaseOutput::shorten_branches(unsigned int*)`                                                                                                                                                 | `<unknown>` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `PhaseCFG::schedule_late(VectorSet&, Node_Stack&)`                                                                                                                                             | `<unknown>` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `GraphKit::record_profiled_arguments_for_speculation(ciMethod*, Bytecodes::Code)`                                                                                                              | `<unknown>` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `PhaseChaitin::Simplify()`                                                                                                                                                                     | `<unknown>` |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |             % |   Samples | Function                                                                            | Location                                    |
| ------: | ----: | ------------: | --------: | ----------------------------------------------------------------------------------- | ------------------------------------------- |
|  -12.2% |   -30 |   5.6% → 4.7% | 245 → 215 | `awaitWork(ForkJoinPool$WorkQueue)`                                                 | `java.util.concurrent.ForkJoinPool`         |
|  -34.3% |   -23 |   1.5% → 1.0% |   67 → 44 | `Unsafe_Unpark(JNIEnv_*, _jobject*, _jobject*)`                                     | `<unknown>`                                 |
|  -29.3% |   -22 |   1.7% → 1.2% |   75 → 53 | `grow()`                                                                            | `java.util.ArrayList`                       |
|  -32.8% |   -22 |   1.5% → 1.0% |   67 → 45 | `unpark(Thread)`                                                                    | `java.util.concurrent.locks.LockSupport`    |
|  -31.8% |   -21 |   1.5% → 1.0% |   66 → 45 | `unpark(Object)`                                                                    | `jdk.internal.misc.Unsafe`                  |
|  -18.7% |   -20 |   2.4% → 1.9% |  107 → 87 | `WorkerThread::run()`                                                               | `<unknown>`                                 |
|  -46.5% |   -20 |   1.0% → 0.5% |   43 → 23 | `G1EvacuateRegionsBaseTask::work(unsigned int)`                                     | `<unknown>`                                 |
|   -3.2% |   -19 | 13.4% → 12.5% | 590 → 571 | `Parker::park(bool, long)`                                                          | `<unknown>`                                 |
|   -3.2% |   -19 | 13.7% → 12.8% | 600 → 581 | `Unsafe_Park(JNIEnv_*, _jobject*, unsigned char, long)`                             | `<unknown>`                                 |
|   -3.2% |   -19 | 13.7% → 12.8% | 602 → 583 | `park(boolean, long)`                                                               | `jdk.internal.misc.Unsafe`                  |
|  -40.9% |   -18 |   1.0% → 0.6% |   44 → 26 | `MemAllocator::allocate() const`                                                    | `<unknown>`                                 |
|  -40.9% |   -18 |   1.0% → 0.6% |   44 → 26 | `OptoRuntime::new_array_C(Klass*, int, JavaThread*)`                                | `<unknown>`                                 |
|  -30.0% |   -18 |   1.4% → 0.9% |   60 → 42 | `__psynch_cvsignal`                                                                 | `<unknown>`                                 |
|  -58.1% |   -18 |   0.7% → 0.3% |   31 → 13 | `G1ParEvacuateFollowersClosure::do_void()`                                          | `<unknown>`                                 |
|  -58.1% |   -18 |   0.7% → 0.3% |   31 → 13 | `G1EvacuateRegionsTask::evacuate_live_objects(G1ParScanThreadState*, unsigned int)` | `<unknown>`                                 |
|  -39.5% |   -17 |   1.0% → 0.6% |   43 → 26 | `CollectedHeap::array_allocate(Klass*, unsigned long, int, bool, JavaThread*)`      | `<unknown>`                                 |
|  -37.8% |   -17 |   1.0% → 0.6% |   45 → 28 | `_new_array_Java`                                                                   | `<unknown>`                                 |
|  -38.1% |   -16 |   1.0% → 0.6% |   42 → 26 | `InstanceKlass::allocate_objArray(int, int, JavaThread*)`                           | `<unknown>`                                 |
| removed |   -16 |   0.4% → 0.0% |    16 → 0 | `[tid=28419]`                                                                       | `<unknown>`                                 |
|   -4.9% |   -15 |   7.0% → 6.4% | 306 → 291 | `merge(Map, Map)`                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### Ours

| Change | Delta |            % |   Samples | Function                                                                                     | Location                                                               |
| -----: | ----: | -----------: | --------: | -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|  -4.9% |   -15 |  7.0% → 6.4% | 306 → 291 | `merge(Map, Map)`                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -4.9% |   -15 |  6.9% → 6.3% | 304 → 289 | `combineResults(Map, Map)`                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -4.6% |   -14 |  6.9% → 6.4% | 305 → 291 | `combineResults(Object, Object)`                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -3.8% |   -11 |  6.6% → 6.1% | 288 → 277 | `lambda$merge$7(Map, Object, List)`                                                          | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -3.8% |   -11 |  6.6% → 6.1% | 288 → 277 | `accept(Object, Object)`                                                                     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88` |
| -66.7% |    -6 |  0.2% → 0.1% |     9 → 3 | `apply(int)`                                                                                 | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001125b10` |
| -80.0% |    -4 | 0.1% → <0.1% |     5 → 1 | `createSubtask(int, int)`                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| -22.2% |    -2 |         0.2% |     9 → 7 | `lambda$generateData$5(int, int, Random[], int)`                                             | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| -50.0% |    -2 | 0.1% → <0.1% |     4 → 2 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver`                              |
| -66.7% |    -2 | 0.1% → <0.1% |     3 → 1 | `createSubtask(int, int)`                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| -11.1% |    -1 |         0.2% |     9 → 8 | `generateData(int, int, int)`                                                                | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| -11.1% |    -1 |         0.2% |     9 → 8 | `setUpBeforeAll(BenchmarkContext)`                                                           | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  -3.1% |    -1 |         0.7% |   32 → 31 | `main(String[])`                                                                             | `org.renaissance.harness.RenaissanceSuite$`                            |
|  -2.9% |    -1 |  0.8% → 0.7% |   34 → 33 | `main(String[])`                                                                             | `org.renaissance.harness.RenaissanceSuite`                             |
|  -2.6% |    -1 |  0.9% → 0.8% |   38 → 37 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                  | `org.renaissance.core.Launcher`                                        |
|  -2.5% |    -1 |         0.9% |   40 → 39 | `launchHarnessClass(String, String[])`                                                       | `org.renaissance.core.Launcher`                                        |
|  -2.5% |    -1 |         0.9% |   40 → 39 | `main(String[])`                                                                             | `org.renaissance.core.Launcher`                                        |
| -33.3% |    -1 | 0.1% → <0.1% |     3 → 2 | `createParser(Map)`                                                                          | `org.renaissance.harness.ConfigParser`                                 |
| -33.3% |    -1 | 0.1% → <0.1% |     3 → 2 | `<init>(Map)`                                                                                | `org.renaissance.harness.ConfigParser`                                 |
| -14.3% |    -1 |  0.2% → 0.1% |     7 → 6 | `extractResource(String, Path)`                                                              | `org.renaissance.core.ResourceUtils`                                   |

##### Native

|  Change | Delta |             % |   Samples | Function                                                                                           | Location    |
| ------: | ----: | ------------: | --------: | -------------------------------------------------------------------------------------------------- | ----------- |
|  -34.3% |   -23 |   1.5% → 1.0% |   67 → 44 | `Unsafe_Unpark(JNIEnv_*, _jobject*, _jobject*)`                                                    | `<unknown>` |
|  -18.7% |   -20 |   2.4% → 1.9% |  107 → 87 | `WorkerThread::run()`                                                                              | `<unknown>` |
|  -46.5% |   -20 |   1.0% → 0.5% |   43 → 23 | `G1EvacuateRegionsBaseTask::work(unsigned int)`                                                    | `<unknown>` |
|   -3.2% |   -19 | 13.4% → 12.5% | 590 → 571 | `Parker::park(bool, long)`                                                                         | `<unknown>` |
|   -3.2% |   -19 | 13.7% → 12.8% | 600 → 581 | `Unsafe_Park(JNIEnv_*, _jobject*, unsigned char, long)`                                            | `<unknown>` |
|  -40.9% |   -18 |   1.0% → 0.6% |   44 → 26 | `MemAllocator::allocate() const`                                                                   | `<unknown>` |
|  -40.9% |   -18 |   1.0% → 0.6% |   44 → 26 | `OptoRuntime::new_array_C(Klass*, int, JavaThread*)`                                               | `<unknown>` |
|  -30.0% |   -18 |   1.4% → 0.9% |   60 → 42 | `__psynch_cvsignal`                                                                                | `<unknown>` |
|  -58.1% |   -18 |   0.7% → 0.3% |   31 → 13 | `G1ParEvacuateFollowersClosure::do_void()`                                                         | `<unknown>` |
|  -58.1% |   -18 |   0.7% → 0.3% |   31 → 13 | `G1EvacuateRegionsTask::evacuate_live_objects(G1ParScanThreadState*, unsigned int)`                | `<unknown>` |
|  -39.5% |   -17 |   1.0% → 0.6% |   43 → 26 | `CollectedHeap::array_allocate(Klass*, unsigned long, int, bool, JavaThread*)`                     | `<unknown>` |
|  -37.8% |   -17 |   1.0% → 0.6% |   45 → 28 | `_new_array_Java`                                                                                  | `<unknown>` |
|  -38.1% |   -16 |   1.0% → 0.6% |   42 → 26 | `InstanceKlass::allocate_objArray(int, int, JavaThread*)`                                          | `<unknown>` |
| removed |   -16 |   0.4% → 0.0% |    16 → 0 | `[tid=28419]`                                                                                      | `<unknown>` |
| removed |   -12 |   0.3% → 0.0% |    12 → 0 | `[tid=34563]`                                                                                      | `<unknown>` |
|  -47.8% |   -11 |   0.5% → 0.3% |   23 → 12 | `_platform_bzero`                                                                                  | `<unknown>` |
|  -76.9% |   -10 |   0.3% → 0.1% |    13 → 3 | `G1ParScanThreadState::do_partial_array(PartialArrayScanTask)`                                     | `<unknown>` |
| removed |    -9 |   0.2% → 0.0% |     9 → 0 | `G1RootProcessor::evacuate_roots(G1ParScanThreadState*, unsigned int)`                             | `<unknown>` |
|  -81.8% |    -9 |  0.3% → <0.1% |    11 → 2 | `void G1ScanEvacuatedObjClosure::do_oop_work<narrowOop>(narrowOop*)`                               | `<unknown>` |
|  -57.1% |    -8 |   0.3% → 0.1% |    14 → 6 | `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>(G1CMBitMap*, G1AdjustLiveClosure*)` | `<unknown>` |

##### Standard library

|  Change | Delta |             % |   Samples | Function                                     | Location                                     |
| ------: | ----: | ------------: | --------: | -------------------------------------------- | -------------------------------------------- |
|  -12.2% |   -30 |   5.6% → 4.7% | 245 → 215 | `awaitWork(ForkJoinPool$WorkQueue)`          | `java.util.concurrent.ForkJoinPool`          |
|  -29.3% |   -22 |   1.7% → 1.2% |   75 → 53 | `grow()`                                     | `java.util.ArrayList`                        |
|  -32.8% |   -22 |   1.5% → 1.0% |   67 → 45 | `unpark(Thread)`                             | `java.util.concurrent.locks.LockSupport`     |
|  -31.8% |   -21 |   1.5% → 1.0% |   66 → 45 | `unpark(Object)`                             | `jdk.internal.misc.Unsafe`                   |
|   -3.2% |   -19 | 13.7% → 12.8% | 602 → 583 | `park(boolean, long)`                        | `jdk.internal.misc.Unsafe`                   |
|   -4.8% |   -14 |   6.6% → 6.1% | 292 → 278 | `forEach(BiConsumer)`                        | `java.util.HashMap`                          |
|   -8.1% |   -13 |   3.6% → 3.2% | 160 → 147 | `copyOf(Object[], int)`                      | `java.util.Arrays`                           |
|   -4.2% |   -12 |   6.6% → 6.1% | 288 → 276 | `merge(Object, Object, BiFunction)`          | `java.util.HashMap`                          |
|  -10.4% |   -12 |   2.6% → 2.3% | 115 → 103 | `doubleValue()`                              | `java.lang.Double`                           |
|  -62.5% |   -10 |   0.4% → 0.1% |    16 → 6 | `parkUntil(long)`                            | `java.util.concurrent.locks.LockSupport`     |
|  -58.8% |   -10 |   0.4% → 0.2% |    17 → 7 | `tryCompensate(long, boolean)`               | `java.util.concurrent.ForkJoinPool`          |
|   -1.5% |    -9 | 13.3% → 12.7% | 586 → 577 | `park()`                                     | `java.util.concurrent.locks.LockSupport`     |
|  -18.2% |    -8 |   1.0% → 0.8% |   44 → 36 | `setDone()`                                  | `java.util.concurrent.ForkJoinTask`          |
|  -15.9% |    -7 |   1.0% → 0.8% |   44 → 37 | `signalWaiters()`                            | `java.util.concurrent.ForkJoinTask`          |
|  -26.9% |    -7 |   0.6% → 0.4% |   26 → 19 | `checkIndex(int, int)`                       | `java.util.Objects`                          |
|   -8.2% |    -6 |   1.7% → 1.5% |   73 → 67 | `grow(int)`                                  | `java.util.ArrayList`                        |
|  -30.0% |    -3 |          0.2% |    10 → 7 | `toArray(IntFunction)`                       | `java.util.stream.ReferencePipeline`         |
| removed |    -3 |   0.1% → 0.0% |     3 → 0 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap`                          |
|  -75.0% |    -3 |  0.1% → <0.1% |     4 → 1 | `getResource(String, boolean)`               | `jdk.internal.loader.URLClassPath$JarLoader` |
|  -60.0% |    -3 |  0.1% → <0.1% |     5 → 2 | `nextNode()`                                 | `java.util.HashMap$HashIterator`             |

##### JIT

| Change | Delta |           % | Samples | Function      | Location    |
| -----: | ----: | ----------: | ------: | ------------- | ----------- |
|  -3.7% |    -2 | 1.2% → 1.1% | 54 → 52 | `zero_blocks` | `<unknown>` |

##### Compiler

|  Change | Delta |            % | Samples | Function                                                                                                                          | Location    |
| ------: | ----: | -----------: | ------: | --------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  -50.0% |    -6 |  0.3% → 0.1% |  12 → 6 | `PhaseIdealLoop::build_and_optimize()`                                                                                            | `<unknown>` |
|  -50.0% |    -6 |  0.3% → 0.1% |  12 → 6 | `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)`                                                                     | `<unknown>` |
|  -21.7% |    -5 |  0.5% → 0.4% | 23 → 18 | `Compile::Optimize()`                                                                                                             | `<unknown>` |
|  -35.7% |    -5 |  0.3% → 0.2% |  14 → 9 | `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)`                                                                           | `<unknown>` |
|  -66.7% |    -4 | 0.1% → <0.1% |   6 → 2 | `CompilationPolicy::event(methodHandle const&, methodHandle const&, int, int, CompLevel, CompiledMethod*, JavaThread*)`           | `<unknown>` |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `GraphBuilder::invoke(Bytecodes::Code)`                                                                                           | `<unknown>` |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `GraphBuilder::iterate_bytecodes_for_block(int)`                                                                                  | `<unknown>` |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `GraphBuilder::iterate_all_blocks(bool)`                                                                                          | `<unknown>` |
|  -75.0% |    -3 | 0.1% → <0.1% |   4 → 1 | `CompileBroker::compile_method(methodHandle const&, int, int, methodHandle const&, int, CompileTask::CompileReason, JavaThread*)` | `<unknown>` |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)`                                                                          | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `GraphBuilder::try_inline_full(ciMethod*, bool, bool, Bytecodes::Code, Instruction*)`                                             | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `GraphBuilder::try_inline(ciMethod*, bool, bool, Bytecodes::Code, Instruction*)`                                                  | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `MachNode::rematerialize() const`                                                                                                 | `<unknown>` |
|  -50.0% |    -2 | 0.1% → <0.1% |   4 → 2 | `PhaseChaitin::Split(unsigned int, ResourceArea*)`                                                                                | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `ValueStack::values_do(ValueVisitor*)`                                                                                            | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `BlockList::iterate_backward(BlockClosure*)`                                                                                      | `<unknown>` |
|  -40.0% |    -2 |         0.1% |   5 → 3 | `Matcher::xform(Node*, int)`                                                                                                      | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `PhaseOutput::BuildOopMaps()`                                                                                                     | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `Node::clone() const`                                                                                                             | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `PhaseIdealLoop::split_if_with_blocks_pre(Node*)`                                                                                 | `<unknown>` |

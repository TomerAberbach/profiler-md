# Sampling profile diff

Collected 8,675 samples → 4,649 samples (-4,026 samples, -46.4%).

| Category         | Change |  Delta |             % |       Samples |
| ---------------- | -----: | -----: | ------------: | ------------: |
| Ours             | -42.6% | -1,797 | 48.6% → 52.0% | 4,215 → 2,418 |
| Native           | -56.8% | -1,860 | 37.8% → 30.5% | 3,276 → 1,416 |
| Standard library | -28.3% |   -279 | 11.4% → 15.2% |     986 → 707 |
| Compiler         | -28.6% |    -22 |   0.9% → 1.2% |       77 → 55 |
| JIT              | -57.0% |    -69 |   1.4% → 1.1% |      121 → 52 |
| Unknown          |    new |     +1 |  0.0% → <0.1% |         0 → 1 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |            % |  Samples | Function                                                                                                                                                     | Location                                                   |
| ------: | ----: | -----------: | -------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------- |
|  +72.1% |   +62 |  1.0% → 3.2% | 86 → 148 | `doubleValue()`                                                                                                                                              | `java.lang.Double`                                         |
|  +58.8% |   +10 |  0.2% → 0.6% |  17 → 27 | `pthread_jit_write_protect_np`                                                                                                                               | `<unknown>`                                                |
| +120.0% |    +6 |  0.1% → 0.2% |   5 → 11 | `void HeapRegion::apply_to_marked_objects<G1FullGCPrepareTask::G1PrepareCompactLiveClosure>(G1CMBitMap*, G1FullGCPrepareTask::G1PrepareCompactLiveClosure*)` | `<unknown>`                                                |
|  +37.5% |    +6 |  0.2% → 0.5% |  16 → 22 | `G1FullGCMarker::mark_object(oopDesc*)`                                                                                                                      | `<unknown>`                                                |
|  +45.5% |    +5 |  0.1% → 0.3% |  11 → 16 | `_platform_memset`                                                                                                                                           | `<unknown>`                                                |
|     new |    +5 |  0.0% → 0.1% |    0 → 5 | `vtable stub`                                                                                                                                                | `<unknown>`                                                |
|     new |    +4 |  0.0% → 0.1% |    0 → 4 | `join()`                                                                                                                                                     | `java.util.concurrent.ForkJoinTask`                        |
| +400.0% |    +4 | <0.1% → 0.1% |    1 → 5 | `void G1ScanEvacuatedObjClosure::do_oop_work<narrowOop>(narrowOop*)`                                                                                         | `<unknown>`                                                |
| +200.0% |    +4 | <0.1% → 0.1% |    2 → 6 | `lambda$collectClusters$0(Double[])`                                                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|     new |    +3 |  0.0% → 0.1% |    0 → 3 | `lambda$run$0(int, List, int)`                                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| +150.0% |    +3 | <0.1% → 0.1% |    2 → 5 | `G1FullGCMarker::publish_and_drain_oop_tasks()`                                                                                                              | `<unknown>`                                                |
| +100.0% |    +2 | <0.1% → 0.1% |    2 → 4 | `combineResults(Object, Object)`                                                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +200.0% |    +2 | <0.1% → 0.1% |    1 → 3 | `createSubtask(int, int)`                                                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +66.7% |    +2 | <0.1% → 0.1% |    3 → 5 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>(G1MarkAndPushClosure*, int, int)`                                                             | `<unknown>`                                                |
|     new |    +2 | 0.0% → <0.1% |    0 → 2 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)`                                                                                       | `<unknown>`                                                |
| +200.0% |    +2 | <0.1% → 0.1% |    1 → 3 | `I2C/C2I adapters(0xba)`                                                                                                                                     | `<unknown>`                                                |
|     new |    +2 | 0.0% → <0.1% |    0 → 2 | `boxed()`                                                                                                                                                    | `java.util.stream.DoublePipeline`                          |
|     new |    +2 | 0.0% → <0.1% |    0 → 2 | `JavaThreadParkedState::JavaThreadParkedState(JavaThread*, bool)`                                                                                            | `<unknown>`                                                |
|     new |    +2 | 0.0% → <0.1% |    0 → 2 | `getAndBitwiseOrInt(Object, long, int)`                                                                                                                      | `jdk.internal.misc.Unsafe`                                 |
|     new |    +2 | 0.0% → <0.1% |    0 → 2 | `G1BlockOffsetTablePart::update_for_block_work(HeapWordImpl**, HeapWordImpl**)`                                                                              | `<unknown>`                                                |

##### Ours

|  Change | Delta |            % | Samples | Function                             | Location                                                   |
| ------: | ----: | -----------: | ------: | ------------------------------------ | ---------------------------------------------------------- |
| +200.0% |    +4 | <0.1% → 0.1% |   2 → 6 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `lambda$run$0(int, List, int)`       | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| +100.0% |    +2 | <0.1% → 0.1% |   2 → 4 | `combineResults(Object, Object)`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `add(double[], double[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `computeDirectly()`                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +100.0% |    +1 |        <0.1% |   1 → 2 | `computeClusterAverages()`           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `lambda$merge$6(List, List)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |

##### Native

|  Change | Delta |            % | Samples | Function                                                                                                                                                     | Location    |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
|  +58.8% |   +10 |  0.2% → 0.6% | 17 → 27 | `pthread_jit_write_protect_np`                                                                                                                               | `<unknown>` |
| +120.0% |    +6 |  0.1% → 0.2% |  5 → 11 | `void HeapRegion::apply_to_marked_objects<G1FullGCPrepareTask::G1PrepareCompactLiveClosure>(G1CMBitMap*, G1FullGCPrepareTask::G1PrepareCompactLiveClosure*)` | `<unknown>` |
|  +37.5% |    +6 |  0.2% → 0.5% | 16 → 22 | `G1FullGCMarker::mark_object(oopDesc*)`                                                                                                                      | `<unknown>` |
|  +45.5% |    +5 |  0.1% → 0.3% | 11 → 16 | `_platform_memset`                                                                                                                                           | `<unknown>` |
| +400.0% |    +4 | <0.1% → 0.1% |   1 → 5 | `void G1ScanEvacuatedObjClosure::do_oop_work<narrowOop>(narrowOop*)`                                                                                         | `<unknown>` |
| +150.0% |    +3 | <0.1% → 0.1% |   2 → 5 | `G1FullGCMarker::publish_and_drain_oop_tasks()`                                                                                                              | `<unknown>` |
|  +66.7% |    +2 | <0.1% → 0.1% |   3 → 5 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>(G1MarkAndPushClosure*, int, int)`                                                             | `<unknown>` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `JavaThreadParkedState::JavaThreadParkedState(JavaThread*, bool)`                                                                                            | `<unknown>` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `G1BlockOffsetTablePart::update_for_block_work(HeapWordImpl**, HeapWordImpl**)`                                                                              | `<unknown>` |
| +100.0% |    +1 |        <0.1% |   1 → 2 | `Unsafe_Park(JNIEnv_*, _jobject*, unsigned char, long)`                                                                                                      | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `OptoRuntime::new_array_C(Klass*, int, JavaThread*)`                                                                                                         | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `Mutex::lock(Thread*)`                                                                                                                                       | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `G1ConcurrentRefineThread::run_service()`                                                                                                                    | `<unknown>` |
| +100.0% |    +1 |        <0.1% |   1 → 2 | `HeapRegionManager::par_iterate(HeapRegionClosure*, HeapRegionClaimer*, unsigned int) const`                                                                 | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `G1ParScanThreadState::do_partial_array(PartialArrayScanTask)`                                                                                               | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `void OopMapDo<OopClosure, DerivedOopClosure, SkipNullValue>::iterate_oops_do<RegisterMap>(frame const*, RegisterMap const*, ImmutableOopMap const*)`        | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `ClassVerifier::verify_method(methodHandle const&, JavaThread*)`                                                                                             | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `ClassFileParser::parse_constant_pool(ClassFileStream const*, ConstantPool*, int, JavaThread*)`                                                              | `<unknown>` |
| +100.0% |    +1 |        <0.1% |   1 → 2 | `SignatureStream::next()`                                                                                                                                    | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `CompilerOracle::should_inline(methodHandle const&)`                                                                                                         | `<unknown>` |

##### Standard library

|  Change | Delta |            % |  Samples | Function                                                           | Location                                      |
| ------: | ----: | -----------: | -------: | ------------------------------------------------------------------ | --------------------------------------------- |
|  +72.1% |   +62 |  1.0% → 3.2% | 86 → 148 | `doubleValue()`                                                    | `java.lang.Double`                            |
|     new |    +4 |  0.0% → 0.1% |    0 → 4 | `join()`                                                           | `java.util.concurrent.ForkJoinTask`           |
|     new |    +2 | 0.0% → <0.1% |    0 → 2 | `boxed()`                                                          | `java.util.stream.DoublePipeline`             |
|     new |    +2 | 0.0% → <0.1% |    0 → 2 | `getAndBitwiseOrInt(Object, long, int)`                            | `jdk.internal.misc.Unsafe`                    |
|     new |    +2 | 0.0% → <0.1% |    0 → 2 | `compareAndSet(long, long)`                                        | `java.util.concurrent.atomic.AtomicLong`      |
|  +25.0% |    +1 | <0.1% → 0.1% |    4 → 5 | `doExec()`                                                         | `java.util.concurrent.ForkJoinTask`           |
|  +20.0% |    +1 |         0.1% |    5 → 6 | `awaitDone(int, long)`                                             | `java.util.concurrent.ForkJoinTask`           |
|     new |    +1 | 0.0% → <0.1% |    0 → 1 | `signalWaiters()`                                                  | `java.util.concurrent.ForkJoinTask`           |
|     new |    +1 | 0.0% → <0.1% |    0 → 1 | `setDone()`                                                        | `java.util.concurrent.ForkJoinTask`           |
|     new |    +1 | 0.0% → <0.1% |    0 → 1 | `executePrivileged(PrivilegedAction, AccessControlContext, Class)` | `java.security.AccessController`              |
|     new |    +1 | 0.0% → <0.1% |    0 → 1 | `toArray(IntFunction)`                                             | `java.util.stream.ReferencePipeline`          |
|  +50.0% |    +1 | <0.1% → 0.1% |    2 → 3 | `putVal(int, Object, Object, boolean, boolean)`                    | `java.util.HashMap`                           |
|     new |    +1 | 0.0% → <0.1% |    0 → 1 | `toArray()`                                                        | `java.util.HashMap$KeySet`                    |
| +100.0% |    +1 |        <0.1% |    1 → 2 | `nextNode()`                                                       | `java.util.HashMap$HashIterator`              |
|     new |    +1 | 0.0% → <0.1% |    0 → 1 | `keySet()`                                                         | `java.util.HashMap`                           |
|     new |    +1 | 0.0% → <0.1% |    0 → 1 | `ensureInitialization()`                                           | `java.util.jar.JarFile`                       |
|     new |    +1 | 0.0% → <0.1% |    0 → 1 | `<init>(int)`                                                      | `sun.net.www.MessageHeader`                   |
|     new |    +1 | 0.0% → <0.1% |    0 → 1 | `isKnown(int)`                                                     | `java.util.stream.StreamOpFlag`               |
|     new |    +1 | 0.0% → <0.1% |    0 → 1 | `readLine()`                                                       | `java.util.Properties$LineReader`             |
|     new |    +1 | 0.0% → <0.1% |    0 → 1 | `visitFieldInsn(int, String, String, String)`                      | `jdk.internal.org.objectweb.asm.MethodWriter` |

##### JIT

|  Change | Delta |            % | Samples | Function                 | Location    |
| ------: | ----: | -----------: | ------: | ------------------------ | ----------- |
|     new |    +5 |  0.0% → 0.1% |   0 → 5 | `vtable stub`            | `<unknown>` |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `I2C/C2I adapters(0xba)` | `<unknown>` |

##### Compiler

|  Change | Delta |            % | Samples | Function                                                                                           | Location    |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------------- | ----------- |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)`                             | `<unknown>` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)`                       | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `ciTypeFlow::StateVector::apply_one_bytecode(ciBytecodeStream*)`                                   | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `Matcher::xform(Node*, int)`                                                                       | `<unknown>` |
| +100.0% |    +1 |        <0.1% |   1 → 2 | `Node_Backward_Iterator::next()`                                                                   | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `BlockListBuilder::set_leaders()`                                                                  | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseOutput::Output()`                                                                            | `<unknown>` |
| +100.0% |    +1 |        <0.1% |   1 → 2 | `Compile::identify_useful_nodes(Unique_Node_List&)`                                                | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseGVN::transform_no_reclaim(Node*)`                                                            | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseChaitin::gather_lrg_masks(bool)`                                                             | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `RegMask::is_bound(unsigned int) const`                                                            | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `MachNode::adr_type() const`                                                                       | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseCFG::schedule_late(VectorSet&, Node_Stack&)`                                                 | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `Scheduling::ComputeUseCount(Block const*)`                                                        | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `CheckCastPPNode::Opcode() const`                                                                  | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `MachSafePointNode::in_RegMask(unsigned int) const`                                                | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `Assembler::wrap_label(Register, int, Label&, void (Assembler::*)(Register, int, unsigned char*))` | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `ciMethodBlocks::do_analysis()`                                                                    | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseConservativeCoalesce::coalesce(Block*)`                                                      | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `TypeNode::ideal_reg() const`                                                                      | `<unknown>` |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change |  Delta |             % |     Samples | Function                                                                                | Location                                                   |
| ------: | -----: | ------------: | ----------: | --------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
|  -65.6% | -1,608 | 28.3% → 18.2% | 2,452 → 844 | `__psynch_cvwait`                                                                       | `<unknown>`                                                |
|  -45.9% |   -702 | 17.6% → 17.8% | 1,531 → 829 | `accumulate(Double[], double[])`                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -39.6% |   -391 | 11.4% → 12.8% |   988 → 597 | `distance(Double[], Double[])`                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -38.8% |   -301 |  8.9% → 10.2% |   775 → 474 | `findNearestCentroid()`                                                                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -44.1% |   -298 |   7.8% → 8.1% |   676 → 378 | `vectorSum()`                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -41.3% |    -97 |   2.7% → 3.0% |   235 → 138 | `elementData(int)`                                                                      | `java.util.ArrayList`                                      |
|  -45.0% |    -90 |   2.3% → 2.4% |   200 → 110 | `collectClusters(int[])`                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -39.5% |    -88 |   2.6% → 2.9% |   223 → 135 | `computeIfAbsent(Object, Function)`                                                     | `java.util.HashMap`                                        |
|  -62.7% |    -74 |   1.4% → 0.9% |    118 → 44 | `zero_blocks`                                                                           | `<unknown>`                                                |
|  -55.4% |    -67 |   1.4% → 1.2% |    121 → 54 | `grow(int)`                                                                             | `java.util.ArrayList`                                      |
|  -75.9% |    -60 |   0.9% → 0.4% |     79 → 19 | `semaphore_wait_trap`                                                                   | `<unknown>`                                                |
|  -20.5% |    -59 |   3.3% → 4.9% |   288 → 229 | `forward_copy_longs`                                                                    | `<unknown>`                                                |
|  -59.0% |    -23 |   0.4% → 0.3% |     39 → 16 | `hash(Object)`                                                                          | `java.util.HashMap`                                        |
|  -62.2% |    -23 |   0.4% → 0.3% |     37 → 14 | `__psynch_mutexwait`                                                                    | `<unknown>`                                                |
|  -44.4% |    -20 |          0.5% |     45 → 25 | `checkIndex(int, int)`                                                                  | `java.util.Objects`                                        |
|  -37.5% |    -12 |          0.4% |     32 → 20 | `_platform_bzero`                                                                       | `<unknown>`                                                |
|  -20.4% |    -11 |   0.6% → 0.9% |     54 → 43 | `add(Object, Object[], int)`                                                            | `java.util.ArrayList`                                      |
| removed |     -9 |   0.1% → 0.0% |       9 → 0 | `swtch_pri`                                                                             | `<unknown>`                                                |
| removed |     -9 |   0.1% → 0.0% |       9 → 0 | `createSubtask(int, int)`                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -50.0% |     -9 |          0.2% |      18 → 9 | `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)` | `<unknown>`                                                |

##### Ours

|  Change | Delta |             % |     Samples | Function                                         | Location                                                               |
| ------: | ----: | ------------: | ----------: | ------------------------------------------------ | ---------------------------------------------------------------------- |
|  -45.9% |  -702 | 17.6% → 17.8% | 1,531 → 829 | `accumulate(Double[], double[])`                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -39.6% |  -391 | 11.4% → 12.8% |   988 → 597 | `distance(Double[], Double[])`                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -38.8% |  -301 |  8.9% → 10.2% |   775 → 474 | `findNearestCentroid()`                          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -44.1% |  -298 |   7.8% → 8.1% |   676 → 378 | `vectorSum()`                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -45.0% |   -90 |   2.3% → 2.4% |   200 → 110 | `collectClusters(int[])`                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| removed |    -9 |   0.1% → 0.0% |       9 → 0 | `createSubtask(int, int)`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -75.0% |    -6 |  0.1% → <0.1% |       8 → 2 | `computeDirectly()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -83.3% |    -5 |  0.1% → <0.1% |       6 → 1 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -60.0% |    -3 |  0.1% → <0.1% |       5 → 2 | `compute()`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| removed |    -2 |  <0.1% → 0.0% |       2 → 0 | `<init>(JavaKMeans, List, List, int, int)`       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| removed |    -1 |  <0.1% → 0.0% |       1 → 0 | `computeDirectly()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| removed |    -1 |  <0.1% → 0.0% |       1 → 0 | `apply(Object, Object)`                          | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187b30` |
| removed |    -1 |  <0.1% → 0.0% |       1 → 0 | `merge(Map, Map)`                                | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| removed |    -1 |  <0.1% → 0.0% |       1 → 0 | `<init>(JavaKMeans, List, int, int)`             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| removed |    -1 |  <0.1% → 0.0% |       1 → 0 | `combineResults(Object, Object)`                 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| removed |    -1 |  <0.1% → 0.0% |       1 → 0 | `<init>(JavaKMeans, List)`                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |

##### Native

|  Change |  Delta |             % |     Samples | Function                                                                                                                                      | Location    |
| ------: | -----: | ------------: | ----------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  -65.6% | -1,608 | 28.3% → 18.2% | 2,452 → 844 | `__psynch_cvwait`                                                                                                                             | `<unknown>` |
|  -75.9% |    -60 |   0.9% → 0.4% |     79 → 19 | `semaphore_wait_trap`                                                                                                                         | `<unknown>` |
|  -20.5% |    -59 |   3.3% → 4.9% |   288 → 229 | `forward_copy_longs`                                                                                                                          | `<unknown>` |
|  -62.2% |    -23 |   0.4% → 0.3% |     37 → 14 | `__psynch_mutexwait`                                                                                                                          | `<unknown>` |
|  -37.5% |    -12 |          0.4% |     32 → 20 | `_platform_bzero`                                                                                                                             | `<unknown>` |
| removed |     -9 |   0.1% → 0.0% |       9 → 0 | `swtch_pri`                                                                                                                                   | `<unknown>` |
|  -50.0% |     -9 |          0.2% |      18 → 9 | `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)`                                                       | `<unknown>` |
|  -70.0% |     -7 |          0.1% |      10 → 3 | `ObjArrayAllocator::initialize(HeapWordImpl**) const`                                                                                         | `<unknown>` |
|  -10.3% |     -7 |   0.8% → 1.3% |     68 → 61 | `__psynch_cvsignal`                                                                                                                           | `<unknown>` |
| removed |     -6 |   0.1% → 0.0% |       6 → 0 | `_sigtramp`                                                                                                                                   | `<unknown>` |
| removed |     -5 |   0.1% → 0.0% |       5 → 0 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region(HeapRegion*, bool)`                                          | `<unknown>` |
|  -80.0% |     -4 |  0.1% → <0.1% |       5 → 1 | `arrayof_oop_disjoint_arraycopy`                                                                                                              | `<unknown>` |
|  -66.7% |     -4 |  0.1% → <0.1% |       6 → 2 | `void OopOopIterateDispatch<G1MarkAndPushClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>(G1MarkAndPushClosure*, oopDesc*, Klass*)` | `<unknown>` |
| removed |     -4 |  <0.1% → 0.0% |       4 → 0 | `void OopOopIterateDispatch<G1AdjustClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>(G1AdjustClosure*, oopDesc*, Klass*)`           | `<unknown>` |
|  -15.8% |     -3 |   0.2% → 0.3% |     19 → 16 | `arrayof_jint_disjoint_arraycopy`                                                                                                             | `<unknown>` |
| removed |     -3 |  <0.1% → 0.0% |       3 → 0 | `__psynch_mutexdrop`                                                                                                                          | `<unknown>` |
|  -60.0% |     -3 |  0.1% → <0.1% |       5 → 2 | `G1FullGCMarker::follow_object(oopDesc*)`                                                                                                     | `<unknown>` |
| removed |     -3 |  <0.1% → 0.0% |       3 → 0 | `ObjAllocator::initialize(HeapWordImpl**) const`                                                                                              | `<unknown>` |
|  -75.0% |     -3 |         <0.1% |       4 → 1 | `pthread_testcancel`                                                                                                                          | `<unknown>` |
|  -66.7% |     -2 |         <0.1% |       3 → 1 | `Parker::park(bool, long)`                                                                                                                    | `<unknown>` |

##### Standard library

|  Change | Delta |            % |   Samples | Function                                     | Location                                      |
| ------: | ----: | -----------: | --------: | -------------------------------------------- | --------------------------------------------- |
|  -41.3% |   -97 |  2.7% → 3.0% | 235 → 138 | `elementData(int)`                           | `java.util.ArrayList`                         |
|  -39.5% |   -88 |  2.6% → 2.9% | 223 → 135 | `computeIfAbsent(Object, Function)`          | `java.util.HashMap`                           |
|  -55.4% |   -67 |  1.4% → 1.2% |  121 → 54 | `grow(int)`                                  | `java.util.ArrayList`                         |
|  -59.0% |   -23 |  0.4% → 0.3% |   39 → 16 | `hash(Object)`                               | `java.util.HashMap`                           |
|  -44.4% |   -20 |         0.5% |   45 → 25 | `checkIndex(int, int)`                       | `java.util.Objects`                           |
|  -20.4% |   -11 |  0.6% → 0.9% |   54 → 43 | `add(Object, Object[], int)`                 | `java.util.ArrayList`                         |
|  -45.5% |    -5 |         0.1% |    11 → 6 | `runWorker(ForkJoinPool$WorkQueue)`          | `java.util.concurrent.ForkJoinPool`           |
|  -23.5% |    -4 |  0.2% → 0.3% |   17 → 13 | `merge(Object, Object, BiFunction)`          | `java.util.HashMap`                           |
| removed |    -3 | <0.1% → 0.0% |     3 → 0 | `fork()`                                     | `java.util.concurrent.ForkJoinTask`           |
|  -60.0% |    -3 | 0.1% → <0.1% |     5 → 2 | `get(int)`                                   | `java.util.ArrayList`                         |
| removed |    -3 | <0.1% → 0.0% |     3 → 0 | `<init>(AbstractPipeline, int)`              | `java.util.stream.AbstractPipeline`           |
|  -50.0% |    -2 |        <0.1% |     4 → 2 | `exec()`                                     | `java.util.concurrent.RecursiveTask`          |
|  -40.0% |    -2 |         0.1% |     5 → 3 | `tryRemoveAndExec(ForkJoinTask, boolean)`    | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  -22.2% |    -2 |  0.1% → 0.2% |     9 → 7 | `scan(ForkJoinPool$WorkQueue, int, int)`     | `java.util.concurrent.ForkJoinPool`           |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `addAll(Collection)`                         | `java.util.ArrayList`                         |
|  -50.0% |    -2 |        <0.1% |     4 → 2 | `forEach(BiConsumer)`                        | `java.util.HashMap`                           |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `add(Object)`                                | `java.util.ArrayList`                         |
|  -50.0% |    -2 |        <0.1% |     4 → 2 | `awaitWork(ForkJoinPool$WorkQueue)`          | `java.util.concurrent.ForkJoinPool`           |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `resize()`                                   | `java.util.HashMap`                           |
|  -50.0% |    -2 |        <0.1% |     4 → 2 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap`                           |

##### JIT

|  Change | Delta |            % |  Samples | Function                 | Location    |
| ------: | ----: | -----------: | -------: | ------------------------ | ----------- |
|  -62.7% |   -74 |  1.4% → 0.9% | 118 → 44 | `zero_blocks`            | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |    1 → 0 | `itable stub`            | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |    1 → 0 | `I2C/C2I adapters(0xbb)` | `<unknown>` |

##### Compiler

|  Change | Delta |            % | Samples | Function                                                                                                                                         | Location    |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `PhaseOutput::BuildOopMaps()`                                                                                                                    | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `Matcher::find_shared(Node*)`                                                                                                                    | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `PhaseIFG::re_insert(unsigned int)`                                                                                                              | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `BoolNode::Ideal(PhaseGVN*, bool)`                                                                                                               | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `MemBarReleaseNode::Opcode() const`                                                                                                              | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseIdealLoop::split_if_with_blocks(VectorSet&, Node_Stack&)`                                                                                  | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Matcher::pd_clone_node(Node*, Node*, Matcher::MStack&)`                                                                                         | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseChaitin::cache_lrg_info()`                                                                                                                 | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `RelocIterator::RelocIterator(CodeSection*, unsigned char*, unsigned char*)`                                                                     | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseIdealLoop::fix_ctrl_uses(Node_List const&, IdealLoopTree const*, Node_List&, PhaseIdealLoop::CloneLoopMode, Node*, CloneMap*, Node_List&)` | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseChaitin::stretch_base_pointer_live_ranges(ResourceArea*)`                                                                                  | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseChaitin::remove_bound_register_from_interfering_live_ranges(LRG&, IndexSet*, unsigned int&)`                                               | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Node::dominates(Node*, Node_List&)`                                                                                                             | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `ciMethod::ciMethod(methodHandle const&, ciInstanceKlass*)`                                                                                      | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `ciObjectFactory::get_metadata(Metadata*)`                                                                                                       | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `ciTypeFlow::flow_block(ciTypeFlow::Block*, ciTypeFlow::StateVector*, ciTypeFlow::JsrSet*)`                                                      | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseIdealLoop::Dominators()`                                                                                                                   | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseIdealLoop::split_if_with_blocks_post(Node*)`                                                                                               | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Compile::remove_speculative_types(PhaseIterGVN&)`                                                                                               | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)`                                                                                         | `<unknown>` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |            % |  Samples | Function                                                                                         | Location                                                                              |
| ------: | ----: | -----------: | -------: | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------- |
|  +72.1% |   +62 |  1.0% → 3.2% | 86 → 148 | `doubleValue()`                                                                                  | `java.lang.Double`                                                                    |
|     new |   +33 |  0.0% → 0.7% |   0 → 33 | `invokeStatic(Object, Object)`                                                                   | `java.lang.invoke.LambdaForm$DMH.0x0000000801004800`                                  |
|     new |   +33 |  0.0% → 0.7% |   0 → 33 | `invoke(Object, Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x0000000801009800`                                   |
|     new |   +23 |  0.0% → 0.5% |   0 → 23 | `[tid=27907]`                                                                                    | `<unknown>`                                                                           |
|     new |   +14 |  0.0% → 0.3% |   0 → 14 | `[tid=34819]`                                                                                    | `<unknown>`                                                                           |
|  +58.8% |   +10 |  0.2% → 0.6% |  17 → 27 | `pthread_jit_write_protect_np`                                                                   | `<unknown>`                                                                           |
|  +23.5% |    +8 |  0.4% → 0.9% |  34 → 42 | `setDone()`                                                                                      | `java.util.concurrent.ForkJoinTask`                                                   |
|  +38.1% |    +8 |  0.2% → 0.6% |  21 → 29 | `G1FullGCMarker::mark_object(oopDesc*)`                                                          | `<unknown>`                                                                           |
|     new |    +8 |  0.0% → 0.2% |    0 → 8 | `G1ClearBitMapTask::G1ClearBitmapHRClosure::do_heap_region(HeapRegion*)`                         | `<unknown>`                                                                           |
|  +29.2% |    +7 |  0.3% → 0.7% |  24 → 31 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>(G1MarkAndPushClosure*, int, int)` | `<unknown>`                                                                           |
| +700.0% |    +7 | <0.1% → 0.2% |    1 → 8 | `MarkBitMap::do_clear(MemRegion, bool)`                                                          | `<unknown>`                                                                           |
|  +17.6% |    +6 |  0.4% → 0.9% |  34 → 40 | `signalWaiters()`                                                                                | `java.util.concurrent.ForkJoinTask`                                                   |
|  +45.5% |    +5 |  0.1% → 0.3% |  11 → 16 | `_platform_memset`                                                                               | `<unknown>`                                                                           |
|     new |    +5 |  0.0% → 0.1% |    0 → 5 | `vtable stub`                                                                                    | `<unknown>`                                                                           |
|  +44.4% |    +4 |  0.1% → 0.3% |   9 → 13 | `G1FullGCPrepareTask::work(unsigned int)`                                                        | `<unknown>`                                                                           |
|  +66.7% |    +4 |  0.1% → 0.2% |   6 → 10 | `G1EvacuateRegionsTask::scan_roots(G1ParScanThreadState*, unsigned int)`                         | `<unknown>`                                                                           |
| +200.0% |    +4 | <0.1% → 0.1% |    2 → 6 | `lambda$collectClusters$0(Double[])`                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| +200.0% |    +4 | <0.1% → 0.1% |    2 → 6 | `apply(Object)`                                                                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000000801186b38` |
|     new |    +4 |  0.0% → 0.1% |    0 → 4 | `PhaseCFG::schedule_late(VectorSet&, Node_Stack&)`                                               | `<unknown>`                                                                           |
|     new |    +4 |  0.0% → 0.1% |    0 → 4 | `[tid=16899]`                                                                                    | `<unknown>`                                                                           |

##### Ours

|  Change | Delta |            % | Samples | Function                                               | Location                                                                              |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------ | ------------------------------------------------------------------------------------- |
| +200.0% |    +4 | <0.1% → 0.1% |   2 → 6 | `lambda$collectClusters$0(Double[])`                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| +200.0% |    +4 | <0.1% → 0.1% |   2 → 6 | `apply(Object)`                                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000000801186b38` |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `combineResults(Object, Object)`                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `add(double[], double[])`                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `combineResults(double[], double[])`                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| +100.0% |    +1 |        <0.1% |   1 → 2 | `createScratchDirectory(Path, String, boolean)`        | `org.renaissance.core.DirUtils`                                                       |
|  +20.0% |    +1 |         0.1% |   5 → 6 | `boxed(double[])`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
| +100.0% |    +1 |        <0.1% |   1 → 2 | `getVmStartNanos()`                                    | `org.renaissance.harness.RenaissanceSuite$`                                           |
|  +16.7% |    +1 |  0.1% → 0.2% |   6 → 7 | `apply(int)`                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011258d8`                |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `handleOccurrence$1(ObjectRef, OptionDef, ListBuffer)` | `scopt.ORunner$`                                                                      |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `<init>(JavaKMeans, List, List)`                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `$init$(platform$PlatformReadInstances)`               | `scopt.platform$PlatformReadInstances`                                                |

##### Native

|  Change | Delta |            % | Samples | Function                                                                                                                                                                                                                                                            | Location    |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|     new |   +23 |  0.0% → 0.5% |  0 → 23 | `[tid=27907]`                                                                                                                                                                                                                                                       | `<unknown>` |
|     new |   +14 |  0.0% → 0.3% |  0 → 14 | `[tid=34819]`                                                                                                                                                                                                                                                       | `<unknown>` |
|  +58.8% |   +10 |  0.2% → 0.6% | 17 → 27 | `pthread_jit_write_protect_np`                                                                                                                                                                                                                                      | `<unknown>` |
|  +38.1% |    +8 |  0.2% → 0.6% | 21 → 29 | `G1FullGCMarker::mark_object(oopDesc*)`                                                                                                                                                                                                                             | `<unknown>` |
|     new |    +8 |  0.0% → 0.2% |   0 → 8 | `G1ClearBitMapTask::G1ClearBitmapHRClosure::do_heap_region(HeapRegion*)`                                                                                                                                                                                            | `<unknown>` |
|  +29.2% |    +7 |  0.3% → 0.7% | 24 → 31 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>(G1MarkAndPushClosure*, int, int)`                                                                                                                                                                    | `<unknown>` |
| +700.0% |    +7 | <0.1% → 0.2% |   1 → 8 | `MarkBitMap::do_clear(MemRegion, bool)`                                                                                                                                                                                                                             | `<unknown>` |
|  +45.5% |    +5 |  0.1% → 0.3% | 11 → 16 | `_platform_memset`                                                                                                                                                                                                                                                  | `<unknown>` |
|  +44.4% |    +4 |  0.1% → 0.3% |  9 → 13 | `G1FullGCPrepareTask::work(unsigned int)`                                                                                                                                                                                                                           | `<unknown>` |
|  +66.7% |    +4 |  0.1% → 0.2% |  6 → 10 | `G1EvacuateRegionsTask::scan_roots(G1ParScanThreadState*, unsigned int)`                                                                                                                                                                                            | `<unknown>` |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `[tid=16899]`                                                                                                                                                                                                                                                       | `<unknown>` |
|  +33.3% |    +3 |  0.1% → 0.3% |  9 → 12 | `void HeapRegion::apply_to_marked_objects<G1FullGCPrepareTask::G1PrepareCompactLiveClosure>(G1CMBitMap*, G1FullGCPrepareTask::G1PrepareCompactLiveClosure*)`                                                                                                        | `<unknown>` |
| +150.0% |    +3 | <0.1% → 0.1% |   2 → 5 | `void G1ScanEvacuatedObjClosure::do_oop_work<narrowOop>(narrowOop*)`                                                                                                                                                                                                | `<unknown>` |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `LinkResolver::resolve_invoke(CallInfo&, Handle, constantPoolHandle const&, int, Bytecodes::Code, JavaThread*)`                                                                                                                                                     | `<unknown>` |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `InterpreterRuntime::resolve_invoke(JavaThread*, Bytecodes::Code)`                                                                                                                                                                                                  | `<unknown>` |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `G1ParScanThreadState::start_partial_objarray(G1HeapRegionAttr, oopDesc*, oopDesc*)`                                                                                                                                                                                | `<unknown>` |
|  +40.0% |    +2 |  0.1% → 0.2% |   5 → 7 | `G1ScanHRForRegionClosure::scan_memregion(unsigned int, MemRegion)`                                                                                                                                                                                                 | `<unknown>` |
|  +40.0% |    +2 |  0.1% → 0.2% |   5 → 7 | `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>(G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)&&)` | `<unknown>` |
|  +40.0% |    +2 |  0.1% → 0.2% |   5 → 7 | `G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)`                                                                                                                                                                                                            | `<unknown>` |
|  +40.0% |    +2 |  0.1% → 0.2% |   5 → 7 | `G1ScanHRForRegionClosure::do_heap_region(HeapRegion*)`                                                                                                                                                                                                             | `<unknown>` |

##### Standard library

|  Change | Delta |            % |  Samples | Function                                                | Location                                             |
| ------: | ----: | -----------: | -------: | ------------------------------------------------------- | ---------------------------------------------------- |
|  +72.1% |   +62 |  1.0% → 3.2% | 86 → 148 | `doubleValue()`                                         | `java.lang.Double`                                   |
|     new |   +33 |  0.0% → 0.7% |   0 → 33 | `invokeStatic(Object, Object)`                          | `java.lang.invoke.LambdaForm$DMH.0x0000000801004800` |
|     new |   +33 |  0.0% → 0.7% |   0 → 33 | `invoke(Object, Object, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x0000000801009800`  |
|  +23.5% |    +8 |  0.4% → 0.9% |  34 → 42 | `setDone()`                                             | `java.util.concurrent.ForkJoinTask`                  |
|  +17.6% |    +6 |  0.4% → 0.9% |  34 → 40 | `signalWaiters()`                                       | `java.util.concurrent.ForkJoinTask`                  |
| +200.0% |    +2 | <0.1% → 0.1% |    1 → 3 | `hashCode()`                                            | `java.lang.Object`                                   |
|     new |    +2 | 0.0% → <0.1% |    0 → 2 | `computeIfAbsent(Object, Function)`                     | `java.util.concurrent.ConcurrentHashMap`             |
|     new |    +2 | 0.0% → <0.1% |    0 → 2 | `compareAndSet(long, long)`                             | `java.util.concurrent.atomic.AtomicLong`             |
|     new |    +2 | 0.0% → <0.1% |    0 → 2 | `next(int)`                                             | `java.util.Random`                                   |
|     new |    +2 | 0.0% → <0.1% |    0 → 2 | `nextDouble()`                                          | `java.util.Random`                                   |
|     new |    +2 | 0.0% → <0.1% |    0 → 2 | `stream(double[], int, int)`                            | `java.util.Arrays`                                   |
|     new |    +2 | 0.0% → <0.1% |    0 → 2 | `stream(double[])`                                      | `java.util.Arrays`                                   |
|     new |    +2 | 0.0% → <0.1% |    0 → 2 | `resolve(byte, MemberName, Class, int, boolean)`        | `java.lang.invoke.MemberName$Factory`                |
|     new |    +2 | 0.0% → <0.1% |    0 → 2 | `resolveOrFail(byte, MemberName, Class, int, Class)`    | `java.lang.invoke.MemberName$Factory`                |
|     new |    +2 | 0.0% → <0.1% |    0 → 2 | `resolveOrFail(byte, MemberName)`                       | `java.lang.invoke.MethodHandles$Lookup`              |
| +100.0% |    +1 |        <0.1% |    1 → 2 | `createTempDirectory(Path, String, FileAttribute[])`    | `java.nio.file.Files`                                |
|  +20.0% |    +1 |         0.1% |    5 → 6 | `putVal(int, Object, Object, boolean, boolean)`         | `java.util.HashMap`                                  |
|  +10.0% |    +1 |  0.1% → 0.2% |  10 → 11 | `putMapEntries(Map, boolean)`                           | `java.util.HashMap`                                  |
|  +10.0% |    +1 |  0.1% → 0.2% |  10 → 11 | `<init>(Map)`                                           | `java.util.HashMap`                                  |
| +100.0% |    +1 |        <0.1% |    1 → 2 | `linkMethodHandleConstant(byte, Class, String, Object)` | `java.lang.invoke.MethodHandles$Lookup`              |

##### JIT

|  Change | Delta |            % | Samples | Function                 | Location    |
| ------: | ----: | -----------: | ------: | ------------------------ | ----------- |
|     new |    +5 |  0.0% → 0.1% |   0 → 5 | `vtable stub`            | `<unknown>` |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `I2C/C2I adapters(0xba)` | `<unknown>` |

##### Compiler

|  Change | Delta |            % | Samples | Function                                                                                                                                              | Location    |
| ------: | ----: | -----------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `PhaseCFG::schedule_late(VectorSet&, Node_Stack&)`                                                                                                    | `<unknown>` |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `TypeInstPtr::add_offset(long) const`                                                                                                                 | `<unknown>` |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `Matcher::xform(Node*, int)`                                                                                                                          | `<unknown>` |
| +100.0% |    +2 | <0.1% → 0.1% |   2 → 4 | `PhaseCFG::global_code_motion()`                                                                                                                      | `<unknown>` |
| +100.0% |    +2 | <0.1% → 0.1% |   2 → 4 | `PhaseCFG::do_global_code_motion()`                                                                                                                   | `<unknown>` |
|  +40.0% |    +2 |  0.1% → 0.2% |   5 → 7 | `PhaseOutput::Output()`                                                                                                                               | `<unknown>` |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `PhaseChaitin::post_allocate_copy_removal()`                                                                                                          | `<unknown>` |
| +100.0% |    +2 | <0.1% → 0.1% |   2 → 4 | `PhaseGVN::transform_no_reclaim(Node*)`                                                                                                               | `<unknown>` |
| +100.0% |    +2 | <0.1% → 0.1% |   2 → 4 | `PhaseChaitin::gather_lrg_masks(bool)`                                                                                                                | `<unknown>` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `PhaseOutput::scratch_emit_size(Node const*)`                                                                                                         | `<unknown>` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `Matcher::specialize_generic_vector_operands()`                                                                                                       | `<unknown>` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)`                                                                          | `<unknown>` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `Matcher::Label_Root(Node const*, State*, Node*, Node*&)`                                                                                             | `<unknown>` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `GraphKit::make_load(Node*, Node*, Type const*, BasicType, int, MemNode::MemOrd, LoadNode::ControlDependency, bool, bool, bool, bool, unsigned char)` | `<unknown>` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `TypeOopPtr::TypeOopPtr(Type::TYPES, TypePtr::PTR, ciKlass*, TypeInterfaces const*, bool, ciObject*, int, int, TypePtr const*, int)`                  | `<unknown>` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `TypeInstPtr::make(TypePtr::PTR, ciKlass*, TypeInterfaces const*, bool, ciObject*, int, int, TypePtr const*, int)`                                    | `<unknown>` |
|  +20.0% |    +1 |         0.1% |   5 → 6 | `Matcher::match()`                                                                                                                                    | `<unknown>` |
|  +50.0% |    +1 | <0.1% → 0.1% |   2 → 3 | `ciBytecodeStream::get_method(bool&, ciSignature**)`                                                                                                  | `<unknown>` |
| +100.0% |    +1 |        <0.1% |   1 → 2 | `Matcher::match_tree(Node const*)`                                                                                                                    | `<unknown>` |
|  +50.0% |    +1 | <0.1% → 0.1% |   2 → 3 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)`                                                                                | `<unknown>` |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

| Change |  Delta |             % |       Samples | Function                                                | Location                                                   |
| -----: | -----: | ------------: | ------------: | ------------------------------------------------------- | ---------------------------------------------------------- |
| -46.8% | -3,851 | 94.9% → 94.3% | 8,236 → 4,385 | `run()`                                                 | `java.util.concurrent.ForkJoinWorkerThread`                |
| -46.8% | -3,850 | 94.9% → 94.3% | 8,235 → 4,385 | `runWorker(ForkJoinPool$WorkQueue)`                     | `java.util.concurrent.ForkJoinPool`                        |
| -40.1% | -2,679 | 77.0% → 86.1% | 6,681 → 4,002 | `scan(ForkJoinPool$WorkQueue, int, int)`                | `java.util.concurrent.ForkJoinPool`                        |
| -40.3% | -2,669 | 76.4% → 85.1% | 6,627 → 3,958 | `exec()`                                                | `java.util.concurrent.RecursiveTask`                       |
| -41.4% | -2,669 | 74.3% → 81.3% | 6,447 → 3,778 | `join()`                                                | `java.util.concurrent.ForkJoinTask`                        |
| -40.3% | -2,668 | 76.4% → 85.1% | 6,626 → 3,958 | `compute()`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
| -41.4% | -2,668 | 74.3% → 81.3% | 6,446 → 3,778 | `awaitDone(int, long)`                                  | `java.util.concurrent.ForkJoinTask`                        |
| -40.1% | -2,666 | 76.7% → 85.8% | 6,655 → 3,989 | `doExec()`                                              | `java.util.concurrent.ForkJoinTask`                        |
| -40.1% | -2,666 | 76.7% → 85.8% | 6,655 → 3,989 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`    | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| -41.1% | -2,476 | 69.4% → 76.3% | 6,024 → 3,548 | `tryRemoveAndExec(ForkJoinTask, boolean)`               | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| -65.6% | -1,608 | 28.3% → 18.2% |   2,452 → 844 | `__psynch_cvwait`                                       | `<unknown>`                                                |
| -65.5% | -1,573 | 27.7% → 17.8% |   2,402 → 829 | `Parker::park(bool, long)`                              | `<unknown>`                                                |
| -65.1% | -1,571 | 27.8% → 18.1% |   2,412 → 841 | `Unsafe_Park(JNIEnv_*, _jobject*, unsigned char, long)` | `<unknown>`                                                |
| -65.1% | -1,571 | 27.8% → 18.2% |   2,415 → 844 | `park(boolean, long)`                                   | `jdk.internal.misc.Unsafe`                                 |
| -63.1% | -1,409 | 25.8% → 17.7% |   2,234 → 825 | `park()`                                                | `java.util.concurrent.locks.LockSupport`                   |
| -75.6% | -1,166 |  17.8% → 8.1% |   1,543 → 377 | `awaitWork(ForkJoinPool$WorkQueue)`                     | `java.util.concurrent.ForkJoinPool`                        |
| -40.2% | -1,103 | 31.6% → 35.3% | 2,743 → 1,640 | `computeDirectly()`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -42.1% |   -993 | 27.2% → 29.4% | 2,358 → 1,365 | `computeDirectly()`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| -42.1% |   -990 | 27.1% → 29.3% | 2,350 → 1,360 | `vectorSum()`                                           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| -51.4% |   -987 | 22.1% → 20.0% |   1,919 → 932 | `invoke()`                                              | `java.util.concurrent.ForkJoinTask`                        |

##### Ours

| Change |  Delta |             % |       Samples | Function                            | Location                                                               |
| -----: | -----: | ------------: | ------------: | ----------------------------------- | ---------------------------------------------------------------------- |
| -40.3% | -2,668 | 76.4% → 85.1% | 6,626 → 3,958 | `compute()`                         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| -40.2% | -1,103 | 31.6% → 35.3% | 2,743 → 1,640 | `computeDirectly()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| -42.1% |   -993 | 27.2% → 29.4% | 2,358 → 1,365 | `computeDirectly()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| -42.1% |   -990 | 27.1% → 29.3% | 2,350 → 1,360 | `vectorSum()`                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| -38.6% |   -756 | 22.6% → 25.9% | 1,961 → 1,205 | `findNearestCentroid()`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| -53.0% |   -706 | 15.3% → 13.4% |   1,331 → 625 | `average(List)`                     | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| -52.7% |   -705 | 15.4% → 13.6% |   1,339 → 634 | `computeDirectly()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| -52.6% |   -704 | 15.4% → 13.6% |   1,338 → 634 | `computeClusterAverages()`          | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| -40.1% |   -616 | 17.7% → 19.8% |   1,535 → 919 | `accumulate(Double[], double[])`    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| -51.1% |   -490 | 11.0% → 10.1% |     958 → 468 | `lambda$run$0(int, List, int)`      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| -51.1% |   -490 | 11.0% → 10.1% |     958 → 468 | `call()`                            | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68` |
| -39.2% |   -425 | 12.5% → 14.2% |   1,083 → 658 | `distance(Double[], Double[])`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| -44.5% |   -348 |   9.0% → 9.3% |     782 → 434 | `collectClusters(int[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| -30.1% |   -153 |   5.9% → 7.6% |     508 → 355 | `merge(Map, Map)`                   | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| -30.2% |   -153 |   5.8% → 7.6% |     506 → 353 | `combineResults(Map, Map)`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| -29.7% |   -151 |   5.9% → 7.7% |     508 → 357 | `combineResults(Object, Object)`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| -30.3% |   -148 |   5.6% → 7.3% |     488 → 340 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| -30.3% |   -148 |   5.6% → 7.3% |     489 → 341 | `accept(Object, Object)`            | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186fd8` |
| -25.9% |    -83 |   3.7% → 5.1% |     321 → 238 | `apply(Object, Object)`             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187b30` |
| -25.6% |    -82 |   3.7% → 5.1% |     320 → 238 | `lambda$merge$6(List, List)`        | `org.renaissance.jdk.concurrent.JavaKMeans`                            |

##### Native

| Change |  Delta |             % |     Samples | Function                                                                       | Location    |
| -----: | -----: | ------------: | ----------: | ------------------------------------------------------------------------------ | ----------- |
| -65.6% | -1,608 | 28.3% → 18.2% | 2,452 → 844 | `__psynch_cvwait`                                                              | `<unknown>` |
| -65.5% | -1,573 | 27.7% → 17.8% | 2,402 → 829 | `Parker::park(bool, long)`                                                     | `<unknown>` |
| -65.1% | -1,571 | 27.8% → 18.1% | 2,412 → 841 | `Unsafe_Park(JNIEnv_*, _jobject*, unsigned char, long)`                        | `<unknown>` |
| -40.7% |   -150 |   4.3% → 4.7% |   369 → 219 | `thread_start`                                                                 | `<unknown>` |
| -40.5% |   -149 |   4.2% → 4.7% |   368 → 219 | `_pthread_start`                                                               | `<unknown>` |
| -40.3% |   -148 |   4.2% → 4.7% |   367 → 219 | `Thread::call_run()`                                                           | `<unknown>` |
| -40.3% |   -148 |   4.2% → 4.7% |   367 → 219 | `thread_native_entry(Thread*)`                                                 | `<unknown>` |
| -40.3% |    -77 |   2.2% → 2.5% |   191 → 114 | `WorkerThread::run()`                                                          | `<unknown>` |
| -75.9% |    -60 |   0.9% → 0.4% |     79 → 19 | `semaphore_wait_trap`                                                          | `<unknown>` |
| -20.5% |    -59 |   3.3% → 4.9% |   288 → 229 | `forward_copy_longs`                                                           | `<unknown>` |
| -62.4% |    -58 |   1.1% → 0.8% |     93 → 35 | `MemAllocator::allocate() const`                                               | `<unknown>` |
| -58.8% |    -50 |   1.0% → 0.8% |     85 → 35 | `CollectedHeap::array_allocate(Klass*, unsigned long, int, bool, JavaThread*)` | `<unknown>` |
| -19.7% |    -49 |   2.9% → 4.3% |   249 → 200 | `arrayof_jint_disjoint_arraycopy`                                              | `<unknown>` |
| -58.0% |    -47 |   0.9% → 0.7% |     81 → 34 | `InstanceKlass::allocate_objArray(int, int, JavaThread*)`                      | `<unknown>` |
| -51.1% |    -46 |   1.0% → 0.9% |     90 → 44 | `OptoRuntime::new_array_C(Klass*, int, JavaThread*)`                           | `<unknown>` |
| -32.6% |    -42 |   1.5% → 1.9% |    129 → 87 | `JavaThread::thread_main_inner()`                                              | `<unknown>` |
| -60.9% |    -42 |   0.8% → 0.6% |     69 → 27 | `PlatformMonitor::wait(unsigned long long)`                                    | `<unknown>` |
| -77.4% |    -41 |   0.6% → 0.3% |     53 → 12 | `Monitor::wait_without_safepoint_check(unsigned long long)`                    | `<unknown>` |
| -43.0% |    -40 |          1.1% |     93 → 53 | `_new_array_Java`                                                              | `<unknown>` |
| -74.0% |    -37 |   0.6% → 0.3% |     50 → 13 | `G1ParEvacuateFollowersClosure::do_void()`                                     | `<unknown>` |

##### Standard library

| Change |  Delta |             % |       Samples | Function                                                  | Location                                            |
| -----: | -----: | ------------: | ------------: | --------------------------------------------------------- | --------------------------------------------------- |
| -46.8% | -3,851 | 94.9% → 94.3% | 8,236 → 4,385 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`         |
| -46.8% | -3,850 | 94.9% → 94.3% | 8,235 → 4,385 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                 |
| -40.1% | -2,679 | 77.0% → 86.1% | 6,681 → 4,002 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`                 |
| -40.3% | -2,669 | 76.4% → 85.1% | 6,627 → 3,958 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                |
| -41.4% | -2,669 | 74.3% → 81.3% | 6,447 → 3,778 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                 |
| -41.4% | -2,668 | 74.3% → 81.3% | 6,446 → 3,778 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                 |
| -40.1% | -2,666 | 76.7% → 85.8% | 6,655 → 3,989 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                 |
| -40.1% | -2,666 | 76.7% → 85.8% | 6,655 → 3,989 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| -41.1% | -2,476 | 69.4% → 76.3% | 6,024 → 3,548 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| -65.1% | -1,571 | 27.8% → 18.2% |   2,415 → 844 | `park(boolean, long)`                                     | `jdk.internal.misc.Unsafe`                          |
| -63.1% | -1,409 | 25.8% → 17.7% |   2,234 → 825 | `park()`                                                  | `java.util.concurrent.locks.LockSupport`            |
| -75.6% | -1,166 |  17.8% → 8.1% |   1,543 → 377 | `awaitWork(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                 |
| -51.4% |   -987 | 22.1% → 20.0% |   1,919 → 932 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`                 |
| -51.1% |   -490 | 11.0% → 10.1% |     958 → 468 | `exec()`                                                  | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
| -23.2% |   -308 | 15.3% → 22.0% | 1,329 → 1,021 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                 |
| -89.5% |   -162 |   2.1% → 0.4% |      181 → 19 | `parkUntil(long)`                                         | `java.util.concurrent.locks.LockSupport`            |
| -30.4% |   -150 |   5.7% → 7.4% |     493 → 343 | `forEach(BiConsumer)`                                     | `java.util.HashMap`                                 |
| -29.9% |   -145 |   5.6% → 7.3% |     485 → 340 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                                 |
| -48.4% |   -120 |   2.9% → 2.8% |     248 → 128 | `add(Object)`                                             | `java.util.ArrayList`                               |
| -42.1% |   -120 |   3.3% → 3.5% |     285 → 165 | `get(int)`                                                | `java.util.ArrayList`                               |

##### JIT

|  Change | Delta |            % |  Samples | Function                 | Location    |
| ------: | ----: | -----------: | -------: | ------------------------ | ----------- |
|  -62.7% |   -74 |  1.4% → 0.9% | 118 → 44 | `zero_blocks`            | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |    1 → 0 | `itable stub`            | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |    1 → 0 | `I2C/C2I adapters(0xbb)` | `<unknown>` |

##### Compiler

|  Change | Delta |            % |  Samples | Function                                                                                                | Location    |
| ------: | ----: | -----------: | -------: | ------------------------------------------------------------------------------------------------------- | ----------- |
|  -32.0% |   -41 |  1.5% → 1.9% | 128 → 87 | `CompileBroker::compiler_thread_loop()`                                                                 | `<unknown>` |
|  -34.5% |   -39 |  1.3% → 1.6% | 113 → 74 | `CompileBroker::invoke_compiler_on_method(CompileTask*)`                                                | `<unknown>` |
|  -31.8% |   -27 |  1.0% → 1.2% |  85 → 58 | `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                               | `<unknown>` |
|  -31.0% |   -26 |  1.0% → 1.2% |  84 → 58 | `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)`                                      | `<unknown>` |
|  -54.3% |   -19 |  0.4% → 0.3% |  35 → 16 | `Compile::Optimize()`                                                                                   | `<unknown>` |
|  -44.0% |   -11 |         0.3% |  25 → 14 | `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` | `<unknown>` |
|  -41.7% |   -10 |         0.3% |  24 → 14 | `Compilation::compile_method()`                                                                         | `<unknown>` |
|  -50.0% |    -9 |         0.2% |   18 → 9 | `PhaseIdealLoop::build_and_optimize()`                                                                  | `<unknown>` |
|  -50.0% |    -9 |         0.2% |   18 → 9 | `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)`                                           | `<unknown>` |
|  -47.4% |    -9 |         0.2% |  19 → 10 | `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)`                                                 | `<unknown>` |
|  -40.0% |    -8 |  0.2% → 0.3% |  20 → 12 | `Compilation::compile_java_method()`                                                                    | `<unknown>` |
|  -30.4% |    -7 |         0.3% |  23 → 16 | `PhaseChaitin::Register_Allocate()`                                                                     | `<unknown>` |
|  -75.0% |    -6 | 0.1% → <0.1% |    8 → 2 | `PhaseIterGVN::transform_old(Node*)`                                                                    | `<unknown>` |
|  -75.0% |    -6 | 0.1% → <0.1% |    8 → 2 | `PhaseIterGVN::optimize()`                                                                              | `<unknown>` |
|  -66.7% |    -6 |         0.1% |    9 → 3 | `GraphBuilder::iterate_all_blocks(bool)`                                                                | `<unknown>` |
|  -50.0% |    -5 |         0.1% |   10 → 5 | `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)`                                                  | `<unknown>` |
|  -62.5% |    -5 |         0.1% |    8 → 3 | `GraphBuilder::iterate_bytecodes_for_block(int)`                                                        | `<unknown>` |
|  -66.7% |    -4 | 0.1% → <0.1% |    6 → 2 | `PhaseIdealLoop::split_if_with_blocks(VectorSet&, Node_Stack&)`                                         | `<unknown>` |
| removed |    -4 | <0.1% → 0.0% |    4 → 0 | `ciMethod::ensure_method_data(methodHandle const&)`                                                     | `<unknown>` |
| removed |    -4 | <0.1% → 0.0% |    4 → 0 | `ciMethod::ensure_method_data()`                                                                        | `<unknown>` |

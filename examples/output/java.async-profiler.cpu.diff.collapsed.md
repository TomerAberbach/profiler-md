# Sampling profile diff

Collected 5,314 samples → 4,858 samples (-456 samples, -8.6%).

| Category         | Change | Delta |             % |       Samples |
| ---------------- | -----: | ----: | ------------: | ------------: |
| Ours             |  -4.7% |  -143 | 57.1% → 59.5% | 3,032 → 2,889 |
| Native           | -14.6% |  -205 | 26.4% → 24.7% | 1,404 → 1,199 |
| Standard library | -11.4% |   -87 | 14.3% → 13.9% |     760 → 673 |
| Compiler         |   0.0% |     0 |   1.0% → 1.1% |            55 |
| JIT              | -33.3% |   -21 |   1.2% → 0.9% |       63 → 42 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |     Samples | Function                                                                                             | Location                                                   |
| ------: | ----: | ------------: | ----------: | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
|   +5.3% |   +52 | 18.4% → 21.2% | 977 → 1,029 | `accumulate`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +19.1% |    +9 |   0.9% → 1.2% |     47 → 56 | `__psynch_cvsignal`                                                                                  | `<unknown>`                                                |
|  +46.7% |    +7 |   0.3% → 0.5% |     15 → 22 | `helpJoin`                                                                                           | `java.util.concurrent.ForkJoinPool`                        |
| +100.0% |    +5 |   0.1% → 0.2% |      5 → 10 | `_platform_memset`                                                                                   | `<unknown>`                                                |
| +400.0% |    +4 |  <0.1% → 0.1% |       1 → 5 | `doExec`                                                                                             | `java.util.concurrent.ForkJoinTask`                        |
|     new |    +4 |   0.0% → 0.1% |       0 → 4 | `addAll`                                                                                             | `java.util.ArrayList`                                      |
| +400.0% |    +4 |  <0.1% → 0.1% |       1 → 5 | `G1FullGCMarker::follow_object`                                                                      | `<unknown>`                                                |
|     new |    +4 |   0.0% → 0.1% |       0 → 4 | `void HeapRegion::apply_to_marked_objects<G1FullGCPrepareTask::G1PrepareCompactLiveClosure>`         | `<unknown>`                                                |
|  +11.5% |    +3 |   0.5% → 0.6% |     26 → 29 | `grow`                                                                                               | `java.util.ArrayList`                                      |
| +150.0% |    +3 |  <0.1% → 0.1% |       2 → 5 | `arrayof_oop_disjoint_arraycopy`                                                                     | `<unknown>`                                                |
|  +75.0% |    +3 |          0.1% |       4 → 7 | `G1RegionMarkStatsCache::add_live_words`                                                             | `<unknown>`                                                |
| +300.0% |    +3 |  <0.1% → 0.1% |       1 → 4 | `push`                                                                                               | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
|     new |    +3 |   0.0% → 0.1% |       0 → 3 | `combineResults`                                                                                     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| +300.0% |    +3 |  <0.1% → 0.1% |       1 → 4 | `HeapRegion::update_bot_for_block`                                                                   | `<unknown>`                                                |
|     new |    +3 |   0.0% → 0.1% |       0 → 3 | `PhaseOutput::BuildOopMaps`                                                                          | `<unknown>`                                                |
| +200.0% |    +2 |  <0.1% → 0.1% |       1 → 3 | `combineResults`                                                                                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +200.0% |    +2 |  <0.1% → 0.1% |       1 → 3 | `awaitWork`                                                                                          | `java.util.concurrent.ForkJoinPool`                        |
|     new |    +2 |  0.0% → <0.1% |       0 → 2 | `MemAllocator::allocate`                                                                             | `<unknown>`                                                |
| +200.0% |    +2 |  <0.1% → 0.1% |       1 → 3 | `void OopOopIterateDispatch<G1MarkAndPushClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `<unknown>`                                                |
| +200.0% |    +2 |  <0.1% → 0.1% |       1 → 3 | `newLength`                                                                                          | `jdk.internal.util.ArraysSupport`                          |

##### Ours

|  Change | Delta |             % |     Samples | Function         | Location                                                               |
| ------: | ----: | ------------: | ----------: | ---------------- | ---------------------------------------------------------------------- |
|   +5.3% |   +52 | 18.4% → 21.2% | 977 → 1,029 | `accumulate`     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|     new |    +3 |   0.0% → 0.1% |       0 → 3 | `combineResults` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| +200.0% |    +2 |  <0.1% → 0.1% |       1 → 3 | `combineResults` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|     new |    +1 |  0.0% → <0.1% |       0 → 1 | `apply`          | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b0011258d8` |
|     new |    +1 |  0.0% → <0.1% |       0 → 1 | `boxed`          | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|     new |    +1 |  0.0% → <0.1% |       0 → 1 | `div`            | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |

##### Native

|  Change | Delta |            % | Samples | Function                                                                                             | Location    |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------------------------------------------------------- | ----------- |
|  +19.1% |    +9 |  0.9% → 1.2% | 47 → 56 | `__psynch_cvsignal`                                                                                  | `<unknown>` |
| +100.0% |    +5 |  0.1% → 0.2% |  5 → 10 | `_platform_memset`                                                                                   | `<unknown>` |
| +400.0% |    +4 | <0.1% → 0.1% |   1 → 5 | `G1FullGCMarker::follow_object`                                                                      | `<unknown>` |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `void HeapRegion::apply_to_marked_objects<G1FullGCPrepareTask::G1PrepareCompactLiveClosure>`         | `<unknown>` |
| +150.0% |    +3 | <0.1% → 0.1% |   2 → 5 | `arrayof_oop_disjoint_arraycopy`                                                                     | `<unknown>` |
|  +75.0% |    +3 |         0.1% |   4 → 7 | `G1RegionMarkStatsCache::add_live_words`                                                             | `<unknown>` |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `HeapRegion::update_bot_for_block`                                                                   | `<unknown>` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `MemAllocator::allocate`                                                                             | `<unknown>` |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `void OopOopIterateDispatch<G1MarkAndPushClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `<unknown>` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `ThreadLocalAllocBuffer::print_stats`                                                                | `<unknown>` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `G1BarrierSet::invalidate`                                                                           | `<unknown>` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `JfrObjectAllocationSample::send_event`                                                              | `<unknown>` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `__gettimeofday`                                                                                     | `<unknown>` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `SymbolTable::lookup_shared`                                                                         | `<unknown>` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `__semwait_signal`                                                                                   | `<unknown>` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `G1FromCardCache::clear`                                                                             | `<unknown>` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `G1FullGCCompactionPoint::forward`                                                                   | `<unknown>` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `void OopMapDo<OopClosure, DerivedOopClosure, SkipNullValue>::iterate_oops_do<RegisterMap>`          | `<unknown>` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `JavaThreadParkedState::JavaThreadParkedState`                                                       | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `InstanceKlass::allocate_objArray`                                                                   | `<unknown>` |

##### Standard library

|  Change | Delta |            % | Samples | Function           | Location                                           |
| ------: | ----: | -----------: | ------: | ------------------ | -------------------------------------------------- |
|  +46.7% |    +7 |  0.3% → 0.5% | 15 → 22 | `helpJoin`         | `java.util.concurrent.ForkJoinPool`                |
| +400.0% |    +4 | <0.1% → 0.1% |   1 → 5 | `doExec`           | `java.util.concurrent.ForkJoinTask`                |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `addAll`           | `java.util.ArrayList`                              |
|  +11.5% |    +3 |  0.5% → 0.6% | 26 → 29 | `grow`             | `java.util.ArrayList`                              |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `push`             | `java.util.concurrent.ForkJoinPool$WorkQueue`      |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `awaitWork`        | `java.util.concurrent.ForkJoinPool`                |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `newLength`        | `jdk.internal.util.ArraysSupport`                  |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `transfer`         | `java.util.concurrent.ConcurrentHashMap`           |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `park`             | `jdk.internal.misc.Unsafe`                         |
|  +33.3% |    +1 |         0.1% |   3 → 4 | `tryRemoveAndExec` | `java.util.concurrent.ForkJoinPool$WorkQueue`      |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `topLevelExec`     | `java.util.concurrent.ForkJoinPool$WorkQueue`      |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `toArray`          | `java.util.ArrayList`                              |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `getLoader`        | `jdk.internal.loader.URLClassPath`                 |
| +100.0% |    +1 |        <0.1% |   1 → 2 | `compareAndSet`    | `java.util.concurrent.atomic.AtomicLong`           |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `loadClassOrNull`  | `jdk.internal.loader.ClassLoaders$BootClassLoader` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `spliterator`      | `java.util.Spliterators`                           |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `equals`           | `java.security.SecureClassLoader$CodeSourceKey`    |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `getAndAddCtl`     | `java.util.concurrent.ForkJoinPool`                |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `checkAndAddEntry` | `java.util.zip.ZipFile$Source`                     |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `requireNonNull`   | `java.util.Objects`                                |

##### JIT

| Change | Delta |            % | Samples | Function      | Location    |
| -----: | ----: | -----------: | ------: | ------------- | ----------- |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `itable stub` | `<unknown>` |

##### Compiler

|  Change | Delta |            % | Samples | Function                                    | Location    |
| ------: | ----: | -----------: | ------: | ------------------------------------------- | ----------- |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `PhaseOutput::BuildOopMaps`                 | `<unknown>` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `Matcher::xform`                            | `<unknown>` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `PhaseIterGVN::add_users_to_worklist`       | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `Compile::Compile`                          | `<unknown>` |
| +100.0% |    +1 |        <0.1% |   1 → 2 | `PhaseIdealLoop::build_loop_late_post_work` | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseIdealLoop::build_loop_tree`           | `<unknown>` |
| +100.0% |    +1 |        <0.1% |   1 → 2 | `PhaseChaitin::build_ifg_physical`          | `<unknown>` |
| +100.0% |    +1 |        <0.1% |   1 → 2 | `PhaseLive::compute`                        | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `ciMethodData::bci_to_data`                 | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `MachSafePointNode::in_RegMask`             | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `TypeOopPtr::is_known_instance`             | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `ciObjectFactory::get`                      | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `ThreadLocalNode::Opcode`                   | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseChaitin::elide_copy`                  | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `RegionNode::is_CFG`                        | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `AddPNode::bottom_type`                     | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseIdealLoop::remix_address_expressions` | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `ShouldNotReachHereNode::is_block_proj`     | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseCFG::schedule_late`                   | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `IntervalWalker::walk_to`                   | `<unknown>` |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                                          | Location                                                   |
| ------: | ----: | ------------: | --------: | ------------------------------------------------- | ---------------------------------------------------------- |
|  -19.0% |  -162 | 16.1% → 14.2% | 853 → 691 | `__psynch_cvwait`                                 | `<unknown>`                                                |
|   -9.7% |   -95 | 18.4% → 18.2% | 977 → 882 | `distance`                                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -12.6% |   -55 |   8.2% → 7.8% | 436 → 381 | `findNearestCentroid`                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -15.8% |   -25 |   3.0% → 2.7% | 158 → 133 | `computeIfAbsent`                                 | `java.util.HashMap`                                        |
|   -4.7% |   -23 |   9.3% → 9.7% | 492 → 469 | `vectorSum`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -32.8% |   -20 |   1.1% → 0.8% |   61 → 41 | `zero_blocks`                                     | `<unknown>`                                                |
|  -13.4% |   -17 |   2.4% → 2.3% | 127 → 110 | `collectClusters`                                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -47.1% |   -16 |   0.6% → 0.4% |   34 → 18 | `hash`                                            | `java.util.HashMap`                                        |
|  -31.4% |   -16 |   1.0% → 0.7% |   51 → 35 | `checkIndex`                                      | `java.util.Objects`                                        |
|   -7.5% |   -13 |          3.3% | 174 → 161 | `elementData`                                     | `java.util.ArrayList`                                      |
|  -39.3% |   -11 |   0.5% → 0.3% |   28 → 17 | `pthread_jit_write_protect_np`                    | `<unknown>`                                                |
|  -14.9% |   -10 |   1.3% → 1.2% |   67 → 57 | `add`                                             | `java.util.ArrayList`                                      |
|  -40.0% |    -8 |   0.4% → 0.2% |   20 → 12 | `arrayof_jint_disjoint_arraycopy`                 | `<unknown>`                                                |
|  -32.0% |    -8 |   0.5% → 0.3% |   25 → 17 | `_platform_bzero`                                 | `<unknown>`                                                |
|  -38.1% |    -8 |   0.4% → 0.3% |   21 → 13 | `__psynch_mutexwait`                              | `<unknown>`                                                |
|  -61.5% |    -8 |   0.2% → 0.1% |    13 → 5 | `G1ParScanThreadState::do_copy_to_survivor_space` | `<unknown>`                                                |
|   -3.7% |    -7 |   3.5% → 3.7% | 188 → 181 | `forward_copy_longs`                              | `<unknown>`                                                |
|   -5.0% |    -6 |   2.2% → 2.3% | 119 → 113 | `doubleValue`                                     | `java.lang.Double`                                         |
| removed |    -6 |   0.1% → 0.0% |     6 → 0 | `G1ParScanThreadState::trim_queue_to_threshold`   | `<unknown>`                                                |
|  -38.5% |    -5 |          0.2% |    13 → 8 | `copyOf`                                          | `java.util.Arrays`                                         |

##### Ours

|  Change | Delta |             % |   Samples | Function                 | Location                                                   |
| ------: | ----: | ------------: | --------: | ------------------------ | ---------------------------------------------------------- |
|   -9.7% |   -95 | 18.4% → 18.2% | 977 → 882 | `distance`               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -12.6% |   -55 |   8.2% → 7.8% | 436 → 381 | `findNearestCentroid`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -4.7% |   -23 |   9.3% → 9.7% | 492 → 469 | `vectorSum`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -13.4% |   -17 |   2.4% → 2.3% | 127 → 110 | `collectClusters`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -66.7% |    -2 |  0.1% → <0.1% |     3 → 1 | `compute`                | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
|  -66.7% |    -2 |  0.1% → <0.1% |     3 → 1 | `createSubtask`          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -66.7% |    -2 |  0.1% → <0.1% |     3 → 1 | `lambda$generateData$3`  | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `computeClusterAverages` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -50.0% |    -1 |         <0.1% |     2 → 1 | `lambda$run$0`           | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `forkThreshold`          | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `<init>`                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `createSubtask`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -50.0% |    -1 |         <0.1% |     2 → 1 | `forkThreshold`          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

##### Native

|  Change | Delta |             % |   Samples | Function                                                                                                   | Location    |
| ------: | ----: | ------------: | --------: | ---------------------------------------------------------------------------------------------------------- | ----------- |
|  -19.0% |  -162 | 16.1% → 14.2% | 853 → 691 | `__psynch_cvwait`                                                                                          | `<unknown>` |
|  -39.3% |   -11 |   0.5% → 0.3% |   28 → 17 | `pthread_jit_write_protect_np`                                                                             | `<unknown>` |
|  -40.0% |    -8 |   0.4% → 0.2% |   20 → 12 | `arrayof_jint_disjoint_arraycopy`                                                                          | `<unknown>` |
|  -32.0% |    -8 |   0.5% → 0.3% |   25 → 17 | `_platform_bzero`                                                                                          | `<unknown>` |
|  -38.1% |    -8 |   0.4% → 0.3% |   21 → 13 | `__psynch_mutexwait`                                                                                       | `<unknown>` |
|  -61.5% |    -8 |   0.2% → 0.1% |    13 → 5 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                          | `<unknown>` |
|   -3.7% |    -7 |   3.5% → 3.7% | 188 → 181 | `forward_copy_longs`                                                                                       | `<unknown>` |
| removed |    -6 |   0.1% → 0.0% |     6 → 0 | `G1ParScanThreadState::trim_queue_to_threshold`                                                            | `<unknown>` |
|  -80.0% |    -4 |  0.1% → <0.1% |     5 → 1 | `Unsafe_Park`                                                                                              | `<unknown>` |
|  -60.0% |    -3 |  0.1% → <0.1% |     5 → 2 | `tlv_get_addr`                                                                                             | `<unknown>` |
|  -15.0% |    -3 |   0.4% → 0.3% |   20 → 17 | `semaphore_wait_trap`                                                                                      | `<unknown>` |
|  -75.0% |    -3 |  0.1% → <0.1% |     4 → 1 | `__mmap`                                                                                                   | `<unknown>` |
| removed |    -3 |   0.1% → 0.0% |     3 → 0 | `ClassLoaderData::oops_do`                                                                                 | `<unknown>` |
|  -60.0% |    -3 |  0.1% → <0.1% |     5 → 2 | `__psynch_mutexdrop`                                                                                       | `<unknown>` |
| removed |    -2 |  <0.1% → 0.0% |     2 → 0 | `HierarchyVisitor<FindMethodsByErasedSig>::push`                                                           | `<unknown>` |
| removed |    -2 |  <0.1% → 0.0% |     2 → 0 | `os::current_thread_enable_wx`                                                                             | `<unknown>` |
| removed |    -2 |  <0.1% → 0.0% |     2 → 0 | `pthread_cond_signal`                                                                                      | `<unknown>` |
| removed |    -2 |  <0.1% → 0.0% |     2 → 0 | `JavaThread::threadObj`                                                                                    | `<unknown>` |
| removed |    -2 |  <0.1% → 0.0% |     2 → 0 | `__v2printf`                                                                                               | `<unknown>` |
| removed |    -2 |  <0.1% → 0.0% |     2 → 0 | `GenericTaskQueueSet<OverflowTaskQueue<ObjArrayTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>::steal_best_of_2` | `<unknown>` |

##### Standard library

|  Change | Delta |            % |   Samples | Function          | Location                                  |
| ------: | ----: | -----------: | --------: | ----------------- | ----------------------------------------- |
|  -15.8% |   -25 |  3.0% → 2.7% | 158 → 133 | `computeIfAbsent` | `java.util.HashMap`                       |
|  -47.1% |   -16 |  0.6% → 0.4% |   34 → 18 | `hash`            | `java.util.HashMap`                       |
|  -31.4% |   -16 |  1.0% → 0.7% |   51 → 35 | `checkIndex`      | `java.util.Objects`                       |
|   -7.5% |   -13 |         3.3% | 174 → 161 | `elementData`     | `java.util.ArrayList`                     |
|  -14.9% |   -10 |  1.3% → 1.2% |   67 → 57 | `add`             | `java.util.ArrayList`                     |
|   -5.0% |    -6 |  2.2% → 2.3% | 119 → 113 | `doubleValue`     | `java.lang.Double`                        |
|  -38.5% |    -5 |         0.2% |    13 → 8 | `copyOf`          | `java.util.Arrays`                        |
| removed |    -4 |  0.1% → 0.0% |     4 → 0 | `entrySet`        | `java.util.HashMap`                       |
|  -75.0% |    -3 | 0.1% → <0.1% |     4 → 1 | `get`             | `java.util.ArrayList`                     |
|  -50.0% |    -3 |         0.1% |     6 → 3 | `putVal`          | `java.util.HashMap`                       |
|  -50.0% |    -2 | 0.1% → <0.1% |     4 → 2 | `runWorker`       | `java.util.concurrent.ForkJoinPool`       |
|  -66.7% |    -2 | 0.1% → <0.1% |     3 → 1 | `exec`            | `java.util.concurrent.RecursiveTask`      |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `newNode`         | `java.util.HashMap`                       |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `accept`          | `java.util.stream.Nodes$FixedNodeBuilder` |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `park`            | `java.util.concurrent.locks.LockSupport`  |
|  -16.7% |    -1 |         0.1% |     6 → 5 | `awaitDone`       | `java.util.concurrent.ForkJoinTask`       |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `invoke`          | `java.util.concurrent.ForkJoinTask`       |
|   -5.9% |    -1 |         0.3% |   17 → 16 | `merge`           | `java.util.HashMap`                       |
|  -33.3% |    -1 | 0.1% → <0.1% |     3 → 2 | `forEach`         | `java.util.HashMap`                       |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `unpark`          | `jdk.internal.misc.Unsafe`                |

##### JIT

|  Change | Delta |            % | Samples | Function                   | Location    |
| ------: | ----: | -----------: | ------: | -------------------------- | ----------- |
|  -32.8% |   -20 |  1.1% → 0.8% | 61 → 41 | `zero_blocks`              | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0xbb)`   | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0xbbaa)` | `<unknown>` |

##### Compiler

|  Change | Delta |            % | Samples | Function                                      | Location    |
| ------: | ----: | -----------: | ------: | --------------------------------------------- | ----------- |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `PhaseChaitin::build_ifg_virtual`             | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `ciObjectFactory::get_metadata`               | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `Node::is_CFG`                                | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `PhaseIterGVN::transform_old`                 | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `LIR_OpVisitState::visit`                     | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `PhaseChaitin::Split`                         | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `Type::cmp`                                   | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `BoolNode::Opcode`                            | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseIdealLoop::build_loop_late`             | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Compile::update_dead_node_list`              | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Node::latency`                               | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `ciEnv::~ciEnv`                               | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `ValueStack::ValueStack`                      | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseIdealLoop::Dominators`                  | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Node::add_prec`                              | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Node::out_grow`                              | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `TypeInstKlassPtr::eq`                        | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `NTarjan::DFS`                                | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep` | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseIdealLoop::build_loop_tree_impl`        | `<unknown>` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |             % |       Samples | Function                                                                                     | Location                                                  |
| ------: | ----: | ------------: | ------------: | -------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
|   +3.5% |   +38 | 20.5% → 23.2% | 1,088 → 1,126 | `accumulate`                                                                                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|     new |   +36 |   0.0% → 0.7% |        0 → 36 | `invokeStatic`                                                                               | `java.lang.invoke.LambdaForm$DMH.0x000000b001004800`      |
|     new |   +36 |   0.0% → 0.7% |        0 → 36 | `invoke`                                                                                     | `java.lang.invoke.LambdaForm$MH.0x000000b001009800`       |
|     new |   +10 |   0.0% → 0.2% |        0 → 10 | `G1FullGCPrepareTask::work`                                                                  | `<unknown>`                                               |
|   +0.8% |    +9 | 21.7% → 23.9% | 1,153 → 1,162 | `helpJoin`                                                                                   | `java.util.concurrent.ForkJoinPool`                       |
|  +19.1% |    +9 |   0.9% → 1.2% |       47 → 56 | `__psynch_cvsignal`                                                                          | `<unknown>`                                               |
|     new |    +8 |   0.0% → 0.2% |         0 → 8 | `void HeapRegion::apply_to_marked_objects<G1FullGCPrepareTask::G1PrepareCompactLiveClosure>` | `<unknown>`                                               |
|  +29.2% |    +7 |   0.5% → 0.6% |       24 → 31 | `Compile::Code_Gen`                                                                          | `<unknown>`                                               |
|  +75.0% |    +6 |   0.2% → 0.3% |        8 → 14 | `tryCompensate`                                                                              | `java.util.concurrent.ForkJoinPool`                       |
| +100.0% |    +5 |   0.1% → 0.2% |        5 → 10 | `_platform_memset`                                                                           | `<unknown>`                                               |
| +250.0% |    +5 |  <0.1% → 0.1% |         2 → 7 | `Matcher::match`                                                                             | `<unknown>`                                               |
| +500.0% |    +5 |  <0.1% → 0.1% |         1 → 6 | `combineResults`                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`    |
|  +13.3% |    +4 |   0.6% → 0.7% |       30 → 34 | `main`                                                                                       | `org.renaissance.harness.RenaissanceSuite$`               |
|  +12.5% |    +4 |   0.6% → 0.7% |       32 → 36 | `main`                                                                                       | `org.renaissance.harness.RenaissanceSuite`                |
|  +11.8% |    +4 |   0.6% → 0.8% |       34 → 38 | `invokeExact_MT`                                                                             | `java.lang.invoke.Invokers$Holder`                        |
|  +12.5% |    +4 |   0.6% → 0.7% |       32 → 36 | `invokeImpl`                                                                                 | `jdk.internal.reflect.DirectMethodHandleAccessor`         |
|  +12.5% |    +4 |   0.6% → 0.7% |       32 → 36 | `invoke`                                                                                     | `jdk.internal.reflect.DirectMethodHandleAccessor`         |
|  +12.5% |    +4 |   0.6% → 0.7% |       32 → 36 | `invoke`                                                                                     | `java.lang.reflect.Method`                                |
|  +11.1% |    +4 |   0.7% → 0.8% |       36 → 40 | `loadAndInvokeHarnessClass`                                                                  | `org.renaissance.core.Launcher`                           |
|  +10.5% |    +4 |   0.7% → 0.9% |       38 → 42 | `launchHarnessClass`                                                                         | `org.renaissance.core.Launcher`                           |

##### Ours

|  Change | Delta |             % |       Samples | Function                    | Location                                                               |
| ------: | ----: | ------------: | ------------: | --------------------------- | ---------------------------------------------------------------------- |
|   +3.5% |   +38 | 20.5% → 23.2% | 1,088 → 1,126 | `accumulate`                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| +500.0% |    +5 |  <0.1% → 0.1% |         1 → 6 | `combineResults`            | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  +13.3% |    +4 |   0.6% → 0.7% |       30 → 34 | `main`                      | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +12.5% |    +4 |   0.6% → 0.7% |       32 → 36 | `main`                      | `org.renaissance.harness.RenaissanceSuite`                             |
|  +11.1% |    +4 |   0.7% → 0.8% |       36 → 40 | `loadAndInvokeHarnessClass` | `org.renaissance.core.Launcher`                                        |
|  +10.5% |    +4 |   0.7% → 0.9% |       38 → 42 | `launchHarnessClass`        | `org.renaissance.core.Launcher`                                        |
|  +10.5% |    +4 |   0.7% → 0.9% |       38 → 42 | `main`                      | `org.renaissance.core.Launcher`                                        |
|  +25.0% |    +3 |   0.2% → 0.3% |       12 → 15 | `executeBenchmark`          | `org.renaissance.harness.ExecutionDriver`                              |
|  +17.6% |    +3 |   0.3% → 0.4% |       17 → 20 | `runBenchmarks`             | `org.renaissance.harness.RenaissanceSuite$`                            |
| +150.0% |    +3 |  <0.1% → 0.1% |         2 → 5 | `combineResults`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  +12.5% |    +2 |   0.3% → 0.4% |       16 → 18 | `runBenchmarks$$anonfun$1`  | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +12.5% |    +2 |   0.3% → 0.4% |       16 → 18 | `applyVoid`                 | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000b00111f208` |
|  +28.6% |    +2 |   0.1% → 0.2% |         7 → 9 | `setUpBeforeAll`            | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  +14.3% |    +1 |   0.1% → 0.2% |         7 → 8 | `apply`                     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b0011258d8` |
|     new |    +1 |  0.0% → <0.1% |         0 → 1 | `apply`                     | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000b0011059d8` |
|  +20.0% |    +1 |          0.1% |         5 → 6 | `run`                       | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  +20.0% |    +1 |          0.1% |         5 → 6 | `executeOperation`          | `org.renaissance.harness.ExecutionDriver`                              |
| +100.0% |    +1 |         <0.1% |         1 → 2 | `getVmStartNanos`           | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +50.0% |    +1 |  <0.1% → 0.1% |         2 → 3 | `parse`                     | `org.renaissance.harness.ConfigParser`                                 |
|  +14.3% |    +1 |   0.1% → 0.2% |         7 → 8 | `generateData`              | `org.renaissance.jdk.concurrent.JavaKMeans`                            |

##### Native

|  Change | Delta |            % | Samples | Function                                                                                     | Location    |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------- | ----------- |
|     new |   +10 |  0.0% → 0.2% |  0 → 10 | `G1FullGCPrepareTask::work`                                                                  | `<unknown>` |
|  +19.1% |    +9 |  0.9% → 1.2% | 47 → 56 | `__psynch_cvsignal`                                                                          | `<unknown>` |
|     new |    +8 |  0.0% → 0.2% |   0 → 8 | `void HeapRegion::apply_to_marked_objects<G1FullGCPrepareTask::G1PrepareCompactLiveClosure>` | `<unknown>` |
| +100.0% |    +5 |  0.1% → 0.2% |  5 → 10 | `_platform_memset`                                                                           | `<unknown>` |
|   +7.1% |    +4 |  1.1% → 1.2% | 56 → 60 | `Unsafe_Unpark`                                                                              | `<unknown>` |
| +200.0% |    +4 | <0.1% → 0.1% |   2 → 6 | `G1BatchedTask::work`                                                                        | `<unknown>` |
| +400.0% |    +4 | <0.1% → 0.1% |   1 → 5 | `G1FullGCMarker::follow_object`                                                              | `<unknown>` |
|   +7.0% |    +3 |  0.8% → 0.9% | 43 → 46 | `_new_array_Java`                                                                            | `<unknown>` |
|   +3.7% |    +3 |  1.5% → 1.7% | 81 → 84 | `JavaThread::thread_main_inner`                                                              | `<unknown>` |
|  +75.0% |    +3 |         0.1% |   4 → 7 | `G1RegionMarkStatsCache::add_live_words`                                                     | `<unknown>` |
|  +12.0% |    +3 |  0.5% → 0.6% | 25 → 28 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>`                              | `<unknown>` |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `IRScope::IRScope`                                                                           | `<unknown>` |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `IR::IR`                                                                                     | `<unknown>` |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `HeapRegion::update_bot_for_block`                                                           | `<unknown>` |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `DeoptimizationBlob`                                                                         | `<unknown>` |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `JfrAllocationTracer::JfrAllocationTracer`                                                   | `<unknown>` |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `SignatureStream::find_symbol`                                                               | `<unknown>` |
|   +7.4% |    +2 |  0.5% → 0.6% | 27 → 29 | `G1FullGCMarker::follow_marking_stacks`                                                      | `<unknown>` |
|   +9.1% |    +2 |  0.4% → 0.5% | 22 → 24 | `G1FullGCMarker::mark_object`                                                                | `<unknown>` |
| +100.0% |    +2 | <0.1% → 0.1% |   2 → 4 | `Runtime1::counter_overflow`                                                                 | `<unknown>` |

##### Standard library

|  Change | Delta |             % |       Samples | Function             | Location                                             |
| ------: | ----: | ------------: | ------------: | -------------------- | ---------------------------------------------------- |
|     new |   +36 |   0.0% → 0.7% |        0 → 36 | `invokeStatic`       | `java.lang.invoke.LambdaForm$DMH.0x000000b001004800` |
|     new |   +36 |   0.0% → 0.7% |        0 → 36 | `invoke`             | `java.lang.invoke.LambdaForm$MH.0x000000b001009800`  |
|   +0.8% |    +9 | 21.7% → 23.9% | 1,153 → 1,162 | `helpJoin`           | `java.util.concurrent.ForkJoinPool`                  |
|  +75.0% |    +6 |   0.2% → 0.3% |        8 → 14 | `tryCompensate`      | `java.util.concurrent.ForkJoinPool`                  |
|  +11.8% |    +4 |   0.6% → 0.8% |       34 → 38 | `invokeExact_MT`     | `java.lang.invoke.Invokers$Holder`                   |
|  +12.5% |    +4 |   0.6% → 0.7% |       32 → 36 | `invokeImpl`         | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  +12.5% |    +4 |   0.6% → 0.7% |       32 → 36 | `invoke`             | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  +12.5% |    +4 |   0.6% → 0.7% |       32 → 36 | `invoke`             | `java.lang.reflect.Method`                           |
|   +6.9% |    +4 |   1.1% → 1.3% |       58 → 62 | `unpark`             | `java.util.concurrent.locks.LockSupport`             |
|     new |    +4 |   0.0% → 0.1% |         0 → 4 | `allocateInstance`   | `jdk.internal.misc.Unsafe`                           |
|  +20.0% |    +3 |   0.3% → 0.4% |       15 → 18 | `executePrivileged`  | `java.security.AccessController`                     |
|  +20.0% |    +3 |   0.3% → 0.4% |       15 → 18 | `doPrivileged`       | `java.security.AccessController`                     |
|   +5.3% |    +3 |   1.1% → 1.2% |       57 → 60 | `unpark`             | `jdk.internal.misc.Unsafe`                           |
| +300.0% |    +3 |  <0.1% → 0.1% |         1 → 4 | `allocateInstance`   | `java.lang.invoke.DirectMethodHandle`                |
|     new |    +3 |   0.0% → 0.1% |         0 → 3 | `newInvokeSpecial`   | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |    +3 |   0.0% → 0.1% |         0 → 3 | `linkToTargetMethod` | `java.lang.invoke.Invokers$Holder`                   |
|  +12.5% |    +2 |   0.3% → 0.4% |       16 → 18 | `apply`              | `scala.runtime.function.JProcedure1`                 |
|  +12.5% |    +2 |   0.3% → 0.4% |       16 → 18 | `foreach`            | `scala.collection.immutable.List`                    |
| +200.0% |    +2 |  <0.1% → 0.1% |         1 → 3 | `newLength`          | `jdk.internal.util.ArraysSupport`                    |
| +200.0% |    +2 |  <0.1% → 0.1% |         1 → 3 | `getResource`        | `jdk.internal.loader.URLClassPath`                   |

##### JIT

| Change | Delta |            % | Samples | Function      | Location    |
| -----: | ----: | -----------: | ------: | ------------- | ----------- |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `itable stub` | `<unknown>` |

##### Compiler

|  Change | Delta |            % | Samples | Function                                    | Location    |
| ------: | ----: | -----------: | ------: | ------------------------------------------- | ----------- |
|  +29.2% |    +7 |  0.5% → 0.6% | 24 → 31 | `Compile::Code_Gen`                         | `<unknown>` |
| +250.0% |    +5 | <0.1% → 0.1% |   2 → 7 | `Matcher::match`                            | `<unknown>` |
|   +5.3% |    +3 |  1.1% → 1.2% | 57 → 60 | `Compile::Compile`                          | `<unknown>` |
|   +5.3% |    +3 |  1.1% → 1.2% | 57 → 60 | `C2Compiler::compile_method`                | `<unknown>` |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `CompileBroker::compile_method_base`        | `<unknown>` |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `GraphBuilder::GraphBuilder`                | `<unknown>` |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `Compilation::build_hir`                    | `<unknown>` |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `Matcher::xform`                            | `<unknown>` |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `PhaseLive::compute`                        | `<unknown>` |
|  +75.0% |    +3 |         0.1% |   4 → 7 | `PhaseIterGVN::transform_old`               | `<unknown>` |
|  +75.0% |    +3 |         0.1% |   4 → 7 | `PhaseIterGVN::optimize`                    | `<unknown>` |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `PhaseOutput::BuildOopMaps`                 | `<unknown>` |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `PhaseIterGVN::add_users_to_worklist`       | `<unknown>` |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `PhaseCFG::global_code_motion`              | `<unknown>` |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `PhaseCFG::do_global_code_motion`           | `<unknown>` |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `ciSignature::ciSignature`                  | `<unknown>` |
|   +2.5% |    +2 |  1.5% → 1.7% | 81 → 83 | `CompileBroker::compiler_thread_loop`       | `<unknown>` |
| +100.0% |    +2 | <0.1% → 0.1% |   2 → 4 | `CompileBroker::compile_method`             | `<unknown>` |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `GraphBuilder::iterate_bytecodes_for_block` | `<unknown>` |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `GraphBuilder::iterate_all_blocks`          | `<unknown>` |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

| Change | Delta |             % |       Samples | Function              | Location                                                   |
| -----: | ----: | ------------: | ------------: | --------------------- | ---------------------------------------------------------- |
|  -8.8% |  -446 | 94.9% → 94.7% | 5,045 → 4,599 | `run`                 | `java.util.concurrent.ForkJoinWorkerThread`                |
|  -8.8% |  -445 | 94.9% → 94.7% | 5,044 → 4,599 | `runWorker`           | `java.util.concurrent.ForkJoinPool`                        |
|  -8.1% |  -364 | 84.7% → 85.1% | 4,500 → 4,136 | `join`                | `java.util.concurrent.ForkJoinTask`                        |
|  -8.0% |  -362 | 84.7% → 85.2% | 4,499 → 4,137 | `awaitDone`           | `java.util.concurrent.ForkJoinTask`                        |
|  -7.4% |  -345 | 87.8% → 88.9% | 4,665 → 4,320 | `doExec`              | `java.util.concurrent.ForkJoinTask`                        |
|  -7.4% |  -345 | 88.0% → 89.2% | 4,676 → 4,331 | `scan`                | `java.util.concurrent.ForkJoinPool`                        |
|  -7.4% |  -344 | 87.2% → 88.3% | 4,633 → 4,289 | `compute`             | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
|  -7.4% |  -344 | 87.2% → 88.3% | 4,633 → 4,289 | `exec`                | `java.util.concurrent.RecursiveTask`                       |
|  -7.4% |  -344 | 87.8% → 89.0% | 4,668 → 4,324 | `topLevelExec`        | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
|  -7.8% |  -333 | 80.1% → 80.7% | 4,254 → 3,921 | `tryRemoveAndExec`    | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| -11.8% |  -239 | 38.1% → 36.7% | 2,024 → 1,785 | `computeDirectly`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -11.0% |  -166 | 28.5% → 27.7% | 1,513 → 1,347 | `findNearestCentroid` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -19.3% |  -164 | 16.0% → 14.1% |     848 → 684 | `Unsafe_Park`         | `<unknown>`                                                |
| -19.3% |  -164 | 16.0% → 14.1% |     850 → 686 | `park`                | `jdk.internal.misc.Unsafe`                                 |
| -19.0% |  -162 | 16.1% → 14.2% |     853 → 691 | `__psynch_cvwait`     | `<unknown>`                                                |
| -19.2% |  -160 | 15.7% → 13.9% |     834 → 674 | `Parker::park`        | `<unknown>`                                                |
| -19.2% |  -159 | 15.6% → 13.8% |     830 → 671 | `park`                | `java.util.concurrent.locks.LockSupport`                   |
| -27.0% |   -98 |   6.8% → 5.5% |     363 → 265 | `awaitWork`           | `java.util.concurrent.ForkJoinPool`                        |
|  -8.1% |   -92 | 21.3% → 21.4% | 1,130 → 1,038 | `invoke`              | `java.util.concurrent.ForkJoinTask`                        |
|  -9.0% |   -89 | 18.6% → 18.5% |     989 → 900 | `distance`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### Ours

| Change | Delta |             % |       Samples | Function                 | Location                                                               |
| -----: | ----: | ------------: | ------------: | ------------------------ | ---------------------------------------------------------------------- |
|  -7.4% |  -344 | 87.2% → 88.3% | 4,633 → 4,289 | `compute`                | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| -11.8% |  -239 | 38.1% → 36.7% | 2,024 → 1,785 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| -11.0% |  -166 | 28.5% → 27.7% | 1,513 → 1,347 | `findNearestCentroid`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -9.0% |   -89 | 18.6% → 18.5% |     989 → 900 | `distance`               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| -14.7% |   -79 |  10.1% → 9.4% |     536 → 457 | `lambda$run$0`           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| -14.7% |   -79 |  10.1% → 9.4% |     536 → 457 | `call`                   | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b001183d68` |
| -14.3% |   -73 |   9.6% → 9.0% |     510 → 437 | `collectClusters`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -5.1% |   -41 | 15.2% → 15.7% |     806 → 765 | `computeClusterAverages` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -5.1% |   -41 | 15.2% → 15.7% |     806 → 765 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| -10.7% |   -36 |   6.3% → 6.2% |     337 → 301 | `combineResults`         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -4.3% |   -34 | 14.9% → 15.6% |     794 → 760 | `average`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| -15.3% |   -34 |   4.2% → 3.9% |     222 → 188 | `lambda$merge$6`         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| -15.3% |   -34 |   4.2% → 3.9% |     222 → 188 | `apply`                  | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b001187218` |
| -10.1% |   -34 |   6.3% → 6.2% |     337 → 303 | `merge`                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -8.9% |   -28 |          5.9% |     316 → 288 | `lambda$merge$7`         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -8.8% |   -28 |   6.0% → 5.9% |     317 → 289 | `accept`                 | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000b001186d88` |
|  -0.7% |   -12 | 31.7% → 34.5% | 1,686 → 1,674 | `vectorSum`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -0.7% |   -12 | 31.7% → 34.5% | 1,686 → 1,674 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| -55.6% |    -5 |   0.2% → 0.1% |         9 → 4 | `boxed`                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| -75.0% |    -3 |  0.1% → <0.1% |         4 → 1 | `createSubtask`          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |

##### Native

| Change | Delta |             % |   Samples | Function                                          | Location    |
| -----: | ----: | ------------: | --------: | ------------------------------------------------- | ----------- |
| -19.3% |  -164 | 16.0% → 14.1% | 848 → 684 | `Unsafe_Park`                                     | `<unknown>` |
| -19.0% |  -162 | 16.1% → 14.2% | 853 → 691 | `__psynch_cvwait`                                 | `<unknown>` |
| -19.2% |  -160 | 15.7% → 13.9% | 834 → 674 | `Parker::park`                                    | `<unknown>` |
| -54.1% |   -20 |   0.7% → 0.3% |   37 → 17 | `G1EvacuateRegionsBaseTask::work`                 | `<unknown>` |
|  -7.8% |   -17 |   4.1% → 4.2% | 219 → 202 | `_pthread_start`                                  | `<unknown>` |
|  -7.8% |   -17 |   4.1% → 4.2% | 219 → 202 | `thread_start`                                    | `<unknown>` |
|  -7.3% |   -16 |   4.1% → 4.2% | 218 → 202 | `Thread::call_run`                                | `<unknown>` |
|  -7.3% |   -16 |   4.1% → 4.2% | 218 → 202 | `thread_native_entry`                             | `<unknown>` |
| -51.7% |   -15 |   0.5% → 0.3% |   29 → 14 | `G1ParEvacuateFollowersClosure::do_void`          | `<unknown>` |
| -51.7% |   -15 |   0.5% → 0.3% |   29 → 14 | `G1EvacuateRegionsTask::evacuate_live_objects`    | `<unknown>` |
| -63.6% |   -14 |   0.4% → 0.2% |    22 → 8 | `G1ParScanThreadState::trim_queue_to_threshold`   | `<unknown>` |
| -63.6% |   -14 |   0.4% → 0.2% |    22 → 8 | `TaskTerminator::offer_termination`               | `<unknown>` |
| -81.3% |   -13 |   0.3% → 0.1% |    16 → 3 | `JVM_IHashCode`                                   | `<unknown>` |
|  -9.6% |   -11 |   2.2% → 2.1% | 115 → 104 | `WorkerThread::run`                               | `<unknown>` |
| -39.3% |   -11 |   0.5% → 0.3% |   28 → 17 | `pthread_jit_write_protect_np`                    | `<unknown>` |
| -43.5% |   -10 |   0.4% → 0.3% |   23 → 13 | `Monitor::wait_without_safepoint_check`           | `<unknown>` |
| -58.8% |   -10 |   0.3% → 0.1% |    17 → 7 | `G1ParScanThreadState::do_copy_to_survivor_space` | `<unknown>` |
| -25.0% |    -9 |   0.7% → 0.6% |   36 → 27 | `PlatformMonitor::wait`                           | `<unknown>` |
|  -4.8% |    -8 |   3.1% → 3.3% | 167 → 159 | `arrayof_jint_disjoint_arraycopy`                 | `<unknown>` |
| -16.0% |    -8 |          0.9% |   50 → 42 | `G1FullGCMarker::complete_marking`                | `<unknown>` |

##### Standard library

|  Change | Delta |             % |       Samples | Function           | Location                                             |
| ------: | ----: | ------------: | ------------: | ------------------ | ---------------------------------------------------- |
|   -8.8% |  -446 | 94.9% → 94.7% | 5,045 → 4,599 | `run`              | `java.util.concurrent.ForkJoinWorkerThread`          |
|   -8.8% |  -445 | 94.9% → 94.7% | 5,044 → 4,599 | `runWorker`        | `java.util.concurrent.ForkJoinPool`                  |
|   -8.1% |  -364 | 84.7% → 85.1% | 4,500 → 4,136 | `join`             | `java.util.concurrent.ForkJoinTask`                  |
|   -8.0% |  -362 | 84.7% → 85.2% | 4,499 → 4,137 | `awaitDone`        | `java.util.concurrent.ForkJoinTask`                  |
|   -7.4% |  -345 | 87.8% → 88.9% | 4,665 → 4,320 | `doExec`           | `java.util.concurrent.ForkJoinTask`                  |
|   -7.4% |  -345 | 88.0% → 89.2% | 4,676 → 4,331 | `scan`             | `java.util.concurrent.ForkJoinPool`                  |
|   -7.4% |  -344 | 87.2% → 88.3% | 4,633 → 4,289 | `exec`             | `java.util.concurrent.RecursiveTask`                 |
|   -7.4% |  -344 | 87.8% → 89.0% | 4,668 → 4,324 | `topLevelExec`     | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|   -7.8% |  -333 | 80.1% → 80.7% | 4,254 → 3,921 | `tryRemoveAndExec` | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|  -19.3% |  -164 | 16.0% → 14.1% |     850 → 686 | `park`             | `jdk.internal.misc.Unsafe`                           |
|  -19.2% |  -159 | 15.6% → 13.8% |     830 → 671 | `park`             | `java.util.concurrent.locks.LockSupport`             |
|  -27.0% |   -98 |   6.8% → 5.5% |     363 → 265 | `awaitWork`        | `java.util.concurrent.ForkJoinPool`                  |
|   -8.1% |   -92 | 21.3% → 21.4% | 1,130 → 1,038 | `invoke`           | `java.util.concurrent.ForkJoinTask`                  |
|  -14.7% |   -79 |  10.1% → 9.4% |     536 → 457 | `exec`             | `java.util.concurrent.ForkJoinTask$AdaptedCallable`  |
|  -28.9% |   -61 |   4.0% → 3.1% |     211 → 150 | `computeIfAbsent`  | `java.util.HashMap`                                  |
|  -14.0% |   -32 |   4.3% → 4.1% |     229 → 197 | `get`              | `java.util.ArrayList`                                |
| removed |   -32 |   0.6% → 0.0% |        32 → 0 | `invokeStatic`     | `java.lang.invoke.LambdaForm$DMH.0x000000a001004800` |
| removed |   -32 |   0.6% → 0.0% |        32 → 0 | `invoke`           | `java.lang.invoke.LambdaForm$MH.0x000000a001009800`  |
|  -60.8% |   -31 |   1.0% → 0.4% |       51 → 20 | `hash`             | `java.util.HashMap`                                  |
|  -16.5% |   -29 |   3.3% → 3.0% |     176 → 147 | `copyOf`           | `java.util.Arrays`                                   |

##### JIT

|  Change | Delta |            % | Samples | Function                   | Location    |
| ------: | ----: | -----------: | ------: | -------------------------- | ----------- |
|  -32.8% |   -20 |  1.1% → 0.8% | 61 → 41 | `zero_blocks`              | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0xbb)`   | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0xbbaa)` | `<unknown>` |

##### Compiler

|  Change | Delta |            % | Samples | Function                             | Location    |
| ------: | ----: | -----------: | ------: | ------------------------------------ | ----------- |
|  -66.7% |    -4 | 0.1% → <0.1% |   6 → 2 | `Compilation::emit_lir`              | `<unknown>` |
|  -20.0% |    -3 |  0.3% → 0.2% | 15 → 12 | `PhaseIdealLoop::optimize`           | `<unknown>` |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `LoadKlassNode::make`                | `<unknown>` |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `ciEnv::get_method_by_index_impl`    | `<unknown>` |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `PhaseChaitin::build_ifg_virtual`    | `<unknown>` |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `Type::cmp`                          | `<unknown>` |
|  -15.4% |    -2 |         0.2% | 13 → 11 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |
|  -15.4% |    -2 |         0.2% | 13 → 11 | `PhaseIdealLoop::PhaseIdealLoop`     | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `GraphKit::load_object_klass`        | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `GraphKit::type_check_receiver`      | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `ciEnv::register_method`             | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `PhaseOutput::install_code`          | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `PhaseIdealLoop::Dominators`         | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `Node::is_CFG`                       | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `ciEnv::lookup_method`               | `<unknown>` |
|  -66.7% |    -2 | 0.1% → <0.1% |   3 → 1 | `PhaseOutput::fill_buffer`           | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `LIR_OpVisitState::visit`            | `<unknown>` |
|  -50.0% |    -2 | 0.1% → <0.1% |   4 → 2 | `LinearScan::do_linear_scan`         | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `LIRGenerator::block_do`             | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `BlockList::iterate_forward`         | `<unknown>` |

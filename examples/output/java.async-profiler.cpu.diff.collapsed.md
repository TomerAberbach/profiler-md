# Sampling profile diff

Collected 4,682 → 4,436 samples (-246 samples, -5.3%).

| Category          | Change | Delta |             % |       Samples |
| ----------------- | -----: | ----: | ------------: | ------------: |
| Ours              |  -3.8% |  -101 | 57.4% → 58.3% | 2,688 → 2,587 |
| Native            |  -7.7% |   -94 | 26.0% → 25.3% | 1,216 → 1,122 |
| Standard library  |  -5.9% |   -39 | 14.2% → 14.1% |     665 → 626 |
| JIT               | -31.3% |   -20 |   1.4% → 1.0% |       64 → 44 |
| Compiler          | +14.3% |    +7 |   1.0% → 1.3% |       49 → 56 |
| Garbage collector |    new |    +1 |  0.0% → <0.1% |         0 → 1 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |             % |   Samples | Function                                                                                        | Location                                                  |
| ------: | ----: | ------------: | --------: | ----------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
|   +7.9% |   +67 | 18.2% → 20.7% | 853 → 920 | `accumulate`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  +60.0% |    +9 |   0.3% → 0.5% |   15 → 24 | `arrayof_jint_disjoint_arraycopy`                                                               | `<unknown>`                                               |
|   +5.6% |    +8 |   3.1% → 3.4% | 143 → 151 | `elementData`                                                                                   | `java.util.ArrayList`                                     |
|  +27.8% |    +5 |   0.4% → 0.5% |   18 → 23 | `hash`                                                                                          | `java.util.HashMap`                                       |
|     new |    +5 |   0.0% → 0.1% |     0 → 5 | `G1FullGCCompactTask::copy_object_to_new_location`                                              | `<unknown>`                                               |
|     new |    +5 |   0.0% → 0.1% |     0 → 5 | `PhaseChaitin::Split`                                                                           | `<unknown>`                                               |
|  +50.0% |    +4 |   0.2% → 0.3% |    8 → 12 | `copyOf`                                                                                        | `java.util.Arrays`                                        |
|     new |    +3 |   0.0% → 0.1% |     0 → 3 | `exec`                                                                                          | `java.util.concurrent.RecursiveTask`                      |
| +150.0% |    +3 |  <0.1% → 0.1% |     2 → 5 | `runWorker`                                                                                     | `java.util.concurrent.ForkJoinPool`                       |
| +100.0% |    +3 |          0.1% |     3 → 6 | `arrayof_oop_disjoint_arraycopy`                                                                | `<unknown>`                                               |
| +300.0% |    +3 |  <0.1% → 0.1% |     1 → 4 | `void OopOopIterateDispatch<G1AdjustClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>` | `<unknown>`                                               |
| +300.0% |    +3 |  <0.1% → 0.1% |     1 → 4 | `ClassLoaderData::oops_do`                                                                      | `<unknown>`                                               |
|     new |    +3 |   0.0% → 0.1% |     0 → 3 | `void HeapRegion::apply_to_marked_objects<G1FullGCPrepareTask::G1PrepareCompactLiveClosure>`    | `<unknown>`                                               |
|     new |    +3 |   0.0% → 0.1% |     0 → 3 | `LinearScanWalker::free_collect_inactive_fixed`                                                 | `<unknown>`                                               |
|     new |    +2 |  0.0% → <0.1% |     0 → 2 | `park`                                                                                          | `jdk.internal.misc.Unsafe`                                |
|  +40.0% |    +2 |   0.1% → 0.2% |     5 → 7 | `G1FullGCMarker::follow_object`                                                                 | `<unknown>`                                               |
| +200.0% |    +2 |  <0.1% → 0.1% |     1 → 3 | `merge`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`               |
| +200.0% |    +2 |  <0.1% → 0.1% |     1 → 3 | `addAll`                                                                                        | `java.util.ArrayList`                                     |
|   +8.0% |    +2 |   0.5% → 0.6% |   25 → 27 | `grow`                                                                                          | `java.util.ArrayList`                                     |
|  +50.0% |    +2 |          0.1% |     4 → 6 | `ObjArrayAllocator::initialize`                                                                 | `<unknown>`                                               |

##### Ours

|  Change | Delta |             % |   Samples | Function                   | Location                                                               |
| ------: | ----: | ------------: | --------: | -------------------------- | ---------------------------------------------------------------------- |
|   +7.9% |   +67 | 18.2% → 20.7% | 853 → 920 | `accumulate`               | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| +200.0% |    +2 |  <0.1% → 0.1% |     1 → 3 | `merge`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|     new |    +1 |  0.0% → <0.1% |     0 → 1 | `average`                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|     new |    +1 |  0.0% → <0.1% |     0 → 1 | `apply`                    | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`                    |
|     new |    +1 |  0.0% → <0.1% |     0 → 1 | `combineResults`           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| +100.0% |    +1 |         <0.1% |     1 → 2 | `<init>`                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|     new |    +1 |  0.0% → <0.1% |     0 → 1 | `<init>`                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|     new |    +1 |  0.0% → <0.1% |     0 → 1 | `lambda$generateData$4`    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|     new |    +1 |  0.0% → <0.1% |     0 → 1 | `forkThreshold`            | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|     new |    +1 |  0.0% → <0.1% |     0 → 1 | `lambda$collectClusters$0` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|     new |    +1 |  0.0% → <0.1% |     0 → 1 | `<init>`                   | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a8011a7000` |

##### Native

|  Change | Delta |            % | Samples | Function                                                                                        | Location    |
| ------: | ----: | -----------: | ------: | ----------------------------------------------------------------------------------------------- | ----------- |
|  +60.0% |    +9 |  0.3% → 0.5% | 15 → 24 | `arrayof_jint_disjoint_arraycopy`                                                               | `<unknown>` |
|     new |    +5 |  0.0% → 0.1% |   0 → 5 | `G1FullGCCompactTask::copy_object_to_new_location`                                              | `<unknown>` |
| +100.0% |    +3 |         0.1% |   3 → 6 | `arrayof_oop_disjoint_arraycopy`                                                                | `<unknown>` |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `void OopOopIterateDispatch<G1AdjustClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>` | `<unknown>` |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `ClassLoaderData::oops_do`                                                                      | `<unknown>` |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `void HeapRegion::apply_to_marked_objects<G1FullGCPrepareTask::G1PrepareCompactLiveClosure>`    | `<unknown>` |
|  +40.0% |    +2 |  0.1% → 0.2% |   5 → 7 | `G1FullGCMarker::follow_object`                                                                 | `<unknown>` |
|  +50.0% |    +2 |         0.1% |   4 → 6 | `ObjArrayAllocator::initialize`                                                                 | `<unknown>` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `Unsafe_Unpark`                                                                                 | `<unknown>` |
|  +25.0% |    +2 |         0.2% |  8 → 10 | `_platform_memset`                                                                              | `<unknown>` |
|  +16.7% |    +2 |         0.3% | 12 → 14 | `semaphore_wait_trap`                                                                           | `<unknown>` |
|  +40.0% |    +2 |  0.1% → 0.2% |   5 → 7 | `tlv_get_addr`                                                                                  | `<unknown>` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `G1FullGCCompactionPoint::forward`                                                              | `<unknown>` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `__mmap`                                                                                        | `<unknown>` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `os::javaTimeNanos`                                                                             | `<unknown>` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `sys_icache_invalidate`                                                                         | `<unknown>` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `G1MergeHeapRootsTask::G1MergeCardSetClosure::do_heap_region`                                   | `<unknown>` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `G1BarrierSetRuntime::write_ref_array_post_entry`                                               | `<unknown>` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `G1BarrierSet::write_ref_array_work`                                                            | `<unknown>` |
| +100.0% |    +1 |        <0.1% |   1 → 2 | `Unsafe_Park`                                                                                   | `<unknown>` |

##### Standard library

|  Change | Delta |            % |   Samples | Function                 | Location                                          |
| ------: | ----: | -----------: | --------: | ------------------------ | ------------------------------------------------- |
|   +5.6% |    +8 |  3.1% → 3.4% | 143 → 151 | `elementData`            | `java.util.ArrayList`                             |
|  +27.8% |    +5 |  0.4% → 0.5% |   18 → 23 | `hash`                   | `java.util.HashMap`                               |
|  +50.0% |    +4 |  0.2% → 0.3% |    8 → 12 | `copyOf`                 | `java.util.Arrays`                                |
|     new |    +3 |  0.0% → 0.1% |     0 → 3 | `exec`                   | `java.util.concurrent.RecursiveTask`              |
| +150.0% |    +3 | <0.1% → 0.1% |     2 → 5 | `runWorker`              | `java.util.concurrent.ForkJoinPool`               |
|     new |    +2 | 0.0% → <0.1% |     0 → 2 | `park`                   | `jdk.internal.misc.Unsafe`                        |
| +200.0% |    +2 | <0.1% → 0.1% |     1 → 3 | `addAll`                 | `java.util.ArrayList`                             |
|   +8.0% |    +2 |  0.5% → 0.6% |   25 → 27 | `grow`                   | `java.util.ArrayList`                             |
| +200.0% |    +2 | <0.1% → 0.1% |     1 → 3 | `putVal`                 | `java.util.HashMap`                               |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `join`                   | `java.util.concurrent.ForkJoinTask`               |
| +100.0% |    +1 |        <0.1% |     1 → 2 | `get`                    | `java.util.ArrayList`                             |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `awaitWork`              | `java.util.concurrent.ForkJoinPool`               |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `loadClass`              | `jdk.internal.loader.ClassLoaders$AppClassLoader` |
|  +50.0% |    +1 | <0.1% → 0.1% |     2 → 3 | `putMapEntries`          | `java.util.HashMap`                               |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `<init>`                 | `java.util.HashMap`                               |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `getExactSizeIfKnown`    | `java.util.Spliterator`                           |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `addConstant`            | `jdk.internal.org.objectweb.asm.SymbolTable`      |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `casAux`                 | `java.util.concurrent.ForkJoinTask`               |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `loadFence`              | `jdk.internal.misc.Unsafe`                        |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `exactOutputSizeIfKnown` | `java.util.stream.AbstractPipeline`               |

##### Compiler

|  Change | Delta |            % | Samples | Function                                        | Location    |
| ------: | ----: | -----------: | ------: | ----------------------------------------------- | ----------- |
|     new |    +5 |  0.0% → 0.1% |   0 → 5 | `PhaseChaitin::Split`                           | `<unknown>` |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `LinearScanWalker::free_collect_inactive_fixed` | `<unknown>` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `PhaseCFG::schedule_local`                      | `<unknown>` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `LinearScanWalker::alloc_free_reg`              | `<unknown>` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `PhaseLive::add_liveout`                        | `<unknown>` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `Node_Backward_Iterator::next`                  | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `GraphBuilder::iterate_bytecodes_for_block`     | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseChaitin::Register_Allocate`               | `<unknown>` |
| +100.0% |    +1 |        <0.1% |   1 → 2 | `PhaseChaitin::elide_copy`                      | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseIterGVN::remove_globally_dead_node`       | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseIdealLoop::split_if_with_blocks`          | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseIdealLoop::build_loop_early`              | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseCFG::partial_latency_of_defs`             | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `Matcher::Label_Root`                           | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseOutput::BuildOopMaps`                     | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseValues::makecon`                          | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `RetNode::is_block_proj`                        | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseCCP::push_loadp`                          | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseIdealLoop::has_local_phi_input`           | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseLive::compute`                            | `<unknown>` |

#### Improvements

Functions with the largest decrease in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |             % |   Samples | Function                                                                          | Location                                                   |
| ------: | ----: | ------------: | --------: | --------------------------------------------------------------------------------- | ---------------------------------------------------------- |
|  -12.6% |  -111 | 18.8% → 17.4% | 881 → 770 | `distance`                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -14.0% |   -33 |   5.0% → 4.6% | 236 → 203 | `forward_copy_longs`                                                              | `<unknown>`                                                |
|   -4.5% |   -29 | 13.8% → 14.0% | 648 → 619 | `__psynch_cvwait`                                                                 | `<unknown>`                                                |
|   -8.1% |   -29 |   7.6% → 7.4% | 357 → 328 | `findNearestCentroid`                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -23.2% |   -26 |   2.4% → 1.9% |  112 → 86 | `collectClusters`                                                                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -15.2% |   -20 |   2.8% → 2.5% | 132 → 112 | `doubleValue`                                                                     | `java.lang.Double`                                         |
|  -26.7% |   -16 |   1.3% → 1.0% |   60 → 44 | `zero_blocks`                                                                     | `<unknown>`                                                |
|  -33.3% |   -14 |   0.9% → 0.6% |   42 → 28 | `checkIndex`                                                                      | `java.util.Objects`                                        |
|  -20.3% |   -12 |   1.3% → 1.1% |   59 → 47 | `add`                                                                             | `java.util.ArrayList`                                      |
|  -16.7% |    -8 |   1.0% → 0.9% |   48 → 40 | `__psynch_cvsignal`                                                               | `<unknown>`                                                |
| removed |    -8 |   0.2% → 0.0% |     8 → 0 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region` | `<unknown>`                                                |
|  -87.5% |    -7 |  0.2% → <0.1% |     8 → 1 | `newLength`                                                                       | `jdk.internal.util.ArraysSupport`                          |
|  -58.3% |    -7 |   0.3% → 0.1% |    12 → 5 | `__psynch_mutexwait`                                                              | `<unknown>`                                                |
|  -87.5% |    -7 |  0.2% → <0.1% |     8 → 1 | `void G1ScanEvacuatedObjClosure::do_oop_work<narrowOop>`                          | `<unknown>`                                                |
|  -60.0% |    -6 |   0.2% → 0.1% |    10 → 4 | `G1ParScanThreadState::do_copy_to_survivor_space`                                 | `<unknown>`                                                |
| removed |    -6 |   0.1% → 0.0% |     6 → 0 | `G1ParScanThreadState::do_partial_array`                                          | `<unknown>`                                                |
|  -23.1% |    -6 |   0.6% → 0.5% |   26 → 20 | `G1FullGCMarker::mark_object`                                                     | `<unknown>`                                                |
|  -66.7% |    -6 |   0.2% → 0.1% |     9 → 3 | `G1RegionMarkStatsCache::add_live_words`                                          | `<unknown>`                                                |
| removed |    -5 |   0.1% → 0.0% |     5 → 0 | `G1ParScanThreadState::trim_queue_to_threshold`                                   | `<unknown>`                                                |
|  -71.4% |    -5 |  0.1% → <0.1% |     7 → 2 | `scan`                                                                            | `java.util.concurrent.ForkJoinPool`                        |

##### Ours

|  Change | Delta |             % |   Samples | Function              | Location                                                               |
| ------: | ----: | ------------: | --------: | --------------------- | ---------------------------------------------------------------------- |
|  -12.6% |  -111 | 18.8% → 17.4% | 881 → 770 | `distance`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -8.1% |   -29 |   7.6% → 7.4% | 357 → 328 | `findNearestCentroid` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -23.2% |   -26 |   2.4% → 1.9% |  112 → 86 | `collectClusters`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -1.1% |    -5 |  9.8% → 10.3% | 460 → 455 | `vectorSum`           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| removed |    -3 |   0.1% → 0.0% |     3 → 0 | `accept`              | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a8011a7000` |
|  -40.0% |    -2 |          0.1% |     5 → 3 | `add`                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -66.7% |    -2 |  0.1% → <0.1% |     3 → 1 | `createSubtask`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `createSubtask`       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |

##### Native

|  Change | Delta |             % |   Samples | Function                                                                          | Location    |
| ------: | ----: | ------------: | --------: | --------------------------------------------------------------------------------- | ----------- |
|  -14.0% |   -33 |   5.0% → 4.6% | 236 → 203 | `forward_copy_longs`                                                              | `<unknown>` |
|   -4.5% |   -29 | 13.8% → 14.0% | 648 → 619 | `__psynch_cvwait`                                                                 | `<unknown>` |
|  -16.7% |    -8 |   1.0% → 0.9% |   48 → 40 | `__psynch_cvsignal`                                                               | `<unknown>` |
| removed |    -8 |   0.2% → 0.0% |     8 → 0 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region` | `<unknown>` |
|  -58.3% |    -7 |   0.3% → 0.1% |    12 → 5 | `__psynch_mutexwait`                                                              | `<unknown>` |
|  -87.5% |    -7 |  0.2% → <0.1% |     8 → 1 | `void G1ScanEvacuatedObjClosure::do_oop_work<narrowOop>`                          | `<unknown>` |
|  -60.0% |    -6 |   0.2% → 0.1% |    10 → 4 | `G1ParScanThreadState::do_copy_to_survivor_space`                                 | `<unknown>` |
| removed |    -6 |   0.1% → 0.0% |     6 → 0 | `G1ParScanThreadState::do_partial_array`                                          | `<unknown>` |
|  -23.1% |    -6 |   0.6% → 0.5% |   26 → 20 | `G1FullGCMarker::mark_object`                                                     | `<unknown>` |
|  -66.7% |    -6 |   0.2% → 0.1% |     9 → 3 | `G1RegionMarkStatsCache::add_live_words`                                          | `<unknown>` |
| removed |    -5 |   0.1% → 0.0% |     5 → 0 | `G1ParScanThreadState::trim_queue_to_threshold`                                   | `<unknown>` |
|  -83.3% |    -5 |  0.1% → <0.1% |     6 → 1 | `_sigtramp`                                                                       | `<unknown>` |
| removed |    -5 |   0.1% → 0.0% |     5 → 0 | `ClassLoaderDataGraphKlassIteratorAtomic::next_klass`                             | `<unknown>` |
| removed |    -4 |   0.1% → 0.0% |     4 → 0 | `G1FullGCMarker::publish_and_drain_oop_tasks`                                     | `<unknown>` |
|  -75.0% |    -3 |  0.1% → <0.1% |     4 → 1 | `G1BarrierSet::invalidate`                                                        | `<unknown>` |
|  -37.5% |    -3 |   0.2% → 0.1% |     8 → 5 | `inflate_fast`                                                                    | `<unknown>` |
| removed |    -2 |  <0.1% → 0.0% |     2 → 0 | `Continuation::is_return_barrier_entry`                                           | `<unknown>` |
|  -10.0% |    -2 |          0.4% |   20 → 18 | `_platform_bzero`                                                                 | `<unknown>` |
| removed |    -2 |  <0.1% → 0.0% |     2 → 0 | `void G1ScanClosureBase::handle_non_cset_obj_common<narrowOop>`                   | `<unknown>` |
| removed |    -2 |  <0.1% → 0.0% |     2 → 0 | `JavaThreadParkedState::JavaThreadParkedState`                                    | `<unknown>` |

##### Standard library

|  Change | Delta |            % |   Samples | Function           | Location                                      |
| ------: | ----: | -----------: | --------: | ------------------ | --------------------------------------------- |
|  -15.2% |   -20 |  2.8% → 2.5% | 132 → 112 | `doubleValue`      | `java.lang.Double`                            |
|  -33.3% |   -14 |  0.9% → 0.6% |   42 → 28 | `checkIndex`       | `java.util.Objects`                           |
|  -20.3% |   -12 |  1.3% → 1.1% |   59 → 47 | `add`              | `java.util.ArrayList`                         |
|  -87.5% |    -7 | 0.2% → <0.1% |     8 → 1 | `newLength`        | `jdk.internal.util.ArraysSupport`             |
|  -71.4% |    -5 | 0.1% → <0.1% |     7 → 2 | `scan`             | `java.util.concurrent.ForkJoinPool`           |
|  -16.7% |    -4 |         0.5% |   24 → 20 | `helpJoin`         | `java.util.concurrent.ForkJoinPool`           |
|  -66.7% |    -4 | 0.1% → <0.1% |     6 → 2 | `tryRemoveAndExec` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|   -2.2% |    -3 |  2.9% → 3.0% | 134 → 131 | `computeIfAbsent`  | `java.util.HashMap`                           |
|  -30.0% |    -3 |         0.2% |    10 → 7 | `merge`            | `java.util.HashMap`                           |
| removed |    -3 |  0.1% → 0.0% |     3 → 0 | `signalWaiters`    | `java.util.concurrent.ForkJoinTask`           |
| removed |    -3 |  0.1% → 0.0% |     3 → 0 | `getAndSetAccess`  | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `doExec`           | `java.util.concurrent.ForkJoinTask`           |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `size`             | `java.util.ArrayList`                         |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `resize`           | `java.util.HashMap`                           |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `topLevelExec`     | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `bindArgumentL`    | `java.lang.invoke.BoundMethodHandle`          |
|  -50.0% |    -1 |        <0.1% |     2 → 1 | `unpark`           | `java.util.concurrent.locks.LockSupport`      |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `signalWork`       | `java.util.concurrent.ForkJoinPool`           |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `refKindIsMethod`  | `java.lang.invoke.MethodHandleNatives`        |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `getRawResult`     | `java.util.concurrent.RecursiveTask`          |

##### JIT

|  Change | Delta |            % | Samples | Function                  | Location    |
| ------: | ----: | -----------: | ------: | ------------------------- | ----------- |
|  -26.7% |   -16 |  1.3% → 1.0% | 60 → 44 | `zero_blocks`             | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `vtable stub`             | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `itable stub`             | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0xbbb)` | `<unknown>` |

##### Compiler

|  Change | Delta |            % | Samples | Function                                       | Location    |
| ------: | ----: | -----------: | ------: | ---------------------------------------------- | ----------- |
| removed |    -5 |  0.1% → 0.0% |   5 → 0 | `PhaseChaitin::gather_lrg_masks`               | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `PhaseIdealLoop::Dominators`                   | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `PhaseAggressiveCoalesce::insert_copies`       | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseIFG::effective_degree`                   | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `lShiftI_reg_immNode::emit`                    | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Matcher::is_vshift_con_pattern`               | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Matcher::xform`                               | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `ciInstanceKlass::get_field_by_offset`         | `<unknown>` |
|  -50.0% |    -1 |        <0.1% |   2 → 1 | `PhaseIdealLoop::build_loop_late_post_work`    | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Compile::disconnect_useless_nodes`            | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseChaitin::compute_initial_block_pressure` | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `TypePtr::singleton`                           | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `ciMethodData::load_data`                      | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Type::hashcons`                               | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `GraphBuilder::state_at_entry`                 | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `ciEnv::get_method_from_handle`                | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhiNode::Ideal`                               | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `MachCallJavaNode::in_RegMask`                 | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Node::replace_edge`                           | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `TypeInt::filter_helper`                       | `<unknown>` |

#### Callers

Callers with the largest change in contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |   Samples | Caller      | Location                                                  |
| -----: | ----: | -----: | --------: | ----------- | --------------------------------------------------------- |
|  +7.9% |   +67 | 100.0% | 853 → 920 | `vectorSum` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `arrayof_jint_disjoint_arraycopy` (`<unknown>`)

| Change | Delta |             % | Samples | Caller   | Location              |
| -----: | ----: | ------------: | ------: | -------- | --------------------- |
| +50.0% |    +4 | 53.3% → 50.0% |  8 → 12 | `copyOf` | `java.util.Arrays`    |
| +80.0% |    +4 | 33.3% → 37.5% |   5 → 9 | `grow`   | `java.util.ArrayList` |
| +50.0% |    +1 | 13.3% → 12.5% |   2 → 3 | `merge`  | `java.util.HashMap`   |

##### `elementData` (`java.util.ArrayList`)

| Change | Delta |      % |   Samples | Caller | Location              |
| -----: | ----: | -----: | --------: | ------ | --------------------- |
|  +5.6% |    +8 | 100.0% | 143 → 151 | `get`  | `java.util.ArrayList` |

##### `hash` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Caller            | Location            |
| ------: | ----: | ------------: | ------: | ----------------- | ------------------- |
|  +29.4% |    +5 | 94.4% → 95.7% | 17 → 22 | `computeIfAbsent` | `java.util.HashMap` |
| removed |    -1 |   5.6% → 0.0% |   1 → 0 | `merge`           | `java.util.HashMap` |
|     new |    +1 |   0.0% → 4.3% |   0 → 1 | `putMapEntries`   | `java.util.HashMap` |

##### `G1FullGCCompactTask::copy_object_to_new_location` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                                               | Location    |
| -----: | ----: | -----------: | ------: | ---------------------------------------------------- | ----------- |
|    new |    +4 | 0.0% → 80.0% |   0 → 4 | `G1FullGCCompactTask::G1CompactRegionClosure::apply` | `<unknown>` |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `G1FullGCCompactTask::compact_region`                | `<unknown>` |

##### `PhaseChaitin::Split` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                            | Location    |
| -----: | ----: | ------------: | ------: | --------------------------------- | ----------- |
|    new |    +5 | 0.0% → 100.0% |   0 → 5 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `copyOf` (`java.util.Arrays`)

|  Change | Delta |             % | Samples | Caller    | Location              |
| ------: | ----: | ------------: | ------: | --------- | --------------------- |
|  +33.3% |    +2 | 75.0% → 66.7% |   6 → 8 | `toArray` | `java.util.ArrayList` |
| +100.0% |    +2 | 25.0% → 33.3% |   2 → 4 | `grow`    | `java.util.ArrayList` |

##### `exec` (`java.util.concurrent.RecursiveTask`)

| Change | Delta |             % | Samples | Caller   | Location                            |
| -----: | ----: | ------------: | ------: | -------- | ----------------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `doExec` | `java.util.concurrent.ForkJoinTask` |

##### `runWorker` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |      % | Samples | Caller | Location                                    |
| ------: | ----: | -----: | ------: | ------ | ------------------------------------------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `run`  | `java.util.concurrent.ForkJoinWorkerThread` |

##### `arrayof_oop_disjoint_arraycopy` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller   | Location              |
| ------: | ----: | -----: | ------: | -------- | --------------------- |
| +100.0% |    +3 | 100.0% |   3 → 6 | `addAll` | `java.util.ArrayList` |

##### `void OopOopIterateDispatch<G1AdjustClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                                                          | Location    |
| ------: | ----: | -----: | ------: | --------------------------------------------------------------- | ----------- |
| +300.0% |    +3 | 100.0% |   1 → 4 | `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>` | `<unknown>` |

##### `ClassLoaderData::oops_do` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                                        | Location    |
| ------: | ----: | -----: | ------: | --------------------------------------------- | ----------- |
| +300.0% |    +3 | 100.0% |   1 → 4 | `G1FullGCMarker::publish_and_drain_oop_tasks` | `<unknown>` |

##### `void HeapRegion::apply_to_marked_objects<G1FullGCPrepareTask::G1PrepareCompactLiveClosure>` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                      | Location    |
| -----: | ----: | ------------: | ------: | --------------------------- | ----------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `G1FullGCPrepareTask::work` | `<unknown>` |

##### `LinearScanWalker::free_collect_inactive_fixed` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                             | Location    |
| -----: | ----: | ------------: | ------: | ---------------------------------- | ----------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `LinearScanWalker::alloc_free_reg` | `<unknown>` |

##### `park` (`jdk.internal.misc.Unsafe`)

| Change | Delta |             % | Samples | Caller | Location                                 |
| -----: | ----: | ------------: | ------: | ------ | ---------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `park` | `java.util.concurrent.locks.LockSupport` |

##### `G1FullGCMarker::follow_object` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                        | Location    |
| -----: | ----: | ------------: | ------: | --------------------------------------------- | ----------- |
| +50.0% |    +1 | 40.0% → 42.9% |   2 → 3 | `G1FullGCMarker::follow_marking_stacks`       | `<unknown>` |
| +33.3% |    +1 | 60.0% → 57.1% |   3 → 4 | `G1FullGCMarker::publish_and_drain_oop_tasks` | `<unknown>` |

##### `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |            % | Samples | Caller           | Location                                                   |
| -----: | ----: | -----------: | ------: | ---------------- | ---------------------------------------------------------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `combineResults` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `addAll` (`java.util.ArrayList`)

|  Change | Delta |      % | Samples | Caller           | Location                                    |
| ------: | ----: | -----: | ------: | ---------------- | ------------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `lambda$merge$6` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `grow` (`java.util.ArrayList`)

| Change | Delta |             % | Samples | Caller | Location              |
| -----: | ----: | ------------: | ------: | ------ | --------------------- |
|  +5.6% |    +1 | 72.0% → 70.4% | 18 → 19 | `grow` | `java.util.ArrayList` |
| +14.3% |    +1 | 28.0% → 29.6% |   7 → 8 | `add`  | `java.util.ArrayList` |

##### `ObjArrayAllocator::initialize` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                   | Location    |
| -----: | ----: | -----: | ------: | ------------------------ | ----------- |
| +50.0% |    +2 | 100.0% |   4 → 6 | `MemAllocator::allocate` | `<unknown>` |

##### `average` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |             % | Samples | Caller                   | Location                                               |
| -----: | ----: | ------------: | ------: | ------------------------ | ------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `computeClusterAverages` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`)

| Change | Delta |             % | Samples | Caller  | Location            |
| -----: | ----: | ------------: | ------: | ------- | ------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `merge` | `java.util.HashMap` |

##### `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |             % | Samples | Caller    | Location                                               |
| -----: | ----: | ------------: | ------: | --------- | ------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `<init>` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |      % | Samples | Caller          | Location                                                   |
| ------: | ----: | -----: | ------: | --------------- | ---------------------------------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `createSubtask` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `<init>` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |             % | Samples | Caller    | Location                                               |
| -----: | ----: | ------------: | ------: | --------- | ------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `average` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `lambda$generateData$4` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |             % | Samples | Caller  | Location                                            |
| -----: | ----: | ------------: | ------: | ------- | --------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `apply` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda` |

##### `forkThreshold` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |             % | Samples | Caller    | Location                                               |
| -----: | ----: | ------------: | ------: | --------- | ------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `lambda$collectClusters$0` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % | Samples | Caller  | Location                                                                              |
| -----: | ----: | ------------: | ------: | ------- | ------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `apply` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000a8011a3940` |

##### `<init>` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a8011a7000`)

| Change | Delta |             % | Samples | Caller             | Location                                     |
| -----: | ----: | ------------: | ------: | ------------------ | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `newInvokeSpecial` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `Unsafe_Unpark` (`<unknown>`)

| Change | Delta |             % | Samples | Caller   | Location                   |
| -----: | ----: | ------------: | ------: | -------- | -------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `unpark` | `jdk.internal.misc.Unsafe` |

##### `_platform_memset` (`<unknown>`)

| Change | Delta |              % | Samples | Caller                                     | Location    |
| -----: | ----: | -------------: | ------: | ------------------------------------------ | ----------- |
| +12.5% |    +1 | 100.0% → 90.0% |   8 → 9 | `MemAllocator::allocate`                   | `<unknown>` |
|    new |    +1 |   0.0% → 10.0% |   0 → 1 | `PhaseMacroExpand::expand_allocate_common` | `<unknown>` |

##### `semaphore_wait_trap` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                    | Location    |
| -----: | ----: | ------------: | ------: | ------------------------- | ----------- |
| +11.1% |    +1 | 75.0% → 71.4% |  9 → 10 | `WorkerThread::run`       | `<unknown>` |
|    new |    +1 |   0.0% → 7.1% |   0 → 1 | `WorkerThreads::run_task` | `<unknown>` |

##### `tlv_get_addr` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                           | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------- | ----------- |
|  -33.3% |    -1 | 60.0% → 28.6% |   3 → 2 | `arrayof_oop_disjoint_arraycopy` | `<unknown>` |
| removed |    -1 |  20.0% → 0.0% |   1 → 0 | `Symbol::as_unicode`             | `<unknown>` |
| removed |    -1 |  20.0% → 0.0% |   1 → 0 | `TypeAryPtr::add_offset`         | `<unknown>` |
|     new |    +1 |  0.0% → 14.3% |   0 → 1 | `PhaseBlockLayout::find_edges`   | `<unknown>` |
|     new |    +1 |  0.0% → 14.3% |   0 → 1 | `Matcher::ReduceInst`            | `<unknown>` |

##### `G1FullGCCompactionPoint::forward` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                                                                       | Location    |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------- | ----------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `void HeapRegion::apply_to_marked_objects<G1FullGCPrepareTask::G1PrepareCompactLiveClosure>` | `<unknown>` |

##### `__mmap` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                   | Location    |
| -----: | ----: | ------------: | ------: | ------------------------ | ----------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `os::pd_uncommit_memory` | `<unknown>` |

##### `os::javaTimeNanos` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                | Location                                    |
| -----: | ----: | -----------: | ------: | --------------------- | ------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `os::elapsed_counter` | `<unknown>`                                 |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `getVmStartNanos`     | `org.renaissance.harness.RenaissanceSuite$` |

##### `sys_icache_invalidate` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                           | Location    |
| -----: | ----: | -----------: | ------: | -------------------------------- | ----------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `CompiledIC::set_to_monomorphic` | `<unknown>` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `nmethod::nmethod`               | `<unknown>` |

##### `G1MergeHeapRootsTask::G1MergeCardSetClosure::do_heap_region` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                                    | Location    |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------- | ----------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `G1MergeHeapRootsTask::G1CombinedClosure::do_heap_region` | `<unknown>` |

##### `G1BarrierSetRuntime::write_ref_array_post_entry` (`<unknown>`)

| Change | Delta |             % | Samples | Caller   | Location              |
| -----: | ----: | ------------: | ------: | -------- | --------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `addAll` | `java.util.ArrayList` |

##### `G1BarrierSet::write_ref_array_work` (`<unknown>`)

| Change | Delta |             % | Samples | Caller   | Location              |
| -----: | ----: | ------------: | ------: | -------- | --------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `addAll` | `java.util.ArrayList` |

##### `Unsafe_Park` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                | Location    |
| -----: | ----: | -----------: | ------: | --------------------- | ----------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `[break_stack_range]` | `<unknown>` |

##### `putVal` (`java.util.HashMap`)

|  Change | Delta |      % | Samples | Caller          | Location            |
| ------: | ----: | -----: | ------: | --------------- | ------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `putMapEntries` | `java.util.HashMap` |

##### `join` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % | Samples | Caller    | Location                                               |
| -----: | ----: | ------------: | ------: | --------- | ------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `get` (`java.util.ArrayList`)

| Change | Delta |            % | Samples | Caller      | Location                                                  |
| -----: | ----: | -----------: | ------: | ----------- | --------------------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `vectorSum` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `awaitWork` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |             % | Samples | Caller      | Location                            |
| -----: | ----: | ------------: | ------: | ----------- | ----------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `runWorker` | `java.util.concurrent.ForkJoinPool` |

##### `loadClass` (`jdk.internal.loader.ClassLoaders$AppClassLoader`)

| Change | Delta |             % | Samples | Caller      | Location                |
| -----: | ----: | ------------: | ------: | ----------- | ----------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `loadClass` | `java.lang.ClassLoader` |

##### `putMapEntries` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Caller   | Location            |
| -----: | ----: | -----: | ------: | -------- | ------------------- |
| +50.0% |    +1 | 100.0% |   2 → 3 | `<init>` | `java.util.HashMap` |

##### `<init>` (`java.util.HashMap`)

| Change | Delta |             % | Samples | Caller  | Location                                    |
| -----: | ----: | ------------: | ------: | ------- | ------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `merge` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `getExactSizeIfKnown` (`java.util.Spliterator`)

| Change | Delta |             % | Samples | Caller     | Location                            |
| -----: | ----: | ------------: | ------: | ---------- | ----------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `copyInto` | `java.util.stream.AbstractPipeline` |

##### `addConstant` (`jdk.internal.org.objectweb.asm.SymbolTable`)

| Change | Delta |             % | Samples | Caller         | Location                                      |
| -----: | ----: | ------------: | ------: | -------------- | --------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `visitLdcInsn` | `jdk.internal.org.objectweb.asm.MethodWriter` |

##### `casAux` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % | Samples | Caller      | Location                            |
| -----: | ----: | ------------: | ------: | ----------- | ----------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `awaitDone` | `java.util.concurrent.ForkJoinTask` |

##### `loadFence` (`jdk.internal.misc.Unsafe`)

| Change | Delta |             % | Samples | Caller     | Location                            |
| -----: | ----: | ------------: | ------: | ---------- | ----------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `hasTasks` | `java.util.concurrent.ForkJoinPool` |

##### `exactOutputSizeIfKnown` (`java.util.stream.AbstractPipeline`)

| Change | Delta |             % | Samples | Caller     | Location                            |
| -----: | ----: | ------------: | ------: | ---------- | ----------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `evaluate` | `java.util.stream.AbstractPipeline` |

##### `PhaseCFG::schedule_local` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                         | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------ | ----------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `PhaseCFG::global_code_motion` | `<unknown>` |

##### `LinearScanWalker::alloc_free_reg` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                               | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------------ | ----------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `LinearScanWalker::activate_current` | `<unknown>` |

##### `PhaseLive::add_liveout` (`<unknown>`)

| Change | Delta |             % | Samples | Caller               | Location    |
| -----: | ----: | ------------: | ------: | -------------------- | ----------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `PhaseLive::compute` | `<unknown>` |

##### `Node_Backward_Iterator::next` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                         | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------ | ----------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `PhaseCFG::global_code_motion` | `<unknown>` |

##### `GraphBuilder::iterate_bytecodes_for_block` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                             | Location    |
| -----: | ----: | ------------: | ------: | ---------------------------------- | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `GraphBuilder::iterate_all_blocks` | `<unknown>` |

##### `PhaseChaitin::Register_Allocate` (`<unknown>`)

| Change | Delta |             % | Samples | Caller              | Location    |
| -----: | ----: | ------------: | ------: | ------------------- | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `Compile::Code_Gen` | `<unknown>` |

##### `PhaseChaitin::elide_copy` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                                     | Location    |
| ------: | ----: | -----: | ------: | ------------------------------------------ | ----------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `PhaseChaitin::post_allocate_copy_removal` | `<unknown>` |

##### `PhaseIterGVN::remove_globally_dead_node` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                   | Location    |
| -----: | ----: | ------------: | ------: | ------------------------ | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseIterGVN::optimize` | `<unknown>` |

##### `PhaseIdealLoop::split_if_with_blocks` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                               | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------------ | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_early` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                               | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------------ | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `PhaseCFG::partial_latency_of_defs` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                         | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------ | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseCFG::global_code_motion` | `<unknown>` |

##### `Matcher::Label_Root` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                | Location    |
| -----: | ----: | ------------: | ------: | --------------------- | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `Matcher::Label_Root` | `<unknown>` |

##### `PhaseOutput::BuildOopMaps` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                | Location    |
| -----: | ----: | ------------: | ------: | --------------------- | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseOutput::Output` | `<unknown>` |

##### `PhaseValues::makecon` (`<unknown>`)

| Change | Delta |             % | Samples | Caller              | Location    |
| -----: | ----: | ------------: | ------: | ------------------- | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `Parse::do_get_xxx` | `<unknown>` |

##### `RetNode::is_block_proj` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                            | Location    |
| -----: | ----: | ------------: | ------: | --------------------------------- | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `PhaseCCP::push_loadp` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                     | Location    |
| -----: | ----: | ------------: | ------: | -------------------------- | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseCCP::push_more_uses` | `<unknown>` |

##### `PhaseIdealLoop::has_local_phi_input` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                 | Location    |
| -----: | ----: | ------------: | ------: | -------------------------------------- | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseIdealLoop::split_if_with_blocks` | `<unknown>` |

##### `PhaseLive::compute` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                            | Location    |
| -----: | ----: | ------------: | ------: | --------------------------------- | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller                | Location                                                   |
| -----: | ----: | -----: | --------: | --------------------- | ---------------------------------------------------------- |
| -12.6% |  -111 | 100.0% | 881 → 770 | `findNearestCentroid` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `forward_copy_longs` (`<unknown>`)

| Change | Delta |             % |   Samples | Caller                            | Location    |
| -----: | ----: | ------------: | --------: | --------------------------------- | ----------- |
| -20.6% |   -40 | 82.2% → 75.9% | 194 → 154 | `arrayof_jint_disjoint_arraycopy` | `<unknown>` |
| +16.7% |    +7 | 17.8% → 24.1% |   42 → 49 | `arrayof_oop_disjoint_arraycopy`  | `<unknown>` |

##### `__psynch_cvwait` (`<unknown>`)

| Change | Delta |             % |   Samples | Caller                  | Location    |
| -----: | ----: | ------------: | --------: | ----------------------- | ----------- |
|  -5.6% |   -35 | 97.2% → 96.1% | 630 → 595 | `Parker::park`          | `<unknown>` |
| +33.3% |    +6 |   2.8% → 3.9% |   18 → 24 | `PlatformMonitor::wait` | `<unknown>` |

##### `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller            | Location                                                   |
| -----: | ----: | -----: | --------: | ----------------- | ---------------------------------------------------------- |
|  -8.1% |   -29 | 100.0% | 357 → 328 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |  Samples | Caller            | Location                                                   |
| -----: | ----: | -----: | -------: | ----------------- | ---------------------------------------------------------- |
| -23.2% |   -26 | 100.0% | 112 → 86 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `doubleValue` (`java.lang.Double`)

| Change | Delta |             % |   Samples | Caller       | Location                                                   |
| -----: | ----: | ------------: | --------: | ------------ | ---------------------------------------------------------- |
| -73.7% |   -14 |  14.4% → 4.5% |    19 → 5 | `distance`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -5.3% |    -6 | 85.6% → 95.5% | 113 → 107 | `accumulate` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

##### `zero_blocks` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller   | Location              |
| ------: | ----: | ------------: | ------: | -------- | --------------------- |
|  -36.1% |   -13 | 60.0% → 52.3% | 36 → 23 | `merge`  | `java.util.HashMap`   |
|  -11.1% |    -2 | 30.0% → 36.4% | 18 → 16 | `grow`   | `java.util.ArrayList` |
| removed |    -1 |   1.7% → 0.0% |   1 → 0 | `copyOf` | `java.util.Arrays`    |

##### `checkIndex` (`java.util.Objects`)

| Change | Delta |      % | Samples | Caller | Location              |
| -----: | ----: | -----: | ------: | ------ | --------------------- |
| -33.3% |   -14 | 100.0% | 42 → 28 | `get`  | `java.util.ArrayList` |

##### `add` (`java.util.ArrayList`)

| Change | Delta |             % | Samples | Caller | Location              |
| -----: | ----: | ------------: | ------: | ------ | --------------------- |
| -20.7% |   -12 | 98.3% → 97.9% | 58 → 46 | `add`  | `java.util.ArrayList` |

##### `__psynch_cvsignal` (`<unknown>`)

| Change | Delta |      % | Samples | Caller          | Location    |
| -----: | ----: | -----: | ------: | --------------- | ----------- |
| -16.7% |    -8 | 100.0% | 48 → 40 | `Unsafe_Unpark` | `<unknown>` |

##### `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                              | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------- | ----------- |
| removed |    -8 | 100.0% → 0.0% |   8 → 0 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::do_heap_region` | `<unknown>` |

##### `newLength` (`jdk.internal.util.ArraysSupport`)

| Change | Delta |      % | Samples | Caller | Location              |
| -----: | ----: | -----: | ------: | ------ | --------------------- |
| -87.5% |    -7 | 100.0% |   8 → 1 | `grow` | `java.util.ArrayList` |

##### `__psynch_mutexwait` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                              | Location    |
| -----: | ----: | -----: | ------: | ----------------------------------- | ----------- |
| -58.3% |    -7 | 100.0% |  12 → 5 | `_pthread_mutex_firstfit_lock_slow` | `<unknown>` |

##### `void G1ScanEvacuatedObjClosure::do_oop_work<narrowOop>` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                          | Location    |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | ----------- |
| removed |    -7 |  87.5% → 0.0% |   7 → 0 | `G1ParScanThreadState::do_partial_array`        | `<unknown>` |
| removed |    -1 |  12.5% → 0.0% |   1 → 0 | `G1ParScanThreadState::trim_queue_to_threshold` | `<unknown>` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `G1ParScanThreadState::start_partial_objarray`  | `<unknown>` |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                                          | Location    |
| ------: | ----: | -------------: | ------: | ----------------------------------------------- | ----------- |
|  -55.6% |    -5 | 90.0% → 100.0% |   9 → 4 | `G1ParScanThreadState::trim_queue_to_threshold` | `<unknown>` |
| removed |    -1 |   10.0% → 0.0% |   1 → 0 | `G1ParScanThreadState::steal_and_trim_queue`    | `<unknown>` |

##### `G1ParScanThreadState::do_partial_array` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                          | Location    |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | ----------- |
| removed |    -6 | 100.0% → 0.0% |   6 → 0 | `G1ParScanThreadState::trim_queue_to_threshold` | `<unknown>` |

##### `G1FullGCMarker::mark_object` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                                                                               | Location    |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------------------------------------------------------- | ----------- |
|  -80.0% |    -4 | 19.2% → 5.0% |   5 → 1 | `G1FullGCMarker::follow_marking_stacks`                                                              | `<unknown>` |
| removed |    -1 |  3.8% → 0.0% |   1 → 0 | `void OopOopIterateDispatch<G1MarkAndPushClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `<unknown>` |
| removed |    -1 |  3.8% → 0.0% |   1 → 0 | `G1FullGCMarker::complete_marking`                                                                   | `<unknown>` |

##### `G1RegionMarkStatsCache::add_live_words` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                          | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------- | ----------- |
|  -87.5% |    -7 | 88.9% → 33.3% |   8 → 1 | `G1FullGCMarker::mark_object`                                   | `<unknown>` |
| +100.0% |    +1 | 11.1% → 66.7% |   1 → 2 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` | `<unknown>` |

##### `G1ParScanThreadState::trim_queue_to_threshold` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                       | Location    |
| ------: | ----: | -----------: | ------: | -------------------------------------------- | ----------- |
| removed |    -3 | 60.0% → 0.0% |   3 → 0 | `G1ScanHRForRegionClosure::scan_memregion`   | `<unknown>` |
| removed |    -2 | 40.0% → 0.0% |   2 → 0 | `G1ParScanThreadState::steal_and_trim_queue` | `<unknown>` |

##### `scan` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % | Samples | Caller      | Location                            |
| -----: | ----: | -----: | ------: | ----------- | ----------------------------------- |
| -71.4% |    -5 | 100.0% |   7 → 2 | `runWorker` | `java.util.concurrent.ForkJoinPool` |

##### `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |   Samples | Caller            | Location                                                  |
| -----: | ----: | -----: | --------: | ----------------- | --------------------------------------------------------- |
|  -1.1% |    -5 | 100.0% | 460 → 455 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a8011a7000`)

|  Change | Delta |             % | Samples | Caller    | Location            |
| ------: | ----: | ------------: | ------: | --------- | ------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `forEach` | `java.util.HashMap` |

##### `add` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % | Samples | Caller           | Location                                                  |
| -----: | ----: | -----: | ------: | ---------------- | --------------------------------------------------------- |
| -40.0% |    -2 | 100.0% |   5 → 3 | `combineResults` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `createSubtask` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % | Samples | Caller    | Location                                               |
| -----: | ----: | -----: | ------: | --------- | ------------------------------------------------------ |
| -66.7% |    -2 | 100.0% |   3 → 1 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `createSubtask` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % | Samples | Caller    | Location                                               |
| ------: | ----: | ------------: | ------: | --------- | ------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `ClassLoaderDataGraphKlassIteratorAtomic::next_klass` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                    | Location    |
| ------: | ----: | ------------: | ------: | ------------------------- | ----------- |
| removed |    -5 | 100.0% → 0.0% |   5 → 0 | `KlassCleaningTask::work` | `<unknown>` |

##### `G1FullGCMarker::publish_and_drain_oop_tasks` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                  | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------- | ----------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `G1FullGCMarker::follow_marking_stacks` | `<unknown>` |

##### `G1BarrierSet::invalidate` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                           | Location              |
| ------: | ----: | -------------: | ------: | -------------------------------- | --------------------- |
|  -66.7% |    -2 | 75.0% → 100.0% |   3 → 1 | `arrayof_oop_disjoint_arraycopy` | `<unknown>`           |
| removed |    -1 |   25.0% → 0.0% |   1 → 0 | `addAll`                         | `java.util.ArrayList` |

##### `inflate_fast` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                          | Location    |
| -----: | ----: | -----: | ------: | ----------------------------------------------- | ----------- |
| -37.5% |    -3 | 100.0% |   8 → 5 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `<unknown>` |

##### `Continuation::is_return_barrier_entry` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                     | Location    |
| ------: | ----: | -----------: | ------: | ------------------------------------------ | ----------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `java_lang_Throwable::fill_in_stack_trace` | `<unknown>` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `frame::sender_for_compiled_frame`         | `<unknown>` |

##### `_platform_bzero` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                   | Location    |
| -----: | ----: | -----: | ------: | ------------------------ | ----------- |
| -10.0% |    -2 | 100.0% | 20 → 18 | `MemAllocator::allocate` | `<unknown>` |

##### `void G1ScanClosureBase::handle_non_cset_obj_common<narrowOop>` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                                   | Location    |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------- | ----------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `void G1ScanEvacuatedObjClosure::do_oop_work<narrowOop>` | `<unknown>` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `G1ParScanThreadState::do_partial_array`                 | `<unknown>` |

##### `JavaThreadParkedState::JavaThreadParkedState` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller        | Location                   |
| ------: | ----: | -----------: | ------: | ------------- | -------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `Unsafe_Park` | `<unknown>`                |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `park`        | `jdk.internal.misc.Unsafe` |

##### `helpJoin` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % | Samples | Caller      | Location                            |
| -----: | ----: | -----: | ------: | ----------- | ----------------------------------- |
| -16.7% |    -4 | 100.0% | 24 → 20 | `awaitDone` | `java.util.concurrent.ForkJoinTask` |

##### `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |      % | Samples | Caller      | Location                            |
| -----: | ----: | -----: | ------: | ----------- | ----------------------------------- |
| -66.7% |    -4 | 100.0% |   6 → 2 | `awaitDone` | `java.util.concurrent.ForkJoinTask` |

##### `computeIfAbsent` (`java.util.HashMap`)

| Change | Delta |      % |   Samples | Caller            | Location                                                   |
| -----: | ----: | -----: | --------: | ----------------- | ---------------------------------------------------------- |
|  -2.2% |    -3 | 100.0% | 134 → 131 | `collectClusters` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `merge` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Caller           | Location                                    |
| -----: | ----: | -----: | ------: | ---------------- | ------------------------------------------- |
| -30.0% |    -3 | 100.0% |  10 → 7 | `lambda$merge$7` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `signalWaiters` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |            % | Samples | Caller      | Location                            |
| ------: | ----: | -----------: | ------: | ----------- | ----------------------------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `setDone`   | `java.util.concurrent.ForkJoinTask` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `awaitDone` | `java.util.concurrent.ForkJoinTask` |

##### `getAndSetAccess` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change | Delta |             % | Samples | Caller | Location                                      |
| ------: | ----: | ------------: | ------: | ------ | --------------------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `push` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `doExec` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |             % | Samples | Caller             | Location                                      |
| ------: | ----: | ------------: | ------: | ------------------ | --------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `tryRemoveAndExec` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `size` (`java.util.ArrayList`)

|  Change | Delta |             % | Samples | Caller                | Location                                                   |
| ------: | ----: | ------------: | ------: | --------------------- | ---------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `findNearestCentroid` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `resize` (`java.util.HashMap`)

|  Change | Delta |            % | Samples | Caller            | Location            |
| ------: | ----: | -----------: | ------: | ----------------- | ------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `computeIfAbsent` | `java.util.HashMap` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `merge`           | `java.util.HashMap` |

##### `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change | Delta |             % | Samples | Caller | Location                            |
| ------: | ----: | ------------: | ------: | ------ | ----------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `scan` | `java.util.concurrent.ForkJoinPool` |

##### `bindArgumentL` (`java.lang.invoke.BoundMethodHandle`)

|  Change | Delta |             % | Samples | Caller          | Location                        |
| ------: | ----: | ------------: | ------: | --------------- | ------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `bindArgumentL` | `java.lang.invoke.MethodHandle` |

##### `unpark` (`java.util.concurrent.locks.LockSupport`)

|  Change | Delta |            % | Samples | Caller          | Location                            |
| ------: | ----: | -----------: | ------: | --------------- | ----------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `signalWaiters` | `java.util.concurrent.ForkJoinTask` |

##### `signalWork` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % | Samples | Caller | Location                                      |
| ------: | ----: | ------------: | ------: | ------ | --------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `push` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `refKindIsMethod` (`java.lang.invoke.MethodHandleNatives`)

|  Change | Delta |             % | Samples | Caller   | Location                      |
| ------: | ----: | ------------: | ------: | -------- | ----------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>` | `java.lang.invoke.MemberName` |

##### `getRawResult` (`java.util.concurrent.RecursiveTask`)

|  Change | Delta |             % | Samples | Caller | Location                            |
| ------: | ----: | ------------: | ------: | ------ | ----------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `join` | `java.util.concurrent.ForkJoinTask` |

##### `vtable stub` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller   | Location                            |
| ------: | ----: | -----------: | ------: | -------- | ----------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `join`   | `java.util.concurrent.ForkJoinTask` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `doExec` | `java.util.concurrent.ForkJoinTask` |

##### `itable stub` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                | Location                |
| ------: | ----: | ------------: | ------: | --------------------- | ----------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `getExactSizeIfKnown` | `java.util.Spliterator` |

##### `I2C/C2I adapters(0xbbb)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller             | Location                           |
| ------: | ----: | ------------: | ------: | ------------------ | ---------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `parseContextSpec` | `sun.net.www.protocol.jar.Handler` |

##### `PhaseChaitin::gather_lrg_masks` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                            | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------- | ----------- |
| removed |    -5 | 100.0% → 0.0% |   5 → 0 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `PhaseIdealLoop::Dominators` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                               | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------ | ----------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `PhaseAggressiveCoalesce::insert_copies` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                            | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------- | ----------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `PhaseIFG::effective_degree` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                               | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------ | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseIFG::Compute_Effective_Degree` | `<unknown>` |

##### `lShiftI_reg_immNode::emit` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                           | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseOutput::scratch_emit_size` | `<unknown>` |

##### `Matcher::is_vshift_con_pattern` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                 | Location    |
| ------: | ----: | ------------: | ------: | ---------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `Matcher::find_shared` | `<unknown>` |

##### `Matcher::xform` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller           | Location    |
| ------: | ----: | ------------: | ------: | ---------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `Matcher::match` | `<unknown>` |

##### `ciInstanceKlass::get_field_by_offset` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                   | Location    |
| ------: | ----: | ------------: | ------: | ------------------------ | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `TypeOopPtr::TypeOopPtr` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                            | Location    |
| -----: | ----: | -----: | ------: | --------------------------------- | ----------- |
| -50.0% |    -1 | 100.0% |   2 → 1 | `PhaseIdealLoop::build_loop_late` | `<unknown>` |

##### `Compile::disconnect_useless_nodes` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                | Location    |
| ------: | ----: | ------------: | ------: | --------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseCCP::transform` | `<unknown>` |

##### `PhaseChaitin::compute_initial_block_pressure` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                             | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseChaitin::build_ifg_physical` | `<unknown>` |

##### `TypePtr::singleton` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                   | Location    |
| ------: | ----: | ------------: | ------: | ------------------------ | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseIterGVN::optimize` | `<unknown>` |

##### `ciMethodData::load_data` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                         | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------ | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `ciMethod::ensure_method_data` | `<unknown>` |

##### `Type::hashcons` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                        | Location    |
| ------: | ----: | ------------: | ------: | ----------------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `Compile::flatten_alias_type` | `<unknown>` |

##### `GraphBuilder::state_at_entry` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                       | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `GraphBuilder::GraphBuilder` | `<unknown>` |

##### `ciEnv::get_method_from_handle` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `CompileBroker::compiler_thread_loop` | `<unknown>` |

##### `PhiNode::Ideal` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                           | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseGVN::transform_no_reclaim` | `<unknown>` |

##### `MachCallJavaNode::in_RegMask` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                     | Location    |
| ------: | ----: | ------------: | ------: | -------------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseChaitin::elide_copy` | `<unknown>` |

##### `Node::replace_edge` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                    | Location    |
| ------: | ----: | ------------: | ------: | ----------------------------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseIterGVN::remove_globally_dead_node` | `<unknown>` |

##### `TypeInt::filter_helper` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                           | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseGVN::transform_no_reclaim` | `<unknown>` |

### Total samples

#### Regressions

Functions with the largest increase in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

| Change | Delta |             % |       Samples | Function                                   | Location                                                  |
| -----: | ----: | ------------: | ------------: | ------------------------------------------ | --------------------------------------------------------- |
|  +4.1% |   +62 | 32.0% → 35.2% | 1,498 → 1,560 | `vectorSum`                                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  +4.1% |   +62 | 32.0% → 35.2% | 1,499 → 1,561 | `computeDirectly`                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  +6.3% |   +61 | 20.6% → 23.2% |   966 → 1,027 | `accumulate`                               | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  +7.5% |   +48 | 13.7% → 15.5% |     641 → 689 | `average`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`    |
|  +7.1% |   +46 | 13.8% → 15.6% |     647 → 693 | `computeClusterAverages`                   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`    |
|  +7.1% |   +46 | 13.8% → 15.6% |     647 → 693 | `computeDirectly`                          | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`    |
| +15.2% |   +39 |   5.5% → 6.7% |     257 → 296 | `awaitWork`                                | `java.util.concurrent.ForkJoinPool`                       |
|  +1.7% |   +16 | 20.0% → 21.4% |     935 → 951 | `invoke`                                   | `java.util.concurrent.ForkJoinTask`                       |
| +27.1% |   +16 |   1.3% → 1.7% |       59 → 75 | `CompileBroker::invoke_compiler_on_method` | `<unknown>`                                               |
| +20.5% |   +15 |   1.6% → 2.0% |       73 → 88 | `JavaThread::thread_main_inner`            | `<unknown>`                                               |
| +17.8% |   +13 |   1.6% → 1.9% |       73 → 86 | `CompileBroker::compiler_thread_loop`      | `<unknown>`                                               |
| +28.6% |   +10 |   0.7% → 1.0% |       35 → 45 | `loadAndInvokeHarnessClass`                | `org.renaissance.core.Launcher`                           |
| +31.0% |    +9 |   0.6% → 0.9% |       29 → 38 | `main`                                     | `org.renaissance.harness.RenaissanceSuite$`               |
| +29.0% |    +9 |   0.7% → 0.9% |       31 → 40 | `main`                                     | `org.renaissance.harness.RenaissanceSuite`                |
| +29.0% |    +9 |   0.7% → 0.9% |       31 → 40 | `invokeStatic`                             | `java.lang.invoke.LambdaForm$DMH.0x000000a801004800`      |
| +29.0% |    +9 |   0.7% → 0.9% |       31 → 40 | `invoke`                                   | `java.lang.invoke.LambdaForm$MH.0x000000a801009800`       |
| +29.0% |    +9 |   0.7% → 0.9% |       31 → 40 | `invokeImpl`                               | `jdk.internal.reflect.DirectMethodHandleAccessor`         |
| +29.0% |    +9 |   0.7% → 0.9% |       31 → 40 | `invoke`                                   | `jdk.internal.reflect.DirectMethodHandleAccessor`         |
| +29.0% |    +9 |   0.7% → 0.9% |       31 → 40 | `invoke`                                   | `java.lang.reflect.Method`                                |
| +24.3% |    +9 |   0.8% → 1.0% |       37 → 46 | `launchHarnessClass`                       | `org.renaissance.core.Launcher`                           |

##### Ours

|  Change | Delta |             % |       Samples | Function                    | Location                                                               |
| ------: | ----: | ------------: | ------------: | --------------------------- | ---------------------------------------------------------------------- |
|   +4.1% |   +62 | 32.0% → 35.2% | 1,498 → 1,560 | `vectorSum`                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   +4.1% |   +62 | 32.0% → 35.2% | 1,499 → 1,561 | `computeDirectly`           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   +6.3% |   +61 | 20.6% → 23.2% |   966 → 1,027 | `accumulate`                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   +7.5% |   +48 | 13.7% → 15.5% |     641 → 689 | `average`                   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   +7.1% |   +46 | 13.8% → 15.6% |     647 → 693 | `computeClusterAverages`    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   +7.1% |   +46 | 13.8% → 15.6% |     647 → 693 | `computeDirectly`           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  +28.6% |   +10 |   0.7% → 1.0% |       35 → 45 | `loadAndInvokeHarnessClass` | `org.renaissance.core.Launcher`                                        |
|  +31.0% |    +9 |   0.6% → 0.9% |       29 → 38 | `main`                      | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +29.0% |    +9 |   0.7% → 0.9% |       31 → 40 | `main`                      | `org.renaissance.harness.RenaissanceSuite`                             |
|  +24.3% |    +9 |   0.8% → 1.0% |       37 → 46 | `launchHarnessClass`        | `org.renaissance.core.Launcher`                                        |
|  +24.3% |    +9 |   0.8% → 1.0% |       37 → 46 | `main`                      | `org.renaissance.core.Launcher`                                        |
| +133.3% |    +8 |   0.1% → 0.3% |        6 → 14 | `setUpBeforeAll`            | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  +43.8% |    +7 |   0.3% → 0.5% |       16 → 23 | `runBenchmarks`             | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +54.5% |    +6 |   0.2% → 0.4% |       11 → 17 | `executeBenchmark`          | `org.renaissance.harness.ExecutionDriver`                              |
|  +40.0% |    +6 |   0.3% → 0.5% |       15 → 21 | `runBenchmarks$$anonfun$1`  | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +40.0% |    +6 |   0.3% → 0.5% |       15 → 21 | `applyVoid`                 | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a80111f1b8` |
|     new |    +6 |   0.0% → 0.1% |         0 → 6 | `apply`                     | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda`                      |
|     new |    +5 |   0.0% → 0.1% |         0 → 5 | `rowToArray$1`              | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|     new |    +5 |   0.0% → 0.1% |         0 → 5 | `setUpBeforeAll$$anonfun$1` | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|     new |    +5 |   0.0% → 0.1% |         0 → 5 | `lambda$toCsvRows$2`        | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`     |

##### Native

|  Change | Delta |            % | Samples | Function                                                                                     | Location    |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------- | ----------- |
|  +20.5% |   +15 |  1.6% → 2.0% | 73 → 88 | `JavaThread::thread_main_inner`                                                              | `<unknown>` |
|  +13.7% |    +7 |  1.1% → 1.3% | 51 → 58 | `arrayof_oop_disjoint_arraycopy`                                                             | `<unknown>` |
|  +50.0% |    +6 |  0.3% → 0.4% | 12 → 18 | `Compiler::compile_method`                                                                   | `<unknown>` |
|     new |    +6 |  0.0% → 0.1% |   0 → 6 | `void HeapRegion::apply_to_marked_objects<G1FullGCPrepareTask::G1PrepareCompactLiveClosure>` | `<unknown>` |
|     new |    +6 |  0.0% → 0.1% |   0 → 6 | `G1FullGCPrepareTask::work`                                                                  | `<unknown>` |
|     new |    +6 |  0.0% → 0.1% |   0 → 6 | `G1FullGCCompactTask::compact_region`                                                        | `<unknown>` |
|     new |    +6 |  0.0% → 0.1% |   0 → 6 | `G1FullGCCompactTask::work`                                                                  | `<unknown>` |
|     new |    +5 |  0.0% → 0.1% |   0 → 5 | `G1FullGCCompactTask::copy_object_to_new_location`                                           | `<unknown>` |
|     new |    +5 |  0.0% → 0.1% |   0 → 5 | `WatcherThread::sleep`                                                                       | `<unknown>` |
| +400.0% |    +4 | <0.1% → 0.1% |   1 → 5 | `WatcherThread::run`                                                                         | `<unknown>` |
| +200.0% |    +4 | <0.1% → 0.1% |   2 → 6 | `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>`                              | `<unknown>` |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `G1ServiceThread::run_service`                                                               | `<unknown>` |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `G1CollectedHeap::par_iterate_regions_array`                                                 | `<unknown>` |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `JVM_IHashCode`                                                                              | `<unknown>` |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `G1FullGCCompactTask::G1CompactRegionClosure::apply`                                         | `<unknown>` |
|  +14.3% |    +3 |  0.4% → 0.5% | 21 → 24 | `PlatformMonitor::wait`                                                                      | `<unknown>` |
|  +33.3% |    +3 |  0.2% → 0.3% |  9 → 12 | `Monitor::wait_without_safepoint_check`                                                      | `<unknown>` |
| +150.0% |    +3 | <0.1% → 0.1% |   2 → 5 | `MemAllocator::mem_allocate_inside_tlab_slow`                                                | `<unknown>` |
| +150.0% |    +3 | <0.1% → 0.1% |   2 → 5 | `InstanceKlass::link_class_impl`                                                             | `<unknown>` |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `InstanceKlass::initialize_impl`                                                             | `<unknown>` |

##### Standard library

|  Change | Delta |             % |   Samples | Function             | Location                                             |
| ------: | ----: | ------------: | --------: | -------------------- | ---------------------------------------------------- |
|  +15.2% |   +39 |   5.5% → 6.7% | 257 → 296 | `awaitWork`          | `java.util.concurrent.ForkJoinPool`                  |
|   +1.7% |   +16 | 20.0% → 21.4% | 935 → 951 | `invoke`             | `java.util.concurrent.ForkJoinTask`                  |
|  +29.0% |    +9 |   0.7% → 0.9% |   31 → 40 | `invokeStatic`       | `java.lang.invoke.LambdaForm$DMH.0x000000a801004800` |
|  +29.0% |    +9 |   0.7% → 0.9% |   31 → 40 | `invoke`             | `java.lang.invoke.LambdaForm$MH.0x000000a801009800`  |
|  +29.0% |    +9 |   0.7% → 0.9% |   31 → 40 | `invokeImpl`         | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  +29.0% |    +9 |   0.7% → 0.9% |   31 → 40 | `invoke`             | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  +29.0% |    +9 |   0.7% → 0.9% |   31 → 40 | `invoke`             | `java.lang.reflect.Method`                           |
|  +50.0% |    +9 |   0.4% → 0.6% |   18 → 27 | `hash`               | `java.util.HashMap`                                  |
|   +5.6% |    +8 |   3.1% → 3.4% | 143 → 151 | `elementData`        | `java.util.ArrayList`                                |
|  +25.0% |    +8 |   0.7% → 0.9% |   32 → 40 | `invokeExact_MT`     | `java.lang.invoke.Invokers$Holder`                   |
| +116.7% |    +7 |   0.1% → 0.3% |    6 → 13 | `evaluateSequential` | `java.util.stream.ReduceOps$ReduceOp`                |
| +116.7% |    +7 |   0.1% → 0.3% |    6 → 13 | `collect`            | `java.util.stream.ReferencePipeline`                 |
|   +3.9% |    +6 |   3.3% → 3.6% | 153 → 159 | `computeIfAbsent`    | `java.util.HashMap`                                  |
|  +40.0% |    +6 |   0.3% → 0.5% |   15 → 21 | `apply`              | `scala.runtime.function.JProcedure1`                 |
|  +40.0% |    +6 |   0.3% → 0.5% |   15 → 21 | `foreach`            | `scala.collection.immutable.List`                    |
|  +83.3% |    +5 |   0.1% → 0.2% |    6 → 11 | `<init>`             | `java.util.HashMap`                                  |
|  +45.5% |    +5 |   0.2% → 0.4% |   11 → 16 | `evaluate`           | `java.util.stream.AbstractPipeline`                  |
|  +62.5% |    +5 |   0.2% → 0.3% |    8 → 13 | `parkUntil`          | `java.util.concurrent.locks.LockSupport`             |
|     new |    +5 |   0.0% → 0.1% |     0 → 5 | `accept`             | `java.util.stream.ReferencePipeline$3$1`             |
|     new |    +5 |   0.0% → 0.1% |     0 → 5 | `forEachRemaining`   | `java.util.Spliterators$ArraySpliterator`            |

##### Compiler

|  Change | Delta |            % | Samples | Function                                   | Location    |
| ------: | ----: | -----------: | ------: | ------------------------------------------ | ----------- |
|  +27.1% |   +16 |  1.3% → 1.7% | 59 → 75 | `CompileBroker::invoke_compiler_on_method` | `<unknown>` |
|  +17.8% |   +13 |  1.6% → 1.9% | 73 → 86 | `CompileBroker::compiler_thread_loop`      | `<unknown>` |
|  +19.1% |    +9 |  1.0% → 1.3% | 47 → 56 | `Compile::Compile`                         | `<unknown>` |
|  +19.1% |    +9 |  1.0% → 1.3% | 47 → 56 | `C2Compiler::compile_method`               | `<unknown>` |
|  +88.9% |    +8 |  0.2% → 0.4% |  9 → 17 | `Compilation::compile_java_method`         | `<unknown>` |
| +800.0% |    +8 | <0.1% → 0.2% |   1 → 9 | `Compilation::emit_lir`                    | `<unknown>` |
|  +26.9% |    +7 |  0.6% → 0.7% | 26 → 33 | `Compile::Code_Gen`                        | `<unknown>` |
|     new |    +7 |  0.0% → 0.2% |   0 → 7 | `LinearScan::do_linear_scan`               | `<unknown>` |
|  +50.0% |    +6 |  0.3% → 0.4% | 12 → 18 | `Compilation::compile_method`              | `<unknown>` |
|  +50.0% |    +6 |  0.3% → 0.4% | 12 → 18 | `Compilation::Compilation`                 | `<unknown>` |
| +166.7% |    +5 |  0.1% → 0.2% |   3 → 8 | `PhaseCFG::global_code_motion`             | `<unknown>` |
| +166.7% |    +5 |  0.1% → 0.2% |   3 → 8 | `PhaseCFG::do_global_code_motion`          | `<unknown>` |
|     new |    +5 |  0.0% → 0.1% |   0 → 5 | `LinearScanWalker::alloc_free_reg`         | `<unknown>` |
|     new |    +5 |  0.0% → 0.1% |   0 → 5 | `LinearScanWalker::activate_current`       | `<unknown>` |
|     new |    +5 |  0.0% → 0.1% |   0 → 5 | `IntervalWalker::walk_to`                  | `<unknown>` |
|     new |    +5 |  0.0% → 0.1% |   0 → 5 | `LinearScan::allocate_registers`           | `<unknown>` |
|     new |    +5 |  0.0% → 0.1% |   0 → 5 | `PhaseChaitin::Split`                      | `<unknown>` |
|  +21.4% |    +3 |  0.3% → 0.4% | 14 → 17 | `PhaseChaitin::Register_Allocate`          | `<unknown>` |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `PhaseCCP::analyze`                        | `<unknown>` |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `PhaseCCP::PhaseCCP`                       | `<unknown>` |

#### Improvements

Functions with the largest decrease in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

| Change | Delta |             % |       Samples | Function              | Location                                                               |
| -----: | ----: | ------------: | ------------: | --------------------- | ---------------------------------------------------------------------- |
|  -6.7% |  -279 | 89.0% → 87.6% | 4,165 → 3,886 | `scan`                | `java.util.concurrent.ForkJoinPool`                                    |
|  -6.7% |  -277 | 88.2% → 86.9% | 4,130 → 3,853 | `compute`             | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  -6.7% |  -276 | 88.2% → 86.9% | 4,130 → 3,854 | `exec`                | `java.util.concurrent.RecursiveTask`                                   |
|  -6.6% |  -274 | 88.7% → 87.5% | 4,154 → 3,880 | `doExec`              | `java.util.concurrent.ForkJoinTask`                                    |
|  -6.6% |  -274 | 88.7% → 87.5% | 4,155 → 3,881 | `topLevelExec`        | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
|  -6.4% |  -250 | 84.0% → 83.1% | 3,935 → 3,685 | `awaitDone`           | `java.util.concurrent.ForkJoinTask`                                    |
|  -6.4% |  -250 | 84.0% → 83.1% | 3,935 → 3,685 | `join`                | `java.util.concurrent.ForkJoinTask`                                    |
|  -5.4% |  -237 | 94.5% → 94.4% | 4,424 → 4,187 | `runWorker`           | `java.util.concurrent.ForkJoinPool`                                    |
|  -5.4% |  -237 | 94.5% → 94.4% | 4,424 → 4,187 | `run`                 | `java.util.concurrent.ForkJoinWorkerThread`                            |
|  -5.4% |  -201 | 79.7% → 79.6% | 3,731 → 3,530 | `tryRemoveAndExec`    | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
| -11.3% |  -201 | 37.9% → 35.4% | 1,773 → 1,572 | `computeDirectly`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| -16.6% |  -175 | 22.5% → 19.8% |   1,052 → 877 | `helpJoin`            | `java.util.concurrent.ForkJoinPool`                                    |
| -12.9% |  -171 | 28.2% → 25.9% | 1,321 → 1,150 | `findNearestCentroid` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| -13.9% |  -125 | 19.3% → 17.5% |     902 → 777 | `distance`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| -13.0% |   -46 |   7.6% → 7.0% |     355 → 309 | `accept`              | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a8011a7000` |
| -12.5% |   -45 |   7.7% → 7.1% |     359 → 314 | `forEach`             | `java.util.HashMap`                                                    |
| -12.2% |   -43 |   7.5% → 7.0% |     352 → 309 | `merge`               | `java.util.HashMap`                                                    |
| -12.2% |   -43 |   7.5% → 7.0% |     352 → 309 | `lambda$merge$7`      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| -10.8% |   -40 |   7.9% → 7.4% |     369 → 329 | `merge`               | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -6.1% |   -39 | 13.6% → 13.5% |     636 → 597 | `park`                | `java.util.concurrent.locks.LockSupport`                               |

##### Ours

|  Change | Delta |             % |       Samples | Function              | Location                                                               |
| ------: | ----: | ------------: | ------------: | --------------------- | ---------------------------------------------------------------------- |
|   -6.7% |  -277 | 88.2% → 86.9% | 4,130 → 3,853 | `compute`             | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  -11.3% |  -201 | 37.9% → 35.4% | 1,773 → 1,572 | `computeDirectly`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -12.9% |  -171 | 28.2% → 25.9% | 1,321 → 1,150 | `findNearestCentroid` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -13.9% |  -125 | 19.3% → 17.5% |     902 → 777 | `distance`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -13.0% |   -46 |   7.6% → 7.0% |     355 → 309 | `accept`              | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a8011a7000` |
|  -12.2% |   -43 |   7.5% → 7.0% |     352 → 309 | `lambda$merge$7`      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -10.8% |   -40 |   7.9% → 7.4% |     369 → 329 | `merge`               | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -10.4% |   -38 |   7.8% → 7.4% |     365 → 327 | `combineResults`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -6.6% |   -30 |   9.7% → 9.5% |     452 → 422 | `collectClusters`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -5.1% |   -23 |          9.6% |     450 → 427 | `lambda$run$0`        | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -5.1% |   -23 |          9.6% |     450 → 427 | `call`                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a8011a2bd0` |
|   -5.9% |   -14 |   5.1% → 5.0% |     238 → 224 | `lambda$merge$6`      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -3.7% |    -9 |   5.2% → 5.3% |     242 → 233 | `apply`               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`                    |
|  -80.0% |    -4 |  0.1% → <0.1% |         5 → 1 | `run`                 | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  -50.0% |    -3 |          0.1% |         6 → 3 | `boxed`               | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -40.0% |    -2 |          0.1% |         5 → 3 | `executeOperation`    | `org.renaissance.harness.ExecutionDriver`                              |
|  -33.3% |    -2 |          0.1% |         6 → 4 | `combineResults`      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -40.0% |    -2 |          0.1% |         5 → 3 | `add`                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -20.0% |    -1 |          0.1% |         5 → 4 | `combineResults`      | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| removed |    -1 |  <0.1% → 0.0% |         1 → 0 | `selectBenchmarks`    | `org.renaissance.harness.RenaissanceSuite$`                            |

##### Native

|  Change | Delta |             % |   Samples | Function                                        | Location    |
| ------: | ----: | ------------: | --------: | ----------------------------------------------- | ----------- |
|  -28.4% |   -38 |   2.9% → 2.2% |  134 → 96 | `WorkerThread::run`                             | `<unknown>` |
|   -5.7% |   -36 | 13.6% → 13.5% | 635 → 599 | `Parker::park`                                  | `<unknown>` |
|  -77.8% |   -35 |   1.0% → 0.2% |   45 → 10 | `G1EvacuateRegionsBaseTask::work`               | `<unknown>` |
|   -5.3% |   -34 |         13.7% | 643 → 609 | `Unsafe_Park`                                   | `<unknown>` |
|  -14.0% |   -33 |   5.0% → 4.6% | 236 → 203 | `forward_copy_longs`                            | `<unknown>` |
|  -14.8% |   -31 |   4.5% → 4.0% | 209 → 178 | `arrayof_jint_disjoint_arraycopy`               | `<unknown>` |
|   -4.5% |   -29 | 13.8% → 14.0% | 648 → 619 | `__psynch_cvwait`                               | `<unknown>` |
|  -84.4% |   -27 |   0.7% → 0.1% |    32 → 5 | `G1ParScanThreadState::trim_queue_to_threshold` | `<unknown>` |
|  -72.2% |   -26 |   0.8% → 0.2% |   36 → 10 | `G1ParEvacuateFollowersClosure::do_void`        | `<unknown>` |
|  -72.2% |   -26 |   0.8% → 0.2% |   36 → 10 | `G1EvacuateRegionsTask::evacuate_live_objects`  | `<unknown>` |
|   -7.5% |   -16 |   4.5% → 4.4% | 212 → 196 | `_pthread_start`                                | `<unknown>` |
|   -7.5% |   -16 |   4.5% → 4.4% | 212 → 196 | `thread_start`                                  | `<unknown>` |
|  -72.7% |   -16 |   0.5% → 0.1% |    22 → 6 | `G1ParScanThreadState::steal_and_trim_queue`    | `<unknown>` |
|   -7.1% |   -15 |   4.5% → 4.4% | 211 → 196 | `Thread::call_run`                              | `<unknown>` |
|   -7.1% |   -15 |   4.5% → 4.4% | 211 → 196 | `thread_native_entry`                           | `<unknown>` |
| removed |   -15 |   0.3% → 0.0% |    15 → 0 | `G1ParScanThreadState::do_partial_array`        | `<unknown>` |
|  -37.1% |   -13 |   0.7% → 0.5% |   35 → 22 | `G1FullGCMarker::mark_object`                   | `<unknown>` |
| removed |    -9 |   0.2% → 0.0% |     9 → 0 | `G1EvacuateRegionsTask::scan_roots`             | `<unknown>` |
|  -15.0% |    -9 |   1.3% → 1.1% |   60 → 51 | `G1FullGCMarker::complete_marking`              | `<unknown>` |
|  -13.3% |    -8 |   1.3% → 1.2% |   60 → 52 | `G1FullGCMarkTask::work`                        | `<unknown>` |

##### Standard library

| Change | Delta |             % |       Samples | Function           | Location                                            |
| -----: | ----: | ------------: | ------------: | ------------------ | --------------------------------------------------- |
|  -6.7% |  -279 | 89.0% → 87.6% | 4,165 → 3,886 | `scan`             | `java.util.concurrent.ForkJoinPool`                 |
|  -6.7% |  -276 | 88.2% → 86.9% | 4,130 → 3,854 | `exec`             | `java.util.concurrent.RecursiveTask`                |
|  -6.6% |  -274 | 88.7% → 87.5% | 4,154 → 3,880 | `doExec`           | `java.util.concurrent.ForkJoinTask`                 |
|  -6.6% |  -274 | 88.7% → 87.5% | 4,155 → 3,881 | `topLevelExec`     | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
|  -6.4% |  -250 | 84.0% → 83.1% | 3,935 → 3,685 | `awaitDone`        | `java.util.concurrent.ForkJoinTask`                 |
|  -6.4% |  -250 | 84.0% → 83.1% | 3,935 → 3,685 | `join`             | `java.util.concurrent.ForkJoinTask`                 |
|  -5.4% |  -237 | 94.5% → 94.4% | 4,424 → 4,187 | `runWorker`        | `java.util.concurrent.ForkJoinPool`                 |
|  -5.4% |  -237 | 94.5% → 94.4% | 4,424 → 4,187 | `run`              | `java.util.concurrent.ForkJoinWorkerThread`         |
|  -5.4% |  -201 | 79.7% → 79.6% | 3,731 → 3,530 | `tryRemoveAndExec` | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| -16.6% |  -175 | 22.5% → 19.8% |   1,052 → 877 | `helpJoin`         | `java.util.concurrent.ForkJoinPool`                 |
| -12.5% |   -45 |   7.7% → 7.1% |     359 → 314 | `forEach`          | `java.util.HashMap`                                 |
| -12.2% |   -43 |   7.5% → 7.0% |     352 → 309 | `merge`            | `java.util.HashMap`                                 |
|  -6.1% |   -39 | 13.6% → 13.5% |     636 → 597 | `park`             | `java.util.concurrent.locks.LockSupport`            |
|  -5.3% |   -34 |         13.8% |     644 → 610 | `park`             | `jdk.internal.misc.Unsafe`                          |
|  -5.1% |   -23 |          9.6% |     450 → 427 | `exec`             | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
| -11.8% |   -22 |   4.0% → 3.7% |     187 → 165 | `copyOf`           | `java.util.Arrays`                                  |
| -13.8% |   -22 |   3.4% → 3.1% |     160 → 138 | `toArray`          | `java.util.ArrayList`                               |
| -15.2% |   -20 |   2.8% → 2.5% |     132 → 112 | `doubleValue`      | `java.lang.Double`                                  |
| -33.3% |   -14 |   0.9% → 0.6% |       42 → 28 | `checkIndex`       | `java.util.Objects`                                 |
|  -9.8% |   -12 |   2.6% → 2.5% |     122 → 110 | `add`              | `java.util.ArrayList`                               |

##### JIT

|  Change | Delta |            % | Samples | Function      | Location    |
| ------: | ----: | -----------: | ------: | ------------- | ----------- |
|  -26.7% |   -16 |  1.3% → 1.0% | 60 → 44 | `zero_blocks` | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `vtable stub` | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `itable stub` | `<unknown>` |

##### Compiler

|  Change | Delta |            % | Samples | Function                                      | Location    |
| ------: | ----: | -----------: | ------: | --------------------------------------------- | ----------- |
|  -41.7% |    -5 |  0.3% → 0.2% |  12 → 7 | `PhaseIdealLoop::build_and_optimize`          | `<unknown>` |
|  -41.7% |    -5 |  0.3% → 0.2% |  12 → 7 | `PhaseIdealLoop::PhaseIdealLoop`              | `<unknown>` |
|  -38.5% |    -5 |  0.3% → 0.2% |  13 → 8 | `PhaseIdealLoop::optimize`                    | `<unknown>` |
|  -80.0% |    -4 | 0.1% → <0.1% |   5 → 1 | `PhaseIdealLoop::build_loop_late_post_work`   | `<unknown>` |
|  -80.0% |    -4 | 0.1% → <0.1% |   5 → 1 | `PhaseIdealLoop::build_loop_late`             | `<unknown>` |
| removed |    -4 |  0.1% → 0.0% |   4 → 0 | `PhaseIdealLoop::Dominators`                  | `<unknown>` |
|  -44.4% |    -4 |  0.2% → 0.1% |   9 → 5 | `Compile::optimize_loops`                     | `<unknown>` |
|  -80.0% |    -4 | 0.1% → <0.1% |   5 → 1 | `PhaseChaitin::gather_lrg_masks`              | `<unknown>` |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep` | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `GraphBuilder::append_with_bci`               | `<unknown>` |
|  -50.0% |    -2 | 0.1% → <0.1% |   4 → 2 | `PhaseOutput::Output`                         | `<unknown>` |
|  -40.0% |    -2 |         0.1% |   5 → 3 | `Matcher::match`                              | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `MemNode::adr_type`                           | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `PhaseAggressiveCoalesce::insert_copies`      | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `Compile::call_generator`                     | `<unknown>` |
|  -15.4% |    -2 |  0.3% → 0.2% | 13 → 11 | `CompileQueue::get`                           | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `GraphBuilder::if_node`                       | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `lShiftI_reg_immNode::emit`                   | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseOutput::scratch_emit_size`              | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseOutput::shorten_branches`               | `<unknown>` |

#### Callers

Callers with the largest change in contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |       Samples | Caller            | Location                                                  |
| -----: | ----: | -----: | ------------: | ----------------- | --------------------------------------------------------- |
|  +4.1% |   +62 | 100.0% | 1,498 → 1,560 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `computeDirectly` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |       Samples | Caller            | Location                                                  |
| -----: | ----: | -----: | ------------: | ----------------- | --------------------------------------------------------- |
|  +4.1% |   +62 |  99.9% | 1,498 → 1,560 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  +4.1% |   +62 | 100.0% | 1,499 → 1,561 | `compute`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`    |

##### `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |     Samples | Caller      | Location                                                  |
| -----: | ----: | -----: | ----------: | ----------- | --------------------------------------------------------- |
|  +6.3% |   +61 | 100.0% | 966 → 1,027 | `vectorSum` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `average` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % |   Samples | Caller                   | Location                                               |
| -----: | ----: | -----: | --------: | ------------------------ | ------------------------------------------------------ |
|  +7.5% |   +48 | 100.0% | 641 → 689 | `computeClusterAverages` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeClusterAverages` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % |   Samples | Caller            | Location                                               |
| -----: | ----: | -----: | --------: | ----------------- | ------------------------------------------------------ |
|  +7.1% |   +46 | 100.0% | 647 → 693 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % |   Samples | Caller            | Location                                               |
| -----: | ----: | -----: | --------: | ----------------- | ------------------------------------------------------ |
|  +7.1% |   +46 | 100.0% | 647 → 693 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  +7.1% |   +46 | 100.0% | 647 → 693 | `compute`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `awaitWork` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % |   Samples | Caller      | Location                            |
| -----: | ----: | -----: | --------: | ----------- | ----------------------------------- |
| +15.2% |   +39 | 100.0% | 257 → 296 | `runWorker` | `java.util.concurrent.ForkJoinPool` |

##### `invoke` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % |   Samples | Caller         | Location                                               |
| -----: | ----: | ------------: | --------: | -------------- | ------------------------------------------------------ |
|  +7.3% |   +47 | 68.4% → 72.2% | 640 → 687 | `average`      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  -5.1% |   -23 | 47.8% → 44.6% | 447 → 424 | `lambda$run$0` | `org.renaissance.jdk.concurrent.JavaKMeans`            |

##### `CompileBroker::invoke_compiler_on_method` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------- | ----------- |
| +27.1% |   +16 | 100.0% | 59 → 75 | `CompileBroker::compiler_thread_loop` | `<unknown>` |

##### `JavaThread::thread_main_inner` (`<unknown>`)

| Change | Delta |      % | Samples | Caller             | Location    |
| -----: | ----: | -----: | ------: | ------------------ | ----------- |
| +20.5% |   +15 | 100.0% | 73 → 88 | `Thread::call_run` | `<unknown>` |

##### `CompileBroker::compiler_thread_loop` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                          | Location    |
| -----: | ----: | -----: | ------: | ------------------------------- | ----------- |
| +17.8% |   +13 | 100.0% | 73 → 86 | `JavaThread::thread_main_inner` | `<unknown>` |

##### `loadAndInvokeHarnessClass` (`org.renaissance.core.Launcher`)

| Change | Delta |      % | Samples | Caller               | Location                        |
| -----: | ----: | -----: | ------: | -------------------- | ------------------------------- |
| +28.6% |   +10 | 100.0% | 35 → 45 | `launchHarnessClass` | `org.renaissance.core.Launcher` |

##### `main` (`org.renaissance.harness.RenaissanceSuite$`)

| Change | Delta |      % | Samples | Caller | Location                                   |
| -----: | ----: | -----: | ------: | ------ | ------------------------------------------ |
| +31.0% |    +9 | 100.0% | 29 → 38 | `main` | `org.renaissance.harness.RenaissanceSuite` |

##### `main` (`org.renaissance.harness.RenaissanceSuite`)

| Change | Delta |      % | Samples | Caller         | Location                                             |
| -----: | ----: | -----: | ------: | -------------- | ---------------------------------------------------- |
| +29.0% |    +9 | 100.0% | 31 → 40 | `invokeStatic` | `java.lang.invoke.LambdaForm$DMH.0x000000a801004800` |

##### `invokeStatic` (`java.lang.invoke.LambdaForm$DMH.0x000000a801004800`)

| Change | Delta |      % | Samples | Caller   | Location                                            |
| -----: | ----: | -----: | ------: | -------- | --------------------------------------------------- |
| +29.0% |    +9 | 100.0% | 31 → 40 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x000000a801009800` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x000000a801009800`)

| Change | Delta |      % | Samples | Caller           | Location                           |
| -----: | ----: | -----: | ------: | ---------------- | ---------------------------------- |
| +29.0% |    +9 | 100.0% | 31 → 40 | `invokeExact_MT` | `java.lang.invoke.Invokers$Holder` |

##### `invokeImpl` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change | Delta |      % | Samples | Caller   | Location                                          |
| -----: | ----: | -----: | ------: | -------- | ------------------------------------------------- |
| +29.0% |    +9 | 100.0% | 31 → 40 | `invoke` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change | Delta |      % | Samples | Caller   | Location                   |
| -----: | ----: | -----: | ------: | -------- | -------------------------- |
| +29.0% |    +9 | 100.0% | 31 → 40 | `invoke` | `java.lang.reflect.Method` |

##### `invoke` (`java.lang.reflect.Method`)

| Change | Delta |      % | Samples | Caller                      | Location                        |
| -----: | ----: | -----: | ------: | --------------------------- | ------------------------------- |
| +29.0% |    +9 | 100.0% | 31 → 40 | `loadAndInvokeHarnessClass` | `org.renaissance.core.Launcher` |

##### `launchHarnessClass` (`org.renaissance.core.Launcher`)

| Change | Delta |      % | Samples | Caller | Location                        |
| -----: | ----: | -----: | ------: | ------ | ------------------------------- |
| +24.3% |    +9 | 100.0% | 37 → 46 | `main` | `org.renaissance.core.Launcher` |

##### `setUpBeforeAll` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change | Delta |      % | Samples | Caller             | Location                                  |
| ------: | ----: | -----: | ------: | ------------------ | ----------------------------------------- |
| +133.3% |    +8 | 100.0% |  6 → 14 | `executeBenchmark` | `org.renaissance.harness.ExecutionDriver` |

##### `runBenchmarks` (`org.renaissance.harness.RenaissanceSuite$`)

| Change | Delta |      % | Samples | Caller | Location                                    |
| -----: | ----: | -----: | ------: | ------ | ------------------------------------------- |
| +43.8% |    +7 | 100.0% | 16 → 23 | `main` | `org.renaissance.harness.RenaissanceSuite$` |

##### `executeBenchmark` (`org.renaissance.harness.ExecutionDriver`)

| Change | Delta |      % | Samples | Caller                     | Location                                    |
| -----: | ----: | -----: | ------: | -------------------------- | ------------------------------------------- |
| +54.5% |    +6 | 100.0% | 11 → 17 | `runBenchmarks$$anonfun$1` | `org.renaissance.harness.RenaissanceSuite$` |

##### `runBenchmarks$$anonfun$1` (`org.renaissance.harness.RenaissanceSuite$`)

| Change | Delta |      % | Samples | Caller      | Location                                                               |
| -----: | ----: | -----: | ------: | ----------- | ---------------------------------------------------------------------- |
| +40.0% |    +6 | 100.0% | 15 → 21 | `applyVoid` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a80111f1b8` |

##### `applyVoid` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a80111f1b8`)

| Change | Delta |      % | Samples | Caller  | Location                             |
| -----: | ----: | -----: | ------: | ------- | ------------------------------------ |
| +40.0% |    +6 | 100.0% | 15 → 21 | `apply` | `scala.runtime.function.JProcedure1` |

##### `apply` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda`)

| Change | Delta |            % | Samples | Caller               | Location                                                           |
| -----: | ----: | -----------: | ------: | -------------------- | ------------------------------------------------------------------ |
|    new |    +5 | 0.0% → 83.3% |   0 → 5 | `lambda$toCsvRows$2` | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter` |
|    new |    +1 | 0.0% → 16.7% |   0 → 1 | `map`                | `scala.collection.immutable.Range`                                 |

##### `rowToArray$1` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |             % | Samples | Caller                      | Location                                  |
| -----: | ----: | ------------: | ------: | --------------------------- | ----------------------------------------- |
|    new |    +5 | 0.0% → 100.0% |   0 → 5 | `setUpBeforeAll$$anonfun$1` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `setUpBeforeAll$$anonfun$1` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |             % | Samples | Caller  | Location                                          |
| -----: | ----: | ------------: | ------: | ------- | ------------------------------------------------- |
|    new |    +5 | 0.0% → 100.0% |   0 → 5 | `apply` | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda` |

##### `lambda$toCsvRows$2` (`org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`)

| Change | Delta |             % | Samples | Caller  | Location                                                                                      |
| -----: | ----: | ------------: | ------: | ------- | --------------------------------------------------------------------------------------------- |
|    new |    +5 | 0.0% → 100.0% |   0 → 5 | `apply` | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter$$Lambda.0x000000a801123bf8` |

##### `arrayof_oop_disjoint_arraycopy` (`<unknown>`)

| Change | Delta |      % | Samples | Caller   | Location              |
| -----: | ----: | -----: | ------: | -------- | --------------------- |
| +13.7% |    +7 | 100.0% | 51 → 58 | `addAll` | `java.util.ArrayList` |

##### `Compiler::compile_method` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                     | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------------ | ----------- |
| +50.0% |    +6 | 100.0% | 12 → 18 | `CompileBroker::invoke_compiler_on_method` | `<unknown>` |

##### `void HeapRegion::apply_to_marked_objects<G1FullGCPrepareTask::G1PrepareCompactLiveClosure>` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                      | Location    |
| -----: | ----: | ------------: | ------: | --------------------------- | ----------- |
|    new |    +6 | 0.0% → 100.0% |   0 → 6 | `G1FullGCPrepareTask::work` | `<unknown>` |

##### `G1FullGCPrepareTask::work` (`<unknown>`)

| Change | Delta |             % | Samples | Caller              | Location    |
| -----: | ----: | ------------: | ------: | ------------------- | ----------- |
|    new |    +6 | 0.0% → 100.0% |   0 → 6 | `WorkerThread::run` | `<unknown>` |

##### `G1FullGCCompactTask::compact_region` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                      | Location    |
| -----: | ----: | ------------: | ------: | --------------------------- | ----------- |
|    new |    +6 | 0.0% → 100.0% |   0 → 6 | `G1FullGCCompactTask::work` | `<unknown>` |

##### `G1FullGCCompactTask::work` (`<unknown>`)

| Change | Delta |             % | Samples | Caller              | Location    |
| -----: | ----: | ------------: | ------: | ------------------- | ----------- |
|    new |    +6 | 0.0% → 100.0% |   0 → 6 | `WorkerThread::run` | `<unknown>` |

##### `G1FullGCCompactTask::copy_object_to_new_location` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                                               | Location    |
| -----: | ----: | -----------: | ------: | ---------------------------------------------------- | ----------- |
|    new |    +4 | 0.0% → 80.0% |   0 → 4 | `G1FullGCCompactTask::G1CompactRegionClosure::apply` | `<unknown>` |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `G1FullGCCompactTask::compact_region`                | `<unknown>` |

##### `WatcherThread::sleep` (`<unknown>`)

| Change | Delta |             % | Samples | Caller               | Location    |
| -----: | ----: | ------------: | ------: | -------------------- | ----------- |
|    new |    +5 | 0.0% → 100.0% |   0 → 5 | `WatcherThread::run` | `<unknown>` |

##### `WatcherThread::run` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller             | Location    |
| ------: | ----: | -----: | ------: | ------------------ | ----------- |
| +400.0% |    +4 | 100.0% |   1 → 5 | `Thread::call_run` | `<unknown>` |

##### `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                                  | Location    |
| ------: | ----: | -----: | ------: | --------------------------------------- | ----------- |
| +200.0% |    +4 | 100.0% |   2 → 6 | `G1AdjustRegionClosure::do_heap_region` | `<unknown>` |

##### `G1ServiceThread::run_service` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                    | Location    |
| -----: | ----: | ------------: | ------: | ------------------------- | ----------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `ConcurrentGCThread::run` | `<unknown>` |

##### `G1CollectedHeap::par_iterate_regions_array` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                                                                    | Location    |
| -----: | ----: | -----------: | ------: | ------------------------------------------------------------------------- | ----------- |
|    new |    +2 | 0.0% → 50.0% |   0 → 2 | `G1PostEvacuateCollectionSetCleanupTask2::FreeCollectionSetTask::do_work` | `<unknown>` |
|    new |    +2 | 0.0% → 50.0% |   0 → 2 | `G1MergeHeapRootsTask::work`                                              | `<unknown>` |

##### `JVM_IHashCode` (`<unknown>`)

| Change | Delta |             % | Samples | Caller     | Location           |
| -----: | ----: | ------------: | ------: | ---------- | ------------------ |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `hashCode` | `java.lang.Object` |

##### `G1FullGCCompactTask::G1CompactRegionClosure::apply` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------------- | ----------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `G1FullGCCompactTask::compact_region` | `<unknown>` |

##### `PlatformMonitor::wait` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                  | Location    |
| -----: | ----: | ------------: | ------: | --------------------------------------- | ----------- |
| +33.3% |    +3 | 42.9% → 50.0% |  9 → 12 | `Monitor::wait_without_safepoint_check` | `<unknown>` |

##### `Monitor::wait_without_safepoint_check` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                   | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------- | ----------- |
|     new |    +5 |  0.0% → 41.7% |   0 → 5 | `WatcherThread::sleep`                                   | `<unknown>` |
|  -57.1% |    -4 | 77.8% → 25.0% |   7 → 3 | `TaskTerminator::offer_termination`                      | `<unknown>` |
|     new |    +2 |  0.0% → 16.7% |   0 → 2 | `G1ServiceThread::wait_for_task`                         | `<unknown>` |
|     new |    +2 |  0.0% → 16.7% |   0 → 2 | `MonitorDeflationThread::monitor_deflation_thread_entry` | `<unknown>` |
| removed |    -1 |  11.1% → 0.0% |   1 → 0 | `VMThread::wait_for_operation`                           | `<unknown>` |

##### `MemAllocator::mem_allocate_inside_tlab_slow` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                   | Location    |
| ------: | ----: | -----: | ------: | ------------------------ | ----------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `MemAllocator::allocate` | `<unknown>` |

##### `InstanceKlass::link_class_impl` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                               | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------- | ----------- |
| +300.0% |    +3 | 50.0% → 80.0% |   1 → 4 | `InstanceKlass::initialize_impl`                     | `<unknown>` |
| +100.0% |    +1 | 50.0% → 40.0% |   1 → 2 | `InstanceKlass::link_class_impl`                     | `<unknown>` |
| removed |    -1 |  50.0% → 0.0% |   1 → 0 | `SystemDictionary::resolve_hidden_class_from_stream` | `<unknown>` |
|     new |    +1 |  0.0% → 20.0% |   0 → 1 | `get_class_declared_methods_helper`                  | `<unknown>` |

##### `InstanceKlass::initialize_impl` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                        | Location    |
| ------: | ----: | -------------: | ------: | ----------------------------- | ----------- |
| +200.0% |    +2 | 100.0% → 75.0% |   1 → 3 | `LinkResolver::resolve_field` | `<unknown>` |
|     new |    +1 |   0.0% → 25.0% |   0 → 1 | `InterpreterRuntime::_new`    | `<unknown>` |

##### `hash` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Caller            | Location            |
| ------: | ----: | ------------: | ------: | ----------------- | ------------------- |
|  +47.1% |    +8 | 94.4% → 92.6% | 17 → 25 | `computeIfAbsent` | `java.util.HashMap` |
| removed |    -1 |   5.6% → 0.0% |   1 → 0 | `merge`           | `java.util.HashMap` |
|     new |    +1 |   0.0% → 3.7% |   0 → 1 | `putMapEntries`   | `java.util.HashMap` |
|     new |    +1 |   0.0% → 3.7% |   0 → 1 | `put`             | `java.util.HashMap` |

##### `elementData` (`java.util.ArrayList`)

| Change | Delta |      % |   Samples | Caller | Location              |
| -----: | ----: | -----: | --------: | ------ | --------------------- |
|  +5.6% |    +8 | 100.0% | 143 → 151 | `get`  | `java.util.ArrayList` |

##### `invokeExact_MT` (`java.lang.invoke.Invokers$Holder`)

|  Change | Delta |              % | Samples | Caller       | Location                                          |
| ------: | ----: | -------------: | ------: | ------------ | ------------------------------------------------- |
|  +29.0% |    +9 | 96.9% → 100.0% | 31 → 40 | `invokeImpl` | `jdk.internal.reflect.DirectMethodHandleAccessor` |
| removed |    -1 |    3.1% → 0.0% |   1 → 0 | `invoke`     | `java.lang.invoke.BootstrapMethodInvoker`         |

##### `evaluateSequential` (`java.util.stream.ReduceOps$ReduceOp`)

|  Change | Delta |      % | Samples | Caller     | Location                            |
| ------: | ----: | -----: | ------: | ---------- | ----------------------------------- |
| +116.7% |    +7 | 100.0% |  6 → 13 | `evaluate` | `java.util.stream.AbstractPipeline` |

##### `collect` (`java.util.stream.ReferencePipeline`)

| Change | Delta |              % | Samples | Caller         | Location                                                           |
| -----: | ----: | -------------: | ------: | -------------- | ------------------------------------------------------------------ |
|    new |    +5 |   0.0% → 38.5% |   0 → 5 | `toCsvRows`    | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter` |
| +33.3% |    +2 | 100.0% → 61.5% |   6 → 8 | `generateData` | `org.renaissance.jdk.concurrent.JavaKMeans`                        |

##### `computeIfAbsent` (`java.util.HashMap`)

| Change | Delta |      % |   Samples | Caller            | Location                                                   |
| -----: | ----: | -----: | --------: | ----------------- | ---------------------------------------------------------- |
|  +3.9% |    +6 | 100.0% | 153 → 159 | `collectClusters` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `apply` (`scala.runtime.function.JProcedure1`)

| Change | Delta |           % | Samples | Caller    | Location                             |
| -----: | ----: | ----------: | ------: | --------- | ------------------------------------ |
| +40.0% |    +6 |      100.0% | 15 → 21 | `apply`   | `scala.runtime.function.JProcedure1` |
| +40.0% |    +6 |      100.0% | 15 → 21 | `foreach` | `scala.collection.immutable.List`    |
|    new |    +2 | 0.0% → 9.5% |   0 → 2 | `foreach` | `scala.collection.IterableOnceOps`   |

##### `foreach` (`scala.collection.immutable.List`)

| Change | Delta |      % | Samples | Caller          | Location                                    |
| -----: | ----: | -----: | ------: | --------------- | ------------------------------------------- |
| +40.0% |    +6 | 100.0% | 15 → 21 | `runBenchmarks` | `org.renaissance.harness.RenaissanceSuite$` |

##### `<init>` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Caller  | Location                                    |
| -----: | ----: | -----: | ------: | ------- | ------------------------------------------- |
| +83.3% |    +5 | 100.0% |  6 → 11 | `merge` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `evaluate` (`java.util.stream.AbstractPipeline`)

|  Change | Delta |             % | Samples | Caller                | Location                             |
| ------: | ----: | ------------: | ------: | --------------------- | ------------------------------------ |
| +116.7% |    +7 | 54.5% → 81.3% |  6 → 13 | `collect`             | `java.util.stream.ReferencePipeline` |
|  +11.1% |    +1 | 81.8% → 62.5% |  9 → 10 | `evaluateToArrayNode` | `java.util.stream.AbstractPipeline`  |

##### `parkUntil` (`java.util.concurrent.locks.LockSupport`)

| Change | Delta |      % | Samples | Caller      | Location                            |
| -----: | ----: | -----: | ------: | ----------- | ----------------------------------- |
| +62.5% |    +5 | 100.0% |  8 → 13 | `awaitWork` | `java.util.concurrent.ForkJoinPool` |

##### `accept` (`java.util.stream.ReferencePipeline$3$1`)

| Change | Delta |             % | Samples | Caller             | Location                                  |
| -----: | ----: | ------------: | ------: | ------------------ | ----------------------------------------- |
|    new |    +5 | 0.0% → 100.0% |   0 → 5 | `forEachRemaining` | `java.util.Spliterators$ArraySpliterator` |

##### `forEachRemaining` (`java.util.Spliterators$ArraySpliterator`)

| Change | Delta |             % | Samples | Caller     | Location                            |
| -----: | ----: | ------------: | ------: | ---------- | ----------------------------------- |
|    new |    +5 | 0.0% → 100.0% |   0 → 5 | `copyInto` | `java.util.stream.AbstractPipeline` |

##### `Compile::Compile` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                       | Location    |
| -----: | ----: | -----: | ------: | ---------------------------- | ----------- |
| +19.1% |    +9 | 100.0% | 47 → 56 | `C2Compiler::compile_method` | `<unknown>` |

##### `C2Compiler::compile_method` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                     | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------------ | ----------- |
| +19.1% |    +9 | 100.0% | 47 → 56 | `CompileBroker::invoke_compiler_on_method` | `<unknown>` |

##### `Compilation::compile_java_method` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                        | Location    |
| -----: | ----: | -----: | ------: | ----------------------------- | ----------- |
| +88.9% |    +8 | 100.0% |  9 → 17 | `Compilation::compile_method` | `<unknown>` |

##### `Compilation::emit_lir` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                             | Location    |
| ------: | ----: | -----: | ------: | ---------------------------------- | ----------- |
| +800.0% |    +8 | 100.0% |   1 → 9 | `Compilation::compile_java_method` | `<unknown>` |

##### `Compile::Code_Gen` (`<unknown>`)

| Change | Delta |      % | Samples | Caller             | Location    |
| -----: | ----: | -----: | ------: | ------------------ | ----------- |
| +26.9% |    +7 | 100.0% | 26 → 33 | `Compile::Compile` | `<unknown>` |

##### `LinearScan::do_linear_scan` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                  | Location    |
| -----: | ----: | ------------: | ------: | ----------------------- | ----------- |
|    new |    +7 | 0.0% → 100.0% |   0 → 7 | `Compilation::emit_lir` | `<unknown>` |

##### `Compilation::compile_method` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                     | Location    |
| -----: | ----: | -----: | ------: | -------------------------- | ----------- |
| +50.0% |    +6 | 100.0% | 12 → 18 | `Compilation::Compilation` | `<unknown>` |

##### `Compilation::Compilation` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                     | Location    |
| -----: | ----: | -----: | ------: | -------------------------- | ----------- |
| +50.0% |    +6 | 100.0% | 12 → 18 | `Compiler::compile_method` | `<unknown>` |

##### `PhaseCFG::global_code_motion` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                            | Location    |
| ------: | ----: | -----: | ------: | --------------------------------- | ----------- |
| +166.7% |    +5 | 100.0% |   3 → 8 | `PhaseCFG::do_global_code_motion` | `<unknown>` |

##### `PhaseCFG::do_global_code_motion` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller              | Location    |
| ------: | ----: | -----: | ------: | ------------------- | ----------- |
| +166.7% |    +5 | 100.0% |   3 → 8 | `Compile::Code_Gen` | `<unknown>` |

##### `LinearScanWalker::alloc_free_reg` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                               | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------------ | ----------- |
|    new |    +5 | 0.0% → 100.0% |   0 → 5 | `LinearScanWalker::activate_current` | `<unknown>` |

##### `LinearScanWalker::activate_current` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                    | Location    |
| -----: | ----: | ------------: | ------: | ------------------------- | ----------- |
|    new |    +5 | 0.0% → 100.0% |   0 → 5 | `IntervalWalker::walk_to` | `<unknown>` |

##### `IntervalWalker::walk_to` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                           | Location    |
| -----: | ----: | ------------: | ------: | -------------------------------- | ----------- |
|    new |    +5 | 0.0% → 100.0% |   0 → 5 | `LinearScan::allocate_registers` | `<unknown>` |

##### `LinearScan::allocate_registers` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                       | Location    |
| -----: | ----: | ------------: | ------: | ---------------------------- | ----------- |
|    new |    +5 | 0.0% → 100.0% |   0 → 5 | `LinearScan::do_linear_scan` | `<unknown>` |

##### `PhaseChaitin::Split` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                            | Location    |
| -----: | ----: | ------------: | ------: | --------------------------------- | ----------- |
|    new |    +5 | 0.0% → 100.0% |   0 → 5 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `PhaseChaitin::Register_Allocate` (`<unknown>`)

| Change | Delta |      % | Samples | Caller              | Location    |
| -----: | ----: | -----: | ------: | ------------------- | ----------- |
| +21.4% |    +3 | 100.0% | 14 → 17 | `Compile::Code_Gen` | `<unknown>` |

##### `PhaseCCP::analyze` (`<unknown>`)

| Change | Delta |             % | Samples | Caller               | Location    |
| -----: | ----: | ------------: | ------: | -------------------- | ----------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `PhaseCCP::PhaseCCP` | `<unknown>` |

##### `PhaseCCP::PhaseCCP` (`<unknown>`)

| Change | Delta |             % | Samples | Caller              | Location    |
| -----: | ----: | ------------: | ------: | ------------------- | ----------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `Compile::Optimize` | `<unknown>` |

##### `scan` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % |       Samples | Caller      | Location                            |
| -----: | ----: | -----: | ------------: | ----------- | ----------------------------------- |
|  -6.7% |  -279 | 100.0% | 4,165 → 3,886 | `runWorker` | `java.util.concurrent.ForkJoinPool` |

##### `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change | Delta |      % |       Samples | Caller | Location                             |
| -----: | ----: | -----: | ------------: | ------ | ------------------------------------ |
|  -6.7% |  -277 | 100.0% | 4,130 → 3,853 | `exec` | `java.util.concurrent.RecursiveTask` |

##### `exec` (`java.util.concurrent.RecursiveTask`)

| Change | Delta |      % |       Samples | Caller   | Location                            |
| -----: | ----: | -----: | ------------: | -------- | ----------------------------------- |
|  -6.7% |  -276 | 100.0% | 4,130 → 3,854 | `doExec` | `java.util.concurrent.ForkJoinTask` |

##### `doExec` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % |       Samples | Caller             | Location                                      |
| -----: | ----: | ------------: | ------------: | ------------------ | --------------------------------------------- |
|  -6.6% |  -274 |        100.0% | 4,154 → 3,880 | `topLevelExec`     | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  -5.4% |  -200 | 89.8% → 91.0% | 3,729 → 3,529 | `tryRemoveAndExec` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| -16.2% |  -166 | 24.7% → 22.1% |   1,024 → 858 | `helpJoin`         | `java.util.concurrent.ForkJoinPool`           |
|  +1.7% |   +16 | 22.5% → 24.5% |     935 → 951 | `invoke`           | `java.util.concurrent.ForkJoinTask`           |

##### `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |      % |       Samples | Caller | Location                            |
| -----: | ----: | -----: | ------------: | ------ | ----------------------------------- |
|  -6.6% |  -274 | 100.0% | 4,155 → 3,881 | `scan` | `java.util.concurrent.ForkJoinPool` |

##### `awaitDone` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |      % |       Samples | Caller | Location                            |
| -----: | ----: | -----: | ------------: | ------ | ----------------------------------- |
|  -6.4% |  -250 | 100.0% | 3,935 → 3,685 | `join` | `java.util.concurrent.ForkJoinTask` |

##### `join` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |      % |       Samples | Caller    | Location                                               |
| -----: | ----: | -----: | ------------: | --------- | ------------------------------------------------------ |
|  -6.4% |  -250 | 100.0% | 3,935 → 3,685 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `runWorker` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % |       Samples | Caller | Location                                    |
| -----: | ----: | -----: | ------------: | ------ | ------------------------------------------- |
|  -5.4% |  -237 | 100.0% | 4,424 → 4,187 | `run`  | `java.util.concurrent.ForkJoinWorkerThread` |

##### `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |      % |       Samples | Caller      | Location                            |
| -----: | ----: | -----: | ------------: | ----------- | ----------------------------------- |
|  -5.4% |  -201 | 100.0% | 3,731 → 3,530 | `awaitDone` | `java.util.concurrent.ForkJoinTask` |

##### `computeDirectly` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |       Samples | Caller            | Location                                                   |
| -----: | ----: | -----: | ------------: | ----------------- | ---------------------------------------------------------- |
| -11.3% |  -201 | 100.0% | 1,773 → 1,572 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -11.3% |  -201 | 100.0% | 1,773 → 1,572 | `compute`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |

##### `helpJoin` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % |     Samples | Caller      | Location                            |
| -----: | ----: | -----: | ----------: | ----------- | ----------------------------------- |
| -16.6% |  -175 | 100.0% | 1,052 → 877 | `awaitDone` | `java.util.concurrent.ForkJoinTask` |

##### `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |       Samples | Caller            | Location                                                   |
| -----: | ----: | -----: | ------------: | ----------------- | ---------------------------------------------------------- |
| -12.9% |  -171 | 100.0% | 1,321 → 1,150 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller                | Location                                                   |
| -----: | ----: | -----: | --------: | --------------------- | ---------------------------------------------------------- |
| -13.9% |  -125 | 100.0% | 902 → 777 | `findNearestCentroid` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a8011a7000`)

| Change | Delta |      % |   Samples | Caller    | Location            |
| -----: | ----: | -----: | --------: | --------- | ------------------- |
| -13.0% |   -46 | 100.0% | 355 → 309 | `forEach` | `java.util.HashMap` |

##### `forEach` (`java.util.HashMap`)

| Change | Delta |      % |   Samples | Caller  | Location                                    |
| -----: | ----: | -----: | --------: | ------- | ------------------------------------------- |
| -12.5% |   -45 | 100.0% | 359 → 314 | `merge` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `merge` (`java.util.HashMap`)

| Change | Delta |      % |   Samples | Caller           | Location                                    |
| -----: | ----: | -----: | --------: | ---------------- | ------------------------------------------- |
| -12.2% |   -43 | 100.0% | 352 → 309 | `lambda$merge$7` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % |   Samples | Caller   | Location                                                               |
| -----: | ----: | -----: | --------: | -------- | ---------------------------------------------------------------------- |
| -12.2% |   -43 | 100.0% | 352 → 309 | `accept` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a8011a7000` |

##### `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |             % |   Samples | Caller           | Location                                                   |
| -----: | ----: | ------------: | --------: | ---------------- | ---------------------------------------------------------- |
| -10.5% |   -38 | 98.4% → 98.8% | 363 → 325 | `combineResults` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -33.3% |    -2 |   1.6% → 1.2% |     6 → 4 | `combineResults` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

##### `park` (`java.util.concurrent.locks.LockSupport`)

| Change | Delta |             % |   Samples | Caller      | Location                            |
| -----: | ----: | ------------: | --------: | ----------- | ----------------------------------- |
| -18.1% |   -70 | 60.8% → 53.1% | 387 → 317 | `awaitDone` | `java.util.concurrent.ForkJoinTask` |
| +12.4% |   +31 | 39.2% → 46.9% | 249 → 280 | `awaitWork` | `java.util.concurrent.ForkJoinPool` |

##### `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % |   Samples | Caller           | Location                                                   |
| -----: | ----: | ------------: | --------: | ---------------- | ---------------------------------------------------------- |
| -10.5% |   -38 | 99.5% → 99.4% | 363 → 325 | `combineResults` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -10.4% |   -38 |        100.0% | 365 → 327 | `compute`        | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |

##### `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller            | Location                                                   |
| -----: | ----: | -----: | --------: | ----------------- | ---------------------------------------------------------- |
|  -6.6% |   -30 | 100.0% | 452 → 422 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % |   Samples | Caller | Location                                                               |
| -----: | ----: | -----: | --------: | ------ | ---------------------------------------------------------------------- |
|  -5.1% |   -23 | 100.0% | 450 → 427 | `call` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a8011a2bd0` |

##### `call` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a8011a2bd0`)

| Change | Delta |      % |   Samples | Caller | Location                                            |
| -----: | ----: | -----: | --------: | ------ | --------------------------------------------------- |
|  -5.1% |   -23 | 100.0% | 450 → 427 | `exec` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % |   Samples | Caller  | Location                                            |
| -----: | ----: | -----: | --------: | ------- | --------------------------------------------------- |
|  -5.9% |   -14 | 100.0% | 238 → 224 | `apply` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda` |

##### `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`)

|  Change | Delta |             % |   Samples | Caller   | Location                           |
| ------: | ----: | ------------: | --------: | -------- | ---------------------------------- |
|   -5.5% |   -13 | 98.3% → 96.6% | 238 → 225 | `merge`  | `java.util.HashMap`                |
| +100.0% |    +4 |   1.7% → 3.4% |     4 → 8 | `accept` | `java.util.stream.IntPipeline$1$1` |
|     new |    +1 |   0.0% → 0.4% |     0 → 1 | `<init>` | `java.util.stream.Nodes$ArrayNode` |

##### `run` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |      % | Samples | Caller             | Location                                  |
| -----: | ----: | -----: | ------: | ------------------ | ----------------------------------------- |
| -80.0% |    -4 | 100.0% |   5 → 1 | `executeOperation` | `org.renaissance.harness.ExecutionDriver` |

##### `boxed` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % | Samples | Caller                   | Location                                               |
| -----: | ----: | -----: | ------: | ------------------------ | ------------------------------------------------------ |
| -50.0% |    -3 | 100.0% |   6 → 3 | `computeClusterAverages` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `executeOperation` (`org.renaissance.harness.ExecutionDriver`)

| Change | Delta |      % | Samples | Caller             | Location                                  |
| -----: | ----: | -----: | ------: | ------------------ | ----------------------------------------- |
| -40.0% |    -2 | 100.0% |   5 → 3 | `executeBenchmark` | `org.renaissance.harness.ExecutionDriver` |

##### `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % | Samples | Caller           | Location                                               |
| -----: | ----: | -----: | ------: | ---------------- | ------------------------------------------------------ |
| -33.3% |    -2 | 100.0% |   6 → 4 | `combineResults` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| -33.3% |    -2 | 100.0% |   6 → 4 | `compute`        | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `add` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % | Samples | Caller           | Location                                                  |
| -----: | ----: | -----: | ------: | ---------------- | --------------------------------------------------------- |
| -40.0% |    -2 | 100.0% |   5 → 3 | `combineResults` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |              % | Samples | Caller           | Location                                                  |
| -----: | ----: | -------------: | ------: | ---------------- | --------------------------------------------------------- |
| -40.0% |    -2 | 100.0% → 75.0% |   5 → 3 | `combineResults` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| -20.0% |    -1 |         100.0% |   5 → 4 | `compute`        | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`    |

##### `selectBenchmarks` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change | Delta |             % | Samples | Caller | Location                                    |
| ------: | ----: | ------------: | ------: | ------ | ------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `main` | `org.renaissance.harness.RenaissanceSuite$` |

##### `WorkerThread::run` (`<unknown>`)

| Change | Delta |      % |  Samples | Caller             | Location    |
| -----: | ----: | -----: | -------: | ------------------ | ----------- |
| -28.4% |   -38 | 100.0% | 134 → 96 | `Thread::call_run` | `<unknown>` |

##### `Parker::park` (`<unknown>`)

| Change | Delta |      % |   Samples | Caller        | Location    |
| -----: | ----: | -----: | --------: | ------------- | ----------- |
|  -5.7% |   -36 | 100.0% | 635 → 599 | `Unsafe_Park` | `<unknown>` |

##### `G1EvacuateRegionsBaseTask::work` (`<unknown>`)

| Change | Delta |      % | Samples | Caller              | Location    |
| -----: | ----: | -----: | ------: | ------------------- | ----------- |
| -77.8% |   -35 | 100.0% | 45 → 10 | `WorkerThread::run` | `<unknown>` |

##### `Unsafe_Park` (`<unknown>`)

| Change | Delta |              % |   Samples | Caller                | Location                   |
| -----: | ----: | -------------: | --------: | --------------------- | -------------------------- |
|  -5.4% |   -35 | 100.0% → 99.8% | 643 → 608 | `park`                | `jdk.internal.misc.Unsafe` |
|    new |    +1 |    0.0% → 0.2% |     0 → 1 | `[break_stack_range]` | `<unknown>`                |

##### `forward_copy_longs` (`<unknown>`)

| Change | Delta |             % |   Samples | Caller                            | Location    |
| -----: | ----: | ------------: | --------: | --------------------------------- | ----------- |
| -20.6% |   -40 | 82.2% → 75.9% | 194 → 154 | `arrayof_jint_disjoint_arraycopy` | `<unknown>` |
| +16.7% |    +7 | 17.8% → 24.1% |   42 → 49 | `arrayof_oop_disjoint_arraycopy`  | `<unknown>` |

##### `arrayof_jint_disjoint_arraycopy` (`<unknown>`)

| Change | Delta |             % |   Samples | Caller   | Location              |
| -----: | ----: | ------------: | --------: | -------- | --------------------- |
| -17.2% |   -23 | 64.1% → 62.4% | 134 → 111 | `copyOf` | `java.util.Arrays`    |
| -18.2% |   -12 | 31.6% → 30.3% |   66 → 54 | `merge`  | `java.util.HashMap`   |
| +44.4% |    +4 |   4.3% → 7.3% |    9 → 13 | `grow`   | `java.util.ArrayList` |

##### `__psynch_cvwait` (`<unknown>`)

| Change | Delta |             % |   Samples | Caller                  | Location    |
| -----: | ----: | ------------: | --------: | ----------------------- | ----------- |
|  -5.6% |   -35 | 97.2% → 96.1% | 630 → 595 | `Parker::park`          | `<unknown>` |
| +33.3% |    +6 |   2.8% → 3.9% |   18 → 24 | `PlatformMonitor::wait` | `<unknown>` |

##### `G1ParScanThreadState::trim_queue_to_threshold` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                                                              | Location    |
| ------: | ----: | -------------: | ------: | ------------------------------------------------------------------- | ----------- |
|  -76.2% |   -16 | 65.6% → 100.0% |  21 → 5 | `G1ParScanThreadState::steal_and_trim_queue`                        | `<unknown>` |
| removed |    -6 |   18.8% → 0.0% |   6 → 0 | `G1ScanHRForRegionClosure::scan_memregion`                          | `<unknown>` |
| removed |    -4 |   12.5% → 0.0% |   4 → 0 | `G1ParEvacuateFollowersClosure::do_void`                            | `<unknown>` |
| removed |    -1 |    3.1% → 0.0% |   1 → 0 | `void G1ParCopyClosure<(G1Barrier)1, false>::do_oop_work<oopDesc*>` | `<unknown>` |

##### `G1ParEvacuateFollowersClosure::do_void` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                         | Location    |
| -----: | ----: | -----: | ------: | ---------------------------------------------- | ----------- |
| -72.2% |   -26 | 100.0% | 36 → 10 | `G1EvacuateRegionsTask::evacuate_live_objects` | `<unknown>` |

##### `G1EvacuateRegionsTask::evacuate_live_objects` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                            | Location    |
| -----: | ----: | -----: | ------: | --------------------------------- | ----------- |
| -72.2% |   -26 | 100.0% | 36 → 10 | `G1EvacuateRegionsBaseTask::work` | `<unknown>` |

##### `_pthread_start` (`<unknown>`)

| Change | Delta |      % |   Samples | Caller         | Location    |
| -----: | ----: | -----: | --------: | -------------- | ----------- |
|  -7.5% |   -16 | 100.0% | 212 → 196 | `thread_start` | `<unknown>` |

##### `G1ParScanThreadState::steal_and_trim_queue` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                   | Location    |
| -----: | ----: | -----: | ------: | ---------------------------------------- | ----------- |
| -72.7% |   -16 | 100.0% |  22 → 6 | `G1ParEvacuateFollowersClosure::do_void` | `<unknown>` |

##### `Thread::call_run` (`<unknown>`)

| Change | Delta |      % |   Samples | Caller                | Location    |
| -----: | ----: | -----: | --------: | --------------------- | ----------- |
|  -7.1% |   -15 | 100.0% | 211 → 196 | `thread_native_entry` | `<unknown>` |

##### `thread_native_entry` (`<unknown>`)

| Change | Delta |      % |   Samples | Caller           | Location    |
| -----: | ----: | -----: | --------: | ---------------- | ----------- |
|  -7.1% |   -15 | 100.0% | 211 → 196 | `_pthread_start` | `<unknown>` |

##### `G1ParScanThreadState::do_partial_array` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                          | Location    |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | ----------- |
| removed |   -15 | 100.0% → 0.0% |  15 → 0 | `G1ParScanThreadState::trim_queue_to_threshold` | `<unknown>` |

##### `G1FullGCMarker::mark_object` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                                               | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------- | ----------- |
|  -25.0% |    -7 | 80.0% → 95.5% | 28 → 21 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>`                                      | `<unknown>` |
|  -80.0% |    -4 |  14.3% → 4.5% |   5 → 1 | `G1FullGCMarker::follow_marking_stacks`                                                              | `<unknown>` |
| removed |    -1 |   2.9% → 0.0% |   1 → 0 | `void OopOopIterateDispatch<G1MarkAndPushClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `<unknown>` |
| removed |    -1 |   2.9% → 0.0% |   1 → 0 | `G1FullGCMarker::complete_marking`                                                                   | `<unknown>` |

##### `G1EvacuateRegionsTask::scan_roots` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                            | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------- | ----------- |
| removed |    -9 | 100.0% → 0.0% |   9 → 0 | `G1EvacuateRegionsBaseTask::work` | `<unknown>` |

##### `G1FullGCMarker::complete_marking` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                   | Location    |
| -----: | ----: | -----: | ------: | ------------------------ | ----------- |
| -15.0% |    -9 | 100.0% | 60 → 51 | `G1FullGCMarkTask::work` | `<unknown>` |

##### `G1FullGCMarkTask::work` (`<unknown>`)

| Change | Delta |      % | Samples | Caller              | Location    |
| -----: | ----: | -----: | ------: | ------------------- | ----------- |
| -13.3% |    -8 | 100.0% | 60 → 52 | `WorkerThread::run` | `<unknown>` |

##### `park` (`jdk.internal.misc.Unsafe`)

| Change | Delta |             % |   Samples | Caller      | Location                                 |
| -----: | ----: | ------------: | --------: | ----------- | ---------------------------------------- |
|  -6.1% |   -39 | 98.8% → 97.9% | 636 → 597 | `park`      | `java.util.concurrent.locks.LockSupport` |
| +62.5% |    +5 |   1.2% → 2.1% |    8 → 13 | `parkUntil` | `java.util.concurrent.locks.LockSupport` |

##### `exec` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

| Change | Delta |      % |   Samples | Caller   | Location                            |
| -----: | ----: | -----: | --------: | -------- | ----------------------------------- |
|  -5.1% |   -23 | 100.0% | 450 → 427 | `doExec` | `java.util.concurrent.ForkJoinTask` |

##### `copyOf` (`java.util.Arrays`)

|  Change | Delta |             % |   Samples | Caller     | Location                       |
| ------: | ----: | ------------: | --------: | ---------- | ------------------------------ |
|  -13.8% |   -22 | 85.6% → 83.6% | 160 → 138 | `toArray`  | `java.util.ArrayList`          |
|   +3.8% |    +1 | 13.9% → 16.4% |   26 → 27 | `grow`     | `java.util.ArrayList`          |
| removed |    -1 |   0.5% → 0.0% |     1 → 0 | `getBytes` | `jdk.internal.loader.Resource` |

##### `toArray` (`java.util.ArrayList`)

| Change | Delta |             % | Samples | Caller   | Location              |
| -----: | ----: | ------------: | ------: | -------- | --------------------- |
| -16.5% |   -13 | 49.4% → 47.8% | 79 → 66 | `addAll` | `java.util.ArrayList` |
| -11.1% |    -9 | 50.6% → 52.2% | 81 → 72 | `<init>` | `java.util.ArrayList` |

##### `doubleValue` (`java.lang.Double`)

| Change | Delta |             % |   Samples | Caller       | Location                                                   |
| -----: | ----: | ------------: | --------: | ------------ | ---------------------------------------------------------- |
| -73.7% |   -14 |  14.4% → 4.5% |    19 → 5 | `distance`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -5.3% |    -6 | 85.6% → 95.5% | 113 → 107 | `accumulate` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

##### `checkIndex` (`java.util.Objects`)

| Change | Delta |      % | Samples | Caller | Location              |
| -----: | ----: | -----: | ------: | ------ | --------------------- |
| -33.3% |   -14 | 100.0% | 42 → 28 | `get`  | `java.util.ArrayList` |

##### `add` (`java.util.ArrayList`)

| Change | Delta |             % |   Samples | Caller            | Location                                                   |
| -----: | ----: | ------------: | --------: | ----------------- | ---------------------------------------------------------- |
|  -9.9% |   -12 | 99.2% → 99.1% | 121 → 109 | `add`             | `java.util.ArrayList`                                      |
|  -9.8% |   -12 |        100.0% | 122 → 110 | `collectClusters` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `zero_blocks` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller   | Location              |
| ------: | ----: | ------------: | ------: | -------- | --------------------- |
|  -36.1% |   -13 | 60.0% → 52.3% | 36 → 23 | `merge`  | `java.util.HashMap`   |
|  -11.1% |    -2 | 30.0% → 36.4% | 18 → 16 | `grow`   | `java.util.ArrayList` |
| removed |    -1 |   1.7% → 0.0% |   1 → 0 | `copyOf` | `java.util.Arrays`    |

##### `vtable stub` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller   | Location                            |
| ------: | ----: | -----------: | ------: | -------- | ----------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `join`   | `java.util.concurrent.ForkJoinTask` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `doExec` | `java.util.concurrent.ForkJoinTask` |

##### `itable stub` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                | Location                |
| ------: | ----: | ------------: | ------: | --------------------- | ----------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `getExactSizeIfKnown` | `java.util.Spliterator` |

##### `PhaseIdealLoop::build_and_optimize` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                           | Location    |
| -----: | ----: | -----: | ------: | -------------------------------- | ----------- |
| -41.7% |    -5 | 100.0% |  12 → 7 | `PhaseIdealLoop::PhaseIdealLoop` | `<unknown>` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                     | Location    |
| -----: | ----: | -----: | ------: | -------------------------- | ----------- |
| -41.7% |    -5 | 100.0% |  12 → 7 | `PhaseIdealLoop::optimize` | `<unknown>` |

##### `PhaseIdealLoop::optimize` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                    | Location    |
| -----: | ----: | ------------: | ------: | ------------------------- | ----------- |
| -44.4% |    -4 | 69.2% → 62.5% |   9 → 5 | `Compile::optimize_loops` | `<unknown>` |
| -25.0% |    -1 | 30.8% → 37.5% |   4 → 3 | `Compile::Optimize`       | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                            | Location    |
| -----: | ----: | -----: | ------: | --------------------------------- | ----------- |
| -80.0% |    -4 | 100.0% |   5 → 1 | `PhaseIdealLoop::build_loop_late` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                               | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------ | ----------- |
| -80.0% |    -4 | 100.0% |   5 → 1 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `PhaseIdealLoop::Dominators` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                               | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------ | ----------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `Compile::optimize_loops` (`<unknown>`)

| Change | Delta |      % | Samples | Caller              | Location    |
| -----: | ----: | -----: | ------: | ------------------- | ----------- |
| -44.4% |    -4 | 100.0% |   9 → 5 | `Compile::Optimize` | `<unknown>` |

##### `PhaseChaitin::gather_lrg_masks` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                            | Location    |
| -----: | ----: | -----: | ------: | --------------------------------- | ----------- |
| -80.0% |    -4 | 100.0% |   5 → 1 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `PhaseIdealLoop::get_late_ctrl_with_anti_dep` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                      | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------- | ----------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `PhaseIdealLoop::build_loop_late_post_work` | `<unknown>` |

##### `GraphBuilder::append_with_bci` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                      | Location    |
| ------: | ----: | -----------: | ------: | ------------------------------------------- | ----------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `GraphBuilder::if_node`                     | `<unknown>` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `GraphBuilder::iterate_bytecodes_for_block` | `<unknown>` |

##### `PhaseOutput::Output` (`<unknown>`)

| Change | Delta |      % | Samples | Caller              | Location    |
| -----: | ----: | -----: | ------: | ------------------- | ----------- |
| -50.0% |    -2 | 100.0% |   4 → 2 | `Compile::Code_Gen` | `<unknown>` |

##### `Matcher::match` (`<unknown>`)

| Change | Delta |      % | Samples | Caller              | Location    |
| -----: | ----: | -----: | ------: | ------------------- | ----------- |
| -40.0% |    -2 | 100.0% |   5 → 3 | `Compile::Code_Gen` | `<unknown>` |

##### `MemNode::adr_type` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                        | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------------- | ----------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep` | `<unknown>` |

##### `PhaseAggressiveCoalesce::insert_copies` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                            | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------- | ----------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `Compile::call_generator` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller           | Location    |
| ------: | ----: | ------------: | ------: | ---------------- | ----------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `Parse::do_call` | `<unknown>` |

##### `CompileQueue::get` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------- | ----------- |
| -15.4% |    -2 | 100.0% | 13 → 11 | `CompileBroker::compiler_thread_loop` | `<unknown>` |

##### `GraphBuilder::if_node` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                      | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `GraphBuilder::iterate_bytecodes_for_block` | `<unknown>` |

##### `lShiftI_reg_immNode::emit` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                           | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseOutput::scratch_emit_size` | `<unknown>` |

##### `PhaseOutput::scratch_emit_size` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                          | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseOutput::shorten_branches` | `<unknown>` |

##### `PhaseOutput::shorten_branches` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                | Location    |
| ------: | ----: | ------------: | ------: | --------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseOutput::Output` | `<unknown>` |

#### Callees

Callees with the largest change in contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |             % |     Samples | Callee       | Location                                                  |
| -----: | ----: | ------------: | ----------: | ------------ | --------------------------------------------------------- |
|  +6.3% |   +61 | 64.5% → 65.8% | 966 → 1,027 | `accumulate` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  +8.3% |    +6 |   4.8% → 5.0% |     72 → 78 | `get`        | `java.util.ArrayList`                                     |

##### `computeDirectly` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |     % |       Samples | Callee            | Location                                                  |
| -----: | ----: | ----: | ------------: | ----------------- | --------------------------------------------------------- |
|  +4.1% |   +62 | 99.9% | 1,498 → 1,560 | `vectorSum`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  +4.1% |   +62 | 99.9% | 1,498 → 1,560 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |             % |   Samples | Callee        | Location           |
| -----: | ----: | ------------: | --------: | ------------- | ------------------ |
|  -5.3% |    -6 | 11.7% → 10.4% | 113 → 107 | `doubleValue` | `java.lang.Double` |

##### `average` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |             % |   Samples | Callee   | Location                            |
| -----: | ----: | ------------: | --------: | -------- | ----------------------------------- |
|  +7.3% |   +47 | 99.8% → 99.7% | 640 → 687 | `invoke` | `java.util.concurrent.ForkJoinTask` |

##### `computeClusterAverages` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |             % |   Samples | Callee    | Location                                               |
| -----: | ----: | ------------: | --------: | --------- | ------------------------------------------------------ |
|  +7.5% |   +48 | 99.1% → 99.4% | 641 → 689 | `average` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| -50.0% |    -3 |   0.9% → 0.4% |     6 → 3 | `boxed`   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|    new |    +1 |   0.0% → 0.1% |     0 → 1 | `put`     | `java.util.HashMap`                                    |

##### `computeDirectly` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % |   Samples | Callee                   | Location                                               |
| -----: | ----: | -----: | --------: | ------------------------ | ------------------------------------------------------ |
|  +7.1% |   +46 | 100.0% | 647 → 693 | `computeClusterAverages` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  +7.1% |   +46 | 100.0% | 647 → 693 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `awaitWork` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |             % |   Samples | Callee               | Location                                 |
| -----: | ----: | ------------: | --------: | -------------------- | ---------------------------------------- |
| +12.4% |   +31 | 96.9% → 94.6% | 249 → 280 | `park`               | `java.util.concurrent.locks.LockSupport` |
| +62.5% |    +5 |   3.1% → 4.4% |    8 → 13 | `parkUntil`          | `java.util.concurrent.locks.LockSupport` |
|    new |    +1 |   0.0% → 0.3% |     0 → 1 | `hasTasks`           | `java.util.concurrent.ForkJoinPool`      |
|    new |    +1 |   0.0% → 0.3% |     0 → 1 | `os::javaTimeMillis` | `<unknown>`                              |

##### `invoke` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |      % |   Samples | Callee   | Location                            |
| -----: | ----: | -----: | --------: | -------- | ----------------------------------- |
|  +1.7% |   +16 | 100.0% | 935 → 951 | `doExec` | `java.util.concurrent.ForkJoinTask` |

##### `CompileBroker::invoke_compiler_on_method` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                        | Location    |
| -----: | ----: | ------------: | ------: | ----------------------------- | ----------- |
| +19.1% |    +9 | 79.7% → 74.7% | 47 → 56 | `C2Compiler::compile_method`  | `<unknown>` |
| +50.0% |    +6 | 20.3% → 24.0% | 12 → 18 | `Compiler::compile_method`    | `<unknown>` |
|    new |    +1 |   0.0% → 1.3% |   0 → 1 | `CompilationLog::log_compile` | `<unknown>` |

##### `JavaThread::thread_main_inner` (`<unknown>`)

| Change | Delta |              % | Samples | Callee                                                   | Location    |
| -----: | ----: | -------------: | ------: | -------------------------------------------------------- | ----------- |
| +17.8% |   +13 | 100.0% → 97.7% | 73 → 86 | `CompileBroker::compiler_thread_loop`                    | `<unknown>` |
|    new |    +2 |    0.0% → 2.3% |   0 → 2 | `MonitorDeflationThread::monitor_deflation_thread_entry` | `<unknown>` |

##### `CompileBroker::compiler_thread_loop` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                     | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | ----------- |
|  +27.1% |   +16 | 80.8% → 87.2% | 59 → 75 | `CompileBroker::invoke_compiler_on_method` | `<unknown>` |
|  -15.4% |    -2 | 17.8% → 12.8% | 13 → 11 | `CompileQueue::get`                        | `<unknown>` |
| removed |    -1 |   1.4% → 0.0% |   1 → 0 | `ciEnv::get_method_from_handle`            | `<unknown>` |

##### `loadAndInvokeHarnessClass` (`org.renaissance.core.Launcher`)

| Change | Delta |             % | Samples | Callee                       | Location                            |
| -----: | ----: | ------------: | ------: | ---------------------------- | ----------------------------------- |
| +29.0% |    +9 | 88.6% → 88.9% | 31 → 40 | `invoke`                     | `java.lang.reflect.Method`          |
| +25.0% |    +1 | 11.4% → 11.1% |   4 → 5 | `createClassLoaderForModule` | `org.renaissance.core.ModuleLoader` |

##### `main` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change | Delta |             % | Samples | Callee             | Location                                    |
| ------: | ----: | ------------: | ------: | ------------------ | ------------------------------------------- |
|  +43.8% |    +7 | 55.2% → 60.5% | 16 → 23 | `runBenchmarks`    | `org.renaissance.harness.RenaissanceSuite$` |
| +100.0% |    +2 |  6.9% → 10.5% |   2 → 4 | `<init>`           | `org.renaissance.harness.ConfigParser`      |
|  -50.0% |    -1 |   6.9% → 2.6% |   2 → 1 | `loadClass`        | `java.lang.ClassLoader`                     |
|  +50.0% |    +1 |   6.9% → 7.9% |   2 → 3 | `parse`            | `org.renaissance.harness.ConfigParser`      |
| removed |    -1 |   3.4% → 0.0% |   1 → 0 | `selectBenchmarks` | `org.renaissance.harness.RenaissanceSuite$` |

##### `main` (`org.renaissance.harness.RenaissanceSuite`)

| Change | Delta |             % | Samples | Callee | Location                                    |
| -----: | ----: | ------------: | ------: | ------ | ------------------------------------------- |
| +31.0% |    +9 | 93.5% → 95.0% | 29 → 38 | `main` | `org.renaissance.harness.RenaissanceSuite$` |

##### `invokeStatic` (`java.lang.invoke.LambdaForm$DMH.0x000000a801004800`)

| Change | Delta |      % | Samples | Callee | Location                                   |
| -----: | ----: | -----: | ------: | ------ | ------------------------------------------ |
| +29.0% |    +9 | 100.0% | 31 → 40 | `main` | `org.renaissance.harness.RenaissanceSuite` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x000000a801009800`)

| Change | Delta |      % | Samples | Callee         | Location                                             |
| -----: | ----: | -----: | ------: | -------------- | ---------------------------------------------------- |
| +29.0% |    +9 | 100.0% | 31 → 40 | `invokeStatic` | `java.lang.invoke.LambdaForm$DMH.0x000000a801004800` |

##### `invokeImpl` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change | Delta |      % | Samples | Callee           | Location                           |
| -----: | ----: | -----: | ------: | ---------------- | ---------------------------------- |
| +29.0% |    +9 | 100.0% | 31 → 40 | `invokeExact_MT` | `java.lang.invoke.Invokers$Holder` |

##### `invoke` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change | Delta |      % | Samples | Callee       | Location                                          |
| -----: | ----: | -----: | ------: | ------------ | ------------------------------------------------- |
| +29.0% |    +9 | 100.0% | 31 → 40 | `invokeImpl` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke` (`java.lang.reflect.Method`)

| Change | Delta |      % | Samples | Callee   | Location                                          |
| -----: | ----: | -----: | ------: | -------- | ------------------------------------------------- |
| +29.0% |    +9 | 100.0% | 31 → 40 | `invoke` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `launchHarnessClass` (`org.renaissance.core.Launcher`)

|  Change | Delta |             % | Samples | Callee                      | Location                            |
| ------: | ----: | ------------: | ------: | --------------------------- | ----------------------------------- |
|  +28.6% |   +10 | 94.6% → 97.8% | 35 → 45 | `loadAndInvokeHarnessClass` | `org.renaissance.core.Launcher`     |
| removed |    -1 |   2.7% → 0.0% |   1 → 0 | `create`                    | `org.renaissance.core.ModuleLoader` |

##### `main` (`org.renaissance.core.Launcher`)

| Change | Delta |      % | Samples | Callee               | Location                        |
| -----: | ----: | -----: | ------: | -------------------- | ------------------------------- |
| +24.3% |    +9 | 100.0% | 37 → 46 | `launchHarnessClass` | `org.renaissance.core.Launcher` |

##### `setUpBeforeAll` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |              % | Samples | Callee         | Location                                                           |
| -----: | ----: | -------------: | ------: | -------------- | ------------------------------------------------------------------ |
|    new |    +5 |   0.0% → 35.7% |   0 → 5 | `toCsvRows`    | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter` |
| +33.3% |    +2 | 100.0% → 57.1% |   6 → 8 | `generateData` | `org.renaissance.jdk.concurrent.JavaKMeans`                        |
|    new |    +1 |    0.0% → 7.1% |   0 → 1 | `asScala`      | `scala.collection.convert.AsScalaExtensions$ListHasAsScala`        |

##### `runBenchmarks` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change | Delta |             % | Samples | Callee            | Location                                    |
| ------: | ----: | ------------: | ------: | ----------------- | ------------------------------------------- |
|  +40.0% |    +6 | 93.8% → 91.3% | 15 → 21 | `foreach`         | `scala.collection.immutable.List`           |
| +100.0% |    +1 |   6.3% → 8.7% |   1 → 2 | `getVmStartNanos` | `org.renaissance.harness.RenaissanceSuite$` |

##### `executeBenchmark` (`org.renaissance.harness.ExecutionDriver`)

|  Change | Delta |             % | Samples | Callee             | Location                                  |
| ------: | ----: | ------------: | ------: | ------------------ | ----------------------------------------- |
| +133.3% |    +8 | 54.5% → 82.4% |  6 → 14 | `setUpBeforeAll`   | `org.renaissance.jdk.concurrent.FjKmeans` |
|  -40.0% |    -2 | 45.5% → 17.6% |   5 → 3 | `executeOperation` | `org.renaissance.harness.ExecutionDriver` |

##### `runBenchmarks$$anonfun$1` (`org.renaissance.harness.RenaissanceSuite$`)

| Change | Delta |             % | Samples | Callee             | Location                                  |
| -----: | ----: | ------------: | ------: | ------------------ | ----------------------------------------- |
| +54.5% |    +6 | 73.3% → 81.0% | 11 → 17 | `executeBenchmark` | `org.renaissance.harness.ExecutionDriver` |

##### `applyVoid` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a80111f1b8`)

| Change | Delta |      % | Samples | Callee                     | Location                                    |
| -----: | ----: | -----: | ------: | -------------------------- | ------------------------------------------- |
| +40.0% |    +6 | 100.0% | 15 → 21 | `runBenchmarks$$anonfun$1` | `org.renaissance.harness.RenaissanceSuite$` |

##### `apply` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda`)

| Change | Delta |            % | Samples | Callee                      | Location                                  |
| -----: | ----: | -----------: | ------: | --------------------------- | ----------------------------------------- |
|    new |    +5 | 0.0% → 83.3% |   0 → 5 | `setUpBeforeAll$$anonfun$1` | `org.renaissance.jdk.concurrent.FjKmeans` |
|    new |    +1 | 0.0% → 16.7% |   0 → 1 | `$anonfun$adapted$1`        | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `rowToArray$1` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |            % | Samples | Callee      | Location                           |
| -----: | ----: | -----------: | ------: | ----------- | ---------------------------------- |
|    new |    +3 | 0.0% → 60.0% |   0 → 3 | `<clinit>`  | `scala.Predef$`                    |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `loadClass` | `java.lang.ClassLoader`            |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `map`       | `scala.collection.immutable.Range` |

##### `setUpBeforeAll$$anonfun$1` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |             % | Samples | Callee         | Location                                  |
| -----: | ----: | ------------: | ------: | -------------- | ----------------------------------------- |
|    new |    +5 | 0.0% → 100.0% |   0 → 5 | `rowToArray$1` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `lambda$toCsvRows$2` (`org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`)

| Change | Delta |             % | Samples | Callee  | Location                                          |
| -----: | ----: | ------------: | ------: | ------- | ------------------------------------------------- |
|    new |    +5 | 0.0% → 100.0% |   0 → 5 | `apply` | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda` |

##### `arrayof_oop_disjoint_arraycopy` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                     | Location    |
| -----: | ----: | ------------: | ------: | -------------------------- | ----------- |
| +16.7% |    +7 | 82.4% → 84.5% | 42 → 49 | `forward_copy_longs`       | `<unknown>` |
| -66.7% |    -2 |   5.9% → 1.7% |   3 → 1 | `G1BarrierSet::invalidate` | `<unknown>` |
| -33.3% |    -1 |   5.9% → 3.4% |   3 → 2 | `tlv_get_addr`             | `<unknown>` |

##### `Compiler::compile_method` (`<unknown>`)

| Change | Delta |      % | Samples | Callee                     | Location    |
| -----: | ----: | -----: | ------: | -------------------------- | ----------- |
| +50.0% |    +6 | 100.0% | 12 → 18 | `Compilation::Compilation` | `<unknown>` |

##### `void HeapRegion::apply_to_marked_objects<G1FullGCPrepareTask::G1PrepareCompactLiveClosure>` (`<unknown>`)

| Change | Delta |            % | Samples | Callee                             | Location    |
| -----: | ----: | -----------: | ------: | ---------------------------------- | ----------- |
|    new |    +2 | 0.0% → 33.3% |   0 → 2 | `G1FullGCCompactionPoint::forward` | `<unknown>` |
|    new |    +1 | 0.0% → 16.7% |   0 → 1 | `HeapRegion::update_bot_for_block` | `<unknown>` |

##### `G1FullGCPrepareTask::work` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                                                                                       | Location    |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------- | ----------- |
|    new |    +6 | 0.0% → 100.0% |   0 → 6 | `void HeapRegion::apply_to_marked_objects<G1FullGCPrepareTask::G1PrepareCompactLiveClosure>` | `<unknown>` |

##### `G1FullGCCompactTask::compact_region` (`<unknown>`)

| Change | Delta |            % | Samples | Callee                                               | Location    |
| -----: | ----: | -----------: | ------: | ---------------------------------------------------- | ----------- |
|    new |    +4 | 0.0% → 66.7% |   0 → 4 | `G1FullGCCompactTask::G1CompactRegionClosure::apply` | `<unknown>` |
|    new |    +1 | 0.0% → 16.7% |   0 → 1 | `G1FullGCCompactTask::copy_object_to_new_location`   | `<unknown>` |

##### `G1FullGCCompactTask::work` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                                | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------------- | ----------- |
|    new |    +6 | 0.0% → 100.0% |   0 → 6 | `G1FullGCCompactTask::compact_region` | `<unknown>` |

##### `WatcherThread::sleep` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                                  | Location    |
| -----: | ----: | ------------: | ------: | --------------------------------------- | ----------- |
|    new |    +5 | 0.0% → 100.0% |   0 → 5 | `Monitor::wait_without_safepoint_check` | `<unknown>` |

##### `WatcherThread::run` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                         | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------ | ----------- |
|     new |    +5 | 0.0% → 100.0% |   0 → 5 | `WatcherThread::sleep`         | `<unknown>` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PeriodicTask::real_time_tick` | `<unknown>` |

##### `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                                                          | Location    |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------- | ----------- |
| +300.0% |    +3 | 50.0% → 66.7% |   1 → 4 | `void OopOopIterateDispatch<G1AdjustClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>` | `<unknown>` |

##### `G1ServiceThread::run_service` (`<unknown>`)

| Change | Delta |            % | Samples | Callee                           | Location    |
| -----: | ----: | -----------: | ------: | -------------------------------- | ----------- |
|    new |    +2 | 0.0% → 50.0% |   0 → 2 | `G1ServiceThread::run_task`      | `<unknown>` |
|    new |    +2 | 0.0% → 50.0% |   0 → 2 | `G1ServiceThread::wait_for_task` | `<unknown>` |

##### `G1CollectedHeap::par_iterate_regions_array` (`<unknown>`)

| Change | Delta |            % | Samples | Callee                                                    | Location    |
| -----: | ----: | -----------: | ------: | --------------------------------------------------------- | ----------- |
|    new |    +2 | 0.0% → 50.0% |   0 → 2 | `G1MergeHeapRootsTask::G1CombinedClosure::do_heap_region` | `<unknown>` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `HeapRegionClaimer::claim_region`                         | `<unknown>` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `FreeCSetClosure::do_heap_region`                         | `<unknown>` |

##### `JVM_IHashCode` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                         | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------ | ----------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `pthread_jit_write_protect_np` | `<unknown>` |

##### `G1FullGCCompactTask::G1CompactRegionClosure::apply` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                                             | Location    |
| -----: | ----: | ------------: | ------: | -------------------------------------------------- | ----------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `G1FullGCCompactTask::copy_object_to_new_location` | `<unknown>` |

##### `PlatformMonitor::wait` (`<unknown>`)

|  Change | Delta |              % | Samples | Callee               | Location    |
| ------: | ----: | -------------: | ------: | -------------------- | ----------- |
|  +33.3% |    +6 | 85.7% → 100.0% | 18 → 24 | `__psynch_cvwait`    | `<unknown>` |
| removed |    -3 |   14.3% → 0.0% |   3 → 0 | `_pthread_cond_wait` | `<unknown>` |

##### `Monitor::wait_without_safepoint_check` (`<unknown>`)

| Change | Delta |      % | Samples | Callee                  | Location    |
| -----: | ----: | -----: | ------: | ----------------------- | ----------- |
| +33.3% |    +3 | 100.0% |  9 → 12 | `PlatformMonitor::wait` | `<unknown>` |

##### `MemAllocator::mem_allocate_inside_tlab_slow` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------- | ----------- |
| +200.0% |    +2 | 50.0% → 60.0% |   1 → 3 | `G1CollectedHeap::attempt_allocation` | `<unknown>` |
| +100.0% |    +1 | 50.0% → 40.0% |   1 → 2 | `ThreadLocalAllocBuffer::print_stats` | `<unknown>` |

##### `InstanceKlass::link_class_impl` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                           | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------- | ----------- |
|     new |    +3 |  0.0% → 60.0% |   0 → 3 | `Verifier::verify`               | `<unknown>` |
| +100.0% |    +1 | 50.0% → 40.0% |   1 → 2 | `InstanceKlass::link_class_impl` | `<unknown>` |

##### `InstanceKlass::initialize_impl` (`<unknown>`)

|  Change | Delta |      % | Samples | Callee                           | Location    |
| ------: | ----: | -----: | ------: | -------------------------------- | ----------- |
| +300.0% |    +3 | 100.0% |   1 → 4 | `InstanceKlass::link_class_impl` | `<unknown>` |

##### `hash` (`java.util.HashMap`)

| Change | Delta |            % | Samples | Callee     | Location           |
| -----: | ----: | -----------: | ------: | ---------- | ------------------ |
|    new |    +4 | 0.0% → 14.8% |   0 → 4 | `hashCode` | `java.lang.Object` |

##### `invokeExact_MT` (`java.lang.invoke.Invokers$Holder`)

|  Change | Delta |              % | Samples | Callee         | Location                                            |
| ------: | ----: | -------------: | ------: | -------------- | --------------------------------------------------- |
|  +29.0% |    +9 | 96.9% → 100.0% | 31 → 40 | `invoke`       | `java.lang.invoke.LambdaForm$MH.0x000000a801009800` |
| removed |    -1 |    3.1% → 0.0% |   1 → 0 | `invokeStatic` | `java.lang.invoke.DirectMethodHandle$Holder`        |

##### `evaluateSequential` (`java.util.stream.ReduceOps$ReduceOp`)

|  Change | Delta |      % | Samples | Callee            | Location                            |
| ------: | ----: | -----: | ------: | ----------------- | ----------------------------------- |
| +116.7% |    +7 | 100.0% |  6 → 13 | `wrapAndCopyInto` | `java.util.stream.AbstractPipeline` |

##### `collect` (`java.util.stream.ReferencePipeline`)

|  Change | Delta |      % | Samples | Callee     | Location                            |
| ------: | ----: | -----: | ------: | ---------- | ----------------------------------- |
| +116.7% |    +7 | 100.0% |  6 → 13 | `evaluate` | `java.util.stream.AbstractPipeline` |

##### `computeIfAbsent` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Callee                 | Location                                                                              |
| ------: | ----: | ------------: | ------: | ---------------------- | ------------------------------------------------------------------------------------- |
|  +47.1% |    +8 | 11.1% → 15.7% | 17 → 25 | `hash`                 | `java.util.HashMap`                                                                   |
|     new |    +2 |   0.0% → 1.3% |   0 → 2 | `apply`                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000a8011a3940` |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `newNode`              | `java.util.HashMap`                                                                   |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `resize`               | `java.util.HashMap`                                                                   |
|     new |    +1 |   0.0% → 0.6% |   0 → 1 | `resolve_virtual_call` | `<unknown>`                                                                           |

##### `apply` (`scala.runtime.function.JProcedure1`)

| Change | Delta |           % | Samples | Callee      | Location                                                               |
| -----: | ----: | ----------: | ------: | ----------- | ---------------------------------------------------------------------- |
| +40.0% |    +6 |      100.0% | 15 → 21 | `applyVoid` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a80111f1b8` |
| +40.0% |    +6 |      100.0% | 15 → 21 | `apply`     | `scala.runtime.function.JProcedure1`                                   |
|    new |    +2 | 0.0% → 9.5% |   0 → 2 | `applyVoid` | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda`                      |

##### `foreach` (`scala.collection.immutable.List`)

| Change | Delta |      % | Samples | Callee  | Location                             |
| -----: | ----: | -----: | ------: | ------- | ------------------------------------ |
| +40.0% |    +6 | 100.0% | 15 → 21 | `apply` | `scala.runtime.function.JProcedure1` |

##### `<init>` (`java.util.HashMap`)

| Change | Delta |              % | Samples | Callee          | Location            |
| -----: | ----: | -------------: | ------: | --------------- | ------------------- |
| +66.7% |    +4 | 100.0% → 90.9% |  6 → 10 | `putMapEntries` | `java.util.HashMap` |

##### `evaluate` (`java.util.stream.AbstractPipeline`)

|  Change | Delta |             % | Samples | Callee                   | Location                              |
| ------: | ----: | ------------: | ------: | ------------------------ | ------------------------------------- |
| +116.7% |    +7 | 54.5% → 81.3% |  6 → 13 | `evaluateSequential`     | `java.util.stream.ReduceOps$ReduceOp` |
|  -11.1% |    -1 | 81.8% → 50.0% |   9 → 8 | `wrapAndCopyInto`        | `java.util.stream.AbstractPipeline`   |
|     new |    +1 |   0.0% → 6.3% |   0 → 1 | `exactOutputSizeIfKnown` | `java.util.stream.AbstractPipeline`   |
|     new |    +1 |   0.0% → 6.3% |   0 → 1 | `makeNodeBuilder`        | `java.util.stream.ReferencePipeline`  |

##### `parkUntil` (`java.util.concurrent.locks.LockSupport`)

| Change | Delta |      % | Samples | Callee | Location                   |
| -----: | ----: | -----: | ------: | ------ | -------------------------- |
| +62.5% |    +5 | 100.0% |  8 → 13 | `park` | `jdk.internal.misc.Unsafe` |

##### `accept` (`java.util.stream.ReferencePipeline$3$1`)

| Change | Delta |             % | Samples | Callee  | Location                                                                                      |
| -----: | ----: | ------------: | ------: | ------- | --------------------------------------------------------------------------------------------- |
|    new |    +5 | 0.0% → 100.0% |   0 → 5 | `apply` | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter$$Lambda.0x000000a801123bf8` |

##### `forEachRemaining` (`java.util.Spliterators$ArraySpliterator`)

| Change | Delta |             % | Samples | Callee   | Location                                 |
| -----: | ----: | ------------: | ------: | -------- | ---------------------------------------- |
|    new |    +5 | 0.0% → 100.0% |   0 → 5 | `accept` | `java.util.stream.ReferencePipeline$3$1` |

##### `Compile::Compile` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                     | Location    |
| -----: | ----: | ------------: | ------: | -------------------------- | ----------- |
| +26.9% |    +7 | 55.3% → 58.9% | 26 → 33 | `Compile::Code_Gen`        | `<unknown>` |
| +75.0% |    +3 |  8.5% → 12.5% |   4 → 7 | `ParseGenerator::generate` | `<unknown>` |
|  -5.9% |    -1 | 36.2% → 28.6% | 17 → 16 | `Compile::Optimize`        | `<unknown>` |

##### `C2Compiler::compile_method` (`<unknown>`)

| Change | Delta |      % | Samples | Callee             | Location    |
| -----: | ----: | -----: | ------: | ------------------ | ----------- |
| +19.1% |    +9 | 100.0% | 47 → 56 | `Compile::Compile` | `<unknown>` |

##### `Compilation::compile_java_method` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                         | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------ | ----------- |
| +800.0% |    +8 | 11.1% → 52.9% |   1 → 9 | `Compilation::emit_lir`        | `<unknown>` |
| removed |    -1 |  11.1% → 0.0% |   1 → 0 | `ciMethod::ensure_method_data` | `<unknown>` |
|     new |    +1 |   0.0% → 5.9% |   0 → 1 | `TraceTime::~TraceTime`        | `<unknown>` |

##### `Compilation::emit_lir` (`<unknown>`)

|  Change | Delta |              % | Samples | Callee                       | Location    |
| ------: | ----: | -------------: | ------: | ---------------------------- | ----------- |
|     new |    +7 |   0.0% → 77.8% |   0 → 7 | `LinearScan::do_linear_scan` | `<unknown>` |
| +100.0% |    +1 | 100.0% → 22.2% |   1 → 2 | `BlockList::iterate_forward` | `<unknown>` |

##### `Compile::Code_Gen` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                               | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------ | ----------- |
| +166.7% |    +5 | 11.5% → 24.2% |   3 → 8 | `PhaseCFG::do_global_code_motion`    | `<unknown>` |
|  +21.4% |    +3 | 53.8% → 51.5% | 14 → 17 | `PhaseChaitin::Register_Allocate`    | `<unknown>` |
|  -50.0% |    -2 |  15.4% → 6.1% |   4 → 2 | `PhaseOutput::Output`                | `<unknown>` |
|  -40.0% |    -2 |  19.2% → 9.1% |   5 → 3 | `Matcher::match`                     | `<unknown>` |
|     new |    +2 |   0.0% → 6.1% |   0 → 2 | `PhaseBlockLayout::PhaseBlockLayout` | `<unknown>` |

##### `LinearScan::do_linear_scan` (`<unknown>`)

| Change | Delta |            % | Samples | Callee                           | Location    |
| -----: | ----: | -----------: | ------: | -------------------------------- | ----------- |
|    new |    +5 | 0.0% → 71.4% |   0 → 5 | `LinearScan::allocate_registers` | `<unknown>` |
|    new |    +1 | 0.0% → 14.3% |   0 → 1 | `Instruction::as_Constant`       | `<unknown>` |
|    new |    +1 | 0.0% → 14.3% |   0 → 1 | `SimpleExceptionStub::visit`     | `<unknown>` |

##### `Compilation::compile_method` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                             | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------------- | ----------- |
|  +88.9% |    +8 | 75.0% → 94.4% |  9 → 17 | `Compilation::compile_java_method` | `<unknown>` |
| removed |    -1 |   8.3% → 0.0% |   1 → 0 | `Dependencies::assert_common_1`    | `<unknown>` |
|  -50.0% |    -1 |  16.7% → 5.6% |   2 → 1 | `ciEnv::register_method`           | `<unknown>` |

##### `Compilation::Compilation` (`<unknown>`)

| Change | Delta |      % | Samples | Callee                        | Location    |
| -----: | ----: | -----: | ------: | ----------------------------- | ----------- |
| +50.0% |    +6 | 100.0% | 12 → 18 | `Compilation::compile_method` | `<unknown>` |

##### `PhaseCFG::global_code_motion` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                              | Location    |
| ------: | ----: | ------------: | ------: | ----------------------------------- | ----------- |
|     new |    +2 |  0.0% → 25.0% |   0 → 2 | `PhaseCFG::schedule_late`           | `<unknown>` |
|     new |    +2 |  0.0% → 25.0% |   0 → 2 | `Node_Backward_Iterator::next`      | `<unknown>` |
| +100.0% |    +1 | 33.3% → 25.0% |   1 → 2 | `PhaseCFG::schedule_local`          | `<unknown>` |
| +100.0% |    +1 | 33.3% → 25.0% |   1 → 2 | `PhaseCFG::partial_latency_of_defs` | `<unknown>` |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `PhaseCFG::schedule_pinned_nodes`   | `<unknown>` |

##### `PhaseCFG::do_global_code_motion` (`<unknown>`)

|  Change | Delta |      % | Samples | Callee                         | Location    |
| ------: | ----: | -----: | ------: | ------------------------------ | ----------- |
| +166.7% |    +5 | 100.0% |   3 → 8 | `PhaseCFG::global_code_motion` | `<unknown>` |

##### `LinearScanWalker::alloc_free_reg` (`<unknown>`)

| Change | Delta |            % | Samples | Callee                                          | Location    |
| -----: | ----: | -----------: | ------: | ----------------------------------------------- | ----------- |
|    new |    +3 | 0.0% → 60.0% |   0 → 3 | `LinearScanWalker::free_collect_inactive_fixed` | `<unknown>` |

##### `LinearScanWalker::activate_current` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                             | Location    |
| -----: | ----: | ------------: | ------: | ---------------------------------- | ----------- |
|    new |    +5 | 0.0% → 100.0% |   0 → 5 | `LinearScanWalker::alloc_free_reg` | `<unknown>` |

##### `IntervalWalker::walk_to` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                               | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------------ | ----------- |
|    new |    +5 | 0.0% → 100.0% |   0 → 5 | `LinearScanWalker::activate_current` | `<unknown>` |

##### `LinearScan::allocate_registers` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                    | Location    |
| -----: | ----: | ------------: | ------: | ------------------------- | ----------- |
|    new |    +5 | 0.0% → 100.0% |   0 → 5 | `IntervalWalker::walk_to` | `<unknown>` |

##### `PhaseChaitin::Register_Allocate` (`<unknown>`)

|  Change | Delta |            % | Samples | Callee                                   | Location    |
| ------: | ----: | -----------: | ------: | ---------------------------------------- | ----------- |
|     new |    +5 | 0.0% → 29.4% |   0 → 5 | `PhaseChaitin::Split`                    | `<unknown>` |
|  -80.0% |    -4 | 35.7% → 5.9% |   5 → 1 | `PhaseChaitin::gather_lrg_masks`         | `<unknown>` |
|     new |    +3 | 0.0% → 17.6% |   0 → 3 | `PhaseLive::compute`                     | `<unknown>` |
| removed |    -2 | 14.3% → 0.0% |   2 → 0 | `PhaseAggressiveCoalesce::insert_copies` | `<unknown>` |
| removed |    -1 |  7.1% → 0.0% |   1 → 0 | `PhaseChaitin::build_ifg_virtual`        | `<unknown>` |

##### `PhaseCCP::analyze` (`<unknown>`)

| Change | Delta |            % | Samples | Callee                                   | Location    |
| -----: | ----: | -----------: | ------: | ---------------------------------------- | ----------- |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `PhaseCCP::push_child_nodes_to_worklist` | `<unknown>` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `IfNode::Value`                          | `<unknown>` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `PhaseCCP::fetch_next_node`              | `<unknown>` |

##### `PhaseCCP::PhaseCCP` (`<unknown>`)

| Change | Delta |             % | Samples | Callee              | Location    |
| -----: | ----: | ------------: | ------: | ------------------- | ----------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `PhaseCCP::analyze` | `<unknown>` |

##### `scan` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |             % |       Samples | Callee         | Location                                      |
| -----: | ----: | ------------: | ------------: | -------------- | --------------------------------------------- |
|  -6.6% |  -274 | 99.8% → 99.9% | 4,155 → 3,881 | `topLevelExec` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change | Delta |             % |       Samples | Callee            | Location                                                   |
| -----: | ----: | ------------: | ------------: | ----------------- | ---------------------------------------------------------- |
|  -6.4% |  -250 | 95.3% → 95.6% | 3,935 → 3,685 | `join`            | `java.util.concurrent.ForkJoinTask`                        |
| -11.3% |  -201 | 42.9% → 40.8% | 1,773 → 1,572 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +4.1% |   +62 | 36.3% → 40.5% | 1,499 → 1,561 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +7.1% |   +46 | 15.7% → 18.0% |     647 → 693 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| -10.4% |   -38 |   8.8% → 8.5% |     365 → 327 | `combineResults`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `exec` (`java.util.concurrent.RecursiveTask`)

| Change | Delta |      % |       Samples | Callee    | Location                                               |
| -----: | ----: | -----: | ------------: | --------- | ------------------------------------------------------ |
|  -6.7% |  -277 | 100.0% | 4,130 → 3,853 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `doExec` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |             % |       Samples | Callee                                           | Location                                            |
| ------: | ----: | ------------: | ------------: | ------------------------------------------------ | --------------------------------------------------- |
|   -6.7% |  -276 | 99.4% → 99.3% | 4,130 → 3,854 | `exec`                                           | `java.util.concurrent.RecursiveTask`                |
|   -5.1% |   -23 | 10.8% → 11.0% |     450 → 427 | `exec`                                           | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|  -15.0% |    -6 |   1.0% → 0.9% |       40 → 34 | `setDone`                                        | `java.util.concurrent.ForkJoinTask`                 |
| removed |    -1 |  <0.1% → 0.0% |         1 → 0 | `vtable stub`                                    | `<unknown>`                                         |
|     new |    +1 |  0.0% → <0.1% |         0 → 1 | `InterpreterRuntime::frequency_counter_overflow` | `<unknown>`                                         |

##### `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |            % |       Samples | Callee    | Location                                      |
| -----: | ----: | -----------: | ------------: | --------- | --------------------------------------------- |
|  -6.6% |  -274 |       100.0% | 4,154 → 3,880 | `doExec`  | `java.util.concurrent.ForkJoinTask`           |
|    new |    +1 | 0.0% → <0.1% |         0 → 1 | `tryPoll` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `awaitDone` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |             % |       Samples | Callee                     | Location                                      |
| ------: | ----: | ------------: | ------------: | -------------------------- | --------------------------------------------- |
|   -5.4% |  -201 | 94.8% → 95.8% | 3,731 → 3,530 | `tryRemoveAndExec`         | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  -16.6% |  -175 | 26.7% → 23.8% |   1,052 → 877 | `helpJoin`                 | `java.util.concurrent.ForkJoinPool`           |
|  -18.1% |   -70 |   9.8% → 8.6% |     387 → 317 | `park`                     | `java.util.concurrent.locks.LockSupport`      |
| removed |    -1 |  <0.1% → 0.0% |         1 → 0 | `signalWaiters`            | `java.util.concurrent.ForkJoinTask`           |
| removed |    -1 |  <0.1% → 0.0% |         1 → 0 | `resolve_opt_virtual_call` | `<unknown>`                                   |

##### `join` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |            % |       Samples | Callee         | Location                             |
| ------: | ----: | -----------: | ------------: | -------------- | ------------------------------------ |
|   -6.4% |  -250 |       100.0% | 3,935 → 3,685 | `awaitDone`    | `java.util.concurrent.ForkJoinTask`  |
| removed |    -1 | <0.1% → 0.0% |         1 → 0 | `getRawResult` | `java.util.concurrent.RecursiveTask` |
| removed |    -1 | <0.1% → 0.0% |         1 → 0 | `vtable stub`  | `<unknown>`                          |

##### `runWorker` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |             % |       Samples | Callee      | Location                            |
| -----: | ----: | ------------: | ------------: | ----------- | ----------------------------------- |
|  -6.7% |  -279 | 94.1% → 92.8% | 4,165 → 3,886 | `scan`      | `java.util.concurrent.ForkJoinPool` |
| +15.2% |   +39 |   5.8% → 7.1% |     257 → 296 | `awaitWork` | `java.util.concurrent.ForkJoinPool` |

##### `run` (`java.util.concurrent.ForkJoinWorkerThread`)

| Change | Delta |      % |       Samples | Callee      | Location                            |
| -----: | ----: | -----: | ------------: | ----------- | ----------------------------------- |
|  -5.4% |  -237 | 100.0% | 4,424 → 4,187 | `runWorker` | `java.util.concurrent.ForkJoinPool` |

##### `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |              % |       Samples | Callee              | Location                                      |
| -----: | ----: | -------------: | ------------: | ------------------- | --------------------------------------------- |
|  -5.4% |  -200 | 99.9% → 100.0% | 3,729 → 3,529 | `doExec`            | `java.util.concurrent.ForkJoinTask`           |
| -50.0% |    -1 |   0.1% → <0.1% |         2 → 1 | `getAndClearSlot`   | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|    new |    +1 |   0.0% → <0.1% |         0 → 1 | `releaseAccess`     | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|    new |    +1 |   0.0% → <0.1% |         0 → 1 | `wrong_method_stub` | `<unknown>`                                   |

##### `computeDirectly` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % |       Samples | Callee                | Location                                                   |
| -----: | ----: | ------------: | ------------: | --------------------- | ---------------------------------------------------------- |
| -11.3% |  -201 |        100.0% | 1,773 → 1,572 | `computeDirectly`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -12.9% |  -171 | 74.5% → 73.2% | 1,321 → 1,150 | `findNearestCentroid` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -6.6% |   -30 | 25.5% → 26.8% |     452 → 422 | `collectClusters`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `helpJoin` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |             % |     Samples | Callee          | Location                            |
| -----: | ----: | ------------: | ----------: | --------------- | ----------------------------------- |
| -16.2% |  -166 | 97.3% → 97.8% | 1,024 → 858 | `doExec`        | `java.util.concurrent.ForkJoinTask` |
| -46.2% |    -6 |   1.2% → 0.8% |      13 → 7 | `tryCompensate` | `java.util.concurrent.ForkJoinPool` |

##### `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % |   Samples | Callee            | Location                                                   |
| ------: | ----: | ------------: | --------: | ----------------- | ---------------------------------------------------------- |
|  -13.9% |  -125 | 68.3% → 67.6% | 902 → 777 | `distance`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -24.5% |   -13 |   4.0% → 3.5% |   53 → 40 | `get`             | `java.util.ArrayList`                                      |
| removed |    -2 |   0.2% → 0.0% |     2 → 0 | `size`            | `java.util.ArrayList`                                      |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `SafepointBlob`   | `<unknown>`                                                |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `_new_array_Java` | `<unknown>`                                                |

##### `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |           % | Samples | Callee        | Location           |
| -----: | ----: | ----------: | ------: | ------------- | ------------------ |
| -73.7% |   -14 | 2.1% → 0.6% |  19 → 5 | `doubleValue` | `java.lang.Double` |

##### `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a8011a7000`)

| Change | Delta |              % |   Samples | Callee           | Location                                    |
| -----: | ----: | -------------: | --------: | ---------------- | ------------------------------------------- |
| -12.2% |   -43 | 99.2% → 100.0% | 352 → 309 | `lambda$merge$7` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `forEach` (`java.util.HashMap`)

| Change | Delta |             % |   Samples | Callee                 | Location                                                               |
| -----: | ----: | ------------: | --------: | ---------------------- | ---------------------------------------------------------------------- |
| -13.0% |   -46 | 98.9% → 98.4% | 355 → 309 | `accept`               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a8011a7000` |
|    new |    +1 |   0.0% → 0.3% |     0 → 1 | `resolve_virtual_call` | `<unknown>`                                                            |

##### `merge` (`java.util.HashMap`)

|  Change | Delta |             % |   Samples | Callee                            | Location                                            |
| ------: | ----: | ------------: | --------: | --------------------------------- | --------------------------------------------------- |
|   -5.5% |   -13 | 67.6% → 72.8% | 238 → 225 | `apply`                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda` |
|  -36.1% |   -13 |  10.2% → 7.4% |   36 → 23 | `zero_blocks`                     | `<unknown>`                                         |
|  -18.2% |   -12 | 18.8% → 17.5% |   66 → 54 | `arrayof_jint_disjoint_arraycopy` | `<unknown>`                                         |
| removed |    -1 |   0.3% → 0.0% |     1 → 0 | `hash`                            | `java.util.HashMap`                                 |
| removed |    -1 |   0.3% → 0.0% |     1 → 0 | `resize`                          | `java.util.HashMap`                                 |

##### `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % |   Samples | Callee  | Location            |
| -----: | ----: | -----: | --------: | ------- | ------------------- |
| -12.2% |   -43 | 100.0% | 352 → 309 | `merge` | `java.util.HashMap` |

##### `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |             % |   Samples | Callee               | Location                           |
| -----: | ----: | ------------: | --------: | -------------------- | ---------------------------------- |
| -12.5% |   -45 | 97.3% → 95.4% | 359 → 314 | `forEach`            | `java.util.HashMap`                |
| +83.3% |    +5 |   1.6% → 3.3% |    6 → 11 | `<init>`             | `java.util.HashMap`                |
| -66.7% |    -2 |   0.8% → 0.3% |     3 → 1 | `linkToTargetMethod` | `java.lang.invoke.Invokers$Holder` |

##### `park` (`java.util.concurrent.locks.LockSupport`)

| Change | Delta |      % |   Samples | Callee | Location                   |
| -----: | ----: | -----: | --------: | ------ | -------------------------- |
|  -6.1% |   -39 | 100.0% | 636 → 597 | `park` | `jdk.internal.misc.Unsafe` |

##### `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % |   Samples | Callee           | Location                                                   |
| -----: | ----: | ------------: | --------: | ---------------- | ---------------------------------------------------------- |
| -10.5% |   -38 | 99.5% → 99.4% | 363 → 325 | `merge`          | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| -10.5% |   -38 | 99.5% → 99.4% | 363 → 325 | `combineResults` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % |   Samples | Callee                     | Location              |
| ------: | ----: | ------------: | --------: | -------------------------- | --------------------- |
|   -9.8% |   -12 | 27.0% → 26.1% | 122 → 110 | `add`                      | `java.util.ArrayList` |
|   +3.9% |    +6 | 33.8% → 37.7% | 153 → 159 | `computeIfAbsent`          | `java.util.HashMap`   |
|   +3.3% |    +2 | 13.5% → 14.9% |   61 → 63 | `get`                      | `java.util.ArrayList` |
|  +50.0% |    +1 |   0.4% → 0.7% |     2 → 3 | `wrong_method_stub`        | `<unknown>`           |
| removed |    -1 |   0.2% → 0.0% |     1 → 0 | `resolve_opt_virtual_call` | `<unknown>`           |

##### `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |           % |   Samples | Callee      | Location                                               |
| ------: | ----: | ----------: | --------: | ----------- | ------------------------------------------------------ |
|   -5.1% |   -23 |       99.3% | 447 → 424 | `invoke`    | `java.util.concurrent.ForkJoinTask`                    |
| removed |    -1 | 0.2% → 0.0% |     1 → 0 | `loadClass` | `java.lang.ClassLoader`                                |
|     new |    +1 | 0.0% → 0.2% |     0 → 1 | `<init>`    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `call` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a8011a2bd0`)

| Change | Delta |      % |   Samples | Callee         | Location                                    |
| -----: | ----: | -----: | --------: | -------------- | ------------------------------------------- |
|  -5.1% |   -23 | 100.0% | 450 → 427 | `lambda$run$0` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |             % |   Samples | Callee   | Location              |
| -----: | ----: | ------------: | --------: | -------- | --------------------- |
| -11.1% |    -9 | 34.0% → 32.1% |   81 → 72 | `<init>` | `java.util.ArrayList` |
|  -3.2% |    -5 | 66.0% → 67.9% | 157 → 152 | `addAll` | `java.util.ArrayList` |

##### `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`)

|  Change | Delta |             % |   Samples | Callee                  | Location                                    |
| ------: | ----: | ------------: | --------: | ----------------------- | ------------------------------------------- |
|   -5.9% |   -14 | 98.3% → 96.1% | 238 → 224 | `lambda$merge$6`        | `org.renaissance.jdk.concurrent.JavaKMeans` |
| +100.0% |    +4 |   1.7% → 3.4% |     4 → 8 | `lambda$generateData$5` | `org.renaissance.jdk.concurrent.JavaKMeans` |
|  +66.7% |    +2 |   1.2% → 2.1% |     3 → 5 | `lambda$generateData$3` | `org.renaissance.jdk.concurrent.JavaKMeans` |
|     new |    +1 |   0.0% → 0.4% |     0 → 1 | `lambda$generateData$4` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `run` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change | Delta |             % | Samples | Callee      | Location                           |
| ------: | ----: | ------------: | ------: | ----------- | ---------------------------------- |
| removed |    -4 |  80.0% → 0.0% |   4 → 0 | `<clinit>`  | `scala.Predef$`                    |
| removed |    -1 |  20.0% → 0.0% |   1 → 0 | `loadClass` | `java.lang.ClassLoader`            |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `map`       | `scala.collection.immutable.Range` |

##### `boxed` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change | Delta |              % | Samples | Callee    | Location                             |
| ------: | ----: | -------------: | ------: | --------- | ------------------------------------ |
|  -40.0% |    -2 | 83.3% → 100.0% |   5 → 3 | `toArray` | `java.util.stream.ReferencePipeline` |
| removed |    -1 |   16.7% → 0.0% |   1 → 0 | `stream`  | `java.util.Arrays`                   |

##### `executeOperation` (`org.renaissance.harness.ExecutionDriver`)

| Change | Delta |              % | Samples | Callee     | Location                                                             |
| -----: | ----: | -------------: | ------: | ---------- | -------------------------------------------------------------------- |
| -80.0% |    -4 | 100.0% → 33.3% |   5 → 1 | `run`      | `org.renaissance.jdk.concurrent.FjKmeans`                            |
|    new |    +2 |   0.0% → 66.7% |   0 → 2 | `validate` | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000a8011a8000` |

##### `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % | Samples | Callee           | Location                                               |
| -----: | ----: | -----: | ------: | ---------------- | ------------------------------------------------------ |
| -33.3% |    -2 | 100.0% |   6 → 4 | `merge`          | `org.renaissance.jdk.concurrent.JavaKMeans`            |
| -33.3% |    -2 | 100.0% |   6 → 4 | `combineResults` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |              % | Samples | Callee           | Location                                                  |
| -----: | ----: | -------------: | ------: | ---------------- | --------------------------------------------------------- |
| -40.0% |    -2 | 100.0% → 75.0% |   5 → 3 | `add`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| -40.0% |    -2 | 100.0% → 75.0% |   5 → 3 | `combineResults` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `selectBenchmarks` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change | Delta |             % | Samples | Callee    | Location                            |
| ------: | ----: | ------------: | ------: | --------- | ----------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `foreach` | `scala.collection.AbstractIterable` |

##### `WorkerThread::run` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                            | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------- | ----------- |
|  -77.8% |   -35 | 33.6% → 10.4% | 45 → 10 | `G1EvacuateRegionsBaseTask::work` | `<unknown>` |
|  -13.3% |    -8 | 44.8% → 54.2% | 60 → 52 | `G1FullGCMarkTask::work`          | `<unknown>` |
| removed |    -8 |   6.0% → 0.0% |   8 → 0 | `KlassCleaningTask::work`         | `<unknown>` |
| removed |    -8 |   6.0% → 0.0% |   8 → 0 | `G1FullGCResetMetadataTask::work` | `<unknown>` |
|     new |    +6 |   0.0% → 6.3% |   0 → 6 | `G1FullGCPrepareTask::work`       | `<unknown>` |

##### `Parker::park` (`<unknown>`)

|  Change | Delta |             % |   Samples | Callee                                                                                                                                                     | Location    |
| ------: | ----: | ------------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|   -5.6% |   -35 | 99.2% → 99.3% | 630 → 595 | `__psynch_cvwait`                                                                                                                                          | `<unknown>` |
| removed |    -2 |   0.3% → 0.0% |     2 → 0 | `AccessInternal::PostRuntimeDispatch<G1BarrierSet::AccessBarrier<544868ull, G1BarrierSet>, (AccessInternal::BarrierType)2, 544868ull>::oop_access_barrier` | `<unknown>` |
| removed |    -1 |   0.2% → 0.0% |     1 → 0 | `stub:pthread_mutex_trylock`                                                                                                                               | `<unknown>` |
| removed |    -1 |   0.2% → 0.0% |     1 → 0 | `pthread_mutex_unlock`                                                                                                                                     | `<unknown>` |
|     new |    +1 |   0.0% → 0.2% |     0 → 1 | `stub:pthread_mutex_unlock`                                                                                                                                | `<unknown>` |

##### `G1EvacuateRegionsBaseTask::work` (`<unknown>`)

|  Change | Delta |              % | Samples | Callee                                         | Location    |
| ------: | ----: | -------------: | ------: | ---------------------------------------------- | ----------- |
|  -72.2% |   -26 | 80.0% → 100.0% | 36 → 10 | `G1EvacuateRegionsTask::evacuate_live_objects` | `<unknown>` |
| removed |    -9 |   20.0% → 0.0% |   9 → 0 | `G1EvacuateRegionsTask::scan_roots`            | `<unknown>` |

##### `Unsafe_Park` (`<unknown>`)

|  Change | Delta |             % |   Samples | Callee                                         | Location    |
| ------: | ----: | ------------: | --------: | ---------------------------------------------- | ----------- |
|   -5.7% |   -36 | 98.8% → 98.4% | 635 → 599 | `Parker::park`                                 | `<unknown>` |
|  +16.7% |    +1 |   0.9% → 1.1% |     6 → 7 | `pthread_jit_write_protect_np`                 | `<unknown>` |
| removed |    -1 |   0.2% → 0.0% |     1 → 0 | `JavaThreadParkedState::JavaThreadParkedState` | `<unknown>` |
|     new |    +1 |   0.0% → 0.2% |     0 → 1 | `pthread_mutex_unlock`                         | `<unknown>` |

##### `arrayof_jint_disjoint_arraycopy` (`<unknown>`)

| Change | Delta |             % |   Samples | Callee               | Location    |
| -----: | ----: | ------------: | --------: | -------------------- | ----------- |
| -20.6% |   -40 | 92.8% → 86.5% | 194 → 154 | `forward_copy_longs` | `<unknown>` |

##### `G1ParScanThreadState::trim_queue_to_threshold` (`<unknown>`)

|  Change | Delta |              % | Samples | Callee                                                                                                                       | Location    |
| ------: | ----: | -------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | ----------- |
| removed |   -15 |   46.9% → 0.0% |  15 → 0 | `G1ParScanThreadState::do_partial_array`                                                                                     | `<unknown>` |
|  -50.0% |    -5 | 31.3% → 100.0% |  10 → 5 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                            | `<unknown>` |
| removed |    -1 |    3.1% → 0.0% |   1 → 0 | `void G1ScanEvacuatedObjClosure::do_oop_work<narrowOop>`                                                                     | `<unknown>` |
| removed |    -1 |    3.1% → 0.0% |   1 → 0 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` | `<unknown>` |

##### `G1ParEvacuateFollowersClosure::do_void` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                             | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- | ----------- |
|  -72.7% |   -16 | 61.1% → 60.0% |  22 → 6 | `G1ParScanThreadState::steal_and_trim_queue`       | `<unknown>` |
|  -60.0% |    -6 | 27.8% → 40.0% |  10 → 4 | `G1ParEvacuateFollowersClosure::offer_termination` | `<unknown>` |
| removed |    -4 |  11.1% → 0.0% |   4 → 0 | `G1ParScanThreadState::trim_queue_to_threshold`    | `<unknown>` |

##### `G1EvacuateRegionsTask::evacuate_live_objects` (`<unknown>`)

| Change | Delta |      % | Samples | Callee                                   | Location    |
| -----: | ----: | -----: | ------: | ---------------------------------------- | ----------- |
| -72.2% |   -26 | 100.0% | 36 → 10 | `G1ParEvacuateFollowersClosure::do_void` | `<unknown>` |

##### `_pthread_start` (`<unknown>`)

|  Change | Delta |              % |   Samples | Callee                | Location    |
| ------: | ----: | -------------: | --------: | --------------------- | ----------- |
|   -7.1% |   -15 | 99.5% → 100.0% | 211 → 196 | `thread_native_entry` | `<unknown>` |
| removed |    -1 |    0.5% → 0.0% |     1 → 0 | `ThreadJavaMain`      | `<unknown>` |

##### `thread_start` (`<unknown>`)

| Change | Delta |      % |   Samples | Callee           | Location    |
| -----: | ----: | -----: | --------: | ---------------- | ----------- |
|  -7.5% |   -16 | 100.0% | 212 → 196 | `_pthread_start` | `<unknown>` |

##### `G1ParScanThreadState::steal_and_trim_queue` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                            | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------- | ----------- |
|  -76.2% |   -16 | 95.5% → 83.3% |  21 → 5 | `G1ParScanThreadState::trim_queue_to_threshold`   | `<unknown>` |
| removed |    -1 |   4.5% → 0.0% |   1 → 0 | `G1ParScanThreadState::do_copy_to_survivor_space` | `<unknown>` |

##### `Thread::call_run` (`<unknown>`)

|  Change | Delta |             % |  Samples | Callee                          | Location    |
| ------: | ----: | ------------: | -------: | ------------------------------- | ----------- |
|  -28.4% |   -38 | 63.5% → 49.0% | 134 → 96 | `WorkerThread::run`             | `<unknown>` |
|  +20.5% |   +15 | 34.6% → 44.9% |  73 → 88 | `JavaThread::thread_main_inner` | `<unknown>` |
| +400.0% |    +4 |   0.5% → 2.6% |    1 → 5 | `WatcherThread::run`            | `<unknown>` |
| +300.0% |    +3 |   0.5% → 2.0% |    1 → 4 | `ConcurrentGCThread::run`       | `<unknown>` |
|  +50.0% |    +1 |   0.9% → 1.5% |    2 → 3 | `VMThread::run`                 | `<unknown>` |

##### `thread_native_entry` (`<unknown>`)

| Change | Delta |      % |   Samples | Callee             | Location    |
| -----: | ----: | -----: | --------: | ------------------ | ----------- |
|  -7.1% |   -15 | 100.0% | 211 → 196 | `Thread::call_run` | `<unknown>` |

##### `G1ParScanThreadState::do_partial_array` (`<unknown>`)

|  Change | Delta |            % | Samples | Callee                                                          | Location    |
| ------: | ----: | -----------: | ------: | --------------------------------------------------------------- | ----------- |
| removed |    -8 | 53.3% → 0.0% |   8 → 0 | `void G1ScanEvacuatedObjClosure::do_oop_work<narrowOop>`        | `<unknown>` |
| removed |    -1 |  6.7% → 0.0% |   1 → 0 | `void G1ScanClosureBase::handle_non_cset_obj_common<narrowOop>` | `<unknown>` |

##### `G1FullGCMarker::mark_object` (`<unknown>`)

| Change | Delta |            % | Samples | Callee                                   | Location    |
| -----: | ----: | -----------: | ------: | ---------------------------------------- | ----------- |
| -87.5% |    -7 | 22.9% → 4.5% |   8 → 1 | `G1RegionMarkStatsCache::add_live_words` | `<unknown>` |

##### `G1EvacuateRegionsTask::scan_roots` (`<unknown>`)

|  Change | Delta |            % | Samples | Callee                            | Location    |
| ------: | ----: | -----------: | ------: | --------------------------------- | ----------- |
| removed |    -6 | 66.7% → 0.0% |   6 → 0 | `G1RemSet::scan_heap_roots`       | `<unknown>` |
| removed |    -3 | 33.3% → 0.0% |   3 → 0 | `G1RootProcessor::evacuate_roots` | `<unknown>` |

##### `G1FullGCMarker::complete_marking` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                          | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------- | ----------- |
|  -16.7% |    -7 | 70.0% → 68.6% | 42 → 35 | `G1FullGCMarker::follow_marking_stacks`                         | `<unknown>` |
| removed |    -1 |   1.7% → 0.0% |   1 → 0 | `TaskTerminator::offer_termination`                             | `<unknown>` |
|   +7.1% |    +1 | 23.3% → 29.4% | 14 → 15 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` | `<unknown>` |
| removed |    -1 |   1.7% → 0.0% |   1 → 0 | `G1FullGCMarker::mark_object`                                   | `<unknown>` |

##### `G1FullGCMarkTask::work` (`<unknown>`)

| Change | Delta |              % | Samples | Callee                              | Location    |
| -----: | ----: | -------------: | ------: | ----------------------------------- | ----------- |
| -15.0% |    -9 | 100.0% → 98.1% | 60 → 51 | `G1FullGCMarker::complete_marking`  | `<unknown>` |
|    new |    +1 |    0.0% → 1.9% |   0 → 1 | `G1RegionMarkStatsCache::evict_all` | `<unknown>` |

##### `park` (`jdk.internal.misc.Unsafe`)

|  Change | Delta |             % |   Samples | Callee                                         | Location    |
| ------: | ----: | ------------: | --------: | ---------------------------------------------- | ----------- |
|   -5.4% |   -35 | 99.8% → 99.7% | 643 → 608 | `Unsafe_Park`                                  | `<unknown>` |
| removed |    -1 |   0.2% → 0.0% |     1 → 0 | `JavaThreadParkedState::JavaThreadParkedState` | `<unknown>` |

##### `exec` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

| Change | Delta |      % |   Samples | Callee | Location                                                               |
| -----: | ----: | -----: | --------: | ------ | ---------------------------------------------------------------------- |
|  -5.1% |   -23 | 100.0% | 450 → 427 | `call` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a8011a2bd0` |

##### `copyOf` (`java.util.Arrays`)

|  Change | Delta |             % |   Samples | Callee                            | Location    |
| ------: | ----: | ------------: | --------: | --------------------------------- | ----------- |
|  -17.2% |   -23 | 71.7% → 67.3% | 134 → 111 | `arrayof_jint_disjoint_arraycopy` | `<unknown>` |
|   -4.5% |    -2 | 23.5% → 25.5% |   44 → 42 | `_new_array_Java`                 | `<unknown>` |
| removed |    -1 |   0.5% → 0.0% |     1 → 0 | `zero_blocks`                     | `<unknown>` |

##### `toArray` (`java.util.ArrayList`)

| Change | Delta |      % |   Samples | Callee   | Location           |
| -----: | ----: | -----: | --------: | -------- | ------------------ |
| -13.8% |   -22 | 100.0% | 160 → 138 | `copyOf` | `java.util.Arrays` |

##### `add` (`java.util.ArrayList`)

|  Change | Delta |             % |   Samples | Callee                     | Location              |
| ------: | ----: | ------------: | --------: | -------------------------- | --------------------- |
|   -9.9% |   -12 | 99.2% → 99.1% | 121 → 109 | `add`                      | `java.util.ArrayList` |
|   +3.3% |    +2 | 50.0% → 57.3% |   61 → 63 | `grow`                     | `java.util.ArrayList` |
| removed |    -1 |   0.8% → 0.0% |     1 → 0 | `wrong_method_stub`        | `<unknown>`           |
| removed |    -1 |   0.8% → 0.0% |     1 → 0 | `resolve_opt_virtual_call` | `<unknown>`           |

##### `PhaseIdealLoop::build_and_optimize` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                 | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------- | ----------- |
|  -80.0% |    -4 | 41.7% → 14.3% |   5 → 1 | `PhaseIdealLoop::build_loop_late`      | `<unknown>` |
| removed |    -4 |  33.3% → 0.0% |   4 → 0 | `PhaseIdealLoop::Dominators`           | `<unknown>` |
| +100.0% |    +1 |  8.3% → 28.6% |   1 → 2 | `PhaseIdealLoop::split_if_with_blocks` | `<unknown>` |
| removed |    -1 |   8.3% → 0.0% |   1 → 0 | `IdealLoopTree::loop_predication`      | `<unknown>` |
|     new |    +1 |  0.0% → 14.3% |   0 → 1 | `IdealLoopTree::iteration_split`       | `<unknown>` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`<unknown>`)

| Change | Delta |      % | Samples | Callee                               | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------ | ----------- |
| -41.7% |    -5 | 100.0% |  12 → 7 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `PhaseIdealLoop::optimize` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                           | Location    |
| -----: | ----: | ------------: | ------: | -------------------------------- | ----------- |
| -41.7% |    -5 | 92.3% → 87.5% |  12 → 7 | `PhaseIdealLoop::PhaseIdealLoop` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`<unknown>`)

|  Change | Delta |            % | Samples | Callee                                        | Location    |
| ------: | ----: | -----------: | ------: | --------------------------------------------- | ----------- |
| removed |    -3 | 60.0% → 0.0% |   3 → 0 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late` (`<unknown>`)

| Change | Delta |      % | Samples | Callee                                      | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------------- | ----------- |
| -80.0% |    -4 | 100.0% |   5 → 1 | `PhaseIdealLoop::build_loop_late_post_work` | `<unknown>` |

##### `PhaseIdealLoop::Dominators` (`<unknown>`)

|  Change | Delta |            % | Samples | Callee             | Location    |
| ------: | ----: | -----------: | ------: | ------------------ | ----------- |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `Arena::grow`      | `<unknown>` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `Chunk::next_chop` | `<unknown>` |

##### `Compile::optimize_loops` (`<unknown>`)

| Change | Delta |      % | Samples | Callee                     | Location    |
| -----: | ----: | -----: | ------: | -------------------------- | ----------- |
| -44.4% |    -4 | 100.0% |   9 → 5 | `PhaseIdealLoop::optimize` | `<unknown>` |

##### `PhaseChaitin::gather_lrg_masks` (`<unknown>`)

| Change | Delta |             % | Samples | Callee           | Location    |
| -----: | ----: | ------------: | ------: | ---------------- | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `Type::hashcons` | `<unknown>` |

##### `PhaseIdealLoop::get_late_ctrl_with_anti_dep` (`<unknown>`)

|  Change | Delta |            % | Samples | Callee               | Location    |
| ------: | ----: | -----------: | ------: | -------------------- | ----------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `MemNode::adr_type`  | `<unknown>` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `Compile::can_alias` | `<unknown>` |

##### `GraphBuilder::append_with_bci` (`<unknown>`)

|  Change | Delta |            % | Samples | Callee                       | Location    |
| ------: | ----: | -----------: | ------: | ---------------------------- | ----------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `Instruction::hash`          | `<unknown>` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `Canonicalizer::do_Constant` | `<unknown>` |

##### `PhaseOutput::Output` (`<unknown>`)

|  Change | Delta |            % | Samples | Callee                                  | Location    |
| ------: | ----: | -----------: | ------: | --------------------------------------- | ----------- |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `PhaseOutput::shorten_branches`         | `<unknown>` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `PhaseOutput::init_scratch_buffer_blob` | `<unknown>` |

##### `Matcher::match` (`<unknown>`)

|  Change | Delta |              % | Samples | Callee                 | Location    |
| ------: | ----: | -------------: | ------: | ---------------------- | ----------- |
| removed |    -1 |   20.0% → 0.0% |   1 → 0 | `Matcher::find_shared` | `<unknown>` |
|  -25.0% |    -1 | 80.0% → 100.0% |   4 → 3 | `Matcher::xform`       | `<unknown>` |

##### `MemNode::adr_type` (`<unknown>`)

|  Change | Delta |            % | Samples | Callee                    | Location    |
| ------: | ----: | -----------: | ------: | ------------------------- | ----------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `TypeInstPtr::add_offset` | `<unknown>` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `TypeAryPtr::add_offset`  | `<unknown>` |

##### `Compile::call_generator` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                     | Location    |
| ------: | ----: | ------------: | ------: | -------------------------- | ----------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `InlineTree::ok_to_inline` | `<unknown>` |

##### `CompileQueue::get` (`<unknown>`)

|  Change | Delta |              % | Samples | Callee          | Location    |
| ------: | ----: | -------------: | ------: | --------------- | ----------- |
| removed |    -1 |    7.7% → 0.0% |   1 → 0 | `Mutex::lock`   | `<unknown>` |
|   -8.3% |    -1 | 92.3% → 100.0% | 12 → 11 | `Monitor::wait` | `<unknown>` |

##### `GraphBuilder::if_node` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                          | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `GraphBuilder::append_with_bci` | `<unknown>` |

##### `PhaseOutput::scratch_emit_size` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                      | Location    |
| ------: | ----: | ------------: | ------: | --------------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `lShiftI_reg_immNode::emit` | `<unknown>` |

##### `PhaseOutput::shorten_branches` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                           | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseOutput::scratch_emit_size` | `<unknown>` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in samples collected in their leaf frame.

Common call stack: `runWorker` (`java.util.concurrent.ForkJoinPool`) ← `run` (`java.util.concurrent.ForkJoinWorkerThread`)

|  Change | Delta |            % |   Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ------: | ----: | -----------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  +12.4% |   +30 |  5.2% → 6.1% | 242 → 272 | `__psynch_cvwait` ← `Parker::park` ← `Unsafe_Park` ← `park` (`jdk.internal.misc.Unsafe`) ← `park` (`java.util.concurrent.locks.LockSupport`) ← `awaitWork` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  +26.6% |   +21 |  1.7% → 2.3% |  79 → 100 | `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  +60.0% |   +21 |  0.7% → 1.3% |   35 → 56 | `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `invoke` ← `average` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  +64.5% |   +20 |  0.7% → 1.1% |   31 → 51 | `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `invoke` ← `average` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  +18.9% |   +17 |  1.9% → 2.4% |  90 → 107 | `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  +36.8% |   +14 |  0.8% → 1.2% |   38 → 52 | `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `invoke` ← `average` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  +22.8% |   +13 |  1.2% → 1.6% |   57 → 70 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `invoke` ← `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a8011a2bd0`) ← `exec` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                 |
| +125.0% |   +10 |  0.2% → 0.4% |    8 → 18 | `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `invoke` ← `average` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `invoke` ← `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a8011a2bd0`) ← `exec` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`) |
|   +6.5% |    +9 |  2.9% → 3.3% | 138 → 147 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  +90.0% |    +9 |  0.2% → 0.4% |   10 → 19 | `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| +175.0% |    +7 |  0.1% → 0.2% |    4 → 11 | `forward_copy_longs` ← `arrayof_jint_disjoint_arraycopy` ← `copyOf` (`java.util.Arrays`) ← `toArray` (`java.util.ArrayList`) ← `<init>` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a8011a7000`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| +700.0% |    +7 | <0.1% → 0.2% |     1 → 8 | `__psynch_cvwait` ← `Parker::park` ← `Unsafe_Park` ← `park` (`jdk.internal.misc.Unsafe`) ← `park` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `invoke` ← `average` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  +38.9% |    +7 |  0.4% → 0.6% |   18 → 25 | `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  +10.3% |    +6 |  1.2% → 1.4% |   58 → 64 | `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| +150.0% |    +6 |  0.1% → 0.2% |    4 → 10 | `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `invoke` ← `average` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  +27.3% |    +6 |  0.5% → 0.6% |   22 → 28 | `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `invoke` ← `average` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `invoke` ← `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a8011a2bd0`) ← `exec` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                         |
| +100.0% |    +6 |  0.1% → 0.3% |    6 → 12 | `computeIfAbsent` (`java.util.HashMap`) ← `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  +75.0% |    +6 |  0.2% → 0.3% |    8 → 14 | `doubleValue` (`java.lang.Double`) ← `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|     new |    +6 |  0.0% → 0.1% |     0 → 6 | `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|     new |    +6 |  0.0% → 0.1% |     0 → 6 | `elementData` (`java.util.ArrayList`) ← `get` ← `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

### Improvements

Call stacks with the largest decrease in samples collected in their leaf frame.

Common call stack: `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`) ← `runWorker` ← `run` (`java.util.concurrent.ForkJoinWorkerThread`)

| Change | Delta |            % |   Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| -----: | ----: | -----------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| -18.9% |   -23 |  2.6% → 2.2% |  122 → 99 | `__psynch_cvwait` ← `Parker::park` ← `Unsafe_Park` ← `park` (`jdk.internal.misc.Unsafe`) ← `park` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| -17.8% |   -18 |  2.2% → 1.9% |  101 → 83 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| -21.3% |   -17 |  1.7% → 1.4% |   80 → 63 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| -22.7% |   -15 |  1.4% → 1.1% |   66 → 51 | `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| -25.0% |   -14 |  1.2% → 0.9% |   56 → 42 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| -27.7% |   -13 |  1.0% → 0.8% |   47 → 34 | `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| -59.1% |   -13 |  0.5% → 0.2% |    22 → 9 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| -54.2% |   -13 |  0.5% → 0.2% |   24 → 11 | `forward_copy_longs` ← `arrayof_jint_disjoint_arraycopy` ← `copyOf` (`java.util.Arrays`) ← `toArray` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a8011a7000`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| -80.0% |   -12 |  0.3% → 0.1% |    15 → 3 | `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `invoke` ← `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a8011a2bd0`) ← `exec` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) |
| -57.9% |   -11 |  0.4% → 0.2% |    19 → 8 | `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| -42.3% |   -11 |  0.6% → 0.3% |   26 → 15 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| -21.2% |   -11 |  1.1% → 0.9% |   52 → 41 | `__psynch_cvwait` ← `Parker::park` ← `Unsafe_Park` ← `park` (`jdk.internal.misc.Unsafe`) ← `park` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| -41.7% |   -10 |  0.5% → 0.3% |   24 → 14 | `accumulate` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| -40.9% |    -9 |  0.5% → 0.3% |   22 → 13 | `forward_copy_longs` ← `arrayof_jint_disjoint_arraycopy` ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a8011a7000`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| -23.1% |    -9 |  0.8% → 0.7% |   39 → 30 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| -64.3% |    -9 |  0.3% → 0.1% |    14 → 5 | `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  -7.0% |    -8 |  2.5% → 2.4% | 115 → 107 | `distance` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| -53.3% |    -8 |  0.3% → 0.2% |    15 → 7 | `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `invoke` ← `average` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages` ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| -50.0% |    -8 |  0.3% → 0.2% |    16 → 8 | `computeIfAbsent` (`java.util.HashMap`) ← `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| -88.9% |    -8 | 0.2% → <0.1% |     9 → 1 | `forward_copy_longs` ← `arrayof_jint_disjoint_arraycopy` ← `copyOf` (`java.util.Arrays`) ← `toArray` (`java.util.ArrayList`) ← `<init>` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a8011a7000`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `invoke` ← `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a8011a2bd0`) ← `exec` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

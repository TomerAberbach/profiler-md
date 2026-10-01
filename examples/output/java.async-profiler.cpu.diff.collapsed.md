# Sampling profile diff

Collected 4,682 samples → 4,436 samples (-246 samples, -5.3%).

| Category          | Change | Delta |             % |       Samples |
| ----------------- | -----: | ----: | ------------: | ------------: |
| Ours              |  -3.8% |  -101 | 57.4% → 58.3% | 2,688 → 2,587 |
| Native            |  -7.7% |   -94 | 26.0% → 25.3% | 1,216 → 1,122 |
| Standard library  |  -5.9% |   -39 | 14.2% → 14.1% |     665 → 626 |
| Compiler          | +14.3% |    +7 |   1.0% → 1.3% |       49 → 56 |
| JIT               | -31.3% |   -20 |   1.4% → 1.0% |       64 → 44 |
| Garbage collector |    new |    +1 |  0.0% → <0.1% |         0 → 1 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

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

|  Change | Delta |             % |   Samples | Function                   | Location                                                                                                                                      |
| ------: | ----: | ------------: | --------: | -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
|   +7.9% |   +67 | 18.2% → 20.7% | 853 → 920 | `accumulate`               | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                                                                     |
| +200.0% |    +2 |  <0.1% → 0.1% |     1 → 3 | `merge`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                   |
|     new |    +1 |  0.0% → <0.1% |     0 → 1 | `average`                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                                                                        |
|     new |    +1 |  0.0% → <0.1% |     0 → 1 | `apply`                    | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187218 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a8011a7490` |
|     new |    +1 |  0.0% → <0.1% |     0 → 1 | `combineResults`           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                                                                     |
| +100.0% |    +1 |         <0.1% |     1 → 2 | `<init>`                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |
|     new |    +1 |  0.0% → <0.1% |     0 → 1 | `<init>`                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                                                                     |
|     new |    +1 |  0.0% → <0.1% |     0 → 1 | `lambda$generateData$4`    | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                   |
|     new |    +1 |  0.0% → <0.1% |     0 → 1 | `forkThreshold`            | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                                                                        |
|     new |    +1 |  0.0% → <0.1% |     0 → 1 | `lambda$collectClusters$0` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |
|     new |    +1 |  0.0% → <0.1% |     0 → 1 | `<init>`                   | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a8011a7000`                                                                        |

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

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

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

|  Change | Delta |             % |   Samples | Function              | Location                                                                                                                                      |
| ------: | ----: | ------------: | --------: | --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
|  -12.6% |  -111 | 18.8% → 17.4% | 881 → 770 | `distance`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |
|   -8.1% |   -29 |   7.6% → 7.4% | 357 → 328 | `findNearestCentroid` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |
|  -23.2% |   -26 |   2.4% → 1.9% |  112 → 86 | `collectClusters`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |
|   -1.1% |    -5 |  9.8% → 10.3% | 460 → 455 | `vectorSum`           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                                                                     |
| removed |    -3 |   0.1% → 0.0% |     3 → 0 | `accept`              | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a8011a7000` |
|  -40.0% |    -2 |          0.1% |     5 → 3 | `add`                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                                                                     |
|  -66.7% |    -2 |  0.1% → <0.1% |     3 → 1 | `createSubtask`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                                                                     |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `createSubtask`       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |

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

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

| Change | Delta |             % |       Samples | Function                                   | Location                                                                                                  |
| -----: | ----: | ------------: | ------------: | ------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
|  +4.1% |   +62 | 32.0% → 35.2% | 1,498 → 1,560 | `vectorSum`                                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                                 |
|  +4.1% |   +62 | 32.0% → 35.2% | 1,499 → 1,561 | `computeDirectly`                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                                 |
|  +6.3% |   +61 | 20.6% → 23.2% |   966 → 1,027 | `accumulate`                               | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                                 |
|  +7.5% |   +48 | 13.7% → 15.5% |     641 → 689 | `average`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                                    |
|  +7.1% |   +46 | 13.8% → 15.6% |     647 → 693 | `computeClusterAverages`                   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                                    |
|  +7.1% |   +46 | 13.8% → 15.6% |     647 → 693 | `computeDirectly`                          | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                                    |
| +15.2% |   +39 |   5.5% → 6.7% |     257 → 296 | `awaitWork`                                | `java.util.concurrent.ForkJoinPool`                                                                       |
|  +1.7% |   +16 | 20.0% → 21.4% |     935 → 951 | `invoke`                                   | `java.util.concurrent.ForkJoinTask`                                                                       |
| +27.1% |   +16 |   1.3% → 1.7% |       59 → 75 | `CompileBroker::invoke_compiler_on_method` | `<unknown>`                                                                                               |
| +20.5% |   +15 |   1.6% → 2.0% |       73 → 88 | `JavaThread::thread_main_inner`            | `<unknown>`                                                                                               |
| +17.8% |   +13 |   1.6% → 1.9% |       73 → 86 | `CompileBroker::compiler_thread_loop`      | `<unknown>`                                                                                               |
| +28.6% |   +10 |   0.7% → 1.0% |       35 → 45 | `loadAndInvokeHarnessClass`                | `org.renaissance.core.Launcher`                                                                           |
| +31.0% |    +9 |   0.6% → 0.9% |       29 → 38 | `main`                                     | `org.renaissance.harness.RenaissanceSuite$`                                                               |
| +29.0% |    +9 |   0.7% → 0.9% |       31 → 40 | `main`                                     | `org.renaissance.harness.RenaissanceSuite`                                                                |
| +29.0% |    +9 |   0.7% → 0.9% |       31 → 40 | `invokeStatic`                             | `java.lang.invoke.LambdaForm$DMH.0x0000000801004800 → java.lang.invoke.LambdaForm$DMH.0x000000a801004800` |
| +29.0% |    +9 |   0.7% → 0.9% |       31 → 40 | `invoke`                                   | `java.lang.invoke.LambdaForm$MH.0x0000000801009800 → java.lang.invoke.LambdaForm$MH.0x000000a801009800`   |
| +29.0% |    +9 |   0.7% → 0.9% |       31 → 40 | `invokeImpl`                               | `jdk.internal.reflect.DirectMethodHandleAccessor`                                                         |
| +29.0% |    +9 |   0.7% → 0.9% |       31 → 40 | `invoke`                                   | `jdk.internal.reflect.DirectMethodHandleAccessor`                                                         |
| +29.0% |    +9 |   0.7% → 0.9% |       31 → 40 | `invoke`                                   | `java.lang.reflect.Method`                                                                                |
| +24.3% |    +9 |   0.8% → 1.0% |       37 → 46 | `launchHarnessClass`                       | `org.renaissance.core.Launcher`                                                                           |

##### Ours

|  Change | Delta |             % |       Samples | Function                    | Location                                                                                                                                      |
| ------: | ----: | ------------: | ------------: | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
|   +4.1% |   +62 | 32.0% → 35.2% | 1,498 → 1,560 | `vectorSum`                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                                                                     |
|   +4.1% |   +62 | 32.0% → 35.2% | 1,499 → 1,561 | `computeDirectly`           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                                                                     |
|   +6.3% |   +61 | 20.6% → 23.2% |   966 → 1,027 | `accumulate`                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                                                                     |
|   +7.5% |   +48 | 13.7% → 15.5% |     641 → 689 | `average`                   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                                                                        |
|   +7.1% |   +46 | 13.8% → 15.6% |     647 → 693 | `computeClusterAverages`    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                                                                        |
|   +7.1% |   +46 | 13.8% → 15.6% |     647 → 693 | `computeDirectly`           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                                                                        |
|  +28.6% |   +10 |   0.7% → 1.0% |       35 → 45 | `loadAndInvokeHarnessClass` | `org.renaissance.core.Launcher`                                                                                                               |
|  +31.0% |    +9 |   0.6% → 0.9% |       29 → 38 | `main`                      | `org.renaissance.harness.RenaissanceSuite$`                                                                                                   |
|  +29.0% |    +9 |   0.7% → 0.9% |       31 → 40 | `main`                      | `org.renaissance.harness.RenaissanceSuite`                                                                                                    |
|  +24.3% |    +9 |   0.8% → 1.0% |       37 → 46 | `launchHarnessClass`        | `org.renaissance.core.Launcher`                                                                                                               |
|  +24.3% |    +9 |   0.8% → 1.0% |       37 → 46 | `main`                      | `org.renaissance.core.Launcher`                                                                                                               |
| +133.3% |    +8 |   0.1% → 0.3% |        6 → 14 | `setUpBeforeAll`            | `org.renaissance.jdk.concurrent.FjKmeans`                                                                                                     |
|  +43.8% |    +7 |   0.3% → 0.5% |       16 → 23 | `runBenchmarks`             | `org.renaissance.harness.RenaissanceSuite$`                                                                                                   |
|  +54.5% |    +6 |   0.2% → 0.4% |       11 → 17 | `executeBenchmark`          | `org.renaissance.harness.ExecutionDriver`                                                                                                     |
|  +40.0% |    +6 |   0.3% → 0.5% |       15 → 21 | `runBenchmarks$$anonfun$1`  | `org.renaissance.harness.RenaissanceSuite$`                                                                                                   |
|  +40.0% |    +6 |   0.3% → 0.5% |       15 → 21 | `applyVoid`                 | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000080111f208 → org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a80111f1b8` |
|     new |    +5 |   0.0% → 0.1% |         0 → 5 | `rowToArray$1`              | `org.renaissance.jdk.concurrent.FjKmeans`                                                                                                     |
|     new |    +5 |   0.0% → 0.1% |         0 → 5 | `setUpBeforeAll$$anonfun$1` | `org.renaissance.jdk.concurrent.FjKmeans`                                                                                                     |
|     new |    +5 |   0.0% → 0.1% |         0 → 5 | `apply`                     | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000a801126908`                                                                          |
|     new |    +5 |   0.0% → 0.1% |         0 → 5 | `lambda$toCsvRows$2`        | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`                                                                            |

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

|  Change | Delta |             % |   Samples | Function             | Location                                                                                                  |
| ------: | ----: | ------------: | --------: | -------------------- | --------------------------------------------------------------------------------------------------------- |
|  +15.2% |   +39 |   5.5% → 6.7% | 257 → 296 | `awaitWork`          | `java.util.concurrent.ForkJoinPool`                                                                       |
|   +1.7% |   +16 | 20.0% → 21.4% | 935 → 951 | `invoke`             | `java.util.concurrent.ForkJoinTask`                                                                       |
|  +29.0% |    +9 |   0.7% → 0.9% |   31 → 40 | `invokeStatic`       | `java.lang.invoke.LambdaForm$DMH.0x0000000801004800 → java.lang.invoke.LambdaForm$DMH.0x000000a801004800` |
|  +29.0% |    +9 |   0.7% → 0.9% |   31 → 40 | `invoke`             | `java.lang.invoke.LambdaForm$MH.0x0000000801009800 → java.lang.invoke.LambdaForm$MH.0x000000a801009800`   |
|  +29.0% |    +9 |   0.7% → 0.9% |   31 → 40 | `invokeImpl`         | `jdk.internal.reflect.DirectMethodHandleAccessor`                                                         |
|  +29.0% |    +9 |   0.7% → 0.9% |   31 → 40 | `invoke`             | `jdk.internal.reflect.DirectMethodHandleAccessor`                                                         |
|  +29.0% |    +9 |   0.7% → 0.9% |   31 → 40 | `invoke`             | `java.lang.reflect.Method`                                                                                |
|  +50.0% |    +9 |   0.4% → 0.6% |   18 → 27 | `hash`               | `java.util.HashMap`                                                                                       |
|   +5.6% |    +8 |   3.1% → 3.4% | 143 → 151 | `elementData`        | `java.util.ArrayList`                                                                                     |
|  +25.0% |    +8 |   0.7% → 0.9% |   32 → 40 | `invokeExact_MT`     | `java.lang.invoke.Invokers$Holder`                                                                        |
| +116.7% |    +7 |   0.1% → 0.3% |    6 → 13 | `evaluateSequential` | `java.util.stream.ReduceOps$ReduceOp`                                                                     |
| +116.7% |    +7 |   0.1% → 0.3% |    6 → 13 | `collect`            | `java.util.stream.ReferencePipeline`                                                                      |
|   +3.9% |    +6 |   3.3% → 3.6% | 153 → 159 | `computeIfAbsent`    | `java.util.HashMap`                                                                                       |
|  +40.0% |    +6 |   0.3% → 0.5% |   15 → 21 | `apply`              | `scala.runtime.function.JProcedure1`                                                                      |
|  +40.0% |    +6 |   0.3% → 0.5% |   15 → 21 | `foreach`            | `scala.collection.immutable.List`                                                                         |
|  +83.3% |    +5 |   0.1% → 0.2% |    6 → 11 | `<init>`             | `java.util.HashMap`                                                                                       |
|  +45.5% |    +5 |   0.2% → 0.4% |   11 → 16 | `evaluate`           | `java.util.stream.AbstractPipeline`                                                                       |
|  +62.5% |    +5 |   0.2% → 0.3% |    8 → 13 | `parkUntil`          | `java.util.concurrent.locks.LockSupport`                                                                  |
|     new |    +5 |   0.0% → 0.1% |     0 → 5 | `accept`             | `java.util.stream.ReferencePipeline$3$1`                                                                  |
|     new |    +5 |   0.0% → 0.1% |     0 → 5 | `forEachRemaining`   | `java.util.Spliterators$ArraySpliterator`                                                                 |

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

Functions with the largest decrease in total samples taken in the function and all its callees.

| Change | Delta |             % |       Samples | Function              | Location                                                                                                                                      |
| -----: | ----: | ------------: | ------------: | --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
|  -6.7% |  -279 | 89.0% → 87.6% | 4,165 → 3,886 | `scan`                | `java.util.concurrent.ForkJoinPool`                                                                                                           |
|  -6.7% |  -277 | 88.2% → 86.9% | 4,130 → 3,853 | `compute`             | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                                                                        |
|  -6.7% |  -276 | 88.2% → 86.9% | 4,130 → 3,854 | `exec`                | `java.util.concurrent.RecursiveTask`                                                                                                          |
|  -6.6% |  -274 | 88.7% → 87.5% | 4,154 → 3,880 | `doExec`              | `java.util.concurrent.ForkJoinTask`                                                                                                           |
|  -6.6% |  -274 | 88.7% → 87.5% | 4,155 → 3,881 | `topLevelExec`        | `java.util.concurrent.ForkJoinPool$WorkQueue`                                                                                                 |
|  -6.4% |  -250 | 84.0% → 83.1% | 3,935 → 3,685 | `awaitDone`           | `java.util.concurrent.ForkJoinTask`                                                                                                           |
|  -6.4% |  -250 | 84.0% → 83.1% | 3,935 → 3,685 | `join`                | `java.util.concurrent.ForkJoinTask`                                                                                                           |
|  -5.4% |  -237 | 94.5% → 94.4% | 4,424 → 4,187 | `runWorker`           | `java.util.concurrent.ForkJoinPool`                                                                                                           |
|  -5.4% |  -237 | 94.5% → 94.4% | 4,424 → 4,187 | `run`                 | `java.util.concurrent.ForkJoinWorkerThread`                                                                                                   |
|  -5.4% |  -201 | 79.7% → 79.6% | 3,731 → 3,530 | `tryRemoveAndExec`    | `java.util.concurrent.ForkJoinPool$WorkQueue`                                                                                                 |
| -11.3% |  -201 | 37.9% → 35.4% | 1,773 → 1,572 | `computeDirectly`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |
| -16.6% |  -175 | 22.5% → 19.8% |   1,052 → 877 | `helpJoin`            | `java.util.concurrent.ForkJoinPool`                                                                                                           |
| -12.9% |  -171 | 28.2% → 25.9% | 1,321 → 1,150 | `findNearestCentroid` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |
| -13.9% |  -125 | 19.3% → 17.5% |     902 → 777 | `distance`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |
| -13.0% |   -46 |   7.6% → 7.0% |     355 → 309 | `accept`              | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a8011a7000` |
| -12.5% |   -45 |   7.7% → 7.1% |     359 → 314 | `forEach`             | `java.util.HashMap`                                                                                                                           |
| -12.2% |   -43 |   7.5% → 7.0% |     352 → 309 | `merge`               | `java.util.HashMap`                                                                                                                           |
| -12.2% |   -43 |   7.5% → 7.0% |     352 → 309 | `lambda$merge$7`      | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                   |
| -10.8% |   -40 |   7.9% → 7.4% |     369 → 329 | `merge`               | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                   |
|  -6.1% |   -39 | 13.6% → 13.5% |     636 → 597 | `park`                | `java.util.concurrent.locks.LockSupport`                                                                                                      |

##### Ours

| Change | Delta |             % |       Samples | Function              | Location                                                                                                                                      |
| -----: | ----: | ------------: | ------------: | --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
|  -6.7% |  -277 | 88.2% → 86.9% | 4,130 → 3,853 | `compute`             | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                                                                        |
| -11.3% |  -201 | 37.9% → 35.4% | 1,773 → 1,572 | `computeDirectly`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |
| -12.9% |  -171 | 28.2% → 25.9% | 1,321 → 1,150 | `findNearestCentroid` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |
| -13.9% |  -125 | 19.3% → 17.5% |     902 → 777 | `distance`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |
| -13.0% |   -46 |   7.6% → 7.0% |     355 → 309 | `accept`              | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a8011a7000` |
| -12.2% |   -43 |   7.5% → 7.0% |     352 → 309 | `lambda$merge$7`      | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                   |
| -10.8% |   -40 |   7.9% → 7.4% |     369 → 329 | `merge`               | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                   |
| -10.4% |   -38 |   7.8% → 7.4% |     365 → 327 | `combineResults`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |
|  -6.6% |   -30 |   9.7% → 9.5% |     452 → 422 | `collectClusters`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |
|  -5.1% |   -23 |          9.6% |     450 → 427 | `lambda$run$0`        | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                   |
|  -5.1% |   -23 |          9.6% |     450 → 427 | `call`                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a8011a2bd0` |
|  -5.9% |   -14 |   5.1% → 5.0% |     238 → 224 | `lambda$merge$6`      | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                   |
|  -5.5% |   -13 |          5.1% |     238 → 225 | `apply`               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187218 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a8011a7490` |
| -80.0% |    -4 |  0.1% → <0.1% |         5 → 1 | `run`                 | `org.renaissance.jdk.concurrent.FjKmeans`                                                                                                     |
| -50.0% |    -3 |          0.1% |         6 → 3 | `boxed`               | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                                                                        |
| -40.0% |    -2 |          0.1% |         5 → 3 | `executeOperation`    | `org.renaissance.harness.ExecutionDriver`                                                                                                     |
| -33.3% |    -2 |          0.1% |         6 → 4 | `combineResults`      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                                                                        |
| -40.0% |    -2 |          0.1% |         5 → 3 | `add`                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                                                                     |
| -66.7% |    -2 |  0.1% → <0.1% |         3 → 1 | `apply`               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801125b10 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a8011a25c0` |
| -20.0% |    -1 |          0.1% |         5 → 4 | `combineResults`      | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                                                                     |

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

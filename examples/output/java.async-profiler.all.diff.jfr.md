# Sampling profile diff

Collected 5,188 samples → 5,107 samples (-81 samples, -1.6%).

| Category          |  Change | Delta |             % |       Samples |
| ----------------- | ------: | ----: | ------------: | ------------: |
| Ours              |   -3.0% |   -93 | 59.7% → 58.8% | 3,098 → 3,005 |
| Native            |   +6.6% |   +80 | 23.3% → 25.2% | 1,207 → 1,287 |
| Standard library  |   -6.8% |   -51 | 14.5% → 13.7% |     752 → 701 |
| JIT               |   -9.0% |    -6 |   1.3% → 1.2% |       67 → 61 |
| Compiler          |  -14.5% |    -9 |   1.2% → 1.0% |       62 → 53 |
| Garbage collector | removed |    -2 |  <0.1% → 0.0% |         2 → 0 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |     Samples | Function                                                                          | Location                                                   |
| ------: | ----: | ------------: | ----------: | --------------------------------------------------------------------------------- | ---------------------------------------------------------- |
|  +25.7% |  +131 |  9.8% → 12.5% |   509 → 640 | `__psynch_cvwait`                                                                 | `libsystem_kernel.dylib`                                   |
|  +12.5% |  +118 | 18.2% → 20.8% | 943 → 1,061 | `accumulate(Double[], double[])`                                                  | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +31.4% |   +11 |   0.7% → 0.9% |     35 → 46 | `__psynch_cvsignal`                                                               | `libsystem_kernel.dylib`                                   |
| +900.0% |    +9 |  <0.1% → 0.2% |      1 → 10 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region` | `libjvm.dylib`                                             |
| +100.0% |    +7 |   0.1% → 0.3% |      7 → 14 | `merge(Object, Object, BiFunction)`                                               | `java.util.HashMap`                                        |
|  +75.0% |    +6 |   0.2% → 0.3% |      8 → 14 | `tlv_get_addr`                                                                    | `libdyld.dylib`                                            |
|     new |    +5 |   0.0% → 0.1% |       0 → 5 | `scan(ForkJoinPool$WorkQueue, int, int)`                                          | `java.util.concurrent.ForkJoinPool`                        |
|  +23.8% |    +5 |   0.4% → 0.5% |     21 → 26 | `__psynch_mutexwait`                                                              | `libsystem_kernel.dylib`                                   |
| +500.0% |    +5 |  <0.1% → 0.1% |       1 → 6 | `createSubtask(int, int)`                                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   +5.8% |    +4 |   1.3% → 1.4% |     69 → 73 | `add(Object, Object[], int)`                                                      | `java.util.ArrayList`                                      |
|     new |    +4 |   0.0% → 0.1% |       0 → 4 | `combineResults(Object, Object)`                                                  | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| +100.0% |    +3 |          0.1% |       3 → 6 | `runWorker(ForkJoinPool$WorkQueue)`                                               | `java.util.concurrent.ForkJoinPool`                        |
|   +2.8% |    +3 |   2.1% → 2.2% |   108 → 111 | `collectClusters(int[])`                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|     new |    +3 |   0.0% → 0.1% |       0 → 3 | `vframe::java_sender`                                                             | `libjvm.dylib`                                             |
| +300.0% |    +3 |  <0.1% → 0.1% |       1 → 4 | `_kernelrpc_mach_port_deallocate_trap`                                            | `libsystem_kernel.dylib`                                   |
|  +75.0% |    +3 |          0.1% |       4 → 7 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>`                   | `libjvm.dylib`                                             |
|     new |    +3 |   0.0% → 0.1% |       0 → 3 | `push(ForkJoinTask, ForkJoinPool, boolean)`                                       | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
|     new |    +3 |   0.0% → 0.1% |       0 → 3 | `bsearch`                                                                         | `libsystem_c.dylib`                                        |
|     new |    +3 |   0.0% → 0.1% |       0 → 3 | `_malloc_zone_malloc`                                                             | `libsystem_malloc.dylib`                                   |
|     new |    +3 |   0.0% → 0.1% |       0 → 3 | `pthread_testcancel`                                                              | `libsystem_pthread.dylib`                                  |

##### Ours

|  Change | Delta |             % |     Samples | Function                                   | Location                                                                              |
| ------: | ----: | ------------: | ----------: | ------------------------------------------ | ------------------------------------------------------------------------------------- |
|  +12.5% |  +118 | 18.2% → 20.8% | 943 → 1,061 | `accumulate(Double[], double[])`           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| +500.0% |    +5 |  <0.1% → 0.1% |       1 → 6 | `createSubtask(int, int)`                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|     new |    +4 |   0.0% → 0.1% |       0 → 4 | `combineResults(Object, Object)`           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|   +2.8% |    +3 |   2.1% → 2.2% |   108 → 111 | `collectClusters(int[])`                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|     new |    +2 |  0.0% → <0.1% |       0 → 2 | `apply(Object, Object)`                    | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186fd0`                |
|     new |    +2 |  0.0% → <0.1% |       0 → 2 | `combineResults(Object, Object)`           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|     new |    +2 |  0.0% → <0.1% |       0 → 2 | `apply(Object)`                            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000c801186b38` |
|     new |    +2 |  0.0% → <0.1% |       0 → 2 | `<init>(JavaKMeans, int, int)`             | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                |
|     new |    +2 |  0.0% → <0.1% |       0 → 2 | `forkThreshold()`                          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|     new |    +1 |  0.0% → <0.1% |       0 → 1 | `forkThreshold()`                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|     new |    +1 |  0.0% → <0.1% |       0 → 1 | `<init>(JavaKMeans, List, List, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |

##### Native

|  Change | Delta |            % |   Samples | Function                                                                                     | Location                   |
| ------: | ----: | -----------: | --------: | -------------------------------------------------------------------------------------------- | -------------------------- |
|  +25.7% |  +131 | 9.8% → 12.5% | 509 → 640 | `__psynch_cvwait`                                                                            | `libsystem_kernel.dylib`   |
|  +31.4% |   +11 |  0.7% → 0.9% |   35 → 46 | `__psynch_cvsignal`                                                                          | `libsystem_kernel.dylib`   |
| +900.0% |    +9 | <0.1% → 0.2% |    1 → 10 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region`            | `libjvm.dylib`             |
|  +75.0% |    +6 |  0.2% → 0.3% |    8 → 14 | `tlv_get_addr`                                                                               | `libdyld.dylib`            |
|  +23.8% |    +5 |  0.4% → 0.5% |   21 → 26 | `__psynch_mutexwait`                                                                         | `libsystem_kernel.dylib`   |
|     new |    +3 |  0.0% → 0.1% |     0 → 3 | `vframe::java_sender`                                                                        | `libjvm.dylib`             |
| +300.0% |    +3 | <0.1% → 0.1% |     1 → 4 | `_kernelrpc_mach_port_deallocate_trap`                                                       | `libsystem_kernel.dylib`   |
|  +75.0% |    +3 |         0.1% |     4 → 7 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>`                              | `libjvm.dylib`             |
|     new |    +3 |  0.0% → 0.1% |     0 → 3 | `bsearch`                                                                                    | `libsystem_c.dylib`        |
|     new |    +3 |  0.0% → 0.1% |     0 → 3 | `_malloc_zone_malloc`                                                                        | `libsystem_malloc.dylib`   |
|     new |    +3 |  0.0% → 0.1% |     0 → 3 | `pthread_testcancel`                                                                         | `libsystem_pthread.dylib`  |
|   +7.1% |    +2 |  0.5% → 0.6% |   28 → 30 | `RegisterMap::RegisterMap`                                                                   | `libjvm.dylib`             |
|  +66.7% |    +2 |         0.1% |     3 → 5 | `_sigtramp`                                                                                  | `libsystem_platform.dylib` |
|     new |    +2 | 0.0% → <0.1% |     0 → 2 | `jvmti_Deallocate`                                                                           | `libjvm.dylib`             |
|  +66.7% |    +2 |         0.1% |     3 → 5 | `ObjArrayAllocator::initialize`                                                              | `libjvm.dylib`             |
|     new |    +2 | 0.0% → <0.1% |     0 → 2 | `Arena::grow`                                                                                | `libjvm.dylib`             |
| +200.0% |    +2 | <0.1% → 0.1% |     1 → 3 | `void HeapRegion::apply_to_marked_objects<G1FullGCPrepareTask::G1PrepareCompactLiveClosure>` | `libjvm.dylib`             |
|  +66.7% |    +2 |         0.1% |     3 → 5 | `semaphore_signal_trap`                                                                      | `libsystem_kernel.dylib`   |
| +200.0% |    +2 | <0.1% → 0.1% |     1 → 3 | `__psynch_cvbroad`                                                                           | `libsystem_kernel.dylib`   |
| +100.0% |    +2 | <0.1% → 0.1% |     2 → 4 | `G1ParScanThreadState::do_partial_array`                                                     | `libjvm.dylib`             |

##### Standard library

|  Change | Delta |            % | Samples | Function                                           | Location                                      |
| ------: | ----: | -----------: | ------: | -------------------------------------------------- | --------------------------------------------- |
| +100.0% |    +7 |  0.1% → 0.3% |  7 → 14 | `merge(Object, Object, BiFunction)`                | `java.util.HashMap`                           |
|     new |    +5 |  0.0% → 0.1% |   0 → 5 | `scan(ForkJoinPool$WorkQueue, int, int)`           | `java.util.concurrent.ForkJoinPool`           |
|   +5.8% |    +4 |  1.3% → 1.4% | 69 → 73 | `add(Object, Object[], int)`                       | `java.util.ArrayList`                         |
| +100.0% |    +3 |         0.1% |   3 → 6 | `runWorker(ForkJoinPool$WorkQueue)`                | `java.util.concurrent.ForkJoinPool`           |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `push(ForkJoinTask, ForkJoinPool, boolean)`        | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  +66.7% |    +2 |         0.1% |   3 → 5 | `tryRemoveAndExec(ForkJoinTask, boolean)`          | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `park(boolean, long)`                              | `jdk.internal.misc.Unsafe`                    |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `casSlotToNull(ForkJoinTask[], int, ForkJoinTask)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `getAndClearInterrupt()`                           | `java.lang.Thread`                            |
|  +20.0% |    +1 |         0.1% |   5 → 6 | `awaitDone(int, long)`                             | `java.util.concurrent.ForkJoinTask`           |
|  +20.0% |    +1 |         0.1% |   5 → 6 | `forEach(BiConsumer)`                              | `java.util.HashMap`                           |
|  +16.7% |    +1 |         0.1% |   6 → 7 | `copyOf(Object[], int)`                            | `java.util.Arrays`                            |
|  +20.0% |    +1 |         0.1% |   5 → 6 | `grow()`                                           | `java.util.ArrayList`                         |
| +100.0% |    +1 |        <0.1% |   1 → 2 | `park()`                                           | `java.util.concurrent.locks.LockSupport`      |
| +100.0% |    +1 |        <0.1% |   1 → 2 | `releaseAccess()`                                  | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `signalWork()`                                     | `java.util.concurrent.ForkJoinPool`           |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `accept(int)`                                      | `java.util.stream.IntPipeline$1$1`            |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `put(Object, Object)`                              | `java.util.HashMap`                           |
| +100.0% |    +1 |        <0.1% |   1 → 2 | `newNode(int, Object, Object, HashMap$Node)`       | `java.util.HashMap`                           |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `values()`                                         | `java.util.HashMap`                           |

##### JIT

| Change | Delta |            % | Samples | Function                   | Location    |
| -----: | ----: | -----------: | ------: | -------------------------- | ----------- |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `I2C/C2I adapters(0xbbab)` | `<unknown>` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `vtable stub`              | `<unknown>` |

##### Compiler

| Change | Delta |            % | Samples | Function                                      | Location       |
| -----: | ----: | -----------: | ------: | --------------------------------------------- | -------------- |
|    new |    +2 | 0.0% → <0.1% |   0 → 2 | `PhaseOutput::BuildOopMaps`                   | `libjvm.dylib` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `ciTypeFlow::df_flow_types`                   | `libjvm.dylib` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `Matcher::find_shared`                        | `libjvm.dylib` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseIdealLoop::Dominators`                  | `libjvm.dylib` |
| +50.0% |    +1 | <0.1% → 0.1% |   2 → 3 | `PhaseCFG::schedule_local`                    | `libjvm.dylib` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseIdealLoop::build_loop_late`             | `libjvm.dylib` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `GraphBuilder::iterate_bytecodes_for_block`   | `libjvm.dylib` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseIdealLoop::build_loop_early`            | `libjvm.dylib` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `NodeHash::hash_find`                         | `libjvm.dylib` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseChaitin::merge_multidefs`               | `libjvm.dylib` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `CallStaticJavaNode::Opcode`                  | `libjvm.dylib` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `IndexSet::IndexSet`                          | `libjvm.dylib` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `RegMask::is_UP`                              | `libjvm.dylib` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `AddNode::Value`                              | `libjvm.dylib` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseRenumberLive::update_embedded_ids`      | `libjvm.dylib` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `CodeBuffer::finalize_oop_references`         | `libjvm.dylib` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `branchNode::is_block_proj`                   | `libjvm.dylib` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `ciTypeFlow::build_loop_tree`                 | `libjvm.dylib` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `unnecessary_membar_acquireNode::out_RegMask` | `libjvm.dylib` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseIterGVN::PhaseIterGVN`                  | `libjvm.dylib` |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                                                                                        | Location                                                   |
| ------: | ----: | ------------: | --------: | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
|  -21.0% |  -103 |   9.5% → 7.6% | 491 → 388 | `findNearestCentroid()`                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -13.5% |   -76 |  10.8% → 9.5% | 562 → 486 | `vectorSum()`                                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   -5.2% |   -51 | 18.9% → 18.2% | 983 → 932 | `distance(Double[], Double[])`                                                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -18.7% |   -35 |   3.6% → 3.0% | 187 → 152 | `elementData(int)`                                                                              | `java.util.ArrayList`                                      |
|  -12.9% |   -26 |   3.9% → 3.4% | 201 → 175 | `forward_copy_longs`                                                                            | `<unknown>`                                                |
|  -31.3% |   -10 |   0.6% → 0.4% |   32 → 22 | `pthread_jit_write_protect_np`                                                                  | `libsystem_pthread.dylib`                                  |
|  -30.0% |    -9 |   0.6% → 0.4% |   30 → 21 | `hash(Object)`                                                                                  | `java.util.HashMap`                                        |
|  -52.9% |    -9 |   0.3% → 0.2% |    17 → 8 | `ScopeDesc::decode_body`                                                                        | `libjvm.dylib`                                             |
|  -56.3% |    -9 |   0.3% → 0.1% |    16 → 7 | `G1ParScanThreadState::do_copy_to_survivor_space`                                               | `libjvm.dylib`                                             |
|   -5.4% |    -8 |   2.8% → 2.7% | 147 → 139 | `computeIfAbsent(Object, Function)`                                                             | `java.util.HashMap`                                        |
|  -11.9% |    -8 |   1.3% → 1.2% |   67 → 59 | `zero_blocks`                                                                                   | `<unknown>`                                                |
| removed |    -8 |   0.2% → 0.0% |     8 → 0 | `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>`                                 | `libjvm.dylib`                                             |
|  -38.9% |    -7 |   0.3% → 0.2% |   18 → 11 | `_platform_bzero`                                                                               | `libsystem_platform.dylib`                                 |
| removed |    -7 |   0.1% → 0.0% |     7 → 0 | `void OopOopIterateDispatch<G1AdjustClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `libjvm.dylib`                                             |
|  -21.4% |    -6 |   0.5% → 0.4% |   28 → 22 | `grow(int)`                                                                                     | `java.util.ArrayList`                                      |
|  -40.0% |    -6 |   0.3% → 0.2% |    15 → 9 | `thread_self_trap`                                                                              | `libsystem_kernel.dylib`                                   |
|  -41.7% |    -5 |   0.2% → 0.1% |    12 → 7 | `_platform_memmove`                                                                             | `libsystem_platform.dylib`                                 |
| removed |    -5 |   0.1% → 0.0% |     5 → 0 | `Mutex::unlock`                                                                                 | `libjvm.dylib`                                             |
|   -2.8% |    -4 |   2.8% → 2.7% | 143 → 139 | `doubleValue()`                                                                                 | `java.lang.Double`                                         |
|  -28.6% |    -4 |   0.3% → 0.2% |   14 → 10 | `semaphore_wait_trap`                                                                           | `libsystem_kernel.dylib`                                   |

##### Ours

|  Change | Delta |             % |   Samples | Function                                         | Location                                                                          |
| ------: | ----: | ------------: | --------: | ------------------------------------------------ | --------------------------------------------------------------------------------- |
|  -21.0% |  -103 |   9.5% → 7.6% | 491 → 388 | `findNearestCentroid()`                          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                        |
|  -13.5% |   -76 |  10.8% → 9.5% | 562 → 486 | `vectorSum()`                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                         |
|   -5.2% |   -51 | 18.9% → 18.2% | 983 → 932 | `distance(Double[], Double[])`                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                        |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `computeDirectly()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                        |
|  -33.3% |    -1 |  0.1% → <0.1% |     3 → 2 | `compute()`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                            |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `computeDirectly()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                         |
| removed |    -1 |  <0.1% → 0.0% |     1 → 0 | `apply(int)`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask$$Lambda.0x000000080118c9c0` |
|  -50.0% |    -1 |         <0.1% |     2 → 1 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                                       |

##### Native

|  Change | Delta |            % |   Samples | Function                                                                                                                                                   | Location                   |
| ------: | ----: | -----------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
|  -12.9% |   -26 |  3.9% → 3.4% | 201 → 175 | `forward_copy_longs`                                                                                                                                       | `<unknown>`                |
|  -31.3% |   -10 |  0.6% → 0.4% |   32 → 22 | `pthread_jit_write_protect_np`                                                                                                                             | `libsystem_pthread.dylib`  |
|  -52.9% |    -9 |  0.3% → 0.2% |    17 → 8 | `ScopeDesc::decode_body`                                                                                                                                   | `libjvm.dylib`             |
|  -56.3% |    -9 |  0.3% → 0.1% |    16 → 7 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                                                          | `libjvm.dylib`             |
| removed |    -8 |  0.2% → 0.0% |     8 → 0 | `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>`                                                                                            | `libjvm.dylib`             |
|  -38.9% |    -7 |  0.3% → 0.2% |   18 → 11 | `_platform_bzero`                                                                                                                                          | `libsystem_platform.dylib` |
| removed |    -7 |  0.1% → 0.0% |     7 → 0 | `void OopOopIterateDispatch<G1AdjustClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                            | `libjvm.dylib`             |
|  -40.0% |    -6 |  0.3% → 0.2% |    15 → 9 | `thread_self_trap`                                                                                                                                         | `libsystem_kernel.dylib`   |
|  -41.7% |    -5 |  0.2% → 0.1% |    12 → 7 | `_platform_memmove`                                                                                                                                        | `libsystem_platform.dylib` |
| removed |    -5 |  0.1% → 0.0% |     5 → 0 | `Mutex::unlock`                                                                                                                                            | `libjvm.dylib`             |
|  -28.6% |    -4 |  0.3% → 0.2% |   14 → 10 | `semaphore_wait_trap`                                                                                                                                      | `libsystem_kernel.dylib`   |
|  -80.0% |    -4 | 0.1% → <0.1% |     5 → 1 | `__psynch_mutexdrop`                                                                                                                                       | `libsystem_kernel.dylib`   |
|  -75.0% |    -3 | 0.1% → <0.1% |     4 → 1 | `G1RegionMarkStatsCache::add_live_words`                                                                                                                   | `libjvm.dylib`             |
| removed |    -3 |  0.1% → 0.0% |     3 → 0 | `AccessInternal::PostRuntimeDispatch<G1BarrierSet::AccessBarrier<544868ull, G1BarrierSet>, (AccessInternal::BarrierType)2, 544868ull>::oop_access_barrier` | `libjvm.dylib`             |
|  -33.3% |    -2 |         0.1% |     6 → 4 | `arrayof_oop_disjoint_arraycopy`                                                                                                                           | `<unknown>`                |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `OopStorage::allocate`                                                                                                                                     | `libjvm.dylib`             |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `jvmti_GetCurrentThread`                                                                                                                                   | `libjvm.dylib`             |
|  -66.7% |    -2 | 0.1% → <0.1% |     3 → 1 | `G1BarrierSet::invalidate`                                                                                                                                 | `libjvm.dylib`             |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `_platform_memcmp`                                                                                                                                         | `libsystem_platform.dylib` |
|  -50.0% |    -2 | 0.1% → <0.1% |     4 → 2 | `G1FullGCMarker::follow_object`                                                                                                                            | `libjvm.dylib`             |

##### Standard library

|  Change | Delta |            % |   Samples | Function                                        | Location                                        |
| ------: | ----: | -----------: | --------: | ----------------------------------------------- | ----------------------------------------------- |
|  -18.7% |   -35 |  3.6% → 3.0% | 187 → 152 | `elementData(int)`                              | `java.util.ArrayList`                           |
|  -30.0% |    -9 |  0.6% → 0.4% |   30 → 21 | `hash(Object)`                                  | `java.util.HashMap`                             |
|   -5.4% |    -8 |  2.8% → 2.7% | 147 → 139 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap`                             |
|  -21.4% |    -6 |  0.5% → 0.4% |   28 → 22 | `grow(int)`                                     | `java.util.ArrayList`                           |
|   -2.8% |    -4 |  2.8% → 2.7% | 143 → 139 | `doubleValue()`                                 | `java.lang.Double`                              |
| removed |    -4 |  0.1% → 0.0% |     4 → 0 | `newLength(int, int, int)`                      | `jdk.internal.util.ArraysSupport`               |
| removed |    -3 |  0.1% → 0.0% |     3 → 0 | `get(int)`                                      | `java.util.ArrayList`                           |
| removed |    -3 |  0.1% → 0.0% |     3 → 0 | `signalWaiters()`                               | `java.util.concurrent.ForkJoinTask`             |
|  -60.0% |    -3 | 0.1% → <0.1% |     5 → 2 | `nextNode()`                                    | `java.util.HashMap$HashIterator`                |
|  -66.7% |    -2 | 0.1% → <0.1% |     3 → 1 | `exec()`                                        | `java.util.concurrent.RecursiveTask`            |
|  -66.7% |    -2 | 0.1% → <0.1% |     3 → 1 | `join()`                                        | `java.util.concurrent.ForkJoinTask`             |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `add(Object)`                                   | `java.util.ArrayList`                           |
|   -6.7% |    -2 |  0.6% → 0.5% |   30 → 28 | `checkIndex(int, int)`                          | `java.util.Objects`                             |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `awaitWork(ForkJoinPool$WorkQueue)`             | `java.util.concurrent.ForkJoinPool`             |
|  -50.0% |    -1 |        <0.1% |     2 → 1 | `doExec()`                                      | `java.util.concurrent.ForkJoinTask`             |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `forEachRemaining(DoubleConsumer)`              | `java.util.Spliterators$DoubleArraySpliterator` |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `toArray(IntFunction)`                          | `java.util.stream.ReferencePipeline`            |
|  -33.3% |    -1 | 0.1% → <0.1% |     3 → 2 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap`                             |
|  -33.3% |    -1 | 0.1% → <0.1% |     3 → 2 | `getRawResult()`                                | `java.util.concurrent.RecursiveTask`            |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `tryCompensate(long, boolean)`                  | `java.util.concurrent.ForkJoinPool`             |

##### JIT

| Change | Delta |           % | Samples | Function      | Location    |
| -----: | ----: | ----------: | ------: | ------------- | ----------- |
| -11.9% |    -8 | 1.3% → 1.2% | 67 → 59 | `zero_blocks` | `<unknown>` |

##### Compiler

|  Change | Delta |            % | Samples | Function                                      | Location       |
| ------: | ----: | -----------: | ------: | --------------------------------------------- | -------------- |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `Node_Backward_Iterator::next`                | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `PhaseIdealLoop::build_loop_late_post_work`   | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `LinearScan::number_instructions`             | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseCFG::schedule_late`                     | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseAggressiveCoalesce::coalesce`           | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `CProjNode::is_block_proj`                    | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `ProjNode::bottom_type`                       | `libjvm.dylib` |
|  -50.0% |    -1 |        <0.1% |   2 → 1 | `Scheduling::ComputeRegisterAntidependencies` | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `MemNode::Ideal_common`                       | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `RegionNode::is_CFG`                          | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Node::ideal_reg`                             | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `MachSafePointNode::in_RegMask`               | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `NTarjan::DFS`                                | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `MachSpillCopyNode::implementation`           | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Node::pipeline`                              | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseLive::compute`                          | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Compile::disconnect_useless_nodes`           | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `ProjNode::is_CFG`                            | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `ciMethodData::data_from`                     | `libjvm.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Scheduling::compare_two_spill_nodes`         | `libjvm.dylib` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|   Change | Delta |             % |       Samples | Function                                                                          | Location                                                  |
| -------: | ----: | ------------: | ------------: | --------------------------------------------------------------------------------- | --------------------------------------------------------- |
|   +27.0% |  +136 |  9.7% → 12.5% |     503 → 639 | `Unsafe_Park`                                                                     | `libjvm.dylib`                                            |
|   +25.9% |  +135 | 10.1% → 12.9% |     522 → 657 | `park()`                                                                          | `java.util.concurrent.locks.LockSupport`                  |
|   +26.9% |  +133 |  9.5% → 12.3% |     495 → 628 | `Parker::park`                                                                    | `libjvm.dylib`                                            |
|   +24.9% |  +132 | 10.2% → 13.0% |     530 → 662 | `park(boolean, long)`                                                             | `jdk.internal.misc.Unsafe`                                |
|   +25.7% |  +131 |  9.8% → 12.5% |     509 → 640 | `__psynch_cvwait`                                                                 | `libsystem_kernel.dylib`                                  |
|   +24.9% |  +131 | 10.1% → 12.9% |     526 → 657 | `LockTracer::UnsafeParkHook`                                                      | `libasyncProfiler.dylib`                                  |
|   +60.2% |  +118 |   3.8% → 6.1% |     196 → 314 | `awaitWork(ForkJoinPool$WorkQueue)`                                               | `java.util.concurrent.ForkJoinPool`                       |
|   +10.2% |  +110 | 20.7% → 23.2% | 1,075 → 1,185 | `accumulate(Double[], double[])`                                                  | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|    +4.8% |   +52 | 20.7% → 22.0% | 1,074 → 1,126 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`                         | `java.util.concurrent.ForkJoinPool`                       |
|      new |   +32 |   0.0% → 0.6% |        0 → 32 | `invokeStatic(Object, Object)`                                                    | `java.lang.invoke.LambdaForm$DMH.0x000000c801004800`      |
|      new |   +32 |   0.0% → 0.6% |        0 → 32 | `invoke(Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x000000c801009800`       |
|    +0.9% |   +16 | 33.5% → 34.4% | 1,740 → 1,756 | `vectorSum()`                                                                     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|    +0.9% |   +15 | 33.6% → 34.4% | 1,741 → 1,756 | `computeDirectly()`                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|   +31.4% |   +11 |   0.7% → 0.9% |       35 → 46 | `__psynch_cvsignal`                                                               | `libsystem_kernel.dylib`                                  |
|   +26.8% |   +11 |   0.8% → 1.0% |       41 → 52 | `Unsafe_Unpark`                                                                   | `libjvm.dylib`                                            |
|   +26.2% |   +11 |   0.8% → 1.0% |       42 → 53 | `unpark(Object)`                                                                  | `jdk.internal.misc.Unsafe`                                |
|   +26.2% |   +11 |   0.8% → 1.0% |       42 → 53 | `unpark(Thread)`                                                                  | `java.util.concurrent.locks.LockSupport`                  |
|  +125.0% |   +10 |   0.2% → 0.4% |        8 → 18 | `G1EvacuateRegionsTask::scan_roots`                                               | `libjvm.dylib`                                            |
| +1000.0% |   +10 |  <0.1% → 0.2% |        1 → 11 | `G1FullGCResetMetadataTask::work`                                                 | `libjvm.dylib`                                            |
|  +900.0% |    +9 |  <0.1% → 0.2% |        1 → 10 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region` | `libjvm.dylib`                                            |

##### Ours

|  Change | Delta |             % |       Samples | Function                                   | Location                                                                              |
| ------: | ----: | ------------: | ------------: | ------------------------------------------ | ------------------------------------------------------------------------------------- |
|  +10.2% |  +110 | 20.7% → 23.2% | 1,075 → 1,185 | `accumulate(Double[], double[])`           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|   +0.9% |   +16 | 33.5% → 34.4% | 1,740 → 1,756 | `vectorSum()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|   +0.9% |   +15 | 33.6% → 34.4% | 1,741 → 1,756 | `computeDirectly()`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| +700.0% |    +7 |  <0.1% → 0.2% |         1 → 8 | `createSubtask(int, int)`                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|     new |    +5 |   0.0% → 0.1% |         0 → 5 | `combineResults(Object, Object)`           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  +75.0% |    +3 |          0.1% |         4 → 7 | `boxed(double[])`                          | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
| +100.0% |    +2 |  <0.1% → 0.1% |         2 → 4 | `apply(Object)`                            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000c801186b38` |
|   +6.9% |    +2 |          0.6% |       29 → 31 | `main(String[])`                           | `org.renaissance.harness.RenaissanceSuite$`                                           |
|     new |    +2 |  0.0% → <0.1% |         0 → 2 | `<init>(JavaKMeans, List, List, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|     new |    +2 |  0.0% → <0.1% |         0 → 2 | `forkThreshold()`                          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|     new |    +2 |  0.0% → <0.1% |         0 → 2 | `createSubtask(int, int)`                  | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|   +0.1% |    +1 | 15.0% → 15.3% |     779 → 780 | `computeClusterAverages()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|   +0.1% |    +1 | 15.0% → 15.3% |     779 → 780 | `computeDirectly()`                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|  +50.0% |    +1 |  <0.1% → 0.1% |         2 → 3 | `createHandler()`                          | `org.renaissance.core.Logging`                                                        |
|  +50.0% |    +1 |  <0.1% → 0.1% |         2 → 3 | `createRootLogger()`                       | `org.renaissance.core.Logging`                                                        |
|  +50.0% |    +1 |  <0.1% → 0.1% |         2 → 3 | `<clinit>()`                               | `org.renaissance.core.Logging`                                                        |
|  +50.0% |    +1 |  <0.1% → 0.1% |         2 → 3 | `<clinit>()`                               | `org.renaissance.core.Launcher`                                                       |
|   +2.7% |    +1 |          0.7% |       37 → 38 | `launchHarnessClass(String, String[])`     | `org.renaissance.core.Launcher`                                                       |
|   +2.7% |    +1 |          0.7% |       37 → 38 | `main(String[])`                           | `org.renaissance.core.Launcher`                                                       |
|  +12.5% |    +1 |          0.2% |         8 → 9 | `createClassLoaderForModule(String)`       | `org.renaissance.core.ModuleLoader`                                                   |

##### Native

|   Change | Delta |             % |   Samples | Function                                                                          | Location                 |
| -------: | ----: | ------------: | --------: | --------------------------------------------------------------------------------- | ------------------------ |
|   +27.0% |  +136 |  9.7% → 12.5% | 503 → 639 | `Unsafe_Park`                                                                     | `libjvm.dylib`           |
|   +26.9% |  +133 |  9.5% → 12.3% | 495 → 628 | `Parker::park`                                                                    | `libjvm.dylib`           |
|   +25.7% |  +131 |  9.8% → 12.5% | 509 → 640 | `__psynch_cvwait`                                                                 | `libsystem_kernel.dylib` |
|   +24.9% |  +131 | 10.1% → 12.9% | 526 → 657 | `LockTracer::UnsafeParkHook`                                                      | `libasyncProfiler.dylib` |
|   +31.4% |   +11 |   0.7% → 0.9% |   35 → 46 | `__psynch_cvsignal`                                                               | `libsystem_kernel.dylib` |
|   +26.8% |   +11 |   0.8% → 1.0% |   41 → 52 | `Unsafe_Unpark`                                                                   | `libjvm.dylib`           |
|  +125.0% |   +10 |   0.2% → 0.4% |    8 → 18 | `G1EvacuateRegionsTask::scan_roots`                                               | `libjvm.dylib`           |
| +1000.0% |   +10 |  <0.1% → 0.2% |    1 → 11 | `G1FullGCResetMetadataTask::work`                                                 | `libjvm.dylib`           |
|  +900.0% |    +9 |  <0.1% → 0.2% |    1 → 10 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region` | `libjvm.dylib`           |
|  +900.0% |    +9 |  <0.1% → 0.2% |    1 → 10 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::do_heap_region`               | `libjvm.dylib`           |
|      new |    +8 |   0.0% → 0.2% |     0 → 8 | `G1RootProcessor::process_java_roots`                                             | `libjvm.dylib`           |
|      new |    +8 |   0.0% → 0.2% |     0 → 8 | `G1RootProcessor::evacuate_roots`                                                 | `libjvm.dylib`           |
|  +116.7% |    +7 |   0.1% → 0.3% |    6 → 13 | `JvmtiEnvBase::get_cthread_last_java_vframe`                                      | `libjvm.dylib`           |
|      new |    +7 |   0.0% → 0.1% |     0 → 7 | `JavaThread::oops_do_frames`                                                      | `libjvm.dylib`           |
|      new |    +7 |   0.0% → 0.1% |     0 → 7 | `Thread::oops_do`                                                                 | `libjvm.dylib`           |
|      new |    +7 |   0.0% → 0.1% |     0 → 7 | `Threads::possibly_parallel_threads_do`                                           | `libjvm.dylib`           |
|      new |    +7 |   0.0% → 0.1% |     0 → 7 | `Threads::possibly_parallel_oops_do`                                              | `libjvm.dylib`           |
|   +66.7% |    +6 |   0.2% → 0.3% |    9 → 15 | `ThreadCritical::ThreadCritical`                                                  | `libjvm.dylib`           |
|   +18.2% |    +6 |   0.6% → 0.8% |   33 → 39 | `G1EvacuateRegionsBaseTask::work`                                                 | `libjvm.dylib`           |
|   +75.0% |    +6 |   0.2% → 0.3% |    8 → 14 | `tlv_get_addr`                                                                    | `libdyld.dylib`          |

##### Standard library

|  Change | Delta |             % |       Samples | Function                                                                    | Location                                             |
| ------: | ----: | ------------: | ------------: | --------------------------------------------------------------------------- | ---------------------------------------------------- |
|  +25.9% |  +135 | 10.1% → 12.9% |     522 → 657 | `park()`                                                                    | `java.util.concurrent.locks.LockSupport`             |
|  +24.9% |  +132 | 10.2% → 13.0% |     530 → 662 | `park(boolean, long)`                                                       | `jdk.internal.misc.Unsafe`                           |
|  +60.2% |  +118 |   3.8% → 6.1% |     196 → 314 | `awaitWork(ForkJoinPool$WorkQueue)`                                         | `java.util.concurrent.ForkJoinPool`                  |
|   +4.8% |   +52 | 20.7% → 22.0% | 1,074 → 1,126 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`                   | `java.util.concurrent.ForkJoinPool`                  |
|     new |   +32 |   0.0% → 0.6% |        0 → 32 | `invokeStatic(Object, Object)`                                              | `java.lang.invoke.LambdaForm$DMH.0x000000c801004800` |
|     new |   +32 |   0.0% → 0.6% |        0 → 32 | `invoke(Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x000000c801009800`  |
|  +26.2% |   +11 |   0.8% → 1.0% |       42 → 53 | `unpark(Object)`                                                            | `jdk.internal.misc.Unsafe`                           |
|  +26.2% |   +11 |   0.8% → 1.0% |       42 → 53 | `unpark(Thread)`                                                            | `java.util.concurrent.locks.LockSupport`             |
|  +26.7% |    +8 |   0.6% → 0.7% |       30 → 38 | `setDone()`                                                                 | `java.util.concurrent.ForkJoinTask`                  |
|  +22.6% |    +7 |   0.6% → 0.7% |       31 → 38 | `signalWaiters()`                                                           | `java.util.concurrent.ForkJoinTask`                  |
| +150.0% |    +6 |   0.1% → 0.2% |        4 → 10 | `signalWork()`                                                              | `java.util.concurrent.ForkJoinPool`                  |
| +600.0% |    +6 |  <0.1% → 0.1% |         1 → 7 | `push(ForkJoinTask, ForkJoinPool, boolean)`                                 | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
| +600.0% |    +6 |  <0.1% → 0.1% |         1 → 7 | `fork()`                                                                    | `java.util.concurrent.ForkJoinTask`                  |
|   +3.4% |    +5 |   2.9% → 3.0% |     148 → 153 | `grow(int)`                                                                 | `java.util.ArrayList`                                |
|     new |    +4 |   0.0% → 0.1% |         0 → 4 | `boxed()`                                                                   | `java.util.stream.DoublePipeline`                    |
|  +17.6% |    +3 |   0.3% → 0.4% |       17 → 20 | `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` | `java.security.AccessController`                     |
|  +20.0% |    +3 |   0.3% → 0.4% |       15 → 18 | `run()`                                                                     | `java.net.URLClassLoader$1`                          |
|  +20.0% |    +3 |   0.3% → 0.4% |       15 → 18 | `findClass(String)`                                                         | `java.net.URLClassLoader`                            |
|  +20.0% |    +3 |   0.3% → 0.4% |       15 → 18 | `loadClass(String, boolean)`                                                | `java.lang.ClassLoader`                              |
|     new |    +3 |   0.0% → 0.1% |         0 → 3 | `<init>(AbstractPipeline, int)`                                             | `java.util.stream.ReferencePipeline`                 |

##### JIT

| Change | Delta |            % | Samples | Function                   | Location    |
| -----: | ----: | -----------: | ------: | -------------------------- | ----------- |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `I2C/C2I adapters(0xbba)`  | `<unknown>` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `I2C/C2I adapters(0xbbab)` | `<unknown>` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `vtable stub`              | `<unknown>` |

##### Compiler

|  Change | Delta |            % | Samples | Function                                         | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------------ | -------------- |
| +150.0% |    +3 | <0.1% → 0.1% |   2 → 5 | `ciTypeFlow::df_flow_types`                      | `libjvm.dylib` |
| +150.0% |    +3 | <0.1% → 0.1% |   2 → 5 | `ciTypeFlow::flow_types`                         | `libjvm.dylib` |
| +150.0% |    +3 | <0.1% → 0.1% |   2 → 5 | `ciTypeFlow::do_flow`                            | `libjvm.dylib` |
| +150.0% |    +3 | <0.1% → 0.1% |   2 → 5 | `ciMethod::get_flow_analysis`                    | `libjvm.dylib` |
| +150.0% |    +3 | <0.1% → 0.1% |   2 → 5 | `PhaseChaitin::build_ifg_physical`               | `libjvm.dylib` |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `PhaseOutput::BuildOopMaps`                      | `libjvm.dylib` |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `CompileBroker::create_compile_task`             | `libjvm.dylib` |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `CompileBroker::compile_method_base`             | `libjvm.dylib` |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `LIRGenerator::block_do`                         | `libjvm.dylib` |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `BlockList::iterate_forward`                     | `libjvm.dylib` |
|  +22.2% |    +2 |         0.2% |  9 → 11 | `PhaseChaitin::Register_Allocate`                | `libjvm.dylib` |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `PhaseChaitin::gather_lrg_masks`                 | `libjvm.dylib` |
|  +66.7% |    +2 |         0.1% |   3 → 5 | `Compilation::build_hir`                         | `libjvm.dylib` |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `GraphBuilder::invoke`                           | `libjvm.dylib` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `LinearScanWalker::activate_current`             | `libjvm.dylib` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `GraphBuilder::try_inline_full`                  | `libjvm.dylib` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `GraphBuilder::try_inline`                       | `libjvm.dylib` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `LinearScan::assign_reg_num`                     | `libjvm.dylib` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `Assembler::operand_valid_for_logical_immediate` | `libjvm.dylib` |
|  +50.0% |    +1 | <0.1% → 0.1% |   2 → 3 | `ciTypeFlow::StateVector::apply_one_bytecode`    | `libjvm.dylib` |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

| Change | Delta |             % |       Samples | Function                                             | Location                                                               |
| -----: | ----: | ------------: | ------------: | ---------------------------------------------------- | ---------------------------------------------------------------------- |
|  -9.9% |  -208 | 40.4% → 37.0% | 2,097 → 1,889 | `computeDirectly()`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -4.3% |  -204 | 90.7% → 88.2% | 4,708 → 4,504 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                                   |
|  -4.3% |  -203 | 90.7% → 88.2% | 4,707 → 4,504 | `compute()`                                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  -4.2% |  -200 | 91.1% → 88.6% | 4,727 → 4,527 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                                    |
|  -4.2% |  -198 | 91.1% → 88.7% | 4,727 → 4,529 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
|  -4.3% |  -197 | 87.7% → 85.2% | 4,549 → 4,352 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                                    |
|  -4.3% |  -197 | 87.7% → 85.2% | 4,549 → 4,352 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                                    |
|  -4.5% |  -196 | 84.1% → 81.6% | 4,361 → 4,165 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
|  -4.0% |  -188 | 91.2% → 88.9% | 4,730 → 4,542 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                                    |
| -10.3% |  -160 | 30.1% → 27.4% | 1,559 → 1,399 | `findNearestCentroid()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -1.4% |   -67 | 95.0% → 95.2% | 4,929 → 4,862 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                                    |
|  -1.4% |   -67 | 95.0% → 95.2% | 4,929 → 4,862 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`                            |
|  -5.0% |   -50 | 19.2% → 18.5% |     997 → 947 | `distance(Double[], Double[])`                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| -11.1% |   -50 |   8.7% → 7.9% |     451 → 401 | `merge(Map, Map)`                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| -10.9% |   -49 |   8.6% → 7.8% |     448 → 399 | `combineResults(Map, Map)`                           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| -11.0% |   -47 |   8.2% → 7.4% |     427 → 380 | `lambda$merge$7(Map, Object, List)`                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| -11.0% |   -47 |   8.2% → 7.4% |     427 → 380 | `accept(Object, Object)`                             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186d88` |
| -10.5% |   -47 |   8.6% → 7.9% |     448 → 401 | `combineResults(Object, Object)`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -8.6% |   -46 |  10.4% → 9.6% |     537 → 491 | `collectClusters(int[])`                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| -10.8% |   -46 |   8.2% → 7.4% |     426 → 380 | `merge(Object, Object, BiFunction)`                  | `java.util.HashMap`                                                    |

##### Ours

|  Change | Delta |             % |       Samples | Function                                | Location                                                               |
| ------: | ----: | ------------: | ------------: | --------------------------------------- | ---------------------------------------------------------------------- |
|   -9.9% |  -208 | 40.4% → 37.0% | 2,097 → 1,889 | `computeDirectly()`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -4.3% |  -203 | 90.7% → 88.2% | 4,707 → 4,504 | `compute()`                             | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  -10.3% |  -160 | 30.1% → 27.4% | 1,559 → 1,399 | `findNearestCentroid()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -5.0% |   -50 | 19.2% → 18.5% |     997 → 947 | `distance(Double[], Double[])`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -11.1% |   -50 |   8.7% → 7.9% |     451 → 401 | `merge(Map, Map)`                       | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -10.9% |   -49 |   8.6% → 7.8% |     448 → 399 | `combineResults(Map, Map)`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -11.0% |   -47 |   8.2% → 7.4% |     427 → 380 | `lambda$merge$7(Map, Object, List)`     | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -11.0% |   -47 |   8.2% → 7.4% |     427 → 380 | `accept(Object, Object)`                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186d88` |
|  -10.5% |   -47 |   8.6% → 7.9% |     448 → 401 | `combineResults(Object, Object)`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -8.6% |   -46 |  10.4% → 9.6% |     537 → 491 | `collectClusters(int[])`                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -10.4% |   -34 |   6.3% → 5.7% |     327 → 293 | `lambda$merge$6(List, List)`            | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -9.8% |   -32 |   6.3% → 5.8% |     327 → 295 | `apply(Object, Object)`                 | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186fd0` |
|   -6.2% |   -31 |   9.7% → 9.2% |     503 → 472 | `lambda$run$0(int, List, int)`          | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -6.2% |   -31 |   9.7% → 9.2% |     503 → 472 | `call()`                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801183d68` |
|   -0.3% |    -2 | 14.9% → 15.1% |     774 → 772 | `average(List)`                         | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| removed |    -2 |  <0.1% → 0.0% |         2 → 0 | `<init>(JavaKMeans, List)`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| removed |    -2 |  <0.1% → 0.0% |         2 → 0 | `deleteRecursively(Path, boolean)`      | `org.renaissance.core.DirUtils`                                        |
| removed |    -2 |  <0.1% → 0.0% |         2 → 0 | `deleteRecursively(Path)`               | `org.renaissance.core.DirUtils`                                        |
| removed |    -2 |  <0.1% → 0.0% |         2 → 0 | `lambda$createScratchDirectory$1(Path)` | `org.renaissance.core.DirUtils`                                        |
| removed |    -2 |  <0.1% → 0.0% |         2 → 0 | `run()`                                 | `org.renaissance.core.DirUtils$$Lambda.0x0000000801003a68`             |

##### Native

| Change | Delta |            % |   Samples | Function                                                                        | Location                  |
| -----: | ----: | -----------: | --------: | ------------------------------------------------------------------------------- | ------------------------- |
| -13.9% |   -27 |  3.7% → 3.3% | 194 → 167 | `MemAllocator::allocate`                                                        | `libjvm.dylib`            |
| -12.9% |   -26 |  3.9% → 3.4% | 201 → 175 | `forward_copy_longs`                                                            | `<unknown>`               |
| -12.1% |   -23 |  3.7% → 3.3% | 190 → 167 | `OptoRuntime::new_array_C`                                                      | `libjvm.dylib`            |
| -11.8% |   -22 |  3.6% → 3.2% | 186 → 164 | `CollectedHeap::array_allocate`                                                 | `libjvm.dylib`            |
| -11.5% |   -22 |  3.7% → 3.3% | 192 → 170 | `_new_array_Java`                                                               | `<unknown>`               |
| -13.7% |   -20 |  2.8% → 2.5% | 146 → 126 | `JvmtiSampledObjectAllocEventCollector::~JvmtiSampledObjectAllocEventCollector` | `libjvm.dylib`            |
|  -8.9% |   -19 |  4.1% → 3.8% | 213 → 194 | `Thread::call_run`                                                              | `libjvm.dylib`            |
|  -8.9% |   -19 |  4.1% → 3.8% | 213 → 194 | `thread_native_entry`                                                           | `libjvm.dylib`            |
|  -9.9% |   -18 |  3.5% → 3.2% | 181 → 163 | `arrayof_jint_disjoint_arraycopy`                                               | `<unknown>`               |
|  -8.5% |   -18 |  4.1% → 3.8% | 213 → 195 | `_pthread_start`                                                                | `libsystem_pthread.dylib` |
|  -8.5% |   -18 |  4.1% → 3.8% | 213 → 195 | `thread_start`                                                                  | `libsystem_pthread.dylib` |
| -12.8% |   -18 |  2.7% → 2.4% | 141 → 123 | `JvmtiExport::post_sampled_object_alloc`                                        | `libjvm.dylib`            |
| -12.5% |   -18 |  2.8% → 2.5% | 144 → 126 | `JvmtiObjectAllocEventCollector::generate_call_for_allocated`                   | `libjvm.dylib`            |
|  -9.7% |   -17 |  3.4% → 3.1% | 176 → 159 | `InstanceKlass::allocate_objArray`                                              | `libjvm.dylib`            |
| -10.5% |   -16 |  2.9% → 2.7% | 152 → 136 | `MemAllocator::Allocation::notify_allocation_jvmti_sampler`                     | `libjvm.dylib`            |
| -88.2% |   -15 | 0.3% → <0.1% |    17 → 2 | `G1AdjustRegionClosure::do_heap_region`                                         | `libjvm.dylib`            |
| -88.2% |   -15 | 0.3% → <0.1% |    17 → 2 | `G1FullGCAdjustTask::work`                                                      | `libjvm.dylib`            |
| -87.5% |   -14 | 0.3% → <0.1% |    16 → 2 | `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>`                 | `libjvm.dylib`            |
| -12.5% |   -13 |  2.0% → 1.8% |  104 → 91 | `JvmtiEnv::GetStackTrace`                                                       | `libjvm.dylib`            |
|  -9.8% |   -13 |  2.6% → 2.3% | 133 → 120 | `ObjectSampler::recordAllocation`                                               | `libasyncProfiler.dylib`  |

##### Standard library

|  Change | Delta |             % |       Samples | Function                                             | Location                                             |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------- | ---------------------------------------------------- |
|   -4.3% |  -204 | 90.7% → 88.2% | 4,708 → 4,504 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                 |
|   -4.2% |  -200 | 91.1% → 88.6% | 4,727 → 4,527 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                  |
|   -4.2% |  -198 | 91.1% → 88.7% | 4,727 → 4,529 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|   -4.3% |  -197 | 87.7% → 85.2% | 4,549 → 4,352 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                  |
|   -4.3% |  -197 | 87.7% → 85.2% | 4,549 → 4,352 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                  |
|   -4.5% |  -196 | 84.1% → 81.6% | 4,361 → 4,165 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|   -4.0% |  -188 | 91.2% → 88.9% | 4,730 → 4,542 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                  |
|   -1.4% |   -67 | 95.0% → 95.2% | 4,929 → 4,862 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                  |
|   -1.4% |   -67 | 95.0% → 95.2% | 4,929 → 4,862 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`          |
|  -10.8% |   -46 |   8.2% → 7.4% |     426 → 380 | `merge(Object, Object, BiFunction)`                  | `java.util.HashMap`                                  |
|  -10.6% |   -46 |   8.3% → 7.6% |     432 → 386 | `forEach(BiConsumer)`                                | `java.util.HashMap`                                  |
|  -17.7% |   -39 |   4.2% → 3.5% |     220 → 181 | `get(int)`                                           | `java.util.ArrayList`                                |
|  -18.7% |   -35 |   3.6% → 3.0% |     187 → 152 | `elementData(int)`                                   | `java.util.ArrayList`                                |
|  -14.7% |   -32 |   4.2% → 3.6% |     218 → 186 | `toArray()`                                          | `java.util.ArrayList`                                |
|   -6.2% |   -31 |   9.7% → 9.2% |     503 → 472 | `exec()`                                             | `java.util.concurrent.ForkJoinTask$AdaptedCallable`  |
| removed |   -31 |   0.6% → 0.0% |        31 → 0 | `invokeStatic(Object, Object)`                       | `java.lang.invoke.LambdaForm$DMH.0x0000000801004800` |
| removed |   -31 |   0.6% → 0.0% |        31 → 0 | `invoke(Object, Object, Object)`                     | `java.lang.invoke.LambdaForm$MH.0x0000000801009800`  |
|  -27.3% |   -30 |   2.1% → 1.6% |      110 → 80 | `<init>(Collection)`                                 | `java.util.ArrayList`                                |
|  -12.3% |   -23 |   3.6% → 3.2% |     187 → 164 | `computeIfAbsent(Object, Function)`                  | `java.util.HashMap`                                  |
|   -7.2% |   -22 |   5.9% → 5.5% |     304 → 282 | `copyOf(Object[], int)`                              | `java.util.Arrays`                                   |

##### JIT

| Change | Delta |           % | Samples | Function      | Location    |
| -----: | ----: | ----------: | ------: | ------------- | ----------- |
| -11.9% |    -8 | 1.3% → 1.2% | 67 → 59 | `zero_blocks` | `<unknown>` |

##### Compiler

|  Change | Delta |            % | Samples | Function                                   | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------ | -------------- |
|  -20.6% |   -13 |  1.2% → 1.0% | 63 → 50 | `Compile::Compile`                         | `libjvm.dylib` |
|  -20.6% |   -13 |  1.2% → 1.0% | 63 → 50 | `C2Compiler::compile_method`               | `libjvm.dylib` |
|  -14.8% |   -12 |  1.6% → 1.4% | 81 → 69 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
|  -12.9% |   -12 |  1.8% → 1.6% | 93 → 81 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib` |
|  -20.0% |    -6 |  0.6% → 0.5% | 30 → 24 | `Compile::Code_Gen`                        | `libjvm.dylib` |
|  -57.1% |    -4 |         0.1% |   7 → 3 | `PhaseCFG::global_code_motion`             | `libjvm.dylib` |
|  -57.1% |    -4 |         0.1% |   7 → 3 | `PhaseCFG::do_global_code_motion`          | `libjvm.dylib` |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `PhaseCFG::schedule_late`                  | `libjvm.dylib` |
|  -42.9% |    -3 |         0.1% |   7 → 4 | `PhaseOutput::Output`                      | `libjvm.dylib` |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `Node_Backward_Iterator::next`             | `libjvm.dylib` |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `PhaseOutput::shorten_branches`            | `libjvm.dylib` |
|  -42.9% |    -3 |         0.1% |   7 → 4 | `LinearScan::do_linear_scan`               | `libjvm.dylib` |
|  -60.0% |    -3 | 0.1% → <0.1% |   5 → 2 | `Type::hashcons`                           | `libjvm.dylib` |
|  -40.0% |    -2 |         0.1% |   5 → 3 | `CompilationPolicy::event`                 | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `PhaseCoalesce::coalesce_driver`           | `libjvm.dylib` |
|  -11.1% |    -2 |         0.3% | 18 → 16 | `Compile::Optimize`                        | `libjvm.dylib` |
|  -66.7% |    -2 | 0.1% → <0.1% |   3 → 1 | `Scheduling::DoScheduling`                 | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `PhaseOutput::scratch_emit_size`           | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `GraphKit::gen_instanceof`                 | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `LinearScan::number_instructions`          | `libjvm.dylib` |

# Allocated heap profile diff

Allocated 3.07 GiB → 3.03 GiB (-41.263 MiB, -1.3%) over 75,095 samples → 74,967 samples (42.8 KiB → 42.4 KiB per sample).

| Category         | Change |        Delta |     % |                Size |         Samples |
| ---------------- | -----: | -----------: | ----: | ------------------: | --------------: |
| Standard library |  -1.3% |  -41.393 MiB | 99.8% | 3.06 GiB → 3.02 GiB | 69,874 → 69,639 |
| Ours             |  +2.0% | +132.726 KiB |  0.2% | 6.61 MiB → 6.74 MiB |   5,221 → 5,328 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|  Change |        Delta |            % |                Size |       Samples | Function                                                       | Location                                                   |
| ------: | -----------: | -----------: | ------------------: | ------------: | -------------------------------------------------------------- | ---------------------------------------------------------- |
|   +2.0% | +130.843 KiB |         0.2% | 6.53 MiB → 6.66 MiB | 3,477 → 3,545 | `findNearestCentroid()`                                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|     new |   +8.015 KiB | 0.0% → <0.1% |      0 B → 8.02 KiB |         0 → 1 | `<init>(InputStream, int)`                                     | `java.util.jar.Manifest$FastInputStream`                   |
|  +23.4% |   +3.234 KiB |        <0.1% | 13.8 KiB → 17.1 KiB |     295 → 364 | `createSubtask(int, int)`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|     new |   +1.562 KiB | 0.0% → <0.1% |      0 B → 1.56 KiB |         0 → 3 | `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])` | `java.util.concurrent.ConcurrentHashMap`                   |
|   +9.1% |   +1.257 KiB |        <0.1% | 13.9 KiB → 15.1 KiB |     254 → 277 | `createSubtask(int, int)`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|     new |       +664 B | 0.0% → <0.1% |         0 B → 664 B |         0 → 1 | `load(DataInputStream)`                                        | `sun.util.calendar.ZoneInfoFile`                           |
|   +2.1% |       +560 B |        <0.1% |   26 KiB → 26.5 KiB |     475 → 485 | `grow(int)`                                                    | `java.util.ArrayList`                                      |
|  +84.6% |       +264 B |        <0.1% |       312 B → 576 B |       13 → 24 | `builder(long, IntFunction)`                                   | `java.util.stream.Nodes`                                   |
|  +10.3% |       +160 B |        <0.1% | 1.52 KiB → 1.68 KiB |       39 → 43 | `lambda$generateData$4(int)`                                   | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|   +2.9% |       +144 B |        <0.1% | 4.78 KiB → 4.92 KiB |     204 → 210 | `lambda$collectClusters$0(Double[])`                           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +31.6% |       +144 B |        <0.1% |       456 B → 600 B |       19 → 25 | `opWrapSink(int, Sink)`                                        | `java.util.stream.IntPipeline$1`                           |
|   +0.7% |       +112 B |        <0.1% | 15.5 KiB → 15.6 KiB |     194 → 228 | `resize()`                                                     | `java.util.HashMap`                                        |
|     new |       +112 B | 0.0% → <0.1% |         0 B → 112 B |         0 → 1 | `<clinit>()`                                                   | `jdk.internal.math.FloatingDecimal`                        |
|     new |        +64 B | 0.0% → <0.1% |          0 B → 64 B |         0 → 1 | `allocateUninitializedArray0(Class, int)`                      | `jdk.internal.misc.Unsafe`                                 |
|     new |        +56 B | 0.0% → <0.1% |          0 B → 56 B |         0 → 1 | `compress(char[], int, int)`                                   | `java.lang.StringUTF16`                                    |
| +100.0% |        +40 B |        <0.1% |         40 B → 80 B |         1 → 2 | `lambda$boxed$0(int)`                                          | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|   +0.2% |        +32 B |        <0.1% |            16.8 KiB |     538 → 539 | `newNode(int, Object, Object, HashMap$Node)`                   | `java.util.HashMap`                                        |
|     new |        +32 B | 0.0% → <0.1% |          0 B → 32 B |         0 → 1 | `iterator()`                                                   | `java.util.HashMap$EntrySet`                               |
|  +33.3% |        +24 B |        <0.1% |         72 B → 96 B |         3 → 4 | `awaitDone(int, long)`                                         | `java.util.concurrent.ForkJoinTask`                        |
|  +50.0% |        +24 B |        <0.1% |         48 B → 72 B |         2 → 3 | `<init>(JavaKMeans, Map)`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

##### Standard library

| Change |      Delta |            % |                Size |   Samples | Function                                                       | Location                                       |
| -----: | ---------: | -----------: | ------------------: | --------: | -------------------------------------------------------------- | ---------------------------------------------- |
|    new | +8.015 KiB | 0.0% → <0.1% |      0 B → 8.02 KiB |     0 → 1 | `<init>(InputStream, int)`                                     | `java.util.jar.Manifest$FastInputStream`       |
|    new | +1.562 KiB | 0.0% → <0.1% |      0 B → 1.56 KiB |     0 → 3 | `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])` | `java.util.concurrent.ConcurrentHashMap`       |
|    new |     +664 B | 0.0% → <0.1% |         0 B → 664 B |     0 → 1 | `load(DataInputStream)`                                        | `sun.util.calendar.ZoneInfoFile`               |
|  +2.1% |     +560 B |        <0.1% |   26 KiB → 26.5 KiB | 475 → 485 | `grow(int)`                                                    | `java.util.ArrayList`                          |
| +84.6% |     +264 B |        <0.1% |       312 B → 576 B |   13 → 24 | `builder(long, IntFunction)`                                   | `java.util.stream.Nodes`                       |
| +31.6% |     +144 B |        <0.1% |       456 B → 600 B |   19 → 25 | `opWrapSink(int, Sink)`                                        | `java.util.stream.IntPipeline$1`               |
|  +0.7% |     +112 B |        <0.1% | 15.5 KiB → 15.6 KiB | 194 → 228 | `resize()`                                                     | `java.util.HashMap`                            |
|    new |     +112 B | 0.0% → <0.1% |         0 B → 112 B |     0 → 1 | `<clinit>()`                                                   | `jdk.internal.math.FloatingDecimal`            |
|    new |      +64 B | 0.0% → <0.1% |          0 B → 64 B |     0 → 1 | `allocateUninitializedArray0(Class, int)`                      | `jdk.internal.misc.Unsafe`                     |
|    new |      +56 B | 0.0% → <0.1% |          0 B → 56 B |     0 → 1 | `compress(char[], int, int)`                                   | `java.lang.StringUTF16`                        |
|  +0.2% |      +32 B |        <0.1% |            16.8 KiB | 538 → 539 | `newNode(int, Object, Object, HashMap$Node)`                   | `java.util.HashMap`                            |
|    new |      +32 B | 0.0% → <0.1% |          0 B → 32 B |     0 → 1 | `iterator()`                                                   | `java.util.HashMap$EntrySet`                   |
| +33.3% |      +24 B |        <0.1% |         72 B → 96 B |     3 → 4 | `awaitDone(int, long)`                                         | `java.util.concurrent.ForkJoinTask`            |
|  +5.3% |      +24 B |        <0.1% |       456 B → 480 B |   19 → 20 | `allocateInstance(Object)`                                     | `java.lang.invoke.DirectMethodHandle`          |
|    new |      +24 B | 0.0% → <0.1% |          0 B → 24 B |     0 → 1 | `opWrapSink(int, Sink)`                                        | `java.util.stream.DoublePipeline$1`            |
|    new |      +16 B | 0.0% → <0.1% |          0 B → 16 B |     0 → 1 | `getBytes()`                                                   | `jdk.internal.loader.URLClassPath$JarLoader$2` |
|    new |      +16 B | 0.0% → <0.1% |          0 B → 16 B |     0 → 1 | `hashCode()`                                                   | `java.lang.invoke.MemberName`                  |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |        Delta |            % |                Size |         Samples | Function                                                                                             | Location                                                   |
| ------: | -----------: | -----------: | ------------------: | --------------: | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
|   -1.3% |  -40.452 MiB |        99.6% | 3.06 GiB → 3.02 GiB | 68,206 → 67,962 | `copyOf(Object[], int)`                                                                              | `java.util.Arrays`                                         |
|  -10.6% | -592.578 KiB |         0.2% | 5.44 MiB → 4.86 MiB |         33 → 26 | `copyOf(Object[], int, Class)`                                                                       | `java.util.Arrays`                                         |
|  -90.8% | -157.578 KiB |        <0.1% |    174 KiB → 16 KiB |           2 → 1 | `readNBytes(int)`                                                                                    | `java.io.InputStream`                                      |
|  -36.1% | -137.968 KiB |        <0.1% |   383 KiB → 245 KiB |              12 | `<init>(InputStream, Inflater, int)`                                                                 | `java.util.zip.InflaterInputStream`                        |
|  -20.0% |  -64.984 KiB |        <0.1% |   325 KiB → 260 KiB |         25 → 26 | `copyOf(byte[], int)`                                                                                | `java.util.Arrays`                                         |
| removed |  -16.015 KiB | <0.1% → 0.0% |        16 KiB → 0 B |           1 → 0 | `transferTo(OutputStream)`                                                                           | `java.io.InputStream`                                      |
| removed |   -1.531 KiB | <0.1% → 0.0% |      1.53 KiB → 0 B |           2 → 0 | `enlarge(int)`                                                                                       | `jdk.internal.org.objectweb.asm.ByteVector`                |
|  -10.1% |   -1.078 KiB |        <0.1% | 10.7 KiB → 9.61 KiB |       228 → 205 | `collectClusters(int[])`                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |       -952 B | <0.1% → 0.0% |         952 B → 0 B |           1 → 0 | `<init>(int)`                                                                                        | `jdk.internal.org.objectweb.asm.ByteVector`                |
|  -10.1% |       -896 B |        <0.1% |  8.7 KiB → 7.82 KiB |       159 → 143 | `add(double[], double[])`                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -20.9% |       -784 B |        <0.1% |  3.66 KiB → 2.9 KiB |         67 → 53 | `intStream(Spliterator$OfInt, boolean)`                                                              | `java.util.stream.StreamSupport`                           |
| removed |       -584 B | <0.1% → 0.0% |         584 B → 0 B |           1 → 0 | `load(DataInputStream)`                                                                              | `java.time.zone.TzdbZoneRulesProvider`                     |
|  -12.8% |       -336 B |        <0.1% | 2.57 KiB → 2.24 KiB |         47 → 41 | `mapToObj(IntFunction, int)`                                                                         | `java.util.stream.IntPipeline`                             |
|  -10.2% |       -312 B |        <0.1% |     3 KiB → 2.7 KiB |       128 → 115 | `valueOf(double)`                                                                                    | `java.lang.Double`                                         |
|   -4.5% |       -288 B |        <0.1% |    6.28 KiB → 6 KiB |       134 → 128 | `merge(Map, Map)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -31.6% |       -288 B |        <0.1% |       912 B → 624 B |         19 → 13 | `computeClusterAverages()`                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -80.6% |       -232 B |        <0.1% |        288 B → 56 B |           3 → 2 | `copyOfRangeByte(byte[], int, int)`                                                                  | `java.util.Arrays`                                         |
|  -82.4% |       -224 B |        <0.1% |        272 B → 48 B |               1 | `fillInStackTrace(int)`                                                                              | `java.lang.Throwable`                                      |
|   -3.8% |       -216 B |        <0.1% | 5.58 KiB → 5.37 KiB |       238 → 229 | `lambda$merge$6(List, List)`                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |       -152 B | <0.1% → 0.0% |         152 B → 0 B |           2 → 0 | `defineClass0(ClassLoader, Class, String, byte[], int, int, ProtectionDomain, boolean, int, Object)` | `java.lang.ClassLoader`                                    |

##### Standard library

|  Change |        Delta |            % |                Size |         Samples | Function                                                                                             | Location                                    |
| ------: | -----------: | -----------: | ------------------: | --------------: | ---------------------------------------------------------------------------------------------------- | ------------------------------------------- |
|   -1.3% |  -40.452 MiB |        99.6% | 3.06 GiB → 3.02 GiB | 68,206 → 67,962 | `copyOf(Object[], int)`                                                                              | `java.util.Arrays`                          |
|  -10.6% | -592.578 KiB |         0.2% | 5.44 MiB → 4.86 MiB |         33 → 26 | `copyOf(Object[], int, Class)`                                                                       | `java.util.Arrays`                          |
|  -90.8% | -157.578 KiB |        <0.1% |    174 KiB → 16 KiB |           2 → 1 | `readNBytes(int)`                                                                                    | `java.io.InputStream`                       |
|  -36.1% | -137.968 KiB |        <0.1% |   383 KiB → 245 KiB |              12 | `<init>(InputStream, Inflater, int)`                                                                 | `java.util.zip.InflaterInputStream`         |
|  -20.0% |  -64.984 KiB |        <0.1% |   325 KiB → 260 KiB |         25 → 26 | `copyOf(byte[], int)`                                                                                | `java.util.Arrays`                          |
| removed |  -16.015 KiB | <0.1% → 0.0% |        16 KiB → 0 B |           1 → 0 | `transferTo(OutputStream)`                                                                           | `java.io.InputStream`                       |
| removed |   -1.531 KiB | <0.1% → 0.0% |      1.53 KiB → 0 B |           2 → 0 | `enlarge(int)`                                                                                       | `jdk.internal.org.objectweb.asm.ByteVector` |
| removed |       -952 B | <0.1% → 0.0% |         952 B → 0 B |           1 → 0 | `<init>(int)`                                                                                        | `jdk.internal.org.objectweb.asm.ByteVector` |
|  -20.9% |       -784 B |        <0.1% |  3.66 KiB → 2.9 KiB |         67 → 53 | `intStream(Spliterator$OfInt, boolean)`                                                              | `java.util.stream.StreamSupport`            |
| removed |       -584 B | <0.1% → 0.0% |         584 B → 0 B |           1 → 0 | `load(DataInputStream)`                                                                              | `java.time.zone.TzdbZoneRulesProvider`      |
|  -12.8% |       -336 B |        <0.1% | 2.57 KiB → 2.24 KiB |         47 → 41 | `mapToObj(IntFunction, int)`                                                                         | `java.util.stream.IntPipeline`              |
|  -10.2% |       -312 B |        <0.1% |     3 KiB → 2.7 KiB |       128 → 115 | `valueOf(double)`                                                                                    | `java.lang.Double`                          |
|  -80.6% |       -232 B |        <0.1% |        288 B → 56 B |           3 → 2 | `copyOfRangeByte(byte[], int, int)`                                                                  | `java.util.Arrays`                          |
|  -82.4% |       -224 B |        <0.1% |        272 B → 48 B |               1 | `fillInStackTrace(int)`                                                                              | `java.lang.Throwable`                       |
| removed |       -152 B | <0.1% → 0.0% |         152 B → 0 B |           2 → 0 | `defineClass0(ClassLoader, Class, String, byte[], int, int, ProtectionDomain, boolean, int, Object)` | `java.lang.ClassLoader`                     |
|  -23.1% |       -144 B |        <0.1% |       624 B → 480 B |         26 → 20 | `range(int, int)`                                                                                    | `java.util.stream.IntStream`                |
| removed |       -120 B | <0.1% → 0.0% |         120 B → 0 B |           1 → 0 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)`                      | `java.lang.ClassLoader`                     |
| removed |        -80 B | <0.1% → 0.0% |          80 B → 0 B |           2 → 0 | `spliterator(double[], int, int, int)`                                                               | `java.util.Spliterators`                    |
| removed |        -80 B | <0.1% → 0.0% |          80 B → 0 B |           1 → 0 | `<init>()`                                                                                           | `jdk.internal.org.objectweb.asm.ByteVector` |
| removed |        -64 B | <0.1% → 0.0% |          64 B → 0 B |           2 → 0 | `putVal(Object, Object, boolean)`                                                                    | `java.util.concurrent.ConcurrentHashMap`    |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|   Change |        Delta |             % |                Size |         Samples | Function                                                  | Location                                                        |
| -------: | -----------: | ------------: | ------------------: | --------------: | --------------------------------------------------------- | --------------------------------------------------------------- |
|    +0.6% |   +5.521 MiB | 30.1% → 30.7% |   946 MiB → 952 MiB | 59,118 → 59,224 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`                   |
|      new |   +5.286 MiB |   0.0% → 0.2% |      0 B → 5.29 MiB |         0 → 398 | `invokeStatic(Object, Object)`                            | `java.lang.invoke.LambdaForm$DMH.0x000000c801004800`            |
|      new |   +5.286 MiB |   0.0% → 0.2% |      0 B → 5.29 MiB |         0 → 398 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x000000c801009800`             |
|    +0.5% |   +5.073 MiB | 30.5% → 31.1% |   958 MiB → 963 MiB | 59,794 → 59,892 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                             |
|    +0.5% |   +5.073 MiB | 30.5% → 31.1% |   958 MiB → 963 MiB | 59,794 → 59,892 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                             |
|    +5.0% |   +3.284 MiB |   2.1% → 2.2% |   66 MiB → 69.3 MiB | 10,985 → 11,245 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                             |
|    +2.0% | +130.843 KiB |          0.2% | 6.53 MiB → 6.66 MiB |   3,477 → 3,545 | `findNearestCentroid()`                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`      |
|    +1.1% | +121.171 KiB |          0.4% | 11.2 MiB → 11.3 MiB | 16,626 → 16,673 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`      |
| +1022.8% |  +71.757 KiB |         <0.1% | 7.02 KiB → 78.8 KiB |           1 → 6 | `<init>()`                                                | `scala.collection.immutable.IndexedSeq$`                        |
| +1022.8% |  +71.757 KiB |         <0.1% | 7.02 KiB → 78.8 KiB |           1 → 6 | `<clinit>()`                                              | `scala.collection.immutable.IndexedSeq$`                        |
|  +126.9% |  +32.109 KiB |         <0.1% | 25.3 KiB → 57.4 KiB |           2 → 7 | `<clinit>()`                                              | `scala.collection.immutable.List$`                              |
|  +398.2% |  +27.937 KiB |         <0.1% |   7.02 KiB → 35 KiB |           1 → 4 | `<clinit>()`                                              | `scala.collection.immutable.Vector$`                            |
|   +33.7% |  +27.242 KiB |         <0.1% |  80.8 KiB → 108 KiB |               4 | `apply(Seq)`                                              | `scala.collection.MapFactory`                                   |
|   +33.7% |  +27.242 KiB |         <0.1% |  80.8 KiB → 108 KiB |               4 | `apply$(MapFactory, Seq)`                                 | `scala.collection.MapFactory`                                   |
|      new |  +26.476 KiB |  0.0% → <0.1% |      0 B → 26.5 KiB |           0 → 2 | `asJava(Map)`                                             | `scala.collection.convert.AsJavaConverters`                     |
|      new |  +26.476 KiB |  0.0% → <0.1% |      0 B → 26.5 KiB |           0 → 2 | `asJava$(AsJavaConverters, Map)`                          | `scala.collection.convert.AsJavaConverters`                     |
|      new |  +26.476 KiB |  0.0% → <0.1% |      0 B → 26.5 KiB |           0 → 2 | `asJava()`                                                | `scala.collection.convert.AsJavaExtensions$MutableMapHasAsJava` |
|  +106.6% |      +16 KiB |         <0.1% |     15 KiB → 31 KiB |               1 | `from(IterableOnce)`                                      | `scala.collection.mutable.LinkedHashMap$`                       |
|  +106.6% |      +16 KiB |         <0.1% |     15 KiB → 31 KiB |               1 | `apply(Seq)`                                              | `scala.collection.mutable.LinkedHashMap$`                       |
|      new |  +15.015 KiB |  0.0% → <0.1% |        0 B → 15 KiB |           0 → 1 | `mkString(String, String, String)`                        | `scala.collection.IterableOnceOps`                              |

##### Standard library

|   Change |       Delta |             % |                Size |         Samples | Function                                                  | Location                                                        |
| -------: | ----------: | ------------: | ------------------: | --------------: | --------------------------------------------------------- | --------------------------------------------------------------- |
|    +0.6% |  +5.521 MiB | 30.1% → 30.7% |   946 MiB → 952 MiB | 59,118 → 59,224 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`                   |
|      new |  +5.286 MiB |   0.0% → 0.2% |      0 B → 5.29 MiB |         0 → 398 | `invokeStatic(Object, Object)`                            | `java.lang.invoke.LambdaForm$DMH.0x000000c801004800`            |
|      new |  +5.286 MiB |   0.0% → 0.2% |      0 B → 5.29 MiB |         0 → 398 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x000000c801009800`             |
|    +0.5% |  +5.073 MiB | 30.5% → 31.1% |   958 MiB → 963 MiB | 59,794 → 59,892 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                             |
|    +0.5% |  +5.073 MiB | 30.5% → 31.1% |   958 MiB → 963 MiB | 59,794 → 59,892 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                             |
|    +5.0% |  +3.284 MiB |   2.1% → 2.2% |   66 MiB → 69.3 MiB | 10,985 → 11,245 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                             |
| +1022.8% | +71.757 KiB |         <0.1% | 7.02 KiB → 78.8 KiB |           1 → 6 | `<init>()`                                                | `scala.collection.immutable.IndexedSeq$`                        |
| +1022.8% | +71.757 KiB |         <0.1% | 7.02 KiB → 78.8 KiB |           1 → 6 | `<clinit>()`                                              | `scala.collection.immutable.IndexedSeq$`                        |
|  +126.9% | +32.109 KiB |         <0.1% | 25.3 KiB → 57.4 KiB |           2 → 7 | `<clinit>()`                                              | `scala.collection.immutable.List$`                              |
|  +398.2% | +27.937 KiB |         <0.1% |   7.02 KiB → 35 KiB |           1 → 4 | `<clinit>()`                                              | `scala.collection.immutable.Vector$`                            |
|   +33.7% | +27.242 KiB |         <0.1% |  80.8 KiB → 108 KiB |               4 | `apply(Seq)`                                              | `scala.collection.MapFactory`                                   |
|   +33.7% | +27.242 KiB |         <0.1% |  80.8 KiB → 108 KiB |               4 | `apply$(MapFactory, Seq)`                                 | `scala.collection.MapFactory`                                   |
|      new | +26.476 KiB |  0.0% → <0.1% |      0 B → 26.5 KiB |           0 → 2 | `asJava(Map)`                                             | `scala.collection.convert.AsJavaConverters`                     |
|      new | +26.476 KiB |  0.0% → <0.1% |      0 B → 26.5 KiB |           0 → 2 | `asJava$(AsJavaConverters, Map)`                          | `scala.collection.convert.AsJavaConverters`                     |
|      new | +26.476 KiB |  0.0% → <0.1% |      0 B → 26.5 KiB |           0 → 2 | `asJava()`                                                | `scala.collection.convert.AsJavaExtensions$MutableMapHasAsJava` |
|  +106.6% |     +16 KiB |         <0.1% |     15 KiB → 31 KiB |               1 | `from(IterableOnce)`                                      | `scala.collection.mutable.LinkedHashMap$`                       |
|  +106.6% |     +16 KiB |         <0.1% |     15 KiB → 31 KiB |               1 | `apply(Seq)`                                              | `scala.collection.mutable.LinkedHashMap$`                       |
|      new | +15.015 KiB |  0.0% → <0.1% |        0 B → 15 KiB |           0 → 1 | `mkString(String, String, String)`                        | `scala.collection.IterableOnceOps`                              |
|      new | +15.015 KiB |  0.0% → <0.1% |        0 B → 15 KiB |           0 → 1 | `mkString$(IterableOnceOps, String, String, String)`      | `scala.collection.IterableOnceOps`                              |
|      new | +15.015 KiB |  0.0% → <0.1% |        0 B → 15 KiB |           0 → 1 | `mkString(String, String, String)`                        | `scala.collection.AbstractIterable`                             |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

| Change |       Delta |             % |                Size |         Samples | Function                                             | Location                                                               |
| -----: | ----------: | ------------: | ------------------: | --------------: | ---------------------------------------------------- | ---------------------------------------------------------------------- |
|  -1.3% | -41.031 MiB |         99.8% | 3.06 GiB → 3.02 GiB | 68,239 → 67,988 | `copyOf(Object[], int)`                              | `java.util.Arrays`                                                     |
|  -1.3% | -40.516 MiB | 99.4% → 99.5% | 3.05 GiB → 3.01 GiB | 56,661 → 56,429 | `lambda$merge$6(List, List)`                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -1.3% | -40.516 MiB | 99.4% → 99.5% | 3.05 GiB → 3.01 GiB | 56,661 → 56,429 | `apply(Object, Object)`                              | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186fd0` |
|  -1.3% | -40.516 MiB | 99.4% → 99.5% | 3.05 GiB → 3.01 GiB | 56,664 → 56,432 | `merge(Object, Object, BiFunction)`                  | `java.util.HashMap`                                                    |
|  -1.3% | -40.516 MiB | 99.4% → 99.5% | 3.05 GiB → 3.01 GiB | 56,664 → 56,432 | `lambda$merge$7(Map, Object, List)`                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -1.3% | -40.516 MiB | 99.4% → 99.5% | 3.05 GiB → 3.01 GiB | 56,664 → 56,432 | `accept(Object, Object)`                             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186d88` |
|  -1.3% | -40.516 MiB | 99.4% → 99.5% | 3.05 GiB → 3.01 GiB | 56,664 → 56,432 | `forEach(BiConsumer)`                                | `java.util.HashMap`                                                    |
|  -1.3% | -40.516 MiB | 99.4% → 99.5% | 3.05 GiB → 3.01 GiB | 57,113 → 56,898 | `combineResults(Map, Map)`                           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -1.3% | -40.516 MiB | 99.4% → 99.5% | 3.05 GiB → 3.01 GiB | 57,113 → 56,898 | `combineResults(Object, Object)`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -1.3% | -40.516 MiB | 99.4% → 99.5% | 3.05 GiB → 3.01 GiB | 57,120 → 56,907 | `merge(Map, Map)`                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -1.3% | -40.394 MiB |         99.8% | 3.06 GiB → 3.02 GiB | 74,657 → 74,559 | `compute()`                                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  -1.3% | -40.394 MiB |         99.8% | 3.06 GiB → 3.02 GiB | 74,657 → 74,559 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                                   |
|  -1.3% | -40.394 MiB |         99.8% | 3.06 GiB → 3.02 GiB | 74,662 → 74,565 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                                    |
|  -1.3% | -40.394 MiB |         99.8% | 3.06 GiB → 3.02 GiB | 74,662 → 74,565 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
|  -1.3% | -40.394 MiB |         99.8% | 3.06 GiB → 3.02 GiB | 74,662 → 74,565 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                                    |
|  -1.3% | -40.394 MiB |         99.8% | 3.06 GiB → 3.02 GiB | 74,662 → 74,565 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                                    |
|  -1.3% | -40.394 MiB |         99.8% | 3.06 GiB → 3.02 GiB | 74,662 → 74,565 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`                            |
|  -1.5% | -37.181 MiB | 81.3% → 81.1% | 2.49 GiB → 2.46 GiB | 42,207 → 41,976 | `addAll(Collection)`                                 | `java.util.ArrayList`                                                  |
|  -1.4% | -28.437 MiB |         62.8% |  1.93 GiB → 1.9 GiB | 39,452 → 39,291 | `grow(int)`                                          | `java.util.ArrayList`                                                  |
|  -1.1% | -21.402 MiB | 62.5% → 62.7% |  1.92 GiB → 1.9 GiB | 14,930 → 15,055 | `lambda$run$0(int, List, int)`                       | `org.renaissance.jdk.concurrent.JavaKMeans`                            |

##### Standard library

|  Change |        Delta |             % |                Size |         Samples | Function                                             | Location                                             |
| ------: | -----------: | ------------: | ------------------: | --------------: | ---------------------------------------------------- | ---------------------------------------------------- |
|   -1.3% |  -41.031 MiB |         99.8% | 3.06 GiB → 3.02 GiB | 68,239 → 67,988 | `copyOf(Object[], int)`                              | `java.util.Arrays`                                   |
|   -1.3% |  -40.516 MiB | 99.4% → 99.5% | 3.05 GiB → 3.01 GiB | 56,664 → 56,432 | `merge(Object, Object, BiFunction)`                  | `java.util.HashMap`                                  |
|   -1.3% |  -40.516 MiB | 99.4% → 99.5% | 3.05 GiB → 3.01 GiB | 56,664 → 56,432 | `forEach(BiConsumer)`                                | `java.util.HashMap`                                  |
|   -1.3% |  -40.394 MiB |         99.8% | 3.06 GiB → 3.02 GiB | 74,657 → 74,559 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                 |
|   -1.3% |  -40.394 MiB |         99.8% | 3.06 GiB → 3.02 GiB | 74,662 → 74,565 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                  |
|   -1.3% |  -40.394 MiB |         99.8% | 3.06 GiB → 3.02 GiB | 74,662 → 74,565 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|   -1.3% |  -40.394 MiB |         99.8% | 3.06 GiB → 3.02 GiB | 74,662 → 74,565 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                  |
|   -1.3% |  -40.394 MiB |         99.8% | 3.06 GiB → 3.02 GiB | 74,662 → 74,565 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                  |
|   -1.3% |  -40.394 MiB |         99.8% | 3.06 GiB → 3.02 GiB | 74,662 → 74,565 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`          |
|   -1.5% |  -37.181 MiB | 81.3% → 81.1% | 2.49 GiB → 2.46 GiB | 42,207 → 41,976 | `addAll(Collection)`                                 | `java.util.ArrayList`                                |
|   -1.4% |  -28.437 MiB |         62.8% |  1.93 GiB → 1.9 GiB | 39,452 → 39,291 | `grow(int)`                                          | `java.util.ArrayList`                                |
|   -1.1% |  -21.402 MiB | 62.5% → 62.7% |  1.92 GiB → 1.9 GiB | 14,930 → 15,055 | `exec()`                                             | `java.util.concurrent.ForkJoinTask$AdaptedCallable`  |
|   -1.1% |    -21.4 MiB | 62.5% → 62.7% |  1.92 GiB → 1.9 GiB | 15,204 → 15,374 | `invoke()`                                           | `java.util.concurrent.ForkJoinTask`                  |
|   -1.1% |  -12.593 MiB | 36.9% → 37.0% | 1.13 GiB → 1.12 GiB | 29,262 → 29,182 | `toArray()`                                          | `java.util.ArrayList`                                |
| removed |   -6.139 MiB |   0.2% → 0.0% |      6.14 MiB → 0 B |         426 → 0 | `invokeStatic(Object, Object)`                       | `java.lang.invoke.LambdaForm$DMH.0x0000000801004800` |
| removed |   -6.139 MiB |   0.2% → 0.0% |      6.14 MiB → 0 B |         426 → 0 | `invoke(Object, Object, Object)`                     | `java.lang.invoke.LambdaForm$MH.0x0000000801009800`  |
|   -0.6% |   -3.335 MiB | 18.2% → 18.3% |   572 MiB → 568 MiB | 14,216 → 14,224 | `<init>(Collection)`                                 | `java.util.ArrayList`                                |
|  -13.9% | -873.226 KiB |          0.2% | 6.14 MiB → 5.29 MiB |       426 → 398 | `invokeExact_MT(Object, Object, Object, Object)`     | `java.lang.invoke.Invokers$Holder`                   |
|  -13.9% | -873.226 KiB |          0.2% | 6.14 MiB → 5.29 MiB |       426 → 398 | `invokeImpl(Object, Object[])`                       | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  -13.9% | -873.226 KiB |          0.2% | 6.14 MiB → 5.29 MiB |       426 → 398 | `invoke(Object, Object[])`                           | `jdk.internal.reflect.DirectMethodHandleAccessor`    |

# Lock contention profile diff

Blocked 2.7ms → 1.6ms (-1.11ms, -41.1%) over 28 contentions → 9 contentions (96.7µs → 177.2µs per contention).

| Category         | Change |   Delta |      % |          Time | Contentions |
| ---------------- | -----: | ------: | -----: | ------------: | ----------: |
| Standard library | -41.1% | -1.11ms | 100.0% | 2.7ms → 1.6ms |      28 → 9 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time blocked directly in the function body, excluding callees.

##### Standard library

|   Change |   Delta |           % |           Time | Contentions | Function                                         | Location                                            |
| -------: | ------: | ----------: | -------------: | ----------: | ------------------------------------------------ | --------------------------------------------------- |
| +1156.4% | +0.04ms | 0.1% → 2.8% | 3.5µs → 44.5µs |           1 | `<init>(Collection, int)`                        | `java.nio.file.FileTreeWalker`                      |
|  +551.9% | +0.02ms | 0.1% → 1.4% | 3.5µs → 23.1µs |           1 | `<init>(UnixPath, long, DirectoryStream$Filter)` | `sun.nio.fs.UnixDirectoryStream`                    |
|   +20.1% | +0.01ms | 1.8% → 3.7% | 49.3µs → 0.1ms |       1 → 2 | `<init>(boolean)`                                | `java.util.concurrent.locks.ReentrantReadWriteLock` |

#### Improvements

Functions with the largest decrease in time blocked directly in the function body, excluding callees.

##### Standard library

|  Change |   Delta |             % |          Time | Contentions | Function                                                                                             | Location                                 |
| ------: | ------: | ------------: | ------------: | ----------: | ---------------------------------------------------------------------------------------------------- | ---------------------------------------- |
|  -30.1% | -0.53ms | 64.8% → 77.0% | 1.8ms → 1.2ms |       7 → 4 | `loadClass(String, boolean)`                                                                         | `java.lang.ClassLoader`                  |
| removed | -0.30ms |  11.1% → 0.0% |   0.3ms → 0ms |       5 → 0 | `doubleStream(Spliterator$OfDouble, boolean)`                                                        | `java.util.stream.StreamSupport`         |
| removed | -0.19ms |   7.2% → 0.0% |   0.2ms → 0ms |       7 → 0 | `opWrapSink(int, Sink)`                                                                              | `java.util.stream.DoublePipeline$1`      |
|  -29.8% | -0.10ms | 12.7% → 15.1% | 0.3ms → 0.2ms |       2 → 1 | `loadClassOrNull(String, boolean)`                                                                   | `jdk.internal.loader.BuiltinClassLoader` |
| removed | -0.03ms |   1.2% → 0.0% |  32.5µs → 0ms |       2 → 0 | `mapToObj(DoubleFunction, int)`                                                                      | `java.util.stream.DoublePipeline`        |
| removed | -0.01ms |   0.5% → 0.0% |  14.5µs → 0ms |       1 → 0 | `defineClass0(ClassLoader, Class, String, byte[], int, int, ProtectionDomain, boolean, int, Object)` | `java.lang.ClassLoader`                  |
| removed | -0.01ms |   0.4% → 0.0% |  10.0µs → 0ms |       1 → 0 | `newDirectoryStream(Path)`                                                                           | `java.nio.file.Files`                    |

### Total time

#### Regressions

Functions with the largest increase in total time blocked in the function and all its callees.

|   Change |   Delta |            % |           Time | Contentions | Function                                           | Location                                                               |
| -------: | ------: | -----------: | -------------: | ----------: | -------------------------------------------------- | ---------------------------------------------------------------------- |
|  +173.3% | +0.23ms | 4.9% → 22.9% |  0.1ms → 0.4ms |       3 → 1 | `invoke()`                                         | `java.util.concurrent.ForkJoinTask`                                    |
|  +173.3% | +0.23ms | 4.9% → 22.9% |  0.1ms → 0.4ms |       3 → 1 | `lambda$run$0(int, List, int)`                     | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +173.3% | +0.23ms | 4.9% → 22.9% |  0.1ms → 0.4ms |       3 → 1 | `call()`                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801183d68` |
|  +173.3% | +0.23ms | 4.9% → 22.9% |  0.1ms → 0.4ms |       3 → 1 | `exec()`                                           | `java.util.concurrent.ForkJoinTask$AdaptedCallable`                    |
|   +75.4% | +0.05ms |  2.7% → 8.0% |          0.1ms |       5 → 4 | `walkFileTree(Path, Set, int, FileVisitor)`        | `java.nio.file.Files`                                                  |
|   +75.4% | +0.05ms |  2.7% → 8.0% |          0.1ms |       5 → 4 | `walkFileTree(Path, FileVisitor)`                  | `java.nio.file.Files`                                                  |
| +1156.4% | +0.04ms |  0.1% → 2.8% | 3.5µs → 44.5µs |           1 | `<init>(Collection, int)`                          | `java.nio.file.FileTreeWalker`                                         |
|   +55.8% | +0.03ms |  2.0% → 5.2% |          0.1ms |       2 → 3 | `<init>(UnixPath, long, DirectoryStream$Filter)`   | `sun.nio.fs.UnixDirectoryStream`                                       |
|   +55.8% | +0.03ms |  2.0% → 5.2% |          0.1ms |       2 → 3 | `newDirectoryStream(Path, DirectoryStream$Filter)` | `sun.nio.fs.UnixFileSystemProvider`                                    |
|   +31.1% | +0.02ms |  2.3% → 5.2% |          0.1ms |           3 | `newDirectoryStream(Path)`                         | `java.nio.file.Files`                                                  |
|   +31.1% | +0.02ms |  2.3% → 5.2% |          0.1ms |           3 | `visit(Path, boolean, boolean)`                    | `java.nio.file.FileTreeWalker`                                         |
|   +31.1% | +0.02ms |  2.3% → 5.2% |          0.1ms |           3 | `walk(Path)`                                       | `java.nio.file.FileTreeWalker`                                         |
|   +20.1% | +0.01ms |  1.8% → 3.7% | 49.3µs → 0.1ms |       1 → 2 | `<init>(boolean)`                                  | `java.util.concurrent.locks.ReentrantReadWriteLock`                    |

##### Standard library

|   Change |   Delta |            % |           Time | Contentions | Function                                           | Location                                            |
| -------: | ------: | -----------: | -------------: | ----------: | -------------------------------------------------- | --------------------------------------------------- |
|  +173.3% | +0.23ms | 4.9% → 22.9% |  0.1ms → 0.4ms |       3 → 1 | `invoke()`                                         | `java.util.concurrent.ForkJoinTask`                 |
|  +173.3% | +0.23ms | 4.9% → 22.9% |  0.1ms → 0.4ms |       3 → 1 | `exec()`                                           | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|   +75.4% | +0.05ms |  2.7% → 8.0% |          0.1ms |       5 → 4 | `walkFileTree(Path, Set, int, FileVisitor)`        | `java.nio.file.Files`                               |
|   +75.4% | +0.05ms |  2.7% → 8.0% |          0.1ms |       5 → 4 | `walkFileTree(Path, FileVisitor)`                  | `java.nio.file.Files`                               |
| +1156.4% | +0.04ms |  0.1% → 2.8% | 3.5µs → 44.5µs |           1 | `<init>(Collection, int)`                          | `java.nio.file.FileTreeWalker`                      |
|   +55.8% | +0.03ms |  2.0% → 5.2% |          0.1ms |       2 → 3 | `<init>(UnixPath, long, DirectoryStream$Filter)`   | `sun.nio.fs.UnixDirectoryStream`                    |
|   +55.8% | +0.03ms |  2.0% → 5.2% |          0.1ms |       2 → 3 | `newDirectoryStream(Path, DirectoryStream$Filter)` | `sun.nio.fs.UnixFileSystemProvider`                 |
|   +31.1% | +0.02ms |  2.3% → 5.2% |          0.1ms |           3 | `newDirectoryStream(Path)`                         | `java.nio.file.Files`                               |
|   +31.1% | +0.02ms |  2.3% → 5.2% |          0.1ms |           3 | `visit(Path, boolean, boolean)`                    | `java.nio.file.FileTreeWalker`                      |
|   +31.1% | +0.02ms |  2.3% → 5.2% |          0.1ms |           3 | `walk(Path)`                                       | `java.nio.file.FileTreeWalker`                      |
|   +20.1% | +0.01ms |  1.8% → 3.7% | 49.3µs → 0.1ms |       1 → 2 | `<init>(boolean)`                                  | `java.util.concurrent.locks.ReentrantReadWriteLock` |

#### Improvements

Functions with the largest decrease in total time blocked in the function and all its callees.

|  Change |   Delta |             % |          Time | Contentions | Function                                             | Location                                               |
| ------: | ------: | ------------: | ------------: | ----------: | ---------------------------------------------------- | ------------------------------------------------------ |
|  -46.6% | -1.07ms | 84.9% → 77.0% | 2.3ms → 1.2ms |      22 → 4 | `computeClusterAverages()`                           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  -46.6% | -1.07ms | 84.9% → 77.0% | 2.3ms → 1.2ms |      22 → 4 | `computeDirectly()`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  -46.6% | -1.07ms | 84.9% → 77.0% | 2.3ms → 1.2ms |      22 → 4 | `compute()`                                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |
|  -46.6% | -1.07ms | 84.9% → 77.0% | 2.3ms → 1.2ms |      22 → 4 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                   |
|  -46.6% | -1.07ms | 84.9% → 77.0% | 2.3ms → 1.2ms |      22 → 4 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                    |
|  -46.6% | -1.07ms | 84.9% → 77.0% | 2.3ms → 1.2ms |      22 → 4 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`          |
|  -46.6% | -1.07ms | 84.9% → 77.0% | 2.3ms → 1.2ms |      22 → 4 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                    |
|  -46.6% | -1.07ms | 84.9% → 77.0% | 2.3ms → 1.2ms |      22 → 4 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                    |
|  -46.6% | -1.07ms | 84.9% → 77.0% | 2.3ms → 1.2ms |      22 → 4 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`            |
|  -51.5% | -0.74ms | 52.8% → 43.5% | 1.4ms → 0.7ms |      11 → 2 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`          |
|  -51.5% | -0.74ms | 52.8% → 43.5% | 1.4ms → 0.7ms |      11 → 2 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                    |
|  -51.5% | -0.74ms | 52.8% → 43.5% | 1.4ms → 0.7ms |      11 → 2 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                    |
| removed | -0.70ms |  25.7% → 0.0% |   0.7ms → 0ms |      18 → 0 | `boxed(double[])`                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  -30.0% | -0.63ms | 77.5% → 92.0% | 2.1ms → 1.5ms |       9 → 5 | `loadClass(String)`                                  | `java.lang.ClassLoader`                                |
|  -30.1% | -0.53ms | 64.8% → 77.0% | 1.8ms → 1.2ms |       7 → 4 | `loadClass(String, boolean)`                         | `java.lang.ClassLoader`                                |
|  -23.4% | -0.37ms | 59.2% → 77.0% | 1.6ms → 1.2ms |           4 | `average(List)`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| removed | -0.30ms |  11.1% → 0.0% |   0.3ms → 0ms |       5 → 0 | `doubleStream(Spliterator$OfDouble, boolean)`        | `java.util.stream.StreamSupport`                       |
| removed | -0.30ms |  11.1% → 0.0% |   0.3ms → 0ms |       5 → 0 | `stream(double[], int, int)`                         | `java.util.Arrays`                                     |
| removed | -0.30ms |  11.1% → 0.0% |   0.3ms → 0ms |       5 → 0 | `stream(double[])`                                   | `java.util.Arrays`                                     |
| removed | -0.19ms |   7.2% → 0.0% |   0.2ms → 0ms |       7 → 0 | `opWrapSink(int, Sink)`                              | `java.util.stream.DoublePipeline$1`                    |

##### Standard library

|  Change |   Delta |             % |          Time | Contentions | Function                                             | Location                                      |
| ------: | ------: | ------------: | ------------: | ----------: | ---------------------------------------------------- | --------------------------------------------- |
|  -46.6% | -1.07ms | 84.9% → 77.0% | 2.3ms → 1.2ms |      22 → 4 | `exec()`                                             | `java.util.concurrent.RecursiveTask`          |
|  -46.6% | -1.07ms | 84.9% → 77.0% | 2.3ms → 1.2ms |      22 → 4 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`           |
|  -46.6% | -1.07ms | 84.9% → 77.0% | 2.3ms → 1.2ms |      22 → 4 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  -46.6% | -1.07ms | 84.9% → 77.0% | 2.3ms → 1.2ms |      22 → 4 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`           |
|  -46.6% | -1.07ms | 84.9% → 77.0% | 2.3ms → 1.2ms |      22 → 4 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`           |
|  -46.6% | -1.07ms | 84.9% → 77.0% | 2.3ms → 1.2ms |      22 → 4 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`   |
|  -51.5% | -0.74ms | 52.8% → 43.5% | 1.4ms → 0.7ms |      11 → 2 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  -51.5% | -0.74ms | 52.8% → 43.5% | 1.4ms → 0.7ms |      11 → 2 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`           |
|  -51.5% | -0.74ms | 52.8% → 43.5% | 1.4ms → 0.7ms |      11 → 2 | `join()`                                             | `java.util.concurrent.ForkJoinTask`           |
|  -30.0% | -0.63ms | 77.5% → 92.0% | 2.1ms → 1.5ms |       9 → 5 | `loadClass(String)`                                  | `java.lang.ClassLoader`                       |
|  -30.1% | -0.53ms | 64.8% → 77.0% | 1.8ms → 1.2ms |       7 → 4 | `loadClass(String, boolean)`                         | `java.lang.ClassLoader`                       |
| removed | -0.30ms |  11.1% → 0.0% |   0.3ms → 0ms |       5 → 0 | `doubleStream(Spliterator$OfDouble, boolean)`        | `java.util.stream.StreamSupport`              |
| removed | -0.30ms |  11.1% → 0.0% |   0.3ms → 0ms |       5 → 0 | `stream(double[], int, int)`                         | `java.util.Arrays`                            |
| removed | -0.30ms |  11.1% → 0.0% |   0.3ms → 0ms |       5 → 0 | `stream(double[])`                                   | `java.util.Arrays`                            |
| removed | -0.19ms |   7.2% → 0.0% |   0.2ms → 0ms |       7 → 0 | `opWrapSink(int, Sink)`                              | `java.util.stream.DoublePipeline$1`           |
| removed | -0.19ms |   7.2% → 0.0% |   0.2ms → 0ms |       7 → 0 | `wrapSink(Sink)`                                     | `java.util.stream.AbstractPipeline`           |
| removed | -0.19ms |   7.2% → 0.0% |   0.2ms → 0ms |       7 → 0 | `wrapAndCopyInto(Sink, Spliterator)`                 | `java.util.stream.AbstractPipeline`           |
| removed | -0.19ms |   7.2% → 0.0% |   0.2ms → 0ms |       7 → 0 | `evaluate(Spliterator, boolean, IntFunction)`        | `java.util.stream.AbstractPipeline`           |
| removed | -0.19ms |   7.2% → 0.0% |   0.2ms → 0ms |       7 → 0 | `evaluateToArrayNode(IntFunction)`                   | `java.util.stream.AbstractPipeline`           |
| removed | -0.19ms |   7.2% → 0.0% |   0.2ms → 0ms |       7 → 0 | `toArray(IntFunction)`                               | `java.util.stream.ReferencePipeline`          |

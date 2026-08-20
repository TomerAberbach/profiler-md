# Sampling profile

Collected 5,188 samples.

| Category          |     % | Samples |
| ----------------- | ----: | ------: |
| Ours              | 59.7% |   3,098 |
| Native            | 23.3% |   1,207 |
| Standard library  | 14.5% |     752 |
| JIT               |  1.3% |      67 |
| Compiler          |  1.2% |      62 |
| Garbage collector | <0.1% |       2 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                                                  | Location                                                   |
| ----: | ------: | --------------------------------------------------------- | ---------------------------------------------------------- |
| 18.9% |     983 | `distance(Double[], Double[])`                            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 18.2% |     943 | `accumulate(Double[], double[])`                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 10.8% |     562 | `vectorSum()`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  9.8% |     509 | `__psynch_cvwait`                                         | `libsystem_kernel.dylib`                                   |
|  9.5% |     491 | `findNearestCentroid()`                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  3.9% |     201 | `forward_copy_longs`                                      | `<unknown>`                                                |
|  3.6% |     187 | `elementData(int)`                                        | `java.util.ArrayList`                                      |
|  2.8% |     147 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                                        |
|  2.8% |     143 | `doubleValue()`                                           | `java.lang.Double`                                         |
|  2.1% |     108 | `collectClusters(int[])`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  1.3% |      69 | `add(Object, Object[], int)`                              | `java.util.ArrayList`                                      |
|  1.3% |      67 | `zero_blocks`                                             | `<unknown>`                                                |
|  0.7% |      35 | `__psynch_cvsignal`                                       | `libsystem_kernel.dylib`                                   |
|  0.6% |      32 | `pthread_jit_write_protect_np`                            | `libsystem_pthread.dylib`                                  |
|  0.6% |      30 | `hash(Object)`                                            | `java.util.HashMap`                                        |
|  0.6% |      30 | `checkIndex(int, int)`                                    | `java.util.Objects`                                        |
|  0.5% |      28 | `grow(int)`                                               | `java.util.ArrayList`                                      |
|  0.5% |      28 | `RegisterMap::RegisterMap`                                | `libjvm.dylib`                                             |
|  0.5% |      24 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                        |
|  0.4% |      21 | `__psynch_mutexwait`                                      | `libsystem_kernel.dylib`                                   |

#### Categories

##### Ours

|     % | Samples | Function                                         | Location                                                                          |
| ----: | ------: | ------------------------------------------------ | --------------------------------------------------------------------------------- |
| 18.9% |     983 | `distance(Double[], Double[])`                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                        |
| 18.2% |     943 | `accumulate(Double[], double[])`                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                         |
| 10.8% |     562 | `vectorSum()`                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                         |
|  9.5% |     491 | `findNearestCentroid()`                          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                        |
|  2.1% |     108 | `collectClusters(int[])`                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                        |
|  0.1% |       3 | `compute()`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                            |
| <0.1% |       2 | `lambda$collectClusters$0(Double[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                        |
| <0.1% |       2 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                                       |
| <0.1% |       1 | `computeDirectly()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                        |
| <0.1% |       1 | `computeDirectly()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                         |
| <0.1% |       1 | `apply(int)`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask$$Lambda.0x000000080118c9c0` |
| <0.1% |       1 | `createSubtask(int, int)`                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                        |

##### Native

|    % | Samples | Function                                                                                        | Location                   |
| ---: | ------: | ----------------------------------------------------------------------------------------------- | -------------------------- |
| 9.8% |     509 | `__psynch_cvwait`                                                                               | `libsystem_kernel.dylib`   |
| 3.9% |     201 | `forward_copy_longs`                                                                            | `<unknown>`                |
| 0.7% |      35 | `__psynch_cvsignal`                                                                             | `libsystem_kernel.dylib`   |
| 0.6% |      32 | `pthread_jit_write_protect_np`                                                                  | `libsystem_pthread.dylib`  |
| 0.5% |      28 | `RegisterMap::RegisterMap`                                                                      | `libjvm.dylib`             |
| 0.4% |      21 | `__psynch_mutexwait`                                                                            | `libsystem_kernel.dylib`   |
| 0.3% |      18 | `arrayof_jint_disjoint_arraycopy`                                                               | `<unknown>`                |
| 0.3% |      18 | `_platform_bzero`                                                                               | `libsystem_platform.dylib` |
| 0.3% |      17 | `ScopeDesc::decode_body`                                                                        | `libjvm.dylib`             |
| 0.3% |      17 | `G1FullGCMarker::mark_object`                                                                   | `libjvm.dylib`             |
| 0.3% |      16 | `G1ParScanThreadState::do_copy_to_survivor_space`                                               | `libjvm.dylib`             |
| 0.3% |      15 | `thread_self_trap`                                                                              | `libsystem_kernel.dylib`   |
| 0.3% |      14 | `semaphore_wait_trap`                                                                           | `libsystem_kernel.dylib`   |
| 0.2% |      12 | `_platform_memmove`                                                                             | `libsystem_platform.dylib` |
| 0.2% |       8 | `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>`                                 | `libjvm.dylib`             |
| 0.2% |       8 | `_platform_memset`                                                                              | `libsystem_platform.dylib` |
| 0.2% |       8 | `tlv_get_addr`                                                                                  | `libdyld.dylib`            |
| 0.1% |       7 | `void OopOopIterateDispatch<G1AdjustClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `libjvm.dylib`             |
| 0.1% |       7 | `inflate_fast`                                                                                  | `libzip.dylib`             |
| 0.1% |       6 | `arrayof_oop_disjoint_arraycopy`                                                                | `<unknown>`                |

##### Standard library

|    % | Samples | Function                                                  | Location                                      |
| ---: | ------: | --------------------------------------------------------- | --------------------------------------------- |
| 3.6% |     187 | `elementData(int)`                                        | `java.util.ArrayList`                         |
| 2.8% |     147 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                           |
| 2.8% |     143 | `doubleValue()`                                           | `java.lang.Double`                            |
| 1.3% |      69 | `add(Object, Object[], int)`                              | `java.util.ArrayList`                         |
| 0.6% |      30 | `hash(Object)`                                            | `java.util.HashMap`                           |
| 0.6% |      30 | `checkIndex(int, int)`                                    | `java.util.Objects`                           |
| 0.5% |      28 | `grow(int)`                                               | `java.util.ArrayList`                         |
| 0.5% |      24 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
| 0.1% |       7 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                           |
| 0.1% |       6 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                            |
| 0.1% |       5 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`           |
| 0.1% |       5 | `forEach(BiConsumer)`                                     | `java.util.HashMap`                           |
| 0.1% |       5 | `grow()`                                                  | `java.util.ArrayList`                         |
| 0.1% |       5 | `nextNode()`                                              | `java.util.HashMap$HashIterator`              |
| 0.1% |       4 | `newLength(int, int, int)`                                | `jdk.internal.util.ArraysSupport`             |
| 0.1% |       3 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`          |
| 0.1% |       3 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| 0.1% |       3 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`           |
| 0.1% |       3 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`           |
| 0.1% |       3 | `get(int)`                                                | `java.util.ArrayList`                         |

##### JIT

|    % | Samples | Function      | Location    |
| ---: | ------: | ------------- | ----------- |
| 1.3% |      67 | `zero_blocks` | `<unknown>` |

##### Compiler

|     % | Samples | Function                                      | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
|  0.1% |       3 | `Node_Backward_Iterator::next`                | `libjvm.dylib` |
| <0.1% |       2 | `Scheduling::ComputeRegisterAntidependencies` | `libjvm.dylib` |
| <0.1% |       2 | `PhaseCFG::schedule_local`                    | `libjvm.dylib` |
| <0.1% |       2 | `PhaseIdealLoop::build_loop_late_post_work`   | `libjvm.dylib` |
| <0.1% |       2 | `LinearScan::number_instructions`             | `libjvm.dylib` |
| <0.1% |       2 | `PhaseChaitin::build_ifg_physical`            | `libjvm.dylib` |
| <0.1% |       1 | `PhaseCFG::schedule_late`                     | `libjvm.dylib` |
| <0.1% |       1 | `PhaseAggressiveCoalesce::coalesce`           | `libjvm.dylib` |
| <0.1% |       1 | `Matcher::match_tree`                         | `libjvm.dylib` |
| <0.1% |       1 | `Matcher::xform`                              | `libjvm.dylib` |
| <0.1% |       1 | `CProjNode::is_block_proj`                    | `libjvm.dylib` |
| <0.1% |       1 | `ProjNode::bottom_type`                       | `libjvm.dylib` |
| <0.1% |       1 | `MemNode::Ideal_common`                       | `libjvm.dylib` |
| <0.1% |       1 | `RegionNode::is_CFG`                          | `libjvm.dylib` |
| <0.1% |       1 | `Node::ideal_reg`                             | `libjvm.dylib` |
| <0.1% |       1 | `MachSafePointNode::in_RegMask`               | `libjvm.dylib` |
| <0.1% |       1 | `NTarjan::DFS`                                | `libjvm.dylib` |
| <0.1% |       1 | `MachSpillCopyNode::implementation`           | `libjvm.dylib` |
| <0.1% |       1 | `Node::pipeline`                              | `libjvm.dylib` |
| <0.1% |       1 | `PhaseLive::compute`                          | `libjvm.dylib` |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Location                                                       |
| ----: | ------: | -------------------------------------------------------------- |
| 57.4% |     564 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:248` |
| 40.7% |     400 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:249` |
|  1.9% |      19 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:250` |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Location                                                      |
| ----: | ------: | ------------------------------------------------------------- |
| 88.9% |     838 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:412` |
| 11.1% |     105 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:411` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Location                                                      |
| ----: | ------: | ------------------------------------------------------------- |
| 88.3% |     496 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:403` |
| 11.7% |      66 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:402` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Location                                                       |
| ----: | ------: | -------------------------------------------------------------- |
| 53.4% |     262 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:231` |
| 28.3% |     139 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:230` |
| 11.6% |      57 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:229` |
|  3.9% |      19 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:226` |
|  2.6% |      13 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:225` |

##### `elementData(int)` (`java.util.ArrayList`)

|      % | Samples | Location                  |
| -----: | ------: | ------------------------- |
| 100.0% |     187 | `java.util.ArrayList:411` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 29.3% |      43 | `java.util.HashMap:1213` |
| 22.4% |      33 | `java.util.HashMap:1197` |
| 16.3% |      24 | `java.util.HashMap:1204` |
| 16.3% |      24 | `java.util.HashMap:1207` |
|  8.8% |      13 | `java.util.HashMap:1219` |

##### `doubleValue()` (`java.lang.Double`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |     143 | `java.lang.Double:1001` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Location                                                       |
| ----: | ------: | -------------------------------------------------------------- |
| 25.0% |      27 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:213` |
| 24.1% |      26 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:214` |
| 23.1% |      25 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |
| 21.3% |      23 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:212` |
|  5.6% |       6 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:211` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

|     % | Samples | Location                  |
| ----: | ------: | ------------------------- |
| 87.0% |      60 | `java.util.ArrayList:482` |
| 13.0% |       9 | `java.util.ArrayList:484` |

##### `hash(Object)` (`java.util.HashMap`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |      30 | `java.util.HashMap:338` |

##### `checkIndex(int, int)` (`java.util.Objects`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |      30 | `java.util.Objects:385` |

##### `grow(int)` (`java.util.ArrayList`)

|     % | Samples | Location                  |
| ----: | ------: | ------------------------- |
| 96.4% |      27 | `java.util.ArrayList:239` |
|  3.6% |       1 | `java.util.ArrayList:232` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Location                                 |
| ----: | ------: | ---------------------------------------- |
| 37.5% |       9 | `java.util.concurrent.ForkJoinPool:2053` |
| 29.2% |       7 | `java.util.concurrent.ForkJoinPool:2051` |
| 16.7% |       4 | `java.util.concurrent.ForkJoinPool:2041` |
|  4.2% |       1 | `java.util.concurrent.ForkJoinPool:2058` |
|  4.2% |       1 | `java.util.concurrent.ForkJoinPool:2023` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 85.7% |       6 | `java.util.HashMap:1384` |
| 14.3% |       1 | `java.util.HashMap:1391` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       6 | `java.util.Arrays:3482` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Location                                |
| ----: | ------: | --------------------------------------- |
| 60.0% |       3 | `java.util.concurrent.ForkJoinTask:411` |
| 20.0% |       1 | `java.util.concurrent.ForkJoinTask:423` |
| 20.0% |       1 | `java.util.concurrent.ForkJoinTask:413` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 80.0% |       4 | `java.util.HashMap:1428` |
| 20.0% |       1 | `java.util.HashMap:1427` |

##### `grow()` (`java.util.ArrayList`)

|      % | Samples | Location                  |
| -----: | ------: | ------------------------- |
| 100.0% |       5 | `java.util.ArrayList:244` |

##### `nextNode()` (`java.util.HashMap$HashIterator`)

|     % | Samples | Location                              |
| ----: | ------: | ------------------------------------- |
| 40.0% |       2 | `java.util.HashMap$HashIterator:1609` |
| 40.0% |       2 | `java.util.HashMap$HashIterator:1611` |
| 20.0% |       1 | `java.util.HashMap$HashIterator:1608` |

##### `newLength(int, int, int)` (`jdk.internal.util.ArraysSupport`)

|      % | Samples | Location                              |
| -----: | ------: | ------------------------------------- |
| 100.0% |       4 | `jdk.internal.util.ArraysSupport:741` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|     % | Samples | Location                                                   |
| ----: | ------: | ---------------------------------------------------------- |
| 33.3% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask:146` |
| 33.3% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask:145` |
| 33.3% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask:151` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % | Samples | Location                                 |
| -----: | ------: | ---------------------------------------- |
| 100.0% |       3 | `java.util.concurrent.RecursiveTask:110` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|     % | Samples | Location                                           |
| ----: | ------: | -------------------------------------------------- |
| 33.3% |       1 | `java.util.concurrent.ForkJoinPool$WorkQueue:1330` |
| 33.3% |       1 | `java.util.concurrent.ForkJoinPool$WorkQueue:1343` |
| 33.3% |       1 | `java.util.concurrent.ForkJoinPool$WorkQueue:1331` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Location                                |
| ----: | ------: | --------------------------------------- |
| 33.3% |       1 | `java.util.concurrent.ForkJoinTask:650` |
| 33.3% |       1 | `java.util.concurrent.ForkJoinTask:652` |
| 33.3% |       1 | `java.util.concurrent.ForkJoinTask:651` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Location                                 |
| ----: | ------: | ---------------------------------------- |
| 66.7% |       2 | `java.util.concurrent.ForkJoinPool:1808` |
| 33.3% |       1 | `java.util.concurrent.ForkJoinPool:1809` |

##### `get(int)` (`java.util.ArrayList`)

|      % | Samples | Location                  |
| -----: | ------: | ------------------------- |
| 100.0% |       3 | `java.util.ArrayList:427` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Location                                                       |
| -----: | ------: | -------------------------------------------------------------- |
| 100.0% |       2 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |

##### `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Location                                       |
| -----: | ------: | ---------------------------------------------- |
| 100.0% |       2 | `org.renaissance.jdk.concurrent.JavaKMeans:86` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Location                                                       |
| -----: | ------: | -------------------------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:171` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Location                                                      |
| -----: | ------: | ------------------------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:367` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Location                                                       |
| -----: | ------: | -------------------------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:261` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller                  | Location                                                   |
| -----: | ------: | ----------------------- | ---------------------------------------------------------- |
| 100.0% |     983 | `findNearestCentroid()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller        | Location                                                  |
| -----: | ------: | ------------- | --------------------------------------------------------- |
| 100.0% |     943 | `vectorSum()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller              | Location                                                  |
| -----: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% |     562 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                  | Location       |
| ----: | ------: | ----------------------- | -------------- |
| 96.5% |     491 | `Parker::park`          | `libjvm.dylib` |
|  3.5% |      18 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller              | Location                                                   |
| -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% |     491 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `forward_copy_longs` (`<unknown>`)

|     % | Samples | Caller                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 81.1% |     163 | `arrayof_jint_disjoint_arraycopy` | `<unknown>` |
| 18.9% |      38 | `arrayof_oop_disjoint_arraycopy`  | `<unknown>` |

##### `elementData(int)` (`java.util.ArrayList`)

|      % | Samples | Caller     | Location              |
| -----: | ------: | ---------- | --------------------- |
| 100.0% |     187 | `get(int)` | `java.util.ArrayList` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|      % | Samples | Caller                   | Location                                                   |
| -----: | ------: | ------------------------ | ---------------------------------------------------------- |
| 100.0% |     147 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `doubleValue()` (`java.lang.Double`)

|     % | Samples | Caller                           | Location                                                   |
| ----: | ------: | -------------------------------- | ---------------------------------------------------------- |
| 92.3% |     132 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  7.7% |      11 | `distance(Double[], Double[])`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller              | Location                                                   |
| -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% |     108 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

|      % | Samples | Caller        | Location              |
| -----: | ------: | ------------- | --------------------- |
| 100.0% |      69 | `add(Object)` | `java.util.ArrayList` |

##### `zero_blocks` (`<unknown>`)

|     % | Samples | Caller                              | Location                                                   |
| ----: | ------: | ----------------------------------- | ---------------------------------------------------------- |
| 59.7% |      40 | `merge(Object, Object, BiFunction)` | `java.util.HashMap`                                        |
| 20.9% |      14 | `grow(int)`                         | `java.util.ArrayList`                                      |
| 14.9% |      10 | `findNearestCentroid()`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  3.0% |       2 | `resize()`                          | `java.util.HashMap`                                        |
|  1.5% |       1 | `copyOf(Object[], int, Class)`      | `java.util.Arrays`                                         |

##### `__psynch_cvsignal` (`libsystem_kernel.dylib`)

|      % | Samples | Caller          | Location       |
| -----: | ------: | --------------- | -------------- |
| 100.0% |      35 | `Unsafe_Unpark` | `libjvm.dylib` |

##### `pthread_jit_write_protect_np` (`libsystem_pthread.dylib`)

|     % | Samples | Caller                     | Location       |
| ----: | ------: | -------------------------- | -------------- |
| 21.9% |       7 | `JVM_IHashCode`            | `libjvm.dylib` |
| 15.6% |       5 | `jvmti_GetCurrentThread`   | `libjvm.dylib` |
| 12.5% |       4 | `Unsafe_Park`              | `libjvm.dylib` |
|  9.4% |       3 | `OptoRuntime::new_array_C` | `libjvm.dylib` |
|  9.4% |       3 | `Unsafe_Unpark`            | `libjvm.dylib` |

##### `hash(Object)` (`java.util.HashMap`)

|     % | Samples | Caller                              | Location            |
| ----: | ------: | ----------------------------------- | ------------------- |
| 83.3% |      25 | `computeIfAbsent(Object, Function)` | `java.util.HashMap` |
| 10.0% |       3 | `putMapEntries(Map, boolean)`       | `java.util.HashMap` |
|  6.7% |       2 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `checkIndex(int, int)` (`java.util.Objects`)

|      % | Samples | Caller     | Location              |
| -----: | ------: | ---------- | --------------------- |
| 100.0% |      30 | `get(int)` | `java.util.ArrayList` |

##### `grow(int)` (`java.util.ArrayList`)

|      % | Samples | Caller   | Location              |
| -----: | ------: | -------- | --------------------- |
| 100.0% |      28 | `grow()` | `java.util.ArrayList` |

##### `RegisterMap::RegisterMap` (`libjvm.dylib`)

|     % | Samples | Caller                    | Location       |
| ----: | ------: | ------------------------- | -------------- |
| 89.3% |      25 | `vframe::vframe`          | `libjvm.dylib` |
|  7.1% |       2 | `vframe::new_vframe`      | `libjvm.dylib` |
|  3.6% |       1 | `JvmtiEnv::GetStackTrace` | `libjvm.dylib` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller                 | Location                            |
| -----: | ------: | ---------------------- | ----------------------------------- |
| 100.0% |      24 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                              | Location                  |
| -----: | ------: | ----------------------------------- | ------------------------- |
| 100.0% |      21 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `arrayof_jint_disjoint_arraycopy` (`<unknown>`)

|     % | Samples | Caller                              | Location              |
| ----: | ------: | ----------------------------------- | --------------------- |
| 44.4% |       8 | `copyOf(Object[], int)`             | `java.util.Arrays`    |
| 44.4% |       8 | `grow(int)`                         | `java.util.ArrayList` |
| 11.1% |       2 | `merge(Object, Object, BiFunction)` | `java.util.HashMap`   |

##### `_platform_bzero` (`libsystem_platform.dylib`)

|      % | Samples | Caller                   | Location       |
| -----: | ------: | ------------------------ | -------------- |
| 100.0% |      18 | `MemAllocator::allocate` | `libjvm.dylib` |

##### `ScopeDesc::decode_body` (`libjvm.dylib`)

|     % | Samples | Caller                 | Location       |
| ----: | ------: | ---------------------- | -------------- |
| 64.7% |      11 | `ScopeDesc::sender`    | `libjvm.dylib` |
| 35.3% |       6 | `ScopeDesc::ScopeDesc` | `libjvm.dylib` |

##### `G1FullGCMarker::mark_object` (`libjvm.dylib`)

|     % | Samples | Caller                                                          | Location       |
| ----: | ------: | --------------------------------------------------------------- | -------------- |
| 88.2% |      15 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` | `libjvm.dylib` |
|  5.9% |       1 | `G1FullGCMarker::follow_marking_stacks`                         | `libjvm.dylib` |
|  5.9% |       1 | `G1FullGCMarker::complete_marking`                              | `libjvm.dylib` |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`libjvm.dylib`)

|     % | Samples | Caller                                          | Location       |
| ----: | ------: | ----------------------------------------------- | -------------- |
| 75.0% |      12 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib` |
| 18.8% |       3 | `G1ParScanThreadState::steal_and_trim_queue`    | `libjvm.dylib` |
|  6.3% |       1 | `G1ScanHRForRegionClosure::scan_memregion`      | `libjvm.dylib` |

##### `thread_self_trap` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                            | Location                 |
| ----: | ------: | --------------------------------- | ------------------------ |
| 93.3% |      14 | `ObjectSampler::recordAllocation` | `libasyncProfiler.dylib` |
|  6.7% |       1 | `SafepointSynchronize::block`     | `libjvm.dylib`           |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 50.0% |       7 | `WorkerThread::run`              | `libjvm.dylib` |
| 42.9% |       6 | `GenericWaitBarrier::Cell::wait` | `libjvm.dylib` |
|  7.1% |       1 | `WorkerThreads::run_task`        | `libjvm.dylib` |

##### `_platform_memmove` (`libsystem_platform.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |      12 | `vframe::java_sender` | `libjvm.dylib` |

##### `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>` (`libjvm.dylib`)

|      % | Samples | Caller                                  | Location       |
| -----: | ------: | --------------------------------------- | -------------- |
| 100.0% |       8 | `G1AdjustRegionClosure::do_heap_region` | `libjvm.dylib` |

##### `_platform_memset` (`libsystem_platform.dylib`)

|     % | Samples | Caller                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 87.5% |       7 | `MemAllocator::allocate`     | `libjvm.dylib` |
| 12.5% |       1 | `Compile::build_start_state` | `libjvm.dylib` |

##### `tlv_get_addr` (`libdyld.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 50.0% |       4 | `ScopeDesc::decode_body`         | `libjvm.dylib` |
| 12.5% |       1 | `ciEnv::get_klass_by_name_impl`  | `libjvm.dylib` |
| 12.5% |       1 | `Symbol::as_C_string`            | `libjvm.dylib` |
| 12.5% |       1 | `arrayof_oop_disjoint_arraycopy` | `<unknown>`    |
| 12.5% |       1 | `JvmtiEnvBase::get_stack_trace`  | `libjvm.dylib` |

##### `void OopOopIterateDispatch<G1AdjustClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|     % | Samples | Caller                                                          | Location       |
| ----: | ------: | --------------------------------------------------------------- | -------------- |
| 85.7% |       6 | `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>` | `libjvm.dylib` |
| 14.3% |       1 | `G1AdjustRegionClosure::do_heap_region`                         | `libjvm.dylib` |

##### `inflate_fast` (`libzip.dylib`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |       7 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|      % | Samples | Caller                              | Location                                    |
| -----: | ------: | ----------------------------------- | ------------------------------------------- |
| 100.0% |       7 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `arrayof_oop_disjoint_arraycopy` (`<unknown>`)

|      % | Samples | Caller               | Location              |
| -----: | ------: | -------------------- | --------------------- |
| 100.0% |       6 | `addAll(Collection)` | `java.util.ArrayList` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|     % | Samples | Caller      | Location              |
| ----: | ------: | ----------- | --------------------- |
| 83.3% |       5 | `toArray()` | `java.util.ArrayList` |
| 16.7% |       1 | `grow(int)` | `java.util.ArrayList` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller   | Location                            |
| -----: | ------: | -------- | ----------------------------------- |
| 100.0% |       5 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|      % | Samples | Caller            | Location                                    |
| -----: | ------: | ----------------- | ------------------------------------------- |
| 100.0% |       5 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `grow()` (`java.util.ArrayList`)

|      % | Samples | Caller                       | Location              |
| -----: | ------: | ---------------------------- | --------------------- |
| 100.0% |       5 | `add(Object, Object[], int)` | `java.util.ArrayList` |

##### `nextNode()` (`java.util.HashMap$HashIterator`)

|      % | Samples | Caller   | Location                          |
| -----: | ------: | -------- | --------------------------------- |
| 100.0% |       5 | `next()` | `java.util.HashMap$EntryIterator` |

##### `newLength(int, int, int)` (`jdk.internal.util.ArraysSupport`)

|      % | Samples | Caller      | Location              |
| -----: | ------: | ----------- | --------------------- |
| 100.0% |       4 | `grow(int)` | `java.util.ArrayList` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % | Samples | Caller   | Location                             |
| -----: | ------: | -------- | ------------------------------------ |
| 100.0% |       3 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % | Samples | Caller     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |       3 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Caller                 | Location                            |
| -----: | ------: | ---------------------- | ----------------------------------- |
| 100.0% |       3 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |       3 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller  | Location                                    |
| -----: | ------: | ------- | ------------------------------------------- |
| 100.0% |       3 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `get(int)` (`java.util.ArrayList`)

|      % | Samples | Caller        | Location                                                  |
| -----: | ------: | ------------- | --------------------------------------------------------- |
| 100.0% |       3 | `vectorSum()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `Node_Backward_Iterator::next` (`libjvm.dylib`)

|     % | Samples | Caller                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 66.7% |       2 | `PhaseCFG::schedule_late`      | `libjvm.dylib` |
| 33.3% |       1 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller          | Location                                                                              |
| -----: | ------: | --------------- | ------------------------------------------------------------------------------------- |
| 100.0% |       2 | `apply(Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000000801186b38` |

##### `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller       | Location                                                               |
| -----: | ------: | ------------ | ---------------------------------------------------------------------- |
| 100.0% |       2 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801125b10` |

##### `Scheduling::ComputeRegisterAntidependencies` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |       2 | `Scheduling::DoScheduling` | `libjvm.dylib` |

##### `PhaseCFG::schedule_local` (`libjvm.dylib`)

|      % | Samples | Caller                         | Location       |
| -----: | ------: | ------------------------------ | -------------- |
| 100.0% |       2 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       2 | `PhaseIdealLoop::build_loop_late` | `libjvm.dylib` |

##### `LinearScan::number_instructions` (`libjvm.dylib`)

|      % | Samples | Caller                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |       2 | `LinearScan::do_linear_scan` | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       2 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |       1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |       1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask$$Lambda.0x000000080118c9c0`)

|      % | Samples | Caller                      | Location                           |
| -----: | ------: | --------------------------- | ---------------------------------- |
| 100.0% |       1 | `<init>(long, IntFunction)` | `java.util.stream.Nodes$ArrayNode` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |       1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `PhaseCFG::schedule_late` (`libjvm.dylib`)

|      % | Samples | Caller                         | Location       |
| -----: | ------: | ------------------------------ | -------------- |
| 100.0% |       1 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |

##### `PhaseAggressiveCoalesce::coalesce` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |       1 | `PhaseCoalesce::coalesce_driver` | `libjvm.dylib` |

##### `Matcher::match_tree` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |       1 | `Matcher::xform` | `libjvm.dylib` |

##### `Matcher::xform` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |       1 | `Matcher::match` | `libjvm.dylib` |

##### `CProjNode::is_block_proj` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       1 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `ProjNode::bottom_type` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |       1 | `PhaseCCP::transform_once` | `libjvm.dylib` |

##### `MemNode::Ideal_common` (`libjvm.dylib`)

|      % | Samples | Caller            | Location       |
| -----: | ------: | ----------------- | -------------- |
| 100.0% |       1 | `LoadNode::Ideal` | `libjvm.dylib` |

##### `RegionNode::is_CFG` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       1 | `PhaseIdealLoop::build_loop_tree` | `libjvm.dylib` |

##### `Node::ideal_reg` (`libjvm.dylib`)

|      % | Samples | Caller                 | Location       |
| -----: | ------: | ---------------------- | -------------- |
| 100.0% |       1 | `Matcher::find_shared` | `libjvm.dylib` |

##### `MachSafePointNode::in_RegMask` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       1 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `NTarjan::DFS` (`libjvm.dylib`)

|      % | Samples | Caller                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |       1 | `PhaseIdealLoop::Dominators` | `libjvm.dylib` |

##### `MachSpillCopyNode::implementation` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |       1 | `PhaseOutput::scratch_emit_size` | `libjvm.dylib` |

##### `Node::pipeline` (`libjvm.dylib`)

|      % | Samples | Caller                              | Location       |
| -----: | ------: | ----------------------------------- | -------------- |
| 100.0% |       1 | `PhaseCFG::partial_latency_of_defs` | `libjvm.dylib` |

##### `PhaseLive::compute` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       1 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                                  | Location                                                   |
| ----: | ------: | --------------------------------------------------------- | ---------------------------------------------------------- |
| 95.0% |   4,929 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                        |
| 95.0% |   4,929 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`                |
| 91.2% |   4,730 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`                        |
| 91.1% |   4,727 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                        |
| 91.1% |   4,727 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| 90.7% |   4,708 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                       |
| 90.7% |   4,707 | `compute()`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
| 87.7% |   4,549 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                        |
| 87.7% |   4,549 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                        |
| 84.1% |   4,361 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| 40.4% |   2,097 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 33.6% |   1,741 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 33.5% |   1,740 | `vectorSum()`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 30.1% |   1,559 | `findNearestCentroid()`                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 21.0% |   1,092 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`                        |
| 20.7% |   1,075 | `accumulate(Double[], double[])`                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 20.7% |   1,074 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                        |
| 19.2% |     997 | `distance(Double[], Double[])`                            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 15.0% |     779 | `computeClusterAverages()`                                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| 15.0% |     779 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

#### Categories

##### Ours

|     % | Samples | Function                            | Location                                                               |
| ----: | ------: | ----------------------------------- | ---------------------------------------------------------------------- |
| 90.7% |   4,707 | `compute()`                         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| 40.4% |   2,097 | `computeDirectly()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 33.6% |   1,741 | `computeDirectly()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 33.5% |   1,740 | `vectorSum()`                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 30.1% |   1,559 | `findNearestCentroid()`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 20.7% |   1,075 | `accumulate(Double[], double[])`    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 19.2% |     997 | `distance(Double[], Double[])`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 15.0% |     779 | `computeClusterAverages()`          | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 15.0% |     779 | `computeDirectly()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 14.9% |     774 | `average(List)`                     | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 10.4% |     537 | `collectClusters(int[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  9.7% |     503 | `lambda$run$0(int, List, int)`      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  9.7% |     503 | `call()`                            | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68` |
|  8.7% |     451 | `merge(Map, Map)`                   | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  8.6% |     448 | `combineResults(Map, Map)`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  8.6% |     448 | `combineResults(Object, Object)`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  8.2% |     427 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  8.2% |     427 | `accept(Object, Object)`            | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187460` |
|  6.3% |     327 | `lambda$merge$6(List, List)`        | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  6.3% |     327 | `apply(Object, Object)`             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187b38` |

##### Native

|     % | Samples | Function                                                                        | Location                  |
| ----: | ------: | ------------------------------------------------------------------------------- | ------------------------- |
| 10.1% |     526 | `LockTracer::UnsafeParkHook`                                                    | `libasyncProfiler.dylib`  |
|  9.8% |     509 | `__psynch_cvwait`                                                               | `libsystem_kernel.dylib`  |
|  9.7% |     503 | `Unsafe_Park`                                                                   | `libjvm.dylib`            |
|  9.5% |     495 | `Parker::park`                                                                  | `libjvm.dylib`            |
|  4.1% |     213 | `Thread::call_run`                                                              | `libjvm.dylib`            |
|  4.1% |     213 | `thread_native_entry`                                                           | `libjvm.dylib`            |
|  4.1% |     213 | `_pthread_start`                                                                | `libsystem_pthread.dylib` |
|  4.1% |     213 | `thread_start`                                                                  | `libsystem_pthread.dylib` |
|  3.9% |     201 | `forward_copy_longs`                                                            | `<unknown>`               |
|  3.7% |     194 | `MemAllocator::allocate`                                                        | `libjvm.dylib`            |
|  3.7% |     192 | `_new_array_Java`                                                               | `<unknown>`               |
|  3.7% |     190 | `OptoRuntime::new_array_C`                                                      | `libjvm.dylib`            |
|  3.6% |     186 | `CollectedHeap::array_allocate`                                                 | `libjvm.dylib`            |
|  3.5% |     181 | `arrayof_jint_disjoint_arraycopy`                                               | `<unknown>`               |
|  3.4% |     176 | `InstanceKlass::allocate_objArray`                                              | `libjvm.dylib`            |
|  2.9% |     152 | `MemAllocator::Allocation::notify_allocation_jvmti_sampler`                     | `libjvm.dylib`            |
|  2.8% |     146 | `JvmtiSampledObjectAllocEventCollector::~JvmtiSampledObjectAllocEventCollector` | `libjvm.dylib`            |
|  2.8% |     144 | `JvmtiObjectAllocEventCollector::generate_call_for_allocated`                   | `libjvm.dylib`            |
|  2.7% |     141 | `JvmtiExport::post_sampled_object_alloc`                                        | `libjvm.dylib`            |
|  2.6% |     133 | `ObjectSampler::recordAllocation`                                               | `libasyncProfiler.dylib`  |

##### Standard library

|     % | Samples | Function                                                  | Location                                            |
| ----: | ------: | --------------------------------------------------------- | --------------------------------------------------- |
| 95.0% |   4,929 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                 |
| 95.0% |   4,929 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`         |
| 91.2% |   4,730 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`                 |
| 91.1% |   4,727 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                 |
| 91.1% |   4,727 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| 90.7% |   4,708 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                |
| 87.7% |   4,549 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                 |
| 87.7% |   4,549 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                 |
| 84.1% |   4,361 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| 21.0% |   1,092 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`                 |
| 20.7% |   1,074 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                 |
| 10.2% |     530 | `park(boolean, long)`                                     | `jdk.internal.misc.Unsafe`                          |
| 10.1% |     522 | `park()`                                                  | `java.util.concurrent.locks.LockSupport`            |
|  9.7% |     503 | `exec()`                                                  | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|  8.3% |     432 | `forEach(BiConsumer)`                                     | `java.util.HashMap`                                 |
|  8.2% |     426 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                                 |
|  5.9% |     304 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                                  |
|  4.2% |     220 | `get(int)`                                                | `java.util.ArrayList`                               |
|  4.2% |     218 | `toArray()`                                               | `java.util.ArrayList`                               |
|  4.2% |     216 | `addAll(Collection)`                                      | `java.util.ArrayList`                               |

##### JIT

|    % | Samples | Function      | Location    |
| ---: | ------: | ------------- | ----------- |
| 1.3% |      67 | `zero_blocks` | `<unknown>` |

##### Compiler

|    % | Samples | Function                                   | Location       |
| ---: | ------: | ------------------------------------------ | -------------- |
| 1.8% |      93 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib` |
| 1.6% |      81 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
| 1.2% |      63 | `Compile::Compile`                         | `libjvm.dylib` |
| 1.2% |      63 | `C2Compiler::compile_method`               | `libjvm.dylib` |
| 0.6% |      30 | `Compile::Code_Gen`                        | `libjvm.dylib` |
| 0.3% |      18 | `Compile::Optimize`                        | `libjvm.dylib` |
| 0.3% |      16 | `Compilation::compile_method`              | `libjvm.dylib` |
| 0.3% |      16 | `Compilation::Compilation`                 | `libjvm.dylib` |
| 0.3% |      14 | `Compilation::compile_java_method`         | `libjvm.dylib` |
| 0.2% |      12 | `CompileQueue::get`                        | `libjvm.dylib` |
| 0.2% |      10 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
| 0.2% |       9 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib` |
| 0.2% |       9 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib` |
| 0.2% |       9 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib` |
| 0.1% |       7 | `PhaseCFG::global_code_motion`             | `libjvm.dylib` |
| 0.1% |       7 | `PhaseCFG::do_global_code_motion`          | `libjvm.dylib` |
| 0.1% |       7 | `PhaseOutput::Output`                      | `libjvm.dylib` |
| 0.1% |       7 | `LinearScan::do_linear_scan`               | `libjvm.dylib` |
| 0.1% |       7 | `Compilation::emit_lir`                    | `libjvm.dylib` |
| 0.1% |       6 | `Compile::optimize_loops`                  | `libjvm.dylib` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee                                   | Location                            |
| ----: | ------: | ---------------------------------------- | ----------------------------------- |
| 96.0% |   4,730 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |
|  4.0% |     196 | `awaitWork(ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|      % | Samples | Callee                              | Location                            |
| -----: | ------: | ----------------------------------- | ----------------------------------- |
| 100.0% |   4,929 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee                                               | Location                                      |
| ----: | ------: | ---------------------------------------------------- | --------------------------------------------- |
| 99.9% |   4,727 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  0.1% |       3 | `signalWork()`                                       | `java.util.concurrent.ForkJoinPool`           |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Callee      | Location                                            |
| ----: | ------: | ----------- | --------------------------------------------------- |
| 99.6% |   4,708 | `exec()`    | `java.util.concurrent.RecursiveTask`                |
| 10.6% |     503 | `exec()`    | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|  0.6% |      30 | `setDone()` | `java.util.concurrent.ForkJoinTask`                 |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Callee     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |   4,727 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % | Samples | Callee      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |   4,707 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|     % | Samples | Callee                           | Location                                                   |
| ----: | ------: | -------------------------------- | ---------------------------------------------------------- |
| 96.6% |   4,549 | `join()`                         | `java.util.concurrent.ForkJoinTask`                        |
| 44.6% |   2,097 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 37.0% |   1,741 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 16.5% |     779 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  9.5% |     448 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Callee                                                    | Location                                      |
| ----: | ------: | --------------------------------------------------------- | --------------------------------------------- |
| 95.9% |   4,361 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| 23.6% |   1,074 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
|  7.4% |     338 | `park()`                                                  | `java.util.concurrent.locks.LockSupport`      |
| <0.1% |       1 | `signalWaiters()`                                         | `java.util.concurrent.ForkJoinTask`           |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Callee                 | Location                             |
| -----: | ------: | ---------------------- | ------------------------------------ |
| 100.0% |   4,549 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask`  |
|   0.1% |       3 | `getRawResult()`       | `java.util.concurrent.RecursiveTask` |
|  <0.1% |       1 | `wrong_method_stub`    | `<unknown>`                          |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Callee            | Location                                      |
| -----: | ------: | ----------------- | --------------------------------------------- |
| 100.0% |   4,361 | `doExec()`        | `java.util.concurrent.ForkJoinTask`           |
|  <0.1% |       1 | `releaseAccess()` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Callee                   | Location                                                   |
| -----: | ------: | ------------------------ | ---------------------------------------------------------- |
| 100.0% |   2,096 | `computeDirectly()`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  74.3% |   1,559 | `findNearestCentroid()`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  25.6% |     537 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Callee              | Location                                                  |
| ----: | ------: | ------------------- | --------------------------------------------------------- |
| 99.9% |   1,740 | `vectorSum()`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| 99.9% |   1,740 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Callee                           | Location                                                  |
| ----: | ------: | -------------------------------- | --------------------------------------------------------- |
| 61.8% |   1,075 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  5.9% |     103 | `get(int)`                       | `java.util.ArrayList`                                     |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee                         | Location                                                   |
| ----: | ------: | ------------------------------ | ---------------------------------------------------------- |
| 64.0% |     997 | `distance(Double[], Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  2.9% |      45 | `get(int)`                     | `java.util.ArrayList`                                      |
|  0.6% |      10 | `zero_blocks`                  | `<unknown>`                                                |
|  0.6% |      10 | `_new_array_Java`              | `<unknown>`                                                |
|  0.1% |       2 | `SafepointBlob`                | `<unknown>`                                                |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Callee     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |   1,092 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Callee          | Location           |
| ----: | ------: | --------------- | ------------------ |
| 12.3% |     132 | `doubleValue()` | `java.lang.Double` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee                         | Location                            |
| ----: | ------: | ------------------------------ | ----------------------------------- |
| 98.0% |   1,052 | `doExec()`                     | `java.util.concurrent.ForkJoinTask` |
|  1.0% |      11 | `tryCompensate(long, boolean)` | `java.util.concurrent.ForkJoinPool` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|    % | Samples | Callee                           | Location           |
| ---: | ------: | -------------------------------- | ------------------ |
| 1.1% |      11 | `doubleValue()`                  | `java.lang.Double` |
| 0.2% |       2 | `SafepointBlob`                  | `<unknown>`        |
| 0.1% |       1 | `counter_overflow Runtime1 stub` | `<unknown>`        |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|     % | Samples | Callee                | Location                                               |
| ----: | ------: | --------------------- | ------------------------------------------------------ |
| 99.4% |     774 | `average(List)`       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  0.5% |       4 | `boxed(double[])`     | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  0.1% |       1 | `put(Object, Object)` | `java.util.HashMap`                                    |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Callee                     | Location                                               |
| -----: | ------: | -------------------------- | ------------------------------------------------------ |
| 100.0% |     779 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 100.0% |     779 | `computeDirectly()`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|     % | Samples | Callee                     | Location                                                  |
| ----: | ------: | -------------------------- | --------------------------------------------------------- |
| 99.7% |     772 | `invoke()`                 | `java.util.concurrent.ForkJoinTask`                       |
|  0.3% |       2 | `<init>(JavaKMeans, List)` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee                              | Location              |
| ----: | ------: | ----------------------------------- | --------------------- |
| 34.8% |     187 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`   |
| 30.9% |     166 | `add(Object)`                       | `java.util.ArrayList` |
| 13.4% |      72 | `get(int)`                          | `java.util.ArrayList` |
|  0.4% |       2 | `SafepointBlob`                     | `<unknown>`           |
|  0.4% |       2 | `_new_instance_Java`                | `<unknown>`           |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|     % | Samples | Callee                       | Location                   |
| ----: | ------: | ---------------------------- | -------------------------- |
| 99.2% |     526 | `LockTracer::UnsafeParkHook` | `libasyncProfiler.dylib`   |
|  0.4% |       2 | `_platform_strncmp`          | `libsystem_platform.dylib` |
|  0.2% |       1 | `jni_GetObjectClass`         | `libjvm.dylib`             |
|  0.2% |       1 | `jvmti_GetCurrentThread`     | `libjvm.dylib`             |

##### `LockTracer::UnsafeParkHook` (`libasyncProfiler.dylib`)

|     % | Samples | Callee                    | Location       |
| ----: | ------: | ------------------------- | -------------- |
| 95.6% |     503 | `Unsafe_Park`             | `libjvm.dylib` |
|  1.5% |       8 | `jvmti_GetClassSignature` | `libjvm.dylib` |
|  1.3% |       7 | `jvmti_GetCurrentThread`  | `libjvm.dylib` |
|  0.6% |       3 | `jvmti_Deallocate`        | `libjvm.dylib` |
|  0.4% |       2 | `jni_GetObjectClass`      | `libjvm.dylib` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

|     % | Samples | Callee                | Location                   |
| ----: | ------: | --------------------- | -------------------------- |
| 99.8% |     521 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee                    | Location                                               |
| ----: | ------: | ------------------------- | ------------------------------------------------------ |
| 99.8% |     502 | `invoke()`                | `java.util.concurrent.ForkJoinTask`                    |
|  0.2% |       1 | `<init>(JavaKMeans, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68`)

|      % | Samples | Callee                         | Location                                    |
| -----: | ------: | ------------------------------ | ------------------------------------------- |
| 100.0% |     503 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `Unsafe_Park` (`libjvm.dylib`)

|     % | Samples | Callee                                         | Location                  |
| ----: | ------: | ---------------------------------------------- | ------------------------- |
| 98.4% |     495 | `Parker::park`                                 | `libjvm.dylib`            |
|  0.8% |       4 | `pthread_jit_write_protect_np`                 | `libsystem_pthread.dylib` |
|  0.4% |       2 | `JavaThreadParkedState::JavaThreadParkedState` | `libjvm.dylib`            |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

|      % | Samples | Callee   | Location                                                               |
| -----: | ------: | -------- | ---------------------------------------------------------------------- |
| 100.0% |     503 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68` |

##### `Parker::park` (`libjvm.dylib`)

|     % | Samples | Callee                                                                                                                                                     | Location                 |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| 99.2% |     491 | `__psynch_cvwait`                                                                                                                                          | `libsystem_kernel.dylib` |
|  0.6% |       3 | `AccessInternal::PostRuntimeDispatch<G1BarrierSet::AccessBarrier<544868ull, G1BarrierSet>, (AccessInternal::BarrierType)2, 544868ull>::oop_access_barrier` | `libjvm.dylib`           |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee                               | Location                           |
| ----: | ------: | ------------------------------------ | ---------------------------------- |
| 95.8% |     432 | `forEach(BiConsumer)`                | `java.util.HashMap`                |
|  3.5% |      16 | `<init>(Map)`                        | `java.util.HashMap`                |
|  0.4% |       2 | `linkToTargetMethod(Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  0.2% |       1 | `_new_instance_Java`                 | `<unknown>`                        |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Callee            | Location                                    |
| -----: | ------: | ----------------- | ------------------------------------------- |
| 100.0% |     448 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Callee                     | Location                                                   |
| -----: | ------: | -------------------------- | ---------------------------------------------------------- |
| 100.0% |     448 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|     % | Samples | Callee                   | Location                                                               |
| ----: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| 98.8% |     427 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187460` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee                              | Location            |
| ----: | ------: | ----------------------------------- | ------------------- |
| 99.8% |     426 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |
|  0.2% |       1 | `SafepointBlob`                     | `<unknown>`         |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187460`)

|      % | Samples | Callee                              | Location                                    |
| -----: | ------: | ----------------------------------- | ------------------------------------------- |
| 100.0% |     427 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|     % | Samples | Callee                            | Location                                                               |
| ----: | ------: | --------------------------------- | ---------------------------------------------------------------------- |
| 76.8% |     327 | `apply(Object, Object)`           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187b38` |
| 11.7% |      50 | `arrayof_jint_disjoint_arraycopy` | `<unknown>`                                                            |
|  9.4% |      40 | `zero_blocks`                     | `<unknown>`                                                            |
|  0.5% |       2 | `hash(Object)`                    | `java.util.HashMap`                                                    |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee               | Location              |
| ----: | ------: | -------------------- | --------------------- |
| 66.1% |     216 | `addAll(Collection)` | `java.util.ArrayList` |
| 33.3% |     109 | `<init>(Collection)` | `java.util.ArrayList` |
|  0.6% |       2 | `_new_instance_Java` | `<unknown>`           |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187b38`)

|      % | Samples | Callee                       | Location                                    |
| -----: | ------: | ---------------------------- | ------------------------------------------- |
| 100.0% |     327 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|     % | Samples | Callee                            | Location           |
| ----: | ------: | --------------------------------- | ------------------ |
| 59.5% |     181 | `_new_array_Java`                 | `<unknown>`        |
| 38.2% |     116 | `arrayof_jint_disjoint_arraycopy` | `<unknown>`        |
|  0.3% |       1 | `copyOf(Object[], int, Class)`    | `java.util.Arrays` |

##### `get(int)` (`java.util.ArrayList`)

|     % | Samples | Callee                 | Location              |
| ----: | ------: | ---------------------- | --------------------- |
| 85.0% |     187 | `elementData(int)`     | `java.util.ArrayList` |
| 13.6% |      30 | `checkIndex(int, int)` | `java.util.Objects`   |

##### `toArray()` (`java.util.ArrayList`)

|      % | Samples | Callee                  | Location           |
| -----: | ------: | ----------------------- | ------------------ |
| 100.0% |     218 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `addAll(Collection)` (`java.util.ArrayList`)

|     % | Samples | Callee                           | Location              |
| ----: | ------: | -------------------------------- | --------------------- |
| 50.5% |     109 | `toArray()`                      | `java.util.ArrayList` |
| 26.9% |      58 | `grow(int)`                      | `java.util.ArrayList` |
| 21.8% |      47 | `arrayof_oop_disjoint_arraycopy` | `<unknown>`           |
|  0.5% |       1 | `G1BarrierSet::invalidate`       | `libjvm.dylib`        |

##### `Thread::call_run` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 47.9% |     102 | `WorkerThread::run`             | `libjvm.dylib` |
| 44.6% |      95 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
|  4.2% |       9 | `VMThread::run`                 | `libjvm.dylib` |
|  2.8% |       6 | `ConcurrentGCThread::run`       | `libjvm.dylib` |
|  0.5% |       1 | `WatcherThread::run`            | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     213 | `Thread::call_run` | `libjvm.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Callee                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |     213 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Callee           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |     213 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `MemAllocator::allocate` (`libjvm.dylib`)

|     % | Samples | Callee                                                      | Location                   |
| ----: | ------: | ----------------------------------------------------------- | -------------------------- |
| 78.4% |     152 | `MemAllocator::Allocation::notify_allocation_jvmti_sampler` | `libjvm.dylib`             |
|  9.3% |      18 | `_platform_bzero`                                           | `libsystem_platform.dylib` |
|  4.1% |       8 | `MemAllocator::mem_allocate_inside_tlab_slow`               | `libjvm.dylib`             |
|  3.6% |       7 | `_platform_memset`                                          | `libsystem_platform.dylib` |
|  1.5% |       3 | `ObjArrayAllocator::initialize`                             | `libjvm.dylib`             |

##### `_new_array_Java` (`<unknown>`)

|     % | Samples | Callee                         | Location                  |
| ----: | ------: | ------------------------------ | ------------------------- |
| 99.0% |     190 | `OptoRuntime::new_array_C`     | `libjvm.dylib`            |
|  1.0% |       2 | `pthread_jit_write_protect_np` | `libsystem_pthread.dylib` |

##### `OptoRuntime::new_array_C` (`libjvm.dylib`)

|     % | Samples | Callee                             | Location                  |
| ----: | ------: | ---------------------------------- | ------------------------- |
| 92.6% |     176 | `InstanceKlass::allocate_objArray` | `libjvm.dylib`            |
|  5.3% |      10 | `CollectedHeap::array_allocate`    | `libjvm.dylib`            |
|  1.6% |       3 | `pthread_jit_write_protect_np`     | `libsystem_pthread.dylib` |

##### `CollectedHeap::array_allocate` (`libjvm.dylib`)

|     % | Samples | Callee                   | Location       |
| ----: | ------: | ------------------------ | -------------- |
| 99.5% |     185 | `MemAllocator::allocate` | `libjvm.dylib` |

##### `arrayof_jint_disjoint_arraycopy` (`<unknown>`)

|     % | Samples | Callee               | Location    |
| ----: | ------: | -------------------- | ----------- |
| 90.1% |     163 | `forward_copy_longs` | `<unknown>` |

##### `InstanceKlass::allocate_objArray` (`libjvm.dylib`)

|      % | Samples | Callee                          | Location       |
| -----: | ------: | ------------------------------- | -------------- |
| 100.0% |     176 | `CollectedHeap::array_allocate` | `libjvm.dylib` |

##### `MemAllocator::Allocation::notify_allocation_jvmti_sampler` (`libjvm.dylib`)

|     % | Samples | Callee                                                                          | Location       |
| ----: | ------: | ------------------------------------------------------------------------------- | -------------- |
| 96.1% |     146 | `JvmtiSampledObjectAllocEventCollector::~JvmtiSampledObjectAllocEventCollector` | `libjvm.dylib` |
|  2.6% |       4 | `ThreadHeapSampler::check_for_sampling`                                         | `libjvm.dylib` |
|  0.7% |       1 | `HandleMark::~HandleMark`                                                       | `libjvm.dylib` |
|  0.7% |       1 | `JvmtiSampledObjectAllocEventCollector::start`                                  | `libjvm.dylib` |

##### `JvmtiSampledObjectAllocEventCollector::~JvmtiSampledObjectAllocEventCollector` (`libjvm.dylib`)

|     % | Samples | Callee                                                                           | Location       |
| ----: | ------: | -------------------------------------------------------------------------------- | -------------- |
| 98.6% |     144 | `JvmtiObjectAllocEventCollector::generate_call_for_allocated`                    | `libjvm.dylib` |
|  0.7% |       1 | `GrowableArrayWithAllocator<OopHandle, GrowableArray<OopHandle>>::shrink_to_fit` | `libjvm.dylib` |

##### `JvmtiObjectAllocEventCollector::generate_call_for_allocated` (`libjvm.dylib`)

|     % | Samples | Callee                                                                           | Location       |
| ----: | ------: | -------------------------------------------------------------------------------- | -------------- |
| 97.9% |     141 | `JvmtiExport::post_sampled_object_alloc`                                         | `libjvm.dylib` |
|  1.4% |       2 | `GrowableArrayWithAllocator<OopHandle, GrowableArray<OopHandle>>::shrink_to_fit` | `libjvm.dylib` |
|  0.7% |       1 | `OopStorage::Block::block_for_ptr`                                               | `libjvm.dylib` |

##### `JvmtiExport::post_sampled_object_alloc` (`libjvm.dylib`)

|     % | Samples | Callee                                                 | Location                 |
| ----: | ------: | ------------------------------------------------------ | ------------------------ |
| 94.3% |     133 | `ObjectSampler::recordAllocation`                      | `libasyncProfiler.dylib` |
|  2.8% |       4 | `JvmtiObjectAllocEventMark::JvmtiObjectAllocEventMark` | `libjvm.dylib`           |
|  1.4% |       2 | `JNIHandleBlock::release_block`                        | `libjvm.dylib`           |
|  0.7% |       1 | `Dictionary::lookup`                                   | `libasyncProfiler.dylib` |
|  0.7% |       1 | `mach_absolute_time`                                   | `libsystem_kernel.dylib` |

##### `ObjectSampler::recordAllocation` (`libasyncProfiler.dylib`)

|     % | Samples | Callee                        | Location                 |
| ----: | ------: | ----------------------------- | ------------------------ |
| 85.0% |     113 | `Profiler::recordSample`      | `libasyncProfiler.dylib` |
| 10.5% |      14 | `thread_self_trap`            | `libsystem_kernel.dylib` |
|  3.0% |       4 | `jvmti_GetClassSignature`     | `libjvm.dylib`           |
|  0.8% |       1 | `jvmti_Deallocate`            | `libjvm.dylib`           |
|  0.8% |       1 | `FlightRecorder::recordEvent` | `libasyncProfiler.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 87.1% |      81 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
| 12.9% |      12 | `CompileQueue::get`                        | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 77.8% |      63 | `C2Compiler::compile_method`    | `libjvm.dylib` |
| 19.8% |      16 | `Compiler::compile_method`      | `libjvm.dylib` |
|  2.5% |       2 | `ciEnv::get_method_from_handle` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % | Samples | Callee                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 47.6% |      30 | `Compile::Code_Gen`                      | `libjvm.dylib` |
| 28.6% |      18 | `Compile::Optimize`                      | `libjvm.dylib` |
| 17.5% |      11 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  3.2% |       2 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  1.6% |       1 | `Compile::build_start_state`             | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |      63 | `Compile::Compile` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 30.0% |       9 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 23.3% |       7 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
| 23.3% |       7 | `PhaseOutput::Output`             | `libjvm.dylib` |
| 13.3% |       4 | `Matcher::match`                  | `libjvm.dylib` |
|  3.3% |       1 | `PhaseCFG::PhaseCFG`              | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % | Samples | Callee                              | Location       |
| ----: | ------: | ----------------------------------- | -------------- |
| 33.3% |       6 | `Compile::optimize_loops`           | `libjvm.dylib` |
| 22.2% |       4 | `PhaseIdealLoop::optimize`          | `libjvm.dylib` |
| 11.1% |       2 | `PhaseIterGVN::optimize`            | `libjvm.dylib` |
| 11.1% |       2 | `Compile::remove_speculative_types` | `libjvm.dylib` |
|  5.6% |       1 | `PhaseCCP::do_transform`            | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 87.5% |      14 | `Compilation::compile_java_method` | `libjvm.dylib` |
| 12.5% |       2 | `ciEnv::register_method`           | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Callee                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |      16 | `Compilation::compile_method` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|     % | Samples | Callee                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 50.0% |       7 | `Compilation::emit_lir`       | `libjvm.dylib` |
| 28.6% |       4 | `Compilation::emit_code_body` | `libjvm.dylib` |
| 21.4% |       3 | `Compilation::build_hir`      | `libjvm.dylib` |

##### `CompileQueue::get` (`libjvm.dylib`)

|      % | Samples | Callee          | Location       |
| -----: | ------: | --------------- | -------------- |
| 100.0% |      12 | `Monitor::wait` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 90.0% |       9 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
| 10.0% |       1 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % | Samples | Callee                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 22.2% |       2 | `PhaseCoalesce::coalesce_driver`   | `libjvm.dylib` |
| 22.2% |       2 | `PhaseChaitin::build_ifg_physical` | `libjvm.dylib` |
| 11.1% |       1 | `CProjNode::is_block_proj`         | `libjvm.dylib` |
| 11.1% |       1 | `MachSafePointNode::in_RegMask`    | `libjvm.dylib` |
| 11.1% |       1 | `PhaseLive::compute`               | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % | Samples | Callee                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 22.2% |       2 | `PhaseIdealLoop::build_loop_tree`  | `libjvm.dylib` |
| 22.2% |       2 | `PhaseIdealLoop::build_loop_late`  | `libjvm.dylib` |
| 11.1% |       1 | `PhaseIdealLoop::Dominators`       | `libjvm.dylib` |
| 11.1% |       1 | `IdealLoopTree::counted_loop`      | `libjvm.dylib` |
| 11.1% |       1 | `PhaseIdealLoop::build_loop_early` | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % | Samples | Callee                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       9 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseCFG::global_code_motion` (`libjvm.dylib`)

|     % | Samples | Callee                              | Location       |
| ----: | ------: | ----------------------------------- | -------------- |
| 42.9% |       3 | `PhaseCFG::schedule_late`           | `libjvm.dylib` |
| 28.6% |       2 | `PhaseCFG::schedule_local`          | `libjvm.dylib` |
| 14.3% |       1 | `Node_Backward_Iterator::next`      | `libjvm.dylib` |
| 14.3% |       1 | `PhaseCFG::partial_latency_of_defs` | `libjvm.dylib` |

##### `PhaseCFG::do_global_code_motion` (`libjvm.dylib`)

|      % | Samples | Callee                         | Location       |
| -----: | ------: | ------------------------------ | -------------- |
| 100.0% |       7 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |

##### `PhaseOutput::Output` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 42.9% |       3 | `Scheduling::DoScheduling`      | `libjvm.dylib` |
| 42.9% |       3 | `PhaseOutput::shorten_branches` | `libjvm.dylib` |
| 14.3% |       1 | `Compile::print_method`         | `libjvm.dylib` |

##### `LinearScan::do_linear_scan` (`libjvm.dylib`)

|     % | Samples | Callee                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 28.6% |       2 | `LinearScan::number_instructions`             | `libjvm.dylib` |
| 28.6% |       2 | `LinearScan::build_intervals`                 | `libjvm.dylib` |
| 14.3% |       1 | `LinearScan::allocate_registers`              | `libjvm.dylib` |
| 14.3% |       1 | `LinearScan::sort_intervals_after_allocation` | `libjvm.dylib` |
| 14.3% |       1 | `LinearScan::init_compute_oop_maps`           | `libjvm.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

|      % | Samples | Callee                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |       7 | `LinearScan::do_linear_scan` | `libjvm.dylib` |

##### `Compile::optimize_loops` (`libjvm.dylib`)

|      % | Samples | Callee                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |       6 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`) ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3.5% |     181 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 3.3% |     169 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `LockTracer::UnsafeParkHook` (`libasyncProfiler.dylib`) ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 2.6% |     136 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 2.4% |     124 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 2.3% |     121 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `LockTracer::UnsafeParkHook` (`libasyncProfiler.dylib`) ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.9% |     101 | `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 1.9% |      96 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.7% |      86 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.6% |      85 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 1.6% |      84 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 1.5% |      79 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) |
| 1.5% |      79 | `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.5% |      79 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.5% |      76 | `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.2% |      61 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.2% |      61 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.1% |      56 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 1.1% |      55 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.9% |      48 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.9% |      46 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

# Allocated heap profile

Allocated 36.8 GiB over 75,095 samples (514 KiB per sample).

| Category         |     % |     Size | Samples |
| ---------------- | ----: | -------: | ------: |
| Standard library | 93.1% | 34.3 GiB |  69,874 |
| Ours             |  6.9% | 2.55 GiB |   5,221 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |     Size | Samples | Function                                     | Location                                                   |
| ----: | -------: | ------: | -------------------------------------------- | ---------------------------------------------------------- |
| 90.9% | 33.5 GiB |  68,206 | `copyOf(Object[], int)`                      | `java.util.Arrays`                                         |
|  4.6% |  1.7 GiB |   3,477 | `findNearestCentroid()`                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.7% |  269 MiB |     538 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap`                                        |
|  0.6% |  237 MiB |     475 | `grow(int)`                                  | `java.util.ArrayList`                                      |
|  0.4% |  147 MiB |     295 | `createSubtask(int, int)`                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  0.3% |  127 MiB |     254 | `createSubtask(int, int)`                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.3% |  119 MiB |     238 | `lambda$merge$6(List, List)`                 | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  0.3% |  114 MiB |     228 | `collectClusters(int[])`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.3% |  102 MiB |     204 | `lambda$collectClusters$0(Double[])`         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.3% |   97 MiB |     194 | `resize()`                                   | `java.util.HashMap`                                        |
|  0.2% | 79.5 MiB |     159 | `add(double[], double[])`                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  0.2% |   72 MiB |     144 | `vectorSum()`                                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  0.2% |   67 MiB |     134 | `merge(Map, Map)`                            | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  0.2% |   64 MiB |     128 | `valueOf(double)`                            | `java.lang.Double`                                         |
|  0.1% | 33.5 MiB |      67 | `intStream(Spliterator$OfInt, boolean)`      | `java.util.stream.StreamSupport`                           |
|  0.1% | 23.5 MiB |      47 | `mapToObj(IntFunction, int)`                 | `java.util.stream.IntPipeline`                             |
|  0.1% | 19.5 MiB |      39 | `lambda$generateData$4(int)`                 | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  0.1% | 19.4 MiB |      33 | `copyOf(Object[], int, Class)`               | `java.util.Arrays`                                         |
| <0.1% | 15.5 MiB |      31 | `entrySet()`                                 | `java.util.HashMap`                                        |
| <0.1% |   13 MiB |      26 | `range(int, int)`                            | `java.util.stream.IntStream`                               |

#### Categories

##### Standard library

|     % |     Size | Samples | Function                                      | Location                              |
| ----: | -------: | ------: | --------------------------------------------- | ------------------------------------- |
| 90.9% | 33.5 GiB |  68,206 | `copyOf(Object[], int)`                       | `java.util.Arrays`                    |
|  0.7% |  269 MiB |     538 | `newNode(int, Object, Object, HashMap$Node)`  | `java.util.HashMap`                   |
|  0.6% |  237 MiB |     475 | `grow(int)`                                   | `java.util.ArrayList`                 |
|  0.3% |   97 MiB |     194 | `resize()`                                    | `java.util.HashMap`                   |
|  0.2% |   64 MiB |     128 | `valueOf(double)`                             | `java.lang.Double`                    |
|  0.1% | 33.5 MiB |      67 | `intStream(Spliterator$OfInt, boolean)`       | `java.util.stream.StreamSupport`      |
|  0.1% | 23.5 MiB |      47 | `mapToObj(IntFunction, int)`                  | `java.util.stream.IntPipeline`        |
|  0.1% | 19.4 MiB |      33 | `copyOf(Object[], int, Class)`                | `java.util.Arrays`                    |
| <0.1% | 15.5 MiB |      31 | `entrySet()`                                  | `java.util.HashMap`                   |
| <0.1% |   13 MiB |      26 | `range(int, int)`                             | `java.util.stream.IntStream`          |
| <0.1% | 12.5 MiB |      25 | `copyOf(byte[], int)`                         | `java.util.Arrays`                    |
| <0.1% |  9.5 MiB |      19 | `allocateInstance(Object)`                    | `java.lang.invoke.DirectMethodHandle` |
| <0.1% |  9.5 MiB |      19 | `opWrapSink(int, Sink)`                       | `java.util.stream.IntPipeline$1`      |
| <0.1% |  6.5 MiB |      13 | `builder(long, IntFunction)`                  | `java.util.stream.Nodes`              |
| <0.1% |    6 MiB |      12 | `<init>(InputStream, Inflater, int)`          | `java.util.zip.InflaterInputStream`   |
| <0.1% |  3.5 MiB |       7 | `allocateInstance(Class)`                     | `jdk.internal.misc.Unsafe`            |
| <0.1% |    2 MiB |       4 | `doubleStream(Spliterator$OfDouble, boolean)` | `java.util.stream.StreamSupport`      |
| <0.1% |  1.5 MiB |       3 | `awaitDone(int, long)`                        | `java.util.concurrent.ForkJoinTask`   |
| <0.1% |  1.5 MiB |       3 | `copyOfRangeByte(byte[], int, int)`           | `java.util.Arrays`                    |
| <0.1% | 1024 KiB |       2 | `spliterator(double[], int, int, int)`        | `java.util.Spliterators`              |

##### Ours

|     % |     Size | Samples | Function                             | Location                                                   |
| ----: | -------: | ------: | ------------------------------------ | ---------------------------------------------------------- |
|  4.6% |  1.7 GiB |   3,477 | `findNearestCentroid()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.4% |  147 MiB |     295 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  0.3% |  127 MiB |     254 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.3% |  119 MiB |     238 | `lambda$merge$6(List, List)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  0.3% |  114 MiB |     228 | `collectClusters(int[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.3% |  102 MiB |     204 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.2% | 79.5 MiB |     159 | `add(double[], double[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  0.2% |   72 MiB |     144 | `vectorSum()`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  0.2% |   67 MiB |     134 | `merge(Map, Map)`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  0.1% | 19.5 MiB |      39 | `lambda$generateData$4(int)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| <0.1% |  9.5 MiB |      19 | `computeClusterAverages()`           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| <0.1% |    8 MiB |      16 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| <0.1% |  2.5 MiB |       5 | `div(double[], int)`                 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| <0.1% |  1.5 MiB |       3 | `lambda$run$0(int, List, int)`       | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| <0.1% | 1024 KiB |       2 | `<init>(JavaKMeans, Map)`            | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| <0.1% | 1024 KiB |       2 | `collectGarbage(String)`             | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`   |
| <0.1% |  512 KiB |       1 | `main(String[])`                     | `org.renaissance.harness.RenaissanceSuite$`                |
| <0.1% |  512 KiB |       1 | `lambda$boxed$0(int)`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

#### Lines

Lines ranked by contribution to each function's self size.

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|      % |     Size | Samples | Location                |
| -----: | -------: | ------: | ----------------------- |
| 100.0% | 33.5 GiB |  68,206 | `java.util.Arrays:3482` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |    Size | Samples | Location                                                       |
| -----: | ------: | ------: | -------------------------------------------------------------- |
| 100.0% | 1.7 GiB |   3,477 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:223` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

|      % |    Size | Samples | Location                 |
| -----: | ------: | ------: | ------------------------ |
| 100.0% | 269 MiB |     538 | `java.util.HashMap:1909` |

##### `grow(int)` (`java.util.ArrayList`)

|      % |    Size | Samples | Location                  |
| -----: | ------: | ------: | ------------------------- |
| 100.0% | 237 MiB |     475 | `java.util.ArrayList:239` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % |    Size | Samples | Location                                                      |
| -----: | ------: | ------: | ------------------------------------------------------------- |
| 100.0% | 147 MiB |     295 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:419` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |    Size | Samples | Location                                                       |
| -----: | ------: | ------: | -------------------------------------------------------------- |
| 100.0% | 127 MiB |     254 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:261` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |    Size | Samples | Location                                        |
| -----: | ------: | ------: | ----------------------------------------------- |
| 100.0% | 119 MiB |     238 | `org.renaissance.jdk.concurrent.JavaKMeans:114` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |    Size | Samples | Location                                                       |
| -----: | ------: | ------: | -------------------------------------------------------------- |
| 100.0% | 114 MiB |     228 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:209` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |    Size | Samples | Location                                                       |
| -----: | ------: | ------: | -------------------------------------------------------------- |
| 100.0% | 102 MiB |     204 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |

##### `resize()` (`java.util.HashMap`)

|      % |   Size | Samples | Location                |
| -----: | -----: | ------: | ----------------------- |
| 100.0% | 97 MiB |     194 | `java.util.HashMap:710` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % |     Size | Samples | Location                                                      |
| -----: | -------: | ------: | ------------------------------------------------------------- |
| 100.0% | 79.5 MiB |     159 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:430` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % |   Size | Samples | Location                                                      |
| -----: | -----: | ------: | ------------------------------------------------------------- |
| 100.0% | 72 MiB |     144 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:400` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |   Size | Samples | Location                                        |
| -----: | -----: | ------: | ----------------------------------------------- |
| 100.0% | 67 MiB |     134 | `org.renaissance.jdk.concurrent.JavaKMeans:110` |

##### `valueOf(double)` (`java.lang.Double`)

|      % |   Size | Samples | Location               |
| -----: | -----: | ------: | ---------------------- |
| 100.0% | 64 MiB |     128 | `java.lang.Double:773` |

##### `intStream(Spliterator$OfInt, boolean)` (`java.util.stream.StreamSupport`)

|      % |     Size | Samples | Location                             |
| -----: | -------: | ------: | ------------------------------------ |
| 100.0% | 33.5 MiB |      67 | `java.util.stream.StreamSupport:138` |

##### `mapToObj(IntFunction, int)` (`java.util.stream.IntPipeline`)

|      % |     Size | Samples | Location                           |
| -----: | -------: | ------: | ---------------------------------- |
| 100.0% | 23.5 MiB |      47 | `java.util.stream.IntPipeline:174` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |     Size | Samples | Location                                       |
| -----: | -------: | ------: | ---------------------------------------------- |
| 100.0% | 19.5 MiB |      39 | `org.renaissance.jdk.concurrent.JavaKMeans:87` |

##### `copyOf(Object[], int, Class)` (`java.util.Arrays`)

|      % |     Size | Samples | Location                |
| -----: | -------: | ------: | ----------------------- |
| 100.0% | 19.4 MiB |      33 | `java.util.Arrays:3513` |

##### `entrySet()` (`java.util.HashMap`)

|      % |     Size | Samples | Location                 |
| -----: | -------: | ------: | ------------------------ |
| 100.0% | 15.5 MiB |      31 | `java.util.HashMap:1099` |

##### `range(int, int)` (`java.util.stream.IntStream`)

|      % |   Size | Samples | Location                          |
| -----: | -----: | ------: | --------------------------------- |
| 100.0% | 13 MiB |      26 | `java.util.stream.IntStream:1083` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

|      % |     Size | Samples | Location                |
| -----: | -------: | ------: | ----------------------- |
| 100.0% | 12.5 MiB |      25 | `java.util.Arrays:3541` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

|      % |    Size | Samples | Location                                  |
| -----: | ------: | ------: | ----------------------------------------- |
| 100.0% | 9.5 MiB |      19 | `java.lang.invoke.DirectMethodHandle:501` |

##### `opWrapSink(int, Sink)` (`java.util.stream.IntPipeline$1`)

|      % |    Size | Samples | Location                             |
| -----: | ------: | ------: | ------------------------------------ |
| 100.0% | 9.5 MiB |      19 | `java.util.stream.IntPipeline$1:177` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |    Size | Samples | Location                                                   |
| -----: | ------: | ------: | ---------------------------------------------------------- |
| 100.0% | 9.5 MiB |      19 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:314` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |  Size | Samples | Location                                                   |
| -----: | ----: | ------: | ---------------------------------------------------------- |
| 100.0% | 8 MiB |      16 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:352` |

##### `builder(long, IntFunction)` (`java.util.stream.Nodes`)

|      % |    Size | Samples | Location                     |
| -----: | ------: | ------: | ---------------------------- |
| 100.0% | 6.5 MiB |      13 | `java.util.stream.Nodes:168` |

##### `<init>(InputStream, Inflater, int)` (`java.util.zip.InflaterInputStream`)

|      % |  Size | Samples | Location                               |
| -----: | ----: | ------: | -------------------------------------- |
| 100.0% | 6 MiB |      12 | `java.util.zip.InflaterInputStream:89` |

##### `div(double[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |    Size | Samples | Location                                                   |
| -----: | ------: | ------: | ---------------------------------------------------------- |
| 100.0% | 2.5 MiB |       5 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:339` |

##### `doubleStream(Spliterator$OfDouble, boolean)` (`java.util.stream.StreamSupport`)

|      % |  Size | Samples | Location                             |
| -----: | ----: | ------: | ------------------------------------ |
| 100.0% | 2 MiB |       4 | `java.util.stream.StreamSupport:274` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|      % |    Size | Samples | Location                                |
| -----: | ------: | ------: | --------------------------------------- |
| 100.0% | 1.5 MiB |       3 | `java.util.concurrent.ForkJoinTask:437` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

|      % |    Size | Samples | Location                |
| -----: | ------: | ------: | ----------------------- |
| 100.0% | 1.5 MiB |       3 | `java.util.Arrays:3863` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |    Size | Samples | Location                                       |
| -----: | ------: | ------: | ---------------------------------------------- |
| 100.0% | 1.5 MiB |       3 | `org.renaissance.jdk.concurrent.JavaKMeans:53` |

##### `spliterator(double[], int, int, int)` (`java.util.Spliterators`)

|      % |     Size | Samples | Location                     |
| -----: | -------: | ------: | ---------------------------- |
| 100.0% | 1024 KiB |       2 | `java.util.Spliterators:372` |

##### `<init>(JavaKMeans, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |     Size | Samples | Location                                                   |
| -----: | -------: | ------: | ---------------------------------------------------------- |
| 100.0% | 1024 KiB |       2 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:282` |

##### `collectGarbage(String)` (`org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`)

|      % |     Size | Samples | Location                                                    |
| -----: | -------: | ------: | ----------------------------------------------------------- |
| 100.0% | 1024 KiB |       2 | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin:26` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |    Size | Samples | Location                                       |
| -----: | ------: | ------: | ---------------------------------------------- |
| 100.0% | 512 KiB |       1 | `org.renaissance.harness.RenaissanceSuite$:37` |

##### `lambda$boxed$0(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |    Size | Samples | Location                                                   |
| -----: | ------: | ------: | ---------------------------------------------------------- |
| 100.0% | 512 KiB |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:327` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|     % |     Size | Samples | Caller      | Location              |
| ----: | -------: | ------: | ----------- | --------------------- |
| 57.3% | 19.2 GiB |  38,964 | `grow(int)` | `java.util.ArrayList` |
| 42.7% | 14.3 GiB |  29,242 | `toArray()` | `java.util.ArrayList` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |    Size | Samples | Caller              | Location                                                   |
| -----: | ------: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% | 1.7 GiB |   3,477 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

|     % |     Size | Samples | Caller                                          | Location            |
| ----: | -------: | ------: | ----------------------------------------------- | ------------------- |
| 57.2% |  154 MiB |     308 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap` |
| 42.4% |  114 MiB |     228 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |
|  0.4% | 1024 KiB |       2 | `merge(Object, Object, BiFunction)`             | `java.util.HashMap` |

##### `grow(int)` (`java.util.ArrayList`)

|      % |    Size | Samples | Caller   | Location              |
| -----: | ------: | ------: | -------- | --------------------- |
| 100.0% | 237 MiB |     475 | `grow()` | `java.util.ArrayList` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % |    Size | Samples | Caller      | Location                                               |
| -----: | ------: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% | 147 MiB |     295 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |    Size | Samples | Caller      | Location                                               |
| -----: | ------: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% | 127 MiB |     254 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |    Size | Samples | Caller                  | Location                                                               |
| -----: | ------: | ------: | ----------------------- | ---------------------------------------------------------------------- |
| 100.0% | 119 MiB |     238 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187b38` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |    Size | Samples | Caller              | Location                                                   |
| -----: | ------: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% | 114 MiB |     228 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |    Size | Samples | Caller          | Location                                                                              |
| -----: | ------: | ------: | --------------- | ------------------------------------------------------------------------------------- |
| 100.0% | 102 MiB |     204 | `apply(Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000000801186b38` |

##### `resize()` (`java.util.HashMap`)

|     % |     Size | Samples | Caller                                          | Location            |
| ----: | -------: | ------: | ----------------------------------------------- | ------------------- |
| 64.9% |   63 MiB |     126 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap` |
| 34.5% | 33.5 MiB |      67 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |
|  0.5% |  512 KiB |       1 | `merge(Object, Object, BiFunction)`             | `java.util.HashMap` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % |     Size | Samples | Caller                               | Location                                                  |
| -----: | -------: | ------: | ------------------------------------ | --------------------------------------------------------- |
| 100.0% | 79.5 MiB |     159 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % |   Size | Samples | Caller              | Location                                                  |
| -----: | -----: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% | 72 MiB |     144 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % |     Size | Samples | Caller                     | Location                                                   |
| ----: | -------: | ------: | -------------------------- | ---------------------------------------------------------- |
| 98.5% |   66 MiB |     132 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  1.5% | 1024 KiB |       2 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

##### `valueOf(double)` (`java.lang.Double`)

|     % |     Size | Samples | Caller                                           | Location                                                     |
| ----: | -------: | ------: | ------------------------------------------------ | ------------------------------------------------------------ |
| 97.7% | 62.5 MiB |     125 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                  |
|  2.3% |  1.5 MiB |       3 | `apply(double)`                                  | `java.util.stream.DoublePipeline$$Lambda.0x00000008011c2258` |

##### `intStream(Spliterator$OfInt, boolean)` (`java.util.stream.StreamSupport`)

|      % |     Size | Samples | Caller            | Location                     |
| -----: | -------: | ------: | ----------------- | ---------------------------- |
| 100.0% | 33.5 MiB |      67 | `range(int, int)` | `java.util.stream.IntStream` |

##### `mapToObj(IntFunction, int)` (`java.util.stream.IntPipeline`)

|      % |     Size | Samples | Caller                  | Location                       |
| -----: | -------: | ------: | ----------------------- | ------------------------------ |
| 100.0% | 23.5 MiB |      47 | `mapToObj(IntFunction)` | `java.util.stream.IntPipeline` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |     Size | Samples | Caller       | Location                                                               |
| -----: | -------: | ------: | ------------ | ---------------------------------------------------------------------- |
| 100.0% | 19.5 MiB |      39 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801125d48` |

##### `copyOf(Object[], int, Class)` (`java.util.Arrays`)

|      % |     Size | Samples | Caller                  | Location           |
| -----: | -------: | ------: | ----------------------- | ------------------ |
| 100.0% | 19.4 MiB |      33 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `entrySet()` (`java.util.HashMap`)

|      % |     Size | Samples | Caller                        | Location            |
| -----: | -------: | ------: | ----------------------------- | ------------------- |
| 100.0% | 15.5 MiB |      31 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `range(int, int)` (`java.util.stream.IntStream`)

|      % |   Size | Samples | Caller                                           | Location                                    |
| -----: | -----: | ------: | ------------------------------------------------ | ------------------------------------------- |
| 100.0% | 13 MiB |      26 | `lambda$generateData$5(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

|     % |     Size | Samples | Caller                        | Location                          |
| ----: | -------: | ------: | ----------------------------- | --------------------------------- |
| 92.0% | 11.5 MiB |      23 | `getBytes()`                  | `jdk.internal.loader.Resource`    |
|  8.0% | 1024 KiB |       2 | `ensureCapacityInternal(int)` | `java.lang.AbstractStringBuilder` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

|      % |    Size | Samples | Caller                                       | Location                                             |
| -----: | ------: | ------: | -------------------------------------------- | ---------------------------------------------------- |
| 100.0% | 9.5 MiB |      19 | `newInvokeSpecial(Object, int, int, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000801126400` |

##### `opWrapSink(int, Sink)` (`java.util.stream.IntPipeline$1`)

|      % |    Size | Samples | Caller           | Location                            |
| -----: | ------: | ------: | ---------------- | ----------------------------------- |
| 100.0% | 9.5 MiB |      19 | `wrapSink(Sink)` | `java.util.stream.AbstractPipeline` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |    Size | Samples | Caller              | Location                                               |
| -----: | ------: | ------: | ------------------- | ------------------------------------------------------ |
| 100.0% | 9.5 MiB |      19 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |  Size | Samples | Caller      | Location                                               |
| -----: | ----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% | 8 MiB |      16 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `builder(long, IntFunction)` (`java.util.stream.Nodes`)

|      % |    Size | Samples | Caller                               | Location                             |
| -----: | ------: | ------: | ------------------------------------ | ------------------------------------ |
| 100.0% | 6.5 MiB |      13 | `makeNodeBuilder(long, IntFunction)` | `java.util.stream.ReferencePipeline` |

##### `<init>(InputStream, Inflater, int)` (`java.util.zip.InflaterInputStream`)

|      % |  Size | Samples | Caller                                                                                  | Location                                           |
| -----: | ----: | ------: | --------------------------------------------------------------------------------------- | -------------------------------------------------- |
| 100.0% | 6 MiB |      12 | `<init>(ZipFile, ZipFile$ZipFileInputStream, ZipFile$CleanableResource, Inflater, int)` | `java.util.zip.ZipFile$ZipFileInflaterInputStream` |

##### `allocateInstance(Class)` (`jdk.internal.misc.Unsafe`)

|      % |    Size | Samples | Caller                     | Location                              |
| -----: | ------: | ------: | -------------------------- | ------------------------------------- |
| 100.0% | 3.5 MiB |       7 | `allocateInstance(Object)` | `java.lang.invoke.DirectMethodHandle` |

##### `div(double[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |    Size | Samples | Caller          | Location                                               |
| -----: | ------: | ------: | --------------- | ------------------------------------------------------ |
| 100.0% | 2.5 MiB |       5 | `average(List)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `doubleStream(Spliterator$OfDouble, boolean)` (`java.util.stream.StreamSupport`)

|      % |  Size | Samples | Caller                       | Location           |
| -----: | ----: | ------: | ---------------------------- | ------------------ |
| 100.0% | 2 MiB |       4 | `stream(double[], int, int)` | `java.util.Arrays` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|      % |    Size | Samples | Caller   | Location                            |
| -----: | ------: | ------: | -------- | ----------------------------------- |
| 100.0% | 1.5 MiB |       3 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

|      % |    Size | Samples | Caller                          | Location           |
| -----: | ------: | ------: | ------------------------------- | ------------------ |
| 100.0% | 1.5 MiB |       3 | `copyOfRange(byte[], int, int)` | `java.util.Arrays` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |    Size | Samples | Caller   | Location                                                               |
| -----: | ------: | ------: | -------- | ---------------------------------------------------------------------- |
| 100.0% | 1.5 MiB |       3 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68` |

##### `spliterator(double[], int, int, int)` (`java.util.Spliterators`)

|      % |     Size | Samples | Caller                            | Location           |
| -----: | -------: | ------: | --------------------------------- | ------------------ |
| 100.0% | 1024 KiB |       2 | `spliterator(double[], int, int)` | `java.util.Arrays` |

##### `<init>(JavaKMeans, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |     Size | Samples | Caller                         | Location                                    |
| -----: | -------: | ------: | ------------------------------ | ------------------------------------------- |
| 100.0% | 1024 KiB |       2 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `collectGarbage(String)` (`org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`)

|      % |     Size | Samples | Caller                                      | Location                                                 |
| -----: | -------: | ------: | ------------------------------------------- | -------------------------------------------------------- |
| 100.0% | 1024 KiB |       2 | `afterOperationSetUp(String, int, boolean)` | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |    Size | Samples | Caller           | Location                                   |
| -----: | ------: | ------: | ---------------- | ------------------------------------------ |
| 100.0% | 512 KiB |       1 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `lambda$boxed$0(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |    Size | Samples | Caller       | Location                                                                          |
| -----: | ------: | ------: | ------------ | --------------------------------------------------------------------------------- |
| 100.0% | 512 KiB |       1 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask$$Lambda.0x000000080118c9c0` |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |     Size | Samples | Function                                             | Location                                                               |
| ----: | -------: | ------: | ---------------------------------------------------- | ---------------------------------------------------------------------- |
| 99.4% | 36.6 GiB |  74,662 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                                    |
| 99.4% | 36.6 GiB |  74,662 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
| 99.4% | 36.6 GiB |  74,662 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                                    |
| 99.4% | 36.6 GiB |  74,662 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                                    |
| 99.4% | 36.6 GiB |  74,662 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`                            |
| 99.4% | 36.6 GiB |  74,657 | `compute()`                                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| 99.4% | 36.6 GiB |  74,657 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                                   |
| 90.9% | 33.5 GiB |  68,239 | `copyOf(Object[], int)`                              | `java.util.Arrays`                                                     |
| 79.3% | 29.2 GiB |  59,794 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                                    |
| 79.3% | 29.2 GiB |  59,794 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                                    |
| 78.4% | 28.9 GiB |  59,118 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
| 76.2% |   28 GiB |  57,120 | `merge(Map, Map)`                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 76.1% |   28 GiB |  57,113 | `combineResults(Map, Map)`                           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 76.1% |   28 GiB |  57,113 | `combineResults(Object, Object)`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 75.6% | 27.8 GiB |  56,664 | `merge(Object, Object, BiFunction)`                  | `java.util.HashMap`                                                    |
| 75.6% | 27.8 GiB |  56,664 | `lambda$merge$7(Map, Object, List)`                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 75.6% | 27.8 GiB |  56,664 | `accept(Object, Object)`                             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187460` |
| 75.6% | 27.8 GiB |  56,664 | `forEach(BiConsumer)`                                | `java.util.HashMap`                                                    |
| 75.5% | 27.8 GiB |  56,661 | `lambda$merge$6(List, List)`                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 75.5% | 27.8 GiB |  56,661 | `apply(Object, Object)`                              | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187b38` |

#### Categories

##### Standard library

|     % |     Size | Samples | Function                                             | Location                                            |
| ----: | -------: | ------: | ---------------------------------------------------- | --------------------------------------------------- |
| 99.4% | 36.6 GiB |  74,662 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                 |
| 99.4% | 36.6 GiB |  74,662 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| 99.4% | 36.6 GiB |  74,662 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                 |
| 99.4% | 36.6 GiB |  74,662 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                 |
| 99.4% | 36.6 GiB |  74,662 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`         |
| 99.4% | 36.6 GiB |  74,657 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                |
| 90.9% | 33.5 GiB |  68,239 | `copyOf(Object[], int)`                              | `java.util.Arrays`                                  |
| 79.3% | 29.2 GiB |  59,794 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                 |
| 79.3% | 29.2 GiB |  59,794 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                 |
| 78.4% | 28.9 GiB |  59,118 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| 75.6% | 27.8 GiB |  56,664 | `merge(Object, Object, BiFunction)`                  | `java.util.HashMap`                                 |
| 75.6% | 27.8 GiB |  56,664 | `forEach(BiConsumer)`                                | `java.util.HashMap`                                 |
| 56.4% | 20.8 GiB |  42,207 | `addAll(Collection)`                                 | `java.util.ArrayList`                               |
| 52.7% | 19.4 GiB |  39,452 | `grow(int)`                                          | `java.util.ArrayList`                               |
| 38.8% | 14.3 GiB |  29,262 | `toArray()`                                          | `java.util.ArrayList`                               |
| 20.6% | 7.58 GiB |  15,204 | `invoke()`                                           | `java.util.concurrent.ForkJoinTask`                 |
| 20.2% | 7.44 GiB |  14,930 | `exec()`                                             | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
| 18.9% | 6.94 GiB |  14,216 | `<init>(Collection)`                                 | `java.util.ArrayList`                               |
| 16.3% |    6 GiB |  12,291 | `grow()`                                             | `java.util.ArrayList`                               |
| 16.3% |    6 GiB |  12,291 | `add(Object, Object[], int)`                         | `java.util.ArrayList`                               |

##### Ours

|     % |     Size | Samples | Function                                                                                                               | Location                                                               |
| ----: | -------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| 99.4% | 36.6 GiB |  74,657 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| 76.2% |   28 GiB |  57,120 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 76.1% |   28 GiB |  57,113 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 76.1% |   28 GiB |  57,113 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 75.6% | 27.8 GiB |  56,664 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 75.6% | 27.8 GiB |  56,664 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187460` |
| 75.5% | 27.8 GiB |  56,661 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 75.5% | 27.8 GiB |  56,661 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187b38` |
| 22.0% | 8.12 GiB |  16,626 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 20.2% | 7.44 GiB |  14,930 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 20.2% | 7.44 GiB |  14,930 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68` |
| 17.4% | 6.42 GiB |  13,149 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  4.6% |  1.7 GiB |   3,477 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  0.6% |  219 MiB |     432 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                        |
|  0.6% |  219 MiB |     432 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                        |
|  0.6% |  217 MiB |     429 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                        |
|  0.6% |  216 MiB |     426 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
|  0.6% |  213 MiB |     421 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
|  0.5% |  198 MiB |     390 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
|  0.5% |  198 MiB |     390 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|      % |     Size | Samples | Callee   | Location                                            |
| -----: | -------: | ------: | -------- | --------------------------------------------------- |
| 100.0% | 36.6 GiB |  74,657 | `exec()` | `java.util.concurrent.RecursiveTask`                |
|  20.3% | 7.44 GiB |  14,930 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % |     Size | Samples | Callee     | Location                            |
| -----: | -------: | ------: | ---------- | ----------------------------------- |
| 100.0% | 36.6 GiB |  74,662 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|      % |     Size | Samples | Callee                                               | Location                                      |
| -----: | -------: | ------: | ---------------------------------------------------- | --------------------------------------------- |
| 100.0% | 36.6 GiB |  74,662 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % |     Size | Samples | Callee                                   | Location                            |
| -----: | -------: | ------: | ---------------------------------------- | ----------------------------------- |
| 100.0% | 36.6 GiB |  74,662 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|      % |     Size | Samples | Callee                              | Location                            |
| -----: | -------: | ------: | ----------------------------------- | ----------------------------------- |
| 100.0% | 36.6 GiB |  74,662 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|     % |     Size | Samples | Callee                           | Location                                                   |
| ----: | -------: | ------: | -------------------------------- | ---------------------------------------------------------- |
| 79.8% | 29.2 GiB |  59,794 | `join()`                         | `java.util.concurrent.ForkJoinTask`                        |
| 76.6% |   28 GiB |  57,113 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 22.2% | 8.12 GiB |  16,626 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.5% |  171 MiB |     343 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  0.4% |  147 MiB |     295 | `createSubtask(int, int)`        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % |     Size | Samples | Callee      | Location                                               |
| -----: | -------: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% | 36.6 GiB |  74,657 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|    % |     Size | Samples | Callee                         | Location           |
| ---: | -------: | ------: | ------------------------------ | ------------------ |
| 0.1% | 19.4 MiB |      33 | `copyOf(Object[], int, Class)` | `java.util.Arrays` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|     % |     Size | Samples | Callee                                                    | Location                                      |
| ----: | -------: | ------: | --------------------------------------------------------- | --------------------------------------------- |
| 98.9% | 28.9 GiB |  59,118 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| 18.4% | 5.36 GiB |  10,985 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % |     Size | Samples | Callee                 | Location                            |
| -----: | -------: | ------: | ---------------------- | ----------------------------------- |
| 100.0% | 29.2 GiB |  59,794 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % |     Size | Samples | Callee     | Location                            |
| -----: | -------: | ------: | ---------- | ----------------------------------- |
| 100.0% | 28.9 GiB |  59,118 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % |     Size | Samples | Callee                                                           | Location                               |
| ----: | -------: | ------: | ---------------------------------------------------------------- | -------------------------------------- |
| 99.2% | 27.8 GiB |  56,664 | `forEach(BiConsumer)`                                            | `java.util.HashMap`                    |
|  0.6% |  160 MiB |     321 | `<init>(Map)`                                                    | `java.util.HashMap`                    |
| <0.1% |  512 KiB |       1 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |   Size | Samples | Callee            | Location                                    |
| -----: | -----: | ------: | ----------------- | ------------------------------------------- |
| 100.0% | 28 GiB |  57,113 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |   Size | Samples | Callee                     | Location                                                   |
| -----: | -----: | ------: | -------------------------- | ---------------------------------------------------------- |
| 100.0% | 28 GiB |  57,113 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|      % |     Size | Samples | Callee                                       | Location                                                               |
| -----: | -------: | ------: | -------------------------------------------- | ---------------------------------------------------------------------- |
| 100.0% | 27.8 GiB |  56,661 | `apply(Object, Object)`                      | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187b38` |
|  <0.1% | 1024 KiB |       2 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap`                                                    |
|  <0.1% |  512 KiB |       1 | `resize()`                                   | `java.util.HashMap`                                                    |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |     Size | Samples | Callee                              | Location            |
| -----: | -------: | ------: | ----------------------------------- | ------------------- |
| 100.0% | 27.8 GiB |  56,664 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187460`)

|      % |     Size | Samples | Callee                              | Location                                    |
| -----: | -------: | ------: | ----------------------------------- | ------------------------------------------- |
| 100.0% | 27.8 GiB |  56,664 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|      % |     Size | Samples | Callee                   | Location                                                               |
| -----: | -------: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| 100.0% | 27.8 GiB |  56,664 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187460` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % |     Size | Samples | Callee               | Location              |
| ----: | -------: | ------: | -------------------- | --------------------- |
| 74.6% | 20.8 GiB |  42,207 | `addAll(Collection)` | `java.util.ArrayList` |
| 25.0% | 6.94 GiB |  14,216 | `<init>(Collection)` | `java.util.ArrayList` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187b38`)

|      % |     Size | Samples | Callee                       | Location                                    |
| -----: | -------: | ------: | ---------------------------- | ------------------------------------------- |
| 100.0% | 27.8 GiB |  56,661 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `addAll(Collection)` (`java.util.ArrayList`)

|     % |     Size | Samples | Callee      | Location              |
| ----: | -------: | ------: | ----------- | --------------------- |
| 64.6% | 13.4 GiB |  27,161 | `grow(int)` | `java.util.ArrayList` |
| 35.4% | 7.35 GiB |  15,046 | `toArray()` | `java.util.ArrayList` |

##### `grow(int)` (`java.util.ArrayList`)

|     % |     Size | Samples | Callee                  | Location           |
| ----: | -------: | ------: | ----------------------- | ------------------ |
| 98.8% | 19.2 GiB |  38,977 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `toArray()` (`java.util.ArrayList`)

|      % |     Size | Samples | Callee                  | Location           |
| -----: | -------: | ------: | ----------------------- | ------------------ |
| 100.0% | 14.3 GiB |  29,262 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |     Size | Samples | Callee                   | Location                                                   |
| -----: | -------: | ------: | ------------------------ | ---------------------------------------------------------- |
| 100.0% | 8.12 GiB |  16,626 | `computeDirectly()`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  79.1% | 6.42 GiB |  13,149 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  20.9% |  1.7 GiB |   3,477 | `findNearestCentroid()`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

|      % |     Size | Samples | Callee     | Location                            |
| -----: | -------: | ------: | ---------- | ----------------------------------- |
| 100.0% | 7.58 GiB |  15,204 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

|      % |     Size | Samples | Callee   | Location                                                               |
| -----: | -------: | ------: | -------- | ---------------------------------------------------------------------- |
| 100.0% | 7.44 GiB |  14,930 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |     Size | Samples | Callee                    | Location                                               |
| -----: | -------: | ------: | ------------------------- | ------------------------------------------------------ |
| 100.0% | 7.44 GiB |  14,925 | `invoke()`                | `java.util.concurrent.ForkJoinTask`                    |
|  <0.1% | 1024 KiB |       2 | `<init>(JavaKMeans, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68`)

|      % |     Size | Samples | Callee                         | Location                                    |
| -----: | -------: | ------: | ------------------------------ | ------------------------------------------- |
| 100.0% | 7.44 GiB |  14,930 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `<init>(Collection)` (`java.util.ArrayList`)

|      % |     Size | Samples | Callee      | Location              |
| -----: | -------: | ------: | ----------- | --------------------- |
| 100.0% | 6.94 GiB |  14,216 | `toArray()` | `java.util.ArrayList` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % |    Size | Samples | Callee                              | Location              |
| ----: | ------: | ------: | ----------------------------------- | --------------------- |
| 93.4% |   6 GiB |  12,283 | `add(Object)`                       | `java.util.ArrayList` |
|  4.9% | 319 MiB |     638 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`   |

##### `grow()` (`java.util.ArrayList`)

|      % |  Size | Samples | Callee      | Location              |
| -----: | ----: | ------: | ----------- | --------------------- |
| 100.0% | 6 GiB |  12,291 | `grow(int)` | `java.util.ArrayList` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

|      % |  Size | Samples | Callee   | Location              |
| -----: | ----: | ------: | -------- | --------------------- |
| 100.0% | 6 GiB |  12,291 | `grow()` | `java.util.ArrayList` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

|     % |     Size | Samples | Callee                                                      | Location                        |
| ----: | -------: | ------: | ----------------------------------------------------------- | ------------------------------- |
| 99.3% |  217 MiB |     429 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher` |
|  0.5% | 1024 KiB |       2 | `createScratchRoot(Path, boolean)`                          | `org.renaissance.core.Launcher` |
|  0.2% |  512 KiB |       1 | `getScratchBase(String[])`                                  | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.core.Launcher`)

|      % |    Size | Samples | Callee                                 | Location                        |
| -----: | ------: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 219 MiB |     432 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

|     % |    Size | Samples | Callee                               | Location                            |
| ----: | ------: | ------: | ------------------------------------ | ----------------------------------- |
| 99.3% | 216 MiB |     426 | `invoke(Object, Object[])`           | `java.lang.reflect.Method`          |
|  0.7% | 1.5 MiB |       3 | `createClassLoaderForModule(String)` | `org.renaissance.core.ModuleLoader` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

|     % |    Size | Samples | Callee              | Location                                    |
| ----: | ------: | ------: | ------------------- | ------------------------------------------- |
| 98.8% | 213 MiB |     421 | `main(String[])`    | `org.renaissance.harness.RenaissanceSuite$` |
|  1.2% | 2.5 MiB |       5 | `loadClass(String)` | `java.lang.ClassLoader`                     |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|     % |    Size | Samples | Callee                                                                        | Location                                    |
| ----: | ------: | ------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
| 92.7% | 198 MiB |     390 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |
|  2.3% |   5 MiB |      10 | `parse(String[])`                                                             | `org.renaissance.harness.ConfigParser`      |
|  1.9% |   4 MiB |       8 | `<clinit>()`                                                                  | `scala.Predef$`                             |
|  1.4% |   3 MiB |       6 | `<init>(Map)`                                                                 | `org.renaissance.harness.ConfigParser`      |
|  0.7% | 1.5 MiB |       3 | `apply(Seq)`                                                                  | `scala.collection.immutable.Map$`           |

##### `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`)

|     % |    Size | Samples | Callee                             | Location                                  |
| ----: | ------: | ------: | ---------------------------------- | ----------------------------------------- |
| 93.4% | 185 MiB |     364 | `setUpBeforeAll(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |
|  6.6% |  13 MiB |      26 | `executeOperation(int)`            | `org.renaissance.harness.ExecutionDriver` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |    Size | Samples | Callee               | Location                                  |
| -----: | ------: | ------: | -------------------- | ----------------------------------------- |
| 100.0% | 198 MiB |     390 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

Common call stack: `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|    % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ---: | -------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 6.4% | 2.37 GiB |   4,858 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187b38`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187460`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 3.8% | 1.41 GiB |   2,891 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187b38`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187460`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 3.8% | 1.41 GiB |   2,881 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187b38`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187460`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 3.5% | 1.27 GiB |   2,602 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187b38`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187460`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 3.2% | 1.18 GiB |   2,424 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187b38`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187460`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 3.1% | 1.14 GiB |   2,343 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                   |
| 3.0% |  1.1 GiB |   1,932 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187b38`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187460`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 2.8% | 1.03 GiB |   2,105 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187b38`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187460`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 2.6% |  988 MiB |   1,976 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187b38`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187460`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 2.4% |  890 MiB |   1,780 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187b38`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187460`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 2.2% |  841 MiB |   1,683 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187b38`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187460`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 2.1% |  799 MiB |   1,598 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) |
| 2.1% |  782 MiB |   1,565 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 2.0% |  764 MiB |   1,529 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187b38`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187460`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.8% |  672 MiB |   1,345 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187b38`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187460`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.7% |  655 MiB |   1,310 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187b38`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187460`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                           |
| 1.6% |  593 MiB |   1,186 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187b38`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187460`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.5% |  577 MiB |   1,155 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187b38`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187460`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.5% |  568 MiB |   1,137 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187b38`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187460`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.5% |  557 MiB |   1,114 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187b38`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187460`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

# Lock contention profile

Blocked 2.7ms over 28 contentions (96.7µs per contention).

| Category         |      % |  Time | Contentions |
| ---------------- | -----: | ----: | ----------: |
| Standard library | 100.0% | 2.7ms |          28 |

## Hottest functions

### Self time

Functions ranked by time blocked directly in the function body, excluding callees.

#### Categories

##### Standard library

|     % |   Time | Contentions | Function                                                                                             | Location                                            |
| ----: | -----: | ----------: | ---------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| 64.8% |  1.8ms |           7 | `loadClass(String, boolean)`                                                                         | `java.lang.ClassLoader`                             |
| 12.7% |  0.3ms |           2 | `loadClassOrNull(String, boolean)`                                                                   | `jdk.internal.loader.BuiltinClassLoader`            |
| 11.1% |  0.3ms |           5 | `doubleStream(Spliterator$OfDouble, boolean)`                                                        | `java.util.stream.StreamSupport`                    |
|  7.2% |  0.2ms |           7 | `opWrapSink(int, Sink)`                                                                              | `java.util.stream.DoublePipeline$1`                 |
|  1.8% | 49.3µs |           1 | `<init>(boolean)`                                                                                    | `java.util.concurrent.locks.ReentrantReadWriteLock` |
|  1.2% | 32.5µs |           2 | `mapToObj(DoubleFunction, int)`                                                                      | `java.util.stream.DoublePipeline`                   |
|  0.5% | 14.5µs |           1 | `defineClass0(ClassLoader, Class, String, byte[], int, int, ProtectionDomain, boolean, int, Object)` | `java.lang.ClassLoader`                             |
|  0.4% | 10.0µs |           1 | `newDirectoryStream(Path)`                                                                           | `java.nio.file.Files`                               |
|  0.1% |  3.5µs |           1 | `<init>(Collection, int)`                                                                            | `java.nio.file.FileTreeWalker`                      |
|  0.1% |  3.5µs |           1 | `<init>(UnixPath, long, DirectoryStream$Filter)`                                                     | `sun.nio.fs.UnixDirectoryStream`                    |

#### Lines

Lines ranked by contribution to each function's self time.

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|      % |  Time | Contentions | Location                    |
| -----: | ----: | ----------: | --------------------------- |
| 100.0% | 1.8ms |           7 | `java.lang.ClassLoader:573` |

##### `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

|      % |  Time | Contentions | Location                                     |
| -----: | ----: | ----------: | -------------------------------------------- |
| 100.0% | 0.3ms |           2 | `jdk.internal.loader.BuiltinClassLoader:651` |

##### `doubleStream(Spliterator$OfDouble, boolean)` (`java.util.stream.StreamSupport`)

|      % |  Time | Contentions | Location                             |
| -----: | ----: | ----------: | ------------------------------------ |
| 100.0% | 0.3ms |           5 | `java.util.stream.StreamSupport:274` |

##### `opWrapSink(int, Sink)` (`java.util.stream.DoublePipeline$1`)

|      % |  Time | Contentions | Location                                |
| -----: | ----: | ----------: | --------------------------------------- |
| 100.0% | 0.2ms |           7 | `java.util.stream.DoublePipeline$1:173` |

##### `<init>(boolean)` (`java.util.concurrent.locks.ReentrantReadWriteLock`)

|      % |   Time | Contentions | Location                                                |
| -----: | -----: | ----------: | ------------------------------------------------------- |
| 100.0% | 49.3µs |           1 | `java.util.concurrent.locks.ReentrantReadWriteLock:241` |

##### `mapToObj(DoubleFunction, int)` (`java.util.stream.DoublePipeline`)

|      % |   Time | Contentions | Location                              |
| -----: | -----: | ----------: | ------------------------------------- |
| 100.0% | 32.5µs |           2 | `java.util.stream.DoublePipeline:170` |

##### `newDirectoryStream(Path)` (`java.nio.file.Files`)

|      % |   Time | Contentions | Location                  |
| -----: | -----: | ----------: | ------------------------- |
| 100.0% | 10.0µs |           1 | `java.nio.file.Files:482` |

##### `<init>(Collection, int)` (`java.nio.file.FileTreeWalker`)

|      % |  Time | Contentions | Location                           |
| -----: | ----: | ----------: | ---------------------------------- |
| 100.0% | 3.5µs |           1 | `java.nio.file.FileTreeWalker:192` |

##### `<init>(UnixPath, long, DirectoryStream$Filter)` (`sun.nio.fs.UnixDirectoryStream`)

|      % |  Time | Contentions | Location                            |
| -----: | ----: | ----------: | ----------------------------------- |
| 100.0% | 3.5µs |           1 | `sun.nio.fs.UnixDirectoryStream:52` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|      % |  Time | Contentions | Caller              | Location                |
| -----: | ----: | ----------: | ------------------- | ----------------------- |
| 100.0% | 1.8ms |           7 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

|      % |  Time | Contentions | Caller                       | Location                                 |
| -----: | ----: | ----------: | ---------------------------- | ---------------------------------------- |
| 100.0% | 0.3ms |           2 | `loadClass(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `doubleStream(Spliterator$OfDouble, boolean)` (`java.util.stream.StreamSupport`)

|      % |  Time | Contentions | Caller                       | Location           |
| -----: | ----: | ----------: | ---------------------------- | ------------------ |
| 100.0% | 0.3ms |           5 | `stream(double[], int, int)` | `java.util.Arrays` |

##### `opWrapSink(int, Sink)` (`java.util.stream.DoublePipeline$1`)

|      % |  Time | Contentions | Caller           | Location                            |
| -----: | ----: | ----------: | ---------------- | ----------------------------------- |
| 100.0% | 0.2ms |           7 | `wrapSink(Sink)` | `java.util.stream.AbstractPipeline` |

##### `<init>(boolean)` (`java.util.concurrent.locks.ReentrantReadWriteLock`)

|      % |   Time | Contentions | Caller                                           | Location                         |
| -----: | -----: | ----------: | ------------------------------------------------ | -------------------------------- |
| 100.0% | 49.3µs |           1 | `<init>(UnixPath, long, DirectoryStream$Filter)` | `sun.nio.fs.UnixDirectoryStream` |

##### `mapToObj(DoubleFunction, int)` (`java.util.stream.DoublePipeline`)

|      % |   Time | Contentions | Caller    | Location                          |
| -----: | -----: | ----------: | --------- | --------------------------------- |
| 100.0% | 32.5µs |           2 | `boxed()` | `java.util.stream.DoublePipeline` |

##### `defineClass0(ClassLoader, Class, String, byte[], int, int, ProtectionDomain, boolean, int, Object)` (`java.lang.ClassLoader`)

|      % |   Time | Contentions | Caller                                                                                    | Location             |
| -----: | -----: | ----------: | ----------------------------------------------------------------------------------------- | -------------------- |
| 100.0% | 14.5µs |           1 | `defineClass(ClassLoader, Class, String, byte[], ProtectionDomain, boolean, int, Object)` | `java.lang.System$2` |

##### `newDirectoryStream(Path)` (`java.nio.file.Files`)

|      % |   Time | Contentions | Caller                          | Location                       |
| -----: | -----: | ----------: | ------------------------------- | ------------------------------ |
| 100.0% | 10.0µs |           1 | `visit(Path, boolean, boolean)` | `java.nio.file.FileTreeWalker` |

##### `<init>(Collection, int)` (`java.nio.file.FileTreeWalker`)

|      % |  Time | Contentions | Caller                                      | Location              |
| -----: | ----: | ----------: | ------------------------------------------- | --------------------- |
| 100.0% | 3.5µs |           1 | `walkFileTree(Path, Set, int, FileVisitor)` | `java.nio.file.Files` |

##### `<init>(UnixPath, long, DirectoryStream$Filter)` (`sun.nio.fs.UnixDirectoryStream`)

|      % |  Time | Contentions | Caller                                             | Location                            |
| -----: | ----: | ----------: | -------------------------------------------------- | ----------------------------------- |
| 100.0% | 3.5µs |           1 | `newDirectoryStream(Path, DirectoryStream$Filter)` | `sun.nio.fs.UnixFileSystemProvider` |

### Total time

Functions ranked by total time blocked in the function and all its callees.

|     % |  Time | Contentions | Function                                             | Location                                                   |
| ----: | ----: | ----------: | ---------------------------------------------------- | ---------------------------------------------------------- |
| 84.9% | 2.3ms |          22 | `computeClusterAverages()`                           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| 84.9% | 2.3ms |          22 | `computeDirectly()`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| 84.9% | 2.3ms |          22 | `compute()`                                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
| 84.9% | 2.3ms |          22 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                       |
| 84.9% | 2.3ms |          22 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                        |
| 84.9% | 2.3ms |          22 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| 84.9% | 2.3ms |          22 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                        |
| 84.9% | 2.3ms |          22 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                        |
| 84.9% | 2.3ms |          22 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`                |
| 77.5% | 2.1ms |           9 | `loadClass(String)`                                  | `java.lang.ClassLoader`                                    |
| 64.8% | 1.8ms |           7 | `loadClass(String, boolean)`                         | `java.lang.ClassLoader`                                    |
| 59.2% | 1.6ms |           4 | `average(List)`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| 52.8% | 1.4ms |          11 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| 52.8% | 1.4ms |          11 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                        |
| 52.8% | 1.4ms |          11 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                        |
| 25.7% | 0.7ms |          18 | `boxed(double[])`                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| 15.1% | 0.4ms |           6 | `deleteRecursively(Path, boolean)`                   | `org.renaissance.core.DirUtils`                            |
| 15.1% | 0.4ms |           6 | `deleteRecursively(Path)`                            | `org.renaissance.core.DirUtils`                            |
| 15.1% | 0.4ms |           6 | `lambda$createScratchDirectory$1(Path)`              | `org.renaissance.core.DirUtils`                            |
| 15.1% | 0.4ms |           6 | `run()`                                              | `org.renaissance.core.DirUtils$$Lambda.0x0000000801003a68` |

#### Categories

##### Standard library

|     % |  Time | Contentions | Function                                             | Location                                          |
| ----: | ----: | ----------: | ---------------------------------------------------- | ------------------------------------------------- |
| 84.9% | 2.3ms |          22 | `exec()`                                             | `java.util.concurrent.RecursiveTask`              |
| 84.9% | 2.3ms |          22 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`               |
| 84.9% | 2.3ms |          22 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`     |
| 84.9% | 2.3ms |          22 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`               |
| 84.9% | 2.3ms |          22 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`               |
| 84.9% | 2.3ms |          22 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`       |
| 77.5% | 2.1ms |           9 | `loadClass(String)`                                  | `java.lang.ClassLoader`                           |
| 64.8% | 1.8ms |           7 | `loadClass(String, boolean)`                         | `java.lang.ClassLoader`                           |
| 52.8% | 1.4ms |          11 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`     |
| 52.8% | 1.4ms |          11 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`               |
| 52.8% | 1.4ms |          11 | `join()`                                             | `java.util.concurrent.ForkJoinTask`               |
| 15.1% | 0.4ms |           6 | `runWith(Object, Runnable)`                          | `java.lang.Thread`                                |
| 15.1% | 0.4ms |           6 | `run()`                                              | `java.lang.Thread`                                |
| 12.7% | 0.3ms |           2 | `loadClassOrNull(String, boolean)`                   | `jdk.internal.loader.BuiltinClassLoader`          |
| 12.7% | 0.3ms |           2 | `loadClass(String, boolean)`                         | `jdk.internal.loader.BuiltinClassLoader`          |
| 12.7% | 0.3ms |           2 | `loadClass(String, boolean)`                         | `jdk.internal.loader.ClassLoaders$AppClassLoader` |
| 11.1% | 0.3ms |           5 | `doubleStream(Spliterator$OfDouble, boolean)`        | `java.util.stream.StreamSupport`                  |
| 11.1% | 0.3ms |           5 | `stream(double[], int, int)`                         | `java.util.Arrays`                                |
| 11.1% | 0.3ms |           5 | `stream(double[])`                                   | `java.util.Arrays`                                |
|  7.2% | 0.2ms |           7 | `opWrapSink(int, Sink)`                              | `java.util.stream.DoublePipeline$1`               |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|     % |  Time | Contentions | Callee            | Location                                               |
| ----: | ----: | ----------: | ----------------- | ------------------------------------------------------ |
| 69.7% | 1.6ms |           4 | `average(List)`   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 30.3% | 0.7ms |          18 | `boxed(double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |  Time | Contentions | Callee                     | Location                                               |
| -----: | ----: | ----------: | -------------------------- | ------------------------------------------------------ |
| 100.0% | 2.3ms |          22 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 100.0% | 2.3ms |          22 | `computeDirectly()`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % |  Time | Contentions | Callee              | Location                                               |
| -----: | ----: | ----------: | ------------------- | ------------------------------------------------------ |
| 100.0% | 2.3ms |          22 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  62.2% | 1.4ms |          11 | `join()`            | `java.util.concurrent.ForkJoinTask`                    |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % |  Time | Contentions | Callee      | Location                                               |
| -----: | ----: | ----------: | ----------- | ------------------------------------------------------ |
| 100.0% | 2.3ms |          22 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|      % |  Time | Contentions | Callee   | Location                                            |
| -----: | ----: | ----------: | -------- | --------------------------------------------------- |
| 100.0% | 2.3ms |          22 | `exec()` | `java.util.concurrent.RecursiveTask`                |
|   5.8% | 0.1ms |           3 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % |  Time | Contentions | Callee     | Location                            |
| -----: | ----: | ----------: | ---------- | ----------------------------------- |
| 100.0% | 2.3ms |          22 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|      % |  Time | Contentions | Callee                                               | Location                                      |
| -----: | ----: | ----------: | ---------------------------------------------------- | --------------------------------------------- |
| 100.0% | 2.3ms |          22 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % |  Time | Contentions | Callee                                   | Location                            |
| -----: | ----: | ----------: | ---------------------------------------- | ----------------------------------- |
| 100.0% | 2.3ms |          22 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|      % |  Time | Contentions | Callee                              | Location                            |
| -----: | ----: | ----------: | ----------------------------------- | ----------------------------------- |
| 100.0% | 2.3ms |          22 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `loadClass(String)` (`java.lang.ClassLoader`)

|     % |  Time | Contentions | Callee                       | Location                                          |
| ----: | ----: | ----------: | ---------------------------- | ------------------------------------------------- |
| 83.7% | 1.8ms |           7 | `loadClass(String, boolean)` | `java.lang.ClassLoader`                           |
| 16.3% | 0.3ms |           2 | `loadClass(String, boolean)` | `jdk.internal.loader.ClassLoaders$AppClassLoader` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |  Time | Contentions | Callee              | Location                |
| -----: | ----: | ----------: | ------------------- | ----------------------- |
| 100.0% | 1.6ms |           4 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % |  Time | Contentions | Callee     | Location                            |
| -----: | ----: | ----------: | ---------- | ----------------------------------- |
| 100.0% | 1.4ms |          11 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|      % |  Time | Contentions | Callee                                    | Location                                      |
| -----: | ----: | ----------: | ----------------------------------------- | --------------------------------------------- |
| 100.0% | 1.4ms |          11 | `tryRemoveAndExec(ForkJoinTask, boolean)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % |  Time | Contentions | Callee                 | Location                            |
| -----: | ----: | ----------: | ---------------------- | ----------------------------------- |
| 100.0% | 1.4ms |          11 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|     % |   Time | Contentions | Callee                 | Location                             |
| ----: | -----: | ----------: | ---------------------- | ------------------------------------ |
| 43.3% |  0.3ms |           5 | `stream(double[])`     | `java.util.Arrays`                   |
| 28.0% |  0.2ms |           7 | `toArray(IntFunction)` | `java.util.stream.ReferencePipeline` |
| 22.0% |  0.2ms |           3 | `loadClass(String)`    | `java.lang.ClassLoader`              |
|  6.7% | 47.0µs |           3 | `boxed()`              | `java.util.stream.DoublePipeline`    |

##### `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`)

|     % |  Time | Contentions | Callee                            | Location                |
| ----: | ----: | ----------: | --------------------------------- | ----------------------- |
| 82.3% | 0.3ms |           1 | `loadClass(String)`               | `java.lang.ClassLoader` |
| 17.7% | 0.1ms |           5 | `walkFileTree(Path, FileVisitor)` | `java.nio.file.Files`   |

##### `deleteRecursively(Path)` (`org.renaissance.core.DirUtils`)

|      % |  Time | Contentions | Callee                             | Location                        |
| -----: | ----: | ----------: | ---------------------------------- | ------------------------------- |
| 100.0% | 0.4ms |           6 | `deleteRecursively(Path, boolean)` | `org.renaissance.core.DirUtils` |

##### `lambda$createScratchDirectory$1(Path)` (`org.renaissance.core.DirUtils`)

|      % |  Time | Contentions | Callee                    | Location                        |
| -----: | ----: | ----------: | ------------------------- | ------------------------------- |
| 100.0% | 0.4ms |           6 | `deleteRecursively(Path)` | `org.renaissance.core.DirUtils` |

##### `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000000801003a68`)

|      % |  Time | Contentions | Callee                                  | Location                        |
| -----: | ----: | ----------: | --------------------------------------- | ------------------------------- |
| 100.0% | 0.4ms |           6 | `lambda$createScratchDirectory$1(Path)` | `org.renaissance.core.DirUtils` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|      % |  Time | Contentions | Callee  | Location                                                   |
| -----: | ----: | ----------: | ------- | ---------------------------------------------------------- |
| 100.0% | 0.4ms |           6 | `run()` | `org.renaissance.core.DirUtils$$Lambda.0x0000000801003a68` |

##### `run()` (`java.lang.Thread`)

|      % |  Time | Contentions | Callee                      | Location           |
| -----: | ----: | ----------: | --------------------------- | ------------------ |
| 100.0% | 0.4ms |           6 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `loadClass(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

|      % |  Time | Contentions | Callee                             | Location                                 |
| -----: | ----: | ----------: | ---------------------------------- | ---------------------------------------- |
| 100.0% | 0.3ms |           2 | `loadClassOrNull(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `loadClass(String, boolean)` (`jdk.internal.loader.ClassLoaders$AppClassLoader`)

|      % |  Time | Contentions | Callee                       | Location                                 |
| -----: | ----: | ----------: | ---------------------------- | ---------------------------------------- |
| 100.0% | 0.3ms |           2 | `loadClass(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `stream(double[], int, int)` (`java.util.Arrays`)

|      % |  Time | Contentions | Callee                                        | Location                         |
| -----: | ----: | ----------: | --------------------------------------------- | -------------------------------- |
| 100.0% | 0.3ms |           5 | `doubleStream(Spliterator$OfDouble, boolean)` | `java.util.stream.StreamSupport` |

##### `stream(double[])` (`java.util.Arrays`)

|      % |  Time | Contentions | Callee                       | Location           |
| -----: | ----: | ----------: | ---------------------------- | ------------------ |
| 100.0% | 0.3ms |           5 | `stream(double[], int, int)` | `java.util.Arrays` |

## Hottest call stacks

Call stacks ranked by time blocked in their leaf frame.

|     % |   Time | Contentions | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ----: | -----: | ----------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 40.2% |  1.1ms |           2 | `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 18.9% |  0.5ms |           2 | `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 12.4% |  0.3ms |           1 | `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`) ← `loadClass(String, boolean)` ← `loadClass(String, boolean)` (`jdk.internal.loader.ClassLoaders$AppClassLoader`) ← `loadClass(String)` (`java.lang.ClassLoader`) ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000000801003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  4.9% |  0.1ms |           2 | `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  4.6% |  0.1ms |           2 | `doubleStream(Spliterator$OfDouble, boolean)` (`java.util.stream.StreamSupport`) ← `stream(double[], int, int)` (`java.util.Arrays`) ← `stream(double[])` ← `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  4.3% |  0.1ms |           2 | `doubleStream(Spliterator$OfDouble, boolean)` (`java.util.stream.StreamSupport`) ← `stream(double[], int, int)` (`java.util.Arrays`) ← `stream(double[])` ← `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  2.7% |  0.1ms |           3 | `opWrapSink(int, Sink)` (`java.util.stream.DoublePipeline$1`) ← `wrapSink(Sink)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluate(Spliterator, boolean, IntFunction)` ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  2.4% |  0.1ms |           3 | `opWrapSink(int, Sink)` (`java.util.stream.DoublePipeline$1`) ← `wrapSink(Sink)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluate(Spliterator, boolean, IntFunction)` ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  2.2% |  0.1ms |           1 | `doubleStream(Spliterator$OfDouble, boolean)` (`java.util.stream.StreamSupport`) ← `stream(double[], int, int)` (`java.util.Arrays`) ← `stream(double[])` ← `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                          |
|  2.0% |  0.1ms |           1 | `opWrapSink(int, Sink)` (`java.util.stream.DoublePipeline$1`) ← `wrapSink(Sink)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluate(Spliterator, boolean, IntFunction)` ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`) |
|  1.8% | 49.3µs |           1 | `<init>(boolean)` (`java.util.concurrent.locks.ReentrantReadWriteLock`) ← `<init>(UnixPath, long, DirectoryStream$Filter)` (`sun.nio.fs.UnixDirectoryStream`) ← `newDirectoryStream(Path, DirectoryStream$Filter)` (`sun.nio.fs.UnixFileSystemProvider`) ← `newDirectoryStream(Path)` (`java.nio.file.Files`) ← `visit(Path, boolean, boolean)` (`java.nio.file.FileTreeWalker`) ← `walk(Path)` ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000000801003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.8% | 22.7µs |           1 | `mapToObj(DoubleFunction, int)` (`java.util.stream.DoublePipeline`) ← `boxed()` ← `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  0.7% | 19.5µs |           1 | `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                       |
|  0.5% | 14.5µs |           1 | `defineClass0(ClassLoader, Class, String, byte[], int, int, ProtectionDomain, boolean, int, Object)` (`java.lang.ClassLoader`) ← `defineClass(ClassLoader, Class, String, byte[], ProtectionDomain, boolean, int, Object)` (`java.lang.System$2`) ← `defineClass(boolean, Object)` (`java.lang.invoke.MethodHandles$Lookup$ClassDefiner`) ← `generateInnerClass()` (`java.lang.invoke.InnerClassLambdaMetafactory`) ← `spinInnerClass()` ← `buildCallSite()` ← `metafactory(MethodHandles$Lookup, String, MethodType, MethodType, MethodHandle, MethodType)` (`java.lang.invoke.LambdaMetafactory`) ← `invokeStatic(Object, Object, Object, Object, Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`) ← `invokeExact_MT(Object, Object, Object, Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invoke(Class, MethodHandle, String, Object, Object, Class)` (`java.lang.invoke.BootstrapMethodInvoker`) ← `makeSite(MethodHandle, String, MethodType, Object, Class)` (`java.lang.invoke.CallSite`) ← `linkCallSiteImpl(Class, MethodHandle, String, MethodType, Object, Object[])` (`java.lang.invoke.MethodHandleNatives`) ← `linkCallSite(Object, Object, Object, Object, Object, Object[])` ← `boxed()` (`java.util.stream.DoublePipeline`) ← `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                     |
|  0.4% | 10.0µs |           1 | `newDirectoryStream(Path)` (`java.nio.file.Files`) ← `visit(Path, boolean, boolean)` (`java.nio.file.FileTreeWalker`) ← `walk(Path)` ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000000801003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  0.4% |  9.9µs |           1 | `mapToObj(DoubleFunction, int)` (`java.util.stream.DoublePipeline`) ← `boxed()` ← `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  0.2% |  6.0µs |           1 | `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`) ← `loadClass(String, boolean)` ← `loadClass(String, boolean)` (`jdk.internal.loader.ClassLoaders$AppClassLoader`) ← `loadClass(String)` (`java.lang.ClassLoader`) ← `visitFile(Path, BasicFileAttributes)` (`org.renaissance.core.DirUtils$1`) ← `visitFile(Object, BasicFileAttributes)` ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000000801003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  0.1% |  3.5µs |           1 | `<init>(Collection, int)` (`java.nio.file.FileTreeWalker`) ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000000801003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.1% |  3.5µs |           1 | `<init>(UnixPath, long, DirectoryStream$Filter)` (`sun.nio.fs.UnixDirectoryStream`) ← `newDirectoryStream(Path, DirectoryStream$Filter)` (`sun.nio.fs.UnixFileSystemProvider`) ← `newDirectoryStream(Path)` (`java.nio.file.Files`) ← `visit(Path, boolean, boolean)` (`java.nio.file.FileTreeWalker`) ← `walk(Path)` ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000000801003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

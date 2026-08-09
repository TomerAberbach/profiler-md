# Sampling profile

Collected 5,107 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Ours             | 58.8% |   3,005 |
| Native           | 25.2% |   1,287 |
| Standard library | 13.7% |     701 |
| JIT              |  1.2% |      61 |
| Compiler         |  1.0% |      53 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                                                  | Location                                                   |
| ----: | ------: | --------------------------------------------------------- | ---------------------------------------------------------- |
| 20.8% |   1,061 | `accumulate(Double[], double[])`                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 18.2% |     932 | `distance(Double[], Double[])`                            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 12.5% |     640 | `__psynch_cvwait`                                         | `libsystem_kernel.dylib`                                   |
|  9.5% |     486 | `vectorSum()`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  7.6% |     388 | `findNearestCentroid()`                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  3.4% |     175 | `forward_copy_longs`                                      | `<unknown>`                                                |
|  3.0% |     152 | `elementData(int)`                                        | `java.util.ArrayList`                                      |
|  2.7% |     139 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                                        |
|  2.7% |     139 | `doubleValue()`                                           | `java.lang.Double`                                         |
|  2.2% |     111 | `collectClusters(int[])`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  1.4% |      73 | `add(Object, Object[], int)`                              | `java.util.ArrayList`                                      |
|  1.2% |      59 | `zero_blocks`                                             | `<unknown>`                                                |
|  0.9% |      46 | `__psynch_cvsignal`                                       | `libsystem_kernel.dylib`                                   |
|  0.6% |      30 | `RegisterMap::RegisterMap`                                | `libjvm.dylib`                                             |
|  0.5% |      28 | `checkIndex(int, int)`                                    | `java.util.Objects`                                        |
|  0.5% |      26 | `__psynch_mutexwait`                                      | `libsystem_kernel.dylib`                                   |
|  0.5% |      24 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                        |
|  0.4% |      22 | `pthread_jit_write_protect_np`                            | `libsystem_pthread.dylib`                                  |
|  0.4% |      22 | `grow(int)`                                               | `java.util.ArrayList`                                      |
|  0.4% |      21 | `hash(Object)`                                            | `java.util.HashMap`                                        |

#### Categories

##### Ours

|     % | Samples | Function                                         | Location                                                                              |
| ----: | ------: | ------------------------------------------------ | ------------------------------------------------------------------------------------- |
| 20.8% |   1,061 | `accumulate(Double[], double[])`                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| 18.2% |     932 | `distance(Double[], Double[])`                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  9.5% |     486 | `vectorSum()`                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  7.6% |     388 | `findNearestCentroid()`                          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  2.2% |     111 | `collectClusters(int[])`                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  0.1% |       6 | `createSubtask(int, int)`                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  0.1% |       4 | `combineResults(Object, Object)`                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| <0.1% |       2 | `compute()`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                |
| <0.1% |       2 | `combineResults(Object, Object)`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| <0.1% |       2 | `apply(Object, Object)`                          | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186fd0`                |
| <0.1% |       2 | `lambda$collectClusters$0(Double[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| <0.1% |       2 | `apply(Object)`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000c801186b38` |
| <0.1% |       2 | `forkThreshold()`                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| <0.1% |       2 | `<init>(JavaKMeans, int, int)`                   | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                |
| <0.1% |       1 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
| <0.1% |       1 | `forkThreshold()`                                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| <0.1% |       1 | `<init>(JavaKMeans, List, List, int, int)`       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |

##### Native

|     % | Samples | Function                                                                          | Location                   |
| ----: | ------: | --------------------------------------------------------------------------------- | -------------------------- |
| 12.5% |     640 | `__psynch_cvwait`                                                                 | `libsystem_kernel.dylib`   |
|  3.4% |     175 | `forward_copy_longs`                                                              | `<unknown>`                |
|  0.9% |      46 | `__psynch_cvsignal`                                                               | `libsystem_kernel.dylib`   |
|  0.6% |      30 | `RegisterMap::RegisterMap`                                                        | `libjvm.dylib`             |
|  0.5% |      26 | `__psynch_mutexwait`                                                              | `libsystem_kernel.dylib`   |
|  0.4% |      22 | `pthread_jit_write_protect_np`                                                    | `libsystem_pthread.dylib`  |
|  0.4% |      18 | `arrayof_jint_disjoint_arraycopy`                                                 | `<unknown>`                |
|  0.3% |      15 | `G1FullGCMarker::mark_object`                                                     | `libjvm.dylib`             |
|  0.3% |      14 | `tlv_get_addr`                                                                    | `libdyld.dylib`            |
|  0.2% |      11 | `_platform_bzero`                                                                 | `libsystem_platform.dylib` |
|  0.2% |      10 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region` | `libjvm.dylib`             |
|  0.2% |      10 | `semaphore_wait_trap`                                                             | `libsystem_kernel.dylib`   |
|  0.2% |       9 | `thread_self_trap`                                                                | `libsystem_kernel.dylib`   |
|  0.2% |       8 | `_platform_memset`                                                                | `libsystem_platform.dylib` |
|  0.2% |       8 | `ScopeDesc::decode_body`                                                          | `libjvm.dylib`             |
|  0.1% |       7 | `_platform_memmove`                                                               | `libsystem_platform.dylib` |
|  0.1% |       7 | `G1ParScanThreadState::do_copy_to_survivor_space`                                 | `libjvm.dylib`             |
|  0.1% |       7 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>`                   | `libjvm.dylib`             |
|  0.1% |       6 | `void G1ScanEvacuatedObjClosure::do_oop_work<narrowOop>`                          | `libjvm.dylib`             |
|  0.1% |       6 | `inflate_fast`                                                                    | `libzip.dylib`             |

##### Standard library

|     % | Samples | Function                                                  | Location                                      |
| ----: | ------: | --------------------------------------------------------- | --------------------------------------------- |
|  3.0% |     152 | `elementData(int)`                                        | `java.util.ArrayList`                         |
|  2.7% |     139 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                           |
|  2.7% |     139 | `doubleValue()`                                           | `java.lang.Double`                            |
|  1.4% |      73 | `add(Object, Object[], int)`                              | `java.util.ArrayList`                         |
|  0.5% |      28 | `checkIndex(int, int)`                                    | `java.util.Objects`                           |
|  0.5% |      24 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
|  0.4% |      22 | `grow(int)`                                               | `java.util.ArrayList`                         |
|  0.4% |      21 | `hash(Object)`                                            | `java.util.HashMap`                           |
|  0.3% |      14 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                           |
|  0.1% |       7 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                            |
|  0.1% |       6 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`           |
|  0.1% |       6 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`           |
|  0.1% |       6 | `forEach(BiConsumer)`                                     | `java.util.HashMap`                           |
|  0.1% |       6 | `grow()`                                                  | `java.util.ArrayList`                         |
|  0.1% |       5 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  0.1% |       5 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`           |
|  0.1% |       3 | `push(ForkJoinTask, ForkJoinPool, boolean)`               | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| <0.1% |       2 | `park(boolean, long)`                                     | `jdk.internal.misc.Unsafe`                    |
| <0.1% |       2 | `park()`                                                  | `java.util.concurrent.locks.LockSupport`      |
| <0.1% |       2 | `newNode(int, Object, Object, HashMap$Node)`              | `java.util.HashMap`                           |

##### JIT

|     % | Samples | Function                   | Location    |
| ----: | ------: | -------------------------- | ----------- |
|  1.2% |      59 | `zero_blocks`              | `<unknown>` |
| <0.1% |       1 | `vtable stub`              | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xbbab)` | `<unknown>` |

##### Compiler

|     % | Samples | Function                                      | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
|  0.1% |       3 | `PhaseCFG::schedule_local`                    | `libjvm.dylib` |
| <0.1% |       2 | `PhaseChaitin::build_ifg_physical`            | `libjvm.dylib` |
| <0.1% |       2 | `PhaseOutput::BuildOopMaps`                   | `libjvm.dylib` |
| <0.1% |       1 | `ciTypeFlow::df_flow_types`                   | `libjvm.dylib` |
| <0.1% |       1 | `NodeHash::hash_find`                         | `libjvm.dylib` |
| <0.1% |       1 | `PhaseChaitin::merge_multidefs`               | `libjvm.dylib` |
| <0.1% |       1 | `Scheduling::ComputeRegisterAntidependencies` | `libjvm.dylib` |
| <0.1% |       1 | `Matcher::match_tree`                         | `libjvm.dylib` |
| <0.1% |       1 | `Matcher::xform`                              | `libjvm.dylib` |
| <0.1% |       1 | `CallStaticJavaNode::Opcode`                  | `libjvm.dylib` |
| <0.1% |       1 | `IndexSet::IndexSet`                          | `libjvm.dylib` |
| <0.1% |       1 | `PhaseIdealLoop::build_loop_early`            | `libjvm.dylib` |
| <0.1% |       1 | `RegMask::is_UP`                              | `libjvm.dylib` |
| <0.1% |       1 | `AddNode::Value`                              | `libjvm.dylib` |
| <0.1% |       1 | `PhaseRenumberLive::update_embedded_ids`      | `libjvm.dylib` |
| <0.1% |       1 | `CodeBuffer::finalize_oop_references`         | `libjvm.dylib` |
| <0.1% |       1 | `PhaseIdealLoop::build_loop_late`             | `libjvm.dylib` |
| <0.1% |       1 | `branchNode::is_block_proj`                   | `libjvm.dylib` |
| <0.1% |       1 | `ciTypeFlow::build_loop_tree`                 | `libjvm.dylib` |
| <0.1% |       1 | `unnecessary_membar_acquireNode::out_RegMask` | `libjvm.dylib` |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Location                                                      |
| ----: | ------: | ------------------------------------------------------------- |
| 81.6% |     866 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:412` |
| 18.4% |     195 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:411` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Location                                                       |
| ----: | ------: | -------------------------------------------------------------- |
| 61.4% |     572 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:248` |
| 37.3% |     348 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:249` |
|  1.3% |      12 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:250` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Location                                                      |
| ----: | ------: | ------------------------------------------------------------- |
| 80.9% |     393 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:403` |
| 19.1% |      93 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:402` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Location                                                       |
| ----: | ------: | -------------------------------------------------------------- |
| 50.8% |     197 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:231` |
| 30.4% |     118 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:230` |
| 10.1% |      39 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:229` |
|  7.0% |      27 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:226` |
|  1.8% |       7 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:225` |

##### `elementData(int)` (`java.util.ArrayList`)

|      % | Samples | Location                  |
| -----: | ------: | ------------------------- |
| 100.0% |     152 | `java.util.ArrayList:411` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 24.5% |      34 | `java.util.HashMap:1197` |
| 22.3% |      31 | `java.util.HashMap:1213` |
| 17.3% |      24 | `java.util.HashMap:1207` |
| 13.7% |      19 | `java.util.HashMap:1204` |
|  8.6% |      12 | `java.util.HashMap:1222` |

##### `doubleValue()` (`java.lang.Double`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |     139 | `java.lang.Double:1001` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Location                                                       |
| ----: | ------: | -------------------------------------------------------------- |
| 22.5% |      25 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:212` |
| 22.5% |      25 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:213` |
| 21.6% |      24 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |
| 17.1% |      19 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:211` |
| 10.8% |      12 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:214` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

|     % | Samples | Location                  |
| ----: | ------: | ------------------------- |
| 72.6% |      53 | `java.util.ArrayList:482` |
| 27.4% |      20 | `java.util.ArrayList:484` |

##### `checkIndex(int, int)` (`java.util.Objects`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |      28 | `java.util.Objects:385` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Location                                 |
| ----: | ------: | ---------------------------------------- |
| 25.0% |       6 | `java.util.concurrent.ForkJoinPool:2057` |
| 16.7% |       4 | `java.util.concurrent.ForkJoinPool:2051` |
| 12.5% |       3 | `java.util.concurrent.ForkJoinPool:2053` |
| 12.5% |       3 | `java.util.concurrent.ForkJoinPool:2055` |
| 12.5% |       3 | `java.util.concurrent.ForkJoinPool:2041` |

##### `grow(int)` (`java.util.ArrayList`)

|     % | Samples | Location                  |
| ----: | ------: | ------------------------- |
| 86.4% |      19 | `java.util.ArrayList:239` |
|  9.1% |       2 | `java.util.ArrayList:233` |
|  4.5% |       1 | `java.util.ArrayList:232` |

##### `hash(Object)` (`java.util.HashMap`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |      21 | `java.util.HashMap:338` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 71.4% |      10 | `java.util.HashMap:1384` |
| 14.3% |       2 | `java.util.HashMap:1389` |
| 14.3% |       2 | `java.util.HashMap:1362` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       7 | `java.util.Arrays:3482` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Location                                                       |
| -----: | ------: | -------------------------------------------------------------- |
| 100.0% |       6 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:261` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Location                                |
| ----: | ------: | --------------------------------------- |
| 66.7% |       4 | `java.util.concurrent.ForkJoinTask:411` |
| 16.7% |       1 | `java.util.concurrent.ForkJoinTask:408` |
| 16.7% |       1 | `java.util.concurrent.ForkJoinTask:413` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Location                                 |
| ----: | ------: | ---------------------------------------- |
| 50.0% |       3 | `java.util.concurrent.ForkJoinPool:1809` |
| 50.0% |       3 | `java.util.concurrent.ForkJoinPool:1808` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 66.7% |       4 | `java.util.HashMap:1428` |
| 33.3% |       2 | `java.util.HashMap:1427` |

##### `grow()` (`java.util.ArrayList`)

|      % | Samples | Location                  |
| -----: | ------: | ------------------------- |
| 100.0% |       6 | `java.util.ArrayList:244` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|     % | Samples | Location                                           |
| ----: | ------: | -------------------------------------------------- |
| 40.0% |       2 | `java.util.concurrent.ForkJoinPool$WorkQueue:1347` |
| 20.0% |       1 | `java.util.concurrent.ForkJoinPool$WorkQueue:1330` |
| 20.0% |       1 | `java.util.concurrent.ForkJoinPool$WorkQueue:1334` |
| 20.0% |       1 | `java.util.concurrent.ForkJoinPool$WorkQueue:1329` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Location                                 |
| ----: | ------: | ---------------------------------------- |
| 60.0% |       3 | `java.util.concurrent.ForkJoinPool:1829` |
| 20.0% |       1 | `java.util.concurrent.ForkJoinPool:1837` |
| 20.0% |       1 | `java.util.concurrent.ForkJoinPool:1835` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Location                                                      |
| -----: | ------: | ------------------------------------------------------------- |
| 100.0% |       4 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:367` |

##### `push(ForkJoinTask, ForkJoinPool, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|     % | Samples | Location                                           |
| ----: | ------: | -------------------------------------------------- |
| 66.7% |       2 | `java.util.concurrent.ForkJoinPool$WorkQueue:1130` |
| 33.3% |       1 | `java.util.concurrent.ForkJoinPool$WorkQueue:1154` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|     % | Samples | Location                                                   |
| ----: | ------: | ---------------------------------------------------------- |
| 50.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask:150` |
| 50.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask:149` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Location                                                       |
| -----: | ------: | -------------------------------------------------------------- |
| 100.0% |       2 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:171` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Location                                                       |
| -----: | ------: | -------------------------------------------------------------- |
| 100.0% |       2 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |

##### `forkThreshold()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Location                                                       |
| -----: | ------: | -------------------------------------------------------------- |
| 100.0% |       2 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:198` |

##### `<init>(JavaKMeans, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % | Samples | Location                                                   |
| -----: | ------: | ---------------------------------------------------------- |
| 100.0% |       2 | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask:137` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       2 | `java.util.concurrent.locks.LockSupport:371` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

|      % | Samples | Location                 |
| -----: | ------: | ------------------------ |
| 100.0% |       2 | `java.util.HashMap:1909` |

##### `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Location                                       |
| -----: | ------: | ---------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans:86` |

##### `forkThreshold()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Location                                                      |
| -----: | ------: | ------------------------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:389` |

##### `<init>(JavaKMeans, List, List, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Location                                                       |
| -----: | ------: | -------------------------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:190` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller        | Location                                                  |
| -----: | ------: | ------------- | --------------------------------------------------------- |
| 100.0% |   1,061 | `vectorSum()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller                  | Location                                                   |
| -----: | ------: | ----------------------- | ---------------------------------------------------------- |
| 100.0% |     932 | `findNearestCentroid()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                  | Location                 |
| ----: | ------: | ----------------------- | ------------------------ |
| 97.3% |     623 | `Parker::park`          | `libjvm.dylib`           |
|  2.5% |      16 | `PlatformMonitor::wait` | `libjvm.dylib`           |
|  0.2% |       1 | `Profiler::timerLoop`   | `libasyncProfiler.dylib` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller              | Location                                                  |
| -----: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% |     486 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller              | Location                                                   |
| -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% |     388 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `forward_copy_longs` (`<unknown>`)

|     % | Samples | Caller                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 82.9% |     145 | `arrayof_jint_disjoint_arraycopy` | `<unknown>` |
| 17.1% |      30 | `arrayof_oop_disjoint_arraycopy`  | `<unknown>` |

##### `elementData(int)` (`java.util.ArrayList`)

|      % | Samples | Caller     | Location              |
| -----: | ------: | ---------- | --------------------- |
| 100.0% |     152 | `get(int)` | `java.util.ArrayList` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|      % | Samples | Caller                   | Location                                                   |
| -----: | ------: | ------------------------ | ---------------------------------------------------------- |
| 100.0% |     139 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `doubleValue()` (`java.lang.Double`)

|     % | Samples | Caller                           | Location                                                   |
| ----: | ------: | -------------------------------- | ---------------------------------------------------------- |
| 89.2% |     124 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 10.8% |      15 | `distance(Double[], Double[])`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller              | Location                                                   |
| -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% |     111 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

|      % | Samples | Caller        | Location              |
| -----: | ------: | ------------- | --------------------- |
| 100.0% |      73 | `add(Object)` | `java.util.ArrayList` |

##### `zero_blocks` (`<unknown>`)

|     % | Samples | Caller                              | Location                                                   |
| ----: | ------: | ----------------------------------- | ---------------------------------------------------------- |
| 50.8% |      30 | `merge(Object, Object, BiFunction)` | `java.util.HashMap`                                        |
| 39.0% |      23 | `grow(int)`                         | `java.util.ArrayList`                                      |
|  6.8% |       4 | `findNearestCentroid()`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  3.4% |       2 | `copyOf(Object[], int, Class)`      | `java.util.Arrays`                                         |

##### `__psynch_cvsignal` (`libsystem_kernel.dylib`)

|      % | Samples | Caller          | Location       |
| -----: | ------: | --------------- | -------------- |
| 100.0% |      46 | `Unsafe_Unpark` | `libjvm.dylib` |

##### `RegisterMap::RegisterMap` (`libjvm.dylib`)

|     % | Samples | Caller               | Location       |
| ----: | ------: | -------------------- | -------------- |
| 93.3% |      28 | `vframe::vframe`     | `libjvm.dylib` |
|  6.7% |       2 | `vframe::new_vframe` | `libjvm.dylib` |

##### `checkIndex(int, int)` (`java.util.Objects`)

|      % | Samples | Caller     | Location              |
| -----: | ------: | ---------- | --------------------- |
| 100.0% |      28 | `get(int)` | `java.util.ArrayList` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                              | Location                  |
| -----: | ------: | ----------------------------------- | ------------------------- |
| 100.0% |      26 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller                 | Location                            |
| -----: | ------: | ---------------------- | ----------------------------------- |
| 100.0% |      24 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `pthread_jit_write_protect_np` (`libsystem_pthread.dylib`)

|     % | Samples | Caller                     | Location       |
| ----: | ------: | -------------------------- | -------------- |
| 31.8% |       7 | `Unsafe_Park`              | `libjvm.dylib` |
| 18.2% |       4 | `jvmti_GetCurrentThread`   | `libjvm.dylib` |
|  9.1% |       2 | `_new_array_Java`          | `<unknown>`    |
|  9.1% |       2 | `Unsafe_Unpark`            | `libjvm.dylib` |
|  9.1% |       2 | `OptoRuntime::new_array_C` | `libjvm.dylib` |

##### `grow(int)` (`java.util.ArrayList`)

|      % | Samples | Caller   | Location              |
| -----: | ------: | -------- | --------------------- |
| 100.0% |      22 | `grow()` | `java.util.ArrayList` |

##### `hash(Object)` (`java.util.HashMap`)

|     % | Samples | Caller                              | Location            |
| ----: | ------: | ----------------------------------- | ------------------- |
| 95.2% |      20 | `computeIfAbsent(Object, Function)` | `java.util.HashMap` |
|  4.8% |       1 | `putMapEntries(Map, boolean)`       | `java.util.HashMap` |

##### `arrayof_jint_disjoint_arraycopy` (`<unknown>`)

|     % | Samples | Caller                  | Location              |
| ----: | ------: | ----------------------- | --------------------- |
| 55.6% |      10 | `copyOf(Object[], int)` | `java.util.Arrays`    |
| 44.4% |       8 | `grow(int)`             | `java.util.ArrayList` |

##### `G1FullGCMarker::mark_object` (`libjvm.dylib`)

|     % | Samples | Caller                                                          | Location       |
| ----: | ------: | --------------------------------------------------------------- | -------------- |
| 80.0% |      12 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` | `libjvm.dylib` |
| 20.0% |       3 | `G1FullGCMarker::complete_marking`                              | `libjvm.dylib` |

##### `tlv_get_addr` (`libdyld.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 21.4% |       3 | `compiledVFrame::sender`         | `libjvm.dylib` |
| 14.3% |       2 | `arrayof_oop_disjoint_arraycopy` | `<unknown>`    |
|  7.1% |       1 | `ScopeDesc::sender`              | `libjvm.dylib` |
|  7.1% |       1 | `JvmtiEnv::GetStackTrace`        | `libjvm.dylib` |
|  7.1% |       1 | `jvmti_GetClassSignature`        | `libjvm.dylib` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|      % | Samples | Caller                              | Location                                    |
| -----: | ------: | ----------------------------------- | ------------------------------------------- |
| 100.0% |      14 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `_platform_bzero` (`libsystem_platform.dylib`)

|      % | Samples | Caller                   | Location       |
| -----: | ------: | ------------------------ | -------------- |
| 100.0% |      11 | `MemAllocator::allocate` | `libjvm.dylib` |

##### `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region` (`libjvm.dylib`)

|      % | Samples | Caller                                                              | Location       |
| -----: | ------: | ------------------------------------------------------------------- | -------------- |
| 100.0% |      10 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::do_heap_region` | `libjvm.dylib` |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 70.0% |       7 | `WorkerThread::run`              | `libjvm.dylib` |
| 20.0% |       2 | `GenericWaitBarrier::Cell::wait` | `libjvm.dylib` |
| 10.0% |       1 | `WorkerThreads::run_task`        | `libjvm.dylib` |

##### `thread_self_trap` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                            | Location                 |
| -----: | ------: | --------------------------------- | ------------------------ |
| 100.0% |       9 | `ObjectSampler::recordAllocation` | `libasyncProfiler.dylib` |

##### `_platform_memset` (`libsystem_platform.dylib`)

|     % | Samples | Caller                   | Location       |
| ----: | ------: | ------------------------ | -------------- |
| 87.5% |       7 | `MemAllocator::allocate` | `libjvm.dylib` |
| 12.5% |       1 | `Method::jmethod_id`     | `libjvm.dylib` |

##### `ScopeDesc::decode_body` (`libjvm.dylib`)

|     % | Samples | Caller                 | Location       |
| ----: | ------: | ---------------------- | -------------- |
| 62.5% |       5 | `ScopeDesc::sender`    | `libjvm.dylib` |
| 37.5% |       3 | `ScopeDesc::ScopeDesc` | `libjvm.dylib` |

##### `_platform_memmove` (`libsystem_platform.dylib`)

|     % | Samples | Caller                | Location       |
| ----: | ------: | --------------------- | -------------- |
| 85.7% |       6 | `vframe::java_sender` | `libjvm.dylib` |
| 14.3% |       1 | `VectorSet::grow`     | `libjvm.dylib` |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`libjvm.dylib`)

|     % | Samples | Caller                                          | Location       |
| ----: | ------: | ----------------------------------------------- | -------------- |
| 85.7% |       6 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib` |
| 14.3% |       1 | `G1ScanHRForRegionClosure::scan_memregion`      | `libjvm.dylib` |

##### `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` (`libjvm.dylib`)

|     % | Samples | Caller                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 85.7% |       6 | `G1FullGCMarker::follow_marking_stacks` | `libjvm.dylib` |
| 14.3% |       1 | `G1FullGCMarker::complete_marking`      | `libjvm.dylib` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|     % | Samples | Caller      | Location              |
| ----: | ------: | ----------- | --------------------- |
| 85.7% |       6 | `toArray()` | `java.util.ArrayList` |
| 14.3% |       1 | `grow(int)` | `java.util.ArrayList` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |       6 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `void G1ScanEvacuatedObjClosure::do_oop_work<narrowOop>` (`libjvm.dylib`)

|     % | Samples | Caller                                            | Location       |
| ----: | ------: | ------------------------------------------------- | -------------- |
| 50.0% |       3 | `G1ParScanThreadState::do_partial_array`          | `libjvm.dylib` |
| 16.7% |       1 | `G1ParScanThreadState::do_copy_to_survivor_space` | `libjvm.dylib` |
| 16.7% |       1 | `G1ParScanThreadState::start_partial_objarray`    | `libjvm.dylib` |
| 16.7% |       1 | `G1ParScanThreadState::trim_queue_to_threshold`   | `libjvm.dylib` |

##### `inflate_fast` (`libzip.dylib`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |       6 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller   | Location                            |
| -----: | ------: | -------- | ----------------------------------- |
| 100.0% |       6 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller  | Location                                    |
| -----: | ------: | ------- | ------------------------------------------- |
| 100.0% |       6 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|      % | Samples | Caller            | Location                                    |
| -----: | ------: | ----------------- | ------------------------------------------- |
| 100.0% |       6 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `grow()` (`java.util.ArrayList`)

|      % | Samples | Caller                       | Location              |
| -----: | ------: | ---------------------------- | --------------------- |
| 100.0% |       6 | `add(Object, Object[], int)` | `java.util.ArrayList` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Caller                 | Location                            |
| -----: | ------: | ---------------------- | ----------------------------------- |
| 100.0% |       5 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller                              | Location                            |
| -----: | ------: | ----------------------------------- | ----------------------------------- |
| 100.0% |       5 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |       4 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `push(ForkJoinTask, ForkJoinPool, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Caller   | Location                            |
| -----: | ------: | -------- | ----------------------------------- |
| 100.0% |       3 | `fork()` | `java.util.concurrent.ForkJoinTask` |

##### `PhaseCFG::schedule_local` (`libjvm.dylib`)

|      % | Samples | Caller                         | Location       |
| -----: | ------: | ------------------------------ | -------------- |
| 100.0% |       3 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % | Samples | Caller   | Location                             |
| -----: | ------: | -------- | ------------------------------------ |
| 100.0% |       2 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |       2 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186fd0`)

|      % | Samples | Caller                              | Location            |
| -----: | ------: | ----------------------------------- | ------------------- |
| 100.0% |       2 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller          | Location                                                                              |
| -----: | ------: | --------------- | ------------------------------------------------------------------------------------- |
| 100.0% |       2 | `apply(Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000c801186b38` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000c801186b38`)

|      % | Samples | Caller                              | Location            |
| -----: | ------: | ----------------------------------- | ------------------- |
| 100.0% |       2 | `computeIfAbsent(Object, Function)` | `java.util.HashMap` |

##### `forkThreshold()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |       2 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `<init>(JavaKMeans, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|     % | Samples | Caller                                     | Location                                                   |
| ----: | ------: | ------------------------------------------ | ---------------------------------------------------------- |
| 50.0% |       1 | `<init>(JavaKMeans, List, int, int)`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 50.0% |       1 | `<init>(JavaKMeans, List, List, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|      % | Samples | Caller   | Location                                 |
| -----: | ------: | -------- | ---------------------------------------- |
| 100.0% |       2 | `park()` | `java.util.concurrent.locks.LockSupport` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

|      % | Samples | Caller                              | Location                            |
| -----: | ------: | ----------------------------------- | ----------------------------------- |
| 100.0% |       2 | `awaitWork(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

|      % | Samples | Caller                                          | Location            |
| -----: | ------: | ----------------------------------------------- | ------------------- |
| 100.0% |       2 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       2 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseOutput::BuildOopMaps` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |       2 | `PhaseOutput::Output` | `libjvm.dylib` |

##### `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller       | Location                                                               |
| -----: | ------: | ------------ | ---------------------------------------------------------------------- |
| 100.0% |       1 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801125b10` |

##### `forkThreshold()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |       1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `<init>(JavaKMeans, List, List, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller                    | Location                                                   |
| -----: | ------: | ------------------------- | ---------------------------------------------------------- |
| 100.0% |       1 | `createSubtask(int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `vtable stub` (`<unknown>`)

|      % | Samples | Caller   | Location                            |
| -----: | ------: | -------- | ----------------------------------- |
| 100.0% |       1 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `I2C/C2I adapters(0xbbab)` (`<unknown>`)

|      % | Samples | Caller  | Location                    |
| -----: | ------: | ------- | --------------------------- |
| 100.0% |       1 | `run()` | `java.net.URLClassLoader$1` |

##### `ciTypeFlow::df_flow_types` (`libjvm.dylib`)

|      % | Samples | Caller                   | Location       |
| -----: | ------: | ------------------------ | -------------- |
| 100.0% |       1 | `ciTypeFlow::flow_types` | `libjvm.dylib` |

##### `NodeHash::hash_find` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |       1 | `PhaseIdealLoop::split_thru_phi` | `libjvm.dylib` |

##### `PhaseChaitin::merge_multidefs` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       1 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `Scheduling::ComputeRegisterAntidependencies` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |       1 | `Scheduling::DoScheduling` | `libjvm.dylib` |

##### `Matcher::match_tree` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |       1 | `Matcher::xform` | `libjvm.dylib` |

##### `Matcher::xform` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |       1 | `Matcher::match` | `libjvm.dylib` |

##### `CallStaticJavaNode::Opcode` (`libjvm.dylib`)

|      % | Samples | Caller          | Location       |
| -----: | ------: | --------------- | -------------- |
| 100.0% |       1 | `IfNode::Ideal` | `libjvm.dylib` |

##### `IndexSet::IndexSet` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |       1 | `PhaseChaitin::build_ifg_physical` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       1 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `RegMask::is_UP` (`libjvm.dylib`)

|      % | Samples | Caller                         | Location       |
| -----: | ------: | ------------------------------ | -------------- |
| 100.0% |       1 | `PhaseChaitin::raise_pressure` | `libjvm.dylib` |

##### `AddNode::Value` (`libjvm.dylib`)

|      % | Samples | Caller                   | Location       |
| -----: | ------: | ------------------------ | -------------- |
| 100.0% |       1 | `Parse::do_one_bytecode` | `libjvm.dylib` |

##### `PhaseRenumberLive::update_embedded_ids` (`libjvm.dylib`)

|      % | Samples | Caller                                 | Location       |
| -----: | ------: | -------------------------------------- | -------------- |
| 100.0% |       1 | `PhaseRenumberLive::PhaseRenumberLive` | `libjvm.dylib` |

##### `CodeBuffer::finalize_oop_references` (`libjvm.dylib`)

|      % | Samples | Caller                 | Location       |
| -----: | ------: | ---------------------- | -------------- |
| 100.0% |       1 | `nmethod::new_nmethod` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       1 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `branchNode::is_block_proj` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |       1 | `PhaseChaitin::build_ifg_physical` | `libjvm.dylib` |

##### `ciTypeFlow::build_loop_tree` (`libjvm.dylib`)

|      % | Samples | Caller                      | Location       |
| -----: | ------: | --------------------------- | -------------- |
| 100.0% |       1 | `ciTypeFlow::df_flow_types` | `libjvm.dylib` |

##### `unnecessary_membar_acquireNode::out_RegMask` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       1 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                                  | Location                                                   |
| ----: | ------: | --------------------------------------------------------- | ---------------------------------------------------------- |
| 95.2% |   4,862 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                        |
| 95.2% |   4,862 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`                |
| 88.9% |   4,542 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`                        |
| 88.7% |   4,529 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| 88.6% |   4,527 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                        |
| 88.2% |   4,504 | `compute()`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
| 88.2% |   4,504 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                       |
| 85.2% |   4,352 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                        |
| 85.2% |   4,352 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                        |
| 81.6% |   4,165 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| 37.0% |   1,889 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 34.4% |   1,756 | `vectorSum()`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 34.4% |   1,756 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 27.4% |   1,399 | `findNearestCentroid()`                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 23.2% |   1,185 | `accumulate(Double[], double[])`                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 22.0% |   1,126 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                        |
| 21.0% |   1,074 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`                        |
| 18.5% |     947 | `distance(Double[], Double[])`                            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 15.3% |     780 | `computeClusterAverages()`                                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| 15.3% |     780 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

#### Categories

##### Ours

|     % | Samples | Function                            | Location                                                               |
| ----: | ------: | ----------------------------------- | ---------------------------------------------------------------------- |
| 88.2% |   4,504 | `compute()`                         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| 37.0% |   1,889 | `computeDirectly()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 34.4% |   1,756 | `vectorSum()`                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 34.4% |   1,756 | `computeDirectly()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 27.4% |   1,399 | `findNearestCentroid()`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 23.2% |   1,185 | `accumulate(Double[], double[])`    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 18.5% |     947 | `distance(Double[], Double[])`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 15.3% |     780 | `computeClusterAverages()`          | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 15.3% |     780 | `computeDirectly()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 15.1% |     772 | `average(List)`                     | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  9.6% |     491 | `collectClusters(int[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  9.2% |     472 | `lambda$run$0(int, List, int)`      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  9.2% |     472 | `call()`                            | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801183d68` |
|  7.9% |     401 | `merge(Map, Map)`                   | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  7.9% |     401 | `combineResults(Object, Object)`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  7.8% |     399 | `combineResults(Map, Map)`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  7.4% |     380 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  7.4% |     380 | `accept(Object, Object)`            | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186d88` |
|  5.8% |     295 | `apply(Object, Object)`             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186fd0` |
|  5.7% |     293 | `lambda$merge$6(List, List)`        | `org.renaissance.jdk.concurrent.JavaKMeans`                            |

##### Native

|     % | Samples | Function                                                                        | Location                  |
| ----: | ------: | ------------------------------------------------------------------------------- | ------------------------- |
| 12.9% |     657 | `LockTracer::UnsafeParkHook`                                                    | `libasyncProfiler.dylib`  |
| 12.5% |     640 | `__psynch_cvwait`                                                               | `libsystem_kernel.dylib`  |
| 12.5% |     639 | `Unsafe_Park`                                                                   | `libjvm.dylib`            |
| 12.3% |     628 | `Parker::park`                                                                  | `libjvm.dylib`            |
|  3.8% |     195 | `_pthread_start`                                                                | `libsystem_pthread.dylib` |
|  3.8% |     195 | `thread_start`                                                                  | `libsystem_pthread.dylib` |
|  3.8% |     194 | `Thread::call_run`                                                              | `libjvm.dylib`            |
|  3.8% |     194 | `thread_native_entry`                                                           | `libjvm.dylib`            |
|  3.4% |     175 | `forward_copy_longs`                                                            | `<unknown>`               |
|  3.3% |     170 | `_new_array_Java`                                                               | `<unknown>`               |
|  3.3% |     167 | `MemAllocator::allocate`                                                        | `libjvm.dylib`            |
|  3.3% |     167 | `OptoRuntime::new_array_C`                                                      | `libjvm.dylib`            |
|  3.2% |     164 | `CollectedHeap::array_allocate`                                                 | `libjvm.dylib`            |
|  3.2% |     163 | `arrayof_jint_disjoint_arraycopy`                                               | `<unknown>`               |
|  3.1% |     159 | `InstanceKlass::allocate_objArray`                                              | `libjvm.dylib`            |
|  2.7% |     136 | `MemAllocator::Allocation::notify_allocation_jvmti_sampler`                     | `libjvm.dylib`            |
|  2.5% |     126 | `JvmtiObjectAllocEventCollector::generate_call_for_allocated`                   | `libjvm.dylib`            |
|  2.5% |     126 | `JvmtiSampledObjectAllocEventCollector::~JvmtiSampledObjectAllocEventCollector` | `libjvm.dylib`            |
|  2.4% |     123 | `JvmtiExport::post_sampled_object_alloc`                                        | `libjvm.dylib`            |
|  2.3% |     120 | `ObjectSampler::recordAllocation`                                               | `libasyncProfiler.dylib`  |

##### Standard library

|     % | Samples | Function                                                  | Location                                            |
| ----: | ------: | --------------------------------------------------------- | --------------------------------------------------- |
| 95.2% |   4,862 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                 |
| 95.2% |   4,862 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`         |
| 88.9% |   4,542 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`                 |
| 88.7% |   4,529 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| 88.6% |   4,527 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                 |
| 88.2% |   4,504 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                |
| 85.2% |   4,352 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                 |
| 85.2% |   4,352 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                 |
| 81.6% |   4,165 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| 22.0% |   1,126 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                 |
| 21.0% |   1,074 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`                 |
| 13.0% |     662 | `park(boolean, long)`                                     | `jdk.internal.misc.Unsafe`                          |
| 12.9% |     657 | `park()`                                                  | `java.util.concurrent.locks.LockSupport`            |
|  9.2% |     472 | `exec()`                                                  | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|  7.6% |     386 | `forEach(BiConsumer)`                                     | `java.util.HashMap`                                 |
|  7.4% |     380 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                                 |
|  6.1% |     314 | `awaitWork(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                 |
|  5.5% |     282 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                                  |
|  4.2% |     213 | `addAll(Collection)`                                      | `java.util.ArrayList`                               |
|  3.6% |     186 | `toArray()`                                               | `java.util.ArrayList`                               |

##### JIT

|     % | Samples | Function                   | Location    |
| ----: | ------: | -------------------------- | ----------- |
|  1.2% |      59 | `zero_blocks`              | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xbba)`  | `<unknown>` |
| <0.1% |       1 | `vtable stub`              | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xbbab)` | `<unknown>` |

##### Compiler

|    % | Samples | Function                                   | Location       |
| ---: | ------: | ------------------------------------------ | -------------- |
| 1.6% |      81 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib` |
| 1.4% |      69 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
| 1.0% |      50 | `Compile::Compile`                         | `libjvm.dylib` |
| 1.0% |      50 | `C2Compiler::compile_method`               | `libjvm.dylib` |
| 0.5% |      24 | `Compile::Code_Gen`                        | `libjvm.dylib` |
| 0.3% |      17 | `Compilation::compile_method`              | `libjvm.dylib` |
| 0.3% |      17 | `Compilation::Compilation`                 | `libjvm.dylib` |
| 0.3% |      16 | `Compile::Optimize`                        | `libjvm.dylib` |
| 0.3% |      14 | `Compilation::compile_java_method`         | `libjvm.dylib` |
| 0.2% |      12 | `CompileQueue::get`                        | `libjvm.dylib` |
| 0.2% |      11 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib` |
| 0.2% |       9 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib` |
| 0.2% |       9 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib` |
| 0.2% |       9 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
| 0.1% |       7 | `Compilation::emit_lir`                    | `libjvm.dylib` |
| 0.1% |       6 | `Compile::optimize_loops`                  | `libjvm.dylib` |
| 0.1% |       5 | `ciTypeFlow::df_flow_types`                | `libjvm.dylib` |
| 0.1% |       5 | `ciTypeFlow::flow_types`                   | `libjvm.dylib` |
| 0.1% |       5 | `ciTypeFlow::do_flow`                      | `libjvm.dylib` |
| 0.1% |       5 | `ciMethod::get_flow_analysis`              | `libjvm.dylib` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee                                   | Location                            |
| ----: | ------: | ---------------------------------------- | ----------------------------------- |
| 93.4% |   4,542 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |
|  6.5% |     314 | `awaitWork(ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|      % | Samples | Callee                              | Location                            |
| -----: | ------: | ----------------------------------- | ----------------------------------- |
| 100.0% |   4,862 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee                                               | Location                                      |
| ----: | ------: | ---------------------------------------------------- | --------------------------------------------- |
| 99.7% |   4,529 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  0.2% |       7 | `signalWork()`                                       | `java.util.concurrent.ForkJoinPool`           |
| <0.1% |       1 | `casSlotToNull(ForkJoinTask[], int, ForkJoinTask)`   | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Callee      | Location                                      |
| -----: | ------: | ----------- | --------------------------------------------- |
| 100.0% |   4,527 | `doExec()`  | `java.util.concurrent.ForkJoinTask`           |
|  <0.1% |       2 | `tryPoll()` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Callee      | Location                                            |
| ----: | ------: | ----------- | --------------------------------------------------- |
| 99.5% |   4,504 | `exec()`    | `java.util.concurrent.RecursiveTask`                |
| 10.4% |     472 | `exec()`    | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|  0.8% |      38 | `setDone()` | `java.util.concurrent.ForkJoinTask`                 |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|     % | Samples | Callee                           | Location                                                   |
| ----: | ------: | -------------------------------- | ---------------------------------------------------------- |
| 96.6% |   4,352 | `join()`                         | `java.util.concurrent.ForkJoinTask`                        |
| 41.9% |   1,887 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 39.0% |   1,756 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 17.3% |     780 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  8.9% |     401 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % | Samples | Callee      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |   4,504 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Callee                                                    | Location                                      |
| ----: | ------: | --------------------------------------------------------- | --------------------------------------------- |
| 95.7% |   4,165 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| 25.9% |   1,126 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
|  8.1% |     351 | `park()`                                                  | `java.util.concurrent.locks.LockSupport`      |
| <0.1% |       2 | `interrupted()`                                           | `java.lang.Thread`                            |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Callee                 | Location                             |
| -----: | ------: | ---------------------- | ------------------------------------ |
| 100.0% |   4,352 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask`  |
|  <0.1% |       2 | `getRawResult()`       | `java.util.concurrent.RecursiveTask` |
|  <0.1% |       1 | `vtable stub`          | `<unknown>`                          |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Callee                                 | Location                                      |
| -----: | ------: | -------------------------------------- | --------------------------------------------- |
| 100.0% |   4,164 | `doExec()`                             | `java.util.concurrent.ForkJoinTask`           |
|  <0.1% |       2 | `releaseAccess()`                      | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  <0.1% |       1 | `getAndClearSlot(ForkJoinTask[], int)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Callee                   | Location                                                   |
| -----: | ------: | ------------------------ | ---------------------------------------------------------- |
| 100.0% |   1,889 | `computeDirectly()`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  74.0% |   1,398 | `findNearestCentroid()`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  26.0% |     491 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Callee                           | Location                                                  |
| ----: | ------: | -------------------------------- | --------------------------------------------------------- |
| 67.5% |   1,185 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  4.7% |      83 | `get(int)`                       | `java.util.ArrayList`                                     |
|  0.1% |       2 | `DeoptimizationBlob`             | `<unknown>`                                               |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Callee              | Location                                                  |
| -----: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% |   1,756 | `vectorSum()`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| 100.0% |   1,756 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee                         | Location                                                   |
| ----: | ------: | ------------------------------ | ---------------------------------------------------------- |
| 67.7% |     947 | `distance(Double[], Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  3.5% |      49 | `get(int)`                     | `java.util.ArrayList`                                      |
|  0.4% |       6 | `_new_array_Java`              | `<unknown>`                                                |
|  0.3% |       4 | `zero_blocks`                  | `<unknown>`                                                |
|  0.1% |       2 | `SafepointBlob`                | `<unknown>`                                                |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Callee          | Location           |
| ----: | ------: | --------------- | ------------------ |
| 10.5% |     124 | `doubleValue()` | `java.lang.Double` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee                         | Location                            |
| ----: | ------: | ------------------------------ | ----------------------------------- |
| 98.0% |   1,103 | `doExec()`                     | `java.util.concurrent.ForkJoinTask` |
|  0.8% |       9 | `tryCompensate(long, boolean)` | `java.util.concurrent.ForkJoinPool` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Callee     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |   1,074 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|    % | Samples | Callee          | Location           |
| ---: | ------: | --------------- | ------------------ |
| 1.6% |      15 | `doubleValue()` | `java.lang.Double` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|     % | Samples | Callee                | Location                                               |
| ----: | ------: | --------------------- | ------------------------------------------------------ |
| 99.0% |     772 | `average(List)`       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  0.9% |       7 | `boxed(double[])`     | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  0.1% |       1 | `put(Object, Object)` | `java.util.HashMap`                                    |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Callee                     | Location                                               |
| -----: | ------: | -------------------------- | ------------------------------------------------------ |
| 100.0% |     780 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 100.0% |     780 | `computeDirectly()`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Callee     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |     772 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|     % | Samples | Callee                       | Location                 |
| ----: | ------: | ---------------------------- | ------------------------ |
| 99.2% |     657 | `LockTracer::UnsafeParkHook` | `libasyncProfiler.dylib` |
|  0.2% |       1 | `jni_GetObjectField`         | `libjvm.dylib`           |
|  0.2% |       1 | `jni_GetObjectClass`         | `libjvm.dylib`           |
|  0.2% |       1 | `Unsafe_Park`                | `libjvm.dylib`           |

##### `LockTracer::UnsafeParkHook` (`libasyncProfiler.dylib`)

|     % | Samples | Callee                    | Location       |
| ----: | ------: | ------------------------- | -------------- |
| 97.1% |     638 | `Unsafe_Park`             | `libjvm.dylib` |
|  0.9% |       6 | `jvmti_GetClassSignature` | `libjvm.dylib` |
|  0.9% |       6 | `jvmti_GetCurrentThread`  | `libjvm.dylib` |
|  0.5% |       3 | `jvmti_Deallocate`        | `libjvm.dylib` |
|  0.2% |       1 | `jni_GetObjectField`      | `libjvm.dylib` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

|     % | Samples | Callee                | Location                   |
| ----: | ------: | --------------------- | -------------------------- |
| 99.7% |     655 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `Unsafe_Park` (`libjvm.dylib`)

|     % | Samples | Callee                              | Location                  |
| ----: | ------: | ----------------------------------- | ------------------------- |
| 98.3% |     628 | `Parker::park`                      | `libjvm.dylib`            |
|  1.1% |       7 | `pthread_jit_write_protect_np`      | `libsystem_pthread.dylib` |
|  0.2% |       1 | `stub:pthread_jit_write_protect_np` | `libjvm.dylib`            |
|  0.2% |       1 | `JavaThread::threadObj`             | `libjvm.dylib`            |

##### `Parker::park` (`libjvm.dylib`)

|     % | Samples | Callee               | Location                  |
| ----: | ------: | -------------------- | ------------------------- |
| 99.2% |     623 | `__psynch_cvwait`    | `libsystem_kernel.dylib`  |
|  0.5% |       3 | `_pthread_cond_wait` | `libsystem_pthread.dylib` |
|  0.2% |       1 | `__gettimeofday`     | `libsystem_kernel.dylib`  |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee                              | Location              |
| ----: | ------: | ----------------------------------- | --------------------- |
| 33.8% |     166 | `add(Object)`                       | `java.util.ArrayList` |
| 33.4% |     164 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`   |
| 10.0% |      49 | `get(int)`                          | `java.util.ArrayList` |
|  0.2% |       1 | `_new_instance_Java`                | `<unknown>`           |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee                    | Location                                               |
| ----: | ------: | ------------------------- | ------------------------------------------------------ |
| 99.8% |     471 | `invoke()`                | `java.util.concurrent.ForkJoinTask`                    |
|  0.2% |       1 | `<init>(JavaKMeans, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801183d68`)

|      % | Samples | Callee                         | Location                                    |
| -----: | ------: | ------------------------------ | ------------------------------------------- |
| 100.0% |     472 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

|      % | Samples | Callee   | Location                                                               |
| -----: | ------: | -------- | ---------------------------------------------------------------------- |
| 100.0% |     472 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801183d68` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee                               | Location                           |
| ----: | ------: | ------------------------------------ | ---------------------------------- |
| 96.3% |     386 | `forEach(BiConsumer)`                | `java.util.HashMap`                |
|  2.7% |      11 | `<init>(Map)`                        | `java.util.HashMap`                |
|  0.5% |       2 | `resolve_virtual_call`               | `<unknown>`                        |
|  0.5% |       2 | `linkToTargetMethod(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee                     | Location                                                   |
| ----: | ------: | -------------------------- | ---------------------------------------------------------- |
| 99.5% |     399 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Callee            | Location                                    |
| -----: | ------: | ----------------- | ------------------------------------------- |
| 100.0% |     399 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|     % | Samples | Callee                   | Location                                                               |
| ----: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| 98.4% |     380 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186d88` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Callee                              | Location            |
| -----: | ------: | ----------------------------------- | ------------------- |
| 100.0% |     380 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186d88`)

|      % | Samples | Callee                              | Location                                    |
| -----: | ------: | ----------------------------------- | ------------------------------------------- |
| 100.0% |     380 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|     % | Samples | Callee                            | Location                                                               |
| ----: | ------: | --------------------------------- | ---------------------------------------------------------------------- |
| 77.6% |     295 | `apply(Object, Object)`           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186fd0` |
| 10.8% |      41 | `arrayof_jint_disjoint_arraycopy` | `<unknown>`                                                            |
|  7.9% |      30 | `zero_blocks`                     | `<unknown>`                                                            |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee                              | Location                                 |
| ----: | ------: | ----------------------------------- | ---------------------------------------- |
| 97.5% |     306 | `park()`                            | `java.util.concurrent.locks.LockSupport` |
|  2.2% |       7 | `parkUntil(long)`                   | `java.util.concurrent.locks.LockSupport` |
|  0.3% |       1 | `compareAndExchangeCtl(long, long)` | `java.util.concurrent.ForkJoinPool`      |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186fd0`)

|     % | Samples | Callee                       | Location                                    |
| ----: | ------: | ---------------------------- | ------------------------------------------- |
| 99.3% |     293 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee               | Location              |
| ----: | ------: | -------------------- | --------------------- |
| 72.7% |     213 | `addAll(Collection)` | `java.util.ArrayList` |
| 27.3% |      80 | `<init>(Collection)` | `java.util.ArrayList` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|     % | Samples | Callee                            | Location           |
| ----: | ------: | --------------------------------- | ------------------ |
| 57.8% |     163 | `_new_array_Java`                 | `<unknown>`        |
| 39.0% |     110 | `arrayof_jint_disjoint_arraycopy` | `<unknown>`        |
|  0.7% |       2 | `copyOf(Object[], int, Class)`    | `java.util.Arrays` |

##### `addAll(Collection)` (`java.util.ArrayList`)

|     % | Samples | Callee                           | Location              |
| ----: | ------: | -------------------------------- | --------------------- |
| 49.8% |     106 | `toArray()`                      | `java.util.ArrayList` |
| 31.0% |      66 | `grow(int)`                      | `java.util.ArrayList` |
| 18.3% |      39 | `arrayof_oop_disjoint_arraycopy` | `<unknown>`           |
|  0.5% |       1 | `G1BarrierSet::invalidate`       | `libjvm.dylib`        |

##### `_pthread_start` (`libsystem_pthread.dylib`)

|     % | Samples | Callee                | Location       |
| ----: | ------: | --------------------- | -------------- |
| 99.5% |     194 | `thread_native_entry` | `libjvm.dylib` |
|  0.5% |       1 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Callee           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |     195 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 50.5% |      98 | `WorkerThread::run`             | `libjvm.dylib` |
| 42.3% |      82 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
|  4.6% |       9 | `VMThread::run`                 | `libjvm.dylib` |
|  2.1% |       4 | `ConcurrentGCThread::run`       | `libjvm.dylib` |
|  0.5% |       1 | `WatcherThread::run`            | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     194 | `Thread::call_run` | `libjvm.dylib` |

##### `toArray()` (`java.util.ArrayList`)

|      % | Samples | Callee                  | Location           |
| -----: | ------: | ----------------------- | ------------------ |
| 100.0% |     186 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `_new_array_Java` (`<unknown>`)

|     % | Samples | Callee                             | Location                  |
| ----: | ------: | ---------------------------------- | ------------------------- |
| 98.2% |     167 | `OptoRuntime::new_array_C`         | `libjvm.dylib`            |
|  1.2% |       2 | `pthread_jit_write_protect_np`     | `libsystem_pthread.dylib` |
|  0.6% |       1 | `InstanceKlass::allocate_objArray` | `libjvm.dylib`            |

##### `MemAllocator::allocate` (`libjvm.dylib`)

|     % | Samples | Callee                                                      | Location                   |
| ----: | ------: | ----------------------------------------------------------- | -------------------------- |
| 80.8% |     135 | `MemAllocator::Allocation::notify_allocation_jvmti_sampler` | `libjvm.dylib`             |
|  6.6% |      11 | `_platform_bzero`                                           | `libsystem_platform.dylib` |
|  4.2% |       7 | `_platform_memset`                                          | `libsystem_platform.dylib` |
|  3.0% |       5 | `ObjArrayAllocator::initialize`                             | `libjvm.dylib`             |
|  1.8% |       3 | `MemAllocator::Allocation::notify_allocation`               | `libjvm.dylib`             |

##### `OptoRuntime::new_array_C` (`libjvm.dylib`)

|     % | Samples | Callee                             | Location                  |
| ----: | ------: | ---------------------------------- | ------------------------- |
| 94.6% |     158 | `InstanceKlass::allocate_objArray` | `libjvm.dylib`            |
|  3.6% |       6 | `CollectedHeap::array_allocate`    | `libjvm.dylib`            |
|  1.2% |       2 | `pthread_jit_write_protect_np`     | `libsystem_pthread.dylib` |

##### `CollectedHeap::array_allocate` (`libjvm.dylib`)

|     % | Samples | Callee                   | Location        |
| ----: | ------: | ------------------------ | --------------- |
| 99.4% |     163 | `MemAllocator::allocate` | `libjvm.dylib`  |
|  0.6% |       1 | `tlv_get_addr`           | `libdyld.dylib` |

##### `arrayof_jint_disjoint_arraycopy` (`<unknown>`)

|     % | Samples | Callee               | Location    |
| ----: | ------: | -------------------- | ----------- |
| 89.0% |     145 | `forward_copy_longs` | `<unknown>` |

##### `InstanceKlass::allocate_objArray` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 99.4% |     158 | `CollectedHeap::array_allocate` | `libjvm.dylib` |

##### `MemAllocator::Allocation::notify_allocation_jvmti_sampler` (`libjvm.dylib`)

|     % | Samples | Callee                                                                          | Location        |
| ----: | ------: | ------------------------------------------------------------------------------- | --------------- |
| 92.6% |     126 | `JvmtiSampledObjectAllocEventCollector::~JvmtiSampledObjectAllocEventCollector` | `libjvm.dylib`  |
|  4.4% |       6 | `ThreadHeapSampler::check_for_sampling`                                         | `libjvm.dylib`  |
|  0.7% |       1 | `JvmtiSampledObjectAllocEventCollector::start`                                  | `libjvm.dylib`  |
|  0.7% |       1 | `tlv_get_addr`                                                                  | `libdyld.dylib` |
|  0.7% |       1 | `Thread::is_Compiler_thread`                                                    | `libjvm.dylib`  |

##### `JvmtiObjectAllocEventCollector::generate_call_for_allocated` (`libjvm.dylib`)

|     % | Samples | Callee                                                                           | Location       |
| ----: | ------: | -------------------------------------------------------------------------------- | -------------- |
| 97.6% |     123 | `JvmtiExport::post_sampled_object_alloc`                                         | `libjvm.dylib` |
|  0.8% |       1 | `GrowableArrayWithAllocator<OopHandle, GrowableArray<OopHandle>>::shrink_to_fit` | `libjvm.dylib` |
|  0.8% |       1 | `AnyObj::operator delete`                                                        | `libjvm.dylib` |
|  0.8% |       1 | `OopStorage::release`                                                            | `libjvm.dylib` |

##### `JvmtiSampledObjectAllocEventCollector::~JvmtiSampledObjectAllocEventCollector` (`libjvm.dylib`)

|      % | Samples | Callee                                                        | Location       |
| -----: | ------: | ------------------------------------------------------------- | -------------- |
| 100.0% |     126 | `JvmtiObjectAllocEventCollector::generate_call_for_allocated` | `libjvm.dylib` |

##### `JvmtiExport::post_sampled_object_alloc` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location                 |
| ----: | ------: | --------------------------------- | ------------------------ |
| 97.6% |     120 | `ObjectSampler::recordAllocation` | `libasyncProfiler.dylib` |
|  0.8% |       1 | `jvmti_Deallocate`                | `libjvm.dylib`           |
|  0.8% |       1 | `mach_absolute_time`              | `libsystem_kernel.dylib` |
|  0.8% |       1 | `JNIHandleBlock::release_block`   | `libjvm.dylib`           |

##### `ObjectSampler::recordAllocation` (`libasyncProfiler.dylib`)

|     % | Samples | Callee                    | Location                 |
| ----: | ------: | ------------------------- | ------------------------ |
| 87.5% |     105 | `Profiler::recordSample`  | `libasyncProfiler.dylib` |
|  7.5% |       9 | `thread_self_trap`        | `libsystem_kernel.dylib` |
|  1.7% |       2 | `jvmti_Deallocate`        | `libjvm.dylib`           |
|  1.7% |       2 | `jvmti_GetClassSignature` | `libjvm.dylib`           |
|  0.8% |       1 | `mach_thread_self`        | `libsystem_kernel.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 85.2% |      69 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
| 14.8% |      12 | `CompileQueue::get`                        | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 72.5% |      50 | `C2Compiler::compile_method`    | `libjvm.dylib` |
| 26.1% |      18 | `Compiler::compile_method`      | `libjvm.dylib` |
|  1.4% |       1 | `ciEnv::get_method_from_handle` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % | Samples | Callee                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 48.0% |      24 | `Compile::Code_Gen`                      | `libjvm.dylib` |
| 32.0% |      16 | `Compile::Optimize`                      | `libjvm.dylib` |
| 14.0% |       7 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  4.0% |       2 | `CallGenerator::for_inline`              | `libjvm.dylib` |
|  2.0% |       1 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |      50 | `Compile::Compile` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 45.8% |      11 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 20.8% |       5 | `Matcher::match`                  | `libjvm.dylib` |
| 16.7% |       4 | `PhaseOutput::Output`             | `libjvm.dylib` |
| 12.5% |       3 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
|  4.2% |       1 | `PhaseOutput::install_code`       | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee                                               | Location       |
| ----: | ------: | ---------------------------------------------------- | -------------- |
| 82.4% |      14 | `Compilation::compile_java_method`                   | `libjvm.dylib` |
| 11.8% |       2 | `ciEnv::register_method`                             | `libjvm.dylib` |
|  5.9% |       1 | `DebugInformationRecorder::DebugInformationRecorder` | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Callee                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |      17 | `Compilation::compile_method` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 37.5% |       6 | `Compile::optimize_loops`              | `libjvm.dylib` |
| 18.8% |       3 | `PhaseIterGVN::optimize`               | `libjvm.dylib` |
| 18.8% |       3 | `PhaseIdealLoop::optimize`             | `libjvm.dylib` |
|  6.3% |       1 | `PhaseRenumberLive::PhaseRenumberLive` | `libjvm.dylib` |
|  6.3% |       1 | `PhaseIterGVN::PhaseIterGVN`           | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|     % | Samples | Callee                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 50.0% |       7 | `Compilation::emit_lir`       | `libjvm.dylib` |
| 35.7% |       5 | `Compilation::build_hir`      | `libjvm.dylib` |
| 14.3% |       2 | `Compilation::emit_code_body` | `libjvm.dylib` |

##### `CompileQueue::get` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 91.7% |      11 | `Monitor::wait`                  | `libjvm.dylib` |
|  8.3% |       1 | `CompilationPolicy::select_task` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % | Samples | Callee                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 45.5% |       5 | `PhaseChaitin::build_ifg_physical`            | `libjvm.dylib` |
| 27.3% |       3 | `PhaseChaitin::gather_lrg_masks`              | `libjvm.dylib` |
|  9.1% |       1 | `PhaseChaitin::merge_multidefs`               | `libjvm.dylib` |
|  9.1% |       1 | `unnecessary_membar_acquireNode::out_RegMask` | `libjvm.dylib` |
|  9.1% |       1 | `PhaseChaitin::Split`                         | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 22.2% |       2 | `PhaseIdealLoop::build_loop_early`     | `libjvm.dylib` |
| 22.2% |       2 | `PhaseIdealLoop::build_loop_late`      | `libjvm.dylib` |
| 22.2% |       2 | `PhaseIdealLoop::Dominators`           | `libjvm.dylib` |
| 11.1% |       1 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |
| 11.1% |       1 | `Node_Array::grow`                     | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % | Samples | Callee                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       9 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|      % | Samples | Callee                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |       9 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 57.1% |       4 | `LinearScan::do_linear_scan` | `libjvm.dylib` |
| 42.9% |       3 | `BlockList::iterate_forward` | `libjvm.dylib` |

##### `Compile::optimize_loops` (`libjvm.dylib`)

|      % | Samples | Callee                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |       6 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `ciTypeFlow::df_flow_types` (`libjvm.dylib`)

|     % | Samples | Callee                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 60.0% |       3 | `ciTypeFlow::flow_block`      | `libjvm.dylib` |
| 20.0% |       1 | `ciTypeFlow::build_loop_tree` | `libjvm.dylib` |

##### `ciTypeFlow::flow_types` (`libjvm.dylib`)

|      % | Samples | Callee                      | Location       |
| -----: | ------: | --------------------------- | -------------- |
| 100.0% |       5 | `ciTypeFlow::df_flow_types` | `libjvm.dylib` |

##### `ciTypeFlow::do_flow` (`libjvm.dylib`)

|      % | Samples | Callee                   | Location       |
| -----: | ------: | ------------------------ | -------------- |
| 100.0% |       5 | `ciTypeFlow::flow_types` | `libjvm.dylib` |

##### `ciMethod::get_flow_analysis` (`libjvm.dylib`)

|      % | Samples | Callee                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |       5 | `ciTypeFlow::do_flow` | `libjvm.dylib` |

##### `I2C/C2I adapters(0xbba)` (`<unknown>`)

|      % | Samples | Callee                                  | Location       |
| -----: | ------: | --------------------------------------- | -------------- |
| 100.0% |       1 | `SharedRuntime::fixup_callers_callsite` | `libjvm.dylib` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`) ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 5.7% |     293 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `LockTracer::UnsafeParkHook` (`libasyncProfiler.dylib`) ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 3.3% |     167 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 2.7% |     136 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 2.4% |     123 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 2.3% |     115 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 2.2% |     114 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `LockTracer::UnsafeParkHook` (`libasyncProfiler.dylib`) ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 2.2% |     112 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 1.6% |      82 | `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 1.4% |      72 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.4% |      69 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801183d68`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) |
| 1.4% |      69 | `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.3% |      68 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 1.3% |      66 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.2% |      63 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 1.2% |      62 | `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.1% |      55 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.0% |      50 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.9% |      47 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.9% |      46 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.9% |      45 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

# Allocated heap profile

Allocated 3.03 GiB over 74,967 samples (42.4 KiB per sample).

| Category         |     % |     Size | Samples |
| ---------------- | ----: | -------: | ------: |
| Standard library | 99.8% | 3.02 GiB |  69,639 |
| Ours             |  0.2% | 6.74 MiB |   5,328 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |     Size | Samples | Function                                     | Location                                                   |
| ----: | -------: | ------: | -------------------------------------------- | ---------------------------------------------------------- |
| 99.6% | 3.02 GiB |  67,962 | `copyOf(Object[], int)`                      | `java.util.Arrays`                                         |
|  0.2% | 6.66 MiB |   3,545 | `findNearestCentroid()`                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.2% | 4.86 MiB |      26 | `copyOf(Object[], int, Class)`               | `java.util.Arrays`                                         |
| <0.1% |  260 KiB |      26 | `copyOf(byte[], int)`                        | `java.util.Arrays`                                         |
| <0.1% |  245 KiB |      12 | `<init>(InputStream, Inflater, int)`         | `java.util.zip.InflaterInputStream`                        |
| <0.1% | 26.5 KiB |     485 | `grow(int)`                                  | `java.util.ArrayList`                                      |
| <0.1% | 17.1 KiB |     364 | `createSubtask(int, int)`                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| <0.1% | 16.8 KiB |     539 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap`                                        |
| <0.1% |   16 KiB |       1 | `readNBytes(int)`                            | `java.io.InputStream`                                      |
| <0.1% | 15.6 KiB |     228 | `resize()`                                   | `java.util.HashMap`                                        |
| <0.1% | 15.1 KiB |     277 | `createSubtask(int, int)`                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| <0.1% | 9.61 KiB |     205 | `collectClusters(int[])`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| <0.1% | 8.02 KiB |       1 | `<init>(InputStream, int)`                   | `java.util.jar.Manifest$FastInputStream`                   |
| <0.1% | 7.82 KiB |     143 | `add(double[], double[])`                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| <0.1% | 7.82 KiB |     143 | `vectorSum()`                                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| <0.1% |    6 KiB |     128 | `merge(Map, Map)`                            | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| <0.1% | 5.37 KiB |     229 | `lambda$merge$6(List, List)`                 | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| <0.1% | 4.92 KiB |     210 | `lambda$collectClusters$0(Double[])`         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| <0.1% |  2.9 KiB |      53 | `intStream(Spliterator$OfInt, boolean)`      | `java.util.stream.StreamSupport`                           |
| <0.1% |  2.7 KiB |     115 | `valueOf(double)`                            | `java.lang.Double`                                         |

#### Categories

##### Standard library

|     % |     Size | Samples | Function                                                       | Location                                 |
| ----: | -------: | ------: | -------------------------------------------------------------- | ---------------------------------------- |
| 99.6% | 3.02 GiB |  67,962 | `copyOf(Object[], int)`                                        | `java.util.Arrays`                       |
|  0.2% | 4.86 MiB |      26 | `copyOf(Object[], int, Class)`                                 | `java.util.Arrays`                       |
| <0.1% |  260 KiB |      26 | `copyOf(byte[], int)`                                          | `java.util.Arrays`                       |
| <0.1% |  245 KiB |      12 | `<init>(InputStream, Inflater, int)`                           | `java.util.zip.InflaterInputStream`      |
| <0.1% | 26.5 KiB |     485 | `grow(int)`                                                    | `java.util.ArrayList`                    |
| <0.1% | 16.8 KiB |     539 | `newNode(int, Object, Object, HashMap$Node)`                   | `java.util.HashMap`                      |
| <0.1% |   16 KiB |       1 | `readNBytes(int)`                                              | `java.io.InputStream`                    |
| <0.1% | 15.6 KiB |     228 | `resize()`                                                     | `java.util.HashMap`                      |
| <0.1% | 8.02 KiB |       1 | `<init>(InputStream, int)`                                     | `java.util.jar.Manifest$FastInputStream` |
| <0.1% |  2.9 KiB |      53 | `intStream(Spliterator$OfInt, boolean)`                        | `java.util.stream.StreamSupport`         |
| <0.1% |  2.7 KiB |     115 | `valueOf(double)`                                              | `java.lang.Double`                       |
| <0.1% | 2.24 KiB |      41 | `mapToObj(IntFunction, int)`                                   | `java.util.stream.IntPipeline`           |
| <0.1% | 1.56 KiB |       3 | `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])` | `java.util.concurrent.ConcurrentHashMap` |
| <0.1% |    664 B |       1 | `load(DataInputStream)`                                        | `sun.util.calendar.ZoneInfoFile`         |
| <0.1% |    600 B |      25 | `opWrapSink(int, Sink)`                                        | `java.util.stream.IntPipeline$1`         |
| <0.1% |    576 B |      24 | `builder(long, IntFunction)`                                   | `java.util.stream.Nodes`                 |
| <0.1% |    496 B |      31 | `entrySet()`                                                   | `java.util.HashMap`                      |
| <0.1% |    480 B |      20 | `range(int, int)`                                              | `java.util.stream.IntStream`             |
| <0.1% |    480 B |      20 | `allocateInstance(Object)`                                     | `java.lang.invoke.DirectMethodHandle`    |
| <0.1% |    224 B |       4 | `doubleStream(Spliterator$OfDouble, boolean)`                  | `java.util.stream.StreamSupport`         |

#### Lines

Lines ranked by contribution to each function's self size.

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|      % |     Size | Samples | Location                |
| -----: | -------: | ------: | ----------------------- |
| 100.0% | 3.02 GiB |  67,962 | `java.util.Arrays:3482` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |     Size | Samples | Location                                                       |
| -----: | -------: | ------: | -------------------------------------------------------------- |
| 100.0% | 6.66 MiB |   3,545 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:223` |

##### `copyOf(Object[], int, Class)` (`java.util.Arrays`)

|      % |     Size | Samples | Location                |
| -----: | -------: | ------: | ----------------------- |
| 100.0% | 4.86 MiB |      26 | `java.util.Arrays:3513` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

|      % |    Size | Samples | Location                |
| -----: | ------: | ------: | ----------------------- |
| 100.0% | 260 KiB |      26 | `java.util.Arrays:3541` |

##### `<init>(InputStream, Inflater, int)` (`java.util.zip.InflaterInputStream`)

|      % |    Size | Samples | Location                               |
| -----: | ------: | ------: | -------------------------------------- |
| 100.0% | 245 KiB |      12 | `java.util.zip.InflaterInputStream:89` |

##### `grow(int)` (`java.util.ArrayList`)

|      % |     Size | Samples | Location                  |
| -----: | -------: | ------: | ------------------------- |
| 100.0% | 26.5 KiB |     485 | `java.util.ArrayList:239` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % |     Size | Samples | Location                                                      |
| -----: | -------: | ------: | ------------------------------------------------------------- |
| 100.0% | 17.1 KiB |     364 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:419` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

|      % |     Size | Samples | Location                 |
| -----: | -------: | ------: | ------------------------ |
| 100.0% | 16.8 KiB |     539 | `java.util.HashMap:1909` |

##### `readNBytes(int)` (`java.io.InputStream`)

|      % |   Size | Samples | Location                  |
| -----: | -----: | ------: | ------------------------- |
| 100.0% | 16 KiB |       1 | `java.io.InputStream:408` |

##### `resize()` (`java.util.HashMap`)

|      % |     Size | Samples | Location                |
| -----: | -------: | ------: | ----------------------- |
| 100.0% | 15.6 KiB |     228 | `java.util.HashMap:710` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |     Size | Samples | Location                                                       |
| -----: | -------: | ------: | -------------------------------------------------------------- |
| 100.0% | 15.1 KiB |     277 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:261` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |     Size | Samples | Location                                                       |
| -----: | -------: | ------: | -------------------------------------------------------------- |
| 100.0% | 9.61 KiB |     205 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:209` |

##### `<init>(InputStream, int)` (`java.util.jar.Manifest$FastInputStream`)

|      % |     Size | Samples | Location                                     |
| -----: | -------: | ------: | -------------------------------------------- |
| 100.0% | 8.02 KiB |       1 | `java.util.jar.Manifest$FastInputStream:421` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % |     Size | Samples | Location                                                      |
| -----: | -------: | ------: | ------------------------------------------------------------- |
| 100.0% | 7.82 KiB |     143 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:430` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % |     Size | Samples | Location                                                      |
| -----: | -------: | ------: | ------------------------------------------------------------- |
| 100.0% | 7.82 KiB |     143 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:400` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |  Size | Samples | Location                                        |
| -----: | ----: | ------: | ----------------------------------------------- |
| 100.0% | 6 KiB |     128 | `org.renaissance.jdk.concurrent.JavaKMeans:110` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |     Size | Samples | Location                                        |
| -----: | -------: | ------: | ----------------------------------------------- |
| 100.0% | 5.37 KiB |     229 | `org.renaissance.jdk.concurrent.JavaKMeans:114` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |     Size | Samples | Location                                                       |
| -----: | -------: | ------: | -------------------------------------------------------------- |
| 100.0% | 4.92 KiB |     210 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |

##### `intStream(Spliterator$OfInt, boolean)` (`java.util.stream.StreamSupport`)

|      % |    Size | Samples | Location                             |
| -----: | ------: | ------: | ------------------------------------ |
| 100.0% | 2.9 KiB |      53 | `java.util.stream.StreamSupport:138` |

##### `valueOf(double)` (`java.lang.Double`)

|      % |    Size | Samples | Location               |
| -----: | ------: | ------: | ---------------------- |
| 100.0% | 2.7 KiB |     115 | `java.lang.Double:773` |

##### `mapToObj(IntFunction, int)` (`java.util.stream.IntPipeline`)

|      % |     Size | Samples | Location                           |
| -----: | -------: | ------: | ---------------------------------- |
| 100.0% | 2.24 KiB |      41 | `java.util.stream.IntPipeline:174` |

##### `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])` (`java.util.concurrent.ConcurrentHashMap`)

|     % |     Size | Samples | Location                                      |
| ----: | -------: | ------: | --------------------------------------------- |
| 98.0% | 1.53 KiB |       2 | `java.util.concurrent.ConcurrentHashMap:2431` |
|  2.0% |     32 B |       1 | `java.util.concurrent.ConcurrentHashMap:2509` |

##### `load(DataInputStream)` (`sun.util.calendar.ZoneInfoFile`)

|      % |  Size | Samples | Location                             |
| -----: | ----: | ------: | ------------------------------------ |
| 100.0% | 664 B |       1 | `sun.util.calendar.ZoneInfoFile:327` |

##### `opWrapSink(int, Sink)` (`java.util.stream.IntPipeline$1`)

|      % |  Size | Samples | Location                             |
| -----: | ----: | ------: | ------------------------------------ |
| 100.0% | 600 B |      25 | `java.util.stream.IntPipeline$1:177` |

##### `builder(long, IntFunction)` (`java.util.stream.Nodes`)

|      % |  Size | Samples | Location                     |
| -----: | ----: | ------: | ---------------------------- |
| 100.0% | 576 B |      24 | `java.util.stream.Nodes:168` |

##### `entrySet()` (`java.util.HashMap`)

|      % |  Size | Samples | Location                 |
| -----: | ----: | ------: | ------------------------ |
| 100.0% | 496 B |      31 | `java.util.HashMap:1099` |

##### `range(int, int)` (`java.util.stream.IntStream`)

|      % |  Size | Samples | Location                          |
| -----: | ----: | ------: | --------------------------------- |
| 100.0% | 480 B |      20 | `java.util.stream.IntStream:1083` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

|      % |  Size | Samples | Location                                  |
| -----: | ----: | ------: | ----------------------------------------- |
| 100.0% | 480 B |      20 | `java.lang.invoke.DirectMethodHandle:501` |

##### `doubleStream(Spliterator$OfDouble, boolean)` (`java.util.stream.StreamSupport`)

|      % |  Size | Samples | Location                             |
| -----: | ----: | ------: | ------------------------------------ |
| 100.0% | 224 B |       4 | `java.util.stream.StreamSupport:274` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|     % |     Size | Samples | Caller      | Location              |
| ----: | -------: | ------: | ----------- | --------------------- |
| 62.9% |  1.9 GiB |  38,799 | `grow(int)` | `java.util.ArrayList` |
| 37.1% | 1.12 GiB |  29,163 | `toArray()` | `java.util.ArrayList` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |     Size | Samples | Caller              | Location                                                   |
| -----: | -------: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% | 6.66 MiB |   3,545 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `copyOf(Object[], int, Class)` (`java.util.Arrays`)

|      % |     Size | Samples | Caller                  | Location           |
| -----: | -------: | ------: | ----------------------- | ------------------ |
| 100.0% | 4.86 MiB |      26 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

|     % |     Size | Samples | Caller                        | Location                          |
| ----: | -------: | ------: | ----------------------------- | --------------------------------- |
| 98.4% |  256 KiB |      24 | `getBytes()`                  | `jdk.internal.loader.Resource`    |
|  1.5% | 4.02 KiB |       1 | `ensureCapacity(int)`         | `java.io.ByteArrayOutputStream`   |
|  0.1% |    160 B |       1 | `ensureCapacityInternal(int)` | `java.lang.AbstractStringBuilder` |

##### `<init>(InputStream, Inflater, int)` (`java.util.zip.InflaterInputStream`)

|      % |    Size | Samples | Caller                                                                                  | Location                                           |
| -----: | ------: | ------: | --------------------------------------------------------------------------------------- | -------------------------------------------------- |
| 100.0% | 245 KiB |      12 | `<init>(ZipFile, ZipFile$ZipFileInputStream, ZipFile$CleanableResource, Inflater, int)` | `java.util.zip.ZipFile$ZipFileInflaterInputStream` |

##### `grow(int)` (`java.util.ArrayList`)

|      % |     Size | Samples | Caller   | Location              |
| -----: | -------: | ------: | -------- | --------------------- |
| 100.0% | 26.5 KiB |     485 | `grow()` | `java.util.ArrayList` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % |     Size | Samples | Caller      | Location                                               |
| -----: | -------: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% | 17.1 KiB |     364 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

|     % |     Size | Samples | Caller                                          | Location            |
| ----: | -------: | ------: | ----------------------------------------------- | ------------------- |
| 53.8% | 9.06 KiB |     290 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap` |
| 45.6% | 7.69 KiB |     246 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |
|  0.6% |     96 B |       3 | `merge(Object, Object, BiFunction)`             | `java.util.HashMap` |

##### `readNBytes(int)` (`java.io.InputStream`)

|      % |   Size | Samples | Caller           | Location              |
| -----: | -----: | ------: | ---------------- | --------------------- |
| 100.0% | 16 KiB |       1 | `readAllBytes()` | `java.io.InputStream` |

##### `resize()` (`java.util.HashMap`)

|     % |    Size | Samples | Caller                                          | Location            |
| ----: | ------: | ------: | ----------------------------------------------- | ------------------- |
| 77.0% |  12 KiB |     154 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap` |
| 23.0% | 3.6 KiB |      74 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |     Size | Samples | Caller      | Location                                               |
| -----: | -------: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% | 15.1 KiB |     277 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |     Size | Samples | Caller              | Location                                                   |
| -----: | -------: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% | 9.61 KiB |     205 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `<init>(InputStream, int)` (`java.util.jar.Manifest$FastInputStream`)

|      % |     Size | Samples | Caller                | Location                                 |
| -----: | -------: | ------: | --------------------- | ---------------------------------------- |
| 100.0% | 8.02 KiB |       1 | `<init>(InputStream)` | `java.util.jar.Manifest$FastInputStream` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % |     Size | Samples | Caller                               | Location                                                  |
| -----: | -------: | ------: | ------------------------------------ | --------------------------------------------------------- |
| 100.0% | 7.82 KiB |     143 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % |     Size | Samples | Caller              | Location                                                  |
| -----: | -------: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% | 7.82 KiB |     143 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % |     Size | Samples | Caller                     | Location                                                   |
| ----: | -------: | ------: | -------------------------- | ---------------------------------------------------------- |
| 97.7% | 5.86 KiB |     125 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  2.3% |    144 B |       3 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |     Size | Samples | Caller                  | Location                                                               |
| -----: | -------: | ------: | ----------------------- | ---------------------------------------------------------------------- |
| 100.0% | 5.37 KiB |     229 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186fd0` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |     Size | Samples | Caller          | Location                                                                              |
| -----: | -------: | ------: | --------------- | ------------------------------------------------------------------------------------- |
| 100.0% | 4.92 KiB |     210 | `apply(Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000c801186b38` |

##### `intStream(Spliterator$OfInt, boolean)` (`java.util.stream.StreamSupport`)

|      % |    Size | Samples | Caller            | Location                     |
| -----: | ------: | ------: | ----------------- | ---------------------------- |
| 100.0% | 2.9 KiB |      53 | `range(int, int)` | `java.util.stream.IntStream` |

##### `valueOf(double)` (`java.lang.Double`)

|     % |    Size | Samples | Caller                                           | Location                                                     |
| ----: | ------: | ------: | ------------------------------------------------ | ------------------------------------------------------------ |
| 96.5% | 2.6 KiB |     111 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                  |
|  3.5% |    96 B |       4 | `apply(double)`                                  | `java.util.stream.DoublePipeline$$Lambda.0x000000c8011c1bc8` |

##### `mapToObj(IntFunction, int)` (`java.util.stream.IntPipeline`)

|      % |     Size | Samples | Caller                  | Location                       |
| -----: | -------: | ------: | ----------------------- | ------------------------------ |
| 100.0% | 2.24 KiB |      41 | `mapToObj(IntFunction)` | `java.util.stream.IntPipeline` |

##### `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])` (`java.util.concurrent.ConcurrentHashMap`)

|      % |     Size | Samples | Caller                | Location                                 |
| -----: | -------: | ------: | --------------------- | ---------------------------------------- |
| 100.0% | 1.56 KiB |       3 | `addCount(long, int)` | `java.util.concurrent.ConcurrentHashMap` |

##### `load(DataInputStream)` (`sun.util.calendar.ZoneInfoFile`)

|      % |  Size | Samples | Caller  | Location                           |
| -----: | ----: | ------: | ------- | ---------------------------------- |
| 100.0% | 664 B |       1 | `run()` | `sun.util.calendar.ZoneInfoFile$1` |

##### `opWrapSink(int, Sink)` (`java.util.stream.IntPipeline$1`)

|      % |  Size | Samples | Caller           | Location                            |
| -----: | ----: | ------: | ---------------- | ----------------------------------- |
| 100.0% | 600 B |      25 | `wrapSink(Sink)` | `java.util.stream.AbstractPipeline` |

##### `builder(long, IntFunction)` (`java.util.stream.Nodes`)

|      % |  Size | Samples | Caller                               | Location                             |
| -----: | ----: | ------: | ------------------------------------ | ------------------------------------ |
| 100.0% | 576 B |      24 | `makeNodeBuilder(long, IntFunction)` | `java.util.stream.ReferencePipeline` |

##### `entrySet()` (`java.util.HashMap`)

|      % |  Size | Samples | Caller                        | Location            |
| -----: | ----: | ------: | ----------------------------- | ------------------- |
| 100.0% | 496 B |      31 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `range(int, int)` (`java.util.stream.IntStream`)

|      % |  Size | Samples | Caller                                           | Location                                    |
| -----: | ----: | ------: | ------------------------------------------------ | ------------------------------------------- |
| 100.0% | 480 B |      20 | `lambda$generateData$5(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

|      % |  Size | Samples | Caller                                       | Location                                             |
| -----: | ----: | ------: | -------------------------------------------- | ---------------------------------------------------- |
| 100.0% | 480 B |      20 | `newInvokeSpecial(Object, int, int, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000c801126400` |

##### `doubleStream(Spliterator$OfDouble, boolean)` (`java.util.stream.StreamSupport`)

|      % |  Size | Samples | Caller                       | Location           |
| -----: | ----: | ------: | ---------------------------- | ------------------ |
| 100.0% | 224 B |       4 | `stream(double[], int, int)` | `java.util.Arrays` |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |     Size | Samples | Function                                             | Location                                                               |
| ----: | -------: | ------: | ---------------------------------------------------- | ---------------------------------------------------------------------- |
| 99.8% | 3.02 GiB |  74,565 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                                    |
| 99.8% | 3.02 GiB |  74,565 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
| 99.8% | 3.02 GiB |  74,565 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                                    |
| 99.8% | 3.02 GiB |  74,565 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                                    |
| 99.8% | 3.02 GiB |  74,565 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`                            |
| 99.8% | 3.02 GiB |  74,559 | `compute()`                                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| 99.8% | 3.02 GiB |  74,559 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                                   |
| 99.8% | 3.02 GiB |  67,988 | `copyOf(Object[], int)`                              | `java.util.Arrays`                                                     |
| 99.5% | 3.01 GiB |  56,907 | `merge(Map, Map)`                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 99.5% | 3.01 GiB |  56,898 | `combineResults(Map, Map)`                           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 99.5% | 3.01 GiB |  56,898 | `combineResults(Object, Object)`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 99.5% | 3.01 GiB |  56,432 | `merge(Object, Object, BiFunction)`                  | `java.util.HashMap`                                                    |
| 99.5% | 3.01 GiB |  56,432 | `lambda$merge$7(Map, Object, List)`                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 99.5% | 3.01 GiB |  56,432 | `accept(Object, Object)`                             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186d88` |
| 99.5% | 3.01 GiB |  56,432 | `forEach(BiConsumer)`                                | `java.util.HashMap`                                                    |
| 99.5% | 3.01 GiB |  56,429 | `lambda$merge$6(List, List)`                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 99.5% | 3.01 GiB |  56,429 | `apply(Object, Object)`                              | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186fd0` |
| 81.1% | 2.46 GiB |  41,976 | `addAll(Collection)`                                 | `java.util.ArrayList`                                                  |
| 62.8% |  1.9 GiB |  39,291 | `grow(int)`                                          | `java.util.ArrayList`                                                  |
| 62.7% |  1.9 GiB |  15,374 | `invoke()`                                           | `java.util.concurrent.ForkJoinTask`                                    |

#### Categories

##### Standard library

|     % |     Size | Samples | Function                                                  | Location                                            |
| ----: | -------: | ------: | --------------------------------------------------------- | --------------------------------------------------- |
| 99.8% | 3.02 GiB |  74,565 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                 |
| 99.8% | 3.02 GiB |  74,565 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| 99.8% | 3.02 GiB |  74,565 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`                 |
| 99.8% | 3.02 GiB |  74,565 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                 |
| 99.8% | 3.02 GiB |  74,565 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`         |
| 99.8% | 3.02 GiB |  74,559 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                |
| 99.8% | 3.02 GiB |  67,988 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                                  |
| 99.5% | 3.01 GiB |  56,432 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                                 |
| 99.5% | 3.01 GiB |  56,432 | `forEach(BiConsumer)`                                     | `java.util.HashMap`                                 |
| 81.1% | 2.46 GiB |  41,976 | `addAll(Collection)`                                      | `java.util.ArrayList`                               |
| 62.8% |  1.9 GiB |  39,291 | `grow(int)`                                               | `java.util.ArrayList`                               |
| 62.7% |  1.9 GiB |  15,374 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`                 |
| 62.7% |  1.9 GiB |  15,055 | `exec()`                                                  | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
| 37.0% | 1.12 GiB |  29,182 | `toArray()`                                               | `java.util.ArrayList`                               |
| 31.1% |  963 MiB |  59,892 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                 |
| 31.1% |  963 MiB |  59,892 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                 |
| 30.7% |  952 MiB |  59,224 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| 18.3% |  568 MiB |  14,224 | `<init>(Collection)`                                      | `java.util.ArrayList`                               |
|  2.2% | 69.3 MiB |  11,245 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                 |
|  0.3% | 9.37 MiB |  12,273 | `grow()`                                                  | `java.util.ArrayList`                               |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|      % |     Size | Samples | Callee   | Location                                            |
| -----: | -------: | ------: | -------- | --------------------------------------------------- |
| 100.0% | 3.02 GiB |  74,559 | `exec()` | `java.util.concurrent.RecursiveTask`                |
|  62.8% |  1.9 GiB |  15,055 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % |     Size | Samples | Callee     | Location                            |
| -----: | -------: | ------: | ---------- | ----------------------------------- |
| 100.0% | 3.02 GiB |  74,565 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|      % |     Size | Samples | Callee                                               | Location                                      |
| -----: | -------: | ------: | ---------------------------------------------------- | --------------------------------------------- |
| 100.0% | 3.02 GiB |  74,565 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % |     Size | Samples | Callee                                   | Location                            |
| -----: | -------: | ------: | ---------------------------------------- | ----------------------------------- |
| 100.0% | 3.02 GiB |  74,565 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|      % |     Size | Samples | Callee                              | Location                            |
| -----: | -------: | ------: | ----------------------------------- | ----------------------------------- |
| 100.0% | 3.02 GiB |  74,565 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|     % |     Size | Samples | Callee                           | Location                                                   |
| ----: | -------: | ------: | -------------------------------- | ---------------------------------------------------------- |
| 99.6% | 3.01 GiB |  56,898 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 31.1% |  963 MiB |  59,892 | `join()`                         | `java.util.concurrent.ForkJoinTask`                        |
|  0.4% | 11.3 MiB |  16,673 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| <0.1% | 19.8 KiB |     392 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| <0.1% | 17.1 KiB |     364 | `createSubtask(int, int)`        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % |     Size | Samples | Callee      | Location                                               |
| -----: | -------: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% | 3.02 GiB |  74,559 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|    % |     Size | Samples | Callee                         | Location           |
| ---: | -------: | ------: | ------------------------------ | ------------------ |
| 0.2% | 4.86 MiB |      26 | `copyOf(Object[], int, Class)` | `java.util.Arrays` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |     Size | Samples | Callee                               | Location                           |
| -----: | -------: | ------: | ------------------------------------ | ---------------------------------- |
| 100.0% | 3.01 GiB |  56,432 | `forEach(BiConsumer)`                | `java.util.HashMap`                |
|  <0.1% | 11.4 KiB |     346 | `<init>(Map)`                        | `java.util.HashMap`                |
|  <0.1% |     16 B |       1 | `linkToTargetMethod(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |     Size | Samples | Callee            | Location                                    |
| -----: | -------: | ------: | ----------------- | ------------------------------------------- |
| 100.0% | 3.01 GiB |  56,898 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |     Size | Samples | Callee                     | Location                                                   |
| -----: | -------: | ------: | -------------------------- | ---------------------------------------------------------- |
| 100.0% | 3.01 GiB |  56,898 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|      % |     Size | Samples | Callee                                       | Location                                                               |
| -----: | -------: | ------: | -------------------------------------------- | ---------------------------------------------------------------------- |
| 100.0% | 3.01 GiB |  56,429 | `apply(Object, Object)`                      | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186fd0` |
|  <0.1% |     96 B |       3 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap`                                                    |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |     Size | Samples | Callee                              | Location            |
| -----: | -------: | ------: | ----------------------------------- | ------------------- |
| 100.0% | 3.01 GiB |  56,432 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186d88`)

|      % |     Size | Samples | Callee                              | Location                                    |
| -----: | -------: | ------: | ----------------------------------- | ------------------------------------------- |
| 100.0% | 3.01 GiB |  56,432 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|      % |     Size | Samples | Callee                   | Location                                                               |
| -----: | -------: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| 100.0% | 3.01 GiB |  56,432 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186d88` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % |     Size | Samples | Callee               | Location              |
| ----: | -------: | ------: | -------------------- | --------------------- |
| 81.6% | 2.46 GiB |  41,976 | `addAll(Collection)` | `java.util.ArrayList` |
| 18.4% |  568 MiB |  14,224 | `<init>(Collection)` | `java.util.ArrayList` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186fd0`)

|      % |     Size | Samples | Callee                       | Location                                    |
| -----: | -------: | ------: | ---------------------------- | ------------------------------------------- |
| 100.0% | 3.01 GiB |  56,429 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `addAll(Collection)` (`java.util.ArrayList`)

|     % |     Size | Samples | Callee      | Location              |
| ----: | -------: | ------: | ----------- | --------------------- |
| 77.0% | 1.89 GiB |  27,018 | `grow(int)` | `java.util.ArrayList` |
| 23.0% |  579 MiB |  14,958 | `toArray()` | `java.util.ArrayList` |

##### `grow(int)` (`java.util.ArrayList`)

|      % |    Size | Samples | Callee                  | Location           |
| -----: | ------: | ------: | ----------------------- | ------------------ |
| 100.0% | 1.9 GiB |  38,806 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

|      % |    Size | Samples | Callee     | Location                            |
| -----: | ------: | ------: | ---------- | ----------------------------------- |
| 100.0% | 1.9 GiB |  15,374 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

|      % |    Size | Samples | Callee   | Location                                                               |
| -----: | ------: | ------: | -------- | ---------------------------------------------------------------------- |
| 100.0% | 1.9 GiB |  15,055 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801183d68` |

##### `toArray()` (`java.util.ArrayList`)

|      % |     Size | Samples | Callee                  | Location           |
| -----: | -------: | ------: | ----------------------- | ------------------ |
| 100.0% | 1.12 GiB |  29,182 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|     % |     Size | Samples | Callee                                                    | Location                                      |
| ----: | -------: | ------: | --------------------------------------------------------- | --------------------------------------------- |
| 98.8% |  952 MiB |  59,224 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  7.2% | 69.3 MiB |  11,245 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % |    Size | Samples | Callee                 | Location                            |
| -----: | ------: | ------: | ---------------------- | ----------------------------------- |
| 100.0% | 963 MiB |  59,892 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % |    Size | Samples | Callee     | Location                            |
| -----: | ------: | ------: | ---------- | ----------------------------------- |
| 100.0% | 952 MiB |  59,224 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `<init>(Collection)` (`java.util.ArrayList`)

|      % |    Size | Samples | Callee      | Location              |
| -----: | ------: | ------: | ----------- | --------------------- |
| 100.0% | 568 MiB |  14,224 | `toArray()` | `java.util.ArrayList` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|      % |     Size | Samples | Callee     | Location                            |
| -----: | -------: | ------: | ---------- | ----------------------------------- |
| 100.0% | 69.3 MiB |  11,245 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `grow()` (`java.util.ArrayList`)

|      % |     Size | Samples | Callee      | Location              |
| -----: | -------: | ------: | ----------- | --------------------- |
| 100.0% | 9.37 MiB |  12,273 | `grow(int)` | `java.util.ArrayList` |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

Common call stack: `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ----: | -------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 27.1% |  841 MiB |   1,851 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801183d68`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 15.7% |  486 MiB |   4,819 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  8.6% |  267 MiB |   1,145 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801183d68`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  8.6% |  265 MiB |   1,112 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801183d68`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  7.9% |  245 MiB |   1,061 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801183d68`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  4.5% |  138 MiB |   2,854 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  4.3% |  134 MiB |   2,554 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  4.0% |  125 MiB |   2,845 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  2.4% | 73.5 MiB |     631 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801183d68`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                   |
|  2.2% | 68.6 MiB |     614 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801183d68`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  2.2% | 68.2 MiB |     561 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801183d68`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  1.5% | 46.7 MiB |   2,343 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  1.2% |   38 MiB |   1,695 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  1.1% | 33.8 MiB |   1,506 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.7% | 22.4 MiB |   2,102 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                     |
|  0.7% | 22.3 MiB |     401 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801183d68`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                   |
|  0.7% | 21.1 MiB |     334 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801183d68`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                   |
|  0.6% | 18.5 MiB |     311 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801183d68`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) |
|  0.4% | 13.2 MiB |   1,212 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.4% | 12.9 MiB |   1,211 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801186d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

# Lock contention profile

Blocked 1.6ms over 9 contentions (177.2µs per contention).

| Category         |      % |  Time | Contentions |
| ---------------- | -----: | ----: | ----------: |
| Standard library | 100.0% | 1.6ms |           9 |

## Hottest functions

### Self time

Functions ranked by time blocked directly in the function body, excluding callees.

#### Categories

##### Standard library

|     % |   Time | Contentions | Function                                         | Location                                            |
| ----: | -----: | ----------: | ------------------------------------------------ | --------------------------------------------------- |
| 77.0% |  1.2ms |           4 | `loadClass(String, boolean)`                     | `java.lang.ClassLoader`                             |
| 15.1% |  0.2ms |           1 | `loadClassOrNull(String, boolean)`               | `jdk.internal.loader.BuiltinClassLoader`            |
|  3.7% |  0.1ms |           2 | `<init>(boolean)`                                | `java.util.concurrent.locks.ReentrantReadWriteLock` |
|  2.8% | 44.5µs |           1 | `<init>(Collection, int)`                        | `java.nio.file.FileTreeWalker`                      |
|  1.4% | 23.1µs |           1 | `<init>(UnixPath, long, DirectoryStream$Filter)` | `sun.nio.fs.UnixDirectoryStream`                    |

#### Lines

Lines ranked by contribution to each function's self time.

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|      % |  Time | Contentions | Location                    |
| -----: | ----: | ----------: | --------------------------- |
| 100.0% | 1.2ms |           4 | `java.lang.ClassLoader:573` |

##### `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

|      % |  Time | Contentions | Location                                     |
| -----: | ----: | ----------: | -------------------------------------------- |
| 100.0% | 0.2ms |           1 | `jdk.internal.loader.BuiltinClassLoader:651` |

##### `<init>(boolean)` (`java.util.concurrent.locks.ReentrantReadWriteLock`)

|     % |  Time | Contentions | Location                                                |
| ----: | ----: | ----------: | ------------------------------------------------------- |
| 90.3% | 0.1ms |           1 | `java.util.concurrent.locks.ReentrantReadWriteLock:241` |
|  9.7% | 5.8µs |           1 | `java.util.concurrent.locks.ReentrantReadWriteLock:242` |

##### `<init>(Collection, int)` (`java.nio.file.FileTreeWalker`)

|      % |   Time | Contentions | Location                           |
| -----: | -----: | ----------: | ---------------------------------- |
| 100.0% | 44.5µs |           1 | `java.nio.file.FileTreeWalker:192` |

##### `<init>(UnixPath, long, DirectoryStream$Filter)` (`sun.nio.fs.UnixDirectoryStream`)

|      % |   Time | Contentions | Location                            |
| -----: | -----: | ----------: | ----------------------------------- |
| 100.0% | 23.1µs |           1 | `sun.nio.fs.UnixDirectoryStream:52` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|      % |  Time | Contentions | Caller              | Location                |
| -----: | ----: | ----------: | ------------------- | ----------------------- |
| 100.0% | 1.2ms |           4 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

|      % |  Time | Contentions | Caller                       | Location                                 |
| -----: | ----: | ----------: | ---------------------------- | ---------------------------------------- |
| 100.0% | 0.2ms |           1 | `loadClass(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `<init>(boolean)` (`java.util.concurrent.locks.ReentrantReadWriteLock`)

|      % |  Time | Contentions | Caller                                           | Location                         |
| -----: | ----: | ----------: | ------------------------------------------------ | -------------------------------- |
| 100.0% | 0.1ms |           2 | `<init>(UnixPath, long, DirectoryStream$Filter)` | `sun.nio.fs.UnixDirectoryStream` |

##### `<init>(Collection, int)` (`java.nio.file.FileTreeWalker`)

|      % |   Time | Contentions | Caller                                      | Location              |
| -----: | -----: | ----------: | ------------------------------------------- | --------------------- |
| 100.0% | 44.5µs |           1 | `walkFileTree(Path, Set, int, FileVisitor)` | `java.nio.file.Files` |

##### `<init>(UnixPath, long, DirectoryStream$Filter)` (`sun.nio.fs.UnixDirectoryStream`)

|      % |   Time | Contentions | Caller                                             | Location                            |
| -----: | -----: | ----------: | -------------------------------------------------- | ----------------------------------- |
| 100.0% | 23.1µs |           1 | `newDirectoryStream(Path, DirectoryStream$Filter)` | `sun.nio.fs.UnixFileSystemProvider` |

### Total time

Functions ranked by total time blocked in the function and all its callees.

|     % |  Time | Contentions | Function                                             | Location                                                   |
| ----: | ----: | ----------: | ---------------------------------------------------- | ---------------------------------------------------------- |
| 92.0% | 1.5ms |           5 | `loadClass(String)`                                  | `java.lang.ClassLoader`                                    |
| 77.0% | 1.2ms |           4 | `loadClass(String, boolean)`                         | `java.lang.ClassLoader`                                    |
| 77.0% | 1.2ms |           4 | `average(List)`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| 77.0% | 1.2ms |           4 | `computeClusterAverages()`                           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| 77.0% | 1.2ms |           4 | `computeDirectly()`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| 77.0% | 1.2ms |           4 | `compute()`                                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
| 77.0% | 1.2ms |           4 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                       |
| 77.0% | 1.2ms |           4 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                        |
| 77.0% | 1.2ms |           4 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| 77.0% | 1.2ms |           4 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                        |
| 77.0% | 1.2ms |           4 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                        |
| 77.0% | 1.2ms |           4 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`                |
| 43.5% | 0.7ms |           2 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| 43.5% | 0.7ms |           2 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                        |
| 43.5% | 0.7ms |           2 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                        |
| 23.0% | 0.4ms |           5 | `deleteRecursively(Path, boolean)`                   | `org.renaissance.core.DirUtils`                            |
| 23.0% | 0.4ms |           5 | `deleteRecursively(Path)`                            | `org.renaissance.core.DirUtils`                            |
| 23.0% | 0.4ms |           5 | `lambda$createScratchDirectory$1(Path)`              | `org.renaissance.core.DirUtils`                            |
| 23.0% | 0.4ms |           5 | `run()`                                              | `org.renaissance.core.DirUtils$$Lambda.0x000000c801003a68` |
| 23.0% | 0.4ms |           5 | `runWith(Object, Runnable)`                          | `java.lang.Thread`                                         |

#### Categories

##### Standard library

|     % |  Time | Contentions | Function                                             | Location                                            |
| ----: | ----: | ----------: | ---------------------------------------------------- | --------------------------------------------------- |
| 92.0% | 1.5ms |           5 | `loadClass(String)`                                  | `java.lang.ClassLoader`                             |
| 77.0% | 1.2ms |           4 | `loadClass(String, boolean)`                         | `java.lang.ClassLoader`                             |
| 77.0% | 1.2ms |           4 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                |
| 77.0% | 1.2ms |           4 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                 |
| 77.0% | 1.2ms |           4 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| 77.0% | 1.2ms |           4 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                 |
| 77.0% | 1.2ms |           4 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                 |
| 77.0% | 1.2ms |           4 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`         |
| 43.5% | 0.7ms |           2 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| 43.5% | 0.7ms |           2 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                 |
| 43.5% | 0.7ms |           2 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                 |
| 23.0% | 0.4ms |           5 | `runWith(Object, Runnable)`                          | `java.lang.Thread`                                  |
| 23.0% | 0.4ms |           5 | `run()`                                              | `java.lang.Thread`                                  |
| 22.9% | 0.4ms |           1 | `invoke()`                                           | `java.util.concurrent.ForkJoinTask`                 |
| 22.9% | 0.4ms |           1 | `exec()`                                             | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
| 15.1% | 0.2ms |           1 | `loadClassOrNull(String, boolean)`                   | `jdk.internal.loader.BuiltinClassLoader`            |
| 15.1% | 0.2ms |           1 | `loadClass(String, boolean)`                         | `jdk.internal.loader.BuiltinClassLoader`            |
| 15.1% | 0.2ms |           1 | `loadClass(String, boolean)`                         | `jdk.internal.loader.ClassLoaders$AppClassLoader`   |
|  8.0% | 0.1ms |           4 | `walkFileTree(Path, Set, int, FileVisitor)`          | `java.nio.file.Files`                               |
|  8.0% | 0.1ms |           4 | `walkFileTree(Path, FileVisitor)`                    | `java.nio.file.Files`                               |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `loadClass(String)` (`java.lang.ClassLoader`)

|     % |  Time | Contentions | Callee                       | Location                                          |
| ----: | ----: | ----------: | ---------------------------- | ------------------------------------------------- |
| 83.6% | 1.2ms |           4 | `loadClass(String, boolean)` | `java.lang.ClassLoader`                           |
| 16.4% | 0.2ms |           1 | `loadClass(String, boolean)` | `jdk.internal.loader.ClassLoaders$AppClassLoader` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |  Time | Contentions | Callee              | Location                |
| -----: | ----: | ----------: | ------------------- | ----------------------- |
| 100.0% | 1.2ms |           4 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |  Time | Contentions | Callee          | Location                                               |
| -----: | ----: | ----------: | --------------- | ------------------------------------------------------ |
| 100.0% | 1.2ms |           4 | `average(List)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |  Time | Contentions | Callee                     | Location                                               |
| -----: | ----: | ----------: | -------------------------- | ------------------------------------------------------ |
| 100.0% | 1.2ms |           4 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 100.0% | 1.2ms |           4 | `computeDirectly()`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % |  Time | Contentions | Callee              | Location                                               |
| -----: | ----: | ----------: | ------------------- | ------------------------------------------------------ |
| 100.0% | 1.2ms |           4 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  56.5% | 0.7ms |           2 | `join()`            | `java.util.concurrent.ForkJoinTask`                    |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % |  Time | Contentions | Callee      | Location                                               |
| -----: | ----: | ----------: | ----------- | ------------------------------------------------------ |
| 100.0% | 1.2ms |           4 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|      % |  Time | Contentions | Callee   | Location                                            |
| -----: | ----: | ----------: | -------- | --------------------------------------------------- |
| 100.0% | 1.2ms |           4 | `exec()` | `java.util.concurrent.RecursiveTask`                |
|  29.8% | 0.4ms |           1 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % |  Time | Contentions | Callee     | Location                            |
| -----: | ----: | ----------: | ---------- | ----------------------------------- |
| 100.0% | 1.2ms |           4 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|      % |  Time | Contentions | Callee                                               | Location                                      |
| -----: | ----: | ----------: | ---------------------------------------------------- | --------------------------------------------- |
| 100.0% | 1.2ms |           4 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % |  Time | Contentions | Callee                                   | Location                            |
| -----: | ----: | ----------: | ---------------------------------------- | ----------------------------------- |
| 100.0% | 1.2ms |           4 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|      % |  Time | Contentions | Callee                              | Location                            |
| -----: | ----: | ----------: | ----------------------------------- | ----------------------------------- |
| 100.0% | 1.2ms |           4 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % |  Time | Contentions | Callee     | Location                            |
| -----: | ----: | ----------: | ---------- | ----------------------------------- |
| 100.0% | 0.7ms |           2 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|      % |  Time | Contentions | Callee                                    | Location                                      |
| -----: | ----: | ----------: | ----------------------------------------- | --------------------------------------------- |
| 100.0% | 0.7ms |           2 | `tryRemoveAndExec(ForkJoinTask, boolean)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % |  Time | Contentions | Callee                 | Location                            |
| -----: | ----: | ----------: | ---------------------- | ----------------------------------- |
| 100.0% | 0.7ms |           2 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`)

|     % |  Time | Contentions | Callee                            | Location                |
| ----: | ----: | ----------: | --------------------------------- | ----------------------- |
| 65.5% | 0.2ms |           1 | `loadClass(String)`               | `java.lang.ClassLoader` |
| 34.5% | 0.1ms |           4 | `walkFileTree(Path, FileVisitor)` | `java.nio.file.Files`   |

##### `deleteRecursively(Path)` (`org.renaissance.core.DirUtils`)

|      % |  Time | Contentions | Callee                             | Location                        |
| -----: | ----: | ----------: | ---------------------------------- | ------------------------------- |
| 100.0% | 0.4ms |           5 | `deleteRecursively(Path, boolean)` | `org.renaissance.core.DirUtils` |

##### `lambda$createScratchDirectory$1(Path)` (`org.renaissance.core.DirUtils`)

|      % |  Time | Contentions | Callee                    | Location                        |
| -----: | ----: | ----------: | ------------------------- | ------------------------------- |
| 100.0% | 0.4ms |           5 | `deleteRecursively(Path)` | `org.renaissance.core.DirUtils` |

##### `run()` (`org.renaissance.core.DirUtils$$Lambda.0x000000c801003a68`)

|      % |  Time | Contentions | Callee                                  | Location                        |
| -----: | ----: | ----------: | --------------------------------------- | ------------------------------- |
| 100.0% | 0.4ms |           5 | `lambda$createScratchDirectory$1(Path)` | `org.renaissance.core.DirUtils` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|      % |  Time | Contentions | Callee  | Location                                                   |
| -----: | ----: | ----------: | ------- | ---------------------------------------------------------- |
| 100.0% | 0.4ms |           5 | `run()` | `org.renaissance.core.DirUtils$$Lambda.0x000000c801003a68` |

##### `run()` (`java.lang.Thread`)

|      % |  Time | Contentions | Callee                      | Location           |
| -----: | ----: | ----------: | --------------------------- | ------------------ |
| 100.0% | 0.4ms |           5 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

|      % |  Time | Contentions | Callee     | Location                            |
| -----: | ----: | ----------: | ---------- | ----------------------------------- |
| 100.0% | 0.4ms |           1 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

|      % |  Time | Contentions | Callee   | Location                                                               |
| -----: | ----: | ----------: | -------- | ---------------------------------------------------------------------- |
| 100.0% | 0.4ms |           1 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801183d68` |

##### `loadClass(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

|      % |  Time | Contentions | Callee                             | Location                                 |
| -----: | ----: | ----------: | ---------------------------------- | ---------------------------------------- |
| 100.0% | 0.2ms |           1 | `loadClassOrNull(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `loadClass(String, boolean)` (`jdk.internal.loader.ClassLoaders$AppClassLoader`)

|      % |  Time | Contentions | Callee                       | Location                                 |
| -----: | ----: | ----------: | ---------------------------- | ---------------------------------------- |
| 100.0% | 0.2ms |           1 | `loadClass(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`)

|     % |   Time | Contentions | Callee                    | Location                       |
| ----: | -----: | ----------: | ------------------------- | ------------------------------ |
| 64.9% |  0.1ms |           3 | `walk(Path)`              | `java.nio.file.FileTreeWalker` |
| 35.1% | 44.5µs |           1 | `<init>(Collection, int)` | `java.nio.file.FileTreeWalker` |

##### `walkFileTree(Path, FileVisitor)` (`java.nio.file.Files`)

|      % |  Time | Contentions | Callee                                      | Location              |
| -----: | ----: | ----------: | ------------------------------------------- | --------------------- |
| 100.0% | 0.1ms |           4 | `walkFileTree(Path, Set, int, FileVisitor)` | `java.nio.file.Files` |

## Hottest call stacks

Call stacks ranked by time blocked in their leaf frame.

|     % |   Time | Contentions | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----: | -----: | ----------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 33.5% |  0.5ms |           2 | `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 22.9% |  0.4ms |           1 | `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000c801183d68`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`) |
| 20.5% |  0.3ms |           1 | `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 15.1% |  0.2ms |           1 | `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`) ← `loadClass(String, boolean)` ← `loadClass(String, boolean)` (`jdk.internal.loader.ClassLoaders$AppClassLoader`) ← `loadClass(String)` (`java.lang.ClassLoader`) ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x000000c801003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  3.7% |  0.1ms |           2 | `<init>(boolean)` (`java.util.concurrent.locks.ReentrantReadWriteLock`) ← `<init>(UnixPath, long, DirectoryStream$Filter)` (`sun.nio.fs.UnixDirectoryStream`) ← `newDirectoryStream(Path, DirectoryStream$Filter)` (`sun.nio.fs.UnixFileSystemProvider`) ← `newDirectoryStream(Path)` (`java.nio.file.Files`) ← `visit(Path, boolean, boolean)` (`java.nio.file.FileTreeWalker`) ← `walk(Path)` ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x000000c801003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  2.8% | 44.5µs |           1 | `<init>(Collection, int)` (`java.nio.file.FileTreeWalker`) ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x000000c801003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  1.4% | 23.1µs |           1 | `<init>(UnixPath, long, DirectoryStream$Filter)` (`sun.nio.fs.UnixDirectoryStream`) ← `newDirectoryStream(Path, DirectoryStream$Filter)` (`sun.nio.fs.UnixFileSystemProvider`) ← `newDirectoryStream(Path)` (`java.nio.file.Files`) ← `visit(Path, boolean, boolean)` (`java.nio.file.FileTreeWalker`) ← `walk(Path)` ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x000000c801003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

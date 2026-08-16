# Sampling profile

Collected 4,802 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Ours             | 57.8% |   2,777 |
| Native           | 26.3% |   1,262 |
| Standard library | 13.7% |     657 |
| JIT              |  1.1% |      54 |
| Compiler         |  1.1% |      52 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                                                  | Location                                                   |
| ----: | ------: | --------------------------------------------------------- | ---------------------------------------------------------- |
| 19.3% |     926 | `distance(Double[], Double[])`                            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 18.8% |     901 | `accumulate(Double[], double[])`                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 14.1% |     679 | `__psynch_cvwait`                                         | `libsystem_kernel.dylib`                                   |
|  8.6% |     411 | `vectorSum()`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  8.5% |     410 | `findNearestCentroid()`                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  5.1% |     245 | `forward_copy_longs`                                      | `<unknown>`                                                |
|  3.6% |     173 | `elementData(int)`                                        | `java.util.ArrayList`                                      |
|  2.8% |     133 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                                        |
|  2.4% |     114 | `collectClusters(int[])`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  2.1% |      99 | `doubleValue()`                                           | `java.lang.Double`                                         |
|  1.2% |      56 | `add(Object, Object[], int)`                              | `java.util.ArrayList`                                      |
|  1.1% |      53 | `zero_blocks`                                             | `<unknown>`                                                |
|  1.0% |      49 | `__psynch_cvsignal`                                       | `libsystem_kernel.dylib`                                   |
|  0.6% |      29 | `_platform_bzero`                                         | `libsystem_platform.dylib`                                 |
|  0.6% |      29 | `hash(Object)`                                            | `java.util.HashMap`                                        |
|  0.5% |      26 | `grow(int)`                                               | `java.util.ArrayList`                                      |
|  0.5% |      25 | `checkIndex(int, int)`                                    | `java.util.Objects`                                        |
|  0.5% |      24 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                        |
|  0.5% |      24 | `semaphore_wait_trap`                                     | `libsystem_kernel.dylib`                                   |
|  0.4% |      17 | `arrayof_jint_disjoint_arraycopy`                         | `<unknown>`                                                |

#### Categories

##### Ours

|     % | Samples | Function                                         | Location                                                               |
| ----: | ------: | ------------------------------------------------ | ---------------------------------------------------------------------- |
| 19.3% |     926 | `distance(Double[], Double[])`                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 18.8% |     901 | `accumulate(Double[], double[])`                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  8.6% |     411 | `vectorSum()`                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  8.5% |     410 | `findNearestCentroid()`                          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  2.4% |     114 | `collectClusters(int[])`                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| <0.1% |       2 | `accept(Object, Object)`                         | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f001186d88` |
| <0.1% |       2 | `add(double[], double[])`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| <0.1% |       2 | `combineResults(Object, Object)`                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| <0.1% |       2 | `<init>(JavaKMeans, int, int)`                   | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| <0.1% |       1 | `computeDirectly()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| <0.1% |       1 | `div(double[], int)`                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| <0.1% |       1 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| <0.1% |       1 | `createSubtask(int, int)`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| <0.1% |       1 | `createSubtask(int, int)`                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| <0.1% |       1 | `<init>(JavaKMeans, List, List, int, int)`       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| <0.1% |       1 | `combineResults(Object, Object)`                 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |

##### Native

|     % | Samples | Function                                                                                        | Location                   |
| ----: | ------: | ----------------------------------------------------------------------------------------------- | -------------------------- |
| 14.1% |     679 | `__psynch_cvwait`                                                                               | `libsystem_kernel.dylib`   |
|  5.1% |     245 | `forward_copy_longs`                                                                            | `<unknown>`                |
|  1.0% |      49 | `__psynch_cvsignal`                                                                             | `libsystem_kernel.dylib`   |
|  0.6% |      29 | `_platform_bzero`                                                                               | `libsystem_platform.dylib` |
|  0.5% |      24 | `semaphore_wait_trap`                                                                           | `libsystem_kernel.dylib`   |
|  0.4% |      17 | `arrayof_jint_disjoint_arraycopy`                                                               | `<unknown>`                |
|  0.3% |      16 | `_platform_memset`                                                                              | `libsystem_platform.dylib` |
|  0.3% |      13 | `pthread_jit_write_protect_np`                                                                  | `libsystem_pthread.dylib`  |
|  0.2% |      12 | `__psynch_mutexwait`                                                                            | `libsystem_kernel.dylib`   |
|  0.2% |      12 | `void G1ScanEvacuatedObjClosure::do_oop_work<narrowOop>`                                        | `libjvm.dylib`             |
|  0.2% |      11 | `G1ParScanThreadState::do_copy_to_survivor_space`                                               | `libjvm.dylib`             |
|  0.2% |       9 | `G1FullGCMarker::mark_object`                                                                   | `libjvm.dylib`             |
|  0.1% |       7 | `tlv_get_addr`                                                                                  | `libdyld.dylib`            |
|  0.1% |       7 | `inflate_fast`                                                                                  | `libzip.dylib`             |
|  0.1% |       6 | `ClassLoaderDataGraphKlassIteratorAtomic::next_klass`                                           | `libjvm.dylib`             |
|  0.1% |       5 | `void G1ScanClosureBase::handle_non_cset_obj_common<narrowOop>`                                 | `libjvm.dylib`             |
|  0.1% |       5 | `void OopOopIterateDispatch<G1AdjustClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>` | `libjvm.dylib`             |
|  0.1% |       4 | `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>`                                 | `libjvm.dylib`             |
|  0.1% |       4 | `G1BarrierSet::invalidate`                                                                      | `libjvm.dylib`             |
|  0.1% |       4 | `semaphore_signal_trap`                                                                         | `libsystem_kernel.dylib`   |

##### Standard library

|    % | Samples | Function                                                  | Location                                      |
| ---: | ------: | --------------------------------------------------------- | --------------------------------------------- |
| 3.6% |     173 | `elementData(int)`                                        | `java.util.ArrayList`                         |
| 2.8% |     133 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                           |
| 2.1% |      99 | `doubleValue()`                                           | `java.lang.Double`                            |
| 1.2% |      56 | `add(Object, Object[], int)`                              | `java.util.ArrayList`                         |
| 0.6% |      29 | `hash(Object)`                                            | `java.util.HashMap`                           |
| 0.5% |      26 | `grow(int)`                                               | `java.util.ArrayList`                         |
| 0.5% |      25 | `checkIndex(int, int)`                                    | `java.util.Objects`                           |
| 0.5% |      24 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
| 0.2% |       8 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                           |
| 0.1% |       6 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                            |
| 0.1% |       5 | `forEach(BiConsumer)`                                     | `java.util.HashMap`                           |
| 0.1% |       4 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| 0.1% |       4 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`           |
| 0.1% |       4 | `add(Object)`                                             | `java.util.ArrayList`                         |
| 0.1% |       4 | `grow()`                                                  | `java.util.ArrayList`                         |
| 0.1% |       4 | `newLength(int, int, int)`                                | `jdk.internal.util.ArraysSupport`             |
| 0.1% |       3 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`          |
| 0.1% |       3 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`           |
| 0.1% |       3 | `signalWaiters()`                                         | `java.util.concurrent.ForkJoinTask`           |
| 0.1% |       3 | `putVal(int, Object, Object, boolean, boolean)`           | `java.util.HashMap`                           |

##### JIT

|     % | Samples | Function                   | Location    |
| ----: | ------: | -------------------------- | ----------- |
|  1.1% |      53 | `zero_blocks`              | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xaabb)` | `<unknown>` |

##### Compiler

|     % | Samples | Function                                             | Location       |
| ----: | ------: | ---------------------------------------------------- | -------------- |
|  0.1% |       4 | `PhaseChaitin::build_ifg_physical`                   | `libjvm.dylib` |
|  0.1% |       3 | `PhaseIdealLoop::build_loop_late_post_work`          | `libjvm.dylib` |
| <0.1% |       2 | `PhaseChaitin::gather_lrg_masks`                     | `libjvm.dylib` |
| <0.1% |       2 | `IndexSetIterator::advance_and_next`                 | `libjvm.dylib` |
| <0.1% |       2 | `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal` | `libjvm.dylib` |
| <0.1% |       1 | `Type::singleton`                                    | `libjvm.dylib` |
| <0.1% |       1 | `IdealKit::clear`                                    | `libjvm.dylib` |
| <0.1% |       1 | `TypeOopPtr::is_loaded`                              | `libjvm.dylib` |
| <0.1% |       1 | `Type::cmp`                                          | `libjvm.dylib` |
| <0.1% |       1 | `PhaseLive::compute`                                 | `libjvm.dylib` |
| <0.1% |       1 | `RegMask::is_bound`                                  | `libjvm.dylib` |
| <0.1% |       1 | `Matcher::xform`                                     | `libjvm.dylib` |
| <0.1% |       1 | `PhaseIdealLoop::is_dominator`                       | `libjvm.dylib` |
| <0.1% |       1 | `PhaseChaitin::Split`                                | `libjvm.dylib` |
| <0.1% |       1 | `PhaseIdealLoop::Dominators`                         | `libjvm.dylib` |
| <0.1% |       1 | `PhaseRemoveUseless::PhaseRemoveUseless`             | `libjvm.dylib` |
| <0.1% |       1 | `CompilationPolicy::create_mdo`                      | `libjvm.dylib` |
| <0.1% |       1 | `AdapterHandlerLibrary::get_adapter`                 | `libjvm.dylib` |
| <0.1% |       1 | `LinearScan::resolve_data_flow`                      | `libjvm.dylib` |
| <0.1% |       1 | `IntervalWalker::walk_to`                            | `libjvm.dylib` |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Location                                                       |
| ----: | ------: | -------------------------------------------------------------- |
| 58.6% |     543 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:248` |
| 39.6% |     367 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:249` |
|  1.6% |      15 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:250` |
|  0.1% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:247` |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Location                                                      |
| ----: | ------: | ------------------------------------------------------------- |
| 82.5% |     743 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:412` |
| 17.5% |     158 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:411` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Location                                                      |
| ----: | ------: | ------------------------------------------------------------- |
| 83.0% |     341 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:403` |
| 16.8% |      69 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:402` |
|  0.2% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:400` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Location                                                       |
| ----: | ------: | -------------------------------------------------------------- |
| 47.3% |     194 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:231` |
| 34.6% |     142 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:230` |
|  9.8% |      40 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:229` |
|  6.1% |      25 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:226` |
|  2.2% |       9 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:225` |

##### `elementData(int)` (`java.util.ArrayList`)

|      % | Samples | Location                  |
| -----: | ------: | ------------------------- |
| 100.0% |     173 | `java.util.ArrayList:411` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 24.8% |      33 | `java.util.HashMap:1197` |
| 21.8% |      29 | `java.util.HashMap:1213` |
| 18.8% |      25 | `java.util.HashMap:1207` |
| 16.5% |      22 | `java.util.HashMap:1204` |
|  7.5% |      10 | `java.util.HashMap:1222` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Location                                                       |
| ----: | ------: | -------------------------------------------------------------- |
| 30.7% |      35 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:213` |
| 28.9% |      33 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:212` |
| 19.3% |      22 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |
| 12.3% |      14 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:214` |
|  8.8% |      10 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:211` |

##### `doubleValue()` (`java.lang.Double`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |      99 | `java.lang.Double:1001` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

|     % | Samples | Location                  |
| ----: | ------: | ------------------------- |
| 85.7% |      48 | `java.util.ArrayList:482` |
| 12.5% |       7 | `java.util.ArrayList:484` |
|  1.8% |       1 | `java.util.ArrayList:483` |

##### `hash(Object)` (`java.util.HashMap`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |      29 | `java.util.HashMap:338` |

##### `grow(int)` (`java.util.ArrayList`)

|     % | Samples | Location                  |
| ----: | ------: | ------------------------- |
| 92.3% |      24 | `java.util.ArrayList:239` |
|  7.7% |       2 | `java.util.ArrayList:233` |

##### `checkIndex(int, int)` (`java.util.Objects`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |      25 | `java.util.Objects:385` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Location                                 |
| ----: | ------: | ---------------------------------------- |
| 25.0% |       6 | `java.util.concurrent.ForkJoinPool:2053` |
| 12.5% |       3 | `java.util.concurrent.ForkJoinPool:2041` |
| 12.5% |       3 | `java.util.concurrent.ForkJoinPool:2051` |
| 12.5% |       3 | `java.util.concurrent.ForkJoinPool:2058` |
|  8.3% |       2 | `java.util.concurrent.ForkJoinPool:2057` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 62.5% |       5 | `java.util.HashMap:1384` |
| 25.0% |       2 | `java.util.HashMap:1378` |
| 12.5% |       1 | `java.util.HashMap:1400` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       6 | `java.util.Arrays:3482` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 60.0% |       3 | `java.util.HashMap:1428` |
| 40.0% |       2 | `java.util.HashMap:1429` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|     % | Samples | Location                                           |
| ----: | ------: | -------------------------------------------------- |
| 50.0% |       2 | `java.util.concurrent.ForkJoinPool$WorkQueue:1331` |
| 25.0% |       1 | `java.util.concurrent.ForkJoinPool$WorkQueue:1343` |
| 25.0% |       1 | `java.util.concurrent.ForkJoinPool$WorkQueue:1344` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Location                                 |
| ----: | ------: | ---------------------------------------- |
| 50.0% |       2 | `java.util.concurrent.ForkJoinPool:1829` |
| 25.0% |       1 | `java.util.concurrent.ForkJoinPool:1835` |
| 25.0% |       1 | `java.util.concurrent.ForkJoinPool:1846` |

##### `add(Object)` (`java.util.ArrayList`)

|      % | Samples | Location                  |
| -----: | ------: | ------------------------- |
| 100.0% |       4 | `java.util.ArrayList:495` |

##### `grow()` (`java.util.ArrayList`)

|      % | Samples | Location                  |
| -----: | ------: | ------------------------- |
| 100.0% |       4 | `java.util.ArrayList:244` |

##### `newLength(int, int, int)` (`jdk.internal.util.ArraysSupport`)

|      % | Samples | Location                              |
| -----: | ------: | ------------------------------------- |
| 100.0% |       4 | `jdk.internal.util.ArraysSupport:741` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % | Samples | Location                                 |
| -----: | ------: | ---------------------------------------- |
| 100.0% |       3 | `java.util.concurrent.RecursiveTask:110` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Location                                 |
| -----: | ------: | ---------------------------------------- |
| 100.0% |       3 | `java.util.concurrent.ForkJoinPool:1808` |

##### `signalWaiters()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Location                                |
| -----: | ------: | --------------------------------------- |
| 100.0% |       3 | `java.util.concurrent.ForkJoinTask:301` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|     % | Samples | Location                |
| ----: | ------: | ----------------------- |
| 33.3% |       1 | `java.util.HashMap:636` |
| 33.3% |       1 | `java.util.HashMap:634` |
| 33.3% |       1 | `java.util.HashMap:647` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Location                                                      |
| ----: | ------: | ------------------------------------------------------------- |
| 50.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:430` |
| 50.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:433` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Location                                                      |
| -----: | ------: | ------------------------------------------------------------- |
| 100.0% |       2 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:367` |

##### `<init>(JavaKMeans, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|     % | Samples | Location                                                   |
| ----: | ------: | ---------------------------------------------------------- |
| 50.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask:137` |
| 50.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask:138` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Location                                                      |
| -----: | ------: | ------------------------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:367` |

##### `div(double[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Location                                                   |
| -----: | ------: | ---------------------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:339` |

##### `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Location                                       |
| -----: | ------: | ---------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans:86` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Location                                                      |
| -----: | ------: | ------------------------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:419` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Location                                                       |
| -----: | ------: | -------------------------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:261` |

##### `<init>(JavaKMeans, List, List, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Location                                                       |
| -----: | ------: | -------------------------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:190` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Location                                                   |
| -----: | ------: | ---------------------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:276` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller                  | Location                                                   |
| -----: | ------: | ----------------------- | ---------------------------------------------------------- |
| 100.0% |     926 | `findNearestCentroid()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller        | Location                                                  |
| -----: | ------: | ------------- | --------------------------------------------------------- |
| 100.0% |     901 | `vectorSum()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                  | Location                 |
| ----: | ------: | ----------------------- | ------------------------ |
| 97.1% |     659 | `Parker::park`          | `libjvm.dylib`           |
|  2.8% |      19 | `PlatformMonitor::wait` | `libjvm.dylib`           |
|  0.1% |       1 | `Profiler::timerLoop`   | `libasyncProfiler.dylib` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller              | Location                                                  |
| -----: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% |     411 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller              | Location                                                   |
| -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% |     410 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `forward_copy_longs` (`<unknown>`)

|     % | Samples | Caller                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 81.2% |     199 | `arrayof_jint_disjoint_arraycopy` | `<unknown>` |
| 18.8% |      46 | `arrayof_oop_disjoint_arraycopy`  | `<unknown>` |

##### `elementData(int)` (`java.util.ArrayList`)

|      % | Samples | Caller     | Location              |
| -----: | ------: | ---------- | --------------------- |
| 100.0% |     173 | `get(int)` | `java.util.ArrayList` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|      % | Samples | Caller                   | Location                                                   |
| -----: | ------: | ------------------------ | ---------------------------------------------------------- |
| 100.0% |     133 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller              | Location                                                   |
| -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% |     114 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `doubleValue()` (`java.lang.Double`)

|     % | Samples | Caller                           | Location                                                   |
| ----: | ------: | -------------------------------- | ---------------------------------------------------------- |
| 89.9% |      89 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 10.1% |      10 | `distance(Double[], Double[])`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

|      % | Samples | Caller        | Location              |
| -----: | ------: | ------------- | --------------------- |
| 100.0% |      56 | `add(Object)` | `java.util.ArrayList` |

##### `zero_blocks` (`<unknown>`)

|     % | Samples | Caller                              | Location                                                   |
| ----: | ------: | ----------------------------------- | ---------------------------------------------------------- |
| 77.4% |      41 | `merge(Object, Object, BiFunction)` | `java.util.HashMap`                                        |
| 18.9% |      10 | `grow(int)`                         | `java.util.ArrayList`                                      |
|  1.9% |       1 | `resize()`                          | `java.util.HashMap`                                        |
|  1.9% |       1 | `findNearestCentroid()`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `__psynch_cvsignal` (`libsystem_kernel.dylib`)

|      % | Samples | Caller          | Location       |
| -----: | ------: | --------------- | -------------- |
| 100.0% |      49 | `Unsafe_Unpark` | `libjvm.dylib` |

##### `_platform_bzero` (`libsystem_platform.dylib`)

|      % | Samples | Caller                   | Location       |
| -----: | ------: | ------------------------ | -------------- |
| 100.0% |      29 | `MemAllocator::allocate` | `libjvm.dylib` |

##### `hash(Object)` (`java.util.HashMap`)

|     % | Samples | Caller                              | Location            |
| ----: | ------: | ----------------------------------- | ------------------- |
| 93.1% |      27 | `computeIfAbsent(Object, Function)` | `java.util.HashMap` |
|  6.9% |       2 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `grow(int)` (`java.util.ArrayList`)

|      % | Samples | Caller   | Location              |
| -----: | ------: | -------- | --------------------- |
| 100.0% |      26 | `grow()` | `java.util.ArrayList` |

##### `checkIndex(int, int)` (`java.util.Objects`)

|      % | Samples | Caller     | Location              |
| -----: | ------: | ---------- | --------------------- |
| 100.0% |      25 | `get(int)` | `java.util.ArrayList` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller                 | Location                            |
| -----: | ------: | ---------------------- | ----------------------------------- |
| 100.0% |      24 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 66.7% |      16 | `WorkerThread::run`              | `libjvm.dylib` |
| 29.2% |       7 | `GenericWaitBarrier::Cell::wait` | `libjvm.dylib` |
|  4.2% |       1 | `WorkerThreads::run_task`        | `libjvm.dylib` |

##### `arrayof_jint_disjoint_arraycopy` (`<unknown>`)

|     % | Samples | Caller                              | Location              |
| ----: | ------: | ----------------------------------- | --------------------- |
| 47.1% |       8 | `copyOf(Object[], int)`             | `java.util.Arrays`    |
| 35.3% |       6 | `grow(int)`                         | `java.util.ArrayList` |
| 17.6% |       3 | `merge(Object, Object, BiFunction)` | `java.util.HashMap`   |

##### `_platform_memset` (`libsystem_platform.dylib`)

|     % | Samples | Caller                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 87.5% |      14 | `MemAllocator::allocate`       | `libjvm.dylib` |
|  6.3% |       1 | `PhaseCFG::PhaseCFG`           | `libjvm.dylib` |
|  6.3% |       1 | `HeapRegionManager::expand_by` | `libjvm.dylib` |

##### `pthread_jit_write_protect_np` (`libsystem_pthread.dylib`)

|     % | Samples | Caller                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 38.5% |       5 | `Unsafe_Park`                   | `libjvm.dylib` |
| 23.1% |       3 | `OptoRuntime::new_array_C`      | `libjvm.dylib` |
| 15.4% |       2 | `Unsafe_Unpark`                 | `libjvm.dylib` |
|  7.7% |       1 | `Unsafe_CompareAndExchangeLong` | `libjvm.dylib` |
|  7.7% |       1 | `Unsafe_AllocateInstance`       | `libjvm.dylib` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                              | Location                  |
| -----: | ------: | ----------------------------------- | ------------------------- |
| 100.0% |      12 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `void G1ScanEvacuatedObjClosure::do_oop_work<narrowOop>` (`libjvm.dylib`)

|     % | Samples | Caller                                          | Location       |
| ----: | ------: | ----------------------------------------------- | -------------- |
| 83.3% |      10 | `G1ParScanThreadState::do_partial_array`        | `libjvm.dylib` |
|  8.3% |       1 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib` |
|  8.3% |       1 | `G1ParScanThreadState::start_partial_objarray`  | `libjvm.dylib` |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`libjvm.dylib`)

|     % | Samples | Caller                                          | Location       |
| ----: | ------: | ----------------------------------------------- | -------------- |
| 81.8% |       9 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib` |
|  9.1% |       1 | `G1ParEvacuateFollowersClosure::do_void`        | `libjvm.dylib` |
|  9.1% |       1 | `G1ScanHRForRegionClosure::scan_memregion`      | `libjvm.dylib` |

##### `G1FullGCMarker::mark_object` (`libjvm.dylib`)

|     % | Samples | Caller                                                                                               | Location       |
| ----: | ------: | ---------------------------------------------------------------------------------------------------- | -------------- |
| 55.6% |       5 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>`                                      | `libjvm.dylib` |
| 22.2% |       2 | `G1FullGCMarker::complete_marking`                                                                   | `libjvm.dylib` |
| 22.2% |       2 | `void OopOopIterateDispatch<G1MarkAndPushClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `libjvm.dylib` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|      % | Samples | Caller                              | Location                                    |
| -----: | ------: | ----------------------------------- | ------------------------------------------- |
| 100.0% |       8 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `tlv_get_addr` (`libdyld.dylib`)

|     % | Samples | Caller                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 28.6% |       2 | `arrayof_oop_disjoint_arraycopy`     | `<unknown>`    |
| 14.3% |       1 | `PhaseChaitin::get_spillcopy_wide`   | `libjvm.dylib` |
| 14.3% |       1 | `BlockListBuilder::BlockListBuilder` | `libjvm.dylib` |
| 14.3% |       1 | `PhaseChaitin::gather_lrg_masks`     | `libjvm.dylib` |
| 14.3% |       1 | `Unsafe_Unpark`                      | `libjvm.dylib` |

##### `inflate_fast` (`libzip.dylib`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |       7 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `ClassLoaderDataGraphKlassIteratorAtomic::next_klass` (`libjvm.dylib`)

|      % | Samples | Caller                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |       6 | `KlassCleaningTask::work` | `libjvm.dylib` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|     % | Samples | Caller      | Location              |
| ----: | ------: | ----------- | --------------------- |
| 50.0% |       3 | `grow(int)` | `java.util.ArrayList` |
| 50.0% |       3 | `toArray()` | `java.util.ArrayList` |

##### `void G1ScanClosureBase::handle_non_cset_obj_common<narrowOop>` (`libjvm.dylib`)

|     % | Samples | Caller                                                   | Location       |
| ----: | ------: | -------------------------------------------------------- | -------------- |
| 60.0% |       3 | `G1ParScanThreadState::do_partial_array`                 | `libjvm.dylib` |
| 40.0% |       2 | `void G1ScanEvacuatedObjClosure::do_oop_work<narrowOop>` | `libjvm.dylib` |

##### `void OopOopIterateDispatch<G1AdjustClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>` (`libjvm.dylib`)

|      % | Samples | Caller                                                          | Location       |
| -----: | ------: | --------------------------------------------------------------- | -------------- |
| 100.0% |       5 | `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>` | `libjvm.dylib` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|      % | Samples | Caller            | Location                                    |
| -----: | ------: | ----------------- | ------------------------------------------- |
| 100.0% |       5 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>` (`libjvm.dylib`)

|      % | Samples | Caller                                  | Location       |
| -----: | ------: | --------------------------------------- | -------------- |
| 100.0% |       4 | `G1AdjustRegionClosure::do_heap_region` | `libjvm.dylib` |

##### `G1BarrierSet::invalidate` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location    |
| -----: | ------: | -------------------------------- | ----------- |
| 100.0% |       4 | `arrayof_oop_disjoint_arraycopy` | `<unknown>` |

##### `semaphore_signal_trap` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 50.0% |       2 | `GenericWaitBarrier::Cell::wait`   | `libjvm.dylib` |
| 25.0% |       1 | `GenericWaitBarrier::Cell::disarm` | `libjvm.dylib` |
| 25.0% |       1 | `WorkerThreads::run_task`          | `libjvm.dylib` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Caller                 | Location                            |
| -----: | ------: | ---------------------- | ----------------------------------- |
| 100.0% |       4 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller                              | Location                            |
| -----: | ------: | ----------------------------------- | ----------------------------------- |
| 100.0% |       4 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `add(Object)` (`java.util.ArrayList`)

|      % | Samples | Caller                   | Location                                                   |
| -----: | ------: | ------------------------ | ---------------------------------------------------------- |
| 100.0% |       4 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `grow()` (`java.util.ArrayList`)

|      % | Samples | Caller                       | Location              |
| -----: | ------: | ---------------------------- | --------------------- |
| 100.0% |       4 | `add(Object, Object[], int)` | `java.util.ArrayList` |

##### `newLength(int, int, int)` (`jdk.internal.util.ArraysSupport`)

|      % | Samples | Caller      | Location              |
| -----: | ------: | ----------- | --------------------- |
| 100.0% |       4 | `grow(int)` | `java.util.ArrayList` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       4 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % | Samples | Caller     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |       3 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller  | Location                                    |
| -----: | ------: | ------- | ------------------------------------------- |
| 100.0% |       3 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `signalWaiters()` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Caller                 | Location                            |
| ----: | ------: | ---------------------- | ----------------------------------- |
| 66.7% |       2 | `setDone()`            | `java.util.concurrent.ForkJoinTask` |
| 33.3% |       1 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|      % | Samples | Caller                        | Location            |
| -----: | ------: | ----------------------------- | ------------------- |
| 100.0% |       3 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`)

|     % | Samples | Caller                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 66.7% |       2 | `PhaseIdealLoop::build_loop_late`    | `libjvm.dylib` |
| 33.3% |       1 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f001186d88`)

|      % | Samples | Caller                | Location            |
| -----: | ------: | --------------------- | ------------------- |
| 100.0% |       2 | `forEach(BiConsumer)` | `java.util.HashMap` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller                               | Location                                                  |
| -----: | ------: | ------------------------------------ | --------------------------------------------------------- |
| 100.0% |       2 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |       2 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `<init>(JavaKMeans, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|     % | Samples | Caller                                     | Location                                                   |
| ----: | ------: | ------------------------------------------ | ---------------------------------------------------------- |
| 50.0% |       1 | `<init>(JavaKMeans, List, int, int)`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 50.0% |       1 | `<init>(JavaKMeans, List, List, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       2 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `IndexSetIterator::advance_and_next` (`libjvm.dylib`)

|     % | Samples | Caller                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 50.0% |       1 | `PhaseIFG::effective_degree` | `libjvm.dylib` |
| 50.0% |       1 | `PhaseIFG::SquareUp`         | `libjvm.dylib` |

##### `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal` (`libjvm.dylib`)

|      % | Samples | Caller                                | Location       |
| -----: | ------: | ------------------------------------- | -------------- |
| 100.0% |       2 | `PhaseIdealLoop::compute_lca_of_uses` | `libjvm.dylib` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |       1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `div(double[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller          | Location                                               |
| -----: | ------: | --------------- | ------------------------------------------------------ |
| 100.0% |       1 | `average(List)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller       | Location                                                               |
| -----: | ------: | ------------ | ---------------------------------------------------------------------- |
| 100.0% |       1 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f001125b10` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |       1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |       1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `<init>(JavaKMeans, List, List, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller                    | Location                                                   |
| -----: | ------: | ------------------------- | ---------------------------------------------------------- |
| 100.0% |       1 | `createSubtask(int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |       1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `I2C/C2I adapters(0xaabb)` (`<unknown>`)

|      % | Samples | Caller       | Location                                                               |
| -----: | ------: | ------------ | ---------------------------------------------------------------------- |
| 100.0% |       1 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f0011258d8` |

##### `Type::singleton` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |       1 | `PhaseCCP::transform_once` | `libjvm.dylib` |

##### `IdealKit::clear` (`libjvm.dylib`)

|      % | Samples | Caller                                  | Location       |
| -----: | ------: | --------------------------------------- | -------------- |
| 100.0% |       1 | `ModRefBarrierSetC2::store_at_resolved` | `libjvm.dylib` |

##### `TypeOopPtr::is_loaded` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |       1 | `TypeInstPtr::is_same_java_type_as_helper` | `libjvm.dylib` |

##### `Type::cmp` (`libjvm.dylib`)

|      % | Samples | Caller         | Location       |
| -----: | ------: | -------------- | -------------- |
| 100.0% |       1 | `Dict::Insert` | `libjvm.dylib` |

##### `PhaseLive::compute` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       1 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `RegMask::is_bound` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |       1 | `PhaseChaitin::gather_lrg_masks` | `libjvm.dylib` |

##### `Matcher::xform` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |       1 | `Matcher::match` | `libjvm.dylib` |

##### `PhaseIdealLoop::is_dominator` (`libjvm.dylib`)

|      % | Samples | Caller                                        | Location       |
| -----: | ------: | --------------------------------------------- | -------------- |
| 100.0% |       1 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep` | `libjvm.dylib` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       1 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       1 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseRemoveUseless::PhaseRemoveUseless` (`libjvm.dylib`)

|      % | Samples | Caller                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |       1 | `C2Compiler::compile_method` | `libjvm.dylib` |

##### `CompilationPolicy::create_mdo` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |       1 | `CompilationPolicy::event` | `libjvm.dylib` |

##### `AdapterHandlerLibrary::get_adapter` (`libjvm.dylib`)

|      % | Samples | Caller                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |       1 | `InstanceKlass::link_methods` | `libjvm.dylib` |

##### `LinearScan::resolve_data_flow` (`libjvm.dylib`)

|      % | Samples | Caller                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |       1 | `LinearScan::do_linear_scan` | `libjvm.dylib` |

##### `IntervalWalker::walk_to` (`libjvm.dylib`)

|      % | Samples | Caller                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |       1 | `IntervalWalker::walk_to` | `libjvm.dylib` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                                  | Location                                                   |
| ----: | ------: | --------------------------------------------------------- | ---------------------------------------------------------- |
| 94.7% |   4,549 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                        |
| 94.7% |   4,549 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`                |
| 88.8% |   4,266 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`                        |
| 88.7% |   4,258 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                        |
| 88.7% |   4,258 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| 88.0% |   4,228 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                       |
| 88.0% |   4,226 | `compute()`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
| 84.3% |   4,049 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                        |
| 84.3% |   4,049 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                        |
| 79.7% |   3,829 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| 38.8% |   1,861 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 31.0% |   1,489 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 31.0% |   1,488 | `vectorSum()`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 29.3% |   1,408 | `findNearestCentroid()`                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 22.3% |   1,070 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                        |
| 20.6% |     990 | `accumulate(Double[], double[])`                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 20.1% |     964 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`                        |
| 19.6% |     939 | `distance(Double[], Double[])`                            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 14.1% |     679 | `__psynch_cvwait`                                         | `libsystem_kernel.dylib`                                   |
| 14.0% |     673 | `park(boolean, long)`                                     | `jdk.internal.misc.Unsafe`                                 |

#### Categories

##### Ours

|     % | Samples | Function                            | Location                                                               |
| ----: | ------: | ----------------------------------- | ---------------------------------------------------------------------- |
| 88.0% |   4,226 | `compute()`                         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| 38.8% |   1,861 | `computeDirectly()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 31.0% |   1,489 | `computeDirectly()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 31.0% |   1,488 | `vectorSum()`                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 29.3% |   1,408 | `findNearestCentroid()`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 20.6% |     990 | `accumulate(Double[], double[])`    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 19.6% |     939 | `distance(Double[], Double[])`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 14.0% |     672 | `computeClusterAverages()`          | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 14.0% |     672 | `computeDirectly()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 13.9% |     669 | `average(List)`                     | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  9.4% |     453 | `collectClusters(int[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  9.4% |     452 | `lambda$run$0(int, List, int)`      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  9.4% |     452 | `call()`                            | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f001183d68` |
|  8.2% |     394 | `merge(Map, Map)`                   | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  8.2% |     394 | `combineResults(Map, Map)`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  8.2% |     394 | `combineResults(Object, Object)`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  7.9% |     378 | `accept(Object, Object)`            | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f001186d88` |
|  7.8% |     376 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  5.5% |     265 | `lambda$merge$6(List, List)`        | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  5.5% |     265 | `apply(Object, Object)`             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f0011876a8` |

##### Native

|     % | Samples | Function                           | Location                  |
| ----: | ------: | ---------------------------------- | ------------------------- |
| 14.1% |     679 | `__psynch_cvwait`                  | `libsystem_kernel.dylib`  |
| 14.0% |     671 | `Unsafe_Park`                      | `libjvm.dylib`            |
| 13.8% |     664 | `Parker::park`                     | `libjvm.dylib`            |
|  5.1% |     245 | `forward_copy_longs`               | `<unknown>`               |
|  4.5% |     216 | `arrayof_jint_disjoint_arraycopy`  | `<unknown>`               |
|  4.4% |     212 | `_pthread_start`                   | `libsystem_pthread.dylib` |
|  4.4% |     212 | `thread_start`                     | `libsystem_pthread.dylib` |
|  4.4% |     211 | `Thread::call_run`                 | `libjvm.dylib`            |
|  4.4% |     211 | `thread_native_entry`              | `libjvm.dylib`            |
|  2.2% |     108 | `WorkerThread::run`                | `libjvm.dylib`            |
|  1.8% |      86 | `JavaThread::thread_main_inner`    | `libjvm.dylib`            |
|  1.2% |      58 | `_new_array_Java`                  | `<unknown>`               |
|  1.2% |      58 | `Unsafe_Unpark`                    | `libjvm.dylib`            |
|  1.2% |      56 | `OptoRuntime::new_array_C`         | `libjvm.dylib`            |
|  1.1% |      54 | `MemAllocator::allocate`           | `libjvm.dylib`            |
|  1.1% |      53 | `CollectedHeap::array_allocate`    | `libjvm.dylib`            |
|  1.1% |      53 | `arrayof_oop_disjoint_arraycopy`   | `<unknown>`               |
|  1.1% |      52 | `InstanceKlass::allocate_objArray` | `libjvm.dylib`            |
|  1.0% |      49 | `__psynch_cvsignal`                | `libsystem_kernel.dylib`  |
|  0.8% |      37 | `G1EvacuateRegionsBaseTask::work`  | `libjvm.dylib`            |

##### Standard library

|     % | Samples | Function                                                  | Location                                            |
| ----: | ------: | --------------------------------------------------------- | --------------------------------------------------- |
| 94.7% |   4,549 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                 |
| 94.7% |   4,549 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`         |
| 88.8% |   4,266 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`                 |
| 88.7% |   4,258 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                 |
| 88.7% |   4,258 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| 88.0% |   4,228 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                |
| 84.3% |   4,049 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                 |
| 84.3% |   4,049 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                 |
| 79.7% |   3,829 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| 22.3% |   1,070 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                 |
| 20.1% |     964 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`                 |
| 14.0% |     673 | `park(boolean, long)`                                     | `jdk.internal.misc.Unsafe`                          |
| 13.7% |     660 | `park()`                                                  | `java.util.concurrent.locks.LockSupport`            |
|  9.4% |     452 | `exec()`                                                  | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|  8.0% |     383 | `forEach(BiConsumer)`                                     | `java.util.HashMap`                                 |
|  7.8% |     375 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                                 |
|  5.8% |     280 | `awaitWork(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                 |
|  4.4% |     210 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                                  |
|  4.2% |     200 | `get(int)`                                                | `java.util.ArrayList`                               |
|  3.9% |     188 | `addAll(Collection)`                                      | `java.util.ArrayList`                               |

##### JIT

|     % | Samples | Function                   | Location    |
| ----: | ------: | -------------------------- | ----------- |
|  1.1% |      53 | `zero_blocks`              | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xaabb)` | `<unknown>` |

##### Compiler

|    % | Samples | Function                                    | Location       |
| ---: | ------: | ------------------------------------------- | -------------- |
| 1.7% |      84 | `CompileBroker::compiler_thread_loop`       | `libjvm.dylib` |
| 1.5% |      70 | `CompileBroker::invoke_compiler_on_method`  | `libjvm.dylib` |
| 1.2% |      60 | `C2Compiler::compile_method`                | `libjvm.dylib` |
| 1.2% |      59 | `Compile::Compile`                          | `libjvm.dylib` |
| 0.6% |      31 | `Compile::Code_Gen`                         | `libjvm.dylib` |
| 0.5% |      23 | `Compile::Optimize`                         | `libjvm.dylib` |
| 0.4% |      19 | `PhaseChaitin::Register_Allocate`           | `libjvm.dylib` |
| 0.3% |      16 | `PhaseIdealLoop::optimize`                  | `libjvm.dylib` |
| 0.3% |      14 | `PhaseIdealLoop::build_and_optimize`        | `libjvm.dylib` |
| 0.3% |      14 | `PhaseIdealLoop::PhaseIdealLoop`            | `libjvm.dylib` |
| 0.3% |      13 | `CompileQueue::get`                         | `libjvm.dylib` |
| 0.2% |       9 | `Matcher::match`                            | `libjvm.dylib` |
| 0.2% |       8 | `Compilation::compile_method`               | `libjvm.dylib` |
| 0.2% |       8 | `Compilation::Compilation`                  | `libjvm.dylib` |
| 0.1% |       7 | `Matcher::xform`                            | `libjvm.dylib` |
| 0.1% |       7 | `Compile::optimize_loops`                   | `libjvm.dylib` |
| 0.1% |       6 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib` |
| 0.1% |       6 | `Compilation::compile_java_method`          | `libjvm.dylib` |
| 0.1% |       5 | `PhaseChaitin::build_ifg_physical`          | `libjvm.dylib` |
| 0.1% |       5 | `PhaseIdealLoop::build_loop_late`           | `libjvm.dylib` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee                                   | Location                            |
| ----: | ------: | ---------------------------------------- | ----------------------------------- |
| 93.8% |   4,266 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |
|  6.2% |     280 | `awaitWork(ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|      % | Samples | Callee                              | Location                            |
| -----: | ------: | ----------------------------------- | ----------------------------------- |
| 100.0% |   4,549 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee                                               | Location                                      |
| ----: | ------: | ---------------------------------------------------- | --------------------------------------------- |
| 99.8% |   4,258 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  0.1% |       4 | `signalWork()`                                       | `java.util.concurrent.ForkJoinPool`           |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Callee      | Location                                            |
| ----: | ------: | ----------- | --------------------------------------------------- |
| 99.3% |   4,228 | `exec()`    | `java.util.concurrent.RecursiveTask`                |
| 10.6% |     452 | `exec()`    | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|  1.1% |      47 | `setDone()` | `java.util.concurrent.ForkJoinTask`                 |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Callee     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |   4,258 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % | Samples | Callee      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |   4,226 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|     % | Samples | Callee                           | Location                                                   |
| ----: | ------: | -------------------------------- | ---------------------------------------------------------- |
| 95.8% |   4,049 | `join()`                         | `java.util.concurrent.ForkJoinTask`                        |
| 44.0% |   1,861 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 35.2% |   1,489 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 15.9% |     672 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  9.3% |     394 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Callee                                                    | Location                                      |
| ----: | ------: | --------------------------------------------------------- | --------------------------------------------- |
| 94.6% |   3,829 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| 26.4% |   1,070 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
|  9.7% |     394 | `park()`                                                  | `java.util.concurrent.locks.LockSupport`      |
| <0.1% |       1 | `InterpreterRuntime::frequency_counter_overflow`          | `libjvm.dylib`                                |
| <0.1% |       1 | `signalWaiters()`                                         | `java.util.concurrent.ForkJoinTask`           |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Callee                 | Location                             |
| -----: | ------: | ---------------------- | ------------------------------------ |
| 100.0% |   4,049 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask`  |
|  <0.1% |       1 | `getRawResult()`       | `java.util.concurrent.RecursiveTask` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Callee     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |   3,829 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Callee                   | Location                                                   |
| -----: | ------: | ------------------------ | ---------------------------------------------------------- |
| 100.0% |   1,861 | `computeDirectly()`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  75.7% |   1,408 | `findNearestCentroid()`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  24.3% |     453 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Callee              | Location                                                  |
| ----: | ------: | ------------------- | --------------------------------------------------------- |
| 99.9% |   1,488 | `vectorSum()`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| 99.9% |   1,488 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Callee                           | Location                                                  |
| ----: | ------: | -------------------------------- | --------------------------------------------------------- |
| 66.5% |     990 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  5.8% |      87 | `get(int)`                       | `java.util.ArrayList`                                     |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee                                           | Location                                                   |
| ----: | ------: | ------------------------------------------------ | ---------------------------------------------------------- |
| 66.7% |     939 | `distance(Double[], Double[])`                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  3.9% |      55 | `get(int)`                                       | `java.util.ArrayList`                                      |
|  0.1% |       2 | `InterpreterRuntime::frequency_counter_overflow` | `libjvm.dylib`                                             |
|  0.1% |       1 | `zero_blocks`                                    | `<unknown>`                                                |
|  0.1% |       1 | `_new_array_Java`                                | `<unknown>`                                                |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee                                             | Location                                      |
| ----: | ------: | -------------------------------------------------- | --------------------------------------------- |
| 97.6% |   1,044 | `doExec()`                                         | `java.util.concurrent.ForkJoinTask`           |
|  1.1% |      12 | `tryCompensate(long, boolean)`                     | `java.util.concurrent.ForkJoinPool`           |
|  0.1% |       1 | `InterpreterRuntime::frequency_counter_overflow`   | `libjvm.dylib`                                |
|  0.1% |       1 | `casSlotToNull(ForkJoinTask[], int, ForkJoinTask)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|    % | Samples | Callee          | Location           |
| ---: | ------: | --------------- | ------------------ |
| 9.0% |      89 | `doubleValue()` | `java.lang.Double` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Callee     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |     964 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|    % | Samples | Callee          | Location           |
| ---: | ------: | --------------- | ------------------ |
| 1.1% |      10 | `doubleValue()` | `java.lang.Double` |
| 0.3% |       3 | `SafepointBlob` | `<unknown>`        |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|     % | Samples | Callee                                                                                                                                                     | Location       |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| 99.7% |     671 | `Unsafe_Park`                                                                                                                                              | `libjvm.dylib` |
|  0.1% |       1 | `JavaThreadParkedState::JavaThreadParkedState`                                                                                                             | `libjvm.dylib` |
|  0.1% |       1 | `AccessInternal::PostRuntimeDispatch<G1BarrierSet::AccessBarrier<548964ull, G1BarrierSet>, (AccessInternal::BarrierType)2, 548964ull>::oop_access_barrier` | `libjvm.dylib` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|     % | Samples | Callee                | Location                                               |
| ----: | ------: | --------------------- | ------------------------------------------------------ |
| 99.6% |     669 | `average(List)`       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  0.3% |       2 | `boxed(double[])`     | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  0.1% |       1 | `put(Object, Object)` | `java.util.HashMap`                                    |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Callee                     | Location                                               |
| -----: | ------: | -------------------------- | ------------------------------------------------------ |
| 100.0% |     672 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 100.0% |     672 | `computeDirectly()`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `Unsafe_Park` (`libjvm.dylib`)

|     % | Samples | Callee                         | Location                  |
| ----: | ------: | ------------------------------ | ------------------------- |
| 99.0% |     664 | `Parker::park`                 | `libjvm.dylib`            |
|  0.7% |       5 | `pthread_jit_write_protect_np` | `libsystem_pthread.dylib` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|     % | Samples | Callee               | Location                                               |
| ----: | ------: | -------------------- | ------------------------------------------------------ |
| 99.9% |     668 | `invoke()`           | `java.util.concurrent.ForkJoinTask`                    |
|  0.1% |       1 | `div(double[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `Parker::park` (`libjvm.dylib`)

|     % | Samples | Callee                        | Location                  |
| ----: | ------: | ----------------------------- | ------------------------- |
| 99.2% |     659 | `__psynch_cvwait`             | `libsystem_kernel.dylib`  |
|  0.5% |       3 | `_pthread_cond_wait`          | `libsystem_pthread.dylib` |
|  0.2% |       1 | `SafepointMechanism::process` | `libjvm.dylib`            |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

|      % | Samples | Callee                | Location                   |
| -----: | ------: | --------------------- | -------------------------- |
| 100.0% |     660 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee                              | Location              |
| ----: | ------: | ----------------------------------- | --------------------- |
| 35.8% |     162 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`   |
| 26.0% |     118 | `add(Object)`                       | `java.util.ArrayList` |
| 12.8% |      58 | `get(int)`                          | `java.util.ArrayList` |
|  0.2% |       1 | `_new_instance_Java`                | `<unknown>`           |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Callee     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |     452 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f001183d68`)

|      % | Samples | Callee                         | Location                                    |
| -----: | ------: | ------------------------------ | ------------------------------------------- |
| 100.0% |     452 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

|      % | Samples | Callee   | Location                                                               |
| -----: | ------: | -------- | ---------------------------------------------------------------------- |
| 100.0% |     452 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f001183d68` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee                | Location            |
| ----: | ------: | --------------------- | ------------------- |
| 97.2% |     383 | `forEach(BiConsumer)` | `java.util.HashMap` |
|  2.8% |      11 | `<init>(Map)`         | `java.util.HashMap` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Callee            | Location                                    |
| -----: | ------: | ----------------- | ------------------------------------------- |
| 100.0% |     394 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Callee                     | Location                                                   |
| -----: | ------: | -------------------------- | ---------------------------------------------------------- |
| 100.0% |     394 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|     % | Samples | Callee                   | Location                                                               |
| ----: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| 98.7% |     378 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f001186d88` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f001186d88`)

|     % | Samples | Callee                              | Location                                    |
| ----: | ------: | ----------------------------------- | ------------------------------------------- |
| 99.5% |     376 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee                              | Location            |
| ----: | ------: | ----------------------------------- | ------------------- |
| 99.7% |     375 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |
|  0.3% |       1 | `SafepointBlob`                     | `<unknown>`         |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|     % | Samples | Callee                            | Location                                                               |
| ----: | ------: | --------------------------------- | ---------------------------------------------------------------------- |
| 70.7% |     265 | `apply(Object, Object)`           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f0011876a8` |
| 15.7% |      59 | `arrayof_jint_disjoint_arraycopy` | `<unknown>`                                                            |
| 10.9% |      41 | `zero_blocks`                     | `<unknown>`                                                            |
|  0.5% |       2 | `hash(Object)`                    | `java.util.HashMap`                                                    |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee            | Location                                 |
| ----: | ------: | ----------------- | ---------------------------------------- |
| 95.0% |     266 | `park()`          | `java.util.concurrent.locks.LockSupport` |
|  4.6% |      13 | `parkUntil(long)` | `java.util.concurrent.locks.LockSupport` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee               | Location              |
| ----: | ------: | -------------------- | --------------------- |
| 70.9% |     188 | `addAll(Collection)` | `java.util.ArrayList` |
| 29.1% |      77 | `<init>(Collection)` | `java.util.ArrayList` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f0011876a8`)

|      % | Samples | Callee                       | Location                                    |
| -----: | ------: | ---------------------------- | ------------------------------------------- |
| 100.0% |     265 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `arrayof_jint_disjoint_arraycopy` (`<unknown>`)

|     % | Samples | Callee               | Location    |
| ----: | ------: | -------------------- | ----------- |
| 92.1% |     199 | `forward_copy_longs` | `<unknown>` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

|     % | Samples | Callee                | Location       |
| ----: | ------: | --------------------- | -------------- |
| 99.5% |     211 | `thread_native_entry` | `libjvm.dylib` |
|  0.5% |       1 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Callee           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |     212 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 51.2% |     108 | `WorkerThread::run`             | `libjvm.dylib` |
| 40.8% |      86 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
|  4.3% |       9 | `VMThread::run`                 | `libjvm.dylib` |
|  1.9% |       4 | `ConcurrentGCThread::run`       | `libjvm.dylib` |
|  1.4% |       3 | `WatcherThread::run`            | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     211 | `Thread::call_run` | `libjvm.dylib` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|     % | Samples | Callee                            | Location           |
| ----: | ------: | --------------------------------- | ------------------ |
| 69.5% |     146 | `arrayof_jint_disjoint_arraycopy` | `<unknown>`        |
| 27.1% |      57 | `_new_array_Java`                 | `<unknown>`        |
|  0.5% |       1 | `copyOf(Object[], int, Class)`    | `java.util.Arrays` |

##### `get(int)` (`java.util.ArrayList`)

|     % | Samples | Callee                 | Location              |
| ----: | ------: | ---------------------- | --------------------- |
| 86.5% |     173 | `elementData(int)`     | `java.util.ArrayList` |
| 12.5% |      25 | `checkIndex(int, int)` | `java.util.Objects`   |

##### `addAll(Collection)` (`java.util.ArrayList`)

|     % | Samples | Callee                               | Location              |
| ----: | ------: | ------------------------------------ | --------------------- |
| 51.6% |      97 | `toArray()`                          | `java.util.ArrayList` |
| 28.2% |      53 | `arrayof_oop_disjoint_arraycopy`     | `<unknown>`           |
| 18.6% |      35 | `grow(int)`                          | `java.util.ArrayList` |
|  0.5% |       1 | `G1BarrierSet::write_ref_array_work` | `libjvm.dylib`        |

##### `WorkerThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location                 |
| ----: | ------: | --------------------------------- | ------------------------ |
| 34.3% |      37 | `G1EvacuateRegionsBaseTask::work` | `libjvm.dylib`           |
| 23.1% |      25 | `G1FullGCMarkTask::work`          | `libjvm.dylib`           |
| 14.8% |      16 | `semaphore_wait_trap`             | `libsystem_kernel.dylib` |
|  9.3% |      10 | `G1FullGCAdjustTask::work`        | `libjvm.dylib`           |
|  7.4% |       8 | `KlassCleaningTask::work`         | `libjvm.dylib`           |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 97.7% |      84 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib` |
|  1.2% |       1 | `ServiceThread::service_thread_entry`      | `libjvm.dylib` |
|  1.2% |       1 | `JvmtiAgentThread::start_function_wrapper` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|     % | Samples | Callee                                         | Location       |
| ----: | ------: | ---------------------------------------------- | -------------- |
| 83.3% |      70 | `CompileBroker::invoke_compiler_on_method`     | `libjvm.dylib` |
| 15.5% |      13 | `CompileQueue::get`                            | `libjvm.dylib` |
|  1.2% |       1 | `CompileBroker::possibly_add_compiler_threads` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 85.7% |      60 | `C2Compiler::compile_method` | `libjvm.dylib` |
| 11.4% |       8 | `Compiler::compile_method`   | `libjvm.dylib` |
|  2.9% |       2 | `ciEnv::ciEnv`               | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 98.3% |      59 | `Compile::Compile`                       | `libjvm.dylib` |
|  1.7% |       1 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % | Samples | Callee                     | Location       |
| ----: | ------: | -------------------------- | -------------- |
| 52.5% |      31 | `Compile::Code_Gen`        | `libjvm.dylib` |
| 39.0% |      23 | `Compile::Optimize`        | `libjvm.dylib` |
|  8.5% |       5 | `ParseGenerator::generate` | `libjvm.dylib` |

##### `_new_array_Java` (`<unknown>`)

|     % | Samples | Callee                         | Location                  |
| ----: | ------: | ------------------------------ | ------------------------- |
| 96.6% |      56 | `OptoRuntime::new_array_C`     | `libjvm.dylib`            |
|  1.7% |       1 | `pthread_jit_write_protect_np` | `libsystem_pthread.dylib` |
|  1.7% |       1 | `ClassLoaderData::holder`      | `libjvm.dylib`            |

##### `Unsafe_Unpark` (`libjvm.dylib`)

|     % | Samples | Callee                                         | Location                  |
| ----: | ------: | ---------------------------------------------- | ------------------------- |
| 84.5% |      49 | `__psynch_cvsignal`                            | `libsystem_kernel.dylib`  |
|  3.4% |       2 | `pthread_jit_write_protect_np`                 | `libsystem_pthread.dylib` |
|  1.7% |       1 | `FastThreadsListHandle::FastThreadsListHandle` | `libjvm.dylib`            |
|  1.7% |       1 | `pthread_cond_signal`                          | `libsystem_pthread.dylib` |
|  1.7% |       1 | `_pthread_cond_updateval`                      | `libsystem_pthread.dylib` |

##### `OptoRuntime::new_array_C` (`libjvm.dylib`)

|     % | Samples | Callee                             | Location                  |
| ----: | ------: | ---------------------------------- | ------------------------- |
| 92.9% |      52 | `InstanceKlass::allocate_objArray` | `libjvm.dylib`            |
|  5.4% |       3 | `pthread_jit_write_protect_np`     | `libsystem_pthread.dylib` |
|  1.8% |       1 | `CollectedHeap::array_allocate`    | `libjvm.dylib`            |

##### `MemAllocator::allocate` (`libjvm.dylib`)

|     % | Samples | Callee                                        | Location                   |
| ----: | ------: | --------------------------------------------- | -------------------------- |
| 53.7% |      29 | `_platform_bzero`                             | `libsystem_platform.dylib` |
| 25.9% |      14 | `_platform_memset`                            | `libsystem_platform.dylib` |
|  9.3% |       5 | `MemAllocator::mem_allocate_inside_tlab_slow` | `libjvm.dylib`             |
|  5.6% |       3 | `ObjArrayAllocator::initialize`               | `libjvm.dylib`             |
|  1.9% |       1 | `G1CardTable::g1_mark_as_young`               | `libjvm.dylib`             |

##### `CollectedHeap::array_allocate` (`libjvm.dylib`)

|      % | Samples | Callee                   | Location       |
| -----: | ------: | ------------------------ | -------------- |
| 100.0% |      53 | `MemAllocator::allocate` | `libjvm.dylib` |

##### `arrayof_oop_disjoint_arraycopy` (`<unknown>`)

|     % | Samples | Callee                     | Location        |
| ----: | ------: | -------------------------- | --------------- |
| 86.8% |      46 | `forward_copy_longs`       | `<unknown>`     |
|  7.5% |       4 | `G1BarrierSet::invalidate` | `libjvm.dylib`  |
|  3.8% |       2 | `tlv_get_addr`             | `libdyld.dylib` |

##### `InstanceKlass::allocate_objArray` (`libjvm.dylib`)

|      % | Samples | Callee                          | Location       |
| -----: | ------: | ------------------------------- | -------------- |
| 100.0% |      52 | `CollectedHeap::array_allocate` | `libjvm.dylib` |

##### `G1EvacuateRegionsBaseTask::work` (`libjvm.dylib`)

|     % | Samples | Callee                                         | Location       |
| ----: | ------: | ---------------------------------------------- | -------------- |
| 75.7% |      28 | `G1EvacuateRegionsTask::evacuate_live_objects` | `libjvm.dylib` |
| 21.6% |       8 | `G1EvacuateRegionsTask::scan_roots`            | `libjvm.dylib` |
|  2.7% |       1 | `G1ParScanThreadStateSet::state_for_worker`    | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 61.3% |      19 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 29.0% |       9 | `Matcher::match`                  | `libjvm.dylib` |
|  6.5% |       2 | `PhaseCFG::PhaseCFG`              | `libjvm.dylib` |
|  3.2% |       1 | `PhaseOutput::Output`             | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 39.1% |       9 | `PhaseIdealLoop::optimize`       | `libjvm.dylib` |
| 30.4% |       7 | `Compile::optimize_loops`        | `libjvm.dylib` |
|  8.7% |       2 | `Compile::final_graph_reshaping` | `libjvm.dylib` |
|  8.7% |       2 | `PhaseCCP::PhaseCCP`             | `libjvm.dylib` |
|  4.3% |       1 | `PhaseCCP::do_transform`         | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % | Samples | Callee                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 26.3% |       5 | `PhaseChaitin::build_ifg_physical`   | `libjvm.dylib` |
| 21.1% |       4 | `PhaseChaitin::gather_lrg_masks`     | `libjvm.dylib` |
| 10.5% |       2 | `PhaseLive::compute`                 | `libjvm.dylib` |
| 10.5% |       2 | `PhaseChaitin::Split`                | `libjvm.dylib` |
|  5.3% |       1 | `PhaseIFG::Compute_Effective_Degree` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 87.5% |      14 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
| 12.5% |       2 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 35.7% |       5 | `PhaseIdealLoop::build_loop_late`      | `libjvm.dylib` |
| 21.4% |       3 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |
| 14.3% |       2 | `PhaseIdealLoop::Dominators`           | `libjvm.dylib` |
|  7.1% |       1 | `Node::is_CFG`                         | `libjvm.dylib` |
|  7.1% |       1 | `IdealLoopTree::policy_range_check`    | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % | Samples | Callee                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |      14 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `CompileQueue::get` (`libjvm.dylib`)

|     % | Samples | Callee              | Location       |
| ----: | ------: | ------------------- | -------------- |
| 92.3% |      12 | `Monitor::wait`     | `libjvm.dylib` |
|  7.7% |       1 | `os::javaTimeNanos` | `libjvm.dylib` |

##### `Matcher::match` (`libjvm.dylib`)

|     % | Samples | Callee                 | Location       |
| ----: | ------: | ---------------------- | -------------- |
| 77.8% |       7 | `Matcher::xform`       | `libjvm.dylib` |
| 11.1% |       1 | `LoadNNode::Opcode`    | `libjvm.dylib` |
| 11.1% |       1 | `Matcher::find_shared` | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 75.0% |       6 | `Compilation::compile_java_method` | `libjvm.dylib` |
| 25.0% |       2 | `ciEnv::register_method`           | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Callee                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |       8 | `Compilation::compile_method` | `libjvm.dylib` |

##### `Matcher::xform` (`libjvm.dylib`)

|     % | Samples | Callee                | Location       |
| ----: | ------: | --------------------- | -------------- |
| 71.4% |       5 | `Matcher::match_tree` | `libjvm.dylib` |
| 14.3% |       1 | `Arena::grow`         | `libjvm.dylib` |

##### `Compile::optimize_loops` (`libjvm.dylib`)

|      % | Samples | Callee                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |       7 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`)

|     % | Samples | Callee                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 33.3% |       2 | `PhaseIdealLoop::compute_lca_of_uses`         | `libjvm.dylib` |
| 16.7% |       1 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|     % | Samples | Callee                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 50.0% |       3 | `Compilation::emit_lir`       | `libjvm.dylib` |
| 33.3% |       2 | `Compilation::build_hir`      | `libjvm.dylib` |
| 16.7% |       1 | `Compilation::emit_code_body` | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

|     % | Samples | Callee                                         | Location       |
| ----: | ------: | ---------------------------------------------- | -------------- |
| 20.0% |       1 | `PhaseChaitin::compute_initial_block_pressure` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

|      % | Samples | Callee                                      | Location       |
| -----: | ------: | ------------------------------------------- | -------------- |
| 100.0% |       5 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`) ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 5.3% |     256 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 3.1% |     148 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 3.0% |     143 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 2.3% |     110 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 2.2% |     108 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 2.2% |     106 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.8% |      85 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.7% |      82 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.6% |      79 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f001183d68`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) |
| 1.6% |      75 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 1.4% |      69 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 1.4% |      66 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.2% |      56 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.1% |      55 | `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.1% |      54 | `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.0% |      50 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.0% |      50 | `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 1.0% |      49 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.9% |      45 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.9% |      44 | `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

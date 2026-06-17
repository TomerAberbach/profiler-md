# Sampling profile diff

4,802 samples → 4,822 samples (+20 samples, +0.4%).

| Category | Change | Delta |             % |       Samples |
| -------- | -----: | ----: | ------------: | ------------: |
| ours     |  +1.7% |   +77 | 93.4% → 94.6% | 4,484 → 4,561 |
| stdlib   | -17.9% |   -57 |   6.6% → 5.4% |     318 → 261 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                                                                                       | Location                                                |
| ------: | ----: | ------------: | --------: | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|  +10.8% |   +97 | 18.8% → 20.7% | 901 → 998 | `accumulate(Double[], double[])`                                                               | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |
|  +10.9% |   +45 |   8.6% → 9.5% | 411 → 456 | `vectorSum()`                                                                                  | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |
| +156.0% |   +39 |   0.5% → 1.3% |   25 → 64 | `checkIndex(int, int)`                                                                         | java.util.Objects                                       |
|  +16.5% |   +22 |   2.8% → 3.2% | 133 → 155 | `computeIfAbsent(Object, Function)`                                                            | java.util.HashMap                                       |
|  +14.1% |   +14 |   2.1% → 2.3% |  99 → 113 | `doubleValue()`                                                                                | java.lang.Double                                        |
| +144.4% |   +13 |   0.2% → 0.5% |    9 → 22 | `G1FullGCMarker::mark_object()`                                                                | libjvm.dylib                                            |
| +150.0% |    +6 |   0.1% → 0.2% |    4 → 10 | `grow()`                                                                                       | java.util.ArrayList                                     |
|     new |    +4 |   0.0% → 0.1% |     0 → 4 | `compute()`                                                                                    | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask    |
| +200.0% |    +4 |   0.0% → 0.1% |     2 → 6 | `awaitDone(int, long)`                                                                         | java.util.concurrent.ForkJoinTask                       |
|     new |    +4 |   0.0% → 0.1% |     0 → 4 | `void HeapRegion::apply_to_marked_objects<G1FullGCPrepareTask::G1PrepareCompactLiveClosure>()` | libjvm.dylib                                            |
|  +23.1% |    +3 |          0.3% |   13 → 16 | `pthread_jit_write_protect_np()`                                                               | libsystem_pthread.dylib                                 |
|  +37.5% |    +3 |          0.2% |    8 → 11 | `merge(Object, Object, BiFunction)`                                                            | java.util.HashMap                                       |
|  +50.0% |    +3 |   0.1% → 0.2% |     6 → 9 | `copyOf(Object[], int)`                                                                        | java.util.Arrays                                        |
|  +17.6% |    +3 |          0.4% |   17 → 20 | `arrayof_jint_disjoint_arraycopy()`                                                            | `<unknown>`                                             |
| +300.0% |    +3 |   0.0% → 0.1% |     1 → 4 | `newNode(int, Object, Object, HashMap$Node)`                                                   | java.util.HashMap                                       |
|     new |    +3 |   0.0% → 0.1% |     0 → 3 | `_platform_memmove()`                                                                          | libsystem_platform.dylib                                |
| +100.0% |    +2 |   0.0% → 0.1% |     2 → 4 | `mach_absolute_time()`                                                                         | libsystem_kernel.dylib                                  |
| +200.0% |    +2 |   0.0% → 0.1% |     1 → 3 | `PhaseChaitin::Split()`                                                                        | libjvm.dylib                                            |
| +200.0% |    +2 |   0.0% → 0.1% |     1 → 3 | `G1ParScanThreadState::trim_queue_to_threshold()`                                              | libjvm.dylib                                            |
|  +66.7% |    +2 |          0.1% |     3 → 5 | `exec()`                                                                                       | java.util.concurrent.RecursiveTask                      |

#### Progressions

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                                                                                          | Location                                                 |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
|   -8.1% |   -55 | 14.1% → 12.9% | 679 → 624 | `__psynch_cvwait()`                                                                               | libsystem_kernel.dylib                                   |
|   -5.9% |   -24 |   8.5% → 8.0% | 410 → 386 | `findNearestCentroid()`                                                                           | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|   -9.8% |   -17 |   3.6% → 3.2% | 173 → 156 | `elementData(int)`                                                                                | java.util.ArrayList                                      |
|  -51.7% |   -15 |   0.6% → 0.3% |   29 → 14 | `_platform_bzero()`                                                                               | libsystem_platform.dylib                                 |
|  -34.6% |    -9 |   0.5% → 0.4% |   26 → 17 | `grow(int)`                                                                                       | java.util.ArrayList                                      |
|  -37.5% |    -9 |   0.5% → 0.3% |   24 → 15 | `semaphore_wait_trap()`                                                                           | libsystem_kernel.dylib                                   |
|  -15.1% |    -8 |   1.1% → 0.9% |   53 → 45 | `zero_blocks()`                                                                                   | `<unknown>`                                              |
|  -43.8% |    -7 |   0.3% → 0.2% |    16 → 9 | `_platform_memset()`                                                                              | libsystem_platform.dylib                                 |
|  -58.3% |    -7 |   0.2% → 0.1% |    12 → 5 | `void G1ScanEvacuatedObjClosure::do_oop_work<narrowOop>()`                                        | libjvm.dylib                                             |
| removed |    -6 |   0.1% → 0.0% |     6 → 0 | `ClassLoaderDataGraphKlassIteratorAtomic::next_klass()`                                           | libjvm.dylib                                             |
|   -0.5% |    -5 | 19.3% → 19.1% | 926 → 921 | `distance(Double[], Double[])`                                                                    | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  -57.1% |    -4 |          0.1% |     7 → 3 | `tlv_get_addr()`                                                                                  | libdyld.dylib                                            |
| removed |    -4 |   0.1% → 0.0% |     4 → 0 | `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>()`                                 | libjvm.dylib                                             |
|  -80.0% |    -4 |   0.1% → 0.0% |     5 → 1 | `forEach(BiConsumer)`                                                                             | java.util.HashMap                                        |
|   -7.1% |    -4 |   1.2% → 1.1% |   56 → 52 | `add(Object, Object[], int)`                                                                      | java.util.ArrayList                                      |
|   -8.2% |    -4 |   1.0% → 0.9% |   49 → 45 | `__psynch_cvsignal()`                                                                             | libsystem_kernel.dylib                                   |
| removed |    -4 |   0.1% → 0.0% |     4 → 0 | `G1BarrierSet::invalidate()`                                                                      | libjvm.dylib                                             |
|  -80.0% |    -4 |   0.1% → 0.0% |     5 → 1 | `void OopOopIterateDispatch<G1AdjustClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>()` | libjvm.dylib                                             |
|  -75.0% |    -3 |   0.1% → 0.0% |     4 → 1 | `PhaseChaitin::build_ifg_physical()`                                                              | libjvm.dylib                                             |
| removed |    -3 |   0.1% → 0.0% |     3 → 0 | `G1ParScanThreadState::start_partial_objarray()`                                                  | libjvm.dylib                                             |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |             % |       Samples | Function                                             | Location                                                             |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------- | -------------------------------------------------------------------- |
|     new |  +454 |   0.0% → 9.4% |       0 → 454 | `call()`                                             | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000e801183d68 |
|     new |  +288 |   0.0% → 6.0% |       0 → 288 | `accept(Object, Object)`                             | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000e801187478 |
|     new |  +215 |   0.0% → 4.5% |       0 → 215 | `apply(Object, Object)`                              | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000e8011876c0 |
|   +9.7% |  +144 | 31.0% → 33.8% | 1,488 → 1,632 | `vectorSum()`                                        | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask              |
|   +9.7% |  +144 | 31.0% → 33.9% | 1,489 → 1,633 | `computeDirectly()`                                  | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask              |
|   +3.4% |  +130 | 79.7% → 82.1% | 3,829 → 3,959 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | java.util.concurrent.ForkJoinPool$WorkQueue                          |
|   +2.6% |  +107 | 84.3% → 86.2% | 4,049 → 4,156 | `join()`                                             | java.util.concurrent.ForkJoinTask                                    |
|   +2.6% |  +105 | 84.3% → 86.1% | 4,049 → 4,154 | `awaitDone(int, long)`                               | java.util.concurrent.ForkJoinTask                                    |
|  +10.1% |  +100 | 20.6% → 22.6% |   990 → 1,090 | `accumulate(Double[], double[])`                     | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask              |
|   +1.8% |   +74 | 88.0% → 89.2% | 4,226 → 4,300 | `compute()`                                          | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask                 |
|   +1.7% |   +73 | 88.0% → 89.2% | 4,228 → 4,301 | `exec()`                                             | java.util.concurrent.RecursiveTask                                   |
|   +1.4% |   +60 | 88.7% → 89.5% | 4,258 → 4,318 | `doExec()`                                           | java.util.concurrent.ForkJoinTask                                    |
|   +1.4% |   +60 | 88.7% → 89.5% | 4,258 → 4,318 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | java.util.concurrent.ForkJoinPool$WorkQueue                          |
|   +1.3% |   +54 | 88.8% → 89.6% | 4,266 → 4,320 | `scan(ForkJoinPool$WorkQueue, int, int)`             | java.util.concurrent.ForkJoinPool                                    |
| +156.0% |   +39 |   0.5% → 1.3% |       25 → 64 | `checkIndex(int, int)`                               | java.util.Objects                                                    |
|   +2.0% |   +37 | 38.8% → 39.4% | 1,861 → 1,898 | `computeDirectly()`                                  | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|   +5.4% |   +36 | 14.0% → 14.7% |     672 → 708 | `computeClusterAverages()`                           | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask                 |
|   +5.4% |   +36 | 14.0% → 14.7% |     672 → 708 | `computeDirectly()`                                  | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask                 |
|   +7.5% |   +34 |  9.4% → 10.1% |     453 → 487 | `collectClusters(int[])`                             | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|     new |   +34 |   0.0% → 0.7% |        0 → 34 | `invokeStatic(Object, Object)`                       | java.lang.invoke.LambdaForm$DMH.0x000000e801004800                   |

#### Progressions

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |             % |     Samples | Function                                                  | Location                                                             |
| ------: | ----: | ------------: | ----------: | --------------------------------------------------------- | -------------------------------------------------------------------- |
| removed |  -452 |   9.4% → 0.0% |     452 → 0 | `call()`                                                  | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f001183d68 |
| removed |  -378 |   7.9% → 0.0% |     378 → 0 | `accept(Object, Object)`                                  | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f001186d88 |
| removed |  -265 |   5.5% → 0.0% |     265 → 0 | `apply(Object, Object)`                                   | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f0011876a8 |
|  -24.1% |   -95 |   8.2% → 6.2% |   394 → 299 | `merge(Map, Map)`                                         | org.renaissance.jdk.concurrent.JavaKMeans                            |
|  -24.1% |   -95 |   8.2% → 6.2% |   394 → 299 | `combineResults(Map, Map)`                                | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|  -24.5% |   -94 |   8.0% → 6.0% |   383 → 289 | `forEach(BiConsumer)`                                     | java.util.HashMap                                                    |
|  -23.6% |   -93 |   8.2% → 6.2% |   394 → 301 | `combineResults(Object, Object)`                          | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|  -23.4% |   -88 |   7.8% → 6.0% |   376 → 288 | `lambda$merge$7(Map, Object, List)`                       | org.renaissance.jdk.concurrent.JavaKMeans                            |
|  -23.2% |   -87 |   7.8% → 6.0% |   375 → 288 | `merge(Object, Object, BiFunction)`                       | java.util.HashMap                                                    |
|   -7.4% |   -79 | 22.3% → 20.6% | 1,070 → 991 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | java.util.concurrent.ForkJoinPool                                    |
|  -26.4% |   -57 |   4.5% → 3.3% |   216 → 159 | `arrayof_jint_disjoint_arraycopy()`                       | `<unknown>`                                                          |
|   -8.1% |   -55 | 14.1% → 12.9% |   679 → 624 | `__psynch_cvwait()`                                       | libsystem_kernel.dylib                                               |
|   -8.3% |   -55 | 13.8% → 12.6% |   664 → 609 | `Parker::park()`                                          | libjvm.dylib                                                         |
|   -7.7% |   -52 | 14.0% → 12.8% |   671 → 619 | `Unsafe_Park()`                                           | libjvm.dylib                                                         |
|   -7.7% |   -52 | 14.0% → 12.9% |   673 → 621 | `park(boolean, long)`                                     | jdk.internal.misc.Unsafe                                             |
|   -7.6% |   -50 | 13.7% → 12.7% |   660 → 610 | `park()`                                                  | java.util.concurrent.locks.LockSupport                               |
|  -18.9% |   -50 |   5.5% → 4.5% |   265 → 215 | `lambda$merge$6(List, List)`                              | org.renaissance.jdk.concurrent.JavaKMeans                            |
|  -24.5% |   -46 |   3.9% → 2.9% |   188 → 142 | `addAll(Collection)`                                      | java.util.ArrayList                                                  |
|  -21.4% |   -45 |   4.4% → 3.4% |   210 → 165 | `copyOf(Object[], int)`                                   | java.util.Arrays                                                     |
|  -23.0% |   -40 |   3.6% → 2.8% |   174 → 134 | `toArray()`                                               | java.util.ArrayList                                                  |

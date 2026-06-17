# Sampling profile diff

5,140 samples → 4,878 samples (-262 samples, -5.1%).

| Category | Change | Delta |             % |       Samples |
| -------- | -----: | ----: | ------------: | ------------: |
| ours     |  -2.5% |  -122 | 96.1% → 98.7% | 4,938 → 4,816 |
| stdlib   | -69.3% |  -140 |   3.9% → 1.3% |      202 → 62 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |       Samples | Function                                                                            | Location                                                 |
| ------: | ----: | ------------: | ------------: | ----------------------------------------------------------------------------------- | -------------------------------------------------------- |
|  +57.5% |   +77 |   2.6% → 4.3% |     134 → 211 | `distance(Double[], Double[])`                                                      | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|   +4.1% |   +50 | 24.0% → 26.3% | 1,232 → 1,282 | `semaphore_wait_trap()`                                                             | libsystem_kernel.dylib                                   |
|  +11.1% |   +25 |   4.4% → 5.1% |     225 → 250 | `accumulate(Double[], double[])`                                                    | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|  +63.2% |   +12 |   0.4% → 0.6% |       19 → 31 | `collectClusters(int[])`                                                            | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|     new |    +5 |   0.0% → 0.1% |         0 → 5 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region()` | libjvm.dylib                                             |
|  +60.0% |    +3 |   0.1% → 0.2% |         5 → 8 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`                           | java.util.concurrent.ForkJoinPool                        |
| +100.0% |    +3 |          0.1% |         3 → 6 | `checkIndex(int, int)`                                                              | java.util.Objects                                        |
|     new |    +2 |          0.0% |         0 → 2 | `merge(Object, Object, BiFunction)`                                                 | java.util.HashMap                                        |
|     new |    +2 |          0.0% |         0 → 2 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>()`                   | libjvm.dylib                                             |
|     new |    +1 |          0.0% |         0 → 1 | `compute()`                                                                         | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask     |
|     new |    +1 |          0.0% |         0 → 1 | `doExec()`                                                                          | java.util.concurrent.ForkJoinTask                        |
|     new |    +1 |          0.0% |         0 → 1 | `tryRemoveAndExec(ForkJoinTask, boolean)`                                           | java.util.concurrent.ForkJoinPool$WorkQueue              |
|     new |    +1 |          0.0% |         0 → 1 | `awaitDone(int, long)`                                                              | java.util.concurrent.ForkJoinTask                        |
|     new |    +1 |          0.0% |         0 → 1 | `runWorker(ForkJoinPool$WorkQueue)`                                                 | java.util.concurrent.ForkJoinPool                        |
|     new |    +1 |          0.0% |         0 → 1 | `unpark(Object)`                                                                    | jdk.internal.misc.Unsafe                                 |
|     new |    +1 |          0.0% |         0 → 1 | `toArray()`                                                                         | java.util.ArrayList                                      |
|     new |    +1 |          0.0% |         0 → 1 | `get(int)`                                                                          | java.util.ArrayList                                      |
|     new |    +1 |          0.0% |         0 → 1 | `add(Object)`                                                                       | java.util.ArrayList                                      |
|     new |    +1 |          0.0% |         0 → 1 | `arrayof_oop_disjoint_arraycopy()`                                                  | `<unknown>`                                              |
|   +3.0% |    +1 |   0.6% → 0.7% |       33 → 34 | `computeIfAbsent(Object, Function)`                                                 | java.util.HashMap                                        |

#### Progressions

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |       Samples | Function                               | Location                                                 |
| ------: | ----: | ------------: | ------------: | -------------------------------------- | -------------------------------------------------------- |
|   -4.9% |  -125 | 50.0% → 50.1% | 2,571 → 2,446 | `__psynch_cvwait()`                    | libsystem_kernel.dylib                                   |
|  -31.6% |   -42 |   2.6% → 1.9% |      133 → 91 | `findNearestCentroid()`                | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  -90.2% |   -37 |   0.8% → 0.1% |        41 → 4 | `doubleValue()`                        | java.lang.Double                                         |
|  -18.3% |   -19 |   2.0% → 1.7% |      104 → 85 | `vectorSum()`                          | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|  -39.6% |   -19 |   0.9% → 0.6% |       48 → 29 | `elementData(int)`                     | java.util.ArrayList                                      |
|  -77.8% |   -14 |   0.4% → 0.1% |        18 → 4 | `grow(int)`                            | java.util.ArrayList                                      |
|  -50.0% |    -7 |   0.3% → 0.1% |        14 → 7 | `add(Object, Object[], int)`           | java.util.ArrayList                                      |
|   -5.4% |    -7 |          2.5% |     129 → 122 | `mach_msg2_trap()`                     | libsystem_kernel.dylib                                   |
| removed |    -7 |   0.1% → 0.0% |         7 → 0 | `_platform_bzero()`                    | libsystem_platform.dylib                                 |
|   -5.4% |    -7 |          2.5% |     129 → 122 | `__ulock_wait()`                       | libsystem_kernel.dylib                                   |
|  -42.9% |    -6 |   0.3% → 0.2% |        14 → 8 | `__psynch_cvsignal()`                  | libsystem_kernel.dylib                                   |
|  -33.3% |    -5 |   0.3% → 0.2% |       15 → 10 | `zero_blocks()`                        | `<unknown>`                                              |
|  -22.2% |    -2 |   0.2% → 0.1% |         9 → 7 | `__psynch_mutexwait()`                 | libsystem_kernel.dylib                                   |
| removed |    -2 |          0.0% |         2 → 0 | `G1FullGCMarker::mark_object()`        | libjvm.dylib                                             |
| removed |    -2 |          0.0% |         2 → 0 | `newLength(int, int, int)`             | jdk.internal.util.ArraysSupport                          |
| removed |    -2 |          0.0% |         2 → 0 | `createSubtask(int, int)`              | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|  -66.7% |    -2 |   0.1% → 0.0% |         3 → 1 | `tlv_get_addr()`                       | libdyld.dylib                                            |
| removed |    -1 |          0.0% |         1 → 0 | `ClassLoaderDataGraph::roots_cld_do()` | libjvm.dylib                                             |
| removed |    -1 |          0.0% |         1 → 0 | `Unsafe_Park()`                        | libjvm.dylib                                             |
| removed |    -1 |          0.0% |         1 → 0 | `park(boolean, long)`                  | jdk.internal.misc.Unsafe                                 |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |             % |       Samples | Function                                                                            | Location                                                             |
| ------: | ----: | ------------: | ------------: | ----------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
|     new |  +120 |   0.0% → 2.5% |       0 → 120 | `invokeStatic(Object, Object)`                                                      | java.lang.invoke.LambdaForm$DMH.0x000000a801004800                   |
|     new |  +120 |   0.0% → 2.5% |       0 → 120 | `invoke(Object, Object, Object)`                                                    | java.lang.invoke.LambdaForm$MH.0x000000a801009800                    |
|     new |  +116 |   0.0% → 2.4% |       0 → 116 | `applyVoid(Object)`                                                                 | org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a80111efe0 |
|     new |  +110 |   0.0% → 2.3% |       0 → 110 | `apply(Object)`                                                                     | org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000a80117ae68   |
|     new |  +109 |   0.0% → 2.2% |       0 → 109 | `call()`                                                                            | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a801183d68 |
|     new |   +66 |   0.0% → 1.4% |        0 → 66 | `accept(Object, Object)`                                                            | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a801186fd8 |
|  +38.2% |   +60 |   3.1% → 4.4% |     157 → 217 | `distance(Double[], Double[])`                                                      | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|   +4.7% |   +52 | 21.5% → 23.7% | 1,105 → 1,157 | `WorkerThread::run()`                                                               | libjvm.dylib                                                         |
|   +4.1% |   +50 | 24.0% → 26.3% | 1,232 → 1,282 | `semaphore_wait_trap()`                                                             | libsystem_kernel.dylib                                               |
|     new |   +47 |   0.0% → 1.0% |        0 → 47 | `apply(Object, Object)`                                                             | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a801187220 |
|   +3.6% |   +11 |   6.0% → 6.5% |     307 → 318 | `findNearestCentroid()`                                                             | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|   +2.7% |   +11 |   8.1% → 8.7% |     414 → 425 | `computeDirectly()`                                                                 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|     new |    +6 |   0.0% → 0.1% |         0 → 6 | `HeapRegionManager::par_iterate()`                                                  | libjvm.dylib                                                         |
|     new |    +5 |   0.0% → 0.1% |         0 → 5 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region()` | libjvm.dylib                                                         |
|     new |    +5 |   0.0% → 0.1% |         0 → 5 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::do_heap_region()`               | libjvm.dylib                                                         |
|     new |    +5 |   0.0% → 0.1% |         0 → 5 | `G1FullGCResetMetadataTask::work()`                                                 | libjvm.dylib                                                         |
|  +26.7% |    +4 |   0.3% → 0.4% |       15 → 19 | `CompileBroker::invoke_compiler_on_method()`                                        | libjvm.dylib                                                         |
| +400.0% |    +4 |   0.0% → 0.1% |         1 → 5 | `Compilation::compile_method()`                                                     | libjvm.dylib                                                         |
| +400.0% |    +4 |   0.0% → 0.1% |         1 → 5 | `Compilation::Compilation()`                                                        | libjvm.dylib                                                         |
| +400.0% |    +4 |   0.0% → 0.1% |         1 → 5 | `Compiler::compile_method()`                                                        | libjvm.dylib                                                         |

#### Progressions

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |             % |       Samples | Function                                                  | Location                                                             |
| ------: | ----: | ------------: | ------------: | --------------------------------------------------------- | -------------------------------------------------------------------- |
| removed |  -126 |   2.5% → 0.0% |       126 → 0 | `invokeStatic(Object, Object)`                            | java.lang.invoke.LambdaForm$DMH.0x0000007001004800                   |
| removed |  -126 |   2.5% → 0.0% |       126 → 0 | `invoke(Object, Object, Object)`                          | java.lang.invoke.LambdaForm$MH.0x0000007001009800                    |
|   -4.9% |  -125 | 50.0% → 50.1% | 2,571 → 2,446 | `__psynch_cvwait()`                                       | libsystem_kernel.dylib                                               |
| removed |  -123 |   2.4% → 0.0% |       123 → 0 | `applyVoid(Object)`                                       | org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111efe0 |
| removed |  -118 |   2.3% → 0.0% |       118 → 0 | `call()`                                                  | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68 |
| removed |  -116 |   2.3% → 0.0% |       116 → 0 | `apply(Object)`                                           | org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000700117ae68   |
|   -5.9% |   -84 | 27.8% → 27.6% | 1,430 → 1,346 | `PlatformMonitor::wait()`                                 | libjvm.dylib                                                         |
| removed |   -76 |   1.5% → 0.0% |        76 → 0 | `accept(Object, Object)`                                  | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88 |
|   -5.0% |   -57 |         22.1% | 1,136 → 1,079 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | java.util.concurrent.ForkJoinPool                                    |
|   -6.1% |   -57 | 18.1% → 17.9% |     932 → 875 | `JavaThread::thread_main_inner()`                         | libjvm.dylib                                                         |
|   -4.9% |   -56 |         22.1% | 1,135 → 1,079 | `doExec()`                                                | java.util.concurrent.ForkJoinTask                                    |
|   -4.9% |   -56 |         22.1% | 1,135 → 1,079 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | java.util.concurrent.ForkJoinPool$WorkQueue                          |
|   -3.5% |   -55 | 30.3% → 30.8% | 1,555 → 1,500 | `runWorker(ForkJoinPool$WorkQueue)`                       | java.util.concurrent.ForkJoinPool                                    |
|   -3.5% |   -55 | 30.3% → 30.8% | 1,555 → 1,500 | `run()`                                                   | java.util.concurrent.ForkJoinWorkerThread                            |
|   -5.4% |   -55 | 19.9% → 19.8% |   1,021 → 966 | `Monitor::wait_without_safepoint_check()`                 | libjvm.dylib                                                         |
|   -4.8% |   -54 | 22.0% → 22.1% | 1,130 → 1,076 | `compute()`                                               | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask                 |
|   -4.8% |   -54 | 22.0% → 22.1% | 1,130 → 1,076 | `exec()`                                                  | java.util.concurrent.RecursiveTask                                   |
| removed |   -52 |   1.0% → 0.0% |        52 → 0 | `apply(Object, Object)`                                   | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0 |
|   -3.5% |   -42 | 23.4% → 23.8% | 1,203 → 1,161 | `awaitDone(int, long)`                                    | java.util.concurrent.ForkJoinTask                                    |
|  -14.9% |   -40 |   5.2% → 4.7% |     269 → 229 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | java.util.concurrent.ForkJoinPool                                    |

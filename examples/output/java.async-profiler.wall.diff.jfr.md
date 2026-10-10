# Sampling profile diff

Collected 5,110 samples → 5,812 samples (+702 samples, +13.7%).

| Category         | Change | Delta |             % |       Samples |
| ---------------- | -----: | ----: | ------------: | ------------: |
| Native           | +16.4% |  +700 | 83.7% → 85.6% | 4,277 → 4,977 |
| Ours             |  -6.9% |   -47 | 13.3% → 10.9% |     679 → 632 |
| Standard library | +33.1% |   +45 |   2.7% → 3.1% |     136 → 181 |
| JIT              | +66.7% |    +6 |   0.2% → 0.3% |        9 → 15 |
| Compiler         | -22.2% |    -2 |   0.2% → 0.1% |         9 → 7 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |       Samples | Function                                        | Location                                                   |
| ------: | ----: | ------------: | ------------: | ----------------------------------------------- | ---------------------------------------------------------- |
|  +17.4% |  +449 | 50.4% → 52.1% | 2,577 → 3,026 | `__psynch_cvwait`                               | `libsystem_kernel.dylib`                                   |
|  +14.9% |  +200 | 26.2% → 26.5% | 1,340 → 1,540 | `semaphore_wait_trap`                           | `libsystem_kernel.dylib`                                   |
|  +29.3% |   +27 |   1.8% → 2.0% |      92 → 119 | `vectorSum()`                                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +15.1% |   +19 |          2.5% |     126 → 145 | `mach_msg2_trap`                                | `libsystem_kernel.dylib`                                   |
|  +15.1% |   +19 |          2.5% |     126 → 145 | `__ulock_wait`                                  | `libsystem_kernel.dylib`                                   |
|  +45.5% |   +10 |   0.4% → 0.6% |       22 → 32 | `collectClusters(int[])`                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|     new |    +9 |   0.0% → 0.2% |         0 → 9 | `G1FullGCMarker::mark_object`                   | `libjvm.dylib`                                             |
|  +72.7% |    +8 |   0.2% → 0.3% |       11 → 19 | `add(Object, Object[], int)`                    | `java.util.ArrayList`                                      |
|  +31.8% |    +7 |   0.4% → 0.5% |       22 → 29 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap`                                        |
| +150.0% |    +6 |   0.1% → 0.2% |        4 → 10 | `checkIndex(int, int)`                          | `java.util.Objects`                                        |
| +300.0% |    +6 |  <0.1% → 0.1% |         2 → 8 | `hash(Object)`                                  | `java.util.HashMap`                                        |
|  +44.4% |    +4 |          0.2% |        9 → 13 | `zero_blocks`                                   | `<unknown>`                                                |
| +400.0% |    +4 |  <0.1% → 0.1% |         1 → 5 | `pthread_jit_write_protect_np`                  | `libsystem_pthread.dylib`                                  |
|     new |    +3 |   0.0% → 0.1% |         0 → 3 | `scan(ForkJoinPool$WorkQueue, int, int)`        | `java.util.concurrent.ForkJoinPool`                        |
|  +23.1% |    +3 |          0.3% |       13 → 16 | `__psynch_cvsignal`                             | `libsystem_kernel.dylib`                                   |
|     new |    +3 |   0.0% → 0.1% |         0 → 3 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap`                                        |
|     new |    +2 |  0.0% → <0.1% |         0 → 2 | `doExec()`                                      | `java.util.concurrent.ForkJoinTask`                        |
| +100.0% |    +2 |  <0.1% → 0.1% |         2 → 4 | `copyOf(Object[], int)`                         | `java.util.Arrays`                                         |
|     new |    +2 |  0.0% → <0.1% |         0 → 2 | `merge(Object, Object, BiFunction)`             | `java.util.HashMap`                                        |
|   +5.3% |    +2 |          0.7% |       38 → 40 | `elementData(int)`                              | `java.util.ArrayList`                                      |

##### Native

|  Change | Delta |             % |       Samples | Function                                                        | Location                   |
| ------: | ----: | ------------: | ------------: | --------------------------------------------------------------- | -------------------------- |
|  +17.4% |  +449 | 50.4% → 52.1% | 2,577 → 3,026 | `__psynch_cvwait`                                               | `libsystem_kernel.dylib`   |
|  +14.9% |  +200 | 26.2% → 26.5% | 1,340 → 1,540 | `semaphore_wait_trap`                                           | `libsystem_kernel.dylib`   |
|  +15.1% |   +19 |          2.5% |     126 → 145 | `mach_msg2_trap`                                                | `libsystem_kernel.dylib`   |
|  +15.1% |   +19 |          2.5% |     126 → 145 | `__ulock_wait`                                                  | `libsystem_kernel.dylib`   |
|     new |    +9 |   0.0% → 0.2% |         0 → 9 | `G1FullGCMarker::mark_object`                                   | `libjvm.dylib`             |
| +400.0% |    +4 |  <0.1% → 0.1% |         1 → 5 | `pthread_jit_write_protect_np`                                  | `libsystem_pthread.dylib`  |
|  +23.1% |    +3 |          0.3% |       13 → 16 | `__psynch_cvsignal`                                             | `libsystem_kernel.dylib`   |
|     new |    +2 |  0.0% → <0.1% |         0 → 2 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` | `libjvm.dylib`             |
|     new |    +2 |  0.0% → <0.1% |         0 → 2 | `__semwait_signal`                                              | `libsystem_kernel.dylib`   |
|  +25.0% |    +1 |          0.1% |         4 → 5 | `_platform_bzero`                                               | `libsystem_platform.dylib` |
|     new |    +1 |  0.0% → <0.1% |         0 → 1 | `InstanceKlass::allocate_objArray`                              | `libjvm.dylib`             |
| +100.0% |    +1 |         <0.1% |         1 → 2 | `write`                                                         | `libsystem_kernel.dylib`   |
|     new |    +1 |  0.0% → <0.1% |         0 → 1 | `JavaFrameAnchor::make_walkable`                                | `libjvm.dylib`             |
|     new |    +1 |  0.0% → <0.1% |         0 → 1 | `pthread_mutex_unlock`                                          | `libsystem_pthread.dylib`  |
|     new |    +1 |  0.0% → <0.1% |         0 → 1 | `Method::is_initializer`                                        | `libjvm.dylib`             |
|     new |    +1 |  0.0% → <0.1% |         0 → 1 | `GenerateOopMap::merge_state`                                   | `libjvm.dylib`             |
|     new |    +1 |  0.0% → <0.1% |         0 → 1 | `nmethod::post_compiled_method`                                 | `libjvm.dylib`             |
|     new |    +1 |  0.0% → <0.1% |         0 → 1 | `NullCheckEliminator::iterate_one`                              | `libjvm.dylib`             |
|     new |    +1 |  0.0% → <0.1% |         0 → 1 | `UTF8::is_legal_utf8`                                           | `libjvm.dylib`             |
|     new |    +1 |  0.0% → <0.1% |         0 → 1 | `_pthread_cond_wait`                                            | `libsystem_pthread.dylib`  |

##### Ours

| Change | Delta |            % |  Samples | Function                       | Location                                                   |
| -----: | ----: | -----------: | -------: | ------------------------------ | ---------------------------------------------------------- |
| +29.3% |   +27 |  1.8% → 2.0% | 92 → 119 | `vectorSum()`                  | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| +45.5% |   +10 |  0.4% → 0.6% |  22 → 32 | `collectClusters(int[])`       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|    new |    +1 | 0.0% → <0.1% |    0 → 1 | `compute()`                    | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
|    new |    +1 | 0.0% → <0.1% |    0 → 1 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|    new |    +1 | 0.0% → <0.1% |    0 → 1 | `forkThreshold()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|    new |    +1 | 0.0% → <0.1% |    0 → 1 | `createSubtask(int, int)`      | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

##### Standard library

|  Change | Delta |            % | Samples | Function                                        | Location                                 |
| ------: | ----: | -----------: | ------: | ----------------------------------------------- | ---------------------------------------- |
|  +72.7% |    +8 |  0.2% → 0.3% | 11 → 19 | `add(Object, Object[], int)`                    | `java.util.ArrayList`                    |
|  +31.8% |    +7 |  0.4% → 0.5% | 22 → 29 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap`                      |
| +150.0% |    +6 |  0.1% → 0.2% |  4 → 10 | `checkIndex(int, int)`                          | `java.util.Objects`                      |
| +300.0% |    +6 | <0.1% → 0.1% |   2 → 8 | `hash(Object)`                                  | `java.util.HashMap`                      |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `scan(ForkJoinPool$WorkQueue, int, int)`        | `java.util.concurrent.ForkJoinPool`      |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap`                      |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `doExec()`                                      | `java.util.concurrent.ForkJoinTask`      |
| +100.0% |    +2 | <0.1% → 0.1% |   2 → 4 | `copyOf(Object[], int)`                         | `java.util.Arrays`                       |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `merge(Object, Object, BiFunction)`             | `java.util.HashMap`                      |
|   +5.3% |    +2 |         0.7% | 38 → 40 | `elementData(int)`                              | `java.util.ArrayList`                    |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `grow()`                                        | `java.util.ArrayList`                    |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `size()`                                        | `java.util.ArrayList`                    |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `exec()`                                        | `java.util.concurrent.RecursiveTask`     |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `get(int)`                                      | `java.util.ArrayList`                    |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `park(boolean, long)`                           | `jdk.internal.misc.Unsafe`               |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `toArray(IntFunction)`                          | `java.util.stream.ReferencePipeline`     |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `unpark(Thread)`                                | `java.util.concurrent.locks.LockSupport` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `signalWaiters()`                               | `java.util.concurrent.ForkJoinTask`      |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `signalWork()`                                  | `java.util.concurrent.ForkJoinPool`      |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `initCEN(int, ZipCoder)`                        | `java.util.zip.ZipFile$Source`           |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |            % |   Samples | Function                                                  | Location                                                   |
| ------: | ----: | -----------: | --------: | --------------------------------------------------------- | ---------------------------------------------------------- |
|  -15.2% |   -39 |  5.0% → 3.8% | 257 → 218 | `accumulate(Double[], double[])`                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -11.8% |   -25 |  4.1% → 3.2% | 211 → 186 | `distance(Double[], Double[])`                            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -20.7% |   -19 |  1.8% → 1.3% |   92 → 73 | `findNearestCentroid()`                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -13.3% |    -4 |  0.6% → 0.4% |   30 → 26 | `doubleValue()`                                           | `java.lang.Double`                                         |
|  -37.5% |    -3 |  0.2% → 0.1% |     8 → 5 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                        |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `forEach(BiConsumer)`                                     | `java.util.HashMap`                                        |
|   -4.2% |    -2 |  0.9% → 0.8% |   48 → 46 | `forward_copy_longs`                                      | `<unknown>`                                                |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `Parker::park`                                            | `libjvm.dylib`                                             |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `thread_self_trap`                                        | `libsystem_kernel.dylib`                                   |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `lambda$generateData$3(int, int, Random[], int)`          | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `__mmap`                                                  | `libsystem_kernel.dylib`                                   |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `__psynch_mutexdrop`                                      | `libsystem_kernel.dylib`                                   |
|  -50.0% |    -1 |        <0.1% |     2 → 1 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                        |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `copyOf(Object[], int, Class)`                            | `java.util.Arrays`                                         |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `accept(Object)`                                          | `java.util.stream.Nodes$FixedNodeBuilder`                  |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `compareAndSetInt(Object, long, int, int)`                | `jdk.internal.misc.Unsafe`                                 |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `countPositives(byte[], int, int)`                        | `java.lang.StringCoding`                                   |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `klassVtable::get_mirandas`                               | `libjvm.dylib`                                             |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `ClassFileParser::parse_interfaces`                       | `libjvm.dylib`                                             |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `os::javaTimeNanos`                                       | `libjvm.dylib`                                             |

##### Native

|  Change | Delta |            % | Samples | Function                                                                                     | Location                  |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------- | ------------------------- |
|   -4.2% |    -2 |  0.9% → 0.8% | 48 → 46 | `forward_copy_longs`                                                                         | `<unknown>`               |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `Parker::park`                                                                               | `libjvm.dylib`            |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `thread_self_trap`                                                                           | `libsystem_kernel.dylib`  |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `__mmap`                                                                                     | `libsystem_kernel.dylib`  |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `__psynch_mutexdrop`                                                                         | `libsystem_kernel.dylib`  |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `klassVtable::get_mirandas`                                                                  | `libjvm.dylib`            |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `ClassFileParser::parse_interfaces`                                                          | `libjvm.dylib`            |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `os::javaTimeNanos`                                                                          | `libjvm.dylib`            |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `SignatureStream::next`                                                                      | `libjvm.dylib`            |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `G1CollectedHeap::used_unlocked`                                                             | `libjvm.dylib`            |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `G1BarrierSet::write_ref_array_work`                                                         | `libjvm.dylib`            |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `void HeapRegion::apply_to_marked_objects<G1FullGCPrepareTask::G1PrepareCompactLiveClosure>` | `libjvm.dylib`            |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `WatcherThread::sleep`                                                                       | `libjvm.dylib`            |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `tlv_get_addr`                                                                               | `libdyld.dylib`           |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `_pthread_mutex_firstfit_unlock_slow`                                                        | `libsystem_pthread.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `bsearch`                                                                                    | `libsystem_c.dylib`       |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `MemAllocator::Allocation::check_out_of_memory`                                              | `libjvm.dylib`            |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `G1DirtyCardQueueSet::num_par_ids`                                                           | `libjvm.dylib`            |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `ThreadLocalAllocBuffer::print_stats`                                                        | `libjvm.dylib`            |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `InvocationCounter::set_carry_on_overflow`                                                   | `libjvm.dylib`            |

##### Ours

|  Change | Delta |            % |   Samples | Function                                         | Location                                                   |
| ------: | ----: | -----------: | --------: | ------------------------------------------------ | ---------------------------------------------------------- |
|  -15.2% |   -39 |  5.0% → 3.8% | 257 → 218 | `accumulate(Double[], double[])`                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -11.8% |   -25 |  4.1% → 3.2% | 211 → 186 | `distance(Double[], Double[])`                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -20.7% |   -19 |  1.8% → 1.3% |   92 → 73 | `findNearestCentroid()`                          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `add(double[], double[])`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `combineResults(Object, Object)`                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `<init>(JavaKMeans, List, List, int, int)`       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### Standard library

|  Change | Delta |            % | Samples | Function                                                  | Location                                  |
| ------: | ----: | -----------: | ------: | --------------------------------------------------------- | ----------------------------------------- |
|  -13.3% |    -4 |  0.6% → 0.4% | 30 → 26 | `doubleValue()`                                           | `java.lang.Double`                        |
|  -37.5% |    -3 |  0.2% → 0.1% |   8 → 5 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`       |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `forEach(BiConsumer)`                                     | `java.util.HashMap`                       |
|  -50.0% |    -1 |        <0.1% |   2 → 1 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`       |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `copyOf(Object[], int, Class)`                            | `java.util.Arrays`                        |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `accept(Object)`                                          | `java.util.stream.Nodes$FixedNodeBuilder` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `compareAndSetInt(Object, long, int, int)`                | `jdk.internal.misc.Unsafe`                |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `countPositives(byte[], int, int)`                        | `java.lang.StringCoding`                  |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `<init>()`                                                | `java.util.ArrayList`                     |

#### Lines

Lines with the largest change in contribution to each function's self samples.

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |             % |  Samples | Location                                                      |
| -----: | ----: | ------------: | -------: | ------------------------------------------------------------- |
| +36.8% |   +28 | 82.6% → 87.4% | 76 → 104 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:403` |
|  -6.3% |    -1 | 17.4% → 12.6% |  16 → 15 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:402` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % | Samples | Location                                                       |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------- |
| +200.0% |    +8 | 18.2% → 37.5% |  4 → 12 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:212` |
|  +50.0% |    +3 | 27.3% → 28.1% |   6 → 9 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:213` |
|  -66.7% |    -2 |  13.6% → 3.1% |   3 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:211` |
|  +20.0% |    +1 | 22.7% → 18.8% |   5 → 6 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

|  Change | Delta |             % | Samples | Location                  |
| ------: | ----: | ------------: | ------: | ------------------------- |
|  +87.5% |    +7 | 72.7% → 78.9% |  8 → 15 | `java.util.ArrayList:482` |
| +100.0% |    +2 | 18.2% → 21.1% |   2 → 4 | `java.util.ArrayList:484` |
| removed |    -1 |   9.1% → 0.0% |   1 → 0 | `java.util.ArrayList:483` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Location                 |
| ------: | ----: | ------------: | ------: | ------------------------ |
| +300.0% |    +6 |  9.1% → 27.6% |   2 → 8 | `java.util.HashMap:1197` |
|  +80.0% |    +4 | 22.7% → 31.0% |   5 → 9 | `java.util.HashMap:1207` |
|  -37.5% |    -3 | 36.4% → 17.2% |   8 → 5 | `java.util.HashMap:1204` |
|  -33.3% |    -2 | 27.3% → 13.8% |   6 → 4 | `java.util.HashMap:1213` |
|     new |    +1 |   0.0% → 3.4% |   0 → 1 | `java.util.HashMap:1219` |

##### `checkIndex(int, int)` (`java.util.Objects`)

|  Change | Delta |      % | Samples | Location                |
| ------: | ----: | -----: | ------: | ----------------------- |
| +150.0% |    +6 | 100.0% |  4 → 10 | `java.util.Objects:385` |

##### `hash(Object)` (`java.util.HashMap`)

|  Change | Delta |      % | Samples | Location                |
| ------: | ----: | -----: | ------: | ----------------------- |
| +300.0% |    +6 | 100.0% |   2 → 8 | `java.util.HashMap:338` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |             % | Samples | Location                                 |
| -----: | ----: | ------------: | ------: | ---------------------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `java.util.concurrent.ForkJoinPool:1829` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

| Change | Delta |            % | Samples | Location                |
| -----: | ----: | -----------: | ------: | ----------------------- |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `java.util.HashMap:634` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `java.util.HashMap:636` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `java.util.HashMap:649` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % | Samples | Location                                |
| -----: | ----: | ------------: | ------: | --------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `java.util.concurrent.ForkJoinTask:385` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|  Change | Delta |      % | Samples | Location                |
| ------: | ----: | -----: | ------: | ----------------------- |
| +100.0% |    +2 | 100.0% |   2 → 4 | `java.util.Arrays:3482` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

| Change | Delta |            % | Samples | Location                 |
| -----: | ----: | -----------: | ------: | ------------------------ |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `java.util.HashMap:1389` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `java.util.HashMap:1391` |

##### `elementData(int)` (`java.util.ArrayList`)

| Change | Delta |      % | Samples | Location                  |
| -----: | ----: | -----: | ------: | ------------------------- |
|  +5.3% |    +2 | 100.0% | 38 → 40 | `java.util.ArrayList:411` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change | Delta |             % | Samples | Location                                                   |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask:152` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |             % | Samples | Location                                       |
| -----: | ----: | ------------: | ------: | ---------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans:56` |

##### `forkThreshold()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % | Samples | Location                                                       |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:198` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |             % | Samples | Location                                                      |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:419` |

##### `grow()` (`java.util.ArrayList`)

|  Change | Delta |      % | Samples | Location                  |
| ------: | ----: | -----: | ------: | ------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `java.util.ArrayList:244` |

##### `size()` (`java.util.ArrayList`)

| Change | Delta |             % | Samples | Location                  |
| -----: | ----: | ------------: | ------: | ------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `java.util.ArrayList:253` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change | Delta |             % | Samples | Location                                 |
| -----: | ----: | ------------: | ------: | ---------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.concurrent.RecursiveTask:110` |

##### `get(int)` (`java.util.ArrayList`)

| Change | Delta |             % | Samples | Location                  |
| -----: | ----: | ------------: | ------: | ------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.ArrayList:427` |

##### `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`)

| Change | Delta |             % | Samples | Location                                 |
| -----: | ----: | ------------: | ------: | ---------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.stream.ReferencePipeline:616` |

##### `unpark(Thread)` (`java.util.concurrent.locks.LockSupport`)

| Change | Delta |             % | Samples | Location                                     |
| -----: | ----: | ------------: | ------: | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.concurrent.locks.LockSupport:177` |

##### `signalWaiters()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % | Samples | Location                                |
| -----: | ----: | ------------: | ------: | --------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.concurrent.ForkJoinTask:301` |

##### `signalWork()` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |             % | Samples | Location                                 |
| -----: | ----: | ------------: | ------: | ---------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.concurrent.ForkJoinPool:1695` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

| Change | Delta |             % | Samples | Location                            |
| -----: | ----: | ------------: | ------: | ----------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.zip.ZipFile$Source:1805` |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |             % |   Samples | Location                                                      |
| -----: | ----: | ------------: | --------: | ------------------------------------------------------------- |
| -44.4% |   -20 | 17.5% → 11.5% |   45 → 25 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:411` |
|  -9.0% |   -19 | 82.5% → 88.5% | 212 → 193 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:412` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % |   Samples | Location                                                       |
| -----: | ----: | ------------: | --------: | -------------------------------------------------------------- |
| -19.3% |   -17 | 41.7% → 38.2% |   88 → 71 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:249` |
|  -7.6% |    -9 | 56.4% → 59.1% | 119 → 110 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:248` |
| +25.0% |    +1 |   1.9% → 2.7% |     4 → 5 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:250` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % | Samples | Location                                                       |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------- |
|  -23.4% |   -11 | 51.1% → 49.3% | 47 → 36 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:231` |
|  -30.8% |    -4 | 14.1% → 12.3% |  13 → 9 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:229` |
|  -11.1% |    -3 | 29.3% → 32.9% | 27 → 24 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:230` |
| removed |    -1 |   1.1% → 0.0% |   1 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:223` |
|  -50.0% |    -1 |   2.2% → 1.4% |   2 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:225` |

##### `doubleValue()` (`java.lang.Double`)

| Change | Delta |      % | Samples | Location                |
| -----: | ----: | -----: | ------: | ----------------------- |
| -13.3% |    -4 | 100.0% | 30 → 26 | `java.lang.Double:1001` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |            % | Samples | Location                                 |
| ------: | ----: | -----------: | ------: | ---------------------------------------- |
| removed |    -2 | 25.0% → 0.0% |   2 → 0 | `java.util.concurrent.ForkJoinPool:2041` |
| removed |    -1 | 12.5% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinPool:2045` |
| removed |    -1 | 12.5% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinPool:2051` |
|     new |    +1 | 0.0% → 20.0% |   0 → 1 | `java.util.concurrent.ForkJoinPool:2047` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|  Change | Delta |            % | Samples | Location                 |
| ------: | ----: | -----------: | ------: | ------------------------ |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `java.util.HashMap:1427` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `java.util.HashMap:1429` |

##### `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |             % | Samples | Location                                       |
| ------: | ----: | ------------: | ------: | ---------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans:86` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |            % | Samples | Location                                |
| ------: | ----: | -----------: | ------: | --------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinTask:408` |

##### `copyOf(Object[], int, Class)` (`java.util.Arrays`)

|  Change | Delta |             % | Samples | Location                |
| ------: | ----: | ------------: | ------: | ----------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.Arrays:3514` |

##### `accept(Object)` (`java.util.stream.Nodes$FixedNodeBuilder`)

|  Change | Delta |             % | Samples | Location                                       |
| ------: | ----: | ------------: | ------: | ---------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.stream.Nodes$FixedNodeBuilder:1231` |

##### `countPositives(byte[], int, int)` (`java.lang.StringCoding`)

|  Change | Delta |             % | Samples | Location                    |
| ------: | ----: | ------------: | ------: | --------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.lang.StringCoding:52` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |             % | Samples | Location                                                      |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:432` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |             % | Samples | Location                                                      |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:367` |

##### `<init>(JavaKMeans, List, List, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % | Samples | Location                                                       |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:190` |

##### `<init>()` (`java.util.ArrayList`)

|  Change | Delta |             % | Samples | Location                  |
| ------: | ----: | ------------: | ------: | ------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.ArrayList:169` |

#### Callers

Callers with the largest change in contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

| Change | Delta |             % |       Samples | Caller                  | Location                 |
| -----: | ----: | ------------: | ------------: | ----------------------- | ------------------------ |
| +23.6% |  +217 | 35.7% → 37.5% |   919 → 1,136 | `Parker::park`          | `libjvm.dylib`           |
| +13.8% |  +194 | 54.6% → 52.9% | 1,406 → 1,600 | `PlatformMonitor::wait` | `libjvm.dylib`           |
| +15.1% |   +19 |   4.9% → 4.8% |     126 → 145 | `PlatformEvent::park`   | `libjvm.dylib`           |
| +15.1% |   +19 |   4.9% → 4.8% |     126 → 145 | `Profiler::timerLoop`   | `libasyncProfiler.dylib` |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

|  Change | Delta |           % |       Samples | Caller                           | Location       |
| ------: | ----: | ----------: | ------------: | -------------------------------- | -------------- |
|  +14.9% |  +178 |       89.0% | 1,193 → 1,371 | `WorkerThread::run`              | `libjvm.dylib` |
|  +15.1% |   +19 |        9.4% |     126 → 145 | `os::signal_wait`                | `libjvm.dylib` |
| +200.0% |    +4 | 0.1% → 0.4% |         2 → 6 | `WorkerThreads::run_task`        | `libjvm.dylib` |
|   -5.3% |    -1 | 1.4% → 1.2% |       19 → 18 | `GenericWaitBarrier::Cell::wait` | `libjvm.dylib` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |  Samples | Caller              | Location                                                  |
| -----: | ----: | -----: | -------: | ------------------- | --------------------------------------------------------- |
| +29.3% |   +27 | 100.0% | 92 → 119 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `mach_msg2_trap` (`libsystem_kernel.dylib`)

| Change | Delta |      % |   Samples | Caller               | Location                 |
| -----: | ----: | -----: | --------: | -------------------- | ------------------------ |
| +15.1% |   +19 | 100.0% | 126 → 145 | `mach_msg_overwrite` | `libsystem_kernel.dylib` |

##### `__ulock_wait` (`libsystem_kernel.dylib`)

| Change | Delta |      % |   Samples | Caller                    | Location       |
| -----: | ----: | -----: | --------: | ------------------------- | -------------- |
| +15.1% |   +19 | 100.0% | 126 → 145 | `CallJavaMainInNewThread` | `libjli.dylib` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % | Samples | Caller              | Location                                                   |
| -----: | ----: | -----: | ------: | ------------------- | ---------------------------------------------------------- |
| +45.5% |   +10 | 100.0% | 22 → 32 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `G1FullGCMarker::mark_object` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                                          | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------- | -------------- |
|    new |    +9 | 0.0% → 100.0% |   0 → 9 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` | `libjvm.dylib` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

| Change | Delta |      % | Samples | Caller        | Location              |
| -----: | ----: | -----: | ------: | ------------- | --------------------- |
| +72.7% |    +8 | 100.0% | 11 → 19 | `add(Object)` | `java.util.ArrayList` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Caller                   | Location                                                   |
| -----: | ----: | -----: | ------: | ------------------------ | ---------------------------------------------------------- |
| +31.8% |    +7 | 100.0% | 22 → 29 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `checkIndex(int, int)` (`java.util.Objects`)

|  Change | Delta |      % | Samples | Caller     | Location              |
| ------: | ----: | -----: | ------: | ---------- | --------------------- |
| +150.0% |    +6 | 100.0% |  4 → 10 | `get(int)` | `java.util.ArrayList` |

##### `hash(Object)` (`java.util.HashMap`)

|  Change | Delta |      % | Samples | Caller                              | Location            |
| ------: | ----: | -----: | ------: | ----------------------------------- | ------------------- |
| +300.0% |    +6 | 100.0% |   2 → 8 | `computeIfAbsent(Object, Function)` | `java.util.HashMap` |

##### `zero_blocks` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                              | Location              |
| ------: | ----: | ------------: | ------: | ----------------------------------- | --------------------- |
|  +28.6% |    +2 | 77.8% → 69.2% |   7 → 9 | `merge(Object, Object, BiFunction)` | `java.util.HashMap`   |
| +100.0% |    +2 | 22.2% → 30.8% |   2 → 4 | `grow(int)`                         | `java.util.ArrayList` |

##### `pthread_jit_write_protect_np` (`libsystem_pthread.dylib`)

|  Change | Delta |              % | Samples | Caller            | Location       |
| ------: | ----: | -------------: | ------: | ----------------- | -------------- |
| +200.0% |    +2 | 100.0% → 60.0% |   1 → 3 | `Unsafe_Park`     | `libjvm.dylib` |
|     new |    +1 |   0.0% → 20.0% |   0 → 1 | `Unsafe_Unpark`   | `libjvm.dylib` |
|     new |    +1 |   0.0% → 20.0% |   0 → 1 | `_new_array_Java` | `<unknown>`    |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |             % | Samples | Caller                              | Location                            |
| -----: | ----: | ------------: | ------: | ----------------------------------- | ----------------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `__psynch_cvsignal` (`libsystem_kernel.dylib`)

| Change | Delta |      % | Samples | Caller          | Location       |
| -----: | ----: | -----: | ------: | --------------- | -------------- |
| +23.1% |    +3 | 100.0% | 13 → 16 | `Unsafe_Unpark` | `libjvm.dylib` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

| Change | Delta |             % | Samples | Caller                        | Location            |
| -----: | ----: | ------------: | ------: | ----------------------------- | ------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % | Samples | Caller                                               | Location                                      |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------- | --------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change | Delta |              % | Samples | Caller      | Location              |
| -----: | ----: | -------------: | ------: | ----------- | --------------------- |
|    new |    +3 |   0.0% → 75.0% |   0 → 3 | `grow(int)` | `java.util.ArrayList` |
| -50.0% |    -1 | 100.0% → 25.0% |   2 → 1 | `toArray()` | `java.util.ArrayList` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

| Change | Delta |             % | Samples | Caller                              | Location                                    |
| -----: | ----: | ------------: | ------: | ----------------------------------- | ------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `elementData(int)` (`java.util.ArrayList`)

| Change | Delta |      % | Samples | Caller     | Location              |
| -----: | ----: | -----: | ------: | ---------- | --------------------- |
|  +5.3% |    +2 | 100.0% | 38 → 40 | `get(int)` | `java.util.ArrayList` |

##### `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                                  | Location       |
| -----: | ----: | -----------: | ------: | --------------------------------------- | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `G1FullGCMarker::complete_marking`      | `libjvm.dylib` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `G1FullGCMarker::follow_marking_stacks` | `libjvm.dylib` |

##### `__semwait_signal` (`libsystem_kernel.dylib`)

| Change | Delta |             % | Samples | Caller                      | Location       |
| -----: | ----: | ------------: | ------: | --------------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `os::naked_short_nanosleep` | `libjvm.dylib` |

##### `_platform_bzero` (`libsystem_platform.dylib`)

| Change | Delta |      % | Samples | Caller                   | Location       |
| -----: | ----: | -----: | ------: | ------------------------ | -------------- |
| +25.0% |    +1 | 100.0% |   4 → 5 | `MemAllocator::allocate` | `libjvm.dylib` |

##### `InstanceKlass::allocate_objArray` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                     | Location       |
| -----: | ----: | ------------: | ------: | -------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `OptoRuntime::new_array_C` | `libjvm.dylib` |

##### `write` (`libsystem_kernel.dylib`)

| Change | Delta |            % | Samples | Caller                  | Location                 |
| -----: | ----: | -----------: | ------: | ----------------------- | ------------------------ |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `Profiler::runInternal` | `libasyncProfiler.dylib` |

##### `JavaFrameAnchor::make_walkable` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller           | Location                   |
| -----: | ----: | ------------: | ------: | ---------------- | -------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `unpark(Object)` | `jdk.internal.misc.Unsafe` |

##### `pthread_mutex_unlock` (`libsystem_pthread.dylib`)

| Change | Delta |             % | Samples | Caller         | Location       |
| -----: | ----: | ------------: | ------: | -------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `Parker::park` | `libjvm.dylib` |

##### `Method::is_initializer` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                             | Location       |
| -----: | ----: | ------------: | ------: | ---------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `klassItable::compute_itable_size` | `libjvm.dylib` |

##### `GenerateOopMap::merge_state` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                            | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `GenerateOopMap::jump_targets_do` | `libjvm.dylib` |

##### `nmethod::post_compiled_method` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                   | Location       |
| -----: | ----: | ------------: | ------: | ------------------------ | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `ciEnv::register_method` | `libjvm.dylib` |

##### `NullCheckEliminator::iterate_one` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                             | Location       |
| -----: | ----: | ------------: | ------: | ---------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `Optimizer::eliminate_null_checks` | `libjvm.dylib` |

##### `UTF8::is_legal_utf8` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                         | Location       |
| -----: | ----: | ------------: | ------: | ---------------------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `ClassFileParser::parse_constant_pool_entries` | `libjvm.dylib` |

##### `_pthread_cond_wait` (`libsystem_pthread.dylib`)

| Change | Delta |             % | Samples | Caller         | Location       |
| -----: | ----: | ------------: | ------: | -------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `Parker::park` | `libjvm.dylib` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change | Delta |             % | Samples | Caller   | Location                             |
| -----: | ----: | ------------: | ------: | -------- | ------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |             % | Samples | Caller   | Location                                                               |
| -----: | ----: | ------------: | ------: | -------- | ---------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a2bd0` |

##### `forkThreshold()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % | Samples | Caller      | Location                                               |
| -----: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |             % | Samples | Caller      | Location                                               |
| -----: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `grow()` (`java.util.ArrayList`)

|  Change | Delta |      % | Samples | Caller                       | Location              |
| ------: | ----: | -----: | ------: | ---------------------------- | --------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `add(Object, Object[], int)` | `java.util.ArrayList` |

##### `size()` (`java.util.ArrayList`)

| Change | Delta |             % | Samples | Caller                  | Location                                                   |
| -----: | ----: | ------------: | ------: | ----------------------- | ---------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `findNearestCentroid()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change | Delta |             % | Samples | Caller     | Location                            |
| -----: | ----: | ------------: | ------: | ---------- | ----------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `get(int)` (`java.util.ArrayList`)

| Change | Delta |             % | Samples | Caller                   | Location                                                   |
| -----: | ----: | ------------: | ------: | ------------------------ | ---------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

| Change | Delta |             % | Samples | Caller   | Location                                 |
| -----: | ----: | ------------: | ------: | -------- | ---------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `park()` | `java.util.concurrent.locks.LockSupport` |

##### `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`)

| Change | Delta |             % | Samples | Caller                                           | Location                                    |
| -----: | ----: | ------------: | ------: | ------------------------------------------------ | ------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `lambda$generateData$5(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `unpark(Thread)` (`java.util.concurrent.locks.LockSupport`)

| Change | Delta |             % | Samples | Caller                         | Location                            |
| -----: | ----: | ------------: | ------: | ------------------------------ | ----------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `tryCompensate(long, boolean)` | `java.util.concurrent.ForkJoinPool` |

##### `signalWaiters()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % | Samples | Caller      | Location                            |
| -----: | ----: | ------------: | ------: | ----------- | ----------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `setDone()` | `java.util.concurrent.ForkJoinTask` |

##### `signalWork()` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |             % | Samples | Caller                                   | Location                            |
| -----: | ----: | ------------: | ------: | ---------------------------------------- | ----------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

| Change | Delta |             % | Samples | Caller                                          | Location                       |
| -----: | ----: | ------------: | ------: | ----------------------------------------------- | ------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |   Samples | Caller        | Location                                                  |
| -----: | ----: | -----: | --------: | ------------- | --------------------------------------------------------- |
| -15.2% |   -39 | 100.0% | 257 → 218 | `vectorSum()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller                  | Location                                                   |
| -----: | ----: | -----: | --------: | ----------------------- | ---------------------------------------------------------- |
| -11.8% |   -25 | 100.0% | 211 → 186 | `findNearestCentroid()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % | Samples | Caller              | Location                                                   |
| -----: | ----: | -----: | ------: | ------------------- | ---------------------------------------------------------- |
| -20.7% |   -19 | 100.0% | 92 → 73 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `doubleValue()` (`java.lang.Double`)

| Change | Delta |             % | Samples | Caller                           | Location                                                   |
| -----: | ----: | ------------: | ------: | -------------------------------- | ---------------------------------------------------------- |
|  -7.7% |    -2 | 86.7% → 92.3% | 26 → 24 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| -50.0% |    -2 |  13.3% → 7.7% |   4 → 2 | `distance(Double[], Double[])`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % | Samples | Caller                 | Location                            |
| -----: | ----: | -----: | ------: | ---------------------- | ----------------------------------- |
| -37.5% |    -3 | 100.0% |   8 → 5 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Caller            | Location                                    |
| ------: | ----: | ------------: | ------: | ----------------- | ------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `forward_copy_longs` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                           | Location    |
| -----: | ----: | ------------: | ------: | -------------------------------- | ----------- |
| -22.2% |    -2 | 18.8% → 15.2% |   9 → 7 | `arrayof_oop_disjoint_arraycopy` | `<unknown>` |

##### `Parker::park` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller        | Location       |
| ------: | ----: | ------------: | ------: | ------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `Unsafe_Park` | `libjvm.dylib` |

##### `thread_self_trap` (`libsystem_kernel.dylib`)

|  Change | Delta |             % | Samples | Caller                        | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `SafepointSynchronize::block` | `libjvm.dylib` |

##### `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |             % | Samples | Caller       | Location                                                               |
| ------: | ----: | ------------: | ------: | ------------ | ---------------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000301125b10` |

##### `__mmap` (`libsystem_kernel.dylib`)

|  Change | Delta |             % | Samples | Caller                   | Location       |
| ------: | ----: | ------------: | ------: | ------------------------ | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `os::pd_uncommit_memory` | `libjvm.dylib` |

##### `__psynch_mutexdrop` (`libsystem_kernel.dylib`)

|  Change | Delta |             % | Samples | Caller                                | Location                  |
| ------: | ----: | ------------: | ------: | ------------------------------------- | ------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `_pthread_mutex_firstfit_unlock_slow` | `libsystem_pthread.dylib` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |      % | Samples | Caller   | Location                            |
| -----: | ----: | -----: | ------: | -------- | ----------------------------------- |
| -50.0% |    -1 | 100.0% |   2 → 1 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `copyOf(Object[], int, Class)` (`java.util.Arrays`)

|  Change | Delta |             % | Samples | Caller                  | Location           |
| ------: | ----: | ------------: | ------: | ----------------------- | ------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `accept(Object)` (`java.util.stream.Nodes$FixedNodeBuilder`)

|  Change | Delta |             % | Samples | Caller        | Location                           |
| ------: | ----: | ------------: | ------: | ------------- | ---------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `accept(int)` | `java.util.stream.IntPipeline$1$1` |

##### `compareAndSetInt(Object, long, int, int)` (`jdk.internal.misc.Unsafe`)

|  Change | Delta |             % | Samples | Caller                                                         | Location                                 |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------- | ---------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])` | `java.util.concurrent.ConcurrentHashMap` |

##### `countPositives(byte[], int, int)` (`java.lang.StringCoding`)

|  Change | Delta |             % | Samples | Caller                             | Location             |
| ------: | ----: | ------------: | ------: | ---------------------------------- | -------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `countPositives(byte[], int, int)` | `java.lang.System$2` |

##### `klassVtable::get_mirandas` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                              | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `klassVtable::compute_vtable_size_and_num_mirandas` | `libjvm.dylib` |

##### `ClassFileParser::parse_interfaces` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                          | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `ClassFileParser::parse_stream` | `libjvm.dylib` |

##### `os::javaTimeNanos` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller              | Location                                    |
| ------: | ----: | ------------: | ------: | ------------------- | ------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `getVmStartNanos()` | `org.renaissance.harness.RenaissanceSuite$` |

##### `SignatureStream::next` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                                    | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `void SignatureIterator::do_parameters_on<Fingerprinter>` | `libjvm.dylib` |

##### `G1CollectedHeap::used_unlocked` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                  | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `G1MonitoringSupport::update_eden_size` | `libjvm.dylib` |

##### `G1BarrierSet::write_ref_array_work` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller               | Location              |
| ------: | ----: | ------------: | ------: | -------------------- | --------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `addAll(Collection)` | `java.util.ArrayList` |

##### `void HeapRegion::apply_to_marked_objects<G1FullGCPrepareTask::G1PrepareCompactLiveClosure>` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                      | Location       |
| ------: | ----: | ------------: | ------: | --------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `G1FullGCPrepareTask::work` | `libjvm.dylib` |

##### `WatcherThread::sleep` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller               | Location       |
| ------: | ----: | ------------: | ------: | -------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `WatcherThread::run` | `libjvm.dylib` |

##### `tlv_get_addr` (`libdyld.dylib`)

|  Change | Delta |             % | Samples | Caller                           | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `ResourceBitMap::ResourceBitMap` | `libjvm.dylib` |

##### `_pthread_mutex_firstfit_unlock_slow` (`libsystem_pthread.dylib`)

|  Change | Delta |             % | Samples | Caller                              | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `TaskTerminator::offer_termination` | `libjvm.dylib` |

##### `bsearch` (`libsystem_c.dylib`)

|  Change | Delta |             % | Samples | Caller                           | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `encoding_for_logical_immediate` | `libjvm.dylib` |

##### `MemAllocator::Allocation::check_out_of_memory` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                   | Location       |
| ------: | ----: | ------------: | ------: | ------------------------ | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `MemAllocator::allocate` | `libjvm.dylib` |

##### `G1DirtyCardQueueSet::num_par_ids` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                       | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `G1RemSetTrackingPolicy::update_at_allocate` | `libjvm.dylib` |

##### `ThreadLocalAllocBuffer::print_stats` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                        | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `MemAllocator::mem_allocate_inside_tlab_slow` | `libjvm.dylib` |

##### `InvocationCounter::set_carry_on_overflow` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                       | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `Runtime1::counter_overflow` | `libjvm.dylib` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |             % | Samples | Caller                               | Location                                                  |
| ------: | ----: | ------------: | ------: | ------------------------------------ | --------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |             % | Samples | Caller      | Location                                               |
| ------: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `<init>(JavaKMeans, List, List, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % | Samples | Caller                    | Location                                                   |
| ------: | ----: | ------------: | ------: | ------------------------- | ---------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `createSubtask(int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `<init>()` (`java.util.ArrayList`)

|  Change | Delta |             % | Samples | Caller                               | Location                                                   |
| ------: | ----: | ------------: | ------: | ------------------------------------ | ---------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

| Change | Delta |             % |       Samples | Function                                                                                                               | Location                                    |
| -----: | ----: | ------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| +17.4% |  +449 | 50.4% → 52.1% | 2,577 → 3,026 | `__psynch_cvwait`                                                                                                      | `libsystem_kernel.dylib`                    |
| +15.0% |  +431 | 56.1% → 56.8% | 2,869 → 3,300 | `_pthread_start`                                                                                                       | `libsystem_pthread.dylib`                   |
| +15.0% |  +431 | 56.1% → 56.8% | 2,869 → 3,300 | `thread_start`                                                                                                         | `libsystem_pthread.dylib`                   |
| +15.0% |  +412 | 53.7% → 54.3% | 2,742 → 3,154 | `Thread::call_run`                                                                                                     | `libjvm.dylib`                              |
| +15.0% |  +412 | 53.7% → 54.3% | 2,742 → 3,154 | `thread_native_entry`                                                                                                  | `libjvm.dylib`                              |
| +24.2% |  +223 | 18.0% → 19.7% |   922 → 1,145 | `park(boolean, long)`                                                                                                  | `jdk.internal.misc.Unsafe`                  |
| +24.1% |  +222 | 18.0% → 19.7% |   922 → 1,144 | `Unsafe_Park`                                                                                                          | `libjvm.dylib`                              |
| +23.9% |  +220 | 18.0% → 19.6% |   921 → 1,141 | `Parker::park`                                                                                                         | `libjvm.dylib`                              |
| +26.0% |  +202 | 15.2% → 16.8% |     777 → 979 | `park()`                                                                                                               | `java.util.concurrent.locks.LockSupport`    |
| +14.9% |  +200 | 26.2% → 26.5% | 1,340 → 1,540 | `semaphore_wait_trap`                                                                                                  | `libsystem_kernel.dylib`                    |
| +14.0% |  +197 | 27.5% → 27.6% | 1,406 → 1,603 | `PlatformMonitor::wait`                                                                                                | `libjvm.dylib`                              |
| +15.8% |  +190 | 23.5% → 23.9% | 1,200 → 1,390 | `WorkerThread::run`                                                                                                    | `libjvm.dylib`                              |
| +10.8% |  +175 | 31.6% → 30.8% | 1,613 → 1,788 | `runWorker(ForkJoinPool$WorkQueue)`                                                                                    | `java.util.concurrent.ForkJoinPool`         |
| +10.8% |  +175 | 31.6% → 30.8% | 1,613 → 1,788 | `run()`                                                                                                                | `java.util.concurrent.ForkJoinWorkerThread` |
| +15.4% |  +154 | 19.6% → 19.9% | 1,000 → 1,154 | `Monitor::wait_without_safepoint_check`                                                                                | `libjvm.dylib`                              |
|    new |  +139 |   0.0% → 2.4% |       0 → 139 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |
|    new |  +131 |   0.0% → 2.3% |       0 → 131 | `$anonfun$2(int)`                                                                                                      | `org.renaissance.jdk.concurrent.FjKmeans`   |
| +13.9% |  +127 | 17.8% → 17.9% |   912 → 1,039 | `JavaThread::thread_main_inner`                                                                                        | `libjvm.dylib`                              |
|  +9.2% |  +116 | 24.6% → 23.6% | 1,257 → 1,373 | `awaitDone(int, long)`                                                                                                 | `java.util.concurrent.ForkJoinTask`         |
|  +9.4% |  +111 | 23.1% → 22.2% | 1,182 → 1,293 | `scan(ForkJoinPool$WorkQueue, int, int)`                                                                               | `java.util.concurrent.ForkJoinPool`         |

##### Native

| Change | Delta |             % |       Samples | Function                                                      | Location                  |
| -----: | ----: | ------------: | ------------: | ------------------------------------------------------------- | ------------------------- |
| +17.4% |  +449 | 50.4% → 52.1% | 2,577 → 3,026 | `__psynch_cvwait`                                             | `libsystem_kernel.dylib`  |
| +15.0% |  +431 | 56.1% → 56.8% | 2,869 → 3,300 | `_pthread_start`                                              | `libsystem_pthread.dylib` |
| +15.0% |  +431 | 56.1% → 56.8% | 2,869 → 3,300 | `thread_start`                                                | `libsystem_pthread.dylib` |
| +15.0% |  +412 | 53.7% → 54.3% | 2,742 → 3,154 | `Thread::call_run`                                            | `libjvm.dylib`            |
| +15.0% |  +412 | 53.7% → 54.3% | 2,742 → 3,154 | `thread_native_entry`                                         | `libjvm.dylib`            |
| +24.1% |  +222 | 18.0% → 19.7% |   922 → 1,144 | `Unsafe_Park`                                                 | `libjvm.dylib`            |
| +23.9% |  +220 | 18.0% → 19.6% |   921 → 1,141 | `Parker::park`                                                | `libjvm.dylib`            |
| +14.9% |  +200 | 26.2% → 26.5% | 1,340 → 1,540 | `semaphore_wait_trap`                                         | `libsystem_kernel.dylib`  |
| +14.0% |  +197 | 27.5% → 27.6% | 1,406 → 1,603 | `PlatformMonitor::wait`                                       | `libjvm.dylib`            |
| +15.8% |  +190 | 23.5% → 23.9% | 1,200 → 1,390 | `WorkerThread::run`                                           | `libjvm.dylib`            |
| +15.4% |  +154 | 19.6% → 19.9% | 1,000 → 1,154 | `Monitor::wait_without_safepoint_check`                       | `libjvm.dylib`            |
| +13.9% |  +127 | 17.8% → 17.9% |   912 → 1,039 | `JavaThread::thread_main_inner`                               | `libjvm.dylib`            |
| +15.1% |   +57 |   7.4% → 7.5% |     378 → 435 | `ConcurrentGCThread::run`                                     | `libjvm.dylib`            |
| +10.8% |   +44 |   7.9% → 7.7% |     406 → 450 | `Monitor::wait`                                               | `libjvm.dylib`            |
| +15.1% |   +38 |   4.9% → 5.0% |     252 → 290 | `JLI_Launch`                                                  | `libjli.dylib`            |
| +15.1% |   +38 |   4.9% → 5.0% |     252 → 290 | `main`                                                        | `java`                    |
| +18.0% |   +22 |   2.4% → 2.5% |     122 → 144 | `G1ServiceThread::wait_for_task`                              | `libjvm.dylib`            |
| +16.0% |   +20 |   2.4% → 2.5% |     125 → 145 | `G1PrimaryConcurrentRefineThread::wait_for_completed_buffers` | `libjvm.dylib`            |
| +15.1% |   +19 |          2.5% |     126 → 145 | `mach_msg2_trap`                                              | `libsystem_kernel.dylib`  |
| +15.1% |   +19 |          2.5% |     126 → 145 | `mach_msg_overwrite`                                          | `libsystem_kernel.dylib`  |

##### Ours

| Change | Delta |             % |       Samples | Function                                                                                                               | Location                                                               |
| -----: | ----: | ------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|    new |  +139 |   0.0% → 2.4% |       0 → 139 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|    new |  +131 |   0.0% → 2.3% |       0 → 131 | `$anonfun$2(int)`                                                                                                      | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  +8.1% |   +96 | 23.1% → 21.9% | 1,179 → 1,275 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| +47.2% |   +42 |   1.7% → 2.3% |      89 → 131 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| +15.2% |   +19 |   2.4% → 2.5% |     125 → 144 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                        |
| +15.2% |   +19 |   2.4% → 2.5% |     125 → 144 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                        |
| +15.3% |   +19 |   2.4% → 2.5% |     124 → 143 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
| +15.3% |   +19 |   2.4% → 2.5% |     124 → 143 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                        |
| +15.4% |   +19 |          2.4% |     123 → 142 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
| +15.8% |   +19 |   2.3% → 2.4% |     120 → 139 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000780111ede0` |
| +16.0% |   +19 |   2.3% → 2.4% |     119 → 138 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
| +14.9% |   +18 |          2.4% |     121 → 139 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |
| +15.4% |   +18 |          2.3% |     117 → 135 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                              |
| +15.9% |   +18 |   2.2% → 2.3% |     113 → 131 | `run(int, List, int)`                                                                                                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| +15.9% |   +18 |   2.2% → 2.3% |     113 → 131 | `$anonfun$adapted$1(Object)`                                                                                           | `org.renaissance.jdk.concurrent.FjKmeans`                              |
| +15.9% |   +18 |   2.2% → 2.3% |     113 → 131 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000078011a27f0`   |
| +14.9% |   +17 |   2.2% → 2.3% |     114 → 131 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| +14.9% |   +17 |   2.2% → 2.3% |     114 → 131 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a2bd0` |
| +14.9% |   +17 |   2.2% → 2.3% |     114 → 131 | `run(BenchmarkContext)`                                                                                                | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  +4.6% |    +9 |   3.9% → 3.5% |     197 → 206 | `average(List)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |

##### Standard library

| Change | Delta |             % |       Samples | Function                                                  | Location                                             |
| -----: | ----: | ------------: | ------------: | --------------------------------------------------------- | ---------------------------------------------------- |
| +24.2% |  +223 | 18.0% → 19.7% |   922 → 1,145 | `park(boolean, long)`                                     | `jdk.internal.misc.Unsafe`                           |
| +26.0% |  +202 | 15.2% → 16.8% |     777 → 979 | `park()`                                                  | `java.util.concurrent.locks.LockSupport`             |
| +10.8% |  +175 | 31.6% → 30.8% | 1,613 → 1,788 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                  |
| +10.8% |  +175 | 31.6% → 30.8% | 1,613 → 1,788 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`          |
|  +9.2% |  +116 | 24.6% → 23.6% | 1,257 → 1,373 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                  |
|  +9.4% |  +111 | 23.1% → 22.2% | 1,182 → 1,293 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`                  |
|  +9.1% |  +108 | 23.1% → 22.2% | 1,181 → 1,289 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                  |
|  +9.1% |  +108 | 23.1% → 22.2% | 1,181 → 1,289 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|  +8.6% |   +98 | 22.4% → 21.4% | 1,144 → 1,242 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                  |
|  +8.1% |   +96 | 23.1% → 21.9% | 1,179 → 1,275 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                 |
| +33.1% |   +87 |   5.1% → 6.0% |     263 → 350 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                  |
| +14.6% |   +63 |   8.4% → 8.5% |     431 → 494 | `awaitWork(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                  |
|  +5.2% |   +53 | 19.8% → 18.3% | 1,010 → 1,063 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
| +11.9% |   +32 |          5.2% |     268 → 300 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`                  |
| +15.3% |   +19 |   2.4% → 2.5% |     124 → 143 | `invokeStatic(Object, Object)`                            | `java.lang.invoke.LambdaForm$DMH.0x0000007801004800` |
| +15.3% |   +19 |   2.4% → 2.5% |     124 → 143 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x0000007801009800`  |
| +15.3% |   +19 |   2.4% → 2.5% |     124 → 143 | `invokeExact_MT(Object, Object, Object, Object)`          | `java.lang.invoke.Invokers$Holder`                   |
| +15.3% |   +19 |   2.4% → 2.5% |     124 → 143 | `invokeImpl(Object, Object[])`                            | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
| +15.3% |   +19 |   2.4% → 2.5% |     124 → 143 | `invoke(Object, Object[])`                                | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
| +15.3% |   +19 |   2.4% → 2.5% |     124 → 143 | `invoke(Object, Object[])`                                | `java.lang.reflect.Method`                           |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |            % |   Samples | Function                                                                                                               | Location                                                   |
| ------: | ----: | -----------: | --------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| removed |  -120 |  2.3% → 0.0% |   120 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                |
| removed |  -113 |  2.2% → 0.0% |   113 → 0 | `$anonfun$1(int)`                                                                                                      | `org.renaissance.jdk.concurrent.FjKmeans`                  |
|  -15.7% |   -52 |  6.5% → 4.8% | 331 → 279 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -14.5% |   -41 |  5.5% → 4.2% | 283 → 242 | `accumulate(Double[], double[])`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -15.5% |   -35 |  4.4% → 3.3% | 226 → 191 | `distance(Double[], Double[])`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -2.4% |   -10 |  8.2% → 7.1% | 420 → 410 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -2.3% |    -9 |  7.7% → 6.7% | 396 → 387 | `vectorSum()`                                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   -2.3% |    -9 |  7.7% → 6.7% | 396 → 387 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -80.0% |    -8 | 0.2% → <0.1% |    10 → 2 | `G1CollectedHeap::attempt_allocation_slow`                                                                             | `libjvm.dylib`                                             |
|  -33.3% |    -7 |  0.4% → 0.2% |   21 → 14 | `ThreadSafepointState::handle_polling_page_exception`                                                                  | `libjvm.dylib`                                             |
|  -33.3% |    -7 |  0.4% → 0.2% |   21 → 14 | `SafepointSynchronize::handle_polling_page_exception`                                                                  | `libjvm.dylib`                                             |
|  -33.3% |    -7 |  0.4% → 0.2% |   21 → 14 | `SafepointBlob`                                                                                                        | `<unknown>`                                                |
|  -38.9% |    -7 |  0.4% → 0.2% |   18 → 11 | `MemAllocator::allocate`                                                                                               | `libjvm.dylib`                                             |
|  -87.5% |    -7 | 0.2% → <0.1% |     8 → 1 | `G1CollectedHeap::mem_allocate`                                                                                        | `libjvm.dylib`                                             |
|   -7.7% |    -6 |  1.5% → 1.2% |   78 → 72 | `forEach(BiConsumer)`                                                                                                  | `java.util.HashMap`                                        |
|  -35.3% |    -6 |  0.3% → 0.2% |   17 → 11 | `CollectedHeap::array_allocate`                                                                                        | `libjvm.dylib`                                             |
|  -35.3% |    -6 |  0.3% → 0.2% |   17 → 11 | `InstanceKlass::allocate_objArray`                                                                                     | `libjvm.dylib`                                             |
|  -29.4% |    -5 |  0.3% → 0.2% |   17 → 12 | `OptoRuntime::new_array_C`                                                                                             | `libjvm.dylib`                                             |
|  -55.6% |    -5 |  0.2% → 0.1% |     9 → 4 | `VMThread::wait_until_executed`                                                                                        | `libjvm.dylib`                                             |
|  -55.6% |    -5 |  0.2% → 0.1% |     9 → 4 | `VMThread::execute`                                                                                                    | `libjvm.dylib`                                             |

##### Native

|  Change | Delta |            % | Samples | Function                                              | Location                  |
| ------: | ----: | -----------: | ------: | ----------------------------------------------------- | ------------------------- |
|  -80.0% |    -8 | 0.2% → <0.1% |  10 → 2 | `G1CollectedHeap::attempt_allocation_slow`            | `libjvm.dylib`            |
|  -33.3% |    -7 |  0.4% → 0.2% | 21 → 14 | `ThreadSafepointState::handle_polling_page_exception` | `libjvm.dylib`            |
|  -33.3% |    -7 |  0.4% → 0.2% | 21 → 14 | `SafepointSynchronize::handle_polling_page_exception` | `libjvm.dylib`            |
|  -33.3% |    -7 |  0.4% → 0.2% | 21 → 14 | `SafepointBlob`                                       | `<unknown>`               |
|  -38.9% |    -7 |  0.4% → 0.2% | 18 → 11 | `MemAllocator::allocate`                              | `libjvm.dylib`            |
|  -87.5% |    -7 | 0.2% → <0.1% |   8 → 1 | `G1CollectedHeap::mem_allocate`                       | `libjvm.dylib`            |
|  -35.3% |    -6 |  0.3% → 0.2% | 17 → 11 | `CollectedHeap::array_allocate`                       | `libjvm.dylib`            |
|  -35.3% |    -6 |  0.3% → 0.2% | 17 → 11 | `InstanceKlass::allocate_objArray`                    | `libjvm.dylib`            |
|  -29.4% |    -5 |  0.3% → 0.2% | 17 → 12 | `OptoRuntime::new_array_C`                            | `libjvm.dylib`            |
|  -55.6% |    -5 |  0.2% → 0.1% |   9 → 4 | `VMThread::wait_until_executed`                       | `libjvm.dylib`            |
|  -55.6% |    -5 |  0.2% → 0.1% |   9 → 4 | `VMThread::execute`                                   | `libjvm.dylib`            |
| removed |    -5 |  0.1% → 0.0% |   5 → 0 | `Mutex::lock_without_safepoint_check`                 | `libjvm.dylib`            |
|  -23.5% |    -4 |  0.3% → 0.2% | 17 → 13 | `_new_array_Java`                                     | `<unknown>`               |
|  -14.3% |    -3 |  0.4% → 0.3% | 21 → 18 | `SafepointSynchronize::block`                         | `libjvm.dylib`            |
|  -14.3% |    -3 |  0.4% → 0.3% | 21 → 18 | `SafepointMechanism::process`                         | `libjvm.dylib`            |
|  -75.0% |    -3 | 0.1% → <0.1% |   4 → 1 | `G1ServiceThread::run_task`                           | `libjvm.dylib`            |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `_pthread_mutex_firstfit_unlock_slow`                 | `libsystem_pthread.dylib` |
|   -4.2% |    -2 |  0.9% → 0.8% | 48 → 46 | `forward_copy_longs`                                  | `<unknown>`               |
|  -22.2% |    -2 |  0.2% → 0.1% |   9 → 7 | `arrayof_oop_disjoint_arraycopy`                      | `<unknown>`               |
|  -66.7% |    -2 | 0.1% → <0.1% |   3 → 1 | `MemAllocator::mem_allocate_inside_tlab_slow`         | `libjvm.dylib`            |

##### Ours

|  Change | Delta |            % |   Samples | Function                                                                                                               | Location                                                               |
| ------: | ----: | -----------: | --------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| removed |  -120 |  2.3% → 0.0% |   120 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
| removed |  -113 |  2.2% → 0.0% |   113 → 0 | `$anonfun$1(int)`                                                                                                      | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  -15.7% |   -52 |  6.5% → 4.8% | 331 → 279 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -14.5% |   -41 |  5.5% → 4.2% | 283 → 242 | `accumulate(Double[], double[])`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -15.5% |   -35 |  4.4% → 3.3% | 226 → 191 | `distance(Double[], Double[])`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -2.4% |   -10 |  8.2% → 7.1% | 420 → 410 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -2.3% |    -9 |  7.7% → 6.7% | 396 → 387 | `vectorSum()`                                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   -2.3% |    -9 |  7.7% → 6.7% | 396 → 387 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   -7.1% |    -4 |  1.1% → 0.9% |   56 → 52 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -7.1% |    -4 |  1.1% → 0.9% |   56 → 52 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a7248` |
|   -5.3% |    -4 |  1.5% → 1.2% |   76 → 72 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -5.3% |    -4 |  1.5% → 1.2% |   76 → 72 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a7000` |
|   -3.8% |    -3 |  1.5% → 1.3% |   78 → 75 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -3.8% |    -3 |  1.5% → 1.3% |   78 → 75 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -3.8% |    -3 |  1.5% → 1.3% |   78 → 75 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `lambda$generateData$3(int, int, Random[], int)`                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000003011258d8` |
|  -50.0% |    -1 |        <0.1% |     2 → 1 | `boxed(double[])`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `<init>()`                                                                                                             | `org.renaissance.harness.Config`                                       |

##### Standard library

|  Change | Delta |            % | Samples | Function                                      | Location                                       |
| ------: | ----: | -----------: | ------: | --------------------------------------------- | ---------------------------------------------- |
|   -7.7% |    -6 |  1.5% → 1.2% | 78 → 72 | `forEach(BiConsumer)`                         | `java.util.HashMap`                            |
| removed |    -4 |  0.1% → 0.0% |   4 → 0 | `evaluate(Spliterator, boolean, IntFunction)` | `java.util.stream.AbstractPipeline`            |
| removed |    -4 |  0.1% → 0.0% |   4 → 0 | `evaluateToArrayNode(IntFunction)`            | `java.util.stream.AbstractPipeline`            |
|  -13.3% |    -4 |  0.6% → 0.4% | 30 → 26 | `doubleValue()`                               | `java.lang.Double`                             |
|   -7.3% |    -3 |  0.8% → 0.7% | 41 → 38 | `toArray()`                                   | `java.util.ArrayList`                          |
|  -13.6% |    -3 |  0.4% → 0.3% | 22 → 19 | `<init>(Collection)`                          | `java.util.ArrayList`                          |
|  -75.0% |    -3 | 0.1% → <0.1% |   4 → 1 | `toArray(IntFunction)`                        | `java.util.stream.ReferencePipeline`           |
|   -2.7% |    -2 |  1.4% → 1.2% | 74 → 72 | `merge(Object, Object, BiFunction)`           | `java.util.HashMap`                            |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `copyOf(Object[], int, Class)`                | `java.util.Arrays`                             |
|   -2.0% |    -1 |  1.0% → 0.8% | 49 → 48 | `copyOf(Object[], int)`                       | `java.util.Arrays`                             |
|  -50.0% |    -1 |        <0.1% |   2 → 1 | `fork()`                                      | `java.util.concurrent.ForkJoinTask`            |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `accept(Object)`                              | `java.util.stream.Nodes$FixedNodeBuilder`      |
|  -33.3% |    -1 | 0.1% → <0.1% |   3 → 2 | `accept(int)`                                 | `java.util.stream.IntPipeline$1$1`             |
|  -33.3% |    -1 | 0.1% → <0.1% |   3 → 2 | `forEachRemaining(IntConsumer)`               | `java.util.stream.Streams$RangeIntSpliterator` |
|  -33.3% |    -1 | 0.1% → <0.1% |   3 → 2 | `forEachRemaining(Consumer)`                  | `java.util.Spliterator$OfInt`                  |
|  -25.0% |    -1 |         0.1% |   4 → 3 | `copyInto(Sink, Spliterator)`                 | `java.util.stream.AbstractPipeline`            |
|  -25.0% |    -1 |         0.1% |   4 → 3 | `wrapAndCopyInto(Sink, Spliterator)`          | `java.util.stream.AbstractPipeline`            |
|   -2.9% |    -1 |  0.7% → 0.6% | 34 → 33 | `addAll(Collection)`                          | `java.util.ArrayList`                          |
|  -50.0% |    -1 |        <0.1% |   2 → 1 | `signalWork()`                                | `java.util.concurrent.ForkJoinPool`            |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `push(ForkJoinTask, ForkJoinPool, boolean)`   | `java.util.concurrent.ForkJoinPool$WorkQueue`  |

#### Callees

Callees with the largest change in contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_pthread_start` (`libsystem_pthread.dylib`)

| Change | Delta |     % |       Samples | Callee                | Location       |
| -----: | ----: | ----: | ------------: | --------------------- | -------------- |
| +15.0% |  +412 | 95.6% | 2,742 → 3,154 | `thread_native_entry` | `libjvm.dylib` |
| +15.1% |   +19 |  4.4% |     126 → 145 | `apple_main`          | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

| Change | Delta |      % |       Samples | Callee           | Location                  |
| -----: | ----: | -----: | ------------: | ---------------- | ------------------------- |
| +15.0% |  +431 | 100.0% | 2,869 → 3,300 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

| Change | Delta |             % |       Samples | Callee                          | Location       |
| -----: | ----: | ------------: | ------------: | ------------------------------- | -------------- |
| +15.8% |  +190 | 43.8% → 44.1% | 1,200 → 1,390 | `WorkerThread::run`             | `libjvm.dylib` |
| +13.9% |  +127 | 33.3% → 32.9% |   912 → 1,039 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
| +15.1% |   +57 |         13.8% |     378 → 435 | `ConcurrentGCThread::run`       | `libjvm.dylib` |
| +15.1% |   +19 |          4.6% |     126 → 145 | `WatcherThread::run`            | `libjvm.dylib` |
| +15.1% |   +19 |          4.6% |     126 → 145 | `VMThread::run`                 | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

| Change | Delta |      % |       Samples | Callee             | Location       |
| -----: | ----: | -----: | ------------: | ------------------ | -------------- |
| +15.0% |  +412 | 100.0% | 2,742 → 3,154 | `Thread::call_run` | `libjvm.dylib` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

| Change | Delta |              % |     Samples | Callee        | Location       |
| -----: | ----: | -------------: | ----------: | ------------- | -------------- |
| +24.1% |  +222 | 100.0% → 99.9% | 922 → 1,144 | `Unsafe_Park` | `libjvm.dylib` |

##### `Unsafe_Park` (`libjvm.dylib`)

|  Change | Delta |             % |     Samples | Callee                         | Location                  |
| ------: | ----: | ------------: | ----------: | ------------------------------ | ------------------------- |
|  +23.9% |  +220 | 99.9% → 99.7% | 921 → 1,141 | `Parker::park`                 | `libjvm.dylib`            |
| +200.0% |    +2 |   0.1% → 0.3% |       1 → 3 | `pthread_jit_write_protect_np` | `libsystem_pthread.dylib` |

##### `Parker::park` (`libjvm.dylib`)

| Change | Delta |             % |     Samples | Callee                        | Location                  |
| -----: | ----: | ------------: | ----------: | ----------------------------- | ------------------------- |
| +23.6% |  +217 | 99.8% → 99.6% | 919 → 1,136 | `__psynch_cvwait`             | `libsystem_kernel.dylib`  |
|    new |    +3 |   0.0% → 0.3% |       0 → 3 | `SafepointMechanism::process` | `libjvm.dylib`            |
|    new |    +1 |   0.0% → 0.1% |       0 → 1 | `pthread_mutex_unlock`        | `libsystem_pthread.dylib` |
|    new |    +1 |   0.0% → 0.1% |       0 → 1 | `_pthread_cond_wait`          | `libsystem_pthread.dylib` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

| Change | Delta |      % |   Samples | Callee                | Location                   |
| -----: | ----: | -----: | --------: | --------------------- | -------------------------- |
| +26.0% |  +202 | 100.0% | 777 → 979 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

| Change | Delta |              % |       Samples | Callee               | Location                  |
| -----: | ----: | -------------: | ------------: | -------------------- | ------------------------- |
| +13.8% |  +194 | 100.0% → 99.8% | 1,406 → 1,600 | `__psynch_cvwait`    | `libsystem_kernel.dylib`  |
|    new |    +3 |    0.0% → 0.2% |         0 → 3 | `_pthread_cond_wait` | `libsystem_pthread.dylib` |

##### `WorkerThread::run` (`libjvm.dylib`)

|  Change | Delta |             % |       Samples | Callee                            | Location                 |
| ------: | ----: | ------------: | ------------: | --------------------------------- | ------------------------ |
|  +14.9% |  +178 | 99.4% → 98.6% | 1,193 → 1,371 | `semaphore_wait_trap`             | `libsystem_kernel.dylib` |
| +116.7% |    +7 |   0.5% → 0.9% |        6 → 13 | `G1FullGCMarkTask::work`          | `libjvm.dylib`           |
|     new |    +4 |   0.0% → 0.3% |         0 → 4 | `G1EvacuateRegionsBaseTask::work` | `libjvm.dylib`           |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `G1FullGCPrepareTask::work`       | `libjvm.dylib`           |
|     new |    +1 |   0.0% → 0.1% |         0 → 1 | `G1FullGCAdjustTask::work`        | `libjvm.dylib`           |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |             % |       Samples | Callee                                   | Location                            |
| -----: | ----: | ------------: | ------------: | ---------------------------------------- | ----------------------------------- |
|  +9.4% |  +111 | 73.3% → 72.3% | 1,182 → 1,293 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |
| +14.6% |   +63 | 26.7% → 27.6% |     431 → 494 | `awaitWork(ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool` |
|    new |    +1 |   0.0% → 0.1% |         0 → 1 | `I2C/C2I adapters(0xbbaa)`               | `<unknown>`                         |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

| Change | Delta |      % |       Samples | Callee                              | Location                            |
| -----: | ----: | -----: | ------------: | ----------------------------------- | ----------------------------------- |
| +10.8% |  +175 | 100.0% | 1,613 → 1,788 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `Monitor::wait_without_safepoint_check` (`libjvm.dylib`)

| Change | Delta |      % |       Samples | Callee                  | Location       |
| -----: | ----: | -----: | ------------: | ----------------------- | -------------- |
| +15.4% |  +154 | 100.0% | 1,000 → 1,154 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change | Delta |            % | Samples | Callee                                                                                       | Location                                  |
| -----: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
|    new |  +138 | 0.0% → 99.3% | 0 → 138 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
|    new |    +1 |  0.0% → 0.7% |   0 → 1 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `$anonfun$2(int)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |             % | Samples | Callee                | Location                                    |
| -----: | ----: | ------------: | ------: | --------------------- | ------------------------------------------- |
|    new |  +131 | 0.0% → 100.0% | 0 → 131 | `run(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

| Change | Delta |             % |   Samples | Callee                                                   | Location       |
| -----: | ----: | ------------: | --------: | -------------------------------------------------------- | -------------- |
| +11.3% |   +32 | 31.0% → 30.3% | 283 → 315 | `CompileBroker::compiler_thread_loop`                    | `libjvm.dylib` |
| +15.1% |   +19 | 13.8% → 14.0% | 126 → 145 | `ServiceThread::service_thread_entry`                    | `libjvm.dylib` |
| +15.1% |   +19 | 13.8% → 14.0% | 126 → 145 | `signal_thread_entry`                                    | `libjvm.dylib` |
| +15.1% |   +19 | 13.8% → 14.0% | 126 → 145 | `MonitorDeflationThread::monitor_deflation_thread_entry` | `libjvm.dylib` |
| +15.2% |   +19 | 13.7% → 13.9% | 125 → 144 | `NotificationThread::notification_thread_entry`          | `libjvm.dylib` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % |       Samples | Callee                                                    | Location                                      |
| -----: | ----: | ------------: | ------------: | --------------------------------------------------------- | --------------------------------------------- |
| +38.4% |  +141 | 29.2% → 37.0% |     367 → 508 | `park()`                                                  | `java.util.concurrent.locks.LockSupport`      |
| +33.1% |   +87 | 20.9% → 25.5% |     263 → 350 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
|  +5.2% |   +53 | 80.4% → 77.4% | 1,010 → 1,063 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|    new |    +1 |   0.0% → 0.1% |         0 → 1 | `casAux(ForkJoinTask$Aux, ForkJoinTask$Aux)`              | `java.util.concurrent.ForkJoinTask`           |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |             % |       Samples | Callee                                               | Location                                      |
| -----: | ----: | ------------: | ------------: | ---------------------------------------------------- | --------------------------------------------- |
|  +9.1% |  +108 | 99.9% → 99.7% | 1,181 → 1,289 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `ConcurrentGCThread::run` (`libjvm.dylib`)

| Change | Delta |     % |   Samples | Callee                                  | Location       |
| -----: | ----: | ----: | --------: | --------------------------------------- | -------------- |
| +15.1% |   +19 | 33.3% | 126 → 145 | `G1ConcurrentMarkThread::run_service`   | `libjvm.dylib` |
| +15.1% |   +19 | 33.3% | 126 → 145 | `G1ServiceThread::run_service`          | `libjvm.dylib` |
| +15.1% |   +19 | 33.3% | 126 → 145 | `G1ConcurrentRefineThread::run_service` | `libjvm.dylib` |

##### `Monitor::wait` (`libjvm.dylib`)

| Change | Delta |              % |   Samples | Callee                                                                        | Location       |
| -----: | ----: | -------------: | --------: | ----------------------------------------------------------------------------- | -------------- |
| +10.6% |   +43 | 100.0% → 99.8% | 406 → 449 | `PlatformMonitor::wait`                                                       | `libjvm.dylib` |
|    new |    +1 |    0.0% → 0.2% |     0 → 1 | `ThreadBlockInVMPreprocess<InFlightMutexRelease>::~ThreadBlockInVMPreprocess` | `libjvm.dylib` |

##### `JLI_Launch` (`libjli.dylib`)

| Change | Delta |     % |   Samples | Callee                       | Location       |
| -----: | ----: | ----: | --------: | ---------------------------- | -------------- |
| +15.1% |   +19 | 50.0% | 126 → 145 | `CreateExecutionEnvironment` | `libjli.dylib` |
| +15.1% |   +19 | 50.0% | 126 → 145 | `ContinueInNewThread`        | `libjli.dylib` |

##### `main` (`java`)

| Change | Delta |      % |   Samples | Callee       | Location       |
| -----: | ----: | -----: | --------: | ------------ | -------------- |
| +15.1% |   +38 | 100.0% | 252 → 290 | `JLI_Launch` | `libjli.dylib` |

##### `G1ServiceThread::wait_for_task` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Callee                                  | Location       |
| -----: | ----: | -----: | --------: | --------------------------------------- | -------------- |
| +18.0% |   +22 | 100.0% | 122 → 144 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib` |

##### `G1PrimaryConcurrentRefineThread::wait_for_completed_buffers` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Callee                                  | Location       |
| -----: | ----: | -----: | --------: | --------------------------------------- | -------------- |
| +16.0% |   +20 | 100.0% | 125 → 145 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib` |

##### `mach_msg_overwrite` (`libsystem_kernel.dylib`)

| Change | Delta |      % |   Samples | Callee           | Location                 |
| -----: | ----: | -----: | --------: | ---------------- | ------------------------ |
| +15.1% |   +19 | 100.0% | 126 → 145 | `mach_msg2_trap` | `libsystem_kernel.dylib` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change | Delta |             % |       Samples | Callee                           | Location                                                   |
| -----: | ----: | ------------: | ------------: | -------------------------------- | ---------------------------------------------------------- |
|  +8.6% |   +98 | 97.0% → 97.4% | 1,144 → 1,242 | `join()`                         | `java.util.concurrent.ForkJoinTask`                        |
|  -2.4% |   -10 | 35.6% → 32.2% |     420 → 410 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -2.3% |    -9 | 33.6% → 30.4% |     396 → 387 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +4.0% |    +8 | 17.0% → 16.3% |     200 → 208 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -3.8% |    -3 |   6.6% → 5.9% |       78 → 75 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % | Samples | Callee                              | Location              |
| ------: | ----: | ------------: | ------: | ----------------------------------- | --------------------- |
|  +52.0% |   +13 | 28.1% → 29.0% | 25 → 38 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`   |
|  +33.3% |    +9 | 30.3% → 27.5% | 27 → 36 | `add(Object)`                       | `java.util.ArrayList` |
|  +46.2% |    +6 | 14.6% → 14.5% | 13 → 19 | `get(int)`                          | `java.util.ArrayList` |
| +150.0% |    +3 |   2.2% → 3.8% |   2 → 5 | `SafepointBlob`                     | `<unknown>`           |
|     new |    +1 |   0.0% → 0.8% |   0 → 1 | `<init>()`                          | `java.util.HashMap`   |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

| Change | Delta |             % |   Samples | Callee                                                      | Location                        |
| -----: | ----: | ------------: | --------: | ----------------------------------------------------------- | ------------------------------- |
| +15.3% |   +19 | 99.2% → 99.3% | 124 → 143 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.core.Launcher`)

| Change | Delta |      % |   Samples | Callee                                 | Location                        |
| -----: | ----: | -----: | --------: | -------------------------------------- | ------------------------------- |
| +15.2% |   +19 | 100.0% | 125 → 144 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

| Change | Delta |             % |   Samples | Callee           | Location                                    |
| -----: | ----: | ------------: | --------: | ---------------- | ------------------------------------------- |
| +15.4% |   +19 | 99.2% → 99.3% | 123 → 142 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite$` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

| Change | Delta |      % |   Samples | Callee                     | Location                   |
| -----: | ----: | -----: | --------: | -------------------------- | -------------------------- |
| +15.3% |   +19 | 100.0% | 124 → 143 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change | Delta |             % |   Samples | Callee                                                                        | Location                                    |
| ------: | ----: | ------------: | --------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
|  +14.9% |   +18 | 98.4% → 97.9% | 121 → 139 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |
| removed |    -1 |   0.8% → 0.0% |     1 → 0 | `parse(String[])`                                                             | `org.renaissance.harness.ConfigParser`      |
|     new |    +1 |   0.0% → 0.7% |     0 → 1 | `<init>(Map)`                                                                 | `org.renaissance.harness.ConfigParser`      |
|     new |    +1 |   0.0% → 0.7% |     0 → 1 | `loadExternalPlugins(BenchmarkSuite, Seq)`                                    | `org.renaissance.harness.RenaissanceSuite$` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000780111ede0`)

|  Change | Delta |             % | Samples | Callee                                                                                                                 | Location                                    |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
|     new |  +139 | 0.0% → 100.0% | 0 → 139 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |
| removed |  -120 | 100.0% → 0.0% | 120 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`)

| Change | Delta |             % |   Samples | Callee                             | Location                                  |
| -----: | ----: | ------------: | --------: | ---------------------------------- | ----------------------------------------- |
| +15.4% |   +18 | 98.3% → 97.8% | 117 → 135 | `executeOperation(int)`            | `org.renaissance.harness.ExecutionDriver` |
| +50.0% |    +1 |   1.7% → 2.2% |     2 → 3 | `setUpBeforeAll(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change | Delta |              % |   Samples | Callee               | Location                                    |
| ------: | ----: | -------------: | --------: | -------------------- | ------------------------------------------- |
|  +15.8% |   +19 | 99.2% → 100.0% | 120 → 139 | `foreach(Function1)` | `scala.collection.immutable.List`           |
| removed |    -1 |    0.8% → 0.0% |     1 → 0 | `getVmStartNanos()`  | `org.renaissance.harness.RenaissanceSuite$` |

##### `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`)

| Change | Delta |             % |   Samples | Callee                  | Location                                                             |
| -----: | ----: | ------------: | --------: | ----------------------- | -------------------------------------------------------------------- |
| +14.9% |   +17 | 97.4% → 97.0% | 114 → 131 | `run(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans`                            |
|    new |    +1 |   0.0% → 0.7% |     0 → 1 | `validate()`            | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000078011a7c00` |

##### `run(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % |   Samples | Callee  | Location                            |
| -----: | ----: | -----: | --------: | ------- | ----------------------------------- |
| +15.9% |   +18 | 100.0% | 113 → 131 | `get()` | `java.util.concurrent.ForkJoinTask` |

##### `$anonfun$adapted$1(Object)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change | Delta |             % | Samples | Callee            | Location                                  |
| ------: | ----: | ------------: | ------: | ----------------- | ----------------------------------------- |
|     new |  +131 | 0.0% → 100.0% | 0 → 131 | `$anonfun$2(int)` | `org.renaissance.jdk.concurrent.FjKmeans` |
| removed |  -113 | 100.0% → 0.0% | 113 → 0 | `$anonfun$1(int)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000078011a27f0`)

| Change | Delta |      % |   Samples | Callee                       | Location                                  |
| -----: | ----: | -----: | --------: | ---------------------------- | ----------------------------------------- |
| +15.9% |   +18 | 100.0% | 113 → 131 | `$anonfun$adapted$1(Object)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |              % |   Samples | Callee     | Location                            |
| -----: | ----: | -------------: | --------: | ---------- | ----------------------------------- |
| +14.0% |   +16 | 100.0% → 99.2% | 114 → 130 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a2bd0`)

| Change | Delta |      % |   Samples | Callee                         | Location                                    |
| -----: | ----: | -----: | --------: | ------------------------------ | ------------------------------------------- |
| +14.9% |   +17 | 100.0% | 114 → 131 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change | Delta |              % |   Samples | Callee              | Location                           |
| ------: | ----: | -------------: | --------: | ------------------- | ---------------------------------- |
|  +15.9% |   +18 | 99.1% → 100.0% | 113 → 131 | `map(Function1)`    | `scala.collection.immutable.Range` |
| removed |    -1 |    0.9% → 0.0% |     1 → 0 | `loadClass(String)` | `java.lang.ClassLoader`            |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % |   Samples | Callee     | Location                            |
| -----: | ----: | -----: | --------: | ---------- | ----------------------------------- |
|  +4.6% |    +9 | 100.0% | 197 → 206 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % |       Samples | Callee      | Location                                            |
| -----: | ----: | ------------: | ------------: | ----------- | --------------------------------------------------- |
|  +8.1% |   +96 | 99.8% → 98.9% | 1,179 → 1,275 | `exec()`    | `java.util.concurrent.RecursiveTask`                |
| +14.9% |   +17 |  9.7% → 10.2% |     114 → 131 | `exec()`    | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
| +88.9% |    +8 |   0.8% → 1.3% |        9 → 17 | `setDone()` | `java.util.concurrent.ForkJoinTask`                 |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |      % |       Samples | Callee     | Location                            |
| -----: | ----: | -----: | ------------: | ---------- | ----------------------------------- |
|  +9.1% |  +108 | 100.0% | 1,181 → 1,289 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |           % |       Samples | Callee                 | Location                            |
| ------: | ----: | ----------: | ------------: | ---------------------- | ----------------------------------- |
|   +8.6% |   +98 |      100.0% | 1,144 → 1,242 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |
| removed |    -1 | 0.1% → 0.0% |         1 → 0 | `SafepointBlob`        | `<unknown>`                         |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change | Delta |      % |       Samples | Callee      | Location                                               |
| -----: | ----: | -----: | ------------: | ----------- | ------------------------------------------------------ |
|  +8.1% |   +96 | 100.0% | 1,179 → 1,275 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |             % |   Samples | Callee     | Location                            |
| -----: | ----: | ------------: | --------: | ---------- | ----------------------------------- |
| +35.3% |   +90 | 97.0% → 98.6% | 255 → 345 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |             % |   Samples | Callee            | Location                                 |
| -----: | ----: | ------------: | --------: | ----------------- | ---------------------------------------- |
| +14.9% |   +61 | 95.1% → 95.3% | 410 → 471 | `park()`          | `java.util.concurrent.locks.LockSupport` |
| +10.0% |    +2 |   4.6% → 4.5% |   20 → 22 | `parkUntil(long)` | `java.util.concurrent.locks.LockSupport` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |      % |       Samples | Callee     | Location                            |
| -----: | ----: | -----: | ------------: | ---------- | ----------------------------------- |
|  +5.2% |   +53 | 100.0% | 1,010 → 1,063 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |      % |   Samples | Callee     | Location                            |
| -----: | ----: | -----: | --------: | ---------- | ----------------------------------- |
| +11.9% |   +32 | 100.0% | 268 → 300 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007801004800`)

| Change | Delta |      % |   Samples | Callee           | Location                                   |
| -----: | ----: | -----: | --------: | ---------------- | ------------------------------------------ |
| +15.3% |   +19 | 100.0% | 124 → 143 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007801009800`)

| Change | Delta |      % |   Samples | Callee                         | Location                                             |
| -----: | ----: | -----: | --------: | ------------------------------ | ---------------------------------------------------- |
| +15.3% |   +19 | 100.0% | 124 → 143 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007801004800` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change | Delta |      % |   Samples | Callee                           | Location                                            |
| -----: | ----: | -----: | --------: | -------------------------------- | --------------------------------------------------- |
| +15.3% |   +19 | 100.0% | 124 → 143 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007801009800` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change | Delta |      % |   Samples | Callee                                           | Location                           |
| -----: | ----: | -----: | --------: | ------------------------------------------------ | ---------------------------------- |
| +15.3% |   +19 | 100.0% | 124 → 143 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change | Delta |      % |   Samples | Callee                         | Location                                          |
| -----: | ----: | -----: | --------: | ------------------------------ | ------------------------------------------------- |
| +15.3% |   +19 | 100.0% | 124 → 143 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

| Change | Delta |      % |   Samples | Callee                     | Location                                          |
| -----: | ----: | -----: | --------: | -------------------------- | ------------------------------------------------- |
| +15.3% |   +19 | 100.0% | 124 → 143 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change | Delta |            % | Samples | Callee                                                                                       | Location                                  |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
| removed |  -119 | 99.2% → 0.0% | 119 → 0 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
| removed |    -1 |  0.8% → 0.0% |   1 → 0 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `$anonfun$1(int)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change | Delta |             % | Samples | Callee                | Location                                    |
| ------: | ----: | ------------: | ------: | --------------------- | ------------------------------------------- |
| removed |  -113 | 100.0% → 0.0% | 113 → 0 | `run(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % |   Samples | Callee                                           | Location                                                   |
| ------: | ----: | ------------: | --------: | ------------------------------------------------ | ---------------------------------------------------------- |
|  -15.5% |   -35 | 68.3% → 68.5% | 226 → 191 | `distance(Double[], Double[])`                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +50.0% |    +2 |   1.2% → 2.2% |     4 → 6 | `SafepointBlob`                                  | `<unknown>`                                                |
|     new |    +2 |   0.0% → 0.7% |     0 → 2 | `size()`                                         | `java.util.ArrayList`                                      |
|  -12.5% |    -1 |   2.4% → 2.5% |     8 → 7 | `get(int)`                                       | `java.util.ArrayList`                                      |
| removed |    -1 |   0.3% → 0.0% |     1 → 0 | `InterpreterRuntime::frequency_counter_overflow` | `libjvm.dylib`                                             |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |           % | Samples | Callee          | Location           |
| -----: | ----: | ----------: | ------: | --------------- | ------------------ |
|  -7.7% |    -2 | 9.2% → 9.9% | 26 → 24 | `doubleValue()` | `java.lang.Double` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |           % | Samples | Callee          | Location           |
| -----: | ----: | ----------: | ------: | --------------- | ------------------ |
| -72.7% |    -8 | 4.9% → 1.6% |  11 → 3 | `SafepointBlob` | `<unknown>`        |
| -50.0% |    -2 | 1.8% → 1.0% |   4 → 2 | `doubleValue()` | `java.lang.Double` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % |   Samples | Callee                   | Location                                                   |
| -----: | ----: | ------------: | --------: | ------------------------ | ---------------------------------------------------------- |
| -15.7% |   -52 | 78.8% → 68.0% | 331 → 279 | `findNearestCentroid()`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +47.2% |   +42 | 21.2% → 32.0% |  89 → 131 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -2.4% |   -10 |        100.0% | 420 → 410 | `computeDirectly()`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |             % |   Samples | Callee                           | Location                                                  |
| -----: | ----: | ------------: | --------: | -------------------------------- | --------------------------------------------------------- |
| -14.5% |   -41 | 71.5% → 62.5% | 283 → 242 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| +19.0% |    +4 |   5.3% → 6.5% |   21 → 25 | `get(int)`                       | `java.util.ArrayList`                                     |
|    new |    +1 |   0.0% → 0.3% |     0 → 1 | `DeoptimizationBlob`             | `<unknown>`                                               |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |   Samples | Callee              | Location                                                  |
| -----: | ----: | -----: | --------: | ------------------- | --------------------------------------------------------- |
|  -2.3% |    -9 | 100.0% | 396 → 387 | `vectorSum()`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  -2.3% |    -9 | 100.0% | 396 → 387 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `G1CollectedHeap::attempt_allocation_slow` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                         | Location                  |
| ------: | ----: | ------------: | ------: | ---------------------------------------------- | ------------------------- |
|  -83.3% |    -5 | 60.0% → 50.0% |   6 → 1 | `VMThread::execute`                            | `libjvm.dylib`            |
| removed |    -1 |  10.0% → 0.0% |   1 → 0 | `MutatorAllocRegion::retire`                   | `libjvm.dylib`            |
| removed |    -1 |  10.0% → 0.0% |   1 → 0 | `_pthread_mutex_firstfit_unlock_slow`          | `libsystem_pthread.dylib` |
| removed |    -1 |  10.0% → 0.0% |   1 → 0 | `G1AllocRegion::new_alloc_region_and_allocate` | `libjvm.dylib`            |

##### `ThreadSafepointState::handle_polling_page_exception` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                        | Location       |
| -----: | ----: | -----: | ------: | ----------------------------- | -------------- |
| -33.3% |    -7 | 100.0% | 21 → 14 | `SafepointMechanism::process` | `libjvm.dylib` |

##### `SafepointSynchronize::handle_polling_page_exception` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                                                | Location       |
| -----: | ----: | -----: | ------: | ----------------------------------------------------- | -------------- |
| -33.3% |    -7 | 100.0% | 21 → 14 | `ThreadSafepointState::handle_polling_page_exception` | `libjvm.dylib` |

##### `SafepointBlob` (`<unknown>`)

| Change | Delta |      % | Samples | Callee                                                | Location       |
| -----: | ----: | -----: | ------: | ----------------------------------------------------- | -------------- |
| -33.3% |    -7 | 100.0% | 21 → 14 | `SafepointSynchronize::handle_polling_page_exception` | `libjvm.dylib` |

##### `MemAllocator::allocate` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                          | Location                   |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | -------------------------- |
|  -87.5% |    -7 |  44.4% → 9.1% |   8 → 1 | `G1CollectedHeap::mem_allocate`                 | `libjvm.dylib`             |
|  -66.7% |    -2 |  16.7% → 9.1% |   3 → 1 | `MemAllocator::mem_allocate_inside_tlab_slow`   | `libjvm.dylib`             |
| +200.0% |    +2 |  5.6% → 27.3% |   1 → 3 | `_platform_memset`                              | `libsystem_platform.dylib` |
|  +25.0% |    +1 | 22.2% → 45.5% |   4 → 5 | `_platform_bzero`                               | `libsystem_platform.dylib` |
| removed |    -1 |   5.6% → 0.0% |   1 → 0 | `MemAllocator::Allocation::check_out_of_memory` | `libjvm.dylib`             |

##### `G1CollectedHeap::mem_allocate` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                                     | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------------ | -------------- |
| -87.5% |    -7 | 100.0% |   8 → 1 | `G1CollectedHeap::attempt_allocation_slow` | `libjvm.dylib` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

| Change | Delta |              % | Samples | Callee                   | Location                                                               |
| -----: | ----: | -------------: | ------: | ------------------------ | ---------------------------------------------------------------------- |
|  -5.3% |    -4 | 97.4% → 100.0% | 76 → 72 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a7000` |

##### `CollectedHeap::array_allocate` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                   | Location       |
| -----: | ----: | -----: | ------: | ------------------------ | -------------- |
| -35.3% |    -6 | 100.0% | 17 → 11 | `MemAllocator::allocate` | `libjvm.dylib` |

##### `InstanceKlass::allocate_objArray` (`libjvm.dylib`)

| Change | Delta |              % | Samples | Callee                          | Location       |
| -----: | ----: | -------------: | ------: | ------------------------------- | -------------- |
| -41.2% |    -7 | 100.0% → 90.9% | 17 → 10 | `CollectedHeap::array_allocate` | `libjvm.dylib` |

##### `OptoRuntime::new_array_C` (`libjvm.dylib`)

| Change | Delta |              % | Samples | Callee                             | Location       |
| -----: | ----: | -------------: | ------: | ---------------------------------- | -------------- |
| -35.3% |    -6 | 100.0% → 91.7% | 17 → 11 | `InstanceKlass::allocate_objArray` | `libjvm.dylib` |
|    new |    +1 |    0.0% → 8.3% |   0 → 1 | `CollectedHeap::array_allocate`    | `libjvm.dylib` |

##### `VMThread::wait_until_executed` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee          | Location       |
| -----: | ----: | -----: | ------: | --------------- | -------------- |
| -55.6% |    -5 | 100.0% |   9 → 4 | `Monitor::wait` | `libjvm.dylib` |

##### `VMThread::execute` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                          | Location       |
| -----: | ----: | -----: | ------: | ------------------------------- | -------------- |
| -55.6% |    -5 | 100.0% |   9 → 4 | `VMThread::wait_until_executed` | `libjvm.dylib` |

##### `Mutex::lock_without_safepoint_check` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                              | Location                  |
| ------: | ----: | ------------: | ------: | ----------------------------------- | ------------------------- |
| removed |    -5 | 100.0% → 0.0% |   5 → 0 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `_new_array_Java` (`<unknown>`)

| Change | Delta |              % | Samples | Callee                         | Location                  |
| -----: | ----: | -------------: | ------: | ------------------------------ | ------------------------- |
| -29.4% |    -5 | 100.0% → 92.3% | 17 → 12 | `OptoRuntime::new_array_C`     | `libjvm.dylib`            |
|    new |    +1 |    0.0% → 7.7% |   0 → 1 | `pthread_jit_write_protect_np` | `libsystem_pthread.dylib` |

##### `SafepointSynchronize::block` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                     | Location                 |
| ------: | ----: | -------------: | ------: | -------------------------- | ------------------------ |
| removed |    -2 |    9.5% → 0.0% |   2 → 0 | `thread_self_trap`         | `libsystem_kernel.dylib` |
|   -5.3% |    -1 | 90.5% → 100.0% | 19 → 18 | `GenericWaitBarrier::wait` | `libjvm.dylib`           |

##### `SafepointMechanism::process` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                        | Location       |
| -----: | ----: | -----: | ------: | ----------------------------- | -------------- |
| -14.3% |    -3 | 100.0% | 21 → 18 | `SafepointSynchronize::block` | `libjvm.dylib` |

##### `G1ServiceThread::run_task` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                                    | Location       |
| ------: | ----: | -------------: | ------: | ----------------------------------------- | -------------- |
| removed |    -2 |   50.0% → 0.0% |   2 → 0 | `G1MonotonicArenaFreeMemoryTask::execute` | `libjvm.dylib` |
|  -50.0% |    -1 | 50.0% → 100.0% |   2 → 1 | `G1UncommitRegionTask::execute`           | `libjvm.dylib` |

##### `_pthread_mutex_firstfit_unlock_slow` (`libsystem_pthread.dylib`)

|  Change | Delta |            % | Samples | Callee               | Location                 |
| ------: | ----: | -----------: | ------: | -------------------- | ------------------------ |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `__psynch_mutexdrop` | `libsystem_kernel.dylib` |

##### `arrayof_oop_disjoint_arraycopy` (`<unknown>`)

| Change | Delta |      % | Samples | Callee               | Location    |
| -----: | ----: | -----: | ------: | -------------------- | ----------- |
| -22.2% |    -2 | 100.0% |   9 → 7 | `forward_copy_longs` | `<unknown>` |

##### `MemAllocator::mem_allocate_inside_tlab_slow` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                                | Location       |
| ------: | ----: | -------------: | ------: | ------------------------------------- | -------------- |
|  -50.0% |    -1 | 66.7% → 100.0% |   2 → 1 | `G1CollectedHeap::attempt_allocation` | `libjvm.dylib` |
| removed |    -1 |   33.3% → 0.0% |   1 → 0 | `ThreadLocalAllocBuffer::print_stats` | `libjvm.dylib` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |             % | Samples | Callee               | Location              |
| -----: | ----: | ------------: | ------: | -------------------- | --------------------- |
| -13.6% |    -3 | 39.3% → 36.5% | 22 → 19 | `<init>(Collection)` | `java.util.ArrayList` |
|  -2.9% |    -1 | 60.7% → 63.5% | 34 → 33 | `addAll(Collection)` | `java.util.ArrayList` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a7248`)

| Change | Delta |      % | Samples | Callee                       | Location                                    |
| -----: | ----: | -----: | ------: | ---------------------------- | ------------------------------------------- |
|  -7.1% |    -4 | 100.0% | 56 → 52 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |              % | Samples | Callee                              | Location            |
| ------: | ----: | -------------: | ------: | ----------------------------------- | ------------------- |
|   -2.7% |    -2 | 97.4% → 100.0% | 74 → 72 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |
| removed |    -2 |    2.6% → 0.0% |   2 → 0 | `SafepointBlob`                     | `<unknown>`         |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a7000`)

| Change | Delta |      % | Samples | Callee                              | Location                                    |
| -----: | ----: | -----: | ------: | ----------------------------------- | ------------------------------------------- |
|  -5.3% |    -4 | 100.0% | 76 → 72 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |              % | Samples | Callee                | Location            |
| -----: | ----: | -------------: | ------: | --------------------- | ------------------- |
|  -7.7% |    -6 | 100.0% → 96.0% | 78 → 72 | `forEach(BiConsumer)` | `java.util.HashMap` |
|    new |    +3 |    0.0% → 4.0% |   0 → 3 | `<init>(Map)`         | `java.util.HashMap` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % | Samples | Callee            | Location                                    |
| -----: | ----: | -----: | ------: | ----------------- | ------------------------------------------- |
|  -3.8% |    -3 | 100.0% | 78 → 75 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % | Samples | Callee                     | Location                                                   |
| -----: | ----: | -----: | ------: | -------------------------- | ---------------------------------------------------------- |
|  -3.8% |    -3 | 100.0% | 78 → 75 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |            % | Samples | Callee                                     | Location                                                   |
| ------: | ----: | -----------: | ------: | ------------------------------------------ | ---------------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `_new_instance_Java`                       | `<unknown>`                                                |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `<init>(JavaKMeans, List, List, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000003011258d8`)

|  Change | Delta |             % | Samples | Callee                                           | Location                                    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------ | ------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `lambda$generateData$5(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change | Delta |             % | Samples | Callee                 | Location                             |
| ------: | ----: | ------------: | ------: | ---------------------- | ------------------------------------ |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `toArray(IntFunction)` | `java.util.stream.ReferencePipeline` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `boxed()`              | `java.util.stream.DoublePipeline`    |

##### `<init>()` (`org.renaissance.harness.Config`)

|  Change | Delta |             % | Samples | Callee       | Location                                |
| ------: | ----: | ------------: | ------: | ------------ | --------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `apply(Seq)` | `scala.collection.mutable.ArrayBuffer$` |

##### `evaluate(Spliterator, boolean, IntFunction)` (`java.util.stream.AbstractPipeline`)

|  Change | Delta |             % | Samples | Callee                               | Location                            |
| ------: | ----: | ------------: | ------: | ------------------------------------ | ----------------------------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `wrapAndCopyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `evaluateToArrayNode(IntFunction)` (`java.util.stream.AbstractPipeline`)

|  Change | Delta |             % | Samples | Callee                                        | Location                            |
| ------: | ----: | ------------: | ------: | --------------------------------------------- | ----------------------------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `evaluate(Spliterator, boolean, IntFunction)` | `java.util.stream.AbstractPipeline` |

##### `toArray()` (`java.util.ArrayList`)

| Change | Delta |      % | Samples | Callee                  | Location           |
| -----: | ----: | -----: | ------: | ----------------------- | ------------------ |
|  -7.3% |    -3 | 100.0% | 41 → 38 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `<init>(Collection)` (`java.util.ArrayList`)

| Change | Delta |      % | Samples | Callee      | Location              |
| -----: | ----: | -----: | ------: | ----------- | --------------------- |
| -13.6% |    -3 | 100.0% | 22 → 19 | `toArray()` | `java.util.ArrayList` |

##### `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`)

|  Change | Delta |             % | Samples | Callee                             | Location                            |
| ------: | ----: | ------------: | ------: | ---------------------------------- | ----------------------------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `evaluateToArrayNode(IntFunction)` | `java.util.stream.AbstractPipeline` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

| Change | Delta |             % | Samples | Callee                            | Location                                                               |
| -----: | ----: | ------------: | ------: | --------------------------------- | ---------------------------------------------------------------------- |
|  -7.1% |    -4 | 75.7% → 72.2% | 56 → 52 | `apply(Object, Object)`           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000078011a7248` |
| -18.2% |    -2 | 14.9% → 12.5% |  11 → 9 | `arrayof_jint_disjoint_arraycopy` | `<unknown>`                                                            |
| +28.6% |    +2 |  9.5% → 12.5% |   7 → 9 | `zero_blocks`                     | `<unknown>`                                                            |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|  Change | Delta |             % | Samples | Callee                            | Location           |
| ------: | ----: | ------------: | ------: | --------------------------------- | ------------------ |
|  -29.4% |    -5 | 34.7% → 25.0% | 17 → 12 | `_new_array_Java`                 | `<unknown>`        |
|  +10.3% |    +3 | 59.2% → 66.7% | 29 → 32 | `arrayof_jint_disjoint_arraycopy` | `<unknown>`        |
| removed |    -1 |   2.0% → 0.0% |   1 → 0 | `copyOf(Object[], int, Class)`    | `java.util.Arrays` |

##### `fork()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |            % | Samples | Callee                                      | Location                                      |
| ------: | ----: | -----------: | ------: | ------------------------------------------- | --------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `push(ForkJoinTask, ForkJoinPool, boolean)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `accept(int)` (`java.util.stream.IntPipeline$1$1`)

|  Change | Delta |            % | Samples | Callee           | Location                                                               |
| ------: | ----: | -----------: | ------: | ---------------- | ---------------------------------------------------------------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `apply(int)`     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000003011258d8` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `accept(Object)` | `java.util.stream.Nodes$FixedNodeBuilder`                              |

##### `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`)

| Change | Delta |      % | Samples | Callee        | Location                           |
| -----: | ----: | -----: | ------: | ------------- | ---------------------------------- |
| -33.3% |    -1 | 100.0% |   3 → 2 | `accept(int)` | `java.util.stream.IntPipeline$1$1` |

##### `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`)

| Change | Delta |      % | Samples | Callee                          | Location                                       |
| -----: | ----: | -----: | ------: | ------------------------------- | ---------------------------------------------- |
| -33.3% |    -1 | 100.0% |   3 → 2 | `forEachRemaining(IntConsumer)` | `java.util.stream.Streams$RangeIntSpliterator` |

##### `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

|  Change | Delta |             % | Samples | Callee                       | Location                                  |
| ------: | ----: | ------------: | ------: | ---------------------------- | ----------------------------------------- |
|  -33.3% |    -1 | 75.0% → 66.7% |   3 → 2 | `forEachRemaining(Consumer)` | `java.util.Spliterator$OfInt`             |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `getExactSizeIfKnown()`      | `java.util.Spliterator`                   |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `forEachRemaining(Consumer)` | `java.util.Spliterators$ArraySpliterator` |

##### `wrapAndCopyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

| Change | Delta |      % | Samples | Callee                        | Location                            |
| -----: | ----: | -----: | ------: | ----------------------------- | ----------------------------------- |
| -25.0% |    -1 | 100.0% |   4 → 3 | `copyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `addAll(Collection)` (`java.util.ArrayList`)

|  Change | Delta |             % | Samples | Callee                               | Location              |
| ------: | ----: | ------------: | ------: | ------------------------------------ | --------------------- |
|  +75.0% |    +3 | 11.8% → 21.2% |   4 → 7 | `grow(int)`                          | `java.util.ArrayList` |
|  -22.2% |    -2 | 26.5% → 21.2% |   9 → 7 | `arrayof_oop_disjoint_arraycopy`     | `<unknown>`           |
| removed |    -1 |   2.9% → 0.0% |   1 → 0 | `G1BarrierSet::write_ref_array_work` | `libjvm.dylib`        |
| removed |    -1 |   2.9% → 0.0% |   1 → 0 | `resolve_virtual_call`               | `<unknown>`           |

##### `signalWork()` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % | Samples | Callee           | Location                                 |
| ------: | ----: | ------------: | ------: | ---------------- | ---------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `unpark(Thread)` | `java.util.concurrent.locks.LockSupport` |

##### `push(ForkJoinTask, ForkJoinPool, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change | Delta |             % | Samples | Callee         | Location                            |
| ------: | ----: | ------------: | ------: | -------------- | ----------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `signalWork()` | `java.util.concurrent.ForkJoinPool` |

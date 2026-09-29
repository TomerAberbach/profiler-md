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

# Sampling profile diff

Collected 5,140 samples → 4,878 samples (-262 samples, -5.1%).

| Category         |  Change | Delta |             % |       Samples |
| ---------------- | ------: | ----: | ------------: | ------------: |
| Native           |   -2.8% |  -118 | 81.3% → 83.3% | 4,179 → 4,061 |
| Ours             |   +8.2% |   +51 | 12.1% → 13.8% |     620 → 671 |
| Standard library |  -35.7% |   -65 |   3.5% → 2.4% |     182 → 117 |
| Compiler         | +100.0% |    +7 |   0.1% → 0.3% |        7 → 14 |
| JIT              |  -33.3% |    -5 |   0.3% → 0.2% |       15 → 10 |
| Unknown          |  -96.4% |  -132 |   2.7% → 0.1% |       137 → 5 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |       Samples | Function                                                                          | Location                                                   |
| ------: | ----: | ------------: | ------------: | --------------------------------------------------------------------------------- | ---------------------------------------------------------- |
|  +57.5% |   +77 |   2.6% → 4.3% |     134 → 211 | `distance(Double[], Double[])`                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   +4.1% |   +50 | 24.0% → 26.3% | 1,232 → 1,282 | `semaphore_wait_trap`                                                             | `libsystem_kernel.dylib`                                   |
|  +11.1% |   +25 |   4.4% → 5.1% |     225 → 250 | `accumulate(Double[], double[])`                                                  | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +63.2% |   +12 |   0.4% → 0.6% |       19 → 31 | `collectClusters(int[])`                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|     new |    +5 |   0.0% → 0.1% |         0 → 5 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region` | `libjvm.dylib`                                             |
|  +60.0% |    +3 |   0.1% → 0.2% |         5 → 8 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`                         | `java.util.concurrent.ForkJoinPool`                        |
| +100.0% |    +3 |          0.1% |         3 → 6 | `checkIndex(int, int)`                                                            | `java.util.Objects`                                        |
|     new |    +2 |  0.0% → <0.1% |         0 → 2 | `merge(Object, Object, BiFunction)`                                               | `java.util.HashMap`                                        |
|     new |    +2 |  0.0% → <0.1% |         0 → 2 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>`                   | `libjvm.dylib`                                             |
|     new |    +1 |  0.0% → <0.1% |         0 → 1 | `compute()`                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
|     new |    +1 |  0.0% → <0.1% |         0 → 1 | `doExec()`                                                                        | `java.util.concurrent.ForkJoinTask`                        |
|     new |    +1 |  0.0% → <0.1% |         0 → 1 | `tryRemoveAndExec(ForkJoinTask, boolean)`                                         | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
|     new |    +1 |  0.0% → <0.1% |         0 → 1 | `awaitDone(int, long)`                                                            | `java.util.concurrent.ForkJoinTask`                        |
|     new |    +1 |  0.0% → <0.1% |         0 → 1 | `runWorker(ForkJoinPool$WorkQueue)`                                               | `java.util.concurrent.ForkJoinPool`                        |
|     new |    +1 |  0.0% → <0.1% |         0 → 1 | `unpark(Object)`                                                                  | `jdk.internal.misc.Unsafe`                                 |
|     new |    +1 |  0.0% → <0.1% |         0 → 1 | `toArray()`                                                                       | `java.util.ArrayList`                                      |
|     new |    +1 |  0.0% → <0.1% |         0 → 1 | `get(int)`                                                                        | `java.util.ArrayList`                                      |
|     new |    +1 |  0.0% → <0.1% |         0 → 1 | `add(Object)`                                                                     | `java.util.ArrayList`                                      |
|     new |    +1 |  0.0% → <0.1% |         0 → 1 | `arrayof_oop_disjoint_arraycopy`                                                  | `<unknown>`                                                |
|   +3.0% |    +1 |   0.6% → 0.7% |       33 → 34 | `computeIfAbsent(Object, Function)`                                               | `java.util.HashMap`                                        |

##### Native

| Change | Delta |             % |       Samples | Function                                                                          | Location                   |
| -----: | ----: | ------------: | ------------: | --------------------------------------------------------------------------------- | -------------------------- |
|  +4.1% |   +50 | 24.0% → 26.3% | 1,232 → 1,282 | `semaphore_wait_trap`                                                             | `libsystem_kernel.dylib`   |
|    new |    +5 |   0.0% → 0.1% |         0 → 5 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region` | `libjvm.dylib`             |
|    new |    +2 |  0.0% → <0.1% |         0 → 2 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>`                   | `libjvm.dylib`             |
|    new |    +1 |  0.0% → <0.1% |         0 → 1 | `arrayof_oop_disjoint_arraycopy`                                                  | `<unknown>`                |
|    new |    +1 |  0.0% → <0.1% |         0 → 1 | `InstanceKlass::allocate_objArray`                                                | `libjvm.dylib`             |
| +50.0% |    +1 |  <0.1% → 0.1% |         2 → 3 | `_platform_memset`                                                                | `libsystem_platform.dylib` |
|    new |    +1 |  0.0% → <0.1% |         0 → 1 | `FieldStreamBase::initialize`                                                     | `libjvm.dylib`             |
|    new |    +1 |  0.0% → <0.1% |         0 → 1 | `klassItable::setup_itable_offset_table`                                          | `libjvm.dylib`             |
|    new |    +1 |  0.0% → <0.1% |         0 → 1 | `Dictionary::find`                                                                | `libjvm.dylib`             |
|    new |    +1 |  0.0% → <0.1% |         0 → 1 | `ClassFileParser::check_super_class_access`                                       | `libjvm.dylib`             |
|    new |    +1 |  0.0% → <0.1% |         0 → 1 | `JfrObjectAllocationSample::send_event`                                           | `libjvm.dylib`             |
|    new |    +1 |  0.0% → <0.1% |         0 → 1 | `Dependencies::DepStream::check_call_site_dependency`                             | `libjvm.dylib`             |
|    new |    +1 |  0.0% → <0.1% |         0 → 1 | `InstanceKlass::find_method_index`                                                | `libjvm.dylib`             |
|    new |    +1 |  0.0% → <0.1% |         0 → 1 | `__mmap`                                                                          | `libsystem_kernel.dylib`   |
|    new |    +1 |  0.0% → <0.1% |         0 → 1 | `LinkResolver::check_field_loader_constraints`                                    | `libjvm.dylib`             |
|    new |    +1 |  0.0% → <0.1% |         0 → 1 | `ObjectSampler::is_created`                                                       | `libjvm.dylib`             |
|    new |    +1 |  0.0% → <0.1% |         0 → 1 | `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>`                   | `libjvm.dylib`             |

##### Ours

| Change | Delta |            % |   Samples | Function                                   | Location                                                   |
| -----: | ----: | -----------: | --------: | ------------------------------------------ | ---------------------------------------------------------- |
| +57.5% |   +77 |  2.6% → 4.3% | 134 → 211 | `distance(Double[], Double[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +11.1% |   +25 |  4.4% → 5.1% | 225 → 250 | `accumulate(Double[], double[])`           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| +63.2% |   +12 |  0.4% → 0.6% |   19 → 31 | `collectClusters(int[])`                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|    new |    +1 | 0.0% → <0.1% |     0 → 1 | `compute()`                                | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
|    new |    +1 | 0.0% → <0.1% |     0 → 1 | `lambda$run$0(int, List, int)`             | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|    new |    +1 | 0.0% → <0.1% |     0 → 1 | `<init>(JavaKMeans, List, List, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### Standard library

|  Change | Delta |            % | Samples | Function                                                  | Location                                      |
| ------: | ----: | -----------: | ------: | --------------------------------------------------------- | --------------------------------------------- |
|  +60.0% |    +3 |  0.1% → 0.2% |   5 → 8 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
| +100.0% |    +3 |         0.1% |   3 → 6 | `checkIndex(int, int)`                                    | `java.util.Objects`                           |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                           |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`           |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`           |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`           |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `unpark(Object)`                                          | `jdk.internal.misc.Unsafe`                    |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `toArray()`                                               | `java.util.ArrayList`                         |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `get(int)`                                                | `java.util.ArrayList`                         |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `add(Object)`                                             | `java.util.ArrayList`                         |
|   +3.0% |    +1 |  0.6% → 0.7% | 33 → 34 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                           |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `signalWork()`                                            | `java.util.concurrent.ForkJoinPool`           |
|  +20.0% |    +1 |         0.1% |   5 → 6 | `hash(Object)`                                            | `java.util.HashMap`                           |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `match(byte[], byte[], byte[], byte[])`                   | `java.util.jar.JarFile`                       |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `opWrapSink(int, Sink)`                                   | `java.util.stream.IntPipeline$1`              |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `hasNext()`                                               | `java.util.HashMap$HashIterator`              |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `nextNode()`                                              | `java.util.HashMap$HashIterator`              |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |       Samples | Function                             | Location                                                   |
| ------: | ----: | ------------: | ------------: | ------------------------------------ | ---------------------------------------------------------- |
|  -96.4% |  -132 |   2.7% → 0.1% |       137 → 5 | `(anonymous)`                        | `<unknown>`                                                |
|   -4.9% |  -125 | 50.0% → 50.1% | 2,571 → 2,446 | `__psynch_cvwait`                    | `libsystem_kernel.dylib`                                   |
|  -31.6% |   -42 |   2.6% → 1.9% |      133 → 91 | `findNearestCentroid()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -90.2% |   -37 |   0.8% → 0.1% |        41 → 4 | `doubleValue()`                      | `java.lang.Double`                                         |
|  -18.3% |   -19 |   2.0% → 1.7% |      104 → 85 | `vectorSum()`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -39.6% |   -19 |   0.9% → 0.6% |       48 → 29 | `elementData(int)`                   | `java.util.ArrayList`                                      |
|  -77.8% |   -14 |   0.4% → 0.1% |        18 → 4 | `grow(int)`                          | `java.util.ArrayList`                                      |
|  -50.0% |    -7 |   0.3% → 0.1% |        14 → 7 | `add(Object, Object[], int)`         | `java.util.ArrayList`                                      |
|   -5.4% |    -7 |          2.5% |     129 → 122 | `mach_msg2_trap`                     | `libsystem_kernel.dylib`                                   |
| removed |    -7 |   0.1% → 0.0% |         7 → 0 | `_platform_bzero`                    | `libsystem_platform.dylib`                                 |
|   -5.4% |    -7 |          2.5% |     129 → 122 | `__ulock_wait`                       | `libsystem_kernel.dylib`                                   |
|  -42.9% |    -6 |   0.3% → 0.2% |        14 → 8 | `__psynch_cvsignal`                  | `libsystem_kernel.dylib`                                   |
|  -33.3% |    -5 |   0.3% → 0.2% |       15 → 10 | `zero_blocks`                        | `<unknown>`                                                |
|   -6.5% |    -3 |          0.9% |       46 → 43 | `forward_copy_longs`                 | `<unknown>`                                                |
|  -22.2% |    -2 |   0.2% → 0.1% |         9 → 7 | `__psynch_mutexwait`                 | `libsystem_kernel.dylib`                                   |
| removed |    -2 |  <0.1% → 0.0% |         2 → 0 | `G1FullGCMarker::mark_object`        | `libjvm.dylib`                                             |
| removed |    -2 |  <0.1% → 0.0% |         2 → 0 | `newLength(int, int, int)`           | `jdk.internal.util.ArraysSupport`                          |
| removed |    -2 |  <0.1% → 0.0% |         2 → 0 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -66.7% |    -2 |  0.1% → <0.1% |         3 → 1 | `tlv_get_addr`                       | `libdyld.dylib`                                            |
| removed |    -1 |  <0.1% → 0.0% |         1 → 0 | `ClassLoaderDataGraph::roots_cld_do` | `libjvm.dylib`                                             |

##### Native

|  Change | Delta |             % |       Samples | Function                                                                                                                                                   | Location                   |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
|   -4.9% |  -125 | 50.0% → 50.1% | 2,571 → 2,446 | `__psynch_cvwait`                                                                                                                                          | `libsystem_kernel.dylib`   |
|   -5.4% |    -7 |          2.5% |     129 → 122 | `mach_msg2_trap`                                                                                                                                           | `libsystem_kernel.dylib`   |
| removed |    -7 |   0.1% → 0.0% |         7 → 0 | `_platform_bzero`                                                                                                                                          | `libsystem_platform.dylib` |
|   -5.4% |    -7 |          2.5% |     129 → 122 | `__ulock_wait`                                                                                                                                             | `libsystem_kernel.dylib`   |
|  -42.9% |    -6 |   0.3% → 0.2% |        14 → 8 | `__psynch_cvsignal`                                                                                                                                        | `libsystem_kernel.dylib`   |
|   -6.5% |    -3 |          0.9% |       46 → 43 | `forward_copy_longs`                                                                                                                                       | `<unknown>`                |
|  -22.2% |    -2 |   0.2% → 0.1% |         9 → 7 | `__psynch_mutexwait`                                                                                                                                       | `libsystem_kernel.dylib`   |
| removed |    -2 |  <0.1% → 0.0% |         2 → 0 | `G1FullGCMarker::mark_object`                                                                                                                              | `libjvm.dylib`             |
|  -66.7% |    -2 |  0.1% → <0.1% |         3 → 1 | `tlv_get_addr`                                                                                                                                             | `libdyld.dylib`            |
| removed |    -1 |  <0.1% → 0.0% |         1 → 0 | `ClassLoaderDataGraph::roots_cld_do`                                                                                                                       | `libjvm.dylib`             |
| removed |    -1 |  <0.1% → 0.0% |         1 → 0 | `Unsafe_Park`                                                                                                                                              | `libjvm.dylib`             |
| removed |    -1 |  <0.1% → 0.0% |         1 → 0 | `ObjArrayAllocator::initialize`                                                                                                                            | `libjvm.dylib`             |
|  -50.0% |    -1 |         <0.1% |         2 → 1 | `pthread_jit_write_protect_np`                                                                                                                             | `libsystem_pthread.dylib`  |
| removed |    -1 |  <0.1% → 0.0% |         1 → 0 | `void G1ScanClosureBase::handle_non_cset_obj_common<narrowOop>`                                                                                            | `libjvm.dylib`             |
| removed |    -1 |  <0.1% → 0.0% |         1 → 0 | `void G1ScanEvacuatedObjClosure::do_oop_work<narrowOop>`                                                                                                   | `libjvm.dylib`             |
| removed |    -1 |  <0.1% → 0.0% |         1 → 0 | `G1ParScanThreadState::trim_queue_to_threshold`                                                                                                            | `libjvm.dylib`             |
| removed |    -1 |  <0.1% → 0.0% |         1 → 0 | `MemAllocator::Allocation::notify_allocation`                                                                                                              | `libjvm.dylib`             |
| removed |    -1 |  <0.1% → 0.0% |         1 → 0 | `CardTableBarrierSet::on_slowpath_allocation_exit`                                                                                                         | `libjvm.dylib`             |
| removed |    -1 |  <0.1% → 0.0% |         1 → 0 | `_sigtramp`                                                                                                                                                | `libsystem_platform.dylib` |
| removed |    -1 |  <0.1% → 0.0% |         1 → 0 | `AccessInternal::PostRuntimeDispatch<G1BarrierSet::AccessBarrier<544868ull, G1BarrierSet>, (AccessInternal::BarrierType)2, 544868ull>::oop_access_barrier` | `libjvm.dylib`             |

##### Ours

|  Change | Delta |            % |  Samples | Function                         | Location                                                   |
| ------: | ----: | -----------: | -------: | -------------------------------- | ---------------------------------------------------------- |
|  -31.6% |   -42 |  2.6% → 1.9% | 133 → 91 | `findNearestCentroid()`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -18.3% |   -19 |  2.0% → 1.7% | 104 → 85 | `vectorSum()`                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| removed |    -2 | <0.1% → 0.0% |    2 → 0 | `createSubtask(int, int)`        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| removed |    -1 | <0.1% → 0.0% |    1 → 0 | `lambda$merge$6(List, List)`     | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |    -1 | <0.1% → 0.0% |    1 → 0 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| removed |    -1 | <0.1% → 0.0% |    1 → 0 | `add(double[], double[])`        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

##### Standard library

|  Change | Delta |            % | Samples | Function                               | Location                                      |
| ------: | ----: | -----------: | ------: | -------------------------------------- | --------------------------------------------- |
|  -90.2% |   -37 |  0.8% → 0.1% |  41 → 4 | `doubleValue()`                        | `java.lang.Double`                            |
|  -39.6% |   -19 |  0.9% → 0.6% | 48 → 29 | `elementData(int)`                     | `java.util.ArrayList`                         |
|  -77.8% |   -14 |  0.4% → 0.1% |  18 → 4 | `grow(int)`                            | `java.util.ArrayList`                         |
|  -50.0% |    -7 |  0.3% → 0.1% |  14 → 7 | `add(Object, Object[], int)`           | `java.util.ArrayList`                         |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `newLength(int, int, int)`             | `jdk.internal.util.ArraysSupport`             |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `park(boolean, long)`                  | `jdk.internal.misc.Unsafe`                    |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `unpark(Thread)`                       | `java.util.concurrent.locks.LockSupport`      |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `resize()`                             | `java.util.HashMap`                           |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getAndClearSlot(ForkJoinTask[], int)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `spliterator(double[], int, int, int)` | `java.util.Spliterators`                      |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `<init>(HashMap)`                      | `java.util.HashMap$HashIterator`              |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `<init>(InputStream, Inflater, int)`   | `java.util.zip.InflaterInputStream`           |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `compareAndSet(long, long)`            | `java.util.concurrent.atomic.AtomicLong`      |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getAndSetAccess(int)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### Unknown

| Change | Delta |           % | Samples | Function      | Location    |
| -----: | ----: | ----------: | ------: | ------------- | ----------- |
| -96.4% |  -132 | 2.7% → 0.1% | 137 → 5 | `(anonymous)` | `<unknown>` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |             % |       Samples | Function                                                                          | Location                                                   |
| ------: | ----: | ------------: | ------------: | --------------------------------------------------------------------------------- | ---------------------------------------------------------- |
|     new |  +120 |   0.0% → 2.5% |       0 → 120 | `invokeStatic(Object, Object)`                                                    | `java.lang.invoke.LambdaForm$DMH.0x000000a801004800`       |
|     new |  +120 |   0.0% → 2.5% |       0 → 120 | `invoke(Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x000000a801009800`        |
|  +38.2% |   +60 |   3.1% → 4.4% |     157 → 217 | `distance(Double[], Double[])`                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   +4.7% |   +52 | 21.5% → 23.7% | 1,105 → 1,157 | `WorkerThread::run`                                                               | `libjvm.dylib`                                             |
|   +4.1% |   +50 | 24.0% → 26.3% | 1,232 → 1,282 | `semaphore_wait_trap`                                                             | `libsystem_kernel.dylib`                                   |
|   +3.6% |   +11 |   6.0% → 6.5% |     307 → 318 | `findNearestCentroid()`                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   +2.7% |   +11 |   8.1% → 8.7% |     414 → 425 | `computeDirectly()`                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|     new |    +6 |   0.0% → 0.1% |         0 → 6 | `HeapRegionManager::par_iterate`                                                  | `libjvm.dylib`                                             |
|     new |    +5 |   0.0% → 0.1% |         0 → 5 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region` | `libjvm.dylib`                                             |
|     new |    +5 |   0.0% → 0.1% |         0 → 5 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::do_heap_region`               | `libjvm.dylib`                                             |
|     new |    +5 |   0.0% → 0.1% |         0 → 5 | `G1FullGCResetMetadataTask::work`                                                 | `libjvm.dylib`                                             |
|  +26.7% |    +4 |   0.3% → 0.4% |       15 → 19 | `CompileBroker::invoke_compiler_on_method`                                        | `libjvm.dylib`                                             |
| +400.0% |    +4 |  <0.1% → 0.1% |         1 → 5 | `Compilation::compile_method`                                                     | `libjvm.dylib`                                             |
| +400.0% |    +4 |  <0.1% → 0.1% |         1 → 5 | `Compilation::Compilation`                                                        | `libjvm.dylib`                                             |
| +400.0% |    +4 |  <0.1% → 0.1% |         1 → 5 | `Compiler::compile_method`                                                        | `libjvm.dylib`                                             |
|     new |    +4 |   0.0% → 0.1% |         0 → 4 | `Mutex::lock`                                                                     | `libjvm.dylib`                                             |
| +100.0% |    +3 |          0.1% |         3 → 6 | `checkIndex(int, int)`                                                            | `java.util.Objects`                                        |
| +300.0% |    +3 |  <0.1% → 0.1% |         1 → 4 | `PhaseIterGVN::transform_old`                                                     | `libjvm.dylib`                                             |
| +300.0% |    +3 |  <0.1% → 0.1% |         1 → 4 | `PhaseIterGVN::optimize`                                                          | `libjvm.dylib`                                             |
|     new |    +3 |   0.0% → 0.1% |         0 → 3 | `Compilation::compile_java_method`                                                | `libjvm.dylib`                                             |

##### Native

|  Change | Delta |             % |       Samples | Function                                                                          | Location                   |
| ------: | ----: | ------------: | ------------: | --------------------------------------------------------------------------------- | -------------------------- |
|   +4.7% |   +52 | 21.5% → 23.7% | 1,105 → 1,157 | `WorkerThread::run`                                                               | `libjvm.dylib`             |
|   +4.1% |   +50 | 24.0% → 26.3% | 1,232 → 1,282 | `semaphore_wait_trap`                                                             | `libsystem_kernel.dylib`   |
|     new |    +6 |   0.0% → 0.1% |         0 → 6 | `HeapRegionManager::par_iterate`                                                  | `libjvm.dylib`             |
|     new |    +5 |   0.0% → 0.1% |         0 → 5 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region` | `libjvm.dylib`             |
|     new |    +5 |   0.0% → 0.1% |         0 → 5 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::do_heap_region`               | `libjvm.dylib`             |
|     new |    +5 |   0.0% → 0.1% |         0 → 5 | `G1FullGCResetMetadataTask::work`                                                 | `libjvm.dylib`             |
| +400.0% |    +4 |  <0.1% → 0.1% |         1 → 5 | `Compiler::compile_method`                                                        | `libjvm.dylib`             |
|     new |    +4 |   0.0% → 0.1% |         0 → 4 | `Mutex::lock`                                                                     | `libjvm.dylib`             |
|  +25.0% |    +2 |          0.2% |        8 → 10 | `arrayof_oop_disjoint_arraycopy`                                                  | `<unknown>`                |
|     new |    +2 |  0.0% → <0.1% |         0 → 2 | `JfrAllocationTracer::JfrAllocationTracer`                                        | `libjvm.dylib`             |
|     new |    +2 |  0.0% → <0.1% |         0 → 2 | `IRScope::IRScope`                                                                | `libjvm.dylib`             |
|     new |    +2 |  0.0% → <0.1% |         0 → 2 | `IR::IR`                                                                          | `libjvm.dylib`             |
| +100.0% |    +1 |         <0.1% |         1 → 2 | `MemAllocator::Allocation::notify_allocation`                                     | `libjvm.dylib`             |
|   +0.8% |    +1 |   2.4% → 2.5% |     121 → 122 | `G1ConcurrentRefineThread::run_service`                                           | `libjvm.dylib`             |
|  +50.0% |    +1 |  <0.1% → 0.1% |         2 → 3 | `_platform_memset`                                                                | `libsystem_platform.dylib` |
| +100.0% |    +1 |         <0.1% |         1 → 2 | `ClassFileParser::fill_instance_klass`                                            | `libjvm.dylib`             |
| +100.0% |    +1 |         <0.1% |         1 → 2 | `ClassFileParser::create_instance_klass`                                          | `libjvm.dylib`             |
|  +33.3% |    +1 |          0.1% |         3 → 4 | `WorkerThreads::run_task`                                                         | `libjvm.dylib`             |
|  +33.3% |    +1 |          0.1% |         3 → 4 | `VM_Operation::evaluate`                                                          | `libjvm.dylib`             |
|  +33.3% |    +1 |          0.1% |         3 → 4 | `VMThread::evaluate_operation`                                                    | `libjvm.dylib`             |

##### Ours

| Change | Delta |            % |   Samples | Function                                   | Location                                                   |
| -----: | ----: | -----------: | --------: | ------------------------------------------ | ---------------------------------------------------------- |
| +38.2% |   +60 |  3.1% → 4.4% | 157 → 217 | `distance(Double[], Double[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +3.6% |   +11 |  6.0% → 6.5% | 307 → 318 | `findNearestCentroid()`                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +2.7% |   +11 |  8.1% → 8.7% | 414 → 425 | `computeDirectly()`                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|    new |    +1 | 0.0% → <0.1% |     0 → 1 | `collectModuleJars(Map)`                   | `org.renaissance.core.ModuleLoader`                        |
|    new |    +1 | 0.0% → <0.1% |     0 → 1 | `create(Path, URI)`                        | `org.renaissance.core.ModuleLoader`                        |
|    new |    +1 | 0.0% → <0.1% |     0 → 1 | `<init>()`                                 | `org.renaissance.harness.Config`                           |
|    new |    +1 | 0.0% → <0.1% |     0 → 1 | `parse(String[])`                          | `org.renaissance.harness.ConfigParser`                     |
|    new |    +1 | 0.0% → <0.1% |     0 → 1 | `getVmStartNanos()`                        | `org.renaissance.harness.RenaissanceSuite$`                |
|    new |    +1 | 0.0% → <0.1% |     0 → 1 | `<init>(JavaKMeans, List, List, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|    new |    +1 | 0.0% → <0.1% |     0 → 1 | `createSubtask(int, int)`                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### Standard library

|  Change | Delta |            % |   Samples | Function                                          | Location                                             |
| ------: | ----: | -----------: | --------: | ------------------------------------------------- | ---------------------------------------------------- |
|     new |  +120 |  0.0% → 2.5% |   0 → 120 | `invokeStatic(Object, Object)`                    | `java.lang.invoke.LambdaForm$DMH.0x000000a801004800` |
|     new |  +120 |  0.0% → 2.5% |   0 → 120 | `invoke(Object, Object, Object)`                  | `java.lang.invoke.LambdaForm$MH.0x000000a801009800`  |
| +100.0% |    +3 |         0.1% |     3 → 6 | `checkIndex(int, int)`                            | `java.util.Objects`                                  |
|   +5.3% |    +2 |  0.7% → 0.8% |   38 → 40 | `computeIfAbsent(Object, Function)`               | `java.util.HashMap`                                  |
|   +0.2% |    +1 |  8.2% → 8.6% | 419 → 420 | `awaitWork(ForkJoinPool$WorkQueue)`               | `java.util.concurrent.ForkJoinPool`                  |
|  +20.0% |    +1 |         0.1% |     5 → 6 | `hash(Object)`                                    | `java.util.HashMap`                                  |
|  +50.0% |    +1 | <0.1% → 0.1% |     2 → 3 | `copyInto(Sink, Spliterator)`                     | `java.util.stream.AbstractPipeline`                  |
|  +50.0% |    +1 | <0.1% → 0.1% |     2 → 3 | `wrapAndCopyInto(Sink, Spliterator)`              | `java.util.stream.AbstractPipeline`                  |
|  +50.0% |    +1 | <0.1% → 0.1% |     2 → 3 | `evaluateSequential(PipelineHelper, Spliterator)` | `java.util.stream.ReduceOps$ReduceOp`                |
|  +50.0% |    +1 | <0.1% → 0.1% |     2 → 3 | `evaluate(TerminalOp)`                            | `java.util.stream.AbstractPipeline`                  |
|  +50.0% |    +1 | <0.1% → 0.1% |     2 → 3 | `collect(Collector)`                              | `java.util.stream.ReferencePipeline`                 |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `forEachRemaining(Consumer)`                      | `java.util.HashMap$EntrySpliterator`                 |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `match(byte[], byte[], byte[], byte[])`           | `java.util.jar.JarFile`                              |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `<clinit>()`                                      | `scala.collection.immutable.LazyList$`               |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `findLoadedClass0(String)`                        | `java.lang.ClassLoader`                              |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `findLoadedClass(String)`                         | `java.lang.ClassLoader`                              |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `loadClassOrNull(String, boolean)`                | `jdk.internal.loader.BuiltinClassLoader`             |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `loadClassOrNull(String)`                         | `jdk.internal.loader.BuiltinClassLoader`             |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `loadClass(String, boolean)`                      | `jdk.internal.loader.BuiltinClassLoader`             |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `loadClass(String, boolean)`                      | `jdk.internal.loader.ClassLoaders$AppClassLoader`    |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |             % |       Samples | Function                                                  | Location                                               |
| ------: | ----: | ------------: | ------------: | --------------------------------------------------------- | ------------------------------------------------------ |
|  -96.4% |  -132 |   2.7% → 0.1% |       137 → 5 | `(anonymous)`                                             | `<unknown>`                                            |
| removed |  -126 |   2.5% → 0.0% |       126 → 0 | `invokeStatic(Object, Object)`                            | `java.lang.invoke.LambdaForm$DMH.0x0000007001004800`   |
| removed |  -126 |   2.5% → 0.0% |       126 → 0 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x0000007001009800`    |
|   -4.9% |  -125 | 50.0% → 50.1% | 2,571 → 2,446 | `__psynch_cvwait`                                         | `libsystem_kernel.dylib`                               |
|   -5.9% |   -84 | 27.8% → 27.6% | 1,430 → 1,346 | `PlatformMonitor::wait`                                   | `libjvm.dylib`                                         |
|   -5.0% |   -57 |         22.1% | 1,136 → 1,079 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`                    |
|   -6.1% |   -57 | 18.1% → 17.9% |     932 → 875 | `JavaThread::thread_main_inner`                           | `libjvm.dylib`                                         |
|   -4.9% |   -56 |         22.1% | 1,135 → 1,079 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                    |
|   -4.9% |   -56 |         22.1% | 1,135 → 1,079 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`          |
|   -3.5% |   -55 | 30.3% → 30.8% | 1,555 → 1,500 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                    |
|   -3.5% |   -55 | 30.3% → 30.8% | 1,555 → 1,500 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`            |
|   -5.4% |   -55 | 19.9% → 19.8% |   1,021 → 966 | `Monitor::wait_without_safepoint_check`                   | `libjvm.dylib`                                         |
|   -4.8% |   -54 | 22.0% → 22.1% | 1,130 → 1,076 | `compute()`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |
|   -4.8% |   -54 | 22.0% → 22.1% | 1,130 → 1,076 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                   |
|   -3.5% |   -42 | 23.4% → 23.8% | 1,203 → 1,161 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                    |
|  -14.9% |   -40 |   5.2% → 4.7% |     269 → 229 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                    |
|   -1.4% |   -39 | 54.6% → 56.7% | 2,804 → 2,765 | `_pthread_start`                                          | `libsystem_pthread.dylib`                              |
|   -1.4% |   -39 | 54.6% → 56.7% | 2,804 → 2,765 | `thread_start`                                            | `libsystem_pthread.dylib`                              |
|  -90.2% |   -37 |   0.8% → 0.1% |        41 → 4 | `doubleValue()`                                           | `java.lang.Double`                                     |
|   -3.3% |   -36 | 21.1% → 21.5% | 1,087 → 1,051 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                    |

##### Native

|  Change | Delta |             % |       Samples | Function                                                 | Location                  |
| ------: | ----: | ------------: | ------------: | -------------------------------------------------------- | ------------------------- |
|   -4.9% |  -125 | 50.0% → 50.1% | 2,571 → 2,446 | `__psynch_cvwait`                                        | `libsystem_kernel.dylib`  |
|   -5.9% |   -84 | 27.8% → 27.6% | 1,430 → 1,346 | `PlatformMonitor::wait`                                  | `libjvm.dylib`            |
|   -6.1% |   -57 | 18.1% → 17.9% |     932 → 875 | `JavaThread::thread_main_inner`                          | `libjvm.dylib`            |
|   -5.4% |   -55 | 19.9% → 19.8% |   1,021 → 966 | `Monitor::wait_without_safepoint_check`                  | `libjvm.dylib`            |
|   -1.4% |   -39 | 54.6% → 56.7% | 2,804 → 2,765 | `_pthread_start`                                         | `libsystem_pthread.dylib` |
|   -1.4% |   -39 | 54.6% → 56.7% | 2,804 → 2,765 | `thread_start`                                           | `libsystem_pthread.dylib` |
|   -1.2% |   -32 | 52.0% → 54.2% | 2,674 → 2,642 | `Thread::call_run`                                       | `libjvm.dylib`            |
|   -1.2% |   -32 | 52.0% → 54.2% | 2,674 → 2,642 | `thread_native_entry`                                    | `libjvm.dylib`            |
|   -3.4% |   -30 | 17.3% → 17.6% |     889 → 859 | `Unsafe_Park`                                            | `libjvm.dylib`            |
|   -7.1% |   -29 |   8.0% → 7.8% |     409 → 380 | `Monitor::wait`                                          | `libjvm.dylib`            |
|   -2.9% |   -26 | 17.2% → 17.6% |     885 → 859 | `Parker::park`                                           | `libjvm.dylib`            |
|   -5.4% |   -14 |          5.0% |     258 → 244 | `JLI_Launch`                                             | `libjli.dylib`            |
|   -5.4% |   -14 |          5.0% |     258 → 244 | `main`                                                   | `java`                    |
|   -3.4% |   -13 |   7.4% → 7.5% |     379 → 366 | `ConcurrentGCThread::run`                                | `libjvm.dylib`            |
| removed |   -12 |   0.2% → 0.0% |        12 → 0 | `G1EvacuateRegionsBaseTask::work`                        | `libjvm.dylib`            |
|   -9.3% |   -12 |   2.5% → 2.4% |     129 → 117 | `MonitorDeflationThread::monitor_deflation_thread_entry` | `libjvm.dylib`            |
| removed |    -8 |   0.2% → 0.0% |         8 → 0 | `G1ParEvacuateFollowersClosure::do_void`                 | `libjvm.dylib`            |
| removed |    -8 |   0.2% → 0.0% |         8 → 0 | `G1EvacuateRegionsTask::evacuate_live_objects`           | `libjvm.dylib`            |
|   -6.2% |    -8 |          2.5% |     129 → 121 | `Profiler::timerLoop`                                    | `libasyncProfiler.dylib`  |
|   -6.2% |    -8 |          2.5% |     129 → 121 | `JvmtiAgentThread::start_function_wrapper`               | `libjvm.dylib`            |

##### Ours

| Change | Delta |             % |       Samples | Function                                                                                                               | Location                                                               |
| -----: | ----: | ------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|  -4.8% |   -54 | 22.0% → 22.1% | 1,130 → 1,076 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  -8.8% |   -34 |   7.5% → 7.2% |     385 → 351 | `vectorSum()`                                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -8.8% |   -34 |   7.5% → 7.2% |     385 → 351 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| -10.5% |   -20 |   3.7% → 3.5% |     191 → 171 | `computeClusterAverages()`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| -10.5% |   -20 |   3.7% → 3.5% |     191 → 171 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -9.0% |   -17 |   3.7% → 3.5% |     188 → 171 | `average(List)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| -13.6% |   -11 |   1.6% → 1.4% |       81 → 70 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| -13.2% |   -10 |   1.5% → 1.4% |       76 → 66 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| -13.2% |   -10 |   1.5% → 1.4% |       76 → 66 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a801186fd8` |
| -12.5% |   -10 |   1.6% → 1.4% |       80 → 70 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| -12.5% |   -10 |   1.6% → 1.4% |       80 → 70 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -7.6% |    -9 |   2.3% → 2.2% |     118 → 109 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -7.6% |    -9 |   2.3% → 2.2% |     118 → 109 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a801183d68` |
|  -5.5% |    -7 |          2.5% |     128 → 121 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                        |
|  -5.5% |    -7 |          2.5% |     128 → 121 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                        |
|  -5.5% |    -7 |          2.5% |     127 → 120 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                        |
|  -5.6% |    -7 |   2.5% → 2.4% |     126 → 119 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
|  -5.7% |    -7 |          2.4% |     123 → 116 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|  -5.7% |    -7 |          2.4% |     123 → 116 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a80111efe0` |
|  -4.8% |    -6 |          2.5% |     126 → 120 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |

##### Standard library

|  Change | Delta |             % |       Samples | Function                                                  | Location                                             |
| ------: | ----: | ------------: | ------------: | --------------------------------------------------------- | ---------------------------------------------------- |
| removed |  -126 |   2.5% → 0.0% |       126 → 0 | `invokeStatic(Object, Object)`                            | `java.lang.invoke.LambdaForm$DMH.0x0000007001004800` |
| removed |  -126 |   2.5% → 0.0% |       126 → 0 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x0000007001009800`  |
|   -5.0% |   -57 |         22.1% | 1,136 → 1,079 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`                  |
|   -4.9% |   -56 |         22.1% | 1,135 → 1,079 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                  |
|   -4.9% |   -56 |         22.1% | 1,135 → 1,079 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|   -3.5% |   -55 | 30.3% → 30.8% | 1,555 → 1,500 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                  |
|   -3.5% |   -55 | 30.3% → 30.8% | 1,555 → 1,500 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`          |
|   -4.8% |   -54 | 22.0% → 22.1% | 1,130 → 1,076 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                 |
|   -3.5% |   -42 | 23.4% → 23.8% | 1,203 → 1,161 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                  |
|  -14.9% |   -40 |   5.2% → 4.7% |     269 → 229 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                  |
|  -90.2% |   -37 |   0.8% → 0.1% |        41 → 4 | `doubleValue()`                                           | `java.lang.Double`                                   |
|   -3.3% |   -36 | 21.1% → 21.5% | 1,087 → 1,051 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                  |
|   -3.5% |   -31 | 17.3% → 17.6% |     890 → 859 | `park(boolean, long)`                                     | `jdk.internal.misc.Unsafe`                           |
|  -10.4% |   -28 |   5.2% → 4.9% |     268 → 240 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`                  |
|   -2.8% |   -21 | 14.5% → 14.8% |     743 → 722 | `park()`                                                  | `java.util.concurrent.locks.LockSupport`             |
|   -2.0% |   -19 | 18.9% → 19.5% |     970 → 951 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|  -48.7% |   -19 |   0.8% → 0.4% |       39 → 20 | `add(Object, Object[], int)`                              | `java.util.ArrayList`                                |
|  -39.6% |   -19 |   0.9% → 0.6% |       48 → 29 | `elementData(int)`                                        | `java.util.ArrayList`                                |
|  -46.2% |   -18 |   0.8% → 0.4% |       39 → 21 | `add(Object)`                                             | `java.util.ArrayList`                                |
|  -50.0% |   -16 |   0.6% → 0.3% |       32 → 16 | `grow(int)`                                               | `java.util.ArrayList`                                |

##### Unknown

| Change | Delta |           % | Samples | Function      | Location    |
| -----: | ----: | ----------: | ------: | ------------- | ----------- |
| -96.4% |  -132 | 2.7% → 0.1% | 137 → 5 | `(anonymous)` | `<unknown>` |

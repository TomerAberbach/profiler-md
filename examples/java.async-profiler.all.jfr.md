# Sampling profile

Collected 86,147 samples.

| Category |     % | Samples |
| -------- | ----: | ------: |
| native   | 86.4% |  74,442 |
| ours     | 11.9% |  10,258 |
| stdlib   |  1.4% |   1,207 |
| jit      |  0.3% |     240 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                            | Location                                                 |
| ----: | ------: | ----------------------------------- | -------------------------------------------------------- |
| 52.2% |  45,001 | `__psynch_cvwait`                   | libsystem_kernel.dylib                                   |
| 25.0% |  21,575 | `semaphore_wait_trap`               | libsystem_kernel.dylib                                   |
|  5.8% |   4,956 | `accumulate(Double[], double[])`    | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|  2.9% |   2,522 | `distance(Double[], Double[])`      | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  2.3% |   1,965 | `__ulock_wait`                      | libsystem_kernel.dylib                                   |
|  2.3% |   1,965 | `mach_msg2_trap`                    | libsystem_kernel.dylib                                   |
|  2.3% |   1,964 | `accept`                            | libsystem_kernel.dylib                                   |
|  1.7% |   1,486 | `findNearestCentroid()`             | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  1.0% |     875 | `collectClusters(int[])`            | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  0.8% |     656 | `forward_copy_longs`                | `<unknown>`                                              |
|  0.6% |     549 | `computeIfAbsent(Object, Function)` | java.util.HashMap                                        |
|  0.4% |     345 | `vectorSum()`                       | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|  0.3% |     234 | `zero_blocks`                       | `<unknown>`                                              |
|  0.2% |     164 | `__psynch_mutexwait`                | libsystem_kernel.dylib                                   |
|  0.2% |     154 | `__psynch_cvsignal`                 | libsystem_kernel.dylib                                   |
|  0.1% |      87 | `pthread_jit_write_protect_np`      | libsystem_pthread.dylib                                  |
|  0.1% |      71 | `arrayof_jint_disjoint_arraycopy`   | `<unknown>`                                              |
|  0.1% |      70 | `_platform_bzero`                   | libsystem_platform.dylib                                 |
|  0.1% |      47 | `RegisterMap::RegisterMap`          | libjvm.dylib                                             |
| <0.1% |      37 | `_platform_memset`                  | libsystem_platform.dylib                                 |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % | Samples | Location                                                    |
| -----: | ------: | ----------------------------------------------------------- |
| 100.0% |   4,956 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:411 |

##### `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Location                                                     |
| -----: | ------: | ------------------------------------------------------------ |
| 100.0% |   2,522 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:248 |

##### `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|     % | Samples | Location                                                     |
| ----: | ------: | ------------------------------------------------------------ |
| 96.0% |   1,427 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:229 |
|  4.0% |      59 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:225 |

##### `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|     % | Samples | Location                                                     |
| ----: | ------: | ------------------------------------------------------------ |
| 61.3% |     536 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215 |
| 38.7% |     339 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:211 |

##### `computeIfAbsent(Object, Function)` (java.util.HashMap)

|     % | Samples | Location               |
| ----: | ------: | ---------------------- |
| 81.4% |     447 | java.util.HashMap:1219 |
| 18.0% |      99 | java.util.HashMap:1197 |
|  0.5% |       3 | java.util.HashMap:1206 |

##### `vectorSum()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % | Samples | Location                                                    |
| -----: | ------: | ----------------------------------------------------------- |
| 100.0% |     345 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:402 |

#### Callers

Callers ranked by contribution to each function's self samples. Caller attribution may be imprecise due to inlining.

##### `__psynch_cvwait` (libsystem_kernel.dylib)

|     % | Samples | Caller                     | Location               |
| ----: | ------: | -------------------------- | ---------------------- |
| 48.0% |  21,604 | `PlatformMonitor::wait`    | libjvm.dylib           |
| 43.3% |  19,470 | `Parker::park`             | libjvm.dylib           |
|  4.4% |   1,965 | `PlatformEvent::park`      | libjvm.dylib           |
|  4.4% |   1,962 | `WaitableMutex::waitUntil` | libasyncProfiler.dylib |

##### `semaphore_wait_trap` (libsystem_kernel.dylib)

|     % | Samples | Caller                           | Location     |
| ----: | ------: | -------------------------------- | ------------ |
| 89.9% |  19,398 | `WorkerThread::run`              | libjvm.dylib |
|  9.1% |   1,965 | `os::signal_wait`                | libjvm.dylib |
|  0.7% |     153 | `GenericWaitBarrier::Cell::wait` | libjvm.dylib |
|  0.3% |      58 | `WorkerThreads::run_task`        | libjvm.dylib |
| <0.1% |       1 | `SafepointSynchronize::begin`    | libjvm.dylib |

##### `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % | Samples | Caller        | Location                                                |
| -----: | ------: | ------------- | ------------------------------------------------------- |
| 100.0% |   4,956 | `vectorSum()` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |

##### `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Caller                  | Location                                                 |
| -----: | ------: | ----------------------- | -------------------------------------------------------- |
| 100.0% |   2,522 | `findNearestCentroid()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `__ulock_wait` (libsystem_kernel.dylib)

|      % | Samples | Caller                    | Location     |
| -----: | ------: | ------------------------- | ------------ |
| 100.0% |   1,965 | `CallJavaMainInNewThread` | libjli.dylib |

##### `mach_msg2_trap` (libsystem_kernel.dylib)

|      % | Samples | Caller               | Location               |
| -----: | ------: | -------------------- | ---------------------- |
| 100.0% |   1,965 | `mach_msg_overwrite` | libsystem_kernel.dylib |

##### `accept` (libsystem_kernel.dylib)

|      % | Samples | Caller                    | Location     |
| -----: | ------: | ------------------------- | ------------ |
| 100.0% |   1,964 | `AttachListener::dequeue` | libjvm.dylib |

##### `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Caller              | Location                                                 |
| -----: | ------: | ------------------- | -------------------------------------------------------- |
| 100.0% |   1,486 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Caller              | Location                                                 |
| -----: | ------: | ------------------- | -------------------------------------------------------- |
| 100.0% |     875 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `forward_copy_longs` (`<unknown>`)

|     % | Samples | Caller                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 80.6% |     529 | `arrayof_jint_disjoint_arraycopy` | `<unknown>` |
| 19.4% |     127 | `arrayof_oop_disjoint_arraycopy`  | `<unknown>` |

##### `computeIfAbsent(Object, Function)` (java.util.HashMap)

|      % | Samples | Caller                   | Location                                                 |
| -----: | ------: | ------------------------ | -------------------------------------------------------- |
| 100.0% |     549 | `collectClusters(int[])` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `vectorSum()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % | Samples | Caller              | Location                                                |
| -----: | ------: | ------------------- | ------------------------------------------------------- |
| 100.0% |     345 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |

##### `zero_blocks` (`<unknown>`)

|     % | Samples | Caller                              | Location                                                 |
| ----: | ------: | ----------------------------------- | -------------------------------------------------------- |
| 60.7% |     142 | `merge(Object, Object, BiFunction)` | java.util.HashMap                                        |
|  8.1% |      19 | `findNearestCentroid()`             | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `__psynch_mutexwait` (libsystem_kernel.dylib)

|      % | Samples | Caller                              | Location                |
| -----: | ------: | ----------------------------------- | ----------------------- |
| 100.0% |     164 | `_pthread_mutex_firstfit_lock_slow` | libsystem_pthread.dylib |

##### `__psynch_cvsignal` (libsystem_kernel.dylib)

|      % | Samples | Caller          | Location     |
| -----: | ------: | --------------- | ------------ |
| 100.0% |     154 | `Unsafe_Unpark` | libjvm.dylib |

##### `pthread_jit_write_protect_np` (libsystem_pthread.dylib)

|     % | Samples | Caller                    | Location     |
| ----: | ------: | ------------------------- | ------------ |
| 20.7% |      18 | `jvmti_GetCurrentThread`  | libjvm.dylib |
| 19.5% |      17 | `Unsafe_Park`             | libjvm.dylib |
| 17.2% |      15 | `Unsafe_Unpark`           | libjvm.dylib |
| 10.3% |       9 | `jvmti_GetClassSignature` | libjvm.dylib |
|  9.2% |       8 | `jvmti_Deallocate`        | libjvm.dylib |

##### `_platform_bzero` (libsystem_platform.dylib)

|      % | Samples | Caller                   | Location     |
| -----: | ------: | ------------------------ | ------------ |
| 100.0% |      70 | `MemAllocator::allocate` | libjvm.dylib |

##### `RegisterMap::RegisterMap` (libjvm.dylib)

|     % | Samples | Caller                   | Location     |
| ----: | ------: | ------------------------ | ------------ |
| 93.6% |      44 | `vframe::vframe`         | libjvm.dylib |
|  4.3% |       2 | `vframe::new_vframe`     | libjvm.dylib |
|  2.1% |       1 | `compiledVFrame::sender` | libjvm.dylib |

##### `_platform_memset` (libsystem_platform.dylib)

|     % | Samples | Caller                                        | Location               |
| ----: | ------: | --------------------------------------------- | ---------------------- |
| 83.8% |      31 | `MemAllocator::allocate`                      | libjvm.dylib           |
|  8.1% |       3 | `MarkBitMap::do_clear`                        | libjvm.dylib           |
|  5.4% |       2 | `MemAllocator::mem_allocate_inside_tlab_slow` | libjvm.dylib           |
|  2.7% |       1 | `free_hook`                                   | libasyncProfiler.dylib |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                | Location                                                 |
| ----: | ------: | --------------------------------------- | -------------------------------------------------------- |
| 54.7% |  47,140 | `_pthread_start`                        | libsystem_pthread.dylib                                  |
| 54.7% |  47,140 | `thread_start`                          | libsystem_pthread.dylib                                  |
| 52.4% |  45,175 | `Thread::call_run`                      | libjvm.dylib                                             |
| 52.4% |  45,175 | `thread_native_entry`                   | libjvm.dylib                                             |
| 52.2% |  45,001 | `__psynch_cvwait`                       | libsystem_kernel.dylib                                   |
| 25.1% |  21,606 | `PlatformMonitor::wait`                 | libjvm.dylib                                             |
| 25.0% |  21,575 | `semaphore_wait_trap`                   | libsystem_kernel.dylib                                   |
| 22.9% |  19,693 | `LockTracer::UnsafeParkHook`            | libasyncProfiler.dylib                                   |
| 22.8% |  19,641 | `WorkerThread::run`                     | libjvm.dylib                                             |
| 22.7% |  19,579 | `Unsafe_Park`                           | libjvm.dylib                                             |
| 22.7% |  19,548 | `Parker::park`                          | libjvm.dylib                                             |
| 21.3% |  18,335 | `compute()`                             | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask     |
| 20.6% |  17,789 | `join()`                                | java.util.concurrent.ForkJoinTask                        |
| 18.2% |  15,712 | `JavaThread::thread_main_inner`         | libjvm.dylib                                             |
| 18.2% |  15,688 | `Monitor::wait_without_safepoint_check` | libjvm.dylib                                             |
|  7.1% |   6,118 | `computeDirectly()`                     | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  6.9% |   5,922 | `Monitor::wait`                         | libjvm.dylib                                             |
|  6.8% |   5,894 | `ConcurrentGCThread::run`               | libjvm.dylib                                             |
|  6.2% |   5,304 | `computeDirectly()`                     | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|  6.2% |   5,302 | `vectorSum()`                           | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |

#### Callees

Callees ranked by contribution to each function's total samples. Callee attribution may be imprecise due to inlining.

##### `_pthread_start` (libsystem_pthread.dylib)

|     % | Samples | Callee                | Location     |
| ----: | ------: | --------------------- | ------------ |
| 95.8% |  45,175 | `thread_native_entry` | libjvm.dylib |
|  4.2% |   1,965 | `apple_main`          | libjli.dylib |

##### `thread_start` (libsystem_pthread.dylib)

|      % | Samples | Callee           | Location                |
| -----: | ------: | ---------------- | ----------------------- |
| 100.0% |  47,140 | `_pthread_start` | libsystem_pthread.dylib |

##### `Thread::call_run` (libjvm.dylib)

|     % | Samples | Callee                          | Location     |
| ----: | ------: | ------------------------------- | ------------ |
| 43.5% |  19,641 | `WorkerThread::run`             | libjvm.dylib |
| 34.8% |  15,712 | `JavaThread::thread_main_inner` | libjvm.dylib |
| 13.0% |   5,894 | `ConcurrentGCThread::run`       | libjvm.dylib |
|  4.3% |   1,964 | `VMThread::run`                 | libjvm.dylib |
|  4.3% |   1,964 | `WatcherThread::run`            | libjvm.dylib |

##### `thread_native_entry` (libjvm.dylib)

|      % | Samples | Callee             | Location     |
| -----: | ------: | ------------------ | ------------ |
| 100.0% |  45,175 | `Thread::call_run` | libjvm.dylib |

##### `PlatformMonitor::wait` (libjvm.dylib)

|      % | Samples | Callee               | Location                |
| -----: | ------: | -------------------- | ----------------------- |
| 100.0% |  21,604 | `__psynch_cvwait`    | libsystem_kernel.dylib  |
|  <0.1% |       2 | `_pthread_cond_wait` | libsystem_pthread.dylib |

##### `LockTracer::UnsafeParkHook` (libasyncProfiler.dylib)

|     % | Samples | Callee                    | Location     |
| ----: | ------: | ------------------------- | ------------ |
| 99.4% |  19,577 | `Unsafe_Park`             | libjvm.dylib |
|  0.2% |      41 | `jvmti_GetClassSignature` | libjvm.dylib |
|  0.1% |      28 | `jvmti_GetCurrentThread`  | libjvm.dylib |
|  0.1% |      18 | `jvmti_Deallocate`        | libjvm.dylib |
| <0.1% |       7 | `jni_GetObjectClass`      | libjvm.dylib |

##### `WorkerThread::run` (libjvm.dylib)

|     % | Samples | Callee                            | Location               |
| ----: | ------: | --------------------------------- | ---------------------- |
| 98.8% |  19,398 | `semaphore_wait_trap`             | libsystem_kernel.dylib |
|  0.5% |      97 | `G1FullGCMarkTask::work`          | libjvm.dylib           |
|  0.5% |      93 | `G1EvacuateRegionsBaseTask::work` | libjvm.dylib           |
|  0.1% |      21 | `G1FullGCAdjustTask::work`        | libjvm.dylib           |
|  0.1% |      21 | `G1FullGCResetMetadataTask::work` | libjvm.dylib           |

##### `Unsafe_Park` (libjvm.dylib)

|     % | Samples | Callee                                                                                                                                                     | Location                |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| 99.8% |  19,546 | `Parker::park`                                                                                                                                             | libjvm.dylib            |
|  0.1% |      17 | `pthread_jit_write_protect_np`                                                                                                                             | libsystem_pthread.dylib |
| <0.1% |       1 | `AccessInternal::PostRuntimeDispatch<G1BarrierSet::AccessBarrier<286822ull, G1BarrierSet>, (AccessInternal::BarrierType)3, 286822ull>::oop_access_barrier` | libjvm.dylib            |
| <0.1% |       1 | `JavaThread::threadObj`                                                                                                                                    | libjvm.dylib            |
| <0.1% |       1 | `pthread_mutex_unlock`                                                                                                                                     | libsystem_pthread.dylib |

##### `Parker::park` (libjvm.dylib)

|     % | Samples | Callee                                                                                                                                                     | Location                |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| 99.6% |  19,470 | `__psynch_cvwait`                                                                                                                                          | libsystem_kernel.dylib  |
|  0.3% |      52 | `SafepointMechanism::process`                                                                                                                              | libjvm.dylib            |
|  0.1% |      11 | `_pthread_cond_wait`                                                                                                                                       | libsystem_pthread.dylib |
| <0.1% |       2 | `AccessInternal::PostRuntimeDispatch<G1BarrierSet::AccessBarrier<544868ull, G1BarrierSet>, (AccessInternal::BarrierType)2, 544868ull>::oop_access_barrier` | libjvm.dylib            |
| <0.1% |       1 | `pthread_dependency_wait_np.cold.3`                                                                                                                        | libsystem_pthread.dylib |

##### `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)

|     % | Samples | Callee                           | Location                                                 |
| ----: | ------: | -------------------------------- | -------------------------------------------------------- |
| 97.0% |  17,789 | `join()`                         | java.util.concurrent.ForkJoinTask                        |
| 33.4% |   6,118 | `computeDirectly()`              | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| 28.9% |   5,304 | `computeDirectly()`              | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
| 16.2% |   2,962 | `computeDirectly()`              | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
|  8.0% |   1,467 | `combineResults(Object, Object)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `join()` (java.util.concurrent.ForkJoinTask)

|     % | Samples | Callee          | Location    |
| ----: | ------: | --------------- | ----------- |
| <0.1% |       2 | `vtable stub`   | `<unknown>` |
| <0.1% |       1 | `SafepointBlob` | `<unknown>` |

##### `JavaThread::thread_main_inner` (libjvm.dylib)

|     % | Samples | Callee                                          | Location     |
| ----: | ------: | ----------------------------------------------- | ------------ |
| 25.0% |   3,927 | `CompileBroker::compiler_thread_loop`           | libjvm.dylib |
| 12.5% |   1,965 | `NotificationThread::notification_thread_entry` | libjvm.dylib |
| 12.5% |   1,965 | `attach_listener_thread_entry`                  | libjvm.dylib |
| 12.5% |   1,965 | `signal_thread_entry`                           | libjvm.dylib |
| 12.5% |   1,964 | `ServiceThread::service_thread_entry`           | libjvm.dylib |

##### `Monitor::wait_without_safepoint_check` (libjvm.dylib)

|      % | Samples | Callee                  | Location     |
| -----: | ------: | ----------------------- | ------------ |
| 100.0% |  15,688 | `PlatformMonitor::wait` | libjvm.dylib |

##### `computeDirectly()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Callee                   | Location                                                 |
| -----: | ------: | ------------------------ | -------------------------------------------------------- |
| 100.0% |   6,117 | `computeDirectly()`      | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  67.0% |   4,098 | `findNearestCentroid()`  | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  33.0% |   2,019 | `collectClusters(int[])` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `Monitor::wait` (libjvm.dylib)

|     % | Samples | Callee                                                                        | Location     |
| ----: | ------: | ----------------------------------------------------------------------------- | ------------ |
| 99.9% |   5,918 | `PlatformMonitor::wait`                                                       | libjvm.dylib |
|  0.1% |       4 | `ThreadBlockInVMPreprocess<InFlightMutexRelease>::~ThreadBlockInVMPreprocess` | libjvm.dylib |

##### `ConcurrentGCThread::run` (libjvm.dylib)

|     % | Samples | Callee                                  | Location     |
| ----: | ------: | --------------------------------------- | ------------ |
| 33.3% |   1,965 | `G1ConcurrentMarkThread::run_service`   | libjvm.dylib |
| 33.3% |   1,965 | `G1ConcurrentRefineThread::run_service` | libjvm.dylib |
| 33.3% |   1,964 | `G1ServiceThread::run_service`          | libjvm.dylib |

##### `computeDirectly()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % | Samples | Callee              | Location                                                |
| -----: | ------: | ------------------- | ------------------------------------------------------- |
| 100.0% |   5,302 | `vectorSum()`       | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |
| 100.0% |   5,302 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |

##### `vectorSum()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|     % | Samples | Callee                           | Location                                                |
| ----: | ------: | -------------------------------- | ------------------------------------------------------- |
| 93.5% |   4,957 | `accumulate(Double[], double[])` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

|     % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 22.5% |  19,398 | `semaphore_wait_trap` (libsystem_kernel.dylib) ← `WorkerThread::run` (libjvm.dylib) ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (libsystem_pthread.dylib) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 11.9% |  10,240 | `__psynch_cvwait` (libsystem_kernel.dylib) ← `Parker::park` (libjvm.dylib) ← `Unsafe_Park` ← `LockTracer::UnsafeParkHook` (libasyncProfiler.dylib)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  4.5% |   3,905 | `__psynch_cvwait` (libsystem_kernel.dylib) ← `PlatformMonitor::wait` (libjvm.dylib) ← `Monitor::wait` ← `CompileQueue::get` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (libsystem_pthread.dylib) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  2.3% |   1,965 | `__psynch_cvwait` (libsystem_kernel.dylib) ← `PlatformMonitor::wait` (libjvm.dylib) ← `Monitor::wait_without_safepoint_check` ← `NotificationThread::notification_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (libsystem_pthread.dylib) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  2.3% |   1,965 | `__ulock_wait` (libsystem_kernel.dylib) ← `CallJavaMainInNewThread` (libjli.dylib) ← `ContinueInNewThread` ← `JLI_Launch` ← `main` (java) ← `apple_main` (libjli.dylib) ← `_pthread_start` (libsystem_pthread.dylib) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  2.3% |   1,965 | `__psynch_cvwait` (libsystem_kernel.dylib) ← `PlatformMonitor::wait` (libjvm.dylib) ← `Monitor::wait_without_safepoint_check` ← `G1ConcurrentMarkThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (libsystem_pthread.dylib) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  2.3% |   1,965 | `__psynch_cvwait` (libsystem_kernel.dylib) ← `PlatformMonitor::wait` (libjvm.dylib) ← `Monitor::wait` ← `JVM_WaitForReferencePendingList`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  2.3% |   1,965 | `semaphore_wait_trap` (libsystem_kernel.dylib) ← `os::signal_wait` (libjvm.dylib) ← `signal_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (libsystem_pthread.dylib) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  2.3% |   1,965 | `mach_msg2_trap` (libsystem_kernel.dylib) ← `mach_msg_overwrite` ← `mach_msg` ← `__CFRunLoopServiceMachPort` (CoreFoundation) ← `__CFRunLoopRun` ← `CFRunLoopRunSpecific` ← `CreateExecutionEnvironment` (libjli.dylib) ← `JLI_Launch` ← `main` (java) ← `unknown`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  2.3% |   1,965 | `__psynch_cvwait` (libsystem_kernel.dylib) ← `PlatformEvent::park` (libjvm.dylib) ← `ObjectMonitor::wait` ← `ObjectSynchronizer::wait` ← `JVM_MonitorWait`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  2.3% |   1,964 | `__psynch_cvwait` (libsystem_kernel.dylib) ← `PlatformMonitor::wait` (libjvm.dylib) ← `Monitor::wait_without_safepoint_check` ← `WatcherThread::sleep` ← `WatcherThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (libsystem_pthread.dylib) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  2.3% |   1,964 | `accept` (libsystem_kernel.dylib) ← `AttachListener::dequeue` (libjvm.dylib) ← `attach_listener_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (libsystem_pthread.dylib) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  2.3% |   1,964 | `__psynch_cvwait` (libsystem_kernel.dylib) ← `PlatformMonitor::wait` (libjvm.dylib) ← `Monitor::wait_without_safepoint_check` ← `G1PrimaryConcurrentRefineThread::wait_for_completed_buffers` ← `G1ConcurrentRefineThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (libsystem_pthread.dylib) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  2.3% |   1,964 | `__psynch_cvwait` (libsystem_kernel.dylib) ← `PlatformMonitor::wait` (libjvm.dylib) ← `Monitor::wait_without_safepoint_check` ← `MonitorDeflationThread::monitor_deflation_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (libsystem_pthread.dylib) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  2.3% |   1,962 | `__psynch_cvwait` (libsystem_kernel.dylib) ← `Parker::park` (libjvm.dylib) ← `Unsafe_Park` ← `LockTracer::UnsafeParkHook` (libasyncProfiler.dylib)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  2.3% |   1,962 | `__psynch_cvwait` (libsystem_kernel.dylib) ← `WaitableMutex::waitUntil` (libasyncProfiler.dylib) ← `Profiler::timerLoop` ← `JvmtiAgentThread::start_function_wrapper` (libjvm.dylib) ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (libsystem_pthread.dylib) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  2.3% |   1,960 | `__psynch_cvwait` (libsystem_kernel.dylib) ← `PlatformMonitor::wait` (libjvm.dylib) ← `Monitor::wait_without_safepoint_check` ← `ServiceThread::service_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (libsystem_pthread.dylib) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  2.3% |   1,940 | `__psynch_cvwait` (libsystem_kernel.dylib) ← `PlatformMonitor::wait` (libjvm.dylib) ← `Monitor::wait_without_safepoint_check` ← `G1ServiceThread::wait_for_task` ← `G1ServiceThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (libsystem_pthread.dylib) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  2.2% |   1,938 | `__psynch_cvwait` (libsystem_kernel.dylib) ← `Parker::park` (libjvm.dylib) ← `Unsafe_Park` ← `LockTracer::UnsafeParkHook` (libasyncProfiler.dylib) ← `run(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `$anonfun$2(int)` (org.renaissance.jdk.concurrent.FjKmeans) ← `$anonfun$adapted$1(Object)` ← `apply(Object)` (org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000f8011a1de8) ← `run(BenchmarkContext)` (org.renaissance.jdk.concurrent.FjKmeans) ← `executeOperation(int)` (org.renaissance.harness.ExecutionDriver) ← `executeBenchmark()` ← `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (org.renaissance.harness.RenaissanceSuite$) ← `applyVoid(Object)` (org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000f80111ebb8) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (org.renaissance.harness.RenaissanceSuite$) ← `main(String[])` ← `main(String[])` (org.renaissance.harness.RenaissanceSuite) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (org.renaissance.core.Launcher) ← `launchHarnessClass(String, String[])` ← `main(String[])` |
|  2.2% |   1,884 | `__psynch_cvwait` (libsystem_kernel.dylib) ← `PlatformMonitor::wait` (libjvm.dylib) ← `Monitor::wait_without_safepoint_check` ← `VMThread::wait_for_operation` ← `VMThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (libsystem_pthread.dylib) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |


# Allocated heap profile

Allocated 5.07 GB over 110,297 samples (46 kB per sample).

| Category |     % |    Size | Samples |
| -------- | ----: | ------: | ------: |
| stdlib   | 99.8% | 5.06 GB | 101,959 |
| ours     |  0.2% | 10.3 MB |   8,338 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |    Size | Samples | Function                             | Location                                                 |
| ----: | ------: | ------: | ------------------------------------ | -------------------------------------------------------- |
|  0.2% | 10.2 MB |   5,174 | `findNearestCentroid()`              | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| <0.1% | 33.3 kB |     694 | `createSubtask(int, int)`            | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
| <0.1% | 29.5 kB |     526 | `createSubtask(int, int)`            | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| <0.1% | 22.1 kB |     395 | `add(double[], double[])`            | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
| <0.1% | 20.4 kB |     364 | `vectorSum()`                        | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
| <0.1% | 13.3 kB |     277 | `collectClusters(int[])`             | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| <0.1% | 10.1 kB |     211 | `merge(Map, Map)`                    | org.renaissance.jdk.concurrent.JavaKMeans                |
| <0.1% | 7.94 kB |     331 | `lambda$merge$6(List, List)`         | org.renaissance.jdk.concurrent.JavaKMeans                |
| <0.1% | 7.06 kB |     294 | `lambda$collectClusters$0(Double[])` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| <0.1% | 1.25 kB |      26 | `createSubtask(int, int)`            | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
| <0.1% |  1.1 kB |      23 | `computeClusterAverages()`           | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
| <0.1% |   368 B |      11 | `lambda$run$0(int, List, int)`       | org.renaissance.jdk.concurrent.JavaKMeans                |
| <0.1% |   336 B |       6 | `div(double[], int)`                 | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
| <0.1% |   200 B |       5 | `lambda$boxed$0(int)`                | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
| <0.1% |    48 B |       1 | `average(List)`                      | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |

#### Lines

Lines ranked by contribution to each function's self size.

##### `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Location                                                     |
| -----: | ------: | ------: | ------------------------------------------------------------ |
| 100.0% | 10.2 MB |   5,174 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:223 |

##### `createSubtask(int, int)` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % |    Size | Samples | Location                                                    |
| -----: | ------: | ------: | ----------------------------------------------------------- |
| 100.0% | 33.3 kB |     694 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:419 |

##### `createSubtask(int, int)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Location                                                     |
| -----: | ------: | ------: | ------------------------------------------------------------ |
| 100.0% | 29.5 kB |     526 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:261 |

##### `add(double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % |    Size | Samples | Location                                                    |
| -----: | ------: | ------: | ----------------------------------------------------------- |
| 100.0% | 22.1 kB |     395 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:430 |

##### `vectorSum()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % |    Size | Samples | Location                                                    |
| -----: | ------: | ------: | ----------------------------------------------------------- |
| 100.0% | 20.4 kB |     364 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:400 |

##### `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Location                                                     |
| -----: | ------: | ------: | ------------------------------------------------------------ |
| 100.0% | 13.3 kB |     277 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:209 |

##### `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |    Size | Samples | Location                                      |
| -----: | ------: | ------: | --------------------------------------------- |
| 100.0% | 10.1 kB |     211 | org.renaissance.jdk.concurrent.JavaKMeans:110 |

##### `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |    Size | Samples | Location                                      |
| -----: | ------: | ------: | --------------------------------------------- |
| 100.0% | 7.94 kB |     331 | org.renaissance.jdk.concurrent.JavaKMeans:114 |

##### `lambda$collectClusters$0(Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Location                                                     |
| -----: | ------: | ------: | ------------------------------------------------------------ |
| 100.0% | 7.06 kB |     294 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215 |

##### `createSubtask(int, int)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|      % |    Size | Samples | Location                                                 |
| -----: | ------: | ------: | -------------------------------------------------------- |
| 100.0% | 1.25 kB |      26 | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:352 |

##### `computeClusterAverages()` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|      % |   Size | Samples | Location                                                 |
| -----: | -----: | ------: | -------------------------------------------------------- |
| 100.0% | 1.1 kB |      23 | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:314 |

##### `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans)

|     % |  Size | Samples | Location                                     |
| ----: | ----: | ------: | -------------------------------------------- |
| 87.0% | 320 B |      10 | org.renaissance.jdk.concurrent.JavaKMeans:53 |
| 13.0% |  48 B |       1 | org.renaissance.jdk.concurrent.JavaKMeans:56 |

##### `div(double[], int)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|      % |  Size | Samples | Location                                                 |
| -----: | ----: | ------: | -------------------------------------------------------- |
| 100.0% | 336 B |       6 | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:339 |

##### `lambda$boxed$0(int)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|      % |  Size | Samples | Location                                                 |
| -----: | ----: | ------: | -------------------------------------------------------- |
| 100.0% | 200 B |       5 | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:327 |

##### `average(List)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|      % | Size | Samples | Location                                                 |
| -----: | ---: | ------: | -------------------------------------------------------- |
| 100.0% | 48 B |       1 | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:332 |

#### Callers

Callers ranked by contribution to each function's self size. Caller attribution may be imprecise due to inlining.

##### `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Caller              | Location                                                 |
| -----: | ------: | ------: | ------------------- | -------------------------------------------------------- |
| 100.0% | 10.2 MB |   5,174 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `createSubtask(int, int)` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % |    Size | Samples | Caller      | Location                                             |
| -----: | ------: | ------: | ----------- | ---------------------------------------------------- |
| 100.0% | 33.3 kB |     694 | `compute()` | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask |

##### `createSubtask(int, int)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Caller      | Location                                             |
| -----: | ------: | ------: | ----------- | ---------------------------------------------------- |
| 100.0% | 29.5 kB |     526 | `compute()` | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask |

##### `add(double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % |    Size | Samples | Caller                               | Location                                                |
| -----: | ------: | ------: | ------------------------------------ | ------------------------------------------------------- |
| 100.0% | 22.1 kB |     395 | `combineResults(double[], double[])` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |

##### `vectorSum()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % |    Size | Samples | Caller              | Location                                                |
| -----: | ------: | ------: | ------------------- | ------------------------------------------------------- |
| 100.0% | 20.4 kB |     364 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |

##### `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Caller              | Location                                                 |
| -----: | ------: | ------: | ------------------- | -------------------------------------------------------- |
| 100.0% | 13.3 kB |     277 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans)

|     % |    Size | Samples | Caller                     | Location                                                 |
| ----: | ------: | ------: | -------------------------- | -------------------------------------------------------- |
| 98.1% | 9.94 kB |     207 | `combineResults(Map, Map)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  1.9% |   192 B |       4 | `combineResults(Map, Map)` | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |

##### `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |    Size | Samples | Caller                  | Location                                                             |
| -----: | ------: | ------: | ----------------------- | -------------------------------------------------------------------- |
| 100.0% | 7.94 kB |     331 | `apply(Object, Object)` | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a33d0 |

##### `lambda$collectClusters$0(Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Caller          | Location                                                                            |
| -----: | ------: | ------: | --------------- | ----------------------------------------------------------------------------------- |
| 100.0% | 7.06 kB |     294 | `apply(Object)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000f8011a2f38 |

##### `createSubtask(int, int)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|      % |    Size | Samples | Caller      | Location                                             |
| -----: | ------: | ------: | ----------- | ---------------------------------------------------- |
| 100.0% | 1.25 kB |      26 | `compute()` | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask |

##### `computeClusterAverages()` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|      % |   Size | Samples | Caller              | Location                                             |
| -----: | -----: | ------: | ------------------- | ---------------------------------------------------- |
| 100.0% | 1.1 kB |      23 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask |

##### `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |  Size | Samples | Caller   | Location                                                             |
| -----: | ----: | ------: | -------- | -------------------------------------------------------------------- |
| 100.0% | 368 B |      11 | `call()` | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a21c8 |

##### `div(double[], int)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|      % |  Size | Samples | Caller          | Location                                             |
| -----: | ----: | ------: | --------------- | ---------------------------------------------------- |
| 100.0% | 336 B |       6 | `average(List)` | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask |

##### `lambda$boxed$0(int)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|      % |  Size | Samples | Caller       | Location                                                                        |
| -----: | ----: | ------: | ------------ | ------------------------------------------------------------------------------- |
| 100.0% | 200 B |       5 | `apply(int)` | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask$$Lambda.0x000000f8011a3b60 |

##### `average(List)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|      % | Size | Samples | Caller                     | Location                                             |
| -----: | ---: | ------: | -------------------------- | ---------------------------------------------------- |
| 100.0% | 48 B |       1 | `computeClusterAverages()` | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|      % |    Size | Samples | Function                             | Location                                                             |
| -----: | ------: | ------: | ------------------------------------ | -------------------------------------------------------------------- |
| 100.0% | 5.07 GB | 110,286 | `compute()`                          | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask                 |
|  99.7% | 5.06 GB |  83,193 | `merge(Map, Map)`                    | org.renaissance.jdk.concurrent.JavaKMeans                            |
|  99.7% | 5.06 GB |  83,174 | `combineResults(Map, Map)`           | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|  99.7% | 5.06 GB |  83,174 | `combineResults(Object, Object)`     | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|  99.7% | 5.06 GB |  82,449 | `lambda$merge$7(Map, Object, List)`  | org.renaissance.jdk.concurrent.JavaKMeans                            |
|  99.7% | 5.06 GB |  82,449 | `accept(Object, Object)`             | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a3188 |
|  99.7% | 5.06 GB |  82,440 | `lambda$merge$6(List, List)`         | org.renaissance.jdk.concurrent.JavaKMeans                            |
|  99.7% | 5.06 GB |  82,440 | `apply(Object, Object)`              | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a33d0 |
|  64.7% | 3.28 GB |  22,540 | `lambda$run$0(int, List, int)`       | org.renaissance.jdk.concurrent.JavaKMeans                            |
|  64.7% | 3.28 GB |  22,540 | `call()`                             | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a21c8 |
|   0.3% | 17.6 MB |  25,010 | `computeDirectly()`                  | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|   0.2% | 10.2 MB |   5,174 | `findNearestCentroid()`              | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|   0.1% | 7.37 MB |  19,836 | `collectClusters(int[])`             | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|  <0.1% |   50 kB |     959 | `computeClusterAverages()`           | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask                 |
|  <0.1% |   50 kB |     959 | `computeDirectly()`                  | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask                 |
|  <0.1% | 47.1 kB |     897 | `average(List)`                      | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask                 |
|  <0.1% | 33.3 kB |     694 | `createSubtask(int, int)`            | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask              |
|  <0.1% | 29.5 kB |     526 | `createSubtask(int, int)`            | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|  <0.1% | 22.1 kB |     395 | `add(double[], double[])`            | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask              |
|  <0.1% | 22.1 kB |     395 | `combineResults(double[], double[])` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask              |

#### Callees

Callees ranked by contribution to each function's total size. Callee attribution may be imprecise due to inlining.

##### `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)

|     % |    Size | Samples | Callee                           | Location                                                 |
| ----: | ------: | ------: | -------------------------------- | -------------------------------------------------------- |
| 99.7% | 5.06 GB |  83,174 | `combineResults(Object, Object)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  0.3% | 17.6 MB |  25,010 | `computeDirectly()`              | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| <0.1% |   50 kB |     959 | `computeDirectly()`              | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
| <0.1% | 33.3 kB |     694 | `createSubtask(int, int)`        | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
| <0.1% | 29.5 kB |     526 | `createSubtask(int, int)`        | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Callee            | Location                                  |
| -----: | ------: | ------: | ----------------- | ----------------------------------------- |
| 100.0% | 5.06 GB |  83,174 | `merge(Map, Map)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `combineResults(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Callee                     | Location                                                 |
| -----: | ------: | ------: | -------------------------- | -------------------------------------------------------- |
| 100.0% | 5.06 GB |  83,174 | `combineResults(Map, Map)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a3188)

|      % |    Size | Samples | Callee                              | Location                                  |
| -----: | ------: | ------: | ----------------------------------- | ----------------------------------------- |
| 100.0% | 5.06 GB |  82,449 | `lambda$merge$7(Map, Object, List)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a33d0)

|      % |    Size | Samples | Callee                       | Location                                  |
| -----: | ------: | ------: | ---------------------------- | ----------------------------------------- |
| 100.0% | 5.06 GB |  82,440 | `lambda$merge$6(List, List)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a21c8)

|      % |    Size | Samples | Callee                         | Location                                  |
| -----: | ------: | ------: | ------------------------------ | ----------------------------------------- |
| 100.0% | 3.28 GB |  22,540 | `lambda$run$0(int, List, int)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `computeDirectly()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Callee                   | Location                                                 |
| -----: | ------: | ------: | ------------------------ | -------------------------------------------------------- |
| 100.0% | 17.6 MB |  25,010 | `computeDirectly()`      | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  58.0% | 10.2 MB |   5,174 | `findNearestCentroid()`  | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  42.0% | 7.37 MB |  19,836 | `collectClusters(int[])` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `computeClusterAverages()` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|     % |    Size | Samples | Callee            | Location                                             |
| ----: | ------: | ------: | ----------------- | ---------------------------------------------------- |
| 94.1% | 47.1 kB |     897 | `average(List)`   | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask |
|  2.4% | 1.19 kB |      31 | `boxed(double[])` | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask |

##### `computeDirectly()` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|      % |  Size | Samples | Callee                     | Location                                             |
| -----: | ----: | ------: | -------------------------- | ---------------------------------------------------- |
| 100.0% | 50 kB |     959 | `computeClusterAverages()` | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask |
| 100.0% | 50 kB |     959 | `computeDirectly()`        | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask |

##### `average(List)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|    % |  Size | Samples | Callee               | Location                                             |
| ---: | ----: | ------: | -------------------- | ---------------------------------------------------- |
| 0.7% | 336 B |       6 | `div(double[], int)` | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask |

##### `combineResults(double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % |    Size | Samples | Callee                    | Location                                                |
| -----: | ------: | ------: | ------------------------- | ------------------------------------------------------- |
| 100.0% | 22.1 kB |     395 | `add(double[], double[])` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

|     % |    Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----: | ------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 29.8% | 1.51 GB |   3,079 | `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a33d0) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a3188) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a21c8)                                           |
| 15.1% |  766 MB |   6,870 | `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a33d0) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a3188) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                          |
|  9.0% |  458 MB |   1,827 | `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a33d0) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a3188) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a21c8)                                           |
|  8.9% |  450 MB |   1,774 | `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a33d0) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a3188) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a21c8)                                           |
|  7.1% |  360 MB |   1,484 | `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a33d0) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a3188) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `compute()` ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a21c8)                             |
|  4.3% |  217 MB |   4,240 | `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a33d0) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a3188) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                          |
|  4.2% |  213 MB |   3,630 | `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a33d0) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a3188) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                                                          |
|  3.7% |  189 MB |   4,028 | `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a33d0) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a3188) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `compute()`                                                                                                                                                                                            |
|  2.3% |  117 MB |     941 | `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a33d0) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a3188) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `compute()` ← `compute()` ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a21c8)               |
|  2.1% |  105 MB |     831 | `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a33d0) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a3188) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `compute()` ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a21c8)                             |
|  2.1% |  104 MB |     934 | `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a33d0) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a3188) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `compute()` ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a21c8)                             |
|  1.4% | 69.8 MB |   3,374 | `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a33d0) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a3188) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `compute()` ← `compute()`                                                                                                                                                                              |
|  1.1% | 56.7 MB |   2,455 | `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a33d0) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a3188) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `compute()`                                                                                                                                                                                            |
|  1.0% | 51.2 MB |   2,164 | `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a33d0) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a3188) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `compute()`                                                                                                                                                                                            |
|  0.7% | 35.8 MB |     631 | `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a33d0) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a3188) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `compute()` ← `compute()` ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a21c8)               |
|  0.7% | 34.1 MB |   3,081 | `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a33d0) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a3188) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `compute()` ← `compute()` ← `compute()`                                                                                                                                                                |
|  0.6% | 32.5 MB |     512 | `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a33d0) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a3188) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `compute()` ← `compute()` ← `compute()` ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a21c8) |
|  0.5% | 27.6 MB |     432 | `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a33d0) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a3188) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `compute()` ← `compute()` ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a21c8)               |
|  0.4% | 19.6 MB |   1,830 | `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a33d0) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a3188) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `compute()` ← `compute()`                                                                                                                                                                              |
|  0.4% | 18.9 MB |   1,698 | `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a33d0) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a3188) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `compute()` ← `compute()`                                                                                                                                                                              |


# Allocated native memory profile

Allocated 141 MB over 97 samples (1.45 MB per sample).

| Category |      % |   Size | Samples |
| -------- | -----: | -----: | ------: |
| native   | 100.0% | 141 MB |      97 |

## Hottest functions

### Self size

Functions ranked by native bytes allocated directly in the function body, excluding callees.

|      % |   Size | Samples | Function      | Location               |
| -----: | -----: | ------: | ------------- | ---------------------- |
| 100.0% | 141 MB |      97 | `malloc_hook` | libasyncProfiler.dylib |

#### Callers

Callers ranked by contribution to each function's self size. Caller attribution may be imprecise due to inlining.

##### `malloc_hook` (libasyncProfiler.dylib)

|      % |   Size | Samples | Caller       | Location     |
| -----: | -----: | ------: | ------------ | ------------ |
| 100.0% | 141 MB |      97 | `os::malloc` | libjvm.dylib |

### Total size

Functions ranked by total native bytes allocated in the function and all its callees.

|      % |   Size | Samples | Function                                   | Location                |
| -----: | -----: | ------: | ------------------------------------------ | ----------------------- |
| 100.0% | 141 MB |      97 | `malloc_hook`                              | libasyncProfiler.dylib  |
| 100.0% | 141 MB |      97 | `os::malloc`                               | libjvm.dylib            |
| 100.0% | 141 MB |      96 | `Thread::call_run`                         | libjvm.dylib            |
| 100.0% | 141 MB |      96 | `thread_native_entry`                      | libjvm.dylib            |
| 100.0% | 141 MB |      96 | `_pthread_start`                           | libsystem_pthread.dylib |
| 100.0% | 141 MB |      96 | `thread_start`                             | libsystem_pthread.dylib |
|  99.7% | 141 MB |      90 | `AllocateHeap`                             | libjvm.dylib            |
|  99.7% | 141 MB |      86 | `VM_Operation::evaluate`                   | libjvm.dylib            |
|  99.7% | 141 MB |      86 | `VMThread::evaluate_operation`             | libjvm.dylib            |
|  99.7% | 141 MB |      86 | `VMThread::inner_execute`                  | libjvm.dylib            |
|  99.7% | 141 MB |      86 | `VMThread::run`                            | libjvm.dylib            |
|  99.6% | 141 MB |      81 | `G1FullGCMarker::G1FullGCMarker`           | libjvm.dylib            |
|  99.6% | 141 MB |      81 | `G1FullCollector::G1FullCollector`         | libjvm.dylib            |
|  99.6% | 141 MB |      81 | `G1CollectedHeap::do_full_collection`      | libjvm.dylib            |
|  99.6% | 141 MB |      81 | `VM_G1CollectFull::doit`                   | libjvm.dylib            |
|   0.3% | 489 kB |       6 | `Chunk::operator new`                      | libjvm.dylib            |
|   0.3% | 489 kB |       6 | `Arena::grow`                              | libjvm.dylib            |
|   0.3% | 489 kB |       6 | `Compile::Compile`                         | libjvm.dylib            |
|   0.3% | 489 kB |       6 | `C2Compiler::compile_method`               | libjvm.dylib            |
|   0.3% | 489 kB |       6 | `CompileBroker::invoke_compiler_on_method` | libjvm.dylib            |

#### Callees

Callees ranked by contribution to each function's total size. Callee attribution may be imprecise due to inlining.

##### `os::malloc` (libjvm.dylib)

|      % |   Size | Samples | Callee        | Location               |
| -----: | -----: | ------: | ------------- | ---------------------- |
| 100.0% | 141 MB |      97 | `malloc_hook` | libasyncProfiler.dylib |
|  <0.1% |   59 B |       1 | `os::malloc`  | libjvm.dylib           |

##### `Thread::call_run` (libjvm.dylib)

|     % |    Size | Samples | Callee                          | Location     |
| ----: | ------: | ------: | ------------------------------- | ------------ |
| 99.7% |  141 MB |      86 | `VMThread::run`                 | libjvm.dylib |
|  0.3% |  489 kB |       6 | `JavaThread::thread_main_inner` | libjvm.dylib |
| <0.1% | 4.24 kB |       3 | `WorkerThread::run`             | libjvm.dylib |
| <0.1% |    40 B |       1 | `ConcurrentGCThread::run`       | libjvm.dylib |

##### `thread_native_entry` (libjvm.dylib)

|      % |   Size | Samples | Callee             | Location     |
| -----: | -----: | ------: | ------------------ | ------------ |
| 100.0% | 141 MB |      96 | `Thread::call_run` | libjvm.dylib |

##### `_pthread_start` (libsystem_pthread.dylib)

|      % |   Size | Samples | Callee                | Location     |
| -----: | -----: | ------: | --------------------- | ------------ |
| 100.0% | 141 MB |      96 | `thread_native_entry` | libjvm.dylib |

##### `thread_start` (libsystem_pthread.dylib)

|      % |   Size | Samples | Callee           | Location                |
| -----: | -----: | ------: | ---------------- | ----------------------- |
| 100.0% | 141 MB |      96 | `_pthread_start` | libsystem_pthread.dylib |

##### `AllocateHeap` (libjvm.dylib)

|      % |   Size | Samples | Callee       | Location     |
| -----: | -----: | ------: | ------------ | ------------ |
| 100.0% | 141 MB |      90 | `os::malloc` | libjvm.dylib |

##### `VM_Operation::evaluate` (libjvm.dylib)

|      % |    Size | Samples | Callee                            | Location     |
| -----: | ------: | ------: | --------------------------------- | ------------ |
| 100.0% |  141 MB |      81 | `VM_G1CollectFull::doit`          | libjvm.dylib |
|  <0.1% | 33.4 kB |       5 | `VM_G1CollectForAllocation::doit` | libjvm.dylib |

##### `VMThread::evaluate_operation` (libjvm.dylib)

|      % |   Size | Samples | Callee                   | Location     |
| -----: | -----: | ------: | ------------------------ | ------------ |
| 100.0% | 141 MB |      86 | `VM_Operation::evaluate` | libjvm.dylib |

##### `VMThread::inner_execute` (libjvm.dylib)

|      % |   Size | Samples | Callee                         | Location     |
| -----: | -----: | ------: | ------------------------------ | ------------ |
| 100.0% | 141 MB |      86 | `VMThread::evaluate_operation` | libjvm.dylib |

##### `VMThread::run` (libjvm.dylib)

|      % |   Size | Samples | Callee                    | Location     |
| -----: | -----: | ------: | ------------------------- | ------------ |
| 100.0% | 141 MB |      86 | `VMThread::inner_execute` | libjvm.dylib |

##### `G1FullGCMarker::G1FullGCMarker` (libjvm.dylib)

|      % |   Size | Samples | Callee         | Location     |
| -----: | -----: | ------: | -------------- | ------------ |
| 100.0% | 141 MB |      81 | `AllocateHeap` | libjvm.dylib |

##### `G1FullCollector::G1FullCollector` (libjvm.dylib)

|      % |   Size | Samples | Callee                           | Location     |
| -----: | -----: | ------: | -------------------------------- | ------------ |
| 100.0% | 141 MB |      81 | `G1FullGCMarker::G1FullGCMarker` | libjvm.dylib |

##### `G1CollectedHeap::do_full_collection` (libjvm.dylib)

|      % |   Size | Samples | Callee                             | Location     |
| -----: | -----: | ------: | ---------------------------------- | ------------ |
| 100.0% | 141 MB |      81 | `G1FullCollector::G1FullCollector` | libjvm.dylib |

##### `VM_G1CollectFull::doit` (libjvm.dylib)

|      % |   Size | Samples | Callee                                | Location     |
| -----: | -----: | ------: | ------------------------------------- | ------------ |
| 100.0% | 141 MB |      81 | `G1CollectedHeap::do_full_collection` | libjvm.dylib |

##### `Chunk::operator new` (libjvm.dylib)

|      % |   Size | Samples | Callee       | Location     |
| -----: | -----: | ------: | ------------ | ------------ |
| 100.0% | 489 kB |       6 | `os::malloc` | libjvm.dylib |

##### `Arena::grow` (libjvm.dylib)

|      % |   Size | Samples | Callee                | Location     |
| -----: | -----: | ------: | --------------------- | ------------ |
| 100.0% | 489 kB |       6 | `Chunk::operator new` | libjvm.dylib |

##### `Compile::Compile` (libjvm.dylib)

|     % |   Size | Samples | Callee              | Location     |
| ----: | -----: | ------: | ------------------- | ------------ |
| 65.5% | 320 kB |       2 | `Compile::Code_Gen` | libjvm.dylib |
| 34.5% | 169 kB |       4 | `Compile::Optimize` | libjvm.dylib |

##### `C2Compiler::compile_method` (libjvm.dylib)

|      % |   Size | Samples | Callee             | Location     |
| -----: | -----: | ------: | ------------------ | ------------ |
| 100.0% | 489 kB |       6 | `Compile::Compile` | libjvm.dylib |

##### `CompileBroker::invoke_compiler_on_method` (libjvm.dylib)

|      % |   Size | Samples | Callee                       | Location     |
| -----: | -----: | ------: | ---------------------------- | ------------ |
| 100.0% | 489 kB |       6 | `C2Compiler::compile_method` | libjvm.dylib |

## Hottest call stacks

Call stacks ranked by native bytes allocated in their leaf frame.

|     % |    Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ----: | ------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 99.6% |  141 MB |      81 | `malloc_hook` (libasyncProfiler.dylib) ← `os::malloc` (libjvm.dylib) ← `AllocateHeap` ← `G1FullGCMarker::G1FullGCMarker` ← `G1FullCollector::G1FullCollector` ← `G1CollectedHeap::do_full_collection` ← `VM_G1CollectFull::doit` ← `VM_Operation::evaluate` ← `VMThread::evaluate_operation` ← `VMThread::inner_execute` ← `VMThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (libsystem_pthread.dylib) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.2% |  287 kB |       1 | `malloc_hook` (libasyncProfiler.dylib) ← `os::malloc` (libjvm.dylib) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIFG::init` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (libsystem_pthread.dylib) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| <0.1% | 65.6 kB |       1 | `malloc_hook` (libasyncProfiler.dylib) ← `os::malloc` (libjvm.dylib) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (libsystem_pthread.dylib) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                      |
| <0.1% | 37.7 kB |       1 | `malloc_hook` (libasyncProfiler.dylib) ← `os::malloc` (libjvm.dylib) ← `Chunk::operator new` ← `Arena::grow` ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (libsystem_pthread.dylib) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                |
| <0.1% | 32.8 kB |       1 | `malloc_hook` (libasyncProfiler.dylib) ← `os::malloc` (libjvm.dylib) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `PhaseCCP::transform` ← `PhaseCCP::do_transform` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (libsystem_pthread.dylib) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| <0.1% | 32.8 kB |       1 | `malloc_hook` (libasyncProfiler.dylib) ← `os::malloc` (libjvm.dylib) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `Node_Array::grow` ← `Matcher::ReduceInst` ← `Matcher::match_tree` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (libsystem_pthread.dylib) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| <0.1% | 32.8 kB |       1 | `malloc_hook` (libasyncProfiler.dylib) ← `os::malloc` (libjvm.dylib) ← `Chunk::operator new` ← `Arena::grow` ← `Arena::Arealloc` ← `PhaseIdealLoop::set_idom` ← `PhaseIdealLoop::fix_body_edges` ← `PhaseIdealLoop::clone_loop` ← `PhaseIdealLoop::do_unroll` ← `IdealLoopTree::iteration_split_impl` ← `IdealLoopTree::iteration_split` ← `IdealLoopTree::iteration_split` ← `IdealLoopTree::iteration_split` ← `IdealLoopTree::iteration_split` ← `IdealLoopTree::iteration_split` ← `IdealLoopTree::iteration_split` ← `IdealLoopTree::iteration_split` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (libsystem_pthread.dylib) ← `thread_start` |
| <0.1% | 16.4 kB |       2 | `malloc_hook` (libasyncProfiler.dylib) ← `os::malloc` (libjvm.dylib) ← `AllocateHeap` ← `G1RemSetScanState::prepare` ← `G1YoungCollector::pre_evacuate_collection_set` ← `G1YoungCollector::collect` ← `G1CollectedHeap::do_collection_pause_at_safepoint_helper` ← `G1CollectedHeap::do_collection_pause_at_safepoint` ← `VM_G1CollectForAllocation::doit` ← `VM_Operation::evaluate` ← `VMThread::evaluate_operation` ← `VMThread::inner_execute` ← `VMThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (libsystem_pthread.dylib) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                          |
| <0.1% | 16.4 kB |       2 | `malloc_hook` (libasyncProfiler.dylib) ← `os::malloc` (libjvm.dylib) ← `AllocateHeap` ← `HeapRegionClaimer::HeapRegionClaimer` ← `G1YoungCollector::pre_evacuate_collection_set` ← `G1YoungCollector::collect` ← `G1CollectedHeap::do_collection_pause_at_safepoint_helper` ← `G1CollectedHeap::do_collection_pause_at_safepoint` ← `VM_G1CollectForAllocation::doit` ← `VM_Operation::evaluate` ← `VMThread::evaluate_operation` ← `VMThread::inner_execute` ← `VMThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (libsystem_pthread.dylib) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                |
| <0.1% | 4.09 kB |       1 | `malloc_hook` (libasyncProfiler.dylib) ← `os::malloc` (libjvm.dylib) ← `AllocateHeap` ← `G1FullGCMarker::mark_object` ← `G1MarkAndPushClosure::do_oop` ← `ClassLoaderData::oops_do` ← `G1FullGCMarker::publish_and_drain_oop_tasks` ← `G1FullGCMarker::follow_marking_stacks` ← `G1FullGCMarker::complete_marking` ← `G1FullGCMarkTask::work` ← `WorkerThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (libsystem_pthread.dylib) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| <0.1% |   648 B |       1 | `malloc_hook` (libasyncProfiler.dylib) ← `os::malloc` (libjvm.dylib) ← `AllocateHeap` ← `HeapRegionManager::rebuild_free_list` ← `G1CollectedHeap::rebuild_free_region_list` ← `G1YoungCollector::post_evacuate_collection_set` ← `G1YoungCollector::collect` ← `G1CollectedHeap::do_collection_pause_at_safepoint_helper` ← `G1CollectedHeap::do_collection_pause_at_safepoint` ← `VM_G1CollectForAllocation::doit` ← `VM_Operation::evaluate` ← `VMThread::evaluate_operation` ← `VMThread::inner_execute` ← `VMThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (libsystem_pthread.dylib) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                 |
| <0.1% |   128 B |       1 | `malloc_hook` (libasyncProfiler.dylib) ← `os::malloc` (libjvm.dylib) ← `AllocateHeap` ← `G1PLABAllocator::G1PLABAllocator` ← `G1ParScanThreadState::G1ParScanThreadState` ← `G1ParScanThreadStateSet::state_for_worker` ← `G1EvacuateRegionsBaseTask::work` ← `WorkerThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (libsystem_pthread.dylib) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| <0.1% |    59 B |       1 | `malloc_hook` (libasyncProfiler.dylib) ← `os::malloc` (libjvm.dylib) ← `os::malloc` ← `JvmtiEnv::GetClassSignature` ← `jvmti_GetClassSignature` ← `LockTracer::UnsafeParkHook` (libasyncProfiler.dylib) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `compute()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| <0.1% |    40 B |       1 | `malloc_hook` (libasyncProfiler.dylib) ← `os::malloc` (libjvm.dylib) ← `AllocateHeap` ← `G1MonotonicArenaFreeMemoryTask::calculate_return_infos` ← `G1MonotonicArenaFreeMemoryTask::free_excess_arena_memory` ← `G1MonotonicArenaFreeMemoryTask::execute` ← `G1ServiceThread::run_task` ← `G1ServiceThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (libsystem_pthread.dylib) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| <0.1% |    24 B |       1 | `malloc_hook` (libasyncProfiler.dylib) ← `os::malloc` (libjvm.dylib) ← `AllocateHeap` ← `AddDerivedOop::do_derived_oop` ← `void OopMapDo<OopClosure, DerivedOopClosure, SkipNullValue>::iterate_oops_do<RegisterMap>` ← `ImmutableOopMap::oops_do` ← `frame::oops_code_blob_do` ← `JavaThread::oops_do_frames` ← `Thread::oops_do` ← `Threads::possibly_parallel_threads_do` ← `Threads::possibly_parallel_oops_do` ← `G1RootProcessor::process_java_roots` ← `G1RootProcessor::evacuate_roots` ← `G1EvacuateRegionsTask::scan_roots` ← `G1EvacuateRegionsBaseTask::work` ← `WorkerThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (libsystem_pthread.dylib) ← `thread_start`                                                                                                                                                                                                                                                                                                |


# Lock contention profile

Blocked 1.74s over 7,280 samples (239.0µs per sample).

| Category |      % |  Time | Samples |
| -------- | -----: | ----: | ------: |
| native   | 100.0% | 1.74s |   7,280 |

## Hottest functions

### Self time

Functions ranked by time blocked directly in the function body, excluding callees.

|      % |  Time | Samples | Function                  | Location               |
| -----: | ----: | ------: | ------------------------- | ---------------------- |
| 100.0% | 1.74s |   7,280 | `pthread_mutex_lock_hook` | libasyncProfiler.dylib |

#### Callers

Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to inlining.

##### `pthread_mutex_lock_hook` (libasyncProfiler.dylib)

|     % |    Time | Samples | Caller                                | Location     |
| ----: | ------: | ------: | ------------------------------------- | ------------ |
| 67.5% |   1.17s |   2,046 | `Mutex::lock`                         | libjvm.dylib |
| 16.8% | 293.0ms |   1,355 | `ThreadCritical::ThreadCritical`      | libjvm.dylib |
| 15.5% | 270.4ms |   3,753 | `Mutex::lock_without_safepoint_check` | libjvm.dylib |
|  0.1% |   1.9ms |     126 | `Parker::unpark`                      | libjvm.dylib |

### Total time

Functions ranked by total time blocked in the function and all its callees.

|      % |    Time | Samples | Function                                                    | Location                                                             |
| -----: | ------: | ------: | ----------------------------------------------------------- | -------------------------------------------------------------------- |
| 100.0% |   1.74s |   7,280 | `pthread_mutex_lock_hook`                                   | libasyncProfiler.dylib                                               |
|  86.4% |   1.50s |   3,873 | `compute()`                                                 | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask                 |
|  86.3% |   1.50s |   3,777 | `MemAllocator::allocate`                                    | libjvm.dylib                                                         |
|  80.2% |   1.39s |   3,538 | `CollectedHeap::array_allocate`                             | libjvm.dylib                                                         |
|  80.2% |   1.39s |   3,538 | `OptoRuntime::new_array_C`                                  | libjvm.dylib                                                         |
|  80.2% |   1.39s |   3,538 | `_new_array_Java`                                           | `<unknown>`                                                          |
|  75.5% |   1.31s |   3,352 | `InstanceKlass::allocate_objArray`                          | libjvm.dylib                                                         |
|  67.5% |   1.17s |   2,046 | `Mutex::lock`                                               | libjvm.dylib                                                         |
|  60.6% |   1.05s |   1,457 | `G1CollectedHeap::attempt_allocation_slow`                  | libjvm.dylib                                                         |
|  57.1% | 993.5ms |   2,747 | `merge(Map, Map)`                                           | org.renaissance.jdk.concurrent.JavaKMeans                            |
|  57.1% | 993.5ms |   2,747 | `combineResults(Map, Map)`                                  | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|  57.1% | 993.5ms |   2,747 | `combineResults(Object, Object)`                            | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|  56.5% | 983.4ms |   2,706 | `lambda$merge$6(List, List)`                                | org.renaissance.jdk.concurrent.JavaKMeans                            |
|  56.5% | 983.4ms |   2,706 | `apply(Object, Object)`                                     | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a33d0 |
|  56.5% | 983.4ms |   2,706 | `lambda$merge$7(Map, Object, List)`                         | org.renaissance.jdk.concurrent.JavaKMeans                            |
|  56.5% | 983.4ms |   2,706 | `accept(Object, Object)`                                    | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a3188 |
|  49.8% | 865.8ms |   1,041 | `G1CollectedHeap::attempt_allocation`                       | libjvm.dylib                                                         |
|  49.8% | 865.8ms |   1,041 | `MemAllocator::mem_allocate_inside_tlab_slow`               | libjvm.dylib                                                         |
|  27.5% | 477.7ms |     960 | `computeDirectly()`                                         | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
|  25.7% | 446.9ms |   2,320 | `MemAllocator::Allocation::notify_allocation_jvmti_sampler` | libjvm.dylib                                                         |

#### Callees

Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to inlining.

##### `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)

|     % |    Time | Samples | Callee                           | Location                                                 |
| ----: | ------: | ------: | -------------------------------- | -------------------------------------------------------- |
| 66.1% | 993.5ms |   2,747 | `combineResults(Object, Object)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| 31.8% | 477.7ms |     960 | `computeDirectly()`              | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  1.2% |  18.4ms |      54 | `createSubtask(int, int)`        | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  0.5% |   7.3ms |      11 | `createSubtask(int, int)`        | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|  0.3% |   4.7ms |      29 | `computeDirectly()`              | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |

##### `MemAllocator::allocate` (libjvm.dylib)

|     % |    Time | Samples | Callee                                                      | Location     |
| ----: | ------: | ------: | ----------------------------------------------------------- | ------------ |
| 57.7% | 865.8ms |   1,041 | `MemAllocator::mem_allocate_inside_tlab_slow`               | libjvm.dylib |
| 29.8% | 446.9ms |   2,320 | `MemAllocator::Allocation::notify_allocation_jvmti_sampler` | libjvm.dylib |
| 12.6% | 188.7ms |     416 | `G1CollectedHeap::mem_allocate`                             | libjvm.dylib |

##### `CollectedHeap::array_allocate` (libjvm.dylib)

|      % |  Time | Samples | Callee                   | Location     |
| -----: | ----: | ------: | ------------------------ | ------------ |
| 100.0% | 1.39s |   3,538 | `MemAllocator::allocate` | libjvm.dylib |

##### `OptoRuntime::new_array_C` (libjvm.dylib)

|     % |   Time | Samples | Callee                             | Location     |
| ----: | -----: | ------: | ---------------------------------- | ------------ |
| 94.2% |  1.31s |   3,352 | `InstanceKlass::allocate_objArray` | libjvm.dylib |
|  5.8% | 81.5ms |     186 | `CollectedHeap::array_allocate`    | libjvm.dylib |

##### `_new_array_Java` (`<unknown>`)

|      % |  Time | Samples | Callee                     | Location     |
| -----: | ----: | ------: | -------------------------- | ------------ |
| 100.0% | 1.39s |   3,538 | `OptoRuntime::new_array_C` | libjvm.dylib |

##### `InstanceKlass::allocate_objArray` (libjvm.dylib)

|      % |  Time | Samples | Callee                          | Location     |
| -----: | ----: | ------: | ------------------------------- | ------------ |
| 100.0% | 1.31s |   3,352 | `CollectedHeap::array_allocate` | libjvm.dylib |

##### `Mutex::lock` (libjvm.dylib)

|      % |  Time | Samples | Callee                    | Location               |
| -----: | ----: | ------: | ------------------------- | ---------------------- |
| 100.0% | 1.17s |   2,046 | `pthread_mutex_lock_hook` | libasyncProfiler.dylib |

##### `G1CollectedHeap::attempt_allocation_slow` (libjvm.dylib)

|     % |  Time | Samples | Callee              | Location     |
| ----: | ----: | ------: | ------------------- | ------------ |
| 99.2% | 1.04s |   1,451 | `Mutex::lock`       | libjvm.dylib |
|  0.8% | 8.5ms |       6 | `VMThread::execute` | libjvm.dylib |

##### `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans)

|    % |  Time | Samples | Callee               | Location    |
| ---: | ----: | ------: | -------------------- | ----------- |
| 0.6% | 5.9ms |      25 | `_new_instance_Java` | `<unknown>` |

##### `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Time | Samples | Callee            | Location                                  |
| -----: | ------: | ------: | ----------------- | ----------------------------------------- |
| 100.0% | 993.5ms |   2,747 | `merge(Map, Map)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `combineResults(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Time | Samples | Callee                     | Location                                                 |
| -----: | ------: | ------: | -------------------------- | -------------------------------------------------------- |
| 100.0% | 993.5ms |   2,747 | `combineResults(Map, Map)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans)

|    % |  Time | Samples | Callee               | Location    |
| ---: | ----: | ------: | -------------------- | ----------- |
| 0.9% | 8.6ms |      17 | `_new_instance_Java` | `<unknown>` |

##### `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a33d0)

|      % |    Time | Samples | Callee                       | Location                                  |
| -----: | ------: | ------: | ---------------------------- | ----------------------------------------- |
| 100.0% | 983.4ms |   2,706 | `lambda$merge$6(List, List)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a3188)

|      % |    Time | Samples | Callee                              | Location                                  |
| -----: | ------: | ------: | ----------------------------------- | ----------------------------------------- |
| 100.0% | 983.4ms |   2,706 | `lambda$merge$7(Map, Object, List)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `G1CollectedHeap::attempt_allocation` (libjvm.dylib)

|      % |    Time | Samples | Callee                                     | Location     |
| -----: | ------: | ------: | ------------------------------------------ | ------------ |
| 100.0% | 865.8ms |   1,041 | `G1CollectedHeap::attempt_allocation_slow` | libjvm.dylib |

##### `MemAllocator::mem_allocate_inside_tlab_slow` (libjvm.dylib)

|      % |    Time | Samples | Callee                                | Location     |
| -----: | ------: | ------: | ------------------------------------- | ------------ |
| 100.0% | 865.8ms |   1,041 | `G1CollectedHeap::attempt_allocation` | libjvm.dylib |

##### `computeDirectly()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Time | Samples | Callee                   | Location                                                 |
| -----: | ------: | ------: | ------------------------ | -------------------------------------------------------- |
| 100.0% | 477.7ms |     960 | `computeDirectly()`      | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  83.6% | 399.4ms |     777 | `collectClusters(int[])` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  16.4% |  78.3ms |     183 | `findNearestCentroid()`  | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `MemAllocator::Allocation::notify_allocation_jvmti_sampler` (libjvm.dylib)

|     % |    Time | Samples | Callee                                                                          | Location     |
| ----: | ------: | ------: | ------------------------------------------------------------------------------- | ------------ |
| 95.7% | 427.5ms |   2,160 | `JvmtiSampledObjectAllocEventCollector::~JvmtiSampledObjectAllocEventCollector` | libjvm.dylib |
|  4.3% |  19.4ms |     160 | `ThreadHeapSampler::check_for_sampling`                                         | libjvm.dylib |

## Hottest call stacks

Call stacks ranked by time blocked in their leaf frame.

|    % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---: | ------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 7.8% | 136.6ms |   1,999 | `pthread_mutex_lock_hook` (libasyncProfiler.dylib) ← `Mutex::lock_without_safepoint_check` (libjvm.dylib) ← `TaskTerminator::offer_termination` ← `G1ParEvacuateFollowersClosure::offer_termination` ← `G1ParEvacuateFollowersClosure::do_void` ← `G1EvacuateRegionsTask::evacuate_live_objects` ← `G1EvacuateRegionsBaseTask::work` ← `WorkerThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (libsystem_pthread.dylib) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 5.2% |  91.3ms |   1,189 | `pthread_mutex_lock_hook` (libasyncProfiler.dylib) ← `Mutex::lock_without_safepoint_check` (libjvm.dylib) ← `TaskTerminator::offer_termination` ← `G1FullGCMarker::complete_marking` ← `G1FullGCMarkTask::work` ← `WorkerThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (libsystem_pthread.dylib) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 2.3% |  39.4ms |      30 | `pthread_mutex_lock_hook` (libasyncProfiler.dylib) ← `Mutex::lock` (libjvm.dylib) ← `G1CollectedHeap::attempt_allocation_slow` ← `G1CollectedHeap::attempt_allocation` ← `MemAllocator::mem_allocate_inside_tlab_slow` ← `MemAllocator::allocate` ← `CollectedHeap::array_allocate` ← `InstanceKlass::allocate_objArray` ← `OptoRuntime::new_array_C` ← `_new_array_Java` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a33d0) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a3188) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `compute()` ← `compute()` ← `compute()`                                           |
| 2.0% |  34.3ms |      98 | `pthread_mutex_lock_hook` (libasyncProfiler.dylib) ← `Mutex::lock` (libjvm.dylib) ← `G1CollectedHeap::attempt_allocation_slow` ← `G1CollectedHeap::mem_allocate` ← `MemAllocator::allocate` ← `CollectedHeap::array_allocate` ← `InstanceKlass::allocate_objArray` ← `OptoRuntime::new_array_C` ← `_new_array_Java` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a33d0) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a3188) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                           |
| 1.9% |  33.0ms |      43 | `pthread_mutex_lock_hook` (libasyncProfiler.dylib) ← `Mutex::lock` (libjvm.dylib) ← `G1CollectedHeap::attempt_allocation_slow` ← `G1CollectedHeap::attempt_allocation` ← `MemAllocator::mem_allocate_inside_tlab_slow` ← `MemAllocator::allocate` ← `CollectedHeap::array_allocate` ← `InstanceKlass::allocate_objArray` ← `OptoRuntime::new_array_C` ← `_new_array_Java` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a33d0) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a3188) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `compute()` ← `compute()` ← `compute()` ← `compute()`                             |
| 1.9% |  32.7ms |      36 | `pthread_mutex_lock_hook` (libasyncProfiler.dylib) ← `Mutex::lock` (libjvm.dylib) ← `G1CollectedHeap::attempt_allocation_slow` ← `G1CollectedHeap::attempt_allocation` ← `MemAllocator::mem_allocate_inside_tlab_slow` ← `MemAllocator::allocate` ← `CollectedHeap::array_allocate` ← `InstanceKlass::allocate_objArray` ← `OptoRuntime::new_array_C` ← `_new_array_Java` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a33d0) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a3188) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `compute()` ← `compute()` ← `compute()` ← `compute()` ← `compute()`               |
| 1.8% |  31.7ms |      30 | `pthread_mutex_lock_hook` (libasyncProfiler.dylib) ← `Mutex::lock` (libjvm.dylib) ← `G1CollectedHeap::attempt_allocation_slow` ← `G1CollectedHeap::attempt_allocation` ← `MemAllocator::mem_allocate_inside_tlab_slow` ← `MemAllocator::allocate` ← `CollectedHeap::array_allocate` ← `InstanceKlass::allocate_objArray` ← `OptoRuntime::new_array_C` ← `_new_array_Java` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a33d0) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a3188) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `compute()`                                                                       |
| 1.7% |  30.1ms |      37 | `pthread_mutex_lock_hook` (libasyncProfiler.dylib) ← `Mutex::lock` (libjvm.dylib) ← `G1CollectedHeap::attempt_allocation_slow` ← `G1CollectedHeap::attempt_allocation` ← `MemAllocator::mem_allocate_inside_tlab_slow` ← `MemAllocator::allocate` ← `CollectedHeap::array_allocate` ← `InstanceKlass::allocate_objArray` ← `OptoRuntime::new_array_C` ← `_new_array_Java` ← `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `compute()` ← `compute()` ← `compute()` ← `compute()` ← `compute()` ← `compute()` ← `compute()`                                                                                                                                                                                                                                                                                                                                                                                                            |
| 1.6% |  27.7ms |      18 | `pthread_mutex_lock_hook` (libasyncProfiler.dylib) ← `Mutex::lock` (libjvm.dylib) ← `G1CollectedHeap::attempt_allocation_slow` ← `G1CollectedHeap::attempt_allocation` ← `MemAllocator::mem_allocate_inside_tlab_slow` ← `MemAllocator::allocate` ← `CollectedHeap::array_allocate` ← `InstanceKlass::allocate_objArray` ← `OptoRuntime::new_array_C` ← `_new_array_Java` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a33d0) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a3188) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `compute()` ← `compute()` ← `compute()` ← `compute()` ← `compute()`               |
| 1.6% |  27.1ms |      51 | `pthread_mutex_lock_hook` (libasyncProfiler.dylib) ← `Mutex::lock` (libjvm.dylib) ← `G1CollectedHeap::attempt_allocation_slow` ← `G1CollectedHeap::mem_allocate` ← `MemAllocator::allocate` ← `CollectedHeap::array_allocate` ← `InstanceKlass::allocate_objArray` ← `OptoRuntime::new_array_C` ← `_new_array_Java` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a33d0) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a3188) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `compute()`                                                                                                                             |
| 1.5% |  26.1ms |      33 | `pthread_mutex_lock_hook` (libasyncProfiler.dylib) ← `Mutex::lock` (libjvm.dylib) ← `G1CollectedHeap::attempt_allocation_slow` ← `G1CollectedHeap::attempt_allocation` ← `MemAllocator::mem_allocate_inside_tlab_slow` ← `MemAllocator::allocate` ← `CollectedHeap::array_allocate` ← `InstanceKlass::allocate_objArray` ← `OptoRuntime::new_array_C` ← `_new_array_Java` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a33d0) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a3188) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `compute()` ← `compute()`                                                         |
| 1.5% |  25.7ms |      24 | `pthread_mutex_lock_hook` (libasyncProfiler.dylib) ← `Mutex::lock` (libjvm.dylib) ← `G1CollectedHeap::attempt_allocation_slow` ← `G1CollectedHeap::mem_allocate` ← `MemAllocator::allocate` ← `CollectedHeap::array_allocate` ← `InstanceKlass::allocate_objArray` ← `OptoRuntime::new_array_C` ← `_new_array_Java` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a33d0) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a3188) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `compute()` ← `compute()`                                                                                                               |
| 1.5% |  25.6ms |      34 | `pthread_mutex_lock_hook` (libasyncProfiler.dylib) ← `Mutex::lock` (libjvm.dylib) ← `G1CollectedHeap::attempt_allocation_slow` ← `G1CollectedHeap::attempt_allocation` ← `MemAllocator::mem_allocate_inside_tlab_slow` ← `MemAllocator::allocate` ← `CollectedHeap::array_allocate` ← `InstanceKlass::allocate_objArray` ← `OptoRuntime::new_array_C` ← `_new_array_Java` ← `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `compute()` ← `compute()` ← `compute()` ← `compute()` ← `compute()` ← `compute()` ← `compute()` ← `compute()`                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.4% |  23.7ms |      11 | `pthread_mutex_lock_hook` (libasyncProfiler.dylib) ← `Mutex::lock` (libjvm.dylib) ← `G1CollectedHeap::attempt_allocation_slow` ← `G1CollectedHeap::attempt_allocation` ← `MemAllocator::mem_allocate_inside_tlab_slow` ← `MemAllocator::allocate` ← `CollectedHeap::array_allocate` ← `InstanceKlass::allocate_objArray` ← `OptoRuntime::new_array_C` ← `_new_array_Java` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a33d0) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a3188) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `compute()` ← `compute()`                                                         |
| 1.4% |  23.5ms |      18 | `pthread_mutex_lock_hook` (libasyncProfiler.dylib) ← `Mutex::lock` (libjvm.dylib) ← `G1CollectedHeap::attempt_allocation_slow` ← `G1CollectedHeap::attempt_allocation` ← `MemAllocator::mem_allocate_inside_tlab_slow` ← `MemAllocator::allocate` ← `CollectedHeap::array_allocate` ← `InstanceKlass::allocate_objArray` ← `OptoRuntime::new_array_C` ← `_new_array_Java` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a33d0) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a3188) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `compute()` ← `compute()` ← `compute()` ← `compute()` ← `compute()` ← `compute()` |
| 1.2% |  21.0ms |      23 | `pthread_mutex_lock_hook` (libasyncProfiler.dylib) ← `Mutex::lock` (libjvm.dylib) ← `G1CollectedHeap::attempt_allocation_slow` ← `G1CollectedHeap::attempt_allocation` ← `MemAllocator::mem_allocate_inside_tlab_slow` ← `MemAllocator::allocate` ← `CollectedHeap::array_allocate` ← `InstanceKlass::allocate_objArray` ← `OptoRuntime::new_array_C` ← `_new_array_Java` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a33d0) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a3188) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                     |
| 1.2% |  20.4ms |      14 | `pthread_mutex_lock_hook` (libasyncProfiler.dylib) ← `Mutex::lock` (libjvm.dylib) ← `G1CollectedHeap::attempt_allocation_slow` ← `G1CollectedHeap::attempt_allocation` ← `MemAllocator::mem_allocate_inside_tlab_slow` ← `MemAllocator::allocate` ← `CollectedHeap::array_allocate` ← `InstanceKlass::allocate_objArray` ← `OptoRuntime::new_array_C` ← `_new_array_Java` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a33d0) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a3188) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `compute()` ← `compute()` ← `compute()`                                           |
| 1.1% |  18.9ms |      27 | `pthread_mutex_lock_hook` (libasyncProfiler.dylib) ← `Mutex::lock` (libjvm.dylib) ← `G1CollectedHeap::attempt_allocation_slow` ← `G1CollectedHeap::attempt_allocation` ← `MemAllocator::mem_allocate_inside_tlab_slow` ← `MemAllocator::allocate` ← `CollectedHeap::array_allocate` ← `InstanceKlass::allocate_objArray` ← `OptoRuntime::new_array_C` ← `_new_array_Java` ← `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `compute()` ← `compute()` ← `compute()` ← `compute()` ← `compute()`                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 1.1% |  18.3ms |      25 | `pthread_mutex_lock_hook` (libasyncProfiler.dylib) ← `Mutex::lock` (libjvm.dylib) ← `G1CollectedHeap::attempt_allocation_slow` ← `G1CollectedHeap::attempt_allocation` ← `MemAllocator::mem_allocate_inside_tlab_slow` ← `MemAllocator::allocate` ← `CollectedHeap::array_allocate` ← `InstanceKlass::allocate_objArray` ← `OptoRuntime::new_array_C` ← `_new_array_Java` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a33d0) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a3188) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `compute()`                                                                       |
| 1.0% |  17.3ms |       6 | `pthread_mutex_lock_hook` (libasyncProfiler.dylib) ← `Mutex::lock` (libjvm.dylib) ← `G1CollectedHeap::attempt_allocation_slow` ← `G1CollectedHeap::mem_allocate` ← `MemAllocator::allocate` ← `CollectedHeap::array_allocate` ← `InstanceKlass::allocate_objArray` ← `OptoRuntime::new_array_C` ← `_new_array_Java` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a33d0) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f8011a3188) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `compute()` ← `compute()` ← `compute()` ← `compute()`                                                                                   |

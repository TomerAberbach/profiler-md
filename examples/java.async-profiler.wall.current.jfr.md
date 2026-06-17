# Sampling profile

Collected 4,878 samples.

| Category |     % | Samples |
| -------- | ----: | ------: |
| ours     | 98.7% |   4,816 |
| stdlib   |  1.3% |      62 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                                                                            | Location                                                 |
| ----: | ------: | ----------------------------------------------------------------------------------- | -------------------------------------------------------- |
| 50.1% |   2,446 | `__psynch_cvwait()`                                                                 | libsystem_kernel.dylib                                   |
| 26.3% |   1,282 | `semaphore_wait_trap()`                                                             | libsystem_kernel.dylib                                   |
|  5.1% |     250 | `accumulate(Double[], double[])`                                                    | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|  4.3% |     211 | `distance(Double[], Double[])`                                                      | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  2.5% |     122 | `mach_msg2_trap()`                                                                  | libsystem_kernel.dylib                                   |
|  2.5% |     122 | `__ulock_wait()`                                                                    | libsystem_kernel.dylib                                   |
|  1.9% |      91 | `findNearestCentroid()`                                                             | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  1.7% |      85 | `vectorSum()`                                                                       | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|  0.7% |      34 | `computeIfAbsent(Object, Function)`                                                 | java.util.HashMap                                        |
|  0.6% |      31 | `collectClusters(int[])`                                                            | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  0.6% |      29 | `elementData(int)`                                                                  | java.util.ArrayList                                      |
|  0.2% |      10 | `zero_blocks()`                                                                     | `<unknown>`                                              |
|  0.2% |       8 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`                           | java.util.concurrent.ForkJoinPool                        |
|  0.2% |       8 | `__psynch_cvsignal()`                                                               | libsystem_kernel.dylib                                   |
|  0.1% |       7 | `add(Object, Object[], int)`                                                        | java.util.ArrayList                                      |
|  0.1% |       7 | `__psynch_mutexwait()`                                                              | libsystem_kernel.dylib                                   |
|  0.1% |       6 | `hash(Object)`                                                                      | java.util.HashMap                                        |
|  0.1% |       6 | `checkIndex(int, int)`                                                              | java.util.Objects                                        |
|  0.1% |       5 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region()` | libjvm.dylib                                             |
|  0.1% |       4 | `grow(int)`                                                                         | java.util.ArrayList                                      |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|     % | Samples | Location                                                    |
| ----: | ------: | ----------------------------------------------------------- |
| 93.2% |     233 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:412 |
|  6.8% |      17 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:411 |

##### `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|     % | Samples | Location                                                     |
| ----: | ------: | ------------------------------------------------------------ |
| 56.9% |     120 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:248 |
| 40.8% |      86 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:249 |
|  2.4% |       5 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:250 |

##### `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|     % | Samples | Location                                                     |
| ----: | ------: | ------------------------------------------------------------ |
| 56.0% |      51 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:231 |
| 26.4% |      24 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:230 |
|  9.9% |       9 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:229 |
|  5.5% |       5 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:226 |
|  2.2% |       2 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:225 |

##### `vectorSum()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|     % | Samples | Location                                                    |
| ----: | ------: | ----------------------------------------------------------- |
| 85.9% |      73 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:403 |
| 14.1% |      12 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:402 |

##### `computeIfAbsent(Object, Function)` (java.util.HashMap)

|     % | Samples | Location               |
| ----: | ------: | ---------------------- |
| 35.3% |      12 | java.util.HashMap:1213 |
| 23.5% |       8 | java.util.HashMap:1197 |
| 17.6% |       6 | java.util.HashMap:1204 |
|  8.8% |       3 | java.util.HashMap:1207 |
|  8.8% |       3 | java.util.HashMap:1219 |

##### `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|     % | Samples | Location                                                     |
| ----: | ------: | ------------------------------------------------------------ |
| 32.3% |      10 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:213 |
| 25.8% |       8 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215 |
| 16.1% |       5 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:214 |
| 12.9% |       4 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:211 |
| 12.9% |       4 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:212 |

##### `elementData(int)` (java.util.ArrayList)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |      29 | java.util.ArrayList:411 |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (java.util.concurrent.ForkJoinPool)

|     % | Samples | Location                               |
| ----: | ------: | -------------------------------------- |
| 37.5% |       3 | java.util.concurrent.ForkJoinPool:2053 |
| 25.0% |       2 | java.util.concurrent.ForkJoinPool:2057 |
| 12.5% |       1 | java.util.concurrent.ForkJoinPool:2051 |
| 12.5% |       1 | java.util.concurrent.ForkJoinPool:2059 |
| 12.5% |       1 | java.util.concurrent.ForkJoinPool:2041 |

##### `add(Object, Object[], int)` (java.util.ArrayList)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       7 | java.util.ArrayList:482 |

##### `hash(Object)` (java.util.HashMap)

|      % | Samples | Location              |
| -----: | ------: | --------------------- |
| 100.0% |       6 | java.util.HashMap:338 |

##### `checkIndex(int, int)` (java.util.Objects)

|      % | Samples | Location              |
| -----: | ------: | --------------------- |
| 100.0% |       6 | java.util.Objects:385 |

##### `grow(int)` (java.util.ArrayList)

|     % | Samples | Location                |
| ----: | ------: | ----------------------- |
| 50.0% |       2 | java.util.ArrayList:232 |
| 50.0% |       2 | java.util.ArrayList:239 |

#### Callers

Callers ranked by contribution to each function's self samples. Caller attribution may be imprecise due to inlining.

##### `__psynch_cvwait()` (libsystem_kernel.dylib)

|     % | Samples | Caller                    | Location               |
| ----: | ------: | ------------------------- | ---------------------- |
| 54.9% |   1,344 | `PlatformMonitor::wait()` | libjvm.dylib           |
| 35.1% |     859 | `Parker::park()`          | libjvm.dylib           |
|  5.0% |     122 | `PlatformEvent::park()`   | libjvm.dylib           |
|  4.9% |     121 | `Profiler::timerLoop()`   | libasyncProfiler.dylib |

##### `semaphore_wait_trap()` (libsystem_kernel.dylib)

|     % | Samples | Caller                             | Location     |
| ----: | ------: | ---------------------------------- | ------------ |
| 89.5% |   1,147 | `WorkerThread::run()`              | libjvm.dylib |
|  9.5% |     122 | `os::signal_wait()`                | libjvm.dylib |
|  0.7% |       9 | `GenericWaitBarrier::Cell::wait()` | libjvm.dylib |
|  0.3% |       4 | `WorkerThreads::run_task()`        | libjvm.dylib |

##### `accumulate(Double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % | Samples | Caller        | Location                                                |
| -----: | ------: | ------------- | ------------------------------------------------------- |
| 100.0% |     250 | `vectorSum()` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |

##### `distance(Double[], Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Caller                  | Location                                                 |
| -----: | ------: | ----------------------- | -------------------------------------------------------- |
| 100.0% |     211 | `findNearestCentroid()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `mach_msg2_trap()` (libsystem_kernel.dylib)

|      % | Samples | Caller                 | Location               |
| -----: | ------: | ---------------------- | ---------------------- |
| 100.0% |     122 | `mach_msg_overwrite()` | libsystem_kernel.dylib |

##### `__ulock_wait()` (libsystem_kernel.dylib)

|      % | Samples | Caller                      | Location     |
| -----: | ------: | --------------------------- | ------------ |
| 100.0% |     122 | `CallJavaMainInNewThread()` | libjli.dylib |

##### `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Caller              | Location                                                 |
| -----: | ------: | ------------------- | -------------------------------------------------------- |
| 100.0% |      91 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `vectorSum()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % | Samples | Caller              | Location                                                |
| -----: | ------: | ------------------- | ------------------------------------------------------- |
| 100.0% |      85 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |

##### `computeIfAbsent(Object, Function)` (java.util.HashMap)

|      % | Samples | Caller                   | Location                                                 |
| -----: | ------: | ------------------------ | -------------------------------------------------------- |
| 100.0% |      34 | `collectClusters(int[])` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % | Samples | Caller              | Location                                                 |
| -----: | ------: | ------------------- | -------------------------------------------------------- |
| 100.0% |      31 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `elementData(int)` (java.util.ArrayList)

|      % | Samples | Caller     | Location            |
| -----: | ------: | ---------- | ------------------- |
| 100.0% |      29 | `get(int)` | java.util.ArrayList |

##### `zero_blocks()` (`<unknown>`)

|     % | Samples | Caller                              | Location            |
| ----: | ------: | ----------------------------------- | ------------------- |
| 50.0% |       5 | `grow(int)`                         | java.util.ArrayList |
| 50.0% |       5 | `merge(Object, Object, BiFunction)` | java.util.HashMap   |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (java.util.concurrent.ForkJoinPool)

|      % | Samples | Caller                 | Location                          |
| -----: | ------: | ---------------------- | --------------------------------- |
| 100.0% |       8 | `awaitDone(int, long)` | java.util.concurrent.ForkJoinTask |

##### `__psynch_cvsignal()` (libsystem_kernel.dylib)

|      % | Samples | Caller            | Location     |
| -----: | ------: | ----------------- | ------------ |
| 100.0% |       8 | `Unsafe_Unpark()` | libjvm.dylib |

##### `add(Object, Object[], int)` (java.util.ArrayList)

|      % | Samples | Caller        | Location            |
| -----: | ------: | ------------- | ------------------- |
| 100.0% |       7 | `add(Object)` | java.util.ArrayList |

##### `__psynch_mutexwait()` (libsystem_kernel.dylib)

|      % | Samples | Caller                                | Location                |
| -----: | ------: | ------------------------------------- | ----------------------- |
| 100.0% |       7 | `_pthread_mutex_firstfit_lock_slow()` | libsystem_pthread.dylib |

##### `hash(Object)` (java.util.HashMap)

|      % | Samples | Caller                              | Location          |
| -----: | ------: | ----------------------------------- | ----------------- |
| 100.0% |       6 | `computeIfAbsent(Object, Function)` | java.util.HashMap |

##### `checkIndex(int, int)` (java.util.Objects)

|      % | Samples | Caller     | Location            |
| -----: | ------: | ---------- | ------------------- |
| 100.0% |       6 | `get(int)` | java.util.ArrayList |

##### `G1FullGCResetMetadataTask::G1ResetMetadataClosure::scrub_skip_compacting_region()` (libjvm.dylib)

|      % | Samples | Caller                                                                | Location     |
| -----: | ------: | --------------------------------------------------------------------- | ------------ |
| 100.0% |       5 | `G1FullGCResetMetadataTask::G1ResetMetadataClosure::do_heap_region()` | libjvm.dylib |

##### `grow(int)` (java.util.ArrayList)

|      % | Samples | Caller   | Location            |
| -----: | ------: | -------- | ------------------- |
| 100.0% |       4 | `grow()` | java.util.ArrayList |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                             | Location                                             |
| ----: | ------: | ---------------------------------------------------- | ---------------------------------------------------- |
| 56.7% |   2,765 | `_pthread_start()`                                   | libsystem_pthread.dylib                              |
| 56.7% |   2,765 | `thread_start()`                                     | libsystem_pthread.dylib                              |
| 54.2% |   2,642 | `Thread::call_run()`                                 | libjvm.dylib                                         |
| 54.2% |   2,642 | `thread_native_entry()`                              | libjvm.dylib                                         |
| 50.1% |   2,446 | `__psynch_cvwait()`                                  | libsystem_kernel.dylib                               |
| 30.8% |   1,500 | `runWorker(ForkJoinPool$WorkQueue)`                  | java.util.concurrent.ForkJoinPool                    |
| 30.8% |   1,500 | `run()`                                              | java.util.concurrent.ForkJoinWorkerThread            |
| 27.6% |   1,346 | `PlatformMonitor::wait()`                            | libjvm.dylib                                         |
| 26.3% |   1,282 | `semaphore_wait_trap()`                              | libsystem_kernel.dylib                               |
| 23.8% |   1,161 | `awaitDone(int, long)`                               | java.util.concurrent.ForkJoinTask                    |
| 23.7% |   1,157 | `WorkerThread::run()`                                | libjvm.dylib                                         |
| 22.1% |   1,079 | `doExec()`                                           | java.util.concurrent.ForkJoinTask                    |
| 22.1% |   1,079 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | java.util.concurrent.ForkJoinPool$WorkQueue          |
| 22.1% |   1,079 | `scan(ForkJoinPool$WorkQueue, int, int)`             | java.util.concurrent.ForkJoinPool                    |
| 22.1% |   1,076 | `compute()`                                          | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask |
| 22.1% |   1,076 | `exec()`                                             | java.util.concurrent.RecursiveTask                   |
| 21.5% |   1,051 | `join()`                                             | java.util.concurrent.ForkJoinTask                    |
| 19.8% |     966 | `Monitor::wait_without_safepoint_check()`            | libjvm.dylib                                         |
| 19.5% |     951 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | java.util.concurrent.ForkJoinPool$WorkQueue          |
| 17.9% |     875 | `JavaThread::thread_main_inner()`                    | libjvm.dylib                                         |

#### Callees

Callees ranked by contribution to each function's total samples. Callee attribution may be imprecise due to inlining.

##### `_pthread_start()` (libsystem_pthread.dylib)

|     % | Samples | Callee                  | Location     |
| ----: | ------: | ----------------------- | ------------ |
| 95.6% |   2,642 | `thread_native_entry()` | libjvm.dylib |
|  4.4% |     122 | `apple_main()`          | libjli.dylib |
|  0.0% |       1 | `ThreadJavaMain()`      | libjli.dylib |

##### `thread_start()` (libsystem_pthread.dylib)

|      % | Samples | Callee             | Location                |
| -----: | ------: | ------------------ | ----------------------- |
| 100.0% |   2,765 | `_pthread_start()` | libsystem_pthread.dylib |

##### `Thread::call_run()` (libjvm.dylib)

|     % | Samples | Callee                            | Location     |
| ----: | ------: | --------------------------------- | ------------ |
| 43.8% |   1,157 | `WorkerThread::run()`             | libjvm.dylib |
| 33.1% |     875 | `JavaThread::thread_main_inner()` | libjvm.dylib |
| 13.9% |     366 | `ConcurrentGCThread::run()`       | libjvm.dylib |
|  4.6% |     122 | `VMThread::run()`                 | libjvm.dylib |
|  4.6% |     122 | `WatcherThread::run()`            | libjvm.dylib |

##### `thread_native_entry()` (libjvm.dylib)

|      % | Samples | Callee               | Location     |
| -----: | ------: | -------------------- | ------------ |
| 100.0% |   2,642 | `Thread::call_run()` | libjvm.dylib |

##### `runWorker(ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool)

|     % | Samples | Callee                                   | Location                          |
| ----: | ------: | ---------------------------------------- | --------------------------------- |
| 71.9% |   1,079 | `scan(ForkJoinPool$WorkQueue, int, int)` | java.util.concurrent.ForkJoinPool |
| 28.0% |     420 | `awaitWork(ForkJoinPool$WorkQueue)`      | java.util.concurrent.ForkJoinPool |

##### `run()` (java.util.concurrent.ForkJoinWorkerThread)

|      % | Samples | Callee                              | Location                          |
| -----: | ------: | ----------------------------------- | --------------------------------- |
| 100.0% |   1,500 | `runWorker(ForkJoinPool$WorkQueue)` | java.util.concurrent.ForkJoinPool |

##### `PlatformMonitor::wait()` (libjvm.dylib)

|     % | Samples | Callee                 | Location                |
| ----: | ------: | ---------------------- | ----------------------- |
| 99.9% |   1,344 | `__psynch_cvwait()`    | libsystem_kernel.dylib  |
|  0.1% |       2 | `_pthread_cond_wait()` | libsystem_pthread.dylib |

##### `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask)

|     % | Samples | Callee                                                    | Location                                    |
| ----: | ------: | --------------------------------------------------------- | ------------------------------------------- |
| 81.9% |     951 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | java.util.concurrent.ForkJoinPool$WorkQueue |
| 27.4% |     318 | `park()`                                                  | java.util.concurrent.locks.LockSupport      |
| 19.7% |     229 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | java.util.concurrent.ForkJoinPool           |

##### `WorkerThread::run()` (libjvm.dylib)

|     % | Samples | Callee                              | Location               |
| ----: | ------: | ----------------------------------- | ---------------------- |
| 99.1% |   1,147 | `semaphore_wait_trap()`             | libsystem_kernel.dylib |
|  0.4% |       5 | `G1FullGCResetMetadataTask::work()` | libjvm.dylib           |
|  0.3% |       3 | `G1FullGCMarkTask::work()`          | libjvm.dylib           |
|  0.1% |       1 | `G1FullGCPrepareTask::work()`       | libjvm.dylib           |
|  0.1% |       1 | `G1FullGCAdjustTask::work()`        | libjvm.dylib           |

##### `doExec()` (java.util.concurrent.ForkJoinTask)

|     % | Samples | Callee      | Location                                          |
| ----: | ------: | ----------- | ------------------------------------------------- |
| 99.7% |   1,076 | `exec()`    | java.util.concurrent.RecursiveTask                |
| 10.1% |     109 | `exec()`    | java.util.concurrent.ForkJoinTask$AdaptedCallable |
|  0.6% |       7 | `setDone()` | java.util.concurrent.ForkJoinTask                 |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue)

|      % | Samples | Callee     | Location                          |
| -----: | ------: | ---------- | --------------------------------- |
| 100.0% |   1,079 | `doExec()` | java.util.concurrent.ForkJoinTask |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool)

|      % | Samples | Callee                                               | Location                                    |
| -----: | ------: | ---------------------------------------------------- | ------------------------------------------- |
| 100.0% |   1,079 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | java.util.concurrent.ForkJoinPool$WorkQueue |

##### `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)

|     % | Samples | Callee                           | Location                                                 |
| ----: | ------: | -------------------------------- | -------------------------------------------------------- |
| 97.7% |   1,051 | `join()`                         | java.util.concurrent.ForkJoinTask                        |
| 39.5% |     425 | `computeDirectly()`              | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| 32.6% |     351 | `computeDirectly()`              | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
| 15.9% |     171 | `computeDirectly()`              | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
|  6.5% |      70 | `combineResults(Object, Object)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `exec()` (java.util.concurrent.RecursiveTask)

|      % | Samples | Callee      | Location                                             |
| -----: | ------: | ----------- | ---------------------------------------------------- |
| 100.0% |   1,076 | `compute()` | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask |

##### `join()` (java.util.concurrent.ForkJoinTask)

|      % | Samples | Callee                 | Location                          |
| -----: | ------: | ---------------------- | --------------------------------- |
| 100.0% |   1,051 | `awaitDone(int, long)` | java.util.concurrent.ForkJoinTask |

##### `Monitor::wait_without_safepoint_check()` (libjvm.dylib)

|      % | Samples | Callee                    | Location     |
| -----: | ------: | ------------------------- | ------------ |
| 100.0% |     966 | `PlatformMonitor::wait()` | libjvm.dylib |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue)

|      % | Samples | Callee     | Location                          |
| -----: | ------: | ---------- | --------------------------------- |
| 100.0% |     951 | `doExec()` | java.util.concurrent.ForkJoinTask |

##### `JavaThread::thread_main_inner()` (libjvm.dylib)

|     % | Samples | Callee                                            | Location     |
| ----: | ------: | ------------------------------------------------- | ------------ |
| 31.1% |     272 | `CompileBroker::compiler_thread_loop()`           | libjvm.dylib |
| 13.9% |     122 | `signal_thread_entry()`                           | libjvm.dylib |
| 13.9% |     122 | `ServiceThread::service_thread_entry()`           | libjvm.dylib |
| 13.8% |     121 | `NotificationThread::notification_thread_entry()` | libjvm.dylib |
| 13.8% |     121 | `JvmtiAgentThread::start_function_wrapper()`      | libjvm.dylib |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

|     % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 23.5% |   1,147 | `semaphore_wait_trap()` (libsystem_kernel.dylib) ← `WorkerThread::run()` (libjvm.dylib) ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  8.3% |     404 | `__psynch_cvwait()` (libsystem_kernel.dylib) ← `Parker::park()` (libjvm.dylib) ← `Unsafe_Park()` ← `park(boolean, long)` (jdk.internal.misc.Unsafe) ← `park()` (java.util.concurrent.locks.LockSupport) ← `awaitWork(ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (java.util.concurrent.ForkJoinWorkerThread)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  5.1% |     251 | `__psynch_cvwait()` (libsystem_kernel.dylib) ← `PlatformMonitor::wait()` (libjvm.dylib) ← `Monitor::wait()` ← `CompileQueue::get()` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  2.5% |     122 | `mach_msg2_trap()` (libsystem_kernel.dylib) ← `mach_msg_overwrite()` ← `mach_msg()` ← `__CFRunLoopServiceMachPort()` (CoreFoundation) ← `__CFRunLoopRun()` ← `CFRunLoopRunSpecific()` ← `CreateExecutionEnvironment()` (libjli.dylib) ← `JLI_Launch()` ← `main()` (java)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  2.5% |     122 | `__psynch_cvwait()` (libsystem_kernel.dylib) ← `PlatformMonitor::wait()` (libjvm.dylib) ← `Monitor::wait_without_safepoint_check()` ← `G1ConcurrentMarkThread::run_service()` ← `ConcurrentGCThread::run()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  2.5% |     122 | `__psynch_cvwait()` (libsystem_kernel.dylib) ← `PlatformEvent::park()` (libjvm.dylib) ← `ObjectMonitor::wait()` ← `ObjectSynchronizer::wait()` ← `JVM_MonitorWait()` ← `wait0(long)` (java.lang.Object) ← `wait(long)` ← `wait()` ← `await()` (java.lang.ref.NativeReferenceQueue) ← `remove0()` (java.lang.ref.ReferenceQueue) ← `remove()` (java.lang.ref.NativeReferenceQueue) ← `run()` (java.lang.ref.Finalizer$FinalizerThread)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  2.5% |     122 | `__psynch_cvwait()` (libsystem_kernel.dylib) ← `PlatformMonitor::wait()` (libjvm.dylib) ← `Monitor::wait()` ← `JVM_WaitForReferencePendingList()` ← `waitForReferencePendingList()` (java.lang.ref.Reference) ← `processPendingReferences()` ← `run()` (java.lang.ref.Reference$ReferenceHandler)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  2.5% |     122 | `__ulock_wait()` (libsystem_kernel.dylib) ← `CallJavaMainInNewThread()` (libjli.dylib) ← `ContinueInNewThread()` ← `JLI_Launch()` ← `main()` (java) ← `apple_main()` (libjli.dylib) ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  2.5% |     122 | `__psynch_cvwait()` (libsystem_kernel.dylib) ← `PlatformMonitor::wait()` (libjvm.dylib) ← `Monitor::wait_without_safepoint_check()` ← `WatcherThread::sleep()` ← `WatcherThread::run()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  2.5% |     122 | `semaphore_wait_trap()` (libsystem_kernel.dylib) ← `os::signal_wait()` (libjvm.dylib) ← `signal_thread_entry()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  2.5% |     122 | `__psynch_cvwait()` (libsystem_kernel.dylib) ← `PlatformMonitor::wait()` (libjvm.dylib) ← `Monitor::wait_without_safepoint_check()` ← `ServiceThread::service_thread_entry()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  2.5% |     121 | `__psynch_cvwait()` (libsystem_kernel.dylib) ← `PlatformMonitor::wait()` (libjvm.dylib) ← `Monitor::wait_without_safepoint_check()` ← `NotificationThread::notification_thread_entry()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  2.5% |     121 | `__psynch_cvwait()` (libsystem_kernel.dylib) ← `Profiler::timerLoop()` (libasyncProfiler.dylib) ← `JvmtiAgentThread::start_function_wrapper()` (libjvm.dylib) ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  2.5% |     121 | `__psynch_cvwait()` (libsystem_kernel.dylib) ← `PlatformMonitor::wait()` (libjvm.dylib) ← `Monitor::wait_without_safepoint_check()` ← `G1ServiceThread::wait_for_task()` ← `G1ServiceThread::run_service()` ← `ConcurrentGCThread::run()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  2.5% |     121 | `__psynch_cvwait()` (libsystem_kernel.dylib) ← `Parker::park()` (libjvm.dylib) ← `Unsafe_Park()` ← `park(boolean, long)` (jdk.internal.misc.Unsafe) ← `parkNanos(Object, long)` (java.util.concurrent.locks.LockSupport) ← `await(long, TimeUnit)` (java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject) ← `await(long)` (java.lang.ref.ReferenceQueue) ← `remove0(long)` ← `remove(long)` ← `run()` (jdk.internal.ref.CleanerImpl) ← `runWith(Object, Runnable)` (java.lang.Thread) ← `run()` ← `run()` (jdk.internal.misc.InnocuousThread)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  2.5% |     121 | `__psynch_cvwait()` (libsystem_kernel.dylib) ← `PlatformMonitor::wait()` (libjvm.dylib) ← `Monitor::wait_without_safepoint_check()` ← `G1PrimaryConcurrentRefineThread::wait_for_completed_buffers()` ← `G1ConcurrentRefineThread::run_service()` ← `ConcurrentGCThread::run()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  2.4% |     118 | `__psynch_cvwait()` (libsystem_kernel.dylib) ← `PlatformMonitor::wait()` (libjvm.dylib) ← `Monitor::wait_without_safepoint_check()` ← `VMThread::wait_for_operation()` ← `VMThread::run()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  2.4% |     117 | `__psynch_cvwait()` (libsystem_kernel.dylib) ← `PlatformMonitor::wait()` (libjvm.dylib) ← `Monitor::wait_without_safepoint_check()` ← `MonitorDeflationThread::monitor_deflation_thread_entry()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry()` ← `_pthread_start()` (libsystem_pthread.dylib) ← `thread_start()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  2.3% |     110 | `__psynch_cvwait()` (libsystem_kernel.dylib) ← `Parker::park()` (libjvm.dylib) ← `Unsafe_Park()` ← `park(boolean, long)` (jdk.internal.misc.Unsafe) ← `park()` (java.util.concurrent.locks.LockSupport) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `get()` ← `run(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `$anonfun$1(int)` (org.renaissance.jdk.concurrent.FjKmeans) ← `$anonfun$adapted$1(Object)` ← `apply(Object)` (org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000a80117ae68) ← `map(Function1)` (scala.collection.immutable.Range) ← `run(BenchmarkContext)` (org.renaissance.jdk.concurrent.FjKmeans) ← `executeOperation(int)` (org.renaissance.harness.ExecutionDriver) ← `executeBenchmark()` ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (org.renaissance.harness.RenaissanceSuite$) ← `applyVoid(Object)` (org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a80111efe0) ← `apply(Object)` (scala.runtime.function.JProcedure1) ← `apply(Object)` ← `foreach(Function1)` (scala.collection.immutable.List) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (org.renaissance.harness.RenaissanceSuite$) ← `main(String[])` ← `main(String[])` (org.renaissance.harness.RenaissanceSuite) ← `invokeStatic(Object, Object)` (java.lang.invoke.LambdaForm$DMH.0x000000a801004800) ← `invoke(Object, Object, Object)` (java.lang.invoke.LambdaForm$MH.0x000000a801009800) ← `invokeExact_MT(Object, Object, Object, Object)` (java.lang.invoke.Invokers$Holder) ← `invokeImpl(Object, Object[])` (jdk.internal.reflect.DirectMethodHandleAccessor) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (java.lang.reflect.Method) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (org.renaissance.core.Launcher) ← `launchHarnessClass(String, String[])` ← `main(String[])` |
|  1.6% |      77 | `__psynch_cvwait()` (libsystem_kernel.dylib) ← `Parker::park()` (libjvm.dylib) ← `Unsafe_Park()` ← `park(boolean, long)` (jdk.internal.misc.Unsafe) ← `park()` (java.util.concurrent.locks.LockSupport) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (java.util.concurrent.ForkJoinWorkerThread)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
